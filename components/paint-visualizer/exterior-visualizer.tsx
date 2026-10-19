"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Brush,
  Check,
  Download,
  Eraser,
  ImagePlus,
  Loader2,
  MapPin,
  RotateCcw,
  RotateCw,
  Search,
  Sparkles,
  Trash2,
  Undo2,
  X,
  ZoomIn,
  ZoomOut,
  ChevronUp,
  ChevronDown,
  Save,
  Wand2,
} from "lucide-react"
import { trackEvent } from "@/lib/analytics"
import { getColorCatalog } from "@/lib/visualizer/catalog"
import {
  SURFACES,
  applyRegion,
  clearSurface,
  colorLabel,
  countLabels,
  createHistory,
  describeCombo,
  fitSize,
  renderPreview,
  strokeSegment,
  validatePhotoDimensions,
  validatePhotoFile,
  type CatalogColor,
  type SavedCombo,
  type Surface,
} from "@/lib/visualizer/core"
import type { PropertySource, RequestPhoto, SurfaceChoice } from "@/lib/visualizer/request"
import { VisualizerRequestForm } from "@/components/paint-visualizer/visualizer-request-form"
import { ColorPicker } from "@/components/paint-visualizer/color-picker"
import { BRAND_DISCLAIMER } from "@/data/paint-colors"

/**
 * Exterior paint visualizer (owner brief 2026-10-16, second version):
 * address → Street View photo (or an uploaded photo) → on-device surface
 * detection → corrections + colors per surface → compare → project card →
 * estimate request.
 *
 * Privacy: the photo is processed in this tab. Detection and smart select run
 * on the device (facade.worker.ts). The photo is only sent to Houston Superior
 * Painting with the request, after explicit consent on the project card.
 * Analytics events never carry the address, the photo or contact details.
 */

type Step = 1 | 2 | 3 | 4
type Tool = "paint" | "erase" | "smart" | "smart-remove"
type View = "preview" | "original" | "compare"
type AiStatus = "off" | "loading" | "detecting" | "tracing" | "analyzing" | "ready" | "working" | "error"
type Lookup = {
  formattedAddress: string
  pano: { id: string; date: string | null; copyright: string }
  heading: number
}

const STEPS: { n: Step; label: string }[] = [
  { n: 1, label: "Your home" },
  { n: 2, label: "Surfaces & colors" },
  { n: 3, label: "Compare" },
  { n: 4, label: "Request estimate" },
]

const catalog = getColorCatalog()
const COMBOS_KEY = "hsp-visualizer-combos"
const ATTACH_STREETVIEW = process.env.NEXT_PUBLIC_VISUALIZER_ATTACH_STREETVIEW === "true"

function loadCombos(): SavedCombo[] {
  try {
    const raw = window.localStorage.getItem(COMBOS_KEY)
    const parsed = raw ? (JSON.parse(raw) as SavedCombo[]) : []
    return Array.isArray(parsed) ? parsed.slice(0, 12) : []
  } catch {
    return []
  }
}
function storeCombos(c: SavedCombo[]) {
  try {
    window.localStorage.setItem(COMBOS_KEY, JSON.stringify(c))
  } catch {
    // Private mode or blocked storage: combinations still work for this visit.
  }
}

export function ExteriorVisualizer() {
  const [step, setStep] = useState<Step>(1)
  const topRef = useRef<HTMLDivElement>(null)
  const prevStepRef = useRef<Step>(1)
  useEffect(() => {
    if (prevStepRef.current === step) return
    prevStepRef.current = step
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [step])

  const startedRef = useRef(false)
  const previewTrackedRef = useRef(false)
  function markStarted(how: string) {
    if (startedRef.current) return
    startedRef.current = true
    trackEvent("visualizer_started", { tool: "exterior", start: how })
  }

  // ── Step 1: address search or upload ───────────────────────────────────────
  const [addressInput, setAddressInput] = useState("")
  const [searching, setSearching] = useState(false)
  const [lookupError, setLookupError] = useState<string | null>(null)
  const [lookup, setLookup] = useState<Lookup | null>(null)
  const [camera, setCamera] = useState({ heading: 0, pitch: 5, fov: 80 })
  const [svLoading, setSvLoading] = useState(false)
  const [svError, setSvError] = useState<string | null>(null)
  const [upload, setUpload] = useState<{ file: File; url: string; width: number; height: number } | null>(null)
  const [photoError, setPhotoError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [source, setSource] = useState<PropertySource>({ kind: "upload" })
  const [projectAddress, setProjectAddress] = useState("")
  const [imageCredit, setImageCredit] = useState<string | null>(null)

  const svUrl = lookup
    ? `/api/visualizer/streetview?pano=${encodeURIComponent(lookup.pano.id)}&heading=${camera.heading}&pitch=${camera.pitch}&fov=${camera.fov}`
    : null

  async function findAddress(e: React.FormEvent) {
    e.preventDefault()
    markStarted("address")
    setLookupError(null)
    setSvError(null)
    if (addressInput.trim().length < 5) return setLookupError("Please enter the full street address, city and ZIP.")
    setSearching(true)
    try {
      const res = await fetch("/api/visualizer/address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: addressInput }),
      })
      const data = (await res.json()) as { ok: boolean; message?: string; formattedAddress?: string; pano?: Lookup["pano"]; heading?: number }
      if (!data.ok || !data.pano || data.heading == null) {
        setLookup(null)
        setLookupError(data.message ?? "Address search isn't available right now. Please upload a photo instead.")
        return
      }
      setLookup({ formattedAddress: data.formattedAddress!, pano: data.pano, heading: data.heading })
      setCamera({ heading: data.heading, pitch: 5, fov: 80 })
      setSvLoading(true)
      setUpload(null)
    } catch {
      setLookupError("Address search isn't responding. Please upload a photo instead.")
    } finally {
      setSearching(false)
    }
  }

  function turn(dh: number) {
    setSvLoading(true)
    setCamera((c) => ({ ...c, heading: (c.heading + dh + 360) % 360 }))
  }
  function tilt(dp: number) {
    setSvLoading(true)
    setCamera((c) => ({ ...c, pitch: Math.max(-20, Math.min(40, c.pitch + dp)) }))
  }
  function zoom(df: number) {
    setSvLoading(true)
    setCamera((c) => ({ ...c, fov: Math.max(30, Math.min(120, c.fov + df)) }))
  }

  function chooseFile(file: File | undefined) {
    markStarted("upload")
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
        return setPhotoError(dimErr)
      }
      setUpload((prev) => {
        if (prev) URL.revokeObjectURL(prev.url)
        return { file, url, width: img.naturalWidth, height: img.naturalHeight }
      })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      setPhotoError("That photo couldn't be opened. Please try a different JPG, PNG or WebP file.")
    }
    img.src = url
  }

  function removeUpload() {
    if (upload) URL.revokeObjectURL(upload.url)
    setUpload(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  // ── Canvas + selection ─────────────────────────────────────────────────────
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

  const [active, setActive] = useState<Surface>(SURFACES[0])
  const [tool, setTool] = useState<Tool>("paint")
  const [brush, setBrush] = useState(28)
  const [coverage, setCoverage] = useState(0.85)
  const [colors, setColors] = useState<Record<number, CatalogColor | null>>({})
  const [view, setView] = useState<View>("compare")
  const [split, setSplit] = useState(0.5)
  const [combos, setCombos] = useState<SavedCombo[]>([])
  useEffect(() => setCombos(loadCombos()), [])

  // ── On-device detection + smart select ─────────────────────────────────────
  const workerRef = useRef<Worker | null>(null)
  const pendingTapRef = useRef<{ x: number; y: number; remove: boolean; surfaceId: number } | null>(null)
  const segTargetRef = useRef<{ remove: boolean; surfaceId: number }>({ remove: false, surfaceId: 1 })
  const [ai, setAi] = useState<AiStatus>("off")
  const [aiProgress, setAiProgress] = useState(0)
  const [found, setFound] = useState<Record<string, number | boolean> | null>(null)
  const [needSidingTap, setNeedSidingTap] = useState(false)

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

  useEffect(() => () => workerRef.current?.terminate(), [])

  function refreshCounts() {
    if (labelsRef.current) setCounts(countLabels(labelsRef.current))
  }

  function getWorker() {
    if (workerRef.current) return workerRef.current
    const w = new Worker(new URL("./facade.worker.ts", import.meta.url), { type: "module" })
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
      } else if (m.type === "facade") {
        const labels = labelsRef.current
        const incoming = m.labels as Uint8Array
        if (labels && incoming.length === labels.length) {
          historyRef.current.push(labels)
          setCanUndo(true)
          labels.set(incoming)
          const c = countLabels(labels)
          setCounts(c)
          renderRef.current()
          // Siding is the hardest surface to find automatically. When little
          // was found, ask for one tap on it (on-device, whole-wall selection).
          if (c[1] < labels.length * 0.03) {
            setActive(SURFACES[0])
            setTool("smart")
            setNeedSidingTap(true)
          }
        }
        setFound(m.found)
        if (process.env.NODE_ENV === "development") console.debug("[facade] selected boxes", JSON.stringify(m.boxes), "box prompts", m.boxPrompts)
        trackEvent("visualizer_surfaces_detected", {
          tool: "exterior",
          door: m.found.doors > 0,
          shutters: m.found.shutters,
          house: !!m.found.house,
        })
      } else if (m.type === "mask") {
        const labels = labelsRef.current
        if (labels) {
          const t = segTargetRef.current
          // A siding tap selects a whole wall; it never takes pixels already given to trim, the door or shutters.
          applyRegion(labels, m.mask as Uint8Array, t.surfaceId, t.remove, t.surfaceId === 1)
          if (t.surfaceId === 1 && !t.remove) setNeedSidingTap(false)
          setCounts(countLabels(labels))
          renderRef.current()
        }
        setAi("ready")
      } else if (m.type === "error") {
        console.error("[paint visualizer]", m.message)
        setAi("error")
      }
    }
    workerRef.current = w
    return w
  }

  function detectSurfaces() {
    const orig = originalRef.current
    if (!orig) return
    setFound(null)
    setNeedSidingTap(false)
    setAi("loading")
    setAiProgress(0)
    getWorker().postMessage({ type: "detect", width: orig.width, height: orig.height, data: orig.data })
  }

  function segmentAt(x: number, y: number, remove: boolean, surfaceId: number) {
    segTargetRef.current = { remove, surfaceId }
    setAi("working")
    // Siding is a whole wall, so take SAM's largest candidate; other parts take its most confident one.
    getWorker().postMessage({ type: "segment", points: [[x, y]], labels: [1], pick: surfaceId === 1 ? "largest" : "best" })
  }

  /** Draws the chosen image, resets the selection (colors are kept) and starts detection. */
  function startWithImage(src: string, next: PropertySource, address: string, credit: string | null) {
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
      workerRef.current?.terminate()
      workerRef.current = null
      setAi("off")
      setSource(next)
      if (address) setProjectAddress(address)
      setImageCredit(credit)
      setHasPhoto(true)
      setStep(2)
      trackEvent("visualizer_photo_added", { tool: "exterior", source: next.kind })
      detectSurfaces()
    }
    img.onerror = () => {
      if (next.kind === "street_view") setSvError("That view couldn't be loaded. Try turning the camera, or upload a photo.")
      else setPhotoError("That photo couldn't be opened. Please try a different file.")
    }
    img.src = src
  }

  function confirmStreetView() {
    if (!lookup || !svUrl) return
    startWithImage(
      svUrl,
      { kind: "street_view", pano: lookup.pano.id, heading: camera.heading, pitch: camera.pitch, fov: camera.fov, date: lookup.pano.date },
      lookup.formattedAddress,
      `Street View image ${lookup.pano.copyright}${lookup.pano.date ? `, ${lookup.pano.date}` : ""}`,
    )
  }

  function confirmUpload() {
    if (!upload) return
    startWithImage(upload.url, { kind: "upload" }, addressInput.trim(), null)
  }

  // ── Step 2: corrections ────────────────────────────────────────────────────
  function pushUndo() {
    if (!labelsRef.current) return
    historyRef.current.push(labelsRef.current)
    setCanUndo(true)
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

  const busy = ai === "loading" || ai === "detecting" || ai === "tracing" || ai === "analyzing" || ai === "working"

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    if (step !== 2 || !labelsRef.current || !originalRef.current) return
    const { x, y, scale } = toImage(e)
    if (tool === "smart" || tool === "smart-remove") {
      if (busy) return
      pushUndo()
      const remove = tool === "smart-remove"
      if (ai === "ready") segmentAt(x, y, remove, active.id)
      else {
        pendingTapRef.current = { x, y, remove, surfaceId: active.id }
        const orig = originalRef.current
        setAi("loading")
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
    const { width, height } = originalRef.current!
    strokeSegment(labelsRef.current!, width, height, lastPtRef.current, { x, y }, (brush / 2) * scale, active.id, tool === "erase" ? "erase" : "paint")
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

  // ── Colors + combinations ──────────────────────────────────────────────────
  function pickColor(c: CatalogColor | null) {
    setColors((prev) => ({ ...prev, [active.id]: c }))
  }
  function saveCombo() {
    if (!SURFACES.some((s) => colors[s.id])) return
    const next = [{ id: `${Date.now()}`, name: `Combination ${combos.length + 1}`, colors: { ...colors } }, ...combos].slice(0, 12)
    setCombos(next)
    storeCombos(next)
    trackEvent("visualizer_combo_saved", { tool: "exterior", count: next.length })
  }
  function applyCombo(c: SavedCombo) {
    setColors({ ...(c.colors as Record<number, CatalogColor | null>) })
  }
  function deleteCombo(id: string) {
    const next = combos.filter((c) => c.id !== id)
    setCombos(next)
    storeCombos(next)
  }

  // ── Step 3 + 4 ─────────────────────────────────────────────────────────────
  const previewReady = SURFACES.some((s) => counts[s.id] > 0 && colors[s.id])

  function goCompare() {
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

  /** Both images for the project card. */
  async function getImages(): Promise<{ original: Blob | null; preview: Blob | null }> {
    const [original, preview] = await Promise.all([exportImage("original"), exportImage("preview")])
    return { original, preview: previewReady ? preview : null }
  }

  /** Images attached to the request (re-encoded, so no camera metadata). */
  const attachable = source.kind === "upload" || ATTACH_STREETVIEW
  async function getPhotos(): Promise<RequestPhoto[]> {
    if (!attachable) return []
    const { original, preview } = await getImages()
    const out: RequestPhoto[] = []
    if (original) out.push({ blob: original, filename: "house-original.jpg" })
    if (preview) out.push({ blob: preview, filename: "house-color-preview.jpg" })
    return out
  }

  const surfaceChoices: SurfaceChoice[] = SURFACES.map((s) => ({ key: s.key, label: s.label, color: colors[s.id] ? colorLabel(colors[s.id]!) : "" }))
  const defaultPaintSurfaces = SURFACES.filter((s) => colors[s.id] || counts[s.id] > 0).map((s) => s.key)

  // ── UI helpers ─────────────────────────────────────────────────────────────
  const ring = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  const btn = (on: boolean) =>
    `inline-flex min-h-11 items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium disabled:opacity-50 ${ring} ${
      on ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"
    }`
  const primaryBtn = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90 disabled:opacity-50 ${ring}`
  const ghostBtn = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground hover:border-primary ${ring}`
  const iconBtn = `inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:border-primary disabled:opacity-50 ${ring}`

  const activeColor = colors[active.id] ?? null
  const summary = SURFACES.map((s) => `${s.label}: ${counts[s.id] > 0 ? "selected" : "not selected"}${colors[s.id] ? `, ${colorLabel(colors[s.id]!)}` : ""}`).join(". ")

  const aiText: Record<AiStatus, string> = {
    off: "",
    loading: `Loading the detection models on your device (first time only, a large one-time download)… ${aiProgress}%`,
    detecting: "Looking for the siding, trim, front door and shutters…",
    tracing: "Outlining each surface…",
    analyzing: "Analyzing your photo on this device…",
    ready: "",
    working: "Selecting…",
    error: "Automatic detection couldn't run on this device. Mark the surfaces with Paint area and Erase instead.",
  }

  return (
    <div ref={topRef} className="scroll-mt-24 space-y-6">
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

      {/* ── Step 1 ── */}
      {step === 1 && (
        <section aria-labelledby="pv-home-h" className="space-y-6">
          <h2 id="pv-home-h" className="font-display text-2xl text-foreground">Find your home</h2>

          <form onSubmit={findAddress} className="space-y-2" aria-label="Find your home by address">
            <label htmlFor="pv-address-search" className="block text-sm font-medium text-foreground">Home address</label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  id="pv-address-search"
                  autoComplete="street-address"
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  placeholder="Street address, city, ZIP"
                  className="w-full rounded-lg border border-border bg-background py-3 pl-9 pr-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <button type="submit" className={primaryBtn} disabled={searching}>
                {searching ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Search className="h-4 w-4" aria-hidden="true" />}
                {searching ? "Searching…" : "Find my home"}
              </button>
            </div>
            {lookupError && (
              <p className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-900" role="alert">
                {lookupError}
              </p>
            )}
          </form>

          {lookup && svUrl && (
            <div className="space-y-3">
              <p className="text-sm text-foreground">
                <strong>{lookup.formattedAddress}</strong>. Turn the camera until your home fills the picture, then confirm.
              </p>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svUrl}
                  alt={`Street-level view toward ${lookup.formattedAddress}`}
                  className="mx-auto aspect-square w-full max-w-xl object-cover"
                  onLoad={() => setSvLoading(false)}
                  onError={() => {
                    setSvLoading(false)
                    setSvError("That view couldn't be loaded. Try turning the camera, or upload a photo.")
                  }}
                />
                {svLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20" aria-hidden="true">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Street View image {lookup.pano.copyright}
                {lookup.pano.date ? `, captured ${lookup.pano.date}` : ""}. It may not show recent changes to your home.
              </p>
              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Adjust the view">
                <button type="button" className={iconBtn} onClick={() => turn(-20)} aria-label="Turn left">
                  <RotateCcw className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" className={iconBtn} onClick={() => turn(20)} aria-label="Turn right">
                  <RotateCw className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" className={iconBtn} onClick={() => tilt(8)} aria-label="Tilt up">
                  <ChevronUp className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" className={iconBtn} onClick={() => tilt(-8)} aria-label="Tilt down">
                  <ChevronDown className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" className={iconBtn} onClick={() => zoom(-15)} aria-label="Zoom in">
                  <ZoomIn className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" className={iconBtn} onClick={() => zoom(15)} aria-label="Zoom out">
                  <ZoomOut className="h-5 w-5" aria-hidden="true" />
                </button>
                <span className="text-xs text-muted-foreground" aria-live="polite">
                  Facing {camera.heading}°, zoom {Math.round((120 - camera.fov) / 0.9)}%
                </span>
              </div>
              {svError && <p className="text-sm text-red-700" role="alert">{svError}</p>}
              <button type="button" className={primaryBtn} onClick={confirmStreetView} disabled={svLoading}>
                <Check className="h-5 w-5" aria-hidden="true" /> This is my home
              </button>
            </div>
          )}

          <div className="rounded-2xl border border-border bg-card p-4 sm:p-5">
            <p className="font-semibold text-foreground">{lookup ? "Not the right view?" : "Or upload a photo"}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              A front or corner photo works best: the whole house in view, in daylight, with little blocking the walls. JPG, PNG or WebP, up to 15 MB.
            </p>
            {!upload ? (
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault()
                  chooseFile(e.dataTransfer.files?.[0])
                }}
                className="mt-3"
              >
                <label htmlFor="pv-file" className={`${ghostBtn} cursor-pointer`}>
                  <ImagePlus className="h-5 w-5" aria-hidden="true" /> Upload a photo
                </label>
                <input
                  ref={fileInputRef}
                  id="pv-file"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={(e) => chooseFile(e.target.files?.[0])}
                />
              </div>
            ) : (
              <div className="mt-3 space-y-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={upload.url} alt="The photo you chose of your home" className="max-h-[50vh] w-full rounded-xl border border-border bg-muted object-contain" />
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button type="button" className={primaryBtn} onClick={confirmUpload}>
                    <Check className="h-5 w-5" aria-hidden="true" /> Use this photo
                  </button>
                  <label htmlFor="pv-file-replace" className={`${ghostBtn} cursor-pointer`}>
                    Replace photo
                  </label>
                  <input id="pv-file-replace" type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(e) => chooseFile(e.target.files?.[0])} />
                  <button type="button" className={ghostBtn} onClick={removeUpload}>
                    <Trash2 className="h-4 w-4" aria-hidden="true" /> Remove photo
                  </button>
                </div>
              </div>
            )}
            {photoError && (
              <p className="mt-3 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                {photoError}
              </p>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            Detection and coloring happen on your device. Your photo is only sent to us if you choose to request an estimate.
          </p>
          {hasPhoto && (
            <button type="button" className={ghostBtn} onClick={() => setStep(2)}>
              Back to my current photo <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </section>
      )}

      {/* ── Canvas: steps 2–4 ── */}
      <div className={hasPhoto && step > 1 ? "" : "hidden"}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
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
                  ? `Your home. Draw on the ${active.label.toLowerCase()} to correct its selection. ${summary}.`
                  : step === 3 && view === "original"
                    ? "Your original photo."
                    : `Color preview of your home. ${summary}.`
              }
            />
            <p className="text-xs text-muted-foreground">
              Digital previews are approximate. Confirm final colors with physical samples and an on-site review.
              {imageCredit ? ` ${imageCredit}.` : ""}
            </p>

            {step === 2 && (busy || ai === "error" || found) && (
              <div className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground" role="status" aria-live="polite">
                {busy && (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden="true" /> {aiText[ai]}
                  </span>
                )}
                {!busy && ai === "error" && aiText.error}
                {!busy && ai !== "error" && found && (
                  <span>
                    {needSidingTap && (
                      <strong className="mb-1 block text-foreground">Tap your siding once and we&apos;ll select the whole wall.</strong>
                    )}
                    Found automatically: {found.windows} window{found.windows === 1 ? "" : "s"} with trim around {found.windows === 1 ? "it" : "them"},{" "}
                    {found.doors ? "a front door" : "no front door"}, {found.shutters} shutter{found.shutters === 1 ? "" : "s"}
                    {needSidingTap ? "" : ", and the siding"}. Check every surface and correct it with Paint area and Erase.
                  </span>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2" role="group" aria-label="Choose what to show">
                  {(["original", "preview", "compare"] as View[]).map((v) => (
                    <button key={v} type="button" className={btn(view === v)} aria-pressed={view === v} onClick={() => setView(v)}>
                      {v === "original" ? "Before" : v === "preview" ? "After" : "Before / after"}
                    </button>
                  ))}
                  <button type="button" className={btn(false)} onClick={downloadPreview} disabled={!previewReady}>
                    <Download className="h-4 w-4" aria-hidden="true" /> Download preview
                  </button>
                </div>
                {view === "compare" && (
                  <label className="block text-sm text-foreground">
                    Drag to compare: before on the left, after on the right
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={Math.round(split * 100)}
                      onChange={(e) => setSplit(+e.target.value / 100)}
                      className="mt-2 h-8 w-full cursor-pointer"
                      aria-valuetext={`${Math.round(split * 100)}% before`}
                    />
                  </label>
                )}
                {!previewReady && (
                  <p className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground" role="status">
                    No surface has both a selection and a color yet, so the preview matches your photo.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Side panel */}
          <div className="space-y-5">
            {(step === 2 || step === 3) && (
              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-foreground">{step === 2 ? "1. Choose a surface" : "Try other colors"}</legend>
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
                        <span className="h-5 w-5 shrink-0 rounded-full border border-black/15" style={{ backgroundColor: c?.hex ?? s.marker }} aria-hidden="true" />
                        <span className="min-w-0">
                          <span className="block truncate text-foreground">{s.label}</span>
                          <span className="block truncate text-xs font-normal text-muted-foreground">
                            {counts[s.id] > 0 ? "Selected" : "Not selected"}
                            {c ? ` · ${c.name}` : ""}
                          </span>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">2. Correct the {active.label.toLowerCase()}</p>
                <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Selection tools">
                  <button type="button" className={btn(tool === "paint")} aria-pressed={tool === "paint"} onClick={() => setTool("paint")}>
                    <Brush className="h-4 w-4" aria-hidden="true" /> Paint area
                  </button>
                  <button type="button" className={btn(tool === "erase")} aria-pressed={tool === "erase"} onClick={() => setTool("erase")}>
                    <Eraser className="h-4 w-4" aria-hidden="true" /> Erase
                  </button>
                  <button type="button" className={btn(tool === "smart")} aria-pressed={tool === "smart"} onClick={() => setTool("smart")}>
                    <Sparkles className="h-4 w-4" aria-hidden="true" /> Tap to select
                  </button>
                  {(tool === "smart" || tool === "smart-remove") && (
                    <button type="button" className={btn(tool === "smart-remove")} aria-pressed={tool === "smart-remove"} onClick={() => setTool("smart-remove")}>
                      Tap to remove
                    </button>
                  )}
                  <button type="button" className={btn(false)} onClick={undo} disabled={!canUndo}>
                    <Undo2 className="h-4 w-4" aria-hidden="true" /> Undo
                  </button>
                  <button type="button" className={btn(false)} onClick={clearActive} disabled={counts[active.id] === 0}>
                    <Trash2 className="h-4 w-4" aria-hidden="true" /> Clear
                  </button>
                  <button type="button" className={btn(false)} onClick={detectSurfaces} disabled={busy}>
                    <Wand2 className="h-4 w-4" aria-hidden="true" /> Detect again
                  </button>
                </div>
                {(tool === "paint" || tool === "erase") && (
                  <label className="mt-3 block text-sm text-foreground">
                    Brush size: {brush}px
                    <input type="range" min={6} max={120} value={brush} onChange={(e) => setBrush(+e.target.value)} className="mt-1 w-full" />
                  </label>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  {tool === "paint" && "Draw with your finger, mouse or stylus. Painting one surface takes those pixels from the others."}
                  {tool === "erase" && `Draw to remove parts of the ${active.label.toLowerCase()} selection.`}
                  {(tool === "smart" || tool === "smart-remove") &&
                    (ai === "error" ? aiText.error : "Tap a part of the house and it is outlined on your device. Check the edges and fix them by hand.")}
                </p>
              </div>
            )}

            {(step === 2 || step === 3) && (
              <div>
                <p className="mb-2 text-sm font-semibold text-foreground">{step === 2 ? "3. " : ""}Color for the {active.label.toLowerCase()}</p>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                  <span className="h-8 w-8 shrink-0 rounded-md border border-black/15" style={{ backgroundColor: activeColor?.hex ?? "transparent" }} aria-hidden="true" />
                  <p className="min-w-0 flex-1 text-sm text-foreground" aria-live="polite">{activeColor ? colorLabel(activeColor) : "No color chosen"}</p>
                  {activeColor && (
                    <button type="button" onClick={() => pickColor(null)} className={`inline-flex min-h-11 items-center gap-1 rounded-md px-2 text-sm text-muted-foreground hover:text-foreground ${ring}`}>
                      <X className="h-4 w-4" aria-hidden="true" /> Remove
                    </button>
                  )}
                </div>

                <div className="mt-2">
                  <ColorPicker
                    selected={activeColor}
                    onPick={(c) => pickColor(c)}
                    idPrefix="pv"
                    listLabel={`Colors for the ${active.label.toLowerCase()}`}
                  />
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">Behr, PPG and HGTV Home colors aren&apos;t available yet.</p>
                <label className="mt-3 block text-sm text-foreground">
                  Color strength: {Math.round(coverage * 100)}%
                  <input type="range" min={40} max={100} value={Math.round(coverage * 100)} onChange={(e) => setCoverage(+e.target.value / 100)} className="mt-1 w-full" />
                </label>
                <p className="mt-2 text-xs text-muted-foreground">
                  {BRAND_DISCLAIMER}
                </p>

                <div className="mt-4 rounded-xl border border-border bg-card p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-foreground">Saved combinations</p>
                    <button type="button" className={btn(false)} onClick={saveCombo} disabled={!SURFACES.some((s) => colors[s.id])}>
                      <Save className="h-4 w-4" aria-hidden="true" /> Save current
                    </button>
                  </div>
                  {combos.length === 0 ? (
                    <p className="mt-2 text-xs text-muted-foreground">Save a combination to compare it with others later. Saved on this device only.</p>
                  ) : (
                    <ul className="mt-2 space-y-2">
                      {combos.map((c) => (
                        <li key={c.id} className="flex items-center gap-2 text-sm">
                          <span className="flex shrink-0">
                            {SURFACES.map((s) => (
                              <span key={s.key} className="-ml-1 h-5 w-5 rounded-full border border-white first:ml-0" style={{ backgroundColor: c.colors[s.id]?.hex ?? "transparent" }} aria-hidden="true" />
                            ))}
                          </span>
                          <button type="button" className={`min-w-0 flex-1 truncate text-left text-foreground underline-offset-2 hover:underline ${ring}`} onClick={() => applyCombo(c)} title={describeCombo(c)}>
                            {c.name}
                            <span className="sr-only">: {describeCombo(c)}. Apply.</span>
                          </button>
                          <button type="button" onClick={() => deleteCombo(c.id)} className={`rounded p-1 text-muted-foreground hover:text-foreground ${ring}`} aria-label={`Delete ${c.name}`}>
                            <X className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {step === 2 && (
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <button type="button" className={ghostBtn} onClick={() => setStep(1)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Change photo or view
            </button>
            <button type="button" className={primaryBtn} onClick={goCompare}>
              Compare before and after <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
            <button type="button" className={ghostBtn} onClick={() => setStep(2)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Edit surfaces
            </button>
            <button type="button" className={primaryBtn} onClick={() => setStep(4)}>
              Request a free estimate <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="mt-6 space-y-4">
            <button type="button" className={ghostBtn} onClick={() => setStep(3)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to compare
            </button>
            <VisualizerRequestForm
              surfaces={surfaceChoices}
              defaultPaintSurfaces={defaultPaintSurfaces}
              defaultAddress={projectAddress}
              source={source}
              imageCredit={imageCredit}
              photosAttachable={attachable}
              savedCombos={combos.map((c) => `${c.name}: ${describeCombo(c)}`)}
              getImages={getImages}
              getPhotos={getPhotos}
            />
          </div>
        )}
      </div>
    </div>
  )
}
