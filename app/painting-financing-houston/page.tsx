import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { CreditCard, CalendarClock, ShieldCheck, CheckCircle, Phone, FileText, Paintbrush } from "lucide-react"

export const metadata: Metadata = {
  title: "Painting Financing Options in Houston, TX",
  description:
    "Painting financing options may be available through a third-party provider for Houston, Katy & Cypress homeowners. Ask for current terms at your free estimate.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/painting-financing-houston",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Painting Financing in Houston, TX | Houston Superior Painting",
    description:
      "Financing options may be available through a third-party provider for Houston painting projects. Ask for current terms during your estimate.",
    type: "website",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/painting-financing-houston#service",
  name: "Painting Financing in Houston, TX",
  description:
    "Financing options may be available through a third-party provider for interior painting, exterior painting and cabinet refinishing projects across Greater Houston.",
  serviceType: "Home Improvement Financing",
  provider: { "@id": "https://houstonsuperiorpainting.com/#organization" },
  areaServed: [
    { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Katy" },
    { "@type": "City", "name": "Cypress" },
    { "@type": "City", "name": "Sugar Land" },
    { "@type": "City", "name": "Richmond" },
  ],
}

const financingFaqs = [
  {
    q: "Do you offer financing for painting projects in Houston?",
    a: "Financing options may be available through a third-party provider. Availability, approval, loan amount, APR and repayment terms depend on the applicant and provider. Ask for current terms during your estimate. Ask about it for interior, exterior or cabinet projects anywhere we work, including Houston, Katy, Cypress, Sugar Land and surrounding areas.",
  },
  {
    q: "How do I apply for painting financing?",
    a: "Ask about financing during your free estimate. If it is available for your project, you apply with the third-party provider, which decides approval and terms. Your project price, scope and payment schedule are set in your written estimate.",
  },
  {
    q: "What types of projects can I finance?",
    a: "Ask about financing for any of our services, including interior painting, exterior painting, cabinet refinishing, drywall repair and larger remodeling projects. Whether financing is available, and on what terms, depends on the applicant and the provider.",
  },
  {
    q: "Is there a payment due before work begins?",
    a: "The estimate is free. Your written estimate identifies the complete scope, total price, required deposit and payment schedule before you approve the project. Ask about current financing terms during your estimate.",
  },
  {
    q: "Will financing affect the quality or warranty of my paint job?",
    a: "No. The preparation, products and warranty on your project are set in your written estimate, whether you pay directly or use financing. Qualifying painting projects include a five-year written workmanship warranty, subject to the coverage, exclusions and conditions in the signed estimate or warranty document.",
  },
]

const benefits = [
  {
    icon: CalendarClock,
    title: "Third-Party Financing",
    description: "Financing options may be available through a third-party provider, so you can ask about paying over time.",
  },
  {
    icon: CreditCard,
    title: "Terms Set by the Provider",
    description: "Financing options may be available through a third-party provider. Availability, approval, loan amount, APR and repayment terms depend on the applicant and provider. Ask for current terms during your estimate.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Written Payment Terms",
    description: "Your written estimate states the scope, total price, deposit and payment schedule before you approve the project.",
  },
]

const steps = [
  {
    icon: FileText,
    title: "Request My Free Estimate",
    description: "We visit your home, assess the project, and provide a detailed, itemized quote with no hidden fees.",
  },
  {
    icon: CreditCard,
    title: "Ask About Financing",
    description: "If financing is available for your project, you apply with the third-party provider, which decides approval, amount, APR and repayment terms.",
  },
  {
    icon: Paintbrush,
    title: "We Get to Work",
    description: "Once you approve the written estimate, we schedule your project with the same preparation and finish whether you pay directly or finance.",
  },
]

export default function PaintingFinancingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm mb-6">
              <CreditCard className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Financing options for Houston homeowners</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Painting Financing in <span className="text-primary">Houston, Katy &amp; Cypress</span>
            </h1>
            <p className="text-xl font-semibold text-secondary mb-4">Ask About Paying Over Time.</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty mb-8">
              Financing options may be available through a third-party provider. Availability, approval, loan amount,
              APR and repayment terms depend on the applicant and provider. Ask for current terms during your free
              estimate; your written estimate states the price and payment schedule before you approve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/painting-estimate-houston"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-8 py-4 font-semibold text-secondary-foreground text-lg shadow-lg transition-colors hover:bg-secondary/90"
              >
                Request My Free Estimate
              </a>
              <a
                href={PHONE_HREF}
                aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-8 py-4 font-semibold text-primary text-lg transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Why Finance Your Painting Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                What to know before you ask about financing.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="bg-card rounded-xl border border-border p-6 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">How Financing Works</h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
                From estimate to finished project.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <div key={s.title} className="relative bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <s.icon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-primary-foreground/40">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality assurance strip */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {["Same premium prep on every job", "Sherwin-Williams & Benjamin Moore", "5-year workmanship warranty (qualifying projects)", "Insured · proof on request"].map(
                (point) => (
                  <div key={point} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm">{point}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={financingFaqs}
          title="Painting Financing FAQs"
          description="Common questions about financing your Houston painting project."
        />

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-secondary text-secondary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg opacity-90 mb-8 text-pretty">
              Get a free, no-obligation written estimate and ask whether third-party financing is available for your
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/painting-estimate-houston"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground text-lg shadow-lg transition-colors hover:bg-primary/90"
              >
                Request My Free Estimate
              </a>
              <a
                href={PHONE_HREF}
                aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-secondary-foreground px-8 py-4 font-semibold text-secondary-foreground text-lg transition-colors hover:bg-secondary-foreground hover:text-secondary"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
