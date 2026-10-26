# Pre-fix content audit (2026-10-25)

Branch `fix/site-trust-seo-consistency`, cut from `main` at `ce2cb5c`. Written **before** any edit in
this task. The line-by-line findings are in
[`pre-fix-content-audit.findings.md`](pre-fix-content-audit.findings.md), produced by
`node scripts/audit-content-consistency.mjs --all --report docs/pre-fix-content-audit.findings.md`.

## Repository inventory

| Area | What exists |
|---|---|
| Framework | Next.js 16 App Router, React 19, TypeScript, Tailwind 4, pnpm. Deploys on push to `main` (Vercel project `v0-calendly-integration`). |
| Routes | 302 `page.tsx` routes; 182 under `/blog`. **23 page files are dead code**: their route is a 301 source in `next.config.mjs`, so they are never served (list below). |
| Central data | `lib/business.ts` (`BUSINESS`, `PRICES_2026`, services, `SERVICE_AREAS`, `OFFICE_PAGES`), `lib/locations.ts` (office-page copy), `lib/projects.ts` (36 case studies), `data/review-profiles.ts` (5 Google Business Profiles with rating, count, check date, verification), `data/reviews.ts` (quotable reviews, `publish` flag), `lib/blog-schedule.ts`. |
| Structured data | `components/structured-data.tsx`: sitewide Organization + WebSite + Person; `officeLocalBusinessSchema()` on the 5 office pages; `generateServiceSchema()` on 4 service pages; no AggregateRating. |
| Redirects | `next.config.mjs` `redirects()`; `app/sitemap.ts` excludes redirect sources. |
| Guards | `scripts/verify-site.mjs` (crawl + trust rules), `tests/*.test.mjs` (blog calendar, catalog). No ESLint config (the `lint` script fails: ESLint 10 needs `eslint.config.*`). |

## Findings by rule (live, served pages only; code comments excluded)

| Rule | Findings | Notes |
|---|---|---|
| owner-name (JJ / JJ Semo) | 0 | Already clean in source; `OWNER_VERIFICATION_REQUIRED.md` records the 2026-10-08 check. |
| net-domain | 0 | No `.net` links in source. |
| other-phone | 0 | Only (346) 594-5960. |
| payment-promise | 0 in copy | Old "no upfront" wording was already removed on 2026-10-11; remaining hits are comments. |
| state-license | 0 in copy | "Licensed" appears only in explanations that Texas has no painter license, and for licensed engineers/trades. |
| bonded | 22 | "Bonded" claims on service, funnel, landing and trust components. **Not documented** in the repo (owner verbal, 2026-10-08). |
| workers-comp | 93 | "Workers' comp" claims across ~70 files (city pages, blog posts, trust components). **Not documented.** |
| policy-limit ($2M) | 72 | "$2M general liability" across ~60 files, from `BUSINESS.trust.liabilityCoverage` and literals. **Not documented.** |
| customer-count (500+) | 26 | "500+ projects / homeowners" in trust bar, badges, landing pages. **Not documented.** |
| review-count / hardcoded-rating | 3 + rating literals | "4.9" big-number widgets in `google-reviews.tsx`, `project-map.tsx`, `testimonials.tsx`; per-office ratings shown without check dates. |
| superlative | 33 | "flawless", "best painters", "top-rated", "leading contractor" in copy and quotes. |
| partner-claim | 2 | "Preferred Application Partner" (`components/luxury/sections.tsx`, local-vs-franchise guide). **No manufacturer authorization in the repo.** |
| warranty-term | 5 | "Transferable" warranty on `/warranty`, the warranty blog and llms text; "15-year durability" on an epoxy card in `components/services.tsx`. |
| epoxy-warranty | 1 | `/warranty` refers epoxy warranties to the sister brand (acceptable wording; to be aligned). |
| office-claim | 27 | "Our Katy/Magnolia/Houston office", "serving Greater Houston from five offices". See locations below. |

## Facts that conflict with the 2026-10-25 brief

These were recorded as owner-confirmed (verbally) in `OWNER_VERIFICATION_REQUIRED.md` / `CLAUDE.md`, but the brief
allows them only with **current documentation in the repository**, and none is stored:

- $2M general liability, workers' compensation, bonded (2026-10-08)
- 500+ projects completed (2026-10-08)
- 4.9 rating / 200+ reviews (2026-10-08; per-profile data in `data/review-profiles.ts` shows the 4.9/130 is the Katy profile only)
- "Preferred Application Partner" authorization (2026-10-08)
- Transferable warranty (2026-10-10)
- All five locations described as offices (2026-10-08)

## Locations

| Location | Address on file | Concern |
|---|---|---|
| Cypress (HQ) | 14150 Huffmeister Rd, Suite 410 | Primary business address. Staffing/visit hours not documented. |
| Houston | 2617 Bissonnet St #443 | Suite number format typical of a mailbox; staffing not documented. |
| Katy | 3230 FM 1463 **APT 3201** | Apartment unit; not a customer-facing office unless confirmed. |
| Sugar Land | 18722 University Blvd, Suite 254, 2nd Floor | Staffing not documented. |
| Magnolia | 14512 Cottontop Mtn | Residential street; staffing not documented. |

All five emit `LocalBusiness` schema and are called "office" in copy and schema.

## Pricing

- Central source exists (`PRICES_2026`), and nearly all copy reads from it.
- Conflicts with the brief: single room `$300–$800` (brief: `$350–$900`); a flat exterior rate `$1.50–$4 per sq ft of floor area` used on ~25 pages as a universal formula; Service schema price ranges that are not in the price file (`/interior-painting-houston-tx` schema: $150–$14,000).
- Figures are labeled "2026 Houston range" in places, which can read as independent market rates.

## Reviews and testimonials

- 5 Google Business Profiles with per-profile rating/count and `lastVerified: 2026-10-10`; displayed in `components/office-reviews.tsx` without the check date.
- `components/testimonials.tsx` and `components/interior/interior-proof.tsx` show named quotes (Sarah Mitchell, Emily Chen, Michael Thompson and others) without review URLs; `CLAUDE.md` records two of them as owner-confirmed Google reviews.
- No AggregateRating/Review schema (correct).

## Domain

- `houstonsuperiorpainting.net` and `www.` are in the same Vercel account (Vercel nameservers) and already return **308 permanent redirects path-for-path, preserving query strings**, to `.com` (checked live 2026-10-25).

## Dead page files (route is a 301 source; never served)

`/blog/best-time-to-paint-houston-home-exterior`, `/blog/exterior-painting-cost-houston-tx-2026`, `/blog/garage-epoxy-coating-houston-tx`,
`/blog/garage-epoxy-flooring-houston-tx`, `/blog/house-painting-cost-houston-2026`, `/blog/houston-paint-color-trends-2026`,
`/blog/how-to-choose-best-painters-houston`, `/blog/interior-painting-cost-houston-tx`, `/blog/licensed-vs-unlicensed-painters`,
`/blog/paint-color-trends-houston-homes-2026`, `/blog/paint-colors-houston-homes-2026`, `/blog/sherwin-williams-vs-benjamin-moore-texas-heat`,
`/cabinet-painting-houston-tx`, `/cabinet-refinishing-houston`, `/commercial-painting-houston`, `/drywall-repair-houston`, `/epoxy`,
`/exterior-painting-houston`, `/garage-epoxy-houston-tx`, `/house-painters-cypress-tx`, `/interior-painting-houston`,
`/painters-in-houston-tx`, `/painting-houston`.

They contain many of the outdated claims but cannot be seen. The audit skips them; deleting them is an owner decision.

## Houston page (`/painters-houston-tx`) before this task

No "JJ", no "200+ reviews", no payment promise (those were removed in earlier passes). Remaining problems: "$2M general
liability and workers' comp" (twice), "Our Houston office" and "Other offices" wording, product claims per surface
(Aura, Duration, Emerald) not tied to the owner-confirmed product list, crew-size/timeline specifics, a single-office
NAP block presented as an office, H1 different from the brief.
