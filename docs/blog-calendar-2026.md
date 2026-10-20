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

## Full schedule (40 posts, October 20, 2026 to November 28, 2026)

Generated from `lib/blog-schedule.ts` on 2026-10-19 after adding the Benjamin Moore 2027 series (5 posts, Oct 21–27, in the owner's order); later posts moved back 5 days. Post dates on the pages follow this schedule automatically.

| Date | Post | URL |
|---|---|---|
| 2026-10-20 | What Colors Go With Celery SW 6421? Coordinating-Color Guide | /blog/colors-that-go-with-celery-sw-6421 |
| 2026-10-21 | Benjamin Moore Color of the Year 2027: Webster Green HC-130 in Houston Homes | /blog/benjamin-moore-color-of-the-year-2027-webster-green-houston |
| 2026-10-22 | Celery SW 6421 vs. Webster Green HC-130: Comparing the 2027 Colors of the Year | /blog/celery-vs-webster-green-2027-color-of-the-year |
| 2026-10-23 | Sherwin-Williams Rewild 2027: The Colors and How They Work in Houston Homes | /blog/sherwin-williams-rewild-2027-colors-houston |
| 2026-10-24 | Best 2027 Paint Colors for Houston Homes | /blog/best-paint-colors-houston-homes-2027 |
| 2026-10-25 | Benjamin Moore Color Trends 2027: The Best Colors for Houston Homes | /blog/benjamin-moore-color-trends-2027-houston |
| 2026-10-26 | Where to Use Celery SW 6421: Cabinets, Bedrooms, Bathrooms and Exteriors | /blog/where-to-use-celery-sw-6421 |
| 2026-10-27 | Are Green Kitchen Cabinets Still in Style for 2027? | /blog/green-kitchen-cabinet-colors-2027-houston |
| 2026-10-28 | Cost to Paint Ceilings, Trim and Doors in Houston (2026) | /blog/cost-paint-ceilings-trim-doors-houston |
| 2026-10-29 | Wood Rot Repair Before Exterior Painting: What Houston Homeowners Should Know | /blog/wood-rot-repair-before-painting-houston |
| 2026-10-30 | Why Paint Touch-Ups Don't Match, and How to Fix Them | /blog/why-paint-touch-ups-dont-match |
| 2026-10-31 | Can You Apply Latex Paint Over Oil-Based Paint? | /blog/latex-paint-over-oil-based-paint |
| 2026-11-01 | How Long Before You Can Use a Freshly Painted Room? | /blog/how-long-before-using-freshly-painted-room |
| 2026-11-02 | Best Paint for Houston Bathrooms, Laundry Rooms and Humid Areas | /blog/best-paint-bathrooms-laundry-rooms-houston |
| 2026-11-03 | Orange Peel vs. Knockdown vs. Smooth Walls: Houston Wall Textures Explained | /blog/orange-peel-vs-knockdown-vs-smooth-walls |
| 2026-11-04 | How Painters Match an Existing Wall Texture | /blog/how-painters-match-wall-texture |
| 2026-11-05 | Painting After Foundation Repair: Cracks, Drywall and Waiting Times | /blog/painting-after-foundation-repair-houston |
| 2026-11-06 | Do Professional Painters Move and Protect Furniture? | /blog/do-painters-move-furniture |
| 2026-11-07 | Painting Tall Foyers, Stairwells and High Ceilings in Houston | /blog/painting-high-ceilings-foyers-stairwells-houston |
| 2026-11-08 | Should You Fill Oak Grain Before Painting Cabinets? | /blog/fill-oak-grain-before-painting-cabinets |
| 2026-11-09 | Cabinet Painting On-Site vs. Off-Site: What's the Difference? | /blog/cabinet-painting-on-site-vs-off-site |
| 2026-11-10 | Should You Paint the Inside of Kitchen Cabinets? | /blog/paint-inside-kitchen-cabinets |
| 2026-11-11 | Rental Turnover Painting in Houston: Timeline and Checklist | /blog/rental-turnover-painting-houston |
| 2026-11-12 | After-Hours and Weekend Commercial Painting in Houston | /blog/after-hours-commercial-painting-houston |
| 2026-11-13 | Painting Medical and Dental Offices While They Stay Open | /blog/medical-dental-office-painting-houston |
| 2026-11-14 | HOA and Multifamily Painting: Planning, Access and Resident Communication | /blog/hoa-multifamily-painting-houston |
| 2026-11-15 | Painting Interior Doors: Slab vs. Paneled, Sheen and Prep | /blog/painting-interior-doors-houston |
| 2026-11-16 | How to Paint Over Dark Walls With a Light Color | /blog/paint-dark-walls-lighter-color |
| 2026-11-17 | Getting Interior Painting Done Before the Holidays | /blog/interior-painting-before-holidays-houston |
| 2026-11-18 | Caulking Before Exterior Painting: What and Where | /blog/caulking-before-exterior-painting-houston |
| 2026-11-19 | Soffit and Fascia Painting in Houston | /blog/soffit-fascia-painting-houston |
| 2026-11-20 | Painting a Front Door That Lasts in Houston Sun | /blog/front-door-paint-houston-sun |
| 2026-11-21 | Garage Door Painting in Houston | /blog/garage-door-painting-houston |
| 2026-11-22 | Painting Metal Railings, Gates and Fences in Houston | /blog/painting-metal-railings-gates-houston |
| 2026-11-23 | Ceiling Paint: Flat White, the Wall Color, or Something Bolder? | /blog/ceiling-paint-color-white-vs-color |
| 2026-11-24 | Best Paint for Kitchen Walls: Washable and Grease-Resistant | /blog/kitchen-wall-paint-washable-houston |
| 2026-11-25 | Painting a Nursery or Kids' Room: Timing, Low-VOC, Durability | /blog/nursery-kids-room-painting |
| 2026-11-26 | How Much Paint Do I Need for a Room? | /blog/how-much-paint-for-a-room |
| 2026-11-27 | Painting Exterior Window Trim and Sills in Houston | /blog/window-trim-sill-painting-houston |
| 2026-11-28 | Painting Shiplap and Board and Batten | /blog/painting-shiplap-board-and-batten-houston |

## Already live before the calendar (from the owner's 30-topic list)

Celery SW 6421, popcorn ceiling cost, paint before selling, primer vs two coats, staying home during painting, occupied office, water stains, paint before moving in, commercial bid comparison.

## Company practices confirmed by the owner (2026-10-19)

- Furniture: our crews move all heavy furniture; the customer moves expensive or fragile items.
- Cabinets: painted on-site at the home; doors removed and sprayed flat in a contained area.
- High ceilings: we own scaffolding.
