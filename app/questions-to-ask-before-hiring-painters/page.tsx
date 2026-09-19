import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business";

export const metadata: Metadata = {
  title: "15 Questions To Ask Before Hiring Painters in Houston TX",
  description: "Essential questions to ask before hiring painters in Houston, Katy & Cypress to protect your investment. Insider checklist from a professional painter.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/questions-to-ask-before-hiring-painters" },
  openGraph: { title: "15 Questions To Ask Before Hiring Painters", description: "Protect your investment. Ask these 15 questions before hiring any painting company in Houston.", url: "https://houstonsuperiorpainting.com/questions-to-ask-before-hiring-painters", type: "article", images: [{ url: "/images/og-interior-painting.jpg", width: 1200, height: 630 }] },
  other: { "geo.region": "US-TX", "geo.placename": "Houston", "geo.position": "29.9012;-95.6293", ICBM: "29.9012, -95.6293" },
};

const questions = [
  { q: "Are you insured?", why: "Texas doesn\u2019t require a painting license, but legitimate companies carry general liability insurance ($1M+ minimum) and workers\u2019 comp. Ask for a certificate \u2014 a real company provides it immediately.", us: "Yes. $2M liability, fully bonded. Certificate available upon request." },
  { q: "Do you use employees or subcontractors?", why: "Subcontractors mean inconsistent quality and less accountability. W-2 employees are trained to the company\u2019s standards and covered by their insurance.", us: "W-2 employees only. All background-checked and drug-tested." },
  { q: "What paint brands and products do you use?", why: "Cheap paint fails in Houston\u2019s climate within 2\u20133 years. Premium products like SW Duration or BM Regal Select last 8\u201310 years. Get product names in writing.", us: "Sherwin-Williams Duration, SuperPaint, Emerald. Benjamin Moore Regal Select, Aura." },
  { q: "What preparation work is included?", why: "Preparation is 60\u201370% of a quality paint job. Ask about pressure washing, scraping, sanding, caulking, priming, and masking. If they skip prep, the paint will fail.", us: "Full prep: power wash, scrape, sand, caulk, prime all bare surfaces, mask everything." },
  { q: "How many coats will you apply?", why: "Two coats minimum for solid coverage and longevity. Some companies apply one coat to cut costs. Two coats should be standard, not an upsell.", us: "Two coats standard on all surfaces. Three coats on dramatic color changes." },
  { q: "Can you provide a detailed written estimate?", why: "A vague estimate is a red flag. The quote should itemize labor, materials, products, prep work, timeline, and warranty terms. No \u201csurprise\u201d add-ons.", us: "Itemized quote with products, timeline, warranty, and payment schedule. No hidden fees." },
  { q: "What is your warranty?", why: "Reputable companies offer written warranties. Interior: 1\u20132 years minimum. Exterior: 3\u20135 years minimum. Get it in writing, not just verbal.", us: "5-year exterior, 2-year interior, 3-year cabinets. All in writing." },
  { q: "How long have you been in business?", why: "Look for at least 3+ years. Fly-by-night painters won\u2019t be around to honor warranties. Check Google reviews for consistent quality over time.", us: "Founded 2019 in Cypress, TX. 6+ years, 1,200+ completed projects." },
  { q: "Can I see recent reviews and references?", why: "50+ Google reviews with a 4.5+ average is a good benchmark. Ask for references in your neighborhood and permission to see the work in person.", us: "200+ Google reviews, 4.9/5 average. References available in your area." },
  { q: "Who will be on-site managing the project?", why: "Ask if the owner or a dedicated project manager will be present. Crews without supervision often cut corners.", us: "Owner JJ Semo personally oversees every project from start to finish." },
  { q: "What is your payment schedule?", why: "Never pay 100% upfront. A reasonable schedule: 0\u201330% deposit, balance upon completion and inspection. Be wary of companies asking for more than 50% upfront.", us: "No deposit required for most projects. Full payment due upon completion and your satisfaction." },
  { q: "How do you protect my furniture and landscaping?", why: "Professional painters use drop cloths, plastic sheeting, masking tape, and paper to protect everything. Ask specifically about overspray protection for exterior work.", us: "Full protection: furniture moved/covered, floors papered, fixtures masked, landscaping covered." },
  { q: "What happens if I\u2019m not satisfied?", why: "A company confident in their work will have a clear satisfaction process. Ask what happens if you spot issues after the final walkthrough.", us: "Final walkthrough with punch list. We don\u2019t consider the job done until you\u2019re 100% satisfied." },
  { q: "Do you handle drywall repair and prep work?", why: "Most walls need some repair before painting. A full-service company handles drywall patches, texture matching, and nail pop repairs in-house.", us: "Yes. Full drywall repair, texture matching (orange peel, knockdown, smooth), and skim coating." },
  { q: "When can you start and how long will it take?", why: "Get a specific start date and timeline in writing. Vague answers like \u201ca few weeks\u201d signal poor scheduling. Professional companies book 1\u20132 weeks out.", us: "Specific start date and timeline in every contract. Most projects scheduled within 1\u20132 weeks." },
];

const faqs = [
  { q: "How many estimates should I get before hiring a painter?", a: "Get 3 written estimates minimum. Compare not just price, but products, prep work, timeline, and warranty. The cheapest bid often means the worst quality." },
  { q: "What is the biggest red flag when hiring painters?", a: "Asking for full payment upfront. Legitimate companies either take no deposit or a small deposit (10\u201330%). Also watch for: no written contract, no insurance, and no Google reviews." },
  { q: "Should I buy the paint myself?", a: "No. Professional painters get contractor pricing (30\u201340% off retail) and know which products perform best in Houston\u2019s climate. Let them supply the paint and include it in the quote." },
  { q: "How do I verify a painter\u2019s insurance?", a: "Ask for a Certificate of Insurance (COI) and verify it\u2019s current. Call the insurance company listed to confirm. A legitimate painter provides this immediately." },
  { q: "Is the cheapest estimate always bad?", a: "Not always, but suspiciously low bids usually mean cheap paint, skipped prep, one coat, no warranty, or subcontracted labor. Compare the scope and products, not just the price." },
  { q: "What should be in a painting contract?", a: "Scope of work, paint products and colors, number of coats, prep details, start/end dates, payment schedule, warranty terms, and satisfaction guarantee." },
];

export default function QuestionsToAskBeforeHiringPainters() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "headline": "15 Questions To Ask Before Hiring Painters in Houston TX", "author": { "@type": "Person", "name": "JJ Semo" }, "publisher": { "@id": "https://houstonsuperiorpainting.com/#business" }, "datePublished": "2026-05-16", "dateModified": "2026-05-16", "mainEntityOfPage": "https://houstonsuperiorpainting.com/questions-to-ask-before-hiring-painters" },
        { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com/" }, { "@type": "ListItem", "position": 2, "name": "Questions to Ask Painters", "item": "https://houstonsuperiorpainting.com/questions-to-ask-before-hiring-painters" }] },
        { "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        { "@type": "WebPage", "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".quick-answer", ".hero-h1"] } },
      ] }) }} />

      <section className="quick-answer bg-amber-50 border-l-4 border-amber-500 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-3">Quick Answer</h2>
          <p className="text-lg leading-relaxed">Before hiring painters in Houston, ask about: insurance ($1M+ liability), employees vs. subcontractors, paint brands, prep work included, number of coats, written warranty, and payment schedule. Never pay 100% upfront. Get 3 written estimates. Houston Superior Painting answers all 15 questions with confidence. Call <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a>.</p>
        </div>
      </section>

      <section className="relative bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="hero-h1 text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">Questions To Ask Before Hiring Painters in Houston TX</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">An insider checklist from a professional painter. These 15 questions separate quality contractors from companies that will leave you with a mess.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Call {BUSINESS.phone}</a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-10 text-center">15 Questions Every Homeowner Should Ask</h2>
          <div className="space-y-6">
            {questions.map((item, i) => (
              <div key={item.q} className="bg-card border border-border rounded-xl p-6">
                <div className="flex gap-4 items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{i + 1}</div>
                  <h3 className="text-lg font-semibold pt-1.5">{item.q}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3"><strong>Why it matters:</strong> {item.why}</p>
                <p className="text-sm bg-green-50 text-green-800 rounded-lg p-3 border border-green-200"><strong>Our answer:</strong> {item.us}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl font-semibold mb-6 text-center">Related Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Painting Company Near Me", href: "/painting-company-near-me" },
              { label: "Interior Painting Cost Houston", href: "/interior-painting-cost-houston" },
              { label: "Exterior Painting Cost Guide", href: "/exterior-house-painting-houston-cost-guide" },
              { label: "Best Painters Katy TX", href: "/best-house-painters-near-katy-texas" },
              { label: "Painters in Houston TX", href: "/painters-houston-tx" },
              { label: "Free Estimate", href: "/contact" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="block bg-card border border-border rounded-lg p-4 text-center font-medium hover:border-primary hover:text-primary transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">FAQs About Hiring Painters</h2>
          <div className="space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium hover:bg-muted/50 transition-colors">{faq.q}<span className="ml-4 shrink-0 text-muted-foreground group-open:rotate-180 transition-transform">&#9660;</span></summary>
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">We Answer All 15 Questions With Confidence</h2>
          <p className="text-lg opacity-90 mb-8">Insured, background-checked team, premium products, written warranties, and owner on every job. Test us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors">Call {BUSINESS.phone}</a>
            <a href={SMS_HREF} className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">Text Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
