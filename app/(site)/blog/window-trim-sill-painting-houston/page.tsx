import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-22.

const D: GuideArticleData = {
  path: "/blog/window-trim-sill-painting-houston",
  title: "Painting Window Trim and Sills in Houston: Rot, Caulk, Sun",
  description:
    "Why exterior window sills and trim fail first in Houston sun and rain, how to check them for rot, and the caulk, primer and paint that make them last.",
  h1: "Painting exterior window trim and sills in Houston",
  eyebrow: "Exterior guide",
  published: "2026-11-22",
  updated: "2026-11-22",
  quickAnswer: (
    <>
      Window sills and the bottom corners of window trim are where Houston exteriors usually fail first: they hold water
      and take direct sun. Before painting, check them for soft wood, cut out failed caulk, repair or replace rotted
      pieces, prime bare wood, re-caulk the joints (leaving drainage paths open) and finish with two coats of a durable
      exterior paint. Vinyl and aluminum windows themselves are usually not painted.
    </>
  ),
  sections: [
    {
      title: "Why sills fail first",
      body: (
        <Bullets
          items={[
            "Sills are horizontal: rain sits on them instead of running off.",
            "The bottom corners of the trim wick water up through the end grain.",
            "South- and west-facing windows take strong afternoon sun, which breaks down paint and caulk faster.",
            "Failed caulk at the trim joints lets water get behind the paint.",
          ]}
        />
      ),
    },
    {
      title: "The repair-and-paint sequence",
      body: (
        <Steps
          items={[
            { title: "Probe for rot", text: "a screwdriver sinks into soft wood; repair or replace it before painting." },
            { title: "Remove failed caulk and loose paint", text: "scrape and sand to a sound edge." },
            { title: "Prime bare wood", text: "including end grain and repairs." },
            { title: "Re-caulk", text: "trim joints with a flexible exterior sealant; leave window weep slots and drainage gaps open." },
            { title: "Two finish coats", text: "of a durable exterior paint; satin or semi-gloss is common on trim." },
          ]}
        />
      ),
    },
    {
      title: "Vinyl and aluminum windows",
      body: (
        <p>
          The window frames themselves (vinyl or factory-finished aluminum) are usually left unpainted; painting vinyl a dark
          color can make it warp in the sun and may affect the window warranty. The wood or composite trim around them is
          what gets painted.
        </p>
      ),
    },
    {
      title: "Cost",
      body: (
        <p>
          Window trim is part of an exterior repaint; rot repairs are priced separately, and typically run {P.woodRotRepair}.
          See <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair before painting</Link>,{" "}
          <Link href="/blog/caulking-before-exterior-painting-houston">caulking before exterior painting</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Why do my window sills keep peeling?",
      a: "Water sits on sills and soaks into end grain, and sun breaks down the paint. Usually there is failed caulk, bare wood or early rot underneath.",
    },
    {
      q: "Can you paint vinyl window frames?",
      a: "It is usually avoided: dark paint can make vinyl warp in the sun and may affect the window warranty. The trim around the window is what gets painted.",
    },
    {
      q: "Should window sills be caulked?",
      a: "Trim joints should be; window weep slots and drainage gaps must stay open.",
    },
    {
      q: "What sheen for exterior window trim?",
      a: "Satin or semi-gloss, which sheds water and is easy to clean.",
    },
  ],
  limitations: <>General guidance. Hidden damage can only be judged on site; prices are planning ranges.</>,
  related: [
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Wood rot repair before painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Caulking before exterior painting", href: "/blog/caulking-before-exterior-painting-houston" },
    { label: "Soffit and fascia painting", href: "/blog/soffit-fascia-painting-houston" },
  ],
  ctaTitle: "Get a written exterior estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
