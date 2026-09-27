"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Camera,
  Check,
  ImagePlus,
  Info,
  Loader2,
  Phone,
  X,
} from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { formatAttribution, getAttribution } from "@/lib/attribution"
import { WEB3FORMS_ACCESS_KEY } from "@/lib/quote-submit"
import { trackEvent, trackFunnelStep, trackLeadCreated } from "@/lib/analytics"
import { BookingCalendar } from "@/components/booking-calendar"
import {
  INCLUDE_OPTIONS,
  PREP_OPTIONS,
  SCOPE_OPTIONS,
  TIMELINE_OPTIONS,
  computeInteriorRange,
  formatInteriorRange,
  sizeOptionsForScope,
  sizeQuestionLabel,
  type InteriorAnswers,
} from "@/lib/interior-estimator"
import { cn } from "@/lib/utils"

/**
 * Interior-only estimator for the paid /chatgpt/interior-painting-houston page.
 *
 * Differs from the shared EstimateFunnel in two deliberate ways the interior ad
 * brief calls for:
 *   1. It shows a ballpark price range BEFORE asking for any contact details.
 *   2. After the lead is captured (and the Lead conversion has already fired),
 *      it offers three next actions — schedule, send photos, or call — instead
 *      of forcing the calendar.
 *
 * Everything load-bearing is shared with the rest of the site: the price comes
 * from lib/estimate-pricing.ts via lib/interior-estimator.ts, the lead is saved
 * by /api/leads, the office email and attribution mirror the shared funnel, the
 * Lead + Appointment conversions use the same helpers, and booking uses the
 * same BookingCalendar. The service key stays "interior" so leads land in the
 * same table and the same confirmation page.
 */

const SERVICE = "interior"
const MAX_PHOTOS = 6
const MAX_PHOTO_MB = 10

type Phase = "questions" | "estimate" | "contact" | "actions" | "photos" | "booking"

const QUESTION_ORDER = ["scope", "size", "includes", "prep", "timeline"] as const
const TOTAL_QUESTIONS = QUESTION_ORDER.length

interface SelectedPhoto {
  file: File
  previewUrl: string | null
}

function isPreviewable(file: File) {
  return /^image\/(jpeg|png|webp|gif)$/i.test(file.type)
}

export function InteriorEstimator() {
  const router = useRouter()

  const [phase, setPhase] = useState<Phase>("questions")
  const [qStep, setQStep] = useState(0)
  const [answers, setAnswers] = useState<InteriorAnswers>({})

  // Each step replaces the previous one in place, so on short viewports a new
  // step can render partly behind the sticky header. Bring the card's top back
  // under the header on every transition — but never on first mount, which
  // would yank the page down on load.
  const rootRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [phase, qStep])

  const [contact, setContact] = useState({
    firstName: "",
    phone: "",
    email: "",
    zip: "",
    smsConsent: false,
  })

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [publicToken, setPublicToken] = useState<string | null>(null)

  const [photos, setPhotos] = useState<SelectedPhoto[]>([])
  const [photoError, setPhotoError] = useState<string | null>(null)
  const [photosSaved, setPhotosSaved] = useState(false)
  const [savingPhotos, setSavingPhotos] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  const [bookingFallback, setBookingFallback] = useState(false)
  const [booked, setBooked] = useState(false)

  /**
   * Once-only guards for the diagnostic funnel events. A ref so re-answering a
   * question after a Back trip never re-fires "started" and inflates the
   * denominator every drop-off rate is measured against.
   */
  const fired = useRef({
    funnelStarted: false,
    estimateShown: false,
    formStarted: false,
    calendarViewed: false,
  })

  function fireOnce(key: keyof typeof fired.current, run: () => void) {
    if (fired.current[key]) return
    fired.current[key] = true
    run()
  }

  const range = useMemo(() => computeInteriorRange(answers), [answers])

  const sizeOptions = useMemo(() => sizeOptionsForScope(answers.scope), [answers.scope])

  // Estimator-completed + calendar-viewed are tied to the screen actually
  // rendering rather than to the click that led there, so both fire exactly
  // once regardless of the path in.
  useEffect(() => {
    if (phase === "estimate") {
      fireOnce("estimateShown", () =>
        trackEvent("funnel_step_complete", {
          service: SERVICE,
          step: "estimate_shown",
          value: range ? formatInteriorRange(range) : "on_site_quote",
        }),
      )
    }
    if (phase === "booking") {
      fireOnce("calendarViewed", () => trackFunnelStep("calendar_viewed", SERVICE))
    }
  }, [phase, range])

  const canAdvanceContact = useMemo(
    () => contact.firstName.trim().length > 1 && contact.phone.replace(/\D/g, "").length >= 10,
    [contact.firstName, contact.phone],
  )

  // ── Question helpers ───────────────────────────────────────────────────────
  function markStarted() {
    fireOnce("funnelStarted", () => trackFunnelStep("funnel_started", SERVICE))
  }

  function completeStep(stepId: string, value: string) {
    trackEvent("funnel_step_complete", { service: SERVICE, step: stepId, value })
  }

  /** Single-select tap: record, report, and advance. */
  function answerAndAdvance(stepId: (typeof QUESTION_ORDER)[number], option: string) {
    markStarted()

    setAnswers((prev) => {
      const next: InteriorAnswers = { ...prev, [stepId]: option }
      // Changing the scope can invalidate a previously chosen size (room count
      // vs. sq ft), so clear it to force a fresh, valid pick.
      if (stepId === "scope" && prev.scope !== option) next.size = undefined
      return next
    })

    completeStep(stepId, option)
    goForwardFromQuestion(stepId)
  }

  function toggleInclude(option: string) {
    markStarted()
    setAnswers((prev) => {
      const list = prev.includes ?? []
      const next = list.includes(option) ? list.filter((v) => v !== option) : [...list, option]
      return { ...prev, includes: next }
    })
  }

  function continueIncludes() {
    completeStep("includes", (answers.includes ?? []).join(", ") || "—")
    setQStep(3)
  }

  /** Advance from a single-select question to the next screen. */
  function goForwardFromQuestion(stepId: string) {
    const index = QUESTION_ORDER.indexOf(stepId as (typeof QUESTION_ORDER)[number])
    if (index < TOTAL_QUESTIONS - 1) {
      setQStep(index + 1)
    } else {
      setPhase("estimate")
    }
  }

  function back() {
    setError(null)
    if (phase === "estimate") {
      setPhase("questions")
      setQStep(TOTAL_QUESTIONS - 1)
      return
    }
    if (phase === "contact") {
      setPhase("estimate")
      return
    }
    if (phase === "questions" && qStep > 0) {
      setQStep((s) => s - 1)
    }
  }

  // ── Photos ────────────────────────────────────────────────────────────────
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
    if (tooBig.length) setPhotoError(`${tooBig[0].name} is over ${MAX_PHOTO_MB}MB. Try a smaller photo.`)

    const accepted = incoming.filter((f) => f.size <= MAX_PHOTO_MB * 1024 * 1024).slice(0, room)
    setPhotos((prev) => [
      ...prev,
      ...accepted.map((file) => ({ file, previewUrl: isPreviewable(file) ? URL.createObjectURL(file) : null })),
    ])
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      const next = [...prev]
      const [removed] = next.splice(index, 1)
      if (removed?.previewUrl) URL.revokeObjectURL(removed.previewUrl)
      return next
    })
  }

  async function uploadPhotos() {
    if (!publicToken || photos.length === 0 || savingPhotos) return
    setSavingPhotos(true)
    setPhotoError(null)
    try {
      const body = new FormData()
      body.set("publicToken", publicToken)
      for (const p of photos) body.append("photos", p.file)

      const res = await fetch("/api/leads/photos", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || "Upload failed")

      setPhotosSaved(true)
      trackEvent("funnel_step_complete", { service: SERVICE, step: "photos_added", value: String(photos.length) })
    } catch (err) {
      setPhotoError(
        err instanceof Error && err.message ? err.message : "We couldn't upload those. You can text them instead.",
      )
    } finally {
      setSavingPhotos(false)
    }
  }

  // ── Office notification (mirrors the shared funnel) ─────────────────────────
  async function notifyOffice(token: string) {
    const summaryLines = [
      `What to paint: ${answers.scope ?? "—"}`,
      `Size: ${answers.size ?? "—"}`,
      `Include: ${(answers.includes ?? []).join(", ") || "—"}`,
      `Prep level: ${answers.prep ?? "—"}`,
      `Timeline: ${answers.timeline ?? "—"}`,
      `Ballpark shown: ${range ? formatInteriorRange(range) : "On-site quote"}`,
    ]

    try {
      const data = new FormData()
      data.append("access_key", WEB3FORMS_ACCESS_KEY)
      data.append("subject", `New Estimate Request: Interior Painting — ${contact.zip || "Houston"}`)
      data.append("from_name", "Houston Superior Painting Website")
      data.append("name", contact.firstName)
      data.append("email", contact.email || "not-provided@houstonsuperiorpainting.com")
      data.append("phone", contact.phone)
      data.append("service_requested", "Interior Painting")
      data.append("zip_code", contact.zip)
      data.append("project_answers", summaryLines.join("\n"))
      data.append("sms_consent", contact.smsConsent ? "Yes" : "No")
      data.append("lead_source", "interior_estimate_funnel")
      data.append("attribution", formatAttribution(getAttribution()))
      data.append("lead_record", `${window.location.origin}/estimate/confirmed/${token}`)

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
      const result = (await res.json()) as { success?: boolean }
      if (result.success) {
        await fetch("/api/leads/mark-emailed", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ publicToken: token }),
        })
      }
    } catch (err) {
      // The lead is already saved; a failed notification must never surface.
      console.error("[v0] office notification failed:", err)
    }
  }

  async function submitLead() {
    setSubmitting(true)
    setError(null)
    try {
      const body = new FormData()
      body.set("service", SERVICE)
      body.set(
        "answers",
        JSON.stringify({
          scope: answers.scope ?? "",
          size: answers.size ?? "",
          includes: answers.includes ?? [],
          prep: answers.prep ?? "",
          timeline: answers.timeline ?? "",
        }),
      )
      body.set("name", contact.firstName)
      body.set("phone", contact.phone)
      body.set("email", contact.email)
      body.set("zip", contact.zip)
      body.set("smsConsent", String(contact.smsConsent))
      body.set("attribution", JSON.stringify(getAttribution()))

      const res = await fetch("/api/leads", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; publicToken?: string; error?: string }
      if (!res.ok || !data.ok || !data.publicToken) {
        throw new Error(data.error || "We couldn't send that. Please try again.")
      }

      setPublicToken(data.publicToken)

      // Fire-and-forget, only after the lead is stored — an email outage can't
      // lose the lead or block the next screen.
      void notifyOffice(data.publicToken)

      // Lead conversion (GA4 + Meta + OpenAI pixel & server relay), deduped by
      // the server-issued publicToken. Fires immediately on submission — it
      // never waits on scheduling or photos, exactly as the brief requires.
      void trackLeadCreated({
        formName: "interior funnel",
        eventId: data.publicToken,
        email: contact.email,
        zip: contact.zip,
        gaParams: { service: SERVICE, value: 1 },
      })

      setPhase("actions")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us instead.")
    } finally {
      setSubmitting(false)
    }
  }

  // ── Progress ────────────────────────────────────────────────────────────────
  const showProgress = phase === "questions"
  const progressPct = ((qStep + 1) / TOTAL_QUESTIONS) * 100

  return (
    <div className="min-w-0 rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
      {showProgress && (
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span>
              Step {qStep + 1} of {TOTAL_QUESTIONS}
            </span>
            <span>{Math.round(progressPct)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted" role="presentation">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      )}

      {/* ── Questions ──────────────────────────────────────────────────────── */}
      {phase === "questions" && qStep === 0 && (
        <SingleSelect
          heading="What would you like painted?"
          options={[...SCOPE_OPTIONS]}
          value={answers.scope}
          onSelect={(o) => answerAndAdvance("scope", o)}
        />
      )}

      {phase === "questions" && qStep === 1 && (
        <SingleSelect
          heading={sizeQuestionLabel(answers.scope)}
          hint="A rough answer is fine — we confirm everything on-site."
          options={sizeOptions.map((o) => o.label)}
          value={answers.size}
          onSelect={(o) => answerAndAdvance("size", o)}
        />
      )}

      {phase === "questions" && qStep === 2 && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              What should we include?
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              Select all that apply — this is what changes the price the most.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            {INCLUDE_OPTIONS.map((option) => {
              const selected = (answers.includes ?? []).includes(option)
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleInclude(option)}
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
          <button
            type="button"
            disabled={(answers.includes ?? []).length === 0}
            onClick={continueIncludes}
            className="rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Continue
          </button>
        </div>
      )}

      {phase === "questions" && qStep === 3 && (
        <SingleSelect
          heading="How much prep does your home need?"
          hint="Prep is the difference between a coat that lasts and one that peels — so it drives the price."
          options={[...PREP_OPTIONS]}
          value={answers.prep}
          onSelect={(o) => answerAndAdvance("prep", o)}
        />
      )}

      {phase === "questions" && qStep === 4 && (
        <SingleSelect
          heading="When would you like to start?"
          options={[...TIMELINE_OPTIONS]}
          value={answers.timeline}
          onSelect={(o) => answerAndAdvance("timeline", o)}
        />
      )}

      {/* ── Estimate (before contact) ──────────────────────────────────────── */}
      {phase === "estimate" && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Your project estimate</span>
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              {range ? "Here's your ballpark range" : "Let's price this in person"}
            </h2>
          </div>

          {range ? (
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Estimated interior project
              </p>
              <p className="mt-2 font-serif text-4xl font-bold text-foreground sm:text-5xl" aria-live="polite">
                {formatInteriorRange(range)}
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-muted/40 p-6 text-center">
              <p className="font-serif text-2xl text-foreground">Free on-site quote</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                Your project needs a quick look to price accurately — no cost, no obligation.
              </p>
            </div>
          )}

          <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground text-pretty">
            <Info className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              This is a ballpark based on typical Houston-area interior projects. Your exact, written line-item price is
              confirmed free on-site — never a lump sum.
            </span>
          </p>

          <button
            type="button"
            onClick={() => setPhase("contact")}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get my detailed quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* ── Contact (lead capture) ─────────────────────────────────────────── */}
      {phase === "contact" && (
        <form
          className="flex flex-col gap-5"
          onInput={() => fireOnce("formStarted", () => trackFunnelStep("form_started", SERVICE))}
          onSubmit={(e) => {
            e.preventDefault()
            if (canAdvanceContact && !submitting) void submitLead()
          }}
        >
          <div className="flex flex-col gap-1.5">
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              Where should we send your estimate?
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              We&apos;ll confirm your exact price and next steps. No obligation, and no payment to book.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ie-first" className="text-sm font-medium text-foreground">
                First name
              </label>
              <input
                id="ie-first"
                name="firstName"
                autoComplete="given-name"
                required
                value={contact.firstName}
                onChange={(e) => setContact((c) => ({ ...c, firstName: e.target.value }))}
                className="rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="ie-phone" className="text-sm font-medium text-foreground">
                Mobile phone
              </label>
              <input
                id="ie-phone"
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
              <div className="flex flex-col gap-1.5 sm:w-36">
                <label htmlFor="ie-zip" className="text-sm font-medium text-foreground">
                  ZIP code
                </label>
                <input
                  id="ie-zip"
                  name="zip"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  value={contact.zip}
                  onChange={(e) => setContact((c) => ({ ...c, zip: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <label htmlFor="ie-email" className="text-sm font-medium text-foreground">
                  Email <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="ie-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
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
                Text me about my estimate at this number. Message rates may apply, and you can reply STOP any time.
              </span>
            </label>
          </div>

          {error && (
            <div role="alert" className="flex flex-col gap-2 rounded-xl border border-destructive/40 bg-destructive/5 p-4">
              <p className="text-sm text-destructive">{error}</p>
              <a
                href={PHONE_HREF}
                data-contact-location="interior_funnel_submit_error"
                data-contact-service={SERVICE}
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
          <p className="text-center text-xs leading-relaxed text-muted-foreground text-pretty">
            We&apos;ll only use your details to prepare this estimate.
          </p>
        </form>
      )}

      {/* ── Post-lead: next actions ────────────────────────────────────────── */}
      {phase === "actions" && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary">
              <Check className="size-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-widest">Request received</span>
            </div>
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              Thanks{contact.firstName ? `, ${contact.firstName}` : ""}! Let&apos;s get you an exact price
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              Your request is in — pick whichever is easiest for you next.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setPhase("booking")}
              className="flex items-center gap-4 rounded-xl border border-primary bg-primary/5 px-4 py-4 text-left transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CalendarClock className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-foreground">Schedule a free on-site estimate</span>
                <span className="text-sm text-muted-foreground text-pretty">
                  Pick your own time — locked in on the spot, no callback needed.
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setPhase("photos")}
              className="flex items-center gap-4 rounded-xl border border-border px-4 py-4 text-left transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                <Camera className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-foreground">Send photos for a faster quote</span>
                <span className="text-sm text-muted-foreground text-pretty">
                  Add a few pictures so we can price trim and repairs before we arrive.
                </span>
              </span>
            </button>

            <a
              href={PHONE_HREF}
              data-contact-location="interior_funnel_actions"
              data-contact-service={SERVICE}
              className="flex items-center gap-4 rounded-xl border border-border px-4 py-4 text-left transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-foreground">Call Houston Superior Painting</span>
                <span className="text-sm text-muted-foreground">{BUSINESS.phone}</span>
              </span>
            </a>
          </div>

          {publicToken && (
            <button
              type="button"
              onClick={() => router.push(`/estimate/confirmed/${publicToken}`)}
              className="mt-1 self-center text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              View my request
            </button>
          )}
        </div>
      )}

      {/* ── Post-lead: photo upload ────────────────────────────────────────── */}
      {phase === "photos" && (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              Add photos for a faster quote
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              Photos of the rooms help us price trim, ceilings and repairs before we arrive.
            </p>
          </div>

          {photosSaved ? (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-foreground text-pretty">
                  Got your {photos.length} photo{photos.length > 1 ? "s" : ""} — they&apos;re attached to your request.
                </p>
              </div>
            </div>
          ) : (
            <>
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
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={photo.previewUrl || "/placeholder.svg"} alt="" className="size-full object-cover" />
                        ) : (
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

              <button
                type="button"
                disabled={photos.length === 0 || savingPhotos}
                onClick={uploadPhotos}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {savingPhotos && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                {savingPhotos ? "Uploading…" : "Attach photos"}
              </button>
            </>
          )}

          <div className="flex flex-col gap-3 border-t border-border pt-5">
            <button
              type="button"
              onClick={() => setPhase("booking")}
              className="flex items-center justify-center gap-2 rounded-xl border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              <CalendarClock className="size-4" aria-hidden="true" />
              Schedule my free estimate instead
            </button>
            <button
              type="button"
              onClick={() => setPhase("actions")}
              className="self-center text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Back to options
            </button>
          </div>
        </div>
      )}

      {/* ── Post-lead: booking ─────────────────────────────────────────────── */}
      {phase === "booking" && (
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
                ? "Your interior estimate is on the calendar. Nothing else to do."
                : `We already have your details${
                    contact.zip ? ` — interior painting in ${contact.zip}` : ""
                  }. Pick a slot below and it's locked in, no callback needed.`}
            </p>
          </div>

          {bookingFallback ? (
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src={BUSINESS.scheduler.embedUrl}
                title={BUSINESS.scheduler.label}
                className="h-[560px] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <BookingCalendar
              service={SERVICE}
              publicToken={publicToken}
              zip={contact.zip}
              email={contact.email}
              onUnavailable={() => setBookingFallback(true)}
              onBooked={() => setBooked(true)}
            />
          )}

          {!booked && (
            <button
              type="button"
              onClick={() => setPhase("actions")}
              className="self-center text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Back to options
            </button>
          )}
        </div>
      )}

      {/* Back control on the pre-lead steps only. */}
      {((phase === "questions" && qStep > 0) || phase === "estimate" || phase === "contact") && (
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

// ── Shared single-select question ─────────────────────────────────────────────
function SingleSelect({
  heading,
  hint,
  options,
  value,
  onSelect,
}: {
  heading: string
  hint?: string
  options: string[]
  value: string | undefined
  onSelect: (option: string) => void
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">{heading}</h2>
        {hint && <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{hint}</p>}
      </div>
      <div className="flex flex-col gap-2.5">
        {options.map((option) => {
          const selected = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
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
}
