# Houston Superior Painting website: notes for Claude Code

Next.js 16 (App Router) + React 19 + Tailwind 4 + TypeScript, pnpm. Owner: **Juan Serra**.
Live at https://houstonsuperiorpainting.com. Hosted on Vercel, project **v0-calendly-integration**.
Every push to `main` on GitHub (`imnotarobot360/houstonsuperiorpainting`) deploys to production automatically.
v0 also opens PRs against this repo, so run `git pull` before starting work.

## Commands
- `pnpm install`
- `pnpm dev`: local site at http://localhost:3000
- `npx tsc --noEmit -p .`: type check (the build ignores TS errors, so run this yourself)
- `pnpm test`: unit tests, including the content-consistency audit (`scripts/audit-content-consistency.mjs`, also `pnpm audit:content`; CI: `.github/workflows/content-consistency.yml`). Exceptions only in `scripts/content-audit-allowlist.json`, each with a reason.
- `pnpm lint`: ESLint (`eslint.config.mjs`, Next.js core-web-vitals + TypeScript); must have 0 errors
- `pnpm build`: must pass before pushing
- Deploy: `git push origin main`

## Single sources of truth (never hardcode these elsewhere)
- `lib/business.ts`
  - `BUSINESS`: name, phone (346) 594-5960, email, hours, founder, `locations` (5 locations with `pageSlug` and `locationType`), `trust`, `paymentPolicy`, `insurance`, `warranty`, `sisterBrand`, `officialSiteDisclaimer`
  - `lib/pricing.ts` (re-exported by business.ts): `PRICES_2026`, `RATES`, `interiorBudgetFor()`, `PRICING_DISCLAIMER`. Every price on the site comes from here. Change log: `docs/pricing-changes.md`.
  - `OFFICE_PAGES`, `CORE_SERVICES` (6 services), `SERVICE_AREAS` (23 city pages)
- `components/structured-data.tsx`: sitewide Organization + WebSite + Person (Juan Serra), injected by the root layout. Also `officeLocalBusinessSchema()`, `generateLocationBusinessSchema()`, `ORG_ID`, `OWNER_ID`, `AUTHOR_REF`.
- `next.config.mjs` `redirects()`: all 301s. The sitemap (`app/sitemap.ts`) automatically excludes redirect sources.
- `docs/aeo-seo-plan-2026-09.md`: the SEO/AEO plan and its status.

## Page templates
- Service pages (interior, exterior, cabinets, drywall): `components/aeo/service-skeleton.tsx`
- The 5 location city pages (Cypress HQ, Houston, Katy, Sugar Land, Magnolia): `components/aeo/office-city-page.tsx`
- The 18 other city pages: `components/location-page-template.tsx`
- Blog posts: `components/blog-post-template.tsx` (BlogPosting + FAQPage schema, author = Juan Serra). Add every new post to `app/blog/page.tsx`.
- Shared blocks (QuickAnswer, PriceTable, CtaBlock, OfficeNap, AuthorByline): `components/aeo/blocks.tsx`
- FAQ: `components/faq.tsx`. Answers must be plain strings so the FAQPage schema matches the visible text. One FAQPage per page.

## Business rules (do not break)
- Owner is **Juan Serra**, founded 2019, headquartered in Cypress. Never "JJ Semo". No owner photo on the site, by Juan's choice.
- Never say "licensed". Texas doesn't license painters (`BUSINESS.insurance.licenseNote`). Insurance wording is `BUSINESS.insurance.sentence` only (owner brief 2026-10-25). Never publish policy limits ($2M), workers' comp, bonding or specialty coverage unless current documents are on file and the owner approves; this supersedes the earlier verbal "$2M + workers' comp" wording.
- Payment (owner, 2026-10-11): never say "No Upfront Payment", "no deposit", "nothing due until you approve", "no money until you approve" or "pay only when completed". Use (owner, 2026-10-15): "Your written estimate identifies the complete scope, total price, required deposit and payment schedule before you approve the project." Badge: **"Clear Written Payment Terms"**, subtitle "Written scope, price, deposit and payment schedule provided before project approval." Estimate CTA: "Request a free written estimate. Your proposal will explain the scope, products, price, deposit and payment schedule before you decide." Never publish a fixed schedule (e.g. 40/40/20): schedules are project-specific (all in `BUSINESS.paymentPolicy`). Don't publish a deposit percentage or a 40/40/20-style schedule unless approved for that page. `scripts/verify-site.mjs` fails on the old phrases.
- Warranty: `BUSINESS.warranty` (five-year written workmanship warranty on qualifying painting projects, subject to the signed terms). Never "guarantee", "transferable", "lifetime", or coverage of materials, fading, moisture, substrate failure or wood repairs unless the signed warranty document confirms it. `/warranty` shows `controlsNote`.
- Houston Superior Epoxy is a separate sister brand: only `BUSINESS.sisterBrand.sentence` and a link. Never its warranty, prices, phone or services on this site.
- Prices: "Houston Superior Painting budgeting guidance" with the review date; interior per sq ft is per sq ft of FLOOR area; exterior has no per-square-foot rate (project-specific).
- No customer/project counts ("500+"), no aggregate review counts or ratings. Reviews link to each Google profile (`components/office-reviews.tsx`, `SHOW_RATING_NUMBERS = false` until figures can be checked programmatically).
- Locations: only `isVerifiedOffice()` locations may be called an office, print a street address (except HQ) or get LocalBusiness schema; others use `servingLine()` ("Serving Katy and surrounding communities"). No aggregateRating / review-star schema anywhere.
- Don't use `/locations/*` URLs. They 301 to `/painters-{city}-tx`. Keep the existing URLs.
- No "#1" or "best painters in Houston" in our own voice. No invented projects, reviews or stats. Real projects live in `lib/projects.ts`.
- Internal links go to canonical URLs, never to a redirect source. Use the estimate CTA `/painting-estimate-houston`, not `/contact`.
- Blog posts live under `/blog/<slug>`.
- Brands we use: Sherwin-Williams, Benjamin Moore, Farrow & Ball (`BUSINESS.paintPartners`). Never "preferred contractor/partner".
- Specialty finishes we offer are in `BUSINESS.specialtyFinishes` (Venetian plaster, Roman Clay, limewash, faux, metallic, lacquer, grasscloth). No published price: "priced after an on-site look".
- NOT BBB accredited (bbb.org, checked 2026-10-07). Never claim EPA RRP certification, bonding, financing, family-owned or bilingual crews unless Juan confirms and it is added to `lib/business.ts`.
- Local proof: only cite projects in `LOCAL_PROOF_PROJECTS` (`lib/projects.ts`); entries with `photosNeedReview` have unconfirmed photos. Never print local job counts ("35 projects in Bellaire") or unverified testimonials on city pages.
- Pending owner decisions from the Oct 2026 local SEO audit (office eligibility, consolidation 301s, trust stats): `docs/local-seo-audit-2026-10.md`.

## Open items (Juan)
- Locations: Juan confirmed all 5 as staffed offices (2026-10-25), `locationType: "staffed_office"`. If one closes, switch it to "service_area" and the site, schema and audit follow.
- Google Business Profiles: confirm Magnolia's hours, add each listing's share link to `BUSINESS.locations[].mapsUrl`, and point each listing's website field to its `/painters-{city}-tx` page.
- Add real Katy, Sugar Land and Magnolia projects to `lib/projects.ts`. The office pages show them automatically.
- Testimonials on the 18 non-office city pages and on project pages are hidden until they can be matched to real Google reviews.
- The named reviews on the interior funnel (`components/interior/interior-proof.tsx`, e.g. Sarah Mitchell, Catherine R. in `lib/projects.ts`) were confirmed real by Juan 2026-10-01. No Google source URL is on file, so they are labeled "Customer testimonial" and show no stars. Add the Google URL to `data/reviews.ts` when known.
- Anchor guide: `/houston-painting-contractor-guide` (owns "how to choose a painter"; includes the "Houston Superior Painting 10-Point Preparation Standard" — our internal process, never call it a certification). Keep `docs/press/` 10-point list identical to it.
- AI-visibility measurement: `data/aeo/` (210 prompts, results schema), `scripts/aeo/run.mjs` (dry-run by default) and `report.mjs`; plan in `docs/aeo/measurement-plan.md`. Unverified facts: `OWNER_VERIFICATION_REQUIRED.md`.
