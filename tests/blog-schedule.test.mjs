// Tests for the daily blog calendar (lib/blog-schedule.ts). Run: pnpm test
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import { BLOG_SCHEDULE, PLANNED_POSTS, houstonPublishDate, isLivePath, liveScheduledPosts, displayDate } from "../lib/blog-schedule.ts"

const ALL = [...BLOG_SCHEDULE, ...PLANNED_POSTS]
const page = (slug) => fs.existsSync(new URL(`../app/blog/${slug}/page.tsx`, import.meta.url))

test("calendar: one post per day across scheduled and planned, unique slugs", () => {
  assert.equal(new Set(ALL.map((p) => p.slug)).size, ALL.length)
  for (let i = 1; i < ALL.length; i++) {
    const gap = (new Date(ALL[i].publishOn + "T00:00:00Z") - new Date(ALL[i - 1].publishOn + "T00:00:00Z")) / 86400000
    assert.equal(gap, 1, `${ALL[i].slug} is not the day after the previous post`)
  }
})

test("calendar: every scheduled post has a page; planned posts do not yet (or they would publish ungated)", () => {
  for (const p of BLOG_SCHEDULE) assert.ok(page(p.slug), `scheduled post ${p.slug} has no page`)
  for (const p of PLANNED_POSTS) assert.ok(!page(p.slug), `${p.slug} has a page: move it into BLOG_SCHEDULE`)
})

test("calendar: card images exist", () => {
  for (const p of ALL) assert.ok(fs.existsSync(new URL(`../public${p.image}`, import.meta.url)), `missing image ${p.image}`)
})

test("publish time: rolls over at 6 AM Houston (CDT and CST)", () => {
  // 2026-10-20 05:59 CDT = 10:59 UTC -> still the 19th
  assert.equal(houstonPublishDate(new Date("2026-10-20T10:59:00Z")), "2026-10-19")
  // 06:00 CDT = 11:00 UTC -> the 20th
  assert.equal(houstonPublishDate(new Date("2026-10-20T11:00:00Z")), "2026-10-20")
  // After DST ends (Nov 1): 06:00 CST = 12:00 UTC
  assert.equal(houstonPublishDate(new Date("2026-11-05T11:59:00Z")), "2026-11-04")
  assert.equal(houstonPublishDate(new Date("2026-11-05T12:00:00Z")), "2026-11-05")
})

test("visibility: scheduled posts hidden before their date, live after; other pages always live", () => {
  const first = BLOG_SCHEDULE[0]
  const before = new Date(first.publishOn + "T10:00:00Z")
  const after = new Date(first.publishOn + "T13:00:00Z")
  assert.equal(isLivePath(`/blog/${first.slug}`, before), false)
  assert.equal(isLivePath(`/blog/${first.slug}`, after), true)
  assert.equal(isLivePath("/blog/primer-vs-two-coats-paint-houston", before), true)
  assert.equal(isLivePath("blog/" + first.slug, after), true, "works without a leading slash (sitemap routes)")
  assert.deepEqual(liveScheduledPosts(before).map((p) => p.slug), [])
  assert.deepEqual(liveScheduledPosts(after).map((p) => p.slug), [first.slug])
})

test("display date", () => {
  assert.equal(displayDate("2026-10-20"), "October 20, 2026")
})
