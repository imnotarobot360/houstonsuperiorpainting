import { ShieldCheck, BadgeCheck, Award, Star } from "lucide-react"

const badges = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    subtitle: "$2M liability + workers' comp",
  },
  {
    icon: BadgeCheck,
    title: "5-Year Warranty",
    subtitle: "Written workmanship guarantee",
  },
  {
    icon: Award,
    title: "500+ Projects",
    subtitle: "Completed across Greater Houston",
  },
  {
    // No rating number here: this footer badge renders on every page, and the
    // 4.9 / 200+ figure belongs to one Google Business Profile (Houston).
    // Each office page links to its own Google reviews instead.
    icon: Star,
    title: "No Upfront Payment",
    subtitle: "Pay after the final walkthrough",
  },
]

export function TrustBadges() {
  return (
    <section aria-label="Why homeowners trust Houston Superior Painting" className="bg-secondary/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <badge.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <p className="font-manrope text-base font-semibold text-foreground">{badge.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
