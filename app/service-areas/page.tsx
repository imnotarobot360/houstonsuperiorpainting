// app/service-areas/page.tsx
//
// Service-area hub page.
//
// Added because the location-page breadcrumb trail is "Home > Service Areas >
// [City]", and /service-areas was a 404. A BreadcrumbList whose middle item
// points at a missing page is worse than no breadcrumb: Google follows the
// item URLs, and a visible trail linking users to a dead page is a real UX
// defect. This gives the trail a genuine destination and doubles as a hub that
// links all 23 location pages from one place: the five offices first (with
// addresses), then every other community grouped by its nearest office.

import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone } from "lucide-react"
import { generateBreadcrumbSchema } from "@/components/structured-data"
import {
  BUSINESS,
  OFFICE_PAGES,
  PHONE_HREF,
  SERVICE_AREAS,
  officeAddressLine,
  officeForPage,
  officeMapsUrl,
} from "@/lib/business"
import { NEAREST_OFFICE } from "@/lib/nearest-office"

const OFFICE_SLUGS: readonly string[] = OFFICE_PAGES.map((o) => o.slug)

// The five offices (HQ first), each with its full address.
const OFFICES = OFFICE_PAGES.map((page) => ({ page, office: officeForPage(page.slug)! }))

// Every other city page, grouped under the office that serves it.
const AREAS_BY_OFFICE = OFFICES.map(({ page, office }) => ({
  page,
  office,
  areas: SERVICE_AREAS.filter(
    (a) => !OFFICE_SLUGS.includes(a.slug) && NEAREST_OFFICE[a.slug] === page.slug,
  ),
}))
// Safety net: any non-office page missing from NEAREST_OFFICE still gets listed.
const UNGROUPED_AREAS = SERVICE_AREAS.filter(
  (a) => !OFFICE_SLUGS.includes(a.slug) && !NEAREST_OFFICE[a.slug],
)

export const metadata: Metadata = {
  title: "Painting Service Areas | Houston Superior Painting",
  description:
    "Houston Superior Painting serves 23 communities across Greater Houston, from the Heights and River Oaks to Katy, Cypress, Sugar Land, Sienna and Riverstone.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/service-areas",
  },
  openGraph: {
    title: "Painting Service Areas | Houston Superior Painting",
    description:
      "Houston Superior Painting serves 23 communities across Greater Houston, from the Heights and River Oaks to Katy, Cypress, Sugar Land, Sienna and Riverstone.",
    url: "https://houstonsuperiorpainting.com/service-areas",
    type: "website",
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630 }],
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

        {/* Offices first: the five locations with a Google Business Profile. */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Five Offices
            </h2>
            <p className="text-muted-foreground mb-8">
              Every estimate is scheduled from the office closest to you. Call{" "}
              <a href={PHONE_HREF} className="text-primary font-medium hover:underline">
                {BUSINESS.phone}
              </a>{" "}
              for any location.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {OFFICES.map(({ page, office }) => (
                <div key={page.slug} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    <Link href={`/${page.slug}`} className="hover:text-primary">
                      Painters in {office.city}, TX
                    </Link>
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
                    {office.label}
                  </p>
                  <p className="flex items-start gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <a
                      href={officeMapsUrl(office)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {officeAddressLine(office)}
                    </a>
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-foreground">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <a href={PHONE_HREF} className="hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Then every other community, grouped by the office that serves it. */}
        <section className="py-16 md:py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Other Communities We Serve
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {AREAS_BY_OFFICE.filter((g) => g.areas.length > 0).map(({ page, office, areas }) => (
                <div key={page.slug}>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    Served from our{" "}
                    <Link href={`/${page.slug}`} className="text-primary hover:underline">
                      {office.city} office
                    </Link>
                  </h3>
                  <ul className="space-y-2">
                    {areas.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/${a.slug}`} className="text-foreground hover:text-primary hover:underline">
                          Painters in {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {UNGROUPED_AREAS.length > 0 && (
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">More areas</h3>
                  <ul className="space-y-2">
                    {UNGROUPED_AREAS.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/${a.slug}`} className="text-foreground hover:text-primary hover:underline">
                          Painters in {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <p className="mt-10 text-foreground/80">
            Looking for someone close by? See our{" "}
            <Link href="/painters-houston-tx" className="text-primary hover:underline">Houston painters page</Link>, or our guide to{" "}
            <Link href="/blog/painters-near-me-katy-tx" className="text-primary hover:underline">choosing painters near Katy, Texas</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
