import Link from "next/link"
import { EPOXY_URL } from "@/lib/business"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Palette, Droplets, Columns, Car } from "lucide-react"

const projectTypes = [
  {
    icon: Home,
    title: "Interior Painting",
    description: "Walls, ceilings, trim, doors",
    href: "/interior-painting-houston-tx",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    description: "Siding, stucco, trim, fascia",
    href: "/exterior-painting-houston-tx",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Palette,
    title: "Cabinet Refinishing",
    description: "Kitchen & bathroom cabinets",
    href: "/cabinet-refinishing-houston-tx",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Columns,
    title: "Limewash & Brick",
    description: "European finishes, German smear",
    href: "/limewash-brick-painting-houston-tx",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Car,
    title: "Garage Floor Epoxy",
    description: "Metallic, flake, solid color",
    // Straight to the epoxy subdomain: the -tx slug is a 308 redirect hop.
    href: EPOXY_URL,
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Driveways, siding, decks",
    href: "/pressure-washing-houston-tx",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

export function ProblemSelector() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-secondary font-semibold uppercase tracking-wider mb-2">What Do You Need?</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Select Your Project Type
          </h2>
          <p className="text-muted-foreground">
            Click your project to see pricing, process, and examples
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {projectTypes.map((project) => (
            <Link key={project.title} href={project.href}>
              <Card className="h-full bg-card border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 ${project.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <project.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{project.title}</h3>
                  <p className="text-xs text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
