import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/trust-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Shield, Phone, Mail, FileText } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "5-Year Painting Warranty — Houston Superior Painting",
  description: "Our comprehensive 5-year warranty covers peeling, blistering, fading, and workmanship defects. Learn exactly what's covered and how to file a claim.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/warranty",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "5-Year Painting Warranty — Houston Superior Painting",
    description: "Our comprehensive 5-year warranty covers peeling, blistering, fading, and workmanship defects. Learn exactly what's covered and how to file a claim.",
    url: "https://houstonsuperiorpainting.com/warranty",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

const covered = [
  "Peeling or flaking paint due to improper adhesion",
  "Blistering caused by moisture trapped during application",
  "Fading beyond normal weathering (exterior)",
  "Cracking or checking in the paint film",
  "Color inconsistency or visible brush/roller marks",
  "Caulk failure at joints we sealed",
  "Wood rot repairs performed by our team",
  "Primer failure or bleed-through",
]

const notCovered = [
  "Damage from impact, abuse, or vandalism",
  "Damage from pressure washing by others",
  "Normal weathering and gradual fading over time",
  "Mildew or algae growth (maintenance issue)",
  "Structural movement causing cracks",
  "Issues with surfaces we recommended replacing",
  "Work performed by other contractors after our project",
  "Failure to allow adequate cure time before cleaning",
]

export default function WarrantyPage() {
  return (
    <>
      <TrustBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Our 5-Year Written Workmanship Warranty
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Houston Superior Painting backs qualifying painting projects with a 5-Year Written Workmanship Warranty. Complete warranty terms are included in the customer's approved estimate and project documents.
            </p>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* What's Covered */}
              <Card className="border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    What's Covered
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {covered.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* What's Not Covered */}
              <Card className="border-destructive/20">
                <CardHeader className="bg-destructive/5">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                      <X className="h-5 w-5 text-destructive" />
                    </div>
                    What's Not Covered
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {notCovered.map((item) => (
                      <li key={item} className="flex gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Warranty Terms */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Warranty Terms & Conditions
            </h2>
            
            <Card className="bg-card">
              <CardContent className="p-8 prose prose-zinc max-w-none">
                <h3 className="text-xl font-semibold text-foreground mb-4">Coverage Period</h3>
                <p className="text-muted-foreground mb-6">
                  Our warranty begins on the date of project completion and extends for five (5) full years.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Warranty Coverage by Service</h3>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li><strong>Interior Painting:</strong> 5 years on workmanship and materials</li>
                  <li><strong>Exterior Painting:</strong> 5 years on workmanship; paint manufacturer warranty on materials</li>
                  <li><strong>Cabinet Refinishing:</strong> 5 years on finish durability and adhesion</li>
                  <li><strong>Drywall Repair:</strong> 5 years on repairs; painting warranty applies to painted surfaces</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  Garage floor coating warranties are provided separately by Houston Superior Epoxy. Visit{" "}
                  <a href="https://houstonsuperiorepoxy.com" className="underline">https://houstonsuperiorepoxy.com</a> for current system and warranty information.
                </p>
                <p className="text-muted-foreground mb-6">
                  Paint and coating products also carry their own manufacturer warranties, which are separate from our workmanship warranty.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">Conditions for Warranty Coverage</h3>
                <p className="text-muted-foreground mb-4">
                  To maintain warranty coverage, homeowners must:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Allow painted surfaces to cure fully (30 days) before washing or cleaning</li>
                  <li>Maintain normal home conditions (climate control, ventilation)</li>
                  <li>Report any issues within 30 days of discovery</li>
                  <li>Provide reasonable access for inspection and repairs</li>
                  <li>Not alter or repair the painted surfaces themselves or hire others to do so</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-4">Sample Warranty Language</h3>
                <div className="bg-muted/50 p-6 rounded-lg border border-border text-sm text-muted-foreground italic">
                  <p>
                    "Houston Superior Painting LLC warrants all labor and materials provided under this contract against defects in workmanship for a period of five (5) years from the date of substantial completion. Should any defect covered by this warranty appear during the warranty period, Houston Superior Painting LLC will, at its sole discretion, repair or repaint the affected area at no charge to the homeowner. This warranty does not cover damage caused by acts of nature, normal wear and tear, improper maintenance, or alterations made by parties other than Houston Superior Painting LLC."
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  This is sample language for reference. The warranty terms in your signed estimate and project documents control.
                  For insurance documentation, see <Link href="/insurance-and-warranty" className="underline">insurance and warranty</Link>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to File a Claim */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              How to File a Warranty Claim
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Call, email, or text us with a description of the issue and photos if possible.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Inspection</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll schedule an inspection within 7 business days to assess the issue.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Resolution</h3>
                  <p className="text-sm text-muted-foreground">
                    If covered, we'll repair or repaint the affected area at no cost to you.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <a href="tel:+13465945960" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (346) 594-5960
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@houstonsuperiorpainting.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Ready for a Painting Project You Can Trust?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get a free estimate and see why Houston homeowners choose our 5-year warranty protection.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/painting-estimate-houston">
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
