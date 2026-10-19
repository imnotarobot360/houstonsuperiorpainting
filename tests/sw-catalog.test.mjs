// Tests for the Sherwin-Williams catalog (data/sw-colors.json) and catalog search.
// Run: pnpm test
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import { searchColors, mergeCatalogs, normalize } from "../lib/visualizer/core.ts"

const SW = JSON.parse(fs.readFileSync(new URL("../data/sw-colors.json", import.meta.url), "utf8"))
// Same mapping as swEntryToColor in lib/visualizer/catalog.ts.
const toColor = (e) => ({ provider: "Sherwin-Williams", name: e.n, code: `SW ${e.c}`, hex: `#${e.h}` })
const FULL = SW.map(toColor)

test("catalog: 1,726 unique Sherwin-Williams codes with names and valid hex", () => {
  assert.equal(SW.length, 1726)
  assert.equal(new Set(SW.map((e) => e.c)).size, 1726, "duplicate codes")
  for (const e of SW) {
    assert.match(e.c, /^\d{4}$/, `bad code ${e.c}`)
    assert.ok(e.n && e.n.trim() === e.n, `bad name for SW ${e.c}`)
    assert.match(e.h, /^[0-9A-F]{6}$/, `bad hex for SW ${e.c}`)
  }
})

test("catalog: Designer Color Collection fields kept for its 200 colors only", () => {
  const withCollection = SW.filter((e) => e.col)
  assert.equal(withCollection.length, 200)
  for (const e of withCollection) {
    assert.ok(e.cat, `SW ${e.c} missing category`)
    assert.equal(typeof e.lrv, "number")
    assert.equal(typeof e.hue, "number")
  }
  assert.ok(SW.filter((e) => !e.col).every((e) => !e.cat && e.lrv === undefined), "no invented categories on PDF colors")
  const oat = SW.find((e) => e.c === "9501")
  assert.deepEqual([oat.n, oat.h, oat.col, oat.cat, oat.lrv, oat.hue], ["Oat Milk", "DEDACD", "Form + Function", "Whites", 70.325, 96.98])
})

test("catalog: names split across lines in the PDF are rebuilt", () => {
  const name = (c) => SW.find((e) => e.c === c)?.n
  assert.equal(name("2807"), "Rookwood Medium Brown")
  assert.equal(name("2809"), "Rookwood Shutter Green")
  assert.equal(name("2814"), "Rookwood Antique Gold")
  assert.equal(name("2826"), "Colonial Revival Green Stone")
  assert.equal(name("6824"), "Forget-Me-Not")
  assert.equal(name("6421"), "Celery")
  assert.equal(SW.find((e) => e.c === "6421").h, "E0DDBD")
})

test("featured: every Sherwin-Williams color in data/paint-colors.ts uses the catalog value", () => {
  const src = fs.readFileSync(new URL("../data/paint-colors.ts", import.meta.url), "utf8")
  const byCode = new Map(SW.map((e) => [e.c, e]))
  let n = 0
  for (const m of src.matchAll(/brand: "Sherwin-Williams", code: "SW (\d{4})", name: "([^"]+)", hex: "#([0-9A-F]{6})"/g)) {
    const e = byCode.get(m[1])
    assert.ok(e, `SW ${m[1]} not in catalog`)
    assert.equal(m[2], e.n, `SW ${m[1]} name`)
    assert.equal(m[3], e.h, `SW ${m[1]} ${m[2]} hex`)
    n++
  }
  assert.ok(n >= 16)
})

test("search: by code with or without spaces and prefix, and by name", () => {
  for (const q of ["SW 7008", "sw7008", "SW7008", "7008", " sw  7008 "]) {
    assert.equal(searchColors(FULL, q)[0].name, "Alabaster", q)
  }
  assert.equal(searchColors(FULL, "alabaster")[0].code, "SW 7008")
  assert.equal(searchColors(FULL, "Forget-Me-Not")[0].code, "SW 6824")
  assert.equal(searchColors(FULL, "forget me not")[0].code, "SW 6824")
  assert.equal(searchColors(FULL, "celery")[0].code, "SW 6421")
})

test("search: accents ignored ('uber' finds Über Umber)", () => {
  assert.equal(normalize("Über Umber"), "uberumber")
  assert.ok(searchColors(FULL, "uber umber").some((c) => c.name === "Über Umber"))
})

test("search: name prefix ranks ahead of a name that merely contains the text", () => {
  const r = searchColors(FULL, "naval")
  assert.equal(r[0].name, "Naval")
})

test("merge: featured first, catalog duplicates removed", () => {
  const featured = [
    { provider: "Benjamin Moore", name: "White Dove", code: "OC-17", hex: "#F0EEE5" },
    { provider: "Sherwin-Williams", name: "Alabaster", code: "SW 7008", hex: "#EDEAE0" },
  ]
  const merged = mergeCatalogs(featured, FULL)
  assert.equal(merged.length, 1726 + 1)
  assert.deepEqual(merged.slice(0, 2), featured)
  assert.equal(merged.filter((c) => c.code === "SW 7008").length, 1)
})
