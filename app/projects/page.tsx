import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/luxury/reveal"
import { PROJECTS } from "@/lib/projects"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { ArrowRight, Phone, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Houston Painting Projects: Before & After Case Studies",
  description:
    "Real Houston painting projects by Houston Superior Painting: interior, exterior, cabinet, stucco, and wood rot work, with before-and-after photos and details.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/projects",
  },
  openGraph: {
    title: "Houston Painting Projects: Before & After Case Studies",
    description:
      "Real Houston painting transformations — interior, exterior, cabinets, stucco, and more. See the before & after.",
    url: "https://houstonsuperiorpainting.com/projects",
    siteName: BUSINESS.name,
    type: "website",
    images: [
      {
        url: "https://houstonsuperiorpainting.com/images/luxury/hero-estate.png",
        width: 1200,
        height: 630,
        alt: "Houston Superior Painting project portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Painting Projects: Before & After Case Studies",
    description:
      "Real Houston painting transformations — interior, exterior, cabinets, stucco, and more.",
    images: ["https://houstonsuperiorpainting.com/images/luxury/hero-estate.png"],
  },
}

export default function ProjectsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Painting Projects & Case Studies",
    description:
      "Real Houston painting projects with before & after photos and detailed case studies.",
    url: "https://houstonsuperiorpainting.com/projects",
    isPartOf: {
      "@type": "WebSite",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PROJECTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://houstonsuperiorpainting.com/projects/${p.slug}`,
        name: p.title,
      })),
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://houstonsuperiorpainting.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://houstonsuperiorpainting.com/projects",
      },
    ],
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
              Our Work
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
              Houston Painting Projects & Transformations
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-2xl mx-auto">
              Real homes across Houston&apos;s finest neighborhoods. Drag any slider to see the
              before &amp; after, then read exactly how we did it.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="/painting-estimate-houston">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-soft-white/30 !bg-transparent !text-soft-white hover:!bg-soft-white/10"
                asChild
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" />
                  {BUSINESS.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
            <span className="inline-flex items-center gap-2 font-manrope text-sm text-foreground">
              <Star className="h-4 w-4 text-gold-deep fill-gold-deep" />
              {/* No rating figure: the 4.9 / 200+ number belongs to the Houston GBP. */}
              <a href={BUSINESS.social.googleMaps} target="_blank" rel="noopener noreferrer" className="hover:text-gold-deep underline underline-offset-4">
                See reviews on Google
              </a>
            </span>
            <span className="font-manrope text-sm text-foreground">
              {BUSINESS.trust.projectsCompleted}+ projects completed
            </span>
            <span className="font-manrope text-sm text-foreground">
              {BUSINESS.trust.warrantyYears}-year workmanship warranty
            </span>
            <span className="font-manrope text-sm text-foreground">Fully insured</span>
          </div>
        </section>

        {/* Project grid */}
        <section className="bg-background py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group flex flex-col h-full overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.afterImage || "/placeholder.svg"}
                        alt={p.afterAlt}
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 font-manrope text-[0.6rem] font-semibold uppercase tracking-[0.2em] bg-midnight/80 text-gold px-3 py-1.5 rounded">
                        {p.service}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep mb-2">
                        {p.neighborhood}
                      </p>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3 text-balance leading-snug">
                        {p.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                        {p.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center font-manrope text-sm font-semibold text-foreground group-hover:text-gold-deep transition-colors">
                        View case study
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-midnight py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-soft-white mb-5 text-balance">
              Ready to transform your home?
            </h2>
            <p className="font-cormorant text-xl text-soft-white/80 mb-8 leading-relaxed">
              Get a free, detailed estimate and we&apos;ll walk you through exactly how we&apos;d
              approach your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="/painting-estimate-houston">Get a Painting Estimate</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-soft-white/30 !bg-transparent !text-soft-white hover:!bg-soft-white/10"
                asChild
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" />
                  {BUSINESS.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
