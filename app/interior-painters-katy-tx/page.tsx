import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { Phone, MessageSquare, CheckCircle2, ChevronRight, MapPin } from "lucide-react"
import { BUSINESS, PHONE_HREF, PRICES_2026, SMS_HREF, SERVICE_AREAS } from "@/lib/business"

const NEARBY = SERVICE_AREAS.filter((a) =>
  ["painters-katy-tx", "painters-cinco-ranch-tx", "painters-fulshear-tx", "painters-richmond-tx", "painters-sugar-land-tx", "painters-energy-corridor-tx"].includes(a.slug),
)

export const metadata: Metadata = {
  title: "Interior Painters Katy TX | Interior House Painting",
  description: "Interior painting in Katy, TX: walls, ceilings, trim and doors. 2026 price ranges, Sherwin-Williams and Benjamin Moore paint, 5-year warranty.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/interior-painters-katy-tx" },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Interior Painters Katy TX | Houston Superior Painting",
    description: "Interior painting in Katy, TX: walls, ceilings, trim and doors. 2026 price ranges and a free written estimate.",
    url: "https://houstonsuperiorpainting.com/interior-painters-katy-tx",
    type: "website",
  },
  other: { "geo.region": "US-TX", "geo.placename": "Katy", "geo.position": "29.7858;-95.8245", ICBM: "29.7858, -95.8245" },
}

const faqs = [
  { q: "How much does interior painting cost in Katy TX?", a: `Interior painting in Katy typically costs ${PRICES_2026.interiorPerSqFt} per square foot. A full interior repaint of a 2,500 sq ft home usually runs ${PRICES_2026.fullInterior2500}. A single room is usually ${PRICES_2026.singleRoom} and an accent wall ${PRICES_2026.accentWall}. Your written estimate is free and itemized.` },
  { q: "How long does interior painting take in a Katy home?", a: "A full interior repaint of a typical 3-4 bedroom home usually takes 2-5 days, and a single room usually takes a day. Your written estimate gives the expected schedule for your home." },
  { q: "What paint brands do you use for Katy interiors?", a: "We use Sherwin-Williams and Benjamin Moore paints, choosing the product line and sheen for each room: flat for most ceilings, and a washable finish for walls, trim and doors that get handled." },
  { q: "Do you paint ceilings and trim in Katy?", a: "Yes. We paint walls, ceilings, trim, baseboards, crown molding, doors, closets and built-ins. Each item is listed separately on the estimate so you can choose what to include." },
  { q: "Can you help with color selection?", a: "Yes. We can talk through colors during the estimate. We recommend testing large samples on your own walls and checking them in morning and evening light before you commit." },
  { q: "Do you move furniture before painting?", a: "Light furniture is moved to the center of the room and covered. Very heavy or fragile items, such as pianos or large entertainment centers, may need to be moved in advance. Floors, fixtures and hardware are protected before painting starts." },
  { q: "What areas of Katy do you serve?", a: "We serve homes throughout Katy, including Cinco Ranch, Grand Lakes, Cross Creek Ranch, Elyson, Cane Island, Firethorne and Tamarron, plus nearby Fulshear and Richmond." },
  { q: "Do you offer a warranty on interior painting?", a: "Yes. Interior painting comes with our 5-year written workmanship warranty." },
  { q: "How do you protect my home during painting?", a: "Floors are covered with drop cloths, trim and fixtures are masked, furniture is covered, and switch plates and outlet covers are removed before painting. Work areas are cleaned up when the job is done." },
  { q: "What is the best time of year to paint interiors in Katy?", a: "Interior painting can be done year-round because the work happens indoors. Spring and fall are convenient if you like to open windows for ventilation. Low-VOC paints are available for occupied homes." },
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
                "headline": "Interior Painters in Katy, TX",
                "author": { "@type": "Person", "@id": "https://houstonsuperiorpainting.com/about#juan-serra", "name": "Juan Serra" },
                "publisher": { "@type": "Organization", "name": "Houston Superior Painting" },
                "datePublished": "2026-05-16",
                "dateModified": "2026-10-07",
                "mainEntityOfPage": "https://houstonsuperiorpainting.com/interior-painters-katy-tx",
              },
              { "@type": "BreadcrumbList", "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" },
                { "@type": "ListItem", "position": 2, "name": "Katy Painters", "item": "https://houstonsuperiorpainting.com/painters-katy-tx" },
                { "@type": "ListItem", "position": 3, "name": "Interior Painters Katy TX", "item": "https://houstonsuperiorpainting.com/interior-painters-katy-tx" },
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
              <li><Link href="/painters-katy-tx" className="hover:text-primary-foreground">Katy Painters</Link></li>
              <ChevronRight className="h-3 w-3" />
              <li className="text-primary-foreground font-medium">Interior Painters Katy TX</li>
            </ol>
          </nav>
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Interior Painters in Katy, TX
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Walls, ceilings, trim, doors and accent walls for Katy homes, painted with Sherwin-Williams and Benjamin Moore products and backed by a 5-year written workmanship warranty.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
            <Link href="/painting-estimate-houston" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">
            Interior painting in Katy, TX typically costs {PRICES_2026.interiorPerSqFt} per square foot, or {PRICES_2026.fullInterior2500} for a full repaint of a 2,500 sq ft home. Houston Superior Painting serves Katy neighborhoods including Cinco Ranch, Grand Lakes and Cross Creek Ranch, uses Sherwin-Williams and Benjamin Moore paints, and gives a 5-year written workmanship warranty. Call {BUSINESS.phone} for a free estimate.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Interior Painting for Katy Homes</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Much of Katy is newer construction in master-planned communities, and builder-grade flat paint scuffs easily and is hard to wash. Repainting with a washable finish is a common first project in these homes. Open floor plans and tall ceilings also mean more ladder and scaffold work, which your estimate accounts for.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Houston Superior Painting was founded in 2019 by Juan Serra and is headquartered in Cypress. We carry {BUSINESS.trust.liabilityCoverage} in general liability insurance plus workers&apos; comp, and every job carries a 5-year written workmanship warranty. {BUSINESS.paymentPolicy.sentence} For full service details, see our <Link href="/interior-painting-houston-tx" className="text-primary underline">interior painting service page</Link>.
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

          <h3 className="text-xl font-semibold mb-4">2026 Interior Painting Price Ranges (Katy and Greater Houston)</h3>
          <div className="pricing-snippet overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-3 font-semibold">Project</th>
                  <th className="text-left p-3 font-semibold">Price Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Single Room (avg 12x14)", PRICES_2026.singleRoom],
                  ["Accent Wall", PRICES_2026.accentWall],
                  ["Full Interior (2,000 sq ft)", PRICES_2026.fullInterior2000],
                  ["Full Interior (2,500 sq ft)", PRICES_2026.fullInterior2500],
                  ["Full Interior (4,000 sq ft)", PRICES_2026.fullInterior4000],
                  ["Trim & Baseboards (whole home)", PRICES_2026.trimWholeHome],
                  ["Ceiling Painting (whole home)", PRICES_2026.ceilingsWholeHome],
                ].map(([project, price]) => (
                  <tr key={project} className="border-b border-border hover:bg-muted/50">
                    <td className="p-3 font-medium">{project}</td>
                    <td className="p-3 text-muted-foreground">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mb-8">
            See the <Link href="/interior-painting-cost-houston" className="text-primary underline">interior painting cost guide</Link> for what moves a quote up or down.
          </p>

          <h3 className="text-xl font-semibold mb-4">Choosing Colors for a Katy Home</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Warm whites (Sherwin-Williams Alabaster, Benjamin Moore White Dove) and greiges (Agreeable Gray, Revere Pewter) are common choices for open floor plans because they read consistently from room to room. A color can look very different in a west-facing room in the afternoon than in a north-facing one, so test large samples in your own light before deciding.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If you are painting before a sale, a neutral base is the safer choice. If you are staying, an accent wall in a dining room, office or bedroom is an inexpensive way to add color. More ideas: <Link href="/best-paint-colors-houston-homes" className="text-primary underline">paint colors for Houston homes</Link>.
          </p>

          <h3 className="text-xl font-semibold mb-4">Katy and Nearby Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {NEARBY.map((area) => (
              <Link key={area.slug} href={`/${area.slug}`} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border text-sm hover:border-secondary transition-colors">
                <MapPin className="h-4 w-4 text-secondary shrink-0" />
                <span className="font-medium">Painters in {area.name}</span>
              </Link>
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
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">Get a Free Interior Painting Estimate in Katy</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            {BUSINESS.paymentPolicy.short}: nothing is due until you approve the written estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/painting-estimate-houston" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors">
              Request an Estimate
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-colors">
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
          <h2 className="text-xl font-serif font-bold mb-4">Related Pages</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Painters in Katy TX", href: "/painters-katy-tx" },
              { title: "Interior Painting Service", href: "/interior-painting-houston-tx" },
              { title: "Interior Painting Cost Guide", href: "/interior-painting-cost-houston" },
              { title: "Accent Wall Ideas", href: "/accent-wall-ideas-houston" },
              { title: "Cabinet Painting Katy TX", href: "/cabinet-painting-katy-tx" },
              { title: "Warranty", href: "/warranty" },
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
