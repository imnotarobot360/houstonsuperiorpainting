import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, Star, Shield, CheckCircle2, ChevronRight, MapPin } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

export const metadata: Metadata = {
  title: "Interior Painters Katy TX | Interior House Painting",
  description: "Expert interior painters in Katy TX. Flawless walls, ceilings, and trim with premium preparation. Serving Katy, Cypress, and Houston. Call 346-594-5960.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/interior-painters-katy-tx" },
  openGraph: {
    title: "Interior Painters Katy TX | Houston Superior Painting",
    description: "Expert interior painters in Katy TX. Flawless walls, ceilings, and trim with premium preparation. Call 346-594-5960.",
    url: "https://houstonsuperiorpainting.com/interior-painters-katy-tx",
    type: "website",
  },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
}

const faqs = [
  { q: "How much does interior painting cost in Katy TX?", a: "Interior painting in Katy typically costs $2.50-$4.50 per square foot. A standard 2,500 sq ft Katy home averages $4,000-$8,000 for a full interior repaint. Accent walls and single rooms start around $300-$800. We provide free, itemized estimates." },
  { q: "How long does interior painting take in a Katy home?", a: "Most Katy homes (3-4 bedrooms) take 2-5 days for a full interior repaint. A single room takes 1 day. We work efficiently while maintaining quality and include furniture moving, taping, priming, two coats, and cleanup." },
  { q: "What paint brands do you use for Katy interiors?", a: "We exclusively use Sherwin-Williams (Emerald, Duration, SuperPaint) and Benjamin Moore (Aura, Regal Select). These premium low-VOC formulas dry properly in Houston humidity and resist scuffing, staining, and fading." },
  { q: "Do you paint ceilings and trim in Katy?", a: "Yes. We paint all interior surfaces including walls, ceilings, trim, baseboards, crown molding, doors, closets, and built-ins. Trim is brush-cut for a crisp, factory-finish look. Ceilings get a flat finish to hide imperfections." },
  { q: "Can you help with color selection?", a: "Absolutely. We offer complimentary color consultation with every project. We bring large samples to test in your actual lighting conditions, recommend colors that complement your flooring and cabinets, and ensure your choices photograph well for resale." },
  { q: "Do you move furniture before painting?", a: "Yes. Light furniture is moved to the center of the room and covered with drop cloths. Heavy items like pianos or large entertainment centers may need to be moved in advance. We protect all floors, fixtures, and hardware." },
  { q: "What areas of Katy do you serve?", a: "We serve all of Katy including Cinco Ranch, Grand Lakes, Cross Creek Ranch, Elyson, Cane Island, Firethorne, Tamarron, and all neighborhoods along I-10 and Grand Parkway. We also serve nearby Fulshear and Richmond." },
  { q: "Do you offer a warranty on interior painting?", a: "Yes. All interior painting comes with a 5-year warranty covering peeling, blistering, and adhesion failure. We stand behind our work and will return to fix any issue at no charge." },
  { q: "How do you protect my home during painting?", a: "We cover all floors with canvas drop cloths (not plastic), mask all trim and fixtures with painter tape, cover furniture with plastic sheeting, and remove all switch plates and outlet covers. After painting, we vacuum and mop all work areas." },
  { q: "What is the best time of year to paint interiors in Katy?", a: "Interior painting can be done year-round since we control the indoor environment. However, spring and fall are most popular because you can open windows for ventilation. We use low-VOC paints that are safe for occupied homes." },
]

export default function InteriorPaintersKatyTX() {
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
                "@type": "Article",
                "headline": "Interior Painters Katy TX – Flawless Interior House Painting",
                "author": { "@type": "Person", "name": "JJ Semo" },
                "publisher": { "@type": "Organization", "name": "Houston Superior Painting" },
                "datePublished": "2026-05-16",
                "dateModified": "2026-05-16",
                "mainEntityOfPage": "https://houstonsuperiorpainting.com/interior-painters-katy-tx",
              },
              { "@type": "BreadcrumbList", "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" },
                { "@type": "ListItem", "position": 2, "name": "Interior Painters Katy TX", "item": "https://houstonsuperiorpainting.com/interior-painters-katy-tx" },
              ]},
              { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
              { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
            ],
          }),
        }}
      />

      <section className="relative bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <li><Link href="/" className="hover:text-primary-foreground">Home</Link></li>
              <ChevronRight className="h-3 w-3" />
              <li><Link href="/painters-houston-tx" className="hover:text-primary-foreground">Painters Houston</Link></li>
              <ChevronRight className="h-3 w-3" />
              <li className="text-primary-foreground font-medium">Interior Painters Katy TX</li>
            </ol>
          </nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Interior Painters Katy TX – Flawless Interior House Painting
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Expert interior painting for Katy homeowners. Flawless walls, ceilings, trim, and accent walls with premium Sherwin-Williams and Benjamin Moore paints.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Interior painting in Katy TX costs $2.50-$4.50 per square foot. A typical 2,500 sq ft Katy home costs $4,000-$8,000 for a full interior repaint. Houston Superior Painting serves all Katy neighborhoods including Cinco Ranch, Grand Lakes, and Cross Creek Ranch. We use Sherwin-Williams and Benjamin Moore paints with a 5-year warranty. Call (346) 594-5960 for a free estimate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Why Katy Homeowners Choose Us for Interior Painting</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Katy&apos;s rapid growth has brought thousands of new homes to the area, but even newer construction needs repainting after 5-7 years. Builder-grade paint fades, scuffs easily, and does not hold up to active families. Our interior painting process transforms Katy homes with premium products that resist Houston&apos;s humidity, last longer, and look better.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Founded in 2019 by JJ Semo, Houston Superior Painting has completed hundreds of interior projects across Katy, from single accent walls in Cinco Ranch to full whole-home repaints in Grand Lakes. We understand the open floor plans, high ceilings, and neutral palettes popular in Katy master-planned communities.
          </p>

          <h3 className="text-xl font-semibold mb-4">What&apos;s Included in Our Interior Painting</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {["Walls (all rooms)", "Ceilings (flat finish)", "Trim, baseboards & crown molding", "Doors & door frames", "Closet interiors", "Accent walls & feature walls", "Stairway walls & hallways", "Laundry rooms & utility areas"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Interior Painting Cost Guide – Katy TX 2026</h3>
          <div className="pricing-snippet overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-3 font-semibold">Project</th>
                  <th className="text-left p-3 font-semibold">Price Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Single Room (avg 12x14)", "$300–$800"],
                  ["Accent Wall", "$150–$400"],
                  ["Full Interior (2,000 sq ft)", "$3,500–$7,000"],
                  ["Full Interior (3,000 sq ft)", "$5,500–$10,000"],
                  ["Trim & Baseboards (whole home)", "$1,200–$3,000"],
                  ["Ceiling Painting (whole home)", "$1,500–$3,500"],
                  ["Kitchen/Bath (high-moisture)", "$400–$1,200"],
                ].map(([project, price]) => (
                  <tr key={project} className="border-b border-border hover:bg-muted/50">
                    <td className="p-3 font-medium">{project}</td>
                    <td className="p-3 text-muted-foreground">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4">Color Selection for Katy Homes</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Katy homes benefit from colors that work with the abundant natural light typical of Texas architecture. Popular choices for 2026 include warm whites (Sherwin-Williams Alabaster, Benjamin Moore White Dove), soft greiges (Agreeable Gray, Revere Pewter), and warm blues for accent walls. We test colors in your actual lighting before committing to a final choice.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            For resale value, neutral tones consistently perform best in the Katy market. However, bold accent walls in dining rooms, offices, and master bedrooms are trending strongly in 2026. We can help balance neutral foundations with statement features.
          </p>

          <h3 className="text-xl font-semibold mb-4">Katy Neighborhoods We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Cinco Ranch", "Grand Lakes", "Cross Creek Ranch", "Elyson", "Cane Island", "Firethorne", "Tamarron", "Nottingham Country", "Pine Mill Ranch", "Falcon Ranch", "Ventana Lakes", "Morton Ranch"].map((area) => (
              <div key={area} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border text-sm">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
                    <FAQ items={faqs} variant="default" injectSchema={false} />
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Ready to Transform Your Katy Home?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Request your free quote today. Standard deposit required upon acceptance to secure your project date. 100% satisfaction guarantee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
            <a href={SMS_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors">
              <MessageSquare className="h-5 w-5" /> Text Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-serif font-bold mb-4">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Painters in Houston TX", href: "/painters-houston-tx" },
              { title: "Interior Painting Cost Houston 2026", href: "/interior-painting-cost-houston" },
              { title: "Best Paint Colors for Houston Homes", href: "/best-paint-colors-houston-homes" },
              { title: "Accent Wall Ideas Houston", href: "/accent-wall-ideas-houston" },
              { title: "Paint or Replace Cabinets?", href: "/paint-or-replace-cabinets" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors">
                <span className="font-semibold text-sm text-foreground">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
