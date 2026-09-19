import { CheckCircle, Clock, Shield } from "lucide-react"
import { InsightPaintWidget } from "@/components/insightpaint-widget"

export function SchedulerSection() {
  return (
    <section id="schedule" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-secondary font-semibold uppercase tracking-wider mb-2">Free Quote</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Send Us Photos for a Free Quote
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Snap a few photos of your project and upload them — no calls, no waiting. We&apos;ll review them
                and send back a detailed, no-obligation quote.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: Clock, text: "Takes less than 2 minutes to submit" },
                { icon: Shield, text: "No obligation - No upfront cost" },
                { icon: CheckCircle, text: "Fast turnaround - quote sent straight to you" },
              ].map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* InsightPaint Scheduler Embed */}
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden p-2">
            <InsightPaintWidget minHeight={700} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
