import { Shield, Clock } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { OfficeReviewBadge, ReviewsInline, ReviewsLink } from "@/components/office-reviews"

/**
 * Google ratings are shown per office, never combined (owner, 2026-10-10).
 * `office`: the office page slug (e.g. "painters-houston-tx") to show only that
 * office's own Google rating and link. Without it, every office is listed.
 * `hideRating` is kept for older callers and has the same effect as omitting `office`.
 */
export function TrustBar({ office }: { office?: string; hideRating?: boolean } = {}) {
  const { projectsCompleted, warrantyYears } = BUSINESS.trust

  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap text-center">
          {office ? (
            <OfficeReviewBadge pageSlug={office} className="font-semibold" />
          ) : (
            <>
              <ReviewsInline className="hidden lg:inline-flex" />
              <ReviewsLink className="lg:hidden font-semibold" />
            </>
          )}
          <span className="hidden sm:inline text-primary-foreground/50">|</span>
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{projectsCompleted}+ Projects</span>
          </div>
          <span className="hidden md:inline text-primary-foreground/50">|</span>
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4" />
            <span>{warrantyYears}-Year Warranty</span>
          </div>
          <span className="hidden xl:inline text-primary-foreground/50">|</span>
          <div className="hidden xl:flex items-center gap-1.5">
            <span className="font-semibold text-secondary">No Upfront Payment</span>
          </div>
        </div>
      </div>
    </div>
  )
}
