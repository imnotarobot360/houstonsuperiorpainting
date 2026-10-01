// Instant estimate pricing model.
//
// Every price here comes from the tables published in /houston-painting-cost-guide
// (PRICES_2026 in lib/business.ts), so the calculator can never contradict the
// site's own cost guide. Interior and exterior prices are interpolated between the
// guide's home-size rows, so at each published size the calculator shows exactly
// what the guide shows. Ranges are deliberately wide — this is a ballpark, not a bid.

import { PRICES_2026 } from "@/lib/business"

export type ServiceId = "interior" | "exterior" | "cabinets" | "pressure-washing" | "drywall"

export interface Range {
  low: number
  high: number
}

/** "$4,000–$8,000" (or "$6,000–$9,000+") → { low: 4000, high: 9000 } */
function parseRange(text: string): Range {
  const [low, high] = text.split("–").map((part) => Number(part.replace(/[^0-9.]/g, "")))
  return { low, high }
}

interface SizePoint extends Range {
  sqft: number
}

const point = (sqft: number, price: string): SizePoint => ({ sqft, ...parseRange(price) })

/**
 * Price for a home size from the guide's size rows: straight-line between rows,
 * and the nearest row's price per sq ft outside the table.
 */
function priceForSize(points: SizePoint[], sqft: number): Range {
  const first = points[0]
  const last = points[points.length - 1]
  const edge = sqft <= first.sqft ? first : sqft >= last.sqft ? last : null
  if (edge) return { low: (edge.low * sqft) / edge.sqft, high: (edge.high * sqft) / edge.sqft }

  const i = points.findIndex((p) => p.sqft >= sqft)
  const a = points[i - 1]
  const b = points[i]
  const t = (sqft - a.sqft) / (b.sqft - a.sqft)
  return { low: a.low + t * (b.low - a.low), high: a.high + t * (b.high - a.high) }
}

export const SERVICES: Array<{ id: ServiceId; label: string; blurb: string }> = [
  { id: "interior", label: "Interior Painting", blurb: "Walls, ceilings & trim" },
  { id: "exterior", label: "Exterior Painting", blurb: "Siding, stucco & brick" },
  { id: "cabinets", label: "Cabinet Refinishing", blurb: "Kitchen & bath cabinets" },
  { id: "pressure-washing", label: "Pressure Washing", blurb: "Driveways, siding & decks" },
  { id: "drywall", label: "Drywall Repair", blurb: "Patches, cracks & texture" },
]

/** Cost guide "Full interior" rows (walls, ceilings & trim). */
const INTERIOR_FULL_BY_SIZE: SizePoint[] = [
  point(1500, PRICES_2026.fullInterior1500),
  point(2000, PRICES_2026.fullInterior2000),
  point(2500, PRICES_2026.fullInterior2500),
  point(4000, PRICES_2026.fullInterior4000),
]

/** Each finish scope as a share of the full walls, ceilings & trim price. */
export const INTERIOR_SCOPES: Array<{ id: string; label: string; factor: Range }> = [
  { id: "walls", label: "Walls only", factor: { low: 0.67, high: 0.56 } },
  { id: "walls-trim", label: "Walls & trim", factor: { low: 0.83, high: 0.78 } },
  { id: "full", label: "Walls, ceilings & trim", factor: { low: 1, high: 1 } },
  { id: "premium", label: "Premium / high-end finishes", factor: { low: 1.5, high: 1.33 } },
]

/** Cost guide exterior table, by stories. */
const EXTERIOR_ONE_STORY: SizePoint[] = [
  point(1500, PRICES_2026.exterior1500OneStory),
  point(2000, PRICES_2026.exterior2000OneStory),
  point(2500, PRICES_2026.exterior2500OneStory),
  point(3000, PRICES_2026.exterior3000OneStory),
  point(4000, PRICES_2026.exterior4000OneStory),
]
const EXTERIOR_TWO_STORY: SizePoint[] = [
  point(1500, PRICES_2026.exterior1500TwoStory),
  point(2000, PRICES_2026.exterior2000TwoStory),
  point(2500, PRICES_2026.exterior2500TwoStory),
  point(3000, PRICES_2026.exterior3000TwoStory),
  point(4000, PRICES_2026.exterior4000TwoStory),
]

/** 3+ stories: the guide says three-story homes add 20–40% for lifts and ladders. */
export const EXTERIOR_STORIES: Array<{ id: string; label: string; table: SizePoint[]; factor: Range }> = [
  { id: "1", label: "1 story", table: EXTERIOR_ONE_STORY, factor: { low: 1, high: 1 } },
  { id: "2", label: "2 stories", table: EXTERIOR_TWO_STORY, factor: { low: 1, high: 1 } },
  { id: "3", label: "3+ stories", table: EXTERIOR_TWO_STORY, factor: { low: 1.2, high: 1.4 } },
]

/** Cabinet refinishing — the cost guide's "Kitchen size" table. */
export const CABINET_SIZES: Array<{ id: string; label: string; total: Range }> = [
  { id: "small", label: "Galley (10–15 doors)", total: parseRange(PRICES_2026.cabinetsGalley) },
  { id: "average", label: "Average (15–25 doors)", total: parseRange(PRICES_2026.cabinetsAverage) },
  { id: "large", label: "Large with island (25–40 doors)", total: parseRange(PRICES_2026.cabinetsLarge) },
]

export const PRESSURE_WASH_SIZES: Array<{ id: string; label: string; total: Range }> = [
  { id: "driveway", label: "Driveway & walkways", total: { low: 250, high: 450 } },
  { id: "house", label: "House exterior", total: { low: 400, high: 800 } },
  { id: "full", label: "Full property", total: { low: 650, high: 1200 } },
]

export const DRYWALL_SIZES: Array<{ id: string; label: string; total: Range }> = [
  { id: "small", label: "A few small patches", total: { low: 250, high: 600 } },
  { id: "medium", label: "Several areas / one room", total: { low: 600, high: 1500 } },
  { id: "large", label: "Multiple rooms or ceiling damage", total: { low: 1500, high: 3500 } },
]

/**
 * The option each service should open on, chosen so the first number a visitor
 * sees matches the headline figure published in the cost guide tables
 * (e.g. interior opens on walls, ceilings & trim at 2,500 sq ft = PRICES_2026.fullInterior2500).
 */
export const DEFAULT_OPTION: Record<ServiceId, string> = {
  interior: "full",
  exterior: "1",
  cabinets: "average",
  "pressure-washing": "house",
  drywall: "medium",
}

/** Surface condition adds prep labor — the prep-first differentiator. */
export const CONDITIONS: Array<{ id: string; label: string; multiplier: number }> = [
  { id: "good", label: "Good — mostly cosmetic", multiplier: 1 },
  { id: "fair", label: "Fair — some patching needed", multiplier: 1.08 },
  { id: "poor", label: "Poor — peeling, rot or heavy repair", multiplier: 1.2 },
]

export interface CalcInput {
  service: ServiceId
  sqft: number
  option: string
  condition: string
}

/** Round to the nearest $50 so ranges read like estimates, not calculations. */
const round50 = (n: number) => Math.round(n / 50) * 50

const NO_SCALING: Range = { low: 1, high: 1 }

/** Apply a scope/stories factor and the surface condition, then round. */
function finish(base: Range, factor: Range, conditionId: string): Range {
  const condition = CONDITIONS.find((c) => c.id === conditionId)?.multiplier ?? 1
  return {
    low: round50(base.low * factor.low * condition),
    high: round50(base.high * factor.high * condition),
  }
}

/** Cost guide single room (12×14, ceiling and trim included). */
const SINGLE_ROOM: Range = parseRange(PRICES_2026.singleRoom)

/**
 * Price a room-sized interior job at the cost guide's single-room range.
 * `rooms` is the low and high room count (e.g. "2–3 rooms" = { low: 2, high: 3 }).
 */
export function roomsEstimate(rooms: Range, option: string, condition: string): Range | null {
  const scope = INTERIOR_SCOPES.find((s) => s.id === option)
  if (!scope) return null
  return finish({ low: SINGLE_ROOM.low * rooms.low, high: SINGLE_ROOM.high * rooms.high }, scope.factor, condition)
}

export function calculateEstimate(input: CalcInput): Range | null {
  if (input.service === "interior") {
    const scope = INTERIOR_SCOPES.find((s) => s.id === input.option)
    if (!scope || !input.sqft) return null
    return finish(priceForSize(INTERIOR_FULL_BY_SIZE, input.sqft), scope.factor, input.condition)
  }

  if (input.service === "exterior") {
    const story = EXTERIOR_STORIES.find((s) => s.id === input.option)
    if (!story || !input.sqft) return null
    return finish(priceForSize(story.table, input.sqft), story.factor, input.condition)
  }

  const table =
    input.service === "cabinets"
      ? CABINET_SIZES
      : input.service === "pressure-washing"
        ? PRESSURE_WASH_SIZES
        : DRYWALL_SIZES
  const match = table.find((t) => t.id === input.option)
  if (!match) return null
  return finish(match.total, NO_SCALING, input.condition)
}

export const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

export function formatRange(range: Range) {
  return `${formatUSD(range.low)} – ${formatUSD(range.high)}`
}

/** Whether the chosen service needs a square-footage input. */
export const needsSqft = (service: ServiceId) =>
  service === "interior" || service === "exterior"

export function optionsFor(service: ServiceId) {
  switch (service) {
    case "interior":
      return INTERIOR_SCOPES.map((s) => ({ id: s.id, label: s.label }))
    case "exterior":
      return EXTERIOR_STORIES.map((s) => ({ id: s.id, label: s.label }))
    case "cabinets":
      return CABINET_SIZES.map((s) => ({ id: s.id, label: s.label }))
    case "pressure-washing":
      return PRESSURE_WASH_SIZES.map((s) => ({ id: s.id, label: s.label }))
    case "drywall":
      return DRYWALL_SIZES.map((s) => ({ id: s.id, label: s.label }))
  }
}

export function optionLabelFor(service: ServiceId, optionId: string) {
  return optionsFor(service).find((o) => o.id === optionId)?.label ?? ""
}
