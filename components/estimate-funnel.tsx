"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check, ImagePlus, Loader2, Phone, X } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { formatAttribution, getAttribution } from "@/lib/attribution"
import { WEB3FORMS_ACCESS_KEY } from "@/lib/quote-submit"
import { trackEvent, trackFunnelStep, trackLeadCreated } from "@/lib/analytics"
import { formatAnswer, questionSteps, type FunnelConfig, type FunnelQuestion } from "@/lib/funnel-config"
import { BookingCalendar } from "@/components/booking-calendar"
import { cn } from "@/lib/utils"

/**
 * The one funnel used by all four services.
 *
 * Step order is deliberate: every zero-typing tap question comes first, then
 * optional photos, then contact details, and only then the booking calendar.
 * Contact details are captured *before* the calendar because the calendar is a
 * third-party iframe — if someone abandons inside it, we still have a lead.
 */

const MAX_PHOTOS = 6
const MAX_PHOTO_MB = 10

interface SelectedPhoto {
  file: File
  /** Object URL for preview, or null for formats browsers can't render. */
  previewUrl: string | null
}

/** HEIC is what iPhones produce by default and no major browser renders it. */
function isPreviewable(file: File) {
  return /^image\/(jpeg|png|webp|gif)$/i.test(file.type)
}

export function EstimateFunnel({ config }: { config: FunnelConfig }) {
  const router = useRouter()

  /**
   * Question *screens*, not questions. Several cheap questions can share one
   * screen (see `groupWithPrevious`), so this is what the step maths must be
   * built on — using the flat question count would overstate the funnel length
   * and desynchronise the progress bar.
   */
  const questionSteps_ = useMemo(() => questionSteps(config), [config])

  // Steps: [...questionScreens, photos, contact, booking]
  const photoStep = questionSteps_.length
  const contactStep = photoStep + 1
  const bookingStep = contactStep + 1

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [photos, setPhotos] = useState<SelectedPhoto[]>([])
  const [photoError, setPhotoError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [publicToken, setPublicToken] = useState<string | null>(null)
  /** Set when the availability API fails, swapping in the vendor iframe. */
  const [bookingFallback, setBookingFallback] = useState(false)
  const [booked, setBooked] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  /**
   * Once-only guards for the funnel diagnostic events.
   *
   * A ref rather than state: these must not trigger a re-render, and they need
   * to survive the Back button. Someone who steps back and re-answers a
   * question hasn't started a second funnel, so re-firing would overstate
   * starts and make the drop-off rates meaningless.
   */
  const fired = useRef({ funnelStarted: false, formStarted: false, calendarViewed: false })

  function fireOnce(key: keyof typeof fired.current, run: () => void) {
    if (fired.current[key]) return
    fired.current[key] = true
    run()
  }

  // calendar_viewed belongs in an effect, not in submitLead: the booking step is
  // also reached by the fallback path, and this way it's tied to the step
  // actually rendering rather than to one route into it.
  useEffect(() => {
    if (step !== bookingStep) return
    fireOnce("calendarViewed", () => trackFunnelStep("calendar_viewed", config.service))
  }, [step, bookingStep, config.service])

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    address: "",
    smsConsent: false,
  })

  /**
   * Booking counts as a real step.
   *
   * It used to be excluded, which made the contact step render as "Step 5 of 5"
   * at 80% — both self-contradictory and, worse, it hid the fact that a
   * calendar comes next. Someone on the last "of 5" step has no reason to
   * expect another screen, so the booking step read as missing entirely.
   *
   * Counting from step + 1 keeps the label and the bar in agreement: the
   * contact step is 5 of 6 at 83%, and booking is 6 of 6 at 100%.
   */
  const totalSteps = bookingStep + 1
  const progress = Math.min(((step + 1) / totalSteps) * 100, 100)

  const currentGroup = step < photoStep ? questionSteps_[step] : null

  /**
   * A single-select question alone on its screen can advance the moment it is
   * tapped — that zero-friction feel is the whole reason the funnel opens with
   * tap questions. Anything else needs an explicit Continue: a multi-select has
   * no way to signal "done", and a grouped screen would skip its siblings.
   */
  const autoAdvances = currentGroup?.length === 1 && !currentGroup[0].multiSelect

  /** Required questions on this screen that still have no answer. */
  const groupComplete = useMemo(() => {
    if (!currentGroup) return false
    return currentGroup.every((question) => {
      if (question.optional) return true
      const value = answers[question.id]
      return Array.isArray(value) ? value.length > 0 : Boolean(value)
    })
  }, [currentGroup, answers])

  const canAdvanceContact = useMemo(
    () => contact.name.trim().length > 1 && contact.phone.replace(/\D/g, "").length >= 10,
    [contact.name, contact.phone],
  )

  /** Records an answer without moving. Used by every question type. */
  function select(question: FunnelQuestion, option: string) {
    setAnswers((prev) => {
      if (!question.multiSelect) return { ...prev, [question.id]: option }

      const existing = prev[question.id]
      const list = Array.isArray(existing) ? existing : existing ? [existing] : []
      // Toggle, so a mis-tap is undoable without a Back trip.
      const next = list.includes(option) ? list.filter((v) => v !== option) : [...list, option]
      return { ...prev, [question.id]: next }
    })

    // The first answer is the real "started" signal. A page view only means the
    // page loaded; this means someone actually engaged with the funnel, which is
    // the denominator worth measuring drop-off against.
    fireOnce("funnelStarted", () => trackFunnelStep("funnel_started", config.service))
  }

  /**
   * Leaves the current question screen.
   *
   * `funnel_step_complete` fires once per question here rather than on each tap
   * so that a multi-select reports the final selection instead of one event per
   * option, and a grouped screen reports every question it contained.
   */
  function completeGroup(group: FunnelQuestion[], overrides?: Record<string, string>) {
    for (const question of group) {
      const value = overrides?.[question.id] ?? answers[question.id]
      trackEvent("funnel_step_complete", {
        service: config.service,
        step: question.id,
        value: formatAnswer(value),
      })
    }
    setStep((s) => s + 1)
  }

  /** Tap handler for an auto-advancing single question. */
  function answerAndAdvance(question: FunnelQuestion, option: string) {
    select(question, option)
    // `answers` is still the pre-update snapshot in this tick, so pass the value
    // through explicitly rather than reading stale state.
    completeGroup([question], { [question.id]: option })
  }

  function back() {
    setError(null)
    setStep((s) => Math.max(0, s - 1))
  }

  function addPhotos(files: FileList | null) {
    if (!files?.length) return
    setPhotoError(null)

    const incoming = Array.from(files)
    const room = MAX_PHOTOS - photos.length
    if (room <= 0) {
      setPhotoError(`You can attach up to ${MAX_PHOTOS} photos.`)
      return
    }

    const tooBig = incoming.filter((f) => f.size > MAX_PHOTO_MB * 1024 * 1024)
    if (tooBig.length) {
      setPhotoError(`${tooBig[0].name} is over ${MAX_PHOTO_MB}MB. Try a smaller photo.`)
    }

    const accepted = incoming.filter((f) => f.size <= MAX_PHOTO_MB * 1024 * 1024).slice(0, room)

    setPhotos((prev) => [
      ...prev,
      ...accepted.map((file) => ({
        file,
        previewUrl: isPreviewable(file) ? URL.createObjectURL(file) : null,
      })),
    ])
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      const next = [...prev]
      const [removed] = next.splice(index, 1)
      // Revoke to avoid leaking the object URL for the life of the page.
      if (removed?.previewUrl) URL.revokeObjectURL(removed.previewUrl)
      return next
    })
  }

  /**
   * Sends the office notification email and records the outcome.
   *
   * Subject is prefixed with the service so the office (or a Zapier rule) can
   * route interior / exterior / cabinet / epoxy enquiries to the right person
   * without opening the message.
   */
  async function notifyOffice(token: string) {
    // `formatAnswer` rather than raw interpolation: multi-select answers are
    // arrays, and a bare template would render them with no spacing and an
    // empty selection as "".
    const summary = config.questions
      .map((q) => `${q.question} ${formatAnswer(answers[q.id])}`)
      .join("\n")

    try {
      const data = new FormData()
      data.append("access_key", WEB3FORMS_ACCESS_KEY)
      data.append("subject", `New Estimate Request: ${config.label} — ${contact.zip || "Houston"}`)
      data.append("from_name", "Houston Superior Painting Website")
      data.append("name", contact.name)
      data.append("email", contact.email || "not-provided@houstonsuperiorpainting.com")
      data.append("phone", contact.phone)
      data.append("service_requested", config.label)
      data.append("zip_code", contact.zip)
      data.append("project_answers", summary)
      data.append("photos_attached", String(photos.length))
      data.append("sms_consent", contact.smsConsent ? "Yes" : "No")
      data.append("attribution", formatAttribution(getAttribution()))
      data.append("lead_record", `${window.location.origin}/estimate/confirmed/${token}`)

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
      const result = (await res.json()) as { success?: boolean }

      if (result.success) {
        // Lets the office spot leads that were saved but never emailed.
        await fetch("/api/leads/mark-emailed", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ publicToken: token }),
        })
      }
    } catch (err) {
      // Swallowed on purpose: the lead is already in the database, so the
      // customer must not see an error for a failed internal notification.
      console.error("[v0] office notification failed:", err)
    }
  }

  async function submitLead() {
    setSubmitting(true)
    setError(null)

    try {
      // FormData rather than JSON so photos ride along in the same request —
      // no separate upload round-trip to half-fail.
      const body = new FormData()
      body.set("service", config.service)
      body.set("answers", JSON.stringify(answers))
      body.set("name", contact.name)
      body.set("phone", contact.phone)
      body.set("email", contact.email)
      body.set("zip", contact.zip)
      body.set("address", contact.address)
      body.set("smsConsent", String(contact.smsConsent))
      body.set("attribution", JSON.stringify(getAttribution()))
      for (const p of photos) body.append("photos", p.file)

      const res = await fetch("/api/leads", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; publicToken?: string; error?: string }

      if (!res.ok || !data.ok || !data.publicToken) {
        throw new Error(data.error || "We couldn't send that. Please try again.")
      }

      setPublicToken(data.publicToken)

      // The office notification has to be sent from the browser — Web3Forms'
      // free plan rejects server IPs (see lib/quote-submit.ts). Fired after the
      // lead is already stored, and awaited only to record delivery, so an
      // email outage can't lose the lead or block the calendar step.
      void notifyOffice(data.publicToken)

      // Conversion fires only after the lead is safely stored, so reported
      // conversions can never exceed leads we actually hold.
      //
      // This used to call `measureOpenAI` directly — browser pixel ONLY, which
      // ad blockers and Safari ITP drop silently. `trackLeadCreated` fires the
      // same pixel AND the server-side Conversions API relay, deduplicated by a
      // shared event_id, so blocked browsers still report.
      //
      // `eventId` stays the publicToken, exactly as before, so dedup behaviour
      // against anything already recorded is unchanged.
      //
      // No `service` key reaches the OpenAI pixel payload: the customer_action
      // shape accepts only type/amount/currency, and the pixel drops the whole
      // event if it sees an unknown field — verified live, failing silently with
      // just a console warning. `service` therefore travels via `gaParams` to
      // GA4, which keeps per-service reporting intact without a second
      // `generate_lead` hit.
      void trackLeadCreated({
        formName: `${config.service} funnel`,
        eventId: data.publicToken,
        email: contact.email,
        zip: contact.zip,
        gaParams: { service: config.service, value: 1 },
      })

      setStep(bookingStep)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us instead.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    // `min-w-0` so the funnel can never widen its grid track. Every page places
    // it as a grid child, where the default `min-width: auto` let the calendar's
    // day strip push this column past the page container.
    <div
      id="estimate-funnel"
      className="min-w-0 rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8"
    >
      {/* Progress */}
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span>
            {step >= bookingStep
              ? "Last step — pick your time"
              : `Step ${Math.min(step + 1, totalSteps)} of ${totalSteps}`}
          </span>
          {step > 0 && step < bookingStep && <span>{Math.round(progress)}%</span>}
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-muted" role="presentation">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${step >= bookingStep ? 100 : progress}%` }}
          />
        </div>
      </div>

      {/* ── Tap questions ──────────────────────────────────────────────── */}
      {currentGroup && (
        <div className="flex flex-col gap-7">
          {currentGroup.map((question, index) => {
            const value = answers[question.id]
            const selectedList = Array.isArray(value) ? value : value ? [value] : []

            return (
              <div key={question.id} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  {/* The first question on a screen is the heading; any grouped
                      sibling is a subheading, so one screen doesn't read as two
                      competing questions of equal weight. */}
                  {index === 0 ? (
                    <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
                      {question.question}
                    </h2>
                  ) : (
                    <h3 className="font-manrope text-base font-semibold text-foreground text-balance">
                      {question.question}
                    </h3>
                  )}

                  {question.hint && (
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{question.hint}</p>
                  )}

                  {question.multiSelect && (
                    <p className="text-xs text-muted-foreground">Select all that apply</p>
                  )}
                </div>

                <div className="flex flex-col gap-2.5">
                  {question.options.map((option) => {
                    const selected = selectedList.includes(option)
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={question.multiSelect ? selected : undefined}
                        onClick={() =>
                          autoAdvances ? answerAndAdvance(question, option) : select(question, option)
                        }
                        className={cn(
                          "flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-base transition-colors",
                          "hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          selected ? "border-primary bg-primary/10 text-foreground" : "border-border text-foreground",
                        )}
                      >
                        <span className="text-pretty">{option}</span>
                        {selected && <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {/* Only grouped or multi-select screens need this; a lone single-select
              advances on tap and a button there would add a pointless extra
              action to every step. */}
          {!autoAdvances && (
            <button
              type="button"
              disabled={!groupComplete}
              onClick={() => completeGroup(currentGroup)}
              className="rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Continue
            </button>
          )}

          {/* First screen only — see `firstStepNote` in lib/funnel-config.ts. */}
          {step === 0 && config.firstStepNote && (
            <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
              {config.firstStepNote.text}{" "}
              <Link
                href={config.firstStepNote.href}
                className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
              >
                {config.firstStepNote.linkLabel}
              </Link>
              .
            </p>
          )}
        </div>
      )}

      {/* ── Optional photos ────────────────────────────────────────────── */}
      {step === photoStep && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              Add photos to get a sharper price
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{config.photoPrompt}</p>
          </div>

          <input
            ref={fileInput}
            type="file"
            accept="image/*,.heic,.heif"
            multiple
            className="sr-only"
            onChange={(e) => addPhotos(e.target.files)}
          />

          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border px-4 py-8 text-center transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ImagePlus className="size-6 text-muted-foreground" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">Choose photos</span>
            <span className="text-xs text-muted-foreground">
              Up to {MAX_PHOTOS} photos, {MAX_PHOTO_MB}MB each
            </span>
          </button>

          {photoError && (
            <p role="alert" className="text-sm text-destructive">
              {photoError}
            </p>
          )}

          {photos.length > 0 && (
            <ul className="flex flex-wrap gap-3">
              {photos.map((photo, i) => (
                <li key={`${photo.file.name}-${i}`} className="relative">
                  <div className="flex size-20 items-center justify-center overflow-hidden rounded-lg border border-border bg-muted">
                    {photo.previewUrl ? (
                      // Object URL of a user-selected file; next/image can't optimise it.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={photo.previewUrl} alt="" className="size-full object-cover" />
                    ) : (
                      // HEIC and similar can't be rendered — show the name instead
                      // of a broken image icon, which reads as an upload failure.
                      <span className="px-1 text-center text-[10px] leading-tight text-muted-foreground break-all">
                        {photo.file.name.slice(-14)}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="absolute -right-1.5 -top-1.5 rounded-full bg-foreground p-1 text-background shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <X className="size-3" aria-hidden="true" />
                    <span className="sr-only">Remove {photo.file.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => setStep(contactStep)}
              className="flex-1 rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {photos.length > 0 ? `Continue with ${photos.length} photo${photos.length > 1 ? "s" : ""}` : "Continue"}
            </button>
            {photos.length === 0 && (
              <button
                type="button"
                onClick={() => setStep(contactStep)}
                className="rounded-xl px-5 py-3.5 text-base text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Skip
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Contact ───────────────────────────────────���────────────────── */}
      {step === contactStep && (
        <form
          className="flex flex-col gap-5"
          // One handler on the form instead of five onChange additions: React
          // input events bubble, so this catches whichever field they touch
          // first. Keyed on input rather than focus because a focus can be a
          // stray tap, whereas typing is a real attempt to fill the form.
          onInput={() =>
            fireOnce("formStarted", () => trackFunnelStep("form_started", config.service))
          }
          onSubmit={(e) => {
            e.preventDefault()
            if (canAdvanceContact && !submitting) void submitLead()
          }}
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              Where should we send your estimate?
            </h2>
            {/* Sets up the calendar that comes next. The old copy promised a
                phone call to confirm the appointment window, which was written
                before in-funnel booking existed and told customers the exact
                opposite of what now happens on the following screen. */}
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              Then pick your appointment time on the next screen. No obligation, and no payment required to book.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ef-name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="ef-name"
                name="name"
                autoComplete="name"
                required
                value={contact.name}
                onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                className="rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="ef-phone" className="text-sm font-medium text-foreground">
                Phone
              </label>
              <input
                id="ef-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                className="rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-1 flex-col gap-1.5">
                <label htmlFor="ef-email" className="text-sm font-medium text-foreground">
                  Email <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="ef-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:w-32">
                <label htmlFor="ef-zip" className="text-sm font-medium text-foreground">
                  ZIP
                </label>
                <input
                  id="ef-zip"
                  name="zip"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  value={contact.zip}
                  onChange={(e) => setContact((c) => ({ ...c, zip: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                checked={contact.smsConsent}
                onChange={(e) => setContact((c) => ({ ...c, smsConsent: e.target.checked }))}
                className="mt-0.5 size-4 shrink-0 rounded border-border accent-primary"
              />
              <span>
                Text me appointment reminders at this number. Message rates may apply, and you can reply STOP any time.
              </span>
            </label>
          </div>

          {error && (
            <div role="alert" className="flex flex-col gap-2 rounded-xl border border-destructive/40 bg-destructive/5 p-4">
              <p className="text-sm text-destructive">{error}</p>
              {/* Tracked separately from the other numbers: a tap here means
                  the submission failed, so a spike in this one is a bug report,
                  not a marketing result. */}
              <a
                href={PHONE_HREF}
                data-contact-location="funnel_submit_error"
                data-contact-service={config.service}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call {BUSINESS.phone} instead
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={!canAdvanceContact || submitting}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {submitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            {submitting ? "Sending…" : "Get my free estimate"}
          </button>
        </form>
      )}

      {/* ── Booking (lead already saved) ───────────────────────────────── */}
      {step === bookingStep && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary">
              <Check className="size-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {booked ? "Visit confirmed" : "Request received"}
              </span>
            </div>
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              {booked ? "That's everything — see you then" : "Pick a time that suits you"}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {booked
                ? `Your ${config.label.toLowerCase()} estimate is on the calendar. Nothing else to do.`
                : `We already have your details — ${config.label.toLowerCase()} in ${
                    contact.zip || "Houston"
                  }. Pick a slot below and it's locked in, no callback needed.`}
            </p>
          </div>

          {/* Native picker by default; the vendor iframe only if availability
              can't be loaded. The iframe re-asks for details we already have,
              so it is the safety net rather than the normal path. */}
          {bookingFallback ? (
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src={config.bookingUrl}
                title={config.bookingLabel}
                className="h-[560px] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <BookingCalendar
              service={config.service}
              publicToken={publicToken}
              zip={contact.zip}
              email={contact.email}
              onUnavailable={() => setBookingFallback(true)}
              onBooked={() => setBooked(true)}
            />
          )}

          <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground text-pretty">
              Prefer to talk it through? We answer the phone during business hours.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={PHONE_HREF}
                data-contact-location="funnel_booking"
                data-contact-service={config.service}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                <Phone className="size-4" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              {publicToken && (
                <button
                  type="button"
                  onClick={() => router.push(`/estimate/confirmed/${publicToken}`)}
                  className="whitespace-nowrap rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  View my request
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back control — hidden on the first step and after the lead is saved,
          since the calendar step has nothing safe to go back to. */}
      {step > 0 && step < bookingStep && (
        <button
          type="button"
          onClick={back}
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          Back
        </button>
      )}
    </div>
  )
}
