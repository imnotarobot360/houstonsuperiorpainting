// Add or replace a blog post's featured photo with your own image.
//
// 1. Put the photo in blog-photos-inbox/ at the repo root, named after the
//    post's slug (the part of the URL after /blog/), e.g.
//      blog-photos-inbox/why-paint-touch-ups-dont-match.jpg   (.jpg .jpeg .png .webp)
// 2. Update that post's description in data/blog-photos.json so it describes
//    the new photo: it is the image's alt text.
// 3. Run:  node scripts/blog-photos/ingest.mjs
//
// Each photo is cropped to 16:9 (1600x900) and saved to
// public/images/blog/photos/<slug>.jpg with camera/GPS data removed; the
// original is moved to blog-photos-inbox/done/ (not committed).
import fs from "node:fs"
import path from "node:path"
import { ROOT, savePhoto, scenes, writeManifest } from "./lib.mjs"

const INBOX = path.join(ROOT, "blog-photos-inbox")
fs.mkdirSync(path.join(INBOX, "done"), { recursive: true })
const all = scenes()
const files = fs.readdirSync(INBOX).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
if (!files.length) console.log("No photos in blog-photos-inbox/.")
for (const f of files) {
  const slug = f.replace(/\.[^.]+$/, "").toLowerCase()
  if (!all[slug]) {
    console.log(`  skip  ${f}: no blog post with slug "${slug}"`)
    continue
  }
  await savePhoto(path.join(INBOX, f), slug)
  fs.renameSync(path.join(INBOX, f), path.join(INBOX, "done", f))
  console.log(`  ok    ${slug}  (alt text: "${all[slug]}"; update data/blog-photos.json if it no longer describes the photo)`)
}
writeManifest()
