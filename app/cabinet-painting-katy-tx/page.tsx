import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, ChevronRight, MapPin } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF, PRICES_2026, SERVICE_AREAS } from "@/lib/business"

const NEARBY = SERVICE_AREAS.filter((a) =>
  ["painters-katy-tx", "painters-cinco-ranch-tx", "painters-fulshear-tx", "painters-richmond-tx", "painters-sugar-land-tx"].includes(a.slug),
)

export const metadata: Metadata = {
  title: "Cabinet Painting Katy TX | Kitchen Cabinet Refinishing",
  description: `Kitchen cabinet painting in Katy, TX: sprayed finish, ${PRICES_2026.cabinetsPerKitchen} for most kitchens, 5-year workmanship warranty. Free written estimate.`,
  alternates: { canonical: "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "Cabinet Painting Katy TX | Houston Superior Painting", description: `Kitchen cabinet painting in Katy, TX: ${PRICES_2026.cabinetsPerKitchen} for most kitchens. Free written estimate.`, url: "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx", type: "website" },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
}

const faqs = [
  { q: "How much does cabinet painting cost in Katy TX?", a: `Cabinet painting in Katy typically costs ${PRICES_2026.cabinetsPerKitchen} for a full kitchen, with most kitchens landing around ${PRICES_2026.cabinetsAverage}. Pricing is usually figured per door and drawer front (about ${PRICES_2026.cabinetsPerDoor} each). It includes degreasing, sanding, priming and two finish coats.` },
  { q: "How long does cabinet painting take?", a: "A typical kitchen usually takes about 5-7 working days: removing and labeling doors, degreasing and sanding, priming, two finish coats, then curing and reinstalling. Your estimate gives the expected schedule for your kitchen." },
  { q: "What finish do you use on cabinets?", a: "Usually a satin or semi-gloss finish, which is durable and easy to wipe clean. We typically use cabinet-grade products such as Sherwin-Williams ProClassic and Benjamin Moore Advance, which level out for a smooth finish." },
  { q: "Can you paint oak cabinets with heavy grain?", a: "Yes. Oak's open grain shows through paint. If you want a smooth look, grain filler can be applied before priming; if you don't mind some texture, it can be skipped. The estimate lists it as a separate line." },
  { q: "What colors are popular for kitchen cabinets?", a: "White and off-white remain common choices, and two-tone kitchens with a colored island or lower cabinets (navy, green or greige) are a popular way to add color. Test a sample door in your own kitchen light before deciding." },
  { q: "Is cabinet painting better than replacing?", a: "If the cabinet boxes are solid, painting usually costs far less than replacement, takes days instead of weeks, and keeps your existing layout and countertops. Replacement makes more sense if boxes are warped, water-damaged or you want to change the layout." },
  { q: "Do you paint bathroom vanities too?", a: "Yes. We paint bathroom vanities, laundry cabinets, built-in bookshelves and other wood cabinetry using the same process. These are priced on the written estimate." },
  { q: "What about the cabinet hinges and hardware?", a: "All doors, drawers, hinges and hardware are removed and labeled before painting. We can reinstall your existing hardware or install new hardware you provide." },
]

export default function CabinetPaintingKatyTX() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "Cabinet Painting in Katy, TX", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-10-07", "mainEntityOfPage": "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx" },
        { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Katy Painters", "item": "https://houstonsuperiorpainting.com/painters-katy-tx" }, { "@type": "ListItem", "position": 3, "name": "Cabinet Painting Katy TX", "item": "https://houstonsuperiorpainting.com/cabinet-painting-katy-tx" } ] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li><Link href="/painters-katy-tx" className="hover:text-primary-foreground">Katy Painters</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Cabinet Painting Katy TX</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">Cabinet Painting in Katy, TX</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Spray-finished kitchen cabinet painting for Katy, Cinco Ranch and nearby communities: a new look for solid cabinets without the cost and disruption of replacement.</p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <Link href="/painting-estimate-houston" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">Free Estimate</Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Cabinet painting in Katy, TX typically costs {PRICES_2026.cabinetsPerKitchen} for a full kitchen, with most kitchens around {PRICES_2026.cabinetsAverage}. A typical kitchen takes about 5-7 working days, and doors are sprayed for a smooth, brush-mark-free finish. Houston Superior Painting serves Katy, Cinco Ranch, Fulshear and Richmond, with a 5-year written workmanship warranty. Call {BUSINESS.phone}.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Why Paint Instead of Replace?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Many Katy homes were built in the 2000s and 2010s with oak or cherry-stained cabinets that are still structurally fine but look dated. If the boxes are solid, painting changes the look of the kitchen without demolition, plumbing disconnection or new countertops. For the full service details, see our <Link href="/cabinet-refinishing-houston-tx" className="text-primary underline">cabinet refinishing service page</Link>.</p>

          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Option</th><th className="text-left p-3 font-semibold">Cost</th><th className="text-left p-3 font-semibold">Disruption</th></tr></thead>
              <tbody>
                <tr className="border-b border-border bg-secondary/5"><td className="p-3 font-medium">Cabinet painting</td><td className="p-3">{PRICES_2026.cabinetsPerKitchen} (our 2026 range)</td><td className="p-3">About a week; boxes and countertops stay in place</td></tr>
                <tr className="border-b border-border"><td className="p-3 font-medium">Refacing</td><td className="p-3">Quoted by refacing companies; usually more than painting</td><td className="p-3">New doors and veneer; boxes stay in place</td></tr>
                <tr className="border-b border-border"><td className="p-3 font-medium">Full replacement</td><td className="p-3">Quoted by cabinet companies; usually the most expensive</td><td className="p-3">Demolition, often new countertops; weeks without a kitchen</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mb-8">More detail: <Link href="/cabinet-painting-cost-katy" className="text-primary underline">cabinet painting cost in Katy</Link> and <Link href="/paint-or-replace-cabinets" className="text-primary underline">paint or replace cabinets?</Link></p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our 6-Step Cabinet Painting Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: 1, title: "Remove & Label", desc: "Doors, drawers and hardware are removed and labeled so everything goes back where it belongs." },
              { step: 2, title: "Degrease & Clean", desc: "Cabinets are degreased to remove cooking oil and grime that would keep paint from bonding." },
              { step: 3, title: "Sand & Fill", desc: "Surfaces are sanded so the primer can grip. On oak, grain filler can be applied for a smooth look." },
              { step: 4, title: "Prime", desc: "A bonding primer is applied for adhesion and to keep wood tannins and old stain from bleeding through." },
              { step: 5, title: "Spray Two Coats", desc: "Two coats of a cabinet-grade paint are sprayed for a smooth, brush-mark-free finish." },
              { step: 6, title: "Reinstall & Hardware", desc: "Doors and drawers are reinstalled, hardware is mounted, and we walk through the finished kitchen with you." },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold text-sm shrink-0">{item.step}</div>
                <div><h3 className="font-semibold text-foreground">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4">Katy and Nearby Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {NEARBY.map(area => (
              <Link key={area.slug} href={`/${area.slug}`} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border text-sm hover:border-secondary transition-colors"><MapPin className="h-4 w-4 text-secondary shrink-0" /><span className="font-medium">Painters in {area.name}</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Get a Free Cabinet Painting Estimate in Katy</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">{BUSINESS.paymentPolicy.sentence}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/painting-estimate-houston" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors">Request an Estimate</Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-xl font-serif font-bold mb-4">Related Pages</h2><div className="grid md:grid-cols-3 gap-4">
        {[{ title: "Cabinet Refinishing Service", href: "/cabinet-refinishing-houston-tx" }, { title: "Cabinet Painting Cost Katy", href: "/cabinet-painting-cost-katy" }, { title: "Paint or Replace Cabinets?", href: "/paint-or-replace-cabinets" }, { title: "Interior Painters Katy TX", href: "/interior-painters-katy-tx" }, { title: "Painters in Katy TX", href: "/painters-katy-tx" }].map(p => (
          <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors"><span className="font-semibold text-sm text-foreground">{p.title}</span></Link>
        ))}
      </div></div></section>

      <Footer />
    </>
  )
}
