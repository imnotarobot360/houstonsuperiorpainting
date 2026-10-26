# Owner verification required — Houston Superior Painting

Every business fact the website states comes from `lib/business.ts` (and `lib/projects.ts` for case studies).
The items below are stated somewhere on the site or in the source but are **not verified**. Nothing here was
guessed or silently "fixed". Answer each one and the site is updated from the one central file.

Last reviewed: 2026-10-25 (owner brief "site trust / SEO consistency"; earlier review 2026-10-08).

> **Owner brief 2026-10-25 supersedes the earlier verbal confirmations marked ~~struck~~ below.** The brief
> allows only documented claims. Those facts are removed from the site and blocked by
> `scripts/audit-content-consistency.mjs` until the documents listed are on file. Pre-fix inventory:
> `docs/pre-fix-content-audit.md`.

## Confirmed by Juan (no action)

| Fact | Value | Confirmed |
|---|---|---|
| Business name | Houston Superior Painting (legal: Houston Superior Painting LLC) | site + BBB listing |
| Owner | Juan Serra (no "JJ Semo" anywhere in the source — checked 2026-10-08) | CLAUDE.md |
| Phone | (346) 594-5960 — identical on all 146 occurrences | site |
| Email | info@houstonsuperiorpainting.com | site |
| Workmanship warranty | Five-year written workmanship warranty on qualifying painting projects, subject to the signed terms (`BUSINESS.warranty`) | owner brief 2026-10-25 |
| Booking | scheduler at https://app.insightpaint.com/book/houston-superior (Juan, 2026-10-08: switched from app.houstonsuperiorgroups.com, same system). "Book an Appointment" buttons on the homepage hero and the estimate page; embedded on /contact | owner |
| Payment policy | Free written estimates; the approved estimate states scope, deposit requirements and payment schedule before work begins (`BUSINESS.paymentPolicy`). No "no upfront" style promises. | owner brief 2026-10-25 |
| Insurance | Business insurance; current proof on request; COI before work when required (`BUSINESS.insurance`). ~~$2M general liability + workers' comp~~: needs a current COI showing limits and a WC policy before it can return. | owner brief 2026-10-25 |
| Paint brands | Sherwin-Williams, Benjamin Moore, Farrow & Ball | owner, 2026-10-07 |
| Specialty finishes | Venetian plaster, Roman Clay, limewash, faux, metallic, lacquer, grasscloth | owner, 2026-10-07 |
| Residential remodeling | offered (page built from existing services: wall removal, drywall, carpentry/rot, wallpaper, painting) | owner, 2026-10-08 |
| Five locations | Cypress (HQ), Houston, Katy, Sugar Land, Magnolia. All set to `owner_verification_required`: described as service areas, not offices, until each is confirmed as a staffed office (see §1). | owner brief 2026-10-25 |
| Google rating | ~~4.9 with 200+ Google reviews~~: removed. Reviews link to each Google profile; numbers only if checked programmatically (`SHOW_RATING_NUMBERS`). | owner brief 2026-10-25 |
| Projects completed | ~~500+~~: removed; needs a job-count record (ERP export). | owner brief 2026-10-25 |
| Bonded | ~~bonded and insured~~: removed; needs a surety bond document. | owner brief 2026-10-25 |
| Preferred Application Partner | ~~authorized~~: removed; needs the manufacturer's written program confirmation. | owner brief 2026-10-25 |
| Competitor comparison | the CertaPro page was replaced by a neutral local-vs-franchise guide; no competitor is named on the site | 2026-10-08 |
| BBB | listed, **not accredited**, not rated (bbb.org, checked 2026-10-07) | public record |

## Needs your answer

### 1. Physical office locations — CONFIRMED by Juan 2026-10-25
Juan confirmed all five (Cypress HQ, Houston, Katy, Sugar Land, Magnolia) are staffed offices customers can visit;
all five are `locationType: "staffed_office"`, so addresses, "office" wording and LocalBusiness schema are back.

Earlier note (superseded):
Which locations are staffed offices that customers can visit? Katy's address is "3230 FM 1463 APT 3201" (an
apartment unit). For each confirmed office set `locationType: "staffed_office"` in `lib/business.ts`;
its address, the word "office" and LocalBusiness schema return automatically. Until then every location page says
"Serving {city} and surrounding communities" and only the Cypress HQ address is printed.
(Earlier: Juan confirmed all five as legitimate on 2026-10-08.) Houston suite CONFIRMED #443 by Juan 2026-10-09 (matches the Google Business Profile: 2617 Bissonnet St #443, Houston, TX 77005). Remaining housekeeping only:
each Google Business Profile share link should be added to
`BUSINESS.locations[].mapsUrl`.

### 6. "15 years combined crew experience" — REMOVED 2026-10-25
`crewExperienceYears` was removed from `lib/business.ts` (undocumented).

### 7. Commercial page claims — RESOLVED 2026-10-09
Page rewritten from Juan's brief; the unverified badge, "background-checked crew", floor-plate sizes, HIPAA, antimicrobial, food-grade, maintenance-contract, "48-hour bid" and storage-facility before/after claims were removed. Still unconfirmed: are the storage-facility photos (`/images/commercial-before-1.jpg`, `commercial-after-1.jpg`) our job? If yes they can come back as a case study.

### 8. Social / directory profiles (Organization `sameAs`)
Facebook and Instagram URLs resolve — confirm they are ours. Yelp was removed (unverified). Google Maps link points
to one profile (which office?). Provide each Google Business Profile share link for `BUSINESS.locations[].mapsUrl`.

### 9. Case-study photos — CONFIRMED by Juan 2026-10-25
Juan confirmed the six narrative case studies (photos, figures, write-ups) are real jobs; recorded in `evidence` in
`lib/projects.ts` and `photosNeedReview` removed. Earlier note (superseded):
Bellaire stucco, Heights wallpaper and Cypress wood-rot case studies use images that look AI-generated
(flagged `photosNeedReview`; not used as local proof). Real job photos, or unpublish? River Oaks photo shows the
house number — crop/blur approval.

### 10. Testimonials — DECIDED 2026-10-10
Juan kept Catherine R. (confirmed real) and removed Robert H. and Daniel & Priya M. (not confirmed). Quotes now live in
`data/reviews.ts`; only `publish: true` entries render. Still needed: Catherine R.'s Google review URL and date.

### 14. Warranty terms
~~TRANSFERABLE — confirmed by Juan 2026-10-10~~. Removed 2026-10-25: the brief allows only terms in the signed warranty document. Send the signed warranty template so /warranty can match it (transferability, covered items, exclusions).
Still open: do the covered / not-covered lists on /warranty match the real warranty document?

### 11. Prices still needed for content — mostly RESOLVED 2026-10-11 (service prices confirmed; cabinet cure times still open)
Drywall repair (patch / water damage / texture match), wallpaper removal + skim coat, and cabinet timeline/cure
facts (days on site, product, dry vs full cure, when cabinets can be used). Briefs are in
`docs/aeo-geo-implementation-report-2026-10.md` §7.

### 13. Warranty claim response time — RESOLVED 2026-10-11
Juan: inspection within **7 business days**. /warranty and /blog/paint-warranty-texas both say 7.

### 12. Epoxy content
The garage-epoxy blog draft is on hold: its prices ($5–$11/sq ft, $2,200 minimum) conflict with
houstonsuperiorepoxy.com ($4.50/sq ft, $1,000 minimum). Epoxy facts are never copied into this site.
