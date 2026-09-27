import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/luxury/reveal"
import { SERVICE_AREAS, BUSINESS, PHONE_HREF } from "@/lib/business"
import { LOCATIONS } from "@/lib/locations"

/**
 * Homepage "Areas We Serve" section.
 *
 * This is the primary internal-linking surface for the city landing pages.
 * Rendering from BUSINESS's SERVICE_AREAS (rather than a local list, as this
 * component used to) means every location page is reachable from the homepage,
 * and a new page added to that array is linked here automatically.
 *
 * Together with the footer strip this gives each location page two inbound
 * internal links from site-wide surfaces.
 */
export function LocationsSection() {
  return (
    <section id="areas" className="scroll-mt-24 bg-champagne py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="kicker mb-4">Service Areas</p>
          <h2 className="font-display text-3xl sm:text-5xl text-foreground leading-tight text-balance">
            Five offices, one crew standard
          </h2>
          <p className="mt-5 font-cormorant text-xl text-graphite leading-relaxed">
            Cypress, Houston, Katy, Sugar Land and Magnolia. Each office runs the same prep-first
            process, tuned for Gulf Coast humidity. One number reaches all five:{" "}
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
                  {loc.street}
                  <br />
                  {loc.city}, {loc.state} {loc.zip}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="kicker mb-4">Neighborhoods we paint</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {SERVICE_AREAS.map((area, i) => (
            <Reveal key={area.slug} delay={(i % 3) * 60}>
              <Link
                href={`/${area.slug}`}
                className="group relative flex items-center justify-between gap-4 border-b border-midnight/10 py-4"
              >
                <span className="font-manrope text-base text-foreground transition-colors group-hover:text-gold-deep">
                  {area.name}
                  <span className="text-muted-foreground">, TX</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gold opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
