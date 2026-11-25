"use client"

import { useId, useRef, useState } from "react"
import { CheckCircle2, Phone } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEvent, trackLeadCreated } from "@/lib/analytics"
import { getAttribution } from "@/lib/attribution"
import { FREE_ESTIMATE_COPY, FORM_OPTIONS } from "@/lib/free-estimate-copy"
import { formatUsPhone, isValidUsPhone, notifyOfficeOfLead } from "@/lib/lead-notify"

/**
 * Short hero form for /offer/free-estimate (owner brief 2026-11-25).
 *
 * Meta ad traffic: 40 visitors → 21 booking clicks → 0 finished, because the
 * scheduler asks for a street address at step 2. This captures the phone number
 * first, on our own page: name, phone, ZIP, what to paint, optional timeframe,
 * SMS/appointment consent. Same /api/leads pipeline (service "free") as the long
 * form, so the lead reaches InsightPaint the same way, plus the office email.
 *
 * Conversions: trackLeadCreated fires once, only after /api/leads confirms the
 * save, with the server-issued publicToken as the event id (Meta Lead eventID,
 * GA4 generate_lead, OpenAI). The form is replaced by the thank-you state, so it
 * cannot be submitted twice.
 */

const FORM_LOCATION = "offer_free_estimate_hero"

// Labels the visitor sees → values the office reads (same vocabulary as the long form).
const PROJECTS: { label: string; value: string }[] = [
  { label: "Cabinets", value: "Cabinets" },
  { label: "Interior", value: "Interior painting" },
  { label: "Exterior", value: "Exterior painting" },
  { label: "Other", value: "Other" },
]

export function ShortEstimateForm() {
  const t = FREE_ESTIMATE_COPY.en.form
  const uid = useId()
  const id = (s: string) => `${uid}-${s}`

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
  const [projectType, setProjectType] = useState("")
  const [timeframe, setTimeframe] = useState("")
  const [consent, setConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const started = useRef(false)

  function markStarted() {
    if (started.current) return
    started.current = true
    trackEvent("quick_estimate_start", { form_location: FORM_LOCATION })
  }

  function fail(message: string) {
    setError(message)
    trackEvent("quick_estimate_error", { form_location: FORM_LOCATION, error: message.slice(0, 80) })
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (submitting) return
    setError(null)
    if (name.trim().length < 2) return fail(t.errName)
    if (!isValidUsPhone(phone)) return fail(t.errPhone)
    if (!/^\d{5}$/.test(zip.trim())) return fail("Please enter your 5-digit ZIP code.")
    if (!projectType) return fail("Please choose what you need painted.")
    if (!consent) return fail("Please check the box so we can text you about your estimate.")

    setSubmitting(true)
    try {
      const answers = {
        projectType,
        ...(timeframe ? { timeframe } : {}),
        contactMethod: "Phone call",
      }
      const body = new FormData()
      body.set("service", "free")
      body.set("lang", "en")
      body.set("name", name.trim())
      body.set("phone", phone)
      body.set("email", "")
      body.set("zip", zip.trim())
      body.set("smsConsent", String(consent))
      body.set("website", hp)
      body.set("answers", JSON.stringify(answers))
      body.set("attribution", JSON.stringify({ ...getAttribution(), formLocation: FORM_LOCATION }))
      const res = await fetch("/api/leads", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; publicToken?: string | null; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || t.errGeneric)
      setDone(true)
      if (!data.publicToken) return // Honeypot tripped: show success, store nothing, track nothing.

      void notifyOfficeOfLead({
        publicToken: data.publicToken,
        subject: `New Free Estimate Request (short form): ${projectType}`,
        name: name.trim(),
        phone,
        fields: {
          service_requested: projectType,
          zip_or_city: zip.trim(),
          timeframe: timeframe || undefined,
          preferred_contact: "Phone call",
          form_location: FORM_LOCATION,
          sms_consent: "Yes",
        },
      })
      trackEvent("quick_estimate_submit", { form_location: FORM_LOCATION, project_type: projectType })
      void trackLeadCreated({
        formName: "free estimate offer (short)",
        eventId: data.publicToken,
        zip: zip.trim(),
        gaParams: { service: "free", project_type: projectType, form_location: FORM_LOCATION, value: 1 },
      })
    } catch (err) {
      fail(err instanceof Error ? err.message : t.errGeneric)
    } finally {
      setSubmitting(false)
    }
  }

  const input =
    "w-full min-h-[46px] rounded-lg border border-[#a39d90] bg-white px-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  const label = "flex flex-col gap-1 text-sm font-semibold text-foreground"

  if (done) {
    return (
      <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 text-foreground sm:p-7" role="status" aria-live="polite">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-7 w-7 text-emerald-700" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl leading-tight text-midnight">
          Got it! Our team will call you shortly to schedule your free written estimate.
        </h2>
        <a
          href={PHONE_HREF}
          data-contact-location="offer_thank_you"
          data-contact-service="free"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-base font-bold text-secondary-foreground hover:bg-secondary/90"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call now {BUSINESS.phone}
        </a>
        <a
          href={BUSINESS.scheduler.embedUrl}
          target="_blank"
          rel="noopener"
          className="text-center text-[15px] font-semibold text-gold-deep underline-offset-4 hover:underline"
        >
          Or pick a time now →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate onFocus={markStarted} className="relative flex flex-col gap-3 rounded-2xl bg-white p-4 text-foreground sm:p-6">
      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <label className={label} htmlFor={id("name")}>
        Full name
        <input id={id("name")} className={input} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <div className="grid grid-cols-[1fr_7.5rem] gap-3">
        <label className={label} htmlFor={id("phone")}>
          Phone
          <input
            id={id("phone")}
            className={input}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(formatUsPhone(e.target.value))}
            required
          />
        </label>
        <label className={label} htmlFor={id("zip")}>
          ZIP
          <input
            id={id("zip")}
            className={input}
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            required
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className={label} htmlFor={id("type")}>
          What do you need painted?
          <select id={id("type")} className={input} value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
            <option value="" disabled>
              Choose…
            </option>
            {PROJECTS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
        <label className={label} htmlFor={id("when")}>
          <span>
            When to start? <span className="font-normal text-muted-foreground">(optional)</span>
          </span>
          <select id={id("when")} className={input} value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
            <option value="">Not sure</option>
            {FORM_OPTIONS.timeframes.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex items-start gap-2.5 text-[12px] leading-snug text-muted-foreground">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-[18px] w-[18px] flex-none accent-secondary"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>{t.sms}</span>
      </label>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-secondary px-6 text-[17px] font-bold text-secondary-foreground hover:bg-secondary/90 disabled:opacity-70"
      >
        {submitting ? t.sending : "Get My Free Estimate"}
      </button>
      <a
        href={BUSINESS.scheduler.embedUrl}
        target="_blank"
        rel="noopener"
        className="text-center text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
      >
        Prefer to pick a time yourself? Book online →
      </a>
    </form>
  )
}
