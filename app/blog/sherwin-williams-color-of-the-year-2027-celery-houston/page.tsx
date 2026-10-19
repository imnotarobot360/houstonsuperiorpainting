import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-15. Facts from Sherwin-Williams (checked 2026-10-15):
//  - COTY 2027 page: Celery SW 6421, "an airy, herbal green", "subtle yellow
//    undertones", "a soft, muted green" between "an airy pastel and a grounded,
//    herbal hue"; coordinating palette of nine colors (listed below).
//  - SW6421 color page: LRV 71.303 (light), color family Green, availability
//    listed as Interior; coordinates Queen Anne's Lace SW 6420, Lemongrass SW 7732,
//    Enduring Bronze SW 7055.
// We have NO photographed Celery samples yet, so the article explains how to test
// samples rather than showing invented ones. Do not call it a neutral gray or a
// sage without qualification (owner brief).

const COTY_URL = "https://www.sherwin-williams.com/en-us/color/color-of-the-year/2027"
const COLOR_URL = "https://www.sherwin-williams.com/sherwinwilliams/SW6421-celery"

const PALETTE: [string, string][] = [
  ["White Flour", "SW 7102"],
  ["Woven Wicker", "SW 9104"],
  ["Cocoon", "SW 6173"],
  ["Artichoke", "SW 6179"],
  ["Georgian Bay", "SW 6509"],
  ["Cosmos", "SW 6528"],
  ["Potentially Purple", "SW 6821"],
  ["Plum Brown", "SW 6272"],
  ["Kirsch Red", "SW 6313"],
]

const D: GuideArticleData = {
  path: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston",
  title: "Sherwin-Williams Celery SW 6421: 2027 Color of the Year Guide",
  description:
    "Celery SW 6421, Sherwin-Williams' 2027 Color of the Year: an airy, herbal green with subtle yellow undertones. How it looks in Houston light and what pairs with it.",
  h1: "Celery SW 6421: Sherwin-Williams' 2027 Color of the Year in Houston homes",
  eyebrow: "Color guide",
  published: "2026-10-15",
  updated: "2026-10-15",
  quickAnswer: (
    <>
      Celery SW 6421 is Sherwin-Williams&apos; 2027 Color of the Year. Sherwin-Williams describes it as an airy, herbal
      green with subtle yellow undertones: a soft, muted green between a pastel and a grounded herbal shade. It is a
      light color (LRV about 71), so it keeps rooms bright. In Houston&apos;s strong sun its yellow undertone shows more,
      and in shaded or north-facing rooms it reads greener and cooler, so test a physical sample before you commit.
    </>
  ),
  sections: [
    {
      title: "What Celery SW 6421 actually is",
      body: (
        <>
          {/* Swatch from Sherwin-Williams' published value for SW 6421 (hex E0DDBD). */}
          <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
            <div className="h-40 sm:h-56" style={{ backgroundColor: "#E0DDBD" }} role="img" aria-label="Approximate on-screen swatch of Sherwin-Williams Celery SW 6421" />
            <p className="bg-card px-4 py-3 text-sm text-muted-foreground">
              Celery SW 6421, shown with Sherwin-Williams&apos; published screen value (hex E0DDBD). Screens vary; confirm
              with a physical sample.
            </p>
          </div>
          <p>
            Celery is a green, not a gray and not a classic sage. Sherwin-Williams calls it &quot;an airy, herbal
            green&quot; and points to its &quot;subtle yellow undertones&quot;. That yellow is what keeps it from looking
            cold or minty, and it is also what you need to watch next to warm floors and counters.
          </p>
          <Bullets
            items={[
              <><strong>Color family:</strong> green.</>,
              <><strong>Light reflectance value (LRV):</strong> about 71, which Sherwin-Williams classes as light. Higher LRV means the color reflects more light, so it brightens a room rather than closing it in.</>,
              <><strong>Undertone:</strong> yellow, per Sherwin-Williams.</>,
              <><strong>Listed for:</strong> interior use on Sherwin-Williams&apos; color page.</>,
            ]}
          />
        </>
      ),
    },
    {
      title: "How Houston light changes it",
      body: (
        <>
          <p>
            Houston gets strong, warm sun much of the year, and that affects any light color with a yellow undertone:
          </p>
          <Bullets
            items={[
              <><strong>South- and west-facing rooms:</strong> afternoon sun warms Celery and brings out the yellow; it can read closer to a soft yellow-green.</>,
              <><strong>North-facing and shaded rooms:</strong> cooler, indirect light pulls it greener and a little grayer.</>,
              <><strong>Morning light (east):</strong> usually the truest, softest version of the color.</>,
              <><strong>Artificial light at night:</strong> warm bulbs (2700K) push it toward yellow; cooler bulbs (3500K–4000K) keep it greener. Look at your sample with the bulbs you actually use.</>,
            ]}
          />
        </>
      ),
    },
    {
      title: "Test samples in morning, afternoon and evening light",
      body: (
        <>
          <Steps
            items={[
              { title: "Use a real sample", text: "a peel-and-stick sample or a painted board at least 12 by 12 inches, not a chip." },
              { title: "Put it where it will live", text: "on two walls that face different directions, next to the trim, floor and counters." },
              { title: "Look three times", text: "in morning light, in afternoon sun, and at night under your own lamps." },
              { title: "Compare against white", text: "hold a piece of plain white paper beside it; that shows the yellow undertone clearly." },
              { title: "Decide on the wall", text: "not on a screen or a phone photo." },
            ]}
          />
          <p>
            Screen colors are not a reliable substitute for physical samples: phones, monitors and photo filters all shift
            greens. Our <Link href="/color-visualizer">color visualizer</Link> is useful for trying the idea on a photo of
            your room, but confirm the final choice with a physical sample.
          </p>
        </>
      ),
    },
    {
      title: "Where Celery works best",
      body: (
        <Bullets
          items={[
            <><strong>Kitchens and breakfast areas:</strong> on walls, or on cabinets and islands for a soft, fresh look that is lighter than the darker greens popular on cabinets.</>,
            <><strong>Bathrooms and laundry rooms:</strong> it keeps small rooms light while adding color.</>,
            <><strong>Bedrooms and sunrooms:</strong> calm without going gray.</>,
            <><strong>Architectural styles:</strong> it suits cottage, farmhouse, traditional and transitional homes; in very modern, high-contrast rooms it reads softer and more relaxed.</>,
          ]}
        />
      ),
    },
    {
      title: "Cabinets, walls and exteriors",
      body: (
        <>
          <p>
            <strong>Walls:</strong> a matte or eggshell finish keeps Celery soft. <strong>Cabinets:</strong> on cabinets we
            use a durable cabinet-grade finish such as {BUSINESS.cabinetFinish.products[0]} or{" "}
            {BUSINESS.cabinetFinish.products[1]}; a satin sheen shows the color well without too much glare. See{" "}
            <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link>.
          </p>
          <p>
            <strong>Exteriors:</strong> Sherwin-Williams lists Celery as an interior color on its color page, so ask us
            whether it can be matched in the exterior product you choose before planning a whole house. In full Houston sun
            a light green like this reads noticeably lighter and yellower outside than on a sample card; it is often better
            on a front door, shutters or a porch ceiling than on all the siding. Check your HOA&apos;s approved color list
            first. See <Link href="/exterior-painting-houston-tx">exterior painting</Link>.
          </p>
        </>
      ),
    },
    {
      title: "Floors, wood cabinets and white trim",
      body: (
        <Bullets
          items={[
            <><strong>Warm wood floors and wood cabinets:</strong> Celery&apos;s yellow undertone can pick up orange or red-toned wood and look warmer than expected. Mid-tone and lighter woods usually sit well with it; test next to orange-toned oak.</>,
            <><strong>White trim:</strong> a soft, warm white usually looks better beside it than a stark, blue-white. Sherwin-Williams includes White Flour SW 7102 in the Celery palette.</>,
            <><strong>Counters and tile:</strong> creamy and warm-gray stone work well; very cool gray or blue-white tile can make Celery look more yellow by contrast.</>,
          ]}
        />
      ),
    },
    {
      title: "Colors Sherwin-Williams pairs with Celery",
      body: (
        <>
          <p>Sherwin-Williams&apos; 2027 Color of the Year palette includes:</p>
          <div className="not-prose my-4 overflow-x-auto">
            <table className="w-full text-left text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 font-semibold">Color</th>
                  <th className="p-3 font-semibold">Number</th>
                </tr>
              </thead>
              <tbody>
                {PALETTE.map(([n, c]) => (
                  <tr key={c} className="border-t border-border">
                    <td className="p-3">{n}</td>
                    <td className="p-3 text-muted-foreground">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Its color page also lists Queen Anne&apos;s Lace SW 6420, Lemongrass SW 7732 and Enduring Bronze SW 7055 as
            coordinating colors. Color names identify Sherwin-Williams products for reference only; {BUSINESS.name} is not
            sponsored by Sherwin-Williams.
          </p>
        </>
      ),
    },
    {
      title: "Get help choosing",
      body: (
        <p>
          Our <Link href="/paint-color-consultation-houston">free color consultation</Link> looks at Celery (or any color)
          in your actual light with physical samples, and your written estimate lists the products, sheens and colors
          for each surface. See <Link href="/interior-painting-houston-tx">interior painting</Link> for how we prep and
          paint.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color is Sherwin-Williams Celery SW 6421?",
      a: "Sherwin-Williams describes Celery SW 6421 as an airy, herbal green with subtle yellow undertones. It is a light color, with an LRV of about 71.",
    },
    {
      q: "Is Celery a sage green or a gray?",
      a: "Neither, without qualification. It is a soft, muted green with a yellow undertone, so it reads warmer and lighter than most sages and has more color than a gray.",
    },
    {
      q: "Does Celery work on kitchen cabinets?",
      a: "Yes, it can. Use a durable cabinet-grade finish in satin, and test the sample next to your countertops and floor, because the yellow undertone reacts to warm wood and stone.",
    },
    {
      q: "Can I use Celery on the outside of my house?",
      a: "Sherwin-Williams lists it as an interior color on its color page, so ask whether it can be matched in the exterior product you choose. In Houston sun it reads lighter and yellower outside, and many HOAs require color approval.",
    },
    {
      q: "What white trim goes with Celery?",
      a: "A soft, warm white usually looks better than a stark blue-white. Sherwin-Williams includes White Flour SW 7102 in the Celery palette.",
    },
  ],
  limitations: (
    <>
      Color descriptions and coordinating colors are from Sherwin-Williams&apos; published pages, checked October 2026.
      How a color looks depends on your light, finishes and screen; on-screen colors are approximate. Always confirm
      with a physical sample.
    </>
  ),
  sources: [
    { label: "Sherwin-Williams: 2027 Color of the Year, Celery SW 6421", url: COTY_URL },
    { label: "Sherwin-Williams: SW 6421 Celery color page", url: COLOR_URL },
  ],
  related: [
    { label: "Paint color consultation", href: "/paint-color-consultation-houston" },
    { label: "Color visualizer", href: "/color-visualizer" },
    { label: "Interior painting", href: "/interior-painting-houston-tx" },
    { label: "Cabinet refinishing", href: "/cabinet-refinishing-houston-tx" },
    { label: "Exterior painting", href: "/exterior-painting-houston-tx" },
    { label: "Popular Houston paint colors", href: "/best-paint-colors-houston-homes" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
