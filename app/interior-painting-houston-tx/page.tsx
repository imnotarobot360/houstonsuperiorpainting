import type { Metadata } from 'next'
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RelatedLinks } from "@/components/luxury/related-links"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Star, Shield, Clock, Paintbrush, MessageSquare, Users } from "lucide-react"

export const metadata: Metadata = {
  title: 'Interior Painting Houston TX — Houston Superior Painting',
  description: 'Professional interior painting in Houston TX. Walls, ceilings, trim, doors. Spray + back-roll technique. $2-$4/sq ft. 5-year guarantee. Free estimates.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/interior-painting-houston-tx',
  },
  openGraph: {
    title: 'Interior Painting Houston TX — Houston Superior Painting',
    description: 'Professional interior painting in Houston TX. Walls, ceilings, trim, doors. Spray + back-roll technique. $2-$4/sq ft. 5-year guarantee.',
    url: 'https://houstonsuperiorpainting.com/interior-painting-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{ 
      url: 'https://houstonsuperiorpainting.com/images/og/og-interior-painting.jpg', 
      width: 1200, 
      height: 630,
      alt: 'Interior Painting Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Painting Houston TX — Houston Superior Painting',
    description: 'Professional interior painting in Houston TX. Walls, ceilings, trim, doors. Spray + back-roll technique. 5-year guarantee.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-interior-painting.jpg'],
  },
}

const interiorFaqs = [
  {
    question: "How long does interior painting take in Houston?",
    answer: "A 2,000 sq ft home typically takes 3–5 working days. Larger homes (3,500+ sq ft) take 5–8 days. Single rooms can be completed in one day. We always provide an exact timeline before starting."
  },
  {
    question: "Do you move furniture?",
    answer: "Yes. We move and protect all furniture as part of every interior project. We use furniture sliders, moving blankets, and plastic wrap to protect every piece. Large or extremely heavy items can stay in place and be wrapped."
  },
  {
    question: "Can I stay in my home during interior painting?",
    answer: "Yes. We work in phases room-by-room and use low-VOC paints. Most families stay home. We can also schedule around bedrooms at night and living spaces during the day to minimize disruption."
  },
  {
    question: "Do you paint ceilings?",
    answer: "Yes. We paint smooth and textured ceilings, including popcorn ceiling scraping and re-texturing if you'd like a smooth finish."
  },
  {
    question: "What paint sheen should I choose?",
    answer: "Walls: matte, eggshell, or flat. Trim, doors, baseboards: satin or semi-gloss. Kitchens and bathrooms: satin (washable but not too shiny). Ceilings: flat. We include sheen recommendations in your free estimate."
  },
  {
    question: "Do you offer color consultation?",
    answer: "Yes — color consultation is included with every project. We can help you select cohesive whole-home palettes, accent walls, and color-drenching schemes."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": interiorFaqs.map(faq => ({
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
  "@id": "https://houstonsuperiorpainting.com/interior-painting-houston-tx#service",
  "name": "Interior Painting in Houston, TX",
  "description": "Professional interior painting services including walls, ceilings, trim, doors, closets, built-ins, and accent walls. Spray + back-roll technique for smooth, factory-quality finishes.",
  "serviceType": "Interior Painting",
  "provider": { "@id": "https://houstonsuperiorpainting.com/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Katy" },
    { "@type": "City", "name": "Cypress" },
    { "@type": "City", "name": "Sugar Land" },
    { "@type": "City", "name": "Richmond" },
    { "@type": "City", "name": "Fulshear" },
    { "@type": "City", "name": "Pearland" },
    { "@type": "City", "name": "Memorial" },
    { "@type": "City", "name": "The Heights" },
    { "@type": "City", "name": "The Woodlands" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 2,
      "maxPrice": 4,
      "priceCurrency": "USD",
      "unitText": "per square foot"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Painting Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Walls and Ceilings" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trim, Baseboards, Crown Molding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Doors and Frames" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accent Walls and Color Drenching" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair and Texture Matching" } }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our 6-Step Interior Painting Process",
  "description": "How Houston Superior Painting delivers smooth, factory-quality interior finishes.",
  "totalTime": "P5D",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Color consultation and sample testing", "text": "We help you choose the right color and sheen, and place large samples on your walls so you see them in your home's light." },
    { "@type": "HowToStep", "position": 2, "name": "Full protection", "text": "Floors covered, furniture moved and wrapped, outlets and switches removed, vents masked." },
    { "@type": "HowToStep", "position": 3, "name": "Surface prep", "text": "Sanding, caulking gaps, patching nail holes, repairing drywall, priming bare spots and stains." },
    { "@type": "HowToStep", "position": 4, "name": "First coat application", "text": "Spray + back-roll for walls; spray for trim, doors, cabinets." },
    { "@type": "HowToStep", "position": 5, "name": "Inspection and touch-up", "text": "We inspect under bright lights for missed spots and apply second coats." },
    { "@type": "HowToStep", "position": 6, "name": "Cleanup and walkthrough", "text": "We reinstall outlets, vacuum, restore furniture, and walk through with you for sign-off." }
  ]
}

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".quick-answer", ".hero-h1"]
  }
}

export default function InteriorPaintingHoustonTX() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="hero-h1 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Interior House Painting in Houston, Katy &amp; Cypress, TX
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Smooth, factory-quality finishes from Houston&apos;s prep-first painting team. Free estimates. 5-Year quality guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get My Free Estimate</Link>
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

        {/* Trust Signals */}
        <section className="py-6 bg-muted/50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-center text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">500+ Houston Homes Painted</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">4.9 Rating (200+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">Background-Checked Crew</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-medium">Fully Insured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer - Speakable Section for AEO */}
        <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Houston Superior Painting provides professional interior painting in Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, and The Woodlands. Interior projects cost $2–$4 per sq ft, take 3–5 days for typical homes, and use premium Sherwin-Williams and Benjamin Moore paints. Every job is backed by our written 5-year quality guarantee. Free estimates at (346) 594-5960.
            </p>
          </div>
        </section>

        {/* Before & After Transformation */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-10">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                Real Houston Interior Transformation
              </h2>
              <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                This formal dining room went from dated, blotchy golden-yellow walls to a rich slate blue —
                walls, wainscoting, and trim refreshed for a dramatic, modern finish.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <figure className="relative overflow-hidden rounded-xl border border-border shadow-sm">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-foreground/80 px-4 py-1 text-sm font-semibold text-background">
                  Before
                </span>
                <img
                  src="/images/interior-before-1.jpg"
                  alt="Houston dining room with dated golden-yellow walls before interior painting"
                  className="w-full h-72 sm:h-96 object-cover"
                  loading="lazy"
                />
              </figure>
              <figure className="relative overflow-hidden rounded-xl border border-border shadow-sm">
                <span className="absolute top-4 left-4 z-10 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  After
                </span>
                <img
                  src="/images/interior-after-1.jpg"
                  alt="Same Houston dining room repainted in elegant slate blue with crisp white trim after interior painting"
                  className="w-full h-72 sm:h-96 object-cover"
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
                  Why Houston Homeowners Choose Us for Interior Painting
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Houston&apos;s humid climate, year-round AC condensation, and active families create real challenges for interior paint. Cheap brush-painted walls show roller marks, drips, and inconsistent sheen within a year. Our approach is different:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Spray + back-roll technique</strong> for walls produces a flawless, brush-mark-free finish.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Premium primers</strong> matched to each surface (drywall, plaster, trim, doors, ceiling).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Factory-finish spray</strong> for trim, doors, and cabinets eliminates brush marks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Full protection</strong> of floors, furniture, electronics, and landscaping.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Same crew, same job</strong> — no rotating subcontractors. The team that starts your home finishes it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>5-Year written quality guarantee</strong> — if anything fails, we fix it free.</span>
                  </li>
                </ul>

                <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
                  What&apos;s Included in Interior Painting
                </h2>
                <ul className="space-y-2 mb-8 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Walls and ceilings (smooth and textured)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Trim, baseboards, crown molding, chair rail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Interior doors and door frames</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Closet interiors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Built-ins, mantles, and bookcases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Stair risers and railings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Accent walls and color drenching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Drywall repair, caulking, and texture matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Color consultation included</span>
                  </li>
                </ul>

                <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
                  Our 6-Step Interior Painting Process
                </h2>
                <ol className="space-y-4 mb-8">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <strong className="text-foreground">Color consultation and sample testing.</strong>
                      <p className="text-foreground/80 mt-1">We help you choose the right color and sheen, and place large samples on your walls so you see them in your home&apos;s light.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <strong className="text-foreground">Full protection.</strong>
                      <p className="text-foreground/80 mt-1">Floors covered, furniture moved and wrapped, outlets and switches removed, vents masked.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <strong className="text-foreground">Surface prep.</strong>
                      <p className="text-foreground/80 mt-1">Sanding, caulking gaps, patching nail holes, repairing drywall, priming bare spots and stains.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</span>
                    <div>
                      <strong className="text-foreground">First coat application.</strong>
                      <p className="text-foreground/80 mt-1">Spray + back-roll for walls; spray for trim, doors, cabinets.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">5</span>
                    <div>
                      <strong className="text-foreground">Inspection and touch-up.</strong>
                      <p className="text-foreground/80 mt-1">We inspect under bright lights for missed spots and apply second coats.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">6</span>
                    <div>
                      <strong className="text-foreground">Cleanup and walkthrough.</strong>
                      <p className="text-foreground/80 mt-1">We reinstall outlets, vacuum, restore furniture, and walk through with you for sign-off.</p>
                    </div>
                  </li>
                </ol>

                <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
                  Interior Paint Brands We Use
                </h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Paintbrush className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Sherwin-Williams Emerald, Cashmere, Duration Home</strong> — for premium washable walls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Paintbrush className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Benjamin Moore Aura, Regal Select, Advance</strong> — for ceilings, walls, and cabinet-grade trim</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Paintbrush className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Low-VOC and zero-VOC options</strong> available for families with allergies, asthma, or pets</span>
                  </li>
                </ul>

                <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
                  Houston Interior Color Trends for 2026
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  White and warm-white walls remain the #1 choice in Cypress, Katy, Memorial, and The Heights — they brighten Houston&apos;s cloudy days and photograph beautifully. Greige (Repose Gray, Agreeable Gray) is dominant in newer Cinco Ranch and Sugar Land builds. Dark accent walls (Hale Navy, Iron Mountain, Black Magic) are surging in master bedrooms and home offices. <strong>Color drenching</strong> — painting walls, trim, ceiling, and doors all the same color — is the breakthrough trend of 2026, especially in formal dining and powder rooms.
                </p>

                <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
                  Interior Painting Cost in Houston
                </h2>
                <div className="pricing-snippet overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-3 text-left">Project</th>
                        <th className="border border-border px-4 py-3 text-left">Typical Cost Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3">Single room (walls + trim)</td>
                        <td className="border border-border px-4 py-3">$400–$900</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border border-border px-4 py-3">Whole house interior (2,000 sq ft)</td>
                        <td className="border border-border px-4 py-3">$4,000–$8,000</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3">Whole house interior (3,500 sq ft)</td>
                        <td className="border border-border px-4 py-3">$7,500–$13,500</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border border-border px-4 py-3">Ceiling only (single room)</td>
                        <td className="border border-border px-4 py-3">$200–$450</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3">Accent wall</td>
                        <td className="border border-border px-4 py-3">$250–$500</td>
                      </tr>
                      <tr className="bg-muted/50">
                        <td className="border border-border px-4 py-3">Interior trim package (full home)</td>
                        <td className="border border-border px-4 py-3">$1,800–$3,500</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3">Color drenching (single room, all surfaces)</td>
                        <td className="border border-border px-4 py-3">$900–$1,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-foreground/70 text-sm mb-8">
                  All projects include free estimate, full prep, premium paint, and our 5-year quality guarantee. We never charge upfront.
                </p>

                <h2 className="font-serif text-3xl font-bold text-foreground mt-12 mb-6">
                  Why Choose Houston Superior Painting
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <Paintbrush className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Spray + Back-Roll Technique</h3>
                      <p className="text-muted-foreground text-sm">
                        Our signature technique produces flawless, brush-mark-free walls with superior coverage and even sheen.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Shield className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">5-Year Quality Guarantee</h3>
                      <p className="text-muted-foreground text-sm">
                        Every interior job is backed by our written guarantee. If anything fails, we fix it free.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Star className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Premium Paint Brands</h3>
                      <p className="text-muted-foreground text-sm">
                        Sherwin-Williams Emerald, Duration, Cashmere. Benjamin Moore Aura, Regal, Advance. Always premium.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <Users className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">Same Crew, Same Job</h3>
                      <p className="text-muted-foreground text-sm">
                        No rotating subcontractors. The background-checked team that starts your home finishes it.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Service Areas for Interior Painting</h2>
                <p className="text-foreground/80 mb-4">We paint interior projects across all of Greater Houston including:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  <Link href="/painters-houston-tx" className="text-primary hover:underline font-medium">Houston</Link>
                  <Link href="/painters-katy-tx" className="text-primary hover:underline font-medium">Katy</Link>
                  <Link href="/painters-cypress-tx" className="text-primary hover:underline font-medium">Cypress</Link>
                  <Link href="/painters-sugar-land-tx" className="text-primary hover:underline font-medium">Sugar Land</Link>
                  <Link href="/painters-richmond-tx" className="text-primary hover:underline font-medium">Richmond</Link>
                  <Link href="/painters-fulshear-tx" className="text-primary hover:underline font-medium">Fulshear</Link>
                  <Link href="/painters-pearland-tx" className="text-primary hover:underline font-medium">Pearland</Link>
                  <Link href="/painters-memorial-tx" className="text-primary hover:underline font-medium">Memorial</Link>
                  <Link href="/painters-the-heights-tx" className="text-primary hover:underline font-medium">The Heights</Link>
                  <Link href="/painters-the-woodlands-tx" className="text-primary hover:underline font-medium">The Woodlands</Link>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                  Interior Painting FAQs
                </h2>
                <div className="space-y-6">
                  {interiorFaqs.map((faq, index) => (
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
                  Get Your Free Interior Painting Estimate
                </h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  No pressure, no obligation — just honest pricing and expert advice for your interior painting project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Get My Free Estimate</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      (346) 594-5960
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <a href="sms:+13465945960" aria-label="Text Houston Superior Painting" className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Text Us
                    </a>
                  </Button>
                </div>
              </div>

              {/* Related Services */}
              <div className="mt-16">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Related Services</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/exterior-painting-houston-tx" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                    <h4 className="font-semibold">Exterior Painting</h4>
                    <p className="text-sm text-muted-foreground">Weather-resistant exterior finishes</p>
                  </Link>
                  <Link href="/cabinet-refinishing-houston-tx" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                    <h4 className="font-semibold">Cabinet Refinishing</h4>
                    <p className="text-sm text-muted-foreground">Factory-finish cabinet painting</p>
                  </Link>
                  <Link href="/drywall-repair-houston-tx" className="block p-4 border rounded-lg hover:border-primary transition-colors">
                    <h4 className="font-semibold">Drywall Repair</h4>
                    <p className="text-sm text-muted-foreground">Crack and hole repair</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <RelatedLinks exclude="/interior-painting-houston-tx" />
      <Footer />
    </>
  )
}
