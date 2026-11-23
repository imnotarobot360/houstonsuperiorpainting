import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-10.
// No per-door residential price exists in PRICES_2026, so none is published.

const D: GuideArticleData = {
  path: "/blog/painting-interior-doors-houston",
  title: "Painting Interior Doors: Slab vs. Paneled, Sheen and Prep",
  description:
    "How interior doors are painted for a smooth, durable finish: slab vs. paneled doors, removing vs. painting in place, sheen, hardware and dry time.",
  h1: "Painting interior doors: slab vs. paneled, sheen and prep",
  eyebrow: "Interior guide",
  published: "2026-11-10",
  updated: "2026-11-10",
  quickAnswer: (
    <>
      Interior doors take more wear than any wall, so they need a durable enamel, usually in satin or semi-gloss, over
      clean, lightly sanded and primed surfaces. Flat slab doors are quick to paint; six-panel and other paneled doors take
      noticeably longer because every recess and edge is painted in a set order. For the smoothest finish, doors are
      removed and sprayed; painting in place with brush and roller also works well when done carefully.
    </>
  ),
  sections: [
    {
      title: "Slab vs. paneled doors",
      body: (
        <Bullets
          items={[
            <><strong>Flat slab doors:</strong> fast to roll or spray; flaws and roller texture show easily, so prep and an even coat matter.</>,
            <><strong>Paneled doors (six-panel, shaker):</strong> panels, then rails, then stiles, in order, so brush marks run with the wood grain and lap lines don&apos;t show.</>,
            <><strong>Louvered and French doors:</strong> the slowest; louvers are best sprayed, and glass needs careful cutting or masking.</>,
          ]}
        />
      ),
    },
    {
      title: "Remove and spray, or paint in place?",
      body: (
        <p>
          Removing doors and spraying them flat gives the smoothest, most factory-like finish and avoids drips on vertical
          surfaces. Painting doors on their hinges with a brush and roller is less disruptive and still looks good when the
          enamel levels well. Either way, the edges and the door&apos;s top and bottom should be sealed so the door doesn&apos;t
          absorb moisture. See <Link href="/fine-finish-painting-houston">fine finish painting</Link>.
        </p>
      ),
    },
    {
      title: "Prep and products",
      body: (
        <Steps
          items={[
            { title: "Clean", text: "hands leave oils around knobs and edges; degrease them." },
            { title: "Hardware", text: "remove or mask knobs, hinges and strike plates; don't paint over hinges." },
            { title: "Repair and sand", text: "fill dents, sand smooth, and scuff glossy or oil-based finishes." },
            { title: "Prime", text: "a bonding primer over old oil-based or glossy paint; spot-prime repairs. See latex over oil-based paint." },
            { title: "Enamel", text: `two coats of a durable enamel; for fine finishes we use products such as ${BUSINESS.cabinetFinish.products[1]}.` },
          ]}
        />
      ),
    },
    {
      title: "Sheen and dry time",
      body: (
        <p>
          Satin hides small flaws and is easy to clean; semi-gloss is tougher and more traditional on trim and doors.
          Enamel feels dry quickly but stays soft for days, so leave doors slightly open overnight to keep them from sticking
          to the jamb or weatherstripping. See{" "}
          <Link href="/blog/how-long-before-using-freshly-painted-room">how long before using a painted room</Link> and{" "}
          <Link href="/blog/latex-paint-over-oil-based-paint">latex over oil-based paint</Link>.
        </p>
      ),
    },
    {
      title: "Cost",
      body: (
        <p>
          Doors are priced by count and type on the estimate: paneled doors, both sides and a color change all add time. As a
          planning range, trim throughout a home (baseboards and casings) typically runs {P.trimWholeHome}, and a front door
          alone {P.frontDoorOnly}. See <Link href="/blog/cost-paint-ceilings-trim-doors-houston">cost to paint ceilings,
          trim and doors</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What sheen is best for interior doors?",
      a: "Satin or semi-gloss. Satin hides small flaws; semi-gloss is tougher and easier to wipe.",
    },
    {
      q: "Should interior doors be removed to paint them?",
      a: "Removing and spraying them gives the smoothest finish; painting in place with brush and roller is less disruptive and still looks good when done carefully.",
    },
    {
      q: "Why do freshly painted doors stick?",
      a: "Enamel stays soft for days after it feels dry. Leave doors slightly open overnight while the paint hardens.",
    },
    {
      q: "Do I need to prime interior doors before painting?",
      a: "Over old oil-based or glossy paint, yes: clean, scuff and use a bonding primer. Repairs need spot priming too.",
    },
  ],
  limitations: <>General guidance. Prices are planning ranges; your estimate prices doors by count, type and condition.</>,
  related: [
    { label: "Fine finish painting for trim and doors", href: "/fine-finish-painting-houston" },
    { label: "Cost to paint ceilings, trim and doors", href: "/blog/cost-paint-ceilings-trim-doors-houston" },
    { label: "Latex over oil-based paint", href: "/blog/latex-paint-over-oil-based-paint" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written estimate for your doors and trim",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
