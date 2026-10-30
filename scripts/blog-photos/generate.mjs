// Generate a featured photo for each blog post with OpenAI's image API.
// Owner-run only: it costs money and uses the owner's API key, read from the
// OPENAI_API_KEY environment variable (never written to any file).
//
//   $env:OPENAI_API_KEY = "sk-..."                         # PowerShell, this window only
//   node scripts/blog-photos/generate.mjs --dry-run          # what would be made, and cost
//   node scripts/blog-photos/generate.mjs --limit 3          # try a few first
//   node scripts/blog-photos/generate.mjs                    # every post without a photo
//   node scripts/blog-photos/generate.mjs --only <slug>,<slug> --force   # redo specific posts
//
// Optional: OPENAI_IMAGE_MODEL (default gpt-image-1), OPENAI_IMAGE_QUALITY
// (low | medium | high; default medium).
//
// These are illustrative photos, NOT photos of Houston Superior Painting jobs;
// real job photos belong on /projects. Review each one before pushing and redo
// any that look wrong.
import fs from "node:fs"
import path from "node:path"
import { PHOTO_DIR, savePhoto, scenes, writeManifest } from "./lib.mjs"

const args = process.argv.slice(2)
const flag = (n) => args.includes(n)
const val = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : undefined)
const MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1"
const QUALITY = process.env.OPENAI_IMAGE_QUALITY || "medium"
// Approximate USD per 1536x1024 image for gpt-image-1, for the estimate only.
const PRICE = { low: 0.016, medium: 0.063, high: 0.25 }

const all = scenes()
const only = val("--only")
  ?.split(",")
  .map((s) => s.trim())
  .filter(Boolean)
for (const s of only ?? []) {
  if (!all[s]) {
    console.error(`Unknown slug: ${s} (not in data/blog-photos.json)`)
    process.exit(1)
  }
}
let todo = (only ?? Object.keys(all)).filter((s) => flag("--force") || !fs.existsSync(path.join(PHOTO_DIR, `${s}.jpg`)))
if (val("--limit")) todo = todo.slice(0, Number(val("--limit")))

const prompt = (scene) =>
  `Photorealistic editorial photograph for a home-improvement article. Scene: ${scene}. ` +
  "Setting: a typical home in Houston, Texas, unless the scene says otherwise. Natural light, realistic materials and " +
  "textures, professional interior or real-estate photography style, wide 16:9 composition with the subject centered. " +
  "No text, letters, numbers, signs, logos, brand names, labels or watermarks anywhere in the image. No recognizable faces."

const cost = (todo.length * (PRICE[QUALITY] ?? 0.07)).toFixed(2)
console.log(`${todo.length} photo(s) to generate with ${MODEL} (${QUALITY}); estimated cost about $${cost}`)
if (flag("--dry-run") || todo.length === 0) {
  todo.slice(0, 10).forEach((s) => console.log(`  ${s}: ${all[s]}`))
  if (todo.length > 10) console.log(`  ...and ${todo.length - 10} more`)
  process.exit(0)
}

const KEY = process.env.OPENAI_API_KEY
if (!KEY) {
  console.error("Set OPENAI_API_KEY first (see the top of this file).")
  process.exit(1)
}

let stop = false
async function one(slug) {
  for (let attempt = 1; attempt <= 3 && !stop; attempt++) {
    try {
      const res = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: MODEL, prompt: prompt(all[slug]), size: "1536x1024", quality: QUALITY, n: 1 }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error?.message || `HTTP ${res.status}`)
      const item = json.data?.[0]
      const buf = item?.b64_json
        ? Buffer.from(item.b64_json, "base64")
        : Buffer.from(await (await fetch(item.url)).arrayBuffer())
      await savePhoto(buf, slug)
      console.log(`  ok    ${slug}`)
      return true
    } catch (e) {
      console.log(`  ${attempt < 3 ? "retry" : "FAIL "} ${slug}: ${e.message}`)
      // Account problems will not fix themselves: stop instead of burning retries.
      if (/billing|quota|api key|organization must be verified/i.test(e.message)) stop = true
      else await new Promise((r) => setTimeout(r, 3000 * attempt))
    }
  }
  return false
}

let ok = 0
const queue = [...todo]
await Promise.all(
  Array.from({ length: 3 }, async () => {
    while (queue.length && !stop) if (await one(queue.shift())) ok++
  }),
)
console.log(`${ok}/${todo.length} generated.${stop ? " Stopped early: fix the account problem above and run again." : ""}`)
writeManifest()
