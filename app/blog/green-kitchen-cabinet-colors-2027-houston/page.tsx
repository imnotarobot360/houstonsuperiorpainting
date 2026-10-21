import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Owner brief 2026-10-19 (BM 2027 series, post 5 of 5). Color facts as in the
// Celery and Webster Green posts. Art: the two colors as swatches, using each
// brand's published on-screen value (scripts/blog-art/generate.mjs). The
// Richmond sage kitchen photos were removed 2026-10-21 (owner: the photo color
// didn't match the 2027 greens). Prices from PRICES_2026.

const D: GuideArticleData = {
  path: "/blog/green-kitchen-cabinet-colors-2027-houston",
  title: "Are Green Kitchen Cabinets Still in Style for 2027?",
  description:
    "Both 2027 Colors of the Year are greens. Dark vs. light green cabinets, countertops and hardware that work with them, oak grain, and the right cabinet coating.",
  h1: "Are green kitchen cabinets still in style for 2027?",
  eyebrow: "Cabinet guide",
  published: "2026-10-27",
  updated: "2026-10-27",
  quickAnswer: (
    <>
      Yes. Both major paint brands chose greens for 2027: Benjamin Moore&apos;s deep Webster Green HC-130, which Benjamin
      Moore suggests for kitchen cabinetry, and Sherwin-Williams&apos; light Celery SW 6421. Green cabinets now come in two
      directions: deep and classic, or light and fresh. The right one depends on your kitchen&apos;s light, countertops and
      hardware, and a lasting finish depends on prep and a cabinet-grade coating such as {BUSINESS.cabinetFinish.products[0]}.
    </>
  ),
  sections: [
    {
      title: "Webster Green HC-130 and Celery SW 6421",
      body: (
        <Bullets
          items={[
            <><strong>Webster Green HC-130 (Benjamin Moore):</strong> a deep, confident green (LRV 20.2). Bold on a full kitchen, striking on an island or lower cabinets with lighter uppers. See <Link href="/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston">Webster Green in Houston homes</Link>.</>,
            <><strong>Celery SW 6421 (Sherwin-Williams):</strong> a light, airy herbal green (LRV about 71) with yellow undertones. Soft and fresh on a full kitchen. See <Link href="/blog/where-to-use-celery-sw-6421">where to use Celery</Link>.</>,
            <>Compare them in <Link href="/blog/celery-vs-webster-green-2027-color-of-the-year">Celery vs. Webster Green</Link>.</>,
          ]}
        />
      ),
    },
    {
      title: "Dark vs. light green cabinets",
      body: (
        <Bullets
          items={[
            <><strong>Dark green</strong> hides everyday marks, adds drama and suits traditional and transitional kitchens; it needs good light, and a light countertop and backsplash to keep the room from feeling heavy.</>,
            <><strong>Light green</strong> keeps a small or dim kitchen bright and pairs easily with white counters; it shows scuffs a little more on lower cabinets.</>,
            <><strong>Two-tone:</strong> deep green lowers or island with light green or white uppers is a safe way to try a bold color.</>,
          ]}
        />
      ),
    },
    {
      title: "Countertops",
      body: (
        <Bullets
          items={[
            "White and light quartz: crisp with deep green; clean and calm with light green.",
            "Natural stone with warm veining (creams, golds, browns) suits deep green especially well.",
            "Very cool gray or blue-white stone can make a yellow-leaning light green look more yellow; test samples side by side.",
          ]}
        />
      ),
    },
    {
      title: "Hardware",
      body: (
        <Bullets
          items={[
            <><strong>Brass and gold:</strong> the classic pairing with deep green.</>,
            <><strong>Black:</strong> crisp and modern, especially on light green.</>,
            <><strong>Nickel and chrome:</strong> cooler and quieter; works with light greens and gray-leaning stone.</>,
          ]}
        />
      ),
    },
    {
      title: "The two 2027 greens side by side",
      body: (
        <figure className="not-prose my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blog/art/green-kitchen-cabinet-colors-2027-houston.png"
            alt="Webster Green HC-130 and Celery SW 6421 swatches side by side"
            width={1200}
            height={675}
            className="w-full rounded-lg border border-border"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Each brand&apos;s published on-screen value: Webster Green HC-130 (#64806C) and Celery SW 6421 (#E0DDBD). On
            cabinets, the sheen and your kitchen light change both; test a sample door.
          </figcaption>
        </figure>
      ),
    },
    {
      title: "Oak cabinets: fill the grain?",
      body: (
        <p>
          Oak grain shows through paint. A deep green highlights the texture more than a light one; for a smooth modern look,
          grain filling before primer is the answer, quoted as a separate line on the estimate.
        </p>
      ),
    },
    {
      title: "The right cabinet coating",
      body: (
        <p>
          Cabinets take daily handling, so they need a cabinet-grade enamel, not wall paint. We use{" "}
          {BUSINESS.cabinetFinish.sentence}, and cabinets need about {BUSINESS.cabinetFinish.cureDays} of gentle use while the
          finish cures. Cabinet painting typically runs {P.cabinetsPerKitchen} per kitchen as a 2026 planning range. See{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Are green kitchen cabinets still in style for 2027?",
      a: "Yes. Both 2027 Colors of the Year are greens: Benjamin Moore's deep Webster Green HC-130, which it suggests for cabinetry, and Sherwin-Williams' light Celery SW 6421.",
    },
    {
      q: "Should green cabinets be dark or light?",
      a: "Dark green suits well-lit, traditional or transitional kitchens and hides marks; light green keeps small or dim kitchens bright. A two-tone kitchen combines both.",
    },
    {
      q: "What hardware goes with green cabinets?",
      a: "Brass and gold are classic with deep green; black is crisp and modern; nickel and chrome are cooler and quieter.",
    },
    {
      q: "What paint is best for green kitchen cabinets?",
      a: "A cabinet-grade enamel such as Benjamin Moore Command over a bonding primer, with about 7–10 days of gentle use while it cures.",
    },
  ],
  limitations: (
    <>
      Color facts and on-screen swatch values are from Sherwin-Williams&apos; and Benjamin Moore&apos;s published pages,
      checked October 2026; screen colors are approximate. Prices are planning ranges. Confirm colors with physical
      samples.
    </>
  ),
  related: [
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Webster Green HC-130", href: "/blog/benjamin-moore-color-of-the-year-2027-webster-green-houston" },
    { label: "Celery vs. Webster Green", href: "/blog/celery-vs-webster-green-2027-color-of-the-year" },
    { label: "Celery SW 6421: where to use it", href: "/blog/where-to-use-celery-sw-6421" },
  ],
  ctaTitle: "Get a written cabinet painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
