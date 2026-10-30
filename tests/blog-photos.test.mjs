// Every published blog post needs a featured-photo description (its alt text
// and generation prompt) in data/blog-photos.json, and every photo listed in
// data/blog-photos-manifest.json must exist on disk (owner request 2026-10-30).
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")
const scenes = JSON.parse(fs.readFileSync(path.join(ROOT, "data/blog-photos.json"), "utf8"))
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "data/blog-photos-manifest.json"), "utf8"))

// Blog routes that next.config.mjs redirects elsewhere are not published posts.
const config = fs.readFileSync(path.join(ROOT, "next.config.mjs"), "utf8")
const redirected = new Set([...config.matchAll(/source:\s*'\/blog\/([^']+)'/g)].map((m) => m[1]))
const posts = fs
  .readdirSync(path.join(ROOT, "app/blog"), { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith("[") && fs.existsSync(path.join(ROOT, "app/blog", d.name, "page.tsx")))
  .map((d) => d.name)
  .filter((slug) => !redirected.has(slug))

test("every published blog post has a featured-photo description", () => {
  const missing = posts.filter((slug) => !scenes[slug] || scenes[slug].trim().length < 20)
  assert.deepEqual(missing, [], `add these to data/blog-photos.json: ${missing.join(", ")}`)
})

test("photo descriptions are alt text, not titles or captions with text", () => {
  for (const [slug, alt] of Object.entries(scenes)) {
    assert.ok(alt.length <= 200, `${slug}: keep alt text under 200 characters`)
    assert.ok(!/houston superior painting|our crew|our painters/i.test(alt), `${slug}: illustrative photos must not claim to show our own work`)
  }
})

test("every photo in the manifest exists and is the expected size", () => {
  for (const [slug, p] of Object.entries(manifest.photos)) {
    assert.ok(fs.existsSync(path.join(ROOT, "public", p.src)), `${slug}: ${p.src} is missing; run node scripts/blog-photos/manifest.mjs`)
    assert.equal(`${p.width}x${p.height}`, "1600x900", `${slug}: photos are 1600x900`)
  }
})
