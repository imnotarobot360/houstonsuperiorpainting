import { ReviewsInline } from "@/components/office-reviews"
import Link from "next/link"
import Image from "next/image"
import { Star, ShieldCheck, Phone, CalendarDays } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

export function LuxuryHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-midnight">
      {/* Cinematic backdrop */}
      <Image
        src="/images/luxury/hero-estate.png"
        alt="Luxury Houston estate at twilight with freshly finished exterior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark editorial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/55 to-midnight/90" />
      <div className="absolute inset-0 bg-midnight/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="kicker mb-6 text-gold">Houston&apos;s Premier Painting Studio</p>
          <h1 className="font-display text-soft-white text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Houston&apos;s Prep-First
            <span className="block text-gold">Luxury House Painters</span>
          </h1>
          {/* Former H1 copy, demoted to a tagline directly below the keyword H1
              so the brand line is kept without competing for the H1 slot. */}
          <p className="mt-6 font-display text-2xl sm:text-3xl text-soft-white/90 text-balance">
            Old-School Preparation. Modern Luxury Finishes.
          </p>
          <h2 className="mt-6 font-manrope text-base sm:text-lg font-medium uppercase tracking-[0.18em] text-soft-white/90 text-balance">
            Interior &amp; Exterior Painters Serving Houston, Katy &amp; Cypress, TX
          </h2>
          {/* Entity blurb (AEO): who we are in one paragraph, visible above the fold.
              `.quick-answer` is the Speakable selector. */}
          <p className="quick-answer mt-6 font-manrope text-base sm:text-lg text-soft-white/90 leading-relaxed max-w-2xl">
            {BUSINESS.name} is a residential and commercial painting contractor founded in {BUSINESS.founded} by{" "}
            {BUSINESS.founder.name}, headquartered in Cypress, TX, and serving Greater Houston from five offices:
            Cypress, Houston, Katy, Sugar Land, and Magnolia. {BUSINESS.trust.liabilityCoverage} insured,{" "}
            {BUSINESS.trust.warrantyYears}-year workmanship warranty, free estimates, no money until you approve the estimate.{" "}
            <a href={PHONE_HREF} className="font-semibold text-gold hover:underline">
              {BUSINESS.phone}
            </a>
            .
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/painting-estimate-houston"
              className="font-manrope text-sm font-semibold bg-secondary text-secondary-foreground px-8 py-4 rounded-md hover:bg-secondary/90 transition-colors text-center"
            >
              Get My Free Estimate
            </Link>
            <a
              href={BUSINESS.scheduler.embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope text-sm font-semibold border border-gold text-soft-white px-8 py-4 rounded-md hover:bg-soft-white/10 transition-colors text-center flex items-center justify-center gap-2"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </a>
            <a
              href={PHONE_HREF}
              className="font-manrope text-sm font-semibold border border-soft-white/30 text-soft-white px-8 py-4 rounded-md hover:bg-soft-white/10 hover:border-gold transition-colors text-center flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Trust strip — credibility above the fold */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <ReviewsInline className="font-manrope text-sm text-soft-white/90 [&_svg]:text-gold" />
            </div>
            {[
              "Fully Insured",
              `${BUSINESS.trust.warrantyYears}-Year Warranty`,
              "No Upfront Payment",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" aria-hidden="true" />
                <span className="font-manrope text-sm text-soft-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small screens where the trust strip sits low */}
      <div className="hidden xl:flex absolute bottom-8 right-10 z-10 flex-col items-center gap-2">
        <span className="font-manrope text-[0.6rem] uppercase tracking-[0.3em] text-soft-white/60">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
