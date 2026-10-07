import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BUSINESS, PHONE_HREF, PRICES_2026, SMS_HREF, SERVICE_AREAS, serviceHref } from "@/lib/business";

const PRICE_BY_SLUG: Record<string, string> = {
  "interior-painting-houston-tx": `${PRICES_2026.interiorPerSqFt}/sq ft`,
  "exterior-painting-houston-tx": PRICES_2026.exteriorPerHome,
  "cabinet-refinishing-houston-tx": PRICES_2026.cabinetsPerKitchen,
};

const AREAS = SERVICE_AREAS.filter((a) =>
  ["painters-houston-tx", "painters-katy-tx", "painters-cypress-tx", "painters-sugar-land-tx", "painters-the-woodlands-tx", "painters-pearland-tx", "painters-missouri-city-tx", "painters-richmond-tx", "painters-fulshear-tx", "painters-memorial-tx", "painters-the-heights-tx", "painters-magnolia-tx"].includes(a.slug),
);

export const metadata: Metadata = {
  title: "Painting Company Near Me | Houston Superior Painting",
  description:
    "Looking for a painting company near you in Houston, Katy or Cypress? Insured, 5-year written warranty, free itemized estimates. Call (346) 594-5960.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/painting-company-near-me",
  },
  openGraph: {
    title: "Painting Company Near Me | Houston Superior Painting",
    description:
      "Local painting company serving Houston, Katy, Cypress, Sugar Land and nearby. Free estimates. (346) 594-5960.",
    url: "https://houstonsuperiorpainting.com/painting-company-near-me",
    type: "website",
    images: [{ url: "/images/og/og-interior-painting.jpg", width: 1200, height: 630 }],
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.9012;-95.6293",
    ICBM: "29.9012, -95.6293",
  },
};

const faqs = [
  { q: "What painting services do you offer near me?", a: "Interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, limewash and brick painting, stucco painting and repair, wood rot repair, wallpaper removal, Venetian plaster, load-bearing wall removal and commercial painting, across Greater Houston. Garage floor epoxy is offered through our separate epoxy brand at houstonsuperiorepoxy.com." },
  { q: "Are you insured?", a: `Yes. Houston Superior Painting carries ${BUSINESS.trust.liabilityCoverage} in general liability insurance plus workers' comp, and we provide a certificate of insurance on request. Texas does not issue a state license for residential painting contractors, so insurance is the credential to check.` },
  { q: "How fast can you start a project?", a: "Start dates depend on the season and the size of the job. We give you a proposed start date with the estimate and confirm it in writing." },
  { q: "Do you provide free estimates?", a: "Yes. Estimates are free and written, with itemized costs, the products to be used, the expected timeline and the warranty terms." },
  { q: "How does payment work?", a: "Estimates are free and we don't collect any money until you approve the written estimate. After you approve, we collect a down payment to schedule the job, and the balance is due after the final walkthrough." },
  { q: "Do you offer warranties?", a: "Yes. Every painting project, interior, exterior and cabinet refinishing, carries our 5-year written workmanship warranty." },
  { q: "What areas do you serve?", a: "Greater Houston, including Houston, Katy, Cypress, Sugar Land, The Woodlands, Pearland, Missouri City, Richmond, Fulshear, Rosenberg, Bellaire, Memorial, The Heights, River Oaks, the Energy Corridor and Magnolia." },
  { q: "Can I see examples of your work?", a: "Yes. Our projects page has photos of completed jobs, including a whole-home interior in Memorial, an exterior in River Oaks and a kitchen cabinet refinish in West University." },
];

export default function PaintingCompanyNearMe() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://houstonsuperiorpainting.com/#organization",
                "areaServed": ["Houston", "Katy", "Cypress", "Sugar Land", "The Woodlands", "Pearland", "Missouri City", "Richmond", "Fulshear", "Rosenberg", "Bellaire", "Memorial", "The Heights"],
              },
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

      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Painting Company Near Me: Local Painters in Greater Houston
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            Houston Superior Painting is a residential painting company founded in 2019 and headquartered in Cypress, TX, serving Houston, Katy, Sugar Land, The Woodlands and nearby communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Call {BUSINESS.phone}
            </a>
            <Link href="/painting-estimate-houston" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">
            Houston Superior Painting is a local painting company serving Houston, Katy, Cypress, Sugar Land, The Woodlands and surrounding areas. Founded in 2019 by Juan Serra, we offer interior painting ({PRICES_2026.interiorPerSqFt}/sq ft), exterior painting ({PRICES_2026.exteriorPerHome}), cabinet refinishing ({PRICES_2026.cabinetsPerKitchen} per kitchen), drywall repair and more. Insured with {BUSINESS.trust.liabilityCoverage} general liability plus workers&apos; comp, with a 5-year written workmanship warranty. Call{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a> for a free estimate.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">What You Get With Houston Superior Painting</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Insured", desc: `${BUSINESS.trust.liabilityCoverage} general liability insurance plus workers' comp. Certificate of insurance on request.` },
              { title: "5-Year Written Warranty", desc: "A written 5-year workmanship warranty on interior, exterior and cabinet work." },
              { title: BUSINESS.paymentPolicy.short, desc: BUSINESS.paymentPolicy.sentence },
              { title: "Sherwin-Williams and Benjamin Moore", desc: "We use Sherwin-Williams and Benjamin Moore paints, matched to the surface and exposure." },
              { title: "Itemized Written Estimates", desc: "Each surface, the prep, the products and the number of coats are listed, so you can see what you are paying for." },
              { title: "Local Cypress Business", desc: "Founded in 2019 by Juan Serra and headquartered in Cypress, TX." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">Painting Services Near You</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS.services.map((svc) => (
              <Link key={svc.slug} href={serviceHref(svc.slug)} className="flex items-center justify-between bg-card border border-border rounded-lg p-4 hover:border-primary hover:text-primary transition-colors">
                <span className="font-medium">{svc.name}</span>
                {PRICE_BY_SLUG[svc.slug] && <span className="text-sm text-muted-foreground">{PRICE_BY_SLUG[svc.slug]}</span>}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Other services are priced after an on-site look. See the <Link href="/houston-painting-cost-guide" className="text-primary underline">Houston painting cost guide</Link> for more ranges.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">Areas We Serve Near You</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {AREAS.map((area) => (
              <Link key={area.slug} href={`/${area.slug}`} className="block bg-card border border-border rounded-lg p-3 text-center font-medium hover:border-primary hover:text-primary transition-colors text-sm">
                {area.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/service-areas" className="text-primary font-semibold hover:underline">All service areas &rarr;</Link>
          </p>
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">How to Choose the Right Painting Company Near You</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Read Recent Reviews", desc: "Read the most recent reviews, not just the average, to see the quality of current work and how problems were handled." },
              { step: "2", title: "Verify Insurance Coverage", desc: "Ask for a certificate of insurance showing general liability and workers' comp. A legitimate company can provide it quickly." },
              { step: "3", title: "Compare Written Estimates", desc: "Compare itemized quotes, not just totals. Look for product specifications, prep details and warranty terms." },
              { step: "4", title: "Ask Who Will Be On Site", desc: "Ask who will do the work, who supervises it, and who you call if something needs fixing." },
              { step: "5", title: "Look at Completed Work", desc: "Ask for photos of finished projects similar to yours, or references you can call." },
              { step: "6", title: "Read the Contract", desc: "The contract should cover scope, products, timeline, payment schedule, warranty, and what happens if you are not satisfied." },
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
              Read our full guide: Questions to Ask Before Hiring Painters &rarr;
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
          <p className="mt-6 text-center">
            <Link href="/projects" className="text-primary font-semibold hover:underline">See completed projects &rarr;</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Get a Free Written Estimate</h2>
          <p className="text-lg opacity-90 mb-8">{BUSINESS.paymentPolicy.short}: nothing is due until you approve the written estimate. 5-year written workmanship warranty.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/painting-estimate-houston" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Request an Estimate
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Call {BUSINESS.phone}
            </a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Text Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
