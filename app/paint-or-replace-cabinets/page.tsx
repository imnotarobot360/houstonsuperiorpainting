import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business";

export const metadata: Metadata = {
  title: "Should You Paint or Replace Cabinets? Cost & Expert Guide",
  description: "Paint vs replace cabinets \u2013 professional analysis showing how to save 60-70% with quality refinishing. Side-by-side cost comparison.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/paint-or-replace-cabinets" },
  openGraph: { title: "Paint or Replace Cabinets? Complete Guide", description: "Save 60-70% by painting instead of replacing cabinets. Expert breakdown.", url: "https://houstonsuperiorpainting.com/paint-or-replace-cabinets", type: "article", images: [{ url: "/images/og-cabinet-refinishing.jpg", width: 1200, height: 630 }] },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
};

const faqs = [
  { q: "Is it worth it to paint kitchen cabinets?", a: "Absolutely. Professional cabinet painting costs $3,000\u2013$8,000 compared to $15,000\u2013$35,000+ for new cabinets. You save 60\u201370% and get a factory-quality finish that lasts 10+ years with proper prep and premium products." },
  { q: "How long do painted cabinets last?", a: "Professionally painted cabinets last 8\u201312 years before needing a refresh. The key is proper preparation (degreasing, sanding, priming) and using cabinet-grade paint like Sherwin-Williams Emerald Urethane or Benjamin Moore Advance." },
  { q: "Can you paint over laminate cabinets?", a: "Yes, with the right preparation. Laminate requires a bonding primer (like Stix by XIM or BIN Shellac) before paint. The finish won\u2019t be as durable as on wood, but it can look excellent for 5\u20138 years." },
  { q: "What is the best paint for kitchen cabinets?", a: "We recommend Sherwin-Williams Emerald Urethane Trim Enamel or Benjamin Moore Advance. Both are self-leveling, extremely durable, and cure to a hard, furniture-quality finish." },
  { q: "Should I paint or replace 20-year-old cabinets?", a: "If the cabinet boxes are solid wood and structurally sound, painting is almost always the better choice. Replace only if boxes are water-damaged, delaminating, or the layout needs to change." },
  { q: "How long does cabinet painting take?", a: "A full kitchen (20\u201330 doors) takes 5\u20138 working days. We remove all doors and hardware, spray in a controlled environment, and reinstall. Your kitchen is partially usable throughout." },
];

export default function PaintOrReplaceCabinets() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "Should You Paint or Replace Cabinets? Complete Guide", "author": { "@type": "Person", "name": "JJ Semo" }, "publisher": { "@id": "https://houstonsuperiorpainting.com/#business" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/paint-or-replace-cabinets" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Cabinet Refinishing", "item": "https://houstonsuperiorpainting.com/cabinet-refinishing-houston-tx" }, { "@type": "ListItem", "position": 3, "name": "Paint or Replace", "item": "https://houstonsuperiorpainting.com/paint-or-replace-cabinets" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">Painting cabinets costs $3,000\u2013$8,000 vs. $15,000\u2013$35,000+ for replacement \u2014 a 60\u201370% savings. If your cabinet boxes are structurally sound, professional painting delivers a factory-quality finish that lasts 8\u201312 years. Replace only if boxes are water-damaged or you need a new layout. Call <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a> for a free cabinet assessment.</p>
        </div>
      </section>

      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">Should You Paint or Replace Cabinets? Complete Guide</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">The honest answer from a company that does both. When painting makes sense, when it doesn&apos;t, and how to decide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Free Cabinet Assessment</a>
            <Link href="/cabinet-refinishing-houston-tx" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Cabinet Refinishing Services</Link>
          </div>
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">Paint vs. Replace: Side-by-Side Comparison</h2>
          <div className="overflow-x-auto pricing-snippet">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-4 font-semibold">Factor</th><th className="text-left p-4 font-semibold">Paint Cabinets</th><th className="text-left p-4 font-semibold">Replace Cabinets</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4 font-medium">Cost (avg kitchen)</td><td className="p-4 font-semibold text-green-600">$3,000 &ndash; $8,000</td><td className="p-4 font-semibold text-red-600">$15,000 &ndash; $35,000+</td></tr>
                <tr><td className="p-4 font-medium">Timeline</td><td className="p-4">5\u20138 days</td><td className="p-4">4\u20138 weeks</td></tr>
                <tr><td className="p-4 font-medium">Disruption</td><td className="p-4">Minimal (kitchen usable)</td><td className="p-4">Major (kitchen unusable)</td></tr>
                <tr><td className="p-4 font-medium">Longevity</td><td className="p-4">8\u201312 years</td><td className="p-4">15\u201325 years</td></tr>
                <tr><td className="p-4 font-medium">Color options</td><td className="p-4">Unlimited colors</td><td className="p-4">Limited to manufacturer</td></tr>
                <tr><td className="p-4 font-medium">Layout change</td><td className="p-4">No</td><td className="p-4">Yes</td></tr>
                <tr><td className="p-4 font-medium">Eco-friendly</td><td className="p-4">Yes (no waste)</td><td className="p-4">No (landfill waste)</td></tr>
                <tr><td className="p-4 font-medium">ROI at resale</td><td className="p-4">75\u2013100%</td><td className="p-4">50\u201375%</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to paint vs replace */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-green-800">Paint Your Cabinets When:</h3>
              <ul className="space-y-3 text-green-900">
                {["Cabinet boxes are solid wood and structurally sound", "You like the current layout and functionality", "Budget is under $10,000", "You want the job done in under 2 weeks", "You\u2019re happy with current storage and organization", "Cabinets are less than 20 years old"].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#10003;</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-red-800">Replace Your Cabinets When:</h3>
              <ul className="space-y-3 text-red-900">
                {["Cabinet boxes are water-damaged or delaminating", "You need a completely new layout", "Particle board is swollen or crumbling", "You want soft-close hinges and modern features", "Cabinets are structurally failing (shelves sagging)", "You\u2019re doing a full kitchen remodel anyway"].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-red-600 mt-1 shrink-0">&#10007;</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" },
              { label: "Cabinet Painting Cost Katy", href: "/cabinet-painting-cost-katy" },
              { label: "Cabinet Painting Katy TX", href: "/cabinet-painting-katy-tx" },
              { label: "Interior Painting Houston", href: "/interior-painting-houston-tx" },
              { label: "Best Paint Colors Houston", href: "/best-paint-colors-houston-homes" },
              { label: "Free Estimate", href: "/contact" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="block bg-card border border-border rounded-lg p-4 text-center font-medium hover:border-primary hover:text-primary transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Cabinet FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Not Sure? Get a Free Assessment</h2>
          <p className="text-lg opacity-90 mb-8">We will inspect your cabinets and give you an honest recommendation. If replacement is the right call, we will tell you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Text Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
