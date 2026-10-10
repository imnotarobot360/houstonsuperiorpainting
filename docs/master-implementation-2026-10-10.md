# Master implementation report — Oct 10, 2026

Brief: "Houston Superior Painting SEO, Local Search, AI Visibility, Trust and Content Upgrade". Nothing is committed.
Juan reviewed four conflicts with facts he confirmed on Oct 8 and decided (Oct 10):

| Brief said | Juan decided | Applied |
|---|---|---|
| One HQ LocalBusiness; other cities are service areas | **Keep 5 offices** (Cypress HQ, Houston, Katy, Sugar Land, Magnolia) | No change; 5 LocalBusiness pages remain |
| Don't publish $2M / workers' comp / bonded until documents match | **Keep $2M + workers' comp + bonded**, add "Request Proof of Insurance" | Kept; approved "upon request" wording added alongside |
| Remove 4.9/200+ and all testimonials | **Keep 4.9/200+ and Catherine R.**; remove Robert H. and Daniel & Priya M. | Done via `data/reviews.ts` |
| Fix the $/sq ft vs 2,500 sq ft price conflict | **Juan will send prices**; change nothing yet | No price changed; disclaimer added |

## 1. Changed files and purpose

| File | Purpose |
|---|---|
| `app/warranty/page.tsx` | Approved warranty wording; epoxy 15-year line replaced with the separate-epoxy sentence; "transferable" removed (2 places, pending written terms); "signed documents control" note; manufacturer warranties noted; CTA → estimate page |
| `app/insurance-and-warranty/page.tsx` (new) | Approved insurance statement, request process (email subject "Insurance Documentation Request" or phone), additional-insured wording, warranty summary, Texas licensing clarification, 5 FAQs. No public COI |
| `components/trust-checklist.tsx` (new) | Verified trust items + "Review Our 5-Year Written Warranty" and "Request Proof of Insurance" links |
| `components/aeo/service-skeleton.tsx`, `components/aeo/office-city-page.tsx`, `app/painters-houston-tx`, `app/commercial-painting-houston-tx`, `app/houston-painting-cost-guide`, `app/page.tsx`, `app/painting-estimate-houston` | Trust checklist placed above the closing CTA (homepage: above the FAQ) |
| `data/reviews.ts`, `data/review-profiles.ts` (new) | Review and Google-profile data; only `publish: true` quotes render; unknown URLs/ratings stay `null` |
| `components/luxury/sections.tsx` | Homepage testimonials now read `PUBLISHED_REVIEWS`; section hides when empty; single card centered |
| `lib/business.ts`, `components/aeo/blocks.tsx` | `PRICING_DISCLAIMER` added and rendered under every shared price table |
| `app/interior-painting-cost-houston`, `app/exterior-house-painting-houston-cost-guide` | Disclaimer under their custom price tables |
| `app/commercial-painting-houston-tx/page.tsx` | Low-odor, furniture/technology protection, occupant communication, building-management coordination; additional-insured wording; project from `data/commercial-projects.ts` |
| `data/commercial-projects.ts` (new) | Approved commercial projects (Cypress office only); section hides when empty |
| `components/aeo/guide-article.tsx` (new) | Shared article layout: quick answer, sections, visible FAQ (= FAQ schema), dates, author, limitations, sources, related links, trust checklist, CTA |
| 5 new articles under `app/blog/` | See section 2 |
| `app/blog/page.tsx` | Five new articles added to the blog index |
| `app/blog/paint-warranty-texas/page.tsx` | Transfer claim removed; "documents control"; brands corrected to include Farrow & Ball |
| `app/houston-painting-contractor-guide/page.tsx` | "We send the COI with the estimate" → approved wording; link to the insurance article |
| `app/local-painter-vs-national-franchise-houston/page.tsx` | Proof-of-insurance wording + links; dateModified Oct 10 |
| `components/footer.tsx` | "Insurance & Warranty" link |
| `public/llms.txt` | Insurance process, approved warranty wording, Texas licensing line, booking link; Memorial project removed from "real photos" list |
| `components/aeo/blocks.tsx` | Author byline links to `/about#juan-serra` |
| `scripts/verify-site.mjs` | New checks: no unconfirmed testimonials, no epoxy line on /warranty, no "transferable" claim, insurance page in sitemap, cost-guide disclaimer, no public COI |
| `docs/reviews/review-workflow.md`, `docs/local-links-pr-plan.md`, `docs/measurement/kpi-template.csv`, this file | Owner-facing plans and templates |

## 2. Pages created and improved

**Created:** `/insurance-and-warranty`; `/blog/how-to-verify-painting-contractor-insurance-houston`;
`/blog/cabinet-painting-company-houston-guide`; `/blog/exterior-house-painting-cypress-tx-guide`;
`/blog/painting-contractor-sugar-land-insurance-warranty`; `/blog/commercial-office-painting-houston`.

**Improved instead of duplicated** (brief: "if an equivalent exists, improve it"):
- "How to Compare Painting Companies" → `/houston-painting-contractor-guide` already covers it (3,100 words, absorbed 4
  older posts via 301). A second page would compete with it.
- "What Should a Painting Workmanship Warranty Cover?" → `/blog/paint-warranty-texas` improved.
- "Local Painter vs National Franchise" → `/local-painter-vs-national-franchise-houston` improved.
- Author page → `/about#juan-serra` already holds the Person entity and bio; bylines now link there.

**Waiting for approved prices** (brief: no unapproved prices): `/blog/cost-to-paint-room-houston` (not created) and
`/blog/cost-to-paint-2000-sq-ft-house-houston` (exists; to be updated after prices; brief's slug
`-2000-square-foot-` not created to avoid a duplicate URL).

Not created: The Woodlands / Spring pages (both already exist as `/painters-the-woodlands-tx` and in service lists; no new
unique information available).

## 3. Claims audit

| Claim | Where | Status / evidence | Action |
|---|---|---|---|
| "Licensed" painter | none | Only "Texas doesn't license painters" explanations; "licensed engineer/trades" on wall-removal pages refers to other trades (accurate) | None |
| BBB accredited / A+ | none | `lib/business.ts` notes "not accredited" (bbb.org, Oct 7) | None |
| AggregateRating / Review schema | none | Removed earlier on purpose (`structured-data.tsx:459`) | None |
| 5 offices / LocalBusiness ×5 | 16 files | Owner-confirmed Oct 8 and Oct 10 | Kept |
| $2M GL + workers' comp | ~73 files | Owner-confirmed Oct 10 | Kept + "upon request" wording |
| Bonded | 15 files | Owner-confirmed Oct 10 | Kept |
| 4.9 / 200+ Google reviews | ~33 files | Owner-stated Oct 8/10; Houston GBP; URL missing | Kept; recorded in `data/review-profiles.ts` |
| 500+ projects; Preferred Application Partner | 28 / 2 files | Owner-confirmed Oct 8 | Kept |
| Testimonial Catherine R. | homepage, interior landing | Owner-confirmed real | Kept |
| Testimonials Robert H., Daniel & Priya M. | homepage | Not confirmed | **Removed** (kept in data file, `publish: false`) |
| Geo-page quotes (Priya S., "15-year-old home…") | ~12 area pages | Already hidden (`verified` flag false) | None |
| Epoxy "15 years" on /warranty | `app/warranty/page.tsx:137` | Belongs to Houston Superior Epoxy | **Replaced** with brief's sentence |
| "Transferable" warranty | /warranty (2), warranty blog (1) | No written terms seen | **Removed**; owner question |
| "15 years combined crew experience" | `lib/business.ts` only | Not rendered anywhere | None (still unverified) |
| "We send the COI with the estimate" | contractor guide (2) | Conflicts with approved wording | **Reworded** |
| Phone numbers | 195 occurrences | All (346) 594-5960 / +13465945960; only other number is a form placeholder | None |
| "JJ Semo" | none | — | None |
| Superlatives ("#1 mistake", "best painters" as topic) | blogs | Descriptive, not self-ranking | None; one area-page quote "Best painters we've ever hired" is hidden (unverified) |

## 4. Pricing approval table

The full list of hard-coded prices is in `docs/price-audit-2026-10-09.md`. Added today:

| Claim | Where | Problem | Proposed fix (needs approval) |
|---|---|---|---|
| Interior $2.50–$4.50 / sq ft floor area | `PRICES_2026.interiorPerSqFt`, used site-wide | × 2,500 sq ft = $6,250–$11,250, but the same site says 2,500 sq ft = $4,000–$8,000 (`fullInterior2500`). The 1,500/2,500/4,000 rows imply ≈ $1.75–$3.50 / sq ft | Juan to send the correct per-sq-ft figure or row values |
| "Three-story homes and steep lots add 20–40%" | `/exterior-house-painting-houston-cost-guide` | Not in PRICES_2026 | Confirm or remove |
| "Prep is 50–60% of labor" etc. | removed from cost guide Oct 9 | — | — |

Disclaimer now under every price table: "Pricing is provided for general planning only and is not a final quote…"

## 5. Review and profile audit

- Google Business Profile ×5: owner confirms they exist; **no share URLs on file**. `TrustBar` "See reviews on Google" uses
  `BUSINESS.social.googleMaps` (one profile; which office it is was never confirmed).
- Rating 4.9 / 200+: owner statement, attributed to the Houston profile. Not linked to a source yet.
- No other review platform is claimed anywhere on the site.
- Review request/response workflow: `docs/reviews/review-workflow.md`.

## 6. External listing correction plan

`docs/local-links-pr-plan.md` §1. Nothing was created, claimed or edited. For each GBP the owner should check, inside the
profile: business name (exactly "Houston Superior Painting"), phone (346) 594-5960, address exactly as on the site,
primary category (House painter / Painter), website field = that office's `/painters-{city}-tx` page, booking link,
hours, services, description, photos, Q&A, review replies, and look for duplicates in Maps.

## 7. Owner actions still required

1. Google Business Profile share link for each of the 5 offices (and the review-request link for each).
2. Current rating/count per profile, with date.
3. Correct interior price per sq ft (or row values) — section 4 — and the rest of the price table.
4. Warranty: is it transferable? Written exclusions (the /warranty page lists covered/not-covered items that were never
   confirmed against the real warranty document)? Claim inspection: 5 or 7 business days (pages disagree)?
5. Catherine R.'s Google review URL and date; any new testimonials with permission.
6. Insurance: nothing to publish, but keep a current certificate ready to send.
7. Real project data: Katy and Sugar Land jobs with photos; are Memorial, River Oaks and West U kitchen case studies real
   (their images are stock)? Storage-facility before/after photos — whose job?
8. Katy address: does Google show "3230 FM 1463 APT 3201" exactly?
9. Approve and send (or not) the outreach drafts in `docs/local-links-pr-plan.md`.

## 8. Validation (local production build, Oct 10)

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | 0 errors |
| `pnpm build` | passes |
| Lint / tests | not available (no ESLint config or test suite in the repo) |
| `node scripts/verify-site.mjs http://localhost:3123` | ALL CHECKS PASSED: 160 sitemap URLs, 566 JSON-LD blocks parse, one H1 per page, canonicals self-referencing, 5 LocalBusiness pages, 5-year warranty on every page's metadata, tel/estimate/booking OK, old comparison URL 301, new trust rules pass |
| Literal escape scan | 0 of 160 pages |
| One `<main>` per page | 160 / 160 |
| New pages | each has 1 Article + 1 FAQPage block; FAQ schema generated from the visible FAQ |
| Homepage | 1 testimonial (Catherine R.); trust checklist renders with both links |
| Public COI | none |
| Sitemap `lastmod` | 154 / 160 — the 6 new pages get real dates from git after commit (run `node scripts/generate-content-dates.mjs` and push again) |

## 9. Search Console and Bing steps (owner)

1. Google Search Console → property `houstonsuperiorpainting.com` → Sitemaps → submit `https://houstonsuperiorpainting.com/sitemap.xml`.
2. URL Inspection → paste each new URL (section 2) → Request indexing. Also `/warranty` and `/commercial-painting-houston-tx`.
3. Pages report: check "Not indexed" reasons weekly for 4 weeks.
4. Enhancements: watch Breadcrumbs and FAQ for errors after recrawl.
5. Bing Webmaster Tools → add/import the site from Search Console → Sitemaps → submit the same sitemap → URL Submission for
   the new URLs.

## 10. 30/60/90-day roadmap

| Window | Item | Benefit | Evidence needed | Owner | Developer | Effort | Done when |
|---|---|---|---|---|---|---|---|
| Days 1–7 | Commit this work; regenerate content dates; GSC/Bing submission | New trust pages indexed | — | Push; submit sitemap | Verify live | S | verify-site passes live; URLs requested |
| Days 1–7 | Prices | Removes the math conflict | Juan's numbers | Send prices | Update PRICES_2026 + audit list | S | price table approved |
| Days 8–21 | GBP links into `data/review-profiles.ts`; "Read reviews" links | Verifiable rating source | 5 share links | Send links | Wire links | S | Links live |
| Days 8–21 | Review workflow live | Steady, honest review growth | Review links | Send requests after each job | — | S | First requests sent |
| Days 22–45 | Room-cost and 2,000 sq ft articles; calculator | Price queries | Approved prices | Approve | Write | M | Published |
| Days 22–45 | Warranty page aligned to the real warranty document | Accuracy | Warranty document | Send document | Update page | S | Page matches document |
| Days 46–70 | Katy / Sugar Land real projects | Local proof | Photos + job facts | Send | Add case studies | M | Each office page shows its own job |
| Days 71–90 | Chambers, associations, partner outreach | Local links/citations | Owner approval | Join/send | Track in plan | M | Live links logged |

AI-visibility tests: use `data/aeo/` (prompt catalog, results schema with platform, prompt, date, location, mention,
position, cited source, competitors) and `scripts/aeo/run.mjs` (dry-run by default). Treat results as dated snapshots.
KPI tracking: `docs/measurement/kpi-template.csv` (paid placements kept in their own rows).

## 11. Diff summary

20 modified files (+173 / −44 lines) and 14 new files/folders, listed in section 1. Run `git diff` for the full diff.
