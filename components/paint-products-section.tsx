import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Droplets, Sun, Clock } from "lucide-react"

const products = [
  {
    brand: "Sherwin-Williams",
    logo: "/images/sherwin-williams-logo.png",
    description: "America's largest paint manufacturer, trusted by professionals for over 150 years.",
    products: [
      {
        name: "Duration Home",
        use: "Interior walls & ceilings",
        why: "Exceptional hide, washability, and stain resistance. One coat coverage saves time and money.",
      },
      {
        name: "Duration Exterior",
        use: "Exterior siding & trim",
        why: "PermaLast technology for superior adhesion and flexibility in Houston's extreme temperature swings.",
      },
      {
        name: "Emerald Urethane Trim Enamel",
        use: "Cabinets & trim",
        why: "Waterborne urethane for a factory-smooth, ultra-durable finish without yellowing.",
      },
      {
        name: "SuperPaint",
        use: "Interior/exterior multi-use",
        why: "Advanced resin technology for excellent durability at a value price point.",
      },
    ],
  },
  {
    brand: "Benjamin Moore",
    logo: "/images/benjamin-moore-logo.png",
    description: "Premium quality since 1883, known for exceptional color accuracy and depth.",
    products: [
      {
        name: "Advance",
        use: "Cabinets & furniture",
        why: "Alkyd-like performance with waterborne cleanup. Self-leveling for a mirror-smooth finish.",
      },
      {
        name: "Regal Select",
        use: "Interior walls",
        why: "Mildew resistant formula with excellent coverage. Ideal for Houston's humidity.",
      },
      {
        name: "Aura Exterior",
        use: "Exterior surfaces",
        why: "Color Lock technology prevents fading. Resists cracking, peeling, and blistering.",
      },
      {
        name: "Scuff-X",
        use: "High-traffic areas",
        why: "Exceptional scuff and mar resistance for hallways, kids' rooms, and commercial spaces.",
      },
    ],
  },
]

const benefits = [
  { icon: Shield, title: "Longer Lasting", description: "Premium paints last 2-3x longer than budget options" },
  { icon: Droplets, title: "Better Coverage", description: "One-coat hide saves labor costs and time" },
  { icon: Sun, title: "UV Resistant", description: "Fade-resistant formulas keep colors vibrant" },
  { icon: Clock, title: "Faster Drying", description: "Advanced formulas allow recoating sooner" },
]

export function PaintProductsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold uppercase tracking-wider mb-2">Premium Materials Only</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why We Use Sherwin-Williams &amp; Benjamin Moore
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We exclusively use the industry's best paints — not because they're expensive, but because they deliver better results that last longer. Here's what we use and why.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Lines */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((brand) => (
            <Card key={brand.brand} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-muted/50 p-6 border-b border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                      <Image
                        src={brand.logo}
                        alt={`${brand.brand} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{brand.brand}</h3>
                      <p className="text-sm text-muted-foreground">{brand.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {brand.products.map((product) => (
                      <div key={product.name} className="flex gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">
                            {product.name} <span className="text-muted-foreground font-normal">— {product.use}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">{product.why}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Your paint is included in our quotes</strong> — we never upcharge for premium materials. You get the best products at competitive prices.
          </p>
        </div>
      </div>
    </section>
  )
}
