"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Star, Phone, Loader2, ShieldCheck } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

const WEB3FORMS_ACCESS_KEY = "352cc560-36e5-4761-b857-cecb95368b17"

export function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", project: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const data = new FormData()
      data.append("access_key", WEB3FORMS_ACCESS_KEY)
      data.append("subject", `New Hero Quick Estimate Request from ${form.name}`)
      data.append("from_name", "Houston Superior Painting Website")
      data.append("name", form.name)
      data.append("phone", form.phone)
      data.append("project", form.project)

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      const result = await res.json()

      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.message || "Something went wrong. Please call us instead.")
      }
    } catch {
      setError("Something went wrong. Please call us instead.")
    }

    setIsSubmitting(false)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Rated 4.9/5 by 200+ Houston homeowners</span>
            </div>

            <h1 className="hero-h1 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              House Painters in{" "}
              <span className="text-primary">Houston, Katy &amp; Cypress</span> Who Prep It Right
            </h1>

            {/* Subheadline */}
            <p className="text-xl font-semibold text-secondary">
              Old-School Preparation. Premium Long-Lasting Results.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Most paint jobs fail because of skipped prep, not cheap paint. We wash, sand, prime, caulk,
              and mask every surface before a single coat goes on &mdash; so your interior, exterior, and
              cabinets stay beautiful for years longer in Houston&apos;s heat and humidity.
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4">
              {["Fully Insured", "5-Year Exterior Warranty", "No Upfront Payment"].map((point) => (
                <div key={point} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
                asChild
              >
                <a href={PHONE_HREF} aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phone}
                </a>
              </Button>
            </div>
          </div>

          {/* Inline Quick Estimate Form */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Thank you!</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We received your request and will reach out within 24 hours. Need it sooner? Call us at{" "}
                    <a href={PHONE_HREF} className="text-primary font-semibold hover:underline">
                      {BUSINESS.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <h2 className="font-serif text-2xl font-bold text-foreground">Get Your Free Estimate</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      No upfront payment. Most quotes back within 24 hours.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="hero-name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input
                        id="hero-name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="hero-phone" className="text-sm font-medium text-foreground">
                        Phone
                      </label>
                      <Input
                        id="hero-phone"
                        type="tel"
                        placeholder="(346) 594-5960"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="hero-project" className="text-sm font-medium text-foreground">
                        What do you need painted?
                      </label>
                      <Input
                        id="hero-project"
                        placeholder="e.g. Interior, exterior, cabinets..."
                        value={form.project}
                        onChange={(e) => setForm({ ...form, project: e.target.value })}
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-destructive">{error}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Get My Free Estimate"
                      )}
                    </Button>

                    <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      Fully insured. We never share your info.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
