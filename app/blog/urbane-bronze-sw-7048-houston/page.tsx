import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-04.
// Facts from Sherwin-Williams' color service (checked 2026-10-22): LRV 8.121,
// Neutral family, interior and exterior, description, coordinating colors.

const URL_SW = "https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors/sw7048-urbane-bronze"

const D: GuideArticleData = {
  path: "/blog/urbane-bronze-sw-7048-houston",
  title: "Urbane Bronze SW 7048 in Houston Homes",
  description:
    "Sherwin-Williams' deep brownish-gray bronze: where it works inside and out, the whites and colors that pair with it, and how it looks in Houston sun.",
  h1: "Urbane Bronze SW 7048 in Houston homes",
  eyebrow: "Color guide",
  published: "2027-01-04",
  updated: "2027-01-04",
  quickAnswer: (
    <>
      Urbane Bronze SW 7048 is a deep brownish gray that Sherwin-Williams describes as &quot;rooted in nature&quot;. With an
      LRV of about 8, it is very dark, softer and warmer than black. It is popular on front doors, shutters, window trim,
      cabinets, islands and accent walls, and as a body color on modern homes. Pair it with soft whites such as Shoji White
      SW 7042 or Extra White SW 7006. In strong Houston sun, a dark color like this gets hot and fades faster on south and
      west walls, so use a fade-resistant exterior product.
    </>
  ),
  sections: [
    {
      title: "Urbane Bronze on screen",
      body: (
        <figure className="not-prose my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/art/urbane-bronze-sw-7048-houston.png"
            alt="Urbane Bronze SW 7048 swatch"
            width={1200}
            height={675}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Sherwin-Williams&apos; published on-screen value (hex #54504A). Screens vary; test a sample.
          </figcaption>
        </figure>
      ),
    },
    {
      title: "Where it works",
      body: (
        <Bullets
          items={[
            <><strong>Exteriors:</strong> front doors, shutters, window trim and garage doors; full body color on modern and farmhouse homes.</>,
            <><strong>Cabinets and islands:</strong> a warm alternative to black or navy, especially with brass or black hardware.</>,
            <><strong>Interiors:</strong> accent walls, built-ins, powder rooms and studies.</>,
          ]}
        />
      ),
    },
    {
      title: "What pairs with it",
      body: (
        <Bullets
          items={[
            "Sherwin-Williams coordinates: Shoji White SW 7042, Extra White SW 7006 and Ivoire SW 6127.",
            "Warm wood, cream stone and red or orange brick.",
            "Greige walls such as Agreeable Gray SW 7029 with Urbane Bronze accents.",
          ]}
        />
      ),
    },
    {
      title: "In Houston light",
      body: (
        <p>
          Bright sun brings out the brown; shade and evening make it read nearly charcoal. On sunny exterior walls, dark
          colors absorb more heat, so choose a fade-resistant product and avoid it on vinyl unless the color is vinyl-safe.
          See <Link href="/blog/painting-vinyl-siding-houston">painting vinyl siding</Link>,{" "}
          <Link href="/blog/front-door-paint-houston-sun">front doors in Houston sun</Link> and{" "}
          <Link href="/blog/exterior-paint-color-mistakes-houston">exterior color mistakes</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color is Urbane Bronze?",
      a: "A deep brownish gray. Sherwin-Williams lists it in its Neutral family with an LRV of about 8.",
    },
    {
      q: "What white goes with Urbane Bronze?",
      a: "Sherwin-Williams pairs it with Shoji White SW 7042 and Extra White SW 7006.",
    },
    {
      q: "Is Urbane Bronze good for a front door?",
      a: "Yes. It's a popular front door color: warmer and softer than black. Use a fade-resistant exterior product in direct sun.",
    },
    {
      q: "Is Urbane Bronze too dark for a house exterior?",
      a: "It works as a body color on many homes, but dark colors run hotter and fade faster in Houston sun. Test a large sample first.",
    },
  ],
  limitations: (
    <>
      Facts from Sherwin-Williams, checked October 2026; on-screen colors are approximate. {BUSINESS.name} is not affiliated
      with or sponsored by Sherwin-Williams.
    </>
  ),
  sources: [{ label: "Sherwin-Williams: Urbane Bronze SW 7048", url: URL_SW }],
  related: [
    { label: "Front doors in Houston sun", href: "/blog/front-door-paint-houston-sun" },
    { label: "Painting shutters", href: "/blog/painting-shutters-houston" },
    { label: "Exterior color mistakes", href: "/blog/exterior-paint-color-mistakes-houston" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
