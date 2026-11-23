import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/trust-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Shield, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { BUSINESS, MAIL_HREF, PHONE_HREF } from "@/lib/business"

// Warranty summary (owner brief 2026-10-25, phase 4). Wording comes from
// BUSINESS.warranty. The site does not describe the warranty as transferable,
// covering materials, manufacturer defects, normal fading, moisture or substrate
// failure, wood repairs, or every touch-up: no signed warranty document in the
// repository confirms those terms. Claim inspection within 7 business days:
// owner, 2026-10-11 (OWNER_VERIFICATION_REQUIRED.md §13).

const W = BUSINESS.warranty
const TITLE = "5-Year Workmanship Warranty | Houston Superior Painting"
const DESCRIPTION =
  "Qualifying painting projects include a five-year written workmanship warranty. What the summary means, what it excludes, and how to report an issue."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://houstonsuperiorpainting.com/warranty" },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/warranty",
    siteName: BUSINESS.name,
    type: "website",
  },
}

// Workmanship issues of the kind the warranty is for. The signed document lists
// the actual coverage; this is a plain-language summary, not a contract.
const workmanship = [
  "Peeling or flaking caused by how our crew prepared or applied the paint",
  "Visible application defects such as roller or brush marks left by our crew",
  "Caulk we applied that separates because of how it was applied",
]

const notCovered = [
  "Damage from impact, abuse or vandalism",
  "Normal weathering and gradual fading over time",
  "Moisture intrusion, leaks, or substrate and structural movement",
  "Mildew or algae growth (a maintenance issue)",
  "Paint or coating product defects, which fall under any manufacturer warranty, not ours",
  "Surfaces we recommended repairing or replacing that were not repaired",
  "Work by other contractors after our project",
  "Garage-floor coatings (see below)",
]

export default function WarrantyPage() {
  return (
    <>
      <TrustBar />
      <Header />
      <main>
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 opacity-90" aria-hidden="true" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our 5-Year Written Workmanship Warranty</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{W.summary}</p>
          </div>
        </section>

        <section className="py-10 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="rounded-lg border border-border bg-muted/40 p-5 text-foreground">
              <strong>{W.controlsNote}</strong>
            </p>
          </div>
        </section>

        <section className="pb-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    What a workmanship warranty is for
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {workmanship.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Exact coverage, exclusions and conditions are in your signed estimate or warranty document.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader className="bg-destructive/5">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                      <X className="h-5 w-5 text-destructive" aria-hidden="true" />
                    </span>
                    Generally not covered
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {notCovered.map((item) => (
                      <li key={item} className="flex gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-muted-foreground">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center">Warranty basics</h2>
            <p>
              <strong className="text-foreground">Which projects qualify:</strong> qualifying painting projects, as stated in
              your signed estimate or warranty document. Repairs, carpentry and temporary fixes are covered only if that
              document says so.
            </p>
            <p>
              <strong className="text-foreground">Products:</strong> paint and coating products may carry their own
              manufacturer warranties, which are separate from our workmanship warranty.
            </p>
            <p>
              <strong className="text-foreground">Garage floors:</strong> {BUSINESS.sisterBrand.sentence} Visit{" "}
              <a href={BUSINESS.sisterBrand.url} className="underline">
                houstonsuperiorepoxy.com
              </a>
              .
            </p>
            <p>
              <strong className="text-foreground">Insurance:</strong> {BUSINESS.insuranceProof.en}{" "}
              <Link href="/insurance-and-warranty" className="underline">
                Insurance and warranty
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">How to Report a Warranty Issue</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { n: 1, t: "Contact us", d: "Call, email or text us with a description of the issue and photos if possible." },
                { n: 2, t: "Inspection", d: "We schedule an inspection within 7 business days to assess the issue." },
                { n: 3, t: "Resolution", d: "If the issue is covered under your signed warranty terms, we repair or repaint the affected area as those terms state." },
              ].map((s) => (
                <Card key={s.n} className="bg-card border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {s.n}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{s.t}</h3>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <a href={PHONE_HREF} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {BUSINESS.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={MAIL_HREF} className="flex items-center gap-2">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Request My Free Estimate</h2>
            <p className="text-xl opacity-90 mb-8">{BUSINESS.paymentPolicy.sentence}</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/painting-estimate-houston">Request My Free Estimate</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
