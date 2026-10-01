// Interior paid-funnel estimator model.
//
// This is the data + mapping layer for the interior ChatGPT-Ads landing page
// estimator (components/interior/interior-estimator.tsx). It deliberately does
// NOT invent any pricing: the dollar range is produced by
// `calculateEstimate` / `roomsEstimate` from lib/estimate-pricing.ts, whose
// prices come from the tables published in /houston-painting-cost-guide. This file only
// translates the estimator's plain-language answers into that model's inputs
// (home size in sq ft, finish scope, surface condition).
//
// Answer keys (scope/size/includes/prep/timeline) match the interior question
// ids in lib/funnel-config.ts, so every answer persists through /api/leads and
// renders on the confirmation page and the office email exactly like the
// shared funnel's answers do.

import { calculateEstimate, formatRange, roomsEstimate, type Range } from "@/lib/estimate-pricing"

export interface InteriorAnswers {
  scope?: string
  size?: string
  includes?: string[]
  prep?: string
  timeline?: string
}

// ── Question 1: what to paint ────────────────────────────────────────────────
export const SCOPE_OPTIONS = [
  "Whole interior",
  "Several rooms",
  "One or two rooms",
  "Walls & trim only",
  "Something else",
] as const

/** Scopes that size themselves by home square footage rather than room count. */
const WHOLE_HOME_SCOPES = new Set<string>(["Whole interior"])

// ── Question 2a: whole-home size buckets → representative sq ft ───────────────
// Midpoints of each bucket. "Not sure" uses the Houston median so the ballpark
// still lands in a believable place rather than refusing to show a number.
export const HOME_SIZE_OPTIONS: Array<{ label: string; sqft: number }> = [
  { label: "Under 1,500 sq ft", sqft: 1250 },
  { label: "1,500 – 2,499 sq ft", sqft: 2000 },
  { label: "2,500 – 3,499 sq ft", sqft: 3000 },
  { label: "3,500 – 4,499 sq ft", sqft: 4000 },
  { label: "4,500+ sq ft", sqft: 5000 },
  { label: "Not sure", sqft: 2500 },
]

// ── Question 2b: room count → low/high number of rooms ───────────────────────
// Priced at the cost guide's single-room range. "Not sure" assumes 2–3 rooms.
export const ROOM_SIZE_OPTIONS: Array<{ label: string; rooms: Range }> = [
  { label: "1 room", rooms: { low: 1, high: 1 } },
  { label: "2 – 3 rooms", rooms: { low: 2, high: 3 } },
  { label: "4 – 5 rooms", rooms: { low: 4, high: 5 } },
  { label: "6+ rooms", rooms: { low: 6, high: 8 } },
  { label: "Not sure", rooms: { low: 2, high: 3 } },
]

// ── Question 3: what to include (multi-select) ───────────────────────────────
export const INCLUDE_OPTIONS = [
  "Walls",
  "Ceilings",
  "Baseboards & trim",
  "Doors & closets",
  "Crown molding",
  "Drywall / texture repairs",
] as const

const TRIM_INCLUDES = new Set<string>(["Baseboards & trim", "Doors & closets", "Crown molding"])

// ── Question 4: prep level → condition multiplier id ─────────────────────────
export const PREP_OPTIONS = [
  "Good condition — cosmetic only",
  "Some repairs needed",
  "Heavy prep — lots of repairs",
  "Not sure",
] as const

// ── Question 5: timeline ─────────────────────────────────────────────────────
export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 – 2 weeks",
  "Within a month",
  "1 – 3 months",
  "Just researching prices",
] as const

/** Which size list a given scope should present. */
export function sizeOptionsForScope(scope: string | undefined): Array<{ label: string }> {
  return scope && WHOLE_HOME_SCOPES.has(scope) ? HOME_SIZE_OPTIONS : ROOM_SIZE_OPTIONS
}

export function sizeQuestionLabel(scope: string | undefined): string {
  return scope && WHOLE_HOME_SCOPES.has(scope)
    ? "About how large is your home?"
    : "About how many rooms are we painting?"
}


/**
 * Map the multi-select "includes" answer to an interior finish scope id from
 * lib/estimate-pricing.ts. Ceilings plus any trim work is the full-scope rate;
 * either one alone is the walls-and-trim rate; walls only is the base rate.
 */
function scopeIdFromIncludes(includes: string[] | undefined): string {
  const set = new Set(includes ?? [])
  const hasCeilings = set.has("Ceilings")
  const hasTrim = [...TRIM_INCLUDES].some((t) => set.has(t))

  if (hasCeilings && hasTrim) return "full"
  if (hasCeilings || hasTrim) return "walls-trim"
  return "walls"
}

/**
 * Map prep level (and any repair work selected) to a condition id from
 * lib/estimate-pricing.ts. Selecting drywall/texture repairs nudges an
 * otherwise "good" job up to "fair", since that work is real added prep.
 */
function conditionIdFromAnswers(answers: InteriorAnswers): string {
  const repairs = (answers.includes ?? []).includes("Drywall / texture repairs")

  switch (answers.prep) {
    case "Heavy prep — lots of repairs":
      return "poor"
    case "Some repairs needed":
      return "fair"
    case "Good condition — cosmetic only":
      return repairs ? "fair" : "good"
    default:
      // "Not sure" (or unanswered): assume a little prep rather than none.
      return "fair"
  }
}

/**
 * Produce the ballpark dollar range for the current answers, or null when we
 * genuinely can't estimate it (e.g. scope "Something else", or no size chosen).
 * A null result is a real state the UI handles — it shows an on-site-quote
 * message instead of a fabricated number.
 */
export function computeInteriorRange(answers: InteriorAnswers): Range | null {
  if (answers.scope === "Something else") return null

  const option = scopeIdFromIncludes(answers.includes)
  const condition = conditionIdFromAnswers(answers)

  if (answers.scope && WHOLE_HOME_SCOPES.has(answers.scope)) {
    const home = HOME_SIZE_OPTIONS.find((o) => o.label === answers.size)
    return home ? calculateEstimate({ service: "interior", sqft: home.sqft, option, condition }) : null
  }

  const rooms = ROOM_SIZE_OPTIONS.find((o) => o.label === answers.size)
  return rooms ? roomsEstimate(rooms.rooms, option, condition) : null
}

export function formatInteriorRange(range: Range): string {
  return formatRange(range)
}
