# ChatGPT Search readiness audit: houstonsuperiorpainting.com

Checked 2026-10-26 against the live site, this repository, the Vercel project configuration and public listings.
Nothing here guarantees that Houston Superior Painting will appear in, rank in, or be recommended by ChatGPT. OpenAI does
not publish a ranking formula, and we cannot see ChatGPT's search logs. What we can do is remove barriers (crawler access,
technical errors, conflicting business facts) and earn real, independent evidence (reviews, accurate listings, real projects).

Legend: **VERIFIED** = observed directly, evidence below. **LIKELY** = strong indication, not proven. **CANNOT CONFIRM** = no access or no data.

---

## A. Prioritized findings

| # | Severity | Finding | Status | Evidence |
|---|---|---|---|---|
| 1 | High | Five Google profiles all show **"Open 24 hours"**; the website says Mon–Fri 7–7, Sat 8–4, Sun closed | VERIFIED | Google Maps, logged out, 2026-10-26; `lib/business.ts` `hours` |
| 2 | High | **houstonsuperiorpaintingmagnoliatx.com** uses the company name and the Magnolia profile's address with a different phone, (832) 764-2774, and links to another painting company's social accounts | VERIFIED (content); ownership CANNOT CONFIRM | Public page, 2026-10-26 |
| 3 | High | **Yelp** listing exists, unclaimed, 1.0 from 2 negative reviews (Dec 19 2025, Jun 28 2026), old phone (346) 521-4992. Bing Maps shows that 1/5 Yelp rating on the Houston listing | VERIFIED | yelp.com/biz/houston-superior-painting-houston; bing.com/maps |
| 4 | Medium | Old or wrong phone numbers on directories: Manta (346) 521-4992 and suite #405; Poyst (346) 812-3392; Giphy 346 521 4992 | VERIFIED | Listing URLs in section D |
| 5 | Medium | No Google profile links to its own city page; all five link to the homepage, and Sugar Land uses `http://` | VERIFIED | Google Maps |
| 6 | Medium | Bing's Houston listing says the company is "in the heart of Katy"; no Bing listing for Sugar Land or Magnolia. Apple Maps' Houston listing is unclaimed with no phone | VERIFIED | Bing Maps; maps.apple.com |
| 7 | Medium | Facebook and Instagram URLs in the site's `sameAs` show "not available" when logged out | LIKELY broken or restricted | facebook.com/houstonsuperiorpainting, instagram.com/houstonsuperiorpainting |
| 8 | Medium | ChatGPT visits without UTM tags were saved as "direct" on leads (attribution saved the referrer only when UTM tags were present) | VERIFIED in code; **fixed** | `lib/attribution.ts` |
| 9 | Medium | No record of whether OAI-SearchBot actually crawls the site: Vercel runtime logs carry no user agent | VERIFIED; **fixed** (logging added) | `vercel logs --json` fields: path, status, cache only |
| 10 | Low | Magnolia street written "Cottontop Mtn" on the site, "Cottontop Mountain" on Google | VERIFIED; **fixed** | `lib/business.ts`, `lib/locations.ts` |
| 11 | Low | Review counts on file were stale: Cypress and Sugar Land now 5.0 (5) each, not (3). The site does not print counts | VERIFIED; **fixed** | `data/review-profiles.ts` |
| 12 | Low | Google Houston profile name shows a trailing ".." in its URL; Magnolia profile has no city suffix | VERIFIED | Google Maps |
| 13 | Info | robots.txt per-bot groups (`OAI-SearchBot: Allow /`) replace the `*` group, so those bots may also fetch `/api/`. Harmless: the APIs take POSTs and return no indexable pages | VERIFIED; no change | robots.txt |
| 14 | Info | 15 `painters-{city}-tx` pages still share a lot of text (worst pair 0.63 similarity) | VERIFIED | `docs/content-consolidation-plan.csv` |

### 1. ChatGPT Search crawler access: PASS (with one limit)

- **Official guidance** (developers.openai.com/api/docs/bots, read 2026-10-26):
  - OAI-SearchBot is the crawler that surfaces sites in ChatGPT search. To be included, allow it in robots.txt and allow its published IP ranges.
  - ChatGPT-User handles user-initiated visits and is not used for search inclusion. GPTBot is for training and is independent of search.
  - IP lists are at `openai.com/searchbot.json` (39 prefixes, created 2026-01-02), `chatgpt-user.json` and `gptbot.json`.
- **robots.txt (live):** `User-Agent: OAI-SearchBot / Allow: /`. The same is true for ChatGPT-User, GPTBot, OAI-AdsBot and Bingbot. It references `https://houstonsuperiorpainting.com/sitemap.xml`. VERIFIED.
- **Responses to OpenAI user agents** (curl from our IP with OpenAI's exact user-agent strings):
  - `/`, `/painters-houston-tx`, `/interior-painting-houston-tx`, `/contact`, `/projects`, `/sitemap.xml` and `/robots.txt` each returned **200** with the full HTML, including the H1, rendered on the server.
  - `meta robots` = `index, follow`, with no X-Robots-Tag and no challenge page. VERIFIED.
- **Vercel firewall** (`vercel firewall overview --json`):
  - `active: null` means no custom rules and no managed bot or AI-bot rulesets.
  - No IP blocks, no bypass rules, and attack mode is off. VERIFIED.
- **Application code:**
  - `proxy.ts` only tags epoxy requests; it never blocks.
  - `next.config.mjs` adds standard security headers only.
  - There is no login wall and no JavaScript challenge. VERIFIED.
- **CANNOT CONFIRM:**
  - What Vercel's always-on platform DDoS mitigation does with requests from OpenAI's actual IP ranges. We can't send requests from those IPs.
  - Whether OAI-SearchBot has visited at all. No log data existed; the new logging fixes this from the next deploy on.

### 2. Technical discovery: PASS

- **Sitemap:** 206 URLs, all `https://houstonsuperiorpainting.com`, all answer 200, each with `lastmod`.
- **Page checks (all 206 pages):**
  - self-referencing canonical, and og:url matches it;
  - exactly one H1;
  - no duplicate titles or descriptions;
  - no `noindex` on any sitemap page;
  - JSON-LD parses, and FAQ schema matches the visible text;
  - no AggregateRating.
  - Tool: `scripts/seo-crawl.mjs`.
- **Internal links:** no sitemap page lacks an internal link from another page. 29 pages have only 1–2 inbound links, mostly blog posts.
- **Redirects:** 301s are defined in `next.config.mjs`, and the sitemap excludes them. All 24 checked `.net` URLs 308 to the same path on `.com` (`scripts/check-net-redirects.mjs`).
- **Required pages are crawlable:** homepage, services (interior, exterior, cabinets, drywall, limewash and brick, commercial), all service-area pages (Houston, Cypress, Katy, Sugar Land, Tomball, Richmond, Fulshear, Magnolia, The Woodlands and others), `/contact` and `/projects`.

### 3. Business identity and local accuracy

- **Website (single source `lib/business.ts`):**
  - Houston Superior Painting, (346) 594-5960, `https://houstonsuperiorpainting.com`.
  - Five staffed offices (owner-confirmed 2026-10-25), with LocalBusiness schema on each office page.
  - Hours Mon–Fri 7:00 AM–7:00 PM, Sat 8:00 AM–4:00 PM, Sun closed.
- **Google:** five profiles, correct name, address and phone. No duplicate listing found in a logged-out Maps search, including no second Houston listing. Conflicts: findings 1, 5, 10 and 12.
- **Elsewhere:** findings 2, 3, 4, 6 and 7. BBB: "Not BBB Accredited", "Not Rated", file opened 10/5/2026, correct address and phone, no principal named.

### 4. Independent evidence and reputation (VERIFIED 2026-10-26, logged out)

| Profile | Rating | Reviews | Link |
|---|---|---|---|
| Google: Houston Superior Painting - Katy | 4.9 | 130 | https://maps.app.goo.gl/zcUY9dT1KYdoPmiy6 |
| Google: Houston Superior Painting (Houston, Bissonnet) | 5.0 | 25 | https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8 |
| Google: Houston Superior Painting (Magnolia) | 5.0 | 11 | https://maps.app.goo.gl/WXxysgBJ6CWMrjg18 |
| Google: Houston Superior Painting - Cypress | 5.0 | 5 | https://maps.app.goo.gl/G2cRQy8Cth7UM6d6A |
| Google: Houston Superior Painting - Sugar Land | 5.0 | 5 | https://maps.app.goo.gl/kda3QDeyq89B4u9R9 |
| Yelp (unclaimed) | 1.0 | 2 | https://www.yelp.com/biz/houston-superior-painting-houston |
| BBB | Not rated | 0 | https://www.bbb.org/us/tx/cypress/profile/painting-contractors/houston-superior-painting-0915-90077903 |

- **CANNOT CONFIRM:** the date of each profile's newest review (sorting needs a sign-in), and Angi, Houzz, Thumbtack, Nextdoor and Porch. No listing turned up in a web search; Houzz blocked automated browsing.
- **Competitors:**
  - Google Maps, "painting company Houston TX": HSP Katy was 3rd, among CertaPro Painters of Katy 4.9 (230), Prime House Painting 5.0 (222), CertaPro Central & NE Houston 4.9 (562), Liberty Painting 4.8 (274), That 1 Painter Houston 4.9 (222) and others.
  - "house painters Cypress TX": HSP was not in the top 10.
  - These are one-time snapshots, not rankings.
- **Legitimate ways to earn more reviews and references:**
  - Ask every completed customer, at the final walkthrough, with the review link of the office that served them (the ERP already supports choosing the profile).
  - Reply to every review, including the two on Yelp, factually and without arguing.
  - Get listed accurately on BBB, Yelp, Bing, Apple, Angi and Houzz.
  - Earn local references honestly: HOA vendor lists, supplier "find a contractor" pages only if the program actually exists, local news or community sponsorships.
  - Never buy, gate or write reviews. Never offer discounts for positive reviews.

### 5. Content and local proof

- Service pages state what is done, where, how estimates work (free written estimate with scope, deposit and payment schedule) and what is included.
- Prices are company budgeting guidance with a review date.
- Warranty and insurance wording is uniform, and the audit `scripts/audit-content-consistency.mjs` blocks undocumented claims.
- Projects:
  - 31 case studies, each with a real neighborhood.
  - The six narrative case studies were confirmed real by the owner (2026-10-25) but have no supporting document on file.
  - Photo-only jobs have no scope text; adding the real scope, completion month and products would strengthen them.
- Remaining content risk:
  - the 15 `painters-{city}-tx` pages overlap;
  - the area facts in `data/area-notes.ts` await owner confirmation (`docs/area-notes-review.md`).

### 6. Measurement

- **Referrals:** ChatGPT search links usually carry `utm_source=chatgpt.com`, and GA4 records them as source `chatgpt.com`. When there is no UTM tag, the referrer is now saved on the lead too.
- **Crawler visits:** `proxy.ts` now logs every AI-crawler request as one line. `pnpm report:ai-bots` pulls those lines and checks each OpenAI hit against OpenAI's official IP lists, marking it `verified` or `UNVERIFIED IP`.
- **Manual ChatGPT searches** are spot checks only. Results vary by user, location, wording and time, so they do not measure ranking.

---

## B. Changes, grouped by file or platform

**Repository (done, not deployed):**

- `lib/attribution.ts`: on the first landing without UTM tags, store the external referrer (e.g. `https://chatgpt.com/`) and the landing page. Leads already have a `referrer` column. UTM data still takes precedence.
- `proxy.ts`: log `{"aiBotHit","path","ip"}` for OAI-SearchBot, ChatGPT-User, GPTBot, OAI-AdsBot, Perplexity, Claude and Bingbot user agents. It doesn't block anything or change responses.
- `scripts/ai-bot-report.mjs` and `pnpm report:ai-bots`: the crawler report, with an official IP check.
- `lib/business.ts` and `lib/locations.ts`: Magnolia street now "14512 Cottontop Mountain", matching Google.
- `data/review-profiles.ts`: Cypress and Sugar Land are now 5 reviews each; all five dates checked 2026-10-26.
- **Not changed, on purpose:**
  - robots.txt (it already allows OAI-SearchBot);
  - no `llms.txt`-style "AI ranking" files added. `/llms.txt` already exists and is accurate, but OpenAI documents no ranking effect from it;
  - no new markup.

**Vercel (optional, owner):** Vercel keeps runtime logs only briefly. For a monthly crawler history, run `pnpm report:ai-bots` weekly and save the output, or add a Log Drain (Vercel → Settings → Log Drains).

**GA4 (owner, in the GA4 UI):** Admin → Data display → Channel groups. Create an "AI assistants" channel with source matching the regex `chatgpt\.com|openai\.com|perplexity\.ai|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai`, placed above "Referral".

## C. Implemented in the repository

Everything in B "Repository". Type check, lint (0 errors), 49 tests, content audit (0 findings), build, `verify-site` and `seo-crawl` all pass on a local production build. Nothing is pushed or deployed.

## D. Changes you must make yourself

1. **Google, all 5 profiles:**
   - Replace "Open 24 hours" with the real hours (website: Mon–Fri 7–7, Sat 8–4, Sun closed). If the offices keep different hours, tell me and the site will match.
   - Set each website link to its own page, using https:
     - `/painters-houston-tx`
     - `/painters-katy-tx`
     - `/painters-cypress-tx`
     - `/painters-sugar-land-tx`
     - `/painters-magnolia-tx`
2. **Google Houston:** remove the ".." from the profile name.
3. **Google Magnolia:** consider "Houston Superior Painting - Magnolia" to match the other offices, if it follows Google's naming rules.
4. **houstonsuperiorpaintingmagnoliatx.com:** find out who runs it.
   - If it's yours: fix the phone to (346) 594-5960 and remove the other company's social links, or retire the site.
   - If it isn't: ask the operator to remove the name and address, and confirm you control the Magnolia Google profile.
5. **Yelp:** claim the listing, fix the phone to (346) 594-5960, add the correct addresses, and reply to both reviews.
6. **Manta:** fix the suite to #443 and the phone to (346) 594-5960. **Poyst:** claim it, and fix the phone and name. **Giphy channel:** fix the phone.
7. **Bing Places:** fix the Houston description ("heart of Katy"), and add Sugar Land and Magnolia, for example by importing from Google.
8. **Apple Business Connect:** claim the Houston listing, add the phone, and add the other four offices.
9. **Facebook and Instagram:** confirm the correct public URLs. If they changed, send them and `sameAs` in `lib/business.ts` will be updated.
10. **BBB:** add Juan Serra as the named principal. Do not claim accreditation.
11. **Optional:** Angi, Houzz and Nextdoor business profiles with the same name, phone, website and addresses.

## E. Verification report

| Check | Result |
|---|---|
| robots.txt allows OAI-SearchBot | PASS |
| OpenAI user agents get 200 + full HTML on key pages | PASS (from our IP) |
| Requests from OpenAI's own IP ranges | CANNOT VERIFY |
| Vercel custom firewall, bot rules, IP blocks, attack mode | PASS (none active) |
| noindex / X-Robots-Tag on key pages | PASS (none) |
| Sitemap, canonicals, one H1, duplicates, JSON-LD (206 pages) | PASS |
| Crawler actually visiting | CANNOT VERIFY yet (no log data before this change) |
| Google NAP vs website | FAIL on hours (24h vs real); name, address and phone PASS |
| Third-party phone consistency | FAIL (Yelp, Manta, Poyst, Giphy, Apple) |
| Unofficial Magnolia site | FAIL (conflicting phone) |
| Newest review dates | CANNOT VERIFY (needs sign-in) |
| ChatGPT ranking / recommendation | CANNOT VERIFY (not observable) |

## F. No guarantee

No one can guarantee that Houston Superior Painting will be shown, ranked or recommended by ChatGPT for "best painting company in Houston, Texas" or any other query. ChatGPT decides what to show using signals OpenAI does not publish. This audit removes technical barriers and identity conflicts, and the fixes in section D make the company's public facts consistent. Earning real reviews and references over time is the legitimate part that is still up to the business.

---

## Monthly checklist

1. **Crawler visits:** `pnpm report:ai-bots 24h`, run weekly, and save the output. Check that OAI-SearchBot hits are `verified` with status 200. A run of 403/429/5xx means something is blocking it.
2. **Access:** `curl -s https://houstonsuperiorpainting.com/robots.txt` still allows OAI-SearchBot. Run `vercel firewall overview` after any security change.
3. **Site health:** `node scripts/verify-site.mjs` and `node scripts/seo-crawl.mjs https://houstonsuperiorpainting.com` both pass.
4. **Referral traffic (GA4):** sessions and leads from the "AI assistants" channel. In the leads database: `select count(*) from leads where (utm_source ilike '%chatgpt%' or referrer ilike '%chatgpt.com%') and created_at > now() - interval '30 days';`
5. **Listings:** check the name, phone, address, website link and hours on all 5 Google profiles, plus Bing, Apple, Yelp and BBB. Fix any drift.
6. **Reviews:** count new reviews per Google profile and reply to all of them, including on Yelp. Update `data/review-profiles.ts` (rating, count, `lastVerified`).
7. **Spot check:** run 3–5 manual ChatGPT searches (e.g. "house painters in Cypress TX") and note whether the company is cited and which page. Treat this as a spot check only.
