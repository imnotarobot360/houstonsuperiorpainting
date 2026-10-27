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
// AI crawler / assistant user agents worth counting (owner brief 2026-10-26,
// ChatGPT Search measurement). One JSON line per request lands in the Vercel
// runtime logs; scripts/ai-bot-report.mjs pulls them and checks each IP against
// OpenAI's published ranges, so a spoofed user agent is not counted as OpenAI.
const AI_BOT_UA = /OAI-SearchBot|ChatGPT-User|GPTBot|OAI-AdsBot|PerplexityBot|Perplexity-User|ClaudeBot|Claude-SearchBot|Claude-User|bingbot/i

export function proxy(request: NextRequest) {
  const bot = (request.headers.get("user-agent") ?? "").match(AI_BOT_UA)?.[0]
  if (bot) {
    console.log(
      JSON.stringify({
        aiBotHit: bot,
        path: request.nextUrl.pathname,
        ip: (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim(),
      }),
    )
  }

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
