// app/about/page.tsx
// Houston Superior Painting — About page
// Fixes applied: self-referencing canonical, correct OG, geo Cypress HQ,
// meta-keywords removed, Person schema JJ Semo + Organization + AboutPage + Breadcrumb

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ReviewStructuredData } from "@/components/structured-data";

/* ────────────────────────────────────────────────────────────
   1. SEO METADATA
   ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    "About Houston Superior Painting — Meet JJ Semo & The Team",
  description:
    "Founded 2019 by JJ Semo in Cypress, TX. 500+ homes painted across Greater Houston. Background-checked crew, 5-year warranty, prep-first philosophy.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/about",
  },
  openGraph: {
    title:
      "About Houston Superior Painting — Meet JJ Semo & The Team",
    description:
      "Founded 2019 by JJ Semo. 500+ homes painted across Greater Houston. Background-checked crew, 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/about",
    type: "website",
    images: [
      {
        url: "/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "JJ Semo, founder of Houston Superior Painting, with his crew",
      },
    ],
    locale: "en_US",
    siteName: "Houston Superior Painting",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Houston Superior Painting — Meet JJ Semo & The Team",
    description:
      "Founded 2019 by JJ Semo. 500+ homes painted across Greater Houston.",
    images: ["/images/og-about.jpg"],
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Cypress",
    "geo.position": "29.9012;-95.6293",
    ICBM: "29.9012, -95.6293",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* ────────────────────────────────────────────────────────────
   2. JSON-LD SCHEMAS
   ──────────────────────────────────────────────────────────── */

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://houstonsuperiorpainting.com/about#jjsemo",
  name: "JJ Semo",
  givenName: "JJ",
  familyName: "Semo",
  jobTitle: "Founder & Lead Painter",
  description:
    "JJ Semo founded Houston Superior Painting in 2019 in Cypress, TX. With years of hands-on painting experience, JJ personally oversees quality control on every project and leads the company's prep-first philosophy.",
  url: "https://houstonsuperiorpainting.com/about",
  image: "https://houstonsuperiorpainting.com/images/jj-semo.jpg",
  worksFor: {
    "@type": "Organization",
    "@id": "https://houstonsuperiorpainting.com/#organization",
    name: "Houston Superior Painting",
    url: "https://houstonsuperiorpainting.com",
  },
  founderOf: {
    "@id": "https://houstonsuperiorpainting.com/#organization",
  },
  knowsAbout: [
    "Interior Painting",
    "Exterior Painting",
    "Cabinet Refinishing",
    "Limewash and German Smear Techniques",
    "Drywall Repair and Texture Matching",
    "Houston Climate Coatings",
    "Sherwin-Williams Premium Products",
    "Benjamin Moore Premium Products",
    "Spray Application Techniques",
    "Color Consultation",
  ],
  alumniOf: "Painting Industry Apprenticeship",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Greater Houston, Texas",
  },
};

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://houstonsuperiorpainting.com/#organization",
  name: "Houston Superior Painting",
  legalName: "Houston Superior Painting LLC",
  url: "https://houstonsuperiorpainting.com",
  logo: {
    "@type": "ImageObject",
    url: "https://houstonsuperiorpainting.com/images/logo.png",
    width: 600,
    height: 60,
  },
  image: "https://houstonsuperiorpainting.com/images/og-cover.jpg",
  description:
    "Professional interior, exterior, cabinet, drywall, pressure washing, and limewash painting contractor serving Greater Houston since 2019. Prep-first philosophy. 5-year warranty.",
  foundingDate: "2019",
  founder: { "@id": "https://houstonsuperiorpainting.com/about#jjsemo" },
  foundingLocation: {
    "@type": "Place",
    name: "Cypress, Texas",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cypress",
      addressRegion: "TX",
      postalCode: "77429",
      addressCountry: "US",
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "14150 Huffmeister Rd, Suite 410",
    addressLocality: "Cypress",
    addressRegion: "TX",
    postalCode: "77429",
    addressCountry: "US",
  },
  telephone: "+1-346-594-5960",
  email: "info@houstonsuperiorpainting.com",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 5,
    maxValue: 15,
  },
  slogan: "Old-School Preparation. Premium Long-Lasting Results.",
  knowsLanguage: ["en", "es"],
  sameAs: [
    "https://www.google.com/maps/place/Houston+Superior+Painting../@29.7143308,-95.4349558,17z/data=!4m8!3m7!1s0x1c94ce195628f7bf:0xcc8b6e63c1c05fe7",
    "https://www.facebook.com/houstonsuperiorpainting",
    "https://www.instagram.com/houstonsuperiorpainting",
  ]
};

const ABOUTPAGE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://houstonsuperiorpainting.com/about#webpage",
  url: "https://houstonsuperiorpainting.com/about",
  name: "About Houston Superior Painting — Meet JJ Semo & The Team",
  inLanguage: "en-US",
  isPartOf: { "@id": "https://houstonsuperiorpainting.com/#website" },
  about: { "@id": "https://houstonsuperiorpainting.com/#organization" },
  mainEntity: { "@id": "https://houstonsuperiorpainting.com/about#jjsemo" },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://houstonsuperiorpainting.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://houstonsuperiorpainting.com/about",
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   3. PAGE DATA
   ──────────────────────────────────────────────────────────── */

const values = [
  {
    title: "Integrity First",
    body: "We do what we say we'll do. No hidden fees, no surprises. Just honest pricing and honest work.",
  },
  {
    title: "Craftsmanship",
    body: "Every wall, every trim piece, every cabinet gets our full attention. We take pride in the details others miss.",
  },
  {
    title: "Respect",
    body: "Your home is your sanctuary. We treat it with the same care and respect we'd give our own.",
  },
  {
    title: "Reliability",
    body: "We show up on time, every time. We finish when we say we will. Your schedule matters to us.",
  },
  {
    title: "Community",
    body: "Houston is our home. We're proud to make our neighbors' homes more beautiful, one project at a time.",
  },
  {
    title: "Accountability",
    body: "We stand behind our work with a 5-year warranty. If something's not right, we make it right.",
  },
];

const cities = [
  { name: "Houston", slug: "painters-houston-tx" },
  { name: "Katy", slug: "painters-katy-tx" },
  { name: "Cypress", slug: "painters-cypress-tx" },
  { name: "Sugar Land", slug: "painters-sugar-land-tx" },
  { name: "Richmond", slug: "painters-richmond-tx" },
  { name: "Fulshear", slug: "painters-fulshear-tx" },
  { name: "Pearland", slug: "painters-pearland-tx" },
  { name: "Memorial", slug: "painters-memorial-tx" },
  { name: "The Heights", slug: "painters-the-heights-tx" },
  { name: "Bellaire", slug: "painters-bellaire-tx" },
  { name: "The Woodlands", slug: "painters-the-woodlands-tx" },
  { name: "Rosenberg", slug: "painters-rosenberg-tx" },
];

/* ────────────────────────────────────────────────────────────
   4. PAGE COMPONENT
   ──────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUTPAGE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }}
      />
      <ReviewStructuredData />


      <main className="bg-white text-foreground">
        {/* ─── HERO ─── */}
        <section className="relative bg-muted py-16 md:py-24 border-b border-border">
          <div className="mx-auto max-w-6xl px-4">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>›</li>
                <li className="text-foreground">About</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-muted text-gold-deep font-manrope text-xs font-semibold uppercase tracking-[0.22em] px-4 py-2 rounded-full mb-5">
                  <span aria-hidden>🏠</span>
                  <span>Founded 2019 in Cypress, TX</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
                  About Houston Superior Painting
                </h1>

                <p className="mt-6 text-xl text-foreground/75 leading-relaxed">
                  Since 2019, we&apos;ve been transforming Houston homes with
                  quality craftsmanship, honest service, and a commitment to
                  doing things right. Meet JJ Semo and the team behind 500+
                  successful projects across Greater Houston.
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-foreground/75">
                  <li className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> 500+ Homes
                    Painted
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> Background-Checked
                    Crew
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> 5-Year Warranty
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> BBB Accredited
                  </li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-4 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg text-base shadow-md transition"
                  >
                    Get My Free Estimate →
                  </Link>
                  <a
                    href="tel:+13465945960"
                    aria-label="Call Houston Superior Painting at 346-594-5960"
                    className="inline-flex items-center justify-center px-6 py-4 bg-foreground hover:bg-foreground/90 text-white font-semibold rounded-lg text-base transition"
                  >
                    (346) 594-5960
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-muted">
                <Image
                  src="/images/jj-semo.jpg"
                  alt="JJ Semo, founder of Houston Superior Painting in Cypress, TX"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOUNDER'S STORY ─── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              From One Man with a Brush to Houston&apos;s Trusted Painting Team
            </h2>

            <div className="prose prose-lg max-w-none text-foreground/75 space-y-5 leading-relaxed">
              <p>
                My name is <strong>JJ Semo</strong>, and I started Houston
                Superior Painting in 2019 with nothing but a ladder, some
                brushes, and a determination to do things differently than the
                painters I&apos;d seen cut corners throughout my career.
              </p>

              <p>
                Before starting Houston Superior Painting, I spent years working
                in the painting industry and learning the trade from experienced
                craftsmen. But I also saw too many contractors who viewed
                customers as just another job number—rushing through projects,
                using cheap materials, and disappearing when problems arose.
              </p>

              <p>
                I knew there had to be a better way. When I started my own
                company, I made a simple promise:{" "}
                <strong>
                  treat every home like it was my own family&apos;s home.
                </strong>{" "}
                That means using premium paints, taking time for proper prep
                work, protecting your belongings like they&apos;re priceless,
                and standing behind our work long after the final brushstroke.
              </p>

              <p>
                That approach has grown Houston Superior Painting from just me
                to a skilled team of professionals who share my values.
                We&apos;ve painted{" "}
                <strong>500+ homes across the Greater Houston area</strong>, and
                many of our customers have become friends who call us back year
                after year.
              </p>

              <p>
                When you hire us, you&apos;re not just getting painters —
                you&apos;re getting a team that genuinely cares about making
                your home beautiful and your experience stress-free.
              </p>

              <p className="text-foreground font-semibold pt-4 border-t border-border mt-8">
                — JJ Semo, Founder
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg transition"
              >
                Get Your Free Estimate →
              </Link>
              <a
                href="tel:+13465945960"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground hover:bg-foreground/90 text-white font-semibold rounded-lg transition"
              >
                (346) 594-5960
              </a>
            </div>
          </div>
        </section>

        {/* ─── MEET THE CREW ─── */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Meet Our Crew
                </h2>
                <p className="text-foreground/75 text-lg mb-6 leading-relaxed">
                  Every member of our team is background-checked, trained in our
                  methods, and committed to delivering exceptional results.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  A Team Built on Trust
                </h3>
                <p className="text-foreground/75 mb-4 leading-relaxed">
                  Hiring someone to work inside your home requires trust.
                  That&apos;s why we&apos;re extremely selective about who joins
                  our team. Every crew member goes through:
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      <strong>Background checks</strong> — We verify every team
                      member&apos;s history before they step foot in your home.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      <strong>Hands-on training</strong> — New painters work
                      alongside experienced crew members until they meet our
                      standards.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      <strong>Ongoing education</strong> — We stay current on
                      the latest techniques, products, and safety practices.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>
                      <strong>Customer service focus</strong> — Technical skill
                      matters, but so does how we treat you and your home.
                    </span>
                  </li>
                </ul>
                <p className="text-foreground/75 leading-relaxed">
                  Most of our crew has been with us for{" "}
                  <strong>3+ years</strong>. Low turnover means you get
                  experienced professionals who take pride in their work — not
                  temporary workers learning on your project.
                </p>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-muted">
                <Image
                  src="/images/painting-team.jpg"
                  alt="Houston Superior Painting crew at work in Greater Houston"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">
                Craftsmanship You Can See
              </h3>
              <p className="text-foreground/75 text-lg mb-6 max-w-3xl leading-relaxed">
                The difference between an okay paint job and a great one is in
                the details most people never see — until something goes wrong.
                Our team is trained to do things right:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Thorough surface preparation and repair",
                  "Premium primers matched to your surfaces",
                  "Factory-finish spray techniques for cabinets",
                  "Careful masking and protection of your belongings",
                  "Clean, organized job sites every single day",
                  "Final walkthrough to ensure your complete satisfaction",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 bg-white border border-border rounded-lg p-4"
                  >
                    <span className="text-accent mt-0.5">✓</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── OUR VALUES ─── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Our Values
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
              These aren&apos;t just words on a wall. They guide every decision
              we make and every interaction we have.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-muted border border-border rounded-xl p-6 hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CREDENTIALS / LICENSE & INSURANCE ─── */}
        <section className="py-16 md:py-24 bg-muted border-t border-border">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Insured, Bonded &amp; Accredited
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                When you invite a crew into your home, credentials matter. Texas
                does not issue a state license for residential painting
                contractors, so insurance is the credential that actually
                protects you. Houston Superior Painting is a fully insured,
                bonded, registered Texas LLC — and we&apos;re happy to provide
                documentation before any project begins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "General Liability Insurance",
                  body: "We carry full general liability coverage on every job. Certificates of insurance are available on request before work starts.",
                },
                {
                  title: "Workers' Compensation",
                  body: "Our crew is covered by workers' compensation, so you're never exposed to liability for an on-site injury.",
                },
                {
                  title: "Registered Texas Contractor",
                  body: "Houston Superior Painting LLC is a registered Texas business serving Harris, Fort Bend, and Montgomery counties. Texas does not license residential painters at the state level.",
                },
                {
                  title: "BBB Accredited",
                  body: "We hold Better Business Bureau accreditation and maintain a track record of resolving any concern quickly and fairly.",
                },
                {
                  title: "Manufacturer Preferred",
                  body: "As a Sherwin-Williams and Benjamin Moore preferred contractor, we use premium, warrantied products matched to Houston's climate.",
                },
                {
                  title: "5-Year Written Warranty",
                  body: "Every project is backed by a written 5-year workmanship warranty. If something isn't right, we come back and make it right.",
                },
              ].map((cred) => (
                <div
                  key={cred.title}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-accent" aria-hidden>✓</span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {cred.title}
                      </h3>
                      <p className="text-foreground/75 leading-relaxed">{cred.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
              Want to see our insurance certificate or references before
              you book?{" "}
              <Link href="/contact" className="text-gold-deep font-medium hover:underline">
                Just ask
              </Link>{" "}
              — we&apos;ll send them right over.
            </p>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="py-12 md:py-16 bg-midnight text-soft-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "2019", label: "Founded" },
                { value: "500+", label: "Homes Painted" },
                { value: "4.9★", label: "Google Rating" },
                { value: "5 Year", label: "Warranty" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-soft-white/70 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICE AREAS ─── */}
        <section className="py-16 md:py-24 bg-muted border-y border-border">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
              Serving All of Greater Houston
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              From Cypress to Pearland, Memorial to The Woodlands — we paint
              homes across all of Greater Houston.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="block bg-white border border-border rounded-lg px-4 py-3 text-center font-medium text-foreground hover:border-gold hover:text-foreground hover:shadow-sm transition"
                >
                  {c.name}, TX
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-foreground/75 text-lg mb-8 max-w-2xl mx-auto">
              Join the hundreds of Houston homeowners who trust us with their
              most important investment. Get your free estimate today — no
              pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-lg text-base shadow-md transition"
              >
                Schedule Free Estimate →
              </Link>
              <a
                href="tel:+13465945960"
                aria-label="Call Houston Superior Painting at 346-594-5960"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground hover:bg-foreground/90 text-white font-semibold rounded-lg text-base transition"
              >
                (346) 594-5960
              </a>
              <a
                href="sms:+13465945960"
                aria-label="Text Houston Superior Painting"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground hover:bg-foreground/90 text-white font-semibold rounded-lg text-base transition"
              >
                Text Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
