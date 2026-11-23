import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Section } from "@/components/aeo/blocks"
import { VisualizerWithEstimate } from "@/components/visualizer-with-estimate"
import { BRAND_DISCLAIMER } from "@/data/paint-colors"
import { BUSINESS } from "@/lib/business"

// Color visualizer (owner brief 2026-10-14). Launched 2026-10-15 after Juan's
// approval: indexable, in the sitemap, and linked from the header Services menu,
// the color consultation, cabinet and interior pages.

const URL = `${BUSINESS.url}/color-visualizer`

const PAGE_META = {
  title: "Paint Color Visualizer | Try Colors on Your Own Photo",
  description:
    "Try paint colors on a photo of your room, house or cabinets. Runs in your browser; your photo isn't uploaded. Colors are approximate; confirm with a sample.",
  alternates: { canonical: URL },
}

// Own Open Graph block so link previews and og:url match this page, not the
// homepage defaults in app/layout.tsx (owner brief 2026-10-25, phase 11).
export const metadata: Metadata = {
  ...PAGE_META,
  openGraph: {
    title: PAGE_META.title,
    description: PAGE_META.description,
    url: PAGE_META.alternates.canonical,
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
  },
}

export default function ColorVisualizerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero h1="Paint Color Visualizer" eyebrow="Try a color on your own photo" />
        <section className="container mx-auto max-w-6xl px-4 pb-16">
          <ol className="mb-6 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Choose a photo of the room, house or cabinets.</li>
            <li>
              With <strong>AI select</strong>, tap a wall, door or cabinet and the AI outlines it; tap more areas to add them.
              The AI runs on your device: the first time, your browser downloads the AI model, and your photo is never sent.
              You can also paint the area with the brush, use Tap to fill, or erase.
            </li>
            <li>Pick a color, adjust coverage, and drag the compare slider to see before and after.</li>
            <li>Download the preview, or send the color with a free estimate request.</li>
          </ol>
          <VisualizerWithEstimate />
        </section>
        <Section title="About these colors">
          <p>
            {BRAND_DISCLAIMER} For help choosing, see our{" "}
            <Link href="/paint-color-consultation-houston">free color consultation</Link>.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
