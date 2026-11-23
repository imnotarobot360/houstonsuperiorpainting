import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-03.
// Coatings from BUSINESS.cabinetFinish; per-door price from PRICES_2026.

const D: GuideArticleData = {
  path: "/blog/painting-bathroom-vanity-houston",
  title: "Painting a Bathroom Vanity",
  description:
    "Refreshing a bathroom vanity with a cabinet-grade finish: prep for steam and splashes, popular colors, hardware, and how long before you can use it normally.",
  h1: "Painting a bathroom vanity",
  eyebrow: "Cabinet guide",
  published: "2027-01-03",
  updated: "2027-01-03",
  quickAnswer: (
    <>
      Painting a vanity is one of the quickest bathroom updates. Treat it like kitchen cabinets: clean off soap and
      hairspray residue, sand, prime with a bonding primer, and finish with a cabinet-grade enamel that can handle water
      splashes and humidity. Check for water damage first, especially swollen particleboard under the sink. New hardware
      finishes the look, and the vanity needs gentle use while the finish cures.
    </>
  ),
  sections: [
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Inspect", text: "swollen edges or soft particleboard under the sink mean water damage to fix first." },
            { title: "Remove doors and hardware", text: "doors are painted flat; the cabinet box in place." },
            { title: "Clean thoroughly", text: "soap scum, hairspray and lotion residue keep paint from sticking." },
            { title: "Sand and prime", text: "a bonding primer, stain-blocking over wood that may bleed." },
            { title: "Cabinet-grade enamel", text: `we use ${BUSINESS.cabinetFinish.sentence}.` },
          ]}
        />
      ),
    },
    {
      title: "Popular vanity colors",
      body: (
        <Bullets
          items={[
            "Deep green or navy with brass hardware: Webster Green HC-130 (Benjamin Moore) or Naval SW 6244.",
            "Warm wood-tone alternatives: Urbane Bronze SW 7048 for a moody bath.",
            "Soft and light: Sea Salt SW 6204 or a creamy white for a small bathroom.",
          ]}
        />
      ),
    },
    {
      title: "Living with it while it cures",
      body: (
        <p>
          Run the exhaust fan, wipe up splashes, and avoid scrubbing for about {BUSINESS.cabinetFinish.cureDays} while the
          finish hardens. See <Link href="/blog/cabinet-paint-cure-time-houston">cabinet paint cure time</Link> and{" "}
          <Link href="/blog/best-paint-bathrooms-laundry-rooms-houston">the best paint for bathrooms</Link>.
        </p>
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          Cabinet painting is often priced per door, typically {P.cabinetsPerDoor} per door as a 2026 planning range, with a
          minimum for small jobs like a single vanity. Your written estimate sets the price. See{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint a bathroom vanity?",
      a: "Yes, with cleaning, sanding, a bonding primer and a cabinet-grade enamel that handles moisture.",
    },
    {
      q: "What paint is best for a bathroom vanity?",
      a: "A cabinet-grade enamel over a bonding primer. Wall paint isn't hard enough for a vanity.",
    },
    {
      q: "How long before I can use a painted vanity?",
      a: `Usually within a day or so for normal use, with gentle care for about ${BUSINESS.cabinetFinish.cureDays} while it cures.`,
    },
    {
      q: "What if the vanity has water damage?",
      a: "Swollen or soft particleboard should be repaired or replaced before painting; paint won't fix it.",
    },
  ],
  limitations: <>General guidance; prices are 2026 planning ranges, not quotes.</>,
  related: [
    { label: "Best paint for bathrooms", href: "/blog/best-paint-bathrooms-laundry-rooms-houston" },
    { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Painting laminate and thermofoil cabinets", href: "/blog/paint-laminate-thermofoil-cabinets" },
  ],
  ctaTitle: "Get a written cabinet painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
