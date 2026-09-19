import type { Metadata } from 'next'
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedLinks } from "@/components/luxury/related-links"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Star, Shield, Clock, Paintbrush, Sun } from "lucide-react"
import { howToSchemas } from "@/components/structured-data"

export const metadata: Metadata = {
  title: 'Exterior Painting Houston TX — Houston Superior Painting',
  description: 'Professional exterior painting in Houston TX. Wood, stucco, brick, hardie board. Premium Sherwin-Williams paints, 5-year warranty. Free estimates.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-houston-tx',
  },
  openGraph: {
    title: 'Exterior Painting Houston TX — Houston Superior Painting',
    description: 'Professional exterior painting in Houston TX. Wood, stucco, brick, hardie board. Premium Sherwin-Williams paints, 5-year warranty.',
    url: 'https://houstonsuperiorpainting.com/exterior-painting-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{
      url: 'https://houstonsuperiorpainting.com/images/og/og-exterior-painting.jpg',
      width: 1200,
      height: 630,
      alt: 'Exterior Painting Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Painting Houston TX — Houston Superior Painting',
    description: 'Professional exterior painting in Houston TX. Wood, stucco, brick, hardie board. Premium paints, 5-year warranty.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-exterior-painting.jpg'],
  },
}

const exteriorFaqs = [
  {
    question: "How much does exterior painting cost in Houston?",
    answer: "Exterior painting in Houston ranges from $3,500–$12,000 depending on home size, siding type, stories, and condition. A typical 2,500 sq ft home costs $5,500–$8,500. Brick and stucco may cost more due to surface preparation."
  },
  {
    question: "How long does exterior paint last in Houston?",
    answer: "With proper preparation and premium coatings, exterior paint lasts 8–10 years in Houston's climate. We use 100% acrylic and elastomeric paints from Sherwin-Williams that resist UV, humidity, and heavy rains."
  },
  {
    question: "What is the best time to paint exterior in Houston?",
    answer: "The best time for exterior painting in Houston is March–May and September–November when temperatures are 50–85°F with lower humidity. We can paint year-round but avoid extreme heat days and rain."
  },
  {
    question: "Do you pressure wash before painting?",
    answer: "Yes. Every exterior project begins with professional pressure washing to remove dirt, mold, mildew, and loose paint. This essential step ensures proper paint adhesion and longevity."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": exteriorFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Exterior Painting",
  "provider": {
    "@type": "PaintingContractor",
    "name": "Houston Superior Painting",
    "telephone": "+1-346-594-5960",
    "url": "https://houstonsuperiorpainting.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Houston",
    "addressRegion": "TX"
  },
  "description": "Professional exterior painting services for homes in Houston TX including wood siding, stucco, brick, and hardie board.",
}

export default function ExteriorPaintingHoustonTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchemas.exteriorPainting) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-h1 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Exterior Painting Houston TX
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Professional exterior painting built to withstand Houston&apos;s heat, humidity, and storms. 
                Premium Sherwin-Williams paints with a 5-year warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    (346) 594-5960
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer - Speakable Section for AEO */}
        <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Houston Superior Painting provides professional exterior painting in Houston, Katy, Cypress, and Sugar Land TX. 
              Exterior painting costs $3,500–$12,000 depending on home size and siding type. 
              With proper preparation and premium coatings, exterior paint lasts 8–10 years in Houston&apos;s climate. 
              We include a 5-year warranty. Free estimates at (346) 594-5960.
            </p>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-8 bg-muted/50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.9 Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-semibold">5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">500+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold">Fully Insured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Transformation */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-10">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                Real Houston Exterior Transformation
              </h2>
              <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                This Tuscan-style Houston home went from dated beige stucco to a crisp,
                modern white finish — making the stone, tile roof, and architectural details stand out.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <figure className="relative overflow-hidden rounded-xl border border-border shadow-sm">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-foreground/80 px-4 py-1 text-sm font-semibold text-background">
                  Before
                </span>
                <img
                  src="/images/exterior-before-1.jpg"
                  alt="Houston home with original beige stucco exterior before painting"
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="lazy"
                />
              </figure>
              <figure className="relative overflow-hidden rounded-xl border border-border shadow-sm">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  After
                </span>
                <img
                  src="/images/exterior-after-1.jpg"
                  alt="Same Houston home with fresh white stucco exterior after professional painting"
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Houston&apos;s Exterior Painting Experts
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Houston Superior Painting specializes in exterior house painting built for Texas conditions. 
                  Our experienced crews understand the unique challenges of Houston&apos;s climate — intense UV rays, 
                  high humidity, heavy rains, and temperature swings — and we use products and techniques 
                  specifically designed to handle them.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-8">
                  Every exterior project begins with thorough preparation: pressure washing, scraping, sanding, 
                  caulking, and priming. This old-school approach is why our paint jobs last 8–10 years while 
                  others start peeling after 2–3.
                </p>

                <h3 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
                  Exterior Surfaces We Paint
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Wood Siding</strong> — Cedar, pine, and composite wood with proper priming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Stucco</strong> — Elastomeric coatings that flex with temperature changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Brick</strong> — Masonry paint and limewash finishes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Hardie Board / Fiber Cement</strong> — Long-lasting finishes for modern siding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Trim, Fascia & Soffits</strong> — Detail work that completes the look</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Front Doors & Garage Doors</strong> — High-impact areas with durable finishes</span>
                  </li>
                </ul>

                <h3 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
                  Exterior Painting Cost in Houston
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Exterior painting costs depend on home size, siding type, number of stories, and surface 
                  condition. Here are typical price ranges for Houston homes:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-3 text-left">Home Size</th>
                        <th className="border border-border px-4 py-3 text-left">Price Range</th>
                        <th className="border border-border px-4 py-3 text-left">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3">1,500 sq ft (1 story)</td>
                        <td className="border border-border px-4 py-3">$3,500 – $5,500</td>
                        <td className="border border-border px-4 py-3">3–4 days</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border border-border px-4 py-3">2,500 sq ft (2 story)</td>
                        <td className="border border-border px-4 py-3">$5,500 – $8,500</td>
                        <td className="border border-border px-4 py-3">4–6 days</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3">3,500 sq ft (2 story)</td>
                        <td className="border border-border px-4 py-3">$7,500 – $11,000</td>
                        <td className="border border-border px-4 py-3">5–7 days</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border border-border px-4 py-3">4,500+ sq ft</td>
                        <td className="border border-border px-4 py-3">$10,000 – $15,000+</td>
                        <td className="border border-border px-4 py-3">7–10 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
                  Why Choose Us for Exterior Painting
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <Paintbrush className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-2">Prep-First Process</h4>
                      <p className="text-muted-foreground text-sm">
                        Power wash, scrape, sand, caulk, prime, then paint. This is why our work lasts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Shield className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-2">5-Year Exterior Warranty</h4>
                      <p className="text-muted-foreground text-sm">
                        All exterior work carries our 5-year warranty. Peeling, fading, or bubbling? We fix it.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Sun className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-2">Houston Climate Expertise</h4>
                      <p className="text-muted-foreground text-sm">
                        We know which products handle 100°F heat, Gulf humidity, and sudden storms.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Star className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-2">Premium Sherwin-Williams</h4>
                      <p className="text-muted-foreground text-sm">
                        Duration, SuperPaint, and elastomeric coatings designed for extreme conditions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
                  Exterior Painting FAQs
                </h2>
                <div className="space-y-6">
                  {exteriorFaqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-6">
                      <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center bg-primary text-primary-foreground rounded-xl p-8 lg:p-12">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
                  Protect Your Home with Quality Exterior Paint
                </h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Get a free, detailed estimate for your exterior painting project. Our 5-year warranty 
                  gives you peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Get Free Estimate</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <a href="tel:+13465945960" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      (346) 594-5960
                    </a>
                  </Button>
                </div>
              </div>

              {/* Related Services */}
              <div className="mt-16">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Services</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/interior-painting-houston-tx" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                    <h4 className="font-semibold">Interior Painting</h4>
                    <p className="text-sm text-muted-foreground">Walls, ceilings, trim & doors</p>
                  </Link>
                  <Link href="/pressure-washing-houston-tx" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                    <h4 className="font-semibold">Pressure Washing</h4>
                    <p className="text-sm text-muted-foreground">Surface prep & cleaning</p>
                  </Link>
                  <Link href="/limewash-brick-painting-houston-tx" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                    <h4 className="font-semibold">Limewash & Brick</h4>
                    <p className="text-sm text-muted-foreground">European-style brick finishes</p>
                  </Link>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Areas We Serve</h3>
                <p className="text-muted-foreground">
                  Houston Superior Painting provides exterior painting services in{" "}
                  <Link href="/painters-houston-tx" className="text-primary hover:underline">Houston</Link>,{" "}
                  <Link href="/painters-katy-tx" className="text-primary hover:underline">Katy</Link>,{" "}
                  <Link href="/painters-cypress-tx" className="text-primary hover:underline">Cypress</Link>,{" "}
                  <Link href="/painters-sugar-land-tx" className="text-primary hover:underline">Sugar Land</Link>,{" "}
                  <Link href="/painters-richmond-tx" className="text-primary hover:underline">Richmond</Link>,{" "}
                  <Link href="/painters-fulshear-tx" className="text-primary hover:underline">Fulshear</Link>,{" "}
                  <Link href="/painters-bellaire-tx" className="text-primary hover:underline">Bellaire</Link>,{" "}
                  <Link href="/painters-memorial-tx" className="text-primary hover:underline">Memorial</Link>,{" "}
                  <Link href="/painters-the-heights-tx" className="text-primary hover:underline">The Heights</Link>,{" "}
                  and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <RelatedLinks exclude="/exterior-painting-houston-tx" />
      <Footer />
    </>
  )
}
