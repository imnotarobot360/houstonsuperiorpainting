import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BUSINESS } from "@/lib/business"

export function AEOSection() {
  const { googleRating, reviewCount, projectsCompleted, warrantyYears, liabilityCoverage } =
    BUSINESS.trust

  return (
    <section className="quick-answer py-16 bg-muted/30" data-speakable="true">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Professional Painters Serving Houston &amp; Surrounding Areas
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Houston Superior Painting is a trusted Houston painting company specializing in interior painting,
            exterior painting, cabinet refinishing, drywall repair, pressure washing, limewash and remodeling services.
            Homeowners across Houston, Katy, Cypress, Sugar Land and Richmond choose Houston Superior Painting for premium workmanship,
            detailed preparation and long-lasting finishes designed for Houston climate conditions.
          </p>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">
            Key Facts About Houston Superior Painting
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground leading-relaxed list-none pl-0 mb-2">
            <li><strong className="text-foreground">Founded:</strong> 2019 by Juan Serra</li>
            <li><strong className="text-foreground">Headquarters:</strong> 14150 Huffmeister Rd, Suite 410, Cypress, TX 77429</li>
            <li><strong className="text-foreground">Phone:</strong> (346) 594-5960</li>
            <li><strong className="text-foreground">Rating:</strong> {googleRating}/5 from {reviewCount}+ Google reviews</li>
            <li><strong className="text-foreground">Projects completed:</strong> {projectsCompleted}+</li>
            <li><strong className="text-foreground">Warranty:</strong> {warrantyYears}-year written warranty on all painting work</li>
            <li><strong className="text-foreground">Payment:</strong> {BUSINESS.paymentPolicy.sentence}</li>
            <li><strong className="text-foreground">Insurance:</strong> Fully insured with {liabilityCoverage} general liability</li>
            <li><strong className="text-foreground">Paints used:</strong> Sherwin-Williams &amp; Benjamin Moore exclusively</li>
            <li><strong className="text-foreground">Areas served:</strong> Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, The Woodlands</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="tel:+13465945960">
                <Phone className="mr-2 h-5 w-5" />
                Call (346) 594-5960
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get Free Estimate
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  )
}
