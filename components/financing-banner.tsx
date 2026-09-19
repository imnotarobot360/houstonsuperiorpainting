import { CreditCard, ArrowRight } from "lucide-react"

export function FinancingBanner() {
  return (
    <section className="bg-primary py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-primary-foreground/10 rounded-lg items-center justify-center">
              <CreditCard className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground text-balance">
                Paint Now, Pay Over Time
              </h2>
              <p className="text-primary-foreground/80 mt-1 max-w-xl text-pretty">
                Flexible financing options for Houston homeowners &mdash; with affordable monthly
                payments and plans available for projects of every size.
              </p>
            </div>
          </div>
          <a
            href="/painting-financing-houston"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-lg transition-colors hover:bg-secondary/90 whitespace-nowrap"
          >
            View Financing Options
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
