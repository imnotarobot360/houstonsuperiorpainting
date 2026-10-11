import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, PriceTable, Steps } from "@/components/aeo/blocks"
import { PRICES_2026 as P } from "@/lib/business"

const D: GuideArticleData = {
  path: "/blog/load-bearing-wall-removal-cost-houston",
  title: "Load-Bearing Wall Removal Cost in Houston (2026)",
  description: `Removing a load-bearing wall in Houston costs ${P.wallRemoval} in 2026, mostly depending on the span. What drives the price: beam, engineer, permit, utilities and finish work.`,
  h1: "Load-bearing wall removal cost in Houston (2026)",
  eyebrow: "Cost guide",
  published: "2026-10-11",
  updated: "2026-10-11",
  quickAnswer: (
    <>
      Removing a load-bearing wall in Houston typically costs {P.wallRemoval} in 2026. The span of the opening is the
      biggest factor, followed by the beam, what sits on the wall above, and any wiring, plumbing or ductwork inside it.
      The price should include a structural engineer&apos;s assessment, the permit where one is required, the beam, and the
      drywall, patching and paint to finish the opening.
    </>
  ),
  sections: [
    {
      title: "2026 price range",
      body: (
        <PriceTable
          head={["Project", "Typical 2026 Houston range"]}
          rows={[["Load-bearing wall removal, by span and complexity", P.wallRemoval]]}
        />
      ),
    },
    {
      title: "What drives the cost",
      body: (
        <Bullets
          items={[
            <><strong>Span:</strong> a longer opening needs a bigger beam and more support, and the price climbs with it.</>,
            <><strong>Beam type:</strong> engineered lumber (LVL) or steel, and whether it is flush with the ceiling or drops below it.</>,
            <><strong>Load above:</strong> a second floor or a concentrated point load needs more structure than a single-story roof load.</>,
            <><strong>Utilities in the wall:</strong> wiring, plumbing or ductwork has to be re-routed by licensed trades.</>,
            <><strong>Finish work:</strong> drywall, ceiling and floor patching, texture matching and paint so the opening looks original.</>,
          ]}
        />
      ),
    },
    {
      title: "How the project runs",
      body: (
        <Steps
          items={[
            { title: "Assessment", text: "a structural engineer reviews the wall and the load path and specifies the beam and supports." },
            { title: "Permit", text: "the permit is pulled where the city or HOA requires it." },
            { title: "Temporary support", text: "the structure above is shored before the wall comes out." },
            { title: "Removal and beam", text: "the wall is removed, utilities re-routed, and the beam and posts installed." },
            { title: "Finish", text: "drywall, texture, trim and paint, so the room looks like it was built that way." },
          ]}
        />
      ),
    },
    {
      title: "How to get a reliable number",
      body: (
        <p>
          A wall-removal price is only real after someone looks at what the wall carries. Ask that the estimate list the
          engineer, permit, beam, utility work and finish work separately, so you can see what is included. Our{" "}
          <Link href="/load-bearing-wall-removal-houston-tx">load-bearing wall removal</Link> page explains our process.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "How much does it cost to remove a load-bearing wall in Houston?", a: `Typically ${P.wallRemoval} in 2026, mostly depending on the span, the beam and what the wall supports.` },
    { q: "How do I know if a wall is load-bearing?", a: "Walls running perpendicular to floor or ceiling joists, walls under other walls, and walls near the center of the house are often load-bearing. Only an engineer or experienced contractor can confirm it." },
    { q: "Do I need an engineer and a permit?", a: "For a load-bearing wall, yes. A structural engineer should specify the beam, and a permit is required where the city or HOA requires one. We arrange both." },
    { q: "What if there are pipes or wiring in the wall?", a: "They have to be re-routed by licensed trades. That work is listed in the estimate." },
  ],
  limitations: <>Prices are typical 2026 Houston ranges, not a quote. Structural work is priced only after an on-site assessment.</>,
  related: [
    { label: "Load-bearing wall removal", href: "/load-bearing-wall-removal-houston-tx" },
    { label: "Residential remodeling", href: "/residential-remodeling-houston-tx" },
    { label: "Drywall repair cost", href: "/blog/drywall-repair-cost-houston" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Get a free wall-removal assessment",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
