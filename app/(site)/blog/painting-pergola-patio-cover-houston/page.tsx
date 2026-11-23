import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-10.
// General guidance; no pergola price confirmed, so quoted per job.

const D: GuideArticleData = {
  path: "/blog/painting-pergola-patio-cover-houston",
  title: "Painting or Staining a Pergola or Patio Cover",
  description:
    "Paint vs. stain on pergolas and patio covers, repairing weathered boards, reaching the rafters, and finishes that last in Houston sun and rain.",
  h1: "Painting or staining a pergola or patio cover",
  eyebrow: "Exterior guide",
  published: "2027-01-10",
  updated: "2027-01-10",
  quickAnswer: (
    <>
      Pergolas and patio covers take full sun, rain and humidity, so they weather faster than the house. Stain (semi-
      transparent or solid) suits cedar and rough-sawn wood and wears gradually; paint gives a crisp, uniform look that
      matches the trim but needs scraping where it peels. Either way, the wood must be cleaned, dry and repaired first, and
      the tops of beams and rafters need extra attention because water sits there.
    </>
  ),
  sections: [
    {
      title: "Paint or stain?",
      body: (
        <Bullets
          items={[
            <><strong>Semi-transparent stain:</strong> shows the wood grain; needs recoating more often but never peels.</>,
            <><strong>Solid stain:</strong> covers like paint, shows texture, wears by fading.</>,
            <><strong>Paint:</strong> crisp, any color, matches the house trim; prep and primer matter most.</>,
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Inspect", text: "soft rafters, split boards and loose fasteners are fixed first." },
            { title: "Clean", text: "mildew, dirt and gray weathered wood; let it dry fully." },
            { title: "Sand or scrape", text: "loose paint off; edges feathered." },
            { title: "Prime (for paint)", text: "stain-blocking primer on cedar and bare wood." },
            { title: "Coat", text: "two coats of paint or solid stain, or stain per the label." },
          ]}
        />
      ),
    },
    {
      title: "Houston conditions",
      body: (
        <Bullets
          items={[
            "Tops of beams and rafter ends hold water: seal and coat them carefully.",
            "Full sun fades dark colors and dries stain fast; work in the cooler part of the day.",
            "Shade and humidity grow mildew; clean it off and use a mildew-resistant product.",
          ]}
        />
      ),
    },
    {
      title: "Getting it done",
      body: (
        <p>
          Pergolas are quoted per job. See <Link href="/blog/fence-deck-painting-houston-tx">fence and deck painting</Link>,{" "}
          <Link href="/blog/painting-cedar-wood-siding-houston">painting or staining cedar</Link>,{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Should I paint or stain my pergola?",
      a: "Stain suits cedar and rough wood and wears gradually; paint gives a crisp look matched to the trim. Both need clean, dry, sound wood.",
    },
    {
      q: "How often does a pergola need to be restained in Houston?",
      a: "More often than the house, because of full sun and rain. Semi-transparent stains need recoating soonest.",
    },
    {
      q: "Can you paint a pressure-treated pergola?",
      a: "Yes, once the wood has dried out enough. Fresh pressure-treated wood often needs time before coating.",
    },
    {
      q: "Do you paint patio covers and pergolas?",
      a: "Yes, usually along with the trim or a full exterior, or on their own.",
    },
  ],
  limitations: <>General guidance; product labels control dry times and recoat intervals.</>,
  related: [
    { label: "Fence and deck painting", href: "/blog/fence-deck-painting-houston-tx" },
    { label: "Painting or staining cedar", href: "/blog/painting-cedar-wood-siding-houston" },
    { label: "Wood rot repair before painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
