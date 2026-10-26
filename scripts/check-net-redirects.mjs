// Checks that every houstonsuperiorpainting.net URL permanently redirects to the
// same path and query on https://houstonsuperiorpainting.com (owner brief
// 2026-10-25, phase 8). Read-only: GET requests with redirects followed by hand.
//
//   node scripts/check-net-redirects.mjs
const COM = "https://houstonsuperiorpainting.com"
const HOSTS = ["https://houstonsuperiorpainting.net", "https://www.houstonsuperiorpainting.net", "http://houstonsuperiorpainting.net", "http://www.houstonsuperiorpainting.net"]
const PATHS = ["/", "/painters-katy-tx", "/warranty", "/blog/paint-warranty-texas", "/painting-estimate-houston?utm_source=test&utm_medium=check", "/does-not-exist-404-check"]
const MAX_HOPS = 3
const failures = []

async function follow(url) {
  const hops = []
  let current = url
  for (let i = 0; i <= MAX_HOPS; i++) {
    const res = await fetch(current, { redirect: "manual" })
    const loc = res.headers.get("location")
    hops.push({ url: current, status: res.status })
    if (![301, 308].includes(res.status) || !loc) return { hops, final: current, status: res.status }
    current = new URL(loc, current).toString()
  }
  return { hops, final: current, status: "too-many-hops" }
}

for (const host of HOSTS) {
  for (const p of PATHS) {
    const r = await follow(host + p)
    const expected = new URL(p, COM).toString()
    const redirects = r.hops.filter((h) => h.status !== r.status)
    const temp = r.hops.find((h) => [302, 303, 307].includes(h.status))
    const ok = r.final === expected && redirects.length >= 1 && !temp
    console.log(`${ok ? "ok  " : "FAIL"} ${host + p} -> ${r.final} (${r.hops.map((h) => h.status).join(" > ")} > ${r.status})`)
    if (!ok) failures.push(`${host + p} ended at ${r.final}, expected ${expected}`)
  }
}
console.log(failures.length ? `\nFAILED (${failures.length})` : "\nALL .net URLs redirect permanently to the same .com path and query")
process.exit(failures.length ? 1 : 0)
