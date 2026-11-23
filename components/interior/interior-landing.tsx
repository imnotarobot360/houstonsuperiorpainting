"use client"

import { GoogleRatingBadge } from "@/components/google-rating-badge"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { BadgeCheck, Check, Clock, Phone, ShieldCheck } from "lucide-react"
import { FunnelFooter } from "@/components/funnel-footer"
import { FunnelHeader } from "@/components/funnel-header"
import { LandingViewTracker } from "@/components/landing-view-tracker"
import { InteriorEstimator } from "@/components/interior/interior-estimator"
import { InteriorProof } from "@/components/interior/interior-proof"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEstimateClick } from "@/lib/analytics"
import { cn } from "@/lib/utils"

/**
 * Interior painting landing page for ChatGPT Ads.
 *
 * Single purpose: no nav links out — every exit is a lost lead on paid traffic.
 * The only actions are the estimator, the phone number and the sticky mobile
 * CTA (which scrolls to the estimator rather than leaving the page).
 */

const PROOF_POINTS = [
  "Instant ballpark price — before you give any contact details",
  "Written line-item estimate, never a lump sum",
  `${BUSINESS.trust.warrantyYears}-year written workmanship warranty on qualifying painting`,
  "Furniture moved and floors covered before we open a can",
]

export function InteriorLanding() {
  const estimatorRef = useRef<HTMLDivElement>(null)
  // The mobile CTA bar is a shortcut back to the estimator when it's scrolled
  // out of view. While the estimator is on screen it's both redundant and, at
  // ~72px tall, capable of covering the estimator's own bottom controls — so
  // hide it whenever any part of the estimator is visible.
  const [estimatorVisible, setEstimatorVisible] = useState(true)

  useEffect(() => {
    const node = estimatorRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setEstimatorVisible(entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  function scrollToEstimator() {
    trackEstimateClick("interior_sticky_cta")
    estimatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <LandingViewTracker service="interior" />

      {/* pb-24 leaves room for the fixed mobile CTA bar so it never covers the
          footer's legal links. */}
      <main className="min-h-screen bg-soft-white pb-24 lg:pb-0">
        <FunnelHeader service="interior" tone="midnight" />

        {/* ── Hero + estimator ─────────────────────────────────────────────── */}
        {/* Midnight hero, gold eyebrow and orange CTAs match /offer/free-estimate
            (owner 2026-11-19). */}
        <section className="bg-midnight text-white">
          {/* Owner brief 2026-11-22: on phones the estimator sits directly under
              the H1 + a one-line subheadline so Step 1's answers are visible at
              390x844 without scrolling; the photo, bullets and trust row follow
              it. Desktop keeps the pitch left / estimator right layout: a
              two-column grid where the estimator spans both pitch rows. */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-10 pt-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-6 lg:py-16 xl:grid-cols-[minmax(0,1fr)_28rem]">
            {/* Pitch, top: eyebrow, H1, subheadline, rating badge */}
            <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-1 lg:gap-6">
              <span className="hidden font-manrope text-[13px] font-semibold uppercase tracking-[0.12em] text-gold lg:block">
                Interior painting · Houston
              </span>

              <h1 className="font-display text-[clamp(28px,5vw,52px)] font-extrabold leading-[1.1] text-white text-balance">
                See your interior painting price in about 60 seconds
              </h1>

              <p className="text-[15px] leading-snug text-white/85 lg:hidden">
                Answer 5 quick taps, see your price instantly, no contact info needed.
              </p>
              <p className="hidden max-w-xl text-lg leading-relaxed text-white/85 text-pretty lg:block">
                Answer a few quick questions and get an instant ballpark — then we&apos;ll come measure, walk the rooms
                with you, and put a written line-item price in your hands.
              </p>

              <div className="hidden lg:block">
                <GoogleRatingBadge tone="dark" />
              </div>
            </div>

            {/* Estimator */}
            <div
              id="estimator"
              ref={estimatorRef}
              className="w-full scroll-mt-24 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start"
            >
              {/* Desktop only: on phones this repeated the H1, so its microline
                  moved inside the estimator card. */}
              <div className="mb-4 hidden flex-col gap-2 rounded-2xl bg-white p-5 text-foreground lg:flex">
                <h2 className="font-display text-xl leading-tight text-midnight text-balance">
                  Get your free estimate in about 60 seconds
                </h2>
                <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden="true" />
                  Answer a few quick questions and see your ballpark price instantly — then book your own time, no
                  waiting for a callback.
                </p>
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-foreground">
                  <span>About 60 seconds</span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    &middot;
                  </span>
                  <span>Free estimate</span>
                  <span aria-hidden="true" className="text-muted-foreground">
                    &middot;
                  </span>
                  <span>No obligation</span>
                </p>
              </div>

              <InteriorEstimator />

              <p className="mt-4 text-center text-xs leading-relaxed text-white/70 text-pretty">
                Free estimate · No obligation · No payment required to book. We&apos;ll only use your details to prepare
                this estimate.
              </p>
            </div>

            {/* Pitch, bottom: photo, bullets, trust row (below the estimator on phones) */}
            <div className="flex flex-col gap-6 pt-4 lg:col-start-1 lg:row-start-2 lg:pt-0">
              <div className="lg:hidden">
                <GoogleRatingBadge tone="dark" />
              </div>

              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/images/interior-after-1.jpg"
                  alt="Memorial living room with fresh warm-white walls after interior repainting"
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>

              <ul className="flex flex-col gap-3">
                {PROOF_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-base leading-relaxed text-white text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6">
                <span className="inline-flex items-center gap-2 text-sm text-white/80">
                  <ShieldCheck className="size-4 text-gold" aria-hidden="true" />
                  {BUSINESS.insurance.badge}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-white/80">
                  <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
                  {BUSINESS.trust.yearsInBusiness} years in Houston
                </span>
              </div>
            </div>
          </div>
        </section>

        <InteriorProof />
      </main>

      <FunnelFooter tone="midnight" googleProfiles />

      {/* ── Sticky mobile CTA ────────────────────────────────────────────────
          Scrolls to the estimator rather than leaving the page. The call button
          is a normal tel: link, so the delegated handler in GoogleAnalytics
          tracks it — no onClick here, which would double-count. */}
      <div
        aria-hidden={estimatorVisible}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 transition-transform duration-300 lg:hidden",
          estimatorVisible ? "pointer-events-none translate-y-full" : "translate-y-0",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <button
            type="button"
            onClick={scrollToEstimator}
            className="min-h-12 flex-1 rounded-lg bg-secondary px-4 text-center text-[15px] font-bold text-secondary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get my free estimate
          </button>
          <a
            href={PHONE_HREF}
            data-contact-location="interior_sticky_bar"
            data-contact-service="interior"
            aria-label={`Call ${BUSINESS.phone}`}
            className="inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-lg bg-midnight px-4 text-white hover:bg-midnight/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  )
}
