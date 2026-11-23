import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-17.
// Facts from Sherwin-Williams' color service (checked 2026-10-22): LRV 4.458,
// Blue family, description, coordinates.

const URL_SW = "https://www.sherwin-williams.com/en-us/color/color-family/blue-paint-colors/sw6244-naval"

const D: GuideArticleData = {
  path: "/blog/naval-sw-6244-houston",
  title: "Naval SW 6244 in Houston Homes",
  description:
    "Sherwin-Williams' classic deep navy on cabinets, islands, doors, accent walls and exteriors, and the whites and metals that suit it in Houston homes.",
  h1: "Naval SW 6244 in Houston homes",
  eyebrow: "Color guide",
  published: "2027-01-17",
  updated: "2027-01-17",
  quickAnswer: (
    <>
      Naval SW 6244 is a deep navy (LRV about 4.5) that Sherwin-Williams describes as having a cool gray-green undertone and
      suggests for a study or office. It is one of the most popular colors for kitchen islands, cabinets, front doors and
      accent walls, and works on exteriors as an accent or body color on the right house. Brass, gold and warm whites
      soften it; crisp whites and black hardware make it modern. In bright sun it reads bluer; in shade, nearly black.
    </>
  ),
  sections: [
    {
      title: "Naval on screen",
      body: (
        <figure className="not-prose my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/art/naval-sw-6244-houston.png"
            alt="Naval SW 6244 swatch"
            width={1200}
            height={675}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Sherwin-Williams&apos; published on-screen value (hex #2F3D4C). Screens vary; test a sample.
          </figcaption>
        </figure>
      ),
    },
    {
      title: "Where it works",
      body: (
        <Bullets
          items={[
            "Kitchen islands and lower cabinets, with lighter uppers. See navy kitchen islands.",
            "Front doors, shutters and exterior accents on white, gray or brick homes.",
            "Studies, offices, dining rooms and bedrooms as a feature wall or full color.",
            "Bathroom vanities with brass or chrome.",
          ]}
        />
      ),
    },
    {
      title: "Pairings",
      body: (
        <p>
          Sherwin-Williams coordinates it with Icicle SW 6238, Ramie SW 6156 and Roycroft Suede SW 2842. Warm whites such as
          Alabaster SW 7008 keep it cozy. See <Link href="/blog/navy-kitchen-island-cabinet-color-houston-tx">navy kitchen islands</Link>,{" "}
          <Link href="/blog/painting-bathroom-vanity-houston">painting a bathroom vanity</Link>,{" "}
          <Link href="/blog/painting-home-office-houston">home office colors</Link> and{" "}
          <Link href="/blog/painting-media-game-room-houston">media rooms</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color is Naval?",
      a: "A deep navy blue. Sherwin-Williams says it has a cool gray-green undertone; its LRV is about 4.5.",
    },
    {
      q: "Is Naval good for kitchen cabinets?",
      a: "Yes, it's one of the most popular navy cabinet and island colors, in a cabinet-grade enamel.",
    },
    {
      q: "What hardware goes with Naval cabinets?",
      a: "Brass and gold for a warm, classic look; black or nickel for a cooler, modern one.",
    },
    {
      q: "Does Naval look black?",
      a: "In shade and low light it can read nearly black; bright light brings out the blue.",
    },
  ],
  limitations: (
    <>
      Facts from Sherwin-Williams, checked October 2026; on-screen colors are approximate. {BUSINESS.name} is not affiliated
      with or sponsored by Sherwin-Williams.
    </>
  ),
  sources: [{ label: "Sherwin-Williams: Naval SW 6244", url: URL_SW }],
  related: [
    { label: "Navy kitchen islands", href: "/blog/navy-kitchen-island-cabinet-color-houston-tx" },
    { label: "Tricorn Black SW 6258", href: "/blog/tricorn-black-sw-6258-houston" },
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
