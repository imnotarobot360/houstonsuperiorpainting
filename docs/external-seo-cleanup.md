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
- **Hours:** to be confirmed by Juan. The website says Mon–Fri 7 AM – 7 PM, Sat 8 AM – 4 PM, Sun closed. The Google profiles say "Open 24 hours". Pick one and use it everywhere.

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
- [ ] **Google Business Profiles** (all five): replace "Open 24 hours" with the real hours, and set each profile's website link to its office page (Sugar Land currently uses `http://`). Fix the ".." in the Houston profile name, and decide whether the Magnolia profile name needs the city suffix like the others.
- [ ] **houstonsuperiorpaintingmagnoliatx.com:** uses the Magnolia address with phone (832) 764-2774 and another company's social links. Find out who runs it; if it isn't authorized, report it.
