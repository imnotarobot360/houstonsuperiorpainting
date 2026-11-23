import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-03.
// General care guidance; the paint's own label and data sheet control.

const D: GuideArticleData = {
  path: "/blog/how-to-clean-painted-walls",
  title: "How to Clean Painted Walls Without Ruining the Finish",
  description:
    "What each paint sheen can take, which cleaners are safe, how to remove scuffs, crayon and grease, and when a mark needs a touch-up instead of scrubbing.",
  h1: "How to clean painted walls without ruining the finish",
  eyebrow: "Paint care",
  published: "2026-12-03",
  updated: "2026-12-03",
  quickAnswer: (
    <>
      Start with the gentlest thing that works: dust the wall, then wipe with a soft sponge or microfiber cloth and warm
      water with a drop of mild dish soap. Test in a hidden spot, work from the bottom up, rinse, and don&apos;t scrub hard.
      Satin and semi-gloss handle cleaning best; flat and matte paints can burnish (turn shiny) or lose color if scrubbed.
      Wait a few weeks after painting before washing, because paint keeps hardening after it feels dry.
    </>
  ),
  sections: [
    {
      title: "What each sheen can take",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3">Sheen</th>
                <th className="p-3">Cleaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Flat / matte", "Gentle wiping only, unless the product is labeled scrubbable. Scrubbing can leave shiny or pale spots."],
                ["Eggshell", "Light washing with mild soap. Most common wall sheen."],
                ["Satin", "Washes well; good for kitchens, baths, kids' rooms and halls."],
                ["Semi-gloss / gloss", "Most washable; used on trim, doors and cabinets."],
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
      title: "Step by step",
      body: (
        <Steps
          items={[
            { title: "Dust first", text: "a dry microfiber cloth or vacuum brush, so you don't smear dust into mud." },
            { title: "Test", text: "try your cleaner behind furniture or inside a closet." },
            { title: "Wash gently", text: "warm water and a drop of mild dish soap; wring the sponge well." },
            { title: "Bottom up", text: "drips on a dirty wall leave streaks that are hard to remove." },
            { title: "Rinse and dry", text: "a second damp cloth with clean water, then a dry towel." },
          ]}
        />
      ),
    },
    {
      title: "Common marks",
      body: (
        <Bullets
          items={[
            <><strong>Scuffs:</strong> a damp cloth first; a melamine sponge (&quot;magic eraser&quot;) works but is abrasive, so use light pressure and test first, especially on flat paint.</>,
            <><strong>Crayon:</strong> gently with a little dish soap; for stubborn wax, a dab of baking soda paste.</>,
            <><strong>Kitchen grease:</strong> warm water with dish soap, repeated; harsher degreasers can dull paint.</>,
            <><strong>Mildew in bathrooms:</strong> a mildew cleaner made for painted surfaces, then fix the ventilation; mildew that keeps returning needs more than cleaning.</>,
          ]}
        />
      ),
    },
    {
      title: "What to avoid",
      body: (
        <Bullets
          items={[
            "Abrasive pads and scouring powders.",
            "Ammonia and strong solvents on latex paint.",
            "Soaking the wall: water at seams and outlets can damage drywall.",
            "Washing fresh paint before it has had a few weeks to harden.",
          ]}
        />
      ),
    },
    {
      title: "When to touch up instead",
      body: (
        <p>
          If a mark won&apos;t come off with gentle cleaning, scrubbing harder usually makes a bigger shiny spot. A touch-up
          with the original paint, or repainting the wall corner to corner, looks better. See{" "}
          <Link href="/blog/why-paint-touch-ups-dont-match">why touch-ups don&apos;t match</Link> and{" "}
          <Link href="/blog/kitchen-wall-paint-washable-houston">washable paint for kitchens</Link>. For a fresh, washable
          finish, see <Link href="/interior-painting-houston-tx">interior painting in Houston</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is the best way to clean painted walls?",
      a: "Dust, then wipe gently with warm water and a drop of mild dish soap using a soft sponge or microfiber cloth, rinse and dry. Test in a hidden spot first.",
    },
    {
      q: "Can you use a magic eraser on painted walls?",
      a: "Carefully. It is mildly abrasive and can leave shiny or dull spots, especially on flat paint. Use light pressure and test first.",
    },
    {
      q: "How soon can you wash a freshly painted wall?",
      a: "Wait a few weeks. Paint is dry to the touch in hours but keeps hardening; check the label for its cure time.",
    },
    {
      q: "Why does my wall look shiny where I cleaned it?",
      a: "Scrubbing flat or matte paint burnishes it. A touch-up or repainting the wall fixes it.",
    },
  ],
  limitations: <>General care guidance; your paint&apos;s label and data sheet give its washability and cure time.</>,
  related: [
    { label: "Paint sheens explained", href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss" },
    { label: "Why touch-ups don't match", href: "/blog/why-paint-touch-ups-dont-match" },
    { label: "Washable kitchen wall paint", href: "/blog/kitchen-wall-paint-washable-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
