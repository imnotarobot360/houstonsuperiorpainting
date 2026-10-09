# SEO / AEO implementation report — Oct 8, 2026

Scope: the full local-SEO and AI-answer visibility brief. Built on the work already shipped this week
(`docs/local-seo-audit-2026-10.md`, `docs/aeo-geo-implementation-report-2026-10.md`) rather than redoing it.
No rankings or AI recommendations are promised. Owner decisions taken today: **keep the 5-year warranty**
(the brief's "one-year" was rejected by Juan), **keep the current booking scheduler**, **create the remodeling page**.

## 1. Architecture (Phase 1)

Next.js 16 App Router, React 19, TypeScript, pnpm, Vercel (push to `main` = production). Pages are TSX files
under `app/`; there is no CMS. Business facts: `lib/business.ts`. Case studies: `lib/projects.ts`. Sitemap:
`app/sitemap.ts` (auto-excludes redirect sources and non-self-canonical pages; per-page `lastmod` from
`lib/content-dates.json`, generated from git by `scripts/generate-content-dates.mjs`). Robots: `app/robots.ts`.
Schema: `components/structured-data.tsx`. Templates: `components/aeo/*`, `components/geo-service-page-template.tsx`,
`components/location-page-template.tsx`. Forms: `/painting-estimate-houston`, `/contact`, estimate funnels
(`lib/quote-submit.ts`), scheduler widget (`BUSINESS.scheduler`). Lint: no ESLint installed (`pnpm lint` cannot run);
checks used: `npx tsc --noEmit -p .`, `pnpm build`, custom crawl/schema/FAQ audits.

## 2. What changed today

| Area | Change | Files |
|---|---|---|
| Anchor article | New `/houston-painting-contractor-guide` (3,100 words): direct answer, Houston climate, estimates, interior/exterior/cabinet prep, primers, compatibility, schedule, price factors, insurance, warranties, red flags, change orders, final inspection, **Houston Superior Painting 10-Point Preparation Standard** (stated as our internal process, not a certification), 5-year warranty, 8 FAQs, sources (EPA RRP, OSHA, NWS climate normals, Sherwin-Williams, Benjamin Moore), author box | `app/houston-painting-contractor-guide/page.tsx` |
| Consolidation | `/questions-to-ask-before-hiring-painters` absorbed into the guide and 301'd; 3 older redirects repointed straight to the guide (no chains); 14 internal links repointed | `next.config.mjs`, 14 page files |
| New service | `/residential-remodeling-houston-tx` (scope only from services already offered; no prices; quoted on site) — added to `BUSINESS.services`, linked from wall-removal and drywall pages | `app/residential-remodeling-houston-tx/page.tsx`, `lib/business.ts` |
| Service upgrades | Wood rot page: "When rotten wood should be replaced before exterior painting"; related real projects on limewash, pressure-washing, soft-washing pages; wall-removal page estimate CTAs → estimate page | 5 page files |
| Case-study system | 10 optional fields (property type, existing condition, preparation, repairs, colors, scope, timeline, challenges, date completed, related areas) rendered only when filled; template + privacy rules + data-request checklist | `lib/projects.ts`, `app/projects/[slug]/page.tsx`, `docs/case-study-template.md` |
| Press kit (not distributed) | Release, pitch, boilerplate, quote options, distribution checklist, publication categories — 10-point list identical to the guide | `docs/press/*` |
| Measurement | 210 unique non-branded prompts (7 cities × 6 services × 5 intents), catalog, results JSON Schema, report script (mention/citation/recommendation/first-position/share-of-voice/accuracy, by city/service/platform/intent, branded vs non-branded, vs baseline), API runner (dry-run default; `--confirm` + `--limit` required; >50 needs `--i-understand-cost`), measurement plan | `data/aeo/*`, `scripts/aeo/*`, `docs/aeo/*` |
| Hub links | Footer "Service Areas" now links `/service-areas` (no page linked the hub before); homepage Insights card → the guide | `components/footer.tsx`, `components/luxury/sections.tsx` |
| llms.txt | Rewritten: points to guide, services (incl. remodeling, wood rot), service areas, real projects, warranty; office list removed pending verification (HQ only) | `public/llms.txt` |
| Owner facts | Every unverified claim and conflict documented | `OWNER_VERIFICATION_REQUIRED.md` |

## 3. Redirect map (all 301/308, one hop)

| Source | Destination | Date |
|---|---|---|
| /questions-to-ask-before-hiring-painters | /houston-painting-contractor-guide | Oct 8 |
| /blog/how-to-choose-best-painters-houston | /houston-painting-contractor-guide (was → questions page) | Oct 8 |
| /blog/licensed-vs-unlicensed-painters | /houston-painting-contractor-guide (was → questions page) | Oct 8 |
| /blog/best-painters-houston-tx | /houston-painting-contractor-guide (was → questions page) | Oct 8 |
| /interior-, /exterior-, /cabinet-refinishing-tanglewood | matching Houston service hubs | Oct 8 |
| /luxury-interior-painting-memorial | /interior-painting-memorial | Oct 8 |
| 12 local duplicates (7 limewash zones, Katy extras, near-me) | stronger pages | Oct 7 |
| 16 duplicate blog posts | winners / service pages / epoxy site | Oct 5–7 |

Full list with comments: `next.config.mjs` `redirects()`. No traffic/backlink data was available (Search Console not
connected); every redirected page had a stronger same-intent page, and content was merged before redirecting.

## 4. City and service-area decisions (Phase 5)

No new city/service combinations were created. All 7 brief cities already have a hub (`/painters-{city}-tx`);
each now shows a real project (own city or a clearly labelled nearby one). Decisions:

| Page(s) | Decision | Why |
|---|---|---|
| Houston, Cypress, Richmond, Fulshear, Pearland, Magnolia, Heights, Memorial, River Oaks, Bellaire hubs | Keep and improve | Real local projects with original photos |
| Katy, Sugar Land, Tomball, Woodlands, Cinco Ranch, Rosenberg, Cypress Creek, Champions Forest hubs | Keep; nearby project shown | No own project yet — rewrite when Juan supplies one |
| Interior/exterior/cabinet × Cypress-Bridgeland, Katy-Cinco Ranch, Sugar Land, Memorial, Heights, Bellaire-WU; interior/exterior × Richmond, Fulshear, Woodlands | Keep; monitor | Have real or nearby projects; 67–74% text overlap remains — next candidates for consolidation if Search Console shows no impressions after 60 days |
| Tanglewood ×3, luxury Memorial, 7 limewash zones, Katy extras | Redirected | Duplicate intent, no local proof |

## 5. Validation (local production build, Oct 8)

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | 0 errors |
| `pnpm build` | passes |
| `pnpm lint` | not available (ESLint not installed) |
| Crawl of 182 routes | 0 non-200 sitemap URLs; one H1 everywhere; no duplicate titles/descriptions; all canonicals self-referencing |
| JSON-LD | all blocks parse; LocalBusiness only on 5 office pages (pending verification); no rating/review schema |
| FAQ schema vs visible text | 777/777 answers present in the HTML |
| Internal links to redirect sources | 0; redirect chains: 0 |
| Images | every `<img>` has alt; site photos via next/image (sizing, AVIF/WebP, lazy) |
| robots.txt | allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot (verified live: all 200, no X-Robots-Tag). Training crawlers (GPTBot, ClaudeBot, Google-Extended) left allowed as before — no policy change |
| Host/protocol | http→https and www→apex 1 hop each (http+www 2 hops); trailing slash 308 → no slash; UTM URLs canonicalise to the clean URL |
| Mobile | guide renders without horizontal scroll; sticky Call / Text / Free Quote bar intact |
| Dates | no future publication dates |

## 6. Not published, and why

- Drywall-repair cost, wallpaper-removal cost and cabinet cure-time articles — need Juan's prices/timelines (briefs in `docs/aeo-geo-implementation-report-2026-10.md` §7).
- Garage-epoxy post — prices conflict with houstonsuperiorepoxy.com.
- Press release — drafts only; needs Juan's quote approval and the guide live first.
- AI baseline results — no API keys in the environment; runner is ready (dry-run proven), nothing fabricated.

## 7. Remaining risks

- Unverified sitewide claims (offices, 4.9/200+, 500+, bonded, "Preferred Application Partner") — see `OWNER_VERIFICATION_REQUIRED.md`. The office question also blocks Google Business Profile work.
- Benjamin Moore Stix page shows "currently unavailable" — swap the citation if it stays down.
- `/warranty` (7 business days) and `/blog/paint-warranty-texas` (5) disagree on claim response time.
- Runner API request shapes were taken from provider docs but never called — expect to adjust on the first real run.

## 8. Deployment and submission

1. Commit and push (see chat for the exact PowerShell line), then refresh `lib/content-dates.json` and push again.
2. Google Search Console: submit `https://houstonsuperiorpainting.com/sitemap.xml`; URL-inspect and request indexing for `/houston-painting-contractor-guide` and `/residential-remodeling-houston-tx`; check Enhancements → FAQ/Breadcrumbs for errors after recrawl.
3. Bing Webmaster Tools: submit the same sitemap (Bing feeds Copilot and ChatGPT search); use URL Submission / IndexNow for the two new URLs.

## 9. Measurement schedule

Baseline **before** pushing if possible (otherwise immediately after): run `node scripts/aeo/run.mjs` (dry-run) to
see the plan, then with keys set, `--confirm --limit 50 --samples 3` per platform, or run the prompts manually from a
logged-out Houston session and log rows per `data/aeo/results-schema.json`. Then day 7 (indexing check only),
day 30, day 60, day 90, monthly — details in `docs/aeo/measurement-plan.md`. Report: `node scripts/aeo/report.mjs`.
AI answers vary by model, account, personalization, location, date, wording and browsing; treat every result as a
dated sample, never a ranking.
