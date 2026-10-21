// Points every post that has generated art (scripts/blog-art/generate.mjs) at it,
// in lib/blog-schedule.ts and app/blog/page.tsx. Run: node scripts/blog-art/wire.cjs
const fs = require("fs")
const path = require("path")
const R = path.resolve(__dirname, "../..") + "/"
const gen = fs.readFileSync(R + "scripts/blog-art/generate.mjs", "utf8")
const slugs = [...gen.matchAll(/slug: "([^"]+)"|T\("([^"]+)"/g)].map((m) => m[1] || m[2])
for (const f of ["lib/blog-schedule.ts", "app/blog/page.tsx"]) {
  let s = fs.readFileSync(R + f, "utf8")
  let n = 0
  for (const slug of slugs) {
    const at = s.indexOf(`slug: "${slug}"`)
    if (at < 0) continue
    const next = s.indexOf("slug:", at + 6)
    const end = next < 0 ? s.length : next
    const block = s.slice(at, end)
    const img = block.match(/image:\s*"([^"]+)"/)
    if (!img) continue
    const nb = block.replace(img[0], `image: "/images/blog/art/${slug}.png"`)
    s = s.slice(0, at) + nb + s.slice(end)
    n++
  }
  fs.writeFileSync(R + f, s)
  console.log(f, n)
}
console.log("slugs", slugs.length)
