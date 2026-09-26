import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { BUSINESS, PHONE_HREF, MAIL_HREF, serviceHref, isExternalHref, SERVICE_AREAS, OFFICIAL_SITE_DISCLAIMER } from "@/lib/business"
import { LOCATIONS } from "@/lib/locations"
import { TrustBadges } from "@/components/trust-badges"

export function Footer() {
  return (
    <>
      <TrustBadges />
      <footer className="bg-midnight text-soft-white border-t-2 border-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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

          {/* Quick Links */}
          <div>
            <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-background/70 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/interior-painting-process-houston" className="text-background/70 hover:text-background transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/houston-painting-cost-guide" className="text-background/70 hover:text-background transition-colors">
                  Pricing Guide
                </Link>
              </li>
              <li>
                <Link href="/painting-financing-houston" className="text-background/70 hover:text-background transition-colors">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-5">Services</h3>
            <ul className="space-y-3">
              {/* 8, not 6 — Garage Epoxy sits at index 7 and was being cut off. */}
              {BUSINESS.services.slice(0, 8).map((service) => {
                const href = serviceHref(service.slug)
                return (
                  <li key={service.slug}>
                    {isExternalHref(href) ? (
                      <a
                        href={href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {service.name}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {service.name}
                      </Link>
                    )}
                  </li>
                )
              })}
              <li>
                <Link 
                  href="/houston-painting-cost-guide" 
                  className="text-background/70 hover:text-background transition-colors font-medium"
                >
                  View Pricing Guide →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + offices. Schema lives in JSON-LD, not microdata. */}
          <div>
            <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-5">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <a
                href={MAIL_HREF}
                aria-label={`Email ${BUSINESS.name}`}
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {BUSINESS.email}
              </a>
            </div>
            <p className="mt-6 mb-2 flex items-center gap-2 font-medium text-sm text-background/80">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Offices
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    <span className="font-medium text-background/90">{loc.city}</span>
                    <span className="block text-background/60">{loc.street}, {loc.city}, {loc.state} {loc.zip}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-background/60 text-sm">
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
          <p className="text-background/80 text-sm font-medium text-center mb-2">Service Areas:</p>
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

          <p className="mt-8 mx-auto max-w-3xl text-center text-background/60 text-xs leading-relaxed text-pretty">
            {OFFICIAL_SITE_DISCLAIMER}
          </p>

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
