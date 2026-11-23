import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-23.
// Every price comes from PRICES_2026 (single source of truth). There is no
// approved per-door price for residential interior doors, so none is published.

const D: GuideArticleData = {
  path: "/blog/cost-paint-ceilings-trim-doors-houston",
  title: "Cost to Paint Ceilings, Trim and Doors in Houston (2026)",
  description: `2026 Houston planning ranges: whole-home ceilings ${P.ceilingsWholeHome}, whole-home trim ${P.trimWholeHome}, a front door ${P.frontDoorOnly}. What moves the price.`,
  h1: "Cost to paint ceilings, trim and doors in Houston (2026)",
  eyebrow: "Cost guide",
  published: "2026-10-23",
  updated: "2026-10-23",
  quickAnswer: (
    <>
      As 2026 planning ranges in Houston: painting the ceilings throughout a home typically runs {P.ceilingsWholeHome},
      the baseboards, casings and other trim throughout a home {P.trimWholeHome}, and a front door alone{" "}
      {P.frontDoorOnly}. Ceiling height, texture, repairs, how many doors and windows there are, and whether the trim
      is changing color move the price within or beyond these ranges.
    </>
  ),
  sections: [
    {
      title: "2026 planning ranges",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 font-semibold">Work</th>
                <th className="p-3 font-semibold">Typical range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ceilings, whole home", P.ceilingsWholeHome],
                ["Trim (baseboards, door and window casings), whole home", P.trimWholeHome],
                ["Front door only", P.frontDoorOnly],
                ["Townhome front door and exterior trim", P.townhomeDoorAndTrim],
                ["Accent wall", P.accentWall],
              ].map(([a, b]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "What moves the price of ceilings",
      body: (
        <Bullets
          items={[
            "Height: vaulted, two-story and stairwell ceilings need taller ladders or scaffolding and more time.",
            "Texture: heavy or popcorn texture takes more paint and care; removing popcorn is a separate scope.",
            "Repairs: water stains need a stain-blocking primer, and cracks or nail pops need patching first.",
            "Color: a straight white-over-white refresh is quicker than a color change.",
            "Furniture and access: an empty or lightly furnished room is faster to protect and paint.",
          ]}
        />
      ),
    },
    {
      title: "What moves the price of trim and doors",
      body: (
        <Bullets
          items={[
            "Linear footage: crown molding, wainscoting and built-ins add a lot of trim to a home.",
            "Condition: failed caulk, dents and gaps take prep time before paint.",
            "Old oil-based paint: needs cleaning, sanding and a bonding primer before latex enamel.",
            "Color change: going from stained wood or a dark color to white takes more coats and primer.",
            "Doors: six-panel and other paneled doors take longer than flat slab doors, and painting both sides counts as two faces.",
            "Finish level: a sprayed, fine-finish enamel on trim and doors costs more than a standard brushed coat.",
          ]}
        />
      ),
    },
    {
      title: "Doing them with a room or on their own",
      body: (
        <p>
          Ceilings and trim usually cost less per surface when they are painted along with the walls, because setup,
          protection and cleanup are shared. As a standalone job they still carry minimums. For walls, see{" "}
          <Link href="/cost-to-paint-a-room-houston">cost to paint a room</Link> and the{" "}
          <Link href="/houston-painting-cost-guide">Houston painting cost guide</Link>. For trim and doors where the finish
          matters most, see <Link href="/fine-finish-painting-houston">fine finish painting</Link>.
        </p>
      ),
    },
    {
      title: "Getting an exact price",
      body: (
        <p>
          These ranges are for planning only. Your written estimate lists the surfaces, prep, products and price.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How much does it cost to paint ceilings in a Houston home?",
      a: `As a 2026 planning range, ceilings throughout a home typically run ${P.ceilingsWholeHome}. Height, texture, stains and repairs move the price.`,
    },
    {
      q: "How much does it cost to paint baseboards and trim?",
      a: `Trim throughout a home, including baseboards and door and window casings, typically runs ${P.trimWholeHome} as a 2026 planning range. Crown molding, condition and color changes affect it.`,
    },
    {
      q: "How much does it cost to paint a front door?",
      a: `A front door alone typically runs ${P.frontDoorOnly}, depending on the door, its condition and the finish.`,
    },
    {
      q: "Is it cheaper to paint trim and ceilings with the walls?",
      a: "Usually, because setup, protection and cleanup are shared. On their own, ceilings and trim still carry minimum charges.",
    },
  ],
  limitations: (
    <>{BUSINESS.name} 2026 planning ranges, not quotes. Your written estimate gives the final scope and price.</>
  ),
  related: [
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
    { label: "Cost to paint a room", href: "/cost-to-paint-a-room-houston" },
    { label: "Fine finish painting for trim and doors", href: "/fine-finish-painting-houston" },
    { label: "Popcorn ceiling removal and painting", href: "/blog/popcorn-ceiling-removal-houston" },
  ],
  ctaTitle: "Get a written estimate for ceilings, trim and doors",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
