import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, ChevronRight, CheckCircle2 } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "How Much Does Cabinet Painting Cost in Katy TX? 2026 Guide",
  description: "Cabinet painting costs in Katy TX typically range $30-$60 per linear foot or $3,000-$8,000 for a full kitchen. Save 60-70% vs replacement. Call 346-594-5960.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "Cabinet Painting Cost Katy TX 2026 | Full Price Guide", description: "Cabinet painting in Katy TX: $3,000-$8,000 for a full kitchen. Complete price breakdown.", url: "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy", type: "article" },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
}

const faqs = [
  { q: "How much does it cost to paint kitchen cabinets in Katy?", a: "Kitchen cabinet painting in Katy costs $3,000-$8,000 for a standard kitchen (20-40 linear feet). This includes degreasing, sanding, priming, two coats via HVLP sprayer, and hardware reinstallation. Large kitchens with islands run $6,000-$10,000." },
  { q: "How is cabinet painting priced in Katy?", a: "We price per linear foot ($30-$60/LF) or by the complete project. Per-LF pricing accounts for cabinet height, door count, and complexity. A full project quote ensures no surprises and is typically more accurate." },
  { q: "What makes cabinet painting more expensive?", a: "Cost increases with: number of doors/drawers, tall pantry cabinets, glass-front doors (requires masking), island cabinets (more accessible surfaces), grain filling for oak, and specialty finishes like distressed or glazed." },
  { q: "Is it worth painting cabinets or should I replace them?", a: "If your cabinet boxes are structurally sound, painting saves 60-70% ($3,000-$8,000 vs $15,000-$40,000 for replacement). Painting takes 5-7 days vs 3-6 weeks for replacement. We only recommend replacement for warped, water-damaged, or failing cabinet boxes." },
  { q: "What type of paint do you use on Katy cabinets?", a: "We use hybrid alkyd formulas: Sherwin-Williams ProClassic and Benjamin Moore Advance. These self-level for a factory-smooth finish, cure extremely hard for durability, and resist yellowing over time." },
  { q: "How long do painted cabinets last in Katy?", a: "Professional cabinet painting lasts 8-12 years with normal use. The key is proper degreasing, sanding, bonding primer, and two coats of hybrid alkyd paint. Our process ensures maximum adhesion and durability." },
  { q: "Can I stay in my Katy home during cabinet painting?", a: "Yes. We work room by room and your kitchen remains functional throughout. You will have access to your appliances and sink. Dust and fumes are minimal with our low-VOC products and containment methods." },
  { q: "Do you paint cabinet interiors?", a: "We can paint cabinet interiors for an additional charge (typically $500-$1,500 for a full kitchen). Most Katy homeowners choose exterior-only painting, which is the standard and provides the most visual impact." },
]

export default function CabinetPaintingCostKaty() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "How Much Does Cabinet Painting Cost in Katy TX?", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Cabinet Painting Cost Katy", "item": "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li><Link href="/cabinet-painting-katy-tx" className="hover:text-primary-foreground">Cabinet Painting Katy</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Cost Guide</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">How Much Does Cabinet Painting Cost in Katy TX?</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Transparent 2026 pricing for cabinet painting in Katy. Real numbers, real projects, no hidden fees.</p>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Cabinet painting in Katy TX costs $3,000-$8,000 for a full kitchen ($30-$60 per linear foot) in 2026. A standard 30 LF kitchen averages $4,500-$6,500. This includes degreasing, sanding, priming, two HVLP spray coats, and hardware reinstallation. Compare to $15,000-$40,000 for full replacement. Call (346) 594-5960 for a free quote.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Katy Cabinet Painting Cost Breakdown 2026</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Project</th><th className="text-left p-3 font-semibold">Price Range</th><th className="text-left p-3 font-semibold">Average</th></tr></thead>
              <tbody>
                {[
                  ["Small Kitchen (15-20 LF)", "$2,500–$4,500", "$3,500"],
                  ["Standard Kitchen (25-35 LF)", "$3,500–$6,500", "$5,000"],
                  ["Large Kitchen (35-50 LF)", "$5,500–$8,500", "$7,000"],
                  ["Kitchen + Island", "+$800–$2,000", "Varies"],
                  ["Bathroom Vanity", "$800–$2,000", "$1,200"],
                  ["Built-In Bookshelves", "$600–$1,500", "$900"],
                  ["Laundry Room Cabinets", "$500–$1,200", "$800"],
                  ["Cabinet Interiors Add-On", "+$500–$1,500", "Varies"],
                  ["New Hardware Install", "+$200–$600", "$350"],
                ].map(([p, r, a]) => (
                  <tr key={p} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{p}</td><td className="p-3 text-muted-foreground">{r}</td><td className="p-3 text-muted-foreground font-medium">{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Paint vs Reface vs Replace: Full Cost Comparison</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Factor</th><th className="text-left p-3 font-semibold">Paint</th><th className="text-left p-3 font-semibold">Reface</th><th className="text-left p-3 font-semibold">Replace</th></tr></thead>
              <tbody>
                {[
                  ["Cost (Standard Kitchen)", "$3,500–$6,500", "$8,000–$15,000", "$15,000–$40,000"],
                  ["Timeline", "5–7 days", "1–2 weeks", "3–6 weeks"],
                  ["Kitchen Usable?", "Yes", "Partially", "No (2-4 weeks)"],
                  ["Change Layout?", "No", "No", "Yes"],
                  ["Durability", "8–12 years", "15–20 years", "20+ years"],
                  ["ROI for Resale", "High (70-80%)", "Medium (50-60%)", "Medium (40-60%)"],
                ].map(([f, p, r, re]) => (
                  <tr key={f} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{f}</td><td className="p-3 text-green-600 font-medium">{p}</td><td className="p-3 text-muted-foreground">{r}</td><td className="p-3 text-muted-foreground">{re}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">What Affects Cabinet Painting Cost</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Cabinet Door Count", desc: "More doors = more labor. A 30-door kitchen costs more than a 20-door kitchen even at the same linear footage." },
              { title: "Wood Type", desc: "Oak and other open-grain woods require grain filling ($200-$500 extra) to achieve a smooth finish. Maple and MDF are easiest to paint." },
              { title: "Current Finish", desc: "Previously painted cabinets are easier to prep than stained wood. Dark stains may require extra priming to prevent bleed-through." },
              { title: "Finish Style", desc: "Standard one-color painting is base price. Glazing, distressing, or two-tone finishes add 15-30% for additional labor and materials." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border"><h3 className="font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Get Your Free Cabinet Painting Quote</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Free on-site estimate with exact pricing. Nothing due until you approve; a down payment then schedules the job. 100% satisfaction guarantee.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-xl font-serif font-bold mb-4">Related Articles</h2><div className="grid md:grid-cols-3 gap-4">
        {[{ title: "Cabinet Painting Katy TX", href: "/cabinet-painting-katy-tx" }, { title: "Paint or Replace Cabinets?", href: "/paint-or-replace-cabinets" }, { title: "Interior Painting Cost Houston", href: "/interior-painting-cost-houston" }].map(p => (
          <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors"><span className="font-semibold text-sm text-foreground">{p.title}</span></Link>
        ))}
      </div></div></section>
      <Footer />
    </>
  )
}
