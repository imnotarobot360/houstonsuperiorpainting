import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"

const D: GuideArticleData = {
  path: "/blog/cabinet-painting-company-houston-guide",
  title: "How to Choose a Cabinet Painting Company in Houston",
  description:
    "What separates a lasting cabinet finish from one that chips: degreasing, sanding, bonding primer, spray application and cure time. Questions to ask a Houston cabinet painter.",
  h1: "How to choose a cabinet painting company in Houston",
  eyebrow: "Cabinet guide",
  published: "2026-10-10",
  updated: "2026-10-10",
  quickAnswer: (
    <>
      Choose a cabinet painter who removes and labels doors and hardware, degreases and sands every surface, uses a bonding
      primer, sprays a cabinet-grade enamel, and tells you in writing how long the finish needs to cure before normal use.
      Ask which exact products they use, how they protect the kitchen, and what their warranty covers. A low price usually
      means one of those steps is missing.
    </>
  ),
  sections: [
    {
      title: "What a durable cabinet finish takes",
      body: (
        <Steps
          items={[
            {
              title: "Remove and label",
              text: "doors, drawer fronts and hardware come off and are labeled so every piece goes back where it came from.",
            },
            {
              title: "Clean and degrease",
              text: "kitchen cabinets carry cooking grease, especially near the range. Paint will not bond to it, so every surface is degreased first.",
            },
            {
              title: "Sand or degloss",
              text: "the old finish is scuffed so the primer has something to grip. Dents and gouges are filled at this stage.",
            },
            {
              title: "Prime",
              text: "a bonding primer goes on next; it is what keeps paint from peeling off a slick factory finish or old oil paint.",
            },
            {
              title: "Spray",
              text: "doors and fronts are usually sprayed flat in a controlled area; cabinet boxes are sprayed or finished in place with the kitchen masked off.",
            },
            {
              title: "Dry, cure and reinstall",
              text: "the finish is dry to the touch long before it is fully cured. Doors go back on after drying, but heavy use should wait until the product's cure time has passed.",
            },
          ]}
        />
      ),
    },
    {
      title: "Ask which products they use",
      body: (
        <>
          <p>
            Wall paint is not cabinet paint. Ask for the primer and topcoat by name, and look them up. Cabinet-grade options
            include waterborne alkyd and urethane-modified enamels such as Benjamin Moore Advance or Sherwin-Williams Emerald
            Urethane, which is what we use. Some shops spray specialty wood coatings from makers such as Renner. Each product
            has its own dry time, recoat time and cure time, and a good painter will explain them.
          </p>
          <p>
            Houston humidity slows drying, so a painter who sprays cabinets should control the space and allow more time
            between coats on humid days.
          </p>
        </>
      ),
    },
    {
      title: "Questions to ask every cabinet painter",
      body: (
        <Bullets
          items={[
            "Do you remove the doors and drawer fronts, and where do you spray them?",
            "How do you degrease, and do you sand every surface?",
            "Which primer and topcoat will you use, by name?",
            "How will you protect counters, floors and appliances?",
            "How long until we can use the kitchen, and how long until the finish is fully cured?",
            "What does your warranty cover, and is it in writing?",
            "Can I see a cabinet job you have finished, with photos?",
          ]}
        />
      ),
    },
    {
      title: "Caring for painted cabinets",
      body: (
        <p>
          During the cure period, wipe spills with a soft damp cloth, avoid abrasive cleaners, and keep sticky notes or tape
          off the doors. After it cures, mild soap and water is enough. Touch-up paint from the same batch is worth keeping
          for small chips.
        </p>
      ),
    },
    {
      title: "Cost",
      body: (
        <p>
          Cabinet pricing depends mostly on the number of doors and drawer fronts, the condition of the existing finish and
          whether the color is changing. Typical ranges and what moves them are in our{" "}
          <Link href="/houston-painting-cost-guide">Houston painting cost guide</Link>. For an exact number, the estimate
          should list every front, the products and the steps above.
        </p>
      ),
    },
    {
      title: "See a finished kitchen",
      body: (
        <p>
          Our <Link href="/projects/cypress-two-tone-kitchen-cabinets">two-tone kitchen cabinets in Cypress</Link> case
          study shows a finished job, and our <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link> page
          explains our process.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is it better to spray or brush kitchen cabinets?",
      a: "Spraying gives the smoothest, most even finish and is what most professional cabinet painters use for doors and drawer fronts. Brushing and rolling can work on boxes in place, but leaves more texture.",
    },
    {
      q: "Can you paint over oil-based or factory-finished cabinets?",
      a: "Yes, with proper degreasing, sanding and a bonding primer. Skipping the primer is the most common reason painted cabinets peel.",
    },
    {
      q: "How long before I can use my kitchen?",
      a: "It depends on the product and the humidity. Ask your painter for the product's dry time and full cure time in writing. Doors can usually go back on before the finish is fully cured, but heavy use should wait.",
    },
    {
      q: "Is painting cabinets worth it compared with replacing them?",
      a: "If the cabinet boxes are solid and the layout works, painting costs far less than replacement and changes the look of the kitchen. Water-damaged boxes or a new layout are reasons to replace instead.",
    },
  ],
  limitations: (
    <>
      Product names are examples, not endorsements, and manufacturers change formulas. Follow the product data sheet for
      dry and cure times, and rely on your written estimate for the scope and warranty of your own job.
    </>
  ),
  related: [
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
    { label: "Why DIY cabinet painting fails", href: "/blog/why-diy-cabinet-painting-fails-houston-tx" },
    { label: "Cabinet refinishing vs replacement", href: "/blog/cabinet-refinishing-vs-replacement-houston" },
    { label: "Insurance and warranty", href: "/insurance-and-warranty" },
  ],
}

export const metadata = guideMetadata(D)

export default function Page() {
  return <GuideArticle d={D} />
}
