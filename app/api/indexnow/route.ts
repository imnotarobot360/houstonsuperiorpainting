import { NextResponse } from "next/server"
import { submitToIndexNow, SITE_HOST } from "@/lib/indexnow"
import sitemap from "@/app/sitemap"

// POST /api/indexnow
//
// Notifies IndexNow-participating search engines of new/updated URLs.
//
// Auth: requires the INDEXNOW_SECRET env var to be sent either as
//   Authorization: Bearer <secret>   or   ?secret=<secret>
// This prevents third parties from spamming submissions on your behalf.
//
// Body (JSON, optional):
//   { "urls": ["/blog/new-post", "https://houstonsuperiorpainting.com/contact"] }
// If no "urls" are provided, the full sitemap is submitted.

function isAuthorized(request: Request): boolean {
  const secret = process.env.INDEXNOW_SECRET
  // If no secret is configured, refuse rather than allow open access.
  if (!secret) return false

  const auth = request.headers.get("authorization")
  if (auth === `Bearer ${secret}`) return true

  const url = new URL(request.url)
  if (url.searchParams.get("secret") === secret) return true

  return false
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized. Set INDEXNOW_SECRET and pass it as a Bearer token or ?secret=." },
      { status: 401 },
    )
  }

  let urls: string[] | undefined
  try {
    const body = await request.json().catch(() => null)
    if (body && Array.isArray(body.urls)) {
      urls = body.urls.filter((u: unknown): u is string => typeof u === "string")
    }
  } catch {
    // ignore malformed body; fall back to sitemap
  }

  // Default: submit every URL in the sitemap.
  if (!urls || urls.length === 0) {
    const entries = await sitemap()
    urls = entries.map((e) => e.url)
  }

  const result = await submitToIndexNow(urls)
  return NextResponse.json(result, { status: result.ok ? 200 : 502 })
}

// Convenience: GET returns config status without submitting anything.
export async function GET() {
  return NextResponse.json({
    host: SITE_HOST,
    configured: Boolean(process.env.INDEXNOW_SECRET),
    usage: "POST with Authorization: Bearer <INDEXNOW_SECRET>. Optional body { urls: string[] }. Omit urls to submit the full sitemap.",
  })
}
