import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd } from "@/components/structured-data"
import { PageHero, QuickAnswer, Section, Bullets, Steps, CtaBlock, breadcrumbNode, ESTIMATE_PATH, SITE } from "@/components/aeo/blocks"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

// Trust page: insurance documentation process + 5-year warranty summary.
// Wording approved by the owner 2026-10-10. No certificate of insurance is
// published here (it can contain confidential policy details); it is sent on
// request and with approved project documents.

const PAGE_PATH = "/insurance-and-warranty"
const PAGE_URL = `${SITE}${PAGE_PATH}`
const TITLE = "Insurance & Warranty | Houston Superior Painting"
const DESCRIPTION =
  "How to request proof of insurance from Houston Superior Painting, what our 5-Year Written Workmanship Warranty covers, and why Texas has no painting license."
const T = BUSINESS.trust
const REQUEST_MAIL = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Insurance Documentation Request")}`

const FAQS = [
  {
    q: "Can I get a copy of your certificate of insurance?",
    a: `Yes. Proof of insurance is available upon request: email ${BUSINESS.email} or call ${BUSINESS.phone}. Customers who approve a project receive a copy of our current insurance documentation before work begins.`,
  },
  {
    q: "Why isn't the certificate posted on the website?",
    a: "A certificate of insurance can include policy numbers and other details that should not be public. We send it directly to the homeowner, property manager or HOA that needs it.",
  },
  {
    q: "Does Texas license house painters?",
    a: "No. Texas does not issue a statewide painting-contractor license, so a painter cannot show you a state painting license. Proof of insurance is the check that matters. Houston Superior Painting is an insured painting contractor serving Greater Houston.",
  },
  {
    q: "Can you add our building owner or HOA as additional insured?",
    a: "Project-specific insurance documentation and additional-insured requests can be reviewed during project setup, subject to insurer approval and policy terms.",
  },
  {
    q: "Where are the full warranty terms?",
    a: "In your approved estimate and project documents. Those documents control. The warranty page explains how the warranty works and how to make a claim.",
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: BUSINESS.name, type: "website" },
}

export default function InsuranceAndWarrantyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Insurance & Warranty", path: PAGE_PATH },
          ]),
        }}
      />
      <Header />
      <main>
        <PageHero h1="Insurance and warranty" eyebrow={BUSINESS.name} />

        <QuickAnswer>
          Houston Superior Painting maintains insurance coverage for its painting operations, including{" "}
          {T.liabilityCoverage} general liability and workers&apos; comp. Proof of insurance is available upon request, and
          customers who approve a project receive a copy of our current insurance documentation before work begins.
          Qualifying painting projects are backed by a {T.warrantyYears}-Year Written Workmanship Warranty, with complete
          terms in your approved estimate and project documents.
        </QuickAnswer>

        <Section id="request-proof-of-insurance" title="Request proof of insurance">
          <p>
            Proof of insurance is available upon request and provided with approved project documents. To request it:
          </p>
          <Steps
            items={[
              {
                title: "Ask",
                text: (
                  <>
                    email <a href={REQUEST_MAIL}>{BUSINESS.email}</a> with the subject &quot;Insurance Documentation
                    Request&quot;, or call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
                  </>
                ),
              },
              {
                title: "Tell us who needs it",
                text: "the homeowner, property manager, HOA or building owner, and any certificate-holder name the building requires.",
              },
              {
                title: "Receive it directly",
                text: "we send the current documentation to you. It is not posted publicly because it can contain confidential policy details.",
              },
            ]}
          />
          <p>
            <a
              href={REQUEST_MAIL}
              className="not-prose inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground no-underline hover:bg-primary/90"
            >
              Request Proof of Insurance
            </a>
          </p>
          <p>
            Commercial clients: project-specific insurance documentation and additional-insured requests can be reviewed
            during project setup, subject to insurer approval and policy terms.
          </p>
        </Section>

        <Section title="Our 5-Year Written Workmanship Warranty">
          <p>
            Houston Superior Painting backs qualifying painting projects with a {T.warrantyYears}-Year Written Workmanship
            Warranty. Complete warranty terms are included in the customer&apos;s approved estimate and project documents.
          </p>
          <Bullets
            items={[
              <>
                <strong>Workmanship, not products:</strong> the warranty covers how the work was done. Paints and coatings
                carry their own separate manufacturer warranties.
              </>,
              <>
                <strong>Your documents control:</strong> what is covered, what is excluded and how long it lasts are set by
                your signed estimate and project documents.
              </>,
              <>
                <strong>Making a claim:</strong> call <a href={PHONE_HREF}>{BUSINESS.phone}</a> with photos of the issue;
                we inspect it and repair covered issues at no charge.
              </>,
            ]}
          />
          <p>
            <Link href="/warranty">Review Our 5-Year Written Warranty</Link>
          </p>
        </Section>

        <Section title="Texas licensing">
          <p>
            Texas does not issue a statewide painting-contractor license. Houston Superior Painting is an insured painting
            contractor serving Greater Houston. When you compare painters, ask each one for proof of insurance and a written
            warranty instead of a state painting license. Our{" "}
            <Link href="/houston-painting-contractor-guide">guide to hiring a painting contractor in Houston</Link> lists the
            other questions to ask.
          </p>
        </Section>

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <CtaBlock title="Get a free written estimate">
          Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate online
          </Link>
          . Your estimate includes the scope, products and warranty terms in writing.
        </CtaBlock>
      </main>
      <Footer />
    </>
  )
}
