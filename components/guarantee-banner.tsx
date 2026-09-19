import { ShieldCheck } from "lucide-react"

export function GuaranteeBanner() {
  return (
    <div className="warranty-snippet bg-secondary py-4" data-speakable="true">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 text-center">
          <ShieldCheck className="h-6 w-6 text-secondary-foreground flex-shrink-0" />
          <div>
            <span className="font-bold text-secondary-foreground text-lg">100% Satisfaction Guaranteed</span>
            <span className="hidden sm:inline text-secondary-foreground mx-2">–</span>
            <br className="sm:hidden" />
            <span className="text-secondary-foreground/90">You Love It or We Fix It Free</span>
          </div>
        </div>
      </div>
    </div>
  )
}
