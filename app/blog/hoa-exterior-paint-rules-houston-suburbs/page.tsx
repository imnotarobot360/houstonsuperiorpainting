import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User, Calendar, Phone, ClipboardCheck, FileText, CheckCircle2, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "HOA Exterior Paint Rules in Houston Suburbs",
  description: "HOA painting rules in Houston suburbs can be tricky. Here's what homeowners in Katy, Sugar Land, Cypress, and The Woodlands need to know before they paint.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/blog/hoa-exterior-paint-rules-houston-suburbs',
  },
  openGraph: {
    title: "HOA Exterior Paint Rules in Katy, Sugar Land & The Woodlands TX",
    description: "HOA painting rules in Houston suburbs can be tricky. Here's what homeowners in Katy, Sugar Land, Cypress, and The Woodlands need to know before they paint.",
    url: "https://houstonsuperiorpainting.com/blog/hoa-exterior-paint-rules-houston-suburbs",
    siteName: "Houston Superior Painting",
    type: "article",
    publishedTime: "2026-05-27T00:00:00Z",
    authors: ["Juan Serra"],
    images: [{
      url: "https://houstonsuperiorpainting.com/images/blog/hoa-paint-rules-houston.png",
      width: 1200,
      height: 630,
      alt: "HOA Exterior Paint Rules in Houston Suburbs",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOA Exterior Paint Rules in Katy, Sugar Land & The Woodlands TX",
    description: "HOA painting rules in Houston suburbs can be tricky. Here's what homeowners in Katy, Sugar Land, Cypress, and The Woodlands need to know before they paint.",
    images: ["https://houstonsuperiorpainting.com/images/blog/hoa-paint-rules-houston.png"],
  },
}

// BreadcrumbList — Home > Blog > this post. Hand-rolled posts like this one
// shipped Article markup with no breadcrumb, so they could not earn a
// breadcrumb rich result. Title mirrors the Article headline so the two
// nodes always agree.
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://houstonsuperiorpainting.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "HOA Exterior Paint Rules in Houston Suburbs: What Homeowners Need to Know Before They Paint", "item": "https://houstonsuperiorpainting.com/blog/hoa-exterior-paint-rules-houston-suburbs" }
  ]
}

export default function HOAPaintRulesBlog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "HOA Exterior Paint Rules in Houston Suburbs: What Homeowners Need to Know Before They Paint",
            "description": "HOA painting rules in Houston suburbs can be tricky. Here's what homeowners in Katy, Sugar Land, Cypress, and The Woodlands need to know before they paint.",
            "image": "https://houstonsuperiorpainting.com/images/blog/hoa-paint-rules-houston.png",
            "author": {
              "@type": "Organization",
              "name": "Houston Superior Painting",
              "url": "https://houstonsuperiorpainting.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Houston Superior Painting",
              "logo": {
                "@type": "ImageObject",
                "url": "https://houstonsuperiorpainting.com/images/logo.png"
              }
            },
            "datePublished": "2026-05-27",
            "dateModified": "2026-05-27",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://houstonsuperiorpainting.com/blog/hoa-exterior-paint-rules-houston-suburbs"
            }
          })
        }}
      />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do I need HOA approval to repaint my house the same color in Houston?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In many Houston-area communities, yes — even repainting the same color requires an ARC submission before work begins. Check your specific community's guidelines."
                }
              },
              {
                "@type": "Question",
                "name": "How long does HOA paint approval take in communities like Cinco Ranch or Riverstone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most HOA architectural review committees in Houston operate on 14–30 day review cycles. Contact your HOA management company for your community's specific timeline."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if I paint my house without HOA approval?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You risk a violation notice and a requirement to repaint in an approved color at your own expense. Always get written approval before any exterior painting begins."
                }
              },
              {
                "@type": "Question",
                "name": "Can I paint my front door a different color from what the HOA palette lists?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many HOAs have separate standards for front doors than for body and trim colors — sometimes allowing more personality at the door. Check your specific community's guidelines for approved door accent colors."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best way to find my HOA's approved exterior color list?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact your HOA management company directly, check your community's resident portal or website, or reach out to your neighborhood's architectural review committee."
                }
              }
            ]
          })
        }}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary/5 border-b border-border">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-4">HOA Guide</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                HOA Exterior Paint Rules in Houston Suburbs: What Homeowners Need to Know Before They Paint
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                HOA painting rules in Houston suburbs can be tricky. Here&apos;s what homeowners in Katy, Sugar Land, Cypress, and The Woodlands need to know before they paint.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Juan Serra
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  May 27, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  11 min read
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary/10 border-secondary/30">
              <CardContent className="p-6">
                <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5 text-secondary" />
                  Quick Answer: The HOA Paint Approval Process
                </h2>
                <p className="text-muted-foreground">
                  The HOA paint approval process in Houston suburbs typically involves: (1) obtaining the community&apos;s current approved color palette from your HOA management company; (2) selecting body, trim, door, and accent colors from the approved list; (3) submitting a written ARC application with exact color names and codes for each element; and (4) receiving written approval before any painting begins. Review timelines are usually 14–30 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Image */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src="/images/blog/hoa-paint-rules-houston.png"
                alt="A master-planned community home in a Houston suburb with HOA-approved exterior colors"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            
            <p className="lead">
              If you live in Katy, Sugar Land, Cypress, The Woodlands, or any number of Houston-area master-planned communities, your HOA has something to say about what color you can paint your house. This isn&apos;t a surprise to most homeowners — but navigating the actual process of getting a paint color approved can be more involved than people expect.
            </p>

            <p>
              Getting it wrong means starting over. Painting a color your HOA rejects means repainting on your own dime, usually under a deadline. Getting it right the first time starts with understanding how the process works.
            </p>

            <h2>Why HOA Exterior Paint Rules Exist</h2>
            <p>
              Master-planned communities in Greater Houston were designed with intentional aesthetic cohesion. Communities like Cinco Ranch in Katy, Riverstone and First Colony in Sugar Land, the various villages in The Woodlands, and Bridgeland and Stone Gate in Cypress were all built with community-wide appearance standards that apply to every homeowner.
            </p>
            <p>
              These standards exist to protect property values — which benefits everyone in the community, even when the approval process feels like an obstacle. Homes that maintain consistent, attractive exteriors support the value of every neighboring home.
            </p>
            <p>
              For painters, HOA constraints aren&apos;t a problem — they&apos;re just part of the project scope. A good <Link href="/exterior-painting-houston">exterior painting contractor</Link> will factor your HOA requirements into the planning process from the start.
            </p>

            <h2>How HOA Color Approval Generally Works in Houston Suburbs</h2>
            <p>
              The specifics vary by community, but most HOA architectural review processes in the Houston area follow a similar structure:
            </p>

            {/* Steps Cards */}
            <div className="not-prose grid gap-4 my-8">
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary">1</div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Obtain the Current Approved Color Palette</p>
                      <p className="text-sm text-muted-foreground">Most HOAs maintain an approved color list — sometimes hundreds of pre-approved combinations, sometimes a shorter curated list. This is almost always available through your HOA management company, your community&apos;s resident portal, or by submitting a request to the architectural review committee (ARC).</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary">2</div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Select Your Colors Within the Approved Palette</p>
                      <p className="text-sm text-muted-foreground">Choose your body color, trim color, and accent colors (shutters, door, etc.) from the approved list. Most HOA approvals cover the full exterior — body, trim, doors, shutters, and sometimes even garage doors. Each element may need to be specified in your application.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary">3</div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Submit the ARC Application</p>
                      <p className="text-sm text-muted-foreground">Most communities require a written application to the ARC before any work begins — including paint color names and codes (with brand), the element each color applies to, sometimes a photo of the current exterior, and occasionally paint chip samples or a color board.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary">4</div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Get Written Approval Before Painting Starts</p>
                      <p className="text-sm text-muted-foreground">This is critical: do not begin painting before written approval is in hand. Verbal assurances from a board member or neighbor are not binding. Paint before approval and you risk being required to repaint — at your expense — in an approved color.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2>Houston Suburb HOA Color Tendencies</h2>
            <p>
              While we can&apos;t speak to every community&apos;s specific requirements, here&apos;s the general palette direction common in Houston-area HOA communities:
            </p>

            <h3>Katy (Cinco Ranch, Firethorne, Cross Creek Ranch, Seven Meadows)</h3>
            <p>
              These communities generally prefer earth tones, muted neutrals, and warm color families. Bright or saturated colors are typically not approved. Brick-compatible tones (warm taupes, greiges, soft browns) are common. Learn more about our <Link href="/painters-katy-tx">painting services in Katy</Link>.
            </p>

            <h3>Sugar Land (Riverstone, First Colony, Sweetwater, New Territory)</h3>
            <p>
              Similar direction to Katy — earth tones and muted palettes predominate. First Colony has a particularly active ARC with detailed standards. Riverstone trends slightly more contemporary in its approved colors. See our <Link href="/painters-sugar-land-tx">Sugar Land painting services</Link>.
            </p>

            <h3>The Woodlands (Creekside Park, Sterling Ridge, Alden Bridge, Panther Creek)</h3>
            <p>
              Colors are expected to complement the wooded, natural setting. Greens, earth tones, warm whites, and muted blues are common in the approved palette. Bright or high-contrast color combinations are rarely approved. We cover this in detail in our guide to <Link href="/blog/best-exterior-colors-homes-the-woodlands-tx">the best exterior colors for The Woodlands homes</Link>.
            </p>

            <h3>Cypress (Bridgeland, Stone Gate, Fairfield)</h3>
            <p>
              Similar to Katy in general direction. Bridgeland in particular has active architectural standards as a newer master-planned community. Explore our <Link href="/painters-cypress-tx">Cypress painting services</Link>.
            </p>

            <p>
              None of this means you can&apos;t have a home that stands out beautifully — it means finding distinctive character within a palette that works for the community context.
            </p>

            <h2>Common HOA Painting Mistakes Houston Homeowners Make</h2>

            {/* Mistakes Cards */}
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Painting without submitting</p>
                      <p className="text-sm text-muted-foreground">Even going back to the same color, many HOAs require submission before any exterior work.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Submitting chip samples, not codes</p>
                      <p className="text-sm text-muted-foreground">Committees want exact color names and codes — brand, name, and number — not chips to guess at.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Not specifying every element</p>
                      <p className="text-sm text-muted-foreground">Body and trim get submitted but the door, shutters, or garage door get forgotten. If it&apos;s visible from the street, it likely needs to be on the application.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Assuming old approval carries over</p>
                      <p className="text-sm text-muted-foreground">Palettes change over time. A color approved three years ago may not be on the current approved list. Always verify before repainting.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p>
              One more mistake worth its own mention: <strong>hiring a painter who doesn&apos;t understand HOA timelines.</strong> If your ARC takes 30 days to review and your painter wants to start in two weeks, there&apos;s a timing problem. A contractor experienced with Houston HOA communities builds the approval timeline into the project schedule from the start.
            </p>

            <h2>What to Do If Your Color Is Rejected</h2>
            <p>
              It happens. Submit again with a color from the approved list that&apos;s close to your original choice. Most HOAs have options within any color family — if your first pick was rejected, the ARC can often point you toward approved alternatives that are close.
            </p>
            <p>
              If you believe the rejection was applied incorrectly (a color that meets the stated standards was rejected for unclear reasons), most HOAs have an appeal process. This is worth pursuing if you feel strongly — but build extra time into your project schedule for it.
            </p>

            <h2>How a Professional Painting Contractor Can Help With HOA Approval</h2>
            <p>
              A painter experienced with Houston-area HOA communities — like the team at Houston Superior Painting — can make the approval process significantly easier:
            </p>

            {/* Help Cards */}
            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Familiarity with community palettes</p>
                      <p className="text-sm text-muted-foreground">We work in these communities regularly and know what colors tend to pass and what tends to be flagged.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Accurate application documentation</p>
                      <p className="text-sm text-muted-foreground">We help you prepare your ARC submission with the correct color names, codes, and element-by-element breakdown.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Timeline planning</p>
                      <p className="text-sm text-muted-foreground">We schedule projects around approval timelines rather than asking you to figure out how to align them.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Color guidance within constraints</p>
                      <p className="text-sm text-muted-foreground">A color consultation that incorporates your HOA&apos;s approved palette helps you find colors you love within the approved options.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <h2>Frequently Asked Questions</h2>

            <h3>Do I need HOA approval to repaint my house the same color in Houston?</h3>
            <p>
              In many Houston-area communities, yes — even repainting in the same color requires an ARC submission before work begins. Check your community&apos;s specific guidelines. Some communities have simplified processes for exact-match repaints; others require a full application regardless.
            </p>

            <h3>How long does HOA paint approval take in communities like Cinco Ranch or Riverstone?</h3>
            <p>
              Most HOA architectural review committees in the Houston area operate on 14–30 day review cycles. Some have rolling deadlines; others meet monthly. Contact your HOA management company for the specific timeline in your community and build that into your painting project schedule.
            </p>

            <h3>What happens if I paint my house without HOA approval?</h3>
            <p>
              If your HOA requires prior approval and you paint without it, you risk a violation notice and a requirement to repaint in an approved color — at your expense. This is a costly and avoidable situation. Always get written approval before any exterior painting begins.
            </p>

            <h3>Can I paint my front door a different color from what the HOA palette lists?</h3>
            <p>
              Many HOAs have separate standards for front doors than for body and trim colors — sometimes allowing more personality at the door. Check your specific community&apos;s guidelines. Some communities have a curated list of approved door accent colors that allows more expression than the body color palette.
            </p>

            <h3>What&apos;s the best way to find my HOA&apos;s approved exterior color list?</h3>
            <p>
              Contact your HOA management company directly, check your community&apos;s resident portal or website, or reach out to your neighborhood&apos;s architectural review committee. When in doubt, calling and asking is always appropriate — HOA offices expect these questions and are generally helpful.
            </p>

          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Ready to Get Your Exterior Paint Project Moving?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We&apos;ve helped homeowners throughout Katy, Sugar Land, The Woodlands, Cypress, and greater Houston navigate HOA approval and come out with an exterior they&apos;re genuinely proud of. We&apos;ll help you choose colors, prepare your submission, and schedule the project so everything lines up smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:+13465945960" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (346) 594-5960
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">Exterior Painting</Badge>
                  <h3 className="font-semibold text-foreground mb-2">
                    <Link href="/blog/best-exterior-colors-homes-the-woodlands-tx" className="hover:text-primary transition-colors">
                      Best Exterior Colors for Homes in The Woodlands TX
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choosing exterior colors for a wooded, HOA-governed community? Here&apos;s what works.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">Pricing</Badge>
                  <h3 className="font-semibold text-foreground mb-2">
                    <Link href="/houston-painting-cost-guide" className="hover:text-primary transition-colors">
                      Houston Painting Cost Guide
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete pricing breakdown for interior, exterior, and cabinet painting in Houston.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
