// app/load-bearing-wall-removal-houston-tx/page.tsx
// Houston Superior Painting — Load Bearing Wall Removal page

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Load Bearing Wall Removal Houston TX | Open Floor Plan",
  description:
    "Professional load bearing wall removal in Houston, Katy & Cypress TX. Structural assessment, engineer letter, permits, beam install, drywall repair, and paint.",
  alternates: {
    canonical:
      "https://houstonsuperiorpainting.com/load-bearing-wall-removal-houston-tx",
  },
  openGraph: {
    title: "Load Bearing Wall Removal Houston TX — Open Your Floor Plan",
    description:
      "Engineer letter, permits, beam install, clean finish work — all in one quote. Free estimates.",
    url: "https://houstonsuperiorpainting.com/load-bearing-wall-removal-houston-tx",
    type: "website",
    images: [{ url: "/images/og-lbw-removal.jpg", width: 1200, height: 630, alt: "Load bearing wall removal by Houston Superior Painting" }],
    locale: "en_US",
    siteName: "Houston Superior Painting",
  },
  twitter: { card: "summary_large_image", title: "Load Bearing Wall Removal Houston TX", description: "Open floor plan transformations.", images: ["/images/og-lbw-removal.jpg"] },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/load-bearing-wall-removal-houston-tx#service",
  name: "Load Bearing Wall Removal in Houston, TX",
  description:
    "Full-service load bearing wall removal in Houston, Katy, Cypress, Sugar Land and surrounding TX cities. Includes structural engineer assessment, City of Houston permits, temporary support, wall demo, beam or LVL installation, electrical/plumbing re-routing coordination, drywall repair, texture match, and paint.",
  serviceType: "Load Bearing Wall Removal",
  provider: { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Houston" }, { "@type": "City", name: "Katy" }, { "@type": "City", name: "Cypress" },
    { "@type": "City", name: "Sugar Land" }, { "@type": "City", name: "Richmond" }, { "@type": "City", name: "Pearland" },
    { "@type": "Neighborhood", name: "Memorial" }, { "@type": "Neighborhood", name: "The Heights" }, { "@type": "City", name: "Bellaire" },
    { "@type": "City", name: "The Woodlands" },
  ],
  offers: { "@type": "Offer", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", minPrice: 4000, maxPrice: 18000, priceCurrency: "USD" }, availability: "https://schema.org/InStock" },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does it cost to remove a load bearing wall in Houston?", acceptedAnswer: { "@type": "Answer", text: "Load bearing wall removal in Houston typically costs $4,000–$15,000+. Simple removals with a single LVL beam run $4,000–$7,500. Walls with HVAC, plumbing, or electrical re-routing run $7,500–$12,000. Long spans requiring steel beams or multi-story support run $12,000–$18,000+. Pricing includes structural engineer letter, City of Houston permit, beam install, drywall repair, texture match, and paint." } },
    { "@type": "Question", name: "How do I know if a wall is load bearing?", acceptedAnswer: { "@type": "Answer", text: "Load bearing walls typically run perpendicular to ceiling joists, sit directly above another wall or beam in the level below, are exterior walls, or are central walls in the home's footprint. Never assume — we provide free on-site assessment and bring a structural engineer if the answer isn't obvious. A wrong assumption can collapse a ceiling." } },
    { "@type": "Question", name: "Do you handle the engineer letter and permit?", acceptedAnswer: { "@type": "Answer", text: "Yes. Houston Superior Painting handles every step: licensed structural engineer assessment and stamped letter, City of Houston building permit application, plan submission, and inspection coordination. You don't need to hire anyone separately." } },
    { "@type": "Question", name: "How long does load bearing wall removal take?", acceptedAnswer: { "@type": "Answer", text: "Total project: 2–4 weeks. Breakdown: engineer assessment 1 week, permit 1–2 weeks, demo and beam install 2–4 days, drywall and texture 3–5 days, paint 1–2 days. We can often run permit and demo prep in parallel to compress timeline." } },
    { "@type": "Question", name: "Will my insurance or HOA require approval?", acceptedAnswer: { "@type": "Answer", text: "Insurance typically doesn't require notice but check your policy. HOAs in Houston (Cinco Ranch, Bridgeland, Riverstone, etc.) often require ARB approval for any structural change. We provide engineer letter, plans, and rendering for ARB submission and handle revisions if requested." } },
    { "@type": "Question", name: "What about electrical, plumbing, and HVAC inside the wall?", acceptedAnswer: { "@type": "Answer", text: "We coordinate licensed electricians, plumbers, and HVAC techs to re-route utilities found inside the wall. These are quoted as separate line items in the bid so you see exactly what each trade costs. Houston Superior Painting manages the schedule so each trade arrives at the right phase." } },
    { "@type": "Question", name: "Do you do flush beams or drop beams?", acceptedAnswer: { "@type": "Answer", text: "Both. Flush beams (hidden inside the ceiling) require structural engineering, joist hangers, and often LVL or steel — more expensive but cleaner aesthetics. Drop beams sit below the ceiling line and are less expensive but visible. The engineer recommends which is feasible based on span, load, and existing framing." } },
    { "@type": "Question", name: "What areas do you serve for wall removal?", acceptedAnswer: { "@type": "Answer", text: "Houston Superior Painting performs load bearing wall removal throughout Houston, Katy, Cypress, Sugar Land, Richmond, Pearland, Memorial, The Heights, Bellaire, and The Woodlands TX. Free assessments at (346) 594-5960." } },
  ],
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://houstonsuperiorpainting.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://houstonsuperiorpainting.com/#services" },
    { "@type": "ListItem", position: 3, name: "Load Bearing Wall Removal Houston TX", item: "https://houstonsuperiorpainting.com/load-bearing-wall-removal-houston-tx" },
  ],
};

const SPEAKABLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://houstonsuperiorpainting.com/load-bearing-wall-removal-houston-tx#webpage",
  url: "https://houstonsuperiorpainting.com/load-bearing-wall-removal-houston-tx",
  name: "Load Bearing Wall Removal Houston TX | Houston Superior Painting",
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
  { project: "Single-story, simple removal (≤10 ft span)", price: "$4,000 – $7,500", note: "2–3 weeks total" },
  { project: "Single-story with utility re-route", price: "$7,500 – $11,500", note: "3–4 weeks" },
  { project: "Two-story load with LVL beam", price: "$9,500 – $14,000", note: "3–5 weeks" },
  { project: "Long span requiring steel beam", price: "$12,000 – $18,000", note: "4–6 weeks" },
  { project: "Multiple walls (open-concept package)", price: "$15,000 – $30,000+", note: "5–8 weeks" },
  { project: "Engineer letter only (separate scope)", price: "$400 – $900", note: "1 week" },
];

const faqItems = [
  { q: "How much does it cost to remove a load bearing wall in Houston?", a: "Load bearing wall removal in Houston ranges $4,000–$15,000+. Simple removals with single LVL: $4,000–$7,500. Walls with HVAC/plumbing/electrical: $7,500–$12,000. Long spans requiring steel: $12,000–$18,000+. Pricing includes engineer letter, permit, beam install, drywall, texture, and paint." },
  { q: "How do I know if a wall is load bearing?", a: "Load bearing walls typically run perpendicular to ceiling joists, sit above another wall or beam below, are exterior walls, or are central in the home. Never assume — wrong assumption can collapse a ceiling. We provide free on-site assessment and bring a structural engineer when needed." },
  { q: "Do you handle the engineer letter and permit?", a: "Yes. We handle every step: licensed structural engineer assessment and stamped letter, City of Houston building permit, plan submission, and inspection coordination. You don't hire anyone separately." },
  { q: "How long does the project take?", a: "Total: 2–4 weeks. Engineer assessment 1 week, permit 1–2 weeks, demo and beam install 2–4 days, drywall and texture 3–5 days, paint 1–2 days. Permit and demo prep can sometimes run in parallel to compress timeline." },
  { q: "Will HOA approval be needed?", a: "HOAs in Cinco Ranch, Bridgeland, Riverstone, and similar communities often require ARB approval for structural changes. We provide engineer letter, plans, and renderings for ARB submission and handle any requested revisions." },
  { q: "What about electrical, plumbing, and HVAC inside the wall?", a: "We coordinate licensed electricians, plumbers, and HVAC techs to re-route utilities found inside the wall. These are separate line items so you see exactly what each trade costs. We manage scheduling so trades arrive at the right phase." },
  { q: "Flush beam or drop beam — which is better?", a: "Flush beams hide inside the ceiling for a clean look but cost more (LVL or steel, more engineering). Drop beams sit below the ceiling and cost less but are visible. The engineer recommends based on span, load, and existing framing." },
  { q: "Can you do this for a kitchen-to-living-room opening?", a: "This is our most common project. Removing the wall between kitchen and living room is the #1 open-concept request in Houston. We coordinate with cabinet, flooring, and counter contractors so the finished result blends seamlessly." },
];

export default function LoadBearingWallRemovalHoustonPage() {
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
                <li className="text-zinc-900">Load Bearing Wall Removal Houston TX</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                  <span aria-hidden>🏗️</span><span>Engineer Letter + Permit + Beam + Finish Included</span>
                </div>
                <h1 className="hero-h1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Load Bearing Wall Removal in Houston, TX
                </h1>
                <p className="mt-6 text-xl text-zinc-700 leading-relaxed">
                  Open up your floor plan with one contractor managing the entire scope — structural engineer letter, City of Houston permits, beam install, utility re-route coordination, drywall, texture match, and paint. No general contractor markup.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-700">
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Licensed Structural Engineer</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> City of Houston Permits</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> $2M Insured</li>
                  <li className="flex items-center gap-1.5"><span className="text-emerald-600">✓</span> Single Point of Contact</li>
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg text-base shadow-md transition">Schedule Free Assessment →</Link>
                  <a href="tel:+13465945960" className="inline-flex items-center justify-center px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg text-base transition">📞 (346) 594-5960</a>
                </div>
                <p className="mt-4 text-sm text-zinc-500">On-site engineer assessment available within <strong className="text-zinc-700">5 business days</strong>.</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
                <Image src="/images/lbw-removal-hero.jpg" alt="Open floor plan after load bearing wall removal by Houston Superior Painting" fill priority sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ANSWER */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-3">Quick Answer</h2>
            <p className="quick-answer text-lg md:text-xl text-zinc-800 leading-relaxed">
              Houston Superior Painting handles full-scope load bearing wall removal in Houston, Katy, Cypress, Sugar Land, and surrounding TX cities. Projects cost <strong>$4,000–$15,000+</strong> depending on span and utilities. Total timeline <strong>2–4 weeks</strong> including engineer letter, City of Houston permit, beam install, utility re-route, drywall texture match, and paint. Free on-site assessment at <a href="tel:+13465945960" className="text-emerald-700 underline font-semibold">(346) 594-5960</a>.
            </p>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Houston Homeowners Choose Us for Wall Removal</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-12 text-lg">Most homeowners hire 5 separate contractors (engineer, demo, framer, drywall, painter). We deliver everything in one quote with one schedule.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Single Point of Contact", body: "One project manager runs the entire scope. No coordination headaches between trades. No finger-pointing if something goes wrong." },
                { title: "Engineer Letter Included", body: "We bring the licensed structural engineer for assessment and the stamped letter you need for permit submission. No subcontracting that out." },
                { title: "City of Houston Permit Handled", body: "We submit, communicate with City of Houston permitting, and coordinate inspections. You never wait at the permit office." },
                { title: "Clean Finish Work", body: "Drywall + texture match + paint is what we do every day. The wall goes away and the finish looks like it was always that way." },
                { title: "Utility Re-Route Coordination", body: "Electrical, plumbing, HVAC inside the wall? We coordinate licensed trades and quote each as a separate line item for full transparency." },
                { title: "Houston-Specific Experience", body: "We know Cinco Ranch's ARB process, Bridgeland HOA timelines, Memorial Villages permit quirks, and how Houston's pier-and-beam vs slab foundations affect engineering." },
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What&apos;s Included</h2>
              <ul className="space-y-3 text-zinc-800">
                {[
                  "Free on-site assessment & feasibility review",
                  "Licensed structural engineer letter (stamped)",
                  "City of Houston building permit",
                  "HOA / ARB submission package (if needed)",
                  "Temporary support / shoring during demo",
                  "Wall demolition and debris haul-off",
                  "LVL or steel beam installation per engineer spec",
                  "Joist hangers and structural connectors",
                  "Coordination of electrician (if utilities present)",
                  "Coordination of plumber (if pipes present)",
                  "Coordination of HVAC (if ducts present)",
                  "Drywall installation and finishing",
                  "Texture match to surrounding walls / ceiling",
                  "Prime and paint to match",
                  "Final inspection sign-off",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-emerald-600 mt-1">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 8-Step Process</h2>
              <ol className="space-y-5">
                {[
                  { n: 1, t: "Free assessment", d: "We visit, determine if the wall is load bearing, and discuss your vision (flush beam vs drop beam, finishes, timeline)." },
                  { n: 2, t: "Engineer evaluation", d: "Licensed structural engineer reviews the load path, beam sizing options, and provides a stamped letter." },
                  { n: 3, t: "Bid + contract", d: "Detailed line-item bid: engineer, permit, demo, beam, utilities, drywall, paint. Once approved, we sign and start." },
                  { n: 4, t: "Permit + HOA submission", d: "Plans submitted to City of Houston and (if applicable) HOA ARB. We track approvals." },
                  { n: 5, t: "Pre-demo prep", d: "Site protection, temporary shoring installed, utility shutoff coordination." },
                  { n: 6, t: "Demo + utility re-route", d: "Wall removed in sections. Electrical, plumbing, HVAC re-routed by licensed trades." },
                  { n: 7, t: "Beam install + structural inspection", d: "Beam set, joist hangers fastened. City of Houston structural inspection passed before closing up." },
                  { n: 8, t: "Drywall, texture, paint, walkthrough", d: "Finish trades complete the opening. Texture matched. Painted. We walk through with you and sign off." },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Load Bearing Wall Removal Cost in Houston</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">All projects include engineer letter, permit, beam, drywall, texture match, and paint. Utility re-route quoted as separate line items when present.</p>
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
            <p className="text-sm text-zinc-500 mt-4 text-center">Steel beams, multi-story loads, and complex HVAC/plumbing re-routes can add $2,000–$6,000 depending on conditions.</p>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 md:py-24 bg-white border-y border-zinc-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Service Areas for Wall Removal</h2>
            <p className="text-center text-zinc-600 max-w-2xl mx-auto mb-10">We open floor plans across all of Greater Houston:</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Load Bearing Wall Removal FAQs</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Open Up Your Houston Home?</h2>
            <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">Free assessment, engineer letter, permit, beam, drywall, paint — one quote, one contractor, one timeline.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 hover:bg-emerald-50 font-semibold rounded-lg text-base shadow-md transition">Schedule Free Assessment →</Link>
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
                { href: "/drywall-repair-houston-tx", title: "Drywall Repair", desc: "Seamless texture match" },
                { href: "/interior-painting-houston-tx", title: "Interior Painting", desc: "Whole-home repaints" },
                { href: "/exterior-painting-houston-tx", title: "Exterior Painting", desc: "Built for Houston climate" },
                { href: "/cabinet-refinishing-houston-tx", title: "Cabinet Refinishing", desc: "Update kitchen finishes" },
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
