import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SMS Consent & Opt-In | Houston Superior Painting",
  // Trimmed from 196 chars. The carrier-required disclosures (STOP to opt out,
  // msg & data rates) are kept; only the list of message examples was cut.
  description:
    "Opt in to transactional texts from Houston Superior Painting. Reply STOP to opt out. Msg & data rates may apply.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/sms-consent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SmsConsentLayout({ children }: { children: React.ReactNode }) {
  return children
}
