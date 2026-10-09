# Owner verification required — Houston Superior Painting

Every business fact the website states comes from `lib/business.ts` (and `lib/projects.ts` for case studies).
The items below are stated somewhere on the site or in the source but are **not verified**. Nothing here was
guessed or silently "fixed". Answer each one and the site is updated from the one central file.

Last reviewed: 2026-10-08 (live crawl of 160 indexable pages + source).

## Confirmed by Juan (no action)

| Fact | Value | Confirmed |
|---|---|---|
| Business name | Houston Superior Painting (legal: Houston Superior Painting LLC) | site + BBB listing |
| Owner | Juan Serra (no "JJ Semo" anywhere in the source — checked 2026-10-08) | CLAUDE.md |
| Phone | (346) 594-5960 — identical on all 146 occurrences | site |
| Email | info@houstonsuperiorpainting.com | site |
| Workmanship warranty | **5-year** written workmanship warranty (Juan, 2026-10-08: keep 5 years) | owner |
| Booking | scheduler at https://app.insightpaint.com/book/houston-superior (Juan, 2026-10-08: switched from app.houstonsuperiorgroups.com, same system). "Book an Appointment" buttons on the homepage hero and the estimate page; embedded on /contact | owner |
| Payment policy | "No Upfront Payment": nothing due until the written estimate is approved; then a down payment; balance after walkthrough | owner, 2026-09 |
| Insurance | $2M general liability + workers' comp | CLAUDE.md |
| Paint brands | Sherwin-Williams, Benjamin Moore, Farrow & Ball | owner, 2026-10-07 |
| Specialty finishes | Venetian plaster, Roman Clay, limewash, faux, metallic, lacquer, grasscloth | owner, 2026-10-07 |
| Residential remodeling | offered (page built from existing services: wall removal, drywall, carpentry/rot, wallpaper, painting) | owner, 2026-10-08 |
| Five locations | Cypress (HQ), Houston, Katy, Sugar Land, Magnolia — all legitimate | owner, 2026-10-08 |
| Google rating | 4.9 with 200+ Google reviews | owner, 2026-10-08 |
| Projects completed | 500+ | owner, 2026-10-08 |
| Bonded | bonded and insured | owner, 2026-10-08 |
| Preferred Application Partner | authorized (homepage badge) | owner, 2026-10-08 |
| Competitor comparison | the CertaPro page was replaced by a neutral local-vs-franchise guide; no competitor is named on the site | 2026-10-08 |
| BBB | listed, **not accredited**, not rated (bbb.org, checked 2026-10-07) | public record |

## Needs your answer

### 1. Physical office locations — CONFIRMED by Juan 2026-10-08
Juan confirmed all five locations (Cypress HQ, Houston, Katy, Sugar Land, Magnolia) are legitimate. They stay as offices
with LocalBusiness schema on their city pages. Remaining housekeeping only: the Houston suite number (#443 vs #405)
must match the Google Business Profile character for character, and each profile share link should be added to
`BUSINESS.locations[].mapsUrl`.

### 6. "15 years combined crew experience"
`BUSINESS.trust.crewExperienceYears = 15` — 5 pages. Verifiable?

### 7. Commercial page claims
"Trusted by Houston Property Managers" five-star badge; "background-checked crew"; "1,000–30,000 sq ft floor plates".

### 8. Social / directory profiles (Organization `sameAs`)
Facebook and Instagram URLs resolve — confirm they are ours. Yelp was removed (unverified). Google Maps link points
to one profile (which office?). Provide each Google Business Profile share link for `BUSINESS.locations[].mapsUrl`.

### 9. Case-study photos
Bellaire stucco, Heights wallpaper and Cypress wood-rot case studies use images that look AI-generated
(flagged `photosNeedReview`; not used as local proof). Real job photos, or unpublish? River Oaks photo shows the
house number — crop/blur approval.

### 10. Testimonials
Robert H. (River Oaks) and Daniel & Priya M. (West University) quotes in `lib/projects.ts` — written permission?
(Catherine R. confirmed real 2026-10-01.) No testimonials appear on city pages until matched to real reviews.

### 11. Prices still needed for content
Drywall repair (patch / water damage / texture match), wallpaper removal + skim coat, and cabinet timeline/cure
facts (days on site, product, dry vs full cure, when cabinets can be used). Briefs are in
`docs/aeo-geo-implementation-report-2026-10.md` §7.

### 13. Warranty claim response time
`/warranty` says an inspection is scheduled within **7 business days**; `/blog/paint-warranty-texas` says
**5 business days** (repairs within 30 days of confirmation). Which is right? Both pages will be set to the same number.

### 12. Epoxy content
The garage-epoxy blog draft is on hold: its prices ($5–$11/sq ft, $2,200 minimum) conflict with
houstonsuperiorepoxy.com ($4.50/sq ft, $1,000 minimum). Epoxy facts are never copied into this site.
