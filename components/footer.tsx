import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import {
  BUSINESS,
  PHONE_HREF,
  MAIL_HREF,
  EPOXY_URL,
  SERVICE_AREAS,
  CORE_SERVICES,
  OFFICE_PAGES,
  officeForPage,
} from "@/lib/business"

const linkCls = "text-background/70 hover:text-background transition-colors"

const companyLinks = [
  { label: "About Houston Superior Painting", href: "/about" },
  { label: "Houston Painting Cost Guide", href: "/houston-painting-cost-guide" },
  { label: "Free Painting Estimate", href: "/painting-estimate-houston" },
  { label: `${BUSINESS.trust.warrantyYears}-Year Painting Warranty`, href: "/warranty" },
  { label: "Insurance & Warranty", href: "/insurance-and-warranty" },
  { label: "Google Reviews by Office", href: "/reviews" },
  { label: "Painting Financing", href: "/painting-financing-houston" },
  { label: "Houston Painting FAQ", href: "/faq" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]
import { TrustBadges } from "@/components/trust-badges"

export function Footer() {
  return (
    <>
      <TrustBadges />
      <footer className="bg-midnight text-soft-white border-t-2 border-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt={`${BUSINESS.name} logo`}
                width={240}
                height={72}
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="font-cormorant text-xl text-soft-white/80 leading-relaxed italic">
              {BUSINESS.slogan}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://www.facebook.com/houstonsuperiorpainting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/houstonsuperiorpainting/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services — the six core services, plus the separate epoxy brand */}
          <div>
            <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-5">Services</h3>
            <ul className="space-y-3">
              {CORE_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className={linkCls}>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/commercial-painting-houston-tx" className={linkCls}>
                  Commercial Painting
                </Link>
              </li>
              <li>
                {/* Garage epoxy is its own brand on its own domain. */}
                <a href={EPOXY_URL} className={linkCls}>
                  Garage Epoxy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations — the five offices, HQ first */}
          <div>
            <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-5">Locations</h3>
            <ul className="space-y-4">
              {OFFICE_PAGES.map((page) => {
                const office = officeForPage(page.slug)
                return (
                  <li key={page.slug} className="text-sm">
                    <Link href={`/${page.slug}`} className="font-medium text-background/90 hover:text-background transition-colors">
                      Painters in {page.name}
                    </Link>
                    {office && (
                      <p className="text-background/60 leading-snug">
                        {office.street}
                        <br />
                        {office.city}, {office.state} {office.zip}
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact — plain text, no microdata (schema lives in JSON-LD only) */}
          <div>
            <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
                  className={`flex items-center gap-2 ${linkCls}`}
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={MAIL_HREF}
                  aria-label={`Email ${BUSINESS.name}`}
                  className={`flex items-center gap-2 break-all ${linkCls}`}
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  <span className="font-medium text-background/80">Headquarters:</span>
                  <br />
                  {BUSINESS.primaryAddress.street}
                  <br />
                  {BUSINESS.primaryAddress.city}, {BUSINESS.primaryAddress.state} {BUSINESS.primaryAddress.zip}
                </span>
              </li>
            </ul>
            <div className="mt-4 text-background/60 text-sm">
              <p className="font-medium text-background/80 mb-1">Hours:</p>
              {BUSINESS.hoursSummary.map((h) => (
                <p key={h.label}>
                  {h.label}: {h.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 pt-6 border-t border-background/10">
          <p className="text-background/80 text-sm font-medium text-center mb-2">
            <Link href="/service-areas" className="hover:text-background underline-offset-4 hover:underline">
              Service Areas
            </Link>
            :
          </p>
          {/*
            Rendered from BUSINESS.SERVICE_AREAS rather than hardcoded. This list
            previously held 12 of the 21 location pages, which left the other 9
            with no site-wide inbound link at all. Driving it from the shared
            array keeps the footer complete as pages are added.
          */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm">
            {SERVICE_AREAS.map((area, i) => (
              <Fragment key={area.slug}>
                {i > 0 && <span className="text-background/40">•</span>}
                <Link
                  href={`/${area.slug}`}
                  className="text-background/60 hover:text-background transition-colors"
                >
                  {area.name}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <span className="text-background/60">|</span>
              <Link href="/terms-and-conditions" className="text-background/60 hover:text-background transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          {/* Marketing & Design Credit */}
          <div className="mt-8 pt-6 border-t border-background/10 flex items-center justify-center text-center">
            <p className="text-background/60 text-sm">
              Marketing &amp; Design by Houston Superior Marketing
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
