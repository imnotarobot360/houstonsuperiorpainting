import { PAINT_COLORS } from "@/data/paint-colors"
import type { ColorCatalog } from "@/lib/visualizer/core"

/**
 * Colors offered by the exterior visualizer.
 *
 * Source: data/paint-colors.ts combines the owner-provided Sherwin-Williams
 * digital catalog with the existing curated Benjamin Moore list. Screen values
 * can vary by display and lighting; customers should confirm with physical
 * samples.
 */
export function getColorCatalog(): ColorCatalog {
  return {
    id: "sw-colorsnap-designer-2026",
    label: "Sherwin-Williams ColorSnap + Benjamin Moore",
    demo: false,
    colors: PAINT_COLORS.map((c) => ({ provider: c.brand, name: c.name, code: c.code, hex: c.hex, family: c.family })),
  }
}
