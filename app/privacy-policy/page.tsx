import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/privacy-policy',
  },
  title: "Privacy Policy | Houston Superior Painting",
  description: "Privacy Policy for Houston Superior Painting. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
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
              Houston Superior Painting (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and other contact details you provide when requesting an estimate or contacting us.</li>
              <li><strong>Project Information:</strong> Details about your painting project, property address, and service preferences.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our painting services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you estimates, project updates, and service-related communications</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>SMS / Text Messaging Program</h2>
            <p>
              By providing your mobile phone number to Houston Superior Painting, you consent to receive transactional
              text messages (SMS) about your project, including estimate and quote notifications, schedule confirmations
              and reschedules, invoice and payment-due notices, and payment receipts.
            </p>
            <p>
              Message frequency varies based on project activity. Message and data rates may apply. Reply STOP to
              unsubscribe at any time, or reply HELP for help. Consent to receive text messages is not a condition of
              purchasing any goods or services.
            </p>
            <p>
              No mobile information (phone numbers or SMS opt-in data) will be shared with, sold to, or rented to any
              third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent
              are not shared with any third parties.
            </p>
            <p>
              You can opt in to our text messaging program by submitting your phone number and checking the SMS consent
              box on our{" "}
              <a href="/sms-consent">SMS consent form</a>, or by providing your number and agreeing on our written
              estimate or service agreement when you request an estimate or book a painting project.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website, conducting our business, or servicing you (e.g., scheduling software, payment processors).</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can set your browser to refuse cookies, but some features of our website may not function properly.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
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
