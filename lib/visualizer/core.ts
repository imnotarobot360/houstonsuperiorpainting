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
export function applyRegion(labels: Uint8Array, region: Uint8Array, surfaceId: number, remove: boolean) {
  if (region.length !== labels.length) return
  for (let i = 0; i < region.length; i++) {
    if (!region[i]) continue
    if (remove) {
      if (labels[i] === surfaceId) labels[i] = 0
    } else labels[i] = surfaceId
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
 * name exactly as the configured source gives it; `hex` is an on-screen
 * approximation, never official color data.
 */
export type CatalogColor = {
  provider: string
  name: string
  code: string
  hex: string
  family?: string
}

/** The interface a future licensed catalog plugs into. */
export type ColorCatalog = {
  id: string
  label: string
  /** True when the colors are demonstration swatches, not a manufacturer catalog. */
  demo: boolean
  colors: CatalogColor[]
}

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "")
}

/** Search by name, code or provider; "sw7008", "SW 7008" and "7008" all match. */
export function searchColors(colors: CatalogColor[], query: string): CatalogColor[] {
  const q = normalize(query)
  if (!q) return colors
  return colors.filter((c) => {
    const code = normalize(c.code)
    return normalize(c.name).includes(q) || code.includes(q) || normalize(c.provider + c.code).includes(q) || normalize(c.provider).startsWith(q)
  })
}

export function colorLabel(c: CatalogColor) {
  return `${c.provider} ${c.name} (${c.code})`
}
