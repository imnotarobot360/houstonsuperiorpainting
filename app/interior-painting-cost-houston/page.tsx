import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { EstimateCalculator } from "@/components/estimate-calculator"
import { Phone, MessageSquare, ChevronRight, CheckCircle2 } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"
import { AuthorByline, articleNode, ESTIMATE_PATH } from "@/components/aeo/blocks"

export const metadata: Metadata = {
  title: "Interior Painting Cost in Houston 2026 | Price Guide",
  description: "Transparent 2026 interior painting costs in Houston: $2.50-$4.50 per sq ft. Full breakdown by room, project type, and factors. Free quotes: 346-594-5960.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/interior-painting-cost-houston" },
  openGraph: { title: "Interior Painting Cost Houston 2026 | Full Price Guide", description: "Transparent 2026 interior painting costs in Houston: $2.50-$4.50 per sq ft.", url: "https://houstonsuperiorpainting.com/interior-painting-cost-houston", type: "article", images: [{ url: "https://houstonsuperiorpainting.com/images/og/og-interior-painting.jpg", width: 1200, height: 630 }] },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
}

const faqs = [
  { q: "How much does it cost to paint a room in Houston?", a: "A single room (12x14) costs $300-$800 depending on ceiling height, condition, and trim work. This includes walls, ceiling, and trim with two coats of premium paint." },
  { q: "How much does a whole-house interior paint job cost in Houston?", a: "A full interior repaint for a 2,000-2,500 sq ft Houston home costs $4,000-$8,000. A 3,000 sq ft home runs $5,500-$10,000 and 4,000+ sq ft homes run $7,000-$14,000. These prices include all walls, ceilings, trim, and doors." },
  { q: "Why do interior painting prices vary so much?", a: "Key factors: ceiling height (standard 8ft vs 10-12ft vaulted), surface condition (new drywall vs heavily patched), number of colors, accent walls, trim complexity, furniture moving, and paint product choice." },
  { q: "Is it cheaper to paint yourself in Houston?", a: "DIY saves labor (50-60% of total cost) but takes 3-5x longer, produces inconsistent results, and voids any warranty. Most DIY painters underestimate prep time and material waste. Professional results increase home value." },
  { q: "Does paint quality affect interior painting cost?", a: "Yes. Premium paint (Sherwin-Williams Emerald, Benjamin Moore Aura) adds $0.50-$1.00/sq ft vs builder-grade. But premium paint covers better, lasts 2-3x longer, and is more washable. We include premium paint in all quotes." },
  { q: "How much does it cost to paint trim and baseboards?", a: "Trim and baseboards for a whole home typically cost $1,200-$3,000 depending on linear footage, complexity, and whether staining or painting. Crown molding adds $800-$2,000." },
  { q: "What is included in a professional interior painting quote?", a: "Our quotes include: surface preparation (patching, sanding, caulking), priming where needed, two coats of premium paint, trim and ceiling painting if requested, furniture moving and protection, and complete cleanup." },
  { q: "Do Houston painters charge by the room or square foot?", a: "Most professional Houston painters quote by square foot ($2.50-$4.50) or by the entire project. Per-room quotes ($300-$800) are common for smaller jobs. We provide itemized quotes so you see exactly what each area costs." },
  { q: "Are there hidden costs in interior painting?", a: "With reputable painters, no. Watch for: drywall repair charges added after starting, extra costs for moving furniture, upcharges for tall ceilings, and material cost increases. We include everything in our upfront quote." },
  { q: "When is the cheapest time to paint interiors in Houston?", a: "Late fall and winter (November-February) are slightly less busy for painters. Some companies offer 5-10% off during this period. However, interior painting can be done year-round since it is climate-controlled." },
]

export default function InteriorPaintingCostHouston() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        articleNode({ path: "/interior-painting-cost-houston", headline: "How Much Does Interior Painting Cost in Houston in 2026?", description: "Interior painting in Houston costs $2.50-$4.50 per square foot in 2026: $300-$800 per room and $4,000-$8,000 for a full 2,500 sq ft interior.", datePublished: "2026-05-16" }),
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Interior Painting Cost Houston", "item": "https://houstonsuperiorpainting.com/interior-painting-cost-houston" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Interior Painting Cost Houston</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">How Much Does Interior Painting Cost in Houston in 2026?</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Transparent pricing from a local Houston painting company. No hidden fees, no surprises. Real numbers from real projects.</p>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">Interior painting in Houston costs $2.50-$4.50 per square foot in 2026. A typical 2,500 sq ft home costs $4,000-$8,000 for a full interior repaint with premium Sherwin-Williams or Benjamin Moore paint. Single rooms: $300-$800. Price includes prep, two coats, trim, and cleanup. Call (346) 594-5960 for a free itemized quote.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Houston Interior Painting Cost Breakdown 2026</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Project Type</th><th className="text-left p-3 font-semibold">Price Range</th><th className="text-left p-3 font-semibold">Average</th></tr></thead>
              <tbody>
                {[
                  ["Single Room (12x14)", "$300–$800", "$500"],
                  ["Accent Wall", "$150–$400", "$250"],
                  ["Master Bedroom + Bath", "$600–$1,500", "$950"],
                  ["Full Interior – 1,500 sq ft", "$3,000–$5,500", "$4,000"],
                  ["Full Interior – 2,000 sq ft", "$3,500–$7,000", "$5,000"],
                  ["Full Interior – 2,500 sq ft", "$4,000–$8,000", "$6,000"],
                  ["Full Interior – 3,000 sq ft", "$5,500–$10,000", "$7,500"],
                  ["Full Interior – 4,000+ sq ft", "$7,000–$14,000", "$10,000"],
                  ["Trim & Baseboards (whole home)", "$1,200–$3,000", "$2,000"],
                  ["Ceiling (whole home)", "$1,500–$3,500", "$2,500"],
                  ["Kitchen/Bath (high moisture)", "$400–$1,200", "$700"],
                  ["Stairway/Hallway (tall walls)", "$500–$1,500", "$900"],
                ].map(([p, r, a]) => (
                  <tr key={p} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{p}</td><td className="p-3 text-muted-foreground">{r}</td><td className="p-3 text-muted-foreground font-medium">{a}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Prices reflect 2026 Houston market rates with premium Sherwin-Williams or Benjamin Moore paint. All prices include two coats, preparation, and cleanup.</p>
          <p className="text-foreground/90 mb-8 leading-relaxed">These numbers match our <Link href="/houston-painting-cost-guide" className="font-medium text-primary underline">Houston painting cost guide</Link>, which also covers exterior and cabinet pricing. See what the work itself involves on our <Link href="/interior-painting-houston-tx" className="font-medium text-primary underline">interior painting in Houston</Link> page. We quote the same ranges for <Link href="/painters-katy-tx" className="font-medium text-primary underline">Katy painters</Link>, <Link href="/painters-cypress-tx" className="font-medium text-primary underline">Cypress painters</Link>, and <Link href="/painters-sugar-land-tx" className="font-medium text-primary underline">Sugar Land painters</Link> jobs.</p>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Factors That Affect Interior Painting Cost</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Ceiling Height", desc: "Standard 8-9ft ceilings are baseline. 10ft ceilings add 15-20%. Vaulted or 12ft+ ceilings add 25-40% due to scaffolding and additional labor." },
              { title: "Surface Condition", desc: "New construction or well-maintained walls are cheapest. Homes with peeling paint, water damage, or heavy patching add $0.50-$1.50/sq ft for prep work." },
              { title: "Number of Colors", desc: "One-color jobs are most efficient. Each additional color adds time for cutting-in, taping, and cleanup. 3+ colors adds 10-20% to the total cost." },
              { title: "Trim Complexity", desc: "Simple baseboards are standard. Crown molding, chair rail, wainscoting, and ornate trim add significant time and cost due to detailed brush work." },
              { title: "Paint Product", desc: "Builder-grade paint saves $0.50-$1.00/sq ft but lasts half as long and looks noticeably worse. Premium paint is always our recommendation for lasting results." },
              { title: "Furniture & Access", desc: "Empty rooms are fastest. Rooms with heavy furniture or lots of fixtures require more protection and moving time, adding 5-15% to room cost." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">What&apos;s Included in Our Quotes</h2>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {["Surface preparation (patching, sanding, caulking)", "Priming (where needed)", "Two coats of premium paint", "Trim and ceiling painting (if requested)", "Furniture moving and protection", "Floor protection with canvas drop cloths", "Switch plate and outlet cover removal", "Complete cleanup and touch-ups", "Final walkthrough inspection", "5-year workmanship warranty"].map(i => (
              <div key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{i}</span></div>
            ))}
          </div>

          <h2 className="text-2xl font-serif font-bold mb-6">Cost Comparison: DIY vs Professional</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Factor</th><th className="text-left p-3 font-semibold">DIY</th><th className="text-left p-3 font-semibold">Professional</th></tr></thead>
              <tbody>
                {[
                  ["Material Cost (2,500 sq ft)", "$800–$1,500", "Included in quote"],
                  ["Labor Cost", "$0 (your time)", "$2,500–$6,000 more than DIY"],
                  ["Total Cost", "$800–$1,500", "$4,000–$8,000"],
                  ["Time Required", "2–3 weekends", "3–5 days"],
                  ["Quality", "Variable", "Consistent, factory-smooth"],
                  ["Warranty", "None", "5-year warranty"],
                  ["Prep Quality", "Often skipped", "Full 8-step process"],
                ].map(([f, d, p]) => (
                  <tr key={f} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{f}</td><td className="p-3 text-muted-foreground">{d}</td><td className="p-3 text-muted-foreground">{p}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 text-balance">Estimate your interior painting cost</h2>
            <p className="text-muted-foreground text-lg text-pretty">Get an instant ballpark range built from the 2026 Houston rates on this page.</p>
          </div>
          <EstimateCalculator source="interior_cost_page_calculator" defaultService="interior" />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Wondering what you actually get for that price?{" "}
            <Link href="/interior-painting-process-houston" className="font-medium text-foreground underline">
              See our 8-step painting process
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Get Your Free Interior Painting Quote</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">No hidden fees. No surprises. Detailed, itemized estimates provided within 24 hours of your free on-site visit.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
            <Link href={ESTIMATE_PATH} className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">Request a free painting estimate</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-xl font-serif font-bold mb-4">Related Articles</h2><div className="grid md:grid-cols-3 gap-4">
        {[{ title: "Interior Painters Katy TX", href: "/interior-painters-katy-tx" }, { title: "Best Paint Colors for Houston Homes", href: "/best-paint-colors-houston-homes" }, { title: "Painters in Houston TX", href: "/painters-houston-tx" }, { title: "Exterior Painting Cost Guide", href: "/exterior-house-painting-houston-cost-guide" }, { title: "How Long Does Interior Painting Take?", href: "/blog/how-long-does-interior-painting-take-in-houston" }].map(p => (
          <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors"><span className="font-semibold text-sm text-foreground">{p.title}</span></Link>
        ))}
      </div></div></section>
      <AuthorByline />
      <Footer />
    </>
  )
}
