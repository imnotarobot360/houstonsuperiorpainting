// Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver; Google does not use it).
// Owner-run only: this sends data to an external service, so it never runs on
// deploy. Recommended by the AEO audit (2026-10-27) to get Bing to recrawl.
//
//   node scripts/indexnow.mjs                 # URLs whose sitemap lastmod is in the last 7 days
//   node scripts/indexnow.mjs --days 30       # wider window
//   node scripts/indexnow.mjs --all           # every sitemap URL (use sparingly)
//   node scripts/indexnow.mjs --dry-run       # list what would be sent
//
// The key file public/4b169dd1402ec86862d861a9c18e8fbc.txt proves we own the domain.
const KEY = "4b169dd1402ec86862d861a9c18e8fbc"
const HOST = "houstonsuperiorpainting.com"
const SITE = `https://${HOST}`
const args = process.argv.slice(2)
const all = args.includes("--all")
const dry = args.includes("--dry-run")
const days = Number(args[args.indexOf("--days") + 1]) || 7

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text()
const entries = [...xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>(?:[\s\S]*?<lastmod>([^<]+)<\/lastmod>)?[\s\S]*?<\/url>/g)].map((m) => ({ loc: m[1], lastmod: m[2] }))
const since = Date.now() - days * 86400000
const urls = entries.filter((e) => all || (e.lastmod && Date.parse(e.lastmod) >= since)).map((e) => e.loc)

console.log(`${urls.length} URL(s)${all ? "" : ` changed in the last ${days} day(s)`}`)
urls.forEach((u) => console.log("  " + u))
if (dry || urls.length === 0) process.exit(0)

const keyCheck = await fetch(`${SITE}/${KEY}.txt`)
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
  console.error("Key file is not live yet at " + SITE + "/" + KEY + ".txt — deploy first.")
  process.exit(1)
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
})
console.log(`IndexNow responded ${res.status} ${res.statusText} (200/202 = accepted)`)
if (res.status === 403) {
  // Seen on the first submission (2026-10-27): the key file was live, but the
  // engines had not verified the new key yet. A retry minutes later returned 200.
  console.log("403 = key not verified yet. If the key file is live, wait a few minutes and run again.")
}
