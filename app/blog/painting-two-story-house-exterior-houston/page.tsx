import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-27.
// Owner confirmed 2026-10-21: two-story exteriors are done with ladders, not
// lifts. Prices from PRICES_2026 (2,000 and 3,000 sq ft one- vs two-story rows).

const D: GuideArticleData = {
  path: "/blog/painting-two-story-house-exterior-houston",
  title: "Painting a Two-Story House Exterior in Houston",
  description:
    "What changes on a two-story exterior: ladder access, high gables and dormers, safety around your yard, the timeline, and how height shows up in the price.",
  h1: "Painting a two-story house exterior in Houston",
  eyebrow: "Exterior guide",
  published: "2026-12-27",
  updated: "2026-12-27",
  quickAnswer: (
    <>
      A two-story exterior takes longer and costs more than a one-story home of the same size, mainly because of access:
      every high wall, gable and dormer is reached by ladder, set and moved safely around the house. We paint two-story
      homes with ladders. Plan for a slightly longer schedule, clear access around the house, and an estimate that reflects
      the height. The prep and products are the same as any Houston exterior.
    </>
  ),
  sections: [
    {
      title: "What changes with height",
      body: (
        <Bullets
          items={[
            "More ladder setups and moves, which add time to every step: washing, prep, caulk and two coats.",
            "High gables, dormers and second-story trim take the longest.",
            "Roof lines over porches or garages may be used to reach upper walls, with care for the shingles.",
            "Weather matters more: wind and rain stop high work sooner.",
          ]}
        />
      ),
    },
    {
      title: "How the job is run",
      body: (
        <Steps
          items={[
            { title: "Walk the property", text: "find ladder footing, slopes, beds and fences that affect access." },
            { title: "Protect", text: "landscaping, roofs, windows and anything near the walls." },
            { title: "Wash and prep", text: "top to bottom so dirty water never runs over finished work." },
            { title: "Paint top down", text: "upper walls and trim first, then the first floor." },
            { title: "Clean up", text: "check every elevation from the ground before ladders come down." },
          ]}
        />
      ),
    },
    {
      title: "Cost: one story vs. two",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3">Home size</th>
                <th className="p-3">One story</th>
                <th className="p-3">Two story</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2,000 sq ft", P.exterior2000OneStory, P.exterior2000TwoStory],
                ["3,000 sq ft", P.exterior3000OneStory, P.exterior3000TwoStory],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3 font-medium">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                  <td className="p-3 text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-muted-foreground">2026 Houston planning ranges; your written estimate sets the price.</p>
        </div>
      ),
    },
    {
      title: "Before you book",
      body: (
        <p>
          Clear patio furniture, grills and planters from the walls, and tell us about pets, pools and gates. See{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>,{" "}
          <Link href="/blog/exterior-painting-timeline-rain-houston">the exterior timeline and rain</Link> and{" "}
          <Link href="/exterior-house-painting-houston-cost-guide">exterior painting cost</Link>.{" "}
          {BUSINESS.insuranceProof.en}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How much more does it cost to paint a two-story house?",
      a: `As 2026 planning ranges, a 2,000 sq ft exterior runs about ${P.exterior2000OneStory} on one story vs ${P.exterior2000TwoStory} on two. Height adds ladder time to every step.`,
    },
    {
      q: "Do painters use lifts or ladders for two-story homes?",
      a: "It varies by company. We paint two-story homes with ladders, set and moved safely around the house.",
    },
    {
      q: "How long does it take to paint a two-story exterior?",
      a: "Longer than a one-story home of the same size, because of ladder setups and weather limits on high work. Your estimate gives the schedule.",
    },
    {
      q: "Do I need to be home while a two-story exterior is painted?",
      a: "Usually not, as long as the crew has access to every side, gates and an outside water source.",
    },
  ],
  limitations: <>Prices are 2026 planning ranges, not quotes; access and condition decide the final price.</>,
  related: [
    { label: "Exterior painting cost in Houston", href: "/exterior-house-painting-houston-cost-guide" },
    { label: "Exterior timeline and rain", href: "/blog/exterior-painting-timeline-rain-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Painting gutters and downspouts", href: "/blog/painting-gutters-downspouts-houston" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
