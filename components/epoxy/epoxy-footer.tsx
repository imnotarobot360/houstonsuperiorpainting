import { Phone, Mail, MapPin } from "lucide-react"
import { EpoxyWordmark } from "./epoxy-wordmark"
import { EPOXY, PHONE_HREF, SERVICE_AREAS, SERVICES_FEATURED } from "@/lib/epoxy"
import { BUSINESS } from "@/lib/business"

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Our Process" },
  { href: "#colors", label: "Flake Colors" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#schedule", label: "Book Online" },
  { href: "#faq", label: "FAQ" },
  { href: "#estimate", label: "Free Estimate" },
]

export function EpoxyFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <EpoxyWordmark className="h-20" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {EPOXY.tagline} Industrial-grade epoxy and polyaspartic floor
              coatings across the greater Houston metro.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {EPOXY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EPOXY.email}`}
                  className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {EPOXY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {BUSINESS.primaryAddress.street}
                  <br />
                  {BUSINESS.primaryAddress.city}, {BUSINESS.primaryAddress.state}{" "}
                  {BUSINESS.primaryAddress.zip}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-manrope text-sm font-bold uppercase tracking-wider text-foreground">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES_FEATURED.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Concrete Grinding &amp; Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Patio &amp; Pool Deck Coatings
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="font-manrope text-sm font-bold uppercase tracking-wider text-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://houstonsuperiorpainting.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {EPOXY.parent}
                </a>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h2 className="font-manrope text-sm font-bold uppercase tracking-wider text-foreground">
              Service Areas
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted-foreground">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {EPOXY.name}. A division of {EPOXY.parent}.
            Fully insured.
          </p>
          <p>{EPOXY.warrantyYears}-year written adhesion warranty on residential garage systems.</p>
        </div>
      </div>
    </footer>
  )
}
