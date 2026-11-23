import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-20.
// Sherwin-Williams colors from data/sw-colors.json; Benjamin Moore colors and
// LRVs from the BM 2027 series (checked 2026-10-19/21). Swatch image uses each
// brand's published on-screen value (scripts/blog-art/generate.mjs).

const D: GuideArticleData = {
  path: "/blog/dining-room-paint-colors-houston",
  title: "Dining Room Paint Colors for Houston Homes",
  description:
    "Warm, deep and classic dining room colors, how they look under a chandelier and by candlelight, and using wainscoting, a ceiling color or a feature wall.",
  h1: "Dining room paint colors for Houston homes",
  eyebrow: "Color guide",
  published: "2026-12-20",
  updated: "2026-12-20",
  quickAnswer: (
    <>
      Dining rooms are used mostly in the evening, under warm lights, so they can take deeper, richer colors than the rest
      of the house. Deep greens, warm browns, burgundy and navy all feel cozy at night. If the dining room opens to the
      living area, a soft warm neutral that matches the rest of the house, with color on a feature wall, wainscoting or the
      ceiling, keeps the space connected. Look at samples at night under your own chandelier before you choose.
    </>
  ),
  sections: [
    {
      title: "Colors to sample",
      body: (
        <>
          <figure className="not-prose my-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blog/art/dining-room-paint-colors-houston.png"
              alt="Swatches of dining room paint colors"
              width={1200}
              height={675}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Each brand&apos;s published on-screen value. Screens vary; look at samples at night under your own lights.
            </figcaption>
          </figure>
          <Bullets
            items={[
              <><strong>Deep green:</strong> Webster Green HC-130 (Benjamin Moore, LRV 20.2) or Pewter Green SW 6208.</>,
              <><strong>Warm brown and burgundy:</strong> Antique Copper 1169 (Benjamin Moore, LRV 20.2), Townsend Harbor Brown HC-64 (Benjamin Moore, LRV 8.2) or Rookwood Red SW 2802.</>,
              <><strong>Navy:</strong> Naval SW 6244, classic with white wainscoting and brass.</>,
              <><strong>Soft and connected:</strong> Accessible Beige SW 7036 or Agreeable Gray SW 7029 for open plans.</>,
            ]}
          />
        </>
      ),
    },
    {
      title: "Evening light changes everything",
      body: (
        <Bullets
          items={[
            "Warm 2700K bulbs and candlelight push colors warmer and deeper; cool LEDs flatten them.",
            "A dimmer lets a deep color feel bright at lunch and cozy at dinner.",
            "Deep colors look richer in eggshell or matte; glossy walls show every bump under a chandelier.",
          ]}
        />
      ),
    },
    {
      title: "Ways to add color without painting it all",
      body: (
        <Bullets
          items={[
            "Wainscoting or chair rail: color below, a soft white above, or the reverse.",
            "A painted ceiling in a deeper tone of the wall color, or a soft color over white walls.",
            "One feature wall behind the buffet or table.",
            "Color drenching: walls, trim and ceiling in one deep color for a dramatic, enveloping room.",
          ]}
        />
      ),
    },
    {
      title: "Choosing with confidence",
      body: (
        <p>
          Test large samples on two walls and look at night. See{" "}
          <Link href="/blog/should-trim-be-same-color-as-walls">matching trim to walls</Link>,{" "}
          <Link href="/blog/ceiling-paint-color-white-vs-color">painting the ceiling</Link>,{" "}
          <Link href="/blog/open-floor-plan-paint-colors-houston">open floor plan colors</Link> and{" "}
          <Link href="/blog/benjamin-moore-color-trends-2027-houston">Benjamin Moore Color Trends 2027</Link>, or book a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is a good dining room paint color?",
      a: "Deep greens, warm browns, burgundy and navy feel cozy at night; in open plans, a soft warm neutral with color on a feature wall or wainscoting keeps the space connected.",
    },
    {
      q: "Should a dining room be dark?",
      a: "It can be. Dining rooms are mostly used in the evening under warm light, which suits deep colors. Add a dimmer and a lighter ceiling if the room is small.",
    },
    {
      q: "What sheen is best for a dining room?",
      a: "Eggshell or matte for walls, which look rich and hide flaws; satin or semi-gloss for trim and wainscoting.",
    },
    {
      q: "Should the dining room match the living room?",
      a: "In an open plan, usually yes, or use a related color that changes at a natural break such as a corner or cased opening.",
    },
  ],
  limitations: (
    <>
      Color names, codes and LRVs are Sherwin-Williams&apos; and Benjamin Moore&apos;s; room guidance is ours. On-screen
      colors are approximate; confirm with physical samples. {BUSINESS.name} is not affiliated with or sponsored by either
      manufacturer.
    </>
  ),
  related: [
    { label: "Open floor plan colors", href: "/blog/open-floor-plan-paint-colors-houston" },
    { label: "Should trim match the walls?", href: "/blog/should-trim-be-same-color-as-walls" },
    { label: "Benjamin Moore Color Trends 2027", href: "/blog/benjamin-moore-color-trends-2027-houston" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
