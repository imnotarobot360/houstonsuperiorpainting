import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Calendar, ChevronRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Licensed vs Unlicensed Painters in Houston",
  description: "The difference between licensed and unlicensed painters in Texas. Why insurance, warranties, and accountability matter for your Houston painting project.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/questions-to-ask-before-hiring-painters",
  },
  openGraph: {
    title: "Licensed vs Unlicensed Painting Contractors: What Houston Homeowners Need to Know",
    description: "The difference between licensed and unlicensed painters in Texas. Why insurance, warranties, and accountability matter.",
    url: "https://houstonsuperiorpainting.com/questions-to-ask-before-hiring-painters",
    siteName: "Houston Superior Painting",
    locale: "en_US",
    type: "article",
  },
}

const faqItems = [
  {
    q: "Does Texas require painters to be licensed?",
    a: "Texas doesn't require a state license specifically for painting. However, legitimate painting contractors should have liability insurance ($1M+ recommended), workers' compensation insurance, and be registered with the Texas Secretary of State.",
  },
  {
    q: "How can I verify a painter's insurance?",
    a: "Ask for a Certificate of Insurance (COI) and call the insurance company to verify it's current. Legitimate contractors will provide this without hesitation. The COI should show both general liability and workers' compensation coverage.",
  },
  {
    q: "What happens if an uninsured painter gets hurt on my property?",
    a: "You could be held liable for their medical expenses and lost wages. Your homeowner's insurance may cover some costs but could raise your premiums or drop your policy. This is why workers' compensation coverage is essential.",
  },
  {
    q: "Why do uninsured painters charge less?",
    a: "They skip liability insurance, workers' comp, business registration, and proper equipment. They also often cut corners on prep work and materials. The lower price comes with significantly higher risk.",
  },
  {
    q: "What should I do if a painter refuses to show insurance?",
    a: "Walk away immediately. No legitimate contractor will refuse to provide proof of insurance. This is a major red flag that they're either uninsured or their policy has lapsed.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Licensed vs Unlicensed Painting Contractors: What Houston Homeowners Need to Know",
      description: "The difference between licensed and unlicensed painters in Texas.",
      author: { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", name: "Juan Serra" },
      publisher: { "@id": "https://houstonsuperiorpainting.com/#organization" },
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
}

// BreadcrumbList — Home > Blog > this post. Hand-rolled posts like this one
// shipped Article markup with no breadcrumb, so they could not earn a
// breadcrumb rich result. Title mirrors the Article headline so the two
// nodes always agree.
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://houstonsuperiorpainting.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "Licensed vs Unlicensed Painting Contractors: What Houston Homeowners Need to Know", "item": "https://houstonsuperiorpainting.com/questions-to-ask-before-hiring-painters" }
  ]
}

export default function LicensedVsUnlicensedPaintersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="bg-background">
        <nav className="max-w-4xl mx-auto px-4 pt-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-foreground">Licensed vs Unlicensed Painters</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <header className="mb-8">
            <p className="text-primary font-medium mb-2">Hiring Guide</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Licensed vs Unlicensed Painting Contractors: What Houston Homeowners Need to Know
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              The real cost difference isn&apos;t the quote - it&apos;s what happens when something goes wrong.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Juan Serra</span>
              <span>|</span>
              <span>May 19, 2026</span>
              <span>|</span>
              <span>7 min read</span>
            </div>
          </header>

          <div className="quick-answer bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-foreground mb-2">The Bottom Line</p>
                <p className="text-muted-foreground">
                  Hire painters with <strong>general liability insurance ($1M+)</strong>, <strong>workers&apos; compensation</strong>, and a <strong>registered business entity</strong>. Any savings from an uninsured contractor disappear if there&apos;s property damage, injury, or warranty issues.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>What &quot;Licensed&quot; Means in Texas</h2>
            <p>
              Texas doesn&apos;t require a specific state license for painting contractors (unlike plumbing or electrical work). This means anyone can call themselves a painter. However, legitimate professional painters should have:
            </p>
            <ul>
              <li><strong>Business registration</strong> with the Texas Secretary of State</li>
              <li><strong>General liability insurance</strong> ($1M minimum recommended)</li>
              <li><strong>Workers&apos; compensation insurance</strong> for all employees</li>
              <li><strong>Local business permits</strong> (varies by city)</li>
            </ul>

            <h2>The Real Cost Comparison</h2>
            <div className="pricing-snippet overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Factor</th>
                    <th className="border p-3 text-left">Insured &amp; Registered</th>
                    <th className="border p-3 text-left">Uninsured &amp; Unregistered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Typical quote (2,500 sq ft interior)</td>
                    <td className="border p-3">{PRICES_2026.fullInterior2500}</td>
                    <td className="border p-3">Often lower</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border p-3">Property damage coverage</td>
                    <td className="border p-3 text-green-600 font-medium">Covered by liability policy</td>
                    <td className="border p-3 text-destructive">$0 (you pay)</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Worker injury liability</td>
                    <td className="border p-3 text-green-600 font-medium">Covered by workers&apos; comp</td>
                    <td className="border p-3 text-destructive">Your homeowner&apos;s insurance</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border p-3">Warranty enforcement</td>
                    <td className="border p-3 text-green-600 font-medium">Written, enforceable</td>
                    <td className="border p-3 text-destructive">Verbal promises only</td>
                  </tr>
                  <tr>
                    <td className="border p-3">If they disappear</td>
                    <td className="border p-3 text-green-600 font-medium">Registered address, bonds</td>
                    <td className="border p-3 text-destructive">No recourse</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What Can Go Wrong</h2>

            <h3>1. Property Damage</h3>
            <p>
              If an uninsured painter damages a window, a fixture, or flooring, there may be no policy to pay for it, and the homeowner can end up covering the repair out of pocket.
            </p>

            <h3>2. Worker Injury</h3>
            <p>
              If a worker is hurt on your property and the contractor carries no workers&apos; compensation, claims can end up directed at the homeowner&apos;s insurance.
            </p>

            <h3>3. A Warranty No One Honors</h3>
            <p>
              A warranty is only as good as the business behind it. If the company was never registered and its phone number stops working, there is no one to call when problems appear.
            </p>

            <h2>How to Verify a Painting Contractor</h2>
            <ol>
              <li><strong>Ask for Certificate of Insurance (COI)</strong> - Call the insurance company to verify it&apos;s current</li>
              <li><strong>Search Texas Secretary of State</strong> - <a href="https://mycpa.cpa.state.tx.us/coa/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SOSDirect</a> shows registered businesses</li>
              <li><strong>Check Google reviews</strong> - Look for a solid number of reviews with consistent quality mentions</li>
              <li><strong>Get a written contract</strong> - Should include scope, timeline, payment schedule, warranty terms</li>
              <li><strong>Verify physical address</strong> - PO boxes only are a red flag</li>
            </ol>

            <h2>Houston Superior Painting&apos;s Credentials</h2>
            <p>
              We carry $2M general liability + workers&apos; comp, we are bonded, and we are registered with the Texas Secretary of State. We provide Certificates of Insurance on request, and our work is backed by a 5-year written workmanship warranty that is transferable.
            </p>
            <p>
              Our <Link href="/houston-painting-contractor-guide" className="text-primary hover:underline">15-question checklist</Link> can help you vet any painting contractor - including us. We&apos;re happy to answer every question.
            </p>
          </div>

          <section className="mt-12 pt-8 border-t">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="group border rounded-lg">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-foreground hover:bg-muted/50">
                    {item.q}
                    <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-4 pb-4 text-muted-foreground">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 bg-primary text-primary-foreground rounded-xl p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">Want Proof of Our Coverage?</h2>
            <p className="mb-6 text-primary-foreground/90">
              Ask for our Certificate of Insurance with your free estimate. No pressure, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Free Estimate + COI
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+13465945960">
                  <Phone className="mr-2 h-5 w-5" />
                  (346) 594-5960
                </a>
              </Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
