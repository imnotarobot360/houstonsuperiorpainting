import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AuthorByline, articleNode, ESTIMATE_PATH } from "@/components/aeo/blocks";

export const metadata: Metadata = {
  title: "Exterior House Painting Cost in Houston: 2026 Price Guide",
  description: "Exterior house painting in Houston costs $1.50\u2013$4 per sq ft in 2026, or $5,500\u2013$9,000 for a 2,500 sq ft two-story home. Prices by size, siding, and prep.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/exterior-house-painting-houston-cost-guide" },
  openGraph: { title: "Exterior House Painting Houston Cost Guide 2026", description: "Full cost breakdown for exterior painting in Houston. $3,500-$12,000 for typical homes.", url: "https://houstonsuperiorpainting.com/exterior-house-painting-houston-cost-guide", type: "article", images: [{ url: "https://houstonsuperiorpainting.com/images/og/og-exterior-painting.jpg", width: 1200, height: 630 }] },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
};

const faqs = [
  { q: "How much does it cost to paint the exterior of a 2,000 sq ft house in Houston?", a: "A 2,000 sq ft Houston home typically costs $3,500\u2013$5,500 for a one-story exterior and $4,500\u2013$7,500 for a two-story. This includes power washing, scraping, caulking, priming, and two coats of premium paint. Multi-story homes or extensive prep work increase the price." },
  { q: "What factors affect exterior painting cost the most?", a: "The five biggest factors are: (1) home size and number of stories, (2) siding type (wood costs more than vinyl or brick), (3) prep work needed (peeling, rot repair), (4) paint product quality, and (5) number of colors." },
  { q: "Is exterior painting a good investment?", a: "Exterior painting has one of the highest ROI of any home improvement \u2014 typically 50\u201375% return and it can increase home value by 2\u20135%. It also prevents costly damage from wood rot and water intrusion." },
  { q: "How long does exterior paint last in Houston?", a: "Plan on repainting a Houston exterior every 5\u20137 years. Sherwin-Williams Duration lasts 3\u20135 years longer than SuperPaint in Gulf Coast sun. Budget paint typically fails within 3\u20135 years due to Houston\u2019s humidity and UV exposure." },
  { q: "When is the cheapest time to paint a house exterior in Houston?", a: "January through March is typically the slowest season for painters, so you may get better pricing and faster scheduling. October\u2013November is also good. Avoid summer when demand peaks." },
  { q: "Should I paint my house before selling?", a: "Almost always yes. Fresh exterior paint is one of the highest-ROI improvements for home sellers. It improves curb appeal, signals that the home is well-maintained, and can help sell 20\u201330% faster." },
];

export default function ExteriorHousePaintingHoustonCostGuide() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        articleNode({ path: "/exterior-house-painting-houston-cost-guide", headline: "Exterior House Painting Houston Cost Guide 2026", description: "Exterior house painting in Houston costs $1.50\u2013$4 per sq ft in 2026, or $5,500\u2013$9,000 for a 2,500 sq ft two-story home.", datePublished: "2026-05-16" }),
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Exterior Painting", "item": "https://houstonsuperiorpainting.com/exterior-painting-houston-tx" }, { "@type": "ListItem", "position": 3, "name": "Cost Guide", "item": "https://houstonsuperiorpainting.com/exterior-house-painting-houston-cost-guide" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">Exterior House Painting Houston Cost Guide 2026</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">Transparent pricing from a company that has completed 500+ Houston painting projects since 2019. No hidden fees, no surprises.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Free Exterior Estimate</a>
            <Link href="/exterior-painting-houston-tx" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Exterior Painting Services</Link>
          </div>
        </div>
      </section>

      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">Exterior house painting in Houston costs $1.50–$4 per square foot in 2026, or $3,500–$12,000 for a typical home. A 2,500 sq ft two-story home runs $5,500–$9,000. Key factors: home size, siding type, stories, and prep work. Plan on repainting every 5–7 years. Call <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a> for a free exterior estimate.</p>
        </div>
      </section>

      {/* Cost by home size */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Exterior Painting Cost by Home Size</h2>
          <div className="overflow-x-auto pricing-snippet">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-4 font-semibold">Home Size</th><th className="text-left p-4 font-semibold">1 Story</th><th className="text-left p-4 font-semibold">2 Story</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4">1,500 sq ft</td><td className="p-4 font-semibold">$2,500 &ndash; $4,500</td><td className="p-4 font-semibold">$3,500 &ndash; $6,000</td></tr>
                <tr><td className="p-4">2,000 sq ft</td><td className="p-4 font-semibold">$3,500 &ndash; $5,500</td><td className="p-4 font-semibold">$4,500 &ndash; $7,500</td></tr>
                <tr><td className="p-4">2,500 sq ft</td><td className="p-4 font-semibold">$4,000 &ndash; $7,000</td><td className="p-4 font-semibold">$5,500 &ndash; $9,000</td></tr>
                <tr><td className="p-4">3,000 sq ft</td><td className="p-4 font-semibold">$5,000 &ndash; $8,000</td><td className="p-4 font-semibold">$6,500 &ndash; $10,500</td></tr>
                <tr><td className="p-4">4,000+ sq ft</td><td className="p-4 font-semibold">$6,500 &ndash; $10,000</td><td className="p-4 font-semibold">$8,500 &ndash; $14,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm">Prices include power wash, scrape, caulk, prime, and 2 coats of premium Sherwin-Williams paint. Three-story homes and steep lots add 20&ndash;40% for lifts and ladders.</p>
          <p className="text-foreground/90 mt-6 leading-relaxed">These ranges match our <Link href="/houston-painting-cost-guide" className="font-medium text-primary underline">Houston painting cost guide</Link>, which also covers interior and cabinet pricing. For what the job includes step by step, see <Link href="/exterior-painting-houston-tx" className="font-medium text-primary underline">exterior painting in Houston</Link>. The same ranges apply to exterior work from our <Link href="/painters-katy-tx" className="font-medium text-primary underline">Katy painters</Link>, <Link href="/painters-cypress-tx" className="font-medium text-primary underline">Cypress painters</Link>, and <Link href="/painters-sugar-land-tx" className="font-medium text-primary underline">Sugar Land painters</Link>. <Link href={ESTIMATE_PATH} className="font-medium text-primary underline">Request a free exterior painting estimate</Link> for a fixed price.</p>
        </div>
      </section>

      {/* Cost by siding type */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Cost by Siding Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-4 font-semibold">Siding Type</th><th className="text-left p-4 font-semibold">Per Sq Ft</th><th className="text-left p-4 font-semibold">Prep Notes</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4">Vinyl</td><td className="p-4 font-semibold">$1.50 &ndash; $2.50</td><td className="p-4">Light prep, adhesion primer needed</td></tr>
                <tr><td className="p-4">Fiber Cement (HardiePlank)</td><td className="p-4 font-semibold">$1.75 &ndash; $3.00</td><td className="p-4">Caulk joints, prime bare areas</td></tr>
                <tr><td className="p-4">Wood Siding</td><td className="p-4 font-semibold">$2.50 &ndash; $4.00</td><td className="p-4">Scrape, sand, replace rotted sections</td></tr>
                <tr><td className="p-4">Brick (paint)</td><td className="p-4 font-semibold">$2.00 &ndash; $3.50</td><td className="p-4">Pressure wash, masonry primer</td></tr>
                <tr><td className="p-4">Stucco</td><td className="p-4 font-semibold">$2.00 &ndash; $3.50</td><td className="p-4">Fill cracks, elastomeric coating recommended</td></tr>
                <tr><td className="p-4">Brick (limewash)</td><td className="p-4 font-semibold">Quoted separately</td><td className="p-4">Specialty finish, see <Link href="/limewash-brick-painting-houston-tx" className="text-primary underline">limewash brick painting</Link></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">What&apos;s Included in Our Exterior Painting Price</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Always Included</h3>
              <ul className="space-y-2 text-muted-foreground">
                {["Pressure washing all surfaces", "Scraping all loose/peeling paint", "Caulking windows, doors, and trim", "Priming all bare wood/surfaces", "Two coats premium Sherwin-Williams paint", "Trim, fascia, soffits, and gutters", "Hardware protection and masking", "Final walkthrough and touch-ups", "Written 5-year warranty"].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Additional Costs (If Needed)</h3>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Wood rot repair: $75\u2013$150 per linear foot",
                  "Lead paint testing: $200\u2013$400",
                  "Stucco crack repair and elastomeric coating: $1\u2013$2/sq ft",
                  "Deck/fence staining: $500\u2013$2,000",
                  "3rd coat for dramatic color changes: $500\u2013$1,500",
                  "Shutters (per pair): $50\u2013$150",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-amber-500 shrink-0">+</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips to save */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">5 Ways to Save on Exterior Painting</h2>
          <div className="space-y-4">
            {[
              { tip: "Paint during off-season (Jan\u2013Mar)", save: "5\u201315% savings", why: "Painters are less busy and may offer discounts to fill the schedule." },
              { tip: "Bundle interior + exterior", save: "10\u201320% savings", why: "Combining projects reduces setup/mobilization costs." },
              { tip: "Stick with 1\u20132 colors", save: "5\u201310% savings", why: "Multiple colors require more masking, cleanup, and product waste." },
              { tip: "Keep the same color family", save: "Save on coats", why: "Dramatic color changes require 3 coats. Similar colors need only 2." },
              { tip: "Maintain regularly", save: "Save long-term", why: "Touch-ups every 3\u20134 years extend full repaints to 10+ years." },
            ].map(item => (
              <div key={item.tip} className="flex gap-4 items-start bg-card border border-border rounded-xl p-5">
                <span className="text-green-600 font-bold text-lg shrink-0">$</span>
                <div>
                  <h3 className="font-semibold">{item.tip} <span className="text-green-600 text-sm font-normal">({item.save})</span></h3>
                  <p className="text-muted-foreground text-sm">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
              { label: "Signs You Need Exterior Painting", href: "/signs-home-needs-exterior-painting" },
              { label: "Best Exterior Paint for Houston", href: "/best-exterior-paint-houston-weather" },
              { label: "How Often to Paint Houston", href: "/how-often-paint-house-houston" },
              { label: "Interior Painting Cost", href: "/interior-painting-cost-houston" },
              { label: "Free Painting Estimate", href: ESTIMATE_PATH },
            ].map(link => (
              <Link key={link.href} href={link.href} className="block bg-card border border-border rounded-lg p-4 text-center font-medium hover:border-primary hover:text-primary transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">FAQs About Exterior Painting Cost</h2>
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

      <section id="calculator" className="py-16 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-balance">Estimate your exterior painting cost</h2>
            <p className="text-muted-foreground text-lg text-pretty">Get an instant ballpark range built from the 2026 Houston rates on this page.</p>
          </div>
          <EstimateCalculator source="exterior_cost_guide_calculator" defaultService="exterior" />
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Get Your Free Exterior Painting Estimate</h2>
          <p className="text-lg opacity-90 mb-8">Detailed, itemized quote with product specs, timeline, and 5-year warranty. No hidden fees, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Text Us</a>
            <Link href={ESTIMATE_PATH} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Request an Estimate</Link>
          </div>
        </div>
      </section>
      <AuthorByline />
      <Footer />
    </>
  );
}
