import { NextResponse } from "next/server"
import { submitToIndexNow } from "@/lib/indexnow"
import { BLOG_SCHEDULE, houstonPublishDate } from "@/lib/blog-schedule"

// Daily cron (vercel.json, 12:30 UTC = 7:30 AM CDT / 6:30 AM CST, after the
// 6 AM Houston publish time): tells IndexNow about the blog post that went
// live today, plus /blog. Vercel sends `Authorization: Bearer <CRON_SECRET>`
// when CRON_SECRET is set in the project; without it this route refuses, and
// the post still publishes on schedule (only the ping is skipped).

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
  }
  const today = houstonPublishDate()
  const posts = BLOG_SCHEDULE.filter((p) => p.publishOn === today)
  if (!posts.length) return NextResponse.json({ ok: true, today, submitted: [] })
  const result = await submitToIndexNow([...posts.map((p) => `/blog/${p.slug}`), "/blog"])
  return NextResponse.json({ ...result, today }, { status: result.ok ? 200 : 502 })
}
