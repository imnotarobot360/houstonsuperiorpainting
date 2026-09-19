import { Star, ShieldCheck, BadgeCheck, Award } from "lucide-react"
import { Reveal } from "./reveal"
import { EPOXY, REVIEWS } from "@/lib/epoxy"

/**
 * Reviews / trust section.
 *
 * REVIEWS is empty by default (see lib/epoxy.ts) — we render factual trust
 * signals and a link to the real Google profile rather than fabricating
 * testimonials. Paste real reviews into REVIEWS and the cards appear.
 */

const TRUST = [
  { icon: ShieldCheck, label: `${EPOXY.warrantyYears}-Year Written Warranty`, sub: "Adhesion, peeling & delamination" },
  { icon: BadgeCheck, label: "Fully Insured", sub: "Fully covered on every job" },
  { icon: Award, label: `Serving Houston Since ${EPOXY.foundedYear}`, sub: "Local crews, no subcontractors" },
]

export function EpoxyReviews() {
  return (
    <section id="reviews" className="scroll-mt-20 border-t border-border bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Reputation
          </p>
          <h2 className="mt-3 font-manrope text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Houston Homeowners Trust Us
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {/* Attribution is explicit: this rating belongs to the parent company. */}
            Houston Superior Epoxy is the floor coating division of{" "}
            <span className="text-foreground">{EPOXY.parent}</span>, rated{" "}
            <span className="font-semibold text-foreground">
              {EPOXY.rating} stars across {EPOXY.reviewCount}+ reviews
            </span>{" "}
            for its painting and coating work across the Houston metro.
          </p>
        </Reveal>

        {/* Rating summary */}
        <Reveal delay={0.08} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-4">
            <span className="font-manrope text-3xl font-extrabold text-foreground">{EPOXY.rating}</span>
            <div>
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              {/* "verified" dropped: we can't substantiate that claim ourselves. */}
              <p className="mt-1 text-xs text-muted-foreground">
                {EPOXY.reviewCount}+ reviews of {EPOXY.parent}
              </p>
            </div>
            <span className="sr-only">
              {EPOXY.rating} out of 5 stars from {EPOXY.reviewCount} or more reviews
            </span>
          </div>

          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(EPOXY.parent + " Houston reviews")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-manrope text-sm font-bold uppercase tracking-wide text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
          >
            Read our reviews on Google
          </a>
        </Reveal>

        {/* Real reviews, once populated */}
        {REVIEWS.length > 0 && (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name + i} as="li" delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-sm border border-border bg-card p-6">
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {`"${r.quote}"`}
                  </blockquote>
                  <footer className="mt-5 border-t border-border pt-4">
                    <p className="font-manrope text-sm font-bold text-card-foreground">{r.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {r.location} &middot; {r.service}
                    </p>
                  </footer>
                </div>
              </Reveal>
            ))}
          </ul>
        )}

        {/* Factual trust signals */}
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {TRUST.map((t, i) => {
            const Icon = t.icon
            return (
              <Reveal key={t.label} as="li" delay={i * 0.08} className="bg-card p-6">
                <div className="contents">
                  <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-4 font-manrope text-sm font-bold uppercase tracking-tight text-card-foreground">
                    {t.label}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{t.sub}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
