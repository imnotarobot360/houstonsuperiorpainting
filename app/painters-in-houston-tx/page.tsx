import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, Star, Shield, Clock, MapPin, CheckCircle2, ChevronRight, Users, Award } from "lucide-react"
import { BUSINESS, PHONE_HREF, PRICES_2026, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "Painters in Houston TX | Interior, Exterior & Cabinet Painting | Houston Superior Painting",
  description: "Trusted painters in Houston TX for interior, exterior, cabinet painting, pressure washing, and remodeling.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/painters-houston-tx" },
  openGraph: {
    title: "Painters in Houston TX | Houston Superior Painting",
    description: "Trusted painters in Houston TX for interior, exterior, cabinet painting, pressure washing, and remodeling. Free quote: 346-594-5960.",
    url: "https://houstonsuperiorpainting.com/painters-houston-tx",
    type: "website",
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-painters-houston.jpg", width: 1200, height: 630 }],
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.9012;-95.6293",
    ICBM: "29.9012, -95.6293",
  },
}

const faqs = [
  { q: "How much do painters in Houston TX charge?", a: `Interior painting in Houston typically costs ${PRICES_2026.interiorPerSqFt} per square foot. A 2,500 sq ft home averages ${PRICES_2026.fullInterior2500}. Exterior painting ranges from ${PRICES_2026.exteriorPerHome} depending on siding type, number of stories, and surface condition. We provide free, detailed, itemized estimates with no hidden fees.` },
  { q: "What services do house painters in Houston offer?", a: "Houston Superior Painting provides interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, limewash/German smear, garage epoxy, load-bearing wall removal, and commercial painting. We handle everything from single accent walls to full whole-home repaints." },
  { q: "What areas do you serve as painters in Houston TX?", a: "We proudly serve all of Greater Houston including Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Missouri City, The Woodlands, Memorial, The Heights, Bellaire, River Oaks, Cinco Ranch, and all communities within 45 miles of Houston." },
  { q: "How long does a house painting project take in Houston?", a: "Most interior projects take 2-5 days depending on room count and prep work. Exterior painting typically takes 3-7 days. We provide an exact timeline with every estimate so you can plan accordingly." },
  { q: "Do you use premium paint brands?", a: "Yes. We exclusively use Sherwin-Williams (Duration, SuperPaint, Emerald) and Benjamin Moore (Aura, Regal Select). These premium products are rated for Houston heat, humidity, and UV exposure, delivering 8-10 year durability." },
  { q: "Are you insured?", a: "Yes, Houston Superior Painting is fully insured with $2M general liability coverage. We are also bonded for your protection. Certificates of insurance available upon request." },
  { q: "Do you offer a warranty on painting work?", a: "We offer a 5-year warranty on all painting work, interior and exterior alike. Our warranty covers peeling, blistering, and fading under normal conditions. If any issue arises, we come back and fix it at no charge." },
  { q: "What preparation do you do before painting?", a: "Our 8-step process includes power washing, scraping loose paint, sanding, caulking gaps, priming bare surfaces, protecting landscaping and flooring, applying two coats of premium paint, and a final quality inspection. Proper prep is 80% of a lasting paint job." },
  { q: "Can I see examples of your work?", a: "Absolutely. We have hundreds of before-and-after photos from projects across Houston, Katy, Cypress, and Sugar Land. Visit our gallery or check our 200+ five-star Google reviews with real project photos from local homeowners." },
  { q: "How do I get a free estimate?", a: "Call or text us at (346) 594-5960, or fill out our online form. We typically schedule estimates within 1-2 business days and provide a detailed, itemized quote on-site within 24 hours of the visit." },
  { q: "Do you require a deposit?", a: "Yes, a standard deposit is required upon acceptance to secure your project date on our schedule. The remaining balance is due upon completion and your satisfaction. We accept all major credit cards." },
  { q: "What makes you different from other Houston painters?", a: "Three things: old-school preparation (we never skip steps), premium products only (Sherwin-Williams and Benjamin Moore), and owner Juan Serra personally reviews the prep scope on every estimate. We are not a franchise or a lead-generation company. We are a local, owner-operated team with a 4.9/5 Google rating." },
  { q: "Do you paint in Houston summers?", a: "Yes, but we schedule exterior work during optimal conditions: early morning starts (6-7 AM) and we stop when temperatures exceed safe application ranges. Our paint products are rated for extreme heat and we follow manufacturer temperature guidelines strictly." },
  { q: "Can you match existing paint colors?", a: "Yes. We use spectrophotometer color matching to match any existing color precisely. Whether you need a touch-up or want to replicate a color from another room, we can achieve an exact match." },
  { q: "Do you handle HOA requirements?", a: "Yes. We regularly work with HOAs across Houston, Katy, Cypress, and Sugar Land. We can help with color approval submissions, provide documentation for your HOA board, and ensure all work meets community standards." },
]

export default function PaintersInHoustonTX() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "Painters in Houston TX – Professional Residential Painting Experts",
                "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" },
                "publisher": { "@type": "Organization", "name": "Houston Superior Painting", "logo": { "@type": "ImageObject", "url": "https://houstonsuperiorpainting.com/images/logo.png" } },
                "datePublished": "2026-05-16",
                "dateModified": "2026-05-16",
                "mainEntityOfPage": "https://houstonsuperiorpainting.com/painters-houston-tx",
                "image": "https://houstonsuperiorpainting.com/images/og-painters-houston.jpg",
                "wordCount": 2800,
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Painters in Houston TX", "item": "https://houstonsuperiorpainting.com/painters-houston-tx" },
                ],
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
              },
              {
                "@type": "WebPage",
                "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <li><Link href="/" className="hover:text-primary-foreground">Home</Link></li>
              <ChevronRight className="h-3 w-3" />
              <li className="text-primary-foreground font-medium">Painters in Houston TX</li>
            </ol>
          </nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Painters in Houston TX – Professional Residential Painting Experts
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Trusted by hundreds of Houston-area homeowners for interior, exterior, and cabinet painting built to withstand Texas heat, humidity, and storms.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Free Estimate
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-8 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-secondary" /> 4.9/5 Google Rating</span>
            <span className="flex items-center gap-1"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-1"><Award className="h-4 w-4" /> 6+ Years in Business</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 500+ Projects Completed</span>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Houston Superior Painting is a trusted local team of painters in Houston TX specializing in high-quality interior, exterior, and cabinet painting. Founded in 2019 by Juan Serra, we use premium Sherwin-Williams and Benjamin Moore products with old-school preparation for Houston&apos;s tough weather. We serve Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, and The Woodlands. Call (346) 594-5960 for your free quote.
          </p>
        </div>
      </section>

      {/* Why Houston Homes Need Professional Painters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Why Houston Homes Need Professional Painters</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Houston&apos;s climate is uniquely challenging for paint. With average summer temperatures exceeding 95 degrees, humidity levels regularly above 80%, and severe storm seasons, standard paint jobs fail within 3-4 years. Professional painters who understand these conditions use products and techniques specifically engineered for the Gulf Coast. At Houston Superior Painting, every project starts with our 8-step preparation process because proper prep is 80% of a lasting paint job.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Extreme Heat & UV", desc: "Houston averages 200+ sunny days per year. UV exposure causes fading, chalking, and film degradation on south- and west-facing walls." },
              { title: "Humidity & Moisture", desc: "80%+ humidity causes blistering, peeling, and mildew if surfaces are not properly primed and painted with moisture-resistant formulas." },
              { title: "Storm & Wind Damage", desc: "Hurricane season brings driving rain and debris. Proper surface preparation and flexible coatings prevent water intrusion and paint failure." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Range of Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Full Range of Painting Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From a single accent wall to a complete whole-home transformation, we handle every aspect of residential painting and surface preparation.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Interior Painting", href: "/interior-painting-houston-tx", desc: "Walls, ceilings, trim, doors, and accent walls with factory-smooth finishes." },
              { name: "Exterior Painting", href: "/exterior-painting-houston-tx", desc: "Siding, trim, fascia, soffits, and shutters with weather-resistant coatings." },
              { name: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx", desc: "Kitchen and bathroom cabinets with HVLP spray technology for factory-finish results." },
              { name: "Drywall Repair", href: "/drywall-repair-houston-tx", desc: "Cracks, holes, water damage, and texture matching before painting." },
              { name: "Pressure Washing", href: "/pressure-washing-houston-tx", desc: "Driveways, siding, fences, and decks cleaned to prepare surfaces for coating." },
              { name: "Limewash & German Smear", href: "/limewash-brick-painting-houston-tx", desc: "European-style brick finishes for dramatic curb appeal transformations." },
              { name: "Garage Floor Epoxy", href: "https://houstonsuperiorepoxy.com/", desc: "Durable, chemical-resistant epoxy and polyaspartic coatings for garage floors." },
              { name: "Commercial Painting", href: "/commercial-painting-houston-tx", desc: "Offices, retail, restaurants, and warehouses with after-hours scheduling." },
            ].map((service) => (
              <Link key={service.name} href={service.href} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border hover:border-secondary transition-colors group">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">{service.name}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our 8-Step Professional Painting Process</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every project follows our proven 8-step process. This systematic approach is why our paint jobs last 8-10 years in Houston&apos;s climate while others fail in 3-4.
          </p>
          <div className="space-y-6">
            {[
              { step: 1, title: "Free On-Site Estimate", desc: "We inspect your home, discuss your goals and color preferences, measure surfaces, and provide a detailed, itemized quote within 24 hours. No pressure, no hidden fees." },
              { step: 2, title: "Surface Preparation", desc: "We power wash all exterior surfaces (2,500-3,000 PSI) to remove dirt, mildew, and loose paint. For interiors, we fill nail holes, sand rough areas, and repair any drywall damage." },
              { step: 3, title: "Scraping & Sanding", desc: "All loose, peeling, or flaking paint is scraped and sanded smooth. We feather edges to create a seamless transition between bare and painted areas." },
              { step: 4, title: "Caulking & Sealing", desc: "Every gap, crack, and joint is caulked with premium exterior-grade sealant. This prevents moisture infiltration, which is the #1 cause of paint failure in Houston." },
              { step: 5, title: "Priming", desc: "Bare wood, drywall, and stain-prone surfaces are primed with appropriate bonding primers. We use stain-blocking primers for water stains and tannin bleed." },
              { step: 6, title: "Protection & Masking", desc: "Floors, furniture, landscaping, hardware, and fixtures are carefully protected with drop cloths, plastic, and painter&apos;s tape. We treat your home like our own." },
              { step: 7, title: "Two-Coat Application", desc: "We apply two full coats of premium paint using the appropriate method: brush-and-roll for interiors, spray-and-back-roll for exteriors. Two coats ensure uniform coverage and maximum durability." },
              { step: 8, title: "Final Inspection & Walkthrough", desc: "We do a detailed inspection under multiple lighting conditions, touch up any imperfections, clean up completely, and walk through the finished project with you before final sign-off." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Houston Painting Cost Guide 2026</h2>
          <div className="pricing-snippet overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-3 font-semibold">Service</th>
                  <th className="text-left p-3 font-semibold">Price Range</th>
                  <th className="text-left p-3 font-semibold">Typical Home</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Interior Painting", `${PRICES_2026.interiorPerSqFt}/sq ft`, PRICES_2026.fullInterior2500],
                  ["Exterior Painting", PRICES_2026.exteriorPerHome, PRICES_2026.exterior2500TwoStory],
                  ["Cabinet Refinishing", PRICES_2026.cabinetsPerKitchen, "$4,500–$6,500"],
                  ["Drywall Repair", "$150–$800/patch", "$300–$1,200"],
                  ["Pressure Washing", "$200–$600", "$350–$500"],
                  ["Limewash / German Smear", "$4,000–$12,000", "$6,000–$9,000"],
                  ["Garage Epoxy", "$1,800–$5,000", "$2,500–$3,500"],
                  ["Commercial Painting", "$1.50–$4.00/sq ft", "Varies by project"],
                ].map(([service, range, typical]) => (
                  <tr key={service} className="border-b border-border hover:bg-muted/50">
                    <td className="p-3 font-medium">{service}</td>
                    <td className="p-3 text-muted-foreground">{range}</td>
                    <td className="p-3 text-muted-foreground">{typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Prices reflect 2026 Houston market rates. Actual costs depend on surface condition, accessibility, and product choice. Free estimates provided.</p>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Why Choose a Local Houston Painting Company</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Climate Expertise", desc: "We live and work in Houston. We know which products perform in 100-degree heat and 80% humidity. National franchises use one-size-fits-all approaches that fail here." },
              { title: "Accountability", desc: "Owner Juan Serra reviews the prep scope on every estimate. If something is not right, you call the owner directly, not a call center." },
              { title: "Background-Checked Team", desc: "Every crew member is background-checked, drug-tested, and trained in our 8-step process. Your home and family are safe with our team." },
              { title: "200+ Five-Star Reviews", desc: "Real Google reviews from real Houston homeowners. 4.9/5 average rating with detailed reviews from Katy, Cypress, Sugar Land, and The Woodlands clients." },
              { title: "Honest, Transparent Pricing", desc: "Our itemized estimates break down every cost. No surprises, no hidden fees. Standard deposit required upon acceptance to secure your date." },
              { title: "Premium Products Only", desc: "We never use contractor-grade paint. Every project uses Sherwin-Williams or Benjamin Moore top-tier lines rated for Houston conditions." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Service Areas</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We serve the entire Greater Houston metropolitan area. If you are within 45 miles of Houston, we can help.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Houston", href: "/painters-houston-tx" },
              { name: "Katy", href: "/painters-katy-tx" },
              { name: "Cypress", href: "/painters-cypress-tx" },
              { name: "Sugar Land", href: "/painters-sugar-land-tx" },
              { name: "Richmond", href: "/painters-richmond-tx" },
              { name: "Fulshear", href: "/painters-fulshear-tx" },
              { name: "Pearland", href: "/painters-pearland-tx" },
              { name: "The Woodlands", href: "/painters-the-woodlands-tx" },
              { name: "Missouri City", href: "/painters-missouri-city-tx" },
              { name: "Memorial", href: "/painters-memorial-tx" },
              { name: "The Heights", href: "/painters-the-heights-tx" },
              { name: "Cinco Ranch", href: "/painters-cinco-ranch-tx" },
            ].map((area) => (
              <Link key={area.name} href={area.href} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border hover:border-secondary transition-colors text-sm">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span className="font-medium">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
                    <FAQ items={faqs} variant="default" injectSchema={false} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Ready to Transform Your Home?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Request your free quote today with Houston Superior Painting. Standard deposit required upon acceptance to secure your project date. 100% satisfaction guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors">
              <MessageSquare className="h-5 w-5" /> Text Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-serif font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Interior Painting Cost Houston 2026", href: "/interior-painting-cost-houston" },
              { title: "Painting Company Near Me", href: "/painting-company-near-me" },
              { title: "Exterior House Painting Houston Cost Guide", href: "/exterior-house-painting-houston-cost-guide" },
              { title: "Interior Painters Katy TX", href: "/interior-painters-katy-tx" },
              { title: "Questions to Ask Before Hiring Painters", href: "/houston-painting-contractor-guide" },
              { title: "Best Exterior Paint for Houston Weather", href: "/best-exterior-paint-houston-weather" },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="bg-background rounded-lg p-4 border border-border hover:border-secondary transition-colors group">
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors text-sm">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
