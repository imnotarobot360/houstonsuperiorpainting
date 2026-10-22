import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-31.
// Colors are Sherwin-Williams (data/sw-colors.json) and Benjamin Moore 2027
// palette colors already used in the series. No productivity claims.

const D: GuideArticleData = {
  path: "/blog/painting-home-office-houston",
  title: "Paint Colors and Finishes for a Home Office",
  description:
    "Colors that look good on video calls, sheens that stand up to a desk chair, a feature wall behind your desk, and planning a home office repaint around work.",
  h1: "Paint colors and finishes for a home office",
  eyebrow: "Interior guide",
  published: "2026-12-31",
  updated: "2026-12-31",
  quickAnswer: (
    <>
      For a home office, think about the wall behind you on video calls as much as the walls you look at. Soft, muted
      mid-tones such as greige, sage or a dusty blue look good on camera and don&apos;t bounce harsh light onto your face;
      bright white and very saturated colors can do both. A deep color like Webster Green or Naval works well on one wall or
      on built-ins. Use a washable eggshell or satin, because desk chairs and bags scuff the walls.
    </>
  ),
  sections: [
    {
      title: "Colors to sample",
      body: (
        <Bullets
          items={[
            <><strong>On camera:</strong> Agreeable Gray SW 7029, Evergreen Fog SW 9130 or Sea Salt SW 6204, calm mid-tones behind you.</>,
            <><strong>A study feel:</strong> Webster Green HC-130 (Benjamin Moore) or Naval SW 6244 on a feature wall or bookshelves.</>,
            <><strong>Bright and simple:</strong> a soft white such as Alabaster SW 7008, warmer and less glaring than a stark white.</>,
          ]}
        />
      ),
    },
    {
      title: "Finishes that last",
      body: (
        <Bullets
          items={[
            "Walls: a washable eggshell or satin, for chair backs, bags and hands.",
            "Built-ins and shelves: a hard cabinet-grade enamel that won't stay sticky under books.",
            "Ceiling: flat, to hide flaws and avoid glare on screens.",
          ]}
        />
      ),
    },
    {
      title: "Planning around work",
      body: (
        <p>
          A home office is usually a one- or two-day room. Move the desk and electronics out or to the center, and plan
          calls elsewhere for a day. Shelving needs a hard cabinet-grade enamel rather than wall paint. See{" "}
          <Link href="/blog/should-trim-be-same-color-as-walls">matching trim to walls</Link> for a color-drenched
          study, and <Link href="/blog/low-voc-zero-voc-paint-houston">low-VOC paint</Link> if you&apos;ll be working in the
          room right after.
        </p>
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          A single room typically runs {P.singleRoom} and an accent wall {P.accentWall} as 2026 planning ranges. Your written
          estimate sets the price. See <Link href="/interior-painting-houston-tx">interior painting in Houston</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color is best for a home office?",
      a: "Soft, muted mid-tones such as greige, sage or dusty blue look calm and work well on video calls. Deep colors suit a feature wall or built-ins.",
    },
    {
      q: "What wall color looks best on Zoom?",
      a: "A muted mid-tone behind you, rather than bright white or a saturated color, which can glare or cast color onto your face.",
    },
    {
      q: "What paint finish should a home office have?",
      a: "Washable eggshell or satin on walls, hard enamel on built-ins, and flat on the ceiling.",
    },
    {
      q: "Can a home office be painted in a day?",
      a: "Often in one or two days, depending on size, repairs and built-ins.",
    },
  ],
  limitations: <>Design guidance; colors look different in every room. Prices are 2026 planning ranges.</>,
  related: [
    { label: "Should trim match the walls?", href: "/blog/should-trim-be-same-color-as-walls" },
    { label: "Calm bedroom colors", href: "/blog/bedroom-paint-colors-for-sleep-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
