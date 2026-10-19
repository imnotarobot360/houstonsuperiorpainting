"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Brush, Eraser, Wand2, Undo2, RotateCcw, Download, ImagePlus, Sparkles, MinusCircle } from "lucide-react"
import { PAINT_COLORS, COLOR_DISCLAIMER } from "@/data/paint-colors"
import { ColorPicker } from "@/components/paint-visualizer/color-picker"
import { colorLabel } from "@/lib/visualizer/core"
import { trackEvent } from "@/lib/analytics"

/**
 * Privacy-first paint color visualizer (owner brief 2026-10-14).
 *
 * Everything happens in this browser tab: the photo is read with an object URL,
 * drawn to a canvas and never uploaded. Selection tools: AI select (Segment
 * Anything running ON THE DEVICE in a Web Worker, see sam.worker.ts; only the
 * model files are downloaded, the photo is never sent), brush, eraser and a
 * tap-to-fill that grows a region of similar color. No AI service is used. Recoloring keeps the photo's own light and shadow: each
 * selected pixel takes the chosen color scaled by how bright that pixel is
 * relative to the selection's average, then is blended in by `coverage`.
 */

type Tool = "ai" | "ai-remove" | "brush" | "erase" | "fill"
type AiStatus = "off" | "loading" | "analyzing" | "ready" | "working" | "error"
const MAX_SIDE = 1600
const UNDO_LIMIT = 15

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

export function ColorVisualizer({ onColorChange }: { onColorChange?: (label: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const originalRef = useRef<ImageData | null>(null)
  const maskRef = useRef<Uint8Array | null>(null)
  const undoRef = useRef<Uint8Array[]>([])
  const drawingRef = useRef(false)
  const lastPtRef = useRef<{ x: number; y: number } | null>(null)
  const frameRef = useRef<number | null>(null)

  const [hasImage, setHasImage] = useState(false)
  const [tool, setTool] = useState<Tool>("ai")
  const workerRef = useRef<Worker | null>(null)
  const pendingTapRef = useRef<{ x: number; y: number; remove: boolean } | null>(null)
  const [ai, setAi] = useState<AiStatus>("off")
  const [aiProgress, setAiProgress] = useState(0)
  const [brush, setBrush] = useState(40)
  const [tolerance, setTolerance] = useState(28)
  const [coverage, setCoverage] = useState(0.85)
  const [split, setSplit] = useState(0)
  const [picked, setPicked] = useState<{ provider: string; code: string } | null>({ provider: PAINT_COLORS[7].brand, code: PAINT_COLORS[7].code })
  const [color, setColor] = useState<{ label: string; hex: string }>({
    label: `${PAINT_COLORS[7].brand} ${PAINT_COLORS[7].name} (${PAINT_COLORS[7].code})`,
    hex: PAINT_COLORS[7].hex,
  })
  const [canUndo, setCanUndo] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => onColorChange?.(color.label), [color.label, onColorChange])

  // ── Render ────────────────────────────────────────────────────────────────
  const render = useCallback((splitOverride?: number) => {
    const sp = splitOverride ?? split
    const canvas = canvasRef.current
    const orig = originalRef.current
    const mask = maskRef.current
    if (!canvas || !orig || !mask) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const { width: w, height: h, data: src } = orig
    const out = new ImageData(new Uint8ClampedArray(src), w, h)
    const d = out.data

    // Average brightness of the selection, so shading is kept relative to it.
    let sum = 0
    let count = 0
    for (let i = 0; i < mask.length; i++) {
      if (mask[i]) {
        const p = i * 4
        sum += 0.299 * src[p] + 0.587 * src[p + 1] + 0.114 * src[p + 2]
        count++
      }
    }
    if (count) {
      const mean = Math.max(sum / count, 1)
      const [tr, tg, tb] = hexToRgb(color.hex)
      const splitX = Math.round(sp * w)
      for (let i = 0; i < mask.length; i++) {
        const m = mask[i]
        if (!m) continue
        if (splitX && i % w < splitX) continue
        const p = i * 4
        const lum = 0.299 * src[p] + 0.587 * src[p + 1] + 0.114 * src[p + 2]
        // Soften the shading factor so dark targets don't crush to black.
        const f = 0.35 + 0.65 * (lum / mean)
        const a = (m / 255) * coverage
        d[p] = src[p] * (1 - a) + Math.min(255, tr * f) * a
        d[p + 1] = src[p + 1] * (1 - a) + Math.min(255, tg * f) * a
        d[p + 2] = src[p + 2] * (1 - a) + Math.min(255, tb * f) * a
      }
    }
    ctx.putImageData(out, 0, 0)

    // Split line for before/after.
    if (sp > 0 && sp < 1) {
      const x = Math.round(sp * w)
      ctx.fillStyle = "rgba(255,255,255,0.9)"
      ctx.fillRect(x - 1, 0, 3, h)
    }
  }, [color.hex, coverage, split])

  // Latest render for callbacks created once (the AI worker's message handler).
  const renderRef = useRef(render)
  renderRef.current = render

  const scheduleRender = useCallback(() => {
    if (frameRef.current != null) return
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      render()
    })
  }, [render])

  // Layout effect: repaint in the same commit as the color/coverage/split change.
  useLayoutEffect(() => {
    render()
  }, [render])

  // ── On-device AI (Segment Anything in a Web Worker) ───────────────────────
  function getWorker() {
    if (workerRef.current) return workerRef.current
    const w = new Worker(new URL("./sam.worker.ts", import.meta.url), { type: "module" })
    w.onmessage = (e: MessageEvent) => {
      const m = e.data
      if (m.type === "progress") setAiProgress(Math.round(m.progress ?? 0))
      else if (m.type === "status") {
        setAi(m.status)
        if (m.status === "ready" && pendingTapRef.current) {
          const t = pendingTapRef.current
          pendingTapRef.current = null
          segmentAt(t.x, t.y, t.remove)
        }
      } else if (m.type === "mask") {
        const mask = maskRef.current
        const add: Uint8Array = m.mask
        const remove = (w as Worker & { _remove?: boolean })._remove
        if (mask && add.length === mask.length) {
          for (let i = 0; i < add.length; i++) if (add[i]) mask[i] = remove ? 0 : 255
          renderRef.current()
        }
        setAi("ready")
        trackEvent("color_visualizer_ai_select", { remove: !!remove })
      } else if (m.type === "error") {
        console.error("[visualizer AI]", m.message)
        setAi("error")
      }
    }
    workerRef.current = w
    return w
  }

  /** Sends the current photo to the on-device model once per photo. */
  function startAi() {
    const orig = originalRef.current
    if (!orig) return
    setAi("loading")
    setAiProgress(0)
    getWorker().postMessage({ type: "embed", width: orig.width, height: orig.height, data: orig.data })
  }

  function segmentAt(x: number, y: number, remove: boolean) {
    const w = getWorker() as Worker & { _remove?: boolean }
    w._remove = remove
    setAi("working")
    w.postMessage({ type: "segment", points: [[x, y]], labels: [1] })
  }

  useEffect(() => () => workerRef.current?.terminate(), [])

  // ── Load photo (local only) ───────────────────────────────────────────────
  function loadFile(file: File | undefined) {
    setError(null)
    if (!file) return
    if (!file.type.startsWith("image/")) return setError("Please choose an image file.")
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, MAX_SIDE / Math.max(img.naturalWidth, img.naturalHeight))
      const w = Math.round(img.naturalWidth * scale)
      const h = Math.round(img.naturalHeight * scale)
      const canvas = canvasRef.current!
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext("2d", { willReadFrequently: true })!
      ctx.drawImage(img, 0, 0, w, h)
      originalRef.current = ctx.getImageData(0, 0, w, h)
      maskRef.current = new Uint8Array(w * h)
      undoRef.current = []
      setCanUndo(false)
      setSplit(0)
      setHasImage(true)
      setAi((a) => (a === "off" || a === "error" ? a : "off"))
      URL.revokeObjectURL(url)
      trackEvent("color_visualizer_photo_loaded", {})
      render()
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      setError("That photo couldn't be opened. Try a JPG or PNG.")
    }
    img.src = url
  }

  // ── Selection editing ─────────────────────────────────────────────────────
  function pushUndo() {
    if (!maskRef.current) return
    undoRef.current.push(maskRef.current.slice())
    if (undoRef.current.length > UNDO_LIMIT) undoRef.current.shift()
    setCanUndo(true)
  }

  function undo() {
    const prev = undoRef.current.pop()
    if (prev) maskRef.current = prev
    setCanUndo(undoRef.current.length > 0)
    render()
  }

  function resetSelection() {
    if (!maskRef.current) return
    pushUndo()
    maskRef.current.fill(0)
    render()
  }

  function toImage(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!
    const r = canvas.getBoundingClientRect()
    return {
      x: Math.round(((e.clientX - r.left) / r.width) * canvas.width),
      y: Math.round(((e.clientY - r.top) / r.height) * canvas.height),
      scale: canvas.width / r.width,
    }
  }

  function stamp(x: number, y: number, radius: number, value: number) {
    const mask = maskRef.current!
    const w = canvasRef.current!.width
    const h = canvasRef.current!.height
    const r2 = radius * radius
    const x0 = Math.max(0, x - radius)
    const x1 = Math.min(w - 1, x + radius)
    const y0 = Math.max(0, y - radius)
    const y1 = Math.min(h - 1, y + radius)
    for (let yy = y0; yy <= y1; yy++) {
      for (let xx = x0; xx <= x1; xx++) {
        const dx = xx - x
        const dy = yy - y
        if (dx * dx + dy * dy <= r2) mask[yy * w + xx] = value
      }
    }
  }

  function strokeTo(x: number, y: number, radius: number, value: number) {
    const last = lastPtRef.current
    if (!last) {
      stamp(x, y, radius, value)
    } else {
      const dist = Math.hypot(x - last.x, y - last.y)
      const steps = Math.max(1, Math.ceil(dist / Math.max(1, radius / 3)))
      for (let s = 1; s <= steps; s++) {
        stamp(Math.round(last.x + ((x - last.x) * s) / steps), Math.round(last.y + ((y - last.y) * s) / steps), radius, value)
      }
    }
    lastPtRef.current = { x, y }
  }

  /** Grows a region of similar color from the tapped pixel and adds it to the selection. */
  function fillFrom(x: number, y: number) {
    const orig = originalRef.current!
    const mask = maskRef.current!
    const { width: w, height: h, data } = orig
    const start = (y * w + x) * 4
    const sr = data[start]
    const sg = data[start + 1]
    const sb = data[start + 2]
    const tol2 = (tolerance * 2.2) ** 2
    const seen = new Uint8Array(w * h)
    const stack = new Int32Array(w * h)
    let top = 0
    stack[top++] = y * w + x
    seen[y * w + x] = 1
    while (top) {
      const i = stack[--top]
      const p = i * 4
      const dr = data[p] - sr
      const dg = data[p + 1] - sg
      const db = data[p + 2] - sb
      if (dr * dr + dg * dg + db * db > tol2) continue
      mask[i] = 255
      const px = i % w
      const py = (i - px) / w
      if (px > 0 && !seen[i - 1]) (seen[i - 1] = 1), (stack[top++] = i - 1)
      if (px < w - 1 && !seen[i + 1]) (seen[i + 1] = 1), (stack[top++] = i + 1)
      if (py > 0 && !seen[i - w]) (seen[i - w] = 1), (stack[top++] = i - w)
      if (py < h - 1 && !seen[i + w]) (seen[i + w] = 1), (stack[top++] = i + w)
    }
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!hasImage) return
    const { x, y, scale } = toImage(e)
    if (tool === "ai" || tool === "ai-remove") {
      if (ai === "loading" || ai === "analyzing" || ai === "working") return
      pushUndo()
      if (ai === "ready") segmentAt(x, y, tool === "ai-remove")
      else {
        // First tap on this photo: analyze it, then apply the tap.
        pendingTapRef.current = { x, y, remove: tool === "ai-remove" }
        startAi()
      }
      return
    }
    pushUndo()
    if (tool === "fill") {
      fillFrom(x, y)
      render()
      return
    }
    drawingRef.current = true
    lastPtRef.current = null
    e.currentTarget.setPointerCapture(e.pointerId)
    strokeTo(x, y, Math.round((brush / 2) * scale), tool === "brush" ? 255 : 0)
    scheduleRender()
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return
    const { x, y, scale } = toImage(e)
    strokeTo(x, y, Math.round((brush / 2) * scale), tool === "brush" ? 255 : 0)
    scheduleRender()
  }

  function onPointerUp() {
    drawingRef.current = false
    lastPtRef.current = null
  }

  function download() {
    const canvas = canvasRef.current
    if (!canvas) return
    // Export without the comparison split line, then restore the view.
    render(0)
    canvas.toBlob((blob) => {
      render()
      if (!blob) return
      const a = document.createElement("a")
      a.href = URL.createObjectURL(blob)
      a.download = "houston-superior-color-preview.png"
      a.click()
      setTimeout(() => URL.revokeObjectURL(a.href), 2000)
      trackEvent("color_visualizer_download", { color: color.label })
    }, "image/png")
  }

  const btn = (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium ${
      active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"
    }`

  return (
    <div className="space-y-5">
      <p className="rounded-lg border border-border bg-secondary/10 px-4 py-3 text-sm text-foreground">
        Your photograph stays on your device unless you choose to submit it with an estimate request.
      </p>

      {/* Upload */}
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-card px-4 py-6 text-center hover:border-primary">
        <ImagePlus className="h-7 w-7 text-primary" aria-hidden="true" />
        <span className="font-semibold text-foreground">{hasImage ? "Choose a different photo" : "Choose a photo of your room, house or cabinets"}</span>
        <span className="text-xs text-muted-foreground">JPG or PNG. It is opened in your browser and never uploaded.</span>
        <input type="file" accept="image/*" className="sr-only" onChange={(e) => loadFile(e.target.files?.[0])} />
      </label>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

      {/* Canvas */}
      <div className={hasImage ? "" : "hidden"}>
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="block h-auto w-full touch-none rounded-xl border border-border bg-muted"
          style={{ cursor: tool === "fill" ? "crosshair" : "cell" }}
          aria-label="Your photo. Paint over the area you want to recolor."
          role="img"
        />
      </div>

      {hasImage && (
        <>
          {/* Tools */}
          <div className="flex flex-wrap items-center gap-2" role="toolbar" aria-label="Selection tools">
            <button type="button" className={btn(tool === "ai")} onClick={() => setTool("ai")} aria-pressed={tool === "ai"}>
              <Sparkles className="h-4 w-4" aria-hidden="true" /> AI select
            </button>
            <button type="button" className={btn(tool === "ai-remove")} onClick={() => setTool("ai-remove")} aria-pressed={tool === "ai-remove"}>
              <MinusCircle className="h-4 w-4" aria-hidden="true" /> AI remove
            </button>
            <button type="button" className={btn(tool === "brush")} onClick={() => setTool("brush")} aria-pressed={tool === "brush"}>
              <Brush className="h-4 w-4" aria-hidden="true" /> Paint area
            </button>
            <button type="button" className={btn(tool === "erase")} onClick={() => setTool("erase")} aria-pressed={tool === "erase"}>
              <Eraser className="h-4 w-4" aria-hidden="true" /> Erase
            </button>
            <button type="button" className={btn(tool === "fill")} onClick={() => setTool("fill")} aria-pressed={tool === "fill"}>
              <Wand2 className="h-4 w-4" aria-hidden="true" /> Tap to fill
            </button>
            <button type="button" className={btn(false)} onClick={undo} disabled={!canUndo}>
              <Undo2 className="h-4 w-4" aria-hidden="true" /> Undo
            </button>
            <button type="button" className={btn(false)} onClick={resetSelection}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset selection
            </button>
            <button type="button" className={btn(false)} onClick={download}>
              <Download className="h-4 w-4" aria-hidden="true" /> Download preview
            </button>
          </div>

          {(tool === "ai" || tool === "ai-remove") && (
            <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
              {ai === "off" && (tool === "ai" ? "Tap a wall, door or cabinet and the AI selects it. Tap again to add more." : "Tap a selected area to remove it from the selection.")}
              {ai === "loading" && `Loading the AI on your device (first time only)… ${aiProgress}%`}
              {ai === "analyzing" && "Analyzing your photo on this device…"}
              {ai === "working" && "Selecting…"}
              {ai === "ready" && (tool === "ai" ? "Tap another area to add it, or use AI remove to take parts out." : "Tap an area to remove it from the selection.")}
              {ai === "error" && "The AI couldn't run on this device. Use Tap to fill or Paint area instead."}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {tool === "fill" ? (
              <label className="text-sm text-foreground">
                Fill sensitivity: {tolerance}
                <input type="range" min={5} max={60} value={tolerance} onChange={(e) => setTolerance(+e.target.value)} className="mt-1 w-full" />
              </label>
            ) : (
              <label className="text-sm text-foreground">
                Brush size: {brush}px
                <input type="range" min={8} max={140} value={brush} onChange={(e) => setBrush(+e.target.value)} className="mt-1 w-full" />
              </label>
            )}
            <label className="text-sm text-foreground">
              Coverage: {Math.round(coverage * 100)}%
              <input type="range" min={30} max={100} value={Math.round(coverage * 100)} onChange={(e) => setCoverage(+e.target.value / 100)} className="mt-1 w-full" />
            </label>
            <label className="text-sm text-foreground sm:col-span-2">
              Compare before and after (drag to reveal the original on the left)
              <input type="range" min={0} max={100} value={Math.round(split * 100)} onChange={(e) => setSplit(+e.target.value / 100)} className="mt-1 w-full" />
            </label>
          </div>
        </>
      )}

      {/* Colors */}
      <div>
        <p className="mb-2 text-sm font-semibold text-foreground">
          Selected: <span className="font-normal">{color.label}</span>
        </p>
        <ColorPicker
          selected={picked}
          onPick={(c) => {
            const label = colorLabel(c)
            setPicked({ provider: c.provider, code: c.code })
            setColor({ label, hex: c.hex })
            trackEvent("color_visualizer_color", { color: label })
          }}
          idPrefix="cv"
          listLabel="Paint colors"
          gridClassName="grid-cols-4 sm:grid-cols-6 lg:grid-cols-7"
        />
        <label className="mt-3 flex items-center gap-3 text-sm text-foreground">
          <input
            type="color"
            value={color.hex}
            onChange={(e) => {
              setPicked(null)
              setColor({ label: `Custom color ${e.target.value.toUpperCase()}`, hex: e.target.value })
            }}
            className="h-10 w-14 cursor-pointer rounded border border-border"
          />
          Or pick a custom color
        </label>
        <p className="mt-3 text-xs text-muted-foreground">{COLOR_DISCLAIMER}</p>
      </div>
    </div>
  )
}
