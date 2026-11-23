import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-21.
// Coverage figures are typical label ranges; the can's label controls.

const D: GuideArticleData = {
  path: "/blog/how-much-paint-for-a-room",
  title: "How Much Paint Do I Need for a Room? A Simple Calculation",
  description:
    "How to estimate gallons of paint for walls and ceilings: measure, subtract doors and windows, divide by coverage, and multiply by coats. With a worked example.",
  h1: "How much paint do I need for a room?",
  eyebrow: "Paint guide",
  published: "2026-11-21",
  updated: "2026-11-21",
  quickAnswer: (
    <>
      Add up the wall area (perimeter × height), subtract about 20 sq ft per door and 15 sq ft per window, divide by the
      coverage on the can (many wall paints list roughly 350–400 sq ft per gallon), and multiply by the number of coats. A
      typical 12 × 14 ft bedroom with 8 ft walls needs about 2 gallons for two coats on the walls, plus about a gallon for
      the ceiling. Buy a little extra for touch-ups.
    </>
  ),
  sections: [
    {
      title: "The calculation",
      body: (
        <Steps
          items={[
            { title: "Measure the perimeter", text: "add the length of every wall." },
            { title: "Multiply by height", text: "perimeter × wall height = gross wall area." },
            { title: "Subtract openings", text: "about 20 sq ft per door and 15 sq ft per window." },
            { title: "Divide by coverage", text: "use the number on the can; many wall paints list roughly 350–400 sq ft per gallon." },
            { title: "Multiply by coats", text: "usually two coats; add primer separately if needed." },
          ]}
        />
      ),
    },
    {
      title: "A worked example",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <tbody>
              {[
                ["Room", "12 × 14 ft, 8 ft walls, 1 door, 2 windows"],
                ["Perimeter", "12 + 14 + 12 + 14 = 52 ft"],
                ["Gross wall area", "52 × 8 = 416 sq ft"],
                ["Minus openings", "416 − 20 − 30 = 366 sq ft"],
                ["One coat at 350 sq ft/gal", "about 1.05 gallons"],
                ["Two coats", "about 2.1 gallons → buy 2 gallons plus a quart, or 3 gallons for touch-ups"],
                ["Ceiling (12 × 14 = 168 sq ft, two coats)", "about 1 gallon"],
              ].map(([a, b]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3 font-medium">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "When you'll need more",
      body: (
        <p>
          Textured walls, fresh drywall, porous surfaces, deep colors and big color changes all use more paint, and dark to
          light usually needs a primer coat as well. See{" "}
          <Link href="/blog/paint-dark-walls-lighter-color">painting over dark walls</Link> and{" "}
          <Link href="/blog/primer-vs-two-coats-paint-houston">primer or two coats</Link>.
        </p>
      ),
    },
    {
      title: "Keep the leftovers",
      body: (
        <p>
          Label leftover paint with the room, color, product and sheen, and store it where it won&apos;t freeze or overheat.
          It is what makes future touch-ups blend. See{" "}
          <Link href="/blog/why-paint-touch-ups-dont-match">why touch-ups don&apos;t match</Link>.
        </p>
      ),
    },
    {
      title: "Or have it painted",
      body: (
        <p>
          As a planning range, a single room typically runs {P.singleRoom} painted professionally, with paint included; your
          written estimate lists the products. See <Link href="/cost-to-paint-a-room-houston">cost to paint a room</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How much paint do I need for a 12 × 12 room?",
      a: "About 1.5 to 2 gallons for two coats on 8 ft walls (around 330 sq ft after doors and windows), plus about a gallon for the ceiling.",
    },
    {
      q: "How many square feet does a gallon of paint cover?",
      a: "Many wall paints list roughly 350–400 sq ft per gallon per coat on smooth surfaces; textured or porous walls get less. Check the can.",
    },
    {
      q: "Do I need two coats of paint?",
      a: "Usually, for even color and sheen. Primer is separate and needed on bare or patched surfaces and big color changes.",
    },
    {
      q: "Should I buy extra paint?",
      a: "Yes, a little. Keep it labeled for touch-ups.",
    },
  ],
  limitations: <>Estimates only. The coverage printed on your product and the surface itself decide the real amount.</>,
  related: [
    { label: "Cost to paint a room", href: "/cost-to-paint-a-room-houston" },
    { label: "Primer or two coats of paint?", href: "/blog/primer-vs-two-coats-paint-houston" },
    { label: "Painting over dark walls", href: "/blog/paint-dark-walls-lighter-color" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
