// Exterior paint visualizer: pure image and selection logic (owner brief
// 2026-10-16). No imports on purpose, so `node --test tests/` can load this file
// directly (Node strips the types). Everything runs in the browser; nothing here
// sends the photo anywhere.
//
// Selection model: ONE label map, a Uint8Array with one byte per pixel. 0 means
// "not selected"; 1–4 is the surface id. A pixel can only belong to one surface,
// so painting trim over the body takes it away from the body automatically, and
// undo needs a single snapshot instead of one per surface.

export type SurfaceKey = "body" | "trim" | "door" | "shutters"

export type Surface = {
  id: 1 | 2 | 3 | 4
  key: SurfaceKey
  label: string
  /** Highlight shown while a surface is marked but has no color yet. */
  marker: string
}

export const SURFACES: Surface[] = [
  { id: 1, key: "body", label: "Body / siding", marker: "#2563EB" },
  { id: 2, key: "trim", label: "Trim", marker: "#DB2777" },
  { id: 3, key: "door", label: "Front door", marker: "#EA580C" },
  { id: 4, key: "shutters", label: "Shutters", marker: "#7C3AED" },
]

export function surfaceById(id: number): Surface | undefined {
  return SURFACES.find((s) => s.id === id)
}

// ── Photo validation ─────────────────────────────────────────────────────────

export const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"] as const
export const MAX_PHOTO_BYTES = 15 * 1024 * 1024
export const MIN_PHOTO_SIDE = 400
/** Longest side the photo is scaled to for editing and for the request. */
export const MAX_EDIT_SIDE = 1600

/** Checks type and size before the photo is opened. Returns an error message or null. */
export function validatePhotoFile(file: { type: string; size: number; name?: string }): string | null {
  if (!PHOTO_TYPES.includes(file.type as (typeof PHOTO_TYPES)[number])) {
    return "Please choose a JPG, PNG or WebP photo."
  }
  if (file.size <= 0) return "That file is empty. Please choose another photo."
  if (file.size > MAX_PHOTO_BYTES) return "That photo is larger than 15 MB. Please choose a smaller one."
  return null
}

/** Checks the decoded size. Returns an error message or null. */
export function validatePhotoDimensions(width: number, height: number): string | null {
  if (Math.min(width, height) < MIN_PHOTO_SIDE) {
    return `That photo is too small (${width}×${height}). Please use one at least ${MIN_PHOTO_SIDE} pixels on each side.`
  }
  return null
}

/** Size to draw the photo at: the longest side capped at MAX_EDIT_SIDE. */
export function fitSize(width: number, height: number, maxSide = MAX_EDIT_SIDE) {
  const scale = Math.min(1, maxSide / Math.max(width, height))
  return { width: Math.round(width * scale), height: Math.round(height * scale) }
}

// ── Selection editing ────────────────────────────────────────────────────────

export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "")
  if (!/^[0-9a-f]{6}$/i.test(clean)) throw new Error(`Invalid hex color: ${hex}`)
  const n = parseInt(clean, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

/**
 * One round brush dab. `mode: "paint"` gives the pixels to `surfaceId` (taking
 * them from any other surface); `mode: "erase"` clears only that surface's
 * pixels, so erasing the door never removes the body around it.
 */
export function stamp(
  labels: Uint8Array,
  width: number,
  height: number,
  cx: number,
  cy: number,
  radius: number,
  surfaceId: number,
  mode: "paint" | "erase",
) {
  const r = Math.max(1, Math.round(radius))
  const r2 = r * r
  const x0 = Math.max(0, cx - r)
  const x1 = Math.min(width - 1, cx + r)
  const y0 = Math.max(0, cy - r)
  const y1 = Math.min(height - 1, cy + r)
  for (let y = y0; y <= y1; y++) {
    const dy = y - cy
    for (let x = x0; x <= x1; x++) {
      const dx = x - cx
      if (dx * dx + dy * dy > r2) continue
      const i = y * width + x
      if (mode === "paint") labels[i] = surfaceId
      else if (labels[i] === surfaceId) labels[i] = 0
    }
  }
}

/** A brush stroke from `from` (or a single dab when null) to `to`, without gaps. */
export function strokeSegment(
  labels: Uint8Array,
  width: number,
  height: number,
  from: { x: number; y: number } | null,
  to: { x: number; y: number },
  radius: number,
  surfaceId: number,
  mode: "paint" | "erase",
) {
  if (!from) return stamp(labels, width, height, to.x, to.y, radius, surfaceId, mode)
  const dist = Math.hypot(to.x - from.x, to.y - from.y)
  const steps = Math.max(1, Math.ceil(dist / Math.max(1, radius / 3)))
  for (let s = 1; s <= steps; s++) {
    const x = Math.round(from.x + ((to.x - from.x) * s) / steps)
    const y = Math.round(from.y + ((to.y - from.y) * s) / steps)
    stamp(labels, width, height, x, y, radius, surfaceId, mode)
  }
}

/** Applies an on-device "smart select" mask (non-zero = inside) to one surface. */
export function applyRegion(labels: Uint8Array, region: Uint8Array, surfaceId: number, remove: boolean, onlyEmpty = false) {
  if (region.length !== labels.length) return
  for (let i = 0; i < region.length; i++) {
    if (!region[i]) continue
    if (remove) {
      if (labels[i] === surfaceId) labels[i] = 0
    } else if (!onlyEmpty || labels[i] === 0) labels[i] = surfaceId
  }
}

export function clearSurface(labels: Uint8Array, surfaceId: number) {
  for (let i = 0; i < labels.length; i++) if (labels[i] === surfaceId) labels[i] = 0
}

/** Pixel count per surface id (index 0 = unselected). */
export function countLabels(labels: Uint8Array): number[] {
  const counts = [0, 0, 0, 0, 0]
  for (let i = 0; i < labels.length; i++) counts[labels[i]]++
  return counts
}

/** Undo history with a fixed cap; each entry is a full copy of the label map. */
export function createHistory(limit = 15) {
  const stack: Uint8Array[] = []
  return {
    push(labels: Uint8Array) {
      stack.push(labels.slice())
      if (stack.length > limit) stack.shift()
    },
    /** Restores the last snapshot into `labels`. False when there is nothing to undo. */
    undo(labels: Uint8Array) {
      const prev = stack.pop()
      if (!prev) return false
      labels.set(prev)
      return true
    },
    clear() {
      stack.length = 0
    },
    get size() {
      return stack.length
    },
  }
}

// ── Rendering ────────────────────────────────────────────────────────────────

export type RenderOptions = {
  /** Hex color per surface id; null/undefined = leave that surface unpainted. */
  colors: Partial<Record<number, string | null>>
  /** 0 = whole preview; 0–1 = the original shows left of this fraction of the width. */
  split?: number
  /** How strongly the new color replaces the original (0–1). */
  coverage?: number
  /** Tint marked surfaces that have no color yet, so the customer sees the selection. */
  highlight?: boolean
}

/**
 * Builds the preview pixels. The original is never modified: each selected
 * pixel takes the chosen color scaled by its own brightness relative to the
 * surface's average, so the photo's shadows, texture and siding lines survive.
 */
export function renderPreview(src: Uint8ClampedArray, labels: Uint8Array, width: number, opts: RenderOptions): Uint8ClampedArray {
  const out = new Uint8ClampedArray(src)
  const coverage = opts.coverage ?? 0.85
  const split = opts.split ?? 0
  const splitX = split > 0 && split < 1 ? Math.round(split * width) : split >= 1 ? width : 0

  // Average brightness per surface.
  const sum = [0, 0, 0, 0, 0]
  const count = [0, 0, 0, 0, 0]
  for (let i = 0; i < labels.length; i++) {
    const l = labels[i]
    if (!l) continue
    const p = i * 4
    sum[l] += 0.299 * src[p] + 0.587 * src[p + 1] + 0.114 * src[p + 2]
    count[l]++
  }

  const targets: ([number, number, number] | null)[] = [null]
  const markers: ([number, number, number] | null)[] = [null]
  for (const s of SURFACES) {
    const hex = opts.colors[s.id]
    targets[s.id] = hex ? hexToRgb(hex) : null
    markers[s.id] = opts.highlight && !hex ? hexToRgb(s.marker) : null
  }

  for (let i = 0; i < labels.length; i++) {
    const l = labels[i]
    if (!l) continue
    if (splitX && i % width < splitX) continue
    const p = i * 4
    const target = targets[l]
    if (target) {
      const mean = Math.max(sum[l] / count[l], 1)
      const lum = 0.299 * src[p] + 0.587 * src[p + 1] + 0.114 * src[p + 2]
      // Softened shading factor so dark targets don't crush to black.
      const f = 0.35 + 0.65 * (lum / mean)
      out[p] = src[p] * (1 - coverage) + Math.min(255, target[0] * f) * coverage
      out[p + 1] = src[p + 1] * (1 - coverage) + Math.min(255, target[1] * f) * coverage
      out[p + 2] = src[p + 2] * (1 - coverage) + Math.min(255, target[2] * f) * coverage
      continue
    }
    const marker = markers[l]
    if (marker) {
      out[p] = src[p] * 0.55 + marker[0] * 0.45
      out[p + 1] = src[p + 1] * 0.55 + marker[1] * 0.45
      out[p + 2] = src[p + 2] * 0.55 + marker[2] * 0.45
    }
  }
  return out
}

// ── Color catalog ────────────────────────────────────────────────────────────

/**
 * A color the customer can choose. `provider` is the manufacturer or catalog
 * name exactly as the configured source gives it. `hex` is the value used on
 * screen: Sherwin-Williams' published digital value for SW colors, an
 * approximation for others. Screens vary; physical samples decide.
 */
export type CatalogColor = {
  provider: string
  name: string
  code: string
  hex: string
  family?: string
  /** Sherwin-Williams Designer Color Collection fields, when published. */
  collection?: string
  lrv?: number
  /** Fan-deck locator from the ColorSnap list, when published. */
  locator?: string
}

/** The interface a future licensed catalog plugs into. */
export type ColorCatalog = {
  id: string
  label: string
  /** True when the colors are demonstration swatches, not a manufacturer catalog. */
  demo: boolean
  colors: CatalogColor[]
}

/** Lowercase, accents removed ("Über" → "uber"), letters and digits only. */
export function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
}

/**
 * Search by name, code or provider: "sw7008", "SW 7008", "7008", "alabaster"
 * and "uber umber" all work. Results are ranked: exact code, code prefix, name
 * prefix, a word in the name starting with the query, then any match. Order is
 * otherwise kept, so featured colors stay ahead of the full catalog.
 */
export function searchColors(colors: CatalogColor[], query: string): CatalogColor[] {
  const q = normalize(query)
  if (!q) return colors
  const qDigits = q.replace(/^(sw|bm)/, "")
  const scored: { c: CatalogColor; s: number; i: number }[] = []
  colors.forEach((c, i) => {
    const code = normalize(c.code)
    const codeDigits = code.replace(/^(sw|bm)/, "")
    const name = normalize(c.name)
    let s = 0
    if (code === q || (qDigits && codeDigits === qDigits)) s = 5
    else if (code.startsWith(q) || (qDigits.length >= 2 && codeDigits.startsWith(qDigits))) s = 4
    else if (name.startsWith(q)) s = 3
    else if (c.name.split(/[\s-]+/).some((w) => normalize(w).startsWith(q))) s = 2
    else if (name.includes(q) || code.includes(q) || normalize(c.provider + c.code).includes(q) || normalize(c.provider).startsWith(q)) s = 1
    if (s) scored.push({ c, s, i })
  })
  return scored.sort((a, b) => b.s - a.s || a.i - b.i).map((x) => x.c)
}

/** Featured colors first, then the rest, with duplicates (same provider + code) removed. */
export function mergeCatalogs(featured: CatalogColor[], rest: CatalogColor[]): CatalogColor[] {
  const key = (c: CatalogColor) => `${c.provider}|${normalize(c.code)}`
  const seen = new Set(featured.map(key))
  return [...featured, ...rest.filter((c) => !seen.has(key(c)))]
}

export function colorLabel(c: CatalogColor) {
  return `${c.provider} ${c.name} (${c.code})`
}

// ── Automatic surface detection (on-device) ──────────────────────────────────
//
// facade.worker.ts runs an open-vocabulary detector (OWL-ViT) for doors,
// windows, shutters, garage doors, the roof and the house, then Segment
// Anything traces each detected box. The two functions below are the pure
// part: choosing which detections to trust, and turning the traced masks into
// the label map. The result is a suggestion; the customer corrects it.

export type Box = { x0: number; y0: number; x1: number; y1: number }
export type Detection = { label: string; score: number; box: Box }

export const DETECTION_QUERIES = {
  house: "a house",
  roof: "a roof",
  window: "a window",
  door: "a front door",
  garage: "a garage door",
  shutter: "a window shutter",
} as const

export type FacadeBoxes = {
  house: Box | null
  roofs: Box[]
  windows: Box[]
  doors: Box[]
  garages: Box[]
  shutters: Box[]
}

const area = (b: Box) => Math.max(0, b.x1 - b.x0) * Math.max(0, b.y1 - b.y0)
const aspect = (b: Box) => (b.y1 - b.y0) / Math.max(1, b.x1 - b.x0)

export function iou(a: Box, b: Box) {
  const inter = area({ x0: Math.max(a.x0, b.x0), y0: Math.max(a.y0, b.y0), x1: Math.min(a.x1, b.x1), y1: Math.min(a.y1, b.y1) })
  const union = area(a) + area(b) - inter
  return union > 0 ? inter / union : 0
}

/** Share of `a` that lies inside `b`. */
export function coverOf(a: Box, b: Box) {
  const inter = area({ x0: Math.max(a.x0, b.x0), y0: Math.max(a.y0, b.y0), x1: Math.min(a.x1, b.x1), y1: Math.min(a.y1, b.y1) })
  return area(a) > 0 ? inter / area(a) : 0
}

/** Non-maximum suppression: keeps the best of any overlapping boxes. */
export function nms(dets: Detection[], maxIou = 0.45, limit = 20): Detection[] {
  const sorted = [...dets].sort((a, b) => b.score - a.score)
  const kept: Detection[] = []
  for (const d of sorted) {
    if (kept.length >= limit) break
    if (kept.every((k) => iou(k.box, d.box) <= maxIou)) kept.push(d)
  }
  return kept
}

export const DETECTION_THRESHOLDS = {
  house: 0.1,
  roof: 0.1,
  window: 0.1,
  door: 0.1,
  garage: 0.12,
  shutter: 0.1,
}

/**
 * Picks the detections worth tracing. Thresholds are deliberately cautious:
 * a missed shutter costs the customer one brush stroke, a wrong one costs an
 * erase. Only ONE front door is kept (the most confident tall door that is not
 * a garage door); shutters must be tall and narrow.
 */
export function selectFacadeBoxes(dets: Detection[], width: number, height: number): FacadeBoxes {
  const T = DETECTION_THRESHOLDS
  const imgArea = width * height
  const of = (q: string, t: number) => dets.filter((d) => d.label === q && d.score >= t)

  const houses = of(DETECTION_QUERIES.house, T.house).filter((d) => area(d.box) >= imgArea * 0.08)
  const house = houses.sort((a, b) => b.score - a.score)[0]?.box ?? null

  const roofs = nms(of(DETECTION_QUERIES.roof, T.roof), 0.4, 6).map((d) => d.box)
  const garages = nms(of(DETECTION_QUERIES.garage, T.garage), 0.4, 4).map((d) => d.box)
  const windows = nms(of(DETECTION_QUERIES.window, T.window), 0.4, 24)
    .map((d) => d.box)
    .filter((b) => area(b) < imgArea * 0.04 && garages.every((g) => coverOf(b, g) < 0.5))

  const door = nms(of(DETECTION_QUERIES.door, T.door), 0.4, 6)
    .filter((d) => aspect(d.box) >= 1.3 && area(d.box) < imgArea * 0.15 && garages.every((g) => iou(d.box, g) < 0.3))
    .sort((a, b) => b.score - a.score)[0]
  const doors = door ? [door.box] : []

  const openWindows = windows.filter((w) => doors.every((dr) => coverOf(w, dr) < 0.6))

  // Real shutters flank a window: tall, narrow, beside a window at the same height.
  // The detector often returns the SAME box for "window" and "window shutter";
  // a box is a shutter only if it scores higher as a shutter than as a window,
  // does not overlap a window, and sits beside one.
  const windowDets = dets.filter((d) => d.label === DETECTION_QUERIES.window)
  const shutters = nms(of(DETECTION_QUERIES.shutter, T.shutter), 0.3, 16)
    .filter((s) => windowDets.every((w) => iou(s.box, w.box) < 0.6 || w.score < s.score))
    .map((d) => d.box)
    .filter((b) => aspect(b) >= 1.8 && area(b) < imgArea * 0.05 && doors.every((dr) => coverOf(b, dr) < 0.3))
    .filter((b) => openWindows.every((w) => coverOf(b, w) < 0.5) && openWindows.some((w) => flanks(b, w)))

  return { house, roofs, windows: openWindows, doors, garages, shutters }
}

/** True when `s` sits immediately left or right of window `w`, overlapping it vertically. */
export function flanks(s: Box, w: Box) {
  const sh = s.y1 - s.y0
  const sw = s.x1 - s.x0
  const wh = w.y1 - w.y0
  const vOverlap = Math.min(s.y1, w.y1) - Math.max(s.y0, w.y0)
  if (vOverlap < sh * 0.5) return false
  // Same height as the window and aligned with its top (porch posts are not).
  if (sh < wh * 0.7 || sh > wh * 1.4 || Math.abs(s.y0 - w.y0) > wh * 0.25) return false
  const leftGap = w.x0 - s.x1
  const rightGap = s.x0 - w.x1
  const gap = s.x0 < w.x0 ? leftGap : rightGap
  return gap > -sw * 0.6 && gap < sw * 1.5
}

export type TracedPart = { box: Box; mask: Uint8Array | null }
export type FacadeMasks = {
  house: Uint8Array | null
  roofs: Uint8Array[]
  windows: TracedPart[]
  doors: TracedPart[]
  garages: TracedPart[]
  shutters: TracedPart[]
}

/**
 * Builds the label map from traced masks:
 *  body     = siding − roof − windows − garage doors − front door − shutters
 *  trim     = a band `trimPx` wide around the traced outline of each window,
 *             door and garage door
 *  door     = the front door
 *  shutters = each shutter
 * Window glass and garage doors are left unpainted. A traced mask that covers
 * too little of its detection box (the model missed) falls back to the box.
 */
export function composeFacade(width: number, height: number, m: FacadeMasks, trimPx: number): Uint8Array {
  const n = width * height
  const labels = new Uint8Array(n)
  const roof = new Uint8Array(n)
  for (const r of m.roofs) for (let i = 0; i < n; i++) if (r[i]) roof[i] = 1

  if (m.house) for (let i = 0; i < n; i++) if (m.house[i] && !roof[i]) labels[i] = 1

  const clampBox = (b: Box) => ({
    x0: Math.max(0, Math.floor(b.x0)),
    x1: Math.min(width - 1, Math.ceil(b.x1)),
    y0: Math.max(0, Math.floor(b.y0)),
    y1: Math.min(height - 1, Math.ceil(b.y1)),
  })
  const eachIn = (b: Box, fn: (i: number) => void) => {
    const c = clampBox(b)
    for (let y = c.y0; y <= c.y1; y++) for (let x = c.x0; x <= c.x1; x++) fn(y * width + x)
  }

  /** The part's pixels: its traced mask inside its box, or the box itself. */
  const inPart = (p: TracedPart) => {
    const set = new Uint8Array(n)
    let inside = 0
    let total = 0
    if (p.mask) {
      eachIn(p.box, (i) => {
        total++
        if (p.mask![i]) {
          set[i] = 1
          inside++
        }
      })
    }
    if (!p.mask || inside < total * 0.15) eachIn(p.box, (i) => (set[i] = 1))
    return set
  }

  /** Calls fn for pixels within `r` of the part (square dilation) but outside it. */
  const ring = (p: TracedPart, set: Uint8Array, r: number, fn: (i: number) => void) => {
    const c = clampBox({ x0: p.box.x0 - r, y0: p.box.y0 - r, x1: p.box.x1 + r, y1: p.box.y1 + r })
    const w = c.x1 - c.x0 + 1
    const h = c.y1 - c.y0 + 1
    const near = new Uint8Array(w * h)
    // Rows: distance to the nearest set pixel, both directions.
    for (let y = 0; y < h; y++) {
      const dist = new Float64Array(w).fill(Infinity)
      let last = -Infinity
      for (let x = 0; x < w; x++) {
        if (set[(c.y0 + y) * width + c.x0 + x]) last = x
        dist[x] = x - last
      }
      last = Infinity
      for (let x = w - 1; x >= 0; x--) {
        if (set[(c.y0 + y) * width + c.x0 + x]) last = x
        near[y * w + x] = Math.min(dist[x], last - x) <= r ? 1 : 0
      }
    }
    // Columns, over the row result.
    for (let x = 0; x < w; x++) {
      const dist = new Float64Array(h).fill(Infinity)
      let last = -Infinity
      for (let y = 0; y < h; y++) {
        if (near[y * w + x]) last = y
        dist[y] = y - last
      }
      last = Infinity
      for (let y = h - 1; y >= 0; y--) {
        if (near[y * w + x]) last = y
        const i = (c.y0 + y) * width + c.x0 + x
        if (Math.min(dist[y], last - y) <= r && !set[i]) fn(i)
      }
    }
  }

  const openings = [...m.windows, ...m.garages, ...m.doors]
  const openingSets = openings.map(inPart)
  for (const s of openingSets) for (let i = 0; i < n; i++) if (s[i]) labels[i] = 0
  openings.forEach((p, k) =>
    ring(p, openingSets[k], trimPx, (i) => {
      if (!roof[i]) labels[i] = 2
    }),
  )
  m.doors.forEach((p) => {
    const s = inPart(p)
    for (let i = 0; i < n; i++) if (s[i]) labels[i] = 3
  })
  m.shutters.forEach((p) => {
    const s = inPart(p)
    for (let i = 0; i < n; i++) if (s[i]) labels[i] = 4
  })
  return labels
}

// ── Saved color combinations ────────────────────────────────────────────────

export type SavedCombo = { id: string; name: string; colors: Partial<Record<number, CatalogColor | null>> }

/** Short text for a combination, e.g. "Body: SW Alabaster (SW 7008); Trim: …". */
export function describeCombo(combo: SavedCombo): string {
  return SURFACES.filter((s) => combo.colors[s.id])
    .map((s) => `${s.label}: ${colorLabel(combo.colors[s.id]!)}`)
    .join("; ")
}
