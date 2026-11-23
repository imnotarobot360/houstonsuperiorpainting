"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageSquare, ShieldCheck } from "lucide-react"

export default function SmsConsentPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!consent) {
      setError("Please check the box to agree to receive text messages.")
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch("/api/sms-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, consent }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
        return
      }
      setStatus("success")
    } catch {
      setError("Network error. Please try again.")
      setStatus("error")
    }
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
            Text Message Program
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
            SMS Consent &amp; Opt-In
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-2xl mx-auto">
            Get project updates by text — estimates, schedule confirmations, invoices, and payment receipts.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  {status === "success" ? (
                    <div className="text-center py-8">
                      <div className="mx-auto w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                        <CheckCircle className="h-7 w-7 text-gold-deep" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-foreground mb-2">You&apos;re opted in</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        Thanks, {name.split(" ")[0] || "there"}. You&apos;ll now receive transactional text messages
                        about your project. Reply <strong>STOP</strong> at any time to opt out, or <strong>HELP</strong>{" "}
                        for help.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
                          Mobile phone number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          placeholder="(346) 594-5960"
                        />
                      </div>

                      <div className="flex items-start gap-3 rounded-md border border-border bg-muted/40 p-4">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-1 h-4 w-4 flex-shrink-0 rounded border-input accent-primary"
                        />
                        <label htmlFor="consent" className="text-sm text-foreground/80 leading-6">
                          I agree to receive transactional text messages from Houston Superior Painting at the number
                          provided, including estimate notifications, schedule confirmations, invoices, and payment
                          receipts. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP
                          for help. Consent is not a condition of purchase.
                        </label>
                      </div>

                      {error && (
                        <p role="alert" className="text-sm font-medium text-destructive">
                          {error}
                        </p>
                      )}

                      <Button type="submit" disabled={status === "submitting"} className="w-full">
                        {status === "submitting" ? "Submitting…" : "Opt in to text messages"}
                      </Button>

                      <p className="text-xs text-muted-foreground leading-5">
                        By submitting this form you agree to our{" "}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        . We do not sell, rent, or share your mobile number or opt-in data with third parties for
                        marketing.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* What to expect */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-gold-deep flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">What you&apos;ll receive</p>
                  <p className="text-sm text-muted-foreground leading-6">
                    Estimate and quote notifications, schedule confirmations and reschedules, invoice and payment-due
                    notices, and payment receipts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-gold-deep flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Your privacy</p>
                  <p className="text-sm text-muted-foreground leading-6">
                    No mobile information or SMS opt-in data is shared with, sold to, or rented to any third parties or
                    affiliates for marketing purposes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-gold-deep flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Opt out anytime</p>
                  <p className="text-sm text-muted-foreground leading-6">
                    Reply STOP to any message to unsubscribe, or HELP for assistance. Message and data rates may apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
