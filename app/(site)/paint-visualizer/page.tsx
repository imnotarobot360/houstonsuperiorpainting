import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/aeo/blocks"
import { ExteriorVisualizer } from "@/components/paint-visualizer/exterior-visualizer"
import { BUSINESS } from "@/lib/business"

// Exterior paint visualizer (owner brief 2026-10-16). NOT LAUNCHED: noindex,
// excluded from the sitemap (app/sitemap.ts) and not linked from the menu until
// Juan approves it and a TEST request has been verified end to end. Requests
// are dry-run everywhere except the production domain (lib/visualizer/request.ts).
// See docs/paint-visualizer.md.

export const metadata: Metadata = {
  title: "Exterior Paint Visualizer | See Your Home in New Colors",
  description:
    "Preview exterior color ideas on a photo of your home, then request a free written estimate from Houston Superior Painting. Digital previews are approximate.",
  alternates: { canonical: `${BUSINESS.url}/paint-visualizer` },
  robots: { index: false, follow: true },
}

export default function PaintVisualizerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero h1="See Your Home in New Colors" eyebrow="Exterior paint visualizer">
          <p className="mt-4 max-w-2xl text-lg text-soft-white/85">
            Preview exterior color ideas for your home, then request a free written estimate from Houston Superior Painting.
          </p>
          <p className="mt-4 max-w-2xl rounded-lg border border-gold/40 bg-midnight/60 px-4 py-3 text-sm text-soft-white/90">
            Digital previews are approximate. Confirm final colors with physical samples and an on-site review.
          </p>
        </PageHero>
        <section className="container mx-auto max-w-6xl px-4 py-10 md:py-14">
          <ExteriorVisualizer />
        </section>
      </main>
      <Footer />
    </>
  )
}
