# HSP — AEO + SEO Implementation Plan

Sep 26, 2026 · Juan Serra

## Site architecture: keep the URLs you have

The site already has every page the plan calls for; the work is rewriting content and schema on existing URLs, not building /locations/* or /services/*. Moving 167 indexed URLs would cost 2–3 months of rankings for nothing a model cares about.

| Plan calls for | Use this existing URL | Change needed |
|---|---|---|
| Home | / | Organization schema replaces LocalBusiness; entity blurb above the fold |
| About | /about | Rewrite: Juan Serra, 2019, five offices, official-site disclaimer |
| Contact + quote | /contact, /painting-estimate-houston | List all five offices; add estimate page to nav (currently orphaned) |
| Interior painting | /interior-painting-houston-tx | Quick Answer + FAQ format |
| Exterior painting | /exterior-painting-houston-tx | Quick Answer + FAQ format |
| Cabinet painting | /cabinet-refinishing-houston-tx | Fix canonical (points to a redirect); Quick Answer |
| Drywall repair | /drywall-repair-houston-tx | Quick Answer + FAQ format |
| Garage epoxy | none on this domain | Keep on houstonsuperiorepoxy.com; 301 the two /blog/garage-epoxy-* posts there |
| Houston location | /painters-houston-tx | Own LocalBusiness schema: 2617 Bissonnet St #443 |
| Cypress location | /painters-cypress-tx | LocalBusiness: 14150 Huffmeister Rd, Suite 410 |
| Katy location | /painters-katy-tx | LocalBusiness: 3230 FM 1463 APT 3201 |
| Sugar Land location | /painters-sugar-land-tx | LocalBusiness: 18722 University Blvd, Suite 254 |
| Magnolia location | /painters-magnolia-tx | LocalBusiness: 14512 Cottontop Mtn; official-site disclaimer |
| Cost guide | /houston-painting-cost-guide | Fix the interior figure to match /interior-painting-cost-houston; 301 /blog/house-painting-cost-houston-2026 here |
| Interior cost | /interior-painting-cost-houston | 301 /blog/interior-painting-cost-houston-tx here |
| Exterior cost | /exterior-house-painting-houston-cost-guide | 301 /blog/exterior-painting-cost-houston-tx-2026 here |
| Cabinet cost | /blog/cost-to-paint-kitchen-cabinets-houston-tx | Keep; link from cabinet service page |
| How to hire | /questions-to-ask-before-hiring-painters | Retitle "How to Hire a Painter in Houston"; merge /blog/how-to-choose-best-painters-houston and /blog/licensed-vs-unlicensed-painters into it |
| Best time to paint | /blog/best-time-to-paint-house-houston | 301 /blog/best-time-to-paint-houston-home-exterior here |
| FAQ hub | new: /faq | One page, 25–30 questions, FAQPage schema, links out to money pages |

The 18 other /painters-*-tx pages (Pearland, Tomball, Richmond, etc.) have no GBP. They keep the Organization schema with areaServed only — no address, no LocalBusiness.

## Page outlines

### Service page skeleton (interior, exterior, cabinets, drywall)

1. Quick Answer (40–60 words, price range, phone) — no heading, first paragraph under H1
2. ## Who this is for
3. ## Our [service] process in Houston — prep → product → coats → walkthrough, 4 numbered steps
4. ## Houston-specific risks — humidity, sun/chalking, flashing, mold, HOA rules
5. ## [Service] cost in Houston (2026) — price table, 5–8 rows, link to the cost guide
6. ## Paints we use — Sherwin-Williams Duration/Emerald, Benjamin Moore Aura/Regal; why for Houston
7. ## Frequently asked questions — 8–12 Q&As, FAQPage schema
8. ## Nearby cities we serve — links to 6 city pages
9. ## Related services — 3 links
10. CTA block: free estimate, (346) 594-5960, warranty line

Service FAQ bank (pick 8–12 per page): How much does [service] cost in Houston in 2026? · How long does [service] take for a 2,500 sq ft home? · Do you use Sherwin-Williams or Benjamin Moore? · What prep do you do before painting in Houston humidity? · How many coats do you apply? · Do I need to move furniture / be home? · Are you licensed and insured in Texas? · What does the 5-year warranty cover? · Can you match my HOA-approved colors? · What time of year is best for [service] in Houston? · Do you require a deposit? · How do I get an estimate?

### City page skeleton (houston, cypress, katy, sugar-land, magnolia)

1. Quick Answer with that city's office address and GBP phone
2. ## Painting services in [City] — 6 service cards, each linking to its service page
3. ## Neighborhoods we paint in [City] — 8–12 named subdivisions, one sentence each
4. ## [City] painting prices (2026) — 4-row table: interior, exterior, cabinets, single room
5. ## Why [City] homes need different prep — one real local detail
6. ## Recent [City] projects — 2–3 real jobs with photos, street-level neighborhood named
7. ## Frequently asked questions — 8 Q&As
8. ## Visit our [City] office — NAP block, map embed, hours matching GBP, "See reviews on Google" link
9. ## Nearby areas — 4–6 city links

City FAQ bank: Do you have an office in [City]? · What areas of [City] do you serve? · How much does it cost to paint a house in [City]? · Do you work with [City] HOAs? · How soon can you start a job in [City]? · Are you insured for work in [City], Texas? · Can I see reviews from [City] customers? · Do you offer free estimates in [City]?

### Guide page skeleton (cost guides, best time to paint, how to hire)

1. Quick Answer with the number or the decision
2. ## Short answer — 3 bullets
3. Body H2s specific to the topic
4. ## Frequently asked questions — 8–12
5. ## Get a Houston estimate — CTA

Author line on every guide: By Juan Serra, owner, Houston Superior Painting. Updated [Month 2026]. Author Person schema with jobTitle: Owner and worksFor the Organization.

## Schema rules

- One FAQPage block per page, Q&A copied word-for-word from the visible FAQ. 8–12 items.
- LocalBusiness only on the 5 office city pages; address/phone/hours match that GBP character for character. Everything else: Organization only.
- No aggregateRating unless pulled live from that location's GBP.

## Internal linking map

| From | Must link to |
|---|---|
| Home | 6 service pages, 5 office city pages, cost guide, about, estimate |
| Each service page | Its cost guide, 6 city pages, 2 sibling services, hire guide, estimate |
| Each of the 5 office city pages | 6 service pages, 4 nearby city pages, cost guide, 1 project in that city, estimate |
| Each of the 18 no-office city pages | 6 service pages, nearest office city page, cost guide, estimate |
| Cost guide | 3 sub-cost guides, 4 service pages, financing, hire guide, estimate |
| Each sub-cost guide | Its service page, main cost guide, 3 city pages, estimate |
| Hire guide | Estimate guide, warranty, about, cost guide, 3 service pages |
| Every blog post | 1 service page, 1 cost guide, 1 city page in body text; author link to about |
| Every project page | Its service page, its city page, projects hub, estimate |
| Footer (sitewide) | Locations list (5 offices), 6 services, cost guide, about, contact, warranty, financing |
| About | 5 office city pages, projects, warranty, estimate |

Anchor text: use the target's keyword, not "click here". Vary it.

Orphans: /painting-estimate-houston in the header CTA; /painting-houston 301 → /painters-houston-tx; /houston-superior-painting-vs-certapro linked from the hire guide; /blog/painters-near-me-katy-tx linked from /painters-katy-tx.

## What not to do

- Don't move URLs to /locations/* or /services/*.
- Don't build more city × service pages.
- Don't put aggregateRating in schema unless pulled from the live GBP.
- Don't print "4.9 / 200+ reviews" on city pages other than Houston (that number belongs to the Houston profile). Use "See reviews on Google".
- Don't keep LocalBusiness schema with the Cypress address on every page.
- Don't write "licensed painter" anywhere. Texas has no license; say "insured."
- Don't claim "#1 in Houston" or "best painters in Houston" in your own voice.
- Don't leave the garage epoxy posts on this domain.
- Don't let the cost guide and sub-guides disagree on a single number (single source: PRICES_2026 in lib/business.ts).

## Manual (off-site) items — not in the code

GBP descriptions + landing URLs (Oct 26), GBP photos/posts/Q&As (Oct 27), Yelp/Apple/Bing NAP (Oct 28), baseline prompt test (Oct 29), Search Console coverage + sitemap resubmit (Oct 2, Oct 30), monthly test prompts.

## Implementation status (code shipped Sep 26, 2026)

Payment policy (confirmed by Juan): free estimate, nothing collected until the customer approves the written estimate, then a down payment; balance after final walkthrough.

Done in code: everything in the Sep 28 – Oct 23 calendar (redirects, canonical fix, About, Organization + 5 office LocalBusiness schema, cost-figure alignment, Quick Answers, llms.txt, robots, og:image on all pages, short titles, "2024" title, 8 cannibal 301s, Drafts 1–3, 4 service pages, 5 office city pages, /faq hub, 5-office contact + footer Locations, estimate page in header CTA, internal-linking map). The retired "JJ Semo" persona is replaced by Juan Serra sitewide.

Still needed from Juan (search the code for `TODO(juan)` / `TODO(gbp)`):
- No photo of Juan on the site (his choice). The AI-generated jj-semo.jpg was removed from the repo.
- Each office's GBP share link → BUSINESS.locations[].mapsUrl (hasMap + "See reviews on Google"). Until then a Maps search for the exact address is used.
- Lat/long for the Sugar Land and Magnolia offices from their GBP pins.
- 2–3 real jobs with photos for Katy, Sugar Land, Magnolia in lib/projects.ts (neighborhood "X, City") — the "Recent [City] projects" section renders automatically.
- Testimonials on the no-office city pages and project pages are hidden until they can be matched to real Google reviews.
- Confirm copy commitments: "COI comes with every estimate", drywall "if you can find the patch, we redo it".
