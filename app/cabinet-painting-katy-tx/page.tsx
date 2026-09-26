import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, CheckCircle2, ChevronRight, MapPin } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "Cabinet Painting Katy TX | Kitchen Cabinet Refinishing Katy",
  description: "Expert cabinet painting and refinishing in Katy TX. Professional HVLP spray results in Katy, Cinco Ranch, and nearby. Call 346-594-5960.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "Cabinet Painting Katy TX | Houston Superior Painting", description: "Expert cabinet painting and refinishing in Katy TX. Save 60-70% vs replacement.", url: "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx", type: "website" },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
}

const faqs = [
  { q: "How much does cabinet painting cost in Katy TX?", a: "Cabinet painting in Katy typically costs $3,000-$8,000 for a full kitchen, or $30-$60 per linear foot. This includes degreasing, sanding, priming, two coats of paint, and new hardware installation. Compare to $15,000-$40,000 for full cabinet replacement." },
  { q: "How long does cabinet painting take?", a: "A typical Katy kitchen takes 5-7 business days. Day 1-2: removal, degreasing, and sanding. Day 3: priming. Day 4-5: two coats of paint via HVLP sprayer. Day 6-7: reinstall doors, drawers, and new hardware. Your kitchen is functional throughout." },
  { q: "What finish do you use on cabinets?", a: "We use a satin or semi-gloss finish for durability and easy cleaning. Our preferred products are Sherwin-Williams ProClassic and Benjamin Moore Advance, both hybrid alkyd formulas that self-level for a factory-smooth finish." },
  { q: "Can you paint oak cabinets with heavy grain?", a: "Yes. For oak and other open-grain woods, we apply grain filler before priming to create a smooth surface. The result looks like factory-built painted cabinets, not painted-over wood grain." },
  { q: "What colors are popular for Katy kitchen cabinets?", a: "White (SW Extra White, BM Chantilly Lace) remains the #1 choice in Katy. Navy blue islands, sage green, and warm greige are trending in 2026. Two-tone combinations with a white upper and colored lower are very popular in Cinco Ranch and Grand Lakes homes." },
  { q: "Is cabinet painting better than replacing?", a: "For structurally sound cabinets, painting saves 60-70% vs replacement and takes days instead of weeks. You keep your existing layout, avoid demolition dust, and get a brand-new look. We only recommend replacement if boxes are warped, water-damaged, or structurally compromised." },
  { q: "Do you paint bathroom vanities too?", a: "Yes. We paint bathroom vanities, linen cabinets, built-in bookshelves, and any wood cabinetry using the same professional spray process. Bathroom vanities typically cost $800-$2,000 depending on size." },
  { q: "What about the cabinet hinges and hardware?", a: "We remove all doors, drawers, hinges, and hardware before painting. We can reinstall your existing hardware or install new hardware you provide. If you need hardware recommendations, we can suggest suppliers that match popular Katy design styles." },
]

export default function CabinetPaintingKatyTX() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "Cabinet Painting Katy TX – Beautiful Kitchen Transformations", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx" },
        { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Cabinet Painting Katy TX", "item": "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx" } ] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li><Link href="/painters-houston-tx" className="hover:text-primary-foreground">Painters Houston</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Cabinet Painting Katy TX</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">Cabinet Painting Katy TX – Beautiful Kitchen Transformations</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Save 60-70% vs replacement with professional HVLP spray cabinet refinishing. Factory-smooth results for Katy, Cinco Ranch, and surrounding communities.</p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">Free Estimate</Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Cabinet painting in Katy TX typically costs $3,000-$8,000 for a full kitchen ($30-$60/linear foot). This saves 60-70% vs replacement ($15,000-$40,000). Process takes 5-7 days using HVLP spray technology for factory-smooth results. Houston Superior Painting serves Cinco Ranch, Grand Lakes, Cross Creek Ranch, and all Katy neighborhoods. Call (346) 594-5960.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Why Paint Instead of Replace?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Most Katy homes built in the last 10-20 years have structurally sound cabinets with outdated finishes. The honey oak and dark cherry stains that were popular in the 2000s now make kitchens feel dated. Professional cabinet painting transforms these kitchens for a fraction of replacement cost, without demolition, plumbing disconnection, or weeks of disruption.</p>

          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Option</th><th className="text-left p-3 font-semibold">Cost</th><th className="text-left p-3 font-semibold">Timeline</th><th className="text-left p-3 font-semibold">Disruption</th></tr></thead>
              <tbody>
                <tr className="border-b border-border bg-secondary/5"><td className="p-3 font-medium">Cabinet Painting</td><td className="p-3">$3,000–$8,000</td><td className="p-3">5–7 days</td><td className="p-3 text-green-600 font-medium">Minimal</td></tr>
                <tr className="border-b border-border"><td className="p-3 font-medium">Refacing</td><td className="p-3">$8,000–$15,000</td><td className="p-3">1–2 weeks</td><td className="p-3 text-yellow-600 font-medium">Moderate</td></tr>
                <tr className="border-b border-border"><td className="p-3 font-medium">Full Replacement</td><td className="p-3">$15,000–$40,000</td><td className="p-3">3–6 weeks</td><td className="p-3 text-red-600 font-medium">Major</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our 6-Step Cabinet Painting Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: "Remove & Label", desc: "All doors, drawers, and hardware are removed and labeled with a numbering system so everything goes back exactly where it belongs." },
              { step: 2, title: "Degrease & Clean", desc: "Cabinets are thoroughly degreased with TSP to remove years of cooking oils, grease, and grime that prevent paint adhesion." },
              { step: 3, title: "Sand & Fill", desc: "All surfaces are sanded to create a mechanical bond. For oak cabinets, grain filler is applied and sanded smooth for a seamless finish." },
              { step: 4, title: "Prime", desc: "A bonding primer (Sherwin-Williams Extreme Bond or BM Fresh Start) is applied to ensure maximum adhesion and stain blocking." },
              { step: 5, title: "Spray Two Coats", desc: "Two coats of premium hybrid alkyd paint are applied via HVLP sprayer for a factory-smooth, brush-mark-free finish with excellent hardness." },
              { step: 6, title: "Reinstall & Hardware", desc: "Doors and drawers are carefully reinstalled. New hardware is mounted if provided. Final quality inspection with the homeowner." },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold text-sm shrink-0">{item.step}</div>
                <div><h3 className="font-semibold text-foreground">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4">Katy Neighborhoods We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {["Cinco Ranch", "Grand Lakes", "Cross Creek Ranch", "Elyson", "Cane Island", "Firethorne", "Tamarron", "Pine Mill Ranch"].map(area => (
              <div key={area} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border text-sm"><MapPin className="h-4 w-4 text-secondary shrink-0" /><span className="font-medium">{area}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Ready to Transform Your Katy Kitchen?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Request your free cabinet painting quote today. Standard deposit required upon acceptance to secure your project date. 100% satisfaction guarantee.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-xl font-serif font-bold mb-4">Related Articles</h2><div className="grid md:grid-cols-3 gap-4">
        {[{ title: "Painters in Houston TX", href: "/painters-houston-tx" }, { title: "Cabinet Painting Cost Katy 2026", href: "/cabinet-painting-cost-katy" }, { title: "Paint or Replace Cabinets?", href: "/paint-or-replace-cabinets" }, { title: "Interior Painters Katy TX", href: "/interior-painters-katy-tx" }].map(p => (
          <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors"><span className="font-semibold text-sm text-foreground">{p.title}</span></Link>
        ))}
      </div></div></section>

      <Footer />
    </>
  )
}
