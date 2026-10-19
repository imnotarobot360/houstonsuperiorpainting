// Rebuilds data/sw-colors.json from Sherwin-Williams' published digital color files
// (owner-supplied 2026-10-19):
//   - "001 SW-ColorSnap Swatches List.pdf"           (1,526 colors: code, name, locator, R, G, B, HEX)
//   - "001 SW Designer Color Collection Digital Data.xlsx" (200 colors + collection, category, LRV, hue)
//
// Usage (the two parsers are not site dependencies; install them in a temp folder):
//   mkdir %TEMP%\swtools && cd %TEMP%\swtools && npm init -y && npm i pdfjs-dist@4.10.38 xlsx@0.18.5
//   node C:\sites\houstonsuperiorpainting\scripts\sw-catalog\import.mjs "<pdf>" "<xlsx>" [--modules %TEMP%\swtools\node_modules]
//
// Values are copied exactly as published (no rounding, no approximation). The run
// fails on: a count other than 1,526 (PDF) / 200 (Excel) / 1,726 unique codes,
// duplicate codes, empty names, RGB outside 0–255, or RGB that doesn't match HEX.
import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"
import { pathToFileURL } from "node:url"

const args = process.argv.slice(2)
const mi = args.indexOf("--modules")
const modulesDir = mi >= 0 ? args[mi + 1] : path.join(process.cwd(), "node_modules")
const [pdfPath, xlsxPath] = args.filter((a, i) => a !== "--modules" && i !== mi + 1)
if (!pdfPath || !xlsxPath) throw new Error("usage: import.mjs <pdf> <xlsx> [--modules <node_modules dir>]")

const { getDocument } = await import(pathToFileURL(path.join(modulesDir, "pdfjs-dist/legacy/build/pdf.mjs")).href)
const X = createRequire(path.join(modulesDir, "x.js"))("xlsx")

// ── PDF ────────────────────────────────────────────────────────────────────
// Columns by x position: code < 60, name 85–205, locator 205–290, R 290–350,
// G 350–405, B 405–460, HEX 460–525. Rows are anchored on the code. Long names
// wrap onto a line above and below the row (page 5 has four); hyphenated names
// are split into separate text runs. Both are rejoined here.
const doc = await getDocument({ data: new Uint8Array(fs.readFileSync(pdfPath)) }).promise
const pdf = []
for (let pn = 1; pn <= doc.numPages; pn++) {
  const items = (await (await doc.getPage(pn)).getTextContent()).items
    .filter((i) => i.str.trim())
    .map((i) => ({ x: i.transform[4], y: i.transform[5], s: i.str.trim() }))
  const rows = items.filter((i) => i.x < 60 && /^SW/.test(i.s)).map((c) => ({ y: c.y, code: c.s, names: [], cols: {} }))
  for (const it of items) {
    if (it.x < 60) continue
    if (/^(COLOR #|COLOR NAME|LOCATOR #|RED|GREEN|BLUE|HEX|COLOR)$/.test(it.s)) continue
    const row = rows.reduce((best, r) => (Math.abs(r.y - it.y) < Math.abs((best?.y ?? 1e9) - it.y) ? r : best), null)
    if (!row || Math.abs(row.y - it.y) > 10) throw new Error(`p${pn}: text "${it.s}" not attached to a row`)
    if (it.x >= 85 && it.x < 205) row.names.push(it)
    else if (it.x < 290) row.cols.locator = it.s
    else if (it.x < 350) row.cols.r = it.s
    else if (it.x < 405) row.cols.g = it.s
    else if (it.x < 460) row.cols.b = it.s
    else if (it.x < 525) row.cols.hex = it.s
    else throw new Error(`p${pn}: unexpected column at x=${it.x}: ${it.s}`)
  }
  for (const r of rows) {
    const parts = r.names.sort((a, b) => (Math.abs(a.y - b.y) < 2 ? a.x - b.x : b.y - a.y))
    const name = parts.map((p) => p.s).join(" ").replace(/\s*-\s*/g, "-").replace(/\s+/g, " ").trim()
    pdf.push({ code: r.code, name, ...r.cols })
  }
}

// ── Excel ──────────────────────────────────────────────────────────────────
const wb = X.readFile(xlsxPath)
const sheet = X.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1, defval: "" })
const head = sheet[0]
const col = (n) => {
  const i = head.indexOf(n)
  if (i < 0) throw new Error(`Excel column "${n}" missing`)
  return i
}
const xl = sheet.slice(1).filter((r) => r.some((v) => String(v).trim() !== "")) // skip empty rows

// ── Merge + validate ───────────────────────────────────────────────────────
const errors = []
const num = (code) => {
  const m = /^SW\s?(\d{4})$/.exec(String(code).trim())
  if (!m) errors.push(`bad code ${code}`)
  return m ? m[1] : String(code)
}
const rgb = (v, where) => {
  const n = Number(String(v).trim())
  if (!Number.isInteger(n) || n < 0 || n > 255) errors.push(`${where}: RGB value ${v} not an integer 0–255`)
  return n
}
const hexOf = (r, g, b) => [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("").toUpperCase()
const out = new Map()
const add = (src, rec) => {
  if (!rec.n) errors.push(`${src} SW ${rec.c}: empty name`)
  if (!/^[0-9A-F]{6}$/.test(rec.h)) errors.push(`${src} SW ${rec.c}: bad HEX ${rec.h}`)
  if (hexOf(rec.r, rec.g, rec.b) !== rec.h) errors.push(`${src} SW ${rec.c}: RGB ${rec.r},${rec.g},${rec.b} does not match HEX ${rec.h}`)
  if (out.has(rec.c)) errors.push(`duplicate code SW ${rec.c}`)
  const { r, g, b, ...keep } = rec // RGB is validated against HEX and fully recoverable from it
  out.set(rec.c, keep)
}
for (const p of pdf) {
  const c = num(p.code)
  add("pdf", { c, n: p.name, h: String(p.hex ?? "").trim().toUpperCase(), r: rgb(p.r, c), g: rgb(p.g, c), b: rgb(p.b, c), ...(p.locator && p.locator !== "N/A" ? { loc: p.locator } : {}) })
}
for (const r of xl) {
  const c = num(r[col("Color ID")])
  const opt = (k, v) => (v === "" || v === undefined ? {} : { [k]: v })
  add("xlsx", {
    c,
    n: String(r[col("Color Name")]).trim(),
    h: String(r[col("HEX")]).trim().toUpperCase(),
    r: rgb(r[col("R")], c),
    g: rgb(r[col("G")], c),
    b: rgb(r[col("B")], c),
    ...opt("col", String(r[col("Collection")]).trim()),
    ...opt("cat", String(r[col("Category")]).trim()),
    ...opt("lrv", r[col("LRV")] === "" ? "" : Number(r[col("LRV")])),
    ...opt("hue", r[col("h")] === "" ? "" : Number(r[col("h")])),
  })
}
if (pdf.length !== 1526) errors.push(`PDF rows: expected 1526, got ${pdf.length}`)
if (xl.length !== 200) errors.push(`Excel rows: expected 200, got ${xl.length}`)
if (out.size !== 1726) errors.push(`unique codes: expected 1726, got ${out.size}`)
if (errors.length) {
  console.error(errors.join("\n"))
  process.exit(1)
}
const list = [...out.values()].sort((a, b) => a.c.localeCompare(b.c))
const dest = new URL("../../data/sw-colors.json", import.meta.url)
fs.writeFileSync(dest, JSON.stringify(list))
console.log(`OK: ${pdf.length} PDF + ${xl.length} Excel = ${list.length} unique Sherwin-Williams colors → data/sw-colors.json`)
