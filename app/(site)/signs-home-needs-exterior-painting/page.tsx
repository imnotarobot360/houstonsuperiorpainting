import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PHONE_HREF, SMS_HREF, PRICES_2026 } from "@/lib/business";

export const metadata: Metadata = {
  title: "10 Signs Your Home Needs Exterior Painting in Houston TX",
  description: "Clear warning signs that your Houston home needs exterior painting before storm season. Peeling, fading, chalking, wood rot, and more.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/signs-home-needs-exterior-painting" },
  openGraph: { title: "10 Signs Your Home Needs Exterior Painting", description: "Don’t wait for storm damage. Spot these 10 warning signs before it’s too late.", url: "https://houstonsuperiorpainting.com/signs-home-needs-exterior-painting", type: "article", images: [{ url: "/images/og/og-exterior-painting.jpg", width: 1200, height: 630 }] },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
};

const signs = [
  { title: "Peeling or Flaking Paint", desc: "The most obvious sign. Houston’s humidity causes moisture to get behind paint film, breaking the adhesion bond. Once peeling starts, it accelerates quickly and exposes wood to rot." },
  { title: "Chalking Surface", desc: "Rub your hand on the siding — if white powder comes off, the paint binder has broken down from UV exposure. Houston’s intense sun is the #1 cause of chalking." },
  { title: "Fading or Discoloration", desc: "South and west-facing walls fade fastest in Houston. Uneven fading looks neglected and signals the paint is no longer protecting the substrate." },
  { title: "Cracking or Alligatoring", desc: "Fine cracks that look like alligator skin mean the paint has lost elasticity. Houston’s temperature swings (30° in a single day) stress rigid, old paint films." },
  { title: "Exposed or Rotting Wood", desc: "If you can push a screwdriver into trim or siding and it sinks, wood rot has started. This is urgent — painting over rot will fail. The wood must be repaired first." },
  { title: "Mold, Mildew, or Algae Growth", desc: "Houston’s humidity makes mold inevitable on unprotected surfaces. Green or black streaks on siding mean the paint is no longer sealing out moisture." },
  { title: "Caulk Failure Around Windows/Doors", desc: "Cracked, shrinking, or missing caulk around windows and doors allows water intrusion. Proper caulking is part of every exterior paint prep we do." },
  { title: "Bubbling or Blistering", desc: "Bubbles under the paint surface indicate trapped moisture. In Houston, this often comes from painting over damp surfaces or poor ventilation behind siding." },
  { title: "Visible Stains or Water Marks", desc: "Brown streaks under gutters or around windows signal water is getting behind the paint. Address the water source, then repaint to seal." },
  { title: "It Has Been 7+ Years Since Last Paint", desc: "Even premium exterior paint in Houston’s climate needs refreshing every 7–10 years. If you can’t remember when you last painted, it’s time for an inspection." },
];

const faqs = [
  { q: "How often should you paint the exterior of a house in Houston?", a: "Every 7–10 years with premium paint and proper preparation. Homes with heavy sun exposure or in flood-prone areas may need repainting every 5–7 years." },
  { q: "Can I paint over peeling paint?", a: "No. All peeling paint must be scraped, sanded, and primed before new paint is applied. Painting over peeling paint will cause the new coat to fail within months." },
  { q: "What is the best time of year to paint a house exterior in Houston?", a: "October through April is ideal — lower humidity, milder temperatures, and less rain. Summer painting is possible with early morning starts and the right product selection." },
  { q: "How much does exterior painting cost in Houston?", a: "Exterior painting in Houston costs " + PRICES_2026.exteriorPerHome + " for a typical home, depending on size, siding type, stories, and prep work. We provide free detailed estimates." },
  { q: "Does exterior painting increase home value?", a: "Yes. A fresh exterior paint job has one of the highest ROI of any home improvement — typically 50–75% return. It also makes your home sell faster." },
  { q: "What happens if I ignore these signs?", a: "Ignoring exterior paint failure leads to wood rot, water intrusion, mold growth, and structural damage. What starts as a $5,000 paint job can become a $20,000+ siding replacement." },
];

export default function SignsHomeNeedsExteriorPainting() {
  return (
    <>
      <Header />
      <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "10 Signs Your Home Needs Exterior Painting in Houston", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@id": "https://houstonsuperiorpainting.com/#organization" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/signs-home-needs-exterior-painting" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Exterior Painting", "item": "https://houstonsuperiorpainting.com/exterior-painting-houston-tx" }, { "@type": "ListItem", "position": 3, "name": "Signs You Need Exterior Painting", "item": "https://houstonsuperiorpainting.com/signs-home-needs-exterior-painting" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">The top signs your Houston home needs exterior painting: peeling/flaking paint, chalking surface, fading colors, cracking, exposed wood rot, mold growth, caulk failure, and blistering. Houston’s humidity and UV exposure break down exterior paint every 7–10 years. Exterior painting costs {PRICES_2026.exteriorPerHome}. Call <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a> for a free exterior inspection.</p>
        </div>
      </section>

      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">Signs Your Home Needs Exterior Painting in Houston</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">Houston’s climate is brutal on exterior paint. Here are 10 warning signs that it’s time to repaint — before small problems become expensive repairs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Free Exterior Inspection</a>
            <Link href="/exterior-painting-houston-tx" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Exterior Painting Services</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">10 Warning Signs to Watch For</h2>
          <div className="space-y-6">
            {signs.map((sign, i) => (
              <div key={sign.title} className="flex gap-4 items-start bg-card border border-border rounded-xl p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg">{i + 1}</div>
                <div><h3 className="text-lg font-semibold mb-2">{sign.title}</h3><p className="text-muted-foreground leading-relaxed">{sign.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">What Happens When You Delay</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead><tr className="bg-red-600 text-white"><th className="text-left p-4 font-semibold">Delay Period</th><th className="text-left p-4 font-semibold">Likely Damage</th><th className="text-left p-4 font-semibold">Repair Cost</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4">0–6 months</td><td className="p-4">Cosmetic fading, minor peeling</td><td className="p-4 font-semibold text-green-600">$3,500–$8,000 (paint only)</td></tr>
                <tr><td className="p-4">6–12 months</td><td className="p-4">Widespread peeling, early wood damage</td><td className="p-4 font-semibold text-amber-600">$5,000–$12,000 (paint + repairs)</td></tr>
                <tr><td className="p-4">1–2 years</td><td className="p-4">Active wood rot, mold, water intrusion</td><td className="p-4 font-semibold text-red-600">$10,000–$20,000+</td></tr>
                <tr><td className="p-4">2+ years</td><td className="p-4">Siding replacement, structural damage</td><td className="p-4 font-semibold text-red-700">$15,000–$40,000+</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-6 text-center">Related Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
              { label: "How Often to Paint in Houston", href: "/how-often-paint-house-houston" },
              { label: "Best Exterior Paint for Houston", href: "/best-exterior-paint-houston-weather" },
              { label: "Exterior Painting Cost Guide", href: "/exterior-house-painting-houston-cost-guide" },
              { label: "Pressure Washing", href: "/pressure-washing-houston-tx" },
              { label: "Drywall Repair", href: "/drywall-repair-houston-tx" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="block bg-card border border-border rounded-lg p-4 text-center font-medium hover:border-primary hover:text-primary transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Spot the Signs? Act Now.</h2>
          <p className="text-lg opacity-90 mb-8">Every month of delay increases repair costs. Get a free exterior inspection and honest assessment today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Text Us</a>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
