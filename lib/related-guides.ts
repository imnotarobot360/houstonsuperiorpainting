// Contextual "Helpful guides" links, keyed by the page they appear on
// (2026-10-19 internal-link audit). Each target had only one or two links from
// other pages' content, mostly just /blog. Rendered by
// components/related-guides.tsx in the city templates and on a few hub pages.
//
// Rules: link only to canonical URLs (never a redirect source) and never to
// projects with photosNeedReview (lib/projects.ts).

import { isLivePath } from "@/lib/blog-schedule"

export type GuideLink = { label: string; href: string }

export const RELATED_GUIDES: Record<string, GuideLink[]> = {
  // City pages
  "/painters-katy-tx": [
    { label: "Exterior paint colors for Katy homes", href: "/blog/exterior-paint-colors-katy-tx" },
    { label: "Townhome painting in Cinco Ranch, Cross Creek and Riverstone", href: "/blog/townhome-painting-cinco-ranch-cross-creek-riverstone" },
    { label: "Brick painting in Katy", href: "/brick-painting-katy" },
  ],
  "/painters-sugar-land-tx": [
    { label: "Exterior paint colors for Sugar Land homes", href: "/blog/exterior-paint-colors-sugar-land-tx" },
    { label: "Hiring a painter in Sugar Land: insurance and warranty checklist", href: "/blog/painting-contractor-sugar-land-insurance-warranty" },
  ],
  "/painters-magnolia-tx": [{ label: "Exterior paint colors for Magnolia homes", href: "/blog/exterior-paint-colors-magnolia-tx" }],
  "/painters-fulshear-tx": [
    { label: "Exterior paint colors for Fulshear homes", href: "/blog/exterior-paint-colors-fulshear-tx" },
    { label: "Interior painting in Fulshear", href: "/interior-painting-fulshear" },
  ],
  "/painters-pearland-tx": [{ label: "Exterior paint colors for Pearland homes", href: "/blog/exterior-paint-colors-pearland-tx" }],
  "/painters-the-heights-tx": [
    { label: "Exterior paint colors for Heights homes", href: "/blog/exterior-paint-colors-houston-heights" },
    { label: "Interior painting in The Heights", href: "/interior-painting-the-heights" },
    { label: "Exterior painting in The Heights", href: "/exterior-painting-the-heights" },
  ],
  "/painters-cinco-ranch-tx": [
    { label: "Townhome painting in Cinco Ranch, Cross Creek and Riverstone", href: "/blog/townhome-painting-cinco-ranch-cross-creek-riverstone" },
    { label: "Exterior paint colors for Katy-area homes", href: "/blog/exterior-paint-colors-katy-tx" },
  ],
  "/painters-riverstone-tx": [
    { label: "Townhome painting in Cinco Ranch, Cross Creek and Riverstone", href: "/blog/townhome-painting-cinco-ranch-cross-creek-riverstone" },
  ],
  "/painters-the-woodlands-tx": [
    { label: "Exterior painting in The Woodlands", href: "/exterior-painting-the-woodlands" },
    { label: "Interior painting in The Woodlands", href: "/interior-painting-the-woodlands" },
    { label: "Best exterior colors for Woodlands homes", href: "/blog/best-exterior-colors-homes-the-woodlands-tx" },
  ],
  "/painters-river-oaks-tx": [
    { label: "Luxury exterior painting in River Oaks", href: "/luxury-exterior-painting-river-oaks" },
    { label: "Luxury house painters in Houston", href: "/luxury-house-painters-houston" },
  ],
  "/painters-memorial-tx": [{ label: "Brick painting in Memorial", href: "/brick-painting-memorial" }],
  "/painters-richmond-tx": [
    { label: "Interior painting in Richmond", href: "/interior-painting-richmond" },
    { label: "Exterior painting in Richmond", href: "/exterior-painting-richmond" },
  ],

  // Hub pages
  "/load-bearing-wall-removal-houston-tx": [
    { label: "Load-bearing wall removal cost in Houston", href: "/blog/load-bearing-wall-removal-cost-houston" },
  ],
  "/limewash-brick-painting-houston-tx": [
    { label: "Limewash cost in Houston", href: "/blog/limewash-cost-houston" },
    { label: "Brick painting in Katy", href: "/brick-painting-katy" },
    { label: "Brick painting in Memorial", href: "/brick-painting-memorial" },
    { label: "Painting a brick fireplace", href: "/blog/painting-brick-fireplace-houston" },
  ],
  "/best-paint-colors-houston-homes": [
    { label: "Best 2027 paint colors for Houston homes", href: "/blog/best-paint-colors-houston-homes-2027" },
    { label: "Benjamin Moore Color Trends 2027", href: "/blog/benjamin-moore-color-trends-2027-houston" },
    { label: "Webster Green HC-130", href: "/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston" },
    { label: "What colors go with Celery?", href: "/blog/colors-that-go-with-celery-sw-6421" },
    { label: "Sherwin-Williams Rewild 2027", href: "/blog/sherwin-williams-rewild-2027-colors-houston" },
    { label: "Sherwin-Williams 2027 Color of the Year: Celery", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "2026 cabinet colors: greige, green and black", href: "/blog/cabinet-colors-2026-houston-greige-green-black" },
    { label: "Agreeable Gray vs. Accessible Beige", href: "/blog/agreeable-gray-vs-accessible-beige-houston" },
    { label: "Exterior colors for Katy homes", href: "/blog/exterior-paint-colors-katy-tx" },
    { label: "Exterior colors for Sugar Land homes", href: "/blog/exterior-paint-colors-sugar-land-tx" },
    { label: "Exterior colors for Heights homes", href: "/blog/exterior-paint-colors-houston-heights" },
    { label: "Exterior colors for Fulshear homes", href: "/blog/exterior-paint-colors-fulshear-tx" },
    { label: "Exterior colors for Pearland homes", href: "/blog/exterior-paint-colors-pearland-tx" },
    { label: "Exterior colors for Magnolia homes", href: "/blog/exterior-paint-colors-magnolia-tx" },
  ],
  "/houston-painting-cost-guide": [
    { label: "Cost to paint ceilings, trim and doors", href: "/blog/cost-paint-ceilings-trim-doors-houston" },
    { label: "DIY vs professional painting cost", href: "/blog/diy-vs-professional-painting-cost-houston" },
    { label: "Load-bearing wall removal cost", href: "/blog/load-bearing-wall-removal-cost-houston" },
    { label: "Limewash cost", href: "/blog/limewash-cost-houston" },
  ],
  "/pressure-washing-houston-tx": [
    { label: "Fence and deck painting in Houston", href: "/blog/fence-deck-painting-houston-tx" },
    { label: "Pressure washing before painting", href: "/blog/pressure-washing-before-painting" },
  ],
  "/paint-color-consultation-houston": [
    { label: "Webster Green HC-130: Benjamin Moore 2027", href: "/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston" },
    { label: "Celery vs. Webster Green", href: "/blog/celery-vs-webster-green-2027-color-of-the-year" },
    { label: "Best 2027 paint colors for Houston homes", href: "/blog/best-paint-colors-houston-homes-2027" },
    { label: "What colors go with Celery?", href: "/blog/colors-that-go-with-celery-sw-6421" },
    { label: "Sherwin-Williams Rewild 2027", href: "/blog/sherwin-williams-rewild-2027-colors-houston" },
    { label: "Ceiling paint: white vs. color", href: "/blog/ceiling-paint-color-white-vs-color" },
    { label: "Sherwin-Williams 2027 Color of the Year: Celery", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "2026 cabinet colors: greige, green and black", href: "/blog/cabinet-colors-2026-houston-greige-green-black" },
    { label: "Agreeable Gray vs. Accessible Beige", href: "/blog/agreeable-gray-vs-accessible-beige-houston" },
  ],
  // Service and article pages: daily-calendar posts (shown from their publish date)
  "/interior-painting-houston-tx": [
    { label: "Why touch-ups don't match", href: "/blog/why-paint-touch-ups-dont-match" },
    { label: "How long before using a painted room", href: "/blog/how-long-before-using-freshly-painted-room" },
    { label: "Best paint for bathrooms and humid rooms", href: "/blog/best-paint-bathrooms-laundry-rooms-houston" },
    { label: "Do painters move furniture?", href: "/blog/do-painters-move-furniture" },
    { label: "Painting tall foyers and stairwells", href: "/blog/painting-high-ceilings-foyers-stairwells-houston" },
    { label: "Painting over dark walls", href: "/blog/paint-dark-walls-lighter-color" },
    { label: "Best paint for kitchen walls", href: "/blog/kitchen-wall-paint-washable-houston" },
    { label: "How much paint do I need?", href: "/blog/how-much-paint-for-a-room" },
    { label: "Should you paint stained wood trim?", href: "/blog/paint-stained-wood-trim-houston" },
    { label: "Painting stair railings and spindles", href: "/blog/painting-stair-railings-banisters-spindles" },
    { label: "How to clean painted walls", href: "/blog/how-to-clean-painted-walls" },
    { label: "Repainting builder-grade paint", href: "/blog/repainting-builder-grade-paint-new-home-houston" },
  ],
  "/exterior-painting-houston-tx": [
    { label: "Wood rot repair before exterior painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Caulking before exterior painting", href: "/blog/caulking-before-exterior-painting-houston" },
    { label: "Soffit and fascia painting", href: "/blog/soffit-fascia-painting-houston" },
    { label: "Painting a front door in Houston sun", href: "/blog/front-door-paint-houston-sun" },
    { label: "Garage door painting", href: "/blog/garage-door-painting-houston" },
    { label: "Painting metal railings and gates", href: "/blog/painting-metal-railings-gates-houston" },
    { label: "Window trim and sill painting", href: "/blog/window-trim-sill-painting-houston" },
    { label: "Painting an exterior in winter", href: "/blog/can-you-paint-exterior-in-winter-houston" },
  ],
  "/cabinet-refinishing-houston-tx": [
    { label: "Green kitchen cabinets for 2027", href: "/blog/green-kitchen-cabinet-colors-2027-houston" },
    { label: "Should you fill oak grain?", href: "/blog/fill-oak-grain-before-painting-cabinets" },
    { label: "On-site vs. off-site cabinet painting", href: "/blog/cabinet-painting-on-site-vs-off-site" },
    { label: "Painting inside kitchen cabinets", href: "/blog/paint-inside-kitchen-cabinets" },
  ],
  "/drywall-repair-houston-tx": [
    { label: "Orange peel vs. knockdown vs. smooth walls", href: "/blog/orange-peel-vs-knockdown-vs-smooth-walls" },
    { label: "How painters match wall texture", href: "/blog/how-painters-match-wall-texture" },
    { label: "Painting after foundation repair", href: "/blog/painting-after-foundation-repair-houston" },
  ],
  "/commercial-painting-houston-tx": [
    { label: "After-hours commercial painting", href: "/blog/after-hours-commercial-painting-houston" },
    { label: "Painting medical and dental offices", href: "/blog/medical-dental-office-painting-houston" },
    { label: "HOA and multifamily painting", href: "/blog/hoa-multifamily-painting-houston" },
  ],
  "/wood-rot-repair-houston-tx": [
    { label: "Wood rot repair before exterior painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Soffit and fascia painting", href: "/blog/soffit-fascia-painting-houston" },
    { label: "Window trim and sill painting", href: "/blog/window-trim-sill-painting-houston" },
  ],
  "/fine-finish-painting-houston": [
    { label: "Painting interior doors", href: "/blog/painting-interior-doors-houston" },
    { label: "Latex over oil-based paint", href: "/blog/latex-paint-over-oil-based-paint" },
  ],
  "/blog/sherwin-williams-color-of-the-year-2027-celery-houston": [
    { label: "Celery vs. Webster Green", href: "/blog/celery-vs-webster-green-2027-color-of-the-year" },
    { label: "Webster Green HC-130", href: "/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston" },
    { label: "What colors go with Celery?", href: "/blog/colors-that-go-with-celery-sw-6421" },
    { label: "Where to use Celery", href: "/blog/where-to-use-celery-sw-6421" },
    { label: "Sherwin-Williams Rewild 2027", href: "/blog/sherwin-williams-rewild-2027-colors-houston" },
  ],
}

/** Links for a page, minus any daily-calendar post that isn't live yet (no 404 links). */
export function relatedGuidesFor(path: string): GuideLink[] {
  return (RELATED_GUIDES[path] ?? []).filter((l) => isLivePath(l.href))
}
