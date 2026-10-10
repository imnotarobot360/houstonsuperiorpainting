import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

const T = BUSINESS.trust

const D: GuideArticleData = {
  path: "/blog/how-to-verify-painting-contractor-insurance-houston",
  title: "How to Verify a Painting Contractor's Insurance in Houston",
  description:
    "Texas does not license painters, so insurance is the check that matters. How to read a certificate of insurance, confirm it is active, and what to ask a Houston painter.",
  h1: "How to verify a painting contractor's insurance in Houston",
  eyebrow: "Hiring guide",
  published: "2026-10-10",
  updated: "2026-10-10",
  quickAnswer: (
    <>
      Ask the painter for a current certificate of insurance before work starts, check that the company name and policy
      dates match your estimate, and call the insurance agent listed on the certificate to confirm the policy is active.
      Look for general liability and ask directly about workers&apos; compensation, because Texas lets most private
      employers go without it. Texas does not license house painters, so insurance is the check that protects you.
    </>
  ),
  sections: [
    {
      title: "Why insurance matters more than a license in Texas",
      body: (
        <>
          <p>
            Texas does not issue a statewide painting-contractor license. A painter who says they are &quot;licensed by the
            state&quot; for painting is mistaken or misleading you. What protects you is insurance: general liability pays
            for damage the crew causes to your home, and workers&apos; compensation covers a worker who is hurt on your
            property.
          </p>
          <p>
            Workers&apos; comp is a particular Texas issue. The Texas Department of Insurance says private employers can
            choose to carry it, but it is not required. A painting company without it may still be a legitimate business, but
            you should know before a crew climbs a ladder at your house.
          </p>
        </>
      ),
    },
    {
      title: "How to check a certificate of insurance, step by step",
      body: (
        <Steps
          items={[
            {
              title: "Ask for it before you sign",
              text: "request a current certificate of insurance (COI). Many insurers issue it on a standard one-page form. A legitimate company sends it without hesitation.",
            },
            {
              title: "Match the name",
              text: "the named insured should be the same business named on your estimate and contract, not a different company or an individual you have never heard of.",
            },
            {
              title: "Check the dates",
              text: "every policy has an effective and an expiration date. Make sure the policy covers the dates your job will run.",
            },
            {
              title: "Read the coverage lines",
              text: "look for commercial general liability and its limits, and check whether workers' compensation is listed. If it is not, ask why.",
            },
            {
              title: "Call the agent",
              text: "the certificate lists the agent or insurer who issued it. Call that number (look it up yourself, not from an email) and confirm the policy is active.",
            },
            {
              title: "Ask about subcontractors",
              text: "if any part of the job will be done by another company, ask for that company's certificate too.",
            },
          ]}
        />
      ),
    },
    {
      title: "Houston situations that need extra paperwork",
      body: (
        <Bullets
          items={[
            <>
              <strong>HOAs and townhome associations</strong> often require a certificate before a crew can work on common
              walls, fences or roofs.
            </>,
            <>
              <strong>Condos and managed buildings</strong> may require the building or association to be named as
              certificate holder or additional insured.
            </>,
            <>
              <strong>Commercial property managers</strong> usually set minimum coverage amounts in their vendor
              requirements. Ask for those requirements early.
            </>,
          ]}
        />
      ),
    },
    {
      title: "Red flags",
      body: (
        <Bullets
          items={[
            "The painter cannot or will not send a certificate.",
            "The certificate is in a different business name than the estimate.",
            "The policy has expired or ends before your job is finished.",
            "Only a photo of an old certificate is offered, and the agent cannot be reached.",
            "A large deposit is requested before you have a written estimate or proof of insurance.",
          ]}
        />
      ),
    },
    {
      title: "How Houston Superior Painting handles it",
      body: (
        <p>
          Houston Superior Painting maintains insurance coverage for its painting operations, including{" "}
          {T.liabilityCoverage} general liability and workers&apos; comp. Proof of insurance is available upon request, and
          customers who approve a project receive a copy of our current insurance documentation before work begins. We do
          not post the certificate publicly because it can contain confidential policy details. See{" "}
          <Link href="/insurance-and-warranty#request-proof-of-insurance">how to request proof of insurance</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is a painter required to have insurance in Texas?",
      a: "Texas does not license house painters, and private employers can choose whether to carry workers' compensation. That is why you should ask every painter for a certificate of insurance and confirm it yourself.",
    },
    {
      q: "What insurance should a house painter have?",
      a: "At minimum, commercial general liability. Ask whether the company carries workers' compensation for its crew, and whether any subcontractors carry their own coverage.",
    },
    {
      q: "Can I verify workers' compensation coverage online?",
      a: "The Texas Department of Insurance has a workers' compensation coverage verification page that points to an online lookup. You can also call the agent named on the certificate.",
    },
    {
      q: "Should I be named on the certificate?",
      a: "For a home project, being listed as certificate holder is common and easy to request. Being named as additional insured is more often required by HOAs, condo associations and commercial buildings, and depends on the insurer's approval.",
    },
  ],
  limitations: (
    <>
      This guide is general information, not legal or insurance advice. Coverage terms vary by policy; read the actual
      certificate and policy documents, and ask your own insurance agent if you need advice about your situation.
    </>
  ),
  sources: [
    { label: "Texas Department of Insurance: Workers' compensation for employers", url: "https://www.tdi.texas.gov/wc/employer/index.html" },
    { label: "Texas Department of Insurance: Workers' compensation coverage verification", url: "https://www.tdi.texas.gov/wc/employer/coverage.html" },
  ],
  related: [
    { label: "Insurance and warranty", href: "/insurance-and-warranty" },
    { label: "How to choose a painting contractor in Houston", href: "/houston-painting-contractor-guide" },
    { label: "What a painting warranty should cover", href: "/blog/paint-warranty-texas" },
    { label: "Local painter vs national franchise", href: "/local-painter-vs-national-franchise-houston" },
    { label: "Commercial painting", href: "/commercial-painting-houston-tx" },
  ],
}

export const metadata = guideMetadata(D)

export default function Page() {
  return <GuideArticle d={D} />
}
