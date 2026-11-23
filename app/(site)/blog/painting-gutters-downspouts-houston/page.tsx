import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-25.
// Owner confirmed 2026-10-21: we paint gutters and downspouts. Gutter repair
// or replacement is a separate trade.

const D: GuideArticleData = {
  path: "/blog/painting-gutters-downspouts-houston",
  title: "Painting Gutters and Downspouts in Houston",
  description:
    "Painting aluminum gutters and downspouts to match the trim or body: cleaning off chalk and oxidation, bonding primer, color choices, and when gutters need repair first.",
  h1: "Painting gutters and downspouts in Houston",
  eyebrow: "Exterior guide",
  published: "2026-12-25",
  updated: "2026-12-25",
  quickAnswer: (
    <>
      Yes, aluminum gutters and downspouts can be painted, and we paint them, usually as part of an exterior job. The work
      is mostly prep: the factory finish chalks and oxidizes in Houston sun, so it is cleaned and scuffed, bare metal gets a
      bonding or metal primer, and then two coats of exterior paint. Most homeowners paint gutters to match the trim or
      fascia, and downspouts to match the wall behind them so they disappear.
    </>
  ),
  sections: [
    {
      title: "Matching colors",
      body: (
        <Bullets
          items={[
            <><strong>Gutters</strong> usually match the fascia or trim color, so the roof edge reads as one line.</>,
            <><strong>Downspouts</strong> usually match the wall they run down (body, brick or stone tone), so they fade into the house.</>,
            "A contrast color can work on modern homes, but it draws the eye to the gutters.",
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Inspect", text: "leaks, sagging sections and loose hangers are noted; repair or replacement is separate work." },
            { title: "Clean", text: "remove dirt, mildew and the chalky oxidized layer; paint won't stick to chalk." },
            { title: "Scuff", text: "lightly sand glossy factory finish." },
            { title: "Prime", text: "a bonding or metal primer on bare aluminum and scuffed areas." },
            { title: "Two coats", text: "of exterior paint, brushed or sprayed with the house masked." },
          ]}
        />
      ),
    },
    {
      title: "Why gutters fail first",
      body: (
        <p>
          Gutters take direct sun, standing water and debris, and the factory finish wears thin over the years. Paint
          applied over chalk peels quickly, which is why cleaning is the step that decides how long the job lasts. Fascia
          behind leaking gutters often has wood rot that should be fixed first. See{" "}
          <Link href="/blog/soffit-fascia-painting-houston">soffit and fascia painting</Link> and{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair</Link>.
        </p>
      ),
    },
    {
      title: "Getting it done",
      body: (
        <p>
          Gutters and downspouts are usually painted with the trim during an exterior repaint, and listed on your written
          estimate. See <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint aluminum gutters?",
      a: "Yes. They're cleaned of chalk and oxidation, scuffed, primed with a bonding or metal primer, then given two coats of exterior paint.",
    },
    {
      q: "What color should gutters be?",
      a: "Most match the fascia or trim, with downspouts matching the wall behind them so they blend in.",
    },
    {
      q: "Why is paint peeling off my gutters?",
      a: "Usually it was applied over the chalky, oxidized factory finish without proper cleaning and primer.",
    },
    {
      q: "Do you paint gutters and downspouts?",
      a: "Yes, usually as part of an exterior repaint. Gutter repair or replacement is separate work.",
    },
  ],
  limitations: <>General guidance; leaking or damaged gutters need repair before painting.</>,
  related: [
    { label: "Soffit and fascia painting", href: "/blog/soffit-fascia-painting-houston" },
    { label: "Wood rot repair before painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Painting metal railings and gates", href: "/blog/painting-metal-railings-gates-houston" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
