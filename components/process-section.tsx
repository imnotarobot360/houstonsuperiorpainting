"use client"

import { Phone, ClipboardCheck, FileText, CheckCircle2 } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Call, Text, or Request a Quote",
    description: "Reach us at (346) 594-5960 or book online. We respond within 30 minutes during business hours.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Free On-Site Assessment",
    description: "A certified technician visits your property, measures, evaluates surfaces, and identifies any needed prep work.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Transparent Pricing",
    description: "You receive a detailed, line-item proposal with no hidden fees. Nothing starts until you approve every detail.",
    icon: FileText,
  },
  {
    step: 4,
    title: "Job Done + Guaranteed",
    description: "We complete the work on schedule and back it with our written warranty. If anything isn't perfect, we come back at no charge.",
    icon: CheckCircle2,
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            How It Works: 4 Steps to a{" "}
            <span className="text-primary">Flawless Finish</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line (hidden on mobile, visible on lg) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow h-full flex flex-col">
                {/* Step Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7 text-secondary" />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to get started? It only takes 30 seconds.
          </p>
          <a
            href="tel:+13465945960"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <Phone className="h-5 w-5" />
            Call (346) 594-5960
          </a>
        </div>
      </div>
    </section>
  )
}
