# Project evidence audit — owner brief 2026-10-25 (phase 10)

Source: `lib/projects.ts` (31 case studies, all listed on `/projects` and each with its own `/projects/<slug>` page).
Generated from the data on 2026-10-25. Nothing was invented or deleted. The facts flagged below need a record before they can stay.

## Summary

| Group | Count | Photos | Write-up | Used as local proof on city pages |
|---|---|---|---|---|
| Photo-only jobs | 25 | owner-confirmed job photos (phone-camera JPEGs) | none: area, service, photos only | yes (`LOCAL_PROOF_PROJECTS`) |
| Narrative case studies | 6 | **`photosNeedReview: true`** (square 1024×1024 PNGs that read as generated illustrations) | full challenge / approach / products / results, with numeric stats | **no** (already excluded) |

## High priority: the 6 narrative case studies

These pages state specific job facts with no record behind them, next to photos that are not confirmed as the job.
The brief says "Do not invent projects … or photos" and "Do not delete or redirect valuable pages automatically", so they
were left published and flagged for the owner's decision.

| Slug | Area | Unsupported figures | Narrative sections | Testimonial |
|---|---|---|---|---|
| `memorial-whole-home-interior-repaint` | Memorial, Houston | Scope: 4,200 sq ft; Timeline: 9 days; Rooms: 14 | challenge, approach, products, results | Catherine R., Memorial |
| `river-oaks-exterior-restoration` | River Oaks, Houston | Timeline: 12 days; Stories: 2 | challenge, approach, products, results | — |
| `west-university-kitchen-cabinet-refinishing` | West University, Houston | Doors: 38; Timeline: 6 days | challenge, approach, products, results | — |
| `bellaire-stucco-repair-elastomeric-coating` | Bellaire, Houston | Cracks sealed: 40+; Timeline: 7 days | challenge, approach, products, results | — |
| `heights-wallpaper-removal-modern-repaint` | The Heights, Houston | Walls: 6 rooms; Timeline: 5 days | challenge, approach, products, results | — |
| `cypress-wood-rot-repair-exterior-repaint` | Cypress, TX | Boards replaced: 60+ ft; Timeline: 8 days | challenge, approach, products, results | — |

**Owner decision for each:** (a) confirm the photos and figures from the job file → fill `evidence` in `lib/projects.ts` and
remove `photosNeedReview`; (b) replace with real photos and only confirmed facts; or (c) unpublish (remove the entry; add a
301 from `/projects/<slug>` to `/projects` in `next.config.mjs`).

Changed in this branch:
- `components/interior/interior-proof.tsx` (interior paid landing page) quoted the Memorial entry as "Real Houston project … 4,200 sq ft …
  14 rooms … in 9 days". The figures and the "Real Houston project" label were removed; the before/after section stays until the owner decides.
- The Robert H. and Daniel & Priya M. testimonials were removed from `lib/projects.ts` (`data/reviews.ts` marks them unverified and unpublished; they were not rendered).
- `CaseStudy.evidence` (`photosConfirmed`, `statsConfirmed`, `narrativeConfirmed`, each with who/when/source) was added to the type so confirmations are recorded next to the claim.

## Every project shows "Warranty: 5 years"

All 31 entries have a `Warranty: 5 years` stat. That matches `BUSINESS.warranty` for painting work, but on
`cypress-wood-rot-repair-exterior-repaint` and `bellaire-stucco-repair-elastomeric-coating` it reads as a warranty on the
repairs, which `/warranty` says is covered only if the signed document says so. Recommendation: change the stat to
"5-yr workmanship (painting)" or drop it from repair-led jobs. Not changed here (owner wording decision).

## The 25 photo-only jobs

- `richmond-interior-repaint` — Richmond, TX, Interior Painting
- `richmond-two-story-great-room` — Richmond, TX, Interior Painting
- `richmond-sage-green-kitchen-cabinets` — Richmond, TX, Cabinet Refinishing
- `richmond-two-tone-kitchen-cabinets` — Richmond, TX, Cabinet Refinishing
- `heights-exterior-siding-repaint` — The Heights, Houston, Exterior Painting
- `heights-painted-brick-bungalow` — The Heights, Houston, Exterior Painting
- `fulshear-interior-repaint` — Fulshear, TX, Interior Painting
- `richmond-interior-arches-repaint` — Richmond, TX, Interior Painting
- `cypress-commercial-office-repaint` — Cypress, TX, Commercial Painting
- `houston-retail-center-exterior` — Houston, TX, Commercial Painting
- `houston-storefront-exterior` — Houston, TX, Commercial Painting
- `west-university-painted-brick-exterior` — West University, Houston, Exterior Painting
- `cypress-two-tone-kitchen-cabinets` — Cypress, TX, Cabinet Refinishing
- `cypress-white-teal-kitchen-cabinets` — Cypress, TX, Cabinet Refinishing
- `bellaire-painted-brick-ranch` — Bellaire, Houston, Exterior Painting
- `katy-tan-stucco-exterior` — Katy, TX, Exterior Painting
- `katy-white-stucco-exterior` — Katy, TX, Exterior Painting
- `west-university-stucco-exterior` — West University, Houston, Stucco Painting
- `bellaire-white-glass-front-cabinets` — Bellaire, Houston, Cabinet Refinishing
- `sienna-white-kitchen-cabinets` — Sienna, TX, Cabinet Refinishing
- `heights-charcoal-kitchen-cabinets` — The Heights, Houston, Cabinet Refinishing
- `heights-white-beadboard-kitchen-cabinets` — The Heights, Houston, Cabinet Refinishing
- `katy-white-navy-kitchen-cabinets` — Katy, TX, Cabinet Refinishing
- `magnolia-exterior-siding-repaint` — Magnolia, TX, Exterior Painting
- `pearland-exterior-hardie-repaint` — Pearland, TX, Exterior Painting

These make no claim beyond area, service and photos. Still worth adding: `evidence.photosConfirmed` (who/when), a completion month,
and confirmation that no house number, plate or person is visible (the River Oaks photo was flagged earlier for a visible house number).
