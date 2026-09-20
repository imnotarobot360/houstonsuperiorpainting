"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { BadgeCheck, Check, Clock, Phone, ShieldCheck, Star } from "lucide-react"
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
  `${BUSINESS.trust.warrantyYears}-year written warranty on every job`,
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
      <main className="min-h-screen bg-background pb-24 lg:pb-0">
        <FunnelHeader service="interior" />

        {/* ── Hero + estimator ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
            {/* Pitch */}
            <div className="flex flex-1 flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Interior painting · Houston
              </span>

              <h1 className="font-serif text-4xl leading-[1.1] text-foreground text-balance sm:text-5xl">
                See your interior painting price in about 60 seconds
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Answer a few quick questions and get an instant ballpark — then we&apos;ll come measure, walk the rooms
                with you, and put a written line-item price in your hands.
              </p>

              <div className="flex items-center gap-3">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {BUSINESS.trust.googleRating} Google rating · {BUSINESS.trust.reviewCount}+ reviews
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/luxury/project-interior.png"
                  alt="Freshly painted Houston living room with clean trim lines"
                  width={900}
                  height={600}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              <ul className="flex flex-col gap-3">
                {PROOF_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-base leading-relaxed text-foreground text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                  Insured and bonded · {BUSINESS.trust.liabilityCoverage} liability
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-accent" aria-hidden="true" />
                  {BUSINESS.trust.yearsInBusiness} years in Houston
                </span>
              </div>
            </div>

            {/* Estimator */}
            <div id="estimator" className="w-full scroll-mt-24 lg:sticky lg:top-20 lg:w-[26rem] xl:w-[28rem]">
              <div className="mb-4 flex flex-col gap-2 rounded-2xl border border-border bg-card/60 p-5">
                <h2 className="font-serif text-xl leading-tight text-foreground text-balance">
                  Get your free estimate in about 60 seconds
                </h2>
                <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  Answer a few quick questions and see your ballpark price instantly — then book your own time, no
                  waiting for a callback.
                </p>
              </div>

              <InteriorEstimator />

              <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground text-pretty">
                Free estimate · No obligation · No payment required to book. We&apos;ll only use your details to prepare
                this estimate.
              </p>
            </div>
          </div>
        </section>

        <InteriorProof />
      </main>

      <FunnelFooter />

      {/* ── Sticky mobile CTA ────────────────────────────────────────────────
          Scrolls to the estimator rather than leaving the page. The call button
          is a normal tel: link, so the delegated handler in GoogleAnalytics
          tracks it — no onClick here, which would double-count. */}
      <div
        aria-hidden={estimatorVisible}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden",
          estimatorVisible ? "pointer-events-none translate-y-full" : "translate-y-0",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3">
          <button
            type="button"
            onClick={scrollToEstimator}
            className="flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get my free estimate
          </button>
          <a
            href={PHONE_HREF}
            data-contact-location="interior_sticky_bar"
            data-contact-service="interior"
            aria-label={`Call ${BUSINESS.phone}`}
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-border text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  )
}
