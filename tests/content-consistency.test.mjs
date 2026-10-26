// Content-consistency guard (owner brief 2026-10-25). Run: pnpm test
// Fails when site copy reintroduces an undocumented claim; exceptions go in
// scripts/content-audit-allowlist.json with a reason.
import { test } from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import { audit, RULES } from "../scripts/audit-content-consistency.mjs"
import { PRICES_2026, PRICING_DISCLAIMER, interiorBudgetFor } from "../lib/pricing.ts"

test("content audit: no prohibited or undocumented claims in served copy", async () => {
  const hits = await audit()
  assert.equal(hits.length, 0, hits.map((h) => `${h.rule} ${h.file}:${h.line} ${h.text}`).join("\n"))
})

test("content audit: every allowlist entry names a rule that exists and has a reason", () => {
  const list = JSON.parse(fs.readFileSync(new URL("../scripts/content-audit-allowlist.json", import.meta.url), "utf8"))
  const ids = new Set(RULES.map((r) => r.id))
  for (const a of list) {
    assert.ok(ids.has(a.rule), `unknown rule ${a.rule}`)
    assert.ok(a.reason && a.reason.length > 20, `allowlist entry for ${a.file} needs a real reason`)
  }
})

test("content audit: rules catch the claims the brief prohibits", () => {
  const caught = (id, line) => {
    const r = RULES.find((x) => x.id === id)
    return r.re.test(line) && !(r.unless && r.unless.test(line))
  }
  assert.ok(caught("policy-limit", "Insured with $2M general liability"))
  assert.ok(caught("workers-comp", "plus workers' comp"))
  assert.ok(caught("bonded", "We are licensed, bonded and insured"))
  assert.ok(caught("state-license", "Fully licensed painters"))
  assert.ok(caught("payment-promise", "No money upfront"))
  assert.ok(caught("warranty-term", "transferable to a new owner"))
  assert.ok(caught("warranty-term", "5-year guarantee"))
  assert.ok(caught("office-claim", "Google Reviews by Office"))
  assert.ok(caught("customer-count", "500+ happy customers"))
  assert.ok(caught("net-domain", "houstonsuperiorpainting.net"))
  assert.ok(caught("lead-claim", "We test for lead and use lead-safe work practices"))
  assert.ok(!caught("lead-claim", "ask any painter for their certification"))
  assert.ok(!caught("bonded", "a bonding primer"))
  assert.ok(!caught("customer-count", "4,500+ sq ft"))
  assert.ok(!caught("state-license", "Texas does not issue a state painting-contractor license"))
})

test("pricing: calculated interior examples come from the floor-area rate", () => {
  assert.equal(interiorBudgetFor(2000), "$5,000–$9,000")
  assert.equal(interiorBudgetFor(2500), "$6,250–$11,250")
  assert.equal(PRICES_2026.fullInterior2000, interiorBudgetFor(2000))
  assert.equal(PRICES_2026.singleRoom, "$350–$900")
  assert.equal(PRICES_2026.cabinetsPerKitchen, "$3,000–$6,500")
  assert.match(PRICING_DISCLAIMER, /Houston Superior Painting budgeting guidance, last reviewed/)
  assert.ok(!("exteriorPerSqFt" in PRICES_2026), "exterior has no flat per-square-foot rate")
})
