"use client"

import Link from "next/link"
import { useId, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { trackEvent, trackLeadCreated } from "@/lib/analytics"
import { getAttribution } from "@/lib/attribution"
import { FORM_OPTIONS, FREE_ESTIMATE_COPY, optionLabel, type Lang } from "@/lib/free-estimate-copy"
import { formatUsPhone, isValidUsPhone, notifyOfficeOfLead } from "@/lib/lead-notify"

/**
 * Free written estimate request (owner brief 2026-11-18). Saves through
 * /api/leads with service "free", the same pipeline every site form uses:
 * database row, office email, the InsightPaint ERP's missed-lead pull
 * (/api/leads/unemailed) and conversion tracking. No prices, no photos or
 * measurements required. Stored values stay English; labels follow `lang`.
 */
export function FreeEstimateForm({ lang }: { lang: Lang }) {
  const t = FREE_ESTIMATE_COPY[lang].form
  const uid = useId()
  const id = (s: string) => `${uid}-${s}`
  const formLocation = lang === "es" ? "offer_free_estimate_es" : "offer_free_estimate"

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [zip, setZip] = useState("")
  const [projectType, setProjectType] = useState("")
  const [areas, setAreas] = useState<string[]>([])
  const [timeframe, setTimeframe] = useState("")
  const [contactMethod, setContactMethod] = useState("")
  const [description, setDescription] = useState("")
  const [smsConsent, setSmsConsent] = useState(false)
  const [promoConsent, setPromoConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const started = useRef(false)

  function markStarted() {
    if (started.current) return
    started.current = true
    trackEvent("quick_estimate_start", { form_location: formLocation })
  }

  function fail(message: string) {
    setError(message)
    trackEvent("quick_estimate_error", { form_location: formLocation, error: message.slice(0, 80) })
  }

  function toggleArea(value: string) {
    markStarted()
    setAreas((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (name.trim().length < 2) return fail(t.errName)
    if (!isValidUsPhone(phone)) return fail(t.errPhone)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return fail(t.errEmail)
    if (zip.trim().length < 3) return fail(t.errZip)
    if (!projectType) return fail(t.errType)
    if (!areas.length) return fail(t.errAreas)
    if (!timeframe) return fail(t.errWhen)
    if (!contactMethod) return fail(t.errMethod)

    setSubmitting(true)
    try {
      const answers = {
        projectType,
        areas,
        timeframe,
        contactMethod,
        ...(description.trim() ? { description: description.trim() } : {}),
        promoConsent: promoConsent ? "Yes" : "No",
        ...(lang === "es" ? { language: "Spanish" } : {}),
      }
      const body = new FormData()
      body.set("service", "free")
      body.set("lang", lang)
      body.set("name", name.trim())
      body.set("phone", phone)
      body.set("email", email.trim())
      body.set("zip", zip.trim())
      body.set("smsConsent", String(smsConsent))
      body.set("website", hp)
      body.set("answers", JSON.stringify(answers))
      body.set("attribution", JSON.stringify({ ...getAttribution(), formLocation }))
      const res = await fetch("/api/leads", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; publicToken?: string | null; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || t.errGeneric)
      setDone(true)
      if (!data.publicToken) return // Honeypot tripped: show success, store nothing.

      void notifyOfficeOfLead({
        publicToken: data.publicToken,
        subject: `New Free Estimate Request: ${projectType}${lang === "es" ? " (SPANISH)" : ""}`,
        name: name.trim(),
        phone,
        email: email.trim(),
        fields: {
          service_requested: projectType,
          areas: areas.join(", "),
          zip_or_city: zip.trim(),
          timeframe,
          preferred_contact: contactMethod,
          description: description.trim() || undefined,
          preferred_language: lang === "es" ? "Spanish" : undefined,
          form_location: formLocation,
          sms_consent: smsConsent ? "Yes" : "No",
          promo_consent: promoConsent ? "Yes" : "No",
        },
      })
      trackEvent("quick_estimate_submit", { form_location: formLocation, project_type: projectType })
      void trackLeadCreated({
        formName: "free estimate offer",
        eventId: data.publicToken,
        email: email.trim(),
        zip: /^\d{5}$/.test(zip.trim()) ? zip.trim() : undefined,
        gaParams: {
          service: "free",
          project_type: projectType,
          segment: projectType === "Commercial interior" ? "commercial" : "residential",
          form_location: formLocation,
          value: 1,
        },
      })
    } catch (err) {
      fail(err instanceof Error ? err.message : t.errGeneric)
    } finally {
      setSubmitting(false)
    }
  }

  const input =
    "w-full min-h-[46px] rounded-lg border border-[#a39d90] bg-white px-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  const label = "flex flex-col gap-1.5 text-sm font-semibold text-foreground"

  if (done) {
    const first = name.trim().split(" ")[0]
    return (
      <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 sm:p-7" role="status" aria-live="polite">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-7 w-7 text-emerald-700" aria-hidden="true" />
        </span>
        <h2 className="font-display text-2xl text-midnight sm:text-3xl">{t.thanksTitle(first)}</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t.thanksBody(t.methodWord[contactMethod] ?? t.methodWord["Phone call"])}
        </p>
        <p className="font-semibold text-midnight">{t.lockIn}</p>
        <a
          href={BUSINESS.scheduler.embedUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-secondary px-6 text-base font-bold text-secondary-foreground hover:bg-secondary/90"
        >
          {t.bookVisit}
        </a>
        <p className="text-sm text-muted-foreground">{t.questions}</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-4 rounded-2xl bg-white p-6 sm:p-7" onFocus={markStarted}>
      <h2 className="font-display text-2xl text-midnight sm:text-3xl">{t.title}</h2>
      <p className="text-[15px] leading-relaxed text-muted-foreground">{t.intro}</p>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className={label} htmlFor={id("name")}>
          {t.name}
          <input id={id("name")} className={input} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label className={label} htmlFor={id("phone")}>
          {t.phone}
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
        <label className={label} htmlFor={id("email")}>
          {t.email}
          <input id={id("email")} className={input} type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label className={label} htmlFor={id("zip")}>
          {t.zip}
          <input id={id("zip")} className={input} autoComplete="postal-code" value={zip} onChange={(e) => setZip(e.target.value)} required />
        </label>
      </div>

      <label className={label} htmlFor={id("type")}>
        {t.projectType}
        <select id={id("type")} className={input} value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
          <option value="" disabled>
            {t.choose}
          </option>
          {FORM_OPTIONS.projectTypes.map((o) => (
            <option key={o} value={o}>
              {optionLabel(o, lang)}
            </option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-foreground">{t.areas}</legend>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {FORM_OPTIONS.areas.map((o) => (
            <label key={o} className="inline-flex min-h-9 items-center gap-2 text-[15px]">
              <input type="checkbox" className="h-[18px] w-[18px] accent-secondary" checked={areas.includes(o)} onChange={() => toggleArea(o)} />
              {optionLabel(o, lang)}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <label className={label} htmlFor={id("when")}>
          {t.timeframe}
          <select id={id("when")} className={input} value={timeframe} onChange={(e) => setTimeframe(e.target.value)} required>
            <option value="" disabled>
              {t.choose}
            </option>
            {FORM_OPTIONS.timeframes.map((o) => (
              <option key={o} value={o}>
                {optionLabel(o, lang)}
              </option>
            ))}
          </select>
        </label>
        <label className={label} htmlFor={id("method")}>
          {t.contactMethod}
          <select id={id("method")} className={input} value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} required>
            <option value="" disabled>
              {t.choose}
            </option>
            {FORM_OPTIONS.contactMethods.map((o) => (
              <option key={o} value={o}>
                {optionLabel(o, lang)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className={label} htmlFor={id("desc")}>
        {t.description}
        <textarea id={id("desc")} rows={3} className={`${input} py-2.5`} value={description} onChange={(e) => setDescription(e.target.value)} maxLength={180} />
      </label>

      <label className="flex items-start gap-2.5 text-[13px] leading-snug text-muted-foreground">
        <input type="checkbox" className="mt-0.5 h-[18px] w-[18px] flex-none accent-secondary" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} />
        <span>{t.sms}</span>
      </label>
      <label className="flex items-start gap-2.5 text-[13px] leading-snug text-muted-foreground">
        <input type="checkbox" className="mt-0.5 h-[18px] w-[18px] flex-none accent-secondary" checked={promoConsent} onChange={(e) => setPromoConsent(e.target.checked)} />
        <span>{t.promo}</span>
      </label>

      {error && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-midnight px-6 text-base font-bold text-white hover:bg-midnight/90 disabled:opacity-70"
      >
        {submitting ? t.sending : t.submit}
      </button>
      <a href={BUSINESS.scheduler.embedUrl} target="_blank" rel="noopener" className="text-center text-[15px] font-semibold text-gold-deep underline-offset-4 hover:underline">
        {t.bookDirect}
      </a>
      <p className="text-center text-xs text-muted-foreground">
        {t.fine}{" "}
        <Link href="/privacy-policy" className="underline">
          {lang === "es" ? "política de privacidad" : "privacy policy"}
        </Link>
        .
      </p>
    </form>
  )
}
