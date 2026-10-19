import { PAINT_COLORS } from "@/data/paint-colors"
import { mergeCatalogs, type CatalogColor, type ColorCatalog } from "@/lib/visualizer/core"

/**
 * Colors for both visualizers.
 *
 * Featured (shown first, loaded with the page): data/paint-colors.ts, the
 * curated list the owner approved on 2026-10-14. Its Sherwin-Williams values
 * are Sherwin-Williams' published digital values; Benjamin Moore values are
 * approximations (no authorized Benjamin Moore source is configured).
 *
 * Full Sherwin-Williams catalog (1,726 colors): data/sw-colors.json, imported
 * from Sherwin-Williams' ColorSnap swatch list and Designer Color Collection
 * digital data (scripts/sw-catalog/import.mjs). It is ~110 KB, so it is loaded
 * on demand with loadFullCatalog() (a separate chunk), not with the page.
 */
export function getColorCatalog(): ColorCatalog {
  return {
    id: "hsp-featured-2026-10",
    label: "Featured colors",
    demo: false,
    colors: PAINT_COLORS.map((c) => ({ provider: c.brand, name: c.name, code: c.code, hex: c.hex, family: c.family })),
  }
}

type SwEntry = { c: string; n: string; h: string; loc?: string; col?: string; cat?: string; lrv?: number; hue?: number }

export function swEntryToColor(e: SwEntry): CatalogColor {
  return {
    provider: "Sherwin-Williams",
    name: e.n,
    code: `SW ${e.c}`,
    hex: `#${e.h}`,
    ...(e.cat ? { family: e.cat } : {}),
    ...(e.col ? { collection: e.col } : {}),
    ...(e.lrv !== undefined ? { lrv: e.lrv } : {}),
    ...(e.loc ? { locator: e.loc } : {}),
  }
}

let full: Promise<CatalogColor[]> | null = null

/** Featured colors first, then every Sherwin-Williams color not already featured. Cached after the first call. */
export function loadFullCatalog(): Promise<CatalogColor[]> {
  if (!full) {
    full = import("@/data/sw-colors.json").then((m) => {
      const entries = (m.default ?? m) as unknown as SwEntry[]
      return mergeCatalogs(getColorCatalog().colors, entries.map(swEntryToColor))
    })
    // Allow a retry if the chunk failed to load (e.g. a flaky connection).
    full.catch(() => {
      full = null
    })
  }
  return full
}
