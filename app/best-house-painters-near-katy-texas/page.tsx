import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BUSINESS, PHONE_HREF, PRICES_2026, SMS_HREF, SERVICE_AREAS } from "@/lib/business";

const NEARBY = SERVICE_AREAS.filter((a) =>
  ["painters-katy-tx", "painters-cinco-ranch-tx", "painters-fulshear-tx", "painters-richmond-tx", "painters-sugar-land-tx"].includes(a.slug),
);

export const metadata: Metadata = {
  title: "House Painters Near Katy, TX: How to Choose",
  description:
    "How to choose a house painter near Katy, TX: what to check, what an estimate should include, and 2026 price ranges for interior, exterior and cabinets.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/best-house-painters-near-katy-texas" },
  openGraph: {
    title: "House Painters Near Katy, TX: How to Choose",
    description: "What to check before hiring a house painter near Katy, TX, plus 2026 price ranges. (346) 594-5960.",
    url: "https://houstonsuperiorpainting.com/best-house-painters-near-katy-texas",
    type: "website",
    images: [{ url: "/images/og/og-exterior-painting.jpg", width: 1200, height: 630 }],
  },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
};

const faqs = [
  { q: "How do I choose a house painter near Katy?", a: "Ask for a certificate of insurance (general liability and workers' comp), get a written estimate that lists prep, products and every surface, ask what the written warranty covers and for how long, and check when payment is due. Compare two or three itemized estimates, not just totals." },
  { q: "Do house painters in Texas need a license?", a: "No. Texas does not issue a state license for residential painting contractors, so insurance and a written warranty are the things to verify. Some cities require a registration or permit for certain work, so ask if your project needs one." },
  { q: "How much does house painting cost in Katy TX?", a: `Interior painting typically costs ${PRICES_2026.interiorPerSqFt} per sq ft, or ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting typically runs ${PRICES_2026.exteriorPerHome}. Kitchen cabinet painting typically runs ${PRICES_2026.cabinetsPerKitchen}. Estimates are free and itemized.` },
  { q: "What areas near Katy do you serve?", a: "We serve Katy, including Cinco Ranch, Cross Creek Ranch, Elyson, Cane Island, Firethorne and Tamarron, plus Fulshear, Richmond, Sugar Land and the rest of Greater Houston." },
  { q: "What paint brands do you use?", a: "We use Sherwin-Williams and Benjamin Moore paints, choosing the product line for the surface and exposure." },
  { q: "How long does it take to paint a house in Katy?", a: "A full interior usually takes 3-5 days for a typical home. An exterior usually takes 4-7 days depending on size, siding and prep, and is scheduled around the weather." },
  { q: "Do you offer warranties?", a: "Yes. Interior, exterior and cabinet work all carry our 5-year written workmanship warranty." },
];

export default function BestHousePaintersKatyTexas() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization", "areaServed": { "@type": "City", "name": "Katy", "containedInPlace": { "@type": "State", "name": "Texas" } } },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Katy Painters", "item": "https://houstonsuperiorpainting.com/painters-katy-tx" }, { "@type": "ListItem", "position": 3, "name": "House Painters Near Katy: How to Choose", "item": "https://houstonsuperiorpainting.com/best-house-painters-near-katy-texas" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">House Painters Near Katy, TX: How to Choose</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">What to check before you hire a painter in Katy, Fulshear or Richmond, what a good estimate includes, and what painting typically costs in 2026.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Call {BUSINESS.phone}</a>
            <Link href="/painting-estimate-houston" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">To choose a house painter near Katy, check for liability and workers&apos; comp insurance, a written itemized estimate, a written warranty, and a payment schedule that does not ask for money before you approve the scope. Interior painting typically costs {PRICES_2026.interiorPerSqFt} per sq ft and exterior painting {PRICES_2026.exteriorPerHome}. Houston Superior Painting serves Katy, Cinco Ranch, Fulshear, Richmond and Sugar Land. Call <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a>.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8">What to Check Before You Hire</h2>
          <div className="space-y-4">
            {[
              { title: "Insurance, not a license", desc: "Texas does not license residential painters. Ask for a certificate of insurance showing general liability and workers' comp, so an injury on your property is not your problem." },
              { title: "An itemized written estimate", desc: "It should list each surface, the prep (washing, scraping, caulking, priming), the paint product and sheen, and the number of coats. A one-line price is hard to compare." },
              { title: "A written warranty", desc: "Ask how long it lasts and what it covers, and get it in writing." },
              { title: "When you pay", desc: "Be cautious about paying a large amount before the scope is agreed in writing. A balance due after a final walkthrough gives you leverage to get touch-ups done." },
              { title: "Lead paint in older homes", desc: "Homes built before 1978 may contain lead paint, which federal rules require be disturbed only by an EPA-certified renovation firm. If your home is that old, ask any painter for their certification." },
            ].map(item => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground">More detail: <Link href="/questions-to-ask-before-hiring-painters" className="text-primary underline">questions to ask before hiring painters</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">About Houston Superior Painting</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Houston Superior Painting was founded in 2019 by Juan Serra and is headquartered in Cypress, TX. We carry {BUSINESS.trust.liabilityCoverage} in general liability insurance plus workers&apos; comp, use Sherwin-Williams and Benjamin Moore paints, and give a 5-year written workmanship warranty on interior, exterior and cabinet work.</p>
          <p className="text-muted-foreground leading-relaxed">{BUSINESS.paymentPolicy.sentence} Services: <Link href="/interior-painting-houston-tx" className="text-primary underline">interior painting</Link>, <Link href="/exterior-painting-houston-tx" className="text-primary underline">exterior painting</Link> and <Link href="/cabinet-refinishing-houston-tx" className="text-primary underline">cabinet refinishing</Link>.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">House Painting Price Ranges, 2026</h2>
          <div className="overflow-x-auto pricing-snippet">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-4 font-semibold">Service</th><th className="text-left p-4 font-semibold">Price Range</th><th className="text-left p-4 font-semibold">Typical Timeline</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4">Interior painting (2,500 sq ft home)</td><td className="p-4 font-semibold">{PRICES_2026.fullInterior2500}</td><td className="p-4">3–5 days</td></tr>
                <tr><td className="p-4">Exterior painting</td><td className="p-4 font-semibold">{PRICES_2026.exteriorPerHome}</td><td className="p-4">4–7 days</td></tr>
                <tr><td className="p-4">Kitchen cabinet painting</td><td className="p-4 font-semibold">{PRICES_2026.cabinetsPerKitchen}</td><td className="p-4">5–7 days</td></tr>
                <tr><td className="p-4">Single room</td><td className="p-4 font-semibold">{PRICES_2026.singleRoom}</td><td className="p-4">1 day</td></tr>
                <tr><td className="p-4">Accent wall</td><td className="p-4 font-semibold">{PRICES_2026.accentWall}</td><td className="p-4">A few hours</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">See the <Link href="/houston-painting-cost-guide" className="text-primary underline">Houston painting cost guide</Link> for more sizes.</p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Katy and Nearby Areas</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {NEARBY.map(a => (
              <Link key={a.slug} href={`/${a.slug}`} className="bg-card border border-border rounded-lg px-4 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors">Painters in {a.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">FAQs About Hiring a Painter in Katy</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium hover:bg-muted/50 transition-colors">{faq.q}<span className="ml-4 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">&#9660;</span></summary>
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Get a Free Written Estimate</h2>
          <p className="text-lg opacity-90 mb-8">{BUSINESS.paymentPolicy.short}: nothing is due until you approve the written estimate. 5-year written workmanship warranty.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/painting-estimate-houston" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">Request an Estimate</Link>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Text Us</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
