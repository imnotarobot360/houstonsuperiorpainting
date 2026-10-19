"use client"

import { useEffect, useMemo, useState } from "react"
import { Loader2, Search } from "lucide-react"
import { getColorCatalog, loadFullCatalog } from "@/lib/visualizer/catalog"
import { colorLabel, searchColors, type CatalogColor } from "@/lib/visualizer/core"

/**
 * Shared color picker for the room and exterior visualizers (2026-10-19).
 *
 * Opens on the featured colors only. The full Sherwin-Williams catalog (1,726
 * colors) loads on demand the first time someone searches or picks a brand,
 * and results are shown a page at a time, so the page never renders a grid of
 * 1,700 swatches.
 */

const PAGE = 36
const featured = getColorCatalog().colors
const BRANDS = ["All", "Sherwin-Williams", "Benjamin Moore"] as const
type Brand = (typeof BRANDS)[number]

export function ColorPicker({
  selected,
  onPick,
  idPrefix,
  listLabel,
  gridClassName = "grid-cols-3 sm:grid-cols-4",
}: {
  selected: { provider: string; code: string } | null
  onPick: (c: CatalogColor) => void
  idPrefix: string
  listLabel: string
  gridClassName?: string
}) {
  const [query, setQuery] = useState("")
  const [brand, setBrand] = useState<Brand>("All")
  const [full, setFull] = useState<CatalogColor[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [limit, setLimit] = useState(PAGE)

  const browsing = query.trim() !== "" || brand !== "All"

  // Load the full catalog the first time it's needed.
  useEffect(() => {
    if (!browsing || full || loading) return
    setLoading(true)
    setLoadError(false)
    loadFullCatalog()
      .then(setFull)
      .catch(() => setLoadError(true))
      .finally(() => setLoading(false))
  }, [browsing, full, loading])

  // New search or brand: back to the first page.
  useEffect(() => setLimit(PAGE), [query, brand])

  const results = useMemo(() => {
    if (!browsing) return featured
    const base = full ?? featured
    const byBrand = brand === "All" ? base : base.filter((c) => c.provider === brand)
    return searchColors(byBrand, query)
  }, [browsing, full, brand, query])

  const visible = results.slice(0, limit)
  const ring = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

  return (
    <div>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by manufacturer">
        {BRANDS.map((b) => (
          <button
            key={b}
            type="button"
            aria-pressed={brand === b}
            onClick={() => setBrand(b)}
            className={`min-h-9 rounded-full border px-3 py-1.5 text-xs font-medium ${ring} ${
              brand === b ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <label htmlFor={`${idPrefix}-color-search`} className="sr-only">
        Search colors by name or code
      </label>
      <div className="relative mt-2">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <input
          id={`${idPrefix}-color-search`}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Name or code, e.g. Alabaster or SW 7008"
          autoComplete="off"
          className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground" role="status" aria-live="polite">
        {loading && <Loader2 className="h-3 w-3 animate-spin" aria-hidden="true" />}
        {loadError
          ? "The full color list couldn't load. Showing featured colors; try again."
          : !browsing
            ? `${featured.length} featured colors. Search or choose a brand to see all 1,726 Sherwin-Williams colors.`
            : loading
              ? "Loading all colors…"
              : `${results.length.toLocaleString("en-US")} ${results.length === 1 ? "color" : "colors"}${results.length > visible.length ? `, showing ${visible.length}` : ""}`}
      </p>

      <ul className={`mt-2 grid max-h-80 gap-2 overflow-y-auto pr-1 ${gridClassName}`} aria-label={listLabel}>
        {visible.map((c) => {
          const on = selected?.code === c.code && selected?.provider === c.provider
          return (
            <li key={`${c.provider}-${c.code}`}>
              <button
                type="button"
                onClick={() => onPick(c)}
                aria-pressed={on}
                aria-label={`${colorLabel(c)}, on-screen approximation`}
                title={colorLabel(c)}
                className={`w-full rounded-lg border p-1 text-left ${ring} ${on ? "border-primary ring-2 ring-primary" : "border-border"}`}
              >
                <span className="block h-10 rounded-md border border-black/10" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                <span className="mt-1 block truncate text-[11px] font-medium text-foreground">{c.name}</span>
                <span className="block truncate text-[10px] text-muted-foreground">
                  {c.provider === "Sherwin-Williams" ? c.code : c.provider === "Benjamin Moore" ? `BM ${c.code}` : `${c.provider} ${c.code}`}
                </span>
              </button>
            </li>
          )
        })}
        {browsing && !loading && results.length === 0 && (
          <li className="col-span-full py-4 text-center text-sm text-muted-foreground">No colors match &quot;{query}&quot;.</li>
        )}
      </ul>

      {results.length > visible.length && (
        <button
          type="button"
          onClick={() => setLimit((l) => l + PAGE)}
          className={`mt-2 min-h-11 w-full rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:border-primary ${ring}`}
        >
          Show {Math.min(PAGE, results.length - visible.length)} more ({(results.length - visible.length).toLocaleString("en-US")} left)
        </button>
      )}
    </div>
  )
}
