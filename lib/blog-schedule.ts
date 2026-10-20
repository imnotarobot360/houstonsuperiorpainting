// Daily blog calendar (owner request 2026-10-19: "post it every day").
//
// Every post here is written in advance and deployed early, but stays hidden
// until its publishOn date at 6:00 AM Houston time:
//   - the post page returns 404 before then (components/aeo/guide-article.tsx),
//   - /blog lists it only from that date (app/blog/page.tsx renders per request),
//   - the sitemap includes it only when built on or after that date
//     (app/sitemap.ts is static; the next deploy picks it up),
//   - /api/cron/indexnow-scheduled pings IndexNow on the day (vercel.json cron;
//     needs CRON_SECRET in Vercel, otherwise it is refused and nothing else changes).
//
// Rule: until a post is live, nothing else on the site may link to it (the
// internal-link check in scripts/verify-site.mjs would fail on a 404).

export type ScheduledPost = {
  slug: string
  /** YYYY-MM-DD, Houston (America/Chicago) calendar date. */
  publishOn: string
  title: string
  excerpt: string
  category: string
  readTime: string
  image: string
  /** Primary search phrase from the owner's list. */
  keyword: string
}

export const PUBLISH_HOUR_HOUSTON = 6

export const BLOG_SCHEDULE: ScheduledPost[] = [
  {
    slug: "colors-that-go-with-celery-sw-6421",
    publishOn: "2026-10-20",
    title: "What Colors Go With Celery SW 6421? Coordinating-Color Guide",
    excerpt: "The colors Sherwin-Williams pairs with Celery, which whites work for trim, and how to combine it with Houston floors, counters, brick and stone.",
    category: "Color Guide",
    readTime: "6 min read",
    image: "/images/blog/celery-sw-6421-swatch.png",
    keyword: "colors that go with Celery SW 6421",
  },
  {
    slug: "benjamin-moore-color-of-the-year-2027-webster-green-houston",
    publishOn: "2026-10-21",
    title: "Benjamin Moore Color of the Year 2027: Webster Green HC-130 in Houston Homes",
    excerpt: "Benjamin Moore's 2027 Color of the Year is a deep, confident green. How it looks in Houston light, where to use it, and the whites, blues and browns that pair with it.",
    category: "Color Guide",
    readTime: "6 min read",
    image: "/images/projects/richmond-sage-kitchen/04-sage-island.jpg",
    keyword: "Benjamin Moore Color of the Year 2027",
  },
  {
    slug: "celery-vs-webster-green-2027-color-of-the-year",
    publishOn: "2026-10-22",
    title: "Celery SW 6421 vs. Webster Green HC-130: Comparing the 2027 Colors of the Year",
    excerpt: "Sherwin-Williams' light, airy Celery and Benjamin Moore's deep Webster Green: how they differ, where each works, and how to use them together.",
    category: "Color Guide",
    readTime: "5 min read",
    image: "/images/blog/celery-sw-6421-swatch.png",
    keyword: "Celery vs Webster Green",
  },
  {
    slug: "sherwin-williams-rewild-2027-colors-houston",
    publishOn: "2026-10-23",
    title: "Sherwin-Williams Rewild 2027: The Colors and How They Work in Houston Homes",
    excerpt: "Sherwin-Williams' 2027 Colormix forecast, Rewild: 48 colors in three design stories plus 10 Continuity Colors, and how to use them in Houston light.",
    category: "Color Guide",
    readTime: "6 min read",
    image: "/images/blog/paint-color-trends-2026.jpg",
    keyword: "Sherwin-Williams 2027 color trends",
  },
  {
    slug: "best-paint-colors-houston-homes-2027",
    publishOn: "2026-10-24",
    title: "Best 2027 Paint Colors for Houston Homes",
    excerpt: "The 2027 colors from Sherwin-Williams and Benjamin Moore that suit Houston homes, organized by light, room and style.",
    category: "Color Guide",
    readTime: "6 min read",
    image: "/images/blog/paint-colors-houston-homes-2026.png",
    keyword: "best 2027 paint colors Houston",
  },
  {
    slug: "benjamin-moore-color-trends-2027-houston",
    publishOn: "2026-10-25",
    title: "Benjamin Moore Color Trends 2027: The Best Colors for Houston Homes",
    excerpt: "All eight Color Trends 2027 colors: undertones, LRV, best rooms, trim colors and how each looks in Houston light.",
    category: "Color Guide",
    readTime: "7 min read",
    image: "/images/blog/interior-paint-colors-2026.jpg",
    keyword: "Benjamin Moore Color Trends 2027",
  },
  {
    slug: "where-to-use-celery-sw-6421",
    publishOn: "2026-10-26",
    title: "Where to Use Celery SW 6421: Cabinets, Bedrooms, Bathrooms and Exteriors",
    excerpt: "Room by room: where Sherwin-Williams' 2027 Color of the Year works best, which sheen to use, and where to be careful in Houston homes.",
    category: "Color Guide",
    readTime: "5 min read",
    image: "/images/blog/celery-sw-6421-swatch.png",
    keyword: "Celery SW 6421 ideas",
  },
  {
    slug: "green-kitchen-cabinet-colors-2027-houston",
    publishOn: "2026-10-27",
    title: "Are Green Kitchen Cabinets Still in Style for 2027?",
    excerpt: "Both 2027 Colors of the Year are greens. Dark vs. light green cabinets, countertops, hardware, oak grain and the right cabinet coating.",
    category: "Cabinet Refinishing",
    readTime: "5 min read",
    image: "/images/projects/richmond-sage-kitchen/01-sage-kitchen-corner.jpg",
    keyword: "green kitchen cabinets 2027",
  },
  {
    slug: "cost-paint-ceilings-trim-doors-houston",
    publishOn: "2026-10-28",
    title: "Cost to Paint Ceilings, Trim and Doors in Houston (2026)",
    excerpt: "2026 planning ranges for painting ceilings, baseboards and trim, and doors in Houston, and what moves the price up or down.",
    category: "Cost Guide",
    readTime: "5 min read",
    image: "/images/projects/fulshear-interior/06-home-office-wall-molding.jpg",
    keyword: "trim and ceiling painting cost",
  },
  {
    slug: "wood-rot-repair-before-painting-houston",
    publishOn: "2026-10-29",
    title: "Wood Rot Repair Before Exterior Painting: What Houston Homeowners Should Know",
    excerpt: "Why rotted trim, fascia and siding must be fixed before paint, how to spot it, repair vs replace, and how it shows up on the estimate.",
    category: "Exterior Painting",
    readTime: "5 min read",
    image: "/images/projects/heights-exterior-siding/02-side-porch.jpg",
    keyword: "wood rot exterior painting",
  },
  {
    slug: "why-paint-touch-ups-dont-match",
    publishOn: "2026-10-30",
    title: "Why Paint Touch-Ups Don't Match, and How to Fix Them",
    excerpt: "Flashing, sheen, aging and application are why touch-ups show. When a touch-up can work and when to repaint the whole wall.",
    category: "Interior Painting",
    readTime: "5 min read",
    image: "/images/projects/fulshear-interior/01-living-room.jpg",
    keyword: "paint touch-up does not match",
  },
  {
    slug: "latex-paint-over-oil-based-paint",
    publishOn: "2026-10-31",
    title: "Can You Apply Latex Paint Over Oil-Based Paint?",
    excerpt: "How to tell if trim or doors have oil-based paint, and the clean, sand and bonding-primer steps that keep latex from peeling.",
    category: "Paint Preparation",
    readTime: "5 min read",
    image: "/images/blog/paint-preparation-houston.jpg",
    keyword: "latex over oil paint",
  },
  {
    slug: "how-long-before-using-freshly-painted-room",
    publishOn: "2026-11-01",
    title: "How Long Before You Can Use a Freshly Painted Room?",
    excerpt: "Dry to touch, recoat, put furniture back, hang pictures, wash the walls: the difference between drying and curing, and Houston humidity.",
    category: "Interior Painting",
    readTime: "5 min read",
    image: "/images/projects/fulshear-interior/07-bedroom-accent-wall.jpg",
    keyword: "paint drying and curing time",
  },
  {
    slug: "best-paint-bathrooms-laundry-rooms-houston",
    publishOn: "2026-11-02",
    title: "Best Paint for Houston Bathrooms, Laundry Rooms and Humid Areas",
    excerpt: "Sheen, mildew-resistant products, ventilation and prep for bathrooms and laundry rooms in Houston's humidity.",
    category: "Interior Painting",
    readTime: "5 min read",
    image: "/images/blog/flat-paint-bathroom-mistake.jpg",
    keyword: "bathroom paint Houston humidity",
  },
  {
    slug: "orange-peel-vs-knockdown-vs-smooth-walls",
    publishOn: "2026-11-03",
    title: "Orange Peel vs. Knockdown vs. Smooth Walls: Houston Wall Textures Explained",
    excerpt: "The common Houston wall textures, how each looks with paint, what each hides, and what changing texture involves.",
    category: "Interior Painting",
    readTime: "5 min read",
    image: "/images/blog/drywall-repair-guide.jpg",
    keyword: "Houston wall textures",
  },
  {
    slug: "how-painters-match-wall-texture",
    publishOn: "2026-11-04",
    title: "How Painters Match an Existing Wall Texture",
    excerpt: "Why patched walls show, how orange peel and knockdown are matched, and why painting the whole wall finishes the repair.",
    category: "Drywall Repair",
    readTime: "5 min read",
    image: "/images/drywall-after-1.jpg",
    keyword: "wall texture matching",
  },
  {
    slug: "painting-after-foundation-repair-houston",
    publishOn: "2026-11-05",
    title: "Painting After Foundation Repair: Cracks, Drywall and Waiting Times",
    excerpt: "Houston clay soil and foundation repair: why to wait before repairing cracks, what to fix first, and how to plan the repaint.",
    category: "Drywall Repair",
    readTime: "5 min read",
    image: "/images/drywall-before-1.jpg",
    keyword: "painting after foundation repair",
  },
  {
    slug: "do-painters-move-furniture",
    publishOn: "2026-11-06",
    title: "Do Professional Painters Move and Protect Furniture?",
    excerpt: "What painters usually move and cover, what you should handle yourself, and what your written estimate should say.",
    category: "Interior Painting",
    readTime: "4 min read",
    image: "/images/blog/prepare-home-interior-painting-houston.png",
    keyword: "painter furniture preparation",
  },
  {
    slug: "painting-high-ceilings-foyers-stairwells-houston",
    publishOn: "2026-11-07",
    title: "Painting Tall Foyers, Stairwells and High Ceilings in Houston",
    excerpt: "Access, safety, protection and lighting for two-story foyers, stairwells and vaulted ceilings, and why they cost more per square foot.",
    category: "Interior Painting",
    readTime: "5 min read",
    image: "/images/projects/richmond-great-room/01-great-room-fireplace.jpg",
    keyword: "high-ceiling painters Houston",
  },
  {
    slug: "fill-oak-grain-before-painting-cabinets",
    publishOn: "2026-11-08",
    title: "Should You Fill Oak Grain Before Painting Cabinets?",
    excerpt: "Why oak grain shows through paint, what grain filling does, and how to decide between a textured and a smooth finish.",
    category: "Cabinet Refinishing",
    readTime: "5 min read",
    image: "/images/projects/heights-white-beadboard-kitchen/01-kitchen-and-built-ins.jpg",
    keyword: "painted oak cabinets grain",
  },
  {
    slug: "cabinet-painting-on-site-vs-off-site",
    publishOn: "2026-11-09",
    title: "Cabinet Painting On-Site vs. Off-Site: What's the Difference?",
    excerpt: "Spraying doors in a shop vs. at your home: finish quality, time without doors, mess and cost, and what to ask your painter.",
    category: "Cabinet Refinishing",
    readTime: "5 min read",
    image: "/images/projects/cypress-white-teal-kitchen/02-teal-island-white-uppers.jpg",
    keyword: "cabinet painting process",
  },
  {
    slug: "paint-inside-kitchen-cabinets",
    publishOn: "2026-11-10",
    title: "Should You Paint the Inside of Kitchen Cabinets?",
    excerpt: "When painting cabinet interiors is worth it, why it adds time and cost, and the durability and cure issues to plan for.",
    category: "Cabinet Refinishing",
    readTime: "4 min read",
    image: "/images/projects/katy-cabinets-built-ins/02-wall-ovens-and-uppers.jpg",
    keyword: "painting inside cabinets",
  },
  {
    slug: "rental-turnover-painting-houston",
    publishOn: "2026-11-11",
    title: "Rental Turnover Painting in Houston: Timeline and Checklist",
    excerpt: "For landlords and property managers: a standard color and sheen, a turnover checklist, scheduling between tenants and keeping costs predictable.",
    category: "Interior Painting",
    readTime: "5 min read",
    image: "/images/projects/richmond-interior-arches/01-living-room-fireplace.jpg",
    keyword: "rental property painting",
  },
  {
    slug: "after-hours-commercial-painting-houston",
    publishOn: "2026-11-12",
    title: "After-Hours and Weekend Commercial Painting in Houston",
    excerpt: "When night and weekend painting makes sense, what it costs, and how to plan access, odor, security and the morning handoff.",
    category: "Commercial Painting",
    readTime: "5 min read",
    image: "/images/projects/cypress-commercial-office/02-after-long-hallway.jpg",
    keyword: "after-hours commercial painters",
  },
  {
    slug: "medical-dental-office-painting-houston",
    publishOn: "2026-11-13",
    title: "Painting Medical and Dental Offices While They Stay Open",
    excerpt: "Scheduling around patients, low-odor products, cleanable finishes, protecting equipment and coordinating with the practice.",
    category: "Commercial Painting",
    readTime: "5 min read",
    image: "/images/projects/cypress-commercial-office/03-after-office.jpg",
    keyword: "medical-office painting Houston",
  },
  {
    slug: "hoa-multifamily-painting-houston",
    publishOn: "2026-11-14",
    title: "HOA and Multifamily Painting: Planning, Access and Resident Communication",
    excerpt: "For boards and property managers: color approvals, phasing buildings, notices, parking and access, and keeping residents informed.",
    category: "Commercial Painting",
    readTime: "6 min read",
    image: "/images/blog/hoa-paint-rules-houston.png",
    keyword: "HOA painters Houston",
  },
  {
    slug: "painting-interior-doors-houston",
    publishOn: "2026-11-15",
    title: "Painting Interior Doors: Slab vs. Paneled, Sheen and Prep",
    excerpt: "How interior doors are painted for a smooth, durable finish: slab vs. paneled, removing vs. painting in place, sheen and dry time.",
    category: "Interior Painting",
    readTime: "5 min read",
    image: "/images/projects/fulshear-interior/05-entry-to-living-dining.jpg",
    keyword: "painting interior doors",
  },
  {
    slug: "paint-dark-walls-lighter-color",
    publishOn: "2026-11-16",
    title: "How to Paint Over Dark Walls With a Light Color",
    excerpt: "Why dark-to-light color changes take more coats, when a tinted primer helps, and how to avoid a patchy result.",
    category: "Interior Painting",
    readTime: "4 min read",
    image: "/images/projects/fulshear-interior/07-bedroom-accent-wall.jpg",
    keyword: "paint over dark walls",
  },
  {
    slug: "interior-painting-before-holidays-houston",
    publishOn: "2026-11-17",
    title: "Getting Interior Painting Done Before the Holidays",
    excerpt: "Plan backward from the date guests arrive: what to prioritize, how to schedule, and cure times to plan around.",
    category: "Interior Painting",
    readTime: "4 min read",
    image: "/images/projects/fulshear-interior/08-living-room-wide.jpg",
    keyword: "interior painting before holidays",
  },
  {
    slug: "caulking-before-exterior-painting-houston",
    publishOn: "2026-11-18",
    title: "Caulking Before Exterior Painting: What and Where",
    excerpt: "Which exterior joints to caulk before painting, which to leave open, and why failed caulk causes rot and peeling in Houston.",
    category: "Exterior Painting",
    readTime: "5 min read",
    image: "/images/projects/heights-exterior-siding/01-front-elevation.jpg",
    keyword: "caulking before exterior painting",
  },
  {
    slug: "soffit-fascia-painting-houston",
    publishOn: "2026-11-19",
    title: "Soffit and Fascia Painting in Houston",
    excerpt: "Why soffits and fascia fail first on Houston homes, how to check them for rot and mildew, and the prep that makes paint last.",
    category: "Exterior Painting",
    readTime: "4 min read",
    image: "/images/projects/pearland-exterior-hardie/03-front-corner.jpg",
    keyword: "soffit and fascia painting",
  },
  {
    slug: "front-door-paint-houston-sun",
    publishOn: "2026-11-20",
    title: "Painting a Front Door That Lasts in Houston Sun",
    excerpt: "Steel, fiberglass and wood doors, color and fade in direct sun, sheen, and what a front door costs to paint.",
    category: "Exterior Painting",
    readTime: "4 min read",
    image: "/images/projects/heights-exterior-siding/03-front-door.jpg",
    keyword: "front door paint Houston",
  },
  {
    slug: "garage-door-painting-houston",
    publishOn: "2026-11-21",
    title: "Garage Door Painting in Houston",
    excerpt: "How to paint steel or wood garage doors so they last in Houston sun, and how to keep the panels from sticking.",
    category: "Exterior Painting",
    readTime: "4 min read",
    image: "/images/projects/pearland-exterior-hardie/02-front-and-garage.jpg",
    keyword: "garage door painting",
  },
  {
    slug: "painting-metal-railings-gates-houston",
    publishOn: "2026-11-22",
    title: "Painting Metal Railings, Gates and Fences in Houston",
    excerpt: "Rust removal, metal primer and topcoat so rust doesn't come back in Houston humidity.",
    category: "Exterior Painting",
    readTime: "4 min read",
    image: "/images/projects/heights-painted-brick-bungalow/02-front-porch.jpg",
    keyword: "painting metal railings",
  },
  {
    slug: "ceiling-paint-color-white-vs-color",
    publishOn: "2026-11-23",
    title: "Ceiling Paint: Flat White, the Wall Color, or Something Bolder?",
    excerpt: "How to choose a ceiling color, and why flat sheen almost always wins on ceilings.",
    category: "Color Guide",
    readTime: "4 min read",
    image: "/images/projects/richmond-great-room/01-great-room-fireplace.jpg",
    keyword: "ceiling paint color",
  },
  {
    slug: "kitchen-wall-paint-washable-houston",
    publishOn: "2026-11-24",
    title: "Best Paint for Kitchen Walls: Washable and Grease-Resistant",
    excerpt: "Which paint and sheen to use on kitchen walls, and why grease must come off before painting.",
    category: "Interior Painting",
    readTime: "4 min read",
    image: "/images/projects/cypress-two-tone-kitchen/01-kitchen-perimeter-and-island.jpg",
    keyword: "kitchen wall paint",
  },
  {
    slug: "nursery-kids-room-painting",
    publishOn: "2026-11-25",
    title: "Painting a Nursery or Kids' Room: Timing, Low-VOC, Durability",
    excerpt: "When to paint a nursery, low-odor paint and ventilation, washable finishes and lead paint in older homes.",
    category: "Interior Painting",
    readTime: "4 min read",
    image: "/images/blog/interior-paint-colors-2026.jpg",
    keyword: "nursery painting",
  },
  {
    slug: "how-much-paint-for-a-room",
    publishOn: "2026-11-26",
    title: "How Much Paint Do I Need for a Room?",
    excerpt: "A simple calculation for walls and ceilings, with a worked example.",
    category: "Interior Painting",
    readTime: "4 min read",
    image: "/images/blog/how-long-interior-painting-houston.jpg",
    keyword: "how much paint do I need",
  },
  {
    slug: "window-trim-sill-painting-houston",
    publishOn: "2026-11-27",
    title: "Painting Exterior Window Trim and Sills in Houston",
    excerpt: "Why sills and window trim fail first in Houston sun and rain, and the caulk, primer and paint that make them last.",
    category: "Exterior Painting",
    readTime: "4 min read",
    image: "/images/projects/magnolia-exterior-siding/01-front-and-porch.jpg",
    keyword: "window trim painting",
  },
  {
    slug: "painting-shiplap-board-and-batten-houston",
    publishOn: "2026-11-28",
    title: "Painting Shiplap and Board and Batten",
    excerpt: "Gaps, caulk, sheen and spraying for shiplap and board-and-batten walls, inside and out.",
    category: "Interior Painting",
    readTime: "4 min read",
    image: "/images/projects/fulshear-interior/06-home-office-wall-molding.jpg",
    keyword: "painting shiplap",
  },
]

/**
 * Written-in-advance queue: posts on the calendar whose pages are not written
 * yet. Nothing on the site reads this list. When a post is written, move its
 * entry into BLOG_SCHEDULE (tests/blog-schedule.test.mjs checks every
 * scheduled post has a page).
 */
export const PLANNED_POSTS: ScheduledPost[] = [
]

/** Today's Houston date (YYYY-MM-DD), rolling over at PUBLISH_HOUR_HOUSTON. */
export function houstonPublishDate(now: Date = new Date()): string {
  const shifted = new Date(now.getTime() - PUBLISH_HOUR_HOUSTON * 60 * 60 * 1000)
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit" }).format(shifted)
}

export function scheduledFor(path: string): ScheduledPost | undefined {
  const slug = path.replace(/^\/?blog\//, "").replace(/\/$/, "")
  return BLOG_SCHEDULE.find((p) => p.slug === slug)
}

/** False only for a scheduled post whose date hasn't arrived. Every other path is live. */
export function isLivePath(path: string, now: Date = new Date()): boolean {
  const s = scheduledFor(path.startsWith("/") ? path : `/${path}`)
  if (!s) return true
  // Local review of unpublished posts: BLOG_PREVIEW=1, never on Vercel production.
  if (process.env.BLOG_PREVIEW === "1" && process.env.VERCEL_ENV !== "production") return true
  return s.publishOn <= houstonPublishDate(now)
}

/** Scheduled posts that are live now, newest first. */
export function liveScheduledPosts(now: Date = new Date()): ScheduledPost[] {
  const today = houstonPublishDate(now)
  return BLOG_SCHEDULE.filter((p) => p.publishOn <= today).sort((a, b) => b.publishOn.localeCompare(a.publishOn))
}

/** "October 20, 2026" from "2026-10-20". */
export function displayDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
}
