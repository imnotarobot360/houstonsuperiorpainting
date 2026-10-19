import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-05.

const D: GuideArticleData = {
  path: "/blog/paint-inside-kitchen-cabinets",
  title: "Should You Paint the Inside of Kitchen Cabinets?",
  description:
    "When painting cabinet interiors is worth it, why it adds time and cost, and the durability and cure issues to plan for before you decide.",
  h1: "Should you paint the inside of kitchen cabinets?",
  eyebrow: "Cabinet guide",
  published: "2026-11-05",
  updated: "2026-11-05",
  quickAnswer: (
    <>
      Usually not. Most cabinet interiors are a factory-finished or melamine surface that is durable, easy to clean and
      rarely seen, so a standard cabinet painting job covers the exterior faces, frames, doors (both sides) and drawer
      fronts. Painting the interior makes sense for glass-front uppers, open shelving and visibly worn boxes, but it adds
      prep, time and cost, and painted shelves need a full cure before dishes go back.
    </>
  ),
  sections: [
    {
      title: "What a standard cabinet job covers",
      body: (
        <Bullets
          items={[
            "Cabinet frames and exposed end panels.",
            "Both sides of the doors.",
            "Drawer fronts (not the drawer boxes).",
            "Interiors only where agreed in writing.",
          ]}
        />
      ),
    },
    {
      title: "When painting the inside is worth it",
      body: (
        <Bullets
          items={[
            <><strong>Glass-front uppers:</strong> the interior is on display, so it should match or complement the outside.</>,
            <><strong>Open shelving and display cabinets:</strong> same reason.</>,
            <><strong>Worn or stained interiors:</strong> where the original finish is damaged and visible when doors open.</>,
            <><strong>A dark-to-light change:</strong> an orange-oak interior behind white doors can look out of place on cabinets you open often.</>,
          ]}
        />
      ),
    },
    {
      title: "Why it adds time and cost",
      body: (
        <p>
          Interiors have to be emptied, cleaned and degreased, and melamine or factory finishes need sanding and a bonding
          primer to hold paint. Shelves, corners and hinge areas are slow to paint well. Then everything has to cure before
          dishes and pantry items go back. That is why interiors are usually priced as an add-on rather than included.
        </p>
      ),
    },
    {
      title: "Durability: shelves are the hard part",
      body: (
        <p>
          Plates, pans and cans slide across shelves every day. A painted shelf that is loaded too soon can stick, scuff or
          show rings. Use a durable cabinet-grade enamel such as {BUSINESS.cabinetFinish.products[0]} or{" "}
          {BUSINESS.cabinetFinish.products[1]}, give it about {BUSINESS.cabinetFinish.cureDays} of light use, and consider
          shelf liners on heavily used shelves.
        </p>
      ),
    },
    {
      title: "An alternative",
      body: (
        <p>
          For most kitchens, a thorough cleaning of the interiors plus new shelf liners gives a fresh look at a fraction of
          the cost, with the painting budget spent on the faces you see every day. See{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>,{" "}
          <Link href="/blog/cost-to-paint-kitchen-cabinets-houston-tx">cost to paint kitchen cabinets</Link> and{" "}
          <Link href="/blog/cabinet-painting-on-site-vs-off-site">on-site vs. off-site cabinet painting</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Do cabinet painters paint the inside of cabinets?",
      a: "Not usually as standard. Interiors are typically an add-on, done for glass-front uppers, open shelving or worn interiors, and listed separately on the estimate.",
    },
    {
      q: "Can you paint melamine cabinet interiors?",
      a: "Yes, with cleaning, sanding and a bonding primer made for slick surfaces, then a cabinet-grade enamel.",
    },
    {
      q: "How long before I can put dishes back on painted shelves?",
      a: `Use them lightly at first: painted shelves need about ${BUSINESS.cabinetFinish.cureDays} to cure. Shelf liners help on heavily used shelves.`,
    },
    {
      q: "Should I paint the inside of glass-front cabinets?",
      a: "Usually yes, because the interior is on display. Many homeowners paint them the same color as the outside or a soft contrasting color.",
    },
  ],
  limitations: <>General guidance. What is included on your project is listed in the written estimate.</>,
  related: [
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Cost to paint kitchen cabinets", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
    { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
    { label: "On-site vs. off-site cabinet painting", href: "/blog/cabinet-painting-on-site-vs-off-site" },
  ],
  ctaTitle: "Get a written cabinet painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
