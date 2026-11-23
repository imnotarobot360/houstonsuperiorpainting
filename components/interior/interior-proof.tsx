import Image from "next/image"
import { BadgeCheck, Brush, CalendarCheck, ClipboardList, Quote, ShieldCheck, Sparkles, Star } from "lucide-react"
import { BeforeAfterSlider } from "@/components/epoxy/before-after-slider"
import { GoogleRatingBadge } from "@/components/google-rating-badge"
import { PUBLISHED_REVIEWS } from "@/data/reviews"
import { BUSINESS } from "@/lib/business"

/**
 * Below-the-fold proof for the interior paid landing page.
 *
 * Every claim here is drawn from existing site content — the Memorial
 * whole-home case study (lib/projects.ts) and the reviews already published in
 * components/testimonials.tsx — so nothing is invented for the ad page.
 */

// Reviews (owner brief 2026-11-22): the old hard-coded interior testimonials
// were placeholders and are gone. Only data/reviews.ts entries that are
// published, owner-confirmed or source-verified, and have an excerpt render;
// ones with a Google source come first.
const SHOWN_REVIEWS = PUBLISHED_REVIEWS.filter(
  (r) => r.verification === "source-verified" || r.verification === "owner-confirmed",
).sort((x, y) => Number(Boolean(y.sourceUrl)) - Number(Boolean(x.sourceUrl)))

/** About 220 characters, cut at a word boundary, with an ellipsis. */
function trimExcerpt(text: string, max = 220): string {
  const t = text.trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[s,;:.–—-]+$/, "")}…`
}

/** Default Memorial before/after photos; pass props to swap in other jobs. */
const DEFAULT_PHOTOS = {
  beforeSrc: "/images/interior-before-1.png",
  afterSrc: "/images/interior-after-1.png",
  beforeAlt: "Memorial living room with dated tan walls before interior repainting",
  afterAlt: "Memorial living room with fresh warm-white walls after interior repainting",
}

type InteriorProofProps = Partial<typeof DEFAULT_PHOTOS>

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

// FAQ (owner brief 2026-11-19): no prices and no new claims; the warranty and
// insurance answers come straight from lib/business.ts.
const FAQS = [
  {
    q: "How much does interior painting cost?",
    a: "The estimator above gives you a ballpark in about a minute. Your final price is a written line-item estimate after we measure.",
  },
  {
    q: "Do you move furniture?",
    a: "Yes. We move furniture and cover floors before work starts.",
  },
  {
    q: "How long does it take?",
    a: "It depends on the rooms and the prep they need. We confirm the schedule with your written estimate.",
  },
  { q: "What does the warranty cover?", a: BUSINESS.warranty.summary },
  { q: "Are you insured?", a: BUSINESS.insurance.sentence },
]

export function InteriorProof(props: InteriorProofProps = {}) {
  const photos = { ...DEFAULT_PHOTOS, ...props }
  return (
    <>
      {/* ── Before / after ─────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center">
            {/* Memorial case study in lib/projects.ts; photos and figures confirmed by Juan 2026-10-25. */}
            <span className="font-manrope text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-deep">Real Houston project</span>
            <h2 className="font-display text-[clamp(26px,4vw,34px)] leading-tight text-midnight text-balance sm:text-4xl">
              A dated Memorial home, brought back to life
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              A 4,200 sq ft whole-home repaint: 14 rooms, thorough wall prep, and a warm, cohesive palette in 9 days.
            </p>
          </div>

          {/* Phones: drag slider. md and up: side by side. */}
          <div className="md:hidden">
            <BeforeAfterSlider
              beforeSrc={photos.beforeSrc}
              afterSrc={photos.afterSrc}
              beforeAlt={photos.beforeAlt}
              afterAlt={photos.afterAlt}
            />
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-2">
            <figure className="flex flex-col gap-2">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={photos.beforeSrc}
                  alt={photos.beforeAlt}
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
                  src={photos.afterSrc}
                  alt={photos.afterAlt}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
              <figcaption className="text-center text-sm font-medium uppercase tracking-widest text-gold-deep">
                After
              </figcaption>
            </figure>
          </div>

          <figure className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 text-center">
            <Quote className="size-7 text-primary/30" aria-hidden="true" />
            <blockquote className="font-display text-xl leading-relaxed text-midnight text-balance">
              &ldquo;From the consultation to the final walkthrough, the experience felt genuinely white-glove. The prep
              work on our Memorial home was extraordinary.&rdquo;
            </blockquote>
            <figcaption className="text-sm text-muted-foreground">
              Catherine R., Memorial · Customer testimonial, published with permission.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center">
            <span className="font-manrope text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-deep">How it works</span>
            <h2 className="font-display text-[clamp(26px,4vw,34px)] leading-tight text-midnight text-balance sm:text-4xl">
              What you get, start to finish
            </h2>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-midnight text-white">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="font-display text-lg leading-tight text-midnight text-balance">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reviews ────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
            <GoogleRatingBadge />
            <h2 className="font-display text-[clamp(26px,4vw,34px)] leading-tight text-midnight text-balance sm:text-4xl">
              Houston homeowners keep saying the same thing
            </h2>
          </div>

          {/* Phones: first 3 in a horizontal swipe row. md and up: a grid of up to 6. */}
          <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {SHOWN_REVIEWS.slice(0, 6).map((review, i) => (
              <li
                key={review.name}
                className={`w-[85%] shrink-0 snap-start md:w-auto ${i >= 3 ? "hidden md:block" : ""}`}
              >
                <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                  {review.sourceUrl && (
                    <span className="flex" aria-label="5 out of 5 stars on Google">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-4 fill-gold text-gold" aria-hidden="true" />
                      ))}
                    </span>
                  )}
                  <blockquote className="flex-1 text-base leading-relaxed text-foreground text-pretty">
                    &ldquo;{trimExcerpt(review.excerpt)}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-end justify-between gap-3 border-t border-border pt-4">
                    <span>
                      <span className="block font-semibold text-foreground">{review.name}</span>
                      <span className="block text-sm text-muted-foreground">{review.area}</span>
                    </span>
                    {review.sourceUrl && (
                      <a
                        href={review.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs font-semibold text-midnight underline underline-offset-4 hover:text-gold-deep"
                      >
                        Read on Google
                      </a>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
          <h2 className="mb-8 text-center font-display text-[clamp(26px,4vw,34px)] leading-tight text-midnight text-balance sm:text-4xl">
            Common questions
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-midnight [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span aria-hidden="true" className="text-xl text-gold-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantee band ─────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl leading-tight text-midnight text-balance">
                Backed in writing, not just in words
              </h2>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="size-4 text-gold-deep" aria-hidden="true" />
                  {BUSINESS.insurance.badge}
                </li>
                <li className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="size-4 text-gold-deep" aria-hidden="true" />
                  {BUSINESS.trust.yearsInBusiness} years in Houston
                </li>
                <li className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="size-4 text-gold-deep" aria-hidden="true" />
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
