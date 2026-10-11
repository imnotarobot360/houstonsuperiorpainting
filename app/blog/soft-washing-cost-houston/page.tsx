import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, PriceTable } from "@/components/aeo/blocks"
import { PRICES_2026 as P } from "@/lib/business"

const D: GuideArticleData = {
  path: "/blog/soft-washing-cost-houston",
  title: "Soft Washing Cost in Houston (2026) | One- and Two-Story Homes",
  description: `Soft washing a Houston home costs ${P.softWashOneStory} for a one-story and ${P.softWashTwoStory} for a two-story in 2026. What it removes, what moves the price, and when to do it.`,
  h1: "Soft washing cost in Houston (2026)",
  eyebrow: "Cost guide",
  published: "2026-10-11",
  updated: "2026-10-11",
  quickAnswer: (
    <>
      Soft washing a Houston home typically costs {P.softWashOneStory} for a one-story house and {P.softWashTwoStory} for a
      two-story house in 2026. Soft washing uses low pressure and a cleaning solution to kill mildew and algae on siding,
      stucco, brick and trim without the damage high pressure can cause. Size, height and how much growth there is set the
      final price.
    </>
  ),
  sections: [
    {
      title: "2026 soft washing prices in Houston",
      body: (
        <PriceTable
          head={["Home", "Typical 2026 Houston range"]}
          rows={[
            ["One-story home", P.softWashOneStory],
            ["Two-story home", P.softWashTwoStory],
          ]}
        />
      ),
    },
    {
      title: "What moves the price",
      body: (
        <Bullets
          items={[
            <><strong>Height:</strong> two-story walls and gables take more time and equipment.</>,
            <><strong>Size:</strong> more wall area means more solution and labor.</>,
            <><strong>Growth:</strong> heavy black mildew or green algae on shaded walls takes longer to treat.</>,
            <><strong>Add-ons:</strong> fences, patios and driveways are priced separately.</>,
          ]}
        />
      ),
    },
    {
      title: "Why soft washing instead of pressure washing",
      body: (
        <p>
          High pressure can strip paint, force water behind siding and damage stucco and soft wood. Soft washing cleans
          those surfaces with low pressure and lets the cleaning solution do the work, so it removes the growth instead of
          just blasting the surface. Concrete is still pressure washed; see our{" "}
          <Link href="/blog/pressure-washing-cost-houston">pressure washing cost guide</Link>.
        </p>
      ),
    },
    {
      title: "Houston shade, mildew and repainting",
      body: (
        <p>
          North-facing and shaded walls in Houston stay damp and grow mildew. Painting over mildew is a common reason
          exterior paint peels early, which is why shaded walls are soft washed and allowed to dry before any primer goes
          on. When we paint an exterior, washing is part of the prep and included in the estimate.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "How much does soft washing cost for a two-story house in Houston?", a: `Typically ${P.softWashTwoStory} in 2026, depending on size and how much mildew there is.` },
    { q: "Is soft washing safe for painted siding?", a: "Yes. It uses low pressure, which is why it is the preferred way to clean painted siding, stucco and trim." },
    { q: "Should I soft wash before painting?", a: "Yes. Paint does not bond to mildew or chalk. If we are painting your exterior, washing is included in the painting estimate." },
    { q: "How long do soft washing results last?", a: "It depends on shade and moisture. Sunny walls stay clean longer; shaded, damp walls grow mildew back sooner." },
  ],
  limitations: <>Prices are typical 2026 Houston ranges, not a quote. An on-site look sets the final price.</>,
  related: [
    { label: "Soft washing in Houston", href: "/soft-washing-houston-tx" },
    { label: "Pressure washing cost", href: "/blog/pressure-washing-cost-houston" },
    { label: "Exterior painting", href: "/exterior-painting-houston-tx" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Get a free soft washing estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
