import { NextResponse, type NextRequest } from "next/server"

/**
 * Tags requests bound for the Houston Superior Epoxy property.
 *
 * Server components cannot read the current pathname from headers() — Next 16
 * exposes no next-url / x-invoke-path header — so the root layout has no way to
 * tell on its own that it is rendering the epoxy subdomain. This proxy runs
 * before rendering, where the URL *is* available, and stamps a request header
 * that <PaintingSiteChrome> reads to suppress the painting brand's chrome and
 * LocalBusiness schema.
 *
 * Covers both entry points: the live epoxy.* host and the internal /epoxy path.
 */
export function proxy(request: NextRequest) {
  const isEpoxyHost = request.headers.get("host")?.startsWith("epoxy.") ?? false
  const { pathname } = request.nextUrl
  const isEpoxyPath = pathname === "/epoxy" || pathname.startsWith("/epoxy/")

  if (!isEpoxyHost && !isEpoxyPath) return NextResponse.next()

  const headers = new Headers(request.headers)
  headers.set("x-epoxy-site", "1")

  // Do NOT rewrite the epoxy host onto /epoxy here. next.config.mjs already
  // does that in its beforeFiles rewrites, and middleware runs BEFORE those —
  // so rewriting "/" to "/epoxy" here makes the config's '/:path' rule match the
  // result and rewrite it again to "/epoxy/epoxy", which 404s. This function
  // only tags the request so the layout can swap in the epoxy chrome.
  return NextResponse.next({ request: { headers } })
}

export const config = {
  // Skip static assets and image optimization — they never render the layout.
  matcher: ["/((?!_next/static|_next/image|favicon.png|images/).*)"],
}
