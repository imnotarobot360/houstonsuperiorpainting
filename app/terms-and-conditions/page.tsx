import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/terms-and-conditions',
  },
  title: "Terms and Conditions | Houston Superior Painting",
  description: "Terms and Conditions for Houston Superior Painting services. Read our service agreement, warranties, and policies.",
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Terms and Conditions
            </h1>
            <p className="text-primary-foreground/80">
              Last updated: May 10, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4 prose-h2:text-2xl prose-h2:font-bold prose-p:text-foreground/80 prose-p:leading-7 prose-p:mb-5 prose-li:text-foreground/80 prose-li:leading-7 prose-ul:my-5 prose-ul:pl-6">
            
            <p>
              Please read these Terms and Conditions (&quot;Terms&quot;) carefully before using the services of Houston Superior Painting (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By engaging our services, you agree to be bound by these Terms.
            </p>

            <h2>Services</h2>
            <p>
              Houston Superior Painting provides professional painting and related services including interior painting, exterior painting, cabinet refinishing, drywall repair, pressure washing, limewash application, and remodeling services for residential and commercial properties in the Houston metropolitan area.
            </p>

            <h2>Estimates and Pricing</h2>
            <ul>
              <li>All estimates are provided free of charge and are valid for 30 days from the date of issue.</li>
              <li>Estimates are based on the information provided and conditions observed during the initial assessment.</li>
              <li>Final pricing may be adjusted if unforeseen conditions are discovered during the project (e.g., hidden damage, additional repairs needed).</li>
              <li>Any changes to the scope of work must be agreed upon in writing before additional work begins.</li>
            </ul>

            <h2>Payment Terms</h2>
            <ul>
              <li>No upfront payment is required before work begins.</li>
              <li>Payment is due upon completion of the project and your satisfaction with the work.</li>
              <li>We accept cash, check, credit cards, and electronic payment methods.</li>
              <li>For larger projects, a payment schedule may be arranged and outlined in the project agreement.</li>
            </ul>

            <h2>Scheduling and Access</h2>
            <ul>
              <li>Project start dates are scheduled based on mutual availability and weather conditions (for exterior work).</li>
              <li>The customer agrees to provide reasonable access to the work area during scheduled work hours.</li>
              <li>We will make reasonable efforts to minimize disruption to your daily activities.</li>
              <li>Weather delays for exterior projects do not constitute a breach of contract.</li>
            </ul>

            <h2>Preparation and Protection</h2>
            <ul>
              <li>We will protect floors, furniture, fixtures, and landscaping as appropriate for each project.</li>
              <li>Customers are responsible for removing or securing valuable, fragile, or irreplaceable items from work areas.</li>
              <li>We are not responsible for pre-existing damage or conditions not caused by our work.</li>
            </ul>

            <h2>Warranty</h2>
            <ul>
              <li>All painting projects include a 5-year warranty on labor and materials. This covers exterior painting, interior painting, and cabinet refinishing alike.</li>
              <li>Warranties cover peeling, blistering, and flaking due to workmanship under normal conditions.</li>
              <li>Warranties do not cover damage from accidents, abuse, settling, structural movement, or acts of nature.</li>
            </ul>

            <h2>Satisfaction Guarantee</h2>
            <p>
              We stand behind our work with a 100% satisfaction guarantee. If you are not completely satisfied with any aspect of our work, we will address your concerns at no additional cost. Please notify us within 7 days of project completion of any issues.
            </p>

            <h2>Cancellation Policy</h2>
            <ul>
              <li>Projects may be cancelled without penalty if written notice is provided at least 48 hours before the scheduled start date.</li>
              <li>Cancellations made less than 48 hours before the start date may incur a scheduling fee.</li>
              <li>Once work has begun, the customer is responsible for payment for completed portions of the project.</li>
            </ul>

            <h2>Insurance and Registration</h2>
            <p>
              Houston Superior Painting LLC is a registered Texas business and is fully insured. We carry general liability insurance and workers&apos; compensation coverage. Proof of insurance is available upon request. The State of Texas does not issue an occupational license for residential painting contractors, and we make no claim to hold one.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Our liability is limited to the cost of the services provided. We are not liable for indirect, incidental, or consequential damages. Our maximum liability shall not exceed the total amount paid for the specific project.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from our services will first be addressed through good-faith negotiation. If a resolution cannot be reached, disputes will be resolved through mediation or arbitration in Harris County, Texas, in accordance with Texas law.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified Terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us:
            </p>
            <ul>
              <li>Phone: (346) 594-5960</li>
              <li>Email: info@houstonsuperiorpainting.com</li>
              <li>Address: 2617 Bissonnet St #443, Houston, TX 77005</li>
            </ul>

          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
