import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-24.
// Price only from PRICES_2026.woodRotRepair. Distinct from the cost post
// (/blog/wood-rot-repair-cost-houston): this one is about sequencing with paint.

const D: GuideArticleData = {
  path: "/blog/wood-rot-repair-before-painting-houston",
  title: "Wood Rot Repair Before Exterior Painting in Houston",
  description:
    "Why rotted trim, fascia and siding must be repaired before exterior paint, how to spot it, repair vs. replace, and how it appears on a painting estimate.",
  h1: "Wood rot repair before exterior painting",
  eyebrow: "Exterior guide",
  published: "2026-10-24",
  updated: "2026-10-24",
  quickAnswer: (
    <>
      Rotted wood has to be repaired or replaced before an exterior is painted. Paint over soft, wet wood traps moisture
      and fails quickly, usually as peeling and more rot. On Houston homes, rot is most common where water sits: the
      bottoms of trim and door frames, fascia under gutters, window sills and siding near the ground. Typical wood rot
      repairs run {P.woodRotRepair}, depending on how much wood is affected.
    </>
  ),
  sections: [
    {
      title: "Why rot has to be fixed first",
      body: (
        <p>
          Paint protects sound wood; it cannot repair rotten wood. Soft fibers will not hold primer, and the moisture inside
          them pushes the new paint off from behind. Painting over rot can also hide it from you until the damage has
          spread into framing or sheathing. Repair first, prime the new wood on all exposed faces, then paint.
        </p>
      ),
    },
    {
      title: "Where Houston homes rot",
      body: (
        <Bullets
          items={[
            "Bottoms of door frames, trim boards and garage door jambs, where splash-back and standing water collect.",
            "Fascia and soffits under gutters that overflow or leak.",
            "Window sills and the bottom corners of window trim.",
            "Siding within a few inches of soil, mulch or a roof line.",
            "Joints that were never caulked, or where caulk has failed.",
          ]}
        />
      ),
    },
    {
      title: "How to check for rot",
      body: (
        <Steps
          items={[
            { title: "Look", text: "for peeling or bubbling paint in one area, dark staining, gaps at joints, or swelling." },
            { title: "Press", text: "with a screwdriver or awl. Sound wood resists; rotten wood is soft, spongy or crumbles." },
            { title: "Follow the water", text: "find where the water comes from: gutter, missing flashing, splash-back, or a failed caulk joint." },
          ]}
        />
      ),
    },
    {
      title: "Repair or replace?",
      body: (
        <p>
          Small areas of soft wood can sometimes be dug out, consolidated and filled with an exterior wood filler or epoxy.
          Longer runs, structural pieces or wood that is soft through its thickness should be replaced. New boards should be
          primed on all faces (including ends and back) before installation where possible. If water keeps reaching the
          spot, fix the cause too, or the new wood will rot again. See{" "}
          <Link href="/wood-rot-repair-houston-tx">wood rot repair in Houston</Link>.
        </p>
      ),
    },
    {
      title: "How it shows up on your estimate",
      body: (
        <p>
          A careful exterior estimate lists known rot repairs separately from painting, and says how hidden rot found during
          prep is handled (usually a written change order with a price before the work is done). Typical repairs run{" "}
          {P.woodRotRepair}; see <Link href="/blog/wood-rot-repair-cost-houston">wood rot repair cost</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint over rotted wood?",
      a: "No. Paint will not hold on soft, wet wood and traps moisture, so it peels and the rot spreads. Repair or replace the rotted wood, prime it, then paint.",
    },
    {
      q: "How do I know if my trim has wood rot?",
      a: "Press it with a screwdriver. Sound wood resists; rotten wood is soft or crumbles. Peeling paint in one spot, dark stains and swelling are also signs.",
    },
    {
      q: "Should rotted wood be filled or replaced?",
      a: "Small, shallow areas can be filled with exterior filler or epoxy. Longer runs, structural pieces or wood that is soft through its thickness should be replaced.",
    },
    {
      q: "How much does wood rot repair cost in Houston?",
      a: `Typical repairs run ${P.woodRotRepair}, depending on how much wood is affected and where it is.`,
    },
  ],
  limitations: (
    <>General guidance. Hidden damage behind trim or siding can only be judged on site; prices are planning ranges, not quotes.</>
  ),
  related: [
    { label: "Wood rot repair in Houston", href: "/wood-rot-repair-houston-tx" },
    { label: "Wood rot repair cost", href: "/blog/wood-rot-repair-cost-houston" },
    { label: "Why paint peels and bubbles", href: "/blog/why-paint-peels-bubbles-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written exterior estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
