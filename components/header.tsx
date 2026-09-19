"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { BUSINESS, SERVICE_AREAS, PHONE_HREF, serviceHref, isExternalHref } from "@/lib/business"

// 8 keeps Garage Epoxy (index 7) in the menu — trimming below that silently
// drops it, which is how it went missing from the footer.
const services = BUSINESS.services.slice(0, 8).map((s) => ({
  title: s.name,
  href: serviceHref(s.slug),
  external: isExternalHref(serviceHref(s.slug)),
}))

// Sourced from SERVICE_AREAS, not the legacy BUSINESS.serviceAreas — that
// second array had drifted to 12 stale entries while SERVICE_AREAS grew to 23,
// and maintaining two area lists is what orphaned 10 location pages before.
// The nav dropdown intentionally shows only the first 8 for length; the footer
// renders the complete list, so every page still gets a site-wide link.
const serviceAreas = SERVICE_AREAS.slice(0, 8).map((a) => ({
  title: a.name,
  href: `/${a.slug}`,
}))

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Insights", href: "/blog" },
  { title: "Reviews", href: "/#reviews" },
  { title: "Contact", href: "/contact" },
]

function Wordmark({ light }: { light: boolean }) {
  return (
    <Link href="/" className="flex items-center" aria-label={`${BUSINESS.name} home`}>
      <Image
        src="/images/logo.png"
        alt={`${BUSINESS.name} logo`}
        width={4267}
        height={3000}
        priority
        className={`h-12 sm:h-14 w-auto transition-all duration-500 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  )
}

export function Header({ overHero = false }: { overHero?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Transparent only while overlaying a dark hero and not yet scrolled.
  const transparent = overHero && !scrolled
  const light = transparent
  const linkBase =
    "font-manrope text-sm font-medium tracking-wide transition-colors"
  const linkColor = light
    ? "text-soft-white/80 hover:text-gold"
    : "text-foreground/70 hover:text-gold-deep"

  return (
    <>
      {/* Spacer keeps interior-page content clear of the fixed header.
          On the homepage (overHero) the hero sits beneath it intentionally. */}
      {!overHero && <div aria-hidden className="h-20" />}
      <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent py-4"
          : "bg-background/80 backdrop-blur-xl border-b border-border py-2 shadow-[0_1px_30px_rgba(13,17,23,0.06)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Wordmark light={light} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className={`${linkBase} ${linkColor}`}>
                {l.title}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 ${linkBase} ${linkColor}`}>
                Services
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    {service.external ? (
                      <a href={service.href} className="cursor-pointer font-manrope">
                        {service.title}
                      </a>
                    ) : (
                      <Link href={service.href} className="cursor-pointer font-manrope">
                        {service.title}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 ${linkBase} ${linkColor}`}>
                Areas
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {serviceAreas.map((area) => (
                  <DropdownMenuItem key={area.href} asChild>
                    <Link href={area.href} className="cursor-pointer font-manrope">
                      {area.title}, TX
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className={`${linkBase} ${linkColor}`}>
                {l.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={PHONE_HREF}
              aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
              className={`flex items-center gap-2 ${linkBase} ${linkColor}`}
            >
              <Phone className="h-4 w-4" />
              <span>{BUSINESS.phone}</span>
            </a>
            <Link
              href="/contact"
              className="font-manrope text-sm font-semibold bg-secondary text-secondary-foreground px-5 py-2.5 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Get My Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${light ? "text-soft-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-lg bg-midnight/95 backdrop-blur-xl border border-white/10 p-5">
            <nav className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-manrope text-soft-white/90 py-2.5 border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.title}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <div className="border-b border-white/5">
                <button
                  className="flex items-center justify-between w-full font-manrope text-soft-white/90 py-2.5"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 pb-2">
                    {services.map((service) =>
                      service.external ? (
                        <a
                          key={service.href}
                          href={service.href}
                          className="font-manrope text-sm text-soft-white/70 py-2"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setMobileServicesOpen(false)
                          }}
                        >
                          {service.title}
                        </a>
                      ) : (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="font-manrope text-sm text-soft-white/70 py-2"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setMobileServicesOpen(false)
                          }}
                        >
                          {service.title}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Areas Accordion */}
              <div className="border-b border-white/5">
                <button
                  className="flex items-center justify-between w-full font-manrope text-soft-white/90 py-2.5"
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                >
                  Areas
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileAreasOpen && (
                  <div className="pl-4 flex flex-col gap-1 pb-2">
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="font-manrope text-sm text-soft-white/70 py-2"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setMobileAreasOpen(false)
                        }}
                      >
                        {area.title}, TX
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-manrope text-soft-white/90 py-2.5 border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.title}
                </Link>
              ))}

              <a
                href={PHONE_HREF}
                aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
                className="flex items-center gap-2 font-manrope text-soft-white/80 py-3"
              >
                <Phone className="h-4 w-4" />
                <span>{BUSINESS.phone}</span>
              </a>
              <Link
                href="/contact"
                className="font-manrope text-center text-sm font-semibold bg-secondary text-secondary-foreground px-5 py-3 rounded-md mt-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get My Free Estimate
              </Link>
            </nav>
          </div>
        )}
      </div>
      </header>
    </>
  )
}
