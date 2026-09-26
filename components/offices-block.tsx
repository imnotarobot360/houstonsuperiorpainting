import Link from "next/link"
import { ArrowUpRight, Navigation, Phone } from "lucide-react"
import { LOCATIONS, locationDirectionsHref } from "@/lib/locations"

export function OfficesBlock() {
  return (
    <section id="offices" aria-labelledby="offices-heading" className="scroll-mt-24 bg-champagne py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col gap-3 max-w-2xl">
          <p className="kicker">Our offices</p>
          <h2 id="offices-heading" className="font-display text-3xl sm:text-4xl text-foreground text-balance">
            Five offices around Houston
          </h2>
          <p className="font-manrope text-base text-graphite leading-relaxed text-pretty">
            One phone line reaches all of them. Estimates happen at your home, so call before
            stopping by an office.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-midnight/10 border border-midnight/10">
          {LOCATIONS.map((loc) => (
            <li key={loc.slug} className="flex flex-col gap-4 bg-background p-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-manrope text-lg font-semibold text-foreground">{loc.city}</h3>
                <address className="not-italic font-manrope text-sm text-muted-foreground leading-relaxed">
                  {loc.street}
                  <br />
                  {loc.city}, {loc.state} {loc.zip}
                </address>
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 font-manrope text-sm font-medium">
                <a href={`tel:${loc.phoneTel}`} className="inline-flex items-center gap-1.5 text-foreground hover:text-gold-deep">
                  <Phone className="size-4" aria-hidden="true" />
                  {loc.phone}
                </a>
                <a
                  href={locationDirectionsHref(loc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-gold-deep"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Directions
                </a>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="inline-flex items-center gap-1 text-gold-deep hover:text-foreground"
                >
                  Office page
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">for {loc.city}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
