// Site verification: crawls a base URL (local build or production) and checks
// the facts and technical rules the owner asked to be consistent.
//
//   node scripts/verify-site.mjs                      # https://houstonsuperiorpainting.com
//   node scripts/verify-site.mjs http://localhost:3123
//
// Exits non-zero when any check fails. Read-only: it only sends GET requests.
const BASE = (process.argv[2] || "https://houstonsuperiorpainting.com").replace(/\/$/, "")
const PROD = "https://houstonsuperiorpainting.com"
const OFFICES = [
  { city: "Cypress", street: "14150 Huffmeister", page: "/painters-cypress-tx" },
  { city: "Houston", street: "2617 Bissonnet", page: "/painters-houston-tx" },
  { city: "Katy", street: "3230 FM 1463", page: "/painters-katy-tx" },
  { city: "Sugar Land", street: "18722 University Blvd", page: "/painters-sugar-land-tx" },
  { city: "Magnolia", street: "14512 Cottontop", page: "/painters-magnolia-tx" },
]
const failures = []
const fail = (msg) => failures.push(msg)
const get = async (path) => {
  const res = await fetch(BASE + path, { redirect: "manual" })
  return { status: res.status, location: res.headers.get("location"), text: res.status === 200 ? await res.text() : "" }
}
const visible = (html) =>
  html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<!-- -->/g, "").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/g, " ").replace(/\s+/g, " ")
const jsonld = (html) => {
  const out = []
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { out.push(JSON.parse(m[1])) } catch (e) { out.push({ __error: String(e.message) }) }
  }
  return out
}
const flat = (nodes) => nodes.flatMap((n) => (Array.isArray(n) ? flat(n) : n && n["@graph"] ? flat(n["@graph"]) : [n]))

// 1. robots.txt + sitemap
const robots = await get("/robots.txt")
console.log(`robots.txt ${robots.status}`)
if (robots.status !== 200) fail("robots.txt not 200")
for (const ua of ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Bingbot"])
  if (!robots.text.includes(`User-Agent: ${ua}`)) fail(`robots.txt missing ${ua}`)
if (!/Sitemap: https:\/\/houstonsuperiorpainting\.com\/sitemap\.xml/.test(robots.text)) fail("robots.txt does not link the sitemap")

const sm = await get("/sitemap.xml")
console.log(`sitemap.xml ${sm.status}`)
if (sm.status !== 200) fail("sitemap.xml not 200")
if (!/^<\?xml[^>]*\?>\s*<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/.test(sm.text.trim())) fail("sitemap.xml is not a urlset")
const urls = [...sm.text.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1],
  lastmod: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1],
}))
const now = Date.now() + 60 * 60 * 1000
if (new Set(urls.map((u) => u.loc)).size !== urls.length) fail("sitemap has duplicate <loc>")
for (const u of urls) {
  if (!u.loc || !u.loc.startsWith(PROD + "/") && u.loc !== PROD) fail(`sitemap loc not on canonical host: ${u.loc}`)
  if (u.lastmod && (Number.isNaN(Date.parse(u.lastmod)) || Date.parse(u.lastmod) > now)) fail(`bad or future lastmod ${u.lastmod} for ${u.loc}`)
}
console.log(`sitemap URLs: ${urls.length}, with lastmod: ${urls.filter((u) => u.lastmod).length}`)

// 2. Crawl every sitemap URL
const pages = new Map()
let jsonldBlocks = 0
const internalLinks = new Set()
for (const { loc } of urls) {
  const path = loc.replace(PROD, "") || "/"
  const r = await get(path)
  pages.set(path, r)
  if (r.status !== 200) { fail(`${path} returned ${r.status}`); continue }
  const canon = (r.text.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
  if (canon !== loc) fail(`${path} canonical ${canon} != ${loc}`)
  const h1 = (r.text.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) fail(`${path} has ${h1} H1`)
  if (/noindex/i.test((r.text.match(/<meta name="robots" content="([^"]+)"/) || [])[1] || "")) fail(`${path} is noindex but in sitemap`)
  for (const b of jsonld(r.text)) { jsonldBlocks++; if (b.__error) fail(`${path} JSON-LD parse error: ${b.__error}`) }
  if (/jj\s*semo/i.test(r.text)) fail(`${path} contains "JJ Semo"`)
  if (/certa\s*pro/i.test(r.text)) fail(`${path} names a competitor (CertaPro)`)
  for (const m of r.text.matchAll(/href="(\/[^"#?]*)/g)) if (!m[1].startsWith("/_next")) internalLinks.add(m[1].replace(/\/$/, "") || "/")
}
console.log(`crawled ${pages.size} pages, JSON-LD blocks parsed: ${jsonldBlocks}`)

// 3. Internal link check (every distinct internal href must resolve 200 directly)
let checked = 0
for (const href of internalLinks) {
  if (pages.has(href)) continue
  if (/\.(png|jpe?g|webp|svg|ico|pdf|txt|xml)$/i.test(href)) continue
  const r = await get(href)
  checked++
  if (r.status !== 200) fail(`internal link ${href} -> ${r.status}${r.location ? " " + r.location : ""}`)
}
console.log(`internal links: ${internalLinks.size} distinct (${checked} outside the sitemap checked)`)

// 4. Five offices
const home = visible(pages.get("/")?.text || "")
const contact = await get("/contact")
const contactText = visible(contact.text)
const llms = await get("/llms.txt")
for (const o of OFFICES) {
  if (!contactText.includes(o.street)) fail(`contact page missing ${o.city} address`)
  if (!llms.text.includes(o.street)) fail(`llms.txt missing ${o.city} address`)
  if (!pages.has(o.page)) fail(`${o.page} not in sitemap`)
  const p = pages.get(o.page)
  if (p && !visible(p.text).includes(o.street)) fail(`${o.page} missing its address`)
  const lb = p ? flat(jsonld(p.text)).filter((n) => /LocalBusiness|HousePainter/.test([].concat(n["@type"]).join(","))) : []
  if (lb.length !== 1) fail(`${o.page} has ${lb.length} LocalBusiness nodes`)
  else if (!JSON.stringify(lb[0].address || "").includes(o.street)) fail(`${o.page} LocalBusiness address mismatch`)
  if (!home.includes(o.city)) fail(`homepage does not mention ${o.city}`)
}
if (!/five offices|5 offices|Five Greater Houston Offices/i.test(home + contactText)) fail("homepage/contact do not state five offices")
const footerText = visible((pages.get("/")?.text || "").split("<footer")[1] || "")
for (const o of OFFICES) if (!footerText.includes(o.city)) fail(`footer missing ${o.city}`)
const org = flat(jsonld(pages.get("/")?.text || "")).find((n) => n["@type"] === "Organization")
if (!org || (org.subOrganization || []).filter((s) => /#location$/.test(s["@id"] || "")).length !== 5) fail("Organization schema does not reference 5 locations")
const lbPages = [...pages].filter(([, r]) => flat(jsonld(r.text)).some((n) => /LocalBusiness|HousePainter/.test([].concat(n["@type"]).join(",")))).map(([p]) => p)
console.log(`LocalBusiness pages: ${lbPages.join(" ")}`)

// 5. Warranty: 5-year everywhere, never 1-year / lifetime
const warrantyBad = /\b(one|1)[- ]year (transferable |workmanship )?warranty|lifetime (workmanship )?warranty|\b(two|three|2|3)[- ]year (workmanship )?warranty/i
const groups = {
  homepage: ["/"], warranty: ["/warranty"], footer: ["/"],
  service: ["/interior-painting-houston-tx", "/exterior-painting-houston-tx", "/cabinet-refinishing-houston-tx", "/drywall-repair-houston-tx", "/residential-remodeling-houston-tx"],
  city: OFFICES.map((o) => o.page).concat(["/painters-richmond-tx", "/painters-tomball-tx", "/painters-fulshear-tx"]),
  project: [...pages.keys()].filter((p) => p.startsWith("/projects/")),
  blog: ["/blog/painting-brick-houston", "/blog/exterior-paint-colors-katy-tx", "/houston-painting-contractor-guide"],
}
for (const [g, paths] of Object.entries(groups)) {
  for (const p of paths) {
    const r = pages.get(p) || (await get(p))
    const t = g === "footer" ? footerText : visible(r.text)
    if (!/5[- ]year|five[- ]year|5 years/i.test(t)) fail(`${g} ${p}: no 5-year warranty mention`)
    if (warrantyBad.test(t)) fail(`${g} ${p}: conflicting warranty "${t.match(warrantyBad)[0]}"`)
  }
}
let metaWarranty = 0
for (const [p, r] of pages) {
  const head = r.text.slice(0, r.text.indexOf("</head>"))
  if (warrantyBad.test(head)) fail(`${p}: conflicting warranty in metadata`)
  if (/5[- ]year|five[- ]year/i.test(head)) metaWarranty++
  // A competitor comparison may describe the competitor's warranty; only our own claims count.
  for (const n of flat(jsonld(r.text))) {
    const j = JSON.stringify(n)
    const m = j.match(warrantyBad)
    if (m && !/certapro/i.test(j.slice(Math.max(0, m.index - 40), m.index))) fail(`${p}: conflicting warranty in JSON-LD`)
  }
}
if (!/5-year (written )?workmanship warranty/i.test(llms.text)) fail("llms.txt missing 5-year warranty")
console.log(`pages with 5-year warranty in metadata: ${metaWarranty}`)

// 6. Conversion paths
const tel = (pages.get("/")?.text.match(/href="tel:([^"]+)"/) || [])[1]
if (tel !== "+13465945960") fail(`homepage tel link is ${tel}`)
const est = await get("/painting-estimate-houston")
// The estimate page is a step-by-step quote wizard: its first step is a row of service buttons.
if (est.status !== 200 || !/Interior Painting[\s\S]{0,600}Exterior Painting/.test(est.text) || !/<button/.test(est.text)) fail("estimate page quote wizard missing")
if (contact.status !== 200 || !/<form|book\/houston-superior|widget\.js/i.test(contact.text)) fail("contact page has no form or booking embed")
const BOOKING_URL = "https://app.insightpaint.com/book/houston-superior"
const booking = await fetch(BOOKING_URL, { redirect: "follow" })
if (booking.status !== 200) fail(`booking URL returned ${booking.status}`)
for (const [name, html] of [["homepage", pages.get("/")?.text || ""], ["estimate page", est.text]])
  if (!html.includes(`href="${BOOKING_URL}"`)) fail(`${name} has no "Book an Appointment" link to ${BOOKING_URL}`)
if (/houstonsuperiorgroups\.com\/book\/houston-superior"/.test(contact.text)) fail("contact page still embeds the old booking domain")
console.log(`tel link ${tel}; estimate ${est.status}; contact ${contact.status}; booking ${booking.status}`)

// 7. Retired competitor page: exactly one 301 hop to the neutral guide
const old = await get("/houston-superior-painting-vs-certapro")
const oldTarget = old.location && new URL(old.location, BASE).pathname
if (old.status !== 301 || oldTarget !== "/local-painter-vs-national-franchise-houston") fail(`old comparison URL returned ${old.status} -> ${old.location}`)
if (!pages.has("/local-painter-vs-national-franchise-houston")) fail("neutral comparison guide not in sitemap")
if (/certa\s*pro/i.test(llms.text)) fail("llms.txt names a competitor")
console.log(`old comparison URL ${old.status} -> ${oldTarget}`)

console.log(failures.length ? `\nFAILED (${failures.length}):\n- ${failures.join("\n- ")}` : "\nALL CHECKS PASSED")
process.exit(failures.length ? 1 : 0)
