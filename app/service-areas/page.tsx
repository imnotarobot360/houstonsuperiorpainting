// app/service-areas/page.tsx
//
// Service-area hub page.
//
// Added because the location-page breadcrumb trail is "Home > Service Areas >
// [City]", and /service-areas was a 404. A BreadcrumbList whose middle item
// points at a missing page is worse than no breadcrumb: Google follows the
// item URLs, and a visible trail linking users to a dead page is a real UX
// defect. This gives the trail a genuine destination and doubles as a hub that
// links all 23 location pages from one place.

import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationsSection } from "@/components/locations-section"
import { generateBreadcrumbSchema } from "@/components/structured-data"
import { SERVICE_AREAS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Painting Service Areas | Houston Superior Painting",
  description:
    "Houston Superior Painting serves 23 communities across Greater Houston, from the Heights and River Oaks to Katy, Cypress, Sugar Land, Sienna and Riverstone.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/service-areas",
  },
}

// Trail for this page itself: Home > Service Areas. The location pages extend
// it with their own city as the third item.
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://houstonsuperiorpainting.com/" },
  { name: "Service Areas", url: "https://houstonsuperiorpainting.com/service-areas" },
])

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main>
        <section className="relative bg-midnight py-20 md:py-28">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          />
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 font-manrope text-xs text-soft-white/70">
                <li>
                  <Link href="/" className="transition-colors hover:text-gold">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-soft-white/40">
                  /
                </li>
                <li className="text-soft-white/90" aria-current="page">
                  Service Areas
                </li>
              </ol>
            </nav>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-soft-white text-balance leading-[1.05]">
              Painting Service Areas Across Greater Houston
            </h1>
            <p className="mt-6 font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed">
              We paint homes in {SERVICE_AREAS.length} communities across the metro. Pick your
              area for local detail — neighborhoods we work in, typical project costs, and
              answers to the questions homeowners there ask most.
            </p>
          </div>
        </section>

        {/* Reuses the homepage section so the hub can never fall out of sync
            with SERVICE_AREAS or with the homepage's own list. */}
        <LocationsSection />
      </main>
      <Footer />
    </div>
  )
}
