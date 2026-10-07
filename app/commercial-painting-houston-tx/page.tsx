// app/commercial-painting-houston-tx/page.tsx
// Houston Superior Painting — Commercial Painting service page

import Link from "next/link";
import Image from "next/image";
import { RelatedLinks } from "@/components/luxury/related-links";
import type { Metadata } from "next";
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business";

export const metadata: Metadata = {
  title: "Commercial Painting Houston TX — Houston Superior Painting",
  description: "Professional commercial painting in Houston TX. Offices, retail, restaurants, warehouses. After-hours work, minimal disruption. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/commercial-painting-houston-tx",
  },
  openGraph: {
    title: "Commercial Painting Houston TX — Houston Superior Painting",
    description: "Professional commercial painting in Houston TX. Offices, retail, restaurants, warehouses. After-hours work available.",
    url: "https://houstonsuperiorpainting.com/commercial-painting-houston-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-commercial-painting.jpg",
      width: 1200,
      height: 630,
      alt: "Commercial Painting Houston TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Painting Houston TX — Houston Superior Painting",
    description: "Professional commercial painting in Houston TX. Offices, retail, restaurants, warehouses.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-commercial-painting.jpg"],
  },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/commercial-painting-houston-tx#service",
  name: "Commercial Painting in Houston, TX",
  description:
    "Professional commercial painting for offices, retail spaces, restaurants, medical facilities, warehouses, and industrial buildings in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. After-hours and weekend work to minimize business disruption.",
  serviceType: "Commercial Painting",
  provider: { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Houston" }, { "@type": "City", name: "Katy" }, { "@type": "City", name: "Cypress" },
    { "@type": "City", name: "Sugar Land" }, { "@type": "City", name: "Richmond" }, { "@type": "City", name: "Pearland" },
    { "@type": "Neighborhood", name: "Memorial" }, { "@type": "City", name: "The Woodlands" }, { "@type": "City", name: "Bellaire" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Painting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Building Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retail Store Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Restaurant Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical & Dental Office Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse & Industrial Coatings" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "HOA & Multifamily Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property Management Painting" } },
    ],
  },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://houstonsuperiorpainting.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://houstonsuperiorpainting.com/#services" },
    { "@type": "ListItem", position: 3, name: "Commercial Painting Houston TX", item: "https://houstonsuperiorpainting.com/commercial-painting-houston-tx" },
  ],
};

const SPEAKABLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://houstonsuperiorpainting.com/commercial-painting-houston-tx#webpage",
  url: "https://houstonsuperiorpainting.com/commercial-painting-houston-tx",
  name: "Commercial Painting Houston TX | Houston Superior Painting",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".hero-h1", ".quick-answer", ".pricing-snippet"] },
  inLanguage: "en-US",
};

const cities = [
  { name: "Houston", slug: "painters-houston-tx" }, { name: "Katy", slug: "painters-katy-tx" },
  { name: "Cypress", slug: "painters-cypress-tx" }, { name: "Sugar Land", slug: "painters-sugar-land-tx" },
  { name: "Richmond", slug: "painters-richmond-tx" }, { name: "Fulshear", slug: "painters-fulshear-tx" },
  { name: "Pearland", slug: "painters-pearland-tx" }, { name: "Memorial", slug: "painters-memorial-tx" },
  { name: "The Heights", slug: "painters-the-heights-tx" }, { name: "Bellaire", slug: "painters-bellaire-tx" },
  { name: "The Woodlands", slug: "painters-the-woodlands-tx" }, { name: "Rosenberg", slug: "painters-rosenberg-tx" },
];

// 2026 price bands — every figure comes from PRICES_2026 (lib/business.ts). Per sq ft of WALL, repaints only.
const priceRows = [
  { space: "Office walls, standard height", price: `${PRICES_2026.commercialOffice} / sq ft of wall`, moves: "Occupied vs empty, accent walls, night work" },
  { space: "Retail interior, tenant turn", price: `${PRICES_2026.commercialRetail} / sq ft of wall`, moves: "Color change, patches, after-hours only" },
  { space: "Warehouse / shop", price: `${PRICES_2026.commercialWarehouse} / sq ft of wall`, moves: "Lift, deck height, oil and dust" },
  { space: "Exterior storefront / tilt-wall", price: "Quoted from elevation", moves: "Coating spec, boom lift, lane closure" },
  { space: "Doors and frames, each", price: PRICES_2026.commercialDoorEach, moves: "Both sides, hardware off or masked" },
];

const whatWePaint = [
  "Office suites and common corridors",
  "Retail and restaurant interiors between tenants",
  "Warehouses and shop walls",
  "HOA clubhouses and amenity buildings",
  "Exterior storefronts and tilt-wall, where the coating spec allows it",
];

const bidChecklist = [
  "Rooms or elevations, not “paint the building”",
  "Primer only where bare, two finish coats, product line named",
  "Who moves furniture",
  "Low-VOC or zero-VOC if the suite is occupied the next morning",
  `COI limits — we carry ${BUSINESS.trust.liabilityCoverage} general liability + workers’ comp`,
  "A finish date, not “about a week”",
];

// Visible FAQ text and FAQPage schema are generated from this one array so they always match.
const faqItems = [
  { q: "How much does commercial painting cost in Houston?", a: `About ${PRICES_2026.commercialPerSqFt} per sq ft of wall for occupied offices and retail in 2026: offices ${PRICES_2026.commercialOffice}, retail tenant turns ${PRICES_2026.commercialRetail}. Open warehouses with a lift run less per foot, about ${PRICES_2026.commercialWarehouse}. Doors and frames are ${PRICES_2026.commercialDoorEach} each. Exterior storefronts and tilt-wall are quoted from the elevation. After-hours and weekend work adds ${PRICES_2026.commercialAfterHoursPremium}. Every bid is written line by line.` },
  { q: "Can you paint after hours?", a: `Yes. Most Houston retail and occupied offices want the crew in after 6 p.m. or on Sunday, and we also work overnight, weekends, and holidays for restaurants and medical offices. Night work adds ${PRICES_2026.commercialAfterHoursPremium} for shorter shifts and extra setup and breakdown, and that premium is written into the bid so your team can plan around it.` },
  { q: "Do you carry insurance and provide COI?", a: `Yes. We carry ${BUSINESS.trust.liabilityCoverage} general liability + workers' comp. We send the Certificate of Insurance to your property manager or facilities team before the start date, and we can add the building owner as additional insured if required.` },
  { q: "How long does a commercial project take?", a: "Typical 3,000 sq ft office: 4–6 days. Retail: 2–4 days. Restaurants (overnight): 3–5 nights. Warehouse exteriors: 7–14 days. Exact timeline before starting and stick to it — schedule reliability matters." },
  { q: "Do you handle HOAs and multifamily?", a: "Yes. HOA common areas, multifamily apartments, condo exteriors, and townhouse communities. We coordinate with property managers, work around tenants, and provide before/after documentation for HOA boards." },
  { q: "Can you paint medical and dental offices?", a: "Yes. Low-VOC and zero-VOC paints, work scheduled around patient hours. We follow OSHA, EPA, and client-specific protocols including HIPAA-aware areas." },
  { q: "Do you do warehouse and industrial coatings?", a: "Yes — epoxy floor coatings, industrial wall coatings, line striping, safety markings, and high-heat coatings. Surface prep includes degreasing, blasting if needed, and primer matched to substrate." },
  { q: "Do you offer maintenance contracts?", a: "Yes. For HOAs, property management firms, and corporate clients we offer annual maintenance contracts — scheduled touch-ups, repainting cycles, and emergency response built into one budgeted line item." },
  { q: "What areas do you serve for commercial painting?", a: `Houston Superior Painting provides commercial painting throughout Houston, Katy, Cypress, Sugar Land, Richmond, Pearland, Memorial, The Heights, Bellaire, and The Woodlands TX. Free bids at ${BUSINESS.phone}.` },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function CommercialPaintingHoustonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_JSONLD) }} />

      <main className="bg-white text-zinc-900">
        <section className="relative bg-zinc-50 py-16 md:py-24 border-b border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-zinc-500">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:underline">Home</Link></li><li>›</li>
                <li><Link href="/#services" className="hover:underline">Services</Link></li><li>›</li>
                <li className="text-zinc-900">Commercial Painting Houston TX</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                  <span aria-hidden>⭐⭐⭐⭐⭐</span><span>Trusted by Houston Property Managers</span>
                </div>
                <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Commercial Painting in Houston, TX
                </h1>
                <p className="mt-6 text-xl text-zinc-700 leading-relaxed">
                  Offices, retail, restaurants, medical, warehouses, and HOAs. Houston Superior Painting works <strong>after-hours and weekends</strong> to minimize disruption to your business. Detailed line-item bids, full COI, and schedule reliability you can count on.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-700">
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> After-Hours &amp; Overnight</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Full COI Provided</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Low-VOC for Medical</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Schedule Reliability</li>
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/painting-estimate-houston" className="inline-flex items-center justify-center px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-base shadow-md transition">Request Commercial Bid →</Link>
                  <a href={PHONE_HREF} className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">📞 {BUSINESS.phone}</a>
                </div>
                <p className="mt-4 text-sm text-zinc-500">Bids returned within <strong className="text-zinc-700">48 business hours</strong>.</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
                <Image src="/images/commercial-painting-hero.jpg" alt="Commercial office painting by Houston Superior Painting" fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">Quick Answer</h2>
            <p className="quick-answer text-lg md:text-xl text-zinc-800 leading-relaxed">
              Houston Superior Painting provides commercial painting for offices, retail, restaurants, medical, warehouses, and HOAs across Greater Houston. In 2026, occupied offices and retail run about <strong>{PRICES_2026.commercialPerSqFt} per sq ft of wall</strong>, and open warehouses with a lift run less per foot. After-hours and weekend work adds <strong>{PRICES_2026.commercialAfterHoursPremium}</strong>. A usable bid names rooms, coats, product, height, protection, and whether the crew is working live or after close. Insured with {BUSINESS.trust.liabilityCoverage} general liability + workers&apos; comp, COI sent before the start date. Free bids at <a href={PHONE_HREF} className="text-emerald-700 underline font-semibold">{BUSINESS.phone}</a>.
            </p>
            <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
              A commercial repaint is not a house bid with more gallons. The constraints are occupants, hours, lift access, and a property manager who needs a certificate of insurance before anyone unlocks the door.
            </p>
          </div>
        </section>

        {/* VERTICAL SPECIALTIES */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Industries We Serve</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">Each commercial environment has unique scheduling, compliance, and material requirements. We&apos;ve done them all.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Offices & Coworking", body: "After-hours weekend work, low-VOC paint for early Monday occupancy. We've painted everything from 1,000 sq ft suites to 30,000 sq ft floor plates." },
                { title: "Retail & Boutique", body: "Overnight work for storefronts and shopping centers. We coordinate with mall management and meet brand-specific color/finish standards." },
                { title: "Restaurants & Bars", body: "Overnight repaints between closing and opening. Grease-resistant kitchen coatings. Health-department-compliant materials." },
                { title: "Medical & Dental", body: "Zero-VOC paint, antimicrobial coatings for clinical zones, scheduling around patient hours. HIPAA-aware procedures." },
                { title: "Warehouse & Industrial", body: "Epoxy floors, line striping, safety markings, OSHA color codes, high-heat coatings, food-grade finishes." },
                { title: "HOA & Multifamily", body: "Common areas, exterior repaints, ARB-approved color matching, tenant coordination, before/after documentation for boards." },
                { title: "Property Management", body: "Turnover painting between tenants, scheduled maintenance contracts, unit-by-unit invoicing tied to your accounting system." },
                { title: "Auto Dealerships & Showrooms", body: "Service bay coatings, showroom walls, manufacturer-brand color compliance, after-hours work." },
                { title: "Schools & Daycare", body: "Summer break repaints, zero-VOC materials, background-checked crew, scheduling around academic calendar." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Commercial Process</h2>
            <ol className="space-y-6">
              {[
                { n: 1, t: "Site walk & scope definition", d: "We meet on-site with you or your facilities manager. Measure, identify substrate types, document existing damage, and align on schedule constraints." },
                { n: 2, t: "Line-item bid within 48 hours", d: "Detailed proposal: square footage, materials, labor, schedule, payment terms, and any add-alternates. Reviewable by your accounting team." },
                { n: 3, t: "Contract, COI, and pre-job meeting", d: "Signed contract, Certificate of Insurance to property manager, pre-job meeting with site contact to confirm access, lockout, and timing." },
                { n: 4, t: "Phased execution", d: "Work proceeds in phases to keep your business running. Daily progress photos sent to your site contact." },
                { n: 5, t: "Daily cleanup & nightly handoff", d: "Every shift ends with the space cleaned and operational. No customer or employee should know we were there except for the fresh paint." },
                { n: 6, t: "Final walkthrough & punch list", d: "We walk the entire scope with you, address any punch items same-day, and invoice only after sign-off." },
              ].map((step) => (
                <li key={step.n} className="flex gap-4 bg-zinc-50 rounded-xl p-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center">{step.n}</div>
                  <div><h3 className="font-semibold">{step.t}</h3><p className="text-zinc-700 mt-1">{step.d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Before &amp; After: Commercial Repaint</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">
              A Houston self-storage facility with faded, sun-worn roll-up doors restored to a clean, uniform finish — boosting curb appeal and protecting the metal from the elements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-zinc-900/85 px-4 py-1.5 text-sm font-semibold text-white">Before</span>
                <Image src="/images/commercial-before-1.jpg" alt="Houston storage facility with faded, worn brown roll-up doors before commercial repainting" width={800} height={600} sizes="(max-width: 768px) 100vw, 600px" className="w-full h-72 md:h-80 object-cover" />
              </figure>
              <figure className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-emerald-700 px-4 py-1.5 text-sm font-semibold text-white">After</span>
                <Image src="/images/commercial-after-1.jpg" alt="Same Houston storage facility with freshly repainted roll-up doors and crisp trim after commercial painting" width={800} height={600} sizes="(max-width: 768px) 100vw, 600px" className="w-full h-72 md:h-80 object-cover" />
              </figure>
            </div>
          </div>
        </section>

        {/* WHAT WE PAINT */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What We Paint</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">Commercial repaints across Greater Houston, occupied or empty.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {whatWePaint.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-800">
                  <span className="text-emerald-600 font-bold" aria-hidden>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">2026 Commercial Painting Prices in Houston</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">Ranges below are for budgeting. Final pricing is project-specific and provided in a written line-item bid.</p>
            <div className="pricing-snippet overflow-x-auto rounded-xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left">
                <thead className="bg-zinc-900 text-white"><tr><th className="px-4 py-3 font-semibold">Space</th><th className="px-4 py-3 font-semibold">2026 Range</th><th className="px-4 py-3 font-semibold">What Moves It</th></tr></thead>
                <tbody className="divide-y divide-zinc-200">
                  {priceRows.map((row) => (
                    <tr key={row.space} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 font-medium">{row.space}</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.moves}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-zinc-700 leading-relaxed">
              These are labor-and-material ranges for repaints, not new-construction spray packages. Empty suites price at the bottom. A live medical or law office prices at the top because of protection and hours.
            </p>

            <h3 className="mt-12 text-2xl font-bold">After-Hours Work: +{PRICES_2026.commercialAfterHoursPremium}</h3>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              Most Houston retail and occupied offices want the crew in after 6 p.m. or on Sunday. That is a real cost: shorter shifts, more setup and breakdown, same insurance. After-hours and weekend work adds <strong>{PRICES_2026.commercialAfterHoursPremium}</strong>. We would rather write the premium on the bid than pretend a night job prices like a Tuesday empty suite.
            </p>
          </div>
        </section>

        {/* BID CHECKLIST */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What the Bid Should Include</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">Compare bids line by line. If one of these is missing, ask before you sign.</p>
            <ul className="space-y-3">
              {bidChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-zinc-50 rounded-xl p-4 text-zinc-800">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-700 text-white text-sm font-bold flex items-center justify-center" aria-hidden>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 md:py-24 bg-white border-y border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Commercial Painting Service Areas</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">We serve commercial clients across Greater Houston:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cities.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="block bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-center font-medium hover:border-emerald-600 hover:text-emerald-700 hover:shadow-sm transition">{c.name}, TX</Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Commercial Painting FAQs</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Commercial Bid</h2>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">Line-item bids within 48 business hours. COI provided on signature. After-hours work standard.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/painting-estimate-houston" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold rounded-lg text-base shadow-md transition">Request Bid →</Link>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">📞 {BUSINESS.phone}</a>
              <a href="mailto:info@houstonsuperiorpainting.com" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-900 hover:bg-emerald-950 text-white font-semibold rounded-lg text-base transition">✉ Email Specs</a>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/projects/cypress-commercial-office-repaint", title: "Project: Cypress Office", desc: "Before and after photos" },
                { href: "/interior-painting-houston-tx", title: "Interior Painting", desc: "Residential interiors" },
                { href: "/exterior-painting-houston-tx", title: "Exterior Painting", desc: "Residential exteriors" },
                { href: "/pressure-washing-houston-tx", title: "Pressure Washing", desc: "Property maintenance" },
                { href: "/load-bearing-wall-removal-houston-tx", title: "Wall Removal", desc: "Tenant build-outs" },
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
      <RelatedLinks exclude="/commercial-painting-houston-tx" />
    </>
  );
}
