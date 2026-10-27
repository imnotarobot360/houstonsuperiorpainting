# SEO / AEO / performance / accessibility correction: baseline and proposal

Date: 2026-10-27. Status: **proposal only. No site code has been changed or committed for this brief.**
Measured against production (https://houstonsuperiorpainting.com, deploy after commit for tap-to-load chat).

---

## 1. Baseline (Phase 1)

### Stack
- Next.js 16 App Router, React 19, TypeScript, pnpm 9, Node 24, Vercel. `proxy.ts` is the Next 16 middleware.
- One root layout (`app/layout.tsx`). Every page renders dynamically: `<PaintingSiteChrome>` reads request headers (epoxy-subdomain gate).
- Facts come from `lib/business.ts` (NAP, offices, hours, warranty, insurance) and `lib/pricing.ts`.
- `pnpm audit:content` / `pnpm test` (49 tests), `pnpm lint` (0 errors, 38 warnings), `tsc` clean, build clean.

### Lighthouse, homepage (median of 3 runs, Lighthouse 12.8.2, simulated throttling)

| | Mobile | Desktop |
|---|---|---|
| Performance | **62** (61/62/63) | **100** |
| Accessibility | 97 | 97 |
| FCP | 3.1 s | 0.4 s |
| LCP | **7.5 s** | 0.7 s |
| TBT | 240 ms | 0 ms |
| CLS | 0.000 | 0.000 |
| Speed Index | 5.1 s | 0.7 s |
| Transferred | 984 KB | 1,095 KB |
| JavaScript transferred | ~640 KB (incl. third party) | same |
| Unused JavaScript | ~170 KB (mostly gtag + Facebook) | ~150 KB |

- **LCP element (mobile):** the hero paragraph `p.quick-answer` ("Houston Superior Painting is a residential and commercial painting contractor…"). It is text, not an image.
- **Why it is late:** even with no throttling, first paint on the mobile run happens at ~2.4 s, *after* the load event. The main thread is busy from ~1.0 s to ~2.2 s with tasks attributed to the document itself: parsing the 417 KB HTML and its 84 inline scripts. The third-party scripts load after that.
- Desktop is already 100.

### Homepage HTML
- 417 KB of HTML: ~188 KB visible markup, **~216 KB React Server Components payload** (the same tree serialized again for hydration), 14 KB other inline script.
- 181 links: header 9, footer 56, main 111. Of main, **62 links sit in three area sections**: "One crew standard across Greater Houston" (29), "Our service areas" (8), "Popular services by area" (25).
- 29 `<img>` (26 lazy, LCP is text so no image needs priority), 111 inline SVG icons (54 KB), 84 `<script>` tags, 2 JSON-LD blocks.

### Third-party scripts

| Script | Loads | Notes |
|---|---|---|
| Google Analytics 4 (gtag `G-JHH1X8LD8E`) | `afterInteractive` | ~177 KB, ~100–160 ms main thread |
| Meta Pixel (`fbevents.js` + signals config) | `afterInteractive` | ~208 KB, ~140–200 ms main thread |
| OpenAI pixel (`oaiq.min.js`) | `beforeInteractive` | 29 KB |
| Vercel Analytics | after load | 2 KB |
| LeadConnector chat | **only on tap** (since today) | 0 KB until tapped |

### Chat widgets
- Exactly one: LeadConnector. It is now a tap-to-load button (58 px, bottom-right; 88 px from the bottom on mobile, above the Call / Text / Quote bar). It is hidden on `/painting-estimate-houston` and `/chatgpt/*`. No other chat or messaging widget is installed.

### Analytics and conversion events (all kept)
`generate_lead`, `estimate_form_submit/success/step`, `quick_estimate_start/submit/error`, `funnel_step_complete`, `phone_click`, `text_click`, `email_click`, `booking_click`, `appointment_click`, `appointment_booked`, `chat_start`, `estimate_cta_click`, `calculator_*`, `visualizer_*`, `color_visualizer_*`, `scroll_depth`, `exit_intent_shown`, Meta `PageView`, OpenAI pixel events, and first-touch attribution (UTM, gclid, oppref, external referrer).

### Other baseline facts
- Sitemap: **209 URLs**. Every page has exactly one H1. Canonicals, OG and Twitter metadata are in place (`verify-site` and `seo-crawl` pass).
- 14 meta descriptions are over 160 characters (list in §3).
- `.net`: `houstonsuperiorpainting.net` and `www.` return **308** to the exact `.com` path (checked on `/`, `/painters-katy-tx`, `/exterior-painting-houston-tx`, `/contact`).
- `/es` outputs `<html lang="en">`. The content sits in `<main lang="es">`. Hreflang is already reciprocal (en-us ↔ es-US, x-default → English home) on both pages.
- Schema: one `Organization` (with `subOrganization` references to the five offices) on every page; a `LocalBusiness`+`HousePainter` entity only on the office pages; **no AggregateRating or Review schema anywhere**. This already matches the Phase 9 requirements.
- Accessibility failures (homepage): **color-contrast, 6 nodes**. White text on the orange `bg-secondary` (#f37021, about 3.0:1) on the estimate CTA and the form submit button, plus gold `text-gold` (#c6a86a) kickers on light backgrounds.
- Forms: eight lead forms (`quick-estimate-form`, `estimate-funnel`, `budget-funnel-form`, `commercial-request-form`, `estimate-booking-flow`, `interior-estimator`, `visualizer-request-form`, epoxy quote form). **None of their fields have `name` attributes** and all submit only through `fetch`. The honeypot (`website`) is already `aria-hidden`, off-screen and `tabIndex={-1}`. SMS consent is optional and includes STOP language. Leads are stored first (`/api/leads`) and the office is emailed via Web3Forms from the browser. A cron pulls `/api/leads/unemailed` for any that missed email, so a no-JavaScript submission would still reach the office.

---

## 2. Findings that conflict with the brief or need Juan

1. **Preferred-contractor designation.** `lib/business.ts` currently says, from an earlier decision: *"These are products we apply, not partner programs: never say 'preferred contractor/partner'."* The content audit has a `partner-claim` rule that enforces it. The new brief says both brands formally granted the designation and asks for the *exact official wording from the supporting documents*. **I need those documents, or a photo of them, before writing any designation copy.** Until then I will not add or change designation wording. Note that the homepage logo alt text already says "preferred painting contractor".
2. **Deferring GA and the Meta Pixel (Phase 2, item 13).** Earlier today Juan chose to keep both loading immediately. This plan keeps that unless Juan reverses it. Consequence: **the LCP < 2.5 s and mobile ≥ 80 targets are probably not reachable** while they load at the same time as the page. The page-size work below should still help.
3. **Office hours.** The site shows Mon–Fri 7 AM – 7 PM, Sat 8 AM – 4 PM, Sun closed. All five Google profiles show "Open 24 hours". One of them is wrong; Juan needs to say which hours are real.
4. **Legacy Weebly site.** I could not find its URL. Juan needs to provide it.
5. **Farrow & Ball** is in `paintPartners` (Juan confirmed it 2026-10-07). The brief names only Sherwin-Williams and Benjamin Moore. Keep it or drop it?

---

## 3. Proposed changes (not applied)

### Phase 2: performance
| # | Change | Files |
|---|---|---|
| P1 | Consolidate the three homepage area sections (62 links) into **one** block: the five office cities, the main service hubs, and one "All service areas" link. Target: ~181 → ~110 links, and roughly −40 KB HTML and −40 KB RSC payload. | `components/luxury/sections.tsx`, `app/page.tsx` |
| P2 | Use one shared star SVG (`<symbol>` + `<use>`) instead of 5 inline stars per review card (section is 22 KB of SVG). | `components/luxury/sections.tsx` |
| P3 | Turn off preloading for the two display fonts that are not in the first screen (`Cormorant_Garamond`, `Playfair_Display` → `preload: false`); keep `display: swap`. Inter and Manrope stay preloaded. | `app/layout.tsx` |
| P4 | Audit homepage client components and convert purely presentational ones to server components (fewer hydration bytes). | homepage sections |
| P5 | Retest mobile and desktop after each of P1–P4 (3-run median). | — |

Already done today: right-sized logo and favicon, `sizes` on before/after images, tap-to-load chat. Images already use `next/image` (AVIF/WebP negotiation by Vercel) and lazy-load below the fold. The LCP is text, so no image needs a priority hint.

### Phase 3: chat
Only one launcher exists. I'll check it at 320, 360, 390, 412, 768 and 1280 px against the phone link, estimate button, form fields, SMS-consent text, the sticky bar and the footer legal text. Then I'll fix any overlap; on small screens that likely means moving it up or making it smaller.

### Phase 4: `/es` language
`proxy.ts` stamps `x-site-lang: es-US` for `/es`. The root layout already reads headers, so it can set `<html lang={lang}>`, server-rendered with no client JavaScript. Hreflang is already correct and stays as is. **Equivalence:** `/es` is a shorter Spanish version of the homepage (same services, offices, phone, warranty, form), not a line-by-line translation. I'll list the sections the English homepage has that `/es` doesn't; making them match would be a content task needing approval.

### Phase 5: forms and accessibility
- Add `name` to every field: `name`, `phone`, `projectType`, `website`, `smsConsent`, `email`, `address`, `timeframe`, `contactMethod`, `description`. IDs and labels stay the same.
- Give each form `method="post" action="/api/leads"` plus a `service` hidden field, so it still submits without JavaScript. With JavaScript, the current fetch path runs as it does now.
- `/api/leads`: when the request is a plain HTML form post (no `fetch`), answer with a 303 redirect to a new, noindexed `/thank-you` page (none exists today) or, on validation error, back to the form with `?error=`. JSON responses for `fetch` are unchanged. The cron already picks up leads that were never emailed.
- The honeypot is already correct. SMS consent stays optional, with its STOP text.
- Contrast: darken the orange on buttons that carry white text (`#f37021` → about `#c2410c`, 5.2:1), or switch to dark text. Darken `text-gold` kickers on light backgrounds (about `#8a6d2f`). Both are visible color changes, so they need approval.
- Testing: submissions go only to a local server with a fake `website` honeypot value, or to a local server without database credentials. **No test lead reaches the live CRM.**

### Phase 6: financing (`app/painting-financing-houston/page.tsx`)
| Current | Proposed |
|---|---|
| "Paint now and pay over time with flexible monthly payment plans for Houston homeowners. Apply in minutes." (meta) | "Financing options may be available through a third-party provider for Houston painting projects. Ask for current terms during your estimate." |
| "Flexible financing and monthly payment plans for interior painting, exterior painting, and cabinet refinishing…" | "Financing options may be available through a third-party provider for interior painting, exterior painting and cabinet refinishing projects across Greater Houston." |
| "Apply in just a few minutes after your free estimate — many homeowners get a same-day decision." | "Financing options may be available through a third-party provider. Availability, approval, loan amount, APR and repayment terms depend on the applicant and provider. Ask for current terms during your estimate." |
| "Complete a quick application in minutes and choose the monthly payment plan that works best for you." | "If you apply, the provider decides approval and terms. Your painting price, scope and payment schedule are set in your written estimate." |
| Badge "5-year exterior warranty" | "5-year workmanship warranty (qualifying projects)" with the full warranty sentence on the page. |

The page is checked for any other approval or affordability implication. No lender, APR, payment or timeline is added.

### Phase 7: paint brands
- "Premium Materials Only" (2 places) → **"Sherwin-Williams & Benjamin Moore Paint Systems"**.
- Designation copy and alt text: **blocked until the documents are supplied** (§2.1). After that, the alt text becomes the exact official wording.
- Renner: all 10 mentions already call it a wood coating on qualifying cabinet systems. No change.

### Phase 8: warranty and insurance
- The warranty sentence in `lib/business.ts` already equals the brief's text.
- **21 files** say the warranty covers every job: "Every project comes with…" (14), "every job carries…" (11), "Every job is backed…", "All painting projects include…". These all become "qualifying painting projects", which is a real factual fix.
- 103 files mention the warranty in short form ("5-year warranty", "Insured, 5-year warranty"). Proposal: use the full sentence in body copy, FAQ answers and schema. Badges, titles and meta keep a short label ("5-year written workmanship warranty on qualifying projects"), because a 30-word sentence can't fit in a title.
- Insurance: change `lib/business.ts` from "…a certificate of insurance before work begins" to the brief's "…according to the project requirements". It flows everywhere from there.
- Add a content-audit rule that fails on "every/all project(s)/job(s) … warranty", so the problem can't come back.

### Phase 9: offices
Names, addresses, phone and Google links come from one source and are consistent. Schema already follows the requirements. **Only hours remain open** (§2.3).

### Phase 10: location pages
See `docs/geo-page-similarity-2026-10-27.csv` (51 pages, 5-word shingle Jaccard on `<main>` text).
- **City pages (23):** all KEEP. Highest similarity is 0.39 (Champions Forest ↔ Cypress Creek).
- **Service-location pages (28):** 22 KEEP. **6 IMPROVE**, each 0.46–0.47 similar to a sibling: `/exterior-painting-{katy-cinco-ranch,sugar-land,cypress-bridgeland}`, `/cabinet-refinishing-{katy-cinco-ranch,sugar-land,cypress-bridgeland}`. They need more local material: the area notes Juan still has to confirm, and local projects such as the new Sugar Land stucco job.
- `/cabinet-painting-cost-katy` was flagged only because it has no project link. Its content is unique (0.02), so: KEEP.
- **CONSOLIDATE / NOINDEX candidates: none.** No redirects, canonicals or noindex are proposed.
- Pricing: city pages carry two short price sentences, not a full table. Proposal: keep the one-sentence example in the quick answer and replace the second, repeated paragraph with a link to the Houston cost guide.

### Phase 12: metadata
Shorten the 14 descriptions over 160 characters: `/stucco-painting-houston-tx` 174, `/painters-houston-tx` 172, `/reviews` 172, `/interior-painting-houston-tx` 170, `/wallpaper-removal-houston-tx` 168, `/contact` 167, `/interior-painting-cost-houston` 167, `/blog/primer-vs-two-coats-paint-houston` 165, `/projects/richmond-two-story-great-room` 165, `/blog/sherwin-williams-color-of-the-year-2027-celery-houston` 164, `/blog/benjamin-moore-color-trends-2027-houston` 162, `/pressure-washing-houston-tx` 161, `/faq` 161, `/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston` 161.

---

## 4. Files proposed for modification
`app/layout.tsx`, `proxy.ts`, `app/page.tsx`, `components/luxury/sections.tsx`, `components/paint-products-section.tsx`, `app/painting-financing-houston/page.tsx`, `lib/business.ts` (insurance sentence), `app/globals.css` (contrast tokens, if approved), `app/api/leads/route.ts`, the eight form components listed in §1, the 21 "every project" files, the 14 pages with long meta descriptions, `scripts/audit-content-consistency.mjs` and `tests/content-consistency.test.mjs` (new rule), plus new `docs/external-seo-cleanup.md`.

## 5. Remaining risks
- Mobile LCP stays well above 2.5 s while GA and Meta load immediately.
- The form fallback changes `/api/leads` responses for non-`fetch` posts. JavaScript users are unaffected, but this needs a careful local test.
- Contrast fixes change visible brand colors.
- Designation copy can't be written without the documents.
