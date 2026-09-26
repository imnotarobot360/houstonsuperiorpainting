// app/drywall-repair-houston-tx/page.tsx
// Houston Superior Painting — Drywall Repair service page

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drywall Repair Houston TX — Houston Superior Painting",
  description: "Professional drywall repair in Houston TX. Cracks, holes, water damage, seamless texture matching. $200-$1,500. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/drywall-repair-houston-tx",
  },
  openGraph: {
    title: "Drywall Repair Houston TX — Houston Superior Painting",
    description: "Professional drywall repair in Houston TX. Cracks, holes, water damage, seamless texture matching. Free estimates.",
    url: "https://houstonsuperiorpainting.com/drywall-repair-houston-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-drywall-repair.jpg",
      width: 1200,
      height: 630,
      alt: "Drywall Repair Houston TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Repair Houston TX — Houston Superior Painting",
    description: "Professional drywall repair in Houston TX. Cracks, holes, water damage, seamless texture matching.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-drywall-repair.jpg"],
  },
}

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://houstonsuperiorpainting.com/drywall-repair-houston-tx#service",
  name: "Drywall Repair & Texture Matching in Houston, TX",
  description:
    "Professional drywall repair for cracks, holes, water damage, nail pops, settling damage, and texture matching (orange peel, knockdown, smooth) in Houston, Katy, Cypress, Sugar Land and surrounding TX cities. Same-day repairs available.",
  serviceType: "Drywall Repair",
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
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 200,
      maxPrice: 3500,
      priceCurrency: "USD",
    },
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drywall Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crack & Nail-Pop Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hole Patching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Damage Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Orange Peel Texture Match" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Knockdown Texture Match" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smooth Wall Conversion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Popcorn Ceiling Removal" } },
    ],
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does drywall repair cost in Houston, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Drywall repair in Houston ranges from $200 for small patches to $1,500 for whole-room repairs. Typical projects: nail pop repair $150–$300, fist-sized hole $200–$400, door-knob hole $250–$500, water damage repair $400–$1,200, full ceiling crack repair $500–$1,500. Houston Superior Painting provides free on-site estimates with no minimum charge.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match my existing wall texture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We match all common Houston wall textures including orange peel (most common in Houston homes), knockdown, smooth, hand-trowel skip, and Spanish lace. Our texture-matching process tests on a hidden area first to ensure the repair becomes invisible after painting.",
      },
    },
    {
      "@type": "Question",
      name: "How long does drywall repair take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most small drywall repairs are completed in 1 day. Larger water damage repairs or full-room re-texturing take 2–4 days because joint compound needs to cure between coats. We typically finish patch, prime, and paint within 2 days for a single-room project.",
      },
    },
    {
      "@type": "Question",
      name: "Do you repair water damage from roof leaks or pipe bursts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair drywall water damage from roof leaks, plumbing failures, AC condensation, and storm damage common in Houston. The water source must be fixed first. We remove damaged drywall, treat for mold if present, install new drywall, mud, texture-match, prime, and paint.",
      },
    },
    {
      "@type": "Question",
      name: "Can you remove popcorn ceilings in my Houston home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We scrape popcorn ceilings and apply smooth or modern knockdown finishes. Popcorn ceiling removal typically costs $650–$1,400 per room, including patching imperfections, skim coating, priming, and painting. Older ceilings may require asbestos testing before removal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you paint over the drywall repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every drywall repair includes priming and painting to match surrounding walls. We can paint just the repair area for a small patch or the entire wall to ensure no color difference is visible. Paint and primer are included in our written estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle drywall repair for whole-home renovations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle whole-home drywall repair for renovations, water damage restoration, and pre-sale home prep. We coordinate with general contractors, electricians, and plumbers to repair openings cleanly after their work is complete.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve for drywall repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Houston Superior Painting provides drywall repair throughout Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, Bellaire, and The Woodlands TX. Free estimates at (346) 594-5960.",
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
    { "@type": "ListItem", position: 3, name: "Drywall Repair Houston TX", item: "https://houstonsuperiorpainting.com/drywall-repair-houston-tx" },
  ],
};

const SPEAKABLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://houstonsuperiorpainting.com/drywall-repair-houston-tx#webpage",
  url: "https://houstonsuperiorpainting.com/drywall-repair-houston-tx",
  name: "Drywall Repair Houston TX | Houston Superior Painting",
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
  { name: "Pearland", slug: "painters-pearland-tx" },
  { name: "Memorial", slug: "painters-memorial-tx" },
  { name: "The Heights", slug: "painters-the-heights-tx" },
  { name: "Bellaire", slug: "painters-bellaire-tx" },
  { name: "The Woodlands", slug: "painters-the-woodlands-tx" },
  { name: "Rosenberg", slug: "painters-rosenberg-tx" },
];

const pricingRows = [
  { project: "Nail pop repair (single)", price: "$150 – $300", note: "Same day" },
  { project: "Small hole patch (fist-sized)", price: "$200 – $400", note: "1 day" },
  { project: "Door-knob hole repair", price: "$250 – $500", note: "1 day" },
  { project: "Ceiling crack repair (single room)", price: "$300 – $800", note: "1–2 days" },
  { project: "Water damage repair (small)", price: "$400 – $900", note: "2–3 days" },
  { project: "Water damage repair (room-size)", price: "$900 – $2,500", note: "3–5 days" },
  { project: "Full-room re-texture (orange peel)", price: "$650 – $1,500", note: "2–3 days" },
  { project: "Popcorn ceiling removal (per room)", price: "$650 – $1,400", note: "1–2 days" },
  { project: "Whole-home drywall repair package", price: "$1,800 – $3,500", note: "3–5 days" },
];

const faqItems = [
  {
    q: "How much does drywall repair cost in Houston?",
    a: "Drywall repair in Houston ranges from $200 for small patches to $1,500 for whole-room repairs. Common pricing: nail pops $150–$300, fist-sized hole $200–$400, water damage $400–$1,200. We provide free on-site estimates with no minimum charge.",
  },
  {
    q: "Can you match my existing wall texture?",
    a: "Yes. We match all common Houston wall textures including orange peel (most common in Houston homes), knockdown, smooth, hand-trowel skip, and Spanish lace. We test on a hidden area first so repairs become invisible after painting.",
  },
  {
    q: "How long does drywall repair take?",
    a: "Most small repairs complete in 1 day. Larger water damage or full-room re-texturing takes 2–4 days because joint compound must cure between coats. We typically finish patch, prime, and paint within 2 days for single-room projects.",
  },
  {
    q: "Do you repair water damage from roof leaks or pipe bursts?",
    a: "Yes. We repair drywall water damage from roof leaks, plumbing failures, AC condensation, and storm damage common in Houston. The water source must be fixed first. We remove damaged drywall, treat mold if present, install new drywall, texture-match, prime, and paint.",
  },
  {
    q: "Can you remove popcorn ceilings?",
    a: "Yes. We scrape popcorn ceilings and apply smooth or knockdown finishes. Popcorn removal typically costs $650–$1,400 per room including patching, skim coating, priming, and painting. Older ceilings may require asbestos testing before removal.",
  },
  {
    q: "Do you paint over the drywall repair?",
    a: "Yes. Every repair includes priming and painting to match surrounding walls. We can paint just the repair area for small patches or the full wall to eliminate any color difference. Paint and primer are included in your written estimate.",
  },
  {
    q: "Do you handle whole-home renovations?",
    a: "Yes. We handle whole-home drywall repair for renovations, water damage restoration, and pre-sale prep. We coordinate with general contractors, electricians, and plumbers to repair openings cleanly after their work.",
  },
  {
    q: "Is drywall repair included with interior painting?",
    a: "Light repairs (nail pops, hairline cracks, small patches) are included with our interior painting projects. Larger repairs are quoted separately on the same estimate so you have full transparency.",
  },
];

export default function DrywallRepairHoustonPage() {
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
                <li>›</li>
                <li><Link href="/#services" className="hover:underline">Services</Link></li>
                <li>›</li>
                <li className="text-zinc-900">Drywall Repair Houston TX</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                  <span aria-hidden>⭐⭐⭐⭐⭐</span>
                  <span>Rated 4.9/5 by 200+ Houston Homeowners</span>
                </div>

                <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Drywall Repair &amp; Texture Matching in Houston, TX
                </h1>

                <p className="mt-6 text-xl text-zinc-700 leading-relaxed">
                  Cracks, holes, water damage, settling repairs — fixed seamlessly and painted to match. Houston&apos;s humidity, foundation movement, and storms wreak havoc on drywall. We fix it like it never happened.
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-700">
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Same-Day Small Repairs</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Texture-Match Guarantee</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Fully Insured</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> No Minimum Charge</li>
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-base shadow-md transition">
                    Get My Free Estimate →
                  </Link>
                  <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960" className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">
                    📞 (346) 594-5960
                  </a>
                </div>
                <p className="mt-4 text-sm text-zinc-500">Average response time: <strong className="text-zinc-700">23 minutes</strong> during business hours.</p>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
                <Image
                  src="/images/drywall-hero.jpg"
                  alt="Drywall repair project by Houston Superior Painting — texture match invisible after paint"
                  fill priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">Quick Answer</h2>
            <p className="quick-answer text-lg md:text-xl text-zinc-800 leading-relaxed">
              Houston Superior Painting provides professional drywall repair in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. Repairs range from <strong>$200 to $1,500</strong>, take <strong>1–4 days</strong>, and include seamless texture matching (orange peel, knockdown, smooth) plus priming and painting. Free on-site estimates at <a href="tel:+13465945960" className="text-emerald-700 underline font-semibold">(346) 594-5960</a>.
            </p>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Houston Homeowners Choose Us for Drywall Repair</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">Houston&apos;s foundation movement, AC humidity, and storm damage create constant drywall issues. Our repairs are engineered to disappear.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Texture-Match Guarantee", body: "We test the texture on a hidden area first, then match orange peel, knockdown, smooth, or hand-trowel exactly. Repairs become invisible after paint." },
                { title: "Houston-Specific Expertise", body: "We know which cracks come from foundation settling, which from AC condensation, and which from storm damage. We fix the symptom AND tell you the cause." },
                { title: "Mold-Safe Water Damage Repair", body: "For water damage we treat with appropriate mold killer before patching, ensuring repairs don't trap moisture and rot." },
                { title: "Same-Day Small Repairs", body: "Nail pops, hairline cracks, and small holes can often be completed same-day. We don't make you wait a week for a 2-hour fix." },
                { title: "Paint Match Included", body: "We prime and paint every repair to match surrounding walls. You're not left with patches to paint yourself." },
                { title: "No Minimum Charge", body: "Many drywall contractors require a $500 minimum. We don't — small jobs get fair, transparent pricing." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED + PROCESS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Drywall Issues We Fix</h2>
              <ul className="space-y-3 text-zinc-800">
                {[
                  "Foundation settling cracks (very common in Houston clay soil)",
                  "Nail pops and screw pops",
                  "Door-knob holes and fist-sized holes",
                  "Water damage from roof, plumbing, or AC leaks",
                  "Ceiling cracks and seam separation",
                  "Popcorn ceiling removal and smooth finish",
                  "Tape line failures and bubbled seams",
                  "Hurricane / storm damage",
                  "Orange peel, knockdown, and smooth texture matching",
                  "Skim coating for smooth wall conversions",
                  "Crown molding crack repair",
                  "Pre-paint surface prep",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 6-Step Repair Process</h2>
              <ol className="space-y-5">
                {[
                  { n: 1, t: "On-site assessment", d: "We diagnose root cause (settling, water, impact) and identify all affected areas — not just the visible ones." },
                  { n: 2, t: "Protection & containment", d: "Floors and furniture covered; dust containment plastic for larger repairs." },
                  { n: 3, t: "Cut, remove, and replace", d: "Damaged drywall is cut cleanly. Water-damaged sections are removed entirely. New drywall is screwed in flush." },
                  { n: 4, t: "Mud, tape, and feather", d: "Multiple coats of joint compound applied and sanded between coats for invisible seam transition." },
                  { n: 5, t: "Texture match", d: "We spray, hand-trowel, or roll the texture to match your existing wall — orange peel, knockdown, smooth, or specialty." },
                  { n: 6, t: "Prime, paint, walkthrough", d: "Stain-blocking primer, then paint matched to your wall color. We walk through with you for sign-off." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center">{step.n}</div>
                    <div>
                      <h3 className="font-semibold">{step.t}</h3>
                      <p className="text-zinc-700 mt-1">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Drywall Repair Cost in Houston</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">All projects include free estimate, full prep, texture match, primer, and paint. No minimum charge. No upfront payment.</p>
            <div className="pricing-snippet overflow-x-auto rounded-xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left">
                <thead className="bg-zinc-900 text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Project</th>
                    <th className="px-4 py-3 font-semibold">Price Range</th>
                    <th className="px-4 py-3 font-semibold">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {pricingRows.map((row) => (
                    <tr key={row.project} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 font-medium">{row.project}</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">{row.price}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-zinc-500 mt-4 text-center">Final pricing depends on damage extent, texture complexity, ceiling height, and whether mold treatment is required. Free on-site estimate within 24 hours.</p>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 md:py-24 bg-white border-y border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Drywall Repair Service Areas</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">We repair drywall across all of Greater Houston:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cities.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="block bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-center font-medium hover:border-emerald-600 hover:text-emerald-700 hover:shadow-sm transition">
                  {c.name}, TX
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Drywall Repair FAQs</h2>
            <div className="divide-y divide-zinc-200 border-y border-zinc-200 bg-white rounded-xl px-6">
              {faqItems.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-4">{item.q}</h3>
                    <span className="ml-4 text-2xl text-emerald-700 transition-transform group-open:rotate-45 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-zinc-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-emerald-700 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Drywall Repair in Houston?</h2>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">From a single nail pop to whole-home water damage restoration. Free estimate, texture-match guarantee.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold rounded-lg text-base shadow-md transition">
                Schedule Free Estimate →
              </Link>
              <a href="tel:+13465945960" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">
                📞 (346) 594-5960
              </a>
              <a href="sms:+13465945960" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-900 hover:bg-emerald-950 text-white font-semibold rounded-lg text-base transition">
                💬 Text Us
              </a>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/interior-painting-houston-tx", title: "Interior Painting", desc: "Premium walls, ceilings & trim" },
                { href: "/exterior-painting-houston-tx", title: "Exterior Painting", desc: "Built for Houston climate" },
                { href: "/cabinet-refinishing-houston-tx", title: "Cabinet Refinishing", desc: "Factory-finish spray" },
                { href: "/pressure-washing-houston-tx", title: "Pressure Washing", desc: "Pre-paint surface prep" },
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
