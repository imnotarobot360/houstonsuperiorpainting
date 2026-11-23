import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-10.
// Our cabinet products come only from BUSINESS.cabinetFinish (owner-confirmed).

const D: GuideArticleData = {
  path: "/blog/why-white-painted-cabinets-turn-yellow",
  title: "Why Painted White Cabinets Turn Yellow (and How to Prevent It)",
  description:
    "Oil-based yellowing, tannin bleed, cooking grease and low light: why white painted cabinets turn yellow, and the primers and coatings that prevent it.",
  h1: "Why painted white cabinets turn yellow (and how to prevent it)",
  eyebrow: "Cabinet guide",
  published: "2026-12-10",
  updated: "2026-12-10",
  quickAnswer: (
    <>
      White cabinets usually yellow for one of four reasons: an oil-based (alkyd) paint or clear coat that ambers with age,
      especially in darker spots; tannins from the wood bleeding through without a stain-blocking primer; cooking grease and
      smoke building up on the surface; or a warm white that simply looks yellower under warm bulbs. Prevention is a
      non-yellowing cabinet-grade coating over the right primer, regular gentle cleaning, and choosing the white under your
      own kitchen lighting.
    </>
  ),
  sections: [
    {
      title: "The four causes",
      body: (
        <Bullets
          items={[
            <><strong>Oil-based yellowing:</strong> traditional oil paints and some oil-modified enamels amber over time, and faster in low light, such as inside cabinets or under uppers.</>,
            <><strong>Tannin bleed:</strong> oak, cherry and some other woods release tannins that show as yellow-brown spots or a blotchy tint if not sealed with a stain-blocking primer.</>,
            <><strong>Grease and smoke:</strong> a sticky film over the stove and near the range hood that looks like yellowing but cleans off.</>,
            <><strong>Lighting and color choice:</strong> a creamy white under warm 2700K bulbs can read yellow; it isn&apos;t aging, it is the color.</>,
          ]}
        />
      ),
    },
    {
      title: "How to tell which one you have",
      body: (
        <Bullets
          items={[
            "Wipe a spot with warm water and dish soap: if it brightens, it's grease.",
            "Yellow spots in the grain or around knots point to tannin bleed.",
            "Even yellowing that is worst in dark spots, on cabinets painted years ago, points to an oil-based finish.",
            "Compare the doors in daylight and at night: if they only look yellow at night, it's the lighting.",
          ]}
        />
      ),
    },
    {
      title: "How it is prevented",
      body: (
        <p>
          We use {BUSINESS.cabinetFinish.sentence}. A stain-blocking primer goes on woods prone to tannin bleed. The cabinets
          need about {BUSINESS.cabinetFinish.cureDays} of gentle use while the finish cures. See{" "}
          <Link href="/blog/cabinet-paint-cure-time-houston">cabinet paint cure time</Link> and{" "}
          <Link href="/blog/fill-oak-grain-before-painting-cabinets">filling oak grain</Link>.
        </p>
      ),
    },
    {
      title: "Fixing cabinets that already yellowed",
      body: (
        <Bullets
          items={[
            "Grease: degrease gently and keep cleaning regularly.",
            "Tannin bleed or oil yellowing: clean, scuff-sand, spot-prime or fully prime with a stain-blocking primer, and recoat.",
            "Old oil-based finish under new latex: needs a bonding primer first. See latex paint over oil-based paint.",
            "Wrong white: repaint in a cleaner white tested under your lights.",
          ]}
        />
      ),
    },
    {
      title: "Choosing a white that stays white",
      body: (
        <p>
          Test sample doors or boards in the kitchen, morning and night, beside your counters. See{" "}
          <Link href="/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston">popular whites compared</Link> and{" "}
          <Link href="/blog/latex-paint-over-oil-based-paint">latex over oil-based paint</Link>. Cabinet painting typically
          runs {P.cabinetsPerKitchen} per kitchen as a 2026 planning range. See{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Why are my white cabinets turning yellow?",
      a: "Usually an oil-based finish ambering with age, tannins bleeding from the wood, grease buildup, or a warm white under warm lighting.",
    },
    {
      q: "Does latex cabinet paint turn yellow?",
      a: "Quality waterborne cabinet enamels resist yellowing far better than oil-based paints. Yellowing on them is more often tannin bleed or grease.",
    },
    {
      q: "How do you stop tannin bleed on cabinets?",
      a: "A stain-blocking primer before the topcoat, with spot-priming of any area that bleeds through.",
    },
    {
      q: "Can yellowed cabinets be fixed?",
      a: "Yes: clean, sand, prime with the right primer and recoat. Grease alone just needs cleaning.",
    },
  ],
  limitations: <>General guidance. Product data sheets describe each coating&apos;s yellowing resistance; prices are planning ranges.</>,
  related: [
    { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
    { label: "Should you fill oak grain?", href: "/blog/fill-oak-grain-before-painting-cabinets" },
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Popular whites compared", href: "/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston" },
  ],
  ctaTitle: "Get a written cabinet painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
