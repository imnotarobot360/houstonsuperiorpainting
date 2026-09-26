"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { InsightPaintWidget } from "@/components/insightpaint-widget"
import { QuoteForm } from "@/components/quote-form"
import { OfficesBlock } from "@/components/offices-block"

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
                        <a href="tel:+13465945960" className="text-muted-foreground hover:text-primary transition-colors">
                          (346) 594-5960
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
                        <a href="mailto:info@houstonsuperiorpainting.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          info@houstonsuperiorpainting.com
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
                        <p className="text-muted-foreground text-sm">
                          Mon–Fri: 7:00 AM – 7:00 PM<br />
                          Sat: 8:00 AM – 4:00 PM<br />
                          Sun: Closed
                        </p>
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
                        <p className="font-semibold text-foreground">Service Area</p>
                        <p className="text-muted-foreground text-sm">
                          Five offices across Greater Houston
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Native multi-step quote form */}
              <div id="quote" className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Prefer to answer a few quick questions?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Tell us about your project and we&apos;ll follow up within one business day — or
                  email us at{" "}
                  <a href="mailto:info@houstonsuperiorpainting.com" className="text-primary hover:underline">
                    info@houstonsuperiorpainting.com
                  </a>
                </p>
                <QuoteForm source="contact_page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfficesBlock />

      <Footer />
    </main>
  )
}
