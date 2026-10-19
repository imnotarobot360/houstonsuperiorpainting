import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-03.
// Site already states we offer oak grain filling, quoted separately
// (cabinet refinishing page). Prices from PRICES_2026.

const D: GuideArticleData = {
  path: "/blog/fill-oak-grain-before-painting-cabinets",
  title: "Should You Fill Oak Grain Before Painting Cabinets?",
  description:
    "Why oak grain shows through paint, what grain filling does, how it adds time, and how to choose between a textured and a smooth painted finish.",
  h1: "Should you fill oak grain before painting cabinets?",
  eyebrow: "Cabinet guide",
  published: "2026-11-03",
  updated: "2026-11-03",
  quickAnswer: (
    <>
      Only if you want a smooth, modern painted look. Oak has deep open grain that shows through paint as a visible
      texture, even after primer and two coats. Grain filling fills those pores before priming so the painted doors look
      smooth like maple or MDF. It adds labor and drying time, so it is quoted separately. If you like a little wood
      texture under the paint, you can skip it.
    </>
  ),
  sections: [
    {
      title: "Why oak grain shows through paint",
      body: (
        <p>
          Red and white oak have large, open pores. Paint bridges some of them and sinks into others, so the grain pattern
          stays visible as a texture, especially in satin or semi-gloss and in side light. Primer alone does not fill it;
          multiple coats only soften it a little.
        </p>
      ),
    },
    {
      title: "Smooth or textured: which look do you want?",
      body: (
        <Bullets
          items={[
            <><strong>Grain filled:</strong> smooth, modern, close to the look of new painted cabinets. Best for flat-panel and shaker doors in solid colors.</>,
            <><strong>Grain showing:</strong> a softer, more traditional painted-wood look. Some homeowners like it on raised-panel doors and in farmhouse-style kitchens.</>,
            <><strong>Darker colors show grain more:</strong> a navy or charcoal cabinet highlights texture more than a soft white.</>,
          ]}
        />
      ),
    },
    {
      title: "How grain filling is done",
      body: (
        <Steps
          items={[
            { title: "Clean and degrease", text: "kitchen cabinets carry grease that must come off before anything else." },
            { title: "Sand", text: "scuff the existing finish so the filler and primer can bond." },
            { title: "Apply grain filler", text: "a filler is worked into the pores across the grain, allowed to dry, and sanded flat; heavy grain may need a second pass." },
            { title: "Prime", text: "a bonding primer seals the filler and the old finish." },
            { title: "Finish coats", text: `sprayed cabinet enamel such as ${BUSINESS.cabinetFinish.products[0]} or ${BUSINESS.cabinetFinish.products[1]}.` },
          ]}
        />
      ),
    },
    {
      title: "Time and cost",
      body: (
        <p>
          Grain filling adds steps and drying time, so a kitchen takes longer and the work is quoted separately from the
          standard cabinet painting price. Standard cabinet painting typically runs {P.cabinetsPerKitchen} per kitchen as a
          planning range; your written estimate shows grain filling as its own line. After painting, cabinets need about{" "}
          {BUSINESS.cabinetFinish.cureDays} of gentle use while the finish cures. See{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link> and{" "}
          <Link href="/blog/cost-to-paint-kitchen-cabinets-houston-tx">cost to paint kitchen cabinets</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Will oak grain show through painted cabinets?",
      a: "Yes. Oak's open grain usually shows as a texture through primer and paint unless it is filled before priming.",
    },
    {
      q: "Is grain filling worth it?",
      a: "If you want a smooth, modern painted finish, yes. If you like some wood texture under the paint, you can skip it and save time and cost.",
    },
    {
      q: "Does more paint hide oak grain?",
      a: "Not really. Extra coats soften it slightly but do not fill the pores; grain filler does.",
    },
    {
      q: "Is grain filling included in cabinet painting?",
      a: "Usually not in the standard price; it adds labor and drying time, so it is quoted as a separate line on the estimate.",
    },
  ],
  limitations: <>General guidance. How much grain shows depends on the wood, the door style, the color and the sheen.</>,
  related: [
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Cost to paint kitchen cabinets", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
    { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
    { label: "Paint or replace your cabinets?", href: "/paint-or-replace-cabinets" },
  ],
  ctaTitle: "Get a written cabinet painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
