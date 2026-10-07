import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, ChevronRight } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "Best Paint Colors for Houston Homes 2026 | Free Estimates",
  description: "Top paint colors for Houston homes that perform in heat and humidity. Sherwin-Williams and Benjamin Moore picks for interior, exterior, and cabinets.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/best-paint-colors-houston-homes" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }], title: "Best Paint Colors for Houston Homes 2026 | Free Estimates", description: "Expert color recommendations for Houston homes from Sherwin-Williams and Benjamin Moore.", url: "https://houstonsuperiorpainting.com/best-paint-colors-houston-homes", type: "article" },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
}

const faqs = [
  { q: "What is the most popular interior paint color in Houston?", a: "Sherwin-Williams Agreeable Gray (SW 7029) remains the most popular interior paint color in Houston. It is a warm greige that works with both warm and cool tones, looks great in Houston natural light, and appeals to a wide range of buyers for resale." },
  { q: "What exterior paint colors last longest in Houston?", a: "Light and medium-toned earth colors last longest: tans, warm grays, soft whites, and muted greens. These colors absorb less UV and show fading less. Dark colors fade 30-40% faster on south-facing walls." },
  { q: "What paint colors increase home value in Houston?", a: "For maximum resale value: warm white or greige interiors, light gray or warm white exteriors, and navy or black front doors. Homes with neutral interiors sell 5-10% faster in the Houston market according to local real estate data." },
  { q: "Should I use warm or cool colors in my Houston home?", a: "Houston natural light tends warm, especially in south- and west-facing rooms. Warm neutrals (Agreeable Gray, Accessible Beige) work best in most Houston homes. Cool grays can feel cold in north-facing rooms." },
  { q: "What are the best cabinet paint colors for 2026?", a: "White (SW Extra White, BM Chantilly Lace) is still #1. Trending colors: Sage green (SW Evergreen Fog), Navy (BM Hale Navy), warm gray (SW Gauntlet Gray), and creamy white (BM White Dove). Two-tone with white uppers is very popular." },
  { q: "How do I test paint colors in my Houston home?", a: "Never choose from a small chip. Buy sample quarts and paint 2x2 ft sections on your actual walls. Observe the color at different times of day: morning, afternoon, and evening. Houston light changes dramatically with cloud cover." },
  { q: "What colors should I avoid in Houston?", a: "Avoid pure white exteriors (shows dirt quickly in Houston dust), very dark colors on sun-facing walls (extreme fading), trendy colors for resale (stick to classics), and cool-toned grays in south-facing rooms (look purple at sunset)." },
  { q: "Do you offer free color consultation?", a: "Yes. Every Houston Superior Painting project includes complimentary color consultation. We bring large samples, test them in your actual lighting, and recommend combinations that work with your flooring, countertops, and fixed finishes." },
]

export default function BestPaintColorsHoustonHomes() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "Best Paint Colors for Houston Homes in 2026", "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" }, "publisher": { "@type": "Organization", "name": "Houston Superior Painting" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/best-paint-colors-houston-homes" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Best Paint Colors Houston", "item": "https://houstonsuperiorpainting.com/best-paint-colors-houston-homes" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6"><ol className="flex items-center gap-2 text-sm text-primary-foreground/70"><li><Link href="/" className="hover:text-primary-foreground">Home</Link></li><ChevronRight className="h-3 w-3" /><li className="text-primary-foreground font-medium">Best Paint Colors Houston</li></ol></nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">Best Paint Colors for Houston Homes in 2026</h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">Expert color recommendations that look beautiful in Houston light, perform in Houston weather, and maximize your home value.</p>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">The best interior colors for Houston homes in 2026 are warm neutrals: Sherwin-Williams Agreeable Gray, Accessible Beige, and Alabaster. For exteriors, Sherwin-Williams Peppercorn, Benjamin Moore Revere Pewter, and warm whites perform best. For cabinets, white remains #1 with sage green and navy trending. Houston Superior Painting offers free color consultation with every project.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Top Interior Paint Colors for Houston 2026</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Color</th><th className="text-left p-3 font-semibold">Brand</th><th className="text-left p-3 font-semibold">Best Rooms</th><th className="text-left p-3 font-semibold">Undertone</th></tr></thead>
              <tbody>
                {[
                  ["Agreeable Gray (SW 7029)", "Sherwin-Williams", "Living, Dining, Bedrooms", "Warm greige"],
                  ["Accessible Beige (SW 7036)", "Sherwin-Williams", "Living, Hallways", "Warm neutral"],
                  ["Alabaster (SW 7008)", "Sherwin-Williams", "Whole home, Trim", "Warm white"],
                  ["Repose Gray (SW 7015)", "Sherwin-Williams", "Modern interiors", "Cool-warm gray"],
                  ["White Dove (OC-17)", "Benjamin Moore", "Cabinets, Trim", "Warm white"],
                  ["Revere Pewter (HC-172)", "Benjamin Moore", "Open floor plans", "Warm greige"],
                  ["Hale Navy (HC-154)", "Benjamin Moore", "Accent walls, Offices", "Deep navy"],
                  ["Evergreen Fog (SW 9130)", "Sherwin-Williams", "Bedrooms, Bathrooms", "Sage green"],
                  ["Iron Ore (SW 7069)", "Sherwin-Williams", "Accent walls, Doors", "Charcoal"],
                  ["Tricorn Black (SW 6258)", "Sherwin-Williams", "Front doors, Accents", "True black"],
                ].map(([c, b, r, u]) => (
                  <tr key={c} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{c}</td><td className="p-3 text-muted-foreground">{b}</td><td className="p-3 text-muted-foreground">{r}</td><td className="p-3 text-muted-foreground">{u}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Top Exterior Paint Colors for Houston 2026</h2>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead><tr className="bg-primary text-primary-foreground"><th className="text-left p-3 font-semibold">Color</th><th className="text-left p-3 font-semibold">Best For</th><th className="text-left p-3 font-semibold">Fade Resistance</th></tr></thead>
              <tbody>
                {[
                  ["Peppercorn (SW 7674)", "Modern homes, dark exteriors", "Good (medium gray)"],
                  ["Accessible Beige (SW 7036)", "Traditional, Ranch-style", "Excellent"],
                  ["Greek Villa (SW 7551)", "Clean white look", "Excellent"],
                  ["Dovetail (SW 7018)", "Mid-tone gray siding", "Very Good"],
                  ["Naval (SW 6244)", "Front doors, shutters", "Good (deep blue)"],
                  ["Urbane Bronze (SW 7048)", "Modern accents, trim", "Very Good"],
                  ["Iron Ore (SW 7069)", "Trim, shutters, doors", "Good (dark charcoal)"],
                ].map(([c, b, f]) => (
                  <tr key={c} className="border-b border-border hover:bg-muted/50"><td className="p-3 font-medium">{c}</td><td className="p-3 text-muted-foreground">{b}</td><td className="p-3 text-muted-foreground">{f}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">How Houston Light Affects Color</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Houston light is intensely warm, especially from March through October. This means:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "South-Facing Rooms", desc: "Receive warm, direct light most of the day. Cool grays look purple at sunset. Warm neutrals and whites perform beautifully." },
              { title: "North-Facing Rooms", desc: "Get cooler, indirect light. Colors appear slightly blue. Choose warm undertones to counteract the cool light." },
              { title: "East-Facing Rooms", desc: "Bright warm light in morning, cooler in afternoon. Most versatile for color selection. Great for both warm and cool tones." },
              { title: "West-Facing Rooms", desc: "Intense warm light in afternoon. Colors look dramatically different between morning and evening. Test colors at 4-5 PM." },
            ].map(item => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border"><h3 className="font-semibold text-foreground mb-2">{item.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card"><div className="container mx-auto px-4 max-w-4xl"><FAQ items={faqs} variant="default" injectSchema={false} /></div></section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Need Help Choosing Colors?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">Free color consultation with every painting project. We test colors in your actual lighting before committing.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"><Phone className="h-5 w-5" /> Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors"><MessageSquare className="h-5 w-5" /> Text Us</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-xl font-serif font-bold mb-4">Related Articles</h2><div className="grid md:grid-cols-3 gap-4">
        {[{ title: "Interior Painting in Katy & Cinco Ranch", href: "/interior-painting-katy-cinco-ranch" }, { title: "Accent Wall Ideas Houston", href: "/accent-wall-ideas-houston" }, { title: "Interior Painting Cost Houston", href: "/interior-painting-cost-houston" }, { title: "Best Exterior Paint for Houston", href: "/best-exterior-paint-houston-weather" }].map(p => (
          <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors"><span className="font-semibold text-sm text-foreground">{p.title}</span></Link>
        ))}
      </div></div></section>
      <Footer />
    </>
  )
}
