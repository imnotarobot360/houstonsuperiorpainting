"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Phone,
  AlertCircle,
} from "lucide-react"
import { submitQuoteRequest } from "@/lib/quote-submit"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEvent, trackFormSubmit } from "@/lib/analytics"

const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Drywall Repair",
  "Pressure Washing",
  "Commercial Painting",
  "Other / Not Sure",
]

const PROPERTY_TYPES = ["Single-Family Home", "Townhome / Condo", "Commercial", "New Construction"]

const SCOPES = [
  "1–2 rooms",
  "3–5 rooms",
  "Whole interior",
  "Whole exterior",
  "Cabinets only",
  "Not sure yet",
]

const TIMELINES = ["As soon as possible", "Within 2–4 weeks", "1–3 months", "Just researching"]

const TOTAL_STEPS = 3

interface QuoteFormProps {
  /** Pre-selected service, e.g. when embedded on a service page. */
  defaultService?: string
  /** Estimate range passed in from the calculator. */
  estimateRange?: string
  /** Analytics label for where this form instance lives. */
  source?: string
  className?: string
}

export function QuoteForm({
  defaultService,
  estimateRange,
  source = "quote_form",
  className = "",
}: QuoteFormProps) {
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [form, setForm] = useState({
    service: defaultService ?? "",
    propertyType: "",
    scope: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    zip: "",
    details: "",
    smsConsent: false,
  })

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    setError(null)
  }

  const stepValid = () => {
    if (step === 1) return Boolean(form.service && form.propertyType)
    if (step === 2) return Boolean(form.scope && form.timeline)
    return Boolean(form.name.trim() && form.phone.replace(/\D/g, "").length >= 10 && form.zip.trim())
  }

  const next = () => {
    if (!stepValid()) {
      setError("Please complete the highlighted options to continue.")
      return
    }
    trackEvent("quote_form_step", { event_category: "lead", event_label: `step_${step}_complete` })
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  const back = () => {
    setError(null)
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = async () => {
    if (!stepValid()) {
      setError("Please fill in your name, phone number, and ZIP code.")
      return
    }
    setSubmitting(true)
    setError(null)

    const result = await submitQuoteRequest({ ...form, estimateRange, source })

    setSubmitting(false)
    if (result.success) {
      setDone(true)
      trackFormSubmit(source)
    } else {
      setError(result.error)
    }
  }

  if (done) {
    return (
      <div className={`rounded-2xl border border-border bg-card p-8 text-center ${className}`}>
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground">Request received</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Thanks, {form.name.split(" ")[0]}. We&apos;ll reach out within one business day to confirm
          details and schedule your free on-site estimate.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">Need it sooner?</p>
        <a
          href={PHONE_HREF}
          data-contact-location="quote_form_success"
          className="mt-2 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
        >
          <Phone className="h-4 w-4" />
          {BUSINESS.phone}
        </a>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl border border-border bg-card p-6 sm:p-8 ${className}`}>
      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Step {step} of {TOTAL_STEPS}
          </p>
          <p className="text-xs text-muted-foreground">Takes about 60 seconds</p>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-secondary transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1 — service + property */}
      {step === 1 && (
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              What can we help you with?
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => set("service", s)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    form.service === s
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border bg-background text-foreground hover:border-secondary/60"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground">Property type</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => set("propertyType", p)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    form.propertyType === p
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border bg-background text-foreground hover:border-secondary/60"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2 — scope + timeline */}
      {step === 2 && (
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              How big is the project?
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {SCOPES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => set("scope", s)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    form.scope === s
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border bg-background text-foreground hover:border-secondary/60"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              When would you like to start?
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {TIMELINES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set("timeline", t)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    form.timeline === t
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border bg-background text-foreground hover:border-secondary/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3 — contact */}
      {step === 3 && (
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-xl font-bold text-foreground">
            Where should we send your estimate?
          </h3>

          <div className="flex flex-col gap-2">
            <Label htmlFor="qf-name">Full name *</Label>
            <Input
              id="qf-name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Jane Doe"
              autoComplete="name"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="qf-phone">Phone *</Label>
              <Input
                id="qf-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                placeholder="(346) 594-5960"
                autoComplete="tel"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="qf-zip">ZIP code *</Label>
              <Input
                id="qf-zip"
                value={form.zip}
                onChange={(e) => set("zip", e.target.value)}
                placeholder="77429"
                autoComplete="postal-code"
                inputMode="numeric"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="qf-email">Email</Label>
            <Input
              id="qf-email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="qf-details">Anything else we should know?</Label>
            <Textarea
              id="qf-details"
              value={form.details}
              onChange={(e) => set("details", e.target.value)}
              placeholder="Ceiling height, problem areas, colors you have in mind…"
              rows={3}
            />
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
            <Checkbox
              id="qf-sms"
              checked={form.smsConsent}
              onCheckedChange={(v) => set("smsConsent", v === true)}
            />
            <Label htmlFor="qf-sms" className="text-sm font-normal leading-relaxed text-muted-foreground">
              Text me updates about my estimate. Message and data rates may apply. Reply STOP to opt
              out.
            </Label>
          </div>
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-7 flex items-center gap-3">
        {step > 1 && (
          <Button type="button" variant="outline" onClick={back} disabled={submitting}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}
        {step < TOTAL_STEPS ? (
          <Button
            type="button"
            onClick={next}
            className="flex-1 bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/90"
          >
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="flex-1 bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/90"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Get My Free Estimate"
            )}
          </Button>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        No obligation. We never share your information.
      </p>
    </div>
  )
}
