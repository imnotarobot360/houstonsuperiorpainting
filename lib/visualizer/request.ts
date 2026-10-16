// Exterior paint visualizer: the estimate request (owner brief 2026-10-16).
// No imports on purpose, so `node --test tests/` can load it directly.
//
// The request goes through the site's EXISTING lead pipeline, POST /api/leads
// with service "visualizer". That is the integration InsightPaint already reads:
// the lead is stored in the `leads` table, the office email is sent from the
// browser (lib/lead-notify.ts), and the InsightPaint ERP's missed-lead cron pulls
// /api/leads/unemailed if that email never goes out. No InsightPaint key is used
// in the browser, and none is needed: the ERP pulls from this site, not the
// other way round.
//
// Delivery modes:
//  - "live":    the request is saved and the office is notified.
//  - "dry-run": nothing is sent anywhere; the payload is returned so it can be
//               inspected. This is the default everywhere except the production
//               domain, because local development shares the production database
//               and an un-emailed test lead would trigger the ERP's missed-lead
//               text to the owner.
// Override with NEXT_PUBLIC_VISUALIZER_DELIVERY=live|dry-run.

export type DeliveryMode = "live" | "dry-run"

const PRODUCTION_HOSTS = new Set(["houstonsuperiorpainting.com", "www.houstonsuperiorpainting.com"])

export function resolveDeliveryMode(envValue: string | undefined, hostname: string): DeliveryMode {
  if (envValue === "live" || envValue === "dry-run") return envValue
  return PRODUCTION_HOSTS.has(hostname) ? "live" : "dry-run"
}

export type SurfaceChoice = {
  /** Surface key, e.g. "body". */
  key: string
  /** Human label, e.g. "Body / siding". */
  label: string
  /** Full color label (provider, name, code), or "" when no color was chosen. */
  color: string
}

export type VisualizerRequestInput = {
  name: string
  phone: string
  email: string
  address: string
  notes: string
  /** Surfaces the customer wants painted (keys). */
  paintSurfaces: string[]
  surfaces: SurfaceChoice[]
  /** Required: consent to share the contact details to answer the request. */
  consent: boolean
  /** Optional: consent to include the original photo and the preview. */
  sharePhotos: boolean
  smsConsent: boolean
  /** Honeypot field; people never see it. */
  website: string
}

export type FieldErrors = Partial<Record<"name" | "phone" | "email" | "address" | "paintSurfaces" | "consent", string>>

function digits(phone: string) {
  return phone.replace(/\D/g, "").replace(/^1(?=\d{10})/, "")
}

export function validateRequest(input: VisualizerRequestInput): FieldErrors {
  const errors: FieldErrors = {}
  if (input.name.trim().length < 2) errors.name = "Please enter your name."
  if (digits(input.phone).length !== 10) errors.phone = "Please enter a 10-digit phone number."
  const email = input.email.trim()
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address."
  if (input.address.trim().length > 300) errors.address = "Please shorten the address."
  if (input.paintSurfaces.length === 0) errors.paintSurfaces = "Choose at least one surface you want painted."
  if (!input.consent) errors.consent = "Please agree so we can respond to your request."
  return errors
}

/** The answers stored with the lead. Keys must match LEAD_FORMS.visualizer in lib/lead-forms.ts. */
export function buildAnswers(input: VisualizerRequestInput, photosAttached: number) {
  const byKey = new Map(input.surfaces.map((s) => [s.key, s]))
  const colorOf = (key: string) => {
    const s = byKey.get(key)
    return s?.color ? s.color : ""
  }
  const answers: Record<string, string> = {
    projectType: "Exterior Painting",
    source: "Exterior paint visualizer",
    surfaces: input.paintSurfaces.map((k) => byKey.get(k)?.label ?? k).join(", "),
    bodyColor: colorOf("body"),
    trimColor: colorOf("trim"),
    doorColor: colorOf("door"),
    shuttersColor: colorOf("shutters"),
    photosShared: input.sharePhotos ? (photosAttached ? `Yes (${photosAttached} images: original + preview)` : "Yes, but no images were attached") : "No",
    description: input.notes.trim().slice(0, 200),
  }
  return Object.fromEntries(Object.entries(answers).filter(([, v]) => v))
}

export type RequestPhoto = { blob: Blob; filename: string }

/** FormData for POST /api/leads. Photos are attached only with explicit consent. */
export function buildLeadFormData(
  input: VisualizerRequestInput,
  photos: RequestPhoto[],
  attribution: Record<string, unknown> = {},
): FormData {
  const attached = input.sharePhotos ? photos : []
  const fd = new FormData()
  fd.set("service", "visualizer")
  fd.set("name", input.name.trim())
  fd.set("phone", input.phone)
  if (input.email.trim()) fd.set("email", input.email.trim())
  if (input.address.trim()) fd.set("address", input.address.trim())
  fd.set("smsConsent", String(input.smsConsent))
  fd.set("website", input.website)
  fd.set("answers", JSON.stringify(buildAnswers(input, attached.length)))
  fd.set("attribution", JSON.stringify({ ...attribution, formLocation: "paint_visualizer" }))
  for (const p of attached) fd.append("photos", p.blob, p.filename)
  return fd
}

export type SubmitResult =
  | { ok: true; mode: "live"; publicToken: string | null; photoCount: number }
  | { ok: true; mode: "dry-run"; publicToken: null; preview: { fields: Record<string, string>; photos: string[] } }
  | { ok: false; error: string; duplicate?: boolean }

type FetchLike = (url: string, init: { method: string; body: FormData }) => Promise<{ ok: boolean; json(): Promise<unknown> }>

/**
 * Sends one request at a time and never twice: a second call while the first
 * is in flight is refused, and once a request succeeds every later call
 * returns that same result instead of creating another lead. A failed request
 * can be retried; the caller keeps the customer's selections.
 */
export function createRequestSender(opts: { mode: DeliveryMode; fetchImpl?: FetchLike }) {
  let inFlight = false
  let done: SubmitResult | null = null

  return {
    get busy() {
      return inFlight
    },
    async send(form: FormData): Promise<SubmitResult> {
      if (done) return done
      if (inFlight) return { ok: false, error: "Your request is already being sent.", duplicate: true }
      inFlight = true
      try {
        if (opts.mode === "dry-run") {
          const fields: Record<string, string> = {}
          const photos: string[] = []
          form.forEach((v, k) => {
            if (typeof v === "string") fields[k] = v
            else photos.push(`${(v as File).name || "image"} (${v.size} bytes)`)
          })
          done = { ok: true, mode: "dry-run", publicToken: null, preview: { fields, photos } }
          return done
        }
        const doFetch = opts.fetchImpl ?? (fetch as unknown as FetchLike)
        const res = await doFetch("/api/leads", { method: "POST", body: form })
        let data: { ok?: boolean; publicToken?: string | null; photoCount?: number; error?: string } = {}
        try {
          data = (await res.json()) as typeof data
        } catch {
          data = {}
        }
        if (!res.ok || !data.ok) {
          return { ok: false, error: data.error || "We couldn't send your request. Please try again or call us." }
        }
        done = { ok: true, mode: "live", publicToken: data.publicToken ?? null, photoCount: data.photoCount ?? 0 }
        return done
      } catch {
        return { ok: false, error: "We couldn't reach our server. Check your connection and try again, or call us." }
      } finally {
        inFlight = false
      }
    },
  }
}
