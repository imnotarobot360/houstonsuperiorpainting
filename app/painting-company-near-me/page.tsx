import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business";

export const metadata: Metadata = {
  title: "Painting Company Near Me | Houston Superior Painting",
  description:
    "Looking for a painting company near me in Houston, Katy or Cypress? Local experts ready to help. 5-star Google reviews, free estimates, 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/painting-company-near-me",
  },
  openGraph: {
    title: "Painting Company Near Me | Houston Superior Painting",
    description:
      "Trusted local painting company serving Houston, Katy, Cypress, Sugar Land & beyond. Free estimates. (346) 594-5960.",
    url: "https://houstonsuperiorpainting.com/painting-company-near-me",
    type: "website",
    images: [{ url: "/images/og-interior-painting.jpg", width: 1200, height: 630 }],
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.9012;-95.6293",
    ICBM: "29.9012, -95.6293",
  },
};

const faqs = [
  { q: "What painting services do you offer near me?", a: "We offer interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, limewash and German smear, garage floor epoxy, load-bearing wall removal, and commercial painting. All services are available across the Greater Houston area." },
  { q: "Are you insured?", a: "Yes. Houston Superior Painting carries $2M general liability insurance. We are bonded for your protection and provide certificates of insurance upon request. Note that Texas does not issue a state license for residential painting contractors, so insurance is the credential that actually matters." },
  { q: "How fast can you start a project?", a: "Most projects can be scheduled within 1-2 weeks of the estimate. Emergency or small projects can often be accommodated within a few days. We always confirm start dates in writing." },
  { q: "Do you provide free estimates?", a: "Absolutely. We provide free, detailed, written estimates that include itemized costs, product specifications, timeline, and warranty terms. No hidden fees ever." },
  { q: "What makes you different from other painting companies?", a: "Six things: (1) Owner Juan Serra personally oversees every project. (2) Background-checked, W-2 employees only. (3) Premium Sherwin-Williams and Benjamin Moore products. (4) 5-year exterior warranty. (5) 4.9/5 Google rating with 200+ reviews. (6) Founded in 2019 in Cypress, TX \u2014 we live where we work." },
  { q: "Do you offer warranties?", a: "Yes. Every painting project carries a written 5-year warranty — exterior, interior, and cabinet refinishing alike. It covers peeling, blistering, chipping, and adhesion failure under normal conditions." },
  { q: "What areas do you serve?", a: "We serve the entire Greater Houston area: Houston, Katy, Cypress, Sugar Land, The Woodlands, Pearland, Missouri City, Richmond, Fulshear, Rosenberg, Bellaire, Memorial, The Heights, River Oaks, Energy Corridor, and all surrounding communities within 45 miles." },
  { q: "Can I see examples of your work?", a: "Yes! Visit our portfolio page or check our Google Business Profile for 150+ photos of completed projects across Houston, Katy, and Cypress. We also bring a physical portfolio to every estimate appointment." },
];

export default function PaintingCompanyNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Painting Company Near Me", "item": "https://houstonsuperiorpainting.com/painting-company-near-me" },
                ],
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
              },
              { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
            ],
          }),
        }}
      />

      {/* Quick Answer */}
      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">
            Houston Superior Painting is a top-rated local painting company serving Houston, Katy, Cypress, Sugar Land, The Woodlands, and all surrounding areas. Founded in 2019 by Juan Serra, we offer interior painting ($2.50-$4.50/sqft), exterior painting ($3,500-$12,000), cabinet refinishing, drywall repair, and more. 4.9/5 Google rating, 200+ reviews, 5-year exterior warranty. Call{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a> for a free estimate.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Painting Company Near Me &ndash; Trusted Local Painters
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            Looking for a reliable painting company near you? Houston Superior Painting has completed 1,200+ projects across the Greater Houston area since 2019. Owner-operated, background-checked team, premium products only.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose a Local Painting Company */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">Why Choose Houston Superior Painting?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Owner on Every Job", desc: "Juan Serra personally oversees every project from estimate through final walkthrough. You never deal with a random crew." },
              { title: "Background-Checked W-2 Team", desc: "Our painters are employees, not subcontractors. All background-checked and drug-tested for your peace of mind." },
              { title: "Premium Products Only", desc: "We use Sherwin-Williams Duration, SuperPaint, and Emerald lines plus Benjamin Moore Regal and Aura. No cheap paint, ever." },
              { title: "5-Year Written Warranty", desc: "We stand behind our work with a written 5-year warranty on every painting project — exterior, interior, and cabinets." },
              { title: "4.9/5 Google Rating", desc: "200+ verified Google reviews averaging 4.9 stars. Our reputation is built on consistent, high-quality results." },
              { title: "Local Cypress Business", desc: "Founded in 2019 and headquartered in Cypress, TX. We live and work in the communities we serve." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">Painting Services Near You</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Interior Painting", href: "/interior-painting-houston-tx", price: "$2.50\u2013$4.50/sqft" },
              { label: "Exterior Painting", href: "/exterior-painting-houston-tx", price: "$3,500\u2013$12,000" },
              { label: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx", price: "$3,000\u2013$8,000" },
              { label: "Drywall Repair", href: "/drywall-repair-houston-tx", price: "$150\u2013$1,500" },
              { label: "Pressure Washing", href: "/pressure-washing-houston-tx", price: "$250\u2013$900" },
              { label: "Limewash & German Smear", href: "/limewash-german-smear-houston-tx", price: "$3\u2013$8/sqft" },
              { label: "Garage Floor Epoxy", href: "https://houstonsuperiorepoxy.com/", price: "$1,800\u2013$5,000" },
              { label: "Commercial Painting", href: "/commercial-painting-houston-tx", price: "Custom quote" },
              { label: "Load-Bearing Wall Removal", href: "/load-bearing-wall-removal-houston-tx", price: "$2,500\u2013$10,000" },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} className="flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:border-primary hover:text-primary transition-colors">
                <span className="font-medium">{svc.label}</span>
                <span className="text-sm text-muted-foreground">{svc.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">Areas We Serve Near You</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: "Houston", href: "/painters-houston-tx" },
              { name: "Katy", href: "/painters-katy-tx" },
              { name: "Cypress", href: "/painters-cypress-tx" },
              { name: "Sugar Land", href: "/painters-sugar-land-tx" },
              { name: "The Woodlands", href: "/painters-the-woodlands-tx" },
              { name: "Pearland", href: "/painters-pearland-tx" },
              { name: "Missouri City", href: "/painters-missouri-city-tx" },
              { name: "Richmond", href: "/painters-richmond-tx" },
              { name: "Fulshear", href: "/painters-fulshear-tx" },
              { name: "Memorial", href: "/painters-memorial-tx" },
              { name: "The Heights", href: "/painters-the-heights-tx" },
              { name: "Energy Corridor", href: "/painters-energy-corridor-tx" },
            ].map((area) => (
              <Link key={area.href} href={area.href} className="block bg-card border border-border rounded-lg p-3 text-center font-medium hover:border-primary hover:text-primary transition-colors text-sm">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Hire the Right Painter */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">How to Choose the Right Painting Company Near You</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Check Google Reviews", desc: "Look for companies with 50+ reviews and a 4.5+ average. Read the most recent reviews to see current quality." },
              { step: "2", title: "Verify Insurance Coverage", desc: "Ask for a certificate of insurance. A legitimate company will provide it immediately. Minimum $1M liability." },
              { step: "3", title: "Get 3 Written Estimates", desc: "Compare itemized quotes, not just totals. Look for product specifications, prep details, and warranty terms." },
              { step: "4", title: "Ask About Their Team", desc: "Do they use W-2 employees or subcontractors? Employee-based companies deliver more consistent quality." },
              { step: "5", title: "Request References", desc: "A confident company will share recent references in your neighborhood. Ask to see the work in person if possible." },
              { step: "6", title: "Read the Contract", desc: "The contract should detail scope, products, timeline, payment schedule, warranty, and what happens if you are not satisfied." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{item.step}</div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/questions-to-ask-before-hiring-painters" className="text-primary font-semibold hover:underline">
              Read our full guide: 15 Questions to Ask Before Hiring Painters &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium hover:bg-muted/50 transition-colors">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">&#9660;</span>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Your Local Painting Company Is One Call Away</h2>
          <p className="text-lg opacity-90 mb-8">Free estimates, no hidden fees, 5-year warranty. Let us show you why 200+ Houston homeowners have given us 5 stars.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Call {BUSINESS.phone}
            </a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Text Us
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Free Estimate Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
