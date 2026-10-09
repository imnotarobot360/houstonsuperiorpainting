# Price audit — Oct 9, 2026

Rule (CLAUDE.md): every price on the site comes from `PRICES_2026` in `lib/business.ts`. This audit lists live pages
that show a price range typed directly into the page instead. Nothing below was changed; each group needs Juan's
answer. Re-run: `node <scratchpad>/price-audit.mjs C:/sites/houstonsuperiorpainting` (script kept out of the repo).

Already fixed on Oct 9: accent walls ($200–$600 → `accentWall` $150–$400, specialty finishes "quoted on site"),
cabinets ($3,000–$8,000 → `cabinetsPerKitchen` $3,000–$6,500), exterior on the "signs" page bound to `exteriorPerHome`.

## A. Our service prices that are not in PRICES_2026 (confirm, correct, or switch to "quoted on site")

| Page | Price shown |
|---|---|
| /drywall-repair-houston-tx | $200–$2,500 overall; tiers $200–$400, $400–$900, $900–$2,500; $250–$500, $650–$1,500 |
| /wallpaper-removal-houston-tx | $3–$8 per sq ft |
| /wood-rot-repair-houston-tx | $300–$2,500 |
| /stucco-painting-houston-tx | $2,500–$8,000 |
| /venetian-plaster-houston-tx and /blog/venetian-plaster-houston-tx | $8–$20 per sq ft, plus room/feature-wall tables |
| /limewash-brick-painting-houston-tx | $4,000–$15,000 "depending on home size" (price list: `limewashHome2500` $6,000–$10,000) |
| /pressure-washing-houston-tx | $150–$1,200; house $300–$700, deck $200–$450, fence $200–$500 per side |
| /soft-washing-houston-tx | $350–$650 single-story, $550–$1,000 two-story |
| /load-bearing-wall-removal-houston-tx | $4,000–$30,000+ by span; utility re-routes add $2,000–$6,000 |
| /blog/fence-deck-painting-houston-tx | $1–$3 per sq ft; $400–$1,200+, $200–$600+, $600–$1,800+ |
| /interior-painting-cost-houston | 3,000 sq ft home $5,500–$10,000 (between the list's 2,500 and 4,000 rows) |
| /painting-estimate-houston | $650–$1,800 and $6,500–$14,000 (examples on the estimate page) |
| /houston-painting-cost-guide | $800–$1,500, $2,500–$6,000 rows |
| /exterior-house-painting-houston-cost-guide, /blog/exterior-painting-cost-katy-tx | per-sq-ft bands by siding ($1.50–$2.50 … $2.50–$4.00, inside the list's $1.50–$4) and add-ons ($200–$600, $500–$2,000) |

Note: `OWNER_VERIFICATION_REQUIRED.md` item 11 says drywall and wallpaper prices are still needed, but those two pages
already publish the prices above.

## B. Not our prices (no action)

Paint-can prices (Sherwin-Williams/Benjamin Moore per gallon), DIY supply costs, and cabinet-replacement or siding
costs quoted for comparison on blog posts: /best-exterior-paint-houston-weather, /blog/benjamin-moore-vs-sherwin-williams,
/blog/emerald-vs-duration-paint, /blog/diy-vs-professional-painting-cost-houston, /blog/cabinet-refinishing-vs-replacement-houston,
/blog/cost-to-paint-kitchen-cabinets-houston-tx, /paint-or-replace-cabinets, /signs-home-needs-exterior-painting.
