import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-13.
// No availability claims; says to book early.

const D: GuideArticleData = {
  path: "/blog/spring-exterior-painting-checklist-houston",
  title: "Spring Exterior Painting Checklist for Houston Homes",
  description:
    "What to check and decide in winter so a spring exterior repaint goes smoothly: damage from winter, colors, HOA approval, repairs and scheduling.",
  h1: "Spring exterior painting checklist for Houston homes",
  eyebrow: "Exterior guide",
  published: "2027-01-13",
  updated: "2027-01-13",
  quickAnswer: (
    <>
      Spring is a popular time for exterior painting in Houston, before summer heat and the peak of storm season. The way
      to get a good slot and a smooth job is to plan in winter: walk the house for damage, decide colors and get HOA approval,
      get a written estimate that lists repairs, and book your dates. Use January and February for decisions so the crew can
      start as soon as spring weather allows.
    </>
  ),
  sections: [
    {
      title: "January and February: the checklist",
      body: (
        <Steps
          items={[
            { title: "Walk the house", text: "peeling, cracked caulk, soft wood, mildew and freeze damage. See after a Houston freeze." },
            { title: "Note the worst sides", text: "south and west walls, and anything near sprinklers or gutters." },
            { title: "Choose colors", text: "sample large swatches outside; keep the roof and brick in mind." },
            { title: "Get HOA approval", text: "in writing, before work is scheduled." },
            { title: "Get a written estimate", text: "with repairs, prep, products and sheens listed." },
            { title: "Book dates", text: "around graduations, events or a planned sale." },
          ]}
        />
      ),
    },
    {
      title: "Before the crew arrives",
      body: (
        <p>
          Trim plants back from the walls, move patio furniture and grills, and turn sprinklers off for the job. See{" "}
          <Link href="/blog/freeze-damage-exterior-paint-caulk-houston">after a Houston freeze</Link>,{" "}
          <Link href="/blog/exterior-paint-color-mistakes-houston">exterior color mistakes</Link> and{" "}
          <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint rules</Link>.
        </p>
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          A Houston exterior typically runs {P.exteriorPerHome} as a 2026 planning range; repairs such as wood rot ({P.woodRotRepair})
          are listed separately on your estimate. See{" "}
          <Link href="/exterior-house-painting-houston-cost-guide">the exterior painting cost guide</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "When should I book spring exterior painting in Houston?",
      a: "In winter. Decide colors, get HOA approval and a written estimate in January or February so the work can start when spring weather allows.",
    },
    {
      q: "Is spring a good time to paint a house in Houston?",
      a: "Often, yes: milder heat than summer and before the peak of storm season. Rainy spells can still affect the schedule.",
    },
    {
      q: "What should I check before exterior painting?",
      a: "Peeling paint, cracked caulk, soft wood, mildew and any freeze damage, especially on south and west walls.",
    },
    {
      q: "Do I need HOA approval before painting?",
      a: "Many Houston-area HOAs require it for color changes. Get it in writing before booking.",
    },
  ],
  limitations: <>General guidance; prices are 2026 planning ranges, not quotes.</>,
  related: [
    { label: "After a Houston freeze", href: "/blog/freeze-damage-exterior-paint-caulk-houston" },
    { label: "Exterior color mistakes", href: "/blog/exterior-paint-color-mistakes-houston" },
    { label: "Best time to paint a Houston house", href: "/blog/best-time-to-paint-house-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
