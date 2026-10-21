// Moves every PLANNED_POSTS entry that now has a page (in calendar order, from
// the front) to the end of BLOG_SCHEDULE in lib/blog-schedule.ts, so it is
// date-gated. Stops at the first planned post without a page, which keeps the
// calendar gap-free. Run: node scripts/blog-calendar/promote.mjs
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const f = path.join(ROOT, "lib/blog-schedule.ts")
let s = fs.readFileSync(f, "utf8")
const pHead = "export const PLANNED_POSTS: ScheduledPost[] = [\n"
const pa = s.indexOf(pHead) + pHead.length
const pb = s.indexOf("\n]\n", pa)
const blocks = s.slice(pa, pb).split(/\n(?=  \{\n)/).filter((b) => b.trim())
const moved = []
while (blocks.length) {
  const slug = blocks[0].match(/slug: "([^"]+)"/)[1]
  if (!fs.existsSync(path.join(ROOT, "app/blog", slug, "page.tsx"))) break
  moved.push(blocks.shift())
}
if (!moved.length) {
  console.log("nothing to move")
  process.exit(0)
}
s = s.slice(0, pa) + (blocks.length ? blocks.join("\n") + "\n" : "") + s.slice(pb + 1)
const sEnd = s.indexOf("\n]\n\n/**\n * Written-in-advance queue")
if (sEnd < 0) throw new Error("schedule end marker not found")
s = s.slice(0, sEnd) + "\n" + moved.join("\n") + s.slice(sEnd)
fs.writeFileSync(f, s)
for (const b of moved) console.log("scheduled", b.match(/publishOn: "([^"]+)"/)[1], b.match(/slug: "([^"]+)"/)[1])
