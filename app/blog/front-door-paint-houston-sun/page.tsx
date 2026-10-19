import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-15.

const D: GuideArticleData = {
  path: "/blog/front-door-paint-houston-sun",
  title: "Painting a Front Door in Houston Sun: Products, Colors, Prep",
  description: `How to paint a front door that lasts in Houston sun and humidity: steel, fiberglass and wood doors, color and fade, sheen, and cost (${P.frontDoorOnly}).`,
  h1: "Painting a front door that lasts in Houston sun",
  eyebrow: "Exterior guide",
  published: "2026-11-15",
  updated: "2026-11-15",
  quickAnswer: (
    <>
      A front door that faces Houston sun needs a durable exterior enamel over the right primer for its material (steel,
      fiberglass or wood), with every edge sealed. Dark and saturated colors fade and heat up faster in direct sun, so
      west- and south-facing doors benefit from a premium, fade-resistant product. A front door alone typically runs{" "}
      {P.frontDoorOnly}, depending on the door and its condition.
    </>
  ),
  sections: [
    {
      title: "Prep by door material",
      body: (
        <Bullets
          items={[
            <><strong>Steel:</strong> clean, sand, treat any rust and prime bare metal with a rust-inhibiting primer.</>,
            <><strong>Fiberglass:</strong> clean thoroughly (factory release agents and dirt), scuff lightly and use a primer the door maker approves.</>,
            <><strong>Wood:</strong> repair dings and cracks, sand, prime bare wood, and seal the top and bottom edges so the door doesn&apos;t absorb moisture and swell.</>,
          ]}
        />
      ),
    },
    {
      title: "Color and fade in Houston sun",
      body: (
        <p>
          Deep reds, blues, blacks and greens make strong front doors, but in direct sun they fade faster and get hotter,
          which can soften paint and stress storm doors and weatherstripping. Ask about a fade-resistant exterior product, and
          check whether your door maker limits dark colors on doors in full sun (some do, to protect the door). Check your
          HOA&apos;s color rules too. See <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint
          rules</Link>.
        </p>
      ),
    },
    {
      title: "The process",
      body: (
        <Steps
          items={[
            { title: "Remove hardware", text: "knobs, kick plates and knockers, or mask them carefully." },
            { title: "Prep and prime", text: "for the door material, as above." },
            { title: "Paint in order", text: "panels, then rails, then stiles on paneled doors, so brush marks follow the grain." },
            { title: "Two coats", text: "of a durable exterior enamel, usually satin or semi-gloss." },
            { title: "Dry with the door open", text: "or with a barrier, so it doesn't stick to the weatherstripping." },
          ]}
        />
      ),
    },
    {
      title: "Cost and timing",
      body: (
        <p>
          A front door alone typically runs {P.frontDoorOnly}; a townhome front door and its exterior trim{" "}
          {P.townhomeDoorAndTrim}. Plan for the door to stay open or protected for part of a day while it dries. See{" "}
          <Link href="/blog/cost-paint-ceilings-trim-doors-houston">cost to paint ceilings, trim and doors</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How much does it cost to paint a front door in Houston?",
      a: `A front door alone typically runs ${P.frontDoorOnly}, depending on the door material, condition and color.`,
    },
    {
      q: "Do dark front doors fade in Houston?",
      a: "Faster than light colors, especially facing west or south. A fade-resistant exterior enamel helps; some door makers limit dark colors in full sun.",
    },
    {
      q: "Can you paint a fiberglass front door?",
      a: "Yes: clean it thoroughly, scuff lightly, use a primer the manufacturer approves, then an exterior enamel.",
    },
    {
      q: "What sheen for a front door?",
      a: "Satin or semi-gloss: durable, easy to clean, and they show off a strong color.",
    },
  ],
  limitations: <>General guidance. Follow the door and paint manufacturers&apos; instructions; prices are planning ranges.</>,
  related: [
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "HOA exterior paint rules", href: "/blog/hoa-exterior-paint-rules-houston-suburbs" },
    { label: "Cost to paint ceilings, trim and doors", href: "/blog/cost-paint-ceilings-trim-doors-houston" },
    { label: "Painting interior doors", href: "/blog/painting-interior-doors-houston" },
  ],
  ctaTitle: "Get a written estimate for your front door",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
