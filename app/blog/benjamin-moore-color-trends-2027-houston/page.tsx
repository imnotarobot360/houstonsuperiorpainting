import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-19 (BM 2027 series, post 4 of 5). Facts from Benjamin
// Moore, checked 2026-10-19: the Color Trends 2027 palette and each color's
// description (press release, Oct 14, 2026) and each color page (LRV, family,
// collection, coordinating colors). Room, style and Houston-light guidance is
// ours, derived from the LRV and BM's descriptions. No screen colors shown
// (Benjamin Moore publishes no hex values).

const PRESS = "https://www.benjaminmoore.com/en-us/press/benjamin-moore-announces-color-of-the-year-2027"

type Swatch = {
  name: string
  code: string
  lrv: string
  family: string
  bm: string
  rooms: string
  styles: string
  trim: string
  light: string
  uses: string
}

const PALETTE: Swatch[] = [
  {
    name: "Webster Green",
    code: "HC-130",
    lrv: "20.2",
    family: "Green; Color of the Year 2027",
    bm: "“a confident hue with undeniable personality”; a “quintessential green”",
    rooms: "Studies, dining rooms, kitchens (cabinets and islands), built-ins, powder rooms.",
    styles: "Traditional, transitional and contemporary (Benjamin Moore says it works across all three).",
    trim: "White Down OC-131, Glacier White OC-37 or Elmira White HC-84.",
    light: "Deep: strong sun lifts it; in a dim north-facing room it turns moody. Balance with a light ceiling.",
    uses: "Walls (best in well-lit rooms or as an accent), cabinets and built-ins, front doors.",
  },
  {
    name: "White Down",
    code: "OC-131",
    lrv: "76.7",
    family: "White (Off-White Collection)",
    bm: "a cozy off-white; hints of cream bring “featherlight softness”",
    rooms: "Whole-house walls, ceilings, trim; bedrooms and living areas.",
    styles: "Every style; especially warm traditional and soft modern homes.",
    trim: "Works as the trim color itself; pairs with Simply White OC-117 for a crisper contrast.",
    light: "Light: stays soft and warm in strong sun; doesn't go gray in dim rooms the way cool whites can.",
    uses: "Walls, trim, ceilings, cabinets (in a cabinet-grade enamel), exteriors in an exterior product.",
  },
  {
    name: "Nelson Blue",
    code: "CW-635",
    lrv: "65.4",
    family: "Blue (Williamsburg Collection)",
    bm: "a “watery pale blue” with casual elegance",
    rooms: "Bedrooms, bathrooms, laundry rooms, porch ceilings.",
    styles: "Coastal, traditional and soft modern.",
    trim: "White Down OC-131; Benjamin Moore also pairs it with Webster Green and Harwood Putty CW-5.",
    light: "Light: calm in bright rooms; north light can make it read cooler and grayer.",
    uses: "Walls and ceilings; cabinets in a light kitchen or bath; porch ceilings outside.",
  },
  {
    name: "Shakespeare Tan",
    code: "228",
    lrv: "47.4",
    family: "Neutral (Classics Collection)",
    bm: "a “golden neutral with nuanced undertones”",
    rooms: "Living rooms, dens, entries and hallways.",
    styles: "Traditional, Mediterranean and warm transitional.",
    trim: "Chantilly Lace OC-65 or Lancaster Whitewash HC-174 (Benjamin Moore coordinates).",
    light: "Mid-tone: afternoon sun makes it glow golden; in shade it reads deeper and more neutral.",
    uses: "Walls; exteriors (body color) in an exterior product; cabinets for a warm, earthy kitchen.",
  },
  {
    name: "Antique Copper",
    code: "1169",
    lrv: "20.2",
    family: "Orange-brown (Classics Collection)",
    bm: "a sophisticated brown with “warm, spiced undertones”",
    rooms: "Dining rooms, studies, accent walls, bars.",
    styles: "Traditional, rustic and warm modern.",
    trim: "Cloud White OC-130 or Brandy Cream OC-4 (Benjamin Moore coordinates).",
    light: "Deep: warm in sunlight, cozy at night under warm bulbs; heavy in a small dim room.",
    uses: "Accent walls, islands and built-ins, front doors.",
  },
  {
    name: "Wild Aster",
    code: "1240",
    lrv: "70.5",
    family: "Red family, a soft pink (Classics Collection)",
    bm: "“a graceful pink with notes of pale gray”, versatile as a neutral",
    rooms: "Bedrooms, nurseries, bathrooms, powder rooms.",
    styles: "Soft traditional, eclectic and modern.",
    trim: "Alabaster 876 or a soft white like White Down OC-131.",
    light: "Light: strong sun warms the pink; in north light the gray shows more, so it reads as a neutral.",
    uses: "Walls and ceilings; a bathroom vanity in a cabinet-grade enamel.",
  },
  {
    name: "Durango",
    code: "2137-30",
    lrv: "12.3",
    family: "Neutral",
    bm: "“a deep neutral with rooted olive tones”",
    rooms: "Studies, media rooms, mudrooms, accent walls.",
    styles: "Modern, industrial and organic modern.",
    trim: "Cloud White OC-130 or Timid White OC-39 (Benjamin Moore coordinates).",
    light: "Very deep: reads almost charcoal-olive in shade; sun shows the olive.",
    uses: "Accent walls, cabinets and islands, exterior doors, shutters and trim on light houses.",
  },
  {
    name: "Townsend Harbor Brown",
    code: "HC-64",
    lrv: "8.2",
    family: "Red-brown (Historical Colors)",
    bm: "a “grounded burgundy with classic elegance”",
    rooms: "Dining rooms, libraries, powder rooms.",
    styles: "Traditional and historic homes.",
    trim: "Swiss Coffee OC-45 or White Down OC-131 (Benjamin Moore coordinates).",
    light: "Very deep: rich in sun, nearly brown-black in shade and at night.",
    uses: "Accent walls, built-ins, front doors and shutters.",
  },
]

const D: GuideArticleData = {
  path: "/blog/benjamin-moore-color-trends-2027-houston",
  title: "Benjamin Moore Color Trends 2027: Colors for Houston Homes",
  description:
    "All eight Benjamin Moore Color Trends 2027 colors, from Webster Green to White Down: undertones, LRV, best rooms, trim colors and how each looks in Houston light.",
  h1: "Benjamin Moore Color Trends 2027: the best colors for Houston homes",
  eyebrow: "Color guide",
  published: "2026-10-25",
  updated: "2026-10-25",
  quickAnswer: (
    <>
      Benjamin Moore&apos;s Color Trends 2027 palette has eight colors: Webster Green HC-130 (the Color of the Year), White
      Down OC-131, Nelson Blue CW-635, Shakespeare Tan 228, Antique Copper 1169, Wild Aster 1240, Durango 2137-30 and
      Townsend Harbor Brown HC-64. Three are light (White Down, Wild Aster, Nelson Blue), Shakespeare Tan is a mid-tone, and
      four are deep. In Houston&apos;s bright light, the light colors stay soft and the deep ones need good light or a
      lighter ceiling and trim to balance them.
    </>
  ),
  sections: [
    ...PALETTE.map((c) => ({
      title: `${c.name} ${c.code}`,
      body: (
        <dl className="not-prose grid gap-2 text-sm sm:grid-cols-[10rem_1fr]">
          {[
            ["Family and undertone", `${c.family}. Benjamin Moore: ${c.bm}. LRV ${c.lrv}.`],
            ["Best rooms and surfaces", c.rooms],
            ["Design styles", c.styles],
            ["Trim colors", c.trim],
            ["Houston daylight", c.light],
            ["Walls, cabinets or exteriors", c.uses],
          ].map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-semibold text-foreground">{k}</dt>
              <dd className="text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      ),
    })),
    {
      title: "How to use the palette",
      body: (
        <p>
          Benjamin Moore says the colors work &quot;in combination or as a standalone hue&quot;. A practical approach for a
          Houston home: one light color (White Down, Wild Aster or Nelson Blue) for most walls, one mid or deep color for a
          room or a cabinet run, and a consistent white for trim. Test every color as a large physical sample in the room.
          See <Link href="/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston">Webster Green HC-130</Link>,{" "}
          <Link href="/blog/best-paint-colors-houston-homes-2027">best 2027 colors for Houston homes</Link> and our{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>. On cabinets we use{" "}
          {BUSINESS.cabinetFinish.products[0]}, a cabinet-grade enamel.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What colors are in Benjamin Moore Color Trends 2027?",
      a: "Webster Green HC-130 (Color of the Year), White Down OC-131, Nelson Blue CW-635, Shakespeare Tan 228, Antique Copper 1169, Wild Aster 1240, Durango 2137-30 and Townsend Harbor Brown HC-64.",
    },
    {
      q: "Which Benjamin Moore 2027 color is the lightest?",
      a: "White Down OC-131, with an LRV of 76.7, followed by Wild Aster 1240 (70.5) and Nelson Blue CW-635 (65.4).",
    },
    {
      q: "Which Benjamin Moore 2027 colors work on cabinets?",
      a: "Webster Green HC-130 and Durango 2137-30 for deep cabinets, White Down OC-131 or Nelson Blue CW-635 for light ones, in a cabinet-grade enamel.",
    },
    {
      q: "What trim color goes with the 2027 palette?",
      a: "White Down OC-131 suits most of the palette; Benjamin Moore also pairs individual colors with whites such as Glacier White OC-37, Chantilly Lace OC-65 and Cloud White OC-130.",
    },
  ],
  limitations: (
    <>
      Color names, descriptions, LRVs and coordinates are from Benjamin Moore&apos;s published pages, checked October 2026;
      room, style and lighting guidance is ours. Benjamin Moore publishes no screen color values, so no swatches are shown.
      Confirm with physical samples. {BUSINESS.name} is not affiliated with or sponsored by Benjamin Moore.
    </>
  ),
  sources: [{ label: "Benjamin Moore: Color of the Year 2027 and Color Trends 2027", url: PRESS }],
  related: [
    { label: "Webster Green HC-130", href: "/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston" },
    { label: "Best 2027 colors for Houston homes", href: "/blog/best-paint-colors-houston-homes-2027" },
    { label: "Celery vs. Webster Green", href: "/blog/celery-vs-webster-green-2027-color-of-the-year" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
