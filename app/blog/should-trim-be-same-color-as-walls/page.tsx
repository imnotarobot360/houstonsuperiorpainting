import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-08.
// Design guidance; color names are Sherwin-Williams colors from data/sw-colors.json.

const D: GuideArticleData = {
  path: "/blog/should-trim-be-same-color-as-walls",
  title: "Should Trim Be the Same Color as the Walls?",
  description:
    "Classic white trim, trim matched to the walls, and full color drenching: when each works, which sheens to use, and how each changes the look of a room.",
  h1: "Should trim be the same color as the walls?",
  eyebrow: "Color guide",
  published: "2026-12-08",
  updated: "2026-12-08",
  quickAnswer: (
    <>
      It can be. White or off-white trim with colored walls is still the most common and the safest for resale. Matching the
      trim to the walls, in a harder, shinier sheen, is a popular modern choice that makes rooms feel larger and calmer,
      especially with mid-tone and deep colors. Color drenching goes further: walls, trim, doors and sometimes the ceiling
      in one color. The key is a different sheen on trim, so it stays durable and still shows its shape.
    </>
  ),
  sections: [
    {
      title: "Three approaches",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3">Approach</th>
                <th className="p-3">Look</th>
                <th className="p-3">Works best</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["White trim, colored walls", "Crisp, traditional, outlines each room", "Whole houses, resale, traditional homes"],
                ["Trim matched to walls", "Calm, modern, rooms feel larger; architecture is quieter", "Mid-tone and deep colors, bedrooms, studies"],
                ["Color drenching (walls, trim, doors, ceiling)", "Enveloping, bold, designer", "Powder rooms, dining rooms, offices, media rooms"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3 font-medium">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                  <td className="p-3 text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "Sheen does the work",
      body: (
        <Bullets
          items={[
            "Walls: matte or eggshell. Trim and doors: satin or semi-gloss in the same color.",
            "The sheen difference keeps the trim washable and lets moldings show in the light, even in one color.",
            "In color drenching, ceilings are usually flat, so they don't show every flaw.",
          ]}
        />
      ),
    },
    {
      title: "When white trim is still the right call",
      body: (
        <Bullets
          items={[
            "Light walls: matching trim to a pale wall just reads as unfinished; a soft white trim looks cleaner.",
            "Open floor plans with many wall colors: one trim color ties the house together.",
            "Planning to sell soon: white trim is what most buyers expect.",
            "Stained floors or cabinets you want to stand out against crisp trim.",
          ]}
        />
      ),
    },
    {
      title: "Colors that work matched to trim",
      body: (
        <p>
          Mid-tone greens and blue-grays such as Evergreen Fog SW 9130 or Rainwashed SW 6211, and deep colors such as Naval
          SW 6244, Urbane Bronze SW 7048 or Iron Ore SW 7069, are common choices. Deep colors on trim show dust and scuffs
          more, so a washable enamel matters. See{" "}
          <Link href="/blog/ceiling-paint-color-white-vs-color">painting ceilings white or in color</Link> and{" "}
          <Link href="/blog/painting-interior-doors-houston">painting interior doors</Link>.
        </p>
      ),
    },
    {
      title: "Converting stained trim",
      body: (
        <p>
          If your trim is stained wood, painting it either white or the wall color needs more prep. See{" "}
          <Link href="/blog/paint-stained-wood-trim-houston">should you paint stained trim?</Link> Try combinations in the{" "}
          <Link href="/color-visualizer">color visualizer</Link>, or book a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is it OK to paint trim the same color as walls?",
      a: "Yes. It's a popular modern look, especially with mid-tone and deep colors. Use a satin or semi-gloss on the trim and a flatter sheen on the walls.",
    },
    {
      q: "What is color drenching?",
      a: "Painting walls, trim, doors and often the ceiling in one color, sometimes varying only the sheen, for an enveloping look.",
    },
    {
      q: "Does white trim go out of style?",
      a: "White and off-white trim remain the most common choice and the safest for resale; matched trim is an alternative, not a replacement.",
    },
    {
      q: "What sheen should trim be?",
      a: "Satin or semi-gloss, for durability and to show the trim's profile, whatever its color.",
    },
  ],
  limitations: <>Design guidance. Colors look different in every room; test large samples in your light.</>,
  related: [
    { label: "Paint sheens explained", href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss" },
    { label: "Ceiling paint: white vs. color", href: "/blog/ceiling-paint-color-white-vs-color" },
    { label: "Should you paint stained trim?", href: "/blog/paint-stained-wood-trim-houston" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
