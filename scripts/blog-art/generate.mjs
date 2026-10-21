// Blog card art (owner request 2026-10-21: "fix all the art for the blogs" —
// past-job photos on blog cards didn't match the topic, e.g. a sage kitchen on
// the Webster Green post). Every card here is an ORIGINAL graphic: no brand
// artwork, logos or promotional images.
//
//   - color cards use each manufacturer's own published on-screen value
//     (Sherwin-Williams: data/sw-colors.json; Benjamin Moore: the "hex" on each
//     color's page at benjaminmoore.com, checked 2026-10-21). Screens vary, so
//     every color card says the color is approximate.
//   - topic cards are typographic, with a simple line icon.
//
// Run: node scripts/blog-art/generate.mjs   → public/images/blog/art/<slug>.png
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const OUT = path.join(ROOT, "public/images/blog/art")
const W = 1200
const H = 675 // 16:9: the /blog list shows cards as aspect-video, so nothing gets cropped

const C = { ink: "#14181f", navy: "#0d1117", cream: "#f6f3ed", paper: "#fafaf8", gold: "#c6a86a", goldDeep: "#ad8f4f", orange: "#f37021", muted: "#6b6760" }
const SERIF = "Georgia, 'Times New Roman', serif"
const SANS = "Arial, Helvetica, sans-serif"

// Published on-screen values. SW from data/sw-colors.json; BM from benjaminmoore.com (2026-10-21).
const SW = Object.fromEntries(JSON.parse(fs.readFileSync(path.join(ROOT, "data/sw-colors.json"), "utf8")).map((c) => [c.n, { code: `SW ${c.c}`, hex: `#${c.h}` }]))
const BM = {
  "Webster Green": { code: "HC-130", hex: "#64806C" },
  "White Down": { code: "OC-131", hex: "#EBE6D7" },
  "Nelson Blue": { code: "CW-635", hex: "#CED6D0" },
  "Shakespeare Tan": { code: "228", hex: "#CAB88C" },
  "Antique Copper": { code: "1169", hex: "#9C7059" },
  "Wild Aster": { code: "1240", hex: "#E8D9D4" },
  Durango: { code: "2137-30", hex: "#645D4E" },
  "Townsend Harbor Brown": { code: "HC-64", hex: "#634543" },
}
const sw = (n) => ({ name: n, ...SW[n], brand: "Sherwin-Williams" })
const bm = (n) => ({ name: n, ...BM[n], brand: "Benjamin Moore" })

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;")

/** Perceived lightness, to pick dark or light text on a swatch. */
function isLight(hex) {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 150
}

function wrap(text, max) {
  const lines = []
  let line = ""
  for (const word of text.split(/\s+/)) {
    if ((line + " " + word).trim().length > max && line) {
      lines.push(line)
      line = word
    } else line = (line + " " + word).trim()
  }
  if (line) lines.push(line)
  return lines
}

// ── Line icons, drawn in a 200×200 box ───────────────────────────────────────
const ICONS = {
  roller: `<rect x="30" y="30" width="120" height="44" rx="10"/><path d="M150 52h20v42h-80v26"/><rect x="80" y="120" width="20" height="56" rx="6"/>`,
  brush: `<path d="M120 30l50 50-60 60-50-50z"/><path d="M60 90l-30 30c-10 10-10 30 0 40s30 10 40 0l30-30"/><path d="M100 50l50 50"/>`,
  house: `<path d="M30 100l70-62 70 62"/><path d="M50 84v86h100V84"/><rect x="85" y="120" width="30" height="50"/><rect x="60" y="100" width="20" height="20"/><rect x="120" y="100" width="20" height="20"/>`,
  cabinet: `<rect x="35" y="35" width="130" height="130" rx="6"/><path d="M100 35v130"/><path d="M35 100h130"/><path d="M88 62v14M112 62v14M88 124v14M112 124v14"/>`,
  door: `<rect x="55" y="25" width="90" height="155" rx="4"/><rect x="70" y="42" width="60" height="50" rx="3"/><rect x="70" y="105" width="60" height="58" rx="3"/><circle cx="132" cy="102" r="5"/>`,
  stairs: `<path d="M30 170h35v-35h35v-35h35v-35h35V30"/><path d="M30 170V150M65 135v-20M100 100V80M135 65V45"/>`,
  building: `<rect x="45" y="30" width="110" height="145"/><path d="M70 55h15M115 55h15M70 85h15M115 85h15M70 115h15M115 115h15"/><rect x="88" y="140" width="24" height="35"/>`,
  calendar: `<rect x="35" y="45" width="130" height="120" rx="8"/><path d="M35 80h130M70 30v30M130 30v30"/><path d="M65 110h20M100 110h20M135 110h0M65 140h20M100 140h20"/>`,
  clock: `<circle cx="100" cy="100" r="70"/><path d="M100 55v45l32 22"/>`,
  drop: `<path d="M100 30c30 45 52 72 52 98a52 52 0 0 1-104 0c0-26 22-53 52-98z"/><path d="M78 128a22 22 0 0 0 22 22"/>`,
  dollar: `<circle cx="100" cy="100" r="70"/><path d="M125 72c-6-10-16-14-27-14-16 0-27 8-27 21 0 30 56 16 56 44 0 13-12 22-29 22-12 0-23-5-29-15"/><path d="M100 45v110"/>`,
  swatch: `<rect x="40" y="40" width="40" height="120" rx="6"/><path d="M80 60l50-22 16 36-66 30"/><path d="M80 110l68-6 4 38-72 8"/><circle cx="60" cy="140" r="7"/>`,
  garage: `<path d="M30 80l70-45 70 45v90H30z"/><rect x="55" y="95" width="90" height="75"/><path d="M55 115h90M55 135h90M55 155h90"/>`,
  window: `<rect x="45" y="30" width="110" height="130" rx="4"/><path d="M100 30v130M45 95h110"/><path d="M35 160h130v14H35z"/>`,
  railing: `<path d="M25 70h150M25 160h150"/><path d="M45 70v90M75 70v90M105 70v90M135 70v90M160 70v90"/><circle cx="45" cy="62" r="6"/><circle cx="160" cy="62" r="6"/>`,
  sun: `<circle cx="100" cy="100" r="34"/><path d="M100 30v18M100 152v18M30 100h18M152 100h18M50 50l13 13M137 137l13 13M50 150l13-13M137 63l13-13"/>`,
  plank: `<rect x="30" y="50" width="140" height="30" rx="4"/><rect x="30" y="90" width="140" height="30" rx="4"/><rect x="30" y="130" width="140" height="30" rx="4"/><path d="M70 50v30M130 90v30M90 130v30"/>`,
  ceiling: `<path d="M25 50h150"/><path d="M40 50l20 25h80l20-25"/><path d="M100 75v30"/><path d="M80 120h40l-6 24H86z"/>`,
  check: `<rect x="40" y="30" width="120" height="145" rx="8"/><path d="M62 70l10 10 18-20M62 110l10 10 18-20M62 150l10 10 18-20"/><path d="M104 72h36M104 112h36M104 152h36"/>`,
  key: `<circle cx="70" cy="100" r="34"/><path d="M104 100h66M150 100v24M130 100v18"/>`,
  medical: `<rect x="40" y="40" width="120" height="120" rx="14"/><path d="M100 70v60M70 100h60"/>`,
  shield: `<path d="M100 28l60 22v45c0 40-26 66-60 78-34-12-60-38-60-78V50z"/><path d="M76 100l17 17 33-35"/>`,
  can: `<path d="M45 60h110v100c0 8-6 14-14 14H59c-8 0-14-6-14-14z"/><ellipse cx="100" cy="60" rx="55" ry="12"/><path d="M60 50c0-30 80-30 80 0"/><path d="M70 105h60"/>`,
  store: `<path d="M30 80l15-45h110l15 45"/><path d="M30 80c0 12 12 20 23 20s23-8 23-20c0 12 12 20 24 20s24-8 24-20c0 12 12 20 23 20s23-8 23-20"/><path d="M45 100v70h110v-70"/><rect x="85" y="125" width="30" height="45"/>`,
  shutter: `<rect x="30" y="30" width="55" height="140" rx="4"/><rect x="115" y="30" width="55" height="140" rx="4"/><path d="M40 55h35M40 75h35M40 95h35M40 115h35M40 135h35M40 155h35M125 55h35M125 75h35M125 95h35M125 115h35M125 135h35M125 155h35"/>`,
  gutter: `<path d="M25 70l75-40 75 40"/><path d="M20 78h160v14H20z"/><path d="M160 92v78h-16"/><rect x="45" y="100" width="95" height="70"/>`,
  twostory: `<path d="M35 70l65-40 65 40"/><rect x="50" y="62" width="100" height="113"/><path d="M50 118h100"/><rect x="68" y="80" width="22" height="22"/><rect x="110" y="80" width="22" height="22"/><rect x="88" y="135" width="24" height="40"/><path d="M175 175l-12-110M190 175l-12-110M165 150h20M162 120h20M159 90h20"/>`,
  sparkle: `<path d="M100 30l14 46 46 14-46 14-14 46-14-46-46-14 46-14z"/><path d="M155 140l5 15 15 5-15 5-5 15-5-15-15-5 15-5z"/>`,
}

function topicCard({ title, category, icon }) {
  const lines = wrap(title, 24).slice(0, 4)
  const lh = 70
  const top = H / 2 - (lines.length * lh) / 2 + 40
  const text = lines.map((l, i) => `<text x="90" y="${top + i * lh}" font-family="${SERIF}" font-size="58" fill="${C.ink}">${esc(l)}</text>`).join("")
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${C.cream}"/>
  <rect x="0" y="0" width="14" height="${H}" fill="${C.orange}"/>
  <text x="90" y="${top - 90}" font-family="${SANS}" font-size="22" font-weight="700" letter-spacing="5" fill="${C.goldDeep}">${esc(category.toUpperCase())}</text>
  ${text}
  <rect x="90" y="${H - 120}" width="56" height="4" fill="${C.orange}"/>
  <text x="90" y="${H - 80}" font-family="${SANS}" font-size="22" fill="${C.muted}">Houston Superior Painting</text>
  <circle cx="940" cy="${H / 2}" r="190" fill="${C.navy}"/>
  <g transform="translate(840 ${H / 2 - 100})" fill="none" stroke="${C.gold}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">${ICONS[icon]}</g>
</svg>`
}

/** One to three large swatches with labels. */
function colorCard({ colors, heading }) {
  const n = colors.length
  const sw = Math.floor(W / n)
  const blocks = colors
    .map((c, i) => {
      const x = i * sw
      const ink = isLight(c.hex) ? C.ink : "#ffffff"
      return `<rect x="${x}" y="0" width="${i === n - 1 ? W - x : sw}" height="${H}" fill="${c.hex}"/>
      <text x="${x + 50}" y="${H - 150}" font-family="${SERIF}" font-size="${n > 2 ? 40 : 52}" fill="${ink}">${esc(c.name)}</text>
      <text x="${x + 50}" y="${H - 105}" font-family="${SANS}" font-size="24" fill="${ink}" fill-opacity="0.85">${esc(`${c.brand} ${c.code}`)}</text>`
    })
    .join("")
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  ${blocks}
  <rect x="40" y="40" width="${Math.min(1120, heading.length * 15 + 60)}" height="56" rx="10" fill="#ffffff" fill-opacity="0.9"/>
  <text x="70" y="77" font-family="${SANS}" font-size="24" font-weight="700" fill="${C.ink}">${esc(heading)}</text>
  <text x="50" y="${H - 40}" font-family="${SANS}" font-size="18" fill="${isLight(colors[0].hex) ? C.muted : "#ffffff"}" fill-opacity="0.9">On-screen color is approximate. Confirm with a physical sample.</text>
</svg>`
}

/** Many colors as vertical stripes (a palette). */
function paletteCard({ colors, heading }) {
  const sw = W / colors.length
  const stripes = colors
    .map((c, i) => {
      const x = i * sw
      const ink = isLight(c.hex) ? C.ink : "#ffffff"
      return `<rect x="${x}" y="120" width="${sw + 1}" height="${H - 120}" fill="${c.hex}"/>
      <g transform="translate(${x + sw / 2 + 8} ${H - 40}) rotate(-90)">
        <text font-family="${SERIF}" font-size="30" fill="${ink}">${esc(c.name)}</text>
        <text y="-34" font-family="${SANS}" font-size="18" fill="${ink}" fill-opacity="0.85">${esc(c.code)}</text>
      </g>`
    })
    .join("")
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="120" fill="${C.cream}"/>
  <text x="50" y="58" font-family="${SERIF}" font-size="38" fill="${C.ink}">${esc(heading)}</text>
  <text x="50" y="94" font-family="${SANS}" font-size="18" fill="${C.muted}">On-screen colors are approximate. Confirm with physical samples.</text>
  ${stripes}
</svg>`
}

// ── What to draw, per post ───────────────────────────────────────────────────
const T = (slug, category, icon, title) => ({ slug, kind: "topic", category, icon, title })
const SPECS = [
  // Color posts: real swatches.
  { slug: "benjamin-moore-color-of-the-year-2027-webster-green-houston", kind: "color", heading: "Benjamin Moore Color of the Year 2027", colors: [bm("Webster Green")] },
  { slug: "celery-vs-webster-green-2027-color-of-the-year", kind: "color", heading: "The 2027 Colors of the Year", colors: [sw("Celery"), bm("Webster Green")] },
  { slug: "green-kitchen-cabinet-colors-2027-houston", kind: "color", heading: "Green cabinets for 2027: deep or light", colors: [bm("Webster Green"), sw("Celery")] },
  { slug: "benjamin-moore-color-trends-2027-houston", kind: "palette", heading: "Benjamin Moore Color Trends 2027", colors: Object.keys(BM).map(bm) },
  { slug: "best-paint-colors-houston-homes-2027", kind: "palette", heading: "2027 colors for Houston homes", colors: [sw("Celery"), bm("Webster Green"), bm("White Down"), bm("Nelson Blue"), sw("Quietude"), bm("Shakespeare Tan"), sw("Cordovan"), bm("Townsend Harbor Brown")] },
  { slug: "agreeable-gray-vs-accessible-beige-houston", kind: "color", heading: "Two popular Sherwin-Williams neutrals", colors: [sw("Agreeable Gray"), sw("Accessible Beige")] },
  // Dec 14–23 calendar posts.
  { slug: "trim-door-colors-red-brick-house-houston", kind: "palette", heading: "Trim and door colors for red brick", colors: [sw("Alabaster"), sw("Creamy"), sw("Shoji White"), sw("Pure White"), sw("Roycroft Bottle Green"), sw("Naval"), sw("Rookwood Red"), sw("Urbane Bronze"), sw("Tricorn Black")] },
  T("painting-cedar-wood-siding-houston", "Exterior Painting", "plank", "Painting or Staining Cedar and Wood Siding"),
  T("restaurant-retail-painting-houston", "Commercial Painting", "store", "Painting a Restaurant or Retail Store"),
  T("office-painting-holiday-shutdown-houston", "Commercial Painting", "calendar", "Paint Your Office During the Holiday Shutdown"),
  T("how-long-does-leftover-paint-last", "Paint Care", "can", "How Long Does Leftover Paint Last?"),
  { slug: "dining-room-paint-colors-houston", kind: "palette", heading: "Dining room colors to sample", colors: [bm("Webster Green"), sw("Pewter Green"), bm("Antique Copper"), bm("Townsend Harbor Brown"), sw("Rookwood Red"), sw("Naval"), sw("Accessible Beige"), sw("Agreeable Gray")] },
  { slug: "bedroom-paint-colors-for-sleep-houston", kind: "palette", heading: "Calm bedroom colors to sample", colors: [sw("Sea Salt"), sw("Rainwashed"), bm("Nelson Blue"), sw("Evergreen Fog"), bm("White Down"), sw("Agreeable Gray"), sw("Accessible Beige"), bm("Wild Aster")] },
  T("painting-garage-walls-houston", "Interior Painting", "garage", "Painting Garage Walls and Ceilings"),
  T("plan-2027-painting-project-houston", "Planning", "calendar", "Planning a 2027 Painting Project"),
  T("exterior-paint-color-mistakes-houston", "Color Guide", "swatch", "Exterior Paint Color Mistakes to Avoid"),
  T("painting-shutters-houston", "Exterior Painting", "shutter", "Painting Shutters: Wood, Composite and Vinyl"),
  T("painting-gutters-downspouts-houston", "Exterior Painting", "gutter", "Painting Gutters and Downspouts"),
  T("painting-vinyl-siding-houston", "Exterior Painting", "plank", "Can You Paint Vinyl Siding?"),
  T("painting-two-story-house-exterior-houston", "Exterior Painting", "twostory", "Painting a Two-Story House Exterior"),
  T("paint-laminate-thermofoil-cabinets", "Cabinet Refinishing", "cabinet", "Can You Paint Laminate or Thermofoil Cabinets?"),
  // Topic posts that used past-job photos.
  T("cost-paint-ceilings-trim-doors-houston", "Cost Guide", "dollar", "Cost to Paint Ceilings, Trim and Doors"),
  T("wood-rot-repair-before-painting-houston", "Exterior Painting", "plank", "Wood Rot Repair Before Exterior Painting"),
  T("why-paint-touch-ups-dont-match", "Interior Painting", "brush", "Why Paint Touch-Ups Don't Match"),
  T("how-long-before-using-freshly-painted-room", "Interior Painting", "clock", "How Long Before You Can Use a Freshly Painted Room?"),
  T("painting-high-ceilings-foyers-stairwells-houston", "Interior Painting", "stairs", "Painting Tall Foyers, Stairwells and High Ceilings"),
  T("fill-oak-grain-before-painting-cabinets", "Cabinet Refinishing", "cabinet", "Should You Fill Oak Grain Before Painting Cabinets?"),
  T("cabinet-painting-on-site-vs-off-site", "Cabinet Refinishing", "cabinet", "Cabinet Painting On-Site vs. Off-Site"),
  T("paint-inside-kitchen-cabinets", "Cabinet Refinishing", "cabinet", "Should You Paint the Inside of Kitchen Cabinets?"),
  T("rental-turnover-painting-houston", "Interior Painting", "key", "Rental Turnover Painting: Timeline and Checklist"),
  T("after-hours-commercial-painting-houston", "Commercial Painting", "building", "After-Hours and Weekend Commercial Painting"),
  T("medical-dental-office-painting-houston", "Commercial Painting", "medical", "Painting Medical and Dental Offices While They Stay Open"),
  T("painting-interior-doors-houston", "Interior Painting", "door", "Painting Interior Doors: Slab vs. Paneled"),
  T("paint-dark-walls-lighter-color", "Interior Painting", "roller", "How to Paint Over Dark Walls With a Light Color"),
  T("interior-painting-before-holidays-houston", "Interior Painting", "calendar", "Getting Interior Painting Done Before the Holidays"),
  T("caulking-before-exterior-painting-houston", "Exterior Painting", "drop", "Caulking Before Exterior Painting"),
  T("soffit-fascia-painting-houston", "Exterior Painting", "house", "Soffit and Fascia Painting"),
  T("front-door-paint-houston-sun", "Exterior Painting", "door", "Painting a Front Door That Lasts in Houston Sun"),
  T("garage-door-painting-houston", "Exterior Painting", "garage", "Garage Door Painting"),
  T("painting-metal-railings-gates-houston", "Exterior Painting", "railing", "Painting Metal Railings, Gates and Fences"),
  T("ceiling-paint-color-white-vs-color", "Color Guide", "ceiling", "Ceiling Paint: Flat White or Something Bolder?"),
  T("kitchen-wall-paint-washable-houston", "Interior Painting", "sparkle", "Best Paint for Kitchen Walls: Washable and Grease-Resistant"),
  T("window-trim-sill-painting-houston", "Exterior Painting", "window", "Painting Exterior Window Trim and Sills"),
  T("painting-shiplap-board-and-batten-houston", "Interior Painting", "plank", "Painting Shiplap and Board and Batten"),
  // Older posts on the /blog list.
  T("compare-commercial-painting-bids-houston", "Commercial Painting", "check", "How to Compare Commercial Painting Bids"),
  T("paint-before-moving-in-houston", "Interior Painting", "key", "Should You Paint Before Moving In?"),
  T("paint-over-water-stains-houston", "Interior Painting", "drop", "Can You Paint Over Water Stains?"),
  T("paint-house-before-selling-houston", "Interior Painting", "house", "Should You Paint Your Home Before Selling?"),
  T("why-paint-peels-bubbles-houston", "Exterior Painting", "sun", "Why Paint Peels, Bubbles or Blisters in Houston"),
  T("primer-vs-two-coats-paint-houston", "Interior Painting", "roller", "Primer or Two Coats of Paint?"),
  T("stay-home-during-interior-painting-houston", "Interior Painting", "house", "Can You Stay Home During Interior Painting?"),
  T("cabinet-paint-cure-time-houston", "Cabinet Refinishing", "clock", "How Long Do Painted Cabinets Take to Cure?"),
  T("wallpaper-removal-cost-houston", "Cost Guide", "dollar", "Wallpaper Removal Cost in Houston"),
  T("cabinet-painting-company-houston-guide", "Cabinet Refinishing", "shield", "How to Choose a Cabinet Painting Company"),
  T("commercial-office-painting-houston", "Commercial Painting", "building", "Commercial Office Painting Without Disrupting Work"),
  T("painting-brick-houston", "Exterior Painting", "plank", "Painting Brick: Paint, Limewash or Leave It"),
  T("exterior-paint-colors-pearland-tx", "Color Guide", "swatch", "Best Exterior Paint Colors in Pearland"),
  T("exterior-paint-colors-magnolia-tx", "Color Guide", "swatch", "Best Exterior Paint Colors in Magnolia"),
]

fs.mkdirSync(OUT, { recursive: true })
for (const s of SPECS) {
  for (const c of s.colors ?? []) if (!c.hex) throw new Error(`${s.slug}: no published value for ${c.name}`)
  if (s.kind === "topic" && !ICONS[s.icon]) throw new Error(`${s.slug}: unknown icon ${s.icon}`)
  const svg = s.kind === "topic" ? topicCard(s) : s.kind === "palette" ? paletteCard(s) : colorCard(s)
  const info = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: s.kind === "topic" }).toFile(path.join(OUT, `${s.slug}.png`))
  console.log(`${s.slug}.png ${Math.round(info.size / 1024)}KB`)
}
console.log(SPECS.length, "cards")
export { SPECS }
