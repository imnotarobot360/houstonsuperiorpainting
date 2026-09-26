import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { generateBreadcrumbSchema, generateOfficeSchema } from "@/components/structured-data"
import { BUSINESS } from "@/lib/business"
import {
  LOCATIONS,
  getLocation,
  locationDirectionsHref,
  locationMapEmbedSrc,
  locationUrl,
  serviceAreaName,
} from "@/lib/locations"

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return {}
  const title = `${loc.city}, TX Office — ${BUSINESS.name}`
  const url = locationUrl(loc)
  return {
    title,
    description: loc.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: loc.metaDescription,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [{ url: `${BUSINESS.url}${loc.photo.src}`, alt: loc.photo.alt }],
    },
  }
}

const HOURS = [
  { days: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { days: "Saturday", time: "8:00 AM – 4:00 PM" },
  { days: "Sunday", time: "Closed" },
]

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  const otherOffices = LOCATIONS.filter((l) => l.slug !== loc.slug)
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.url },
    { name: "Locations", url: `${BUSINESS.url}/contact#offices` },
    { name: loc.city, url: locationUrl(loc) },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOfficeSchema(loc)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="bg-background">
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="mb-6 font-manrope text-sm text-muted-foreground">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-foreground">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/contact#offices" className="hover:text-foreground">Locations</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-foreground">{loc.city}</li>
                </ol>
              </nav>
              <p className="kicker mb-4">{loc.city}, Texas office</p>
              <h1 className="hero-h1 font-display text-4xl sm:text-6xl text-foreground leading-tight text-balance">
                {loc.headline}
              </h1>
              <p className="quick-answer mt-6 max-w-2xl font-cormorant text-xl text-graphite leading-relaxed text-pretty">
                {loc.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${loc.phoneTel}`}
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-manrope text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {loc.phone}
                </a>
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3 font-manrope text-sm font-semibold text-foreground transition-colors hover:border-foreground"
                >
                  Request an estimate
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={loc.photo.src || "/placeholder.svg"}
                  alt={loc.photo.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="office-details" className="bg-champagne py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h2 id="office-details" className="font-display text-3xl text-foreground">
                Office details
              </h2>
              <address className="not-italic flex flex-col gap-6 font-manrope text-base text-foreground">
                <p className="font-semibold">{loc.gbpName}</p>
                <div className="flex gap-3">
                  <MapPin className="mt-1 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <span className="leading-relaxed">
                    {loc.street}
                    <br />
                    {loc.city}, {loc.state} {loc.zip}
                  </span>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-1 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <a href={`tel:${loc.phoneTel}`} className="hover:text-gold-deep">{loc.phone}</a>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-1 size-5 shrink-0 text-gold-deep" aria-hidden="true" />
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
                    {HOURS.map((h) => (
                      <div key={h.days} className="contents">
                        <dt className="text-muted-foreground">{h.days}</dt>
                        <dd>{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </address>
              <p className="font-manrope text-sm text-muted-foreground leading-relaxed">
                Estimates are done at your home. Please call before visiting the office.
              </p>
              <div className="flex flex-wrap gap-4 font-manrope text-sm font-semibold">
                <a
                  href={locationDirectionsHref(loc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 hover:text-gold-deep"
                >
                  Get directions <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                {loc.gbpUrl && (
                  <a
                    href={loc.gbpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 hover:text-gold-deep"
                  >
                    Reviews on Google <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <div className="lg:col-span-7 min-h-80">
              <iframe
                title={`Map of ${loc.gbpName}`}
                src={locationMapEmbedSrc(loc)}
                className="size-full min-h-80 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="font-display text-3xl sm:text-4xl text-foreground text-balance">
                How we paint in {loc.city}
              </h2>
              {loc.body.map((p) => (
                <p key={p.slice(0, 32)} className="font-manrope text-base text-graphite leading-relaxed text-pretty">
                  {p}
                </p>
              ))}
            </div>
            <aside className="lg:col-span-5 flex flex-col gap-6" aria-label={`${loc.city} field notes`}>
              <p className="kicker">Field notes</p>
              <ul className="flex flex-col">
                {loc.fieldNotes.map((note) => (
                  <li key={note.title} className="flex flex-col gap-2 border-t border-midnight/10 py-5">
                    <h3 className="font-manrope text-base font-semibold text-foreground">{note.title}</h3>
                    <p className="font-manrope text-sm text-graphite leading-relaxed">{note.text}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section aria-labelledby="areas-heading" className="bg-champagne py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h2 id="areas-heading" className="font-display text-3xl text-foreground">
                Areas served from this office
              </h2>
              <p className="font-manrope text-base text-graphite leading-relaxed">
                Also: {loc.neighborhoods.join(", ")}.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {loc.serviceAreaSlugs.map((areaSlug) => (
                <li key={areaSlug}>
                  <Link
                    href={`/${areaSlug}`}
                    className="group flex items-center justify-between border-b border-midnight/10 py-4 font-manrope text-base text-foreground hover:text-gold-deep"
                  >
                    {serviceAreaName(areaSlug)}
                    <ArrowUpRight className="size-4 opacity-40 group-hover:opacity-100" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="other-offices" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
            <h2 id="other-offices" className="font-display text-3xl text-foreground">
              Our other offices
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherOffices.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/locations/${o.slug}`}
                    className="flex h-full flex-col gap-1 border border-border bg-card p-5 transition-colors hover:border-foreground/40"
                  >
                    <span className="font-manrope text-base font-semibold text-foreground">{o.city}</span>
                    <span className="font-manrope text-sm text-muted-foreground leading-relaxed">
                      {o.street}, {o.city}, {o.state} {o.zip}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
