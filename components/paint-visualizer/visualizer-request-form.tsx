"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { CheckCircle2, Pencil, Phone } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEvent, trackLeadCreated } from "@/lib/analytics"
import { getAttribution } from "@/lib/attribution"
import { formatUsPhone, notifyOfficeOfLead } from "@/lib/lead-notify"
import {
  buildLeadFormData,
  createRequestSender,
  resolveDeliveryMode,
  validateRequest,
  type FieldErrors,
  type PropertySource,
  type RequestPhoto,
  type SubmitResult,
  type SurfaceChoice,
  type VisualizerRequestInput,
} from "@/lib/visualizer/request"

/**
 * Estimate request for the exterior visualizer: contact details, then a
 * PROJECT CARD (address, original + preview, colors and codes per surface,
 * contact details, explicit consent) that the customer reviews before sending.
 *
 * Live mode saves through the shared lead pipeline (see lib/visualizer/request.ts
 * for how that reaches InsightPaint). Test mode posts to the separate test
 * inbox, so nothing reaches the database, the office or a phone. The
 * confirmation never says an appointment exists, because none is created here.
 */
type Props = {
  surfaces: SurfaceChoice[]
  defaultPaintSurfaces: string[]
  defaultAddress: string
  source: PropertySource
  imageCredit: string | null
  photosAttachable: boolean
  savedCombos: string[]
  getImages: () => Promise<{ original: Blob | null; preview: Blob | null }>
  getPhotos: () => Promise<RequestPhoto[]>
}

export function VisualizerRequestForm({
  surfaces,
  defaultPaintSurfaces,
  defaultAddress,
  source,
  imageCredit,
  photosAttachable,
  savedCombos,
  getImages,
  getPhotos,
}: Props) {
  const mode = useMemo(
    () => resolveDeliveryMode(process.env.NEXT_PUBLIC_VISUALIZER_DELIVERY, typeof window === "undefined" ? "" : window.location.hostname),
    [],
  )
  const senderRef = useRef(createRequestSender({ mode }))

  const [phase, setPhase] = useState<"details" | "review">("details")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState(defaultAddress)
  const [notes, setNotes] = useState("")
  const [paintSurfaces, setPaintSurfaces] = useState<string[]>(defaultPaintSurfaces)
  const [consent, setConsent] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<Extract<SubmitResult, { ok: true }> | null>(null)
  const [thumbs, setThumbs] = useState<{ original: string | null; preview: string | null }>({ original: null, preview: null })
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (defaultAddress && !address) setAddress(defaultAddress)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultAddress])

  // Card images, released when they change or the form unmounts.
  useEffect(() => {
    if (phase !== "review") return
    let cancelled = false
    let urls: string[] = []
    void getImages().then(({ original, preview }) => {
      if (cancelled) return
      const o = original ? URL.createObjectURL(original) : null
      const p = preview ? URL.createObjectURL(preview) : null
      urls = [o, p].filter((u): u is string => !!u)
      setThumbs({ original: o, preview: p })
    })
    return () => {
      cancelled = true
      urls.forEach((u) => URL.revokeObjectURL(u))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  const input =
    "w-full rounded-lg border bg-background px-3 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  const border = (k: keyof FieldErrors) => (errors[k] ? "border-red-500" : "border-border")

  const data: VisualizerRequestInput = {
    name,
    phone,
    email,
    address,
    notes,
    paintSurfaces,
    surfaces,
    savedCombos,
    source,
    consent,
    sharePhotos: photosAttachable,
    smsConsent,
    website: hp,
  }

  function showErrors(errs: FieldErrors) {
    setErrors(errs)
    requestAnimationFrame(() => errorSummaryRef.current?.focus())
  }

  function toReview(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateRequest({ ...data, consent: true })
    if (Object.keys(errs).length) return showErrors(errs)
    setErrors({})
    setPhase("review")
  }

  async function submit() {
    if (submitting || result) return
    setSubmitError(null)
    const errs = validateRequest(data)
    if (Object.keys(errs).length) return showErrors(errs)
    setSubmitting(true)
    try {
      const photos = await getPhotos()
      const form = buildLeadFormData(data, photos, { ...getAttribution() }, mode)
      const res = await senderRef.current.send(form)
      if (!res.ok) {
        if (!res.duplicate) setSubmitError(res.error)
        return
      }
      setResult(res)
      if (res.mode === "live" && res.publicToken) {
        const token = res.publicToken
        const colorOf = (k: string) => surfaces.find((s) => s.key === k)?.color || undefined
        void notifyOfficeOfLead({
          publicToken: token,
          subject: "New Exterior Visualizer Estimate Request",
          name: name.trim(),
          phone,
          email: email.trim(),
          fields: {
            service_requested: "Exterior Painting",
            source: "Exterior paint visualizer",
            address: address.trim(),
            surfaces: paintSurfaces.map((k) => surfaces.find((s) => s.key === k)?.label ?? k).join(", "),
            body_color: colorOf("body"),
            trim_color: colorOf("trim"),
            door_color: colorOf("door"),
            shutters_color: colorOf("shutters"),
            saved_combinations: savedCombos.join(" | ") || undefined,
            photos: res.photoCount ? `${res.photoCount} attached (see lead record)` : "None attached",
            notes: notes.trim() || undefined,
            sms_consent: smsConsent ? "Yes" : "No",
          },
        })
        // No personal data in analytics.
        trackEvent("visualizer_estimate_submitted", { tool: "exterior", surfaces: paintSurfaces.join(","), source: source.kind })
        void trackLeadCreated({
          formName: "paint visualizer",
          eventId: token,
          gaParams: { service: "visualizer", form_location: "paint_visualizer", value: 1 },
        })
      }
    } catch {
      setSubmitError("Something went wrong preparing your request. Please try again, or call us.")
    } finally {
      setSubmitting(false)
    }
  }

  // ── Sent ──────────────────────────────────────────────────────────────────
  if (result) {
    return (
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6" role="status" aria-live="polite">
        {result.mode === "test" ? (
          <>
            <p className="font-semibold text-foreground">TEST request received by the test inbox.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Test mode: nothing was saved to the lead database and no one was notified. This is exactly what the test inbox received:
            </p>
            <pre className="mt-3 max-h-80 overflow-auto rounded-lg bg-muted p-3 text-xs text-foreground" data-testid="test-inbox-received">
              {JSON.stringify(result.received, null, 2)}
            </pre>
          </>
        ) : (
          <>
            <p className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              Thank you{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}. Your estimate request was received.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              A member of our team will contact you to discuss the project. This request does not book an appointment; we will arrange a visit with you.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{BUSINESS.paymentPolicy.sentence}</p>
          </>
        )}
        <a href={PHONE_HREF} data-contact-location="paint_visualizer_success" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground">
          <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}
        </a>
      </div>
    )
  }

  const errorList = Object.values(errors).filter(Boolean)
  const errorBox =
    errorList.length > 0 ? (
      <div ref={errorSummaryRef} tabIndex={-1} role="alert" className="mt-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 focus:outline-none">
        <p className="font-semibold">Please fix the following:</p>
        <ul className="mt-1 list-disc pl-5">
          {errorList.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    ) : null
  const testBanner =
    mode === "test" ? (
      <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
        Test mode: requests go to a separate test inbox. Nothing is saved to the lead database or sent to anyone.
      </p>
    ) : null

  // ── Project card ──────────────────────────────────────────────────────────
  if (phase === "review") {
    const chosen = surfaces.filter((s) => paintSurfaces.includes(s.key))
    return (
      <section className="rounded-2xl border border-border bg-card p-5 sm:p-6" aria-labelledby="pv-card-h" data-testid="project-card">
        <h2 id="pv-card-h" className="font-display text-2xl text-foreground">Your project</h2>
        {testBanner}
        {errorBox}

        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-foreground">Property</dt>
            <dd className="text-muted-foreground">{address}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Contact</dt>
            <dd className="text-muted-foreground">
              {name}
              <br />
              {phone}
              <br />
              {email}
            </dd>
          </div>
        </dl>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {(["original", "preview"] as const).map((k) => (
            <figure key={k} className="min-w-0">
              {thumbs[k] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={thumbs[k]!} alt={k === "original" ? "Your home before" : "Your home with the chosen colors"} className="aspect-[4/3] w-full rounded-lg border border-border object-cover" />
              ) : (
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground">
                  {k === "preview" ? "No preview yet" : "Loading…"}
                </div>
              )}
              <figcaption className="mt-1 text-xs text-muted-foreground">{k === "original" ? "Before" : "After (approximate)"}</figcaption>
            </figure>
          ))}
        </div>
        {imageCredit && <p className="mt-1 text-[11px] text-muted-foreground">{imageCredit}.</p>}

        <div className="mt-4">
          <p className="text-sm font-semibold text-foreground">Colors by surface</p>
          <ul className="mt-2 divide-y divide-border rounded-lg border border-border text-sm">
            {chosen.map((s) => (
              <li key={s.key} className="flex items-start justify-between gap-3 px-3 py-2">
                <span className="text-foreground">{s.label}</span>
                <span className="text-right text-muted-foreground">{s.color || "Color to be decided"}</span>
              </li>
            ))}
          </ul>
          {savedCombos.length > 0 && (
            <p className="mt-2 text-xs text-muted-foreground">Also sending your {savedCombos.length} saved combination{savedCombos.length === 1 ? "" : "s"}.</p>
          )}
          {notes.trim() && <p className="mt-2 text-sm text-muted-foreground">Notes: {notes}</p>}
        </div>

        <div className="mt-5 space-y-3">
          <label className="flex cursor-pointer items-start gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              name="consent"
              value="true"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 size-4 shrink-0"
              aria-invalid={!!errors.consent}
              aria-describedby="pv-consent-help"
            />
            <span>
              I agree to share this information{photosAttachable ? ", my photo and the color preview" : ""} with {BUSINESS.name} so they can respond to my
              estimate request, including by phone. See the{" "}
              <Link href="/privacy-policy" className="underline">privacy policy</Link>. <span aria-hidden="true">*</span>
            </span>
          </label>
          <p id="pv-consent-help" className="pl-6 text-xs text-muted-foreground">
            {photosAttachable
              ? "Photos are stored privately and only our team can see them. Camera location data is not sent."
              : "The Street View image is not attached; we'll open the same view from the address and camera angle on this card."}
          </p>
          <label className="flex cursor-pointer items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <input name="smsConsent" value="true" type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0" />
            <span>Text me about my estimate. Message rates may apply; reply STOP any time. (Optional)</span>
          </label>
        </div>

        {submitError && (
          <p className="mt-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {submitError} Your selections are still here.
          </p>
        )}

        <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row">
          <button type="button" onClick={() => setPhase("details")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Pencil className="h-4 w-4" aria-hidden="true" /> Edit details
          </button>
          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
          >
            {submitting ? "Sending your request…" : "Request My Free Estimate"}
          </button>
        </div>
      </section>
    )
  }

  // ── Details ───────────────────────────────────────────────────────────────
  return (
    <form onSubmit={toReview} noValidate className="rounded-2xl border border-border bg-card p-5 sm:p-6" aria-labelledby="pv-form-h">
      <h2 id="pv-form-h" className="font-display text-2xl text-foreground">Request your free written estimate</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Request a free written estimate. Your proposal will explain the scope, products, price, deposit and payment schedule before you decide.
      </p>
      {testBanner}
      {errorBox}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {(
          [
            ["name", "Name", "text", "name", name, setName],
            ["phone", "Phone", "tel", "tel", phone, (v: string) => setPhone(formatUsPhone(v))],
            ["email", "Email", "email", "email", email, setEmail],
            ["address", "Project address", "text", "street-address", address, setAddress],
          ] as const
        ).map(([k, label, type, ac, value, set]) => (
          <div key={k}>
            <label htmlFor={`pv-${k}`} className="mb-1 block text-sm font-medium text-foreground">
              {label} <span aria-hidden="true">*</span>
            </label>
            <input
              id={`pv-${k}`}
              name={k}
              type={type}
              inputMode={k === "phone" ? "tel" : undefined}
              autoComplete={ac}
              required
              value={value}
              onChange={(e) => set(e.target.value)}
              className={`${input} ${border(k)}`}
              aria-invalid={!!errors[k]}
              aria-describedby={errors[k] ? `pv-${k}-err` : undefined}
            />
            {errors[k] && <p id={`pv-${k}-err`} className="mt-1 text-sm text-red-600">{errors[k]}</p>}
          </div>
        ))}
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-medium text-foreground">Surfaces you want painted <span aria-hidden="true">*</span></legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {surfaces.map((s) => (
            <label key={s.key} className="flex min-h-11 cursor-pointer items-start gap-2 rounded-lg border border-border px-3 py-2 text-sm">
              <input
                type="checkbox"
                className="mt-0.5 size-4 shrink-0"
                checked={paintSurfaces.includes(s.key)}
                onChange={(e) => setPaintSurfaces((prev) => (e.target.checked ? [...prev, s.key] : prev.filter((k) => k !== s.key)))}
              />
              <span>
                <span className="block text-foreground">{s.label}</span>
                <span className="block text-xs text-muted-foreground">{s.color || "No color chosen"}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4">
        <label htmlFor="pv-notes" className="mb-1 block text-sm font-medium text-foreground">Anything else we should know? (optional)</label>
        <textarea name="notes" id="pv-notes" rows={3} maxLength={200} value={notes} onChange={(e) => setNotes(e.target.value)} className={`${input} border-border`} />
      </div>

      {/* Honeypot: hidden from people and assistive tech, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="pv-website">Website</label>
        <input name="website" id="pv-website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Review my project
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Prefer to talk? Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a>.
      </p>
    </form>
  )
}
