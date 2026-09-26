"use client"

import { Star, Shield, CheckCircle, Clock } from "lucide-react"
import { BUSINESS } from "@/lib/business"

/**
 * `hideRating`: pass on every city page except /painters-houston-tx. The
 * 4.9 / 200+ figure belongs to the Houston Google Business Profile, so other
 * city pages show a "See reviews on Google" link instead.
 */
export function TrustBar({ hideRating = false }: { hideRating?: boolean } = {}) {
  const { googleRating, reviewCount, projectsCompleted, warrantyYears } = BUSINESS.trust

  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap text-center">
          {hideRating ? (
            <a
              href={BUSINESS.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 underline-offset-2 hover:underline"
            >
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-semibold">See reviews on Google</span>
            </a>
          ) : (
            <>
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-secondary text-secondary" />
                <span className="font-semibold">{googleRating} Stars</span>
              </div>
              <span className="hidden sm:inline text-primary-foreground/50">|</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" />
                <span>{reviewCount}+ Google Reviews</span>
              </div>
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
          <span className="hidden lg:inline text-primary-foreground/50">|</span>
          <div className="hidden lg:flex items-center gap-1.5">
            <span className="font-semibold text-secondary">No Money Until You Approve</span>
          </div>
        </div>
      </div>
    </div>
  )
}
