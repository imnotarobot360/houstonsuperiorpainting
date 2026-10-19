// Contextual "Helpful guides" links, keyed by the page they appear on
// (2026-10-19 internal-link audit). Each target had only one or two links from
// other pages' content, mostly just /blog. Rendered by
// components/related-guides.tsx in the city templates and on a few hub pages.
//
// Rules: link only to canonical URLs (never a redirect source) and never to
// projects with photosNeedReview (lib/projects.ts).

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
  ],
  "/best-paint-colors-houston-homes": [
    { label: "Sherwin-Williams 2027 Color of the Year: Celery", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "2026 cabinet colors: greige, green and black", href: "/blog/cabinet-colors-2026-houston-greige-green-black" },
    { label: "Exterior colors for Katy homes", href: "/blog/exterior-paint-colors-katy-tx" },
    { label: "Exterior colors for Sugar Land homes", href: "/blog/exterior-paint-colors-sugar-land-tx" },
    { label: "Exterior colors for Heights homes", href: "/blog/exterior-paint-colors-houston-heights" },
    { label: "Exterior colors for Fulshear homes", href: "/blog/exterior-paint-colors-fulshear-tx" },
    { label: "Exterior colors for Pearland homes", href: "/blog/exterior-paint-colors-pearland-tx" },
    { label: "Exterior colors for Magnolia homes", href: "/blog/exterior-paint-colors-magnolia-tx" },
  ],
  "/houston-painting-cost-guide": [
    { label: "DIY vs professional painting cost", href: "/blog/diy-vs-professional-painting-cost-houston" },
    { label: "Load-bearing wall removal cost", href: "/blog/load-bearing-wall-removal-cost-houston" },
    { label: "Limewash cost", href: "/blog/limewash-cost-houston" },
  ],
  "/pressure-washing-houston-tx": [
    { label: "Fence and deck painting in Houston", href: "/blog/fence-deck-painting-houston-tx" },
    { label: "Pressure washing before painting", href: "/blog/pressure-washing-before-painting" },
  ],
  "/paint-color-consultation-houston": [
    { label: "Sherwin-Williams 2027 Color of the Year: Celery", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "2026 cabinet colors: greige, green and black", href: "/blog/cabinet-colors-2026-houston-greige-green-black" },
  ],
}

export function relatedGuidesFor(path: string): GuideLink[] {
  return RELATED_GUIDES[path] ?? []
}
