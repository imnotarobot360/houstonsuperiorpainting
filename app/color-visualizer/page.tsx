import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero, Section } from "@/components/aeo/blocks"
import { VisualizerWithEstimate } from "@/components/visualizer-with-estimate"
import { BRAND_DISCLAIMER } from "@/data/paint-colors"
import { BUSINESS } from "@/lib/business"

// Color visualizer (owner brief 2026-10-14). HIDDEN until the owner approves it:
// noindex here, excluded in app/sitemap.ts, and not linked from any page or menu.
// To launch: remove `robots` below, drop 'color-visualizer' from EXCLUDED in
// app/sitemap.ts, and add links (color consultation, cabinet and interior pages).

const URL = `${BUSINESS.url}/color-visualizer`

export const metadata: Metadata = {
  title: "Paint Color Visualizer | Try Colors on Your Own Photo",
  description:
    "Try paint colors on a photo of your room, house or cabinets. Runs in your browser; your photo is not uploaded. Colors are approximate; confirm with a physical sample.",
  alternates: { canonical: URL },
  robots: { index: false, follow: false },
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
            <li>Paint over the area to recolor, or use Tap to fill on a wall or door. Erase anything you didn&apos;t mean to select.</li>
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
