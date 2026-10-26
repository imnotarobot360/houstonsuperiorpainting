// Technical SEO checks + content-consolidation inventory (owner brief 2026-10-25,
// phases 9 and 11). Crawls every URL in the sitemap of a running build.
// Read-only: GET requests only.
//
//   pnpm build && pnpm start -p 3123
//   node scripts/seo-crawl.mjs http://localhost:3123
//   node scripts/seo-crawl.mjs http://localhost:3123 --csv docs/content-consolidation-plan.csv
//
// Checks per page: 200 status, one <title>, one meta description, unique title and
// description, absolute self-canonical on the .com, exactly one <h1>, og:url equal to
// the canonical, JSON-LD parses, no AggregateRating/Review schema, FAQPage questions
// appear in the visible text. Site checks: robots.txt allows crawling and names the
// sitemap; sitemap URLs are canonical .com URLs that answer 200.
import fs from "node:fs"

const args = process.argv.slice(2)
const BASE = (args.find((a) => /^https?:/.test(a)) || "http://localhost:3123").replace(/\/$/, "")
const CSV = args.includes("--csv") ? args[args.indexOf("--csv") + 1] : null
const PROD = "https://houstonsuperiorpainting.com"
const failures = []
const fail = (m) => failures.push(m)

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
const visible = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<!-- -->/g, "")
      .replace(/<[^>]+>/g, " "),
  ).replace(/\s+/g, " ")
const mainText = (html) => visible((html.split(/<main[\s>]/)[1] || html).split("</main>")[0])
const attr = (html, re) => (html.match(re) || [])[1]
const flat = (n) => (Array.isArray(n) ? n.flatMap(flat) : n && typeof n === "object" ? [n, ...flat(n["@graph"] || [])] : [])

async function get(path) {
  const res = await fetch(path.startsWith("http") ? path : BASE + path, { redirect: "manual" })
  return { status: res.status, location: res.headers.get("location"), text: res.status === 200 ? await res.text() : "" }
}

// ── robots + sitemap ──────────────────────────────────────────────────────────
const robots = await get("/robots.txt")
if (robots.status !== 200) fail(`robots.txt -> ${robots.status}`)
if (/^Disallow:\s*\/\s*$/m.test(robots.text)) fail("robots.txt disallows the whole site")
if (!/Sitemap:\s*https:\/\/houstonsuperiorpainting\.com\/sitemap\.xml/i.test(robots.text)) fail("robots.txt does not name the .com sitemap")
const sitemap = await get("/sitemap.xml")
const urls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
if (!urls.length) fail("sitemap.xml has no URLs")
for (const u of urls) if (!u.startsWith(PROD + "/") && u !== PROD) fail(`sitemap URL not on the .com: ${u}`)
console.log(`sitemap: ${urls.length} URLs`)

// ── pages ─────────────────────────────────────────────────────────────────────
const pages = []
const queue = [...urls]
const workers = Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const u = queue.shift()
    const path = u.replace(PROD, "") || "/"
    const r = await get(path)
    pages.push({ url: u, path, ...r })
  }
})
await Promise.all(workers)
pages.sort((a, b) => a.path.localeCompare(b.path))

const byTitle = new Map()
const byDesc = new Map()
const inbound = new Map(urls.map((u) => [u.replace(PROD, "") || "/", 0]))
for (const p of pages) {
  if (p.status !== 200) {
    fail(`${p.path}: sitemap URL answers ${p.status}${p.location ? " -> " + p.location : ""}`)
    continue
  }
  const h = p.text
  const head = h.split("</head>")[0]
  const titles = [...head.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/g)].map((m) => decode(m[1]).trim())
  const descs = [...head.matchAll(/<meta name="description" content="([^"]*)"/g)].map((m) => decode(m[1]).trim())
  const canon = attr(head, /<link rel="canonical" href="([^"]+)"/)
  const og = attr(head, /<meta property="og:url" content="([^"]+)"/)
  const robotsMeta = attr(head, /<meta name="robots" content="([^"]+)"/) || ""
  const h1s = (h.match(/<h1[\s>]/g) || []).length
  p.title = titles[0] || ""
  p.description = descs[0] || ""
  p.canonical = canon || ""
  p.h1 = decode((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]+>/g, "").trim()
  p.words = mainText(h).split(" ").filter((w) => /[a-z]/i.test(w)).length
  p.body = mainText(h).toLowerCase()

  if (titles.length !== 1) fail(`${p.path}: ${titles.length} <title> tags`)
  if (descs.length !== 1) fail(`${p.path}: ${descs.length} meta descriptions`)
  if (!canon) fail(`${p.path}: no canonical`)
  else if (canon.replace(/\/$/, "") !== p.url.replace(/\/$/, "")) fail(`${p.path}: canonical ${canon} is not the page's own URL`)
  if (og && og.replace(/\/$/, "") !== (canon || "").replace(/\/$/, "")) fail(`${p.path}: og:url ${og} differs from canonical`)
  if (/noindex/i.test(robotsMeta)) fail(`${p.path}: in the sitemap but noindex`)
  if (h1s !== 1) fail(`${p.path}: ${h1s} <h1> elements`)
  ;(byTitle.get(p.title) || byTitle.set(p.title, []).get(p.title)).push(p.path)
  ;(byDesc.get(p.description) || byDesc.set(p.description, []).get(p.description)).push(p.path)

  const nodes = []
  for (const m of h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      nodes.push(...flat(JSON.parse(m[1])))
    } catch (e) {
      fail(`${p.path}: JSON-LD does not parse (${e.message})`)
    }
  }
  const types = nodes.map((n) => [].concat(n["@type"] || []).join(","))
  if (nodes.some((n) => n.aggregateRating) || types.some((t) => /\b(AggregateRating|Review)\b/.test(t))) fail(`${p.path}: AggregateRating/Review schema`)
  if (types.filter((t) => t === "FAQPage").length > 1) fail(`${p.path}: more than one FAQPage`)
  const text = visible(h).toLowerCase()
  for (const faq of nodes.filter((n) => [].concat(n["@type"]).includes("FAQPage"))) {
    for (const q of faq.mainEntity || []) {
      const name = decode(String(q.name || "")).toLowerCase().replace(/\s+/g, " ").trim()
      if (name && !text.includes(name.slice(0, 60))) fail(`${p.path}: FAQ schema question not visible: "${q.name}"`)
    }
  }
  p.schemaTypes = [...new Set(types)].join(" ")

  for (const m of h.matchAll(/href="(\/[^"#?]*)/g)) {
    const t = m[1].replace(/\/$/, "") || "/"
    if (t !== p.path && inbound.has(t)) inbound.set(t, inbound.get(t) + 1)
  }
}
for (const [t, ps] of byTitle) if (t && ps.length > 1) fail(`duplicate title "${t}": ${ps.join(" ")}`)
for (const [d, ps] of byDesc) if (d && ps.length > 1) fail(`duplicate description "${d.slice(0, 80)}…": ${ps.join(" ")}`)

console.log(`pages checked: ${pages.length}`)
console.log(failures.length ? `\nFAILED (${failures.length}):\n- ${failures.join("\n- ")}` : "\nSEO CHECKS PASSED")

// ── consolidation inventory ──────────────────────────────────────────────────
if (CSV) {
  const shingles = (s) => {
    const w = s.split(" ").filter(Boolean)
    const set = new Set()
    for (let i = 0; i + 5 <= w.length; i++) set.add(w.slice(i, i + 5).join(" "))
    return set
  }
  // City names are swapped out first so "Katy page = Tomball page with the city changed" scores high.
  const CITY = /\b(houston|katy|cypress|sugar land|magnolia|richmond|tomball|fulshear|pearland|bellaire|memorial|river oaks|the heights|heights|west university|west u|cinco ranch|riverstone|sienna|rosenberg|missouri city|the woodlands|woodlands|champions forest|cypress creek|energy corridor|memorial villages|bridgeland)\b/g
  const ok = pages.filter((p) => p.status === 200)
  for (const p of ok) p.sh = shingles(p.body.replace(CITY, "CITY"))
  const type = (p) =>
    p.path === "/" ? "home" : p.path.startsWith("/blog/") ? "blog" : p.path.startsWith("/projects/") ? "project" : /^\/painters-.*-tx$/.test(p.path) ? "city" : /(cost|price)/.test(p.path) ? "cost-guide" : /-(houston|houston-tx|tx)$/.test(p.path) ? "service" : /(interior|exterior|cabinet)-(painting|refinishing)-/.test(p.path) ? "service-x-area" : "info"
  const intent = (p) => (/(cost|price|how much)/.test(p.path + p.title.toLowerCase()) ? "pricing" : /^\/blog\//.test(p.path) ? "informational" : /^\/projects/.test(p.path) ? "proof" : /(painters|painting|refinishing|repair|washing|removal|plaster|remodeling)/.test(p.path) ? "commercial-local" : "navigational")
  const rows = []
  for (const p of ok) {
    let best = { score: 0, path: "" }
    for (const q of ok) {
      if (q === p || !p.sh.size || !q.sh.size) continue
      let inter = 0
      for (const s of p.sh) if (q.sh.has(s)) inter++
      const score = inter / (p.sh.size + q.sh.size - inter)
      if (score > best.score) best = { score, path: q.path }
    }
    const t = type(p)
    const links = inbound.get(p.path) ?? 0
    let action = "keep"
    let note = ""
    if (t === "project" && best.score >= 0.3) {
      // Photo-only case studies share their template sentences; the photos differ.
      action = "keep: add job-specific facts"
      note = `template text shared with ${best.path}; photos are unique`
    } else if (best.score >= 0.5) {
      action = "review: consolidate or rewrite"
      note = t === "city" || t === "service-x-area" ? `near-duplicate of ${best.path} once city names are ignored` : `overlaps ${best.path}`
    } else if (best.score >= 0.3) {
      action = "review: differentiate"
      note = `shares much text with ${best.path}`
    }
    if (p.words < 300 && t !== "home" && t !== "project") {
      action = action === "keep" ? "review: thin" : action
      note = [note, `${p.words} words`].filter(Boolean).join("; ")
    }
    if (links === 0 && t !== "home") note = [note, "no inbound links from other sitemap pages"].filter(Boolean).join("; ")
    rows.push([p.url, t, intent(p), p.canonical, p.words, links, best.score.toFixed(2), best.path, action, note, p.title])
  }
  const esc = (v) => `"${String(v).replace(/"/g, '""')}"`
  const head = ["url", "type", "intent", "canonical", "word_count", "inbound_internal_links", "max_similarity", "most_similar_to", "proposed_action", "notes", "title"]
  fs.writeFileSync(CSV, [head, ...rows].map((r) => r.map(esc).join(",")).join("\n") + "\n")
  const counts = rows.reduce((m, r) => ((m[r[8]] = (m[r[8]] || 0) + 1), m), {})
  console.log(`\nwrote ${CSV}: ${rows.length} rows`, counts)
}
process.exit(failures.length ? 1 : 0)
