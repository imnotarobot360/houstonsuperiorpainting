import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import { PRICES_2026 } from "@/lib/business"

// Must agree with PRICES_2026 in lib/business.ts and the /houston-painting-cost-guide tables.
const pricingData = [
  {
    service: "Interior Painting",
    priceRange: PRICES_2026.interiorPerSqFt,
    unit: "per sq ft",
    examples: [
      `1,500 sq ft home: ${PRICES_2026.fullInterior1500}`,
      `2,500 sq ft home: ${PRICES_2026.fullInterior2500}`,
      `Single room: ${PRICES_2026.singleRoom}`
    ],
    factors: ["Wall condition", "Ceiling height", "Trim & doors included", "Number of colors"],
    popular: false
  },
  {
    service: "Exterior Painting",
    priceRange: PRICES_2026.exteriorPerHome,
    unit: "typical home",
    examples: [
      `1-story (1,500 sq ft): ${PRICES_2026.exterior1500OneStory}`,
      `2-story (2,500 sq ft): ${PRICES_2026.exterior2500TwoStory}`,
      `2-story (4,000+ sq ft): ${PRICES_2026.exterior4000TwoStory}`
    ],
    factors: ["Siding type", "Stories & accessibility", "Prep work needed", "Trim & accent colors"],
    popular: true
  },
  {
    service: "Cabinet Refinishing",
    priceRange: PRICES_2026.cabinetsPerKitchen,
    unit: "average kitchen",
    examples: [
      `Galley kitchen (10-15 doors): ${PRICES_2026.cabinetsGalley}`,
      `Average kitchen (15-25 doors): ${PRICES_2026.cabinetsAverage}`,
      `Large kitchen with island (25-40 doors): ${PRICES_2026.cabinetsLarge}`
    ],
    factors: ["Number of doors/drawers", "Wood vs laminate", "Color change vs refresh", "Hardware replacement"],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No surprises, no hidden fees. Here&apos;s what Houston homeowners typically invest in quality painting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingData.map((item) => (
            <Card key={item.service} className={`relative ${item.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-semibold">{item.service}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">{item.priceRange}</span>
                  <span className="text-muted-foreground ml-2">{item.unit}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Typical Projects:</p>
                  <ul className="space-y-1">
                    {item.examples.map((example, i) => (
                      <li key={i} className="text-sm text-foreground flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Price Factors:</p>
                  <ul className="space-y-1">
                    {item.factors.map((factor, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Info className="h-3 w-3 mt-1 flex-shrink-0" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Every project is unique. Get an exact quote for your home — it&apos;s free and takes just 24 hours.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" asChild>
            <a href="/contact">Get Your Free Estimate</a>
          </Button>
          <p className="text-sm text-muted-foreground">
            No obligation • No upfront payment
          </p>
        </div>
      </div>
    </section>
  )
}
