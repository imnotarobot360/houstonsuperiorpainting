# AI-answer (AEO/GEO) + local SEO implementation report — Oct 8, 2026

Goal: give Houston Superior Painting the best *legitimate* chance to be mentioned and cited by ChatGPT,
Perplexity, Gemini, Claude, Grok, Google AI Overviews and classic search. No ranking promises, no fake
reviews, locations, awards or doorway pages. Companion files:
`docs/local-seo-audit-2026-10.md` (Oct 7 audit), `docs/local-seo-tracker-2026-10.csv` (per-city tracker),
`docs/aeo-prompt-baseline-2026-10.csv` (105 prompts, recording sheet).

## 1. Critical fixes (done Oct 8, local build verified — needs push)

| # | Issue | Impact | Fix |
|---|---|---|---|
| 1 | 225 of 797 FAQ answers in FAQPage schema were **not in the HTML** — the accordion only rendered an answer when clicked; 7 other pages had hand-written schema text that differed from the visible FAQ | Crawlers/AI saw questions without answers; Google treats schema that doesn't match visible content as invalid | `components/ui/accordion.tsx`: answers always in the HTML (hidden with CSS until opened). 7 pages now generate FAQ schema from the visible list. Re-check: **0 of 797 missing** |
| 2 | 32 neighborhood service pages showed a breadcrumb but had no BreadcrumbList schema | Weaker page-hierarchy signal | `components/geo-service-page-template.tsx` emits BreadcrumbList matching the visible trail (34/35 now) |
| 3 | Overlapping brick and estimate guides didn't link to each other | Topic signals split across pages | Hub/spoke links: limewash service ↔ painting-brick ↔ limewash-vs-German-smear; estimate guides → `/painting-estimate-houston` |

Already done earlier this week (live): unverified local claims removed from 78 pages; BBB "accredited"
corrected (not accredited); 16 duplicate/cannibal pages merged with 301s; 9 real case studies added with
privacy-safe photos; per-project sitemap dates; 13 owner-written posts published; prices unified in
`PRICES_2026`.

## 2. Technical audit (point 4) — passing

- robots.txt allows `*` plus explicit OAI-SearchBot, ChatGPT-User, GPTBot, Claude-SearchBot, ClaudeBot,
  Claude-User, PerplexityBot, Google-Extended, Bingbot; only `/api/` and `/admin/` disallowed.
- Live fetch as OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, bingbot, GPTBot, ChatGPT-User:
  all 200, no `X-Robots-Tag`.
- Sitemap: 155 URLs, all 200, all self-canonical, every URL has a real per-page `lastmod` (20 distinct dates).
- 160 live pages: one H1 each, no duplicate titles or descriptions, every JSON-LD block parses, every image
  has alt text. noindex only on the 4 paid-ad landers and the thank-you page (intended).
- `llms.txt` exists (left as is; not a ranking factor).
- Minor: 26 rendered titles are 61–69 chars (layout appends the brand). Cosmetic, left.

## 3. Structured data (point 6)

| Type | Where | Status |
|---|---|---|
| Organization (+founder Person, sameAs FB/IG/BBB/Maps, Epoxy as subOrganization by @id) | sitewide | OK |
| LocalBusiness/HousePainter | 5 office pages only | **Blocked on owner** — see 4.1; remove for any office that isn't a staffed location |
| Service | 31 neighborhood + 15 service pages | OK |
| BreadcrumbList | city, blog, project, neighborhood pages | OK after fix 2 |
| Article/BlogPosting | 46 posts + 14 projects | OK |
| FAQPage | 140 pages | OK after fix 1 (visible = schema) |
| AggregateRating / Review | none | Correct — no rating schema anywhere |

## 4. Content requiring owner verification (stop-and-ask list — nothing below was changed)

1. **Office locations (blocks LocalBusiness + GBP):** Katy `3230 FM 1463 APT 3201` (an apartment),
   Magnolia `14512 Cottontop Mtn` (looks residential), Houston `2617 Bissonnet St #443` (suite #443 vs #405
   unresolved), Sugar Land suite. "Five offices" appears on **41 pages** (About, footer bio, contact). Google
   only allows a profile at a staffed location customers can visit. If any isn't, it becomes a service area.
2. **"4.9 rating / 200+ Google reviews"** — 12 pages (homepage, Houston page, estimate page, 2 service
   pages, ad landers). Which profile, and is it current?
3. **"500+ projects completed"** — **148 pages** (footer trust strip, About, Houston page).
4. **"Bonded"** — homepage FAQ, estimate page.
5. **Homepage "Preferred Application Partner"** badge — partner of whom? Remove if not a real program.
6. **"15 years combined crew experience"** — 5 pages.
7. Commercial page: "Trusted by Houston Property Managers" five-star badge; "background-checked crew".
8. Case-study photos for Bellaire stucco, Heights wallpaper, Cypress wood rot (look AI-generated) and the
   River Oaks house number in the photo.
9. Testimonials: none can be shown on city pages until matched to real reviews with permission.

## 5. City pages (point 7) and pages to improve, merge or remove (point 8)

All 23 city pages now have: neighborhoods served, services, prep and weather/housing notes, FAQ, service
links, and a real project (own city or a clearly labelled nearby one). Max text overlap with any other city
page: 6–50% (Pearland ↔ Richmond highest, 50%). **Missing everywhere:** a verified local testimonial.

Real local projects: Houston (Memorial, River Oaks, West University ×2, Heights ×2), Cypress ×2, Richmond ×2,
Fulshear. **No project yet:** Katy, Sugar Land, Magnolia (priority cities), Tomball, The Woodlands, Pearland.

**Proposed consolidation — needs your OK (301s change live URLs):**

| Page(s) | Problem | Proposal |
|---|---|---|
| interior/exterior/cabinet-refinishing-**tanglewood** | No local project, 67–74% same text as sibling pages | **DONE Oct 8** — 301 → `/interior-painting-houston-tx`, `/exterior-painting-houston-tx`, `/cabinet-refinishing-houston-tx` |
| interior/exterior-painting-**the-woodlands** | No project, thin | Keep until a Woodlands job is photographed, then rewrite; else 301 → `/painters-the-woodlands-tx` |
| luxury-interior-painting-memorial | Same intent as `/interior-painting-memorial` (which has the real project) | **DONE Oct 8** — 301 → `/interior-painting-memorial` |
| interior/exterior/cabinet **sugar-land** | Priority city, no project | Keep; show the Richmond project as "nearby" (as Katy shows Fulshear) — say yes and I'll wire it |

## 6. Case studies (point 9)

14 project pages exist; 9 use real job photos. They currently state only what photos show. To reach the
full case-study standard (problem, prep, products, process, timeline, challenges, result) I need, per job:
property type and size, what was wrong, prep done, exact products/colors, days on site, any surprises, and
before photos. Fill-in template per project: city · property · problem · prep · products · process ·
timeline · challenges · result · homeowner quote (with permission).

## 7. Editorial plan (point 10) — improve before adding

| Priority topic | Existing coverage | Action |
|---|---|---|
| Exterior painting cost in Houston | `/exterior-house-painting-houston-cost-guide` (+ Katy cost post) | Improve the guide: add the HardiePlank and painted-brick rows now in `PRICES_2026`; link the new color guides. No new URL |
| Drywall repair cost before painting | `/blog/drywall-repair-before-painting` (no prices), `/drywall-repair-houston-tx` | **Need owner prices** (patch, water damage, texture match). Then add a cost section to the blog post — no new URL |
| Cabinet painting timeline & cure time | **Gap** — no page | New post. **Need owner facts:** days on site, product, dry vs full cure, when cabinets can be used, hardware reinstall |
| Wallpaper removal + wall repair cost | `/wallpaper-removal-houston-tx` (no prices) | **Need owner prices** (per room / per sq ft, skim coat). Add to the service page — no new URL |
| Painted brick vs limewash vs German smear | `painting-brick-houston`, `limewash-vs-german-smear-houston`, limewash service page | Done: cross-linked as hub/spokes. Next: one shared comparison table on the limewash service page |
| How to compare painting estimates | `what-to-expect-painting-estimate`, `questions-to-ask-before-hiring-painters`, `/painting-estimate-houston` | Add a "compare two bids line by line" section to `what-to-expect…` — no new URL |

Content briefs (new post): **Cabinet painting timeline and cure time in Houston** — query: "how long does
cabinet painting take / cure". Answer first (days on site, days until normal use, full cure). Sections:
day-by-day schedule; dry vs cure; humidity effect; what you can/can't do during cure; why rushing reinstall
chips doors; FAQ. Proof: link the Cypress and West University cabinet projects. Needs owner timeline facts.

## 8. Digital PR plan (point 11) — legitimate mentions only

| Target | Why it can mention/cite us | Ask |
|---|---|---|
| Cypress Chamber, Katy Area Chamber, Fort Bend Chamber, Greater Houston Partnership | Real member listings are cited sources for "local business" answers | Join where you operate; complete profile with the site URL and the same NAP |
| HOA / MUD newsletters (Cinco Ranch, Cross Creek Ranch, Bridgeland, Riverstone) | Our HOA color-approval guides answer what residents ask | Offer the HOA guide as a resident resource (not an ad) |
| Community Impact (Cy-Fair, Katy, Sugar Land editions), Houston Chronicle home section, Houstonia | Local home-improvement stories cite contractors as sources | Pitch a data-backed story: "What Houston humidity does to exterior paint" with our project photos |
| Sherwin-Williams / Benjamin Moore local stores, Farrow & Ball stockist | Supplier "find a contractor" pages are authoritative | Ask your rep about contractor locator programs you actually qualify for |
| BBB (listing exists, not accredited), Nextdoor business, Yelp (verify ownership), Houzz | Commonly crawled by AI answer engines | Claim/complete profiles; identical NAP; link to the site |
| Habitat for Humanity / Rebuilding Together Houston | Real community projects earn real coverage | Volunteer a paint day; publish it as a project with photos |
| Avoid | Paid press-release wires, link farms, fake directories | — |

## 9. Google Business Profile + Bing Places (point 12)

Do this only for locations confirmed real and staffed (4.1). For each eligible location: identical name,
phone, address, hours to `lib/business.ts`; primary category "Painter"; services list = site services;
website = that city's `/painters-{city}-tx` page; add real job photos (the ones on the site); publish the
same profile in Bing Places (import from Google). Any location that is not staffed: remove the address,
set it as a service area under the HQ profile, and tell me so I remove its LocalBusiness schema and office
block from the site. Then add each profile's share link to `BUSINESS.locations[].mapsUrl`.

## 10. Baseline prompt results (points 1–3)

Prepared, **not yet run**: `docs/aeo-prompt-baseline-2026-10.csv` — 105 unbranded prompts
(5 cities × 7 services × 3 intents: recommendation, cost, selection) with the recording columns you asked
for (platform, date, location context, mentioned, cited, position, competitors, sources).

I can't produce honest results from here: ChatGPT, Gemini, Grok and AI Overviews personalise by account and
location, and automating their consumer apps would break their terms. Two legitimate ways to run it:
1. **Manual (most accurate):** run each prompt from a Houston location, logged out/incognito, on each platform,
   and fill the sheet (≈ 3–4 hours per platform). Start with 35 prompts (Houston + Katy) to keep it manageable.
2. **API-assisted:** with your own API keys for OpenAI (web search), Perplexity (Sonar), Gemini (grounding)
   and Anthropic (web search), I can write a script that runs all 105 and fills the sheet automatically.
   API answers approximate, but don't equal, the consumer apps.

## 11. Measurement plan

| When | Measure | Source |
|---|---|---|
| Day 0 | Baseline: 105 prompts × platforms (mentioned / cited / position / competitors) | baseline CSV |
| Day 0 | Search Console: impressions, clicks, top queries per city page; submit sitemap | GSC |
| Day 30 | Re-run Houston + Katy prompts; GSC delta on the 23 city pages and 14 projects; FAQ rich-result errors = 0 | CSV + GSC Enhancements |
| Day 60 | Full 105 re-run; leads/calls by city (form `city` + call tracking); GBP views/calls per verified location | CSV, analytics, GBP |
| Day 90 | Compare to baseline: share of prompts where we're mentioned/cited per city and service; decide next consolidation and content | report |

Record every AI result as a dated observation — answers change by prompt, location and day.

## Files changed Oct 8

`components/ui/accordion.tsx`, `components/geo-service-page-template.tsx`,
`app/{load-bearing-wall-removal,pressure-washing,soft-washing}-houston-tx/page.tsx`,
`app/blog/{cabinet-color-transformations-katy-sugar-land-tx,why-diy-cabinet-painting-fails-houston-tx,hoa-exterior-paint-rules-houston-suburbs,navy-kitchen-island-cabinet-color-houston-tx,limewash-vs-german-smear-houston,what-to-expect-painting-estimate}/page.tsx`,
`app/limewash-brick-painting-houston-tx/page.tsx`, `app/questions-to-ask-before-hiring-painters/page.tsx`,
`docs/aeo-prompt-baseline-2026-10.csv`, this report.
