import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-08.
// Tricorn Black / Iron Ore / Urbane Bronze from data/sw-colors.json (LRVs from
// the SW color service where stated).

const D: GuideArticleData = {
  path: "/blog/black-interior-trim-doors-houston",
  title: "Black Interior Doors and Trim: Is It Right for Your Home?",
  description:
    "Where black or charcoal interior doors and trim work, which blacks to sample, the sheen and prep they need, and how they look with Houston floors and light.",
  h1: "Black interior doors and trim: is it right for your home?",
  eyebrow: "Interior guide",
  published: "2027-01-08",
  updated: "2027-01-08",
  quickAnswer: (
    <>
      Black or charcoal interior doors are a strong, modern update that works in most homes with light walls; black trim
      throughout is bolder and suits fewer spaces. Softer near-blacks such as Iron Ore SW 7069 or Urbane Bronze SW 7048 are
      easier to live with than a true black like Tricorn Black SW 6258. Dark doors show dust and scuffs, so use a hard,
      washable enamel in satin or semi-gloss, and expect three coats over white in many cases.
    </>
  ),
  sections: [
    {
      title: "Where it works",
      body: (
        <Bullets
          items={[
            "Interior doors only, with white or light trim: the most common and easiest version.",
            "Doors and trim in one room, such as a study, powder room or bedroom, for a dramatic look.",
            "Window frames painted black inside to echo black exterior windows.",
            "Less suited: small, dark hallways with many doors, where black can feel heavy.",
          ]}
        />
      ),
    },
    {
      title: "Blacks to sample",
      body: (
        <Bullets
          items={[
            <><strong>Tricorn Black SW 6258:</strong> a true black (LRV about 3) that Sherwin-Williams says works with any undertone.</>,
            <><strong>Iron Ore SW 7069:</strong> a soft charcoal, less stark.</>,
            <><strong>Urbane Bronze SW 7048:</strong> a warm brownish gray (LRV about 8), gentle with wood floors.</>,
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Clean and sand", text: "door edges and handles carry the most grime." },
            { title: "Fill and caulk", text: "every flaw shows more on a dark, shiny finish." },
            { title: "Prime", text: "a gray-tinted or bonding primer helps dark colors cover." },
            { title: "Two to three coats", text: "of a hard enamel, often sprayed for an even finish." },
          ]}
        />
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          Doors and trim are priced by count and condition; trim throughout a home typically runs {P.trimWholeHome} as a
          2026 planning range, and dark colors can need an extra coat. See{" "}
          <Link href="/blog/painting-interior-doors-houston">painting interior doors</Link>,{" "}
          <Link href="/blog/cost-paint-ceilings-trim-doors-houston">the cost of ceilings, trim and doors</Link>,{" "}
          <Link href="/blog/urbane-bronze-sw-7048-houston">Urbane Bronze</Link> and{" "}
          <Link href="/interior-painting-houston-tx">interior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Are black interior doors a good idea?",
      a: "In most homes with light walls, yes. They add contrast and a modern look. Softer charcoals are easier to live with than true black.",
    },
    {
      q: "What sheen should black doors be?",
      a: "Satin or semi-gloss in a hard enamel, which cleans easily. Higher gloss shows more flaws.",
    },
    {
      q: "Do black doors show dust and fingerprints?",
      a: "More than white doors, yes. A washable enamel and a slightly softer black help.",
    },
    {
      q: "How many coats does black paint need over white doors?",
      a: "Often two to three coats over a suitable primer for full, even coverage.",
    },
  ],
  limitations: <>Design guidance; LRVs from Sherwin-Williams. Prices are 2026 planning ranges.</>,
  related: [
    { label: "Painting interior doors", href: "/blog/painting-interior-doors-houston" },
    { label: "Should trim match the walls?", href: "/blog/should-trim-be-same-color-as-walls" },
    { label: "Urbane Bronze SW 7048", href: "/blog/urbane-bronze-sw-7048-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
