import { OfficeReviewCards } from "@/components/office-reviews"
import { PUBLISHED_REVIEWS } from "@/data/reviews"
import Link from "next/link"
import Image from "next/image"
import { ShieldCheck, Award, Sparkles, Star, ArrowUpRight } from "lucide-react"
import { BUSINESS, EPOXY_URL } from "@/lib/business"
import { Reveal } from "@/components/luxury/reveal"
import { BeforeAfterShowcase } from "@/components/luxury/before-after"

/* ─────────────────────────  TRUST  ───────────────────────── */

const stats = [
  { value: `${BUSINESS.trust.projectsCompleted}+`, label: "Projects Completed" },
  { value: `${BUSINESS.trust.warrantyYears}-Year`, label: "Workmanship Warranty" },
  { value: "$2M", label: "Liability Insured" },
  { value: "White-Glove", label: "Client Experience" },
]

export function LuxuryTrust() {
  return (
    <section className="bg-champagne py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl sm:text-4xl text-midnight">{s.value}</p>
              <p className="mt-2 font-manrope text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <span className="font-cormorant text-lg text-graphite italic">Preferred Application Partner</span>
          <div className="flex items-center gap-10">
            <Image src="/images/sherwin-williams-logo.png" alt="Sherwin-Williams preferred painting contractor" width={130} height={40} className="h-8 w-auto object-contain opacity-80" />
            <Image src="/images/benjamin-moore-logo.png" alt="Benjamin Moore preferred painting contractor" width={130} height={40} className="h-8 w-auto object-contain opacity-80" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────────────────  SERVICES  ───────────────────────── */

const serviceCards = [
  { title: "Interior Painting", href: "/interior-painting-houston-tx", img: "/images/interior-after-1.jpg" },
  { title: "Exterior Painting", href: "/exterior-painting-houston-tx", img: "/images/exterior-after-1.jpg" },
  { title: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx", img: "/images/cabinet-after-1.jpg" },
  // EPOXY_URL, not the -tx slug: that slug is a 308 hop to this same subdomain.
  { title: "Garage Epoxy", href: EPOXY_URL, img: "/images/luxury/finish-epoxy.png" },
  { title: "Soft Washing", href: "/soft-washing-houston-tx", img: "/images/soft-washing-hero.png" },
  // Real project photo, replacing the previous AI-rendered texture swatch.
  { title: "Venetian Plaster", href: "/venetian-plaster-houston-tx", img: "/images/venetian-plaster-greige-hallway.jpg" },
  { title: "Brick Limewash", href: "/limewash-brick-painting-houston-tx", img: "/images/luxury/project-exterior.png" },
  { title: "Drywall Restoration", href: "/drywall-repair-houston-tx", img: "/images/drywall-after-1.jpg" },
  { title: "Stucco Painting & Repair", href: "/stucco-painting-houston-tx", img: "/images/stucco-after-1.png" },
  { title: "Wood Rot Repair", href: "/wood-rot-repair-houston-tx", img: "/images/wood-rot-after-1.png" },
  { title: "Wallpaper Removal", href: "/wallpaper-removal-houston-tx", img: "/images/wallpaper-after-1.png" },
]

export function LuxuryServices() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="kicker mb-4">Our Craft</p>
          <h2 className="font-display text-3xl sm:text-5xl text-foreground leading-tight text-balance">
            Tailored finishes for exceptional homes
          </h2>
          <p className="mt-5 font-cormorant text-xl text-graphite leading-relaxed">
            From flawless walls to specialty plaster and cabinetry, every project begins with
            meticulous preparation and ends with a finish designed to last.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) * 80}>
              <Link
                href={card.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg"
              >
                <Image
                  src={card.img}
                  alt={`${card.title} by Houston Superior Painting`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <h3 className="font-display text-xl text-soft-white leading-tight">{card.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-gold opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                </div>
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────  BEFORE & AFTER  ───────────────────────── */

export function LuxuryBeforeAfter() {
  return (
    <section className="bg-champagne py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="kicker mb-4">The Transformation</p>
          <h2 className="font-display text-3xl sm:text-5xl text-foreground leading-tight text-balance">
            Preparation you can see
          </h2>
          <p className="mt-5 font-cormorant text-xl text-graphite leading-relaxed">
            Drag to reveal the difference meticulous prep and premium coatings make. Real Houston
            homes, transformed.
          </p>
        </Reveal>
        <Reveal>
          <BeforeAfterShowcase />
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────────────────  PROCESS  ───────────────────────── */

const steps = [
  { n: "01", title: "Consultation", desc: "An in-home walkthrough to understand your vision, surfaces, and timeline." },
  { n: "02", title: "Proposal", desc: "A transparent, itemized scope with premium materials specified up front." },
  { n: "03", title: "Preparation", desc: "Our old-school prep: repair, sand, caulk, prime. The foundation of every lasting finish." },
  { n: "04", title: "Craftsmanship", desc: "Skilled application by our in-house crew, with daily communication throughout." },
  { n: "05", title: "Final Walkthrough", desc: "We review every detail together and stand behind it with our warranty." },
]

export function LuxuryProcess() {
  return (
    <section className="bg-midnight py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16">
          <p className="kicker mb-4 text-gold">The Process</p>
          <h2 className="font-display text-3xl sm:text-5xl text-soft-white leading-tight text-balance">
            A calm, considered experience
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80} className="relative">
              <div className="h-px w-full bg-gradient-to-r from-gold/60 to-transparent mb-6" />
              <p className="font-display text-gold text-2xl mb-3">{step.n}</p>
              <h3 className="font-display text-xl text-soft-white mb-2">{step.title}</h3>
              <p className="font-manrope text-sm text-soft-white/60 leading-relaxed">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────  FEATURED PROJECTS  ───────────────────────── */

const projects = [
  { area: "Memorial", img: "/images/luxury/project-interior.png", tall: true },
  { area: "West University", img: "/images/luxury/project-kitchen.png", tall: false },
  { area: "River Oaks", img: "/images/luxury/hero-estate.png", tall: false },
  { area: "Bellaire", img: "/images/luxury/project-exterior.png", tall: true },
  { area: "The Heights", img: "/images/interior-after-1.jpg", tall: false },
  { area: "Fulshear", img: "/images/exterior-after-1.jpg", tall: false },
]

export function LuxuryProjects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="kicker mb-4">Featured Projects</p>
            <h2 className="font-display text-3xl sm:text-5xl text-foreground leading-tight text-balance">
              Homes across Houston&apos;s finest neighborhoods
            </h2>
          </div>
          <Link href="/projects" className="font-manrope text-sm font-semibold text-gold-deep hover:text-midnight transition-colors whitespace-nowrap">
            View all case studies &rarr;
          </Link>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {projects.map((p, i) => (
            <Reveal key={p.area} delay={(i % 3) * 80} className="break-inside-avoid">
              <div className={`group relative overflow-hidden rounded-lg ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={p.img}
                  alt={`Luxury painting project in ${p.area}, Houston`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 font-manrope text-xs uppercase tracking-[0.2em] text-soft-white">
                  {p.area}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-midnight px-8 py-3.5 font-manrope text-sm font-semibold text-soft-white hover:bg-midnight/90 transition-colors"
          >
            View all case studies &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────────────────  TESTIMONIALS  ───────────────────────── */

// Per-office Google figures always show; quotes only when owner-approved in data/reviews.ts.
const testimonials = PUBLISHED_REVIEWS.map((r) => ({ quote: r.excerpt, name: r.name, area: r.area, sourceUrl: r.sourceUrl }))

export function LuxuryTestimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-champagne py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="kicker mb-4">Client Experiences</p>
          <h2 className="font-display text-3xl sm:text-5xl text-foreground leading-tight text-balance">
            Trusted inside Houston&apos;s finest homes
          </h2>
          <p className="mt-5 font-manrope text-sm text-graphite">Each office has its own Google profile. Ratings as listed on Google:</p>
        </Reveal>

        <div className="mb-14">
          <OfficeReviewCards />
        </div>

        {testimonials.length > 0 && (
        <div
          className={
            testimonials.length === 1
              ? "max-w-2xl mx-auto"
              : testimonials.length === 2 || testimonials.length === 4
                ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                : "grid grid-cols-1 md:grid-cols-3 gap-6"
          }
        >
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="h-full bg-background rounded-lg p-8 border border-border flex flex-col">
                <span className="flex mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </span>
                <blockquote className="font-cormorant text-xl text-graphite leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <p className="font-manrope text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-manrope text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {t.area}, TX
                  </p>
                  {t.sourceUrl && (
                    <a href={t.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-manrope text-xs text-primary underline mt-2 inline-block">
                      Read on Google
                    </a>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}

/* ─────────────────────────  INSIGHTS  ───────────────────────── */

const insights = [
  {
    title: "What Exterior Painting Costs in Houston in 2026",
    href: "/exterior-house-painting-houston-cost-guide",
    img: "/images/luxury/project-exterior.png",
    cat: "Exterior",
  },
  {
    title: "Venetian Plaster: A Timeless Luxury Finish",
    href: "/blog/venetian-plaster-houston-tx",
    // Charcoal feature wall — a different real photo from the services card
    // above, so the two do not look like a repeated image on the homepage.
    img: "/images/venetian-plaster-charcoal-wall.jpg",
    cat: "Specialty Finishes",
  },
  {
    title: "How to Choose a Painting Contractor in Houston",
    href: "/houston-painting-contractor-guide",
    img: "/images/luxury/project-interior.png",
    cat: "Guide",
  },
]

export function LuxuryInsights() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="kicker mb-4">Insights</p>
            <h2 className="font-display text-3xl sm:text-5xl text-foreground leading-tight text-balance">
              Guidance from our studio
            </h2>
          </div>
          <Link href="/blog" className="font-manrope text-sm font-semibold text-gold-deep hover:text-midnight transition-colors whitespace-nowrap">
            View all insights &rarr;
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <Reveal key={post.href} delay={i * 90}>
              <Link href={post.href} className="group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-lg mb-5">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="kicker mb-2">{post.cat}</p>
                <h3 className="font-display text-xl text-foreground leading-snug group-hover:text-gold-deep transition-colors text-balance">
                  {post.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────  FINAL CTA  ───────────────────────── */

export function LuxuryCTA() {
  return (
    <section className="relative bg-midnight py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <Image src="/images/luxury/hero-estate.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <Sparkles className="h-7 w-7 text-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl text-soft-white leading-tight text-balance">
            Let&apos;s discuss your home
          </h2>
          <p className="mt-6 font-cormorant text-xl text-soft-white/75 leading-relaxed">
            Whether you&apos;re refreshing a single room or transforming an entire estate, we&apos;re here
            to guide the process with craftsmanship, communication, and meticulous preparation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="font-manrope text-sm font-semibold bg-secondary text-secondary-foreground px-8 py-4 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Request Project Assessment
            </Link>
            <Link
              href="/contact"
              className="font-manrope text-sm font-semibold border border-soft-white/30 text-soft-white px-8 py-4 rounded-md hover:border-gold hover:bg-soft-white/10 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Small icon trust row used under the hero (optional accent) */
export function LuxuryAssurance() {
  const items = [
    { icon: ShieldCheck, label: "Fully Insured" },
    { icon: Award, label: `${BUSINESS.trust.warrantyYears}-Year Workmanship Warranty` },
    { icon: Sparkles, label: "Premium Materials Only" },
  ]
  return (
    <div className="bg-midnight border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon className="h-4 w-4 text-gold" />
            <span className="font-manrope text-xs uppercase tracking-[0.15em] text-soft-white/70">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
