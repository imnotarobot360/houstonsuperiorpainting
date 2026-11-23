import { NextResponse, type NextRequest } from "next/server"

/**
 * Runs before page rendering: logs AI-crawler hits and strips trailing slashes.
 *
 * It used to stamp x-site-lang (/es) and x-epoxy-site (epoxy host, /epoxy) on
 * the request for the root layout to read via headers(). That made every page
 * on the site dynamic and uncacheable (audit 2026-11-22), so /es and /epoxy now
 * have their own root layouts (app/(es), app/(epoxy)) and nothing is tagged.
 * The epoxy host -> /epoxy rewrite lives in next.config.mjs, not here.
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

  // next.config.mjs sets skipTrailingSlashRedirect so its redirects see the
  // slash first; every other /path/ is sent to /path here, as Next did before.
  if (request.nextUrl.pathname.length > 1 && request.nextUrl.pathname.endsWith("/")) {
    // A plain URL: NextURL re-adds the trailing slash when formatted, which
    // would redirect /about/ to itself.
    const url = new URL(request.url)
    url.pathname = url.pathname.replace(/\/+$/, "")
    return NextResponse.redirect(url, 308)
  }

  // Do NOT rewrite the epoxy host onto /epoxy here. next.config.mjs already
  // does that in its beforeFiles rewrites, and middleware runs BEFORE those —
  // so rewriting "/" to "/epoxy" here makes the config's '/:path' rule match the
  // result and rewrite it again to "/epoxy/epoxy", which 404s.
  return NextResponse.next()
}

export const config = {
  // Skip static assets and image optimization — nothing here applies to them.
  matcher: ["/((?!_next/static|_next/image|favicon.png|images/).*)"],
}
