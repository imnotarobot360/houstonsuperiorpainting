import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business";

export const metadata: Metadata = {
  title: "Accent Wall Ideas Houston TX | Modern Designs for 2026",
  description:
    "Creative accent wall ideas perfect for Houston homes with durable paint recommendations. Get inspired by bold colors, limewash, and textured finishes.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/accent-wall-ideas-houston",
  },
  openGraph: {
    title: "Accent Wall Ideas Houston TX | Modern Designs for 2026",
    description:
      "Bold accent wall designs for Houston homes. Limewash, color-blocking, textured finishes, and more.",
    url: "https://houstonsuperiorpainting.com/accent-wall-ideas-houston",
    type: "article",
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
  { q: "What is the most popular accent wall color in Houston right now?", a: "In 2026, deep greens (like Sherwin-Williams Pewter Green) and warm terracottas are the most popular accent wall colors in Houston homes. These earth tones complement Texas natural light beautifully." },
  { q: "Can you do a limewash accent wall?", a: "Yes! Limewash is one of our most requested accent wall finishes. It creates a soft, European plaster look with natural depth and variation. We use Romabio limewash products for authentic results." },
  { q: "How much does an accent wall cost in Houston?", a: "A single accent wall typically costs $200-$600 depending on size, technique, and prep work. Specialty finishes like limewash or German smear run $400-$1,200. We provide free detailed estimates." },
  { q: "Which wall should be the accent wall?", a: "The best accent wall is usually the focal wall -- the wall you see first when entering the room. In bedrooms, it is typically the headboard wall. In living rooms, the fireplace wall or the wall behind the TV." },
  { q: "Do accent walls make a room look smaller?", a: "Not if done correctly. Dark accent walls can actually add depth and make a room feel larger. The key is limiting the bold color to one wall and using lighter, complementary tones on the remaining three walls." },
  { q: "How long does it take to paint an accent wall?", a: "A single accent wall takes 3-5 hours for standard paint (including prep and two coats). Specialty finishes like limewash or texture work may take a full day. The wall is typically dry and usable within 24 hours." },
];

export default function AccentWallIdeasHouston() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "Accent Wall Ideas Houston \u2013 Bold & Beautiful Designs",
                "author": { "@type": "Person", "name": "Juan Serra" },
                "publisher": { "@id": "https://houstonsuperiorpainting.com/#organization" },
                "datePublished": "2026-05-16",
                "dateModified": "2026-05-16",
                "image": "/images/og-interior-painting.jpg",
                "mainEntityOfPage": "https://houstonsuperiorpainting.com/accent-wall-ideas-houston",
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Interior Painting", "item": "https://houstonsuperiorpainting.com/interior-painting-houston-tx" },
                  { "@type": "ListItem", "position": 3, "name": "Accent Wall Ideas", "item": "https://houstonsuperiorpainting.com/accent-wall-ideas-houston" },
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
            ],
          }),
        }}
      />

      {/* Quick Answer */}
      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">
            The most popular accent wall ideas for Houston homes in 2026 include deep greens, warm terracottas, limewash finishes, and textured plaster effects. A single accent wall costs $200-$600 for standard paint or $400-$1,200 for specialty finishes like limewash. Houston Superior Painting creates stunning accent walls across Houston, Katy, and Cypress. Call{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a> for a free consultation.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Accent Wall Ideas Houston &ndash; Bold &amp; Beautiful Designs
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            Transform any room with a single statement wall. From rich jewel tones to European limewash, here are the accent wall ideas Houston homeowners are loving in 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get a Free Color Consultation
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Accent Wall Ideas Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">12 Accent Wall Ideas for Houston Homes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "1. Deep Forest Green", desc: "Sherwin-Williams Pewter Green or Jasper creates a sophisticated, nature-inspired focal point. Pairs beautifully with warm wood tones and brass fixtures common in Houston homes." },
              { title: "2. Warm Terracotta", desc: "Earthy terracotta tones (try SW Cavern Clay) add warmth without overwhelming. Perfect for living rooms and dining areas in Houston\u2019s open floor plans." },
              { title: "3. Limewash Finish", desc: "The most-requested specialty finish in Houston. Romabio limewash creates an organic, European plaster look with natural color variation and depth." },
              { title: "4. Navy Blue Statement", desc: "SW Naval or BM Hale Navy delivers timeless drama. A navy accent wall in a bedroom or home office instantly elevates the space." },
              { title: "5. Color-Blocked Geometric", desc: "Modern geometric color-blocking uses painter\u2019s tape to create bold shapes. Two-tone arches behind headboards are trending in Houston master bedrooms." },
              { title: "6. German Smear / Mortar Wash", desc: "For brick accent walls, German smear creates a rustic, whitewashed farmhouse look. Extremely popular in Katy and Cypress new-construction homes." },
              { title: "7. Warm White Textured", desc: "A textured white accent wall (venetian plaster or skip-trowel) adds dimension without bold color. Ideal for minimalist Houston interiors." },
              { title: "8. Moody Charcoal", desc: "SW Iron Ore or Tricorn Black for a dramatic, moody vibe. Works best in rooms with abundant natural light \u2014 Houston\u2019s sunny climate makes this very forgiving." },
              { title: "9. Sage Green", desc: "Softer than forest green, sage (SW Evergreen Fog) is the go-to for a calming accent wall in bathrooms, nurseries, and guest bedrooms." },
              { title: "10. Board and Batten + Paint", desc: "Combine millwork with a contrasting paint color for architectural interest. White board and batten with a green or navy paint behind it is a Houston favorite." },
              { title: "11. Metallic Accent", desc: "Subtle metallic glazes or metallic-finish paints create a luminous, high-end accent wall. Best in formal dining rooms and entryways." },
              { title: "12. Two-Tone Half Wall", desc: "Paint the bottom half a bold color with a crisp line at chair-rail height. The upper half stays light. A modern take on classic wainscoting." },
            ].map((idea) => (
              <div key={idea.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{idea.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{idea.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Paint Brands for Accent Walls */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Best Paint Products for Accent Walls in Houston</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-semibold">Product</th>
                  <th className="text-left p-4 font-semibold">Best For</th>
                  <th className="text-left p-4 font-semibold">Finish</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4">Sherwin-Williams Emerald</td><td className="p-4">Bold solid colors</td><td className="p-4">Matte / Satin</td></tr>
                <tr><td className="p-4">Benjamin Moore Regal Select</td><td className="p-4">Deep, rich tones</td><td className="p-4">Matte</td></tr>
                <tr><td className="p-4">Romabio Classico Limewash</td><td className="p-4">Limewash accent walls</td><td className="p-4">Natural matte</td></tr>
                <tr><td className="p-4">Romabio Masonry Flat</td><td className="p-4">German smear on brick</td><td className="p-4">Flat</td></tr>
                <tr><td className="p-4">Modern Masters Metallic</td><td className="p-4">Metallic accent walls</td><td className="p-4">Shimmer</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Accent Wall Cost in Houston</h2>
          <div className="overflow-x-auto pricing-snippet">
            <table className="w-full border-collapse bg-card rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-semibold">Technique</th>
                  <th className="text-left p-4 font-semibold">Price Range</th>
                  <th className="text-left p-4 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-4">Standard paint (2 coats)</td><td className="p-4 font-semibold">$200 &ndash; $400</td><td className="p-4">3-5 hours</td></tr>
                <tr><td className="p-4">Color-blocked geometric</td><td className="p-4 font-semibold">$300 &ndash; $600</td><td className="p-4">4-6 hours</td></tr>
                <tr><td className="p-4">Limewash finish</td><td className="p-4 font-semibold">$400 &ndash; $900</td><td className="p-4">1 day</td></tr>
                <tr><td className="p-4">German smear on brick</td><td className="p-4 font-semibold">$500 &ndash; $1,200</td><td className="p-4">1-2 days</td></tr>
                <tr><td className="p-4">Venetian plaster / texture</td><td className="p-4 font-semibold">$600 &ndash; $1,500</td><td className="p-4">1-2 days</td></tr>
                <tr><td className="p-4">Board and batten + paint</td><td className="p-4 font-semibold">$800 &ndash; $2,000</td><td className="p-4">2-3 days</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm">Prices include labor, materials, and prep. Based on a standard 10&prime; &times; 12&prime; wall.</p>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-6 text-center">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Interior Painting Houston", href: "/interior-painting-houston-tx" },
              { label: "Best Paint Colors Houston", href: "/best-paint-colors-houston-homes" },
              { label: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx" },
              { label: "Limewash & German Smear", href: "/limewash-german-smear-houston-tx" },
              { label: "Drywall Repair", href: "/drywall-repair-houston-tx" },
              { label: "Free Estimate", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block bg-card border border-border rounded-lg p-4 text-center font-medium hover:border-primary hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Accent Wall FAQs</h2>
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
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Ready to Create Your Perfect Accent Wall?</h2>
          <p className="text-lg opacity-90 mb-8">Free color consultation. We bring samples to your home so you can see colors in your actual lighting.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">
              Call {BUSINESS.phone}
            </a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Text Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
