import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-22.
// Prices are the 2026 planning ranges (PRICES_2026); the post says 2027 prices
// are set by the written estimate. No booking-availability promises.

const D: GuideArticleData = {
  path: "/blog/plan-2027-painting-project-houston",
  title: "Planning a 2027 Painting Project in Houston",
  description:
    "How to budget a 2027 interior or exterior repaint, which seasons suit each kind of work in Houston, and what to have ready so your estimate is accurate.",
  h1: "Planning a 2027 painting project in Houston",
  eyebrow: "Planning guide",
  published: "2026-12-22",
  updated: "2026-12-22",
  quickAnswer: (
    <>
      Start with what matters most to you, get a written estimate early, and match the timing to the job: interiors can be
      done year-round, while exterior work is easiest in Houston&apos;s drier, milder months. Use current price ranges to
      set a budget, then let a walkthrough and written estimate set the real number. Have your colors, photos and any
      repair concerns ready, and book early if you need the work done before a move, a sale or a family event.
    </>
  ),
  sections: [
    {
      title: "Budget with current ranges",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3">Project</th>
                <th className="p-3">2026 planning range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Single room", P.singleRoom],
                ["Full interior, 2,000 sq ft home", P.fullInterior2000],
                ["Exterior, typical Houston home", P.exteriorPerHome],
                ["Kitchen cabinets", P.cabinetsPerKitchen],
                ["Trim throughout a home", P.trimWholeHome],
                ["Front door", P.frontDoorOnly],
              ].map(([a, b]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3 font-medium">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-muted-foreground">
            Planning ranges only; your 2027 price comes from a written estimate for your home.
          </p>
        </div>
      ),
    },
    {
      title: "Timing in Houston",
      body: (
        <Bullets
          items={[
            <><strong>Interiors:</strong> any time of year; schedule around moves, holidays and guests.</>,
            <><strong>Exteriors:</strong> fall through spring is usually easiest, with milder heat and fewer storms than summer. See <Link href="/blog/best-time-to-paint-house-houston">the best time to paint a Houston house</Link>.</>,
            <><strong>Cabinets:</strong> plan around about {BUSINESS.cabinetFinish.cureDays} of gentle use while the finish cures.</>,
            <><strong>Before selling:</strong> paint a few weeks before photos. See <Link href="/blog/paint-house-before-selling-houston">painting before selling</Link>.</>,
          ]}
        />
      ),
    },
    {
      title: "What to have ready for an accurate estimate",
      body: (
        <Steps
          items={[
            { title: "Your list", text: "rooms, surfaces and anything you want left alone." },
            { title: "Problems you've noticed", text: "peeling, water stains, soft wood, cracks." },
            { title: "Colors, if chosen", text: "names and codes; or ask for a color consultation." },
            { title: "Your deadline", text: "and anything else happening at the house." },
            { title: "HOA rules", text: "for exterior color changes." },
          ]}
        />
      ),
    },
    {
      title: "Getting started",
      body: (
        <p>
          Book a free walkthrough on our <Link href="/painting-estimate-houston">estimate page</Link>; you pick the time and
          it&apos;s booked as soon as you confirm. See also <Link href="/houston-painting-cost-guide">our Houston painting cost guide</Link>{" "}
          and <Link href="/blog/what-to-expect-painting-estimate">what to expect from a painting estimate</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "When should I book a 2027 painting project?",
      a: "As soon as you know what you want, especially for exterior work or a firm deadline. An early estimate lets you budget and pick your dates.",
    },
    {
      q: "What is the best time of year to paint a house exterior in Houston?",
      a: "Usually fall through spring, when heat and storms are milder than in summer. Interiors can be painted any time.",
    },
    {
      q: "How much should I budget for painting in 2027?",
      a: `Use current ranges as a guide: a single room ${P.singleRoom}, a 2,000 sq ft interior ${P.fullInterior2000}, and a typical exterior ${P.exteriorPerHome} as 2026 planning ranges. A written estimate sets the real price.`,
    },
    {
      q: "What should I prepare before a painting estimate?",
      a: "A list of areas, any problems you've noticed, colors if chosen, your deadline and HOA rules for exterior colors.",
    },
  ],
  limitations: <>Prices are 2026 planning ranges, not quotes; your written estimate sets the price and schedule.</>,
  related: [
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
    { label: "Best time to paint a Houston house", href: "/blog/best-time-to-paint-house-houston" },
    { label: "What to expect from an estimate", href: "/blog/what-to-expect-painting-estimate" },
    { label: "Book a free estimate", href: "/painting-estimate-houston" },
  ],
  ctaTitle: "Get a written painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
