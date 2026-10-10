import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd } from "@/components/structured-data"
import {
  PageHero,
  QuickAnswer,
  Section,
  Bullets,
  LinkGrid,
  CtaBlock,
  breadcrumbNode,
  articleNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { BUSINESS, CORE_SERVICES, PRICES_2026 } from "@/lib/business"

// Anchor guide. Replaces and absorbs /questions-to-ask-before-hiring-painters
// (that URL is to be 301'd here). Every section of the old page is carried
// over below: the 8 questions, licensed vs insured, references, red flags,
// the estimate checklist, comparing quotes, signs of a well-run company,
// specialty-work questions and the local-vs-franchise guide link.

const PAGE_PATH = "/houston-painting-contractor-guide"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "How to Choose a Painting Contractor in Houston (2026 Guide)"
const DESCRIPTION =
  "How to choose a Houston painting contractor: estimates, prep and primer standards, insurance checks, warranties, red flags and questions to ask."
const H1 =
  "How to Choose a Professional Painting Contractor in Houston: Costs, Preparation Standards, Products and Warranty"
const DATE_PUBLISHED = "2026-10-08"
const DATE_MODIFIED = "2026-10-08"
const DATE_LABEL = "Oct 8, 2026"

const INSURANCE = `${BUSINESS.trust.liabilityCoverage} general liability + workers' comp`
const WARRANTY_YEARS = BUSINESS.trust.warrantyYears

// ─── External sources (each URL checked 2026-10-08) ──────────────────
const SRC = {
  epaRrp: "https://www.epa.gov/lead/renovation-repair-and-painting-program",
  oshaFalls: "https://www.osha.gov/stop-falls",
  nwsHobby: "https://www.weather.gov/hgx/climate_hou_normals_dec",
  swExtremeBond: "https://www.sherwin-williams.com/homeowners/products/extreme-bond-primer",
  bmStix: "https://www.benjaminmoore.com/en-us/product/insl-x-stix-waterborne-bonding-primer/SXA-110",
} as const

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: BUSINESS.name,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_MODIFIED,
    authors: [BUSINESS.founder.name],
    images: [{ url: BUSINESS.ogImage, width: 1200, height: 630 }],
  },
}

// Plain-string answers: the same array renders the visible FAQ and the one
// FAQPage block (components/faq.tsx), so schema text matches the page.
const FAQS = [
  {
    q: "Do painters need a license in Texas?",
    a: "No. Texas does not issue a state license for house painters, so a painter who says they are licensed by the state is not telling you anything useful. Verify insurance instead: ask for a certificate of insurance and confirm it with the insurer.",
  },
  {
    q: "How much insurance should a Houston painting contractor carry?",
    a: `Ask for general liability of at least $1M plus workers' compensation, and confirm both are current with the insurer. Houston Superior Painting carries ${INSURANCE}.`,
  },
  {
    q: "How many painting estimates should I get?",
    a: "Get two or three written estimates and compare them line by line: prep steps, primer, product line, sheen, coat count, repairs and warranty. The total only means something once the scopes match.",
  },
  {
    q: "Should I pay for a painting estimate?",
    a: "No. Reputable Houston painters give free, no-obligation estimates. Be cautious of anyone who charges just to quote the job.",
  },
  {
    q: "Is it normal to pay a deposit?",
    a: "A down payment after you approve the written estimate is normal. Nothing should be due before you approve, and you should never pay the full price upfront.",
  },
  {
    q: "What is the difference between a workmanship warranty and a paint warranty?",
    a: "A manufacturer's warranty covers defects in the paint product. A workmanship warranty comes from the contractor and covers failures caused by how the job was prepped and applied, such as peeling or adhesion loss. Most early failures are prep or application problems, so the workmanship warranty is the one to read closely and get in writing.",
  },
  {
    q: "Do I need a lead-safe certified painter for an older home?",
    a: "If your home was built before 1978, the EPA's Renovation, Repair and Painting Rule requires anyone paid to disturb painted surfaces in it to be lead-safe certified and to use lead-safe work practices. Ask any painter for their firm certification before work starts.",
  },
  {
    q: "What if a painter damages my property?",
    a: "The contractor's general liability insurance should pay for it. That is why you get and verify the certificate of insurance before the job starts, not after.",
  },
]

export default function HoustonPaintingContractorGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            articleNode({
              path: PAGE_PATH,
              headline: H1,
              description: DESCRIPTION,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_MODIFIED,
            }),
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Houston Painting Contractor Guide", path: PAGE_PATH },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <PageHero h1={H1} eyebrow="Hiring guide">
          <p className="mt-6 text-sm text-soft-white/80">
            By{" "}
            <Link href="/about" rel="author" className="font-medium text-soft-white underline">
              {BUSINESS.founder.name}
            </Link>
            , {BUSINESS.founder.jobTitle.toLowerCase()}, {BUSINESS.name} ·{" "}
            <time dateTime={DATE_PUBLISHED}>Published {DATE_LABEL}</time> ·{" "}
            <time dateTime={DATE_MODIFIED}>Updated {DATE_LABEL}</time>
          </p>
        </PageHero>

        <QuickAnswer>
          Choose a Houston painting contractor on what they put in writing, not on the total price. A good estimate names
          the prep steps, the primer, the exact product and sheen, the number of coats and the warranty terms. Texas does
          not license painters, so verify insurance with the insurer instead. Compare two estimates line by line before
          you sign.
        </QuickAnswer>

        <Section title="Houston climate and coating considerations">
          <p>
            Houston is hot, humid and wet. National Weather Service 1991–2020 normals put annual rainfall at Houston Hobby
            Airport at about 55.6 inches (<Ext href={SRC.nwsHobby}>NWS Houston/Galveston</Ext>). That moisture is what
            makes prep and product choice matter more here than in drier markets.
          </p>
          <Bullets
            items={[
              <>
                <strong>Moisture in the substrate.</strong> Paint applied over damp wood, stucco or masonry loses adhesion.
                Surfaces need to dry after washing and after rain before priming.
              </>,
              <>
                <strong>Mildew.</strong> Shaded, damp elevations grow mildew. It has to be cleaned off and killed, not
                painted over, and exterior products should be mildew-resistant.
              </>,
              <>
                <strong>Heat and sun.</strong> Direct afternoon sun on a dark wall can push surface temperature past what a
                product&apos;s data sheet allows. Good crews follow the sun around the house.
              </>,
              <>
                <strong>Application windows.</strong> Every product data sheet lists temperature limits, dry times and
                recoat times. A contractor should be able to tell you which data sheet they follow and why.
              </>,
            ]}
          />
        </Section>

        <Section title="How to evaluate a painting estimate">
          <p>A complete written estimate for a Houston home lists:</p>
          <Bullets
            items={[
              <>Each area or elevation included, and anything excluded</>,
              <>The prep steps for each surface, not just the word &ldquo;prep&rdquo;</>,
              <>The primer, where it goes, and why</>,
              <>The product line and sheen for each surface (walls, trim, doors, ceilings, siding)</>,
              <>The number of coats</>,
              <>Wood rot, drywall or stucco repairs, priced separately</>,
              <>Start and finish window, payment schedule and warranty terms</>,
              <>A current certificate of insurance attached or emailed by the insurer</>,
            ]}
          />
          <p>
            If any of these is vague, get it clarified before you sign. Vague estimates turn into change-order disputes. See{" "}
            <Link href="/blog/what-to-expect-painting-estimate">what to expect from a painting estimate</Link> for the
            walkthrough itself.
          </p>
          <h3>Comparing two estimates line by line</h3>
          <p>
            Put the two estimates side by side and match them row by row. One might include a full wash, new caulk at every
            window and door, scraping and spot-priming bare wood, two coats of a named product and a written warranty. The
            other might be a hose rinse, paint over failing caulk, one coat &ldquo;if needed,&rdquo; unnamed paint and no
            warranty. Those are different jobs. Ask the cheaper bidder to price the same scope; if they won&apos;t put it
            in writing, you have your answer.
          </p>
        </Section>

        <Section title="Surface preparation: where most paint jobs succeed or fail">
          <p>
            Paint is only as good as the surface under it. Most early failures, such as peeling, flaking and adhesion loss,
            trace back to skipped or rushed prep rather than to the paint. Prep is also where cheap bids save their money,
            because it is the hardest part to see once the job is done.
          </p>
          <p>
            If your home was built before 1978, scraping and sanding can disturb lead-based paint. The EPA&apos;s
            Renovation, Repair and Painting Rule requires anyone paid to disturb painted surfaces in pre-1978 homes to be
            certified and trained in lead-safe work practices (<Ext href={SRC.epaRrp}>EPA RRP program</Ext>). Ask about
            it before the estimate is signed.
          </p>
        </Section>

        <Section title="Interior preparation">
          <Bullets
            items={[
              <>Move and cover furniture; mask floors, fixtures and anything not being painted</>,
              <>Clean walls where grease, smoke or handprints would stop paint bonding (kitchens, hallways)</>,
              <>
                Patch nail holes, dents and cracks, and repair damaged{" "}
                <Link href="/drywall-repair-houston-tx">drywall</Link>, then sand smooth
              </>,
              <>Caulk gaps at trim, baseboards and door casings</>,
              <>Spot-prime patches and stains so they don&apos;t flash or bleed through the finish coat</>,
              <>Lightly sand glossy trim and doors so the new coat has something to grip</>,
            ]}
          />
          <p>
            More on scope and finish choices on our <Link href="/interior-painting-houston-tx">interior painting</Link>{" "}
            page.
          </p>
        </Section>

        <Section title="Exterior preparation">
          <Bullets
            items={[
              <>
                Wash the surface to remove dirt, chalk and mildew (
                <Link href="/soft-washing-houston-tx">soft washing</Link> for delicate surfaces), then let it dry
              </>,
              <>Scrape and sand loose, peeling or failing paint back to a sound edge</>,
              <>
                Replace or repair rotted wood before it is painted (<Link href="/wood-rot-repair-houston-tx">wood rot repair</Link>)
              </>,
              <>Remove failed caulk and re-caulk joints, windows and doors with a paintable sealant</>,
              <>Prime bare wood, repairs and any surface the finish coat won&apos;t bond to directly</>,
              <>Protect landscaping, roofs, driveways, windows and fixtures</>,
            ]}
          />
          <p>
            Exterior work also means ladders and heights. Falls are the leading cause of death in construction according to
            OSHA (<Ext href={SRC.oshaFalls}>OSHA fall prevention</Ext>), which is one more reason a crew&apos;s workers&apos;
            comp coverage matters to you. See our <Link href="/exterior-painting-houston-tx">exterior painting</Link> page
            for how we scope it.
          </p>
        </Section>

        <Section title="Cabinet preparation and coating requirements">
          <p>
            Cabinets get more handling, grease and moisture than any wall, so they need more prep and a harder finish.
          </p>
          <Bullets
            items={[
              <>Remove doors, drawers and hardware, and label every piece so it goes back where it came from</>,
              <>Degrease every surface; kitchen grease is the most common cause of cabinet paint failure</>,
              <>Scuff-sand the existing finish so the primer can bond</>,
              <>Use a bonding primer suited to the existing finish and the cabinet material (solid wood, MDF, thermofoil)</>,
              <>Apply a cabinet-grade enamel, usually sprayed, in a controlled area</>,
              <>Respect the product&apos;s dry and cure times before rehanging doors and loading shelves</>,
            ]}
          />
          <p>
            Ask any cabinet painter which primer and topcoat they use, whether they spray or brush, and how long you have
            to wait before normal use. Details on our <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link>{" "}
            page.
          </p>
        </Section>

        <Section title="Primer selection">
          <p>
            Primer isn&apos;t a single product. The right one depends on the surface and the problem you are solving:
          </p>
          <Bullets
            items={[
              <>
                <strong>Bare wood:</strong> a wood primer so the finish coat doesn&apos;t soak in unevenly
              </>,
              <>
                <strong>New drywall and patches:</strong> a drywall primer so patches don&apos;t show through
              </>,
              <>
                <strong>Stains (water, smoke, tannin):</strong> a stain-blocking primer
              </>,
              <>
                <strong>Glossy or hard-to-coat surfaces:</strong> a bonding primer. Manufacturers make these specifically
                for slick surfaces, for example Sherwin-Williams Extreme Bond (
                <Ext href={SRC.swExtremeBond}>product page</Ext>) and Benjamin Moore&apos;s Insl-x Stix (
                <Ext href={SRC.bmStix}>product page and data sheet</Ext>)
              </>,
              <>
                <strong>Masonry and stucco:</strong> a masonry primer or a product the manufacturer lists for masonry
              </>,
            ]}
          />
          <p>
            The product data sheet is the rulebook: it lists approved surfaces, surface prep, temperature limits and
            recoat times. A contractor should follow it and be able to show it to you.
          </p>
        </Section>

        <Section title="Paint and coating compatibility">
          <p>
            Not every coating sticks to every other coating. The most common Houston example is trim and doors that still
            have oil-based enamel on them. Latex paint applied directly over oil tends to peel, so the oil finish has to be
            cleaned, scuff-sanded and coated with a bonding primer first. A painter should confirm whether existing trim is
            oil or latex before pricing it.
          </p>
          <p>
            The same logic applies to slick factory finishes, previously stained wood, and{" "}
            <Link href="/limewash-brick-painting-houston-tx">brick and masonry</Link>, where the primer or coating must be
            one the manufacturer lists for that surface.
          </p>
        </Section>

        <Section title="Schedule variables">
          <p>The start date and length of a painting job depend on:</p>
          <Bullets
            items={[
              <>Weather: rain, dew and heat close exterior work windows, and surfaces must dry before coating</>,
              <>How much prep and repair the walkthrough uncovers</>,
              <>Dry, recoat and cure times for each product on the data sheet</>,
              <>Color decisions, and HOA approval where your neighborhood requires it</>,
              <>Access: furniture, occupied rooms, gates, pets and parking</>,
            ]}
          />
          <p>
            Established painters are often booked a few weeks out. If a company can start tomorrow, ask why; sometimes the
            timing is lucky, sometimes they aren&apos;t busy for a reason.
          </p>
        </Section>

        <Section title="What drives the price">
          <p>
            Typical 2026 Houston ranges run {PRICES_2026.interiorPerSqFt} per sq ft for interiors,{" "}
            {PRICES_2026.exteriorPerSqFt} per sq ft for exteriors, {PRICES_2026.singleRoom} for a single room and{" "}
            {PRICES_2026.cabinetsPerKitchen} for a kitchen of cabinets. What moves a job within or past those ranges:
          </p>
          <Bullets
            items={[
              <>Prep and repairs (rot, drywall, failed caulk, peeling paint)</>,
              <>Product line and number of coats</>,
              <>Height, stories and access</>,
              <>Color changes, especially dark to light</>,
              <>Trim, doors, ceilings and detail work</>,
            ]}
          />
          <p>
            Full tables by home size are in the <Link href="/houston-painting-cost-guide">Houston painting cost guide</Link>.
          </p>
        </Section>

        <Section title="How to verify insurance">
          <p>
            The Texas Department of Licensing and Regulation does not license house painters, so insurance is the
            credential that protects you. General liability covers damage to your home. Workers&apos; compensation covers a
            painter hurt on your job; without it, an injured worker may look to the homeowner.
          </p>
          <ol>
            <li>Ask for a certificate of insurance (COI) showing general liability and workers&apos; comp.</li>
            <li>Ask for it to list you as certificate holder and to come straight from the insurer or agent.</li>
            <li>
              Call the insurer or agent at the number on the certificate and confirm the policy is active for the dates of
              your job. A forwarded PDF is easy to alter.
            </li>
            <li>If the crew includes subcontractors, confirm the COI covers them or that they carry their own.</li>
          </ol>
          <p>
            Houston Superior Painting carries {INSURANCE}. Proof of insurance is available upon request, and customers who
            approve a project receive our current insurance documentation before work begins (
            <Link href="/insurance-and-warranty#request-proof-of-insurance">request it here</Link>). Step-by-step detail:{" "}
            <Link href="/blog/how-to-verify-painting-contractor-insurance-houston">how to verify a painting contractor&apos;s insurance</Link>.
          </p>
        </Section>

        <Section title="How to evaluate a warranty">
          <Bullets
            items={[
              <>
                <strong>Manufacturer warranty:</strong> covers defects in the paint product itself. It does not cover how the
                paint was applied.
              </>,
              <>
                <strong>Workmanship warranty:</strong> comes from the contractor and covers failures caused by prep and
                application, such as peeling, flaking and adhesion loss.
              </>,
              <>
                <strong>Get it in writing:</strong> length, what is covered, what is excluded, and how to file a claim. A
                verbal &ldquo;we stand behind our work&rdquo; can&apos;t be enforced.
              </>,
              <>
                <strong>Read the exclusions:</strong> normal fading, storm damage and moisture from other sources are
                reasonable exclusions. Exclusions that cover the usual causes of failure are not.
              </>,
            ]}
          />
          <p>
            More detail in <Link href="/blog/paint-warranty-texas">what a paint warranty actually covers in Texas</Link>.
          </p>
        </Section>

        <Section title="Red flags in cheap bids">
          <Bullets
            items={[
              <>
                A total well below typical 2026 Houston ranges ({PRICES_2026.exteriorPerSqFt}/sq ft exterior,{" "}
                {PRICES_2026.interiorPerSqFt}/sq ft interior) with no explanation
              </>,
              <>No written scope, just a number</>,
              <>&ldquo;We use quality paint&rdquo; instead of a named product and sheen</>,
              <>&ldquo;One coat should do it&rdquo; or paint-and-primer-in-one over bare wood</>,
              <>No mention of caulk, primer or repairs</>,
              <>Cash only, a large deposit, or money due before you approve the estimate</>,
              <>No certificate of insurance, or one sent only as a PDF you can&apos;t confirm</>,
              <>No written warranty</>,
              <>No physical address, or reviews all posted in the same week</>,
              <>&ldquo;We&apos;re licensed by the state of Texas&rdquo;</>,
            ]}
          />
        </Section>

        <Section title="The 8 questions to ask every Houston painter">
          <ol>
            <li>
              <strong>Can you email me your certificate of insurance today?</strong> Liability and workers&apos; comp,
              current dates.
            </li>
            <li>
              <strong>What prep is included?</strong> For exteriors: wash, scrape, sand, caulk, prime bare wood, rot repair.
              For interiors: patching, sanding, caulking, priming stains.
            </li>
            <li>
              <strong>Which primer, which paint, and how many coats?</strong> Brand, product line and sheen for each
              surface. Two coats is standard, with primer first on bare or patched surfaces.
            </li>
            <li>
              <strong>Who is on my job?</strong> Employees or subcontractors, and who is the crew lead you talk to daily.
              &ldquo;We&apos;ll have some guys out there&rdquo; is not an answer.
            </li>
            <li>
              <strong>How do you handle Houston humidity and rain?</strong> A good answer mentions drying time after
              washing, morning dew, and the temperature limits on the product data sheet.
            </li>
            <li>
              <strong>What does your warranty cover, for how long, and how do I make a claim?</strong> Get it in writing.
            </li>
            <li>
              <strong>What is the payment schedule?</strong> Nothing due before you approve the written estimate; never the
              full price upfront.
            </li>
            <li>
              <strong>Can I see recent jobs and call references in my area?</strong> A painter who works your area knows
              its HOA color rules and common siding types.
            </li>
          </ol>
          <h3>Questions to ask references</h3>
          <p>Online reviews can be gamed. Call two or three recent references and ask:</p>
          <Bullets
            items={[
              <>Did the crew show up on time every day?</>,
              <>Did the final price match the written estimate?</>,
              <>Did they protect floors, furniture and landscaping?</>,
              <>How did they handle touch-ups or problems after the job?</>,
              <>Would you hire them again?</>,
            ]}
          />
          <h3>Extra questions for specialty work</h3>
          <Bullets
            items={[
              <>
                <strong>
                  <Link href="/cabinet-refinishing-houston-tx">Cabinets</Link>:
                </strong>{" "}
                Have they finished your cabinet type? Sprayed or brushed? Which bonding primer and enamel?
              </>,
              <>
                <strong>
                  <Link href="/limewash-brick-painting-houston-tx">Brick</Link>:
                </strong>{" "}
                Which masonry primer or limewash product, and how is it applied?
              </>,
              <>
                <strong>
                  <Link href="/commercial-painting-houston-tx">Commercial spaces</Link>:
                </strong>{" "}
                Can they work after hours, and how do they handle site safety?
              </>,
              <>
                <strong>Older homes:</strong> Is the firm EPA lead-safe certified for pre-1978 work?
              </>,
            ]}
          />
        </Section>

        <Section title="Change orders">
          <p>
            Sometimes prep uncovers rot, water damage or failing drywall that nobody could see at the estimate. That is
            normal. What matters is how it is handled: the contractor should stop, show you the problem, and give you a
            written change order with the added work and price before doing it. Don&apos;t approve extra work verbally,
            and don&apos;t accept a final bill with charges you never signed for.
          </p>
        </Section>

        <Section title="Final inspection and walkthrough">
          <p>Before the final payment, walk the whole job with the crew lead:</p>
          <Bullets
            items={[
              <>Check walls and trim in daylight and at an angle for thin spots, drips and missed areas</>,
              <>Check cut lines at ceilings, trim and fixtures</>,
              <>Open and close doors, windows and cabinet doors</>,
              <>Mark touch-ups with painter&apos;s tape and confirm when they will be done</>,
              <>Confirm cleanup, leftover paint labeled by room, and your written warranty</>,
            ]}
          />
        </Section>

        <Section title="How Houston Superior Painting runs a job">
          <ol>
            <li>
              <strong>Free on-site estimate.</strong> We walk the property with you, inspect surfaces and talk through
              colors and products.
            </li>
            <li>
              <strong>Written estimate.</strong> Prep steps, primer, product and sheen per surface, coat count, repairs,
              and warranty. Proof of insurance on request, and insurance documentation with the approved project documents.
            </li>
            <li>
              <strong>Approval.</strong> {BUSINESS.paymentPolicy.sentence}
            </li>
            <li>
              <strong>Prep and painting</strong> to the 10-point standard below, with written change orders if prep uncovers
              hidden damage.
            </li>
            <li>
              <strong>Final walkthrough</strong> with you, touch-ups and cleanup, then your written {WARRANTY_YEARS}-year
              workmanship warranty.
            </li>
          </ol>
          <p>
            We apply products from {BUSINESS.paintPartners.join(", ").replace(/, ([^,]*)$/, " and $1")}.
          </p>
        </Section>

        <Section id="preparation-standard" title="Houston Superior Painting 10-Point Preparation Standard">
          <p>
            This is our internal workmanship process: the checklist our crews follow on every job. It is not an industry
            certification or an independent standard.
          </p>
          <ol>
            <li>
              <strong>Surface-condition inspection</strong>: moisture, peeling, rot, cracks, stains and existing coating type.
            </li>
            <li>
              <strong>Protection of surrounding areas</strong>: floors, furniture, fixtures, landscaping and roofs.
            </li>
            <li>
              <strong>Cleaning</strong>: dirt, grease, chalk and mildew removed so coatings can bond.
            </li>
            <li>
              <strong>Removal of loose or failing coatings</strong>: scraped and sanded back to a sound edge.
            </li>
            <li>
              <strong>Drywall, wood and masonry repairs</strong>: patched, replaced or repaired before coating.
            </li>
            <li>
              <strong>Sanding and surface profiling</strong>: glossy surfaces dulled and patches feathered smooth.
            </li>
            <li>
              <strong>Caulking and gap treatment</strong>: failed caulk removed, joints and gaps sealed.
            </li>
            <li>
              <strong>Correct primer selection</strong>: matched to the surface and the existing coating.
            </li>
            <li>
              <strong>Coating application per the written scope</strong>: the products, sheens and coat counts in your
              estimate.
            </li>
            <li>
              <strong>Final inspection, touch-ups and cleanup</strong>: walked with you before the final payment.
            </li>
          </ol>
        </Section>

        <Section title={`Our ${WARRANTY_YEARS}-year workmanship warranty`}>
          <p>
            Every Houston Superior Painting job comes with a written {WARRANTY_YEARS}-year workmanship warranty. It covers
            failures caused by our prep and application on the surfaces in your scope, and the paint manufacturer&apos;s
            product warranty sits alongside it. Coverage, exclusions and the claim process are on our{" "}
            <Link href="/warranty">warranty page</Link>.
          </p>
        </Section>

        <Section title="Signs of a well-run painting company">
          <Bullets
            items={[
              <>
                <strong>Consistent crew.</strong> The same painters every day, not rotating day labor.
              </>,
              <>
                <strong>One accountable person.</strong> Someone owns your project after the estimator leaves.
              </>,
              <>
                <strong>A process they can explain.</strong> Prep, prime, cut-in, roll and touch-up, without hesitation.
              </>,
              <>
                <strong>Clean jobsite.</strong> Drop cloths down, materials organized, cleaned up at the end of each day.
              </>,
              <>
                <strong>Responsive communication.</strong> Calls and texts returned the same business day.
              </>,
            ]}
          />
          <p>
            Size doesn&apos;t predict quality. Comparing a local crew with a national franchise? Read{" "}
            <Link href="/local-painter-vs-national-franchise-houston">what to compare between a local painter and a national franchise</Link>.
          </p>
        </Section>

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <Section title="Related pages">
          <LinkGrid
            links={[
              ...CORE_SERVICES.map((s) => ({ label: s.name, href: `/${s.slug}` })),
              { label: "Service areas", href: "/service-areas" },
              { label: "Our projects", href: "/projects" },
              { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
              { label: "Warranty", href: "/warranty" },
              { label: "What to expect from an estimate", href: "/blog/what-to-expect-painting-estimate" },
              { label: "Request a free estimate", href: ESTIMATE_PATH },
            ]}
          />
        </Section>

        <Section title="Sources">
          <Bullets
            items={[
              <>
                <Ext href={SRC.epaRrp}>EPA: Lead Renovation, Repair and Painting Program</Ext>
              </>,
              <>
                <Ext href={SRC.oshaFalls}>OSHA: Stop Falls</Ext>
              </>,
              <>
                <Ext href={SRC.nwsHobby}>National Weather Service Houston/Galveston: Houston Hobby normals, 1991–2020</Ext>
              </>,
              <>
                <Ext href={SRC.swExtremeBond}>Sherwin-Williams: Extreme Bond Primer</Ext>
              </>,
              <>
                <Ext href={SRC.bmStix}>Benjamin Moore: Insl-x Stix Waterborne Bonding Primer</Ext>
              </>,
            ]}
          />
        </Section>

        <section className="container mx-auto px-4 max-w-4xl mb-14">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">About the author</h2>
            <p className="text-foreground/90">
              <Link href="/about" rel="author" className="font-semibold text-foreground hover:text-primary">
                {BUSINESS.founder.name}
              </Link>{" "}
              is the {BUSINESS.founder.jobTitle.toLowerCase()} of {BUSINESS.name}. He founded the company in{" "}
              {BUSINESS.founded}, runs it from its {BUSINESS.primaryAddress.city} headquarters, and personally reviews the
              prep scope on every estimate.
            </p>
          </div>
        </section>

        <CtaBlock title="Get an estimate that answers every question on this page">
          Call {BUSINESS.phone} or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request a free estimate
          </Link>
          . Written scope, product spec, certificate of insurance and {WARRANTY_YEARS}-year workmanship warranty with every
          quote.
        </CtaBlock>
      </main>
      <Footer />
    </>
  )
}
