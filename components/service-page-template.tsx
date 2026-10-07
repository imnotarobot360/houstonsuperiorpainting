"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { BeforeAfter } from "@/components/luxury/before-after"
import { RelatedLinks } from "@/components/luxury/related-links"
import { FinishIllustrations, type FinishIllustration } from "@/components/luxury/finish-illustrations"

interface BeforeAfterImage {
  before: string
  after: string
  alt: string
}

interface ServicePageProps {
  title: string
  subtitle: string
  heroDescription: string
  quickAnswer?: string
  sections: {
    title: string
    content: string
  }[]
  features: string[]
  benefits: string[]
  beforeAfterImages: BeforeAfterImage[]
  /**
   * Optional illustrated finish comparisons (digital renderings). Kept
   * separate from beforeAfterImages, which is reserved for photographs of
   * real completed jobs.
   */
  illustrations?: FinishIllustration[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: {
    title: string
    href: string
  }[]
}

export function ServicePageTemplate({
  title,
  subtitle,
  heroDescription,
  quickAnswer,
  sections,
  features,
  benefits,
  beforeAfterImages,
  illustrations,
  faqs,
  relatedServices,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
            {subtitle}
          </p>
          <h1 className="hero-h1 font-display text-4xl md:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
            {title}
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/painting-estimate-houston">Get Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground !bg-transparent !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary" asChild>
              <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (346) 594-5960
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Answer - Speakable Section for AEO */}
      {quickAnswer && (
        <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{quickAnswer}</p>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* Main Content Sections */}
        {sections.map((section, index) => (
          <section key={index} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">
            {section.title}
          </h2>
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </section>
        ))}

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            What&apos;s Included
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 bg-card rounded-xl p-8 border border-border">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Why Choose Houston Superior Painting?
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Before/After Gallery — only rendered when real image pairs exist.
            Previously this always rendered, so a page with a pair pointing at
            missing files (the limewash page) showed a heading above two broken
            images with overlapping alt text. Pass an empty array to omit it. */}
        {beforeAfterImages.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Before &amp; After Results
            </h2>
            <div className="grid gap-8">
              {beforeAfterImages.map((image, index) => (
                <BeforeAfter
                  key={index}
                  beforeSrc={image.before}
                  afterSrc={image.after}
                  beforeAlt={`Before: ${image.alt}`}
                  afterAlt={`After: ${image.alt}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* Illustrated finish comparisons (renderings, clearly labelled as
            such by the component itself). Rendered after the real-work gallery
            so genuine photography always comes first. */}
        {illustrations && illustrations.length > 0 && (
          <FinishIllustrations items={illustrations} />
        )}

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 bg-primary rounded-xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Get a free, no-obligation estimate from Houston&apos;s trusted painting professionals. We&apos;ll assess your project and provide transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Link href="/painting-estimate-houston">
                Schedule Free Estimate
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10">
              <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960">
                <Phone className="h-4 w-4 mr-2" />
                Call (346) 594-5960
              </a>
            </Button>
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <span className="font-medium text-foreground">{service.title}</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Site-wide internal linking block */}
      <RelatedLinks />
    </div>
  )
}
