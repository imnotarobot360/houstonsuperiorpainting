import Image from "next/image"
import { BadgeCheck, Check, Clock, ShieldCheck, Star } from "lucide-react"
import { EstimateFunnel } from "@/components/estimate-funnel"
import { FunnelFooter } from "@/components/funnel-footer"
import { FunnelHeader } from "@/components/funnel-header"
import { LandingViewTracker } from "@/components/landing-view-tracker"
import { BUSINESS } from "@/lib/business"
import type { FunnelConfig } from "@/lib/funnel-config"

/**
 * Shared landing shell for all four estimate funnels.
 *
 * Single-purpose page: no nav links out, because every exit is a lost lead on
 * paid traffic. The only actions are the funnel and the phone number.
 */
export function EstimateLanding({ config }: { config: FunnelConfig }) {
  return (
    <>
      {/* Per-service view count — the denominator for every funnel drop-off
          rate. Renders nothing. */}
      <LandingViewTracker service={config.service} />

      <main className="min-h-screen bg-background">
        {/* Sticky, tracked, and no nav links. The phone number used to sit in an
            untracked inline bar here, so calls driven by ad spend were invisible
            in reporting. */}
        <FunnelHeader service={config.service} />

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
            {/* ── Pitch ────────────────────────────────────────────────── */}
            <div className="flex flex-1 flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{config.eyebrow}</span>

              <h1 className="font-serif text-4xl leading-[1.1] text-foreground text-balance sm:text-5xl">
                {config.h1}
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">{config.subhead}</p>

              <div className="flex items-center gap-3">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                {/* Rating and review count are two different claims and must
                    read as two different claims. The previous wording — "4.9
                    from 200+ Houston homeowners" — asserted that 200+ homeowners
                    produced that average, which the review count does not
                    establish and which we cannot substantiate. */}
                <p className="text-sm text-muted-foreground">
                  {BUSINESS.trust.googleRating} Google rating · {BUSINESS.trust.reviewCount}+ reviews
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={config.heroImage}
                  alt={config.heroImageAlt}
                  width={900}
                  height={600}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              <ul className="flex flex-col gap-3">
                {config.proofPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-base leading-relaxed text-foreground text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                  {/* Never "licensed" — Texas issues no residential painting
                      licence, so insured/bonded are the honest credentials.
                      See the note in lib/business.ts. */}
                  Insured and bonded · {BUSINESS.trust.liabilityCoverage} liability
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-accent" aria-hidden="true" />
                  {BUSINESS.trust.yearsInBusiness} years in Houston
                </span>
              </div>
            </div>

            {/* ── Funnel ───────────────────────────────────────────────── */}
            {/* `lg:top-20`, not `top-8`: the header is now sticky, so a smaller
                offset slid the funnel underneath it. This column's sticky does
                work — its parent is the tall two-column flex row, so there is
                real distance to travel. */}
            <div className="w-full lg:sticky lg:top-20 lg:w-[26rem] xl:w-[28rem]">
              {/* The single most important thing a visitor can learn above the
                  fold is that they can book a time themselves, right now,
                  without waiting for a callback. Previously that only became
                  apparent on the final step, so anyone who assumed "request a
                  quote" meant "wait for a salesperson" left before finding out. */}
              <div className="mb-4 flex flex-col gap-2 rounded-2xl border border-border bg-card/60 p-5">
                <h2 className="font-serif text-xl leading-tight text-foreground text-balance">
                  Get your free estimate in about 60 seconds
                </h2>
                <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  Answer a few quick questions, then choose your own appointment time on the spot — no waiting for a
                  callback.
                </p>
              </div>

              <EstimateFunnel config={config} />

              {/* "No deposit" implied money changes hands later in the process
                  and invited the question of when. What people actually want to
                  know is whether booking costs anything — so answer that. */}
              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground text-pretty">
                Free estimate · No obligation · No payment required to book. We&apos;ll only use your details to
                prepare this estimate.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Minimal legal footer, not the 240-line site footer. Keeping the full
          one here handed paid visitors a sitemap's worth of exits. */}
      <FunnelFooter />
    </>
  )
}
