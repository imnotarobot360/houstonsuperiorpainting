# Daily blog calendar (owner request 2026-10-19)

One new post a day at **6:00 AM Houston time**. Posts are written and deployed ahead of time. Each one stays
hidden until its date (it returns 404 and isn't listed on `/blog`), then appears on its own. No push is
needed on the day.

- **Calendar file:** `lib/blog-schedule.ts`.
  - `BLOG_SCHEDULE` holds posts that are written.
  - `PLANNED_POSTS` holds posts on the calendar that aren't written yet (22 posts not yet written). Nothing on the site reads it.
  - `pnpm test` fails if a scheduled post has no page, or if a planned post already has one. A planned post
    with a page would publish with no date gate.
- **Sitemap:** built at deploy time, so a post joins it on the first deploy after its date. `/blog` and the
  IndexNow ping announce it on the day itself.
- **Daily IndexNow ping:** `/api/cron/indexnow-scheduled` runs from `vercel.json` at 12:30 UTC
  (7:30 AM CDT / 6:30 AM CST). It needs **`CRON_SECRET`** set in Vercel â†’ Settings â†’ Environment Variables.
  Without it the ping is refused and the posts still publish.
- **Previewing unpublished posts locally:** `BLOG_PREVIEW=1 npx next start` (never works on production).
- **Linking rule:** nothing may link to a post before its date. The site check fails on 404 links.

## Full schedule (55 posts, October 20, 2026 to December 13, 2026)

Generated from `lib/blog-schedule.ts`. Every post here is written and deployed; each stays hidden until its date. Post dates on the pages follow this schedule automatically.

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
| 2026-11-29 | Can You Paint a House Exterior in Houston in Winter? | /blog/can-you-paint-exterior-in-winter-houston |
| 2026-11-30 | Should You Paint Stained Wood Trim? Pros, Cons and Prep | /blog/paint-stained-wood-trim-houston |
| 2026-12-01 | Painting a Brick Fireplace: Paint, Limewash or Leave It? | /blog/painting-brick-fireplace-houston |
| 2026-12-02 | Painting Stair Railings, Banisters and Spindles | /blog/painting-stair-railings-banisters-spindles |
| 2026-12-03 | How to Clean Painted Walls Without Ruining the Finish | /blog/how-to-clean-painted-walls |
| 2026-12-04 | Hanging Holiday Decorations Without Damaging Paint | /blog/hang-holiday-decorations-without-damaging-paint |
| 2026-12-05 | Agreeable Gray vs. Accessible Beige in Houston Homes | /blog/agreeable-gray-vs-accessible-beige-houston |
| 2026-12-06 | Repainting a New Build: Builder-Grade Paint in Houston Homes | /blog/repainting-builder-grade-paint-new-home-houston |
| 2026-12-07 | Low-VOC and Zero-VOC Paint: Pets, Allergies and Sensitive Households | /blog/low-voc-zero-voc-paint-houston |
| 2026-12-08 | Should Trim Be the Same Color as the Walls? | /blog/should-trim-be-same-color-as-walls |
| 2026-12-09 | Painting Wood Paneling: Grooves, Primer and Bleed-Through | /blog/painting-wood-paneling-houston |
| 2026-12-10 | Why Painted White Cabinets Turn Yellow (and How to Prevent It) | /blog/why-white-painted-cabinets-turn-yellow |
| 2026-12-11 | North- vs. South-Facing Rooms: Choosing Paint Colors in Houston | /blog/north-vs-south-facing-room-paint-colors-houston |
| 2026-12-12 | Choosing Paint Colors for an Open Floor Plan | /blog/open-floor-plan-paint-colors-houston |
| 2026-12-13 | After a Houston Freeze: Checking Exterior Paint, Caulk and Wood | /blog/freeze-damage-exterior-paint-caulk-houston |

## Already live before the calendar (from the owner's 30-topic list)

Celery SW 6421, popcorn ceiling cost, paint before selling, primer vs two coats, staying home during painting, occupied office, water stains, paint before moving in, commercial bid comparison.

## Company practices confirmed by the owner (2026-10-19)

- Furniture: our crews move all heavy furniture; the customer moves expensive or fragile items.
- Cabinets: painted on-site at the home; doors removed and sprayed flat in a contained area.
- High ceilings: we own scaffolding.

## Planned, not yet written (15 posts, December 14, 2026 to December 28, 2026)

Planned 2026-10-19. Topics checked against every existing post and page so none repeats one. Posts marked **needs owner answer** depend on whether we do that work or on job details only the owner can confirm.

| Date | Post | Search phrase | |
|---|---|---|---|
| 2026-12-14 | Painting Shutters: Wood, Composite and Vinyl | painting shutters | **needs owner answer** |
| 2026-12-15 | Painting Gutters and Downspouts in Houston | painting gutters | **needs owner answer** |
| 2026-12-16 | Can You Paint Vinyl Siding in Houston? | painting vinyl siding | **needs owner answer** |
| 2026-12-17 | Painting or Staining Cedar and Wood Siding in Houston | painting cedar siding |  |
| 2026-12-18 | Trim, Door and Shutter Colors for a Red or Orange Brick House | trim colors for red brick house |  |
| 2026-12-19 | Painting a Two-Story House Exterior: Ladders, Lifts and Cost | painting two story house | **needs owner answer** |
| 2026-12-20 | Painting a Restaurant or Retail Store in Houston | restaurant painting Houston |  |
| 2026-12-21 | Paint Your Office During the Holiday Shutdown | office painting holidays |  |
| 2026-12-22 | How Long Does Leftover Paint Last? Storing It for Touch-Ups | how long does leftover paint last |  |
| 2026-12-23 | Painting Garage Walls and Ceilings in Houston | painting garage walls |  |
| 2026-12-24 | Dining Room Paint Colors for Houston Homes | dining room paint colors |  |
| 2026-12-25 | Calm Bedroom Paint Colors for Better Sleep | calm bedroom paint colors |  |
| 2026-12-26 | Planning a 2027 Painting Project in Houston: Budget, Timing and Booking | planning painting project 2027 |  |
| 2026-12-27 | Exterior Paint Color Mistakes Houston Homeowners Regret | exterior paint color mistakes |  |
| 2026-12-28 | Can You Paint Laminate or Thermofoil Cabinets? | paint laminate cabinets | **needs owner answer** |
