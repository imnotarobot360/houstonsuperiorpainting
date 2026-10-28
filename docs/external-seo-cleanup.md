# External SEO cleanup checklist (manual actions for Juan)

Created 2026-10-27. None of these can be changed from the website's code. Each needs Juan, or someone he authorizes, signed in to the third-party site. Nothing here has been changed on any third-party profile.

Correct details, for every listing:
- **Name:** Houston Superior Painting
- **Phone:** (346) 594-5960
- **Website:** https://houstonsuperiorpainting.com, or the matching office page:
  - Cypress HQ → /painters-cypress-tx
  - Houston → /painters-houston-tx
  - Katy → /painters-katy-tx
  - Sugar Land → /painters-sugar-land-tx
  - Magnolia → /painters-magnolia-tx
- **Addresses:** exactly as in `lib/business.ts` (five offices).
- **Hours (Juan confirmed 2026-10-27):** Mon–Fri 7 AM – 7 PM, Sat 8 AM – 4 PM, Sun closed. The website already uses these; the five Google profiles still say "Open 24 hours" and must be changed to match.

---

## 1. Poyst
Observed 2026-10-26: name shown as "Houston Superior Painting..", phone **(346) 812-3392**.
- [ ] Find the listing (search poyst.com for "Houston Superior Painting").
- [ ] Use the listing's "Claim this business" / "Is this your business?" link. Verification is usually by phone or email to the business. Use (346) 594-5960 or the business email.
- [ ] After claiming: change the name to "Houston Superior Painting" (remove the trailing ".."), the phone to (346) 594-5960, and check the address, website and hours.
- [ ] If there's no claim option: use the site's contact or report form to request the correction, and keep a screenshot of the request.

## 2. Yelp
Houston Superior Painting does **not** run an official Yelp marketing or review program.
Observed 2026-10-26: an unclaimed listing with 1.0 stars from 2 reviews and phone **(346) 521-4992**. The website stopped linking to it on 2026-10-07 because it couldn't be confirmed as this business.
- [ ] Decide whether the listing is really this business (name, address, the two reviews).
- [ ] If it's wrong or a duplicate: on the listing, use "Edit business info" or "Report" ("closed / not a business / duplicate / incorrect info") and give the correct details above. This doesn't require claiming.
- [ ] **Don't claim it** without Juan deciding to; claiming starts a business relationship with Yelp.
- [ ] Don't ask customers for Yelp reviews or run a review campaign. Never write or buy reviews.

## 3. Legacy Weebly site
**URL unknown. Juan needs to provide it.**
- [ ] Sign in to Weebly (or Square Online, which now owns Weebly) with the account that built it.
- [ ] Unpublish it: Settings → "Unpublish site". Or delete it: Settings → "Delete site".
- [ ] If neither is possible right away: Settings → SEO → tick "Hide site from search engines" (adds noindex). Remove any "licensed painter" wording from the pages in the meantime.
- [ ] If it used a custom domain that Juan controls: point the domain to houstonsuperiorpainting.com with a permanent redirect.
- [ ] After it's down: in Google Search Console, under Removals, request removal of the old URLs if they still appear.

## 4. `.net` domain
Checked 2026-10-27: `houstonsuperiorpainting.net` and `www.houstonsuperiorpainting.net` return a **308** to the exact `.com` path. Checked on `/`, `/painters-katy-tx`, `/exterior-painting-houston-tx` and `/contact`.
- [x] Permanent 308 redirect to the exact `.com` equivalent. Keep this permanently and renew the domain.
- [ ] In Search Console, if a `.net` property exists, go to Sitemaps and remove any submitted `.net` sitemap. Don't submit a new one.
- [ ] Optional: in the `.net` property, run Settings → Change of address → `.com`.

## 5. Search-index cleanup (stale snippets)
Live HTML checked 2026-10-27, all 209 sitemap pages. **Clean:**
- no "JJ Semo"
- no "500+" claim (the only hit is "3,500+ sq ft")
- no "$2M"
- no "no upfront", "nothing due" or "$0 down"
- no "licensed painter" or "state-licensed"
- no bonding claim (the only hits are "bonded" meaning paint adhesion)

Google may still show old snippets for pages it hasn't recrawled. **Don't put old wording back to match them.**

Priority pages to request reindexing for, in order:
1. `/`
2. `/painters-houston-tx`
3. `/painters-cypress-tx`
4. `/painters-katy-tx`
5. `/painters-sugar-land-tx`
6. `/painters-magnolia-tx`
7. `/interior-painting-houston-tx`
8. `/exterior-painting-houston-tx`
9. `/cabinet-refinishing-houston-tx`
10. `/houston-painting-cost-guide`
11. `/painting-financing-houston`
12. `/about`
13. `/reviews`
14. `/faq`
15. `/contact`

URL Inspection steps for each URL:
1. Open https://search.google.com/search-console and select the `https://houstonsuperiorpainting.com` property.
2. Paste the full URL into the "Inspect any URL" bar at the top and press Enter.
3. Click **Test live URL**. Wait for "URL is available to Google", then open "View tested page" → Screenshot / HTML and check the old wording isn't there.
4. Click **Request indexing**. Google allows roughly 10 requests per day, so spread the list over two days.
5. A week later, search `site:houstonsuperiorpainting.com "no upfront"` (and the other old phrases) to see which snippets are left.
6. If an old snippet still shows after recrawling, use Search Console → Removals → **Clear cached URL**. That's a temporary snippet refresh, not a removal.

## 6. Other listings with the old phone (found 2026-10-26)
- [ ] **Giphy channel** (giphy.com/channel/hsuperiorpaint): old phone, and the bio says "no up-front costs". Change the phone to (346) 594-5960 and remove the payment wording.
- [ ] **Manta:** lists suite "#405" and the old phone. Claim it and correct it.
- [ ] **Apple Maps** (Apple Business Connect): the Houston listing is unclaimed and has no phone. Claim it and add (346) 594-5960.
- [ ] **Bing Places:** the Houston description says "heart of Katy", and Sugar Land and Magnolia are missing. Fix the description and add the two offices (Bing can import them from Google Business Profile).
- [ ] **Google Business Profiles** (all five): replace "Open 24 hours" with Mon–Fri 7 AM – 7 PM, Sat 8 AM – 4 PM, Sun closed (Juan confirmed 2026-10-27), and set each profile's website link to its office page (Sugar Land currently uses `http://`). Fix the ".." in the Houston profile name, and decide whether the Magnolia profile name needs the city suffix like the others.
- [ ] **houstonsuperiorpaintingmagnoliatx.com:** uses the Magnolia address with phone (832) 764-2774 and another company's social links. Find out who runs it; if it isn't authorized, report it.

---

## 7. Additions from the 2026-10-27 second brief

Correct values for every listing: **Houston Superior Painting** · founder **Juan Serra** · founded **2019** · **(346) 594-5960** · https://houstonsuperiorpainting.com · HQ 14150 Huffmeister Rd, Suite 410, Cypress, TX 77429 · Texas does not issue a statewide painting-contractor license (never "licensed") · no bonding or coverage-amount claims · no "no upfront cost" wording.

Evidence to have ready for any correction request: a utility bill or business document showing the business name and address, the Google Business Profile link for the office, the website contact page, and access to the business phone or email for verification.

| Listing | URL | Incorrect | Correct | How to fix |
|---|---|---|---|---|
| Old Weebly site | **URL unknown — Juan to supply** | Old phone, "licensed/bonded" wording, "no upfront cost" claims, old company info | Values above | Sign in to Weebly/Square → Unpublish or Delete; if not possible, Settings → SEO → "Hide site from search engines" and remove the wording; if it uses a domain Juan owns, 301 it to houstonsuperiorpainting.com |
| Poyst | https://www.poyst.com/business/houston-superior-painting | Name "Houston Superior Painting..", phone (346) 812-3392 | "Houston Superior Painting", (346) 594-5960 | Claim the listing ("Is this your business?"), verify by phone/email, edit; otherwise use the site's contact/report form and keep a screenshot |
| BuildZoom | **Not found in search 2026-10-27 — Juan to supply the URL** | Old phone; painting-license wording | (346) 594-5960; remove license wording (Texas has no statewide painting license) | Claim the profile on BuildZoom ("Claim this business" / contractor login) and edit; or email BuildZoom support with the evidence above |
| CitiesProfessionals | **Not found in search 2026-10-27 — Juan to supply the URL** | Founder listed as "JJ Semo" | Founder: Juan Serra | Use the listing's claim/edit or contact form; attach proof of ownership (Texas SOS filing or business document naming Juan Serra) |
| Giphy channel | https://giphy.com/channel/hsuperiorpaint | Phone (346) 521-4992; bio says "licensed, bonded, and insured" and "no up-front costs" | (346) 594-5960; "Insured. Free written estimates." | Sign in to the Giphy channel → Edit profile |
| Lantern (AI directory) | https://lantern.llc/b/houston-superior-painting-houston | Phone (346) 812-4492 | (346) 594-5960 | Use the page's claim/correction link or contact Lantern support |
| Unmanaged Yelp result | (search yelp.com for "Houston Superior Painting" Houston) | Seen 2026-10-26: 1.0 stars from 2 reviews, phone (346) 521-4992 | Values above | **First confirm it is this business.** If it is: "Edit business info" → correct phone/website, or "Report" as incorrect/duplicate. Do not claim it or start a Yelp program without a separate decision; never solicit or buy reviews |

## 8. Search Console and Bing (owner actions, not automated)

### Resubmit the sitemap — Google Search Console
1. https://search.google.com/search-console → property `https://houstonsuperiorpainting.com`.
2. **Indexing → Sitemaps** → enter `sitemap.xml` → **Submit** (resubmitting is fine; it prompts a re-read).
3. Check the status reads "Success" and "Discovered pages" ≈ the sitemap count (212 on 2026-10-27).

### Priority URLs to inspect and request indexing (about 10/day)
Day 1: `/`, `/about`, `/insurance-and-warranty`, `/warranty`, `/reviews`, `/painting-financing-houston`, `/faq`, `/projects`, `/blog`, `/es`
Day 2: `/painters-cypress-tx`, `/painters-houston-tx`, `/painters-katy-tx`, `/painters-sugar-land-tx`, `/painters-magnolia-tx`, `/interior-painting-houston-tx`, `/exterior-painting-houston-tx`, `/cabinet-refinishing-houston-tx`, `/commercial-painting-houston-tx`, `/houston-painting-cost-guide`

For each: paste the full URL in the top bar → **Test live URL** → confirm "URL is available to Google" → **Request indexing**.

### Monitor
- **Indexing → Pages**: watch "Crawled – currently not indexed" and "Duplicate, Google chose different canonical than user". Open each, note the URLs, and send them over; don't noindex or redirect anything without review.
- Old snippets (JJ Semo, 500+, $2M, no-upfront) clear as Google recrawls; if one persists after recrawl, **Removals → Clear cached URL**.

### Bing Webmaster Tools
1. https://www.bing.com/webmasters → add the site (fastest: **Import from Google Search Console**).
2. **Sitemaps** → submit `https://houstonsuperiorpainting.com/sitemap.xml`.
3. **URL Inspection** → request indexing for the Day 1 list (Bing allows a daily quota).
4. Bing Places for Business: fix the Houston description ("heart of Katy") and add the Sugar Land and Magnolia offices (can import from Google Business Profile).

No Google Business Profile was changed by this work, and none should be merged, suspended or renamed as part of it.
