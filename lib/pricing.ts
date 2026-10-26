// lib/pricing.ts
// The ONE pricing source for the site (owner brief 2026-10-25, phase 5). Cost
// guides, service pages, location pages, FAQs and structured data read from here;
// lib/business.ts re-exports these names for older imports.
//
// These are Houston Superior Painting budgeting guidance: company ranges for
// planning, not quotes and not independently sourced "market rates". Every price
// table shows PRICING_DISCLAIMER, which carries the label and the review date.
//
// Rules from the brief:
//   - Interior per-square-foot figures are per sq ft of FLOOR area, never wall area.
//   - No flat exterior per-square-foot formula: exterior prices are project-specific
//     (elevations, stories, access, substrate, repairs). Example budgets by home size
//     are labeled as examples.
//   - Commercial figures always name their unit (wall area, door count).
//   - Calculated examples are derived from the rates below, never typed by hand.

export const PRICING_META = {
  label: "Houston Superior Painting budgeting guidance",
  /** ISO date the owner-approved ranges were last reviewed. */
  lastReviewed: "2026-10-25",
  lastReviewedDisplay: "October 25, 2026",
} as const

/** Shown under every price table (components/aeo/blocks.tsx PriceTable). */
export const PRICING_DISCLAIMER = `${PRICING_META.label}, last reviewed ${PRICING_META.lastReviewedDisplay}. These are budgeting ranges, not quotes. Final pricing depends on the surfaces, preparation, repairs, ceiling height, trim, doors, number of colors, paint products, access and project conditions. Houston Superior Painting provides a written estimate for the final scope and price.`

/** Numeric rates the calculated examples are built from. */
export const RATES = {
  /** Interior painting, USD per square foot of FLOOR area. */
  interiorPerFloorSqFt: { min: 2.5, max: 4.5 },
} as const

const usd = (n: number) => `$${n.toLocaleString("en-US", { maximumFractionDigits: n % 1 ? 2 : 0, minimumFractionDigits: n % 1 ? 2 : 0 })}`
const range = (min: number, max: number) => `${usd(min)}–${usd(max)}`

/** Interior budget for a home of `floorSqFt`, from RATES (e.g. 2,000 → "$5,000–$9,000"). */
export function interiorBudgetFor(floorSqFt: number): string {
  return range(floorSqFt * RATES.interiorPerFloorSqFt.min, floorSqFt * RATES.interiorPerFloorSqFt.max)
}

export const PRICES_2026 = {
  /** Per sq ft of FLOOR area. Always say "of floor area" next to it. */
  interiorPerSqFt: range(RATES.interiorPerFloorSqFt.min, RATES.interiorPerFloorSqFt.max),
  /** Single room, walls only (brief 2026-10-25). */
  singleRoom: "$350–$900",
  // Interior examples, derived from the floor-area rate.
  fullInterior1500: interiorBudgetFor(1500),
  fullInterior2000: interiorBudgetFor(2000),
  fullInterior2500: interiorBudgetFor(2500),
  fullInterior4000: interiorBudgetFor(4000),
  // Cabinets.
  cabinetsPerKitchen: "$3,000–$6,500",
  cabinetsAverage: "$3,500–$5,500",
  cabinetsGalley: "$2,200–$3,500",
  cabinetsLarge: "$6,000–$9,000+",
  cabinetsPerDoor: "$100–$175",
  // Interior parts.
  trimWholeHome: "$1,200–$3,000",
  accentWall: "$150–$400",
  ceilingsWholeHome: "$1,500–$3,500",
  // Exterior: project-specific. Example budgets by home size and stories, never a
  // per-square-foot formula.
  exteriorPerHome: "$3,500–$12,000",
  exterior1500OneStory: "$2,500–$4,500",
  exterior1500TwoStory: "$3,500–$6,000",
  exterior2000OneStory: "$3,500–$5,500",
  exterior2000TwoStory: "$4,500–$7,500",
  exterior2000: "$3,500–$7,500",
  exterior2500OneStory: "$4,000–$7,000",
  exterior2500TwoStory: "$5,500–$9,000",
  exterior3000OneStory: "$5,000–$8,000",
  exterior3000TwoStory: "$6,500–$10,500",
  exterior4000OneStory: "$6,500–$10,000",
  exterior4000TwoStory: "$8,500–$14,000",
  wholeHome2000: "$8,500–$16,500",
  // Exterior add-on: failed butt joints on most elevations.
  caulkHeavyAdd: "$400–$1,200",
  // Brick. Per sq ft of BRICK FACE, not living area.
  limewashPerSqFt: "$4–$8",
  limewashHome2500: "$6,000–$10,000",
  paintedBrickPerSqFt: "$2–$3.50",
  paintedBrickRanch: "$4,500–$9,000",
  // Older Heights-style bungalow exterior: prep (scrape, glaze, sill repair) drives it.
  bungalowExterior: "$4,500–$9,000",
  // Popcorn ceilings (per sq ft of CEILING).
  popcornRemovalPerSqFt: "$1.50–$3.50",
  popcornPaintPerSqFt: "$1–$2",
  // A room including removal, ordinary patching, prep, primer and the new finish (owner 2026-10-14).
  popcornSingleRoom: "$650–$1,400",
  popcornHome1500: "$3,500–$7,500",
  // Townhomes and patio homes.
  frontDoorOnly: "$250–$450",
  townhomeDoorAndTrim: "$400–$1,200",
  townhomeExterior2Story: "$3,500–$7,500",
  townhomeExterior3StoryRear: "$6,500–$11,000",
  townhomeInterior: "$2,800–$5,500",
  // Commercial repaints: per sq ft of WALL area unless named otherwise.
  commercialPerSqFt: "$1.50–$4",
  commercialOffice: "$1.50–$3",
  commercialRetail: "$2–$4",
  commercialWarehouse: "$0.75–$2",
  /** Per door. */
  commercialDoorEach: "$75–$150",
  commercialAfterHoursPremium: "15–30%",
  // Confirmed by Juan 2026-10-11.
  pressureWashing: "$150–$1,200",
  pressureWashingHouse: "$300–$700",
  softWashOneStory: "$350–$650",
  softWashTwoStory: "$550–$1,000",
  wallRemoval: "$4,000–$30,000+",
  drywallRepair: "$200–$2,500",
  wallpaperRemovalPerSqFt: "$3–$8",
  stuccoPainting: "$2,500–$8,000",
  venetianPlasterPerSqFt: "$8–$20",
  woodRotRepair: "$300–$2,500",
} as const

/** Units for the per-square-foot figures, so copy never mislabels floor vs wall area. */
export const PRICE_UNITS = {
  interiorPerSqFt: "per sq ft of floor area",
  commercialPerSqFt: "per sq ft of wall area",
  commercialOffice: "per sq ft of wall area",
  commercialRetail: "per sq ft of wall area",
  commercialWarehouse: "per sq ft of wall area",
  limewashPerSqFt: "per sq ft of brick face",
  paintedBrickPerSqFt: "per sq ft of brick face",
  popcornRemovalPerSqFt: "per sq ft of ceiling",
  popcornPaintPerSqFt: "per sq ft of ceiling",
  wallpaperRemovalPerSqFt: "per sq ft of wall",
  venetianPlasterPerSqFt: "per sq ft of finished surface",
} as const
