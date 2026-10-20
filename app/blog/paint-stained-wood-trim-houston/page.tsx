import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-30.
// Prep steps are standard practice; no specific primer brand claimed.

const D: GuideArticleData = {
  path: "/blog/paint-stained-wood-trim-houston",
  title: "Should You Paint Stained Wood Trim? Pros, Cons and Prep",
  description:
    "When painting stained or varnished trim makes sense, how it is cleaned, sanded and primed so paint sticks, and why painted trim is hard to take back to wood.",
  h1: "Should you paint stained wood trim?",
  eyebrow: "Interior guide",
  published: "2026-11-30",
  updated: "2026-11-30",
  quickAnswer: (
    <>
      Painting stained trim is one of the biggest visual updates in an older Houston home: it brightens rooms and makes
      walls and floors look newer. It is a good choice when the stain is dated, worn or mismatched. Leave it stained when the
      wood is high quality and in good shape and you love the look, because going back to wood later means stripping. The
      prep is what makes it last: clean, scuff-sand, prime with a bonding or stain-blocking primer, then two coats of a
      durable trim enamel.
    </>
  ),
  sections: [
    {
      title: "Paint it or keep it?",
      body: (
        <Bullets
          items={[
            <><strong>Paint it</strong> when the stain is orange or faded, when trim was patched and no longer matches, when you are updating floors and walls anyway, or when you want a lighter, more current look.</>,
            <><strong>Keep it</strong> when it is quality hardwood in good shape, when it is a defining feature of a traditional or historic home, or when you may want natural wood later.</>,
            <><strong>Middle ground:</strong> paint the baseboards and casings but keep a stained handrail, built-in or front door as an accent.</>,
          ]}
        />
      ),
    },
    {
      title: "Why stained trim needs more prep",
      body: (
        <p>
          Stain is usually sealed with a clear finish such as varnish or polyurethane, which is slick and won&apos;t let paint
          bite. Older trim may also have an oil-based finish, which latex paint won&apos;t stick to without the right primer.
          Some woods and stains bleed through paint as yellow or brown spots (tannin bleed) unless they are sealed. See{" "}
          <Link href="/blog/latex-paint-over-oil-based-paint">latex paint over oil-based paint</Link>.
        </p>
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Clean", text: "remove grease and dust; trim near kitchens and doors collects a film paint won't stick to." },
            { title: "Scuff-sand", text: "dull the glossy finish so the primer can grip; no need to sand to bare wood." },
            { title: "Fill and caulk", text: "fill nail holes and dents, and caulk gaps between trim and walls." },
            { title: "Prime", text: "a bonding primer for adhesion, or a stain-blocking primer where tannins may bleed." },
            { title: "Two finish coats", text: "a durable trim enamel, usually satin or semi-gloss, for a hard, washable finish." },
          ]}
        />
      ),
    },
    {
      title: "Trim color",
      body: (
        <p>
          Most homeowners choose a warm or soft white so the change looks intentional with existing floors. Very bright,
          cool whites can look stark next to older wood floors. See{" "}
          <Link href="/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston">Alabaster vs. White Dove vs. Chantilly Lace</Link>{" "}
          and <Link href="/blog/paint-finishes-matte-eggshell-satin-semi-gloss">which sheen to use</Link>.
        </p>
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          Painting trim throughout a Houston home typically runs {P.trimWholeHome} as a 2026 planning range for already
          painted trim. Converting stained trim costs more, because of the cleaning, sanding, priming and filling. Your written
          estimate lists that prep separately. See <Link href="/interior-painting-houston-tx">interior painting in Houston</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint over stained wood trim without sanding?",
      a: "It's risky. The clear finish over stain is slick, so paint can peel. A light scuff-sand plus a bonding primer is the reliable approach.",
    },
    {
      q: "What primer is used on stained trim?",
      a: "A bonding primer for adhesion over the clear finish, or a stain-blocking primer where the wood or stain may bleed through.",
    },
    {
      q: "Is painting stained trim worth it?",
      a: "Often, in homes with dated or mismatched trim. It brightens rooms and updates the whole house. Keep high-quality wood trim stained if you love it.",
    },
    {
      q: "Can painted trim be stained again later?",
      a: "Only by stripping the paint, which is slow and rarely leaves a perfect wood surface. Treat painting stained trim as permanent.",
    },
  ],
  limitations: <>General guidance; each house's trim, finish and wood species decide the right prep and primer.</>,
  related: [
    { label: "Latex paint over oil-based paint", href: "/blog/latex-paint-over-oil-based-paint" },
    { label: "Paint sheens explained", href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Cost to paint ceilings, trim and doors", href: "/blog/cost-paint-ceilings-trim-doors-houston" },
  ],
  ctaTitle: "Get a written trim painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
