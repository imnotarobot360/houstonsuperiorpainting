import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-15.
// Color names and codes are Sherwin-Williams colors in data/sw-colors.json;
// the swatch image uses SW's published on-screen values
// (scripts/blog-art/generate.mjs). Pairing guidance is ours.

const D: GuideArticleData = {
  path: "/blog/trim-door-colors-red-brick-house-houston",
  title: "Trim, Door and Shutter Colors for a Red or Orange Brick House",
  description:
    "Brick you aren't painting sets the palette. The whites, creams, greens, bronzes and blacks that work with red, orange and multi-tone Houston brick.",
  h1: "Trim, door and shutter colors for a red or orange brick house",
  eyebrow: "Color guide",
  published: "2026-12-15",
  updated: "2026-12-15",
  quickAnswer: (
    <>
      If you are keeping the brick, it decides the palette. For red and orange brick, soft or creamy whites usually look
      better on trim than stark bright white, which can make the brick look more orange. Deep greens, warm bronzes and
      soft blacks work well on doors and shutters. Look at the mortar and the roof too: they are part of the color scheme.
      Test samples outside on the house, in morning and afternoon sun.
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
              src="/images/blog/art/trim-door-colors-red-brick-house-houston.png"
              alt="Swatches of trim and door colors for red brick houses"
              width={1200}
              height={675}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Sherwin-Williams&apos; published on-screen values. Screens vary; test samples on the house.
            </figcaption>
          </figure>
          <Bullets
            items={[
              <><strong>Trim:</strong> Alabaster SW 7008, Creamy SW 7012 or Shoji White SW 7042 for a soft look; Pure White SW 7005 for a cleaner one.</>,
              <><strong>Front door:</strong> Roycroft Bottle Green SW 2847, Naval SW 6244 or Rookwood Red SW 2802 for color; Tricorn Black SW 6258 for contrast.</>,
              <><strong>Shutters:</strong> Urbane Bronze SW 7048, Iron Ore SW 7069 or Pewter Green SW 6208, which sit quietly with red brick.</>,
            ]}
          />
        </>
      ),
    },
    {
      title: "Read the brick first",
      body: (
        <Bullets
          items={[
            "Orange-leaning brick pairs well with creamy whites and deep greens; cool blue-whites can clash.",
            "Deep red or burgundy brick suits warm whites, bronze and black.",
            "Multi-tone brick: pick a color from the lightest and darkest bricks for trim and door.",
            "Mortar color matters: white mortar brightens the wall, gray or tan mortar softens it.",
            "The roof is fixed too: a brown roof favors warm trim; a gray or black roof allows cooler choices.",
          ]}
        />
      ),
    },
    {
      title: "Common mistakes",
      body: (
        <Bullets
          items={[
            "Stark bright white trim on orange brick, which exaggerates the orange.",
            "Picking from a small chip indoors; outdoor light makes colors look lighter and cooler.",
            "Too many colors: brick plus trim plus one accent is usually enough.",
            "Forgetting the garage door, which is often the largest painted surface on the front.",
          ]}
        />
      ),
    },
    {
      title: "Before you paint",
      body: (
        <p>
          Check HOA rules, which often cover doors, shutters and trim. See{" "}
          <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint rules</Link>,{" "}
          <Link href="/blog/front-door-paint-houston-sun">painting a front door in Houston sun</Link>,{" "}
          <Link href="/blog/garage-door-painting-houston">garage door painting</Link> and{" "}
          <Link href="/blog/painting-brick-houston">whether to paint the brick itself</Link>. Or book a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color trim goes with red brick?",
      a: "Soft or creamy whites usually look best, such as Alabaster SW 7008 or Creamy SW 7012. Stark bright white can make red or orange brick look more orange.",
    },
    {
      q: "What front door color goes with red brick?",
      a: "Deep greens, navy, a deep red or a soft black, such as Roycroft Bottle Green SW 2847, Naval SW 6244 or Tricorn Black SW 6258.",
    },
    {
      q: "What color shutters go with orange brick?",
      a: "Warm bronzes, charcoals and deep greens, such as Urbane Bronze SW 7048, Iron Ore SW 7069 or Pewter Green SW 6208.",
    },
    {
      q: "Should I match trim to the mortar?",
      a: "It's a good starting point: a trim color close to the mortar ties the house together. Test it beside the brick in sunlight.",
    },
  ],
  limitations: (
    <>
      Color names and codes are Sherwin-Williams&apos;; pairing guidance is ours. On-screen colors are approximate; confirm
      with samples outdoors. {BUSINESS.name} is not affiliated with or sponsored by Sherwin-Williams.
    </>
  ),
  related: [
    { label: "Painting brick in Houston", href: "/blog/painting-brick-houston" },
    { label: "Painting a front door in Houston sun", href: "/blog/front-door-paint-houston-sun" },
    { label: "HOA exterior paint rules", href: "/blog/hoa-exterior-paint-rules-houston-suburbs" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
