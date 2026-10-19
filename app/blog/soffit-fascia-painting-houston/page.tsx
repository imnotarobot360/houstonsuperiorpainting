import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-14.

const D: GuideArticleData = {
  path: "/blog/soffit-fascia-painting-houston",
  title: "Soffit and Fascia Painting in Houston: Rot, Mildew and Prep",
  description:
    "Why soffits and fascia fail first on Houston homes, how to check them for rot and mildew, and the prep that makes the paint last.",
  h1: "Soffit and fascia painting in Houston",
  eyebrow: "Exterior guide",
  published: "2026-11-14",
  updated: "2026-11-14",
  quickAnswer: (
    <>
      Soffits (the underside of the eaves) and fascia (the board behind the gutter) are often the first exterior surfaces
      to fail on Houston homes. Fascia takes overflow from gutters and rots; soffits stay shaded and grow mildew. Before
      painting, they need cleaning, rot repair, re-caulking and priming of any bare wood, then a durable exterior paint.
      Vented soffits must stay open, so they are sprayed or rolled without clogging the vents.
    </>
  ),
  sections: [
    {
      title: "Why they fail first",
      body: (
        <Bullets
          items={[
            "Fascia sits behind gutters that overflow or leak, so water soaks the bottom edge and the ends.",
            "Soffits are shaded and humid, which suits mildew.",
            "Joints between boards open with heat and movement and let water in.",
            "They are hard to see from the ground, so damage goes unnoticed until paint peels or wood falls.",
          ]}
        />
      ),
    },
    {
      title: "Check before you paint",
      body: (
        <Steps
          items={[
            { title: "Look for peeling and staining", text: "especially at the ends of fascia boards and under gutter corners." },
            { title: "Probe for rot", text: "soft wood under a screwdriver needs repair or replacement before paint." },
            { title: "Check the gutters", text: "overflowing or leaking gutters will rot new fascia too; fix them first." },
            { title: "Look for mildew", text: "dark spotting on soffits needs cleaning before paint, never painting over." },
          ]}
        />
      ),
    },
    {
      title: "Prep and paint",
      body: (
        <Bullets
          items={[
            "Gentle washing (soft washing for mildew), then full drying.",
            "Rot repair or board replacement, with new wood primed on all sides.",
            "Scrape loose paint, sand edges, caulk the joints (but keep soffit vents open).",
            "Prime bare wood, then two coats of a durable exterior paint; satin is common on trim and fascia.",
          ]}
        />
      ),
    },
    {
      title: "Cost",
      body: (
        <p>
          Soffits and fascia are usually painted as part of an exterior repaint. Rot repair is priced separately; typical
          wood rot repairs run {P.woodRotRepair}. See{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair before painting</Link>,{" "}
          <Link href="/blog/caulking-before-exterior-painting-houston">caulking before exterior painting</Link> and{" "}
          <Link href="/soft-washing-houston-tx">soft washing</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Why is my fascia board rotting?",
      a: "Usually water: gutters that overflow, leak or sit against the board. Fix the gutter and replace or repair the rotted wood before painting.",
    },
    {
      q: "Can you paint over mildew on soffits?",
      a: "No. Clean it (soft washing works well), let it dry, then prime and paint.",
    },
    {
      q: "Should soffit vents be painted?",
      a: "They can be, but the vent openings must stay clear; spray lightly or roll carefully so ventilation isn't blocked.",
    },
    {
      q: "What paint sheen for fascia and soffits?",
      a: "Satin is common on fascia and trim; flat or satin on soffits. Use a durable exterior product.",
    },
  ],
  limitations: <>General guidance. Hidden damage can only be judged on site; prices are planning ranges.</>,
  related: [
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Wood rot repair in Houston", href: "/wood-rot-repair-houston-tx" },
    { label: "Caulking before exterior painting", href: "/blog/caulking-before-exterior-painting-houston" },
    { label: "Soft washing in Houston", href: "/soft-washing-houston-tx" },
  ],
  ctaTitle: "Get a written exterior estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
