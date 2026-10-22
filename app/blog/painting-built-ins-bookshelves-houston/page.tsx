import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-01.
// Coatings from BUSINESS.cabinetFinish; no built-in price confirmed, so quoted per job.

const D: GuideArticleData = {
  path: "/blog/painting-built-ins-bookshelves-houston",
  title: "Painting Built-Ins and Bookshelves",
  description:
    "Prep, primer and cabinet-grade enamel for built-in cabinets and shelves, avoiding sticky shelves, and colors that make built-ins look custom.",
  h1: "Painting built-ins and bookshelves",
  eyebrow: "Interior guide",
  published: "2027-01-01",
  updated: "2027-01-01",
  quickAnswer: (
    <>
      Built-ins and bookshelves should be painted like cabinets, not walls: cleaned, sanded, primed and finished with a
      hard cabinet-grade enamel. Wall paint stays soft and sticky on shelves, so books and decor can stick to it for weeks
      (often called blocking). Give the finish time to cure before loading shelves. Painting built-ins a contrasting or
      deeper color than the walls is one of the easiest ways to make a room look custom.
    </>
  ),
  sections: [
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Empty and clean", text: "remove everything, then degrease; shelves collect dust and oils." },
            { title: "Sand and fill", text: "scuff the old finish, fill holes and caulk gaps where shelves meet the frame." },
            { title: "Prime", text: "a bonding primer over stained or glossy wood; stain-blocking where wood may bleed." },
            { title: "Cabinet-grade enamel", text: `we use ${BUSINESS.cabinetFinish.sentence}.` },
            { title: "Let it cure", text: `about ${BUSINESS.cabinetFinish.cureDays} of light use before loading heavy books.` },
          ]}
        />
      ),
    },
    {
      title: "Avoiding sticky shelves",
      body: (
        <Bullets
          items={[
            "Use a cabinet-grade enamel, not wall paint.",
            "Thin, even coats with full dry time between them.",
            "Load shelves gradually; put felt pads under heavy objects at first.",
          ]}
        />
      ),
    },
    {
      title: "Color ideas",
      body: (
        <Bullets
          items={[
            "Deep and classic: Webster Green HC-130 (Benjamin Moore), Naval SW 6244 or Urbane Bronze SW 7048 against lighter walls.",
            "Quiet and built-in: the wall color in a harder, shinier sheen.",
            "Two-tone: a darker back panel with lighter shelves and frame.",
          ]}
        />
      ),
    },
    {
      title: "Getting it done",
      body: (
        <p>
          Built-ins are quoted per job, because size and the number of shelves vary so much. See{" "}
          <Link href="/blog/painting-home-office-houston">home office colors</Link>,{" "}
          <Link href="/blog/paint-stained-wood-trim-houston">painting stained wood</Link>,{" "}
          <Link href="/blog/cabinet-paint-cure-time-houston">cabinet paint cure time</Link> and{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What paint should I use on built-in bookshelves?",
      a: "A cabinet-grade enamel over a bonding primer. Wall paint stays soft, and books can stick to it.",
    },
    {
      q: "Why are my painted shelves sticky?",
      a: "Usually the wrong paint or not enough cure time. Cabinet-grade enamels harden; wall paints can stay tacky for weeks under weight.",
    },
    {
      q: "How long before I can put books back on painted shelves?",
      a: `Light items within days; heavy loads after about ${BUSINESS.cabinetFinish.cureDays} of cure time.`,
    },
    {
      q: "Should built-ins match the walls?",
      a: "Either works: matching in a shinier sheen looks quiet and built-in, while a contrasting or deeper color makes them a feature.",
    },
  ],
  limitations: <>General guidance; product data sheets give exact recoat and cure times.</>,
  related: [
    { label: "Home office colors and finishes", href: "/blog/painting-home-office-houston" },
    { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Should you paint stained trim?", href: "/blog/paint-stained-wood-trim-houston" },
  ],
  ctaTitle: "Get a written painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
