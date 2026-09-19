// Instant estimate pricing model.
//
// Every rate here is derived from the figures already published in
// /houston-painting-cost-guide so the calculator can never contradict the
// site's own cost guide. Ranges are deliberately wide — this is a ballpark,
// not a bid.

export type ServiceId = "interior" | "exterior" | "cabinets" | "pressure-washing" | "drywall"

export interface Range {
  low: number
  high: number
}

export const SERVICES: Array<{ id: ServiceId; label: string; blurb: string }> = [
  { id: "interior", label: "Interior Painting", blurb: "Walls, ceilings & trim" },
  { id: "exterior", label: "Exterior Painting", blurb: "Siding, stucco & brick" },
  { id: "cabinets", label: "Cabinet Refinishing", blurb: "Kitchen & bath cabinets" },
  { id: "pressure-washing", label: "Pressure Washing", blurb: "Driveways, siding & decks" },
  { id: "drywall", label: "Drywall Repair", blurb: "Patches, cracks & texture" },
]

/** Interior $/sq ft by finish scope — cost guide: $2.50–$4.50/sq ft overall. */
export const INTERIOR_SCOPES: Array<{ id: string; label: string; rate: Range }> = [
  { id: "walls", label: "Walls only", rate: { low: 2.0, high: 2.5 } },
  { id: "walls-trim", label: "Walls & trim", rate: { low: 2.5, high: 3.5 } },
  { id: "full", label: "Walls, ceilings & trim", rate: { low: 3.0, high: 4.5 } },
  { id: "premium", label: "Premium / high-end finishes", rate: { low: 4.5, high: 6.0 } },
]

/** Exterior $/sq ft by stories. 1-story reproduces the published
 *  "2,500 sq ft single-story = $5,500–$8,500" exactly. */
export const EXTERIOR_STORIES: Array<{ id: string; label: string; rate: Range }> = [
  { id: "1", label: "1 story", rate: { low: 2.2, high: 3.4 } },
  { id: "2", label: "2 stories", rate: { low: 2.6, high: 4.2 } },
  { id: "3", label: "3+ stories", rate: { low: 3.2, high: 5.0 } },
]

/** Cabinet refinishing — mirrors the "By Kitchen Size" table in the cost guide. */
export const CABINET_SIZES: Array<{ id: string; label: string; total: Range }> = [
  { id: "small", label: "Small (10–15 doors)", total: { low: 2500, high: 4000 } },
  { id: "average", label: "Average (20–30 doors)", total: { low: 3500, high: 6000 } },
  { id: "large", label: "Large (30–40 doors)", total: { low: 5500, high: 8000 } },
  { id: "xl", label: "Extra large (40+ doors)", total: { low: 7500, high: 12000 } },
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
 * (e.g. interior defaults to walls+ceilings+trim = $3.00–$4.50/sq ft, which
 * reproduces the published "2,500 sq ft = $7,500–$11,250").
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

export function calculateEstimate(input: CalcInput): Range | null {
  const condition =
    CONDITIONS.find((c) => c.id === input.condition)?.multiplier ?? 1

  let base: Range | null = null

  if (input.service === "interior") {
    const scope = INTERIOR_SCOPES.find((s) => s.id === input.option)
    if (!scope || !input.sqft) return null
    base = { low: scope.rate.low * input.sqft, high: scope.rate.high * input.sqft }
  } else if (input.service === "exterior") {
    const story = EXTERIOR_STORIES.find((s) => s.id === input.option)
    if (!story || !input.sqft) return null
    base = { low: story.rate.low * input.sqft, high: story.rate.high * input.sqft }
  } else {
    const table =
      input.service === "cabinets"
        ? CABINET_SIZES
        : input.service === "pressure-washing"
          ? PRESSURE_WASH_SIZES
          : DRYWALL_SIZES
    const match = table.find((t) => t.id === input.option)
    if (!match) return null
    base = { ...match.total }
  }

  return {
    low: round50(base.low * condition),
    high: round50(base.high * condition),
  }
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
