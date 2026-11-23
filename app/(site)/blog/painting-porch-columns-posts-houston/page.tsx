import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-15.
// Structural repairs (load-bearing columns) are flagged as separate work.

const D: GuideArticleData = {
  path: "/blog/painting-porch-columns-posts-houston",
  title: "Painting Porch Columns and Posts",
  description:
    "Wood, fiberglass and wrapped porch columns: rot at the base, caulk and primer, paint that holds up on a Houston porch, and when a column needs repair first.",
  h1: "Painting porch columns and posts",
  eyebrow: "Exterior guide",
  published: "2027-01-15",
  updated: "2027-01-15",
  quickAnswer: (
    <>
      Porch columns fail first at the bottom, where rain splashes and water sits on the base and porch floor. Before
      painting, the base and plinth are checked for soft wood, joints are re-caulked, and bare wood is primed. Wood columns
      and wrapped columns need the most care; fiberglass and PVC columns need cleaning and a bonding primer. Rot that reaches
      into a load-bearing post is a repair job before it&apos;s a paint job.
    </>
  ),
  sections: [
    {
      title: "By material",
      body: (
        <Bullets
          items={[
            <><strong>Solid or built-up wood:</strong> scrape, repair soft spots, prime bare wood, two coats of exterior paint.</>,
            <><strong>Wrapped columns (wood or composite wrap over a post):</strong> check seams and the base, where water gets behind the wrap.</>,
            <><strong>Fiberglass and PVC:</strong> clean, scuff and use a bonding primer; keep to colors the maker allows on PVC.</>,
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Inspect the base", text: "press for soft wood; check the plinth and where it meets the floor." },
            { title: "Repair", text: "replace rotted base trim; structural rot in a load-bearing post is separate repair work." },
            { title: "Scrape and sand", text: "loose paint off, edges feathered." },
            { title: "Caulk", text: "seams and joints, but leave weep gaps at the bottom so water can drain." },
            { title: "Prime and paint", text: "primer on bare wood, then two coats; satin or semi-gloss is common." },
          ]}
        />
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          Columns are usually painted with the porch or the whole exterior. Wood rot repair typically runs {P.woodRotRepair}{" "}
          as a 2026 planning range, depending on extent; your written estimate lists it separately. See{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair</Link>,{" "}
          <Link href="/blog/exterior-paint-sheen-houston">exterior paint sheen</Link>,{" "}
          <Link href="/blog/haint-blue-porch-ceiling-houston">haint blue porch ceilings</Link> and{" "}
          <Link href="/wood-rot-repair-houston-tx">wood rot repair in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Why does paint peel at the bottom of porch columns?",
      a: "Water: rain splash and standing water on the base soak into the wood and push paint off. Check for rot there first.",
    },
    {
      q: "Can you paint fiberglass porch columns?",
      a: "Yes, after cleaning and scuffing, with a bonding primer and exterior paint.",
    },
    {
      q: "Should porch columns be caulked at the bottom?",
      a: "Seams yes, but leave small gaps at the very bottom so water can drain out instead of being trapped.",
    },
    {
      q: "What if a porch post is rotten?",
      a: "Rot in a load-bearing post is a repair job first. Paint can't fix structural damage.",
    },
  ],
  limitations: <>General guidance; structural repairs are separate work. Prices are 2026 planning ranges.</>,
  related: [
    { label: "Wood rot repair before painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Haint blue porch ceilings", href: "/blog/haint-blue-porch-ceiling-houston" },
    { label: "Exterior paint sheen", href: "/blog/exterior-paint-sheen-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
