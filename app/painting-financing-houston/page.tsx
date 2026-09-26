import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { CreditCard, CalendarClock, ShieldCheck, CheckCircle, Phone, FileText, Paintbrush } from "lucide-react"

export const metadata: Metadata = {
  title: "Painting Financing in Houston, TX | Paint Now, Pay Over Time",
  description:
    "Flexible painting financing for Houston, Katy & Cypress homeowners. Affordable monthly payments on interior, exterior & cabinet projects. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/painting-financing-houston",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Painting Financing in Houston, TX | Houston Superior Painting",
    description:
      "Paint now and pay over time with flexible monthly payment plans for Houston homeowners. Apply in minutes.",
    type: "website",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/painting-financing-houston#service",
  name: "Painting Financing in Houston, TX",
  description:
    "Flexible financing and monthly payment plans for interior painting, exterior painting, and cabinet refinishing projects across the Greater Houston area.",
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
    a: "Yes. Houston Superior Painting offers flexible financing so you can complete your interior, exterior, or cabinet painting project now and pay over time with affordable monthly payments. Financing is available for homeowners throughout Houston, Katy, Cypress, Sugar Land, and surrounding areas.",
  },
  {
    q: "How do I apply for painting financing?",
    a: "Applying is simple. After your free estimate, we'll walk you through a quick application that takes just a few minutes. Many homeowners receive a decision the same day, and once approved you can schedule your project right away.",
  },
  {
    q: "What types of projects can I finance?",
    a: "You can finance any of our services, including full interior painting, exterior painting, cabinet refinishing, drywall repair, and larger remodeling projects. Financing is especially popular for whole-home repaints and exterior projects.",
  },
  {
    q: "Is there a payment due before work begins?",
    a: "Nothing is due before you approve the written estimate, and the estimate is free. After you approve, a down payment schedules the job and the balance is due after the final walkthrough. Financing lets you spread the cost over time; ask about terms at your estimate.",
  },
  {
    q: "Will financing affect the quality or warranty of my paint job?",
    a: "Not at all. Every project receives the same old-school preparation, premium Sherwin-Williams and Benjamin Moore products, and 5-year exterior workmanship warranty — whether you pay in full or finance over time.",
  },
]

const benefits = [
  {
    icon: CalendarClock,
    title: "Affordable Monthly Payments",
    description: "Break your project into manageable monthly payments instead of one large lump sum.",
  },
  {
    icon: CreditCard,
    title: "Quick, Simple Application",
    description: "Apply in just a few minutes after your free estimate — many homeowners get a same-day decision.",
  },
  {
    icon: ShieldCheck,
    title: "No Money Until You Approve",
    description: "Financing lets you spread the cost over time; ask about terms at your estimate.",
  },
]

const steps = [
  {
    icon: FileText,
    title: "Get Your Free Estimate",
    description: "We visit your home, assess the project, and provide a detailed, itemized quote with no hidden fees.",
  },
  {
    icon: CreditCard,
    title: "Apply for Financing",
    description: "Complete a quick application in minutes and choose the monthly payment plan that works best for you.",
  },
  {
    icon: Paintbrush,
    title: "We Get to Work",
    description: "Once approved, we schedule your project and deliver the same premium prep and finish — paid over time.",
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
              <span className="text-sm text-muted-foreground">Flexible financing for Houston homeowners</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Painting Financing in <span className="text-primary">Houston, Katy &amp; Cypress</span>
            </h1>
            <p className="text-xl font-semibold text-secondary mb-4">Paint Now, Pay Over Time.</p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty mb-8">
              Don&apos;t put off the project you&apos;ve been planning. With flexible financing, you can repaint your
              home today and pay in affordable monthly installments &mdash; with a free estimate, nothing due until you approve it,
              and the same premium quality on every job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-8 py-4 font-semibold text-secondary-foreground text-lg shadow-lg transition-colors hover:bg-secondary/90"
              >
                Get a Free Estimate
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
                Financing makes it easy to invest in your home now while keeping your monthly budget comfortable.
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
                From estimate to finished project in three simple steps.
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
              {["Same premium prep on every job", "Sherwin-Williams & Benjamin Moore", "5-year exterior warranty", "Fully insured"].map(
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
              Get a free, no-obligation estimate and find out how affordable your dream paint job can be with monthly
              financing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground text-lg shadow-lg transition-colors hover:bg-primary/90"
              >
                Get My Free Estimate
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
