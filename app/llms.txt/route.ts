import { LLMS_BASE } from "@/lib/llms-base"
import { liveScheduledPosts } from "@/lib/blog-schedule"

// /llms.txt for AI assistants. The static text lives in lib/llms-base.ts; the
// daily-calendar posts (lib/blog-schedule.ts) are appended once they are live,
// so new guides show up here on their publish date without a deploy.

const SITE = "https://houstonsuperiorpainting.com"

export function GET() {
  const live = liveScheduledPosts()
  const latest = live.length
    ? `\n## Latest guides\n\n${live.map((p) => `- [${p.title}](${SITE}/blog/${p.slug})`).join("\n")}\n`
    : ""
  return new Response(LLMS_BASE + latest, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
