import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-05.
// General sheen guidance; product data sheets list the sheens each line offers.

const D: GuideArticleData = {
  path: "/blog/exterior-paint-sheen-houston",
  title: "Exterior Paint Sheen: Flat, Satin or Semi-Gloss?",
  description:
    "Which sheen goes on siding, stucco, brick, trim and doors, and how sheen changes how a Houston exterior looks, cleans and wears.",
  h1: "Exterior paint sheen: flat, satin or semi-gloss?",
  eyebrow: "Exterior guide",
  published: "2027-01-05",
  updated: "2027-01-05",
  quickAnswer: (
    <>
      Most Houston exteriors use a flat or low-sheen (often called low-lustre or satin) finish on the body, and satin or
      semi-gloss on trim, doors and shutters. Flatter finishes hide surface flaws on siding, stucco and brick; shinier
      finishes are harder, shed dirt and rain better, and make trim stand out. Front doors often get semi-gloss or gloss.
      Sheen names vary by brand, so compare the product data sheets.
    </>
  ),
  sections: [
    {
      title: "Sheen by surface",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3">Surface</th>
                <th className="p-3">Common sheen</th>
                <th className="p-3">Why</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Stucco and painted brick", "Flat", "Hides texture and patch marks"],
                ["Siding (wood, fiber cement)", "Flat or satin", "Flat hides flaws; satin sheds dirt and mildew better"],
                ["Trim, fascia, window frames", "Satin or semi-gloss", "Harder, washable, outlines the house"],
                ["Front door", "Semi-gloss or gloss", "Most durable; a focal point"],
                ["Shutters, railings, metal", "Satin or semi-gloss", "Cleans easily, resists wear"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3 font-medium">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                  <td className="p-3 text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "Trade-offs in Houston weather",
      body: (
        <Bullets
          items={[
            "Shinier finishes shed rain, pollen and dirt more easily, and can hold up better to mildew on shaded walls.",
            "Shinier finishes also show every dent, patch and lap mark, so prep matters more.",
            "Flat finishes look rich and hide flaws but can hold dirt; modern exterior flats are much more washable than older ones.",
          ]}
        />
      ),
    },
    {
      title: "Getting it right",
      body: (
        <p>
          Your written estimate should list the product and sheen for each surface. See{" "}
          <Link href="/blog/paint-finishes-matte-eggshell-satin-semi-gloss">interior paint sheens</Link>,{" "}
          <Link href="/blog/front-door-paint-houston-sun">front doors in Houston sun</Link>,{" "}
          <Link href="/blog/how-long-does-exterior-paint-last-houston">how long exterior paint lasts</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What sheen is best for exterior siding?",
      a: "Flat or satin. Flat hides surface flaws; satin sheds dirt and mildew a little better.",
    },
    {
      q: "What sheen should exterior trim be?",
      a: "Satin or semi-gloss, for durability and to outline the house.",
    },
    {
      q: "What sheen is best for a front door?",
      a: "Semi-gloss or gloss, the most durable and washable finishes.",
    },
    {
      q: "Is flat paint OK outside in Houston?",
      a: "Yes, especially on stucco and brick. Modern exterior flats are far more durable and washable than older flat paints.",
    },
  ],
  limitations: <>General guidance; sheen names and performance vary by product line.</>,
  related: [
    { label: "Interior paint sheens", href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss" },
    { label: "How long exterior paint lasts", href: "/blog/how-long-does-exterior-paint-last-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Front doors in Houston sun", href: "/blog/front-door-paint-houston-sun" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
