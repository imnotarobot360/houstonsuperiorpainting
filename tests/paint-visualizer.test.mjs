// Tests for the exterior paint visualizer (lib/visualizer). Run: pnpm test
// Node strips the TypeScript types from the imported .ts files (Node 23.6+).
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import {
  SURFACES,
  applyRegion,
  clearSurface,
  countLabels,
  createHistory,
  fitSize,
  renderPreview,
  searchColors,
  stamp,
  strokeSegment,
  validatePhotoDimensions,
  validatePhotoFile,
  composeFacade,
  describeCombo,
  iou,
  nms,
  selectFacadeBoxes,
  DETECTION_QUERIES,
} from "../lib/visualizer/core.ts"
import { bearing, parseCamera, lookupAddress } from "../lib/visualizer/streetview.ts"
import {
  buildAnswers,
  buildLeadFormData,
  createRequestSender,
  resolveDeliveryMode,
  validateRequest,
} from "../lib/visualizer/request.ts"

// ── Photo upload ─────────────────────────────────────────────────────────────

test("photo: accepts JPG, PNG and WebP", () => {
  for (const type of ["image/jpeg", "image/png", "image/webp"]) {
    assert.equal(validatePhotoFile({ type, size: 2_000_000 }), null, type)
  }
})

test("photo: rejects other formats, empty and oversized files", () => {
  assert.match(validatePhotoFile({ type: "image/gif", size: 1000 }), /JPG, PNG or WebP/)
  assert.match(validatePhotoFile({ type: "image/heic", size: 1000 }), /JPG, PNG or WebP/)
  assert.match(validatePhotoFile({ type: "application/pdf", size: 1000 }), /JPG, PNG or WebP/)
  assert.match(validatePhotoFile({ type: "image/jpeg", size: 0 }), /empty/)
  assert.match(validatePhotoFile({ type: "image/jpeg", size: 16 * 1024 * 1024 }), /15 MB/)
})

test("photo: rejects images that are too small, scales large ones down", () => {
  assert.match(validatePhotoDimensions(300, 800), /too small/)
  assert.equal(validatePhotoDimensions(1200, 800), null)
  assert.deepEqual(fitSize(4000, 3000), { width: 1600, height: 1200 })
  assert.deepEqual(fitSize(800, 600), { width: 800, height: 600 })
})

// ── Selection ────────────────────────────────────────────────────────────────

const W = 20
const H = 10
const blank = () => new Uint8Array(W * H)

test("selection: painting a surface takes pixels from the others; erasing only clears the active one", () => {
  const labels = blank()
  stamp(labels, W, H, 5, 5, 3, 1, "paint") // body
  assert.ok(countLabels(labels)[1] > 0)
  stamp(labels, W, H, 5, 5, 1, 3, "paint") // door over the body
  assert.equal(labels[5 * W + 5], 3)
  const before = countLabels(labels)
  stamp(labels, W, H, 5, 5, 5, 1, "erase") // erase body only
  const after = countLabels(labels)
  assert.equal(after[1], 0)
  assert.equal(after[3], before[3], "door untouched by erasing the body")
})

test("selection: a fast stroke leaves no gaps", () => {
  const labels = blank()
  strokeSegment(labels, W, H, { x: 1, y: 5 }, { x: 18, y: 5 }, 1, 2, "paint")
  for (let x = 1; x <= 18; x++) assert.equal(labels[5 * W + x], 2, `x=${x}`)
})

test("selection: undo restores the previous state; clear removes one surface", () => {
  const labels = blank()
  const history = createHistory(3)
  history.push(labels)
  stamp(labels, W, H, 10, 5, 2, 1, "paint")
  assert.ok(countLabels(labels)[1] > 0)
  assert.equal(history.undo(labels), true)
  assert.equal(countLabels(labels)[1], 0)
  assert.equal(history.undo(labels), false)

  stamp(labels, W, H, 3, 3, 1, 1, "paint")
  stamp(labels, W, H, 15, 3, 1, 2, "paint")
  clearSurface(labels, 1)
  const c = countLabels(labels)
  assert.equal(c[1], 0)
  assert.ok(c[2] > 0)
})

test("selection: undo history is capped", () => {
  const labels = blank()
  const history = createHistory(2)
  for (let i = 0; i < 5; i++) history.push(labels)
  assert.equal(history.size, 2)
})

test("selection: smart-select regions add to and remove from one surface", () => {
  const labels = blank()
  const region = new Uint8Array(W * H)
  region.fill(1, 0, W) // first row
  applyRegion(labels, region, 4, false)
  assert.equal(countLabels(labels)[4], W)
  applyRegion(labels, region, 4, true)
  assert.equal(countLabels(labels)[4], 0)
  applyRegion(labels, new Uint8Array(5), 4, false) // wrong size is ignored
  assert.equal(countLabels(labels)[4], 0)
})

test("selection: a siding tap fills only unclaimed pixels", () => {
  const labels = blank()
  labels[0] = 2 // trim already found
  const region = new Uint8Array(W * H).fill(1)
  applyRegion(labels, region, 1, false, true)
  assert.equal(labels[0], 2, "trim kept")
  assert.equal(countLabels(labels)[1], W * H - 1)
})

// ── Color + preview ──────────────────────────────────────────────────────────

/** A gray photo with a darker left half (shadow). */
function photo() {
  const src = new Uint8ClampedArray(W * H * 4)
  for (let i = 0; i < W * H; i++) {
    const v = i % W < W / 2 ? 100 : 180
    src.set([v, v, v, 255], i * 4)
  }
  return src
}

test("preview: only marked pixels change, and the original is not modified", () => {
  const src = photo()
  const copy = new Uint8ClampedArray(src)
  const labels = blank()
  stamp(labels, W, H, 15, 5, 2, 1, "paint")
  const out = renderPreview(src, labels, W, { colors: { 1: "#2F3D4C" }, coverage: 1 })
  assert.deepEqual(src, copy, "source untouched")
  const marked = (5 * W + 15) * 4
  const unmarked = (0 * W + 0) * 4
  assert.notDeepEqual([...out.slice(marked, marked + 3)], [...src.slice(marked, marked + 3)])
  assert.deepEqual([...out.slice(unmarked, unmarked + 4)], [...src.slice(unmarked, unmarked + 4)])
})

test("preview: changing or removing the color changes the result", () => {
  const src = photo()
  const labels = blank()
  stamp(labels, W, H, 15, 5, 2, 1, "paint")
  const p = (5 * W + 15) * 4
  const navy = renderPreview(src, labels, W, { colors: { 1: "#2F3D4C" }, coverage: 1 })
  const white = renderPreview(src, labels, W, { colors: { 1: "#ECE8DD" }, coverage: 1 })
  const none = renderPreview(src, labels, W, { colors: { 1: null }, coverage: 1 })
  assert.ok(white[p] > navy[p])
  assert.deepEqual([...none.slice(p, p + 4)], [...src.slice(p, p + 4)])
})

test("preview: shading is kept (a shadowed pixel stays darker)", () => {
  const src = photo()
  const labels = new Uint8Array(W * H).fill(1)
  const out = renderPreview(src, labels, W, { colors: { 1: "#ECE8DD" }, coverage: 1 })
  const shadow = (5 * W + 2) * 4
  const lit = (5 * W + 17) * 4
  assert.ok(out[shadow] < out[lit])
})

test("preview: unpainted marked surfaces are highlighted only when asked", () => {
  const src = photo()
  const labels = blank()
  stamp(labels, W, H, 15, 5, 2, 2, "paint")
  const p = (5 * W + 15) * 4
  const plain = renderPreview(src, labels, W, { colors: {}, highlight: false })
  const hl = renderPreview(src, labels, W, { colors: {}, highlight: true })
  assert.deepEqual([...plain.slice(p, p + 3)], [...src.slice(p, p + 3)])
  assert.notDeepEqual([...hl.slice(p, p + 3)], [...src.slice(p, p + 3)])
})

test("before/after: the compare split shows the original on the left", () => {
  const src = photo()
  const labels = new Uint8Array(W * H).fill(1)
  const out = renderPreview(src, labels, W, { colors: { 1: "#2F3D4C" }, coverage: 1, split: 0.5 })
  const left = (5 * W + 3) * 4
  const right = (5 * W + 16) * 4
  assert.deepEqual([...out.slice(left, left + 4)], [...src.slice(left, left + 4)])
  assert.notDeepEqual([...out.slice(right, right + 3)], [...src.slice(right, right + 3)])
  const original = renderPreview(src, labels, W, { colors: { 1: "#2F3D4C" }, split: 1 })
  assert.deepEqual(original, src, "split 1 = the full original")
})

test("colors: search by name, code, and code without spaces", () => {
  const colors = [
    { provider: "Sherwin-Williams", name: "Alabaster", code: "SW 7008", hex: "#ECE8DD" },
    { provider: "Benjamin Moore", name: "Hale Navy", code: "HC-154", hex: "#434C56" },
  ]
  assert.equal(searchColors(colors, "").length, 2)
  assert.deepEqual(searchColors(colors, "alab").map((c) => c.name), ["Alabaster"])
  assert.deepEqual(searchColors(colors, "SW 7008").map((c) => c.name), ["Alabaster"])
  assert.deepEqual(searchColors(colors, "sw7008").map((c) => c.name), ["Alabaster"])
  assert.deepEqual(searchColors(colors, "hc154").map((c) => c.name), ["Hale Navy"])
  assert.equal(searchColors(colors, "zzz").length, 0)
})

// ── Request ──────────────────────────────────────────────────────────────────

const surfaces = SURFACES.map((s) => ({ key: s.key, label: s.label, color: s.key === "body" ? "Sherwin-Williams Alabaster (SW 7008)" : "" }))
const valid = () => ({
  name: "Test Person",
  phone: "(346) 555-0123",
  email: "test@example.com",
  address: "123 Test St, Houston, TX 77002",
  notes: "",
  paintSurfaces: ["body"],
  surfaces,
  savedCombos: [],
  source: { kind: "upload" },
  consent: true,
  sharePhotos: false,
  smsConsent: false,
  website: "",
})
const photos = () => [
  { blob: new Blob(["a"], { type: "image/jpeg" }), filename: "house-original.jpg" },
  { blob: new Blob(["b"], { type: "image/jpeg" }), filename: "house-color-preview.jpg" },
]

test("consent: required; a request without it is refused", () => {
  assert.deepEqual(validateRequest(valid()), {})
  const errs = validateRequest({ ...valid(), consent: false })
  assert.ok(errs.consent)
})

test("validation: name, phone, email and surfaces", () => {
  const errs = validateRequest({ ...valid(), name: "A", phone: "555", email: "nope", address: "", paintSurfaces: [] })
  assert.ok(errs.name && errs.phone && errs.email && errs.address && errs.paintSurfaces)
  assert.ok(validateRequest({ ...valid(), email: "" }).email, "email is required for the project card")
  assert.deepEqual(validateRequest({ ...valid(), phone: "+1 346 555 0123", email: "a@b.co" }), {})
})

test("consent: photos are attached only when the customer opts in", () => {
  const without = buildLeadFormData(valid(), photos())
  assert.equal(without.getAll("photos").length, 0)
  assert.match(JSON.parse(without.get("answers")).photosShared, /^No$/)
  const withPhotos = buildLeadFormData({ ...valid(), sharePhotos: true }, photos())
  assert.equal(withPhotos.getAll("photos").length, 2)
  assert.match(JSON.parse(withPhotos.get("answers")).photosShared, /^Yes \(2/)
})

test("request: colors and surfaces are sent; answer keys match the lead form allow-list", () => {
  const fd = buildLeadFormData(valid(), [])
  assert.equal(fd.get("service"), "visualizer")
  const answers = JSON.parse(fd.get("answers"))
  assert.equal(answers.bodyColor, "Sherwin-Williams Alabaster (SW 7008)")
  assert.equal(answers.surfaces, "Body / siding")
  assert.equal(answers.trimColor, undefined)

  // /api/leads drops any answer key not listed in LEAD_FORMS.visualizer.
  const src = fs.readFileSync(new URL("../lib/lead-forms.ts", import.meta.url), "utf8")
  const block = src.slice(src.indexOf("visualizer: {"), src.indexOf("],", src.indexOf("visualizer: {")))
  const allowed = new Set([...block.matchAll(/id: "(\w+)"/g)].map((m) => m[1]))
  const all = buildAnswers(
    {
      ...valid(),
      notes: "x",
      sharePhotos: true,
      savedCombos: ["Combination 1: Body / siding: X"],
      source: { kind: "street_view", pano: "abcdefghijkl", heading: 120, pitch: 5, fov: 80, date: "2024-05" },
      surfaces: surfaces.map((s) => ({ ...s, color: "C" })),
    },
    2,
    "test",
  )
  assert.equal(all.testRequest, "TEST")
  assert.match(all.propertyPhoto, /pano abcdefghijkl, heading 120/)
  for (const k of Object.keys(all)) assert.ok(allowed.has(k), `answer key "${k}" missing from LEAD_FORMS.visualizer`)
})

function fakeFetch(responses) {
  const calls = []
  const impl = async (url, init) => {
    calls.push({ url, init })
    const r = responses.shift()
    if (r instanceof Error) throw r
    await new Promise((res) => setTimeout(res, 5))
    return { ok: r.status < 400, json: async () => r.body }
  }
  return { impl, calls }
}

test("submit errors: a server error is reported and can be retried", async () => {
  const { impl, calls } = fakeFetch([
    { status: 500, body: { ok: false, error: "We couldn't save that." } },
    { status: 200, body: { ok: true, publicToken: "tok123", photoCount: 0 } },
  ])
  const sender = createRequestSender({ mode: "live", fetchImpl: impl })
  const first = await sender.send(buildLeadFormData(valid(), []))
  assert.equal(first.ok, false)
  assert.equal(first.error, "We couldn't save that.")
  const second = await sender.send(buildLeadFormData(valid(), []))
  assert.equal(second.ok, true)
  assert.equal(second.publicToken, "tok123")
  assert.equal(calls.length, 2)
})

test("submit errors: a network failure is reported, not thrown", async () => {
  const { impl } = fakeFetch([new Error("offline")])
  const sender = createRequestSender({ mode: "live", fetchImpl: impl })
  const res = await sender.send(buildLeadFormData(valid(), []))
  assert.equal(res.ok, false)
  assert.match(res.error, /connection/)
})

test("duplicates: a second submit while sending, or after success, never creates another lead", async () => {
  const { impl, calls } = fakeFetch([{ status: 200, body: { ok: true, publicToken: "tok1", photoCount: 0 } }])
  const sender = createRequestSender({ mode: "live", fetchImpl: impl })
  const fd = buildLeadFormData(valid(), [])
  const [a, b] = await Promise.all([sender.send(fd), sender.send(fd)])
  assert.equal(a.ok, true)
  assert.equal(b.ok, false)
  assert.equal(b.duplicate, true)
  const c = await sender.send(fd)
  assert.equal(c, a, "same result returned after success")
  assert.equal(calls.length, 1)
})

test("test mode: posts only to the separate test inbox, marked TEST", async () => {
  const { impl, calls } = fakeFetch([{ status: 200, body: { ok: true, publicToken: "test-1", photoCount: 2, received: {} } }])
  const sender = createRequestSender({ mode: "test", fetchImpl: impl })
  const res = await sender.send(buildLeadFormData({ ...valid(), sharePhotos: true }, photos(), {}, "test"))
  assert.equal(res.ok, true)
  assert.equal(res.mode, "test")
  assert.equal(calls[0].url, "/api/visualizer/test-inbox", "test mode never posts to /api/leads")
  assert.equal(JSON.parse(calls[0].init.body.get("answers")).testRequest, "TEST")
  assert.equal(calls[0].init.body.getAll("photos").length, 2)
})

test("delivery mode: live only on the production domain unless overridden", () => {
  assert.equal(resolveDeliveryMode(undefined, "houstonsuperiorpainting.com"), "live")
  assert.equal(resolveDeliveryMode(undefined, "www.houstonsuperiorpainting.com"), "live")
  assert.equal(resolveDeliveryMode(undefined, "localhost"), "test")
  assert.equal(resolveDeliveryMode(undefined, "v0-calendly-integration-git-x.vercel.app"), "test")
  assert.equal(resolveDeliveryMode("test", "houstonsuperiorpainting.com"), "test")
  assert.equal(resolveDeliveryMode("live", "localhost"), "live")
})

// ── Automatic detection (pure parts) ─────────────────────────────────────────

const box = (x0, y0, x1, y1) => ({ x0, y0, x1, y1 })
const det = (label, score, b) => ({ label, score, box: b })

test("detection: overlap helpers", () => {
  assert.equal(iou(box(0, 0, 10, 10), box(0, 0, 10, 10)), 1)
  assert.equal(iou(box(0, 0, 10, 10), box(20, 20, 30, 30)), 0)
  const kept = nms([det("a", 0.9, box(0, 0, 10, 10)), det("a", 0.8, box(1, 1, 11, 11)), det("a", 0.7, box(50, 50, 60, 60))])
  assert.deepEqual(kept.map((d) => d.score), [0.9, 0.7])
})

test("detection: keeps one tall front door and tall shutters; drops weak or misshapen boxes", () => {
  const Q = DETECTION_QUERIES
  const picked = selectFacadeBoxes(
    [
      det(Q.house, 0.4, box(50, 50, 950, 650)),
      det(Q.roof, 0.3, box(50, 50, 950, 200)),
      det(Q.door, 0.35, box(450, 400, 520, 600)), // tall: the front door
      det(Q.door, 0.2, box(600, 450, 640, 600)), // a second door: only one is kept
      det(Q.door, 0.5, box(700, 450, 900, 600)), // garage-shaped "door"
      det(Q.garage, 0.4, box(700, 450, 900, 600)),
      det(Q.shutter, 0.3, box(200, 300, 230, 400)), // tall and narrow
      det(Q.shutter, 0.3, box(300, 300, 400, 330)), // wide: not a shutter
      det(Q.shutter, 0.04, box(250, 300, 270, 400)), // too weak
      det(Q.window, 0.3, box(235, 300, 295, 400)),
    ],
    1000,
    700,
  )
  assert.deepEqual(picked.doors, [box(450, 400, 520, 600)])
  assert.equal(picked.shutters.length, 1)
  assert.equal(picked.garages.length, 1)
  assert.equal(picked.windows.length, 1)
  assert.ok(picked.house)
})

test("detection: composes body, trim, door and shutters; glass and roof stay unpainted", () => {
  const W = 40
  const H = 30
  const full = new Uint8Array(W * H).fill(1)
  const roof = new Uint8Array(W * H)
  for (let i = 0; i < W * 5; i++) roof[i] = 1 // top 5 rows
  const labels = composeFacade(
    W,
    H,
    {
      house: full,
      roofs: [roof],
      windows: [{ box: box(5, 10, 10, 15), mask: null }],
      doors: [{ box: box(20, 18, 24, 29), mask: null }],
      garages: [],
      shutters: [{ box: box(1, 10, 3, 15), mask: null }],
    },
    1,
  )
  const at = (x, y) => labels[y * W + x]
  assert.equal(at(20, 2), 0, "roof is not body")
  assert.equal(at(30, 10), 1, "wall is body")
  assert.equal(at(7, 12), 0, "window glass is unpainted")
  assert.equal(at(4, 12), 2, "band around the window is trim")
  assert.equal(at(22, 22), 3, "front door")
  assert.equal(at(2, 12), 4, "shutter")
})

test("combinations: description lists only surfaces with colors", () => {
  const combo = {
    id: "1",
    name: "Combination 1",
    colors: { 1: { provider: "Sherwin-Williams", name: "Alabaster", code: "SW 7008", hex: "#ECE8DD" }, 3: null },
  }
  assert.equal(describeCombo(combo), "Body / siding: Sherwin-Williams Alabaster (SW 7008)")
})

// ── Street View adapter ──────────────────────────────────────────────────────

test("street view: camera faces the house; parameters are clamped and validated", () => {
  assert.equal(Math.round(bearing({ lat: 29.76, lng: -95.37 }, { lat: 29.77, lng: -95.37 })), 0) // north
  assert.equal(Math.round(bearing({ lat: 29.76, lng: -95.37 }, { lat: 29.76, lng: -95.36 })), 90) // east
  const cam = parseCamera(new URLSearchParams("pano=AbCdEfGhIjKl_-12&heading=-30&pitch=99&fov=5"))
  assert.deepEqual(cam, { pano: "AbCdEfGhIjKl_-12", heading: 330, pitch: 40, fov: 30 })
  assert.equal(parseCamera(new URLSearchParams("pano=../../etc&heading=1")), null)
})

test("street view: not_configured without a key, api_disabled when Google refuses, pano + heading when found", async () => {
  const saved = process.env.GOOGLE_MAPS_API_KEY
  try {
    delete process.env.GOOGLE_MAPS_API_KEY
    assert.equal((await lookupAddress("123 Main St, Houston, TX")).error, "not_configured")
    process.env.GOOGLE_MAPS_API_KEY = "test-key"
    const denied = async () => ({ json: async () => ({ status: "REQUEST_DENIED" }) })
    const r = await lookupAddress("123 Main St, Houston, TX", denied)
    assert.equal(r.ok, false)
    assert.equal(r.error, "api_disabled")
    const ok = async (url) => ({
      json: async () =>
        url.includes("geocode")
          ? { status: "OK", results: [{ formatted_address: "123 Main St, Houston, TX 77002, USA", geometry: { location: { lat: 29.761, lng: -95.37 } } }] }
          : { status: "OK", pano_id: "PANO_1234567890", location: { lat: 29.7605, lng: -95.37 }, date: "2024-05", copyright: "© Google" },
    })
    const found = await lookupAddress("123 Main St, Houston, TX", ok)
    assert.equal(found.ok, true)
    assert.equal(found.pano.id, "PANO_1234567890")
    assert.equal(found.heading, 0, "the pano is south of the house, so the camera faces north")
  } finally {
    if (saved === undefined) delete process.env.GOOGLE_MAPS_API_KEY
    else process.env.GOOGLE_MAPS_API_KEY = saved
  }
})
