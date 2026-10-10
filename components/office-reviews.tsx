import Link from "next/link"
import { Star } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { REVIEW_PROFILES, type ReviewProfile } from "@/data/review-profiles"

// Location-specific Google review figures (owner, 2026-10-10). Each office shows
// its own rating and count from its own Google Business Profile, linked to that
// profile. No combined or rounded-up total is shown anywhere.

export const REVIEWS_PATH = "/reviews"

type Shown = ReviewProfile & { url: string; rating: number; reviewCount: number; city: string; pageSlug: string }

function officeFor(slug: string) {
  return BUSINESS.locations.find((l) => l.slug === slug)
}

/** Profiles with a verified URL, rating and count, largest first. */
export const SHOWN_PROFILES: Shown[] = REVIEW_PROFILES.flatMap((p) => {
  const o = officeFor(p.locationSlug)
  if (!o || !p.url || p.rating == null || p.reviewCount == null) return []
  return [{ ...p, url: p.url, rating: p.rating, reviewCount: p.reviewCount, city: o.city, pageSlug: o.pageSlug }]
}).sort((a, b) => b.reviewCount - a.reviewCount)

export function profileForPage(pageSlug: string): Shown | undefined {
  return SHOWN_PROFILES.find((p) => p.pageSlug === pageSlug)
}

const fmtRating = (r: number) => r.toFixed(1)
const plural = (n: number) => `${n} Google review${n === 1 ? "" : "s"}`

/** Plain-text version for FAQ answers and other string contexts. */
export function reviewSummaryText(): string {
  return SHOWN_PROFILES.map((p) => `${p.city} ${fmtRating(p.rating)} (${p.reviewCount})`).join(", ")
}

export const REVIEWS_CHECKED = SHOWN_PROFILES.map((p) => p.lastVerified).filter(Boolean).sort().at(-1) ?? null

/** One office: "★ 5.0 · 25 Google reviews (Houston office)" linked to that profile. */
export function OfficeReviewBadge({ pageSlug, className = "" }: { pageSlug: string; className?: string }) {
  const p = profileForPage(pageSlug)
  if (!p) return null
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 hover:underline ${className}`}>
      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
      <span>
        {fmtRating(p.rating)} · {plural(p.reviewCount)} ({p.city} office)
      </span>
    </a>
  )
}

/** Every office, compact: "Katy 4.9 (130) · Houston 5.0 (25) · …", each linked to its profile. */
export function ReviewsInline({ className = "", linkClassName = "" }: { className?: string; linkClassName?: string }) {
  if (SHOWN_PROFILES.length === 0) return null
  return (
    <span className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}>
      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
      <span>Google reviews:</span>
      {SHOWN_PROFILES.map((p, i) => (
        <span key={p.locationSlug} className="inline-flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">·</span>}
          <a href={p.url} target="_blank" rel="noopener noreferrer" className={`hover:underline ${linkClassName}`}>
            {p.city} {fmtRating(p.rating)} ({p.reviewCount})
          </a>
        </span>
      ))}
    </span>
  )
}

/** Short link for tight spaces (top bar on small screens). */
export function ReviewsLink({ className = "" }: { className?: string }) {
  return (
    <Link href={REVIEWS_PATH} className={`inline-flex items-center gap-1.5 hover:underline ${className}`}>
      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
      <span>Google reviews by office</span>
    </Link>
  )
}

/** Card grid for /reviews and the homepage. */
export function OfficeReviewCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SHOWN_PROFILES.map((p) => (
        <div key={p.locationSlug} className="rounded-xl border border-border bg-card p-5">
          <p className="font-semibold text-foreground">{p.city} office</p>
          <p className="mt-2 flex items-center gap-1.5 text-2xl font-bold text-foreground">
            <Star className="h-5 w-5 fill-gold text-gold" aria-hidden="true" />
            {fmtRating(p.rating)}
            <span className="text-base font-normal text-muted-foreground">· {plural(p.reviewCount)}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-2">
              Read reviews on Google
            </a>
            <Link href={`/${p.pageSlug}`} className="text-muted-foreground underline underline-offset-2">
              {p.city} page
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
