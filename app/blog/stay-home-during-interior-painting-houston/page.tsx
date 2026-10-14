import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-14 (draft 6). No health claims: point to product information
// and medical guidance for sensitive occupants.

const D: GuideArticleData = {
  path: "/blog/stay-home-during-interior-painting-houston",
  title: "Can You Stay Home During Interior Painting? Houston Guide",
  description:
    "Most families can stay home during phased interior painting. How rooms, ventilation, children, pets, furniture and drying time should be planned.",
  h1: "Can you stay home during interior painting?",
  eyebrow: "Interior guide",
  published: "2026-10-14",
  updated: "2026-10-14",
  quickAnswer: (
    <>
      Usually, yes. Many Houston families stay home while the interior is painted, especially when the work is done a
      room or two at a time. Whether it is practical depends on the size of the job, the products, ventilation, who lives
      in the house, how much repair work there is, and how many key rooms are out of use at once. Agree on the room order
      before work starts.
    </>
  ),
  sections: [
    {
      title: "When staying home usually works",
      body: (
        <Bullets
          items={[
            "One or two rooms are worked on at a time.",
            "Bedrooms are usable every night.",
            "Kitchen and bathroom work is scheduled carefully.",
            "Rooms can be kept ventilated.",
            "Furniture and walkways stay safe to get around.",
            "Children and pets can be kept out of work areas.",
            "No special containment or regulated-material work is involved.",
          ]}
        />
      ),
    },
    {
      title: "When staying elsewhere may be easier",
      body: (
        <p>
          Consider a few nights away if the job includes a lot of spraying, ceilings throughout the house, heavy drywall
          sanding, strong specialty coatings, poor ventilation, or bedrooms, kitchen and bathrooms all at once. Anyone with
          breathing problems or other health concerns should check the product information and ask their doctor rather
          than rely on a painter&apos;s general advice.
        </p>
      ),
    },
    {
      title: "How phased interior painting works",
      body: (
        <>
          <Steps
            items={[
              { title: "Confirm the plan", text: "colors, sheens and the room order." },
              { title: "Clear the first area", text: "move fragile belongings and wall decor." },
              { title: "Repair and prep", text: "patch and prepare the first zone." },
              { title: "Paint and check", text: "finish the zone and walk it with you." },
              { title: "Let it dry", text: "follow the product's drying time." },
              { title: "Hand it back", text: "reopen the room before starting the next zone." },
            ]}
          />
          <p>
            The exact order depends on the furniture, how the rooms connect and what is being painted. See an{" "}
            <Link href="/projects/richmond-two-story-great-room">interior we painted in Richmond</Link> and{" "}
            <Link href="/blog/how-long-does-interior-painting-take-in-houston">how long interior painting takes</Link>.
          </p>
        </>
      ),
    },
    {
      title: "Furniture and belongings",
      body: (
        <p>
          Get it in writing who moves what. Homeowners are usually asked to put away valuables, electronics, medications,
          clothing and fragile items. Movable furniture is pushed to the middle of the room and covered; very large pieces
          can stay if there is room to work around them.
        </p>
      ),
    },
    {
      title: "Children and pets",
      body: (
        <p>
          Wet paint, tools, ladders, plastic sheeting and open doors are all hazards. Keep children and pets out of the
          rooms being worked on, and agree with the crew on gates, alarms and how they will come and go.
        </p>
      ),
    },
    {
      title: "Dry is not the same as cured",
      body: (
        <p>
          A wall can feel dry long before the paint reaches full hardness. Follow the product&apos;s recoat and cure
          guidance before scrubbing walls, hanging pictures, closing painted doors tightly or setting things on painted
          shelves.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can I sleep in a freshly painted room?",
      a: "Follow the product information and keep the room ventilated, and take extra care with anyone sensitive. A faint smell is not by itself a measure of safety either way. Phasing the work so bedrooms are finished early in the day helps.",
    },
    {
      q: "Do painters move furniture?",
      a: `Policies vary. ${BUSINESS.name}'s written estimate says what the crew moves and what you should put away before we arrive.`,
    },
    {
      q: "Can I keep using my kitchen?",
      a: "During wall painting, usually partly. Cabinet refinishing needs a more detailed plan for masking, access and cure time, so ask for a day-by-day schedule.",
    },
    {
      q: "How long will the interior take?",
      a: "It depends on the number of rooms, repairs, trim and doors, colors, products and crew size. Your estimate gives the schedule for your home.",
    },
  ],
  limitations: (
    <>
      General guidance, not medical advice. Product drying and ventilation guidance comes from the manufacturer. Your
      written estimate sets the room order, schedule and who moves what.
    </>
  ),
  related: [
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Interior painting cost", href: "/interior-painting-cost-houston" },
    { label: "How long interior painting takes", href: "/blog/how-long-does-interior-painting-take-in-houston" },
    { label: "How long painted cabinets take to cure", href: "/blog/cabinet-paint-cure-time-houston" },
  ],
  ctaTitle: "Get a phased interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
