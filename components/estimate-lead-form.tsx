"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Loader2, AlertCircle, Lock } from "lucide-react"
import { submitQuoteRequest } from "@/lib/quote-submit"
import { trackEvent, trackLeadCreated } from "@/lib/analytics"
import { getAttribution, formatAttribution } from "@/lib/attribution"

/**
 * Low-friction estimate form for paid traffic.
 *
 * Deliberately separate from the site-wide `QuoteForm`, which asks two
 * questions per step and reports success inline. Ad traffic needs the opposite:
 * one question per screen with tap-to-advance, and a redirect to a dedicated
 * confirmation URL. That URL is what makes the conversion measurable — Ads
 * Manager and GA4 can both key off a real pageview, and the visitor can't
 * re-fire the conversion by refreshing the form.
 */

const STEPS = [
  {
    key: "service" as const,
    question: "What do you need painted?",
    options: ["Interior", "Exterior", "Cabinets", "Other"],
  },
  {
    key: "scope" as const,
    question: "How big is the project?",
    // Replaced at render time by SCOPE_OPTIONS_BY_SERVICE — see optionsFor().
    options: ["1–2 rooms", "Several rooms", "Whole house", "Not sure"],
  },
  {
    key: "timeline" as const,
    question: "When do you want to start?",
    options: ["ASAP", "Within 30 days", "1–3 months", "Just researching"],
  },
]

const TOTAL_STEPS = STEPS.length + 1

/**
 * "How big is the project?" only makes sense in the units of the service being
 * quoted — room counts are meaningless for a cabinet job, and story counts are
 * meaningless for an interior one. Keeping one generic list meant the interior
 * page offered "Exterior" as a project size.
 */
const SCOPE_OPTIONS_BY_SERVICE: Record<string, string[]> = {
  Interior: ["1–2 rooms", "Several rooms", "Whole house", "Not sure"],
  Exterior: ["Single-story home", "Two-story home", "Trim & doors only", "Not sure"],
  Cabinets: ["Kitchen only", "Kitchen & island", "Kitchen & bathrooms", "Not sure"],
}

interface EstimateLeadFormProps {
  source?: string
  className?: string
  /**
   * Pre-answers "what do you need painted?" and starts the form on the next
   * question. Set this on service-specific ad landing pages: someone who
   * clicked an interior painting ad has already told us the answer, and asking
   * again both wastes a step and reads as though the page wasn't listening.
   * Must match one of the step-one options.
   */
  presetService?: string
}

export function EstimateLeadForm({
  source = "painting_estimate_landing",
  className = "",
  presetService,
}: EstimateLeadFormProps) {
  const router = useRouter()

  // With a preset service, step 0 is already answered, so the form opens on
  // step 1 and reports its length as one question shorter.
  const startStep = presetService ? 1 : 0
  const visibleSteps = TOTAL_STEPS - startStep

  const [step, setStep] = useState(startStep)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [form, setForm] = useState({
    service: presetService ?? "",
    scope: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    zip: "",
    smsConsent: false,
  })

  const isContactStep = step === STEPS.length

  const contactValid =
    form.name.trim().length > 0 &&
    form.phone.replace(/\D/g, "").length >= 10 &&
    form.zip.trim().length > 0

  /** Choosing an option advances immediately — one tap per screen, no Continue. */
  const choose = (key: (typeof STEPS)[number]["key"], value: string) => {
    setForm((f) => ({ ...f, [key]: value }))
    setError(null)
    trackEvent("estimate_form_step", {
      event_category: "lead",
      event_label: `${key}:${value}`,
    })
    setStep((s) => s + 1)
  }

  const back = () => {
    setError(null)
    // Clamped to startStep so a preset service can't be reached and blanked.
    setStep((s) => Math.max(startStep, s - 1))
  }

  const handleSubmit = async () => {
    if (!contactValid) {
      setError("Please add your name, phone number, and ZIP code so we can reach you.")
      return
    }
    setSubmitting(true)
    setError(null)

    const attribution = getAttribution()

    const result = await submitQuoteRequest({
      service: `${form.service} Painting`,
      propertyType: "Not specified",
      scope: form.scope,
      timeline: form.timeline,
      name: form.name,
      phone: form.phone,
      email: form.email,
      zip: form.zip,
      smsConsent: form.smsConsent,
      source,
      attribution: formatAttribution(attribution),
    })

    if (!result.success) {
      setSubmitting(false)
      setError(result.error)
      return
    }

    // The lead is safely delivered at this point. Tracking is best-effort and
    // must not delay or block the visitor, so failures here are swallowed.
    try {
      await trackLeadCreated({
        formName: source,
        email: form.email,
        zip: form.zip,
        city: "Houston",
      })
    } catch {
      // Intentionally ignored — see above.
    }

    // Carries the first name through so the confirmation can greet them, and
    // marks the visit as a genuine completion rather than a direct URL hit.
    const params = new URLSearchParams({
      name: form.name.split(" ")[0],
      service: form.service,
    })
    router.push(`/estimate-confirmed?${params.toString()}`)
  }

  // Both the bar and the label are relative to startStep, so a preset form
  // reads "Step 1 of 3" rather than opening at "Step 2 of 4".
  /** Options for the current step, tailored to the selected service. */
  const currentOptions =
    STEPS[step]?.key === "scope"
      ? (SCOPE_OPTIONS_BY_SERVICE[form.service] ?? STEPS[step].options)
      : STEPS[step]?.options

  const stepNumber = step - startStep + 1
  const progress = ((stepNumber - (isContactStep ? 0 : 1)) / visibleSteps) * 100

  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 ${className}`}
    >
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between gap-4">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Step {Math.min(stepNumber, visibleSteps)} of {visibleSteps}
          </p>
          <p className="text-xs text-muted-foreground">About 30 seconds</p>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-secondary transition-all duration-300"
            style={{ width: `${Math.max(progress, 8)}%` }}
          />
        </div>
      </div>

      {!isContactStep && (
        <div className="flex flex-col gap-5">
          <h2 className="font-display text-2xl font-bold leading-tight text-foreground text-balance">
            {STEPS[step].question}
          </h2>
          <div className="flex flex-col gap-2.5">
            {currentOptions?.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => choose(STEPS[step].key, option)}
                className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:border-secondary hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {option}
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-secondary" />
              </button>
            ))}
          </div>
        </div>
      )}

      {isContactStep && (
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold leading-tight text-foreground text-balance">
              Where should we send your estimate?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We&apos;ll confirm the details and schedule a walkthrough at your convenience.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="elf-name">Full name *</Label>
            <Input
              id="elf-name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Jane Doe"
              autoComplete="name"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="elf-phone">Phone *</Label>
              <Input
                id="elf-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="(346) 594-5960"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="elf-zip">ZIP code *</Label>
              <Input
                id="elf-zip"
                value={form.zip}
                onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))}
                placeholder="77429"
                autoComplete="postal-code"
                inputMode="numeric"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="elf-email">Email</Label>
            <Input
              id="elf-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-muted/60 p-3">
            <Checkbox
              id="elf-sms"
              checked={form.smsConsent}
              onCheckedChange={(v) => setForm((f) => ({ ...f, smsConsent: v === true }))}
            />
            <Label
              htmlFor="elf-sms"
              className="text-sm font-normal leading-relaxed text-muted-foreground"
            >
              Text me updates about my estimate. Message and data rates may apply. Reply STOP to
              opt out.
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

      <div className="mt-6 flex items-center gap-3">
        {/* Compared against startStep, not 0 — on a preset form step 1 is the
            first reachable step, so a Back button there would do nothing. */}
        {step > startStep && (
          <Button type="button" variant="outline" onClick={back} disabled={submitting}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}
        {isContactStep && (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="flex-1 bg-secondary text-base font-semibold text-secondary-foreground hover:bg-secondary/90"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Schedule My Free Estimate"
            )}
          </Button>
        )}
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
        <Lock className="h-3 w-3" aria-hidden="true" />
        No obligation. We never share or sell your information.
      </p>
    </div>
  )
}
