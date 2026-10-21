import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-19 (BM 2027 series, post 2 of 5). Facts: Celery SW 6421
// (Sherwin-Williams COTY 2027 page + SW6421 color page: "airy, herbal green",
// "subtle yellow undertones", LRV 71.3, listed for interior); Webster Green
// HC-130 (Benjamin Moore press release Oct 14, 2026 + HC-130 page: "confident
// hue", "quintessential green", LRV 20.2, suggested for cabinetry, living room
// or study, accents, front door). Neither brand is called better.

const D: GuideArticleData = {
  path: "/blog/celery-vs-webster-green-2027-color-of-the-year",
  title: "Celery SW 6421 vs. Webster Green HC-130: 2027 Colors Compared",
  description:
    "Sherwin-Williams' Celery and Benjamin Moore's Webster Green are both greens, but one is light and airy and one is deep. How they differ and where each works.",
  h1: "Celery SW 6421 vs. Webster Green HC-130: comparing the 2027 Colors of the Year",
  eyebrow: "Color guide",
  published: "2026-10-22",
  updated: "2026-10-22",
  quickAnswer: (
    <>
      Both 2027 Colors of the Year are greens, but they do opposite jobs. Sherwin-Williams&apos; Celery SW 6421 is a light,
      airy herbal green with yellow undertones (LRV about 71), suited to bedrooms, bathrooms, kitchens and other rooms you
      want to keep bright. Benjamin Moore&apos;s Webster Green HC-130 is a deep, confident green (LRV 20.2), suited to
      cabinets, studies, dining rooms, built-ins and accents. They can even work together in one house.
    </>
  ),
  sections: [
    {
      title: "Celery and Webster Green on screen",
      body: (
        <figure className="not-prose my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/art/celery-vs-webster-green-2027-color-of-the-year.png"
            alt="Celery SW 6421 and Webster Green HC-130 swatches side by side"
            width={1200}
            height={675}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Each brand&apos;s published on-screen value: Celery SW 6421 (#E0DDBD) and Webster Green HC-130 (#64806C). Screens vary; compare physical samples.
          </figcaption>
        </figure>
      ),
    },
    {
      title: "Side by side",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 font-semibold"></th>
                <th className="p-3 font-semibold">Celery SW 6421</th>
                <th className="p-3 font-semibold">Webster Green HC-130</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Brand", "Sherwin-Williams", "Benjamin Moore"],
                ["General appearance", "Light, airy herbal green with yellow influence", "Deeper, classic and more confident green"],
                ["LRV (light reflectance)", "About 71 (light)", "20.2 (deep)"],
                ["How the brand describes it", "\"An airy, herbal green\" with \"subtle yellow undertones\"", "\"A confident hue with undeniable personality\""],
                ["Suggested applications", "Bedrooms, bathrooms, kitchens and lighter interiors", "Cabinets, studies, dining rooms, built-ins and accents"],
                ["Exterior", "Listed as an interior color; ask about exterior matching", "Benjamin Moore suggests front doors"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  {r.map((c, i) => (
                    <td key={i} className={`p-3 ${i ? "text-muted-foreground" : "font-medium"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "Light vs. deep: what the LRV tells you",
      body: (
        <p>
          LRV measures how much light a color reflects, from 0 (black) to 100 (white). Celery, at about 71, keeps a room
          bright and feels open; it can cover every wall without closing the room in. Webster Green, at 20.2, absorbs most of
          the light; it makes a room feel enveloping and works best where you want depth: a study, a dining room, a cabinet
          run or a door.
        </p>
      ),
    },
    {
      title: "How they behave in Houston light",
      body: (
        <Bullets
          items={[
            <><strong>Celery in strong sun:</strong> its yellow undertone shows more in south- and west-facing rooms; in shade it reads greener and cooler.</>,
            <><strong>Webster Green in strong sun:</strong> bright light lifts it and makes it look livelier; in a dim north-facing room it reads darker and moodier.</>,
            <><strong>Both:</strong> look different under warm and cool bulbs. Check samples at night under the lights you actually use.</>,
          ]}
        />
      ),
    },
    {
      title: "Using them together",
      body: (
        <p>
          A light green and a deep green from different brands can share a house: Celery on bedroom or bathroom walls, Webster
          Green on kitchen cabinets or a study. Keep one consistent soft white for trim throughout so they feel related. Your
          painter can supply both brands; {BUSINESS.name} works with Sherwin-Williams and Benjamin Moore.
        </p>
      ),
    },
    {
      title: "Which should you choose?",
      body: (
        <Bullets
          items={[
            "Want the room to feel lighter and calmer: Celery.",
            "Want depth, contrast and a classic, tailored look: Webster Green.",
            "Painting cabinets: Webster Green for a bold statement; Celery for a soft, fresh look.",
            "Small, dim room: Celery on the walls, or Webster Green only as an accent.",
          ]}
        />
      ),
    },
    {
      title: "Always test physical samples",
      body: (
        <p>
          Actual appearance changes with lighting, surrounding materials and sheen, and screens can&apos;t show either green
          accurately. Test large physical samples in your own rooms before deciding. Read the full guides:{" "}
          <Link href="/blog/sherwin-williams-color-of-the-year-2027-celery-houston">Celery SW 6421</Link> and{" "}
          <Link href="/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston">Webster Green HC-130</Link>. Try
          ideas with our <Link href="/color-visualizer">color visualizer</Link> or book a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What's the difference between Celery and Webster Green?",
      a: "Celery SW 6421 is a light, airy herbal green with yellow undertones (LRV about 71). Webster Green HC-130 is a deep, confident green (LRV 20.2). Celery keeps rooms bright; Webster Green adds depth.",
    },
    {
      q: "Which 2027 Color of the Year is better for kitchen cabinets?",
      a: "Both can work. Webster Green gives a bold, classic look; Celery a soft, fresh one. Test each next to your counters and hardware.",
    },
    {
      q: "Can I use Celery and Webster Green in the same house?",
      a: "Yes. A light green on walls and a deep green on cabinets or a study work well together with one consistent soft white trim.",
    },
    {
      q: "Is one brand better than the other?",
      a: "No single brand is universally better; choose the color that suits the room. A painter can supply either.",
    },
  ],
  limitations: (
    <>
      Color facts are from Sherwin-Williams&apos; and Benjamin Moore&apos;s published pages, checked October 2026. Appearance
      changes with lighting, materials and sheen; confirm with physical samples. {BUSINESS.name} is not affiliated with or
      sponsored by either manufacturer.
    </>
  ),
  sources: [
    { label: "Sherwin-Williams: SW 6421 Celery", url: "https://www.sherwin-williams.com/sherwinwilliams/SW6421-celery" },
    { label: "Benjamin Moore: Webster Green HC-130", url: "https://www.benjaminmoore.com/en-us/paint-colors/color/hc-130/webster-green" },
  ],
  related: [
    { label: "Celery SW 6421 in Houston homes", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "Webster Green HC-130 in Houston homes", href: "/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston" },
    { label: "Benjamin Moore vs. Sherwin-Williams", href: "/blog/benjamin-moore-vs-sherwin-williams" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
