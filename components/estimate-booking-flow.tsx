"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Loader2, Phone } from "lucide-react"
import { BookingCalendar } from "@/components/booking-calendar"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { getAttribution } from "@/lib/attribution"
import { trackAppointmentScheduled, trackEvent, trackFunnelStep, trackLeadCreated } from "@/lib/analytics"
import { FUNNELS, type FunnelService } from "@/lib/funnel-config"
import { formatUsPhone, isValidUsPhone, notifyOfficeOfLead } from "@/lib/lead-notify"
import { cn } from "@/lib/utils"

/**
 * Booking flow for the organic estimate page (/painting-estimate-houston),
 * owner review 2026-10-21:
 *
 *   service → ZIP → pick a time → contact + address → booked
 *   then, optionally, project details and photos.
 *
 * Times are shown BEFORE any personal details, and the street address is asked
 * only after a time is chosen. Project questions (size, prep, photos) moved to
 * an optional step after booking. Painting services only: epoxy has its own
 * booking path (houstonsuperiorepoxy.com) and remodeling is not offered here.
 *
 * The /chatgpt/* ad pages keep components/estimate-funnel.tsx unchanged.
 *
 * Promise used everywhere on the page: the visit is booked as soon as the
 * customer confirms it (the ERP books it synchronously in /api/booking/create).
 * If booking can't complete, the lead is still saved and we say we'll call.
 *
 * Measurement: every step fires an event tagged event_label "estimate_page"
 * (stored as funnel_events.location), so this page's drop-off can be read apart
 * from the ad funnels: landing_page_view → funnel_step_complete(service) →
 * funnel_step_complete(zip) → calendar_viewed → appointment_time_selected →
 * form_started → generate_lead → appointment_booked. Estimate given and job won
 * happen in the ERP, not here.
 */

const LOCATION = "estimate_page"
const SERVICES: FunnelService[] = ["interior", "exterior", "cabinets"]
const BLURBS: Record<string, string> = {
  interior: "Walls, ceilings, trim and doors inside your home.",
  exterior: "Siding, stucco, brick and trim, built for Houston weather.",
  cabinets: "Refinish existing kitchen or bath cabinets without replacing them.",
}

/** Greater Houston ZIPs start 770–775. Outside that, we still take the request. */
function inServiceArea(zip: string) {
  const n = Number(zip.slice(0, 3))
  return n >= 770 && n <= 775
}

type Step = "service" | "zip" | "time" | "contact" | "done"
type Slot = { start: string; date: string; time: string; label: string }

const input =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
const primaryBtn =
  "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

function track(name: string, params: Record<string, unknown> = {}) {
  trackEvent(name, { event_category: "estimate_funnel", event_label: LOCATION, ...params })
}

export function EstimateBookingFlow() {
  const [step, setStep] = useState<Step>("service")
  const [service, setService] = useState<FunnelService | null>(null)
  const [zip, setZip] = useState("")
  const [slot, setSlot] = useState<Slot | null>(null)
  const [contact, setContact] = useState({ name: "", phone: "", email: "", address: "", smsConsent: false })
  const [hp, setHp] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  /** "booked" = on the calendar; "callback" = saved, we call to set a time. */
  const [outcome, setOutcome] = useState<"booked" | "callback" | null>(null)
  const fired = useRef({ view: false, form: false, calendar: false })

  useEffect(() => {
    if (fired.current.view) return
    fired.current.view = true
    trackFunnelStep("landing_page_view", "estimate", { event_label: LOCATION })
  }, [])

  useEffect(() => {
    if (step !== "time" || !service || fired.current.calendar) return
    fired.current.calendar = true
    trackFunnelStep("calendar_viewed", service, { event_label: LOCATION })
  }, [step, service])

  // Steps differ in height, so a new step can open with its heading scrolled
  // off the top of a phone screen. Bring the card back into view when that happens.
  const firstStep = useRef(true)
  useEffect(() => {
    if (firstStep.current) {
      firstStep.current = false
      return
    }
    const card = document.getElementById("estimate-funnel")
    if (card && card.getBoundingClientRect().top < 0) card.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [step])

  const label = service ? FUNNELS[service].label : ""

  function chooseService(next: FunnelService) {
    setService(next)
    trackEvent("estimate_service_selected", { service: next, event_label: LOCATION })
    track("funnel_step_complete", { service: next, step: "service", value: next })
    setStep("zip")
  }

  function submitZip(e: React.FormEvent) {
    e.preventDefault()
    if (!/^\d{5}$/.test(zip)) return setError("Please enter a 5-digit ZIP code.")
    setError(null)
    track("funnel_step_complete", { service, step: "zip", value: inServiceArea(zip) ? "in_area" : "outside_area" })
    setStep("time")
  }

  function pickTime(next: Slot) {
    setSlot(next)
    setNotice(null)
    setStep("contact")
  }

  function noTimes() {
    setSlot(null)
    setStep("contact")
  }

  /** Books `start` for an already-saved lead. Returns the outcome to show. */
  async function book(publicToken: string, start: string): Promise<"booked" | "taken" | "busy" | "failed"> {
    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicToken, start, address: contact.address.trim() }),
      })
      if (res.status === 409) return "taken"
      if (res.status === 429) return "busy"
      return res.ok ? "booked" : "failed"
    } catch {
      return "failed"
    }
  }

  async function finishBooking(publicToken: string, chosen: Slot) {
    const result = await book(publicToken, chosen.start)
    if (result === "booked") {
      void trackAppointmentScheduled({ publicToken, service: service!, zip, email: contact.email.trim() || undefined })
      setOutcome("booked")
      setStep("done")
    } else if (result === "taken") {
      // Details are saved; only the time needs choosing again.
      setSlot(null)
      setNotice("That time was just taken. Your details are saved; pick another time.")
      setStep("time")
    } else if (result === "busy") {
      setError("The calendar is busy right now. Give it a few seconds and try again.")
    } else {
      setOutcome("callback")
      setStep("done")
    }
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault()
    if (!service || submitting) return
    setError(null)
    if (contact.name.trim().length < 2) return setError("Please enter your name.")
    if (!isValidUsPhone(contact.phone)) return setError("Please enter a 10-digit phone number.")
    if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim()))
      return setError("Please check your email address.")
    if (slot && contact.address.trim().length < 5)
      return setError("We need the street address so the estimator knows where to go.")

    setSubmitting(true)
    try {
      // A retry after a taken slot or a busy calendar reuses the saved lead.
      let publicToken = token
      if (!publicToken) {
        const body = new FormData()
        body.set("service", service)
        body.set("answers", "{}")
        body.set("name", contact.name.trim())
        body.set("phone", contact.phone)
        body.set("email", contact.email.trim())
        body.set("zip", zip)
        body.set("address", contact.address.trim())
        body.set("smsConsent", String(contact.smsConsent))
        body.set("website", hp)
        body.set("attribution", JSON.stringify({ ...getAttribution(), formLocation: LOCATION }))
        const res = await fetch("/api/leads", { method: "POST", body })
        const data = (await res.json()) as { ok?: boolean; publicToken?: string | null; error?: string }
        if (!res.ok || !data.ok) throw new Error(data.error || "We couldn't send that. Please call us instead.")
        if (!data.publicToken) {
          // Honeypot tripped: quiet success, nothing stored.
          setOutcome("callback")
          setStep("done")
          return
        }
        publicToken = data.publicToken
        setToken(publicToken)
        void notifyOfficeOfLead({
          publicToken,
          subject: `New Estimate Request: ${label} — ${zip}${slot ? ` — booking ${slot.label}` : " — call to schedule"}`,
          name: contact.name.trim(),
          phone: contact.phone,
          email: contact.email.trim(),
          fields: {
            service_requested: label,
            zip_code: zip,
            address: contact.address.trim(),
            requested_time: slot ? `${slot.label} CT` : "None chosen — call to schedule",
            sms_consent: contact.smsConsent ? "Yes" : "No",
            form_location: LOCATION,
          },
        })
        void trackLeadCreated({
          formName: `${service} estimate page`,
          eventId: publicToken,
          email: contact.email.trim() || undefined,
          zip,
          gaParams: { service, form_location: LOCATION, value: 1 },
        })
      }

      if (slot) await finishBooking(publicToken, slot)
      else {
        setOutcome("callback")
        setStep("done")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us instead.")
    } finally {
      setSubmitting(false)
    }
  }

  const steps: Step[] = ["service", "zip", "time", "contact"]
  const index = steps.indexOf(step)

  return (
    <div id="estimate-funnel" className="min-w-0 rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
      {step !== "done" && (
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span>Step {index + 1} of 4</span>
            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  setError(null)
                  setNotice(null)
                  setStep(steps[index - 1])
                }}
                className="inline-flex items-center gap-1 normal-case tracking-normal underline-offset-4 hover:text-foreground hover:underline"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" /> Back
              </button>
            )}
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted" role="presentation">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${((index + 1) / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {step === "service" && (
        <div>
          <h2 className="font-display text-2xl font-bold leading-tight text-foreground text-balance">
            What can we estimate for you?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
            Pick a service, enter your ZIP, and see open times. Free, no obligation.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {SERVICES.map((key) => {
              const config = FUNNELS[key]
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => chooseService(key)}
                    className="group flex w-full items-center gap-4 rounded-xl border border-border bg-background p-3 text-left transition-colors hover:border-secondary hover:bg-muted/50"
                  >
                    <Image
                      src={config.heroImage || "/placeholder.svg"}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                    />
                    <span className="flex flex-1 flex-col gap-0.5">
                      <span className="font-semibold text-foreground">{config.label}</span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{BLURBS[key]}</span>
                    </span>
                    <ArrowRight
                      className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-secondary"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              )
            })}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground text-pretty">
            Epoxy floors have their own booking page:{" "}
            <a href="https://houstonsuperiorepoxy.com/" className="font-medium text-foreground underline underline-offset-4">
              Houston Superior Epoxy
            </a>
            . Something else? Call{" "}
            <a href={PHONE_HREF} className="font-medium text-foreground underline underline-offset-4">
              {BUSINESS.phone}
            </a>
            .
          </p>
        </div>
      )}

      {step === "zip" && (
        <form onSubmit={submitZip} noValidate>
          <label htmlFor="eb-zip" className="block font-serif text-2xl leading-tight text-foreground">
            Where is the project?
          </label>
          <p className="mt-1.5 text-sm text-muted-foreground">Your ZIP code lets us show times for your area.</p>
          <input
            id="eb-zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder="ZIP code"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            className={cn(input, "mt-4")}
          />
          {zip.length === 5 && !inServiceArea(zip) && (
            <p className="mt-2 text-sm text-muted-foreground">
              That ZIP may be outside our usual Houston-area service area. You can still book, and we&apos;ll confirm
              whether we can reach you.
            </p>
          )}
          {error && (
            <p role="alert" className="mt-2 text-sm text-destructive">
              {error}
            </p>
          )}
          <button type="submit" className={cn(primaryBtn, "mt-4")}>
            See open times
          </button>
        </form>
      )}

      {step === "time" && service && (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">Pick a time for your visit</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Free in-person {label.toLowerCase()} estimate in {zip}. It&apos;s booked as soon as you confirm.
            </p>
          </div>
          <BookingCalendar
            service={service}
            publicToken={null}
            zip={zip}
            onPick={pickTime}
            onNoTimes={noTimes}
            onUnavailable={noTimes}
            onBooked={() => {}}
            notice={notice}
          />
        </div>
      )}

      {step === "contact" && (
        <form
          onSubmit={submitContact}
          noValidate
          className="relative flex flex-col gap-4"
          onInput={() => {
            if (fired.current.form || !service) return
            fired.current.form = true
            trackFunnelStep("form_started", service, { event_label: LOCATION })
          }}
        >
          <div>
            <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
              {slot ? "Confirm your visit" : "Where should we reach you?"}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
              {slot ? (
                <>
                  <strong className="text-foreground">{slot.label} CT</strong> · {label} · {zip}. It&apos;s booked as
                  soon as you confirm.
                </>
              ) : (
                "We’ll call you to find a time that works."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="eb-name" className="text-sm font-medium text-foreground">Name</label>
            <input id="eb-name" autoComplete="name" value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} className={input} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="eb-phone" className="text-sm font-medium text-foreground">Phone</label>
            <input
              id="eb-phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={contact.phone}
              onChange={(e) => setContact((c) => ({ ...c, phone: formatUsPhone(e.target.value) }))}
              className={input}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="eb-email" className="text-sm font-medium text-foreground">
              Email <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input id="eb-email" type="email" autoComplete="email" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} className={input} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="eb-address" className="text-sm font-medium text-foreground">
              Street address {!slot && <span className="font-normal text-muted-foreground">(optional)</span>}
            </label>
            <input
              id="eb-address"
              autoComplete="street-address"
              placeholder="Street address"
              value={contact.address}
              onChange={(e) => setContact((c) => ({ ...c, address: e.target.value }))}
              className={input}
            />
            <p className="text-xs text-muted-foreground">Houston area · {zip}. Just the street; we have the rest.</p>
          </div>
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="eb-website">Website</label>
            <input id="eb-website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
          </div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <input
              type="checkbox"
              checked={contact.smsConsent}
              onChange={(e) => setContact((c) => ({ ...c, smsConsent: e.target.checked }))}
              className="mt-0.5 size-4 shrink-0 rounded border-border accent-primary"
            />
            <span>Text me about my appointment at this number. Message rates may apply; reply STOP any time.</span>
          </label>

          {error && (
            <div role="alert" className="flex flex-col gap-2 rounded-xl border border-destructive/40 bg-destructive/5 p-4">
              <p className="text-sm text-destructive">{error}</p>
              <a href={PHONE_HREF} data-contact-location="estimate_page_error" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4">
                <Phone className="size-4" aria-hidden="true" /> Call {BUSINESS.phone} instead
              </a>
            </div>
          )}

          <button type="submit" disabled={submitting} className={primaryBtn}>
            {submitting && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            {submitting ? "Booking…" : slot ? `Book ${slot.label}` : "Send my request"}
          </button>
          <p className="text-xs text-muted-foreground">
            Free, no obligation, no payment to book. See our{" "}
            <Link href="/privacy-policy" className="underline">privacy policy</Link>.
          </p>
        </form>
      )}

      {step === "done" && service && (
        <Done service={service} outcome={outcome} slot={slot} token={token} />
      )}
    </div>
  )
}

/** Confirmation, then the optional project details that used to come first. */
function Done({
  service,
  outcome,
  slot,
  token,
}: {
  service: FunnelService
  outcome: "booked" | "callback" | null
  slot: Slot | null
  token: string | null
}) {
  const config = FUNNELS[service]
  const questions = config.questions.filter((q) => q.id !== "timeline")
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [files, setFiles] = useState<FileList | null>(null)
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">("idle")

  function toggle(id: string, option: string, multi: boolean) {
    setAnswers((prev) => {
      const list = prev[id] ?? []
      const next = multi ? (list.includes(option) ? list.filter((v) => v !== option) : [...list, option]) : [option]
      return { ...prev, [id]: next }
    })
  }

  async function save() {
    if (!token) return
    setState("saving")
    try {
      const flat = Object.fromEntries(Object.entries(answers).filter(([, v]) => v.length).map(([k, v]) => [k, v.join(", ")]))
      const res = await fetch("/api/leads/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicToken: token, answers: flat }),
      })
      if (!res.ok) throw new Error()
      if (files?.length) {
        const fd = new FormData()
        fd.set("publicToken", token)
        for (const f of Array.from(files).slice(0, 6)) fd.append("photos", f)
        const up = await fetch("/api/leads/photos", { method: "POST", body: fd })
        if (!up.ok) throw new Error()
      }
      trackEvent("funnel_step_complete", {
        event_category: "estimate_funnel",
        event_label: LOCATION,
        service,
        step: "details_after_booking",
        value: `${Object.keys(flat).length} answers, ${files?.length ?? 0} photos`,
      })
      setState("saved")
    } catch {
      setState("error")
    }
  }

  return (
    <div className="flex flex-col gap-5" role="status" aria-live="polite">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-4" aria-hidden="true" />
        </span>
        <div>
          {outcome === "booked" && slot ? (
            <>
              <p className="font-serif text-2xl leading-tight text-foreground">You&apos;re booked for {slot.label} CT</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your free {config.label.toLowerCase()} estimate is on our calendar. Need to change it? Call {BUSINESS.phone}.
              </p>
            </>
          ) : (
            <>
              <p className="font-serif text-2xl leading-tight text-foreground">We have your request</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll call you to set a time for your free {config.label.toLowerCase()} estimate. Want it sooner? Call{" "}
                {BUSINESS.phone}.
              </p>
            </>
          )}
        </div>
      </div>

      {token && state !== "saved" && (
        <div className="rounded-xl border border-border p-5">
          <p className="font-semibold text-foreground">Optional: help us prepare</p>
          <p className="mt-1 text-sm text-muted-foreground">A few details and photos help the estimator come ready. Skip anything.</p>
          <div className="mt-4 flex flex-col gap-5">
            {questions.map((q) => (
              <fieldset key={q.id}>
                <legend className="mb-2 text-sm font-medium text-foreground">{q.question}</legend>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((o) => {
                    const on = (answers[q.id] ?? []).includes(o)
                    return (
                      <button
                        key={o}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggle(q.id, o, Boolean(q.multiSelect))}
                        className={cn(
                          "rounded-lg border px-3 py-2 text-sm transition-colors",
                          on ? "border-primary bg-primary/10 text-foreground" : "border-border text-foreground hover:bg-muted",
                        )}
                      >
                        {o}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            ))}
            <div>
              <label htmlFor="eb-photos" className="mb-1 block text-sm font-medium text-foreground">
                Photos (private, up to 6)
              </label>
              <input id="eb-photos" type="file" accept="image/*,.heic,.heif" multiple onChange={(e) => setFiles(e.target.files)} className="block w-full text-sm text-muted-foreground" />
              <p className="mt-1 text-xs text-muted-foreground">{config.photoPrompt}</p>
            </div>
          </div>
          {state === "error" && <p className="mt-3 text-sm text-destructive">That didn&apos;t save. You can text photos to us instead.</p>}
          <button type="button" onClick={save} disabled={state === "saving"} className={cn(primaryBtn, "mt-5")}>
            {state === "saving" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
            Save details
          </button>
        </div>
      )}
      {state === "saved" && <p className="text-sm font-medium text-foreground">Thanks, we&apos;ve added that to your request.</p>}

      {token && (
        <Link href={`/estimate/confirmed/${token}`} className="text-sm font-semibold text-foreground underline underline-offset-4">
          View my request
        </Link>
      )}
    </div>
  )
}
