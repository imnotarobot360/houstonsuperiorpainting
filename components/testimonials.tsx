"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Heights, Houston",
    rating: 5,
    text: "Absolutely phenomenal work! The team was professional, punctual, and left our home spotless. The attention to detail on our trim work was impressive. Highly recommend!",
    project: "Full Interior Repaint"
  },
  {
    name: "James Rodriguez",
    location: "Katy, TX",
    rating: 5,
    text: "We&apos;ve used Houston Superior for two projects now - our home exterior and office space. Both times they exceeded expectations. Fair pricing and beautiful results.",
    project: "Exterior & Commercial"
  },
  {
    name: "Emily Chen",
    location: "Sugar Land, TX",
    rating: 5,
    text: "The color consultation service was a game-changer. They helped us choose the perfect palette and executed flawlessly. Our living room has never looked better!",
    project: "Living Room Transformation"
  },
  {
    name: "Michael Thompson",
    location: "Memorial, Houston",
    rating: 5,
    text: "Fast, clean, and professional. They finished our 4-bedroom house in just 3 days. The team was courteous and the quality speaks for itself. Will definitely use again.",
    project: "Whole House Interior"
  },
  {
    name: "Lisa Patel",
    location: "Pearland, TX",
    rating: 5,
    text: "Outstanding cabinet refinishing work. They transformed our dated oak cabinets into a beautiful modern white finish. Saved us thousands compared to replacement!",
    project: "Kitchen Cabinet Refinish"
  },
  {
    name: "David Williams",
    location: "The Woodlands, TX",
    rating: 5,
    text: "Trusted them with my investment property and they delivered excellent results on time and on budget. Communication was great throughout the project.",
    project: "Investment Property"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What Houston Homeowners Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  {testimonial.text.replace(/'/g, "&apos;")}
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-primary mt-1">{testimonial.project}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "4.9", label: "Average Rating" },
            { value: "6+", label: "Years in Business" },
            { value: "100%", label: "Satisfaction Guarantee" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
