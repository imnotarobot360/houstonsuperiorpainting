import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, CheckCircle2, ChevronRight, MapPin, Star, Shield, Award, Users } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "House Painters Cypress TX | Local Painting Company Cypress",
  description: "Reliable house painters in Cypress TX for interior, exterior, drywall repair, cabinet painting, and more.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/house-painters-cypress-tx" },
  openGraph: { title: "House Painters Cypress TX | Houston Superior Painting", description: "Reliable house painters in Cypress TX for interior, exterior, drywall repair, and more.", url: "https://houstonsuperiorpainting.com/house-painters-cypress-tx", type: "website" },
  other: { "geo.region": "US-TX", "geo.placename": "Cypress", "geo.position": "29.9691;-95.6972", ICBM: "29.9691, -95.6972" },
}

const faqs = [
  { q: "How much do house painters in Cypress TX charge?", a: "Interior painting in Cypress costs $2.50-$4.50 per sq ft. Exterior painting for a typical Cypress home ranges $3,500-$12,000 depending on size, stories, and siding type. Cabinet painting runs $3,000-$8,000 for a full kitchen. Free detailed estimates provided." },
  { q: "What Cypress neighborhoods do you serve?", a: "We serve all of Cypress including Bridgeland, Towne Lake, Cypress Creek Lakes, Fairfield, Lakewood Forest, Cypress Falls, Cypress Springs, Longwood, and all communities along 290 and the Grand Parkway. If you are in the Cypress-Tomball area, we can help." },
  { q: "How do you handle Cypress summers for exterior painting?", a: "We start exterior work at 6-7 AM to take advantage of cooler morning temperatures. We stop when surface temperatures exceed manufacturer guidelines. Our paint products (Sherwin-Williams Duration) are rated for extreme heat and we follow strict temperature protocols." },
  { q: "Are you a local Cypress painting company?", a: "Yes. Houston Superior Painting is headquartered in Cypress, TX. Our founder JJ Semo lives in the Cypress area and personally oversees every project. We are not a franchise or lead-generation company. We are your neighbors." },
  { q: "Do you offer free estimates in Cypress?", a: "Yes. Call or text (346) 594-5960 to schedule a free on-site estimate. We typically schedule within 1-2 business days and provide a detailed, itemized quote within 24 hours of the visit." },
  { q: "What services do you offer in Cypress?", a: "We offer interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, limewash/German smear, garage floor epoxy, and load-bearing wall removal. From a single room to a complete home transformation, we handle it all." },
  { q: "Do you work with Cypress HOAs?", a: "Yes. We regularly work with HOAs in Bridgeland, Towne Lake, Cypress Creek Lakes, and other Cypress master-planned communities. We can help with color approval submissions and ensure all work meets community standards." },
  { q: "What is your warranty for Cypress projects?", a: "We offer a 5-year warranty on all painting work, interior and exterior alike, covering peeling, blistering, and adhesion failure. If any issue arises, we come back and fix it at no charge." },
]

export default function HousePaintersCypressTX() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "House Painters Cypress TX – Your Local Residential Painting Team", "author": { "@type": "Person", "name": "JJ Semo" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/house-painters-cypress-tx" },
        { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "House Painters Cypress TX", "item": "https://houstonsuperiorpainting.com/house-painters-cypress-tx" } ] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li><Link href="/painters-houston-tx" className="hover:text-primary-foreground">Painters Houston</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">House Painters Cypress TX</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">House Painters Cypress TX – Your Local Residential Painting Team</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Headquartered in Cypress, TX. Interior, exterior, cabinet painting, drywall repair, and more for Bridgeland, Towne Lake, and all Cypress neighborhoods.</p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">Free Estimate</Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-8 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-secondary" /> 4.9/5 Google Rating</span>
            <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-1"><Award className="h-4 w-4" /> Based in Cypress</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 500+ Projects</span>
          </div>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Houston Superior Painting is headquartered in Cypress, TX and serves Bridgeland, Towne Lake, Cypress Creek Lakes, Fairfield, and all Cypress neighborhoods. We offer interior painting ($2.50-$4.50/sq ft), exterior painting ($3,500-$12,000), cabinet refinishing ($3,000-$8,000), drywall repair, pressure washing, and more. 5-year exterior warranty, 4.9/5 Google rating. Call (346) 594-5960.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Your Neighbors in Cypress</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Houston Superior Painting is not just a company that serves Cypress. We are based here. Founded in 2019 by JJ Semo, our office is located in Cypress and our crews live in the communities we paint. We understand the architectural styles, HOA requirements, and climate challenges specific to Northwest Houston.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">Whether your Bridgeland home needs a full exterior repaint to withstand another Houston summer, or your Towne Lake kitchen is due for a cabinet transformation, we are 15 minutes away and ready to help.</p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Services We Offer in Cypress</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { name: "Interior Painting", href: "/interior-painting-houston-tx", desc: "Walls, ceilings, trim, doors, and accent walls." },
              { name: "Exterior Painting", href: "/exterior-painting-houston-tx", desc: "Siding, trim, fascia, soffits, and shutters." },
              { name: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx", desc: "Kitchen and bathroom cabinets with HVLP spray." },
              { name: "Drywall Repair", href: "/drywall-repair-houston-tx", desc: "Cracks, holes, water damage, and texture matching." },
              { name: "Pressure Washing", href: "/pressure-washing-houston-tx", desc: "Driveways, siding, fences, and decks." },
              { name: "Limewash & German Smear", href: "/limewash-houston-tx", desc: "European-style brick finishes." },
              { name: "Garage Floor Epoxy", href: "https://houstonsuperiorepoxy.com/", desc: "Durable epoxy and polyaspartic coatings." },
              { name: "Load-Bearing Wall Removal", href: "/load-bearing-wall-removal-houston-tx", desc: "Open concept conversions." },
            ].map(s => (
              <Link key={s.name} href={s.href} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors group">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div><h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">{s.name}</h3><p className="text-muted-foreground text-sm">{s.desc}</p></div>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Cypress Painting Cost Guide 2026</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Service</th><th className="text-left p-3 font-semibold">Price Range</th></tr></thead>
              <tbody>
                {[["Interior Painting", "$2.50–$4.50/sq ft"], ["Exterior Painting", "$3,500–$12,000"], ["Cabinet Refinishing", "$3,000–$8,000"], ["Drywall Repair", "$150–$800/patch"], ["Pressure Washing", "$200–$600"], ["Garage Epoxy", "$1,800–$5,000"]].map(([s, p]) => (
                  <tr key={s} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{s}</td><td className="p-3 text-muted-foreground">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4">Cypress Neighborhoods We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Bridgeland", "Towne Lake", "Cypress Creek Lakes", "Fairfield", "Lakewood Forest", "Cypress Falls", "Cypress Springs", "Longwood", "Riata Ranch", "Black Horse Ranch", "Cypress Forest", "Stone Gate"].map(area => (
              <div key={area} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border text-sm"><MapPin className="h-4 w-4 text-secondary shrink-0" /><span className="font-medium">{area}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Ready to Transform Your Cypress Home?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Request your free quote today. Standard deposit required upon acceptance to secure your project date. 100% satisfaction guarantee.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
