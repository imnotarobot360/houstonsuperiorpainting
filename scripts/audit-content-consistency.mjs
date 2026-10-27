// Content-consistency guard (owner brief 2026-10-25, "site trust / SEO consistency").
//
// Scans the site source for claims the owner has not documented, outdated facts
// and contradictions: wrong owner name, other phone numbers, the .net domain,
// payment promises, state-license / bonding / workers' comp / policy-limit
// claims, review-count and customer-count claims, superlatives, partner claims,
// warranty lengths other than five years, epoxy warranties, AggregateRating.
//
//   node scripts/audit-content-consistency.mjs            → exit 1 on any finding
//   node scripts/audit-content-consistency.mjs --report X → also write a markdown report
//   node scripts/audit-content-consistency.mjs --all      → ignore the allowlist (inventory)
//
// Exceptions live ONLY in scripts/content-audit-allowlist.json, each with a reason.
// tests/content-consistency.test.mjs runs this as part of `pnpm test`.
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const SCAN = ["app", "components", "lib", "data", "public/llms.txt", "public/robots.txt"]
const SKIP_DIRS = new Set(["node_modules", ".next", "_to_delete"])
// Imported only by app/epoxy/page.tsx, whose route 301s to houstonsuperiorepoxy.com,
// so it is never served from this site.
const SKIP_PREFIXES = ["components/epoxy/"]
const EXT = /\.(tsx?|mjs|js|json|md|txt)$/

const PHONE = "(346) 594-5960"

/**
 * Office wording is allowed only for locations marked "staffed_office" in
 * lib/business.ts (Juan confirmed all five on 2026-10-25). Read from the source
 * text so a location switched back to unverified is caught again.
 */
function officeClaimRule() {
  const src = fs.readFileSync(path.join(ROOT, "lib/business.ts"), "utf8")
  const locs = [...src.matchAll(/locationType: "(\w+)"[\s\S]*?city: "([^"]+)"/g)].map((m) => ({ type: m[1], city: m[2] }))
  if (locs.length !== 5) throw new Error(`office-claim: expected 5 locations in lib/business.ts, found ${locs.length}`)
  const unverified = locs.filter((l) => l.type !== "staffed_office").map((l) => l.city)
  const parts = [/reviews by office\b/.source]
  if (unverified.length) {
    const c = unverified.join("|")
    parts.push(
      String.raw`\b(?:our|the|visit (?:our|the)|an?) (?:${c})(?: TX)? office\b`,
      String.raw`with an office in (?:${c})`,
      String.raw`served from our (?:${c}) office`,
      String.raw`\b(?:five|5) (?:local |painting )?offices\b`,
    )
  }
  return new RegExp(parts.join("|"), "i")
}

/** Each rule: id, what it means, a regex tested per line, optional `unless` regex for the same line. */
export const RULES = [
  { id: "owner-name", why: "Owner is Juan Serra; never JJ / JJ Semo", re: /\bJJ\b|JJ\s*Semo/ },
  { id: "net-domain", why: "Only the .com domain may appear", re: /houstonsuperiorpainting\.net/i },
  {
    id: "other-phone",
    why: `Only ${PHONE} may appear`,
    re: /\(?\b(?:2\d\d|3\d\d|4\d\d|5\d\d|6\d\d|7\d\d|8\d\d|9\d\d)\)?[\s.-]\d{3}[\s.-]\d{4}\b/,
    unless: /346[\s).-]*594[\s.-]*5960|555[\s.-]?\d{4}|0{3}[\s.-]0{4}/,
  },
  {
    id: "payment-promise",
    why: "Company uses a deposit and payment schedule",
    re: /no[- ](?:money[- ])?up[- ]?front|nothing (?:is )?due|pay (?:only )?when (?:you(?:'|’)re |you are )?(?:satisfied|happy|complete)|100% satisfied|no deposit|pay nothing/i,
  },
  {
    id: "state-license",
    why: "Texas issues no state painting license; never claim one",
    re: /state[- ]licensed|licensed (?:and|&) (?:insured|bonded)|fully licensed|licensed (?:painter|painting contractor|contractor)s?\b(?! (?:in texas|does|doesn))/i,
    unless: /does not|doesn(?:'|’)t|no state|not issue|isn(?:'|’)t|there is no|vs\.? ?unlicensed|unlicensed|licensed-vs|"Are you licensed|claims? to be|say(?:s)? (?:they|you)/i,
  },
  {
    id: "bonded",
    why: "Bonding is not documented",
    // Company bonding claims only; "bonding primer" and paint adhesion are not claims.
    re: /insured,? (?:and|&|&amp;) bonded|bonded,? (?:and|&|&amp;) insured|\b(?:we are|we're|we’re|fully|also) bonded|licensed,? bonded|bonded for your protection|\bbonded:\s*true/i,
  },
  { id: "workers-comp", why: "Workers' comp is not documented", re: /workers(?:['’]|&apos;|&#39;)?\s?comp/i },
  { id: "policy-limit", why: "Policy limits are not documented", re: /\$2\s?M\b|\$2 million|2,000,000/i },
  { id: "review-count", why: "No hard-coded aggregate review counts", re: /\b(?:200|170|150)\+\s*(?:google |five[- ]star |5[- ]star )?reviews?|200 plus reviews/i },
  { id: "customer-count", why: "Customer/project counts are not documented", re: /(?<![\d,])500\+|(?<![\d,])500 plus|projectsCompleted/i },
  {
    id: "superlative",
    why: "Unsupported superlative",
    re: /most trusted|best painting compan|best (?:house )?painters? in houston|top[- ]rated|leading (?:painting )?(?:contractor|painter|company|provider)|flawless/i,
  },
  { id: "partner-claim", why: "No manufacturer partner/endorsement", re: /preferred (?:application )?(?:partner|contractor|applicator)|application partner|certified applicator/i },
  {
    id: "warranty-term",
    why: "Painting warranty is 5 years; not transferable/lifetime/15-year unless documented",
    re: /(?:15|fifteen)[- ]year (?:warranty|durability|guarantee)|\b(?:\d+|five)[- ]year (?:written )?(?:quality |workmanship )?guarantee|texture-match guarantee|lifetime (?:warranty|guarantee)|satisfaction guarantee|warranty on (?:all|every) (?:painting|projects?|jobs?|work)\b|\btransferable\b(?!\[)/i,
  },
  { id: "epoxy-warranty", why: "Epoxy warranties belong to Houston Superior Epoxy only", re: /epoxy[^.\n]{0,80}warrant|warrant[^.\n]{0,80}epoxy/i, unless: /provided separately/i },
  {
    id: "hardcoded-rating",
    why: "Ratings only per Google profile, with link and check date (data/review-profiles.ts)",
    re: /value: "4\.9"|>\s*4\.9\s*<|\b4\.9[- ](?:star|rating|average|out of)|4\.9\/5|rated 4\.9/i,
  },
  {
    id: "lead-claim",
    why: "Lead-safe / EPA RRP certification is not confirmed (CLAUDE.md); neutral consumer guidance only",
    re: /\bwe (?:test for lead|use lead-safe|follow (?:lead-safe|epa|rrp))|lead-safe certification was|\b(?:we are|we're|we’re) (?:epa|rrp|lead-safe)[- ]certified/i,
  },
  { id: "aggregate-rating", why: "No AggregateRating/Review schema for self-selected reviews", re: /aggregateRating|"@type":\s*"Review"/ },
  {
    id: "office-claim",
    why: "Only staffed offices (locationType \"staffed_office\" in lib/business.ts) may be called offices",
    re: officeClaimRule(),
  },
]

function walk(p, out) {
  const full = path.join(ROOT, p)
  if (!fs.existsSync(full)) return
  const st = fs.statSync(full)
  if (st.isFile()) {
    if (EXT.test(full)) out.push(p.replace(/\\/g, "/"))
    return
  }
  for (const name of fs.readdirSync(full)) {
    if (SKIP_DIRS.has(name)) continue
    walk(path.join(p, name), out)
  }
}

function loadAllowlist() {
  const f = path.join(ROOT, "scripts/content-audit-allowlist.json")
  if (!fs.existsSync(f)) return []
  const list = JSON.parse(fs.readFileSync(f, "utf8"))
  for (const a of list) if (!a.reason) throw new Error(`allowlist entry without a reason: ${JSON.stringify(a)}`)
  return list
}

/**
 * Page files whose route is a 301 source in next.config.mjs are never served
 * (the redirect wins), so their copy cannot reach visitors or crawlers.
 */
async function deadPageFiles() {
  const { default: config } = await import(new URL("../next.config.mjs", import.meta.url))
  const sources = new Set((await config.redirects()).map((r) => r.source))
  return new Set([...sources].map((s) => `app${s}/page.tsx`))
}

export async function audit({ useAllowlist = true } = {}) {
  const files = []
  for (const p of SCAN) walk(p, files)
  const dead = await deadPageFiles()
  const allow = useAllowlist ? loadAllowlist() : []
  const hits = []
  for (const file of files) {
    if (file === "data/sw-colors.json" || file.startsWith("data/aeo/") || dead.has(file)) continue
    if (SKIP_PREFIXES.some((p) => file.startsWith(p))) continue
    const lines = fs.readFileSync(path.join(ROOT, file), "utf8").split(/\r?\n/)
    lines.forEach((line, i) => {
      // Comments that document a rule (e.g. "never say X") are not site copy.
      if (/^\s*(?:\/\/|\*|\/\*|\{\/\*)/.test(line)) return
      for (const r of RULES) {
        if (!r.re.test(line)) continue
        if (r.unless && r.unless.test(line)) continue
        const allowed = allow.find((a) => a.rule === r.id && (a.file === file || a.file === "*") && (!a.contains || line.includes(a.contains)))
        if (allowed) continue
        hits.push({ rule: r.id, why: r.why, file, line: i + 1, text: line.trim().slice(0, 220) })
      }
    })
  }
  return hits
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  const args = process.argv.slice(2)
  const hits = await audit({ useAllowlist: !args.includes("--all") })
  const reportAt = args.includes("--report") ? args[args.indexOf("--report") + 1] : null
  const byRule = Object.groupBy ? Object.groupBy(hits, (h) => h.rule) : hits.reduce((m, h) => ((m[h.rule] ||= []).push(h), m), {})
  if (reportAt) {
    const md = [
      `| Rule | Findings | Files |`,
      `|---|---|---|`,
      ...RULES.map((r) => `| ${r.id} | ${(byRule[r.id] || []).length} | ${new Set((byRule[r.id] || []).map((h) => h.file)).size} |`),
      "",
      ...RULES.filter((r) => byRule[r.id]?.length).flatMap((r) => [
        `### ${r.id} — ${r.why}`,
        "",
        ...byRule[r.id].map((h) => `- \`${h.file}:${h.line}\` ${h.text.replace(/\|/g, "\\|")}`),
        "",
      ]),
    ].join("\n")
    fs.writeFileSync(path.resolve(ROOT, reportAt), md)
  }
  for (const r of RULES) if (byRule[r.id]?.length) console.log(`${r.id}: ${byRule[r.id].length}`)
  console.log(hits.length ? `FAIL: ${hits.length} finding(s)` : "content consistency: 0 findings")
  process.exit(hits.length ? 1 : 0)
}
