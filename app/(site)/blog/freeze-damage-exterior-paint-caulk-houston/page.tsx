import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-13.
// We paint and repair wood rot/drywall; we do not do plumbing or roofing,
// so those are referred out. Prices from PRICES_2026.

const D: GuideArticleData = {
  path: "/blog/freeze-damage-exterior-paint-caulk-houston",
  title: "After a Houston Freeze: Checking Exterior Paint, Caulk and Wood",
  description:
    "What a hard freeze does to caulk, wood trim and exterior paint, what to check after the thaw, which repairs can wait until spring, and interior water stains.",
  h1: "After a Houston freeze: checking exterior paint, caulk and wood",
  eyebrow: "Exterior guide",
  published: "2026-12-13",
  updated: "2026-12-13",
  quickAnswer: (
    <>
      Houston homes aren&apos;t built for long freezes, so a hard freeze can show up later as cracked caulk, swollen or split
      trim, and peeling paint where water got in and froze. After the thaw, walk the house: look at caulk joints, window
      sills, door frames, fascia and anywhere water drips or pools. Small caulk cracks can wait for a dry spring day, but
      open joints and soft wood should be sealed or repaired before the spring rains. If pipes burst, fix the plumbing and
      dry the walls fully before any interior painting.
    </>
  ),
  sections: [
    {
      title: "What a freeze does",
      body: (
        <Bullets
          items={[
            <><strong>Caulk:</strong> old, brittle caulk shrinks in the cold and cracks or pulls away from siding and trim.</>,
            <><strong>Wood:</strong> water in open joints, end grain or soft spots expands when it freezes, opening cracks and lifting paint.</>,
            <><strong>Paint:</strong> peeling and blistering where moisture was trapped behind the film.</>,
            <><strong>Burst pipes:</strong> the biggest cause of freeze damage to Houston interiors, with water stains on ceilings and walls.</>,
          ]}
        />
      ),
    },
    {
      title: "Walk-around checklist after the thaw",
      body: (
        <Steps
          items={[
            { title: "Window sills and door frames", text: "the most exposed horizontal wood; press for soft spots." },
            { title: "Caulk joints", text: "at siding butt joints, corner boards and around windows." },
            { title: "Fascia and soffits", text: "especially under gutters that overflowed or held ice." },
            { title: "Around hose bibs", text: "a frozen faucet can leak into the wall behind it." },
            { title: "Inside", text: "ceilings and walls for new stains, bubbles or soft drywall." },
          ]}
        />
      ),
    },
    {
      title: "What can wait, and what can't",
      body: (
        <Bullets
          items={[
            <><strong>Can wait for a dry, mild day:</strong> hairline caulk cracks and small paint chips.</>,
            <><strong>Shouldn&apos;t wait:</strong> open joints, gaps where water can run behind siding, and soft or split wood, before spring storms.</>,
            <><strong>Temporary fix:</strong> sealing an open joint with a cold-weather-rated sealant until the full repair.</>,
          ]}
        />
      ),
    },
    {
      title: "Interior water damage",
      body: (
        <p>
          After a leak, the plumbing is repaired first and the drywall must dry fully; wet drywall that sagged or crumbled is
          replaced. Water stains need a stain-blocking primer before paint, or they bleed through. See{" "}
          <Link href="/blog/paint-over-water-stains-houston">painting over water stains</Link> and{" "}
          <Link href="/drywall-repair-houston-tx">drywall repair</Link>. Drywall repair typically runs {P.drywallRepair} as a
          2026 planning range.
        </p>
      ),
    },
    {
      title: "Repairs and repainting",
      body: (
        <p>
          Wood rot repair typically runs {P.woodRotRepair}, and heavy caulking on an exterior adds {P.caulkHeavyAdd}, as 2026
          planning ranges. Your written estimate lists each repair. See{" "}
          <Link href="/blog/caulking-before-exterior-painting-houston">caulking before exterior painting</Link>,{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair</Link> and{" "}
          <Link href="/blog/can-you-paint-exterior-in-winter-houston">painting an exterior in winter</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can a freeze damage exterior paint?",
      a: "Yes, mostly indirectly: water in cracks and joints expands when it freezes, cracking caulk and wood and lifting paint.",
    },
    {
      q: "What should I check after a freeze?",
      a: "Caulk joints, window sills, door frames, fascia, areas around hose bibs, and interior ceilings and walls for water stains.",
    },
    {
      q: "Can you caulk in cold weather?",
      a: "Some sealants are rated for cold application; check the label. Most work best on a dry day above their minimum temperature.",
    },
    {
      q: "How do you paint over water stains after a burst pipe?",
      a: "Fix the leak, let the drywall dry fully, replace damaged drywall, then use a stain-blocking primer before painting.",
    },
  ],
  limitations: (
    <>
      General guidance. Plumbing and roof repairs are separate trades; prices are 2026 planning ranges, not quotes.
    </>
  ),
  related: [
    { label: "Caulking before exterior painting", href: "/blog/caulking-before-exterior-painting-houston" },
    { label: "Wood rot repair before painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Painting over water stains", href: "/blog/paint-over-water-stains-houston" },
    { label: "Wood rot repair in Houston", href: "/wood-rot-repair-houston-tx" },
  ],
  ctaTitle: "Get a written repair and painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
