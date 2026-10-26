import Link from "next/link"
import { Star } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { REVIEW_PROFILES, type ReviewProfile } from "@/data/review-profiles"
import { PUBLISHED_REVIEWS } from "@/data/reviews"

// Google review links, one per Google Business Profile (owner, 2026-10-10;
// owner brief 2026-10-25, phase 6). Profiles are never combined into an
// aggregate, and no rating or count is hard-coded in copy.
//
// SHOW_RATING_NUMBERS: the brief allows rating/count figures only when they can
// be verified programmatically. The figures in data/review-profiles.ts were
// checked by hand (lastVerified), so the default is to OMIT the numbers and link
// to each profile ("Read verified customer reviews on Google"). If numbers are
// switched on, every figure renders with its profile link, its location label and
// the date it was last checked, and only profiles checked within MAX_AGE_DAYS
// show numbers.

export const REVIEWS_PATH = "/reviews"
export const SHOW_RATING_NUMBERS = false
const MAX_AGE_DAYS = 60

type Shown = ReviewProfile & { url: string; city: string; pageSlug: string; label: string }

function locationFor(slug: string) {
  return BUSINESS.locations.find((l) => l.slug === slug)
}

/** Profiles with a known URL, largest first. */
export const SHOWN_PROFILES: Shown[] = REVIEW_PROFILES.flatMap((p) => {
  const o = locationFor(p.locationSlug)
  if (!o || !p.url) return []
  return [{ ...p, url: p.url, city: o.city, pageSlug: o.pageSlug, label: `${o.city} Google profile` }]
}).sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0))

export function profileForPage(pageSlug: string): Shown | undefined {
  return SHOWN_PROFILES.find((p) => p.pageSlug === pageSlug)
}

const fmtDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })

/** Rating figures for a profile, or null when they may not be printed. */
function numbersFor(p: Shown): { rating: number; count: number; checked: string } | null {
  if (!SHOW_RATING_NUMBERS || p.verification !== "checked-on-google" || !p.lastVerified) return null
  if (p.rating == null || p.reviewCount == null) return null
  const age = (Date.now() - new Date(`${p.lastVerified}T12:00:00Z`).getTime()) / 86400000
  if (age > MAX_AGE_DAYS) return null
  return { rating: p.rating, count: p.reviewCount, checked: fmtDate(p.lastVerified) }
}

/** Plain-text version for FAQ answers and other string contexts. */
export function reviewSummaryText(): string {
  return `Read verified customer reviews on Google: ${SHOWN_PROFILES.map((p) => {
    const n = numbersFor(p)
    return n ? `${p.label} ${n.rating.toFixed(1)} from ${n.count} reviews (checked ${n.checked})` : p.label
  }).join(", ")}.`
}

export const REVIEWS_CHECKED = SHOWN_PROFILES.map((p) => p.lastVerified).filter(Boolean).sort().at(-1) ?? null

/** One profile, linked: "Read verified customer reviews on Google (Houston)". */
export function OfficeReviewBadge({ pageSlug, className = "" }: { pageSlug: string; className?: string }) {
  const p = profileForPage(pageSlug)
  if (!p) return null
  const n = numbersFor(p)
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 hover:underline ${className}`}>
      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
      <span>
        {n
          ? `${n.rating.toFixed(1)} · ${n.count} Google reviews (${p.label}, checked ${n.checked})`
          : `Read verified customer reviews on Google (${p.city})`}
      </span>
    </a>
  )
}

/** Every profile, compact, each linked to its own Google profile. */
export function ReviewsInline({ className = "", linkClassName = "" }: { className?: string; linkClassName?: string }) {
  if (SHOWN_PROFILES.length === 0) return null
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}>
      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
      <span>Read verified customer reviews on Google:</span>
      {SHOWN_PROFILES.map((p, i) => {
        const n = numbersFor(p)
        return (
          <span key={p.locationSlug} className="inline-flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">·</span>}
            <a href={p.url} target="_blank" rel="noopener noreferrer" className={`hover:underline ${linkClassName}`}>
              {n ? `${p.city} ${n.rating.toFixed(1)} (${n.count}, checked ${n.checked})` : p.city}
            </a>
          </span>
        )
      })}
    </span>
  )
}

/** Short link for tight spaces (top bar on small screens). */
export function ReviewsLink({ className = "" }: { className?: string }) {
  return (
    <Link href={REVIEWS_PATH} className={`inline-flex items-center gap-1.5 hover:underline ${className}`}>
      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
      <span>Read verified customer reviews on Google</span>
    </Link>
  )
}

/** Published quotes from this profile, each linked to its Google source; renders nothing when there are none. */
export function OfficeQuotes({ pageSlug }: { pageSlug: string }) {
  const p = profileForPage(pageSlug)
  if (!p) return null
  const quotes = PUBLISHED_REVIEWS.filter((r) => r.sourceUrl === p.url)
  if (quotes.length === 0) return null
  return (
    <section className="container mx-auto px-4 max-w-4xl mb-14">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">What {p.city} customers say</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {quotes.map((r) => (
          <figure key={r.name} className="rounded-xl border border-border bg-card p-6">
            <blockquote className="text-lg leading-relaxed text-foreground">&ldquo;{r.excerpt}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{r.name}</span>, {r.area} ·{" "}
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Read on Google
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

/** Card grid for /reviews and the homepage: one card per Google Business Profile. */
export function OfficeReviewCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SHOWN_PROFILES.map((p) => {
        const n = numbersFor(p)
        return (
          <div key={p.locationSlug} className="rounded-xl border border-border bg-card p-5">
            <p className="font-semibold text-foreground">{p.label}</p>
            {n ? (
              <p className="mt-2 flex items-center gap-1.5 text-2xl font-bold text-foreground">
                <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
                {n.rating.toFixed(1)}
                <span className="text-base font-normal text-muted-foreground">
                  · {n.count} Google reviews, checked {n.checked}
                </span>
              </p>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">Read verified customer reviews on Google.</p>
            )}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-2">
                Read reviews on Google
              </a>
              <Link href={`/${p.pageSlug}`} className="text-muted-foreground underline underline-offset-2">
                {p.city} page
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
