import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, ChevronRight, CheckCircle2, AlertTriangle } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "How Often Should You Paint a House in Houston? Expert Guide",
  description: "How often to paint a house in Houston: exteriors every 5–7 years, interiors every 7–10 years. Schedules by surface, warning signs, and how to extend paint life.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/how-often-paint-house-houston" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "How Often Should You Paint a House in Houston?", description: "Expert guide on painting frequency for Houston homes. Interior and exterior schedules.", url: "https://houstonsuperiorpainting.com/how-often-paint-house-houston", type: "article" },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
}

const faqs = [
  { q: "How often should you paint the exterior of a house in Houston?", a: "Every 5-7 years with premium paint and proper preparation. South and west-facing walls may need attention sooner due to UV exposure. Builder-grade paint may fail in 3-4 years." },
  { q: "How often should you paint interior walls in Houston?", a: "Every 7-10 years for most rooms. High-traffic areas (hallways, kid rooms, kitchens) may need repainting every 3-5 years. Premium paints with washable finishes extend this timeline." },
  { q: "What signs indicate my Houston home needs repainting?", a: "Peeling, cracking, chalking, bubbling, fading, mildew growth, caulk failure, and visible bare wood or substrate. If you see any of these, schedule a free inspection before the problem spreads." },
  { q: "Does Houston humidity cause paint to fail faster?", a: "Yes. Houston humidity (75-90%) accelerates paint failure by causing moisture to penetrate underneath coatings, leading to blistering, peeling, and mildew growth. Proper preparation and moisture-resistant products mitigate this." },
  { q: "How does siding material affect painting frequency in Houston?", a: "Wood siding: every 5-7 years. HardiePlank/fiber cement: every 5-7 years, sometimes longer on shaded elevations. Brick: every 10-15 years (if painted). Stucco: every 5-7 years. Vinyl: rarely needs painting but can be refreshed." },
  { q: "Can I extend the life of my Houston exterior paint?", a: "Yes. Annual pressure washing, prompt caulk repair, addressing moisture sources (sprinklers hitting walls, poor drainage), and trimming vegetation away from walls all extend paint life significantly." },
  { q: "Is it cheaper to repaint before the paint completely fails?", a: "Yes, significantly. Maintenance repainting over intact paint costs 30-40% less than repainting over failed surfaces that require extensive scraping, sanding, and priming of bare substrate." },
  { q: "What is the best time of year to paint a house in Houston?", a: "October through April is ideal for exteriors. Low humidity, mild temperatures, and minimal rain. Interior painting can be done year-round. Avoid exterior painting in peak summer heat (June-August)." },
]

export default function HowOftenPaintHouseHouston() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "How Often Should You Paint a House in Houston?", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/how-often-paint-house-houston" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "How Often Paint House Houston", "item": "https://houstonsuperiorpainting.com/how-often-paint-house-houston" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">How Often Paint House Houston</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">How Often Should You Paint a House in Houston?</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">The definitive painting schedule for Houston homeowners. Know exactly when to repaint to protect your investment and save money.</p>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Exteriors every 5–7 years, interiors every 7–10 years. That is the repaint schedule for Houston homes with premium paint and proper prep; builder-grade exterior paint often fails in 3–4 years, and high-traffic rooms may need a refresh every 3–5 years. Sun exposure, siding material, and paint quality are the biggest factors, and repainting before paint fails costs less than waiting.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Houston Painting Schedule by Surface</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Surface</th><th className="text-left p-3 font-semibold">Premium Paint</th><th className="text-left p-3 font-semibold">Builder-Grade</th></tr></thead>
              <tbody>
                {[
                  ["Exterior – Wood Siding", "5–7 years", "3–4 years"],
                  ["Exterior – HardiePlank", "5–7 years", "3–5 years"],
                  ["Exterior – Stucco", "5–7 years", "3–5 years"],
                  ["Exterior – Brick (painted)", "10–15 years", "6–8 years"],
                  ["Exterior – Trim & Fascia", "5–7 years", "3–4 years"],
                  ["Interior – Living Areas", "7–10 years", "4–6 years"],
                  ["Interior – High-Traffic", "3–5 years", "2–3 years"],
                  ["Interior – Bathrooms", "4–6 years", "2–4 years"],
                  ["Interior – Ceilings", "8–10 years", "5–7 years"],
                  ["Cabinets", "8–12 years", "3–5 years"],
                ].map(([s, p, b]) => (
                  <tr key={s} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{s}</td><td className="p-3 text-green-600 font-medium">{p}</td><td className="p-3 text-muted-foreground">{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-10">When the calendar says it is time, our <Link href="/exterior-painting-houston-tx" className="text-primary underline">exterior painting in Houston</Link> includes the pressure wash, caulk, and primer that make the next cycle last. To budget ahead, the <Link href="/houston-painting-cost-guide" className="text-primary underline">Houston painting cost guide</Link> has 2026 prices by home size, and crews work out of our offices serving <Link href="/painters-houston-tx" className="text-primary underline">painters in Houston TX</Link> and <Link href="/painters-cypress-tx" className="text-primary underline">Cypress TX</Link>.</p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Factors That Affect Painting Frequency in Houston</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Sun Exposure", desc: "South and west-facing walls receive the most UV. These walls fade and chalk 30-40% faster than north-facing walls. Consider repainting these sides first." },
              { title: "Humidity & Moisture", desc: "Houston humidity above 75% drives moisture into paint films. Poor ventilation, sprinklers hitting walls, and clogged gutters accelerate failure." },
              { title: "Paint Quality", desc: "100% acrylic premium paints (SW Duration, BM Aura) last 2-3x longer than builder-grade vinyl acrylic. The extra cost per gallon pays for itself." },
              { title: "Surface Preparation", desc: "Proper washing, scraping, sanding, caulking, and priming add 3-5 years to paint life. Skipping prep is the most common reason paint fails early." },
              { title: "Color Choice", desc: "Dark colors fade faster than light colors due to UV absorption. If you love dark colors, use products with iron oxide pigments for better fade resistance." },
              { title: "Storm Damage", desc: "Houston hurricanes and severe storms can damage paint through driving rain, flying debris, and standing water. Inspect after every major storm." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Warning Signs Your Houston Home Needs Repainting</h2>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {["Peeling or flaking paint on any surface", "Chalking (white powder when you touch the wall)", "Bubbling or blistering paint", "Visible cracks in paint film", "Fading or discoloration", "Mildew or mold growth on painted surfaces", "Caulk separating from trim or windows", "Bare wood or substrate visible", "Paint feels soft or sticky in humidity", "Water stains appearing through paint"].map(s => (
              <div key={s} className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" /><span className="text-foreground text-sm">{s}</span></div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">How to Extend Paint Life in Houston</h2>
          <div className="space-y-3 mb-8">
            {["Pressure wash exterior surfaces annually to remove dirt, mildew, and pollutants", "Repair caulking around windows, doors, and trim as soon as gaps appear", "Fix gutter and drainage issues that direct water onto painted surfaces", "Trim trees and bushes away from walls to allow air circulation", "Address sprinklers that hit painted surfaces", "Touch up small areas of damage promptly before they spread", "Use premium paint with built-in mildewcide for Houston humidity"].map(t => (
              <div key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Not Sure If Your Home Needs Repainting?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Schedule a free inspection and we will assess your paint condition, provide honest recommendations, and give you a detailed estimate if work is needed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-xl font-serif font-bold mb-4">Related Articles</h2><div className="grid md:grid-cols-3 gap-4">
        {[{ title: "Exterior Painting Houston TX", href: "/exterior-painting-houston-tx" }, { title: "Best Exterior Paint for Houston", href: "/best-exterior-paint-houston-weather" }, { title: "Signs Your Home Needs Painting", href: "/signs-home-needs-exterior-painting" }, { title: "Exterior Painting Cost Guide", href: "/exterior-house-painting-houston-cost-guide" }].map(p => (
          <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors"><span className="font-semibold text-sm text-foreground">{p.title}</span></Link>
        ))}
      </div></div></section>
      <Footer />
    </>
  )
}
