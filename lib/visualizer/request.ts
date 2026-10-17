// Exterior paint visualizer: the estimate request (owner brief 2026-10-16).
// No imports on purpose, so `node --test tests/` can load it directly.
//
// PRODUCTION destination: the site's existing lead pipeline, POST /api/leads
// with service "visualizer". This is the integration InsightPaint already
// reads. The lead is stored in the `leads` table, the office email goes out
// from the browser (lib/lead-notify.ts), and the InsightPaint ERP's missed-lead
// cron pulls /api/leads/unemailed if that email never goes out. No InsightPaint
// key is used in the browser, and none is needed: the ERP pulls from this site.
//
// Delivery modes:
//  - "live": POST /api/leads. Only on the production domain.
//  - "test": POST /api/visualizer/test-inbox, a separate endpoint that exists
//            only outside Vercel production. It applies the same answer
//            allow-list as /api/leads and keeps the request in memory, with
//            no database write, email, SMS or ERP alert. Every test request is
//            marked testRequest = "TEST".
// Override with NEXT_PUBLIC_VISUALIZER_DELIVERY=live|test.

export type DeliveryMode = "live" | "test"

const PRODUCTION_HOSTS = new Set(["houstonsuperiorpainting.com", "www.houstonsuperiorpainting.com"])

export function resolveDeliveryMode(envValue: string | undefined, hostname: string): DeliveryMode {
  if (envValue === "live" || envValue === "test") return envValue
  return PRODUCTION_HOSTS.has(hostname) ? "live" : "test"
}

export const DELIVERY_ENDPOINT: Record<DeliveryMode, string> = {
  live: "/api/leads",
  test: "/api/visualizer/test-inbox",
}

export type SurfaceChoice = {
  /** Surface key, e.g. "body". */
  key: string
  /** Human label, e.g. "Body / siding". */
  label: string
  /** Full color label (provider, name, code), or "" when no color was chosen. */
  color: string
}

export type PropertySource =
  | { kind: "upload" }
  | { kind: "street_view"; pano: string; heading: number; pitch: number; fov: number; date: string | null }

export type VisualizerRequestInput = {
  name: string
  phone: string
  email: string
  address: string
  notes: string
  /** Surfaces the customer wants painted (keys). */
  paintSurfaces: string[]
  surfaces: SurfaceChoice[]
  /** Saved combinations, already described as text. */
  savedCombos: string[]
  source: PropertySource
  /** Required: consent to share the details and the photo to answer the request. */
  consent: boolean
  /** Optional: include the original photo and the preview. */
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
  if (!email) errors.email = "Please enter your email address."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address."
  const address = input.address.trim()
  if (address.length < 5) errors.address = "Please enter the project address."
  else if (address.length > 300) errors.address = "Please shorten the address."
  if (input.paintSurfaces.length === 0) errors.paintSurfaces = "Choose at least one surface you want painted."
  if (!input.consent) errors.consent = "Please agree so we can respond to your request."
  return errors
}

/** The answers stored with the lead. Keys must match LEAD_FORMS.visualizer in lib/lead-forms.ts. */
export function buildAnswers(input: VisualizerRequestInput, photosAttached: number, mode: DeliveryMode = "live") {
  const byKey = new Map(input.surfaces.map((s) => [s.key, s]))
  const colorOf = (key: string) => byKey.get(key)?.color || ""
  const src = input.source
  const answers: Record<string, string> = {
    projectType: "Exterior Painting",
    source: "Exterior paint visualizer",
    propertyPhoto:
      src.kind === "street_view"
        ? `Google Street View pano ${src.pano}, heading ${src.heading}, pitch ${src.pitch}, fov ${src.fov}${src.date ? `, imagery ${src.date}` : ""}`
        : "Customer upload",
    surfaces: input.paintSurfaces.map((k) => byKey.get(k)?.label ?? k).join(", "),
    bodyColor: colorOf("body"),
    trimColor: colorOf("trim"),
    doorColor: colorOf("door"),
    shuttersColor: colorOf("shutters"),
    savedCombos: input.savedCombos.join(" | "),
    photosShared: input.sharePhotos ? (photosAttached ? `Yes (${photosAttached} images)` : "Yes, but no images were attached") : "No",
    description: input.notes.trim(),
    testRequest: mode === "test" || /^test\b/i.test(input.name.trim()) ? "TEST" : "",
  }
  // /api/leads caps each answer at 200 characters.
  return Object.fromEntries(
    Object.entries(answers)
      .filter(([, v]) => v)
      .map(([k, v]) => [k, v.slice(0, 200)]),
  )
}

export type RequestPhoto = { blob: Blob; filename: string }

/** FormData for POST /api/leads (or the test inbox). Photos only with consent. */
export function buildLeadFormData(
  input: VisualizerRequestInput,
  photos: RequestPhoto[],
  attribution: Record<string, unknown> = {},
  mode: DeliveryMode = "live",
): FormData {
  const attached = input.sharePhotos ? photos : []
  const fd = new FormData()
  fd.set("service", "visualizer")
  fd.set("name", input.name.trim())
  fd.set("phone", input.phone)
  fd.set("email", input.email.trim())
  fd.set("address", input.address.trim())
  fd.set("smsConsent", String(input.smsConsent))
  fd.set("website", input.website)
  fd.set("answers", JSON.stringify(buildAnswers(input, attached.length, mode)))
  fd.set("attribution", JSON.stringify({ ...attribution, formLocation: "paint_visualizer" }))
  for (const p of attached) fd.append("photos", p.blob, p.filename)
  return fd
}

export type SubmitResult =
  | { ok: true; mode: DeliveryMode; publicToken: string | null; photoCount: number; received?: unknown }
  | { ok: false; error: string; duplicate?: boolean }

type FetchLike = (url: string, init: { method: string; body: FormData }) => Promise<{ ok: boolean; json(): Promise<unknown> }>

/**
 * Sends one request at a time and never twice. A second call while the first
 * is in flight is refused. Once a request succeeds, every later call returns
 * that same result instead of creating another lead. A failed request can be
 * retried, and the caller keeps the customer's selections.
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
        const doFetch = opts.fetchImpl ?? (fetch as unknown as FetchLike)
        const res = await doFetch(DELIVERY_ENDPOINT[opts.mode], { method: "POST", body: form })
        let data: { ok?: boolean; publicToken?: string | null; photoCount?: number; error?: string; received?: unknown } = {}
        try {
          data = (await res.json()) as typeof data
        } catch {
          data = {}
        }
        if (!res.ok || !data.ok) {
          return { ok: false, error: data.error || "We couldn't send your request. Please try again or call us." }
        }
        done = { ok: true, mode: opts.mode, publicToken: data.publicToken ?? null, photoCount: data.photoCount ?? 0, received: data.received }
        return done
      } catch {
        return { ok: false, error: "We couldn't reach our server. Check your connection and try again, or call us." }
      } finally {
        inFlight = false
      }
    },
  }
}
