import { ReviewsInline } from "@/components/office-reviews"
import Image from "next/image"
import { Phone, Star, ShieldCheck, BadgeCheck, Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { EstimateLeadForm } from "@/components/estimate-lead-form"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

/**
 * Shared template for the /chatgpt/* paid-traffic landing pages.
 *
 * These pages are noindex by decision (see docs/seo-audit-2026-08.md §6): the
 * matching organic service pages already rank, and shipping near-duplicates
 * would put two of our own URLs in competition for the same query. Being
 * noindex is what frees them to be written purely for conversion — no keyword
 * hedging, no duplicate-content compromise.
 *
 * Like /painting-estimate-houston, the site nav is deliberately omitted so paid
 * traffic isn't leaked into general browsing. The footer stays for legitimacy
 * and contact access.
 */

export interface ChatGPTLandingProps {
  /** Small label above the headline. */
  eyebrow: string
  headline: string
  subheadline: string
  /** Pre-answers step one of the form. Must match a step-one option. */
  presetService: string
  /** GA4 / CRM label identifying which landing page produced the lead. */
  source: string
  /** What the service covers — rendered as a two-column checklist. */
  scopeTitle: string
  scopeItems: string[]
  /** Before/after pair. Both must be real project photography. */
  beforeImage: string
  afterImage: string
  imageAlt: string
  /** How the work runs, in order. */
  process: { title: string; detail: string }[]
  /** Plain-language answer to "how long will this take?" */
  duration: string
  faqs: { question: string; answer: string }[]
}

export function ChatGPTLanding({
  eyebrow,
  headline,
  subheadline,
  presetService,
  source,
  scopeTitle,
  scopeItems,
  beforeImage,
  afterImage,
  imageAlt,
  process,
  duration,
  faqs,
}: ChatGPTLandingProps) {
  return (
    <>
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-16">
            <div className="order-1 flex flex-col justify-center lg:order-none">
              <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {eyebrow}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl lg:mt-4">
                {headline}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mt-5">
                {subheadline}
              </p>

              {/* Secondary CTA. The primary action is the form itself, which on
                  mobile sits directly below this block. */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="outline">
                  <a href={PHONE_HREF}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    Call {BUSINESS.phone}
                  </a>
                </Button>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  Replies within one business day
                </span>
              </div>

              <div className="hidden lg:mt-8 lg:block">
                <Credentials />
              </div>
            </div>

            {/* order-2 keeps the form directly under the headline on mobile so
                the first question is visible without scrolling. */}
            {/* min-w-0: as the grid child, its automatic minimum size is its
                content width, so the booking calendar's day strip widened this
                track past the page container instead of scrolling. */}
            <div id="estimate-form" className="order-2 min-w-0 lg:order-none lg:pl-2">
              <EstimateLeadForm source={source} presetService={presetService} />
            </div>

            <div className="order-3 lg:hidden">
              <Credentials />
            </div>
          </div>
        </section>

        {/* ── Before / after ───────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 lg:py-16">
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              A recent Houston project
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
              Real work from our own crews — not stock photography.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { label: "Before", src: beforeImage },
                { label: "After", src: afterImage },
              ].map(({ label, src }) => (
                <figure key={label} className="flex flex-col gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`${label} — ${imageAlt}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <figcaption className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                      {label}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── Scope ────────────────────────────────────────────── */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 lg:py-16">
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              {scopeTitle}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
              Everything below is itemized on your written estimate, so you can see what is
              included and what is not before any work begins.
            </p>

            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {scopeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────── */}
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 lg:py-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
                How the work runs
              </h2>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <Clock className="h-4 w-4 text-secondary" aria-hidden="true" />
                Typically {duration}
              </p>
            </div>

            {/* A genuine sequence, so numbered markers are load-bearing here. */}
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((phase, i) => (
                <li
                  key={phase.title}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Step {i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {phase.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto w-full max-w-3xl px-5 py-12 lg:py-16">
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              Common questions
            </h2>
            <dl className="mt-8 flex flex-col gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <dt className="font-display text-lg font-bold leading-snug text-foreground text-balance">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Closing CTA ──────────────────────────────────────── */}
        <section>
          <div className="mx-auto w-full max-w-3xl px-5 py-14 text-center lg:py-20">
            <h2 className="font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              Ready for a written estimate?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
              Free, itemized and no obligation. We&apos;ll confirm the details and schedule a
              walkthrough at your convenience.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href="#estimate-form">Get my free estimate</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Call {BUSINESS.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/**
 * Verified credentials only — rating and review count come from BUSINESS.trust,
 * and the wording is insurance-based because Texas does not license residential
 * painters. See docs/seo-audit-2026-08.md §1.4.
 */
function Credentials() {
  return (
    <ul
      aria-label="Credentials"
      className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6"
    >
      <li className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
        <ReviewsInline />
      </li>
      <li className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
        <ShieldCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
        Insured &amp; bonded · {BUSINESS.trust.liabilityCoverage} liability
      </li>
      <li className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
        <BadgeCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
        {BUSINESS.trust.warrantyYears}-year written warranty
      </li>
    </ul>
  )
}
