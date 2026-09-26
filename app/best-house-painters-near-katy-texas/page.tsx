import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business";

export const metadata: Metadata = {
  title: "Best House Painters Near Katy Texas",
  description:
    "Recognized as one of the best house painters near Katy Texas. Premium service in Katy, Fulshear, Richmond & Sugar Land. 4.9/5 Google, free estimates.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/best-house-painters-near-katy-texas" },
  openGraph: {
    title: "Best House Painters Near Katy Texas",
    description: "Top-rated house painters near Katy TX. Interior, exterior, cabinet painting. Free estimates. (346) 594-5960.",
    url: "https://houstonsuperiorpainting.com/best-house-painters-near-katy-texas",
    type: "website",
    images: [{ url: "/images/og-exterior-painting.jpg", width: 1200, height: 630 }],
  },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
};

const faqs = [
  { q: "What areas near Katy do you serve?", a: "We serve all of Katy including Cinco Ranch, Cross Creek Ranch, Elyson, Cane Island, Firethorne, Tamarron, plus Fulshear, Richmond, Sugar Land, and all surrounding communities in Fort Bend and Harris County." },
  { q: "How much does house painting cost in Katy TX?", a: "Interior painting in Katy costs $2.50\u2013$4.50/sqft. A 2,500 sqft Katy home averages $4,000\u2013$8,000 for interior and $4,500\u2013$12,000 for exterior. Cabinet painting runs $3,000\u2013$8,000. We provide free itemized estimates." },
  { q: "Do you have experience with Katy new construction homes?", a: "Yes. We have painted hundreds of new construction and builder-grade upgrade projects in Katy communities including Cinco Ranch, Elyson, and Cross Creek Ranch. We know the typical layouts, siding types, and HOA requirements." },
  { q: "What paint brands do you use?", a: "We exclusively use Sherwin-Williams (Duration, SuperPaint, Emerald) and Benjamin Moore (Regal Select, Aura). These premium products are rated for Texas heat and humidity." },
  { q: "How long does it take to paint a house in Katy?", a: "Interior painting takes 3\u20135 days for a typical Katy home. Exterior painting takes 4\u20137 days depending on size, siding type, and prep work needed. We schedule around weather for exterior work." },
  { q: "Do you offer warranties?", a: "Yes. A 5-year warranty on all painting work \u2014 exterior, interior, and cabinet refinishing. All warranties are in writing." },
];

export default function BestHousePaintersKatyTexas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
                { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Katy Painters", "item": "https://houstonsuperiorpainting.com/painters-katy-tx" }, { "@type": "ListItem", "position": 3, "name": "Best House Painters Katy", "item": "https://houstonsuperiorpainting.com/best-house-painters-near-katy-texas" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">Houston Superior Painting is one of the top-rated house painters near Katy, Texas. We serve Cinco Ranch, Cross Creek Ranch, Elyson, Fulshear, Richmond, and Sugar Land. Interior painting starts at $2.50/sqft, exterior from $3,500. 4.9/5 Google rating, 200+ reviews, 5-year exterior warranty. Call <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a>.</p>
        </div>
      </section>

      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">Best House Painters Near Katy Texas</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">From Cinco Ranch to Fulshear, Katy homeowners trust Houston Superior Painting for premium interior, exterior, and cabinet painting. Owner-operated since 2019.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Call {BUSINESS.phone}</a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">Why Katy Homeowners Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Katy Experts Since 2019", desc: "Hundreds of completed projects across Cinco Ranch, Cross Creek Ranch, Elyson, Cane Island, and every Katy neighborhood." },
              { title: "4.9/5 Google Rating", desc: "200+ verified 5-star reviews from homeowners across Katy, Fulshear, Richmond, and Sugar Land." },
              { title: "Premium Products Only", desc: "Sherwin-Williams Duration and Emerald, Benjamin Moore Regal Select and Aura. No builder-grade paint." },
              { title: "Background-Checked Team", desc: "W-2 employees only. Every team member is background-checked and drug-tested." },
              { title: "5-Year Written Warranty", desc: "Written 5-year warranty on all work \u2014 exterior, interior, and cabinets." },
              { title: "Owner On Every Job", desc: "Juan Serra personally oversees every Katy project from estimate to final walkthrough." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">House Painting Costs in Katy TX</h2>
          <div className="overflow-x-auto pricing-snippet">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-4 font-semibold">Service</th><th className="text-left p-4 font-semibold">Price Range</th><th className="text-left p-4 font-semibold">Timeline</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4">Interior Painting (whole home)</td><td className="p-4 font-semibold">$4,000 &ndash; $8,000</td><td className="p-4">3\u20135 days</td></tr>
                <tr><td className="p-4">Exterior Painting</td><td className="p-4 font-semibold">$4,500 &ndash; $12,000</td><td className="p-4">4\u20137 days</td></tr>
                <tr><td className="p-4">Cabinet Refinishing</td><td className="p-4 font-semibold">$3,000 &ndash; $8,000</td><td className="p-4">5\u20138 days</td></tr>
                <tr><td className="p-4">Single Room</td><td className="p-4 font-semibold">$500 &ndash; $1,500</td><td className="p-4">1 day</td></tr>
                <tr><td className="p-4">Accent Wall</td><td className="p-4 font-semibold">$200 &ndash; $600</td><td className="p-4">3\u20135 hours</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Katy Neighborhoods We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {["Cinco Ranch", "Cross Creek Ranch", "Elyson", "Cane Island", "Firethorne", "Tamarron", "Grand Lakes", "Pine Mill Ranch", "Nottingham Country", "Morton Ranch", "Katy Mills Area", "Old Katy"].map(n => (
              <div key={n} className="bg-card border border-border rounded-lg p-3 text-center text-sm font-medium">{n}</div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/painters-katy-tx" className="text-primary font-semibold hover:underline">Katy Painters</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/painters-fulshear-tx" className="text-primary font-semibold hover:underline">Fulshear</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/painters-richmond-tx" className="text-primary font-semibold hover:underline">Richmond</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/painters-sugar-land-tx" className="text-primary font-semibold hover:underline">Sugar Land</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">FAQs About House Painting in Katy</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium hover:bg-muted/50 transition-colors">{faq.q}<span className="ml-4 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">&#9660;</span></summary>
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Paint Your Katy Home?</h2>
          <p className="text-lg opacity-90 mb-8">Free estimates, premium products, 5-year warranty. See why Katy homeowners rate us 4.9/5 on Google.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Text Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
