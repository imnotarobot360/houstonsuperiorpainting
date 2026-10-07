# Local SEO + AI-answer audit — Oct 7, 2026

Scope: the Greater Houston city and neighborhood pages, the shared templates behind them, sitewide
structured data and the sitemap. Goal: every local page states only facts we can back up, links to the
right service page, real project, estimate page and nearby areas, and stops making claims we can't prove.

Tracker for each priority city: `docs/local-seo-tracker-2026-10.csv`.

## 1. What exists (inventory)

151 live pages, 23 redirects. Local pages fall into four groups:

| Group | Template | Pages |
|---|---|---|
| Office city pages (have a GBP) | `components/aeo/office-city-page.tsx` | Houston, Cypress (HQ), Katy, Sugar Land, Magnolia |
| Other city pages | `components/location-page-template.tsx` | Richmond, Fulshear, Tomball, The Woodlands, Pearland, Missouri City, Rosenberg, Bellaire, Memorial, Memorial Villages, River Oaks, The Heights, Cinco Ranch, Champions Forest, Cypress Creek, Energy Corridor, Sienna, Riverstone |
| Service × neighborhood pages | `components/geo-service-page-template.tsx` | 39 pages: interior / exterior / cabinet / limewash × Cypress-Bridgeland, Katy-Cinco Ranch, Sugar Land, Memorial, Tanglewood, The Heights, Bellaire-West University; interior + exterior × Richmond, Fulshear, The Woodlands; brick × Katy, Memorial; 3 luxury pages |
| One-off local pages | own markup | interior-painters-katy-tx, cabinet-painting-katy-tx, cabinet-painting-cost-katy, best-house-painters-near-katy-texas, painting-company-near-me, residential-painters-houston |

Real local proof: six case studies exist in `lib/projects.ts`. Three have phone-camera job photos
(Memorial interior, River Oaks exterior, West University cabinets). The other three (Bellaire stucco,
Heights wallpaper, Cypress wood rot) use 1024×1024 PNGs that read as generated illustrations; they are
now flagged `photosNeedReview` and no longer used as local proof. No priority city outside Houston has a
documented project.

## 2. What changed

Sitewide / shared:
- `geo-service-page-template.tsx` (39 pages): removed claims with no source — "EPA Lead-Safe Certified
  (RRP)", "Family-Owned", "Bilingual Foremen", "Sherwin-Williams & Benjamin Moore Preferred Contractor",
  "4.9 Google Reviews", "5-star reviews", "0% APR financing over $5,000", "Daily SMS photo updates",
  "response in under 5 minutes". Unverified testimonials no longer render (they need `verified: true`).
  Prices now come from `PRICES_2026` (each page used to invent its own range, e.g. "$6,720–$19,600" for
  Tanglewood, which also fed the Offer schema); limewash/brick/luxury show no price. Added a Quick Answer,
  the matching real project (only where the neighborhood matches), nearby city links, and estimate CTAs to
  `/painting-estimate-houston`. Service schema provider is now the Organization `@id` (it was the invalid
  type `PaintingContractor`), and "Sugar Land, TX, TX" is fixed.
- `location-page-template.tsx` (18 city pages): the "500+ Houston-area projects" stat is replaced with the
  payment policy; "Estimates for {city} homes are scheduled from there" (office claim) is removed; the
  before/after block that showed the River Oaks photos labelled "{city} area" is now labelled and linked
  as the River Oaks project.
- `office-city-page.tsx`: only projects with confirmed job photos count as local proof (Cypress no longer
  cites the wood-rot project).
- `service-page-template.tsx`: estimate CTAs go to `/painting-estimate-houston` instead of `/contact`.
- `lib/business.ts`: `bbbAccredited: false` (bbb.org, checked Oct 7: "NOT BBB Accredited", file opened
  Oct 5, 2026); BBB link fixed (old URL 404'd); Yelp removed from `sameAs` (couldn't be confirmed);
  Farrow & Ball added to brands and `specialtyFinishes` added (both confirmed by Juan, Oct 7).
- `structured-data.tsx`: Houston Superior Epoxy is now a `subOrganization` referenced by `@id` only
  (its own schema already names us `parentOrganization`); no reviews, warranty or services are merged.
- `app/sitemap.ts`: pages whose canonical points elsewhere are excluded (removed
  `/blog/soft-washing-houston-tx`, which canonicalises to `/soft-washing-houston-tx`).
- Core service pages (interior, exterior, cabinets) now link their matching real project.
- `/blog/painters-near-me-katy-tx`: the featured image is an AI illustration but its alt text described a
  real crew in Katy; alt text is now honest. Replace the image with a real photo.

Page level (78 page files): removed invented local volume ("35 projects in Bellaire", "hundreds of homes
in Cinco Ranch", "dozens of Heights homes", "numerous 8,000 sq ft estates"), invented testimonials, HOA /
designer / permit-expertise claims, unsourced statistics, hand-typed prices, fixed timelines and
unverified brands; corrected a 3-year warranty on several interior/cabinet pages to the verified 5 years;
fixed a mislabeled link (Woodlands cabinets → Heights) and a wrong Bellaire link; added header/footer to
two pages that had no site navigation; rewrote titles/descriptions within length; kept every URL and
canonical.

## 3. Consolidation candidates — NOT done, needs Juan's OK

After the invented local detail came out, several groups are near-duplicates of each other and of a
stronger page (same-service pages across zones now share 67–74% of their text). Proposed 301 mapping,
strongest URL kept:

| Redirect this | To | Why |
|---|---|---|
| /limewash-decorative-finishes-bellaire-west-university, -tanglewood, -the-heights, -memorial, -cypress-bridgeland, -katy-cinco-ranch, -sugar-land | /limewash-brick-painting-houston-tx | Same intent, no local proof, 61–74% identical to each other |
| /interior-painters-katy-tx | /interior-painting-katy-cinco-ranch | Same query |
| /cabinet-painting-katy-tx | /cabinet-refinishing-katy-cinco-ranch | Same query |
| /best-house-painters-near-katy-texas | /blog/painters-near-me-katy-tx | Same "how to choose a Katy painter" intent; "best" in the URL |
| /painting-company-near-me | /painters-houston-tx | Same intent as the Houston office page |
| /blog/soft-washing-houston-tx | /soft-washing-houston-tx | Already canonicalised there; a 301 finishes the job |

Keep: /cabinet-painting-cost-katy (distinct "cost" query), /residential-painters-houston (target of the
/residential and /residential-painting 301s). Also worth a decision: whether the cabinet / interior /
exterior pages for Tanglewood and Bellaire-West University should fold into the Memorial / Houston pages.

## 4. Facts for Juan to confirm (not changed in code)

Sitewide claims stored in `lib/business.ts` and shown on many pages:
1. **4.9 rating / 200+ Google reviews** (homepage, Houston page, ad pages). Which GBP, and is it current?
2. **500+ projects completed** (homepage, About, trust bar). Is there a record?
3. **Bonded** (homepage FAQ, estimate page, ad pages). Is there a surety bond?
4. **"Five offices"** (About, Organization description, office pages). Google only allows a GBP at a
   staffed location that serves customers in person. Katy is `3230 FM 1463 APT 3201` (an apartment);
   Magnolia `14512 Cottontop Mtn` looks residential; Houston's suite (#443 vs #405) is unresolved. If any
   are not staffed offices, they should be described as service areas and their LocalBusiness schema and
   address blocks removed.
5. Office FAQ says each office "has its own Google Business Profile" with local reviews — confirm per office.
6. Office FAQ promises "a written scope and price within 24 hours".
7. Facebook and Instagram profiles in `sameAs` resolve — confirm they are ours. Yelp listing: confirm.
8. Article bylines: every blog post is attributed to Juan Serra. Confirm he wrote or reviewed them.

Project evidence:
9. The Bellaire stucco, Heights wallpaper and Cypress wood-rot case studies: are the photos from those
   jobs? If not, replace them with real photos or unpublish the case studies.
10. The River Oaks exterior photo shows the house number ("1923"). Crop or blur it — project pages
    should identify a neighborhood or ZIP, not an address.
11. Customer quotes on the project pages (Robert H., Daniel & Priya M.): confirm permission. Catherine R.
    was confirmed real on Oct 1.

Removed from pages; restore if true:
12. EPA RRP lead-safe firm certification (if yes, add the certificate number to `lib/business.ts`).
13. 0% APR financing; senior/military discount; free touch-ups for 12 months; transferable warranty.
14. W-2 crews / background checks; "owner reviews every estimate"; bilingual foremen.
15. Does the 5-year workmanship warranty cover limewash, brick painting, Venetian plaster and cabinets?
16. Typical job durations left on some pages as "usually 2–5 days" etc. — realistic?
17. Neighborhood lists written by the editors from general knowledge (e.g. Rosenberg: Summer Lakes,
    Bonbrook Plantation, Walnut Creek, Bridlewood Estates; Tomball: Creekside Park, Lakewood Forest).

## 5. Validation (Oct 7, local production build)

- `npx tsc --noEmit -p .`: 0 errors. `pnpm build`: passes (188 static pages).
- `pnpm lint`: cannot run — `eslint` is not installed and there is no ESLint config.
- Crawl of all 174 routes: 151 × 200, 23 × 308; every sitemap URL returns 200; one H1 on every page; no
  duplicate titles or descriptions; every JSON-LD block parses; LocalBusiness only on the 5 office pages;
  no rating/review schema; every `<img>` has an alt attribute; robots.txt allows public pages and AI
  search crawlers.
- Removed from rendered pages (page count before → after): EPA claim 39 → 0, 0% APR 39 → 0,
  Family-Owned/Bilingual 39 → 0, "Preferred Contractor" 39 → 0, rating text 57 → 16 (the 16 come from
  `lib/business.ts` — item 1). Local pages linking a real project: 1 → 31.
- 27 rendered titles are 61–69 characters because the layout appends the brand name; Google truncates,
  no fix made.
- Sitemap `<lastmod>` comes from `lib/content-dates.json` (git date of each page file). After these changes
  are committed, run `node scripts/generate-content-dates.mjs` and commit again so edited pages get
  their new dates.

AI-answer visibility is not measurable from code. Treat any ChatGPT / Perplexity / Gemini / Grok check as
a dated observation in the tracker, not a ranking.
