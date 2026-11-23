import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-19.
// Facts from Sherwin-Williams' color service (checked 2026-10-22): LRV 63.233,
// Green family, description, coordinates.

const URL_SW = "https://www.sherwin-williams.com/en-us/color/color-family/green-paint-colors/sw6204-sea-salt"

const D: GuideArticleData = {
  path: "/blog/sea-salt-sw-6204-houston",
  title: "Sea Salt SW 6204 in Houston Homes",
  description:
    "Sherwin-Williams' soft green with blue undertones: bedrooms, baths and kitchens, how it shifts in Houston light, and the whites and colors that pair with it.",
  h1: "Sea Salt SW 6204 in Houston homes",
  eyebrow: "Color guide",
  published: "2027-01-19",
  updated: "2027-01-19",
  quickAnswer: (
    <>
      Sea Salt SW 6204 is a light, muted green with blue undertones (LRV about 63) that Sherwin-Williams says makes
      &quot;every day feel like a relaxing beach day&quot;. It is a favorite for bathrooms, bedrooms and laundry rooms, and
      works in kitchens and on cabinets for a soft, coastal look. It changes a lot with light: in warm Houston sun it reads
      greener, and in north light or shade it can look gray-blue. Pair it with white trim, as Sherwin-Williams suggests.
    </>
  ),
  sections: [
    {
      title: "Sea Salt on screen",
      body: (
        <figure className="not-prose my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/art/sea-salt-sw-6204-houston.png"
            alt="Sea Salt SW 6204 swatch"
            width={1200}
            height={675}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Sherwin-Williams&apos; published on-screen value (hex #CDD2CA). It shifts a lot with light; test a sample.
          </figcaption>
        </figure>
      ),
    },
    {
      title: "Where it works",
      body: (
        <Bullets
          items={[
            "Bathrooms and powder rooms, with white tile and chrome or brass.",
            "Bedrooms for a calm, airy feel. See calm bedroom colors.",
            "Laundry rooms and mudrooms.",
            "Kitchen walls or cabinets for a soft coastal look.",
          ]}
        />
      ),
    },
    {
      title: "Pairings",
      body: (
        <p>
          Sherwin-Williams coordinates it with Spare White SW 6203, Fleur de Sel SW 7666 and Summit Gray SW 7669. It sits
          well beside Evergreen Fog SW 9130 for a deeper accent. See{" "}
          <Link href="/blog/bedroom-paint-colors-for-sleep-houston">calm bedroom colors</Link>,{" "}
          <Link href="/blog/best-paint-bathrooms-laundry-rooms-houston">the best paint for bathrooms</Link> and{" "}
          <Link href="/blog/north-vs-south-facing-room-paint-colors-houston">how light direction changes color</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is Sea Salt green, blue or gray?",
      a: "Sherwin-Williams lists it as a muted green with blue undertones. Depending on light it can read greener, bluer or grayer.",
    },
    {
      q: "What trim color goes with Sea Salt?",
      a: "White trim, which Sherwin-Williams suggests; Spare White SW 6203 is one of its coordinating colors.",
    },
    {
      q: "Is Sea Salt good for a bathroom?",
      a: "Yes, it's one of the most popular bathroom colors. Use a moisture-resistant, scrubbable product.",
    },
    {
      q: "What is Sea Salt's LRV?",
      a: "About 63, so it's a light color that keeps rooms bright.",
    },
  ],
  limitations: (
    <>
      Facts from Sherwin-Williams, checked October 2026; on-screen colors are approximate. {BUSINESS.name} is not affiliated
      with or sponsored by Sherwin-Williams.
    </>
  ),
  sources: [{ label: "Sherwin-Williams: Sea Salt SW 6204", url: URL_SW }],
  related: [
    { label: "Calm bedroom colors", href: "/blog/bedroom-paint-colors-for-sleep-houston" },
    { label: "Best paint for bathrooms", href: "/blog/best-paint-bathrooms-laundry-rooms-houston" },
    { label: "Colors for small rooms", href: "/blog/paint-colors-small-rooms-houston" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
