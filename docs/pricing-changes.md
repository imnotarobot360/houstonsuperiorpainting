# Pricing changes — owner brief 2026-10-25 (phase 5)

Branch `fix/site-trust-seo-consistency`. Not committed or deployed.

## One source

Every price on the site now comes from `lib/pricing.ts` (`lib/business.ts` re-exports it for older imports):

- `PRICING_META`: label **"Houston Superior Painting budgeting guidance"**, last reviewed **2026-10-25**.
- `PRICING_DISCLAIMER`: shown under every `PriceTable` and in `components/pricing-section.tsx`. It carries the label, the review date, the factors that change the price, and "Houston Superior Painting provides a written estimate for the final scope and price."
- `RATES.interiorPerFloorSqFt` = $2.50–$4.50 per sq ft **of floor area**. `interiorBudgetFor(sqft)` derives every interior example, so the examples can no longer drift from the rate (`tests/content-consistency.test.mjs` checks 2,000 → $5,000–$9,000 and 2,500 → $6,250–$11,250).

## Value changes

| Item | Before | After | Why |
|---|---|---|---|
| Single room (walls only) | $300–$800 | **$350–$900** | Brief value |
| Interior per sq ft | $2.50–$4.50 "per sq ft" (unit unstated on 31 pages) | $2.50–$4.50 **per sq ft of floor area** | Brief: never imply wall area |
| 1,500 / 2,000 / 2,500 / 4,000 sq ft interior | typed by hand ($3,750–$6,750 / $5,000–$9,000 / $6,250–$11,250 / $10,000–$18,000) | same values, now **calculated** from the rate | Single source |
| Cabinets | $3,000–$6,500 per kitchen; large $6,000–$9,000+ | unchanged | Brief value |
| Exterior per sq ft | $1.50–$4 per sq ft (`exteriorPerSqFt`) | **removed**: exterior is project-specific; example budgets by home size and stories stay, labeled as examples | Brief: no flat exterior per-square-foot formula |
| Commercial | per sq ft (unit unstated) | per sq ft **of wall area**; doors per door | Brief: always name the unit |
| Brick / limewash / popcorn | per sq ft | per sq ft **of brick face** / **of ceiling** | Name the unit |
| Service schema `offers.priceSpecification` | min/max USD on service pages | **removed** (`components/structured-data.tsx`) | Budget ranges are not offers; schema must not state a price the page frames as guidance |
| "Estimate in 24 hours" (pricing section) | promised | removed | Not documented |
| `/llms.txt` | "$2.50–$4.50/sq ft", "Exterior $1.50–$4/sq ft" | read from `PRICES_2026`; exterior "priced per project after an on-site estimate" | Single source |

## Exterior per-square-foot rewrites (32 edits)

| Page | Before | After |
|---|---|---|
| `app/blog/cost-to-paint-2000-sq-ft-house-houston/page.tsx` | runs about {PRICES_2026.exteriorPerSqFt} per square foot of floor area. Here's what moves you within that range: | is priced per project. As a budgeting example, a 2,000 sq ft home runs about {PRICES_2026.exterior2000}, depending on stories and condition. Here's what moves you within that range: |
| `app/blog/exterior-paint-colors-fulshear-tx/page.tsx` | {PRICES_2026.exteriorPerSqFt} per sq ft of floor area. | prices are project-specific; most whole-house exteriors budget {PRICES_2026.exteriorPerHome}. |
| `app/blog/exterior-paint-colors-katy-tx/page.tsx` | {PRICES_2026.exteriorPerSqFt} per sq ft of floor area, about | prices are project-specific, with budgets of about |
| `app/blog/exterior-paint-colors-magnolia-tx/page.tsx` | {PRICES_2026.exteriorPerSqFt} per sq ft on Hardie, more where wood repair is real. | Exterior prices are project-specific: stories, access and wood repair move them. |
| `app/blog/exterior-paint-colors-pearland-tx/page.tsx` | {PRICES_2026.exteriorPerSqFt} per sq ft on Hardie. A one-story | Exterior prices are project-specific. As a budgeting example, a one-story |
| `app/blog/exterior-paint-colors-sugar-land-tx/page.tsx` | {PRICES_2026.exteriorPerSqFt} per sq ft of floor area, and about | prices are project-specific, with a budget of about |
| `app/blog/exterior-painting-cost-katy-tx/page.tsx` | Exterior painting in Katy TX costs {PRICES_2026.exteriorPerSqFt} per square foot of floor area in 2026. A 2,500 sq ft home runs | Exterior painting in Katy TX is priced per project. As budgeting examples, a 2,500 sq ft home runs |
| `app/blog/hardieplank-painting-houston/page.tsx` | A typical Houston Hardie home runs about {PRICES_2026.exteriorPerSqFt} per sq ft of living area in 2026, or about {PRICES_2026.exterior2500TwoStory} for a two-story 2,500 sq ft house. | Exterior prices are project-specific; as a budgeting example, a two-story 2,500 sq ft Hardie house runs about {PRICES_2026.exterior2500TwoStory}. |
| `app/blog/hardieplank-painting-houston/page.tsx` | Hardie exterior, per sq ft of living area {PRICES_2026.exteriorPerSqFt} | Most whole-house exteriors {PRICES_2026.exteriorPerHome} |
| `app/exterior-house-painting-houston-cost-guide/page.tsx` | description: `Exterior house painting in Houston costs ${PRICES_2026.exteriorPerSqFt} per sq ft in 2026, or ${PRICES_2026.exterior2500TwoStory} for a 2,500 sq ft two-story home. | description: `Exterior house painting in Houston is priced per project; a 2,500 sq ft two-story home budgets ${PRICES_2026.exterior2500TwoStory}. |
| `app/exterior-house-painting-houston-cost-guide/page.tsx` | Exterior house painting in Houston costs {PRICES_2026.exteriorPerSqFt} per square foot in 2026, or {PRICES_2026.exteriorPerHome} for a typical home. | Exterior house painting in Houston is priced per project, because elevations, stories, access, siding and repairs change the scope. Most homes budget {PRICES_2026.exteriorPerHome}. |
| `app/exterior-painting-bellaire-west-university/page.tsx` | Exterior work typically falls around ${PRICES_2026.exteriorPerSqFt} per square foot. | Exterior work is priced per project. |
| `app/exterior-painting-the-heights/page.tsx` | Exterior work typically falls around ${PRICES_2026.exteriorPerSqFt} per square foot. | Exterior work is priced per project. |
| `app/exterior-painting-cypress-bridgeland/page.tsx` | Another way to think about it: roughly ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. | Exterior prices are project-specific. |
| `app/exterior-painting-katy-cinco-ranch/page.tsx` | Another way to think about it: roughly ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. | Exterior prices are project-specific. |
| `app/exterior-painting-sugar-land/page.tsx` | Another way to think about it: roughly ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. | Exterior prices are project-specific. |
| `app/exterior-painting-fulshear/page.tsx` | , or about ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. | . |
| `app/exterior-painting-memorial/page.tsx` | , or about ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. | . |
| `app/exterior-painting-richmond/page.tsx` | , or about ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. | . |
| `app/exterior-painting-the-woodlands/page.tsx` | , or about ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. | . |
| `app/exterior-painting-houston-tx/page.tsx` | `Exterior house painting in Houston costs ${PRICES_2026.exteriorPerSqFt}/sq ft in 2026; a 2,500 sq ft two-story runs ${PRICES_2026.exterior2500TwoStory}. | `Exterior house painting in Houston, priced per project; a 2,500 sq ft two-story budgets ${PRICES_2026.exterior2500TwoStory}. |
| `app/exterior-painting-houston-tx/page.tsx` | a: `Exterior painting in Houston runs ${PRICES_2026.exteriorPerSqFt} per square foot of floor area in 2026. A 2,500 sq ft two-story home costs | a: `Exterior painting in Houston is priced per project, because elevations, stories, access, siding and repairs change the scope. As a budgeting example, a 2,500 sq ft two-story home runs |
| `app/exterior-painting-houston-tx/page.tsx` | Exterior house painting in Houston costs {PRICES_2026.exteriorPerSqFt} per square foot in 2026; a 2,500 sq ft two-story home runs | Exterior house painting in Houston is priced per project; as a budgeting example, a 2,500 sq ft two-story home runs |
| `app/faq/page.tsx` | a: `Interior painting runs ${P.interiorPerSqFt} per square foot and exterior painting runs ${P.exteriorPerSqFt} per square foot of floor area in 2026. | a: `Interior painting runs about ${P.interiorPerSqFt} per square foot of floor area; exterior painting is priced per project. |
| `app/faq/page.tsx` | a: `${P.exteriorPerSqFt} per square foot of floor area, or ${P.exteriorPerHome} per home. | a: `Exterior prices are project-specific; most homes budget ${P.exteriorPerHome}. |
| `app/houston-painting-contractor-guide/page.tsx` | Typical 2026 Houston ranges run {PRICES_2026.interiorPerSqFt} per sq ft for interiors, {PRICES_2026.exteriorPerSqFt} per sq ft for exteriors, {PRICES_2026.singleRoom} for a single room and {PRICES_2026.cabinetsPerKitchen | Our budgeting ranges run {PRICES_2026.interiorPerSqFt} per sq ft of floor area for interiors, {PRICES_2026.exteriorPerHome} for most whole-house exteriors, {PRICES_2026.singleRoom} for a single room and {PRICES_2026.cabi |
| `app/houston-painting-contractor-guide/page.tsx` | A total well below typical 2026 Houston ranges ({PRICES_2026.exteriorPerSqFt}/sq ft exterior, {PRICES_2026.interiorPerSqFt}/sq ft interior) with no explanation | A total well below our budgeting ranges ({PRICES_2026.exteriorPerHome} for most exteriors, {PRICES_2026.interiorPerSqFt} per sq ft of floor area for interiors) with no explanation |
| `app/houston-painting-cost-guide/page.tsx` | As a rule of thumb, interiors run ${P.interiorPerSqFt} and exteriors ${P.exteriorPerSqFt} per square foot of floor area. | As a rule of thumb, interiors run ${P.interiorPerSqFt} per square foot of floor area; exteriors are priced per project. |
| `app/houston-painting-cost-guide/page.tsx` | A price well below ${P.exteriorPerSqFt} per sq ft on an exterior usually means | An exterior price far below comparable written estimates usually means |
| `app/houston-painting-cost-guide/page.tsx` | {P.exteriorPerSqFt} per sq ft of floor area; most homes {P.exteriorPerHome}. | Exterior prices are project-specific; most homes budget {P.exteriorPerHome}. |
| `app/page.tsx` | Exterior painting runs ${PRICES_2026.exteriorPerSqFt} per square foot of floor area (${PRICES_2026.exteriorPerHome} per home) depending on | Exterior painting is priced per project, with most homes budgeting ${PRICES_2026.exteriorPerHome}, depending on |
| `app/painters-tomball-tx/page.tsx` | and exterior painting ${PRICES_2026.exteriorPerSqFt} per square foot. | per square foot of floor area, and exterior painting is priced per project. |

## Still for the owner

- Confirm the single-room range ($350–$900) applies to walls only, or walls + ceiling + trim.
- The exterior example budgets (`exterior1500OneStory` … `exteriorPerHome` $3,500–$12,000) were kept as labeled examples; confirm they are still current.
- Re-review every range at least yearly and update `PRICING_META.lastReviewed`.
