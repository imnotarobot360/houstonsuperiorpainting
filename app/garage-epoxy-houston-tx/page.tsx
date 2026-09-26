// app/garage-epoxy-houston-tx/page.tsx
// Houston Superior Painting — Garage Epoxy service page

import Link from "next/link";
import Image from "next/image";
import { RelatedLinks } from "@/components/luxury/related-links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Floor Epoxy Houston TX — Houston Superior Painting",
  description: "Professional garage floor epoxy in Houston TX. Flake, metallic, solid color. Diamond-ground prep. 15-year warranty. $2,500-$8,500. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorepoxy.com/",
  },
  openGraph: {
    title: "Garage Floor Epoxy Houston TX — Houston Superior Painting",
    description: "Professional garage floor epoxy in Houston TX. Flake, metallic, solid color. Diamond-ground prep. 15-year warranty.",
    url: "https://houstonsuperiorepoxy.com/",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-garage-epoxy.jpg",
      width: 1200,
      height: 630,
      alt: "Garage Floor Epoxy Houston TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Floor Epoxy Houston TX — Houston Superior Painting",
    description: "Professional garage floor epoxy in Houston TX. Flake, metallic, solid color. Diamond-ground prep. 15-year warranty.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-garage-epoxy.jpg"],
  },
}

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://houstonsuperiorepoxy.com/#service",
  name: "Garage Floor Epoxy & Polyaspartic Coatings in Houston, TX",
  description:
    "Professional garage floor epoxy, polyaspartic, and concrete coating installation in Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, and The Woodlands TX. Diamond grind prep, flake systems, metallic finishes, solid color. Built for Houston heat and humidity. 15-year warranty.",
  serviceType: "Garage Floor Coating",
  provider: { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization" },
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
      minPrice: 2500,
      maxPrice: 12000,
      priceCurrency: "USD",
    },
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Garage Floor Coating Options",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Polyaspartic Flake System (1-Day)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Epoxy Flake System" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metallic Epoxy Finish" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solid Color Epoxy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Crack & Pit Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diamond Grinding Prep" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Patio & Pool Deck Coatings" } },
    ],
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does garage floor epoxy cost in Houston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Garage floor epoxy in Houston typically costs $5–$12 per square foot installed. A standard 2-car garage (400–500 sq ft) runs $2,500–$5,500. A 3-car garage (600–800 sq ft) runs $3,500–$8,500. Metallic finishes add 20–30%. Pricing includes diamond grinding, crack repair, primer, base coat, flake or pigment, and clear topcoat with 15-year warranty.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between epoxy and polyaspartic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Epoxy is a 2-part resin that takes 24–72 hours to cure per coat, ideal for budget-conscious installs. Polyaspartic cures in 1–2 hours per coat, allowing same-day install and same-day walk-on. Polyaspartic is also more UV-stable (won't yellow) and more flexible (won't crack with concrete movement). For Houston heat we recommend polyaspartic for premium installs, epoxy for budget jobs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does garage epoxy installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Polyaspartic flake systems install in 1 day with car-ready in 24 hours. Traditional epoxy takes 2–3 days plus 5–7 days full cure before parking vehicles. We schedule around your needs and can usually start within 1–2 weeks of estimate signoff.",
      },
    },
    {
      "@type": "Question",
      name: "Will epoxy lift off my Houston garage floor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not when prepped correctly. Most epoxy failures come from inadequate surface prep — acid wash is not enough. Houston Superior Painting uses diamond grinders to mechanically open the concrete pores, creating a true mechanical bond. Properly prepped polyaspartic and epoxy systems last 15+ years in Houston garages.",
      },
    },
    {
      "@type": "Question",
      name: "Can you repair cracks and pits before coating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair cracks with flexible polyurea, fill pits and spalled areas with patching compound, and grind everything flat before coating. Cracked Houston slabs (very common due to foundation movement) become invisible after our prep. Repair work is included in the quote.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a flake or metallic finish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer three finish styles: (1) Flake systems broadcast colored vinyl flakes for slip resistance and a granite-like look — most popular. (2) Metallic epoxy creates flowing, three-dimensional effects with metallic pigments — premium showroom finish. (3) Solid color for clean, modern shop-style look. Color samples shown on-site.",
      },
    },
    {
      "@type": "Question",
      name: "Do epoxy floors get slippery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solid color epoxy can be slippery when wet. Flake systems are naturally slip-resistant due to the surface texture from broadcast flakes. We also add anti-slip aggregate to the topcoat upon request — recommended for outdoor patios, pool decks, and homes with elderly residents.",
      },
    },
    {
      "@type": "Question",
      name: "Do you coat patios, pool decks, and outdoor concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coat covered patios, garage extensions, mud rooms, sunrooms, and pool decks. UV-stable polyaspartic is required for any sun-exposed area. Pool decks include anti-slip aggregate. Houston Superior Painting also re-coats existing failed coatings after grind-back.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve for garage epoxy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Houston Superior Painting installs garage epoxy and polyaspartic coatings throughout Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, Bellaire, and The Woodlands TX. Free estimates at (346) 594-5960.",
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
    { "@type": "ListItem", position: 3, name: "Garage Epoxy Houston TX", item: "https://houstonsuperiorepoxy.com/" },
  ],
};

const SPEAKABLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://houstonsuperiorepoxy.com/#webpage",
  url: "https://houstonsuperiorepoxy.com/",
  name: "Garage Floor Epoxy Houston TX | Houston Superior Painting",
  speakable: { "@type": "SpeakableSpecification", cssSelector: [".hero-h1", ".quick-answer", ".pricing-snippet"] },
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
  { project: "1-car garage (250 sq ft)", price: "$1,800 – $3,200", note: "1 day" },
  { project: "2-car garage (400–500 sq ft)", price: "$2,500 – $5,500", note: "1–2 days" },
  { project: "3-car garage (600–800 sq ft)", price: "$3,500 – $8,500", note: "1–2 days" },
  { project: "4-car / oversized (900+ sq ft)", price: "$5,500 – $12,000", note: "2–3 days" },
  { project: "Metallic finish upgrade", price: "+20–30%", note: "Same timeline" },
  { project: "Covered patio coating", price: "$8 – $14 / sq ft", note: "1–2 days" },
  { project: "Pool deck (anti-slip)", price: "$10 – $16 / sq ft", note: "2–3 days" },
  { project: "Concrete crack & pit repair (single)", price: "$150 – $400", note: "Included if minor" },
];

const faqItems = [
  {
    q: "How much does garage floor epoxy cost in Houston?",
    a: "Garage floor epoxy in Houston typically costs $5–$12 per sq ft installed. A standard 2-car garage (400–500 sq ft) runs $2,500–$5,500. A 3-car garage runs $3,500–$8,500. Metallic finishes add 20–30%. Pricing includes diamond grinding, crack repair, primer, base coat, flake or pigment, and clear topcoat with 15-year warranty.",
  },
  {
    q: "What's the difference between epoxy and polyaspartic?",
    a: "Epoxy is a 2-part resin that takes 24–72 hours per coat — budget choice. Polyaspartic cures in 1–2 hours per coat, allowing 1-day install with same-day walk-on. Polyaspartic is also more UV-stable (won't yellow) and more flexible (won't crack). For Houston heat we recommend polyaspartic for premium, epoxy for budget.",
  },
  {
    q: "How long does installation take?",
    a: "Polyaspartic flake systems install in 1 day with car-ready in 24 hours. Traditional epoxy takes 2–3 days plus 5–7 days full cure before parking vehicles. We schedule around your needs and can usually start within 1–2 weeks of signoff.",
  },
  {
    q: "Will epoxy lift off my Houston garage floor?",
    a: "Not when prepped correctly. Most failures come from inadequate prep — acid wash is not enough. We use diamond grinders to mechanically open concrete pores, creating a true mechanical bond. Properly prepped polyaspartic and epoxy systems last 15+ years in Houston garages.",
  },
  {
    q: "Can you repair cracks and pits before coating?",
    a: "Yes. We repair cracks with flexible polyurea, fill pits and spalled areas with patching compound, and grind everything flat. Cracked Houston slabs (very common due to foundation movement) become invisible after our prep. Repair work is included in your quote.",
  },
  {
    q: "Can I get flake or metallic finishes?",
    a: "Yes. Three styles: (1) Flake — broadcast vinyl flakes for slip resistance and granite-like look (most popular). (2) Metallic — flowing 3D effects with metallic pigments (premium showroom). (3) Solid color — clean modern shop-style. Color samples shown on-site.",
  },
  {
    q: "Do epoxy floors get slippery?",
    a: "Solid color epoxy can be slippery when wet. Flake systems are naturally slip-resistant from the broadcast texture. We also add anti-slip aggregate to the topcoat on request — recommended for outdoor patios, pool decks, and homes with elderly residents.",
  },
  {
    q: "Do you coat patios, pool decks, and outdoor concrete?",
    a: "Yes. We coat covered patios, garage extensions, mud rooms, sunrooms, and pool decks. UV-stable polyaspartic is required for any sun-exposed area. Pool decks include anti-slip aggregate. We also re-coat existing failed coatings after grind-back.",
  },
  {
    q: "How long does the warranty last?",
    a: "Houston Superior Painting backs every garage coating with a 15-year written warranty against peeling, delamination, and topcoat failure. We honor warranty claims with same-week response.",
  },
];

export default function GarageEpoxyHoustonPage() {
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
                <li><Link href="/" className="hover:underline">Home</Link></li><li>›</li>
                <li><Link href="/#services" className="hover:underline">Services</Link></li><li>›</li>
                <li className="text-zinc-900">Garage Epoxy Houston TX</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                  <span aria-hidden>🏁</span>
                  <span>15-Year Warranty • 1-Day Install Available</span>
                </div>

                <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Garage Floor Epoxy &amp; Polyaspartic in Houston, TX
                </h1>

                <p className="mt-6 text-xl text-zinc-700 leading-relaxed">
                  Premium diamond-ground floor systems built for Houston heat. Flake, metallic, and solid finishes. Car-ready in <strong>24 hours</strong> with our 1-day polyaspartic install. 15-year warranty in writing.
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-700">
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Diamond-Grind Prep</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> UV-Stable Polyaspartic</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> 15-Year Warranty</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> 100+ Color/Flake Options</li>
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
                  src="/images/garage-epoxy-hero.jpg"
                  alt="Garage floor epoxy with flake finish by Houston Superior Painting — Cypress, TX"
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
              Houston Superior Painting installs garage floor epoxy and polyaspartic coatings in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. Cost is <strong>$5–$12 per square foot</strong> ($2,500–$8,500 for typical 2-3 car garages). Polyaspartic systems install in <strong>1 day</strong> with same-day walk-on and 24-hour car-ready. Backed by our <strong>15-year warranty</strong>. Free estimates at <a href="tel:+13465945960" className="text-emerald-700 underline font-semibold">(346) 594-5960</a>.
            </p>
          </div>
        </section>

        {/* SYSTEM TYPES */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Garage Floor System</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">Three premium finishes, all built for Houston heat and humidity.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Flake Polyaspartic",
                  tag: "Most Popular",
                  body: "Colored vinyl flakes broadcast into a polyaspartic base, sealed with clear UV-stable topcoat. Natural slip resistance, granite-like beauty, hides imperfections.",
                  bullets: ["1-day install", "24-hour car-ready", "Slip-resistant texture", "Hides hairline cracks", "100+ flake blends"],
                  highlight: true,
                },
                {
                  title: "Metallic Epoxy",
                  tag: "Showroom-Grade",
                  body: "Liquid metallic pigments swirled and manipulated to create flowing, three-dimensional effects. Each floor is one-of-a-kind. Premium showroom or man-cave finish.",
                  bullets: ["2-3 day install", "Unique 3D effect", "Mirror-finish topcoat", "Color customization", "Photo-ready finish"],
                  highlight: false,
                },
                {
                  title: "Solid Color Epoxy",
                  tag: "Budget-Friendly",
                  body: "Single-color epoxy base with clear topcoat. Clean, modern, shop-style aesthetic. Best value when you want a fresh, uniform look.",
                  bullets: ["2-day install", "5-7 day full cure", "Easiest to clean", "Solid gray, black, tan, beige", "Anti-slip add-on available"],
                  highlight: false,
                },
              ].map((system) => (
                <div key={system.title} className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition ${system.highlight ? "border-2 border-emerald-600" : "border border-zinc-200"}`}>
                  {system.highlight && (
                    <div className="inline-block bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {system.tag}
                    </div>
                  )}
                  {!system.highlight && (
                    <div className="inline-block bg-zinc-100 text-zinc-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {system.tag}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3">{system.title}</h3>
                  <p className="text-zinc-700 leading-relaxed mb-4">{system.body}</p>
                  <ul className="space-y-2 text-sm">
                    {system.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Houston Homeowners Choose Us for Garage Floors</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">Most "epoxy" companies in Houston spray a $99 Home Depot kit and call it done. We engineer floors that last 15+ years.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Diamond Grind, Not Acid Wash", body: "We use commercial-grade diamond grinders to mechanically open concrete pores. This is THE difference between coatings that last 15 years and ones that peel in 18 months." },
                { title: "Premium Polyaspartic Systems", body: "We use professional-grade polyaspartic resins — not consumer epoxy kits. Higher UV stability, faster cure, better flex, longer warranty." },
                { title: "Crack & Pit Repair Included", body: "Houston slabs crack from foundation movement. We repair with flexible polyurea before coating. Most competitors skip this step and the cracks telegraph through." },
                { title: "1-Day Install Option", body: "Polyaspartic flake systems install in a single day. Drop the car off Friday, drive on it Saturday. We respect your schedule." },
                { title: "15-Year Written Warranty", body: "Backed in writing against peeling, delamination, hot-tire pickup, and topcoat failure. Same-week response on warranty claims." },
                { title: "Houston Climate Engineered", body: "Houston heat and slab moisture destroy cheap coatings. Our systems include moisture-vapor primers, UV-stable topcoats, and Texas-specific formulas." },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED + PROCESS */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What&apos;s Included</h2>
              <ul className="space-y-3 text-zinc-800">
                {[
                  "Free on-site assessment & color consultation",
                  "Furniture / equipment removal coordination",
                  "Industrial diamond grinding (full floor prep)",
                  "Crack and pit repair with flexible polyurea",
                  "Moisture-vapor primer (if needed)",
                  "Premium polyaspartic or epoxy base coat",
                  "Broadcast flake or metallic pigment (your choice)",
                  "UV-stable clear polyaspartic topcoat",
                  "Anti-slip aggregate (on request)",
                  "Trim painting and baseboards (on request)",
                  "Full cleanup and debris haul-off",
                  "15-year written warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 6-Step Install Process</h2>
              <ol className="space-y-5">
                {[
                  { n: 1, t: "Empty the garage", d: "You move vehicles and contents out. We help coordinate temporary storage if needed." },
                  { n: 2, t: "Diamond grind the slab", d: "Commercial grinders open the concrete pores across the entire surface. Dust extraction keeps the area clean." },
                  { n: 3, t: "Repair cracks and pits", d: "Polyurea flexible filler in cracks, patching compound in pits and spalled areas. Ground flat once cured." },
                  { n: 4, t: "Prime & base coat", d: "Moisture-vapor primer (if moisture detected) followed by colored polyaspartic or epoxy base coat troweled or rolled uniformly." },
                  { n: 5, t: "Broadcast flakes / apply metallic", d: "Flakes broadcast to refusal across wet base coat, or metallic pigments swirled into wet metallic base for one-of-a-kind effects." },
                  { n: 6, t: "Topcoat + sign-off", d: "UV-stable clear polyaspartic topcoat seals the entire system. Walk-on in 4 hours, car-ready in 24. We walk through with you and hand over the warranty." },
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
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Garage Epoxy Cost in Houston</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">All projects include diamond grinding, crack repair, primer, base coat, flake or pigment, UV-stable topcoat, and 15-year warranty. No upfront payment.</p>

            <div className="pricing-snippet overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
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
                      <td className="px-4 py-3 font-medium text-zinc-900">{row.project}</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">{row.price}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-zinc-500 mt-4 text-center">Final pricing depends on slab condition, square footage, flake/metallic selection, and accessibility. Free on-site estimate within 24 hours.</p>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Garage Epoxy Service Areas</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">We coat garages across all of Greater Houston:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cities.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="block bg-white border border-zinc-200 rounded-lg px-4 py-3 text-center font-medium hover:border-emerald-600 hover:text-emerald-700 hover:shadow-sm transition">
                  {c.name}, TX
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Garage Epoxy FAQs</h2>
            <div className="divide-y divide-zinc-200 border-y border-zinc-200">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Garage Floor That Lasts 15+ Years?</h2>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">Free estimate, 1-day install available, 15-year warranty in writing. Houston-tough.</p>
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
                { href: "/exterior-painting-houston-tx", title: "Exterior Painting", desc: "Built for Houston climate" },
                { href: "/pressure-washing-houston-tx", title: "Pressure Washing", desc: "Surface prep & cleaning" },
                { href: "/interior-painting-houston-tx", title: "Interior Painting", desc: "Walls, ceilings, trim" },
                { href: "/limewash-brick-painting-houston-tx", title: "Limewash & Brick", desc: "European-style finishes" },
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
      <RelatedLinks exclude="https://houstonsuperiorepoxy.com/" />
    </>
  );
}
