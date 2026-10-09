# Houston Superior Painting website: notes for Claude Code

Next.js 16 (App Router) + React 19 + Tailwind 4 + TypeScript, pnpm. Owner: **Juan Serra**.
Live at https://houstonsuperiorpainting.com. Hosted on Vercel, project **v0-calendly-integration**.
Every push to `main` on GitHub (`imnotarobot360/houstonsuperiorpainting`) deploys to production automatically.
v0 also opens PRs against this repo, so run `git pull` before starting work.

## Commands
- `pnpm install`
- `pnpm dev`: local site at http://localhost:3000
- `npx tsc --noEmit -p .`: type check (the build ignores TS errors, so run this yourself)
- `pnpm build`: must pass before pushing
- Deploy: `git push origin main`

## Single sources of truth (never hardcode these elsewhere)
- `lib/business.ts`
  - `BUSINESS`: name, phone (346) 594-5960, email, hours, founder, `locations` (5 offices with `pageSlug`), `trust`, `paymentPolicy`, `officialSiteDisclaimer`
  - `PRICES_2026`: price ranges used on the cost guide, service pages and office pages
  - `OFFICE_PAGES`, `CORE_SERVICES` (6 services), `SERVICE_AREAS` (23 city pages)
- `components/structured-data.tsx`: sitewide Organization + WebSite + Person (Juan Serra), injected by the root layout. Also `officeLocalBusinessSchema()`, `generateLocationBusinessSchema()`, `ORG_ID`, `OWNER_ID`, `AUTHOR_REF`.
- `next.config.mjs` `redirects()`: all 301s. The sitemap (`app/sitemap.ts`) automatically excludes redirect sources.
- `docs/aeo-seo-plan-2026-09.md`: the SEO/AEO plan and its status.

## Page templates
- Service pages (interior, exterior, cabinets, drywall): `components/aeo/service-skeleton.tsx`
- The 5 office city pages (Cypress HQ, Houston, Katy, Sugar Land, Magnolia): `components/aeo/office-city-page.tsx`
- The 18 other city pages: `components/location-page-template.tsx`
- Blog posts: `components/blog-post-template.tsx` (BlogPosting + FAQPage schema, author = Juan Serra). Add every new post to `app/blog/page.tsx`.
- Shared blocks (QuickAnswer, PriceTable, CtaBlock, OfficeNap, AuthorByline): `components/aeo/blocks.tsx`
- FAQ: `components/faq.tsx`. Answers must be plain strings so the FAQPage schema matches the visible text. One FAQPage per page.

## Business rules (do not break)
- Owner is **Juan Serra**, founded 2019, headquartered in Cypress. Never "JJ Semo". No owner photo on the site, by Juan's choice.
- Never say "licensed". Texas doesn't license painters. Say "insured: $2M general liability + workers' comp".
- Payment: badge text is **"No Upfront Payment"**. Policy: free estimate; nothing is due until the customer approves the written estimate; then a down payment; balance after the final walkthrough. Don't state a deposit percentage.
- 5-year workmanship warranty.
- LocalBusiness schema only on the 5 office pages. No aggregateRating / review-star schema anywhere.
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
- The "4.9 / 200+ Google reviews" claim is not verified per Google Business Profile. It is shown on the homepage, service pages, the Houston page and some posts.
- Google Business Profiles: confirm Magnolia's hours, add each listing's share link to `BUSINESS.locations[].mapsUrl`, and point each listing's website field to its `/painters-{city}-tx` page.
- Add real Katy, Sugar Land and Magnolia projects to `lib/projects.ts`. The office pages show them automatically.
- Testimonials on the 18 non-office city pages and on project pages are hidden until they can be matched to real Google reviews.
- The named reviews on the interior funnel (`components/interior/interior-proof.tsx`, `components/testimonials.tsx`, e.g. Sarah Mitchell, Catherine R. in `lib/projects.ts`) are real Google reviews, confirmed by Juan 2026-10-01. Leave them.
- Anchor guide: `/houston-painting-contractor-guide` (owns "how to choose a painter"; includes the "Houston Superior Painting 10-Point Preparation Standard" — our internal process, never call it a certification). Keep `docs/press/` 10-point list identical to it.
- AI-visibility measurement: `data/aeo/` (210 prompts, results schema), `scripts/aeo/run.mjs` (dry-run by default) and `report.mjs`; plan in `docs/aeo/measurement-plan.md`. Unverified facts: `OWNER_VERIFICATION_REQUIRED.md`.
