import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, ChevronRight } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF, PRICES_2026, SERVICE_AREAS } from "@/lib/business"

const NEARBY = SERVICE_AREAS.filter((a) =>
  ["painters-katy-tx", "painters-cinco-ranch-tx", "painters-fulshear-tx", "painters-richmond-tx", "painters-sugar-land-tx"].includes(a.slug),
)

export const metadata: Metadata = {
  title: "How Much Does Cabinet Painting Cost in Katy TX? 2026 Guide",
  description: `Cabinet painting in Katy, TX typically costs ${PRICES_2026.cabinetsPerKitchen} for a full kitchen in 2026. Price ranges by kitchen size and what changes the cost.`,
  alternates: { canonical: "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "Cabinet Painting Cost Katy TX 2026 | Price Guide", description: `Cabinet painting in Katy, TX: ${PRICES_2026.cabinetsPerKitchen} for a full kitchen. Price ranges by kitchen size.`, url: "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy", type: "article" },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
}

const faqs = [
  { q: "How much does it cost to paint kitchen cabinets in Katy?", a: `Kitchen cabinet painting in Katy typically costs ${PRICES_2026.cabinetsPerKitchen} for a full kitchen, with most kitchens around ${PRICES_2026.cabinetsAverage}. A small galley kitchen runs about ${PRICES_2026.cabinetsGalley}, and a large kitchen with an island about ${PRICES_2026.cabinetsLarge}. The price includes degreasing, sanding, priming, two sprayed finish coats and reinstallation.` },
  { q: "How is cabinet painting priced?", a: `Mostly by the number of doors and drawer fronts, about ${PRICES_2026.cabinetsPerDoor} each, plus the cabinet boxes, any island, and extra prep such as grain filling. Your written estimate lists each item.` },
  { q: "What makes cabinet painting more expensive?", a: "More doors and drawers, tall pantry cabinets, glass-front doors that need masking, an island, grain filling on oak, a dark stain that needs extra priming, and two-tone or specialty finishes." },
  { q: "Is it worth painting cabinets or should I replace them?", a: "If the cabinet boxes are solid, painting usually costs far less than replacement, takes days instead of weeks, and keeps your layout and countertops. Replacement makes more sense for warped or water-damaged boxes, or if you want a new layout." },
  { q: "What type of paint do you use on cabinets?", a: "We typically use cabinet-grade products such as Sherwin-Williams ProClassic and Benjamin Moore Advance. They level out for a smooth finish and cure hard enough for daily use." },
  { q: "How long do painted cabinets last?", a: "How long a cabinet finish lasts depends mostly on prep (degreasing, sanding and a bonding primer) and on how hard the kitchen is used. Our cabinet work carries the same 5-year written workmanship warranty as our other painting." },
  { q: "Can I stay in my Katy home during cabinet painting?", a: "Yes. Doors and drawers are sprayed away from the kitchen, and you can usually keep using your sink and appliances, with some limits on the days the cabinet boxes are being painted." },
  { q: "Do you paint cabinet interiors?", a: "We can, as an add-on priced on the estimate. Most cabinet painting jobs cover the exterior surfaces and door backs only, which is where the visual change is." },
]

export default function CabinetPaintingCostKaty() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "How Much Does Cabinet Painting Cost in Katy TX?", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-10-07", "mainEntityOfPage": "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Cabinet Painting Katy", "item": "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx" }, { "@type": "ListItem", "position": 3, "name": "Cabinet Painting Cost Katy", "item": "https://houstonsuperiorpainting.com/cabinet-painting-cost-katy" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li><Link href="/cabinet-painting-katy-tx" className="hover:text-primary-foreground">Cabinet Painting Katy</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Cost Guide</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">How Much Does Cabinet Painting Cost in Katy TX?</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Our 2026 price ranges for cabinet painting in Katy, and what moves a quote up or down.</p>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Cabinet painting in Katy, TX typically costs {PRICES_2026.cabinetsPerKitchen} for a full kitchen in 2026, with most kitchens around {PRICES_2026.cabinetsAverage}. Pricing is driven mainly by the number of doors and drawer fronts (about {PRICES_2026.cabinetsPerDoor} each). The price includes degreasing, sanding, priming, two sprayed coats and reinstallation. Call {BUSINESS.phone} for a free written estimate.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Katy Cabinet Painting Price Ranges, 2026</h2>
          <div className="pricing-snippet overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Project</th><th className="text-left p-3 font-semibold">Price Range</th></tr></thead>
              <tbody>
                {[
                  ["Small / galley kitchen", PRICES_2026.cabinetsGalley],
                  ["Typical kitchen", PRICES_2026.cabinetsAverage],
                  ["Full kitchen (overall range)", PRICES_2026.cabinetsPerKitchen],
                  ["Large kitchen with island", PRICES_2026.cabinetsLarge],
                  ["Per door or drawer front", PRICES_2026.cabinetsPerDoor],
                ].map(([p, r]) => (
                  <tr key={p} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{p}</td><td className="p-3 text-muted-foreground">{r}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mb-8">These are the same Greater Houston ranges we use on our <Link href="/cabinet-refinishing-houston-tx" className="text-primary underline">cabinet refinishing service page</Link> and <Link href="/houston-painting-cost-guide" className="text-primary underline">Houston painting cost guide</Link>. Vanities, built-ins and laundry cabinets are priced on the written estimate.</p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Paint vs Reface vs Replace</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Factor</th><th className="text-left p-3 font-semibold">Paint</th><th className="text-left p-3 font-semibold">Reface</th><th className="text-left p-3 font-semibold">Replace</th></tr></thead>
              <tbody>
                {[
                  ["Cost", PRICES_2026.cabinetsPerKitchen, "Usually more than painting", "Usually the most expensive"],
                  ["Typical timeline", "About a week", "Longer than painting", "Several weeks"],
                  ["Kitchen usable?", "Mostly", "Partially", "No, during demolition and install"],
                  ["Change layout?", "No", "No", "Yes"],
                  ["Keeps countertops?", "Yes", "Yes", "Often replaced too"],
                ].map(([f, p, r, re]) => (
                  <tr key={f} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{f}</td><td className="p-3 text-green-600 font-medium">{p}</td><td className="p-3 text-muted-foreground">{r}</td><td className="p-3 text-muted-foreground">{re}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">What Affects Cabinet Painting Cost</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Door and Drawer Count", desc: "More doors means more labor. A kitchen with many small doors can cost more than a larger kitchen with fewer, wider ones." },
              { title: "Wood Type", desc: "Oak and other open-grain woods need grain filler if you want a smooth look. Maple and MDF are easier to finish smoothly." },
              { title: "Current Finish", desc: "Previously painted cabinets are often easier to prep than stained wood. Dark stains may need extra primer to stop bleed-through." },
              { title: "Finish Style", desc: "A single color is the base price. Two-tone kitchens, glazing or distressing add labor and materials." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border"><h3 className="font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
            ))}
          </div>

          <h2 className="text-xl font-serif font-bold mb-4">Katy and Nearby Areas</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {NEARBY.map(a => (
              <Link key={a.slug} href={`/${a.slug}`} className="bg-card rounded-lg px-4 py-2 border border-border text-sm font-medium hover:border-secondary transition-colors">Painters in {a.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Get Your Free Cabinet Painting Estimate</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">{BUSINESS.paymentPolicy.sentence}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/painting-estimate-houston" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors">Request an Estimate</Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-xl font-serif font-bold mb-4">Related Pages</h2><div className="grid md:grid-cols-3 gap-4">
        {[{ title: "Cabinet Painting Katy TX", href: "/cabinet-painting-katy-tx" }, { title: "Cabinet Refinishing Service", href: "/cabinet-refinishing-houston-tx" }, { title: "Paint or Replace Cabinets?", href: "/paint-or-replace-cabinets" }, { title: "Houston Painting Cost Guide", href: "/houston-painting-cost-guide" }].map(p => (
          <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors"><span className="font-semibold text-sm text-foreground">{p.title}</span></Link>
        ))}
      </div></div></section>
      <Footer />
    </>
  )
}
