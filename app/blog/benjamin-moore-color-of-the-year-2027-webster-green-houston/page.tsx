import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-19 (BM 2027 series, post 1 of 5). Facts from Benjamin
// Moore (checked 2026-10-19): press release of Oct 14, 2026 naming Webster
// Green HC-130 Color of the Year 2027 ("a confident hue with undeniable
// personality", "quintessential green"; suggested as an accent, living room or
// study, kitchen cabinetry, front door), and the HC-130 color page (LRV 20.2,
// Historical Colors, coordinates Glacier White OC-37, Elmira White HC-84, Wild
// Aster 1240, Cape May Cobblestone 1474). Benjamin Moore publishes no screen
// hex, so no swatch is shown. Benjamin Moore does not state an undertone for
// Webster Green; the post doesn't invent one.

const PRESS = "https://www.benjaminmoore.com/en-us/press/benjamin-moore-announces-color-of-the-year-2027"
const COLOR = "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-130/webster-green"

const D: GuideArticleData = {
  path: "/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston",
  title: "Benjamin Moore Color of the Year 2027: Webster Green HC-130",
  description:
    "Webster Green HC-130 is Benjamin Moore's 2027 Color of the Year: a deep, confident green. How it looks in Houston light, where to use it, and what pairs with it.",
  h1: "Benjamin Moore Color of the Year 2027: Webster Green HC-130 in Houston homes",
  eyebrow: "Color guide",
  published: "2026-10-21",
  updated: "2026-10-21",
  quickAnswer: (
    <>
      Webster Green HC-130 is Benjamin Moore&apos;s Color of the Year 2027, announced October 14, 2026. Benjamin Moore calls
      it &quot;a confident hue with undeniable personality&quot; and a &quot;quintessential green&quot;. It is a deep color, with
      an LRV of 20.2, so it reads rich and enveloping rather than light. In Houston, it works best on cabinets, built-ins,
      studies, dining rooms and front doors, and as an accent against a soft white. Always test a physical sample in your
      own light.
    </>
  ),
  sections: [
    {
      title: "What Webster Green HC-130 looks like",
      body: (
        <>
          <p>
            Webster Green is from Benjamin Moore&apos;s Historical Colors collection. With a light reflectance value (LRV) of
            20.2, it reflects only about a fifth of the light that hits it: a deep, classic green, closer to an evergreen
            than to the soft herbal greens of recent years. Benjamin Moore describes it as both &quot;adaptable and
            impactful&quot; and says it works across traditional, contemporary and transitional styles.
          </p>
          <p>
            Benjamin Moore doesn&apos;t publish an undertone for it, and screens can&apos;t show deep greens accurately, so
            judge it on a physical sample next to your floors, counters and trim.
          </p>
        </>
      ),
    },
    {
      title: "How Houston light changes it",
      body: (
        <Bullets
          items={[
            <><strong>Bright south- and west-facing rooms:</strong> strong afternoon sun lifts a deep green and can bring out more of its warmth; it reads livelier than on the chip.</>,
            <><strong>North-facing and shaded rooms:</strong> it reads darker and moodier. That can be the point in a study or dining room; in a small dim room, balance it with a light ceiling and white trim.</>,
            <><strong>At night:</strong> warm bulbs (2700K) make deep greens feel cozy; cooler bulbs make them look flatter and grayer.</>,
            <><strong>Outside:</strong> full Houston sun makes dark colors look lighter than the sample and fade faster; use a premium exterior product and keep it to a door or shutters unless you&apos;ve tested a large area.</>,
          ]}
        />
      ),
    },
    {
      title: "Walls, cabinets, built-ins and exterior accents",
      body: (
        <Steps
          items={[
            { title: "Kitchen cabinets and islands", text: `Benjamin Moore suggests it for cabinetry. On cabinets we use a cabinet-grade enamel such as ${BUSINESS.cabinetFinish.products[0]}, usually in satin, and cabinets need about ${BUSINESS.cabinetFinish.cureDays} of gentle use while the finish cures.` },
            { title: "Built-ins and bookcases", text: "a deep green on built-ins against soft white walls is a classic look that suits traditional and transitional Houston homes." },
            { title: "Accent walls and studies", text: "a whole study, library or dining room in Webster Green feels enveloping; an accent wall is a lower-commitment test." },
            { title: "Front doors and shutters", text: "Benjamin Moore lists front doors as a use. In direct sun, choose a fade-resistant exterior product and check your HOA's color rules." },
          ]}
        />
      ),
    },
    {
      title: "Best rooms for Webster Green",
      body: (
        <Bullets
          items={[
            "Studies, home offices and libraries.",
            "Dining rooms, especially with good evening lighting.",
            "Kitchens: cabinets, islands or a lower-cabinet run with lighter uppers.",
            "Powder rooms and mudrooms, where a bold color is easy to live with.",
            "Bedrooms that get good natural light, or as a headboard wall.",
          ]}
        />
      ),
    },
    {
      title: "Coordinating whites, blues and browns",
      body: (
        <>
          <p>Colors Benjamin Moore pairs with Webster Green, on its color page and in its Color Trends 2027 palette:</p>
          <div className="not-prose my-4 overflow-x-auto">
            <table className="w-full text-left text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 font-semibold">Role</th>
                  <th className="p-3 font-semibold">Benjamin Moore colors</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Whites for trim and ceilings", "White Down OC-131, Glacier White OC-37, Elmira White HC-84"],
                  ["Blue", "Nelson Blue CW-635"],
                  ["Browns and warm neutrals", "Townsend Harbor Brown HC-64, Antique Copper 1169, Shakespeare Tan 228, Cape May Cobblestone 1474"],
                  ["Soft accent", "Wild Aster 1240"],
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
            For Sherwin-Williams&apos; 2027 color, see our{" "}
            <Link href="/blog/sherwin-williams-color-of-the-year-2027-celery-houston">Celery SW 6421 guide</Link>.
          </p>
        </>
      ),
    },
    {
      title: "Benjamin Moore products and sheens",
      body: (
        <Bullets
          items={[
            <><strong>Walls:</strong> a premium Benjamin Moore interior line such as Regal Select or Aura; matte or eggshell keeps a deep green rich and hides wall texture.</>,
            <><strong>Cabinets and built-ins:</strong> {BUSINESS.cabinetFinish.products[0]}, a cabinet-grade enamel, usually in satin.</>,
            <><strong>Trim and doors:</strong> satin or semi-gloss enamel.</>,
            <><strong>Exterior doors and shutters:</strong> a premium exterior product rated for sun; ask about fade resistance for deep colors.</>,
          ]}
        />
      ),
    },
    {
      title: "Test a physical sample first",
      body: (
        <p>
          Deep greens are hard to judge on a screen or a small chip. Paint a large sample board, look at it in morning,
          afternoon and evening light, and hold it next to your counters and floors. You can try the idea on a photo of your
          room with our <Link href="/color-visualizer">color visualizer</Link>, then confirm with a physical sample or a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>. {BUSINESS.name} is not affiliated
          with or sponsored by Benjamin Moore.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is Benjamin Moore's Color of the Year 2027?",
      a: "Webster Green HC-130, announced October 14, 2026. Benjamin Moore describes it as a confident hue with undeniable personality and a quintessential green.",
    },
    {
      q: "Is Webster Green a light or dark green?",
      a: "Dark. Its LRV is 20.2, so it reflects about a fifth of the light that hits it; it reads deep and rich rather than light.",
    },
    {
      q: "Is Webster Green good for kitchen cabinets?",
      a: "Yes, Benjamin Moore suggests it for cabinetry. Use a cabinet-grade enamel such as Benjamin Moore Command in satin, and test it next to your counters.",
    },
    {
      q: "What white goes with Webster Green?",
      a: "Benjamin Moore pairs it with White Down OC-131, Glacier White OC-37 and Elmira White HC-84.",
    },
    {
      q: "Can Webster Green be used on a front door in Houston?",
      a: "Yes, Benjamin Moore lists front doors as a use. In direct sun, choose a fade-resistant exterior product and check your HOA's color rules.",
    },
  ],
  limitations: (
    <>
      Color facts are from Benjamin Moore&apos;s published pages, checked October 2026. Benjamin Moore publishes no screen
      color value for this shade, so no swatch is shown; colors on screens are approximate. Confirm with a physical sample.
    </>
  ),
  sources: [
    { label: "Benjamin Moore: Color of the Year 2027 announcement", url: PRESS },
    { label: "Benjamin Moore: Webster Green HC-130 color page", url: COLOR },
  ],
  related: [
    { label: "Celery SW 6421: Sherwin-Williams' 2027 color", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
    { label: "Color visualizer", href: "/color-visualizer" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
