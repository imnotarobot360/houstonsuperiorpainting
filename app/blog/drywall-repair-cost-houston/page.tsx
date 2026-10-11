import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, PriceTable } from "@/components/aeo/blocks"
import { PRICES_2026 as P } from "@/lib/business"

const D: GuideArticleData = {
  path: "/blog/drywall-repair-cost-houston",
  title: "Drywall Repair Cost in Houston (2026) | Patches to Water Damage",
  description: `Drywall repair in Houston costs ${P.drywallRepair} in 2026, from small patches to water damage. What moves the price: size, texture matching, water damage and paint.`,
  h1: "Drywall repair cost in Houston (2026)",
  eyebrow: "Cost guide",
  published: "2026-10-11",
  updated: "2026-10-11",
  quickAnswer: (
    <>
      Drywall repair in Houston typically costs {P.drywallRepair} in 2026. Small holes and cracks sit at the low end;
      water-damaged ceilings or large sections of replaced drywall sit at the high end. Matching the existing texture and
      repainting the repaired area are part of a good repair, so ask whether they are included in the price.
    </>
  ),
  sections: [
    {
      title: "2026 price range",
      body: <PriceTable head={["Repair", "Typical 2026 Houston range"]} rows={[["Drywall repair, small patch to water damage", P.drywallRepair]]} />,
    },
    {
      title: "What moves the price",
      body: (
        <Bullets
          items={[
            <><strong>Size:</strong> a nail pop or doorknob hole is quick; a ceiling section after a leak means cutting out and replacing drywall.</>,
            <><strong>Texture:</strong> Houston homes often have orange-peel or knockdown texture, and matching it so the patch disappears takes skill and time.</>,
            <><strong>Water damage:</strong> wet drywall has to be removed and the area dried. The leak must be fixed first or the stain comes back.</>,
            <><strong>Paint:</strong> a repaired spot rarely matches old paint; usually the whole wall or ceiling is repainted.</>,
            <><strong>Drying time:</strong> joint compound needs time between coats, so even small repairs can take more than one visit.</>,
          ]}
        />
      ),
    },
    {
      title: "Repairs during an interior paint job",
      body: (
        <p>
          Small patches and nail holes are normally part of interior painting prep. Larger repairs, such as water damage or
          replacing sections, are listed and priced separately in the estimate. See{" "}
          <Link href="/blog/drywall-repair-before-painting">why drywall repair before painting matters</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "How much does drywall repair cost in Houston?", a: `Typically ${P.drywallRepair} in 2026, depending on the size of the damage, texture matching and whether water damage is involved.` },
    { q: "Can you match my wall texture?", a: "Yes. Orange-peel and knockdown are the most common textures in Houston homes, and matching them is part of the repair." },
    { q: "Do you repair water-damaged ceilings?", a: "Yes, after the leak is fixed. Wet drywall is removed, the area dries, new drywall goes in, then texture and paint." },
    { q: "Is drywall repair included with interior painting?", a: "Small patches and nail holes are part of the prep. Larger repairs are priced separately in the written estimate." },
  ],
  limitations: <>Prices are typical 2026 Houston ranges, not a quote. Hidden damage, such as wet insulation or mold behind the wall, changes the scope.</>,
  related: [
    { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
    { label: "Interior painting", href: "/interior-painting-houston-tx" },
    { label: "Wallpaper removal cost", href: "/blog/wallpaper-removal-cost-houston" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Get a free drywall repair estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
