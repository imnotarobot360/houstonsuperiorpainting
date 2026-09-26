"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Calendar, CheckCircle } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { trackEstimateClick, trackEvent } from "@/lib/analytics"
import { useHidesInterruptions } from "@/lib/focused-routes"

export function ExitIntent() {
  // Hooks first, branch later — see the note in sticky-cta.tsx.
  const focused = useHidesInterruptions()
  const [showModal, setShowModal] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Don't even listen on a focused route. Returning null at render time would
    // still leave this listener firing `exit_intent_shown` into analytics for a
    // modal that never appears, inflating an engagement metric with phantoms.
    if (focused) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setShowModal(true)
        setHasShown(true)
        trackEvent("exit_intent_shown", { event_category: "engagement" })
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasShown, focused])

  const openScheduler = () => {
    setShowModal(false)
    trackEstimateClick("exit_intent_popup")
    // Prefer scrolling to the on-page scheduler if it exists on this route,
    // otherwise open the InsightPaint scheduler in a new tab.
    const schedulerSection = document.getElementById("schedule")
    if (schedulerSection) {
      schedulerSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.open(BUSINESS.scheduler.embedUrl, "_blank", "noopener,noreferrer")
    }
  }

  if (focused || !showModal) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
            <Calendar className="h-8 w-8 text-secondary" />
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              Before You Go...
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Lock in your <span className="font-semibold text-secondary">FREE estimate</span> spot today. 
              No obligation, no pressure — just a quick quote for your project.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-2 text-left">
            {[
              "Takes less than 2 minutes",
              "No obligation - completely free",
              `No upfront payment, ${BUSINESS.trust.warrantyYears}-year workmanship warranty`
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button 
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            onClick={openScheduler}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Free Estimate
          </Button>

          <p className="text-xs text-muted-foreground">
            Limited spots available this week
          </p>
        </div>
      </div>
    </div>
  )
}
