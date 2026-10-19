import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-26.
// Lead note: homes built before 1978 may have lead paint; we do not make any
// lead-certification claim here (owner has not confirmed RRP certification).

const D: GuideArticleData = {
  path: "/blog/latex-paint-over-oil-based-paint",
  title: "Can You Apply Latex Paint Over Oil-Based Paint?",
  description:
    "How to tell whether trim, doors or cabinets have oil-based paint, and the clean, sand and bonding-primer steps that keep latex from peeling off.",
  h1: "Can you apply latex paint over oil-based paint?",
  eyebrow: "Prep guide",
  published: "2026-10-26",
  updated: "2026-10-26",
  quickAnswer: (
    <>
      Yes, but not directly. Latex (water-based) paint does not grip a hard, glossy oil-based finish, so it can peel off in
      sheets, sometimes weeks later. The surface has to be cleaned, sanded to a dull finish and coated with a bonding
      primer made for the job; then latex or a water-based enamel goes on top. Old oil-based paint is common on trim,
      doors and cabinets in older Houston homes.
    </>
  ),
  sections: [
    {
      title: "How to tell if paint is oil-based",
      body: (
        <>
          <p>A simple at-home test:</p>
          <Steps
            items={[
              { title: "Clean a small spot", text: "on the trim or door with mild soap and water, and let it dry." },
              { title: "Rub with rubbing alcohol", text: "on a cotton ball or white rag, back and forth for about 20 seconds." },
              { title: "Check the rag", text: "if paint comes off on the rag, it is latex. If nothing comes off and the surface just gets cleaner, it is most likely oil-based." },
            ]}
          />
          <p>
            Other clues: oil paint is usually harder and glossier, may have yellowed over the years (especially whites), and
            chips rather than peels.
          </p>
        </>
      ),
    },
    {
      title: "Why latex peels off oil",
      body: (
        <p>
          Oil-based paint cures to a hard, slick film. Latex dries by bonding to the surface it lands on, and it cannot get a
          grip on that slick film. It may look fine at first, then lift when it is bumped, taped or washed. That is why the
          prep matters more than the topcoat.
        </p>
      ),
    },
    {
      title: "The right way to paint over oil",
      body: (
        <Steps
          items={[
            { title: "Clean", text: "remove grease and grime with a degreaser, especially on kitchen cabinets and door edges, then rinse." },
            { title: "Repair", text: "fill dents and gaps, and caulk joints." },
            { title: "Sand", text: "scuff the whole surface to a dull, even finish; you are giving the primer something to grip. Remove all dust." },
            { title: "Bonding primer", text: "apply a primer made to bond to glossy and oil-based surfaces, and let it dry as the label says." },
            { title: "Topcoat", text: `two coats of a durable water-based enamel for trim, doors and cabinets. On cabinets and fine trim we use products such as ${BUSINESS.cabinetFinish.products[0]} or ${BUSINESS.cabinetFinish.products[1]}.` },
          ]}
        />
      ),
    },
    {
      title: "Before you sand: older homes",
      body: (
        <p>
          Homes built before 1978 may have lead-based paint on trim, doors and windows. Sanding or scraping it creates
          hazardous dust. If your home is that old, have the paint tested before any sanding, and follow EPA lead-safe
          practices or hire a contractor certified to do that work.
        </p>
      ),
    },
    {
      title: "Can you put oil over latex instead?",
      body: (
        <p>
          It is possible with the right prep, but it is rarely the better choice today. Modern water-based enamels level
          well, stay whiter (oil-based whites yellow over time) and clean up with water. See{" "}
          <Link href="/fine-finish-painting-houston">fine finish painting for trim and doors</Link> and{" "}
          <Link href="/blog/primer-vs-two-coats-paint-houston">primer or two coats of paint</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can I paint latex over oil-based paint without primer?",
      a: "No. Latex does not bond to a hard oil-based finish and can peel off. Clean, sand to a dull finish and use a bonding primer first.",
    },
    {
      q: "How can I tell if my trim is oil-based?",
      a: "Rub a cleaned spot with rubbing alcohol on a white rag. If paint comes off, it is latex; if nothing comes off, it is most likely oil-based.",
    },
    {
      q: "Why is my old white trim yellow?",
      a: "Oil-based whites yellow with age, especially where they get little sunlight. Repainting with a water-based enamel over a bonding primer fixes it and stays whiter.",
    },
    {
      q: "Is it safe to sand old trim?",
      a: "In homes built before 1978, old paint may contain lead. Test before sanding, and use lead-safe practices or a certified contractor.",
    },
  ],
  limitations: (
    <>General guidance. Follow the primer and paint manufacturers&apos; instructions; product choice depends on the surface and condition.</>
  ),
  related: [
    { label: "Fine finish painting for trim and doors", href: "/fine-finish-painting-houston" },
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Primer or two coats of paint?", href: "/blog/primer-vs-two-coats-paint-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written estimate for trim, doors or cabinets",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
