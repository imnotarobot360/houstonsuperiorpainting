import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-17.

const D: GuideArticleData = {
  path: "/blog/painting-metal-railings-gates-houston",
  title: "Painting Metal Railings, Gates and Fences in Houston",
  description:
    "How to paint iron and steel railings, gates and fences so rust doesn't come back in Houston humidity: rust removal, metal primer, topcoat and upkeep.",
  h1: "Painting metal railings, gates and fences in Houston",
  eyebrow: "Exterior guide",
  published: "2026-11-17",
  updated: "2026-11-17",
  quickAnswer: (
    <>
      On metal, the paint lasts only as long as the rust stays gone. Remove loose rust and flaking paint down to sound
      metal, clean off dust and oil, prime bare and rusted areas with a rust-inhibiting metal primer the same day, then
      apply two coats of a durable exterior enamel made for metal. In Houston&apos;s humidity, skipping the primer means
      rust bleeds back through within a season or two.
    </>
  ),
  sections: [
    {
      title: "The process",
      body: (
        <Steps
          items={[
            { title: "Remove rust and loose paint", text: "wire brush, scraper or sanding to sound metal; feather the edges of old paint." },
            { title: "Clean", text: "remove dust, oil and salts; let the metal dry completely." },
            { title: "Prime the same day", text: "a rust-inhibiting metal primer on bare and rusted spots before new rust forms." },
            { title: "Two topcoats", text: "a durable exterior enamel for metal; brushes reach ornamental details, spraying suits plain pickets." },
            { title: "Protect the surroundings", text: "mask brick, stone and plants; spraying needs careful overspray control." },
          ]}
        />
      ),
    },
    {
      title: "Galvanized and aluminum",
      body: (
        <p>
          New galvanized steel and aluminum don&apos;t take ordinary paint well: they need cleaning and a primer made for
          galvanized or non-ferrous metal. Ask before painting new galvanized railings, and never use a rust-converting
          product meant for steel on them.
        </p>
      ),
    },
    {
      title: "Colors and sheen",
      body: (
        <Bullets
          items={[
            "Black and dark bronze are the classic railing colors and hide minor wear.",
            "Satin or semi-gloss sheds water and dirt better than flat.",
            "Matching the railing to the window trim or the front door ties an exterior together.",
          ]}
        />
      ),
    },
    {
      title: "Upkeep",
      body: (
        <p>
          Look at railings and gates once a year: touch up chips and scratches before rust starts, and keep sprinklers from
          spraying metal every day. Older railings in homes built before 1978 may have lead paint; test before sanding. See{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link> and{" "}
          <Link href="/blog/fence-deck-painting-houston-tx">fence and deck painting</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint over rust on a metal railing?",
      a: "Only after removing loose rust down to sound metal and priming with a rust-inhibiting metal primer; painting over loose rust fails quickly.",
    },
    {
      q: "What primer is best for metal railings?",
      a: "A rust-inhibiting metal primer for steel and iron; galvanized steel and aluminum need a primer made for those metals.",
    },
    {
      q: "Should metal railings be sprayed or brushed?",
      a: "Brushing reaches ornamental details and avoids overspray; spraying is faster on plain pickets but needs careful masking.",
    },
    {
      q: "How often should metal railings be repainted?",
      a: "It depends on exposure; inspect yearly and touch up chips before rust starts.",
    },
  ],
  limitations: <>General guidance. Follow the primer and paint manufacturers&apos; instructions for the specific metal.</>,
  related: [
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Fence and deck painting", href: "/blog/fence-deck-painting-houston-tx" },
    { label: "Painting a front door in Houston sun", href: "/blog/front-door-paint-houston-sun" },
    { label: "Primer or two coats of paint?", href: "/blog/primer-vs-two-coats-paint-houston" },
  ],
  ctaTitle: "Get a written exterior estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
