"use client"

import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { EPOXY, PHONE_HREF } from "@/lib/epoxy"
import { EpoxyWordmark } from "./epoxy-wordmark"

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Garage Epoxy", href: "#garage-epoxy" },
  { label: "Commercial", href: "#commercial-epoxy" },
  { label: "Our Process", href: "#process" },
  { label: "Colors", href: "#colors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
]

export function EpoxyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Prevent background scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#111111]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-8 lg:gap-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label={`${EPOXY.name} home`}>
          <EpoxyWordmark variant="nav" className="h-10 md:h-[52px]" priority />
        </a>

        {/* xl, not lg: with 10 links plus the phone and CTA, the row overflowed
            and clipped the Free Estimate button between 1024px and 1280px. */}
        {/* No wider gap at 2xl: the row lives inside a max-w-7xl container, so
            the available width stops growing at 1280px. */}
        <nav className="hidden items-center xl:flex xl:gap-4" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              // whitespace-nowrap: flex items shrink by default, which broke
              // "Garage Epoxy" and "Our Process" onto two lines.
              className="whitespace-nowrap text-[13px] font-medium tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-white/80 transition-colors hover:text-white md:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {EPOXY.phoneDisplay}
          </a>
          <a
            href="#estimate"
            className="hidden whitespace-nowrap rounded-sm bg-primary px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03] md:inline-block"
          >
            Free Estimate
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-sm text-white xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet — fully opaque; at /98 the hero text showed through. */}
      {open && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-[#111111] xl:hidden">
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-base font-medium text-white/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#estimate"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-primary px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              Get Free Estimate
            </a>
            <a
              href={PHONE_HREF}
              className="mb-2 mt-2 flex items-center justify-center gap-2 py-3 text-base font-semibold text-white"
            >
              <Phone className="size-4" aria-hidden="true" />
              {EPOXY.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
