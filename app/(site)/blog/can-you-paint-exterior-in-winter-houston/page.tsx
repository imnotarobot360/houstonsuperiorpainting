import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-29.
// Temperature limits are general label ranges: the product label controls.
// No claim about which products we use in cold weather (not confirmed).

const D: GuideArticleData = {
  path: "/blog/can-you-paint-exterior-in-winter-houston",
  title: "Can You Paint a House Exterior in Houston in Winter?",
  description:
    "Minimum temperatures, dew point, cold fronts and low-temperature paints: when winter exterior painting works in Houston, and when to wait a day or two.",
  h1: "Can you paint a house exterior in Houston in winter?",
  eyebrow: "Exterior guide",
  published: "2026-11-29",
  updated: "2026-11-29",
  quickAnswer: (
    <>
      Usually, yes. Most Houston winter days are mild enough for exterior paint, and many exterior latex paints are labeled
      for application down to about 35–50°F, depending on the product. What decides a winter paint day is the overnight low
      after the paint goes on, morning dew, and how fast the surface warms up, not the calendar. Painters work the warm
      middle of the day, follow the sun around the house, and skip the few days when a hard cold front comes through.
    </>
  ),
  sections: [
    {
      title: "What the paint can tells you",
      body: (
        <Bullets
          items={[
            <><strong>Minimum temperature:</strong> standard exterior latex paints are often labeled for 50°F and above; several premium lines are labeled for application down to about 35°F. The minimum applies to the air <em>and</em> the surface, during application and for the first hours of drying.</>,
            <><strong>Dew point:</strong> the surface should stay at least about 5°F above the dew point, so moisture doesn&apos;t condense on wet paint.</>,
            <><strong>Recoat and cure time:</strong> both get longer in cool weather. A coat that is ready for a second coat in a few hours in summer can need much longer in January.</>,
          ]}
        />
      ),
    },
    {
      title: "Why Houston winters usually work",
      body: (
        <p>
          Houston winters are short and mostly mild: many days reach the 60s, and freezing nights come in a handful of cold
          fronts rather than for weeks at a time. Winter also brings lower humidity and less afternoon rain than late spring
          and summer, and the walls aren&apos;t baking in direct sun, which helps paint level and dry evenly. See{" "}
          <Link href="/blog/best-time-to-paint-house-houston">the best time to paint a Houston exterior</Link>.
        </p>
      ),
    },
    {
      title: "What can go wrong in cold, damp weather",
      body: (
        <Bullets
          items={[
            <><strong>Surfactant leaching:</strong> brown or tan, sticky streaks when dew or drizzle hits paint that hasn&apos;t cured. Usually cosmetic and washes off, but it looks bad.</>,
            <><strong>Poor film formation:</strong> paint applied too cold can dry chalky or cracked and won&apos;t last.</>,
            <><strong>Slow caulk:</strong> sealants also have minimum temperatures and cure slowly in the cold.</>,
            <><strong>Wet wood:</strong> after several gray, damp days, siding and trim can hold moisture that should dry before paint.</>,
          ]}
        />
      ),
    },
    {
      title: "How a winter exterior job is run",
      body: (
        <Steps
          items={[
            { title: "Check the forecast for the night after", text: "a mild day followed by a hard freeze is a day to wait." },
            { title: "Start late, stop early", text: "let morning dew burn off, and stop with enough time for paint to set before the evening dew." },
            { title: "Follow the sun", text: "paint the sides that are warm and dry, and come back to the shaded north side on a warmer day." },
            { title: "Read the labels", text: "match the paint, primer and caulk to the temperatures actually expected." },
            { title: "Plan for a longer schedule", text: "slower recoat times and a few weather days are normal in winter." },
          ]}
        />
      ),
    },
    {
      title: "When winter is a good time to book",
      body: (
        <p>
          Exterior work is often easier to schedule in winter than in spring, when many homeowners book at once. Winter is also
          a good time to repair wood rot and failed caulk before spring storms. As a planning range, a Houston exterior
          typically runs {P.exteriorPerHome}; your written estimate sets the price. See{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link> and{" "}
          <Link href="/blog/exterior-painting-timeline-rain-houston">how weather affects the timeline</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is the lowest temperature you can paint outside?",
      a: "It depends on the product. Many exterior latex paints are labeled for 50°F and above, and several premium lines down to about 35°F. The air and surface must stay above the minimum while the paint dries.",
    },
    {
      q: "Can you paint an exterior in Houston in December or January?",
      a: "Usually, yes. Most Houston winter days are mild enough. Painters avoid the days before and during hard cold fronts and work the warm middle of the day.",
    },
    {
      q: "What happens if it rains or dews on fresh exterior paint?",
      a: "Paint that hasn't set can streak or leach brown, sticky residue. It is often cosmetic and can wash off, but a heavy rain on very fresh paint may need repainting.",
    },
    {
      q: "Does exterior paint take longer to dry in winter?",
      a: "Yes. Cool temperatures and humidity slow both recoat time and full cure, so winter jobs often take a little longer.",
    },
  ],
  limitations: (
    <>
      General guidance. The temperature limits, recoat times and dew point guidance on your specific paint, primer and caulk
      labels control.
    </>
  ),
  related: [
    { label: "Best time to paint a Houston exterior", href: "/blog/best-time-to-paint-house-houston" },
    { label: "Exterior painting timeline and rain", href: "/blog/exterior-painting-timeline-rain-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "How long exterior paint lasts", href: "/blog/how-long-does-exterior-paint-last-houston" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
