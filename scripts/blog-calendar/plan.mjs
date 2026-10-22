// Appends planned (not yet written) posts to PLANNED_POSTS, one per day after
// the last scheduled or planned post. Topics checked against existing posts and
// pages first. Run: node scripts/blog-calendar/plan.mjs
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const { BLOG_SCHEDULE, PLANNED_POSTS } = await import(pathToFileURL(path.join(ROOT, "lib/blog-schedule.ts")).href)

// [slug, title, excerpt, category, readTime, placeholder card image, keyword]
// Card art is generated when each post is written (scripts/blog-art/generate.mjs).
const TOPICS = [
  ["why-winter-good-time-interior-painting-houston", "Why Winter Is a Good Time for Interior Painting in Houston", "Mild weather, windows that can stay open, and a quieter season: why December through February suits interior repaints.", "Interior Painting", "4 min read", "best-time-to-paint-houston.png", "winter interior painting"],
  ["repose-gray-vs-agreeable-gray-houston", "Repose Gray vs. Agreeable Gray in Houston Homes", "Two of Sherwin-Williams' most popular grays compared: undertones, lightness and which suits Houston light and finishes.", "Color Guide", "5 min read", "interior-paint-colors-2026.jpg", "Repose Gray vs Agreeable Gray"],
  ["painting-home-office-houston", "Paint Colors and Finishes for a Home Office", "Colors that work on video calls, sheens that hold up to a desk chair, and planning a home office repaint around work.", "Interior Painting", "5 min read", "interior-painting-houston-guide.jpg", "home office paint colors"],
  ["painting-built-ins-bookshelves-houston", "Painting Built-Ins and Bookshelves", "Prep, primer and enamel for built-in cabinets and shelves, sticky shelves to avoid, and colors that make built-ins stand out.", "Interior Painting", "5 min read", "paint-finishes-guide.jpg", "painting built-in bookshelves"],
  ["haint-blue-porch-ceiling-houston", "Haint Blue Porch Ceilings in Houston", "Where the Southern tradition comes from, the pale blues people use, and the right exterior product for a Houston porch ceiling.", "Color Guide", "4 min read", "exterior-house-painting-guide.jpg", "haint blue porch ceiling"],
  ["painting-bathroom-vanity-houston", "Painting a Bathroom Vanity", "Refreshing a bath vanity with a cabinet-grade finish: prep for humidity, colors, hardware and how long before you use it.", "Cabinet Refinishing", "5 min read", "flat-paint-bathroom-mistake.jpg", "painting bathroom vanity"],
  ["urbane-bronze-sw-7048-houston", "Urbane Bronze SW 7048 in Houston Homes", "Sherwin-Williams' deep bronze: where it works inside and out, what pairs with it, and how it looks in Houston sun.", "Color Guide", "5 min read", "paint-color-trends-2026.png", "Urbane Bronze"],
  ["exterior-paint-sheen-houston", "Exterior Paint Sheen: Flat, Satin or Semi-Gloss?", "Which sheen goes on siding, trim, doors and stucco, and how sheen affects how a Houston exterior wears and cleans.", "Exterior Painting", "4 min read", "exterior-paint-durability-houston.jpg", "exterior paint sheen"],
  ["painting-concrete-porch-steps-houston", "Painting a Concrete Porch and Steps", "Porch and floor paints vs. coatings, prep for Houston humidity, slip resistance, and when an epoxy floor is the better choice.", "Exterior Painting", "5 min read", "pressure-washing-houston.jpg", "painting concrete porch"],
  ["paint-colors-small-rooms-houston", "Paint Colors That Make a Small Room Feel Bigger", "Light colors, low contrast, ceilings and trim: what actually makes a small Houston room feel larger, and when dark works too.", "Color Guide", "5 min read", "best-interior-colors-houston.png", "paint colors for small rooms"],
  ["black-interior-trim-doors-houston", "Black Interior Trim and Doors: Is It Right for Your Home?", "Where black or charcoal interior doors and trim work, the sheen and prep they need, and how they look with Houston floors.", "Interior Painting", "5 min read", "paint-color-trends-2026.jpg", "black interior doors"],
  ["warehouse-industrial-painting-houston", "Warehouse and Industrial Painting in Houston", "Painting warehouses and light-industrial spaces around operations: walls, doors, columns and safety colors, and how it's priced.", "Commercial Painting", "5 min read", "painters-near-me-houston.jpg", "warehouse painting Houston"],
  ["painting-pergola-patio-cover-houston", "Painting or Staining a Pergola or Patio Cover", "Paint vs. stain on outdoor wood structures, repairing weathered boards, and finishes that last in Houston sun and rain.", "Exterior Painting", "5 min read", "fence-deck-painting-houston.png", "painting pergola"],
  ["revere-pewter-vs-edgecomb-gray-houston", "Revere Pewter vs. Edgecomb Gray in Houston Homes", "Two popular Benjamin Moore greiges compared: lightness, undertones and how each looks in Houston light.", "Color Guide", "5 min read", "interior-paint-colors-2026.jpg", "Revere Pewter vs Edgecomb Gray"],
  ["painting-media-game-room-houston", "Painting a Media Room or Game Room", "Dark, low-glare colors for screens, durable finishes for busy rooms, and ceilings that make a media room feel finished.", "Interior Painting", "4 min read", "interior-painting-cost-houston.png", "media room paint colors"],
  ["spring-exterior-painting-checklist-houston", "Spring Exterior Painting Checklist for Houston Homes", "What to check and book in winter so a spring exterior repaint goes smoothly: repairs, colors, HOA and scheduling.", "Exterior Painting", "5 min read", "spring-rain-damage-houston.png", "spring exterior painting"],
  ["tricorn-black-sw-6258-houston", "Tricorn Black SW 6258 in Houston Homes", "Sherwin-Williams' true black: front doors, shutters, trim and accent walls, plus how black handles Houston heat.", "Color Guide", "4 min read", "paint-color-trends-2026.png", "Tricorn Black"],
  ["painting-porch-columns-posts-houston", "Painting Porch Columns and Posts", "Wood, fiberglass and wrapped columns: rot at the base, caulk, primer and paint that hold up on a Houston porch.", "Exterior Painting", "4 min read", "exterior-house-painting-guide.jpg", "painting porch columns"],
  ["homeowner-checklist-before-exterior-painting", "Homeowner Checklist Before Exterior Painting Starts", "What to move, trim, unlock and tell your neighbors before an exterior crew arrives, so the job starts on time.", "Exterior Painting", "4 min read", "paint-preparation-houston.jpg", "prepare for exterior painting"],
  ["naval-sw-6244-houston", "Naval SW 6244 in Houston Homes", "Sherwin-Williams' classic navy on cabinets, doors, accent walls and exteriors, and the whites and metals that suit it.", "Color Guide", "5 min read", "navy-kitchen-island-houston.png", "Naval SW 6244"],
  ["painting-wood-ceiling-beams-houston", "Painting Wood Ceiling Beams: Paint, Stain or Leave Them?", "Painting or refinishing ceiling beams, the access and prep involved, and colors that update a dated beamed ceiling.", "Interior Painting", "4 min read", "interior-painting-houston-guide.jpg", "painting ceiling beams"],
  ["sea-salt-sw-6204-houston", "Sea Salt SW 6204 in Houston Homes", "Sherwin-Williams' soft green-blue-gray: bedrooms, baths and kitchens, how it shifts in Houston light, and what pairs with it.", "Color Guide", "4 min read", "paint-colors-houston-homes-2026.png", "Sea Salt SW 6204"],
  ["painting-hallways-high-traffic-houston", "Painting Hallways and High-Traffic Areas", "Scuff-resistant finishes, colors that hide marks, and how to keep halls, entries and stairwells looking fresh longer.", "Interior Painting", "4 min read", "how-long-interior-painting-houston.jpg", "painting hallways"],
  ["should-you-paint-closets", "Should You Paint the Inside of Closets?", "When closets are worth painting, what color and sheen to use, and how to fit them into a whole-house repaint.", "Interior Painting", "4 min read", "prepare-home-interior-painting-houston.png", "painting closets"],
  ["two-tone-walls-wainscoting-houston", "Two-Tone Walls and Painted Wainscoting", "Chair-rail and wainscot color combinations, which color goes on top, and sheens for the lower, harder-working half.", "Color Guide", "4 min read", "best-interior-colors-houston.png", "two tone walls"],
  ["how-to-test-paint-samples", "How to Test Paint Samples the Right Way", "Sample boards vs. painting on the wall, how big, where, and when to look: a step-by-step way to choose with confidence.", "Color Guide", "4 min read", "paint-finishes-guide.jpg", "how to test paint samples"],
  ["evergreen-fog-sw-9130-houston", "Evergreen Fog SW 9130 in Houston Homes", "Sherwin-Williams' muted green-gray on walls, cabinets and exteriors, and how it compares with the 2027 greens.", "Color Guide", "4 min read", "paint-color-trends-2026.jpg", "Evergreen Fog"],
  ["painting-exterior-trim-only-houston", "Painting Just the Exterior Trim: A Budget Refresh", "When a trim-only repaint makes sense, what it includes, and how it buys time before a full exterior.", "Exterior Painting", "4 min read", "exterior-painting-cost-houston-tx-2026.png", "exterior trim painting"],
  ["painting-sunroom-houston", "Painting a Sunroom in Houston", "Colors that survive strong sun, fade-resistant products, and handling heat and glare in a Houston sunroom.", "Interior Painting", "4 min read", "best-interior-colors-houston.png", "sunroom paint colors"],
  ["painting-arches-niches-houston", "Painting Arches, Niches and Curved Walls", "Cutting crisp lines on curves, accent ideas for arches and niches, and making architectural details stand out.", "Interior Painting", "4 min read", "interior-painting-houston-guide.jpg", "painting arches"],
  ["painting-stucco-texture-interior-walls", "Painting Heavily Textured Interior Walls", "Why textured walls take more paint and time, rollers that reach into texture, and when to skim smooth instead.", "Interior Painting", "4 min read", "drywall-repair-guide.jpg", "painting textured walls"],
]

const all = [...BLOG_SCHEDULE, ...PLANNED_POSTS]
const taken = new Set(all.map((p) => p.slug))
for (const [slug] of TOPICS) {
  if (taken.has(slug)) throw new Error(`already on the calendar: ${slug}`)
  if (fs.existsSync(path.join(ROOT, "app/blog", slug)) || fs.existsSync(path.join(ROOT, "app", slug))) throw new Error(`page exists: ${slug}`)
}
const start = new Date(all.at(-1).publishOn + "T12:00:00Z").getTime() + 86400000
const entries = TOPICS.map(([slug, title, excerpt, category, readTime, image, keyword], i) => ({
  slug,
  publishOn: new Date(start + i * 86400000).toISOString().slice(0, 10),
  title,
  excerpt,
  category,
  readTime,
  image: `/images/blog/${image}`,
  keyword,
}))
for (const e of entries) if (!fs.existsSync(path.join(ROOT, "public", e.image))) throw new Error(`missing image ${e.image}`)
const text = entries.map((e) => ["  {", ...Object.entries(e).map(([k, v]) => `    ${k}: ${JSON.stringify(v)},`), "  },"].join("\n")).join("\n")
const f = path.join(ROOT, "lib/blog-schedule.ts")
let s = fs.readFileSync(f, "utf8")
const head = "export const PLANNED_POSTS: ScheduledPost[] = [\n"
const a = s.indexOf(head) + head.length
const b = s.indexOf("\n]\n", a - 1)
const existing = s.slice(a, b).trim()
s = s.slice(0, a) + (existing ? existing + "\n" : "") + text + s.slice(b)
fs.writeFileSync(f, s)
console.log(entries.length, "planned", entries[0].publishOn, "->", entries.at(-1).publishOn)
