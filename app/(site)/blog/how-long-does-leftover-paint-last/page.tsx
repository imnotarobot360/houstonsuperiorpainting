import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-18.
// Shelf life stated generally ("often years"): the can and the manufacturer
// control. Disposal: points to local household-hazardous-waste rules.

const D: GuideArticleData = {
  path: "/blog/how-long-does-leftover-paint-last",
  title: "How Long Does Leftover Paint Last? Storing It for Touch-Ups",
  description:
    "How long opened latex and oil paint keep, how to store cans in a hot Houston garage, how to tell if paint has gone bad, and labeling paint so touch-ups match.",
  h1: "How long does leftover paint last?",
  eyebrow: "Paint care",
  published: "2026-12-18",
  updated: "2026-12-18",
  quickAnswer: (
    <>
      Sealed well and kept from freezing and extreme heat, leftover latex paint often stays usable for years, and oil-based
      paint usually longer. In Houston, the danger is the garage: summer heat can thicken paint and rust cans, and the
      occasional freeze can ruin latex. Store paint indoors in a closet if you can, seal the lid tightly, and label each
      can with the room, color, brand, product and sheen so future touch-ups match.
    </>
  ),
  sections: [
    {
      title: "How to store it",
      body: (
        <Steps
          items={[
            { title: "Clean the rim", text: "wipe paint out of the lid groove so it seals." },
            { title: "Seal tight", text: "lay plastic wrap over the opening, then tap the lid down with a mallet." },
            { title: "Keep it indoors", text: "a closet or utility room beats a Houston garage or shed." },
            { title: "Off the floor", text: "on a shelf, away from concrete that rusts can bottoms." },
            { title: "Label it", text: "room, color name and code, brand, product, sheen and date." },
          ]}
        />
      ),
    },
    {
      title: "Signs paint has gone bad",
      body: (
        <Bullets
          items={[
            "A sour or rotten smell.",
            "Lumps or a rubbery texture that won't stir smooth.",
            "Latex that froze and turned grainy or cottage-cheese-like.",
            "Heavy rust in the can that gets into the paint.",
            "A thin skin on top is normal: lift it out, stir and strain the paint.",
          ]}
        />
      ),
    },
    {
      title: "Why the label matters more than the paint",
      body: (
        <p>
          Even good leftover paint may not blend perfectly, because the wall has aged and the sheen and application
          differ. Knowing the exact color, product and sheen lets you buy a fresh can that matches, or repaint a whole wall
          section corner to corner. See <Link href="/blog/why-paint-touch-ups-dont-match">why touch-ups don&apos;t match</Link>{" "}
          and <Link href="/blog/how-to-clean-painted-walls">how to clean painted walls</Link>.
        </p>
      ),
    },
    {
      title: "Getting rid of old paint",
      body: (
        <p>
          Don&apos;t pour paint down a drain or into a storm sewer. Rules differ by city and county, and many have
          household hazardous waste drop-off days or allow dried-out latex in the trash. Check your city&apos;s or
          county&apos;s rules before disposing of paint.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How long does opened latex paint last?",
      a: "Often years, if it's sealed tightly and kept from freezing and extreme heat. Check it for smell and lumps before use.",
    },
    {
      q: "Can I keep paint in my garage in Houston?",
      a: "It's better indoors. Garage heat thickens paint and rusts cans, and a freeze can ruin latex.",
    },
    {
      q: "How do I know if paint is bad?",
      a: "A sour smell, lumps that won't stir out, a rubbery texture, or a grainy look after freezing.",
    },
    {
      q: "What should I write on a leftover paint can?",
      a: "The room, color name and code, brand, product line, sheen and the date it was used.",
    },
  ],
  limitations: (
    <>General guidance. The manufacturer&apos;s instructions and your local disposal rules control.</>
  ),
  related: [
    { label: "Why touch-ups don't match", href: "/blog/why-paint-touch-ups-dont-match" },
    { label: "How to clean painted walls", href: "/blog/how-to-clean-painted-walls" },
    { label: "How much paint do I need?", href: "/blog/how-much-paint-for-a-room" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
