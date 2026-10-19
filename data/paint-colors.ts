import sherwinWilliamsColors from "./sherwin-williams-colors.json"

// Manufacturer digital values from the owner-provided ColorSnap Swatches List
// and SW Designer Color Collection Digital Data. Digital swatches remain
// screen approximations; confirm selections with physical paint samples.
export type PaintColor = {
  brand: "Sherwin-Williams" | "Benjamin Moore"
  code: string
  name: string
  hex: string
  family?: "White" | "Greige & Beige" | "Gray" | "Green" | "Blue" | "Dark"
  rgb?: number[]
  locator?: string | null
  collection?: string
  category?: string
  lrv?: number
  hue?: number
  source?: string
}

type SherwinWilliamsDigitalColor = {
  code: string
  name: string
  hex: string
  rgb: number[]
  locator?: string | null
  collection?: string
  category?: string
  lrv?: number
  hue?: number
  source: string
}

const SHERWIN_WILLIAMS: PaintColor[] = (sherwinWilliamsColors as unknown as SherwinWilliamsDigitalColor[]).map((color) => ({
  brand: "Sherwin-Williams",
  code: color.code,
  name: color.name,
  hex: color.hex,
  rgb: color.rgb,
  locator: color.locator,
  collection: color.collection,
  category: color.category,
  lrv: color.lrv,
  hue: color.hue,
  source: color.source,
}))

// Keep the existing featured swatch order so the visualizer's defaults and
// familiar starting colors stay in place, replacing every SW stand-in with the
// exact matching digital value from the supplied catalog.
const STARTER_COLORS: PaintColor[] = [
  { brand: "Sherwin-Williams", code: "SW 7008", name: "Alabaster", hex: "#ECE8DD", family: "White" },
  { brand: "Sherwin-Williams", code: "SW 7005", name: "Pure White", hex: "#EDECE6", family: "White" },
  { brand: "Sherwin-Williams", code: "SW 7004", name: "Snowbound", hex: "#EDEAE5", family: "White" },
  { brand: "Benjamin Moore", code: "OC-17", name: "White Dove", hex: "#F0EEE5", family: "White" },
  { brand: "Benjamin Moore", code: "OC-65", name: "Chantilly Lace", hex: "#F4F5F0", family: "White" },
  { brand: "Benjamin Moore", code: "OC-117", name: "Simply White", hex: "#F3F0E2", family: "White" },
  { brand: "Benjamin Moore", code: "OC-45", name: "Swiss Coffee", hex: "#ECE7DA", family: "White" },
  { brand: "Sherwin-Williams", code: "SW 7029", name: "Agreeable Gray", hex: "#D1CBC1", family: "Greige & Beige" },
  { brand: "Sherwin-Williams", code: "SW 7036", name: "Accessible Beige", hex: "#D1C7B8", family: "Greige & Beige" },
  { brand: "Benjamin Moore", code: "HC-172", name: "Revere Pewter", hex: "#CCC6B7", family: "Greige & Beige" },
  { brand: "Benjamin Moore", code: "HC-173", name: "Edgecomb Gray", hex: "#D8D0C2", family: "Greige & Beige" },
  { brand: "Benjamin Moore", code: "OC-20", name: "Pale Oak", hex: "#DBD3C8", family: "Greige & Beige" },
  { brand: "Sherwin-Williams", code: "SW 7015", name: "Repose Gray", hex: "#CCC9C1", family: "Gray" },
  { brand: "Sherwin-Williams", code: "SW 7016", name: "Mindful Gray", hex: "#BDB8AE", family: "Gray" },
  { brand: "Benjamin Moore", code: "OC-23", name: "Classic Gray", hex: "#E1DED6", family: "Gray" },
  { brand: "Benjamin Moore", code: "HC-170", name: "Stonington Gray", hex: "#C2C5C4", family: "Gray" },
  { brand: "Sherwin-Williams", code: "SW 6421", name: "Celery", hex: "#E0DDBD", family: "Green" },
  { brand: "Sherwin-Williams", code: "SW 9130", name: "Evergreen Fog", hex: "#95978A", family: "Green" },
  { brand: "Sherwin-Williams", code: "SW 6208", name: "Pewter Green", hex: "#5E6259", family: "Green" },
  { brand: "Sherwin-Williams", code: "SW 9129", name: "Jade Dragon", hex: "#9EA597", family: "Green" },
  { brand: "Sherwin-Williams", code: "SW 6244", name: "Naval", hex: "#2F3D4C", family: "Blue" },
  { brand: "Benjamin Moore", code: "HC-154", name: "Hale Navy", hex: "#434C56", family: "Blue" },
  { brand: "Sherwin-Williams", code: "SW 7602", name: "Indigo Batik", hex: "#3E5063", family: "Blue" },
  { brand: "Sherwin-Williams", code: "SW 7069", name: "Iron Ore", hex: "#434341", family: "Dark" },
  { brand: "Sherwin-Williams", code: "SW 6258", name: "Tricorn Black", hex: "#2F2F30", family: "Dark" },
  { brand: "Sherwin-Williams", code: "SW 7048", name: "Urbane Bronze", hex: "#54504A", family: "Dark" },
  { brand: "Benjamin Moore", code: "2124-20", name: "Wrought Iron", hex: "#4A4D4E", family: "Dark" },
  { brand: "Benjamin Moore", code: "HC-166", name: "Kendall Charcoal", hex: "#686864", family: "Dark" }
]
const bySherwinCode = new Map(SHERWIN_WILLIAMS.map((color) => [color.code.replace(/\s/g, ""), color]))
const featuredSherwinCodes = new Set(
  STARTER_COLORS.filter((color) => color.brand === "Sherwin-Williams").map((color) => color.code.replace(/\s/g, "")),
)

export const PAINT_COLORS: PaintColor[] = [
  ...STARTER_COLORS.map((color) => {
    if (color.brand !== "Sherwin-Williams") return color
    const manufacturerColor = bySherwinCode.get(color.code.replace(/\s/g, ""))
    return manufacturerColor ? { ...manufacturerColor, family: color.family } : color
  }),
  ...SHERWIN_WILLIAMS.filter((color) => !featuredSherwinCodes.has(color.code)),
]

export const COLOR_DISCLAIMER =
  "On-screen colors are approximate and may vary by screen, lighting and surrounding finishes. Confirm your final selection with a physical paint sample."

export const BRAND_DISCLAIMER =
  "Color names identify Sherwin-Williams and Benjamin Moore products for reference only. Houston Superior Painting is not sponsored by either manufacturer."
