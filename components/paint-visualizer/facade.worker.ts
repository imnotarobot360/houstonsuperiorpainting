/// <reference lib="webworker" />
// On-device surface detection for the exterior visualizer (owner brief
// 2026-10-16). Runs in this Web Worker with transformers.js:
//   1. OWL-ViT (open-vocabulary object detection) finds the house, roof,
//      windows, front door, garage doors and shutters;
//   2. SlimSAM (Segment Anything) traces each detected box;
//   3. composeFacade() (lib/visualizer/core.ts) turns that into body, trim,
//      door and shutter selections.
// The photo's pixels come from the page and never leave the device. The only
// network traffic is the one-time download of the model files from Hugging
// Face, cached by the browser afterwards. The same SAM instance also answers
// "smart select" taps.

import { AutoProcessor, RawImage, SamModel, pipeline, env } from "@huggingface/transformers"
import {
  DETECTION_QUERIES,
  composeFacade,
  selectFacadeBoxes,
  type Box,
  type Detection,
  type TracedPart,
} from "../../lib/visualizer/core"

const SAM_ID = "Xenova/slimsam-77-uniform"
const OWL_ID = "Xenova/owlvit-base-patch32"

env.allowLocalModels = false

type InMsg =
  | { type: "detect"; width: number; height: number; data: Uint8ClampedArray }
  | { type: "embed"; width: number; height: number; data: Uint8ClampedArray }
  | { type: "segment"; points: [number, number][]; labels: number[]; pick?: "best" | "largest" }

let sam: SamModel | null = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let samProcessor: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let detector: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let processed: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let embeddings: any = null
let size: { width: number; height: number } | null = null

const post = (m: unknown, transfer?: Transferable[]) => (self as unknown as Worker).postMessage(m, transfer ?? [])

function progress(stage: string) {
  return (p: { status: string; progress?: number }) => {
    if (p.status === "progress") post({ type: "progress", stage, progress: p.progress ?? 0 })
  }
}

async function loadSam() {
  if (sam && samProcessor) return
  const device = (self.navigator as Navigator & { gpu?: unknown }).gpu ? "webgpu" : "wasm"
  try {
    sam = (await SamModel.from_pretrained(SAM_ID, { device, progress_callback: progress("sam") })) as SamModel
  } catch {
    sam = (await SamModel.from_pretrained(SAM_ID, { device: "wasm", progress_callback: progress("sam") })) as SamModel
  }
  samProcessor = await AutoProcessor.from_pretrained(SAM_ID)
}

async function loadDetector() {
  if (detector) return
  detector = await pipeline("zero-shot-object-detection", OWL_ID, { device: "wasm", dtype: "q8", progress_callback: progress("detector") })
}

async function embed(width: number, height: number, data: Uint8ClampedArray) {
  const image = new RawImage(data, width, height, 4)
  processed = await samProcessor(image)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  embeddings = await (sam as any).get_image_embeddings(processed)
  size = { width, height }
  return image
}

/** One SAM prompt (points, optionally one box); returns the most confident mask (0/1 per pixel). */
async function segment(points: [number, number][], labels: number[], box?: Box, pick: "best" | "largest" = "best"): Promise<Uint8Array> {
  if (!embeddings || !processed || !size) throw new Error("not_ready")
  const ip = samProcessor.image_processor
  const input_points = ip.reshape_input_points([[points]], processed.original_sizes, processed.reshaped_input_sizes)
  const input_labels = ip.add_input_labels([[labels]], input_points)
  const extra = box
    ? { input_boxes: ip.reshape_input_points([[[box.x0, box.y0, box.x1, box.y1]]], processed.original_sizes, processed.reshaped_input_sizes, true) }
    : {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const outputs = await (sam as any)({ ...embeddings, input_points, input_labels, ...extra })
  const masks = await samProcessor.post_process_masks(outputs.pred_masks, processed.original_sizes, processed.reshaped_input_sizes)
  const scores: Float32Array = outputs.iou_scores.data
  const plane = size.width * size.height
  const all = masks[0].data as Uint8Array
  let best = 0
  if (pick === "largest") {
    // SAM's three candidates go from a part (one siding board) to the whole
    // (the wall). For siding we want the whole, if the model is fairly sure.
    let bestArea = -1
    for (let k = 0; k < scores.length; k++) {
      if (scores[k] < 0.7) continue
      let a = 0
      for (let i = k * plane; i < (k + 1) * plane; i++) a += all[i] ? 1 : 0
      if (a > bestArea) {
        bestArea = a
        best = k
      }
    }
  } else {
    for (let i = 1; i < scores.length; i++) if (scores[i] > scores[best]) best = i
  }
  return all.slice(best * plane, (best + 1) * plane)
}

let boxesSupported = true

/** Traces a detected box: box prompt + its centre point, or the centre point alone if this model build has no box input. */
async function traceBox(b: Box): Promise<Uint8Array> {
  const centre: [number, number] = [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2]
  if (boxesSupported) {
    try {
      return await segment([centre], [1], b)
    } catch {
      boxesSupported = false
    }
  }
  return segment([centre], [1])
}

async function traceAll(boxes: Box[]): Promise<TracedPart[]> {
  const out: TracedPart[] = []
  for (const box of boxes) {
    try {
      out.push({ box, mask: await traceBox(box) })
    } catch {
      out.push({ box, mask: null })
    }
  }
  return out
}

self.onmessage = async (e: MessageEvent<InMsg>) => {
  const msg = e.data
  try {
    if (msg.type === "embed") {
      post({ type: "status", status: "loading" })
      await loadSam()
      post({ type: "status", status: "analyzing" })
      await embed(msg.width, msg.height, msg.data)
      post({ type: "status", status: "ready" })
      return
    }

    if (msg.type === "segment") {
      const mask = await segment(msg.points, msg.labels, undefined, msg.pick ?? "best")
      post({ type: "mask", mask }, [mask.buffer])
      return
    }

    if (msg.type === "detect") {
      const { width, height, data } = msg
      post({ type: "status", status: "loading" })
      await Promise.all([loadSam(), loadDetector()])

      post({ type: "status", status: "detecting" })
      const image = new RawImage(data, width, height, 4)
      const queries = Object.values(DETECTION_QUERIES)
      const raw: { label: string; score: number; box: { xmin: number; ymin: number; xmax: number; ymax: number } }[] = await detector(
        image.rgb(),
        queries,
        { threshold: 0.05, percentage: false },
      )
      const dets: Detection[] = raw.map((d) => ({
        label: d.label,
        score: d.score,
        box: { x0: d.box.xmin, y0: d.box.ymin, x1: d.box.xmax, y1: d.box.ymax },
      }))
      const boxes = selectFacadeBoxes(dets, width, height)
      if (process.env.NODE_ENV === "development") {
        const top = [...dets].sort((a, b) => b.score - a.score).slice(0, 40)
        console.debug("[facade] detections", JSON.stringify(top.map((d) => [d.label, +d.score.toFixed(2), Object.values(d.box).map(Math.round)])))
        console.debug("[facade] selected", JSON.stringify(boxes))
      }

      post({ type: "status", status: "tracing" })
      await embed(width, height, data)
      // Siding is NOT detected automatically: in testing, automatic siding
      // picked trees, roofs and open garages. The page asks for one tap on the
      // siding instead (whole-wall selection, see the "segment" message).
      const house = null
      const roofs = (await traceAll(boxes.roofs)).map((p) => p.mask).filter((m): m is Uint8Array => !!m)
      const [windows, doors, garages, shutters] = [
        await traceAll(boxes.windows),
        await traceAll(boxes.doors),
        await traceAll(boxes.garages),
        await traceAll(boxes.shutters),
      ]
      const trimPx = Math.max(3, Math.round(Math.min(width, height) * 0.012))
      const labels = composeFacade(width, height, { house, roofs, windows, doors, garages, shutters }, trimPx)

      post(
        {
          type: "facade",
          labels,
          boxes,
          boxPrompts: boxesSupported,
          found: {
            house: !!boxes.house,
            roofs: boxes.roofs.length,
            windows: boxes.windows.length,
            doors: boxes.doors.length,
            garages: boxes.garages.length,
            shutters: boxes.shutters.length,
          },
        },
        [labels.buffer],
      )
      // SAM stays embedded on this photo, so smart select works right away.
      post({ type: "status", status: "ready" })
    }
  } catch (err) {
    post({ type: "error", message: err instanceof Error ? err.message : String(err) })
  }
}
