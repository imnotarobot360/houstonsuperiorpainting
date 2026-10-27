import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/luxury/reveal"
import { SERVICE_AREAS, BUSINESS, PHONE_HREF } from "@/lib/business"
import { LOCATIONS } from "@/lib/locations"

/**
 * Homepage "Areas We Serve" section.
 *
 * Links the five office pages, then one link to /service-areas, which lists
 * every city page (generated from SERVICE_AREAS, so new pages appear there
 * automatically). The per-neighborhood list was moved off the homepage on
 * 2026-10-27 to cut its link count and HTML size.
 */
export function LocationsSection() {
  return (
    <section id="areas" className="scroll-mt-24 bg-champagne py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="kicker mb-4">Service Areas</p>
          <h2 className="font-display text-3xl sm:text-5xl text-foreground leading-tight text-balance">
            One crew standard across Greater Houston
          </h2>
          <p className="mt-5 font-cormorant text-xl text-graphite leading-relaxed">
            Cypress, Houston, Katy, Sugar Land, Magnolia and the communities around them, with the same prep-first
            process, tuned for Gulf Coast humidity. One number for every area:{" "}
            <a href={PHONE_HREF} className="text-foreground underline decoration-gold underline-offset-4 hover:text-gold-deep">
              {BUSINESS.phone}
            </a>
            .
          </p>
        </Reveal>

        <ul className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px border border-midnight/10 bg-midnight/10">
          {LOCATIONS.map((loc) => (
            <li key={loc.slug} className="bg-background">
              <Link href={`/painters-${loc.slug}-tx`} className="group flex h-full flex-col gap-2 p-5">
                <span className="flex items-center justify-between gap-2 font-manrope text-base font-semibold text-foreground group-hover:text-gold-deep">
                  {loc.city}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                </span>
                <span className="font-manrope text-sm text-muted-foreground leading-relaxed">
                  Serving {loc.city} and surrounding communities
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* The full neighborhood list moved to /service-areas (owner brief
            2026-10-27: fewer homepage links, lighter HTML). The five office
            pages above stay linked here and in the footer. */}
        <Link
          href="/service-areas"
          className="inline-flex items-center gap-2 font-manrope text-base font-semibold text-foreground underline decoration-gold underline-offset-4 hover:text-gold-deep"
        >
          See all {SERVICE_AREAS.length} service areas
          <ArrowUpRight className="h-4 w-4 text-gold-deep" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
