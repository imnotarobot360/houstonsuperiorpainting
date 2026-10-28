import { LLMS_FULL } from "@/lib/llms-full"

// /llms-full.txt for AI assistants: the complete fact sheet, generated from
// lib/business.ts, lib/pricing.ts and lib/projects.ts (lib/llms-full.ts).
// Replaced the hand-written public/llms-full.txt on 2026-10-27.

export function GET() {
  return new Response(LLMS_FULL, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
