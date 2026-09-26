import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BeforeAfter } from "@/components/luxury/before-after"
import { Reveal } from "@/components/luxury/reveal"
import { PROJECTS, getProject, getAllProjectSlugs } from "@/lib/projects"
import { BUSINESS, PHONE_HREF, SERVICE_AREAS } from "@/lib/business"
import { ORG_ID, PUBLISHER_REF } from "@/components/structured-data"
import { ArrowLeft, Phone, CheckCircle } from "lucide-react"

const ESTIMATE_PATH = "/painting-estimate-houston"

/**
 * City page for each project's neighborhood (matched on the text before the
 * comma in `neighborhood`). West University has no page of its own, so it
 * points to the Houston office page.
 */
const NEIGHBORHOOD_CITY_PAGE: Record<string, string> = {
  Memorial: "painters-memorial-tx",
  "River Oaks": "painters-river-oaks-tx",
  "West University": "painters-houston-tx",
  Bellaire: "painters-bellaire-tx",
  "The Heights": "painters-the-heights-tx",
  Heights: "painters-the-heights-tx",
  Cypress: "painters-cypress-tx",
}

function cityPageFor(neighborhood: string): { name: string; slug: string } | undefined {
  const key = neighborhood.split(",")[0].trim()
  const slug = NEIGHBORHOOD_CITY_PAGE[key]
  if (!slug) return undefined
  const area = SERVICE_AREAS.find((a) => a.slug === slug)
  return area ? { name: area.name, slug } : undefined
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const url = `https://houstonsuperiorpainting.com/projects/${project.slug}`
  const img = `https://houstonsuperiorpainting.com${project.afterImage}`
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url,
      siteName: BUSINESS.name,
      type: "article",
      images: [{ url: img, width: 1200, height: 630, alt: project.afterAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [img],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const url = `https://houstonsuperiorpainting.com/projects/${project.slug}`
  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3)
  const cityPage = cityPageFor(project.neighborhood)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: project.title,
    description: project.metaDescription,
    image: [`https://houstonsuperiorpainting.com${project.afterImage}`],
    author: { "@type": "Organization", "@id": ORG_ID, name: BUSINESS.name },
    publisher: PUBLISHER_REF,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: {
      "@type": "Service",
      name: project.service,
      areaServed: project.neighborhood,
      provider: { "@type": "Organization", "@id": ORG_ID },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://houstonsuperiorpainting.com" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://houstonsuperiorpainting.com/projects" },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-midnight py-16 md:py-24 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-gold hover:text-soft-white transition-colors mb-6"
            >
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
              All Projects
            </Link>
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              {project.service} &middot; {project.neighborhood}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-soft-white mb-5 text-balance leading-[1.08]">
              {project.title}
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-2xl mx-auto">
              {project.summary}
            </p>
          </div>
        </section>

        {/* Before / After */}
        <section className="bg-background py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-8">
              <p className="kicker mb-3">The Transformation</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Drag to reveal the before &amp; after
              </h2>
            </Reveal>
            <Reveal>
              <BeforeAfter
                beforeSrc={project.beforeImage}
                afterSrc={project.afterImage}
                beforeAlt={project.beforeAlt}
                afterAlt={project.afterAlt}
              />
            </Reveal>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-card p-5 text-center"
                >
                  <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="font-manrope text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="kicker mb-3">The Challenge</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-5 text-balance">
                Where we started
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
            </Reveal>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-background py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <p className="kicker mb-3">Our Approach</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-balance">
                How we did it
              </h2>
            </Reveal>
            <ol className="space-y-8">
              {project.approach.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 60} className="flex gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-full bg-midnight text-gold font-display text-lg font-bold">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Products + Results */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="kicker mb-3">Products Specified</p>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                What we used
              </h2>
              <ul className="space-y-3">
                {project.products.map((product) => (
                  <li key={product} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{product}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <p className="kicker mb-3">The Result</p>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Where we finished
              </h2>
              <p className="text-muted-foreground leading-relaxed">{project.results}</p>
            </Reveal>
          </div>
        </section>

        {/* Testimonials hidden until they can be matched to real Google reviews (see docs/aeo-seo-plan-2026-09.md). TODO(juan) */}

        {/* Service link + CTA */}
        <section className="bg-midnight py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-soft-white mb-5 text-balance">
              Want results like this?
            </h2>
            <p className="font-cormorant text-xl text-soft-white/80 mb-8 leading-relaxed">
              See our{" "}
              <Link
                href={`/${project.serviceSlug}`}
                className="text-gold underline underline-offset-4 hover:text-soft-white transition-colors"
              >
                {project.service.toLowerCase()} in Houston
              </Link>
              {cityPage && (
                <>
                  , our{" "}
                  <Link
                    href={`/${cityPage.slug}`}
                    className="text-gold underline underline-offset-4 hover:text-soft-white transition-colors"
                  >
                    painters in {cityPage.name}
                  </Link>
                </>
              )}
              , and more{" "}
              <Link
                href="/projects"
                className="text-gold underline underline-offset-4 hover:text-soft-white transition-colors"
              >
                Houston painting projects
              </Link>
              , or{" "}
              <Link
                href={ESTIMATE_PATH}
                className="text-gold underline underline-offset-4 hover:text-soft-white transition-colors"
              >
                request a painting estimate
              </Link>{" "}
              for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href={ESTIMATE_PATH}>Get a Painting Estimate</Link>
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

        {/* Related projects */}
        <section className="bg-background py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-10">
              <p className="kicker mb-3">More Transformations</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Related projects
              </h2>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group flex flex-col h-full overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.afterImage || "/placeholder.svg"}
                        alt={p.afterAlt}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep mb-2">
                        {p.neighborhood}
                      </p>
                      <h3 className="font-display text-lg font-bold text-foreground leading-snug text-balance">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
