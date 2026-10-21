// Rewrites the generated tables in docs/blog-calendar-2026.md from
// lib/blog-schedule.ts. Run: node scripts/blog-calendar/sync-docs.mjs
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const { BLOG_SCHEDULE, PLANNED_POSTS, displayDate } = await import(pathToFileURL(path.join(ROOT, "lib/blog-schedule.ts")).href)

// Planned topics that depend on an owner answer (whether we do that work).
// The five open ones (shutters, gutters, vinyl siding, two-story, laminate
// cabinets) were answered 2026-10-21; see "Company practices" in the doc.
const NEEDS_OWNER = new Set([])

const d = path.join(ROOT, "docs/blog-calendar-2026.md")
let md = fs.readFileSync(d, "utf8")
const first = BLOG_SCHEDULE[0]
const last = BLOG_SCHEDULE.at(-1)
const sStart = md.indexOf("## Full schedule")
const sEnd = md.indexOf("## Already live before the calendar")
if (sStart < 0 || sEnd < 0) throw new Error("doc section markers not found")
const sched = [
  `## Full schedule (${BLOG_SCHEDULE.length} posts, ${displayDate(first.publishOn)} to ${displayDate(last.publishOn)})`,
  "",
  "Generated from `lib/blog-schedule.ts`. Every post here is written and deployed; each stays hidden until its date. Post dates on the pages follow this schedule automatically.",
  "",
  "| Date | Post | URL |",
  "|---|---|---|",
  ...BLOG_SCHEDULE.map((p) => `| ${p.publishOn} | ${p.title} | /blog/${p.slug} |`),
  "",
  "",
].join("\n")
md = md.slice(0, sStart) + sched + md.slice(sEnd)
const pStart = md.indexOf("## Planned, not yet written")
const planned = PLANNED_POSTS.length
  ? [
      `## Planned, not yet written (${PLANNED_POSTS.length} posts, ${displayDate(PLANNED_POSTS[0].publishOn)} to ${displayDate(PLANNED_POSTS.at(-1).publishOn)})`,
      "",
      "Topics checked against every existing post and page so none repeats one. Posts marked **needs owner answer** depend on whether we do that work.",
      "",
      "| Date | Post | Search phrase | |",
      "|---|---|---|---|",
      ...PLANNED_POSTS.map((p) => `| ${p.publishOn} | ${p.title} | ${p.keyword} | ${NEEDS_OWNER.has(p.slug) ? "**needs owner answer**" : ""} |`),
      "",
    ].join("\n")
  : "## Planned, not yet written\n\nNone: every post on the calendar is written.\n"
md = (pStart < 0 ? md + "\n" : md.slice(0, pStart)) + planned
md = md.replace(/\((?:\d+ posts[^)]*not yet written|empty now: [^)]*)\)/, PLANNED_POSTS.length ? `(${PLANNED_POSTS.length} posts not yet written)` : "(empty now: every post is written)")
fs.writeFileSync(d, md)
console.log("scheduled", BLOG_SCHEDULE.length, "planned", PLANNED_POSTS.length)
