// app/soft-washing-houston-tx/page.tsx
// Houston Superior Painting — Soft Washing service page

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soft Washing Houston TX — Houston Superior Painting",
  description:
    "Professional soft washing in Houston TX. Safely remove mold, algae, mildew & black stains from stucco, painted siding, brick & roofs. Plant-safe, low-pressure.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/soft-washing-houston-tx",
  },
  openGraph: {
    title: "Soft Washing Houston TX — Houston Superior Painting",
    description:
      "Safely remove mold, algae, mildew & black stains without damaging your home. Low-pressure soft washing for delicate Houston exteriors.",
    url: "https://houstonsuperiorpainting.com/soft-washing-houston-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [
      {
        url: "https://houstonsuperiorpainting.com/images/og/og-soft-washing.jpg",
        width: 1200,
        height: 630,
        alt: "Soft Washing Houston TX - Houston Superior Painting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soft Washing Houston TX — Houston Superior Painting",
    description:
      "Safely remove mold, algae, mildew & black stains without damaging your home. Low-pressure soft washing for delicate Houston exteriors.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-soft-washing.jpg"],
  },
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/soft-washing-houston-tx#service",
  name: "Soft Washing in Houston, TX",
  description:
    "Professional low-pressure soft washing for painted siding, stucco, brick, roofs, fascia, fences, patios, and pool decks in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. Safely removes mold, algae, mildew, and black stains. Pre-paint prep specialists.",
  serviceType: "Soft Washing",
  provider: { "@id": "https://houstonsuperiorpainting.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Katy" },
    { "@type": "City", name: "Cypress" },
    { "@type": "City", name: "Sugar Land" },
    { "@type": "City", name: "Richmond" },
    { "@type": "City", name: "Fulshear" },
    { "@type": "City", name: "Pearland" },
    { "@type": "Neighborhood", name: "Memorial" },
    { "@type": "Neighborhood", name: "The Heights" },
    { "@type": "City", name: "The Woodlands" },
    { "@type": "City", name: "Bellaire" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 250,
      maxPrice: 1500,
      priceCurrency: "USD",
    },
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Soft Washing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Soft Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stucco & EIFS Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brick Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Soft Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fascia & Soffit Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence & Patio Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Paint Surface Prep" } },
    ],
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does soft washing cost in Houston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Soft washing in Houston typically ranges from a few hundred dollars to over a thousand, depending on home size, surface condition, and accessibility. Most single-story homes fall between $350 and $650, and larger two-story homes between $550 and $1,000. Houston Superior Painting provides free on-site quotes with no minimum charge.",
      },
    },
    {
      "@type": "Question",
      name: "Is soft washing safe for painted surfaces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Soft washing is specifically designed to clean painted and delicate surfaces safely. It uses low pressure (under 500 PSI) combined with biodegradable cleaning solutions, so it lifts mold, algae, and dirt without stripping paint, etching stucco, or forcing water behind siding.",
      },
    },
    {
      "@type": "Question",
      name: "How long do soft washing results last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Houston homes stay visibly cleaner for 12–24 months depending on shade, tree cover, and humidity. Because soft washing kills mold and algae at the root rather than just rinsing the surface, results last significantly longer than a standard water rinse.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use bleach for soft washing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use professional-grade cleaning solutions formulated to kill algae, mold, and mildew while protecting surrounding landscaping. Plants are pre-wet and covered, solutions are applied at safe concentrations, and foliage is thoroughly rinsed after the wash. We have zero plant-damage claims to date.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between soft washing and pressure washing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pressure washing uses high-PSI water for hard surfaces like concrete and brick. Soft washing uses low pressure under 500 PSI plus biodegradable detergents for delicate surfaces like painted siding, stucco, roofs, and windows. Using the wrong method can damage surfaces, so we match the method to each material.",
      },
    },
    {
      "@type": "Question",
      name: "Should I soft wash my home before painting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Soft washing is one of the most important steps before exterior painting. Removing mildew, dirt, chalking, and contaminants allows primers and paint to bond properly for maximum durability. Pre-paint soft washing is included with all Houston Superior Painting exterior projects.",
      },
    },
  ],
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://houstonsuperiorpainting.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://houstonsuperiorpainting.com/#services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Soft Washing Houston TX",
      item: "https://houstonsuperiorpainting.com/soft-washing-houston-tx",
    },
  ],
};

const SPEAKABLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://houstonsuperiorpainting.com/soft-washing-houston-tx#webpage",
  url: "https://houstonsuperiorpainting.com/soft-washing-houston-tx",
  name: "Soft Washing Houston TX | Houston Superior Painting",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-h1", ".quick-answer", ".pricing-snippet"],
  },
  inLanguage: "en-US",
};

const cities = [
  { name: "Houston", slug: "painters-houston-tx" },
  { name: "Katy", slug: "painters-katy-tx" },
  { name: "Cypress", slug: "painters-cypress-tx" },
  { name: "Sugar Land", slug: "painters-sugar-land-tx" },
  { name: "Richmond", slug: "painters-richmond-tx" },
  { name: "Fulshear", slug: "painters-fulshear-tx" },
  { name: "Bellaire", slug: "painters-bellaire-tx" },
  { name: "Memorial", slug: "painters-memorial-tx" },
  { name: "The Heights", slug: "painters-the-heights-tx" },
  { name: "Pearland", slug: "painters-pearland-tx" },
  { name: "The Woodlands", slug: "painters-the-woodlands-tx" },
];

const services = [
  { title: "House Soft Washing", body: "Remove algae, mildew, dirt, and oxidation from painted siding and exteriors." },
  { title: "Stucco Cleaning", body: "Safely clean EIFS, stucco, and textured coatings without etching." },
  { title: "Brick Cleaning", body: "Restore brick appearance while preserving mortar joints." },
  { title: "Roof Soft Washing", body: "Remove black streaks and algae growth without lifting shingles." },
  { title: "Fascia & Soffit Cleaning", body: "Brighten exterior trim and improve overall curb appeal." },
  { title: "Driveway Pretreatment", body: "Treat mildew and organic growth before pressure cleaning." },
  { title: "Fence Cleaning", body: "Lift gray weathering, mildew, and grime from wood and vinyl fences." },
  { title: "Patio Cleaning", body: "Clear organic stains from covered patios and outdoor living areas." },
  { title: "Pool Deck Cleaning", body: "Remove slippery algae and buildup from pool decks safely." },
  { title: "Exterior Window Washing", body: "Streak-free exterior glass cleaning to finish the job." },
];

const benefits = [
  "Kills mold and algae at the source",
  "Longer-lasting results than a water rinse",
  "Protects paint finishes from damage",
  "Dramatically increases curb appeal",
  "Helps prepare surfaces before painting",
  "Extends the life of exterior coatings",
  "Safe around landscaping and plants",
  "Uses eco-friendly, biodegradable products",
  "Reduces allergens and surface bacteria",
  "Improves overall property value",
];

const processSteps = [
  { n: 1, t: "Inspection", d: "On-site walkthrough identifies surfaces, stain types, and the right method. You get a clear written quote — no day-of upsells." },
  { n: 2, t: "Protect Plants", d: "Landscaping is pre-wet and delicate plants are covered. Outlets, fixtures, and window seals are checked and protected." },
  { n: 3, t: "Apply Cleaning Solution", d: "Biodegradable, professional-grade solution is applied at low pressure to break down mold, algae, and mildew at the root." },
  { n: 4, t: "Dwell Time", d: "The solution is given time to penetrate and kill organic growth so stains are removed completely, not just rinsed off." },
  { n: 5, t: "Low-Pressure Rinse", d: "Surfaces are rinsed with controlled low pressure that cleans thoroughly without damaging paint, stucco, or roofing." },
  { n: 6, t: "Final Inspection", d: "We walk the property with you to confirm results. Any spots that need attention are addressed on the spot." },
];

const faqItems = [
  { q: "How much does soft washing cost in Houston?", a: "Pricing depends on home size, surface condition, and accessibility. Most single-story homes range $350–$650 and larger two-story homes $550–$1,000. We provide free on-site quotes with no minimum charge." },
  { q: "Is soft washing safe for painted surfaces?", a: "Yes. Soft washing is specifically designed to clean painted and delicate surfaces safely, using low pressure and biodegradable solutions that lift grime without stripping paint or etching stucco." },
  { q: "How long do results last?", a: "Most homes stay visibly cleaner for 12–24 months depending on environmental conditions. Because we kill mold and algae at the root, results last far longer than a standard water rinse." },
  { q: "Do you use bleach?", a: "We use professional cleaning solutions formulated to kill algae, mold, and mildew while protecting surrounding landscaping. Plants are pre-wet, covered, and rinsed, with zero plant-damage claims to date." },
  { q: "What's the difference between soft washing and pressure washing?", a: "Pressure washing uses high-PSI water for hard surfaces like concrete and brick. Soft washing uses low pressure under 500 PSI plus detergents for delicate surfaces like siding, stucco, and roofs. We match the method to the material." },
  { q: "Should I soft wash before painting?", a: "Yes. Removing mildew, dirt, and chalking lets primer and paint bond properly for maximum durability. Pre-paint soft washing is included with all our exterior painting projects." },
];

export default function SoftWashingHoustonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_JSONLD) }} />

      <main className="bg-white text-zinc-900">
        {/* HERO */}
        <section className="relative bg-zinc-50 py-16 md:py-24 border-b border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li aria-hidden>›</li>
                <li><Link href="/#services" className="hover:underline">Services</Link></li>
                <li aria-hidden>›</li>
                <li className="text-zinc-900">Soft Washing Houston TX</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                  <span aria-hidden>★★★★★</span>
                  <span>Rated 4.9/5 by 200+ Houston Homeowners</span>
                </div>
                <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
                  Houston Soft Washing Services
                </h1>
                <p className="mt-6 text-xl text-zinc-700 leading-relaxed">
                  Safely remove mold, algae, mildew, dirt, and black stains without damaging your home. We restore your home&apos;s beauty using low-pressure soft washing methods recommended for delicate exterior surfaces.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-700">
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Safe for Stucco</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Safe for Painted Surfaces</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> No High-Pressure Damage</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Biodegradable Solutions</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Fully Insured</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> 100% Satisfaction Guaranteed</li>
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-base shadow-md transition">Free Estimate →</Link>
                  <a href="tel:+13465945960" aria-label="Call Houston Superior Painting" className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">Call (346) 594-5960</a>
                </div>
                <p className="mt-4 text-sm text-zinc-500">Average response time: <strong className="text-zinc-700">23 minutes</strong> during business hours.</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
                <Image src="/images/soft-washing-hero.png" alt="Technician soft washing a luxury Houston home to remove algae and black stains" fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">Quick Answer</h2>
            <p className="quick-answer text-lg md:text-xl text-zinc-800 leading-relaxed">
              Houston Superior Painting provides professional soft washing in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. Soft washing uses <strong>low pressure (under 500 PSI)</strong> plus <strong>biodegradable cleaning solutions</strong> to safely remove mold, algae, mildew, and black stains from stucco, painted siding, brick, and roofs. Most projects cost <strong>$350–$1,000</strong>, and pre-paint prep is included with all exterior painting. Free quotes at <a href="tel:+13465945960" className="text-emerald-700 underline font-semibold">(346) 594-5960</a>.
            </p>
          </div>
        </section>

        {/* WHAT IS SOFT WASHING */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What Is Soft Washing?</h2>
            <div className="space-y-5 text-lg text-zinc-700 leading-relaxed">
              <p>
                Soft washing is a low-pressure exterior cleaning process that combines specialized equipment with professional-grade cleaning solutions to kill and remove algae, mold, mildew, bacteria, dirt, and organic stains.
              </p>
              <p>
                Unlike traditional pressure washing, soft washing cleans surfaces without causing damage to paint, stucco, wood, siding, roofing materials, or decorative finishes.
              </p>
              <p>
                Soft washing is recommended by manufacturers for many delicate surfaces and provides longer-lasting results by treating the root cause of staining — not just rinsing the surface.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Soft Washing Services We Provide</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">Comprehensive exterior cleaning tailored to every surface on your Houston home.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item) => (
                <div key={item.title} className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY HOMEOWNERS CHOOSE + PROCESS */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Homeowners Choose Soft Washing</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-zinc-800">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2"><span className="text-emerald-600 mt-1">✓</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 6-Step Process</h2>
              <ol className="space-y-5">
                {processSteps.map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center">{step.n}</div>
                    <div><h3 className="font-semibold">{step.t}</h3><p className="text-zinc-700 mt-1">{step.d}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PERFECT BEFORE PAINTING */}
        <section className="py-16 md:py-24 bg-white border-y border-zinc-200">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Best Surface Preparation Before Exterior Painting</h2>
            <p className="text-lg text-zinc-700 leading-relaxed">
              Soft washing is one of the most important steps before painting. Removing mildew, dirt, chalking, and contaminants allows primers and paints to properly bond for maximum durability.
            </p>
            <p className="mt-8 text-2xl md:text-3xl font-bold text-emerald-700 text-balance">
              Old-School Preparation. Premium Long-Lasting Results.
            </p>
            <div className="mt-8">
              <Link href="/exterior-painting-houston-tx" className="inline-flex items-center justify-center px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg transition">
                Explore Exterior Painting →
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Soft Washing Service Areas</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">We soft wash homes across all of Greater Houston:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cities.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="block bg-white border border-zinc-200 rounded-lg px-4 py-3 text-center font-medium hover:border-emerald-600 hover:text-emerald-700 hover:shadow-sm transition">{c.name}, TX</Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Soft Washing FAQs</h2>
            <div className="pricing-snippet divide-y divide-zinc-200 border-y border-zinc-200 bg-white rounded-xl px-6">
              {faqItems.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4">{item.q}</h3>
                    <span aria-hidden className="ml-4 text-2xl text-emerald-700 transition-transform group-open:rotate-45 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-zinc-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-emerald-700 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bring Back Your Home&apos;s Beauty Without Damage</h2>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">Safe. Effective. Long-lasting. Get your free soft wash estimate today.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold rounded-lg text-base shadow-md transition">Get Your Free Soft Wash Estimate →</Link>
              <a href="tel:+13465945960" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">Call (346) 594-5960</a>
              <a href="sms:+13465945960" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-900 hover:bg-emerald-950 text-white font-semibold rounded-lg text-base transition">Text Us</a>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/pressure-washing-houston-tx", title: "Pressure Washing", desc: "Driveways, concrete & hard surfaces" },
                { href: "/exterior-painting-houston-tx", title: "Exterior Painting", desc: "Built for Houston climate" },
                { href: "/limewash-brick-painting-houston-tx", title: "Limewash & Brick", desc: "European-style finishes" },
                { href: "/interior-painting-houston-tx", title: "Interior Painting", desc: "Walls, ceilings, trim" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="block bg-zinc-50 border border-zinc-200 rounded-xl p-5 hover:border-emerald-600 hover:shadow-sm transition">
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-zinc-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
