import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-22.

const D: GuideArticleData = {
  path: "/blog/two-tone-walls-wainscoting-houston",
  title: "Two-Tone Walls and Painted Wainscoting",
  description:
    "Chair-rail and wainscot color combinations, which color goes on top, where to put the dividing line, and sheens for the lower, harder-working half.",
  h1: "Two-tone walls and painted wainscoting",
  eyebrow: "Color guide",
  published: "2027-01-22",
  updated: "2027-01-22",
  quickAnswer: (
    <>
      Two-tone walls usually put the darker color below a chair rail or wainscot and the lighter color above, which grounds
      the room and hides scuffs where they happen. Divide the wall at about a third of its height, or at an existing chair
      rail. Use a tougher satin or semi-gloss on wainscoting and the lower half, and eggshell above. Colors from the same
      family, or a deep color with a soft white, are the safest pairings.
    </>
  ),
  sections: [
    {
      title: "Combinations that work",
      body: (
        <Bullets
          items={[
            "Deep below, white above: Naval SW 6244 or Webster Green HC-130 (Benjamin Moore) under Alabaster SW 7008.",
            "Tone on tone: a darker and lighter shade of the same color for a subtle look.",
            "Painted wainscot in the trim color, with color above.",
            "Reverse: light wainscot and a deep color above, in a tall dining room.",
          ]}
        />
      ),
    },
    {
      title: "Where to divide the wall",
      body: (
        <Bullets
          items={[
            "About one-third of the wall height is the classic proportion.",
            "At an existing chair rail, or add trim so the line looks finished.",
            "Avoid splitting the wall exactly in half, which tends to look unbalanced.",
          ]}
        />
      ),
    },
    {
      title: "Sheen and durability",
      body: (
        <p>
          The lower half takes chairs, kids and vacuums, so use satin or semi-gloss there and eggshell above. See{" "}
          <Link href="/blog/dining-room-paint-colors-houston">dining room colors</Link>,{" "}
          <Link href="/blog/painting-hallways-high-traffic-houston">painting hallways</Link>,{" "}
          <Link href="/blog/painting-shiplap-board-and-batten-houston">painting board and batten</Link> and{" "}
          <Link href="/blog/should-trim-be-same-color-as-walls">matching trim to walls</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Which color goes on the bottom of a two-tone wall?",
      a: "Usually the darker color, which grounds the room and hides scuffs.",
    },
    {
      q: "How high should a two-tone wall line be?",
      a: "About one-third of the wall height, or at an existing chair rail.",
    },
    {
      q: "What sheen should wainscoting be?",
      a: "Satin or semi-gloss, which stands up to bumps and cleaning.",
    },
    {
      q: "Do two-tone walls need a chair rail?",
      a: "Not strictly, but a trim piece makes the line look finished and hides small wobbles.",
    },
  ],
  limitations: <>Design guidance; test colors together in your own light.</>,
  related: [
    { label: "Dining room colors", href: "/blog/dining-room-paint-colors-houston" },
    { label: "Painting board and batten", href: "/blog/painting-shiplap-board-and-batten-houston" },
    { label: "Painting hallways", href: "/blog/painting-hallways-high-traffic-houston" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
