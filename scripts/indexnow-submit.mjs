// Tell Bing (and other IndexNow engines) that pages changed, so AI search answers
// built on Bing (ChatGPT, Copilot) pick up the new text sooner.
//
//   node scripts/indexnow-submit.mjs /about /cabinet-refinishing-houston-tx
//   node scripts/indexnow-submit.mjs --since 2026-10-11   # pages whose sitemap lastmod is on/after that date
//   node scripts/indexnow-submit.mjs --dry-run --since 2026-10-11
//
// Uses the public key file already served at /<key>.txt (lib/indexnow.ts). Only sends
// this site's own public URLs. Google does not use IndexNow; use Search Console for Google.
const SITE = "https://houstonsuperiorpainting.com"
const KEY = "1420b82ee04537fa3207aa41a201f7f7"

const args = process.argv.slice(2)
const dry = args.includes("--dry-run")
const sinceIdx = args.indexOf("--since")
let urls = args
  .filter((a, i) => !a.startsWith("--") && !(sinceIdx >= 0 && i === sinceIdx + 1))
  // Git Bash on Windows rewrites "/path" into "C:/Program Files/Git/path"; undo that.
  .map((a) => a.replace(/^[A-Za-z]:\/.*?\/Git(?=\/)/, ""))

if (sinceIdx >= 0) {
  const since = Date.parse(args[sinceIdx + 1])
  if (Number.isNaN(since)) throw new Error("--since needs a date like 2026-10-11")
  const sm = await (await fetch(`${SITE}/sitemap.xml`)).text()
  for (const m of sm.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1]
    const lastmod = (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1]
    if (loc && lastmod && Date.parse(lastmod) >= since) urls.push(loc)
  }
}

urls = [...new Set(urls.map((u) => (u.startsWith("http") ? u : `${SITE}${u.startsWith("/") ? "" : "/"}${u}`)))]
urls = urls.filter((u) => u.startsWith(`${SITE}/`) || u === SITE)
if (urls.length === 0) {
  console.log("No URLs to submit.")
  process.exit(0)
}

console.log(`${urls.length} URL(s):\n${urls.map((u) => "  " + u).join("\n")}`)
if (dry) process.exit(0)

// The shared endpoint relays to all engines; Bing's own endpoint is the fallback when it is down.
const body = JSON.stringify({ host: "houstonsuperiorpainting.com", key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls })
for (const endpoint of ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"]) {
  try {
    const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" }, body })
    // 200 = accepted, 202 = accepted (key validation pending). 4xx = problem with key or URLs.
    console.log(`${endpoint} responded ${res.status} ${res.statusText}`)
    process.exit(res.status === 200 || res.status === 202 ? 0 : 1)
  } catch (e) {
    console.log(`${endpoint} unreachable (${e.cause?.code || e.message}); trying the next endpoint`)
  }
}
process.exit(1)
