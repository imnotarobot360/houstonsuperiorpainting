# Daily blog calendar (owner request 2026-10-19)

One new post a day at **6:00 AM Houston time**. Posts are written and deployed ahead of time. Each one stays
hidden until its date (it returns 404 and isn't listed on `/blog`), then appears on its own. No push is
needed on the day.

- **Calendar file:** `lib/blog-schedule.ts`.
  - `BLOG_SCHEDULE` holds posts that are written.
  - `PLANNED_POSTS` holds posts on the calendar that aren't written yet (empty now: all 21 are written). Nothing on the site reads it.
  - `pnpm test` fails if a scheduled post has no page, or if a planned post already has one. A planned post
    with a page would publish with no date gate.
- **Sitemap:** built at deploy time, so a post joins it on the first deploy after its date. `/blog` and the
  IndexNow ping announce it on the day itself.
- **Daily IndexNow ping:** `/api/cron/indexnow-scheduled` runs from `vercel.json` at 12:30 UTC
  (7:30 AM CDT / 6:30 AM CST). It needs **`CRON_SECRET`** set in Vercel â†’ Settings â†’ Environment Variables.
  Without it the ping is refused and the posts still publish.
- **Previewing unpublished posts locally:** `BLOG_PREVIEW=1 npx next start` (never works on production).
- **Linking rule:** nothing may link to a post before its date. The site check fails on 404 links.

## The owner's 30 topics

| # | Topic | Status | URL / date |
|---|---|---|---|
| 1 | Celery SW 6421 in Houston homes | Live | /blog/sherwin-williams-color-of-the-year-2027-celery-houston |
| 2 | What colors go with Celery SW 6421 | **Scheduled Oct 20** | /blog/colors-that-go-with-celery-sw-6421 |
| 3 | Where to use Celery SW 6421 | **Scheduled Oct 22** | /blog/where-to-use-celery-sw-6421 |
| 4 | Sherwin-Williams Rewild 2027 | **Scheduled Oct 21** | /blog/sherwin-williams-rewild-2027-colors-houston |
| 5 | Popcorn ceiling removal cost | Live (existing post) | /blog/popcorn-ceiling-removal-houston |
| 6 | Paint before selling | Live | /blog/paint-house-before-selling-houston |
| 7 | Primer or two coats | Live | /blog/primer-vs-two-coats-paint-houston |
| 8 | Stay home during interior painting | Live | /blog/stay-home-during-interior-painting-houston |
| 9 | Painting an occupied office | Live (existing post) | /blog/commercial-office-painting-houston |
| 10 | Wood rot repair before exterior painting | **Scheduled Oct 24** | /blog/wood-rot-repair-before-painting-houston |
| 11 | Paint over water stains | Live | /blog/paint-over-water-stains-houston |
| 12 | Cost to paint ceilings, trim and doors | **Scheduled Oct 23** | /blog/cost-paint-ceilings-trim-doors-houston |
| 13 | Painting after foundation repair | **Scheduled Oct 31** | /blog/painting-after-foundation-repair-houston |
| 14 | Orange peel vs knockdown vs smooth | **Scheduled Oct 29** | /blog/orange-peel-vs-knockdown-vs-smooth-walls |
| 15 | How painters match wall texture | **Scheduled Oct 30** | /blog/how-painters-match-wall-texture |
| 16 | Latex over oil-based paint | **Scheduled Oct 26** | /blog/latex-paint-over-oil-based-paint |
| 17 | Why touch-ups don't match | **Scheduled Oct 25** | /blog/why-paint-touch-ups-dont-match |
| 18 | Paint before moving in | Live | /blog/paint-before-moving-in-houston |
| 19 | Rental turnover painting | **Scheduled Nov 6** | /blog/rental-turnover-painting-houston |
| 20 | Best paint for bathrooms and humid areas | **Scheduled Oct 28** | /blog/best-paint-bathrooms-laundry-rooms-houston |
| 21 | How long before using a painted room | **Scheduled Oct 27** | /blog/how-long-before-using-freshly-painted-room |
| 22 | Tall foyers, stairwells, high ceilings | **Scheduled Nov 2** | /blog/painting-high-ceilings-foyers-stairwells-houston |
| 23 | Do painters move furniture | **Scheduled Nov 1** | /blog/do-painters-move-furniture |
| 24 | Fill oak grain before painting cabinets | **Scheduled Nov 3** | /blog/fill-oak-grain-before-painting-cabinets |
| 25 | Cabinet painting on-site vs off-site | **Scheduled Nov 4** | /blog/cabinet-painting-on-site-vs-off-site |
| 26 | Paint inside kitchen cabinets | **Scheduled Nov 5** | /blog/paint-inside-kitchen-cabinets |
| 27 | Commercial bid checklist | Live (covered) | /blog/compare-commercial-painting-bids-houston and the checklist on /commercial-painting-cost-per-square-foot-houston |
| 28 | After-hours commercial painting | **Scheduled Nov 7** | /blog/after-hours-commercial-painting-houston |
| 29 | Medical and dental offices | **Scheduled Nov 8** | /blog/medical-dental-office-painting-houston |
| 30 | HOA and multifamily painting | **Scheduled Nov 9** | /blog/hoa-multifamily-painting-houston |

## Company practices confirmed by the owner (2026-10-19)

- **#23 furniture:** our crews move all heavy furniture; the customer moves expensive or fragile items. Post updated.
- **#25 cabinets:** painted on-site at the home; doors removed and sprayed flat in a contained area. Post updated.
- **#22 high ceilings:** we own scaffolding. Post updated.

## Extension, Nov 10–23 (added 2026-10-19 so daily posting continues)

| Date | Post | URL |
|---|---|---|
| Nov 10 | Painting interior doors | /blog/painting-interior-doors-houston |
| Nov 11 | Painting over dark walls with a light color | /blog/paint-dark-walls-lighter-color |
| Nov 12 | Interior painting before the holidays | /blog/interior-painting-before-holidays-houston |
| Nov 13 | Caulking before exterior painting | /blog/caulking-before-exterior-painting-houston |
| Nov 14 | Soffit and fascia painting | /blog/soffit-fascia-painting-houston |
| Nov 15 | Front door paint in Houston sun | /blog/front-door-paint-houston-sun |
| Nov 16 | Garage door painting | /blog/garage-door-painting-houston |
| Nov 17 | Metal railings, gates and fences | /blog/painting-metal-railings-gates-houston |
| Nov 18 | Ceiling paint: white vs. color | /blog/ceiling-paint-color-white-vs-color |
| Nov 19 | Washable kitchen wall paint | /blog/kitchen-wall-paint-washable-houston |
| Nov 20 | Nursery and kids' room painting | /blog/nursery-kids-room-painting |
| Nov 21 | How much paint for a room | /blog/how-much-paint-for-a-room |
| Nov 22 | Window trim and sills | /blog/window-trim-sill-painting-houston |
| Nov 23 | Shiplap and board and batten | /blog/painting-shiplap-board-and-batten-houston |

All scheduled. To continue past Nov 23, add posts to `BLOG_SCHEDULE` starting Nov 24 (the tests enforce one per day with no gaps).
