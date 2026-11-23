import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-24.
// Facts from Sherwin-Williams' color service (checked 2026-10-22): LRV 30.402,
// Green family, description, coordinates.

const URL_SW = "https://www.sherwin-williams.com/en-us/color/color-family/green-paint-colors/sw9130-evergreen-fog"

const D: GuideArticleData = {
  path: "/blog/evergreen-fog-sw-9130-houston",
  title: "Evergreen Fog SW 9130 in Houston Homes",
  description:
    "Sherwin-Williams' muted green-gray on walls, cabinets and exteriors, what pairs with it, and how it compares with the 2027 greens, Celery and Webster Green.",
  h1: "Evergreen Fog SW 9130 in Houston homes",
  eyebrow: "Color guide",
  published: "2027-01-24",
  updated: "2027-01-24",
  quickAnswer: (
    <>
      Evergreen Fog SW 9130 is a muted green-gray with a bit of blue (LRV about 30) that Sherwin-Williams calls a
      &quot;chameleon&quot; color and suggests for bedrooms. It sits between light Celery SW 6421 and deep Webster Green HC-130:
      deep enough for cabinets, islands and accent walls, soft enough for whole rooms with good light. In Houston sun it
      reads greener; in shade and north light it reads grayer.
    </>
  ),
  sections: [
    {
      title: "Evergreen Fog on screen",
      body: (
        <figure className="not-prose my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/art/evergreen-fog-sw-9130-houston.png"
            alt="Evergreen Fog SW 9130 swatch"
            width={1200}
            height={675}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Sherwin-Williams&apos; published on-screen value (hex #95978A). Screens vary; test a sample.
          </figcaption>
        </figure>
      ),
    },
    {
      title: "Where it works",
      body: (
        <Bullets
          items={[
            "Bedrooms and offices, for a calm, grounded feel.",
            "Kitchen cabinets and islands, a softer alternative to deep green.",
            "Exterior body or shutters on homes with warm brick or stone.",
            "Bathroom vanities and laundry rooms.",
          ]}
        />
      ),
    },
    {
      title: "Pairings and the 2027 greens",
      body: (
        <p>
          Sherwin-Williams coordinates it with Ethereal White SW 6182, Neutral Ground SW 7568 and Dried Edamame SW 9122.
          Compared with the 2027 Colors of the Year, it&apos;s deeper than Celery and lighter and grayer than Webster Green.
          See <Link href="/blog/celery-vs-webster-green-2027-color-of-the-year">Celery vs. Webster Green</Link>,{" "}
          <Link href="/blog/green-kitchen-cabinet-colors-2027-houston">green kitchen cabinets for 2027</Link> and{" "}
          <Link href="/blog/bedroom-paint-colors-for-sleep-houston">calm bedroom colors</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color is Evergreen Fog?",
      a: "A muted green-gray with a bit of blue. Sherwin-Williams lists it in its Green family with an LRV of about 30.",
    },
    {
      q: "Is Evergreen Fog good for kitchen cabinets?",
      a: "Yes, it's a popular softer green for cabinets and islands, in a cabinet-grade enamel.",
    },
    {
      q: "How does Evergreen Fog compare with Webster Green?",
      a: "Evergreen Fog is lighter and grayer; Webster Green HC-130 is a deeper, more saturated green.",
    },
    {
      q: "What white goes with Evergreen Fog?",
      a: "Sherwin-Williams coordinates it with Ethereal White SW 6182; soft warm whites work well.",
    },
  ],
  limitations: (
    <>
      Facts from Sherwin-Williams, checked October 2026; on-screen colors are approximate. {BUSINESS.name} is not affiliated
      with or sponsored by Sherwin-Williams.
    </>
  ),
  sources: [{ label: "Sherwin-Williams: Evergreen Fog SW 9130", url: URL_SW }],
  related: [
    { label: "Celery vs. Webster Green", href: "/blog/celery-vs-webster-green-2027-color-of-the-year" },
    { label: "Green kitchen cabinets for 2027", href: "/blog/green-kitchen-cabinet-colors-2027-houston" },
    { label: "Sea Salt SW 6204", href: "/blog/sea-salt-sw-6204-houston" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
