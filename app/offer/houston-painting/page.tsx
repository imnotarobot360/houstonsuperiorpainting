import type { Metadata } from "next"
import { Check, ShieldCheck } from "lucide-react"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelFooter } from "@/components/funnel-footer"
import { LandingViewTracker } from "@/components/landing-view-tracker"
import { BudgetFunnelForm } from "@/components/budget-funnel-form"
import { ReviewsInline } from "@/components/office-reviews"
import { BUSINESS } from "@/lib/business"
import { BUDGET_OFFER, budgetSpotsCurrent } from "@/lib/lead-forms"

// Budget offer landing page for paid social ads (owner request 2026-10-15).
// noindex + excluded from the sitemap (EXCLUDED_TREES 'offer'), and listed as an
// interruption-free route so the chat bubble/exit modal stay out of the way.
// The "project spots" line reads BUDGET_OFFER.spotsAvailable; keep it true, and
// set it to 0 to hide the line; it also hides itself once BUDGET_OFFER.checked is
// older than maxAgeDays (re-checked hourly via revalidate). No prices or
// discounts are promised here. Response time ("one business day") matches
// /contact and /estimate-confirmed.

export const revalidate = 3600

export const metadata: Metadata = {
  title: "House Painting That Fits Your Budget | Houston Superior Painting",
  description:
    "Houston interior, exterior and cabinet painting planned around your budget. Tell us what needs painting, where, and your budget for a free written estimate.",
  robots: { index: false, follow: false, nocache: true },
}

export default function BudgetOfferPage() {
  const spots = budgetSpotsCurrent() ? BUDGET_OFFER.spotsAvailable : 0
  return (
    <>
      <LandingViewTracker service="budget" />
      <FunnelHeader service="budget" />
      <main className="bg-background">
        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-x-10 lg:py-16">
          {/* Phones: headline, then the form, then the details. Desktop: form in the right column. */}
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Houston homeowners
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-foreground text-balance sm:text-5xl">
              Professional house painting that fits your budget
            </h1>
            {spots > 0 && (
              <p className="mt-5 inline-block rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-foreground">
                We have {spots} project {spots === 1 ? "spot" : "spots"} available.
              </p>
            )}
          </div>

          <div id="start" className="scroll-mt-20 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <BudgetFunnelForm />
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="text-lg leading-relaxed text-foreground/85">
              Tell us what you need painted, where you&apos;re located, and your budget. We&apos;ll contact you within
              one business day to talk through the scope and your options, and arrange a free walkthrough if it&apos;s a
              fit. The budget range starts the conversation; it doesn&apos;t rule anyone out.
            </p>
            <ul className="mt-6 space-y-2 text-foreground/90">
              {[
                "Interior, exterior and kitchen cabinet painting in Houston and surrounding areas",
                "Free written estimate with the scope, price, deposit and payment schedule before you approve",
                `${BUSINESS.trust.warrantyYears}-year written workmanship warranty`,
                `${BUSINESS.trust.liabilityCoverage} general liability + workers' comp`,
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ReviewsInline className="text-sm text-foreground/80" />
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <h2 className="font-display text-3xl text-foreground">How it works</h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Tell us about the project", d: "What needs painting, the ZIP code and your budget range. It takes about a minute." },
                { t: "We call you", d: "Within one business day, we review your project and budget and contact you to discuss the scope and your options." },
                { t: "Walkthrough and written plan", d: "If it's a fit, we arrange a free walkthrough and give you a written estimate with the scope, products and price." },
              ].map((s, i) => (
                <li key={s.t} className="rounded-xl border border-border bg-background p-5">
                  <span className="font-display text-2xl text-gold-deep">{i + 1}</span>
                  <h3 className="mt-1 font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {BUSINESS.insuranceProof.en}
            </p>
          </div>
        </section>
      </main>
      <FunnelFooter />
    </>
  )
}
