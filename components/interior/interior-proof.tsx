import { ReviewsInline } from "@/components/office-reviews"
import Image from "next/image"
import { BadgeCheck, Brush, CalendarCheck, ClipboardList, Quote, ShieldCheck, Sparkles, Star } from "lucide-react"
import { BUSINESS } from "@/lib/business"

/**
 * Below-the-fold proof for the interior paid landing page.
 *
 * Every claim here is drawn from existing site content — the Memorial
 * whole-home case study (lib/projects.ts) and the reviews already published in
 * components/testimonials.tsx — so nothing is invented for the ad page.
 */

// Real interior reviews already published on the site. Trimmed to interior work
// only; no new testimonials were written for this page.
const REVIEWS = [
  {
    name: "Sarah Mitchell",
    location: "Heights, Houston",
    project: "Full interior repaint",
    text: "Absolutely phenomenal work. The team was professional, punctual, and left our home spotless. The attention to detail on our trim work was impressive.",
  },
  {
    name: "Michael Thompson",
    location: "Memorial, Houston",
    project: "Whole-house interior",
    text: "Fast, clean, and professional. They finished our 4-bedroom house in just 3 days. The team was courteous and the quality speaks for itself.",
  },
  {
    name: "Emily Chen",
    location: "Sugar Land, TX",
    project: "Living room transformation",
    text: "The color consultation was a game-changer. They helped us choose the perfect palette and executed flawlessly. Our living room has never looked better.",
  },
]

const PROCESS = [
  {
    icon: ClipboardList,
    title: "Free written estimate",
    detail: "We measure the rooms, talk through colors and sheens, and hand you a line-item price — never a lump sum.",
  },
  {
    icon: ShieldCheck,
    title: "Prep done right",
    detail: "Furniture moved, floors covered, walls washed, patched and primed before a single finish coat goes on.",
  },
  {
    icon: Brush,
    title: "Premium two-coat finish",
    detail: "Sherwin-Williams coatings, crisp trim lines, and clean cut-ins by painters who do this every day.",
  },
  {
    icon: CalendarCheck,
    title: "Daylight walkthrough",
    detail: `We correct every flagged detail before sign-off, backed by a ${BUSINESS.trust.warrantyYears}-year written warranty.`,
  },
]

export function InteriorProof() {
  return (
    <>
      {/* ── Before / after ─────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Real Houston project</span>
            <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
              A dated Memorial home, brought back to life
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              A 4,200 sq ft whole-home repaint: 14 rooms, museum-grade wall prep, and a warm, cohesive palette in 9
              days.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/interior-before-1.png"
                  alt="Memorial living room with dated tan walls before interior repainting"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
              <figcaption className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Before
              </figcaption>
            </figure>
            <figure className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/interior-after-1.png"
                  alt="Memorial living room with fresh warm-white walls after interior repainting"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
              <figcaption className="text-center text-sm font-medium uppercase tracking-widest text-accent">
                After
              </figcaption>
            </figure>
          </div>

          <figure className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 text-center">
            <Quote className="size-7 text-primary/30" aria-hidden="true" />
            <blockquote className="font-serif text-xl leading-relaxed text-foreground text-balance">
              &ldquo;From the consultation to the final walkthrough, the experience felt genuinely white-glove. The prep
              work on our Memorial home was extraordinary.&rdquo;
            </blockquote>
            <figcaption className="text-sm text-muted-foreground">Catherine R., Memorial</figcaption>
          </figure>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How it works</span>
            <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
              What you get, start to finish
            </h2>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="font-serif text-lg leading-tight text-foreground text-balance">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-accent text-accent" />
                ))}
              </div>
              <ReviewsInline className="text-sm font-semibold text-foreground" />
            </div>
            <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
              Houston homeowners keep saying the same thing
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <figure key={review.name} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-foreground text-pretty">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <p className="mt-1 text-sm text-primary">{review.project}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantee band ─────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-serif text-2xl leading-tight text-foreground text-balance">
                Backed in writing, not just in words
              </h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                  Insured & bonded · {BUSINESS.trust.liabilityCoverage} liability
                </li>
                <li className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-accent" aria-hidden="true" />
                  {BUSINESS.trust.yearsInBusiness} years in Houston
                </li>
                <li className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="size-4 text-accent" aria-hidden="true" />
                  {BUSINESS.trust.warrantyYears}-year written warranty
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
