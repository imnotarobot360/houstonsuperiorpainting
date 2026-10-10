import { BUSINESS } from "@/lib/business";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
// app/pressure-washing-houston-tx/page.tsx
// Houston Superior Painting — Pressure Washing service page

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pressure Washing Houston TX — Houston Superior Painting",
  description: "Professional pressure washing in Houston TX. Driveways, siding, decks, fences, roofs. Soft wash and power wash. $250-$900. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/pressure-washing-houston-tx",
  },
  openGraph: {
    title: "Pressure Washing Houston TX — Houston Superior Painting",
    description: "Professional pressure washing in Houston TX. Driveways, siding, decks, fences, roofs. Soft wash and power wash.",
    url: "https://houstonsuperiorpainting.com/pressure-washing-houston-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-pressure-washing.jpg",
      width: 1200,
      height: 630,
      alt: "Pressure Washing Houston TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pressure Washing Houston TX — Houston Superior Painting",
    description: "Professional pressure washing in Houston TX. Driveways, siding, decks, fences, roofs.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-pressure-washing.jpg"],
  },
}

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/pressure-washing-houston-tx#service",
  name: "Pressure Washing in Houston, TX",
  description:
    "Professional pressure washing and soft wash services for driveways, sidewalks, patios, decks, fences, siding, brick, stucco, and roofs in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. Pre-paint prep specialists.",
  serviceType: "Pressure Washing",
  provider: { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Houston" }, { "@type": "City", name: "Katy" }, { "@type": "City", name: "Cypress" },
    { "@type": "City", name: "Sugar Land" }, { "@type": "City", name: "Richmond" }, { "@type": "City", name: "Fulshear" },
    { "@type": "City", name: "Pearland" }, { "@type": "Neighborhood", name: "Memorial" }, { "@type": "Neighborhood", name: "The Heights" },
    { "@type": "City", name: "The Woodlands" }, { "@type": "City", name: "Bellaire" },
  ],
  offers: { "@type": "Offer", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", minPrice: 250, maxPrice: 1800, priceCurrency: "USD" }, availability: "https://schema.org/InStock" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pressure Washing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driveway & Sidewalk Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Siding Wash" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deck & Patio Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Washing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soft Wash Roof Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brick & Stucco Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Paint Surface Prep" } },
    ],
  },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://houstonsuperiorpainting.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://houstonsuperiorpainting.com/#services" },
    { "@type": "ListItem", position: 3, name: "Pressure Washing Houston TX", item: "https://houstonsuperiorpainting.com/pressure-washing-houston-tx" },
  ],
};

const SPEAKABLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://houstonsuperiorpainting.com/pressure-washing-houston-tx#webpage",
  url: "https://houstonsuperiorpainting.com/pressure-washing-houston-tx",
  name: "Pressure Washing Houston TX | Houston Superior Painting",
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
  { project: "Driveway (typical 2-car)", price: "$150 – $300", note: "1–2 hours" },
  { project: "Driveway + sidewalk + walkway", price: "$250 – $450", note: "Half day" },
  { project: "House siding (single story, 2,000 sq ft)", price: "$300 – $500", note: "Half day" },
  { project: "House siding (two story, 2,500 sq ft)", price: "$450 – $700", note: "Full day" },
  { project: "Deck or patio cleaning", price: "$200 – $450", note: "Half day" },
  { project: "Fence wash (per side)", price: "$200 – $500", note: "Half day" },
  { project: "Soft wash roof", price: "$400 – $900", note: "Half day" },
  { project: "Full property package", price: "$600 – $1,200", note: "Full day" },
  { project: "Pre-paint pressure wash (included with painting)", price: "Included", note: "Day 1 of paint job" },
];

const faqItems = [
  { q: "How much does pressure washing cost in Houston?", a: "Pressure washing in Houston ranges from $150 (driveway only) to $1,200 (full property). Typical house exterior $300–$700, deck $200–$450, fence $200–$500 per side. We provide free quotes with no minimum charge." },
  { q: "What's the difference between pressure washing and soft washing?", a: "Pressure washing uses high-PSI water (1,500–4,000 PSI) for hard surfaces like concrete and brick. Soft washing uses low pressure (under 500 PSI) combined with biodegradable detergents for delicate surfaces like roofs, siding, and stucco. Using the wrong method damages surfaces — we choose the right method per material." },
  { q: "How often should I pressure wash my Houston home?", a: "Annual washing is recommended in Houston due to humidity, mold, pollen, and oak tannin. Driveways may need cleaning every 6 months. Roofs typically every 2–3 years using soft wash. Annual washing extends paint life by 30–50%." },
  { q: "Can pressure washing damage my house?", a: "Yes if done incorrectly. High pressure can strip paint, damage wood, force water behind siding, or erode mortar. We calibrate pressure and nozzles to each surface and use soft wash for delicate areas. We carry full insurance." },
  { q: "Do you remove mold and mildew?", a: "Yes. Houston's humidity causes mold on every exterior surface. We use professional sodium hypochlorite mixes that kill mold at the spore level — not just rinse it off. Includes neutralizing for plants and re-rinse." },
  { q: "Do you do pressure washing before painting?", a: "Yes. All our exterior painting projects include pressure washing as the first prep step. We remove dirt, mold, chalk, and loose paint so coatings bond properly. Pre-paint pressure wash is built into our exterior painting quote." },
  { q: "Will pressure washing kill my plants?", a: "No. We pre-wet landscaping and cover delicate plants before applying cleaning solutions. After washing, we rinse foliage thoroughly. Our mixes are biodegradable and used at safe concentrations. Zero plant damage claims to date." },
  { q: "Can you clean my roof safely?", a: "Yes. We use soft wash (under 500 PSI) for roofs to avoid lifting shingles or forcing water under flashing. Soft wash with biocides kills mold and mildew streaks for 4–6 years before regrowth." },
];

// FAQPage schema is generated from the same faqItems rendered on the page,
// so the structured data always matches the visible questions and answers.
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PressureWashingHoustonPage() {
  return (
    <>
      <Header />
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
                <li className="text-zinc-900">Pressure Washing Houston TX</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                  <span aria-hidden>⭐⭐⭐⭐⭐</span><span>Rated {BUSINESS.trust.googleRating}/5 across {BUSINESS.trust.reviewCount}+ Google reviews</span>
                </div>
                <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Pressure Washing in Houston, Katy &amp; Cypress, TX
                </h1>
                <p className="mt-6 text-xl text-zinc-700 leading-relaxed">
                  Professional power washing and soft wash for driveways, siding, decks, fences, and roofs. Houston&apos;s humidity creates mold, mildew, and stains on every exterior. We make them disappear.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-700">
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Soft Wash for Roofs</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Plant-Safe Detergents</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Fully Insured</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> No Minimum Charge</li>
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-base shadow-md transition">Get My Free Quote →</Link>
                  <a href="tel:+13465945960" aria-label="Call Houston Superior Painting" className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">📞 (346) 594-5960</a>
                </div>
                <p className="mt-4 text-sm text-zinc-500">Average response time: <strong className="text-zinc-700">23 minutes</strong> during business hours.</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
                <Image src="/images/pressure-washing-hero.jpg" alt="Pressure washing project by Houston Superior Painting — Houston driveway restored" fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">Quick Answer</h2>
            <p className="quick-answer text-lg md:text-xl text-zinc-800 leading-relaxed">
              Houston Superior Painting provides pressure washing and soft washing in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. Projects cost <strong>$150–$1,200</strong> depending on scope (driveway, siding, fence, deck, roof). We use <strong>high-PSI</strong> for hard surfaces and <strong>soft wash</strong> for roofs and siding. Pre-paint prep is included with all exterior painting. Free quotes at <a href="tel:+13465945960" className="text-emerald-700 underline font-semibold">(346) 594-5960</a>.
            </p>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Houston Homeowners Choose Us</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">Houston&apos;s humidity, oak tannin, and Gulf storms create more outdoor grime than most cities. We&apos;ve engineered for it.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Right Method, Right Surface", body: "Concrete gets high-PSI. Roofs get soft wash. Cedar siding gets medium pressure with detergent. Wrong method = damaged property. We never overshoot." },
                { title: "Mold Killed at the Spore", body: "Hose-and-water washes mold off temporarily — it returns in 4 weeks. Our biocide treatment kills mold spores so stains stay gone for 12–24 months." },
                { title: "Plant-Safe Process", body: "Pre-wet landscape, cover delicate plants, biodegradable detergents at safe concentrations, post-wash rinse. Zero plant damage claims." },
                { title: "Pre-Paint Specialists", body: "We prep more surfaces for painting than for cleaning. We know exactly how to wash a wall so paint bonds for 8–10 years." },
                { title: "Same-Day Service Available", body: "Small jobs (driveway, deck) often available same-day or next-day during peak season." },
                { title: "Fully Insured", body: "Workers comp + liability insurance. Certificate of insurance provided on request before we start any job." },
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Surfaces We Wash</h2>
              <ul className="space-y-3 text-zinc-800">
                {[
                  "Concrete driveways, sidewalks, walkways",
                  "Brick patios and pavers",
                  "Wood, vinyl, fiber cement, and HardiePlank siding",
                  "Cedar and composite decks",
                  "Wood and vinyl fences",
                  "Asphalt and composite shingle roofs (soft wash)",
                  "Brick and stucco exteriors",
                  "Gutters and downspouts",
                  "Pool decks and outdoor kitchens",
                  "Commercial sidewalks and parking lots",
                  "Pre-paint surface preparation",
                  "Oak tannin and rust stain removal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-emerald-600 mt-1">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 5-Step Process</h2>
              <ol className="space-y-5">
                {[
                  { n: 1, t: "Walk-through & quote", d: "On-site inspection identifies surfaces, stain types, and recommended method. Detailed quote in writing — no upsells on the day-of." },
                  { n: 2, t: "Protection", d: "Landscaping covered or pre-wet, exterior outlets and fixtures protected, windows checked for seal integrity." },
                  { n: 3, t: "Apply cleaning solution", d: "Biodegradable detergent and biocide applied via low-pressure pump. 10–15 minute dwell time to break down organic growth." },
                  { n: 4, t: "Wash and rinse", d: "Correct PSI and nozzle selected per surface. Methodical pattern ensures full coverage without streaks. Plants rinsed throughout." },
                  { n: 5, t: "Walkthrough & sign-off", d: "We walk through with you to confirm satisfaction. Spots that need touch-up are addressed immediately." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center">{step.n}</div>
                    <div><h3 className="font-semibold">{step.t}</h3><p className="text-zinc-700 mt-1">{step.d}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PRICING TABLE */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Pressure Washing Cost in Houston</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">All quotes include detergent, biocide treatment, plant protection, and equipment. Free on-site estimate within 24 hours.</p>
            <div className="pricing-snippet overflow-x-auto rounded-xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left">
                <thead className="bg-zinc-900 text-white"><tr><th className="px-4 py-3 font-semibold">Project</th><th className="px-4 py-3 font-semibold">Price Range</th><th className="px-4 py-3 font-semibold">Timeline</th></tr></thead>
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
            <p className="text-sm text-zinc-500 mt-4 text-center">Final pricing depends on square footage, stain severity, surface type, and accessibility. No minimum charge.</p>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 md:py-24 bg-white border-y border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pressure Washing Service Areas</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">We wash across all of Greater Houston:</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pressure Washing FAQs</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Your Houston Home Look New Again?</h2>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">Free quote. Plant-safe. Mold killed at the spore. We&apos;ll show you the before/after.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold rounded-lg text-base shadow-md transition">Schedule Free Quote →</Link>
              <a href="tel:+13465945960" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">📞 (346) 594-5960</a>
              <a href="sms:+13465945960" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-900 hover:bg-emerald-950 text-white font-semibold rounded-lg text-base transition">💬 Text Us</a>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-16 bg-white border-t border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/exterior-painting-houston-tx", title: "Exterior Painting", desc: "Built for Houston climate" },
                { href: "/limewash-brick-painting-houston-tx", title: "Limewash & Brick", desc: "European-style finishes" },
                { href: "/interior-painting-houston-tx", title: "Interior Painting", desc: "Walls, ceilings, trim" },
                { href: "/drywall-repair-houston-tx", title: "Drywall Repair", desc: "Texture-match guarantee" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="block bg-zinc-50 border border-zinc-200 rounded-xl p-5 hover:border-emerald-600 hover:shadow-sm transition">
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-zinc-600">{s.desc}</p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-center text-zinc-700">
              Related project:{" "}
              <Link href="/projects/heights-exterior-siding-repaint" className="font-semibold text-emerald-700 underline">
                exterior painting on a two-story Heights home
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
