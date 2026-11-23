import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-28.
// Owner confirmed 2026-10-21: we paint laminate and thermofoil cabinets.
// Coatings from BUSINESS.cabinetFinish. Loose/peeling thermofoil must be
// fixed or removed first (general fact, not a refusal).

const D: GuideArticleData = {
  path: "/blog/paint-laminate-thermofoil-cabinets",
  title: "Can You Paint Laminate or Thermofoil Cabinets?",
  description:
    "Yes, with the right prep. What makes paint stick to laminate and thermofoil, why peeling thermofoil has to be dealt with first, and the coating and cure time to expect.",
  h1: "Can you paint laminate or thermofoil cabinets?",
  eyebrow: "Cabinet guide",
  published: "2026-12-28",
  updated: "2026-12-28",
  quickAnswer: (
    <>
      Yes. We paint laminate and thermofoil cabinets. Both have slick plastic surfaces, so the result depends on prep:
      thorough degreasing, scuff-sanding and a strong bonding primer, then a cabinet-grade enamel. Thermofoil that is
      peeling or bubbling, often near the oven or dishwasher, has to be fixed or removed first, because paint can&apos;t hold
      a loose film down. Firmly bonded laminate and thermofoil paint well.
    </>
  ),
  sections: [
    {
      title: "Laminate vs. thermofoil",
      body: (
        <Bullets
          items={[
            <><strong>Laminate:</strong> a thin plastic sheet glued to particleboard or MDF, usually flat. Sound laminate takes paint well with a bonding primer.</>,
            <><strong>Thermofoil:</strong> vinyl film heat-pressed over shaped MDF doors. It looks like painted wood but can peel where heat hits it.</>,
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Check every door", text: "peeling, bubbling or swollen edges are found before any paint goes on." },
            { title: "Fix loose film", text: "re-glue small areas, or remove the thermofoil from doors where it's failing." },
            { title: "Degrease", text: "kitchen grease is the main reason paint fails on slick surfaces." },
            { title: "Scuff-sand", text: "to give the primer something to grip." },
            { title: "Bonding primer", text: "made for slick surfaces such as laminate and plastic." },
            { title: "Cabinet-grade enamel", text: `we use ${BUSINESS.cabinetFinish.sentence}.` },
          ]}
        />
      ),
    },
    {
      title: "Cure time and care",
      body: (
        <p>
          Cabinets need about {BUSINESS.cabinetFinish.cureDays} of gentle use while the finish cures. Heat shields near the
          oven or dishwasher help protect doors that sit next to them. See{" "}
          <Link href="/blog/cabinet-paint-cure-time-houston">cabinet paint cure time</Link> and{" "}
          <Link href="/blog/why-white-painted-cabinets-turn-yellow">why white cabinets turn yellow</Link>.
        </p>
      ),
    },
    {
      title: "Paint, reface or replace?",
      body: (
        <p>
          Painting is usually the most affordable way to update sound laminate or thermofoil cabinets; cabinet painting
          typically runs {P.cabinetsPerKitchen} per kitchen as a 2026 planning range. If many doors are failing or the boxes
          are swollen from water, refacing or replacing may make more sense. See{" "}
          <Link href="/blog/cabinet-refinishing-vs-replacement-houston">cabinet refinishing vs. replacement</Link> and{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can laminate cabinets be painted?",
      a: "Yes, with degreasing, scuff-sanding, a bonding primer made for slick surfaces, and a cabinet-grade enamel.",
    },
    {
      q: "Can you paint over peeling thermofoil?",
      a: "Not over the loose film. Peeling thermofoil has to be re-glued or removed first; paint can't hold it down.",
    },
    {
      q: "How long does paint last on thermofoil cabinets?",
      a: "On firmly bonded thermofoil with proper prep and a cabinet-grade enamel, it can hold up well. Heat near ovens is the main risk.",
    },
    {
      q: "Do you paint laminate and thermofoil cabinets?",
      a: "Yes. We check each door first and fix or remove any failing thermofoil before painting.",
    },
  ],
  limitations: <>General guidance; the condition of each door decides the prep. Prices are 2026 planning ranges.</>,
  related: [
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
    { label: "Cabinet refinishing vs. replacement", href: "/blog/cabinet-refinishing-vs-replacement-houston" },
    { label: "Why white cabinets turn yellow", href: "/blog/why-white-painted-cabinets-turn-yellow" },
  ],
  ctaTitle: "Get a written cabinet painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
