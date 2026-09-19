"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Calculator,
  CheckCircle2,
  Loader2,
  Phone,
  AlertCircle,
  ArrowRight,
  Info,
} from "lucide-react"
import {
  SERVICES,
  CONDITIONS,
  DEFAULT_OPTION,
  calculateEstimate,
  formatRange,
  needsSqft,
  optionsFor,
  optionLabelFor,
  type ServiceId,
} from "@/lib/estimate-pricing"
import { submitQuoteRequest } from "@/lib/quote-submit"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEvent, trackFormSubmit } from "@/lib/analytics"

interface EstimateCalculatorProps {
  className?: string
  source?: string
  /** Pre-select a service so the calculator matches the page it sits on. */
  defaultService?: ServiceId
}

export function EstimateCalculator({
  className = "",
  source = "estimate_calculator",
  defaultService = "interior",
}: EstimateCalculatorProps) {
  const [service, setService] = useState<ServiceId>(defaultService)
  // Open on the option matching the published headline figure for this service.
  const [option, setOption] = useState<string>(DEFAULT_OPTION[defaultService])
  const [sqft, setSqft] = useState(2500)
  const [condition, setCondition] = useState("good")

  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    smsConsent: false,
  })

  const options = useMemo(() => optionsFor(service), [service])

  const estimate = useMemo(
    () => calculateEstimate({ service, sqft, option, condition }),
    [service, sqft, option, condition],
  )

  const chooseService = (id: ServiceId) => {
    setService(id)
    // Reset the dependent option to the new service's published default.
    setOption(DEFAULT_OPTION[id])
    setError(null)
    trackEvent("calculator_service_select", {
      event_category: "engagement",
      event_label: id,
    })
  }

  const revealForm = () => {
    setShowForm(true)
    trackEvent("calculator_lead_start", {
      event_category: "lead",
      event_label: service,
    })
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError(null)

    const result = await submitQuoteRequest({
      service: SERVICES.find((s) => s.id === service)?.label ?? service,
      propertyType: "Not specified",
      scope: optionLabelFor(service, option),
      timeline: "From instant estimate",
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      zip: lead.zip,
      details: needsSqft(service)
        ? `Approx. ${sqft.toLocaleString()} sq ft. Surface condition: ${
            CONDITIONS.find((c) => c.id === condition)?.label
          }.`
        : `Surface condition: ${CONDITIONS.find((c) => c.id === condition)?.label}.`,
      smsConsent: lead.smsConsent,
      estimateRange: estimate ? formatRange(estimate) : undefined,
      source,
    })

    setSubmitting(false)
    if (result.success) {
      setDone(true)
      trackFormSubmit(source)
    } else {
      setError(result.error)
    }
  }

  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-card ${className}`}>
      <div className="flex items-center gap-3 border-b border-border bg-muted/40 px-6 py-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Calculator className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          {/* h3: this is a card title that always sits under a section-level
              h2 on the pages that embed it, so h2 here would break the outline. */}
          <h3 className="font-display text-lg font-bold leading-tight text-foreground">
            Instant Estimate Calculator
          </h3>
          <p className="text-sm text-muted-foreground">
            Real Houston pricing — no email required to see your range
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6">
        {/* Service */}
        <fieldset>
          <legend className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            1. Choose your service
          </legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const active = service === s.id
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => chooseService(s.id)}
                  aria-pressed={active}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    active
                      ? "border-secondary bg-secondary/10"
                      : "border-border bg-background hover:border-secondary/60"
                  }`}
                >
                  <span className="block text-sm font-semibold text-foreground">{s.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{s.blurb}</span>
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Option */}
        <fieldset>
          <legend className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            2. {needsSqft(service) ? "Project details" : "Project size"}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.map((o) => {
              const active = option === o.id
              return (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setOption(o.id)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border bg-background text-foreground hover:border-secondary/60"
                  }`}
                >
                  {o.label}
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Square footage */}
        {needsSqft(service) && (
          <div>
            <div className="flex items-baseline justify-between">
              <Label htmlFor="calc-sqft" className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                3. Home size
              </Label>
              <span className="font-display text-lg font-bold text-foreground">
                {sqft.toLocaleString()} sq ft
              </span>
            </div>
            <Slider
              id="calc-sqft"
              className="mt-4"
              value={[sqft]}
              min={800}
              max={6000}
              step={100}
              onValueChange={([v]) => setSqft(v)}
              aria-label="Home size in square feet"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>800 sq ft</span>
              <span>6,000 sq ft</span>
            </div>
          </div>
        )}

        {/* Condition */}
        <fieldset>
          <legend className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {needsSqft(service) ? "4." : "3."} Surface condition
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {CONDITIONS.map((c) => {
              const active = condition === c.id
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCondition(c.id)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-border bg-background text-foreground hover:border-secondary/60"
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </fieldset>
      </div>

      {/* Result */}
      <div className="border-t border-border bg-muted/30 px-6 py-6">
        <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Your estimated range
        </p>
        <p
          className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl"
          aria-live="polite"
        >
          {estimate ? formatRange(estimate) : "—"}
        </p>
        <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <span>
            Ballpark based on typical Houston-area projects. Your written quote is confirmed on-site
            and free.
          </span>
        </p>

        {done ? (
          <div className="mt-5 rounded-xl border border-border bg-card p-5 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Estimate sent to our team
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thanks, {lead.name.split(" ")[0]}. We&apos;ll call within one business day to confirm
              your exact pricing.
            </p>
            <a
              href={PHONE_HREF}
              data-contact-location="calculator_success"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>
        ) : !showForm ? (
          <Button
            type="button"
            onClick={revealForm}
            className="mt-5 w-full bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/90 sm:w-auto"
          >
            Lock in this price with a free on-site quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <div className="mt-5 flex flex-col gap-4 rounded-xl border border-border bg-card p-5">
            <p className="text-sm font-semibold text-foreground">
              Where should we send your written quote?
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="calc-name">Full name *</Label>
                <Input
                  id="calc-name"
                  value={lead.name}
                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  placeholder="Jane Doe"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="calc-phone">Phone *</Label>
                <Input
                  id="calc-phone"
                  type="tel"
                  value={lead.phone}
                  onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                  placeholder="(346) 594-5960"
                  autoComplete="tel"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="calc-zip">ZIP code *</Label>
                <Input
                  id="calc-zip"
                  value={lead.zip}
                  onChange={(e) => setLead({ ...lead, zip: e.target.value })}
                  placeholder="77429"
                  autoComplete="postal-code"
                  inputMode="numeric"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="calc-email">Email</Label>
                <Input
                  id="calc-email"
                  type="email"
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
              <Checkbox
                id="calc-sms"
                checked={lead.smsConsent}
                onCheckedChange={(v) => setLead({ ...lead, smsConsent: v === true })}
              />
              <Label
                htmlFor="calc-sms"
                className="text-sm font-normal leading-relaxed text-muted-foreground"
              >
                Text me updates about my estimate. Message and data rates may apply. Reply STOP to
                opt out.
              </Label>
            </div>

            {error && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/90"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send My Estimate"
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              No obligation. We never share your information.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
