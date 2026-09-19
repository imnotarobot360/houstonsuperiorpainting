# SEO / AEO Audit — houstonsuperiorpainting.com

**Audit date:** 2026-08-17
**Scope:** Phase 1 — audit findings plus the fixes that required no external verification.
**Deferred:** Titles / meta / breadcrumbs / internal linking (3.2), NAP de-hardcoding (3.1).
**Phase 2 built:** ChatGPT ads funnel — landing page, short lead form, `/estimate-confirmed`, conversion tracking (section 6).

Findings are grouped by whether they were **fixed**, **flagged for your decision**, or **deferred**.
Every claim below was verified against the codebase, not assumed.

---

## 1. Fixed in this pass

### 1.1 AI crawler access — the actual blocker for ChatGPT visibility

**Was:** `app/robots.ts` allowed `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `anthropic-ai`.

This looked complete but was not. OpenAI runs **separate user agents per purpose**, and allowing
one does not allow the others:

| User agent | Purpose | Status before |
|---|---|---|
| `GPTBot` | Model **training** only | Allowed |
| `OAI-SearchBot` | Indexing for **ChatGPT search results** | **Missing** |
| `ChatGPT-User` | Live fetch when a user prompt cites the site | **Missing** |
| `OAI-AdsBot` | Crawls landing pages for **ChatGPT advertising** | **Missing** |

The site was opted into training but invisible to ChatGPT search, and `OAI-AdsBot` being absent
would have undercut the planned ChatGPT ad campaigns before they started.

**Now:** all four are explicitly allowed. Verified live at `/robots.txt`.

### 1.2 Conflicting HQ coordinates — and both were wrong

Three different lat/long pairs were hardcoded for one office:

| Value | Locations |
|---|---|
| `29.9012, -95.6293` | `lib/business.ts`, `contact/layout.tsx`, `painting-company-near-me`, `soft-washing-houston-tx` |
| `29.9691, -95.6972` | `structured-data.tsx` (×3), `app/layout.tsx` geo meta, `painters-cypress-tx` |

Geocoding the actual street address (14150 Huffmeister Rd, Cypress TX 77429) returns
**`29.9745, -95.6445`** — roughly 5 km from the first value and 8 km from the second. Both
in-repo values were inaccurate, not merely inconsistent. Conflicting geo across schema blocks
dilutes the local-ranking signal.

**Now:** `BUSINESS.primaryAddress` holds the canonical geo; `structured-data.tsx` derives all
three of its geo blocks from it via a single `HQ_GEO` constant. Remaining page-level copies carry
a sync comment.

> **Action for you:** confirm `29.9745, -95.6445` matches your Google Business Profile map pin.
> A mismatch between schema geo and the GBP pin is itself a negative signal.

### 1.3 Warranty — standardized to a flat 5 years (policy change)

The site carried four different warranty terms. Per your decision, all painting work is now a
flat **5-year** warranty.

**This was a policy change, not just a copy fix.** Your `/terms-and-conditions` previously
specified a genuine tiered policy — Exterior 5yr / Interior 2yr / Cabinets 3yr — mirrored in
`llms.txt`, the Service schema, and all 8 cabinet-refinishing pages. Those were deliberate, not
typos.

Updated: `app/terms-and-conditions/page.tsx` (legally binding), `components/structured-data.tsx`,
`public/llms.txt`, `public/llms-full.txt`, 8 × `cabinet-refinishing-*`, `interior-painting-cost-houston`,
`interior-painters-katy-tx`, `painting-company-near-me`, `painters-in-houston-tx`,
`house-painters-cypress-tx`, `best-house-painters-near-katy-texas`, `blog/best-painters-houston-tx`,
`components/aeo-section.tsx`.

Left unchanged, correctly:
- Epoxy remains **15-year** (`lib/epoxy.ts`) — different product, different policy.
- "5-year exterior warranty" phrasing on exterior-specific pages is still accurate under a flat policy.
- `blog/paint-warranty-texas` and the CertaPro page discuss industry norms and competitor terms.

> **REQUIRES ACTION:** your customer contracts and estimate templates must be updated to match.
> Marketing now promises 5 years on interior and cabinet work; if the contract still says 2 or 3,
> the advertised term is what a court is likely to enforce. Recommend a contracts review before
> this ships.

### 1.4 Licensing claims — rewritten to insured-only (legal risk)

**Highest-liability finding.** The site asserted "Licensed & Insured" / "fully licensed and insured"
in ~30 places across 26 files. **Texas does not issue a state occupational license for residential
painting contractors** — so the claim could not be substantiated, and unsubstantiated licensure
claims are a deceptive-advertising exposure under the Texas DTPA.

**Now:** replaced with verifiable credentials — "Fully Insured", "$2M liability + workers' comp",
"bonded", "registered Texas LLC".

- `lib/business.ts`: the `licensedInsured: true` flag is replaced with `insured`, `bonded`, and
  `liabilityCoverage`, so no future component can render a licensure claim from config.
- `/about` and `/terms-and-conditions` now state plainly that Texas does not license residential
  painters and that the company makes no such claim — turning a liability into a trust signal.
- One decorative stat read `value: "Fully" / label: "Fully Insured"` after rewrite; changed to
  `$2M / Liability Insured`.

Deliberately **not** changed:
- `blog/licensed-vs-unlicensed-painters` — educational content about licensing generally.
- `load-bearing-wall-removal-houston-tx` — refers to licensed structural engineers, a real credential.
- `houston-painting-cost-guide` — generic buyer advice; reworded to "insured" to stay accurate for Texas.

### 1.5 Review data — centralized, and unverifiable review markup removed

Config (4.9 / 200) was correct and is now the single source of truth. `components/trust-bar.tsx`
and `components/aeo-section.tsx` previously hardcoded these and now read from `BUSINESS.trust`.

**Removed two fabricated-looking reviews from `ratingSchema`.** Hardcoded testimonials attributed
to "Sarah Mitchell" and "Michael Thompson" could not be traced to any verifiable Google or Yelp
review. Google's review-snippet policy requires review markup to reflect genuine reviews that are
visibly displayed on the page; fabricated entries risk a **manual action against the whole domain**
— which would cost far more than the rich-snippet stars are worth. `aggregateRating` is retained
and now derives from config. The `review` key is omitted entirely rather than set to `[]`, since an
empty array asserts zero reviews.

**Correcting my own earlier report:** I initially flagged "40 reviews", "50+ reviews", and
"4.5 stars" as conflicting self-claims. On inspection they are not:
- "40 reviews in a single month is suspicious" — buyer advice about spotting fake reviews.
- "Look for 50+ reviews with a 4.5+ average" — a recommended benchmark for vetting *any* contractor.
- "4.5 stars" — CertaPro's rating on the comparison page.

All are accurate as written and were left alone.

---

## 2. Flagged — needs your input, not changed

| # | Finding | Why it was not auto-fixed |
|---|---|---|
| 2.1 | `aggregateRating` is hand-maintained in `BUSINESS.trust` | Will silently drift from reality. Fix properly by wiring to the Google Places API, or set a calendar reminder to refresh it. Note that schema must always match what the GBP actually shows. |
| 2.2 | CertaPro comparison claims "5-year written warranty" vs their "1–2 year" | Accurate now under the flat 5-year policy — **conditional on 1.3 reaching your contracts.** If contracts stay tiered, this becomes a misleading comparative claim. |
| 2.3 | `projectsCompleted: 500`, `yearsInBusiness: 6`, `crewExperienceYears: 15` | Rendered as fact sitewide; I cannot verify any of them. Confirm or adjust. |
| 2.4 | Homepage `4.9 (200+ Google Reviews)` shown without visible reviews adjacent | Google prefers rating claims be substantiated on-page. Low risk, worth noting. |

---

## 3. Deferred to Phase 2

| # | Item | Detail |
|---|---|---|
| 3.1 | De-hardcode NAP | Phone appears in **52 files**, street address in **18**. Phone is at least *consistent* — one number, `(346) 594-5960` for display and `346-594-5960` in `tel:` hrefs, which is correct. This is a maintainability risk, not a live NAP inconsistency, so it did not warrant a 70-file sweep in Phase 1. |
| 3.2 | Titles / meta / breadcrumbs / internal linking | Week 1 of the original spec. Still outstanding. |
| 3.3 | ChatGPT ad landing pages, short lead form, `/estimate-confirmed`, conversion tracking | **Built — see section 6.** |

---

## 4. Verification performed

- `pnpm exec tsc --noEmit` — clean.
- `/robots.txt` served live; all four OpenAI agents present.
- `/`, `/about`, `/terms-and-conditions`, `/painting-company-near-me`, `/cabinet-refinishing-memorial` → HTTP 200.
- Homepage rendered text: **0** occurrences of "licensed"; badges read "Fully Insured", "4.9 (200+ Google Reviews)", "5-Year Warranty".
- `/about` credentials section renders the corrected Texas-licensing language; 0 occurrences of "licensed".
- Homepage JSON-LD emits `"ratingValue":"4.9","reviewCount":"200"` from config, with no `"review":[]`.
- Repo-wide grep confirms no remaining 1/2/3-year warranty claims outside the intentional exclusions in 1.3.

---

## 5. Recommended order of operations

1. **Update customer contracts to the 5-year term** before this deploys (see 1.3). Highest priority.
2. Confirm the HQ geo against your Google Business Profile pin (1.2).
3. Confirm or correct the trust metrics in 2.3.
4. Then proceed to Phase 2 — the ChatGPT ad landing pages now have crawler access to work with.

---

## 6. Phase 2 — ChatGPT ads funnel (built)

### 6.1 What shipped

| File | Role |
|---|---|
| `app/painting-estimate-houston/page.tsx` | Paid-traffic landing page. Indexable, canonical, FAQPage JSON-LD. |
| `components/estimate-lead-form.tsx` | 4-step lead form. Three low-friction taps before any typing. |
| `app/estimate-confirmed/page.tsx` | Conversion page. `noindex, nofollow`, no nav — the funnel does not leak. |
| `lib/attribution.ts` | Captures `oppref` + UTMs, first-touch. |
| `lib/openai-ads.ts` | Event taxonomy, SHA-256 hashing, pixel wrapper. |
| `components/openai-pixel.tsx` | Pixel loader, first in `<head>`. |
| `app/api/conversions/openai/route.ts` | Server-side Conversions API relay. |

### 6.1a The live ad URLs are under `/chatgpt/` — check here before adding a funnel

**The ad landing pages live at `/chatgpt/<slug>`, and those slugs are in running
campaigns.** Changing one breaks live paid traffic, so treat them as fixed:

| Service | Live ad URL |
|---|---|
| Interior | `/chatgpt/interior-painting-houston` |
| Exterior | `/chatgpt/exterior-painting-houston` |
| Cabinets | `/chatgpt/cabinet-refinishing-houston` |
| Epoxy | `/chatgpt/garage-epoxy-houston` |

Two traps worth writing down:

1. **The cabinet slug says `refinishing`, not `painting`.** Guessing "cabinet-painting-houston"
   produces a 404 on a page an ad is paying for.
2. **`/garage-epoxy-houston-tx` is a 301 to the epoxy subdomain** to consolidate authority.
   The new funnel is at `/chatgpt/garage-epoxy-houston` (no `-tx`), which does not collide with
   that redirect, and is `noindex`, so it never competes for the organic term.

The deeper lesson: the funnel was first built at `/estimate/<service>`, a parallel set of URLs
nothing linked to, because the existing `/chatgpt/*` convention was never checked. Those paths now
307 to their `/chatgpt/` equivalents (temporary, not 301 — they were never advertised or indexed,
so there is no authority to pass). Every one of these pages carries `noindex, nofollow`, which is
what stops four paid landing pages from competing with the organic service pages for the same
terms. `app/sitemap.ts` excludes the `chatgpt` and `estimate-confirmed` prefixes for the same
reason — if you add a page under `/chatgpt/`, it is excluded automatically; do not "fix" that.

Note `components/chatgpt-landing.tsx` is now unused. Its FAQ, before/after and process content was
deliberately retired when these pages were rebuilt, and the file is kept only so that copy can be
recovered.

### 6.1b Nav/footer service links come from `BUSINESS.services` — mind the slice

Both `components/header.tsx` and `components/footer.tsx` build their Services lists by slicing the
single canonical `BUSINESS.services` array. **Garage Epoxy sits at index 7**, so any slice below 8
silently drops it — the footer was on `slice(0, 6)` and had been omitting both Commercial Painting
and Garage Epoxy. Both are now `slice(0, 8)`. This fails quietly: nothing errors, the column just
renders one item shorter, so it is invisible in code review.

Epoxy also must not be linked by slug. `/garage-epoxy-houston-tx` is a **308 to
`epoxy.houstonsuperiorpainting.com`**, so linking the slug sends visitors through a needless
redirect hop — the same two-hop chain `next.config.mjs` already avoids for `/garage-epoxy`. Use
`serviceHref(slug)` from `lib/business.ts`, which returns the subdomain URL for epoxy and a normal
`/slug` for everything else; pair it with `isExternalHref()` to pick a plain `<a>` over `next/link`.
`EPOXY_URL` is declared in `business.ts` and read by `lib/epoxy.ts` — never the reverse, since
`epoxy.ts` already imports `business.ts` and the dependency must run one way only.

**Known dead file:** `app/garage-epoxy-houston-tx/page.tsx` exists but is **unreachable** — the 308
in `next.config.mjs` is evaluated before routing, so it shadows the page entirely. Left in place
rather than deleted in case its copy is worth migrating to the epoxy subdomain, but it renders for
nobody.

### 6.2 Tracking behavior

A submitted lead fires **three** things: GA4 `generate_lead`, Meta `Lead`, and the OpenAI
`lead_created` event — the last one **twice**, once from the browser pixel and once server-side,
sharing an `event_id` so OpenAI collapses them into one conversion. Sending both is OpenAI's
documented pattern: the pixel is fast but lossy (ad blockers, Safari ITP), the server call is
reliable. Without the shared ID every lead would be double-counted and CPA would read half of reality.

Verified against live docs rather than memory, per the Phase 1 note. Findings that changed the
implementation:

- Event name is `lead_created` with data type `customer_action` — a **standard** event, which
  matters because only standard events feed conversion-optimized bidding.
- **`oppref` is not captured for you.** The pixel writes its own `__oppref` cookie, but the
  Conversions API explicitly does not. We capture it into a first-party `hsp_oppref` cookie with a
  30-day window, matching the click window.
- **Phone numbers must never be sent — not even hashed.** The spec forbids raw emails, raw external
  IDs, and phone numbers or phone hashes. The form collects a phone (the office needs it) but it is
  excluded from every tracking payload. Email is SHA-256 hex, lowercased and trimmed before hashing.

### 6.3 Activation status

| Half | Credential | Status |
|---|---|---|
| Browser pixel | Pixel ID `3cw25g7Vfbtg9cZFN7g8c6` | **Live.** Committed as the default in `lib/openai-ads.ts`. |
| Conversions API | `OPENAI_ADS_API_KEY` | **Not set** — server-side half is dormant. |

The pixel ID is committed rather than kept in an env var because it is public by design: it ships
in the page source of every site that installs one, so there is nothing to protect, and hardcoding
it means the pixel works in preview and production with no deploy-time variable.
`NEXT_PUBLIC_OPENAI_PIXEL_ID` still overrides it if a staging pixel is ever needed.

`OPENAI_ADS_API_KEY` is the opposite — a real secret. It must never be committed and must never be
given a `NEXT_PUBLIC_` prefix, which would publish it to every visitor. Generate it from the
conversions tab in Ads Manager and add it as a project env var; no code change is needed.

Running the pixel alone is safe but lossy: ad blockers and Safari ITP silently drop browser events,
which reads as a worse CPA than reality. The relay returns `{ ok: true, skipped: "not_configured" }`
rather than erroring, and a tracking failure can never block a lead — the submission completes
first and the relay is fire-and-forget.

`debug: true` from the Ads Manager snippet is applied in development only. It is the documented way
to inspect pixel activity while testing, but in production it would log to every visitor's console.

### 6.4 Not built, deliberately

**The appointment calendar.** The original spec wanted self-scheduling immediately after submit.
That needs a database and double-booking protection to be safe; a calendar that lets two customers
book the same slot is worse than no calendar. `/estimate-confirmed` promises a callback within one
business day instead. The lead is captured *before* scheduling either way, so this does not cost
conversions. Revisit as its own phase, or drop in an existing Calendly/Acuity embed.

### 6.5 Verification performed

- `tsc --noEmit` — clean.
- `/painting-estimate-houston` and `/estimate-confirmed` → HTTP 200.
- Confirmation page emits `name="robots" content="noindex, nofollow, nocache"`, and is excluded
  from `app/sitemap.ts` so the sitemap does not contradict that directive.
- Landing on `?oppref=test_click_abc123&utm_source=chatgpt` wrote `hsp_oppref=test_click_abc123`
  and persisted the UTMs.
- All 4 form steps walked in-browser; every input carries an associated label.
- Conversions relay returns `skipped: not_configured` without credentials — no 500.
- Email hash normalization confirmed: `"Test.User@Example.com "` → the same 64-char digest as
  `"test.user@example.com"`.
- **Mobile fix:** the form initially sat 0.95 screens down behind the sticky widgets. Reordered so
  the headline is followed directly by step 1 — now 0.50 screens, visible on load. Desktop keeps
  the two-column layout; no horizontal overflow at 390px.

### 6.6 Live pixel verification

Confirmed in-browser against OpenAI's own SDK debug output, not just page source:

- `window.oaiq` resolves to a function, the SDK tag loads from `bzrcdn.openai.com`, and the stub
  queue drains to 0 — meaning the real SDK took over the queued calls rather than stranding them.
- OpenAI's SDK logged `captured click id from query param {param: "oppref"}` and `sdk_init` both
  queued **and flushed** over `fetch`. Flushing is the part that matters: queued-but-not-flushed
  would look identical in the console while sending nothing.
- A `lead_created` event fired with a supplied `event_id`, and the SDK preserved that exact ID
  through the flush — which is what makes browser/server deduplication work.

Two observations from the live output:

- **The SDK keeps its own `__oppref` cookie**, separate from our `hsp_oppref`. Both are needed:
  theirs serves the pixel, ours feeds the Conversions API, which does not read cookies.
- **`automatic_advanced_matching` is enabled by default.** The SDK detects supported customer fields
  on the page and SHA-256 hashes them in-browser before sending; per OpenAI's docs raw customer
  information is never transmitted this way. This does not conflict with the phone-exclusion rule in
  §6.2 — that governs what *we* pass in `user_data`, which still contains no phone in any form.

One test event (`event_id: plumbing_test_do_not_count`) was sent during verification and may appear
in Ads Manager reporting.

### 6.7 The dedup key is named differently on each side

Confirmed against the published docs rather than assumed, because this is the one part of the
integration that fails **silently**:

| Side | Where it goes | Key |
|---|---|---|
| Browser pixel | the 4th `options` argument — *not* the event data object | `event_id` |
| Conversions API | the top level of the event — *not* inside `data` | `id` |

Both must carry the same value. Get either the name or the position wrong and the event still
records, the console still looks healthy, and nothing errors — but OpenAI treats the browser and
server hits as two separate conversions. Every lead then counts twice and reported CPA reads at half
of actual, which is the kind of error that causes a profitable campaign to be scaled on bad numbers.

The exact call our wrapper emits was captured from the live SDK and matches the documented shape:

```js
oaiq("measure", "lead_created", { type: "customer_action" }, { event_id: "…" })
```

and `app/api/conversions/openai/route.ts` sends the matching `id` at the event top level. This
pairing is inert today — the server half is dormant until `OPENAI_ADS_API_KEY` is set (§6.3) — but
it is what makes enabling that key a one-variable change with no double-counting.

### 6.8 Event data is validated strictly — extra fields drop the whole conversion

Caught in live browser testing of the new funnel, **not** in code review. The first version of the
funnel tagged each conversion with the service:

```js
measureOpenAI(OPENAI_EVENTS.leadCreated, { service: "cabinets" }, { event_id: token })
```

The pixel's response was `validation failed; event dropped`. Every single lead conversion was being
discarded, and the only symptom was one console debug line. In Ads Manager this is indistinguishable
from "the ads produced no leads" — the exact reading that gets a working campaign switched off.

Two rules, from `developers.openai.com/ads/supported-events`:

1. Event data is **required** and its `type` must match the event's shape. `lead_created` is a
   `customer_action`.
2. The permitted fields are a **closed set** per shape. `customer_action` allows only
   `type`, `amount`, `currency`. There is no field for arbitrary tags such as a service name.

`lib/openai-ads.ts` now whitelists fields per shape and silently strips anything else, warning in
development. An unknown shape falls back to the strictest set. A mistaken call now loses one
dimension of reporting detail instead of the entire conversion.

Per-service reporting comes from GA4's `generate_lead` event and the `service` column on the `leads`
table, both of which accept arbitrary dimensions. Field names were copied from the docs verbatim —
note `plan_id`, not `plan`, and that `amount` is in the currency's **minor units** (cents), so a
$4,500 job is `450000`.
