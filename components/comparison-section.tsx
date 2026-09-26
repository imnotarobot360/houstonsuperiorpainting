import { Check, X } from "lucide-react"

const rows = [
  {
    feature: "Surface prep before painting",
    us: "Wash, sand, prime, caulk & mask every surface",
    them: "Quick scuff and a coat of paint",
  },
  {
    feature: "Crew",
    us: "Background-checked, in-house W-2 employees",
    them: "Rotating day-labor subcontractors",
  },
  {
    feature: "Paint quality",
    us: "Premium Sherwin-Williams & Benjamin Moore",
    them: "Cheapest available builder-grade paint",
  },
  {
    feature: "Exterior warranty",
    us: "5-year written workmanship warranty",
    them: "Little or no warranty",
  },
  {
    feature: "Payment",
    us: "Nothing collected until you approve the estimate; down payment after approval",
    them: "Large deposit required before work starts",
  },
  {
    feature: "Estimate",
    us: "Free, itemized, no hidden fees",
    them: "Vague verbal quote, surprise add-ons",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Houston Homeowners Switch to Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The difference isn&apos;t the paint &mdash; it&apos;s everything that happens before the brush touches your walls.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          {/* Header row */}
          <div className="grid grid-cols-3 bg-card">
            <div className="p-4 sm:p-5" />
            <div className="p-4 sm:p-5 text-center bg-primary text-primary-foreground">
              <span className="font-serif text-base sm:text-lg font-bold">Houston Superior Painting</span>
            </div>
            <div className="p-4 sm:p-5 text-center">
              <span className="font-semibold text-base sm:text-lg text-muted-foreground">Typical Contractor</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-t border-border ${i % 2 === 1 ? "bg-muted/40" : "bg-background"}`}
            >
              <div className="p-4 sm:p-5 flex items-center font-medium text-foreground text-sm sm:text-base">
                {row.feature}
              </div>
              <div className="p-4 sm:p-5 flex items-start gap-2 bg-primary/5">
                <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <span className="text-sm text-foreground">{row.us}</span>
              </div>
              <div className="p-4 sm:p-5 flex items-start gap-2">
                <X className="h-5 w-5 flex-shrink-0 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">{row.them}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
