"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowLeft, CalendarDays, CheckCircle2, Phone } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEvent, trackLeadCreated } from "@/lib/analytics"
import { getAttribution } from "@/lib/attribution"
import { BUDGET_RANGES, PAINT_WHAT } from "@/lib/lead-forms"
import { formatUsPhone, isValidUsPhone, notifyOfficeOfLead } from "@/lib/lead-notify"

/**
 * Budget offer funnel (owner request 2026-10-15): what needs painting → where
 * (ZIP) → budget → contact. Saves through /api/leads as service "budget", so it
 * gets the office email, the missed-lead alert and conversion tracking like
 * every other form. Photos are optional and stored privately.
 */
type Step = 0 | 1 | 2 | 3

export function BudgetFunnelForm() {
  const [step, setStep] = useState<Step>(0)
  const [paintWhat, setPaintWhat] = useState("")
  const [zip, setZip] = useState("")
  const [budget, setBudget] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [details, setDetails] = useState("")
  const [smsConsent, setSmsConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [photoState, setPhotoState] = useState<"idle" | "sending" | "done" | "error">("idle")
  const started = useRef(false)

  function go(next: Step, eventStep: string) {
    if (!started.current) {
      started.current = true
      trackEvent("quick_estimate_start", { form_location: "budget_offer" })
    }
    trackEvent("funnel_step_complete", { form_location: "budget_offer", step: eventStep })
    setError(null)
    setStep(next)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (name.trim().length < 2) return setError("Please enter your name.")
    if (!isValidUsPhone(phone)) return setError("Please enter a 10-digit phone number.")
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please check your email address.")
    setSubmitting(true)
    try {
      const body = new FormData()
      body.set("service", "budget")
      body.set("name", name.trim())
      body.set("phone", phone)
      body.set("email", email.trim())
      body.set("zip", zip)
      body.set("smsConsent", String(smsConsent))
      body.set("website", hp)
      body.set("answers", JSON.stringify({ paintWhat, location: zip, budget, details }))
      body.set("attribution", JSON.stringify({ ...getAttribution(), formLocation: "budget_offer" }))
      const res = await fetch("/api/leads", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; publicToken?: string | null; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || "We couldn't send that. Please call us instead.")
      setToken(data.publicToken ?? "hidden")
      if (!data.publicToken) return
      void notifyOfficeOfLead({
        publicToken: data.publicToken,
        subject: `New Budget Offer Lead: ${paintWhat} — ${budget} — ${zip}`,
        name: name.trim(),
        phone,
        email: email.trim(),
        fields: {
          service_requested: paintWhat,
          budget,
          zip_code: zip,
          details,
          sms_consent: smsConsent ? "Yes" : "No",
          form_location: "budget_offer",
        },
      })
      trackEvent("quick_estimate_submit", { form_location: "budget_offer", project_type: paintWhat, budget })
      void trackLeadCreated({
        formName: "budget offer",
        eventId: data.publicToken,
        email: email.trim() || undefined,
        zip,
        gaParams: { service: "budget", project_type: paintWhat, budget, form_location: "budget_offer", value: 1 },
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please call us instead."
      setError(message)
      trackEvent("quick_estimate_error", { form_location: "budget_offer", error: message.slice(0, 80) })
    } finally {
      setSubmitting(false)
    }
  }

  async function sendPhotos(files: FileList | null) {
    if (!files?.length || !token || token === "hidden") return
    setPhotoState("sending")
    try {
      const fd = new FormData()
      fd.set("publicToken", token)
      for (const f of Array.from(files).slice(0, 6)) fd.append("photos", f)
      const res = await fetch("/api/leads/photos", { method: "POST", body: fd })
      const data = (await res.json()) as { ok?: boolean }
      if (!res.ok || !data.ok) throw new Error()
      setPhotoState("done")
      trackEvent("estimate_photo_upload", { form_location: "budget_offer", count: files.length })
    } catch {
      setPhotoState("error")
    }
  }

  const card = "rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
  const choice = (active: boolean) =>
    `w-full rounded-xl border px-4 py-4 text-left text-base font-semibold transition-colors ${
      active ? "border-primary bg-primary/10 text-foreground" : "border-border bg-background text-foreground hover:border-primary"
    }`
  const input =
    "w-full rounded-lg border border-border bg-background px-3 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

  if (token) {
    return (
      <div className={card} role="status" aria-live="polite">
        <p className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />
          Thanks{name ? `, ${name.trim().split(" ")[0]}` : ""}. We got your request.
        </p>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll review what you need and your budget, and a member of our team will contact you. If it&apos;s a good
          fit, we&apos;ll work with you on a plan.
        </p>
        {token !== "hidden" && (
          <div className="mt-5">
            <label htmlFor="bo-photos" className="mb-1 block text-sm font-semibold text-foreground">
              Optional: add photos of the area (private)
            </label>
            <input
              id="bo-photos"
              type="file"
              accept="image/*"
              multiple
              disabled={photoState === "sending" || photoState === "done"}
              onChange={(e) => sendPhotos(e.target.files)}
              className="block w-full text-sm text-muted-foreground"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              {photoState === "sending" && "Uploading…"}
              {photoState === "done" && "Photos added. Thank you!"}
              {photoState === "error" && "The photos didn't upload. You can text them to us instead."}
              {photoState === "idle" && "Up to 6 photos. Only our team can see them."}
            </p>
          </div>
        )}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href={BUSINESS.scheduler.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-contact-location="budget_offer_success"
            className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground"
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" /> Book an Appointment
          </a>
          <a
            href={PHONE_HREF}
            data-contact-location="budget_offer_success"
            className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className={card}>
      <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>Step {step + 1} of 4</span>
        {step > 0 && (
          <button type="button" onClick={() => setStep((step - 1) as Step)} className="flex items-center gap-1 underline">
            <ArrowLeft className="h-3 w-3" aria-hidden="true" /> Back
          </button>
        )}
      </div>
      <div className="mb-5 h-1.5 w-full rounded-full bg-muted" aria-hidden="true">
        <div className="h-1.5 rounded-full bg-primary transition-all" style={{ width: `${((step + 1) / 4) * 100}%` }} />
      </div>

      {step === 0 && (
        <fieldset>
          <legend className="mb-4 font-display text-2xl text-foreground">What do you need painted?</legend>
          <div className="grid gap-2">
            {PAINT_WHAT.map((v) => (
              <button
                key={v}
                type="button"
                className={choice(paintWhat === v)}
                onClick={() => {
                  setPaintWhat(v)
                  go(1, "paint_what")
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (!/^\d{5}$/.test(zip)) return setError("Please enter a 5-digit ZIP code.")
            go(2, "location")
          }}
        >
          <label htmlFor="bo-zip" className="mb-4 block font-display text-2xl text-foreground">
            Where is the project?
          </label>
          <input
            id="bo-zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder="ZIP code"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            className={input}
          />
          {error && <p className="mt-2 text-sm text-red-600" role="alert">{error}</p>}
          <button type="submit" className="mt-4 w-full rounded-lg bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground">
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="mb-1 font-display text-2xl text-foreground">What&apos;s your budget?</legend>
          <p className="mb-4 text-sm text-muted-foreground">A rough range helps us plan the right scope for you.</p>
          <div className="grid gap-2">
            {BUDGET_RANGES.map((v) => (
              <button
                key={v}
                type="button"
                className={choice(budget === v)}
                onClick={() => {
                  setBudget(v)
                  go(3, "budget")
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <form onSubmit={submit} noValidate className="relative">
          <p className="mb-4 font-display text-2xl text-foreground">Where should we reach you?</p>
          <div className="space-y-3">
            <div>
              <label htmlFor="bo-name" className="mb-1 block text-sm font-medium text-foreground">Name</label>
              <input id="bo-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={input} />
            </div>
            <div>
              <label htmlFor="bo-phone" className="mb-1 block text-sm font-medium text-foreground">Phone</label>
              <input
                id="bo-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(formatUsPhone(e.target.value))}
                className={input}
              />
            </div>
            <div>
              <label htmlFor="bo-email" className="mb-1 block text-sm font-medium text-foreground">Email (optional)</label>
              <input id="bo-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
            </div>
            <div>
              <label htmlFor="bo-details" className="mb-1 block text-sm font-medium text-foreground">
                Anything we should know? (optional)
              </label>
              <textarea
                id="bo-details"
                rows={3}
                placeholder="e.g. 3 bedrooms and the living room, or the whole outside of a one-story house"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className={input}
              />
            </div>
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="bo-website">Website</label>
              <input id="bo-website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
            </div>
            <label className="flex cursor-pointer items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0" />
              <span>Text me about my estimate. Message rates may apply; reply STOP any time.</span>
            </label>
          </div>
          {error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full rounded-lg bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Request My Free Estimate"}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Free written estimate. By submitting, you agree that we may call you about your request. See our{" "}
            <Link href="/privacy-policy" className="underline">privacy policy</Link>.
          </p>
        </form>
      )}
    </div>
  )
}
