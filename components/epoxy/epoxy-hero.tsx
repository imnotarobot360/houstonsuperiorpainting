import Image from "next/image"
import { Phone, Star } from "lucide-react"
import { EPOXY, PHONE_HREF } from "@/lib/epoxy"

const TRUST = [
  "15-Year Written Warranty",
  "Diamond-Ground Prep",
  "Fully Insured",
  "1-Day Installs Available",
]

export function EpoxyHero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92svh] items-center overflow-hidden">
      {/* Ken Burns pan stands in for a background video: same sense of motion,
          a fraction of the bytes, and no autoplay/LCP penalty. */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/epoxy/hero-luxury-garage.png"
          alt="Luxury Houston garage with a high-gloss charcoal epoxy flake floor and a black pickup truck"
          fill
          priority
          sizes="100vw"
          className="epoxy-kenburns object-cover"
        />
      </div>
      {/* Legibility scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-[#111111]/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#111111] to-transparent"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-28 md:px-8 md:pt-32">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Houston, Texas
          </p>

          <h1 className="mt-6 font-manrope text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-white text-balance sm:text-6xl lg:text-7xl">
            Premium Garage Epoxy Flooring in Houston
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty md:text-xl">
            Transform your garage into a showroom with industrial-grade epoxy systems built to last.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#estimate"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Get Free Estimate
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-sm border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              View Gallery
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-2 py-4 text-sm font-bold text-white/85 transition-colors hover:text-white sm:px-4"
            >
              <Phone className="size-4" aria-hidden="true" />
              {EPOXY.phoneDisplay}
            </a>
          </div>

          {/* Above-the-fold trust signals */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6">
            <span className="flex items-center gap-1.5">
              <span className="flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-3.5 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-xs font-semibold text-white">{EPOXY.rating}</span>
              {/* Attributed to the parent company — these are Houston Superior
                  Painting's reviews, not a rating the epoxy brand earned alone. */}
              <span className="text-xs text-white/50">
                from {EPOXY.reviewCount}+ reviews of {EPOXY.parent}
              </span>
            </span>
            {TRUST.map((t) => (
              <span key={t} className="text-xs font-medium text-white/55">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
