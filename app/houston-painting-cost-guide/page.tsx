import type { Metadata } from "next"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SchedulerSection } from "@/components/scheduler-section"
import { EstimateCalculator } from "@/components/estimate-calculator"
import { Check, Phone, Calculator, Home, Building2, Paintbrush, DollarSign, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Houston Painting Cost Guide 2026 — Prices & Estimates",
  description: "Complete Houston house painting cost guide. Interior painting $2.50-$4.50/sq ft, exterior $4,000-$15,000. Get accurate estimates for your project. Free quotes.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/houston-painting-cost-guide',
  },
  openGraph: {
    title: "Houston Painting Cost Guide 2026 — Prices & Estimates",
    description: "Complete Houston house painting cost guide. Interior painting $2.50-$4.50/sq ft, exterior $4,000-$15,000. Get accurate estimates.",
    url: "https://houstonsuperiorpainting.com/houston-painting-cost-guide",
    siteName: "Houston Superior Painting",
    type: "article",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-interior-painting.jpg",
      width: 1200,
      height: 630,
      alt: "Houston painting cost guide — interior, exterior, and cabinet pricing",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Painting Cost Guide 2026 — Prices & Estimates",
    description: "Complete Houston house painting cost guide with accurate 2026 pricing for interior, exterior, and cabinet projects.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-interior-painting.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Houston',
    'geo.position': '29.7604;-95.3698',
    'ICBM': '29.7604, -95.3698',
  },
}

const costGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Houston Painting Cost Guide 2026",
  "description": "Complete guide to house painting costs in Houston, Texas. Interior, exterior, cabinet refinishing prices explained.",
  "author": {
    "@type": "Organization",
    "name": "Houston Superior Painting"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Houston Superior Painting",
    "url": "https://houstonsuperiorpainting.com"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2026-01-05"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to paint the interior of a house in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Interior painting in Houston costs $2.50-$4.50 per square foot. A 2,500 sq ft home typically costs $6,250-$11,250 for complete interior painting including walls, ceilings, and trim."
      }
    },
    {
      "@type": "Question",
      "name": "How much does exterior house painting cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exterior house painting in Houston ranges from $4,000-$15,000 depending on size, siding type, stories, and condition. A typical 2,500 sq ft single-story home costs $5,500-$8,500."
      }
    },
    {
      "@type": "Question",
      "name": "How much does cabinet refinishing cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cabinet refinishing in Houston costs $3,500-$8,500 for an average kitchen with 20-30 doors. This includes professional spray finish with premium coatings."
      }
    }
  ]
}

export default function HoustonPaintingCostGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(costGuideSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TrustBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">2026 Price Guide</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Houston Painting Cost Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Complete pricing breakdown for interior, exterior, and cabinet painting in Greater Houston. 
                Transparent costs with no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="/contact">Get Your Free Estimate</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+13465945960" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    (346) 594-5960
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="py-8 bg-primary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <Calculator className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-2">Quick Answer:</p>
                <p className="text-muted-foreground">
                  Interior painting in Houston costs <strong>$2.50-$4.50 per square foot</strong>. 
                  A typical 2,500 sq ft home costs <strong>$6,250-$11,250</strong>. 
                  Exterior painting ranges <strong>$4,000-$15,000</strong> based on size and condition. 
                  Cabinet refinishing runs <strong>$3,500-$8,500</strong> for an average kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Estimate Calculator */}
        <section id="calculator" className="py-16 md:py-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Price your project in 30 seconds
              </h2>
              <p className="mt-3 text-lg text-muted-foreground text-pretty">
                Pick your project to see your ballpark range instantly — calculated from the same
                2026 Houston rates published on this page.
              </p>
            </div>
            <EstimateCalculator source="cost_guide_calculator" />
          </div>
        </section>

        {/* Interior Painting Costs */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Home className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Interior Painting Costs</h2>
                <p className="text-muted-foreground">Houston pricing for 2026</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Price Per Square Foot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Basic (walls only, 1 color)</span>
                      <span className="font-semibold">$2.00 - $2.50/sq ft</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Standard (walls, ceilings, trim)</span>
                      <span className="font-semibold">$2.50 - $3.50/sq ft</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Premium (multiple colors, detailed trim)</span>
                      <span className="font-semibold">$3.50 - $4.50/sq ft</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Luxury (specialty finishes)</span>
                      <span className="font-semibold">$4.50 - $6.00+/sq ft</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>By Home Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">1,500 sq ft home</span>
                      <span className="font-semibold">$3,750 - $6,750</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">2,000 sq ft home</span>
                      <span className="font-semibold">$5,000 - $9,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">2,500 sq ft home</span>
                      <span className="font-semibold">$6,250 - $11,250</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">3,000 sq ft home</span>
                      <span className="font-semibold">$7,500 - $13,500</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">4,000+ sq ft home</span>
                      <span className="font-semibold">$10,000 - $18,000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>What Affects Interior Painting Cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Ceiling height (standard 8-9' vs. 10'+)",
                    "Wall condition (new drywall vs. repairs needed)",
                    "Number of colors and accent walls",
                    "Trim and door painting included",
                    "Paint quality (good, better, best)",
                    "Furniture moving and protection",
                    "Ceiling texture type",
                    "Closet and pantry interiors",
                  ].map((factor, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{factor}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Exterior Painting Costs */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Exterior Painting Costs</h2>
                <p className="text-muted-foreground">Houston pricing for 2026</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>By Home Size (Single Story)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">1,500 sq ft home</span>
                      <span className="font-semibold">$3,500 - $5,500</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">2,000 sq ft home</span>
                      <span className="font-semibold">$4,500 - $7,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">2,500 sq ft home</span>
                      <span className="font-semibold">$5,500 - $8,500</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">3,000+ sq ft home</span>
                      <span className="font-semibold">$6,500 - $10,000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Two-Story Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">2,500 sq ft (2-story)</span>
                      <span className="font-semibold">$7,000 - $10,500</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">3,000 sq ft (2-story)</span>
                      <span className="font-semibold">$8,500 - $12,500</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">3,500 sq ft (2-story)</span>
                      <span className="font-semibold">$10,000 - $14,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">4,000+ sq ft (2-story)</span>
                      <span className="font-semibold">$12,000 - $18,000+</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Two-story homes cost 25-40% more due to scaffolding, ladders, and additional safety requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>By Siding Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Wood Siding</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$4.00 - $6.00/sq ft</p>
                    <p className="text-sm text-muted-foreground">Requires more prep, priming. Common in Heights, Montrose.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Hardie Board / Fiber Cement</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$3.00 - $4.50/sq ft</p>
                    <p className="text-sm text-muted-foreground">Standard in newer construction. Excellent paint adhesion.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Stucco / EIFS</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$3.50 - $5.00/sq ft</p>
                    <p className="text-sm text-muted-foreground">Textured surface. May need crack repair. Specialty coatings.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Brick (Paint)</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$4.00 - $6.00/sq ft</p>
                    <p className="text-sm text-muted-foreground">Full coverage paint. Permanent decision. Requires proper prep.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Brick (Limewash)</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$5.00 - $8.00/sq ft</p>
                    <p className="text-sm text-muted-foreground">European finish. Breathable. Reversible. Premium option.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Aluminum/Vinyl Siding</h4>
                    <p className="text-2xl font-bold text-primary mb-2">$2.50 - $4.00/sq ft</p>
                    <p className="text-sm text-muted-foreground">Requires special prep and adhesion primers.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cabinet Refinishing Costs */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Paintbrush className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground">Cabinet Refinishing Costs</h2>
                <p className="text-muted-foreground">Professional spray finish pricing</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>By Kitchen Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Small (10-15 doors)</span>
                      <span className="font-semibold">$2,500 - $4,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Average (20-30 doors)</span>
                      <span className="font-semibold">$3,500 - $6,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-muted-foreground">Large (30-40 doors)</span>
                      <span className="font-semibold">$5,500 - $8,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-muted-foreground">Extra Large (40+ doors)</span>
                      <span className="font-semibold">$7,500 - $12,000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What&apos;s Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Professional spray application (no brush marks)",
                      "Premium cabinet coatings (Emerald Urethane or equivalent)",
                      "Door and drawer front removal",
                      "Thorough cleaning and degreasing",
                      "Light sanding and surface prep",
                      "Priming and 2 coats of finish",
                      "Hardware reinstallation",
                      "5-year warranty on workmanship",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Prices Vary */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why Painting Prices Vary in Houston
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <DollarSign className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Paint Quality</h3>
                  <p className="text-muted-foreground mb-4">
                    We use premium Sherwin-Williams and Benjamin Moore paints. Cheaper contractors 
                    use contractor-grade paints that fade faster and require repainting sooner.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Premium paint costs more but lasts 2-3x longer.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Clock className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Prep Work</h3>
                  <p className="text-muted-foreground mb-4">
                    Proper preparation takes time: pressure washing, scraping, sanding, caulking, 
                    priming. Cheap quotes often skip these steps, leading to premature failure.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    80% of paint job quality is in the prep.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Insurance & Warranty</h3>
                  <p className="text-muted-foreground mb-4">
                    Insured contractors with written warranties cost more but protect
                    your investment. Uninsured painters put your home at risk.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Our 5-year warranty backs every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Exact Price Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              These are estimates. Your actual cost depends on your specific home. 
              Get a free, detailed quote with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">Get Free Estimate</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+13465945960" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (346) 594-5960
                </a>
              </Button>
            </div>
          </div>
        </section>

        <SchedulerSection />
      </main>
      <Footer />
    </>
  )
}
