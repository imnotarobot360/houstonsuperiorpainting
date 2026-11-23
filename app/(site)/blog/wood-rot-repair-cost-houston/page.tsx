import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, PriceTable } from "@/components/aeo/blocks"
import { PRICES_2026 as P } from "@/lib/business"

const D: GuideArticleData = {
  path: "/blog/wood-rot-repair-cost-houston",
  title: "Wood Rot Repair Cost in Houston (2026) | Trim, Fascia, Sills",
  description: `Wood rot repair in Houston costs ${P.woodRotRepair} for most jobs in 2026. Where rot shows up on Houston homes, replace vs fill, and what moves the price.`,
  h1: "Wood rot repair cost in Houston (2026)",
  eyebrow: "Cost guide",
  published: "2026-10-11",
  updated: "2026-10-11",
  quickAnswer: (
    <>
      Most wood rot repairs in Houston cost {P.woodRotRepair} in 2026. A single window sill or a short run of trim sits at
      the low end; long sections of fascia, siding or columns sit at the high end. The repair should replace or rebuild the
      rotted wood, prime it on all sides, fix the moisture source, and paint it so it matches the house.
    </>
  ),
  sections: [
    {
      title: "2026 price range",
      body: <PriceTable head={["Repair", "Typical 2026 Houston range"]} rows={[["Wood rot repair, most jobs", P.woodRotRepair]]} />,
    },
    {
      title: "Where rot shows up on Houston homes",
      body: (
        <Bullets
          items={[
            "Window sills and the bottoms of window and door trim",
            "Fascia boards under gutters that overflow",
            "The bottom boards of wood siding and trim near the ground",
            "Porch columns, posts and railings",
            "Garage door trim and frames",
          ]}
        />
      ),
    },
    {
      title: "What moves the price",
      body: (
        <Bullets
          items={[
            <><strong>How far it goes:</strong> rot is often larger than it looks; the soft wood is probed and cut back to sound material.</>,
            <><strong>Replace or rebuild:</strong> badly rotted boards are replaced; small areas can sometimes be rebuilt with a wood epoxy.</>,
            <><strong>Profile and height:</strong> custom trim profiles and second-story fascia take longer.</>,
            <><strong>The cause:</strong> a leaking gutter, missing flashing or failed caulk has to be fixed or the rot returns.</>,
            <><strong>Paint:</strong> new wood is primed on all sides and painted to match.</>,
          ]}
        />
      ),
    },
    {
      title: "Fix rot before you paint",
      body: (
        <p>
          Paint over rotted wood hides the damage while it spreads, and the new paint fails within a season or two. That is
          why rot repair is part of exterior prep and priced line by line in the estimate. See our{" "}
          <Link href="/wood-rot-repair-houston-tx">wood rot repair</Link> page and the{" "}
          <Link href="/blog/exterior-house-painting-cypress-tx-guide">exterior painting prep guide</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "How much does wood rot repair cost in Houston?", a: `Most jobs run ${P.woodRotRepair} in 2026, depending on how far the rot goes, the trim profile and the height.` },
    { q: "Why does wood rot so often in Houston?", a: "Humidity, heavy rain and long wet periods keep exposed wood damp, especially where gutters overflow or caulk has failed." },
    { q: "Do you replace the wood or fill it?", a: "Badly rotted wood is replaced. Small, contained areas can sometimes be rebuilt with a wood epoxy." },
    { q: "Can you repair the rot and paint in the same project?", a: "Yes. Rot repair is part of exterior prep and is listed in the painting estimate." },
  ],
  limitations: <>Prices are typical 2026 Houston ranges, not a quote. The full extent of rot is only known once the soft wood is opened up.</>,
  related: [
    { label: "Wood rot repair in Houston", href: "/wood-rot-repair-houston-tx" },
    { label: "Exterior painting", href: "/exterior-painting-houston-tx" },
    { label: "Stucco painting cost", href: "/blog/stucco-painting-cost-houston" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Get a free wood rot repair estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
