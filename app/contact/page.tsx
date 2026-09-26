"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle, Navigation, ArrowRight } from "lucide-react"
import { InsightPaintWidget } from "@/components/insightpaint-widget"
import { QuoteForm } from "@/components/quote-form"
import Link from "next/link"
import { BUSINESS, OFFICE_PAGES, PHONE_HREF, MAIL_HREF, officeForPage, officeMapsUrl } from "@/lib/business"

const ESTIMATE_PATH = "/painting-estimate-houston"

// HQ first, matching the footer Locations list.
const OFFICES = OFFICE_PAGES.flatMap((page) => {
  const office = officeForPage(page.slug)
  return office ? [{ page, office }] : []
})

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">Contact Us</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
            Let&apos;s Discuss Your Painting Project
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your space? Send us photos for a free quote below or reach out directly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ESTIMATE_PATH}
              className="inline-flex items-center justify-center gap-2 font-manrope font-semibold bg-secondary text-secondary-foreground px-7 py-3.5 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Get a free painting estimate in Houston
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 font-manrope font-semibold border border-soft-white/30 text-soft-white px-7 py-3.5 rounded-md hover:bg-soft-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Primary: InsightPaint Scheduler Embed */}
            <div>
              <Card className="bg-card border-border overflow-hidden">
                <CardHeader className="bg-muted border-b border-border">
                  <CardTitle className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    Send Photos for a Free Quote
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Upload a few photos of your project — no calls, no waiting.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2">
                  <InsightPaintWidget minHeight={650} className="w-full" />
                </CardContent>
              </Card>

              {/* Trust Points */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { text: "Under 2 minutes" },
                  { text: "No obligation" },
                  { text: "100% Free" }
                ].map((point) => (
                  <div key={point.text} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-foreground">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary: Contact Info & Form */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-gold-deep" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a href={PHONE_HREF} className="text-muted-foreground hover:text-primary transition-colors">
                          {BUSINESS.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-gold-deep" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href={MAIL_HREF} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          {BUSINESS.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-gold-deep" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Hours</p>
                        <div className="text-muted-foreground text-sm">
                          {BUSINESS.hoursSummary.map((h) => (
                            <p key={h.label}>
                              {h.label}: {h.value}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-gold-deep" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Offices</p>
                        <a href="#offices" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          Cypress (HQ), Houston, Katy, Sugar Land &amp; Magnolia
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Native multi-step quote form */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Prefer to answer a few quick questions?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Tell us about your project and we&apos;ll follow up within one business day — or
                  email us at{" "}
                  <a href={MAIL_HREF} className="text-primary hover:underline">
                    {BUSINESS.email}
                  </a>
                </p>
                <QuoteForm source="contact_page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices — rendered from BUSINESS.locations (HQ first) so NAP never drifts from lib/business.ts */}
      <section id="offices" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep mb-3">Our Locations</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
              Our Five Greater Houston Offices
            </h2>
            <p className="text-muted-foreground">
              Every office uses one phone line:{" "}
              <a href={PHONE_HREF} className="text-primary font-medium hover:underline">{BUSINESS.phone}</a>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICES.map(({ page, office }) => {
              const hq = "isHeadquarters" in office && office.isHeadquarters
              return (
                <Card key={office.slug} className={hq ? "bg-primary/5 border-primary/20" : "bg-card border-border"}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${hq ? "bg-primary" : "bg-accent/15"}`}>
                        <MapPin className={`h-5 w-5 ${hq ? "text-primary-foreground" : "text-gold-deep"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg text-foreground">{office.label}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {office.street}
                          <br />
                          {office.city}, {office.state} {office.zip}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                          <a href={PHONE_HREF} className="text-primary hover:text-primary/80 transition-colors font-medium">
                            {BUSINESS.phone}
                          </a>
                          <a
                            href={officeMapsUrl(office)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-medium text-gold-deep hover:text-primary transition-colors"
                          >
                            <Navigation className="h-4 w-4" />
                            Directions
                          </a>
                        </div>
                        <Link
                          href={`/${page.slug}`}
                          className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                        >
                          Painters in {office.city}, TX
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-center text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-1">Hours (all offices)</p>
              {BUSINESS.hoursSummary.map((h) => (
                <p key={h.label}>
                  {h.label}: {h.value}
                </p>
              ))}
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Email</p>
              <a href={MAIL_HREF} className="text-primary hover:underline">{BUSINESS.email}</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
