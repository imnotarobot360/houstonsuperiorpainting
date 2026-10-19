import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-20.
// Coordinating colors are only the ones Sherwin-Williams publishes for Celery
// (2027 Color of the Year palette + the SW6421 color page coordinates, checked
// 2026-10-15). The combinations are suggestions to sample, not SW claims.

const COTY_URL = "https://www.sherwin-williams.com/en-us/color/color-of-the-year/2027"
const COLOR_URL = "https://www.sherwin-williams.com/sherwinwilliams/SW6421-celery"

const D: GuideArticleData = {
  path: "/blog/colors-that-go-with-celery-sw-6421",
  title: "What Colors Go With Celery SW 6421? Coordinating-Color Guide",
  description:
    "The colors Sherwin-Williams pairs with Celery SW 6421, which whites suit its trim, and how to combine it with Houston floors, counters, brick and stone.",
  h1: "What colors go with Celery SW 6421?",
  eyebrow: "Color guide",
  published: "2026-10-20",
  updated: "2026-10-20",
  quickAnswer: (
    <>
      Sherwin-Williams pairs Celery SW 6421 with a nine-color 2027 palette, including White Flour SW 7102 and Woven
      Wicker SW 9104 for soft neutrals, Artichoke SW 6179 and Cocoon SW 6173 for deeper greens and browns, and Georgian
      Bay SW 6509 or Kirsch Red SW 6313 for contrast. Its color page also lists Queen Anne&apos;s Lace SW 6420,
      Lemongrass SW 7732 and Enduring Bronze SW 7055. For trim, a soft warm white usually works better than a stark
      blue-white.
    </>
  ),
  sections: [
    {
      title: "The colors Sherwin-Williams pairs with Celery",
      body: (
        <>
          <p>Sherwin-Williams published two sets of coordinating colors for Celery:</p>
          <div className="not-prose my-4 overflow-x-auto">
            <table className="w-full text-left text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 font-semibold">Role</th>
                  <th className="p-3 font-semibold">Colors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Soft neutrals (2027 palette)", "White Flour SW 7102, Woven Wicker SW 9104"],
                  ["Earthy greens and browns (2027 palette)", "Cocoon SW 6173, Artichoke SW 6179"],
                  ["Blues and purples (2027 palette)", "Georgian Bay SW 6509, Cosmos SW 6528, Potentially Purple SW 6821"],
                  ["Deep accents (2027 palette)", "Plum Brown SW 6272, Kirsch Red SW 6313"],
                  ["Coordinates on the SW 6421 color page", "Queen Anne's Lace SW 6420, Lemongrass SW 7732, Enduring Bronze SW 7055"],
                ].map(([a, b]) => (
                  <tr key={a} className="border-t border-border">
                    <td className="p-3 font-medium">{a}</td>
                    <td className="p-3 text-muted-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The grouping by role is ours, to make the list easier to use; the colors are Sherwin-Williams&apos;. For what
            Celery itself looks like in Houston light, see our{" "}
            <Link href="/blog/sherwin-williams-color-of-the-year-2027-celery-houston">Celery SW 6421 guide</Link>.
          </p>
        </>
      ),
    },
    {
      title: "Trim and ceiling whites",
      body: (
        <p>
          Celery has yellow undertones, so a stark, blue-leaning white next to it can make it look more yellow and the white
          look colder. A soft, warm white usually sits better. White Flour SW 7102 is the white in Sherwin-Williams&apos; own
          Celery palette, which makes it the natural first sample for trim, doors and ceilings. Test it against one or two
          other warm whites in the same room before deciding.
        </p>
      ),
    },
    {
      title: "Combinations to sample",
      body: (
        <Bullets
          items={[
            <><strong>Soft and light:</strong> Celery walls, White Flour trim and ceilings, Woven Wicker in an adjoining room.</>,
            <><strong>Kitchen:</strong> Celery cabinets or island, White Flour walls or uppers, with brass or bronze hardware (Enduring Bronze is a coordinate if you want a painted accent in the same family).</>,
            <><strong>Deeper contrast:</strong> Celery walls with an Artichoke or Cocoon accent wall, built-ins or lower cabinets.</>,
            <><strong>A pop of color:</strong> Celery as the main color, with Georgian Bay or Kirsch Red on a front door, a powder room or a piece of furniture.</>,
          ]}
        />
      ),
    },
    {
      title: "Pairing Celery with Houston floors, counters, brick and stone",
      body: (
        <Bullets
          items={[
            <><strong>Wood floors:</strong> mid-tone and lighter woods usually work; orange- or red-toned oak can push Celery warmer, so sample next to the floor.</>,
            <><strong>Counters and tile:</strong> creamy and warm-gray stone sit well with it; very cool gray or blue-white tile makes it look more yellow by contrast.</>,
            <><strong>Red or orange brick:</strong> common on Houston homes. Celery&apos;s green is a natural complement to red brick, but test in full sun, where its yellow undertone shows more.</>,
            <><strong>Exteriors:</strong> Sherwin-Williams lists Celery as an interior color on its color page, so ask whether it can be matched in the exterior product you choose, and check your HOA&apos;s approved colors first.</>,
          ]}
        />
      ),
    },
    {
      title: "How to test a combination",
      body: (
        <p>
          Put large samples of each color side by side, on the wall where they will live, next to the floor and the trim.
          Look at them in morning, afternoon and evening light. Screens and phone photos shift greens, so decide on the wall.
          Our <Link href="/color-visualizer">color visualizer</Link> is useful for trying an idea on a photo of your room,
          and a <Link href="/paint-color-consultation-houston">free color consultation</Link> looks at the combination in your
          actual light. {BUSINESS.name} is not sponsored by Sherwin-Williams; color names are for reference.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What white goes with Celery SW 6421?",
      a: "A soft, warm white usually works better than a stark blue-white. White Flour SW 7102 is the white in Sherwin-Williams' 2027 Celery palette, so it is a good first sample.",
    },
    {
      q: "What accent colors go with Celery?",
      a: "From Sherwin-Williams' palette: Artichoke SW 6179 and Cocoon SW 6173 for deeper earthy tones, Georgian Bay SW 6509 for blue, and Plum Brown SW 6272 or Kirsch Red SW 6313 for strong contrast.",
    },
    {
      q: "Does Celery go with red brick?",
      a: "It can: green complements red. Celery's yellow undertone shows more in full Houston sun, so test a large sample on the house first, and check whether it can be matched in the exterior product you choose.",
    },
    {
      q: "What colors did Sherwin-Williams list as Celery coordinates?",
      a: "On the SW 6421 color page: Queen Anne's Lace SW 6420, Lemongrass SW 7732 and Enduring Bronze SW 7055. The 2027 Color of the Year palette adds nine more colors.",
    },
  ],
  limitations: (
    <>
      Coordinating colors are from Sherwin-Williams&apos; published pages, checked October 2026. The combinations are
      suggestions to sample. On-screen colors are approximate; confirm with physical samples in your own light.
    </>
  ),
  sources: [
    { label: "Sherwin-Williams: 2027 Color of the Year, Celery SW 6421", url: COTY_URL },
    { label: "Sherwin-Williams: SW 6421 Celery color page", url: COLOR_URL },
  ],
  related: [
    { label: "Celery SW 6421 in Houston homes", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "Popular Houston paint colors", href: "/best-paint-colors-houston-homes" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
    { label: "Color visualizer", href: "/color-visualizer" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
