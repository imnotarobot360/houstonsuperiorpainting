import { ReviewsInline } from "@/components/office-reviews"
import Image from "next/image"
import { BadgeCheck, Check, Clock, ShieldCheck } from "lucide-react"
import { EstimateFunnel } from "@/components/estimate-funnel"
import { FunnelFooter } from "@/components/funnel-footer"
import { FunnelHeader } from "@/components/funnel-header"
import { FunnelStickyBar } from "@/components/funnel-sticky-bar"
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

      {/* pb-24 leaves room for the fixed phone bar so it never covers the
          footer's legal links. */}
      <main className="min-h-screen bg-soft-white pb-24 lg:pb-0">
        {/* Sticky, tracked, and no nav links. The phone number used to sit in an
            untracked inline bar here, so calls driven by ad spend were invisible
            in reporting. */}
        <FunnelHeader service={config.service} tone="midnight" />

        {/* Midnight hero, gold eyebrow and white logo match /offer/free-estimate
            (owner 2026-11-19). */}
        <section className="bg-midnight text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:gap-14 lg:py-16">
            {/* ── Pitch ────────────────────────────────────────────────── */}
            <div className="flex flex-1 flex-col gap-6">
              <span className="font-manrope text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">{config.eyebrow}</span>

              <h1 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] text-white text-balance">
                {config.h1}
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-white/85 text-pretty">{config.subhead}</p>

              <div className="flex items-center gap-3">
                {/* Rating and review count are two different claims and must
                    read as two different claims. The previous wording — "4.9
                    from 200+ Houston homeowners" — asserted that 200+ homeowners
                    produced that average, which the review count does not
                    establish and which we cannot substantiate. */}
                <p className="text-sm text-white/80">
                  <ReviewsInline linkClassName="text-white underline underline-offset-4 hover:text-gold" />
                </p>
              </div>

              <div className="overflow-hidden rounded-xl">
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
                    <Check className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-base leading-relaxed text-white text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6">
                <span className="inline-flex items-center gap-2 text-sm text-white/80">
                  <ShieldCheck className="size-4 text-gold" aria-hidden="true" />
                  {/* Never "licensed" — Texas issues no residential painting
                      licence, so insured/bonded are the honest credentials.
                      See the note in lib/business.ts. */}
                  {BUSINESS.insurance.badge}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-white/80">
                  <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
                  {BUSINESS.trust.yearsInBusiness} years in Houston
                </span>
              </div>
            </div>

            {/* ── Funnel ───────────────────────────────────────────────── */}
            {/* `lg:top-20`, not `top-8`: the header is now sticky, so a smaller
                offset slid the funnel underneath it. This column's sticky does
                work — its parent is the tall two-column flex row, so there is
                real distance to travel. */}
            <div id="estimate" className="w-full scroll-mt-24 lg:sticky lg:top-20 lg:w-[26rem] xl:w-[28rem]">
              {/* The single most important thing a visitor can learn above the
                  fold is that they can book a time themselves, right now,
                  without waiting for a callback. Previously that only became
                  apparent on the final step, so anyone who assumed "request a
                  quote" meant "wait for a salesperson" left before finding out. */}
              <div className="mb-4 flex flex-col gap-2 rounded-2xl bg-white p-5 text-foreground">
                <h2 className="font-display text-xl leading-tight text-midnight text-balance">
                  Get your free estimate in about 60 seconds
                </h2>
                <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden="true" />
                  Answer a few quick questions, then choose your own appointment time on the spot — no waiting for a
                  callback.
                </p>
              </div>

              <EstimateFunnel config={config} />

              {/* "No deposit" implied money changes hands later in the process
                  and invited the question of when. What people actually want to
                  know is whether booking costs anything — so answer that. */}
              <p className="mt-4 text-center text-xs leading-relaxed text-white/70 text-pretty">
                Free estimate · No obligation · No payment required to book. We&apos;ll only use your details to
                prepare this estimate.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Minimal legal footer, not the 240-line site footer. Keeping the full
          one here handed paid visitors a sitemap's worth of exits. */}
      <FunnelFooter tone="midnight" />

      <FunnelStickyBar targetId="estimate" service={config.service} />
    </>
  )
}
