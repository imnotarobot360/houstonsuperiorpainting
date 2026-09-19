import Link from "next/link"
import { EPOXY_URL } from "@/lib/business"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building2, Palette, Droplets, Columns, Shield, Hammer, ArrowRight, Car, Layers, Wrench, Scissors } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Interior Painting",
    description: "Transform your living spaces with expert interior painting. From single accent walls to full-home repaints, we deliver flawless, brush-mark-free results with factory-finish spray techniques.",
    features: ["Walls & ceilings", "Trim & molding", "Doors & frames"],
    href: "/interior-painting-houston-tx"
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with durable, weather-resistant finishes engineered for Houston heat, humidity, heavy rains, and intense UV.",
    features: ["Siding & stucco", "Trim & fascia", "5-year warranty"],
    href: "/exterior-painting-houston-tx"
  },
  {
    icon: Palette,
    title: "Cabinet Painting & Refinishing",
    description: "Transform dated cabinets with factory-finish spray techniques at a fraction of replacement cost. Smooth, durable results that last.",
    features: ["Kitchen cabinets", "Bathroom vanities", "Grain filling"],
    href: "/cabinet-refinishing-houston-tx"
  },
  {
    icon: Hammer,
    title: "Drywall Repair & Texture Matching",
    description: "We fix cracks, holes, and imperfections before painting for a flawless final result with seamless texture matching.",
    features: ["Crack repair", "Hole patching", "Texture matching"],
    href: "/drywall-repair-houston-tx"
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Professional pressure washing to clean and prepare surfaces before painting or as a standalone service.",
    features: ["Driveways & patios", "Siding & decks", "Pre-paint prep"],
    href: "/pressure-washing-houston-tx"
  },
  {
    icon: Columns,
    title: "Limewash & Brick Painting",
    description: "Add timeless character to your brick exterior with authentic limewash or professional brick painting.",
    features: ["Authentic limewash", "Brick painting", "German smear"],
    href: "/limewash-brick-painting-houston-tx"
  },
  {
    icon: Shield,
    title: "Commercial Painting",
    description: "Minimize downtime with our efficient commercial painting services for offices, retail, and industrial spaces.",
    features: ["After-hours work", "Minimal disruption", "Industrial coatings"],
    href: "/commercial-painting-houston-tx"
  },
  {
    icon: Hammer,
    title: "Load Bearing Wall Removal",
    description: "Open up your floor plan with professional load bearing wall removal and structural modifications.",
    features: ["Structural assessment", "Permit assistance", "Clean finish work"],
    href: "/load-bearing-wall-removal-houston-tx"
  },
  {
    icon: Car,
    title: "Garage Floor Epoxy",
    description: "Transform your garage with durable, chemical-resistant epoxy coatings that look stunning and last for years.",
    features: ["Metallic finishes", "Flake systems", "15-year durability"],
    // Straight to the epoxy subdomain: the -tx slug is a 308 redirect hop.
    href: EPOXY_URL
  },
  {
    icon: Layers,
    title: "Stucco Painting & Repair",
    description: "Flexible elastomeric coatings and lasting crack repair built for Houston's heat, humidity, and storms. We fix the cause, not just the surface.",
    features: ["Elastomeric coatings", "Crack repair", "Waterproofing"],
    href: "/stucco-painting-houston-tx"
  },
  {
    icon: Wrench,
    title: "Wood Rot Repair",
    description: "Fascia, soffits, trim, siding, and sills repaired or replaced and repainted to look original. We correct the moisture source so rot doesn't return.",
    features: ["Fascia & soffits", "Trim & siding", "Moisture correction"],
    href: "/wood-rot-repair-houston-tx"
  },
  {
    icon: Scissors,
    title: "Wallpaper Removal",
    description: "Clean, damage-free removal, expert wall repair, and a flawless painted finish — from dated wallpaper to a fresh modern room.",
    features: ["Steam removal", "Adhesive cleanup", "Skim coat & paint"],
    href: "/wallpaper-removal-houston-tx"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Professional Painting &amp; Remodeling Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From interior painting to load bearing wall removal, we deliver exceptional results with attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.href && (
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            asChild
          >
            <Link href="/contact">Get a Free Estimate for Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
