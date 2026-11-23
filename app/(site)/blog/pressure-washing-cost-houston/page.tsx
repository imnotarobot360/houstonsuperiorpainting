import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, PriceTable } from "@/components/aeo/blocks"
import { PRICES_2026 as P } from "@/lib/business"

const D: GuideArticleData = {
  path: "/blog/pressure-washing-cost-houston",
  title: "Pressure Washing Cost in Houston (2026) | Houses, Driveways",
  description: `What pressure washing costs in Houston in 2026: ${P.pressureWashing} for most jobs, ${P.pressureWashingHouse} for a house exterior. What moves the price and when to soft wash instead.`,
  h1: "Pressure washing cost in Houston (2026)",
  eyebrow: "Cost guide",
  published: "2026-10-11",
  updated: "2026-10-11",
  quickAnswer: (
    <>
      Pressure washing in Houston typically costs {P.pressureWashing} in 2026, depending on what is being cleaned. Washing a
      house exterior usually runs {P.pressureWashingHouse}. Size, number of stories, the surfaces involved and how much
      mildew or staining there is set the final price. Painted siding, stucco and roofs are usually soft washed rather than
      blasted with high pressure.
    </>
  ),
  sections: [
    {
      title: "2026 pressure washing prices in Houston",
      body: (
        <PriceTable
          head={["Job", "Typical 2026 Houston range"]}
          rows={[
            ["Most pressure washing jobs", P.pressureWashing],
            ["House exterior", P.pressureWashingHouse],
            ["Soft wash, one-story home", P.softWashOneStory],
            ["Soft wash, two-story home", P.softWashTwoStory],
          ]}
        />
      ),
    },
    {
      title: "What moves the price",
      body: (
        <Bullets
          items={[
            <><strong>Size and stories:</strong> a two-story house takes longer and needs more ladder work than a one-story.</>,
            <><strong>Surfaces:</strong> a driveway, a house, a fence and a deck are each priced on their own.</>,
            <><strong>Buildup:</strong> heavy mildew, algae, rust or oil stains need more time and treatment.</>,
            <><strong>Access:</strong> tight side yards, landscaping close to the house and steep slopes slow the work.</>,
          ]}
        />
      ),
    },
    {
      title: "Pressure washing or soft washing?",
      body: (
        <p>
          High pressure is right for concrete: driveways, sidewalks and patios. Painted siding, stucco, wood trim and roofs
          can be damaged by high pressure, so they are usually soft washed: low pressure with a cleaning solution that kills
          mildew and algae. See our <Link href="/blog/soft-washing-cost-houston">soft washing cost guide</Link> and the{" "}
          <Link href="/soft-washing-houston-tx">soft washing</Link> page.
        </p>
      ),
    },
    {
      title: "Why Houston homes need it more often",
      body: (
        <p>
          Humidity, heavy rain and shade let mildew and algae grow quickly on north-facing walls, fences and concrete.
          Spring pollen adds a film on top. Shaded areas usually need cleaning more often than sunny ones.
        </p>
      ),
    },
    {
      title: "Washing before painting",
      body: (
        <p>
          Paint will not stick to dirt, chalk or mildew. When we paint an exterior, washing is part of the prep and is
          included in the painting estimate, so you do not need to book it separately. See{" "}
          <Link href="/blog/pressure-washing-before-painting">why washing before painting matters</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "How much does it cost to pressure wash a house in Houston?", a: `A house exterior typically runs ${P.pressureWashingHouse} in 2026, depending on size, stories and how much mildew there is.` },
    { q: "Can pressure washing damage my house?", a: "Yes, if high pressure is used on the wrong surface. It can strip paint, gouge soft wood, force water behind siding and damage stucco. Painted siding and roofs are better soft washed." },
    { q: "Is washing included when you paint my exterior?", a: "Yes. Washing is part of exterior prep and is included in our painting estimate." },
    { q: "How often should I pressure wash in Houston?", a: "It depends on shade and buildup. Shaded walls, fences and concrete usually need it more often than sunny areas because mildew grows faster there." },
  ],
  limitations: <>Prices are typical 2026 Houston ranges, not a quote. Your price depends on an on-site look at the surfaces, size and buildup.</>,
  related: [
    { label: "Pressure washing in Houston", href: "/pressure-washing-houston-tx" },
    { label: "Soft washing cost", href: "/blog/soft-washing-cost-houston" },
    { label: "Exterior painting", href: "/exterior-painting-houston-tx" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Get a free pressure washing estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
