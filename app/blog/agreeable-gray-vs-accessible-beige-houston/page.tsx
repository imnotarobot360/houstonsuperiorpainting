import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-05.
// Facts from Sherwin-Williams' color service (api.sherwin-williams.com
// shared-color-service, checked 2026-10-19): LRV (Agreeable Gray 60.386,
// Accessible Beige 57.67), SW's own descriptions and coordinating colors.
// Swatch hexes from data/sw-colors.json (SW digital values). Room and
// Houston-light guidance is ours.

const SW = "https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors"

const COLORS = [
  { name: "Agreeable Gray", code: "SW 7029", hex: "#D1CBC1" },
  { name: "Accessible Beige", code: "SW 7036", hex: "#D1C7B8" },
]

const D: GuideArticleData = {
  path: "/blog/agreeable-gray-vs-accessible-beige-houston",
  title: "Agreeable Gray vs. Accessible Beige in Houston Homes",
  description:
    "Two of Sherwin-Williams' most popular neutrals compared: LRV, undertones, how each looks in Houston light, and the whites, trim and floors that suit them.",
  h1: "Agreeable Gray vs. Accessible Beige in Houston homes",
  eyebrow: "Color guide",
  published: "2026-12-05",
  updated: "2026-12-05",
  quickAnswer: (
    <>
      They are close: both are warm greige neutrals with almost the same lightness (LRV about 60 for Agreeable Gray SW 7029
      and about 58 for Accessible Beige SW 7036). Agreeable Gray is a gray with a beige undertone, so it reads lighter and a
      little cooler. Accessible Beige is a beige with gray undertones, so it reads warmer and a touch deeper. In bright,
      warm Houston light, Agreeable Gray stays more neutral; in cooler north light or with cool tile and counters,
      Accessible Beige keeps a room from feeling cold.
    </>
  ),
  sections: [
    {
      title: "Side by side",
      body: (
        <>
          <div className="not-prose my-4 grid grid-cols-2 gap-3">
            {COLORS.map((c) => (
              <figure key={c.code} className="rounded-lg border border-border overflow-hidden">
                <div className="h-24" style={{ backgroundColor: c.hex }} aria-hidden="true" />
                <figcaption className="p-2 text-sm">
                  <strong>{c.name}</strong> {c.code}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="not-prose my-4 overflow-x-auto">
            <table className="w-full text-left text-sm border border-border">
              <thead>
                <tr className="bg-muted/40">
                  <th className="p-3"></th>
                  <th className="p-3">Agreeable Gray SW 7029</th>
                  <th className="p-3">Accessible Beige SW 7036</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["LRV", "60.4", "57.7"],
                  ["What it is", "A gray with a beige undertone", "A beige with gray undertones"],
                  ["Sherwin-Williams says", "Its best-selling color; the beige undertone gives \"a subtle warmth\"", "Gray undertones \"can give your space a warm, snug feel\""],
                  ["Reads as", "Lighter, more neutral", "Warmer, slightly deeper"],
                  ["SW coordinating colors", "Incredible White SW 7028, Extra White SW 7006, Coral Rose SW 9004", "Aesthetic White SW 7035, Sanderling SW 7513, Cadet SW 9143"],
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
        </>
      ),
    },
    {
      title: "How they look in Houston light",
      body: (
        <Bullets
          items={[
            <><strong>South- and west-facing rooms:</strong> strong warm sun pushes both warmer. Agreeable Gray usually holds as a neutral; Accessible Beige can lean noticeably beige.</>,
            <><strong>North-facing rooms:</strong> cool, indirect light can make Agreeable Gray look grayer and flatter; Accessible Beige keeps more warmth.</>,
            <><strong>Evenings:</strong> under warm bulbs both turn cozier; under cool white LED, Agreeable Gray can look stark.</>,
          ]}
        />
      ),
    },
    {
      title: "What they pair with",
      body: (
        <Bullets
          items={[
            <><strong>Floors:</strong> both suit mid-tone wood and warm tile. Very orange oak makes Agreeable Gray look grayer; cool gray tile or LVP makes Accessible Beige look more beige.</>,
            <><strong>Counters:</strong> cool white quartz suits Agreeable Gray; creamy or warm-veined stone suits Accessible Beige.</>,
            <><strong>Trim:</strong> a soft white rather than a stark one. See <Link href="/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston">popular whites compared</Link>.</>,
            <><strong>Exteriors:</strong> both are listed by Sherwin-Williams for exterior use, but strong Houston sun washes them lighter outdoors; sample on the house.</>,
          ]}
        />
      ),
    },
    {
      title: "Which to choose",
      body: (
        <p>
          Choose Agreeable Gray for a light, versatile neutral in bright rooms or a whole-house color with cool or white
          finishes. Choose Accessible Beige for a warmer, cozier room, a north-facing space, or a home with warm wood and
          creamy stone. Put large samples of both on two walls and look morning and evening. Try them in the{" "}
          <Link href="/color-visualizer">color visualizer</Link>, read{" "}
          <Link href="/best-paint-colors-houston-homes">popular Houston paint colors</Link>, or book a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is Agreeable Gray or Accessible Beige warmer?",
      a: "Accessible Beige. Agreeable Gray is a gray with a beige undertone; Accessible Beige is a beige with gray undertones.",
    },
    {
      q: "What are the LRVs of Agreeable Gray and Accessible Beige?",
      a: "Sherwin-Williams lists Agreeable Gray SW 7029 at about 60 and Accessible Beige SW 7036 at about 58, so they are nearly as light as each other.",
    },
    {
      q: "Which is better for a north-facing room?",
      a: "Usually Accessible Beige, because its warmth offsets cool north light. Test both in the room.",
    },
    {
      q: "What white trim goes with Agreeable Gray?",
      a: "Sherwin-Williams pairs it with Extra White SW 7006 and Incredible White SW 7028; a soft white keeps the look gentle.",
    },
  ],
  limitations: (
    <>
      LRVs, descriptions and coordinating colors are from Sherwin-Williams, checked October 2026; lighting guidance is ours.
      On-screen swatches use Sherwin-Williams&apos; digital values and are approximate. Confirm with physical samples.{" "}
      {BUSINESS.name} is not affiliated with or sponsored by Sherwin-Williams.
    </>
  ),
  sources: [
    { label: "Sherwin-Williams: Agreeable Gray SW 7029", url: `${SW}/sw7029-agreeable-gray` },
    { label: "Sherwin-Williams: Accessible Beige SW 7036", url: `${SW}/sw7036-accessible-beige` },
  ],
  related: [
    { label: "Popular Houston paint colors", href: "/best-paint-colors-houston-homes" },
    { label: "Alabaster vs. White Dove vs. Chantilly Lace", href: "/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
    { label: "Color visualizer", href: "/color-visualizer" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
