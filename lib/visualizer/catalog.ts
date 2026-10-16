import { PAINT_COLORS } from "@/data/paint-colors"
import type { ColorCatalog } from "@/lib/visualizer/core"

/**
 * Colors offered by the exterior visualizer.
 *
 * Source: data/paint-colors.ts, the curated list the owner approved for the
 * room visualizer on 2026-10-14. Brand and color names are real products; the
 * hex values are APPROXIMATE on-screen stand-ins (Celery uses Sherwin-Williams'
 * published screen value), not manufacturer color data, so the page labels
 * every swatch as approximate.
 *
 * To connect a licensed manufacturer catalog later, return another
 * ColorCatalog from here (set `demo` to false only for a licensed, official
 * source). Nothing else in the visualizer needs to change.
 */
export function getColorCatalog(): ColorCatalog {
  return {
    id: "hsp-curated-2026-10",
    label: "Houston Superior Painting curated colors",
    demo: false,
    colors: PAINT_COLORS.map((c) => ({ provider: c.brand, name: c.name, code: c.code, hex: c.hex, family: c.family })),
  }
}
