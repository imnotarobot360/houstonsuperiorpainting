import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Phone, Clock, Shield, Users, DollarSign, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Houston Superior Painting vs CertaPro | 2026 Comparison",
  description: "Compare Houston Superior Painting vs CertaPro Painters. See differences in pricing, warranty, local ownership, and customer reviews.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/houston-superior-painting-vs-certapro',
  },
  openGraph: {
    title: "Houston Superior Painting vs CertaPro Painters: 2026 Comparison",
    description: "Detailed comparison of local vs franchise painting companies in Houston.",
    type: "website",
    images: ["/images/hsp-vs-certapro.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Superior Painting vs CertaPro: Which Is Better?",
    description: "Compare pricing, warranty, and service quality.",
  },
}

const comparisonData = [
  {
    feature: "Business Type",
    hsp: "Locally owned & operated",
    certapro: "National franchise",
    hspBetter: true,
  },
  {
    feature: "Owner On-Site",
    hsp: "Yes, owner meets every client",
    certapro: "Varies by franchise",
    hspBetter: true,
  },
  {
    feature: "Warranty",
    hsp: "5-year written warranty",
    certapro: "1-2 year warranty",
    hspBetter: true,
  },
  {
    feature: "Google Rating",
    hsp: "4.9 stars (200+ reviews)",
    certapro: "4.5 stars (varies by location)",
    hspBetter: true,
  },
  {
    feature: "Pricing",
    hsp: "Competitive local rates",
    certapro: "Franchise fees in pricing",
    hspBetter: true,
  },
  {
    feature: "Deposit Required",
    hsp: "No deposit required",
    certapro: "Deposit typically required",
    hspBetter: true,
  },
  {
    feature: "Estimate Response",
    hsp: "Same-day or next-day",
    certapro: "2-3 business days",
    hspBetter: true,
  },
  {
    feature: "Paint Brands",
    hsp: "Sherwin-Williams & Benjamin Moore",
    certapro: "Sherwin-Williams",
    hspBetter: null,
  },
  {
    feature: "Service Area",
    hsp: "Greater Houston (10 cities)",
    certapro: "National coverage",
    hspBetter: null,
  },
  {
    feature: "Online Scheduling",
    hsp: "Yes",
    certapro: "Yes",
    hspBetter: null,
  },
]

const faqs = [
  {
    question: "Is Houston Superior Painting better than CertaPro?",
    answer: "Houston Superior Painting offers several advantages over CertaPro for Houston homeowners: longer warranty (5 years vs 1-2 years), no deposit required, owner involvement in every project, and competitive pricing without franchise fees. Our 4.9-star Google rating with 200+ reviews reflects our commitment to quality."
  },
  {
    question: "Why choose a local painter over a franchise?",
    answer: "Local painters like Houston Superior Painting have deeper investment in community reputation, offer more personalized service with direct owner involvement, and avoid franchise fees that inflate pricing. You work directly with decision-makers, not corporate hierarchies."
  },
  {
    question: "Does CertaPro offer the same quality as local painters?",
    answer: "CertaPro quality varies significantly by franchise location since each is independently owned. Local painters build their entire reputation on consistent quality. Houston Superior Painting maintains uniform standards with owner oversight on every project."
  },
  {
    question: "How do Houston Superior Painting and CertaPro prices compare?",
    answer: "Houston Superior Painting typically offers 10-20% lower pricing than CertaPro for comparable projects. Franchise models include fees and overhead that get passed to customers. Local businesses operate more efficiently with lower overhead."
  },
  {
    question: "Which company has better warranties?",
    answer: "Houston Superior Painting offers a 5-year written warranty on labor and materials, compared to CertaPro's typical 1-2 year warranty. Our longer warranty reflects confidence in our workmanship and materials."
  },
  {
    question: "Can I meet the owner at Houston Superior Painting?",
    answer: "Yes, owner JJ Semo personally meets with every client during the estimate process and remains involved throughout the project. This direct relationship ensures accountability and communication that franchise models can't match."
  }
]

export default function HSPvsCertaProPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="bg-secondary text-secondary-foreground mb-6">Comparison Guide</Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
                Houston Superior Painting vs CertaPro Painters
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 text-pretty">
                Choosing between a local painting company and a national franchise? This detailed comparison 
                helps Houston homeowners understand the key differences in service, pricing, and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="tel:+13465945960">Call (346) 594-5960</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-sm text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">5-Year Warranty</h3>
                <p className="text-muted-foreground text-sm">vs CertaPro&apos;s 1-2 year warranty</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm text-center">
                <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">No Deposit Required</h3>
                <p className="text-muted-foreground text-sm">Pay only after completion</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm text-center">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">4.9 Star Rating</h3>
                <p className="text-muted-foreground text-sm">200+ verified Google reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12">
              Feature-by-Feature Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-4 text-left font-semibold">Feature</th>
                    <th className="border border-border p-4 text-center font-semibold bg-primary/5">
                      <div className="flex flex-col items-center">
                        <span className="text-primary">Houston Superior Painting</span>
                      </div>
                    </th>
                    <th className="border border-border p-4 text-center font-semibold">CertaPro Painters</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="border border-border p-4 font-medium">{row.feature}</td>
                      <td className="border border-border p-4 text-center bg-primary/5">
                        <div className="flex items-center justify-center gap-2">
                          {row.hspBetter === true && <Check className="w-5 h-5 text-green-600 flex-shrink-0" />}
                          <span>{row.hsp}</span>
                        </div>
                      </td>
                      <td className="border border-border p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {row.hspBetter === true && <X className="w-5 h-5 text-red-500 flex-shrink-0" />}
                          <span>{row.certapro}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12">
              Why Local Ownership Matters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Direct Owner Involvement</h3>
                <p className="text-muted-foreground mb-4">
                  At Houston Superior Painting, owner JJ Semo personally meets with every client. 
                  You&apos;re not just another number—you&apos;re working directly with the person whose 
                  reputation is on the line.
                </p>
                <p className="text-muted-foreground">
                  Franchise models often rely on sales representatives who may not be involved 
                  in the actual painting work, creating communication gaps.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Reputation</h3>
                <p className="text-muted-foreground mb-4">
                  We live and work in Houston. Our reputation in the community is everything. 
                  Every job affects our standing with neighbors, referral partners, and local businesses.
                </p>
                <p className="text-muted-foreground">
                  National franchises can absorb negative reviews across multiple locations. 
                  For us, every review matters personally.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">No Franchise Fees</h3>
                <p className="text-muted-foreground mb-4">
                  CertaPro franchisees pay ongoing royalties and marketing fees to corporate. 
                  These costs get built into the prices they charge customers.
                </p>
                <p className="text-muted-foreground">
                  As an independent local business, we keep overhead low and pass savings to you. 
                  That&apos;s why we can offer competitive pricing with superior warranty coverage.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Faster Response Times</h3>
                <p className="text-muted-foreground mb-4">
                  Need an estimate? We typically respond same-day or next-day. Have a concern 
                  during your project? You have the owner&apos;s direct phone number.
                </p>
                <p className="text-muted-foreground">
                  Corporate structures create layers of bureaucracy. Direct relationships 
                  mean faster communication and quicker problem resolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Comparison */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12">
              Warranty Comparison
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary text-primary-foreground p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Houston Superior Painting</h3>
                <div className="text-4xl font-bold mb-4">5-Year Warranty</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Covers labor and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>No deductibles or exclusions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Written guarantee included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Direct contact with owner</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-foreground">CertaPro Painters</h3>
                <div className="text-4xl font-bold mb-4 text-foreground">1-2 Year Warranty</div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Shorter coverage period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Terms vary by franchise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>May include exclusions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>Corporate claim process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Ready to Experience the Local Difference?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate from Houston Superior Painting. 
              See why hundreds of Houston homeowners have chosen us over national franchises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" asChild>
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:+13465945960" aria-label="Call Houston Superior Painting">
                  <Phone className="w-4 h-4 mr-2" />
                  (346) 594-5960
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
              <span>Serving: <Link href="/painters-houston-tx" className="underline hover:text-primary-foreground">Houston</Link></span>
              <span><Link href="/painters-katy-tx" className="underline hover:text-primary-foreground">Katy</Link></span>
              <span><Link href="/painters-cypress-tx" className="underline hover:text-primary-foreground">Cypress</Link></span>
              <span><Link href="/painters-sugar-land-tx" className="underline hover:text-primary-foreground">Sugar Land</Link></span>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Houston Superior Painting vs CertaPro Painters: 2026 Comparison",
            "description": "Compare Houston Superior Painting vs CertaPro Painters. See differences in pricing, warranty, local ownership, and customer reviews.",
            "author": {
              "@type": "Person",
              "name": "JJ Semo",
              "jobTitle": "Owner & Lead Estimator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Houston Superior Painting",
              "logo": {
                "@type": "ImageObject",
                "url": "https://houstonsuperiorpainting.com/images/logo.png"
              }
            },
            "datePublished": "2026-05-12",
            "dateModified": "2026-05-12"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </>
  )
}
