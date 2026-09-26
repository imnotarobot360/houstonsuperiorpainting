import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedLinks } from "@/components/luxury/related-links"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, CheckCircle2, ChevronRight, MapPin, Star, Shield } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "Residential Painters Houston | Interior & Exterior",
  description: "Specialized residential painters Houston for complete home transformations built for Houston climate. Interior, exterior, cabinets, drywall. Call 346-594-5960.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/residential-painters-houston" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "Residential Painters Houston | Houston Superior Painting", description: "Full-service residential painting experts in Houston, Katy, Cypress, and Sugar Land.", url: "https://houstonsuperiorpainting.com/residential-painters-houston", type: "website" },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
}

const faqs = [
  { q: "What does a residential painter do?", a: "Residential painters handle all painting and surface preparation for homes: interior walls, ceilings, trim, exterior siding, trim, fascia, soffits, cabinet refinishing, drywall repair, pressure washing, and specialty finishes like limewash. Houston Superior Painting is a full-service residential painting company." },
  { q: "How much do residential painters charge in Houston?", a: "Interior painting costs $2.50-$4.50/sq ft. Exterior painting ranges $3,500-$12,000. Cabinet refinishing runs $3,000-$6,500 per kitchen. Prices depend on surface condition, accessibility, and product choice. We provide free itemized estimates." },
  { q: "How do I choose the right residential painter in Houston?", a: "Look for: verified Google reviews (check for fake patterns), proof of insurance ($1M+ liability), detailed written estimates (not verbal), warranty in writing, and willingness to provide references. Ask to see recent work in your neighborhood." },
  { q: "What is the difference between residential and commercial painting?", a: "Residential painting focuses on homes and uses products rated for living spaces (low-VOC, washable). Commercial painting handles offices, retail, and industrial spaces with specialized coatings (epoxy, fire-rated, anti-microbial). We offer both services." },
  { q: "Do residential painters do drywall repair?", a: "Quality residential painters handle minor to moderate drywall repair as part of painting preparation. This includes filling nail holes, patching cracks, fixing small holes, and texture matching. Major drywall work may require a dedicated drywall specialist." },
  { q: "How long does a residential painting project take?", a: "Interior: 2-5 days for a full home. Exterior: 3-7 days. Cabinet refinishing: 5-7 days. Single rooms: 1 day. We provide exact timelines with every estimate." },
  { q: "What areas do your residential painters serve?", a: "We serve all of Greater Houston including Katy, Cypress, Sugar Land, The Woodlands, Pearland, Richmond, Fulshear, Missouri City, Memorial, The Heights, Bellaire, and River Oaks." },
  { q: "Do you offer senior or military discounts?", a: "Yes. We offer a 5% discount for active military, veterans, and seniors (65+). Mention the discount when scheduling your free estimate. Cannot be combined with other offers." },
]

export default function ResidentialPaintersHouston() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "Residential Painters Houston – Full-Service Home Painting Experts", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/residential-painters-houston" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Residential Painters Houston", "item": "https://houstonsuperiorpainting.com/residential-painters-houston" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Residential Painters Houston</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">Residential Painters Houston – Full-Service Home Painting Experts</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Complete home painting solutions engineered for Houston&apos;s climate. Interior, exterior, cabinets, drywall, and specialty finishes from a trusted local team.</p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">Free Estimate</Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Houston Superior Painting provides full-service residential painting across Greater Houston. Interior painting: $2.50-$4.50/sq ft. Exterior: $3,500-$12,000. Cabinets: $3,000-$6,500 per kitchen. We serve Houston, Katy, Cypress, Sugar Land, The Woodlands, and surrounding areas. Insured, 5-year workmanship warranty, no money until you approve the estimate. Call (346) 594-5960.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">What Sets Our Residential Painting Apart</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Not all residential painters are the same. Houston has hundreds of painting companies, but most cut corners on preparation, use builder-grade paint, and disappear when problems arise. Houston Superior Painting was founded on the belief that old-school preparation plus premium products equals lasting results. Every quote is itemized against the ranges in our <Link href="/houston-painting-cost-guide" className="text-primary underline">Houston painting cost guide</Link>, whether it is <Link href="/interior-painting-houston-tx" className="text-primary underline">interior painting in Houston</Link> or a whole-home repaint for our <Link href="/painters-katy-tx" className="text-primary underline">painters in Katy TX</Link>.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Prep-First Philosophy", desc: "We spend 60-70% of project time on preparation: washing, scraping, sanding, caulking, and priming. This is why our exteriors make it through Houston's full 5-7 year repaint cycle while others fail in 3-4." },
              { title: "Premium Products Only", desc: "Sherwin-Williams Duration, Emerald, and SuperPaint. Benjamin Moore Aura and Regal Select. We never use contractor-grade or big-box store paint." },
              { title: "Owner Oversight", desc: "Owner Juan Serra reviews the prep scope on every estimate. You deal with the owner-run company, not a franchise or a lead reseller." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Residential Painting Services</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { name: "Interior Painting", href: "/interior-painting-houston-tx", price: "$2.50–$4.50/sq ft" },
              { name: "Exterior Painting", href: "/exterior-painting-houston-tx", price: "$3,500–$12,000" },
              { name: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx", price: "$3,000–$6,500" },
              { name: "Drywall Repair", href: "/drywall-repair-houston-tx", price: "$150–$800/patch" },
              { name: "Pressure Washing", href: "/pressure-washing-houston-tx", price: "$200–$600" },
              { name: "Limewash & German Smear", href: "/limewash-brick-painting-houston-tx", price: "$4,000–$12,000" },
              { name: "Garage Floor Epoxy", href: "https://houstonsuperiorepoxy.com/", price: "$1,800–$5,000" },
              { name: "Commercial Painting", href: "/commercial-painting-houston-tx", price: "$1.50–$4.00/sq ft" },
            ].map(s => (
              <Link key={s.name} href={s.href} className="flex items-center justify-between bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors group">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /><span className="font-semibold text-foreground group-hover:text-secondary transition-colors">{s.name}</span></div>
                <span className="text-muted-foreground text-sm">{s.price}</span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-serif font-bold mb-4">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[{ n: "Houston", h: "/painters-houston-tx" }, { n: "Katy", h: "/painters-katy-tx" }, { n: "Cypress", h: "/painters-cypress-tx" }, { n: "Sugar Land", h: "/painters-sugar-land-tx" }, { n: "The Woodlands", h: "/painters-the-woodlands-tx" }, { n: "Pearland", h: "/painters-pearland-tx" }, { n: "Richmond", h: "/painters-richmond-tx" }, { n: "Fulshear", h: "/painters-fulshear-tx" }, { n: "Memorial", h: "/painters-memorial-tx" }, { n: "The Heights", h: "/painters-the-heights-tx" }, { n: "Missouri City", h: "/painters-missouri-city-tx" }, { n: "Bellaire", h: "/painters-memorial-villages-tx" }].map(a => (
              <Link key={a.n} href={a.h} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border hover:border-secondary transition-colors text-sm"><MapPin className="h-4 w-4 text-secondary shrink-0" /><span className="font-medium">{a.n}</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Ready to Transform Your Home?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Request your free residential painting quote. No upfront payment: nothing is due until you approve the estimate. 5-year workmanship warranty.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>
      <RelatedLinks exclude="/residential-painters-houston" />
      <Footer />
    </>
  )
}
