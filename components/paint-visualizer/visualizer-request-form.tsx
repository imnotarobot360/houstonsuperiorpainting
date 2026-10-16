"use client"

import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { CheckCircle2, Phone } from "lucide-react"
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
  type RequestPhoto,
  type SubmitResult,
  type SurfaceChoice,
  type VisualizerRequestInput,
} from "@/lib/visualizer/request"

/**
 * Estimate request for the exterior visualizer. Saves through the shared lead
 * pipeline (see lib/visualizer/request.ts for how that reaches InsightPaint).
 * Outside the production domain it runs in dry-run mode and sends nothing.
 *
 * The confirmation only says the request was received. It never says an
 * appointment exists, because none is created here.
 */
type Props = {
  surfaces: SurfaceChoice[]
  defaultPaintSurfaces: string[]
  hasPreview: boolean
  getPhotos: () => Promise<RequestPhoto[]>
}

export function VisualizerRequestForm({ surfaces, defaultPaintSurfaces, hasPreview, getPhotos }: Props) {
  const mode = useMemo(
    () => resolveDeliveryMode(process.env.NEXT_PUBLIC_VISUALIZER_DELIVERY, typeof window === "undefined" ? "" : window.location.hostname),
    [],
  )
  const senderRef = useRef(createRequestSender({ mode }))

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [notes, setNotes] = useState("")
  const [paintSurfaces, setPaintSurfaces] = useState<string[]>(defaultPaintSurfaces)
  const [consent, setConsent] = useState(false)
  const [sharePhotos, setSharePhotos] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<Extract<SubmitResult, { ok: true }> | null>(null)
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  const input =
    "w-full rounded-lg border bg-background px-3 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  const border = (k: keyof FieldErrors) => (errors[k] ? "border-red-500" : "border-border")
  const chosen = surfaces.filter((s) => s.color)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting || result) return
    setSubmitError(null)
    const data: VisualizerRequestInput = {
      name,
      phone,
      email,
      address,
      notes,
      paintSurfaces,
      surfaces,
      consent,
      sharePhotos,
      smsConsent,
      website: hp,
    }
    const errs = validateRequest(data)
    setErrors(errs)
    if (Object.keys(errs).length) {
      requestAnimationFrame(() => errorSummaryRef.current?.focus())
      return
    }

    setSubmitting(true)
    try {
      const photos = sharePhotos ? await getPhotos() : []
      const form = buildLeadFormData(data, photos, { ...getAttribution() })
      const res = await senderRef.current.send(form)
      if (!res.ok) {
        if (!res.duplicate) setSubmitError(res.error)
        return
      }
      setResult(res)
      if (res.mode === "live" && res.publicToken) {
        const token = res.publicToken
        void notifyOfficeOfLead({
          publicToken: token,
          subject: "New Exterior Visualizer Estimate Request",
          name: name.trim(),
          phone,
          email: email.trim() || undefined,
          fields: {
            service_requested: "Exterior Painting",
            source: "Exterior paint visualizer",
            address: address.trim() || undefined,
            surfaces: paintSurfaces.map((k) => surfaces.find((s) => s.key === k)?.label ?? k).join(", "),
            body_color: surfaces.find((s) => s.key === "body")?.color || undefined,
            trim_color: surfaces.find((s) => s.key === "trim")?.color || undefined,
            door_color: surfaces.find((s) => s.key === "door")?.color || undefined,
            shutters_color: surfaces.find((s) => s.key === "shutters")?.color || undefined,
            photos: sharePhotos ? `${res.photoCount} attached (see lead record)` : "Not shared",
            notes: notes.trim() || undefined,
            sms_consent: smsConsent ? "Yes" : "No",
          },
        })
        // No personal data in analytics events.
        trackEvent("visualizer_estimate_submitted", { tool: "exterior", surfaces: paintSurfaces.join(","), photos_shared: sharePhotos })
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

  if (result) {
    return (
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6" role="status" aria-live="polite">
        {result.mode === "dry-run" ? (
          <>
            <p className="font-semibold text-foreground">Test mode: nothing was sent.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              This copy of the site is not the production domain, so the request was not saved and no one was notified. This is what would have been sent:
            </p>
            <pre className="mt-3 max-h-72 overflow-auto rounded-lg bg-muted p-3 text-xs text-foreground" data-testid="dry-run-payload">
              {JSON.stringify(result.preview, null, 2)}
            </pre>
          </>
        ) : (
          <>
            <p className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              Thank you{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}. Your estimate request was received.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              A member of our team will contact you to discuss the project. This request does not book an appointment; we will
              arrange a visit with you.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{BUSINESS.paymentPolicy.sentence}</p>
          </>
        )}
        <a
          href={PHONE_HREF}
          data-contact-location="paint_visualizer_success"
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}
        </a>
      </div>
    )
  }

  const errorList = Object.values(errors).filter(Boolean)

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-border bg-card p-5 sm:p-6" aria-labelledby="pv-form-h">
      <h2 id="pv-form-h" className="font-display text-2xl text-foreground">Request your free written estimate</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Request a free written estimate. Your proposal will explain the scope, products, price, deposit and payment schedule before you decide.
      </p>
      {mode === "dry-run" && (
        <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          Test mode: this copy of the site does not send requests. Nothing will be saved or delivered.
        </p>
      )}

      {errorList.length > 0 && (
        <div ref={errorSummaryRef} tabIndex={-1} role="alert" className="mt-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 focus:outline-none">
          <p className="font-semibold">Please fix the following:</p>
          <ul className="mt-1 list-disc pl-5">
            {errorList.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pv-name" className="mb-1 block text-sm font-medium text-foreground">Name <span aria-hidden="true">*</span></label>
          <input id="pv-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={`${input} ${border("name")}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? "pv-name-err" : undefined} />
          {errors.name && <p id="pv-name-err" className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="pv-phone" className="mb-1 block text-sm font-medium text-foreground">Phone <span aria-hidden="true">*</span></label>
          <input id="pv-phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="(346) 555-0123" value={phone} onChange={(e) => setPhone(formatUsPhone(e.target.value))} className={`${input} ${border("phone")}`} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "pv-phone-err" : undefined} />
          {errors.phone && <p id="pv-phone-err" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="pv-email" className="mb-1 block text-sm font-medium text-foreground">Email</label>
          <input id="pv-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${input} ${border("email")}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? "pv-email-err" : undefined} />
          {errors.email && <p id="pv-email-err" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="pv-address" className="mb-1 block text-sm font-medium text-foreground">Project address</label>
          <input id="pv-address" autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} className={`${input} ${border("address")}`} aria-invalid={!!errors.address} />
        </div>
      </div>

      <fieldset className="mt-5" aria-describedby={errors.paintSurfaces ? "pv-surf-err" : undefined}>
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
        {errors.paintSurfaces && <p id="pv-surf-err" className="mt-1 text-sm text-red-600">{errors.paintSurfaces}</p>}
      </fieldset>

      {chosen.length > 0 && (
        <p className="mt-3 text-xs text-muted-foreground">
          Colors you chose will be sent with your request. They are on-screen approximations; we confirm final colors with physical samples.
        </p>
      )}

      <div className="mt-4">
        <label htmlFor="pv-notes" className="mb-1 block text-sm font-medium text-foreground">Anything else we should know? (optional)</label>
        <textarea id="pv-notes" rows={3} maxLength={200} value={notes} onChange={(e) => setNotes(e.target.value)} className={`${input} border-border`} />
      </div>

      {/* Honeypot: hidden from people and assistive tech, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="pv-website">Website</label>
        <input id="pv-website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="mt-5 space-y-3">
        <label className="flex cursor-pointer items-start gap-2 text-sm text-foreground">
          <input type="checkbox" checked={sharePhotos} onChange={(e) => setSharePhotos(e.target.checked)} className="mt-0.5 size-4 shrink-0" />
          <span>
            Include my photo{hasPreview ? " and the color preview" : ""} with my request. It is stored privately and only our team can see it.
            Location data from your camera is not sent.
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 size-4 shrink-0"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "pv-consent-err" : undefined}
          />
          <span>
            I agree to share this information{sharePhotos ? " and my photo" : ""} with {BUSINESS.name} so they can respond to my estimate request,
            including by phone. See the{" "}
            <Link href="/privacy-policy" className="underline">privacy policy</Link>. <span aria-hidden="true">*</span>
          </span>
        </label>
        {errors.consent && <p id="pv-consent-err" className="text-sm text-red-600">{errors.consent}</p>}
        <label className="flex cursor-pointer items-start gap-2 text-xs leading-relaxed text-muted-foreground">
          <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0" />
          <span>Text me about my estimate. Message rates may apply; reply STOP any time. (Optional)</span>
        </label>
      </div>

      {submitError && (
        <p className="mt-4 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {submitError} Your selections are still here.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-disabled={submitting}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {submitting ? "Sending your request…" : "Request My Free Estimate"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Prefer to talk? Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a>.
      </p>
    </form>
  )
}
