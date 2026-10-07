// app/commercial-painting-houston-tx/page.tsx
// Houston Superior Painting — Commercial Painting service page

import Link from "next/link";
import Image from "next/image";
import { RelatedLinks } from "@/components/luxury/related-links";
import type { Metadata } from "next";

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
  offers: { "@type": "Offer", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", minPrice: 2500, maxPrice: 75000, priceCurrency: "USD" }, availability: "https://schema.org/InStock" },
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

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does commercial painting cost in Houston?", acceptedAnswer: { "@type": "Answer", text: "Commercial painting in Houston typically runs $1.50–$4.00 per square foot for interiors and $2.50–$5.00 per square foot for exteriors. Small office repaints start around $2,500. Mid-size projects (5,000 sq ft office) run $8,000–$20,000. Large warehouses and multi-tenant buildings range $25,000–$75,000+. We provide detailed line-item bids." } },
    { "@type": "Question", name: "Can you paint after hours so we don't lose business?", acceptedAnswer: { "@type": "Answer", text: "Yes. Houston Superior Painting routinely works evenings, overnight shifts, weekends, and holidays for restaurants, retail stores, medical offices, and offices where daytime painting isn't possible. Coordination is set during the bidding process so your team plans accordingly." } },
    { "@type": "Question", name: "Do you carry commercial insurance and provide COI?", acceptedAnswer: { "@type": "Answer", text: "Yes. We carry general liability insurance, workers compensation, and commercial auto. Certificate of Insurance (COI) is provided to your property manager or facilities team upon contract signing. We can add the building owner as additional insured if required." } },
    { "@type": "Question", name: "How long does a commercial painting project take?", acceptedAnswer: { "@type": "Answer", text: "A typical 3,000 sq ft office interior is 4–6 working days. Retail spaces 2–4 days. Restaurants 3–5 days (often done overnight). Warehouse exteriors 7–14 days. We provide an exact timeline before starting and stick to it — schedule reliability is critical for commercial work." } },
    { "@type": "Question", name: "Do you handle HOAs and multifamily properties?", acceptedAnswer: { "@type": "Answer", text: "Yes. We paint HOA common areas, multifamily apartments, condo exteriors, and townhouse communities in Greater Houston. We coordinate with property managers, work around tenant schedules, and provide before/after documentation for HOA boards." } },
    { "@type": "Question", name: "Can you paint medical and dental offices?", acceptedAnswer: { "@type": "Answer", text: "Yes. We use low-VOC and zero-VOC paints for medical, dental, and pediatric environments. Work is scheduled around patient hours. We follow OSHA, EPA, and any client-specific protocols including HIPAA-aware areas." } },
    { "@type": "Question", name: "Do you do warehouse and industrial coatings?", acceptedAnswer: { "@type": "Answer", text: "Yes. We apply epoxy floor coatings, industrial wall coatings, line striping, safety markings, and high-heat coatings for warehouses, distribution centers, manufacturing, and auto shops. Surface prep includes degreasing, blasting (when needed), and primer matched to substrate." } },
    { "@type": "Question", name: "What areas do you serve for commercial painting?", acceptedAnswer: { "@type": "Answer", text: "Houston Superior Painting provides commercial painting throughout Houston, Katy, Cypress, Sugar Land, Richmond, Pearland, Memorial, The Heights, Bellaire, and The Woodlands TX. Free bids at (346) 594-5960." } },
  ],
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

const pricingRows = [
  { project: "Small office (1,500 sq ft interior)", price: "$2,500 – $5,500", note: "2–4 days" },
  { project: "Mid-size office (5,000 sq ft)", price: "$8,000 – $20,000", note: "5–10 days" },
  { project: "Retail store interior", price: "$3,500 – $9,000", note: "2–5 days" },
  { project: "Restaurant (after-hours)", price: "$5,000 – $15,000", note: "3–5 nights" },
  { project: "Medical / dental office", price: "$4,000 – $12,000", note: "3–6 days" },
  { project: "Warehouse exterior (10,000 sq ft)", price: "$12,000 – $28,000", note: "7–14 days" },
  { project: "Multi-tenant building exterior", price: "$15,000 – $50,000", note: "10–21 days" },
  { project: "HOA common-area package", price: "$8,000 – $25,000", note: "5–14 days" },
  { project: "Industrial epoxy floor (1,500 sq ft)", price: "$4,500 – $9,500", note: "3–5 days" },
];

const faqItems = [
  { q: "How much does commercial painting cost in Houston?", a: "Commercial painting runs $1.50–$4.00 per sq ft interior and $2.50–$5.00 per sq ft exterior. Small office repaints start at $2,500. Mid-size offices $8,000–$20,000. Large warehouses and multi-tenant $25,000–$75,000+. Detailed line-item bids provided." },
  { q: "Can you paint after hours?", a: "Yes. We routinely work evenings, overnight, weekends, and holidays for restaurants, retail, medical offices, and offices where daytime work isn't possible. Coordination is set during bidding so your team plans accordingly." },
  { q: "Do you carry insurance and provide COI?", a: "Yes — general liability, workers comp, and commercial auto. Certificate of Insurance is provided to property managers upon contract signing. We can add building owner as additional insured if required." },
  { q: "How long does a commercial project take?", a: "Typical 3,000 sq ft office: 4–6 days. Retail: 2–4 days. Restaurants (overnight): 3–5 nights. Warehouse exteriors: 7–14 days. Exact timeline before starting and stick to it — schedule reliability matters." },
  { q: "Do you handle HOAs and multifamily?", a: "Yes. HOA common areas, multifamily apartments, condo exteriors, and townhouse communities. We coordinate with property managers, work around tenants, and provide before/after documentation for HOA boards." },
  { q: "Can you paint medical and dental offices?", a: "Yes. Low-VOC and zero-VOC paints, work scheduled around patient hours. We follow OSHA, EPA, and client-specific protocols including HIPAA-aware areas." },
  { q: "Do you do warehouse and industrial coatings?", a: "Yes — epoxy floor coatings, industrial wall coatings, line striping, safety markings, and high-heat coatings. Surface prep includes degreasing, blasting if needed, and primer matched to substrate." },
  { q: "Do you offer maintenance contracts?", a: "Yes. For HOAs, property management firms, and corporate clients we offer annual maintenance contracts — scheduled touch-ups, repainting cycles, and emergency response built into one budgeted line item." },
];

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
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-base shadow-md transition">Request Commercial Bid →</Link>
                  <a href="tel:+13465945960" className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">📞 (346) 594-5960</a>
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
              Houston Superior Painting provides commercial painting for offices, retail, restaurants, medical, warehouses, and HOAs across Greater Houston. Projects range <strong>$2,500–$75,000+</strong> depending on size and scope. We work <strong>after-hours and weekends</strong> to minimize business disruption. Full Certificate of Insurance provided. Free bids at <a href="tel:+13465945960" className="text-emerald-700 underline font-semibold">(346) 594-5960</a>.
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

        {/* PRICING TABLE */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Commercial Painting Pricing Guide</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">Ranges below are for budgeting. Final pricing is project-specific and provided in a written line-item bid.</p>
            <div className="pricing-snippet overflow-x-auto rounded-xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left">
                <thead className="bg-zinc-900 text-white"><tr><th className="px-4 py-3 font-semibold">Project Type</th><th className="px-4 py-3 font-semibold">Price Range</th><th className="px-4 py-3 font-semibold">Timeline</th></tr></thead>
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
              <a href="tel:+13465945960" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">📞 (346) 594-5960</a>
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
