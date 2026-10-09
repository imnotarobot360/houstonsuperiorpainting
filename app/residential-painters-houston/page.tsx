import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedLinks } from "@/components/luxury/related-links"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, CheckCircle2, ChevronRight, MapPin } from "lucide-react"
import { BUSINESS, PHONE_HREF, PRICES_2026, SMS_HREF, SERVICE_AREAS, serviceHref } from "@/lib/business"

const PRICE_BY_SLUG: Record<string, string> = {
  "interior-painting-houston-tx": `${PRICES_2026.interiorPerSqFt}/sq ft`,
  "exterior-painting-houston-tx": PRICES_2026.exteriorPerHome,
  "cabinet-refinishing-houston-tx": PRICES_2026.cabinetsPerKitchen,
}

const AREAS = SERVICE_AREAS.filter((a) =>
  ["painters-houston-tx", "painters-katy-tx", "painters-cypress-tx", "painters-sugar-land-tx", "painters-the-woodlands-tx", "painters-pearland-tx", "painters-richmond-tx", "painters-fulshear-tx", "painters-memorial-tx", "painters-the-heights-tx", "painters-missouri-city-tx", "painters-bellaire-tx"].includes(a.slug),
)

export const metadata: Metadata = {
  title: "Residential Painters Houston | Interior & Exterior",
  description: "Residential painters in Houston, TX: interior, exterior, cabinets and drywall. 2026 price ranges, insured, 5-year written warranty. Call (346) 594-5960.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/residential-painters-houston" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "Residential Painters Houston | Houston Superior Painting", description: "Residential painting in Houston, Katy, Cypress and Sugar Land: interior, exterior, cabinets and drywall.", url: "https://houstonsuperiorpainting.com/residential-painters-houston", type: "website" },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
}

const faqs = [
  { q: "What does a residential painter do?", a: "Residential painters handle painting and surface preparation for homes: interior walls, ceilings and trim, exterior siding, trim, fascia and soffits, cabinet refinishing, drywall repair, pressure washing, and specialty finishes like limewash. Houston Superior Painting does all of these for homes across Greater Houston." },
  { q: "How much do residential painters charge in Houston?", a: `Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft. Exterior painting typically ranges ${PRICES_2026.exteriorPerHome}. Cabinet refinishing typically runs ${PRICES_2026.cabinetsPerKitchen} per kitchen. Prices depend on surface condition, access and product choice. Estimates are free and itemized.` },
  { q: "How do I choose the right residential painter in Houston?", a: "Ask for a certificate of insurance (general liability and workers' comp), a detailed written estimate that lists prep, products and every surface, and a written warranty. Read recent reviews and ask to see photos of finished work similar to yours. Texas does not license residential painters, so insurance is the credential to check." },
  { q: "What is the difference between residential and commercial painting?", a: "Residential painting focuses on homes and uses products suited to living spaces (low-VOC, washable). Commercial painting covers offices, retail and other business spaces, with coatings and scheduling suited to businesses. We offer both." },
  { q: "Do residential painters do drywall repair?", a: "Many residential painters handle minor to moderate drywall repair as part of painting preparation: filling nail holes, patching cracks and small holes, and texture matching. Larger drywall work may call for a dedicated drywall specialist." },
  { q: "How long does a residential painting project take?", a: "Typical ranges: a full interior 2-5 days, an exterior 3-7 days, kitchen cabinets 5-7 days, a single room about a day. Your written estimate gives the expected schedule for your home." },
  { q: "What areas do your residential painters serve?", a: "Greater Houston, including Katy, Cypress, Sugar Land, The Woodlands, Pearland, Richmond, Fulshear, Missouri City, Memorial, The Heights, Bellaire and River Oaks." },
  { q: "How does payment work?", a: "Estimates are free and we don't collect any money until you approve the written estimate. After you approve, we collect a down payment to schedule the job, and the balance is due after the final walkthrough." },
]

export default function ResidentialPaintersHouston() {
  return (
    <>
      <Header />
      <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "Residential Painters in Houston, TX", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-10-07", "mainEntityOfPage": "https://houstonsuperiorpainting.com/residential-painters-houston" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Residential Painters Houston", "item": "https://houstonsuperiorpainting.com/residential-painters-houston" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Residential Painters Houston</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">Residential Painters in Houston, TX</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Interior, exterior, cabinet and drywall work for Houston-area homes, with Sherwin-Williams and Benjamin Moore paints and a 5-year written workmanship warranty.</p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <Link href="/painting-estimate-houston" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">Free Estimate</Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Houston Superior Painting provides residential painting across Greater Houston. Interior painting: {PRICES_2026.interiorPerSqFt}/sq ft. Exterior: {PRICES_2026.exteriorPerHome}. Cabinets: {PRICES_2026.cabinetsPerKitchen} per kitchen. We serve Houston, Katy, Cypress, Sugar Land, The Woodlands and surrounding areas. Insured ({BUSINESS.trust.liabilityCoverage} general liability plus workers&apos; comp), 5-year written workmanship warranty, nothing due until you approve the estimate. Call {BUSINESS.phone}.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">How We Approach Residential Painting</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Houston Superior Painting was founded in 2019 by Juan Serra and is headquartered in Cypress. Houston&apos;s humidity, heat and heavy rain are hard on paint, so how long a paint job lasts depends mostly on preparation and product choice. Every quote is itemized against the ranges in our <Link href="/houston-painting-cost-guide" className="text-primary underline">Houston painting cost guide</Link>, whether it is <Link href="/interior-painting-houston-tx" className="text-primary underline">interior painting in Houston</Link>, <Link href="/exterior-painting-houston-tx" className="text-primary underline">exterior painting</Link> or a whole-home repaint for our <Link href="/painters-katy-tx" className="text-primary underline">painters in Katy TX</Link>.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Prep First", desc: "Washing, scraping, sanding, caulking and priming are listed on the estimate, because paint over poorly prepared surfaces is what fails first in Houston's weather." },
              { title: "Sherwin-Williams and Benjamin Moore", desc: "We use Sherwin-Williams and Benjamin Moore paints, with the product line and sheen named on the estimate." },
              { title: "Written Warranty, Clear Payment", desc: "A 5-year written workmanship warranty. Nothing is due until you approve the written estimate; the balance is due after the final walkthrough." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Residential Painting Services</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {BUSINESS.services.map(s => (
              <Link key={s.slug} href={serviceHref(s.slug)} className="flex items-center justify-between bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors group">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0" /><span className="font-semibold text-foreground group-hover:text-secondary transition-colors">{s.name}</span></div>
                {PRICE_BY_SLUG[s.slug] && <span className="text-muted-foreground text-sm">{PRICE_BY_SLUG[s.slug]}</span>}
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mb-8">Other services are priced on the written estimate after an on-site look.</p>

          <h2 className="text-2xl font-serif font-bold mb-4">Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {AREAS.map(a => (
              <Link key={a.slug} href={`/${a.slug}`} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border hover:border-secondary transition-colors text-sm"><MapPin className="h-4 w-4 text-secondary shrink-0" /><span className="font-medium">{a.name}</span></Link>
            ))}
          </div>

          <h2 className="text-2xl font-serif font-bold mt-10 mb-4">Houston Projects</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><Link href="/projects/memorial-whole-home-interior-repaint" className="text-primary underline">Whole-home interior repaint in Memorial</Link></li>
            <li><Link href="/projects/river-oaks-exterior-restoration" className="text-primary underline">Exterior restoration in River Oaks</Link></li>
            <li><Link href="/projects/west-university-kitchen-cabinet-refinishing" className="text-primary underline">Kitchen cabinet refinishing in West University</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Get a Free Residential Painting Estimate</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">No upfront payment: nothing is due until you approve the estimate. 5-year written workmanship warranty.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/painting-estimate-houston" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors">Request an Estimate</Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>
      <RelatedLinks exclude="/residential-painters-houston" />
      </main>
      <Footer />
    </>
  )
}
