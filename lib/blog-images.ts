// Featured image for every blog post (owner request 2026-10-30).
//
// One lookup used by the /blog cards, each article page, its Open Graph /
// Twitter tags, its BlogPosting/Article JSON-LD and the sitemap, so they always
// agree. Order of preference:
//   1. the post's photo, public/images/blog/photos/<slug>.jpg (1600x900), made
//      by scripts/blog-photos/generate.mjs or added with ingest.mjs
//   2. the image the caller already had (e.g. the post's listing image)
//   3. the post's typographic card, public/images/blog/art/<slug>.png
//   4. the site's default share image
// Alt text comes from data/blog-photos.json, which describes each photo.
import SCENES from "@/data/blog-photos.json"
import MANIFEST from "@/data/blog-photos-manifest.json"
import { BUSINESS } from "@/lib/business"

export type BlogImage = {
  src: string
  /** Absolute URL, for Open Graph, JSON-LD and the sitemap. */
  url: string
  alt: string
  /** Known only for generated or ingested photos (1600x900). */
  width?: number
  height?: number
  /** True when this is the post's own featured photo, not a fallback. */
  isPhoto: boolean
}

const SITE = BUSINESS.url
const scenes = SCENES as Record<string, string>
const photos = MANIFEST.photos as Record<string, { src: string; width: number; height: number }>
const fallbacks = MANIFEST.fallbacks as Record<string, string>

/** "/blog/foo", "https://…/blog/foo" or "foo" → "foo". */
export function blogSlug(pathOrSlug: string): string {
  return pathOrSlug.replace(/^https?:\/\/[^/]+/, "").replace(/^\/?blog\//, "").replace(/^\//, "").replace(/\/$/, "")
}

const abs = (src: string) => (src.startsWith("http") ? src : `${SITE}${src}`)

export function blogImage(pathOrSlug: string, fallback?: { src?: string; alt?: string }): BlogImage {
  const slug = blogSlug(pathOrSlug)
  const photo = photos[slug]
  if (photo) {
    return { src: photo.src, url: abs(photo.src), alt: scenes[slug] ?? fallback?.alt ?? "", width: photo.width, height: photo.height, isPhoto: true }
  }
  const src = fallback?.src || fallbacks[slug] || BUSINESS.ogImage.replace(SITE, "")
  // The scene describes the photo, not a fallback card, so a fallback uses the
  // caller's alt (usually the post title).
  return { src, url: abs(src), alt: fallback?.alt ?? BUSINESS.name, isPhoto: false }
}

/** Open Graph `images` for a post. */
export function blogOgImages(pathOrSlug: string, fallback?: { src?: string; alt?: string }) {
  const img = blogImage(pathOrSlug, fallback)
  return [{ url: img.url, alt: img.alt, ...(img.width ? { width: img.width, height: img.height } : {}) }]
}

/** Slugs that have a scene description (every published post should). */
export const BLOG_IMAGE_SLUGS = Object.keys(scenes)
