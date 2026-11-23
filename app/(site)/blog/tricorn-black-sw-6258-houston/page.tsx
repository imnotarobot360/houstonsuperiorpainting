import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-14.
// Facts from Sherwin-Williams' color service (checked 2026-10-22): LRV 2.849,
// description ("true black ... works with any undertone"), coordinates.

const URL_SW = "https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors/sw6258-tricorn-black"

const D: GuideArticleData = {
  path: "/blog/tricorn-black-sw-6258-houston",
  title: "Tricorn Black SW 6258 in Houston Homes",
  description:
    "Sherwin-Williams' true black on front doors, shutters, window trim, cabinets and accent walls, plus how black handles Houston heat and sun.",
  h1: "Tricorn Black SW 6258 in Houston homes",
  eyebrow: "Color guide",
  published: "2027-01-14",
  updated: "2027-01-14",
  quickAnswer: (
    <>
      Tricorn Black SW 6258 is Sherwin-Williams&apos; true black, with an LRV of about 3. Sherwin-Williams says it works with
      any undertone and pairs it with white for classic contrast. It is a favorite for front doors, shutters, window trim,
      railings, cabinets and accent walls. Outside in Houston, black absorbs the most heat of any color, so use a
      fade-resistant exterior product, keep it to doors and accents on sunny walls, and never use it on vinyl unless the
      product is rated vinyl-safe for that color.
    </>
  ),
  sections: [
    {
      title: "Tricorn Black on screen",
      body: (
        <figure className="not-prose my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/art/tricorn-black-sw-6258-houston.png"
            alt="Tricorn Black SW 6258 swatch"
            width={1200}
            height={675}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Sherwin-Williams&apos; published on-screen value (hex #2F2F30). Screens vary; test a sample.
          </figcaption>
        </figure>
      ),
    },
    {
      title: "Where it works",
      body: (
        <Bullets
          items={[
            "Front doors, especially in semi-gloss or gloss.",
            "Shutters, window trim, railings and light fixtures on white, cream or brick homes.",
            "Interior doors, islands, built-ins and a feature wall.",
          ]}
        />
      ),
    },
    {
      title: "Black in Houston heat",
      body: (
        <Bullets
          items={[
            "Black surfaces in direct sun get very hot; choose a fade-resistant exterior product.",
            "Glossy black shows dust and every dent; prep and a smooth surface matter.",
            "Vinyl shutters and siding: only vinyl-safe colors; see painting vinyl siding.",
          ]}
        />
      ),
    },
    {
      title: "Pairings and alternatives",
      body: (
        <p>
          Sherwin-Williams coordinates it with Ice Cube SW 6252, Classic Light Buff SW 0050 and Blithe Blue SW 9052. For a
          softer look, try <Link href="/blog/urbane-bronze-sw-7048-houston">Urbane Bronze</Link> or Iron Ore SW 7069. See{" "}
          <Link href="/blog/black-interior-trim-doors-houston">black interior doors and trim</Link>,{" "}
          <Link href="/blog/painting-vinyl-siding-houston">painting vinyl siding</Link> and{" "}
          <Link href="/blog/front-door-paint-houston-sun">front doors in Houston sun</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is Tricorn Black a true black?",
      a: "Yes. Sherwin-Williams describes it as a true black that works with any undertone, with an LRV of about 3.",
    },
    {
      q: "Is Tricorn Black good for a front door?",
      a: "Yes, it's a classic front door color. Use a fade-resistant exterior enamel, often in semi-gloss or gloss.",
    },
    {
      q: "Can I use black paint on vinyl shutters?",
      a: "Only if the product is rated vinyl-safe for that color; dark colors can warp vinyl in Houston sun.",
    },
    {
      q: "What is a softer alternative to Tricorn Black?",
      a: "Iron Ore SW 7069 or Urbane Bronze SW 7048, which read as charcoal and bronze.",
    },
  ],
  limitations: (
    <>
      Facts from Sherwin-Williams, checked October 2026; on-screen colors are approximate. {BUSINESS.name} is not affiliated
      with or sponsored by Sherwin-Williams.
    </>
  ),
  sources: [{ label: "Sherwin-Williams: Tricorn Black SW 6258", url: URL_SW }],
  related: [
    { label: "Black interior doors and trim", href: "/blog/black-interior-trim-doors-houston" },
    { label: "Urbane Bronze SW 7048", href: "/blog/urbane-bronze-sw-7048-houston" },
    { label: "Painting shutters", href: "/blog/painting-shutters-houston" },
    { label: "Front doors in Houston sun", href: "/blog/front-door-paint-houston-sun" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
