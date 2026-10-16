"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Brush, Eraser, ImagePlus, Undo2, Trash2, Sparkles, Search, X, Download, ArrowLeft, ArrowRight, Check, RefreshCw } from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { getColorCatalog } from "@/lib/visualizer/catalog"
import {
  SURFACES,
  applyRegion,
  clearSurface,
  colorLabel,
  countLabels,
  createHistory,
  fitSize,
  renderPreview,
  searchColors,
  strokeSegment,
  validatePhotoDimensions,
  validatePhotoFile,
  type CatalogColor,
  type Surface,
} from "@/lib/visualizer/core"
import type { RequestPhoto, SurfaceChoice } from "@/lib/visualizer/request"
import { VisualizerRequestForm } from "@/components/paint-visualizer/visualizer-request-form"

/**
 * Exterior paint visualizer (owner brief 2026-10-16): photo → mark surfaces and
 * pick colors → compare → request an estimate.
 *
 * Everything runs in this browser tab. The photo is opened with an object URL,
 * drawn to a canvas and kept in memory; it is only sent if the customer ticks
 * "include my photo" on the request form. The selection is a separate label
 * map (lib/visualizer/core.ts), so the original pixels are never changed.
 *
 * Marking is manual (brush and eraser) and works with mouse, touch and stylus
 * through pointer events. "Smart select" is optional: it runs the same
 * on-device Segment Anything model as /color-visualizer (components/sam.worker.ts);
 * only the model files are downloaded and the photo never leaves the device.
 * Its result is never final: every smart selection can be erased or undone.
 */

type Step = 1 | 2 | 3 | 4
type Tool = "paint" | "erase" | "smart" | "smart-remove"
type View = "preview" | "original" | "compare"
type AiStatus = "off" | "loading" | "analyzing" | "ready" | "working" | "error"

const STEPS: { n: Step; label: string }[] = [
  { n: 1, label: "Photo" },
  { n: 2, label: "Choose surfaces" },
  { n: 3, label: "Preview" },
  { n: 4, label: "Request estimate" },
]

const catalog = getColorCatalog()

export function ExteriorVisualizer() {
  const [step, setStep] = useState<Step>(1)
  const topRef = useRef<HTMLDivElement>(null)
  const prevStepRef = useRef<Step>(1)

  // On a phone the photo sits below the fold, so bring the progress bar and
  // the new step into view whenever the step changes (not on first load).
  useEffect(() => {
    if (prevStepRef.current === step) return
    prevStepRef.current = step
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [step])

  // ── Photo (step 1) ──────────────────────────────────────────────────────────
  const [pending, setPending] = useState<{ file: File; url: string; width: number; height: number } | null>(null)
  const [photoError, setPhotoError] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const startedRef = useRef(false)
  const previewTrackedRef = useRef(false)

  // ── Canvas + selection ──────────────────────────────────────────────────────
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const originalRef = useRef<ImageData | null>(null)
  const labelsRef = useRef<Uint8Array | null>(null)
  const historyRef = useRef(createHistory(15))
  const drawingRef = useRef(false)
  const lastPtRef = useRef<{ x: number; y: number } | null>(null)
  const frameRef = useRef<number | null>(null)
  const [hasPhoto, setHasPhoto] = useState(false)
  const [canUndo, setCanUndo] = useState(false)
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0])

  // ── Tools, surfaces, colors ─────────────────────────────────────────────────
  const [active, setActive] = useState<Surface>(SURFACES[0])
  const [tool, setTool] = useState<Tool>("paint")
  const [brush, setBrush] = useState(36)
  const [coverage, setCoverage] = useState(0.85)
  const [colors, setColors] = useState<Record<number, CatalogColor | null>>({})
  const [query, setQuery] = useState("")
  const [view, setView] = useState<View>("compare")
  const [split, setSplit] = useState(0.5)

  // ── On-device smart select ──────────────────────────────────────────────────
  const workerRef = useRef<Worker | null>(null)
  const pendingTapRef = useRef<{ x: number; y: number; remove: boolean; surfaceId: number } | null>(null)
  const segTargetRef = useRef<{ remove: boolean; surfaceId: number }>({ remove: false, surfaceId: 1 })
  const [ai, setAi] = useState<AiStatus>("off")
  const [aiProgress, setAiProgress] = useState(0)

  function markStarted() {
    if (startedRef.current) return
    startedRef.current = true
    trackEvent("visualizer_started", { tool: "exterior" })
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  const hexColors = Object.fromEntries(Object.entries(colors).map(([k, c]) => [k, c?.hex ?? null])) as Record<number, string | null>
  const colorKey = JSON.stringify(hexColors)

  const render = useCallback(() => {
    const canvas = canvasRef.current
    const orig = originalRef.current
    const labels = labelsRef.current
    if (!canvas || !orig || !labels) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const showOriginal = step === 3 && view === "original"
    const sp = step === 3 && view === "compare" ? split : 0
    const pixels = showOriginal
      ? orig.data
      : renderPreview(orig.data, labels, orig.width, { colors: JSON.parse(colorKey), coverage, split: sp, highlight: step === 2 })
    ctx.putImageData(new ImageData(new Uint8ClampedArray(pixels), orig.width, orig.height), 0, 0)
    if (sp > 0 && sp < 1) {
      const x = Math.round(sp * orig.width)
      ctx.fillStyle = "rgba(255,255,255,0.95)"
      ctx.fillRect(x - 2, 0, 4, orig.height)
    }
  }, [step, view, split, colorKey, coverage])

  const renderRef = useRef(render)
  renderRef.current = render

  useLayoutEffect(() => {
    render()
  }, [render, hasPhoto])

  const scheduleRender = useCallback(() => {
    if (frameRef.current != null) return
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = null
      renderRef.current()
    })
  }, [])

  // Clean up the object URL and the worker.
  useEffect(() => () => {
    workerRef.current?.terminate()
  }, [])
  useEffect(() => {
    if (!pending) return
    const url = pending.url
    return () => URL.revokeObjectURL(url)
  }, [pending])

  // ── Step 1: choose, check and preview the photo ─────────────────────────────
  function chooseFile(file: File | undefined) {
    markStarted()
    setPhotoError(null)
    if (!file) return
    const err = validatePhotoFile(file)
    if (err) return setPhotoError(err)
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      const dimErr = validatePhotoDimensions(img.naturalWidth, img.naturalHeight)
      if (dimErr) {
        URL.revokeObjectURL(url)
        setPhotoError(dimErr)
        return
      }
      setPending({ file, url, width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      setPhotoError("That photo couldn't be opened. Please try a different JPG, PNG or WebP file.")
    }
    img.src = url
  }

  function removePhoto() {
    setPending(null)
    setPhotoError(null)
    setHasPhoto(false)
    originalRef.current = null
    labelsRef.current = null
    historyRef.current.clear()
    setCanUndo(false)
    setCounts([0, 0, 0, 0, 0])
    setAi("off")
    workerRef.current?.terminate()
    workerRef.current = null
    if (fileInputRef.current) fileInputRef.current.value = ""
    setStep(1)
  }

  function acceptPhoto() {
    if (!pending) return
    const img = new Image()
    img.onload = () => {
      const { width, height } = fitSize(img.naturalWidth, img.naturalHeight)
      const canvas = canvasRef.current!
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext("2d", { willReadFrequently: true })!
      ctx.drawImage(img, 0, 0, width, height)
      originalRef.current = ctx.getImageData(0, 0, width, height)
      labelsRef.current = new Uint8Array(width * height)
      historyRef.current.clear()
      setCanUndo(false)
      setCounts([0, 0, 0, 0, 0])
      // A new photo needs a new on-device analysis.
      workerRef.current?.terminate()
      workerRef.current = null
      setAi("off")
      setHasPhoto(true)
      setStep(2)
      trackEvent("visualizer_photo_added", { tool: "exterior" })
    }
    img.onerror = () => setPhotoError("That photo couldn't be opened. Please try a different file.")
    img.src = pending.url
  }

  // ── Step 2: marking ─────────────────────────────────────────────────────────
  function pushUndo() {
    if (!labelsRef.current) return
    historyRef.current.push(labelsRef.current)
    setCanUndo(true)
  }

  function refreshCounts() {
    if (labelsRef.current) setCounts(countLabels(labelsRef.current))
  }

  function undo() {
    if (!labelsRef.current) return
    historyRef.current.undo(labelsRef.current)
    setCanUndo(historyRef.current.size > 0)
    refreshCounts()
    render()
  }

  function clearActive() {
    if (!labelsRef.current) return
    pushUndo()
    clearSurface(labelsRef.current, active.id)
    refreshCounts()
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

  function getWorker() {
    if (workerRef.current) return workerRef.current
    const w = new Worker(new URL("../sam.worker.ts", import.meta.url), { type: "module" })
    w.onmessage = (e: MessageEvent) => {
      const m = e.data
      if (m.type === "progress") setAiProgress(Math.round(m.progress ?? 0))
      else if (m.type === "status") {
        setAi(m.status)
        if (m.status === "ready" && pendingTapRef.current) {
          const t = pendingTapRef.current
          pendingTapRef.current = null
          segmentAt(t.x, t.y, t.remove, t.surfaceId)
        }
      } else if (m.type === "mask") {
        const labels = labelsRef.current
        if (labels) {
          const target = segTargetRef.current
          applyRegion(labels, m.mask as Uint8Array, target.surfaceId, target.remove)
          setCounts(countLabels(labels))
          renderRef.current()
        }
        setAi("ready")
      } else if (m.type === "error") {
        console.error("[paint visualizer smart select]", m.message)
        setAi("error")
      }
    }
    workerRef.current = w
    return w
  }

  function segmentAt(x: number, y: number, remove: boolean, surfaceId: number) {
    segTargetRef.current = { remove, surfaceId }
    setAi("working")
    getWorker().postMessage({ type: "segment", points: [[x, y]], labels: [1] })
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (step !== 2 || !labelsRef.current || !originalRef.current) return
    const { x, y, scale } = toImage(e)
    if (tool === "smart" || tool === "smart-remove") {
      if (ai === "loading" || ai === "analyzing" || ai === "working") return
      pushUndo()
      const remove = tool === "smart-remove"
      if (ai === "ready") segmentAt(x, y, remove, active.id)
      else {
        pendingTapRef.current = { x, y, remove, surfaceId: active.id }
        const orig = originalRef.current
        setAi("loading")
        setAiProgress(0)
        getWorker().postMessage({ type: "embed", width: orig.width, height: orig.height, data: orig.data })
      }
      return
    }
    pushUndo()
    drawingRef.current = true
    lastPtRef.current = null
    e.currentTarget.setPointerCapture(e.pointerId)
    paintAt(x, y, scale)
  }

  function paintAt(x: number, y: number, scale: number) {
    const labels = labelsRef.current!
    const { width, height } = originalRef.current!
    strokeSegment(labels, width, height, lastPtRef.current, { x, y }, (brush / 2) * scale, active.id, tool === "erase" ? "erase" : "paint")
    lastPtRef.current = { x, y }
    scheduleRender()
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawingRef.current) return
    const { x, y, scale } = toImage(e)
    paintAt(x, y, scale)
  }

  function onPointerUp() {
    if (!drawingRef.current) return
    drawingRef.current = false
    lastPtRef.current = null
    refreshCounts()
  }

  function pickColor(c: CatalogColor | null) {
    setColors((prev) => ({ ...prev, [active.id]: c }))
  }

  // ── Step 3: preview ─────────────────────────────────────────────────────────
  const previewReady = SURFACES.some((s) => counts[s.id] > 0 && colors[s.id])

  function goPreview() {
    setStep(3)
    setView("compare")
    if (previewReady && !previewTrackedRef.current) {
      previewTrackedRef.current = true
      trackEvent("visualizer_preview_created", {
        tool: "exterior",
        surfaces: SURFACES.filter((s) => counts[s.id] > 0 && colors[s.id]).map((s) => s.key).join(","),
      })
    }
  }

  /** JPEG of the original or the full preview (no compare line, no highlights). */
  function exportImage(kind: "original" | "preview"): Promise<Blob | null> {
    const orig = originalRef.current
    const labels = labelsRef.current
    if (!orig || !labels) return Promise.resolve(null)
    const c = document.createElement("canvas")
    c.width = orig.width
    c.height = orig.height
    const ctx = c.getContext("2d")
    if (!ctx) return Promise.resolve(null)
    const pixels = kind === "original" ? orig.data : renderPreview(orig.data, labels, orig.width, { colors: hexColors, coverage })
    ctx.putImageData(new ImageData(new Uint8ClampedArray(pixels), orig.width, orig.height), 0, 0)
    return new Promise((resolve) => c.toBlob((b) => resolve(b), "image/jpeg", 0.86))
  }

  async function downloadPreview() {
    const blob = await exportImage("preview")
    if (!blob) return
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.download = "houston-superior-exterior-preview.jpg"
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 2000)
  }

  async function getPhotos(): Promise<RequestPhoto[]> {
    // Re-encoded from the canvas, so camera metadata (including GPS) is not sent.
    const [original, preview] = await Promise.all([exportImage("original"), exportImage("preview")])
    const out: RequestPhoto[] = []
    if (original) out.push({ blob: original, filename: "house-original.jpg" })
    if (preview && previewReady) out.push({ blob: preview, filename: "house-color-preview.jpg" })
    return out
  }

  const surfaceChoices: SurfaceChoice[] = SURFACES.map((s) => ({
    key: s.key,
    label: s.label,
    color: colors[s.id] ? colorLabel(colors[s.id]!) : "",
  }))
  const defaultPaintSurfaces = SURFACES.filter((s) => colors[s.id] || counts[s.id] > 0).map((s) => s.key)

  // ── UI helpers ──────────────────────────────────────────────────────────────
  const btn = (on: boolean) =>
    `inline-flex min-h-11 items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 ${
      on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"
    }`
  const primaryBtn =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
  const ghostBtn =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

  const results = searchColors(catalog.colors, query)
  const activeColor = colors[active.id] ?? null
  const markedSummary = SURFACES.map((s) => `${s.label}: ${counts[s.id] > 0 ? "marked" : "not marked"}${colors[s.id] ? `, ${colorLabel(colors[s.id]!)}` : ""}`).join(". ")

  return (
    <div ref={topRef} className="scroll-mt-24 space-y-6">
      {/* Progress */}
      <nav aria-label="Visualizer progress">
        <ol className="grid grid-cols-4 gap-2">
          {STEPS.map((s) => {
            const current = s.n === step
            const done = s.n < step
            return (
              <li key={s.n} aria-current={current ? "step" : undefined} className="min-w-0">
                <div className={`h-1.5 rounded-full ${done || current ? "bg-secondary" : "bg-border"}`} aria-hidden="true" />
                <p className={`mt-2 text-xs leading-tight sm:text-sm ${current ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                  <span className="sr-only">{done ? "Completed: " : current ? "Current step: " : "Upcoming: "}</span>
                  {s.n}. {s.label}
                </p>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* Step 1 */}
      {step === 1 && (
        <section aria-labelledby="pv-photo-h" className="space-y-4">
          <h2 id="pv-photo-h" className="font-display text-2xl text-foreground">Add a photo of your home</h2>
          <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            <li className="rounded-lg border border-border bg-card px-3 py-2">Stand back so the whole front or corner of the house is in the photo.</li>
            <li className="rounded-lg border border-border bg-card px-3 py-2">Take it in daylight, ideally without harsh shadows across the walls.</li>
            <li className="rounded-lg border border-border bg-card px-3 py-2">Keep cars, trees and other objects from blocking the walls where you can.</li>
          </ul>

          {!pending ? (
            <div
              onDragOver={(e) => {
                e.preventDefault()
                setDragOver(true)
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault()
                setDragOver(false)
                chooseFile(e.dataTransfer.files?.[0])
              }}
              className={`rounded-2xl border-2 border-dashed px-4 py-10 text-center ${dragOver ? "border-primary bg-primary/5" : "border-border bg-card"}`}
            >
              <ImagePlus className="mx-auto h-9 w-9 text-primary" aria-hidden="true" />
              <label htmlFor="pv-file" className="mt-3 block cursor-pointer">
                <span className={`${primaryBtn} mt-1`}>Choose a photo</span>
                <span className="mt-3 block text-sm text-muted-foreground">or drag it here. JPG, PNG or WebP, up to 15 MB.</span>
              </label>
              <input
                ref={fileInputRef}
                id="pv-file"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="sr-only"
                onClick={markStarted}
                onChange={(e) => chooseFile(e.target.files?.[0])}
                aria-describedby="pv-privacy"
              />
            </div>
          ) : (
            <div className="space-y-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pending.url} alt="The photo you chose of your home" className="max-h-[60vh] w-full rounded-2xl border border-border bg-muted object-contain" />
              <p className="text-sm text-muted-foreground">
                {pending.file.name} · {pending.width}×{pending.height}
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button type="button" className={primaryBtn} onClick={acceptPhoto}>
                  <Check className="h-5 w-5" aria-hidden="true" /> Use this photo
                </button>
                <label htmlFor="pv-file-replace" className={`${ghostBtn} cursor-pointer`}>
                  <RefreshCw className="h-4 w-4" aria-hidden="true" /> Replace photo
                </label>
                <input
                  id="pv-file-replace"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={(e) => chooseFile(e.target.files?.[0])}
                />
                <button type="button" className={ghostBtn} onClick={removePhoto}>
                  <Trash2 className="h-4 w-4" aria-hidden="true" /> Remove photo
                </button>
              </div>
            </div>
          )}
          {photoError && (
            <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {photoError}
            </p>
          )}
          <p id="pv-privacy" className="text-sm text-muted-foreground">
            Your photo is opened in your browser and stays on your device unless you choose to include it with an estimate request.
          </p>
        </section>
      )}

      {/* Canvas (steps 2–4) */}
      <div className={hasPhoto && step > 1 ? "" : "hidden"}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="space-y-3">
            <canvas
              ref={canvasRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className={`block h-auto w-full rounded-2xl border border-border bg-muted ${step === 2 ? "touch-none" : ""}`}
              style={{ cursor: step === 2 ? "crosshair" : "default" }}
              role="img"
              aria-label={
                step === 2
                  ? `Your photo. Draw on the ${active.label.toLowerCase()} to mark it. ${markedSummary}.`
                  : step === 3 && view === "original"
                    ? "Your original photo."
                    : `Color preview of your photo. ${markedSummary}.`
              }
            />
            <p className="text-xs text-muted-foreground">
              Digital previews are approximate. Confirm final colors with physical samples and an on-site review.
            </p>

            {step === 3 && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2" role="group" aria-label="Choose what to show">
                  <button type="button" className={btn(view === "original")} aria-pressed={view === "original"} onClick={() => setView("original")}>
                    Original
                  </button>
                  <button type="button" className={btn(view === "preview")} aria-pressed={view === "preview"} onClick={() => setView("preview")}>
                    Preview
                  </button>
                  <button type="button" className={btn(view === "compare")} aria-pressed={view === "compare"} onClick={() => setView("compare")}>
                    Side by side
                  </button>
                  <button type="button" className={btn(false)} onClick={downloadPreview} disabled={!previewReady}>
                    <Download className="h-4 w-4" aria-hidden="true" /> Download preview
                  </button>
                </div>
                {view === "compare" && (
                  <label className="block text-sm text-foreground">
                    Comparison: original on the left, preview on the right
                    <input
                      type="range"
                      min={5}
                      max={95}
                      value={Math.round(split * 100)}
                      onChange={(e) => setSplit(+e.target.value / 100)}
                      className="mt-1 w-full"
                      aria-valuetext={`${Math.round(split * 100)}% original`}
                    />
                  </label>
                )}
                {!previewReady && (
                  <p className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground" role="status">
                    No surface has both a marked area and a color yet, so the preview matches your original photo.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Side panel */}
          <div className="space-y-5">
            {step === 2 && (
              <>
                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-foreground">1. Choose a surface</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {SURFACES.map((s) => {
                      const on = active.id === s.id
                      const c = colors[s.id]
                      return (
                        <label
                          key={s.key}
                          className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring ${
                            on ? "border-primary bg-primary/10 font-semibold" : "border-border bg-card"
                          }`}
                        >
                          <input type="radio" name="pv-surface" className="sr-only" checked={on} onChange={() => setActive(s)} />
                          <span
                            className="h-5 w-5 shrink-0 rounded-full border border-black/15"
                            style={{ backgroundColor: c?.hex ?? s.marker }}
                            aria-hidden="true"
                          />
                          <span className="min-w-0">
                            <span className="block truncate text-foreground">{s.label}</span>
                            <span className="block truncate text-xs font-normal text-muted-foreground">
                              {counts[s.id] > 0 ? "Marked" : "Not marked"}
                              {c ? ` · ${c.name}` : ""}
                            </span>
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </fieldset>

                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">2. Mark the {active.label.toLowerCase()} on the photo</p>
                  <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Selection tools">
                    <button type="button" className={btn(tool === "paint")} aria-pressed={tool === "paint"} onClick={() => setTool("paint")}>
                      <Brush className="h-4 w-4" aria-hidden="true" /> Paint area
                    </button>
                    <button type="button" className={btn(tool === "erase")} aria-pressed={tool === "erase"} onClick={() => setTool("erase")}>
                      <Eraser className="h-4 w-4" aria-hidden="true" /> Erase
                    </button>
                    <button type="button" className={btn(tool === "smart")} aria-pressed={tool === "smart"} onClick={() => setTool("smart")}>
                      <Sparkles className="h-4 w-4" aria-hidden="true" /> Smart select
                    </button>
                    {(tool === "smart" || tool === "smart-remove") && (
                      <button type="button" className={btn(tool === "smart-remove")} aria-pressed={tool === "smart-remove"} onClick={() => setTool("smart-remove")}>
                        Smart remove
                      </button>
                    )}
                    <button type="button" className={btn(false)} onClick={undo} disabled={!canUndo}>
                      <Undo2 className="h-4 w-4" aria-hidden="true" /> Undo
                    </button>
                    <button type="button" className={btn(false)} onClick={clearActive} disabled={counts[active.id] === 0}>
                      <Trash2 className="h-4 w-4" aria-hidden="true" /> Clear selection
                    </button>
                  </div>
                  {(tool === "paint" || tool === "erase") && (
                    <label className="mt-3 block text-sm text-foreground">
                      Brush size: {brush}px
                      <input type="range" min={6} max={140} value={brush} onChange={(e) => setBrush(+e.target.value)} className="mt-1 w-full" />
                    </label>
                  )}
                  <p className="mt-2 text-xs text-muted-foreground" role="status" aria-live="polite">
                    {tool === "paint" && "Draw over the surface with your finger, mouse or stylus. Painting one surface takes those pixels away from the others."}
                    {tool === "erase" && `Draw to remove parts of the ${active.label.toLowerCase()} selection.`}
                    {(tool === "smart" || tool === "smart-remove") && (
                      <>
                        {ai === "off" && "Optional: tap a wall, door or shutter and the selection is suggested on your device. Check it and fix it with Paint area or Erase."}
                        {ai === "loading" && `Loading the selection model on your device (first time only)… ${aiProgress}%`}
                        {ai === "analyzing" && "Analyzing your photo on this device…"}
                        {ai === "working" && "Selecting…"}
                        {ai === "ready" && (tool === "smart" ? "Tap another area to add it, or use Smart remove. Check the edges and correct them by hand." : "Tap an area to remove it from this surface.")}
                        {ai === "error" && "Smart select couldn't run on this device. Use Paint area and Erase instead."}
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Marking needs a mouse, touch screen or stylus. If you can&apos;t mark the photo, skip ahead and describe the colors in your request.
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-foreground">3. Choose a color for the {active.label.toLowerCase()}</p>
                  <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                    <span className="h-8 w-8 shrink-0 rounded-md border border-black/15" style={{ backgroundColor: activeColor?.hex ?? "transparent" }} aria-hidden="true" />
                    <p className="min-w-0 flex-1 text-sm text-foreground" aria-live="polite">
                      {activeColor ? colorLabel(activeColor) : "No color chosen"}
                    </p>
                    {activeColor && (
                      <button type="button" onClick={() => pickColor(null)} className="inline-flex min-h-11 items-center gap-1 rounded-md px-2 text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <X className="h-4 w-4" aria-hidden="true" /> Remove
                      </button>
                    )}
                  </div>
                  <label htmlFor="pv-color-search" className="sr-only">Search colors by name or code</label>
                  <div className="relative mt-2">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                    <input
                      id="pv-color-search"
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search name or code, e.g. Alabaster or SW 7008"
                      className="w-full rounded-lg border border-border bg-background py-2.5 pl-9 pr-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground" role="status" aria-live="polite">
                    {results.length} {results.length === 1 ? "color" : "colors"}
                  </p>
                  <ul className="mt-2 grid max-h-72 grid-cols-3 gap-2 overflow-y-auto pr-1" aria-label={`Colors for the ${active.label.toLowerCase()}`}>
                    {results.map((c) => {
                      const on = activeColor?.code === c.code && activeColor?.provider === c.provider
                      return (
                        <li key={`${c.provider}-${c.code}`}>
                          <button
                            type="button"
                            onClick={() => pickColor(c)}
                            aria-pressed={on}
                            aria-label={`${colorLabel(c)}, approximate`}
                            className={`w-full rounded-lg border p-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${on ? "border-primary ring-2 ring-primary" : "border-border"}`}
                          >
                            <span className="block h-10 rounded-md border border-black/10" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                            <span className="mt-1 block truncate text-[11px] font-medium text-foreground">{c.name}</span>
                            <span className="block truncate text-[10px] text-muted-foreground">
                              {c.provider === "Sherwin-Williams" ? "SW" : c.provider === "Benjamin Moore" ? "BM" : c.provider} {c.code.replace(/^SW /, "")}
                            </span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                  <label className="mt-3 block text-sm text-foreground">
                    Color strength: {Math.round(coverage * 100)}%
                    <input type="range" min={40} max={100} value={Math.round(coverage * 100)} onChange={(e) => setCoverage(+e.target.value / 100)} className="mt-1 w-full" />
                  </label>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Swatches are approximate on-screen colors, not manufacturer color data. Color names identify Sherwin-Williams and Benjamin Moore products for reference only; Houston Superior Painting is not sponsored by either manufacturer.
                  </p>
                </div>
              </>
            )}

            {step === 3 && (
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-sm font-semibold text-foreground">Your color choices</p>
                <ul className="mt-2 space-y-2 text-sm">
                  {SURFACES.map((s) => (
                    <li key={s.key} className="flex items-center gap-2">
                      <span className="h-5 w-5 shrink-0 rounded border border-black/15" style={{ backgroundColor: colors[s.id]?.hex ?? "transparent" }} aria-hidden="true" />
                      <span className="text-foreground">
                        {s.label}: <span className="text-muted-foreground">{colors[s.id] ? colorLabel(colors[s.id]!) : "no color"}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  This is a digital approximation, not the exact finish. Paint sheen, light and your screen all change how a color looks.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Step navigation */}
        {step === 2 && (
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <button type="button" className={ghostBtn} onClick={() => setStep(1)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Change photo
            </button>
            <button type="button" className={primaryBtn} onClick={goPreview}>
              See the preview <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <button type="button" className={ghostBtn} onClick={() => setStep(2)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Edit surfaces and colors
            </button>
            <button type="button" className={primaryBtn} onClick={() => setStep(4)}>
              Request a free estimate <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="mt-6 space-y-4">
            <button type="button" className={ghostBtn} onClick={() => setStep(3)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to the preview
            </button>
            <VisualizerRequestForm
              surfaces={surfaceChoices}
              defaultPaintSurfaces={defaultPaintSurfaces}
              hasPreview={previewReady}
              getPhotos={getPhotos}
            />
          </div>
        )}
      </div>
    </div>
  )
}
