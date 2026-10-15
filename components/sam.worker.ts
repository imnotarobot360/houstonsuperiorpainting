/// <reference lib="webworker" />
// On-device "tap to select" for the color visualizer (owner approved option 1,
// 2026-10-15). Runs Segment Anything (SlimSAM, a small browser build) with
// transformers.js inside this Web Worker. The photo's pixels come from the page
// and never leave the device; the only network traffic is the one-time download
// of the model and runtime files (cached by the browser afterwards).

import { AutoProcessor, RawImage, SamModel, Tensor, env } from "@huggingface/transformers"

const MODEL_ID = "Xenova/slimsam-77-uniform"

env.allowLocalModels = false

type InMsg =
  | { type: "embed"; width: number; height: number; data: Uint8ClampedArray }
  | { type: "segment"; points: [number, number][]; labels: number[] }

let model: SamModel | null = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let processor: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let processed: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let embeddings: any = null
let size: { width: number; height: number } | null = null

async function load() {
  if (model && processor) return
  const device = (self.navigator as Navigator & { gpu?: unknown }).gpu ? "webgpu" : "wasm"
  const progress_callback = (p: { status: string; file?: string; progress?: number; loaded?: number; total?: number }) => {
    if (p.status === "progress") self.postMessage({ type: "progress", file: p.file, progress: p.progress ?? 0 })
  }
  try {
    model = (await SamModel.from_pretrained(MODEL_ID, { device, progress_callback })) as SamModel
  } catch {
    // WebGPU can be advertised but unusable; fall back to the CPU (wasm) build.
    model = (await SamModel.from_pretrained(MODEL_ID, { device: "wasm", progress_callback })) as SamModel
  }
  processor = await AutoProcessor.from_pretrained(MODEL_ID)
}

self.onmessage = async (e: MessageEvent<InMsg>) => {
  const msg = e.data
  try {
    if (msg.type === "embed") {
      self.postMessage({ type: "status", status: "loading" })
      await load()
      self.postMessage({ type: "status", status: "analyzing" })
      const image = new RawImage(msg.data, msg.width, msg.height, 4)
      processed = await processor(image)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      embeddings = await (model as any).get_image_embeddings(processed)
      size = { width: msg.width, height: msg.height }
      self.postMessage({ type: "status", status: "ready" })
      return
    }

    if (msg.type === "segment") {
      if (!embeddings || !processed || !size) throw new Error("not_ready")
      const ip = processor.image_processor
      const input_points: Tensor = ip.reshape_input_points(
        [[msg.points]],
        processed.original_sizes,
        processed.reshaped_input_sizes,
      )
      const input_labels: Tensor = ip.add_input_labels([[msg.labels]], input_points)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const outputs = await (model as any)({ ...embeddings, input_points, input_labels })
      const masks = await processor.post_process_masks(
        outputs.pred_masks,
        processed.original_sizes,
        processed.reshaped_input_sizes,
      )
      // Three candidate masks; keep the one the model is most confident in.
      const scores: Float32Array = outputs.iou_scores.data
      let best = 0
      for (let i = 1; i < scores.length; i++) if (scores[i] > scores[best]) best = i
      const plane = size.width * size.height
      const all: Uint8Array = masks[0].data
      const mask = all.slice(best * plane, (best + 1) * plane)
      self.postMessage({ type: "mask", mask, score: scores[best] }, [mask.buffer])
    }
  } catch (err) {
    self.postMessage({ type: "error", message: err instanceof Error ? err.message : String(err) })
  }
}
