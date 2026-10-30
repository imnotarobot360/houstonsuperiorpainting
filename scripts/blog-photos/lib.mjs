// Shared helpers for blog featured photos (owner request 2026-10-30: a real,
// relevant photo for every post instead of the typographic title cards).
//
// Photos live in public/images/blog/photos/<slug>.jpg, always 1600x900 (16:9,
// the shape of the /blog cards, so nothing is stretched). data/blog-photos.json
// holds each post's scene description, which is both the generation prompt and
// the alt text. data/blog-photos-manifest.json records which photos exist (and
// each post's fallback card) so the site never has to read the filesystem.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
export const PHOTO_DIR = path.join(ROOT, "public/images/blog/photos")
export const ART_DIR = path.join(ROOT, "public/images/blog/art")
export const SCENES_FILE = path.join(ROOT, "data/blog-photos.json")
export const MANIFEST_FILE = path.join(ROOT, "data/blog-photos-manifest.json")
export const WIDTH = 1600
export const HEIGHT = 900

export const scenes = () => JSON.parse(fs.readFileSync(SCENES_FILE, "utf8"))

/** Crop to 16:9 around the most interesting area and save a web-ready JPEG. */
export async function savePhoto(input, slug) {
  fs.mkdirSync(PHOTO_DIR, { recursive: true })
  const out = path.join(PHOTO_DIR, `${slug}.jpg`)
  // sharp drops EXIF (camera, GPS) by default; rotate() applies it first so
  // phone photos are not sideways.
  await sharp(input)
    .rotate()
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(out)
  return out
}

/** Rebuild data/blog-photos-manifest.json from what is on disk. */
export function writeManifest() {
  const all = scenes()
  const photos = {}
  const fallbacks = {}
  for (const slug of Object.keys(all).sort()) {
    const photo = path.join(PHOTO_DIR, `${slug}.jpg`)
    if (fs.existsSync(photo)) photos[slug] = { src: `/images/blog/photos/${slug}.jpg`, width: WIDTH, height: HEIGHT }
    const art = path.join(ART_DIR, `${slug}.png`)
    if (fs.existsSync(art)) fallbacks[slug] = `/images/blog/art/${slug}.png`
  }
  fs.writeFileSync(MANIFEST_FILE, `${JSON.stringify({ photos, fallbacks }, null, 2)}\n`)
  const missing = Object.keys(all).filter((s) => !photos[s])
  console.log(`[blog-photos] manifest: ${Object.keys(photos).length} photos, ${missing.length} posts still on their fallback card`)
  return { photos, missing }
}
