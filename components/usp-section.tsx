import { Paintbrush, Shield, CreditCard, Sparkles, Award, MessageSquare } from "lucide-react"

const uspPoints = [
  {
    icon: Paintbrush,
    title: "Old-School Preparation",
    description: "We believe proper preparation is what creates long-lasting paint jobs. Every project includes professional surface preparation before any paint is applied."
  },
  {
    icon: Shield,
    title: "5-Year Exterior Warranty",
    description: "Our exterior painting systems are designed specifically for Houston heat, humidity, rain and UV exposure."
  },
  {
    icon: CreditCard,
    title: "No Money Until You Approve",
    description: "Your estimate is free and nothing is collected until you approve it. A down payment then schedules the job, and the balance is due after the final walkthrough."
  },
  {
    icon: Sparkles,
    title: "Clean & Organized Worksites",
    description: "Floors, furniture, landscaping and surrounding areas are fully protected during every project."
  },
  {
    icon: Award,
    title: "Premium Products",
    description: "We use trusted products from Sherwin-Williams and other premium manufacturers for maximum durability."
  },
  {
    icon: MessageSquare,
    title: "Professional Communication",
    description: "Clear communication and daily updates help homeowners feel confident throughout the entire process."
  }
]

export function USPSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Why Houston Homeowners Choose Houston Superior Painting
          </h2>
        </div>

        {/* USP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {uspPoints.map((point) => (
            <div 
              key={point.title}
              className="flex items-start gap-4 bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm border border-primary-foreground/20"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <point.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{point.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Paint Brands */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60 uppercase tracking-wider mb-4">Trusted Paint Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <span className="text-xl font-semibold text-primary-foreground/90">Benjamin Moore</span>
            <span className="text-primary-foreground/40">|</span>
            <span className="text-xl font-semibold text-primary-foreground/90">Sherwin-Williams</span>
          </div>
        </div>
      </div>
    </section>
  )
}
