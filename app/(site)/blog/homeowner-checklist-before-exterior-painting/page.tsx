import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-16.

const D: GuideArticleData = {
  path: "/blog/homeowner-checklist-before-exterior-painting",
  title: "Homeowner Checklist Before Exterior Painting Starts",
  description:
    "What to move, trim, unlock and tell your neighbors before an exterior painting crew arrives, so the job starts on time and goes smoothly.",
  h1: "Homeowner checklist before exterior painting starts",
  eyebrow: "Exterior guide",
  published: "2027-01-16",
  updated: "2027-01-16",
  quickAnswer: (
    <>
      A few days before an exterior job, clear about three feet around the house, trim plants and branches away from the
      walls, turn off sprinklers, park cars away from the house, and make sure the crew can reach every side, gates and an
      outdoor water spigot. Keep pets inside, tell close neighbors, and confirm colors and HOA approval one more time.
    </>
  ),
  sections: [
    {
      title: "The week before",
      body: (
        <Steps
          items={[
            { title: "Confirm colors and HOA approval", text: "and that the estimate lists every surface you expect." },
            { title: "Trim plants", text: "branches and shrubs back from walls, eaves and the roof edge." },
            { title: "Tell neighbors", text: "especially if ladders or spray work will be near a shared fence or driveway." },
          ]}
        />
      ),
    },
    {
      title: "The day before",
      body: (
        <Bullets
          items={[
            "Move patio furniture, grills, planters, decorations and hoses away from the walls.",
            "Turn off sprinklers for the length of the job.",
            "Park cars away from the house and out of the driveway if the garage door is being painted.",
            "Unlock gates and confirm the crew can use an outdoor water spigot and an outlet.",
            "Take down wall-mounted items you want kept: flags, hose reels, house numbers and decor.",
          ]}
        />
      ),
    },
    {
      title: "During the job",
      body: (
        <Bullets
          items={[
            "Keep pets inside and kids away from ladders.",
            "Keep windows closed on the side being washed or sprayed.",
            "Ask the crew lead before moving anything that has been masked.",
          ]}
        />
      ),
    },
    {
      title: "More help",
      body: (
        <p>
          See the <Link href="/blog/spring-exterior-painting-checklist-houston">spring exterior checklist</Link>,{" "}
          <Link href="/blog/exterior-painting-timeline-rain-houston">the exterior timeline and rain</Link>,{" "}
          <Link href="/blog/painting-two-story-house-exterior-houston">two-story exteriors</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How do I prepare my house for exterior painting?",
      a: "Clear about three feet around the walls, trim plants back, turn off sprinklers, move cars, and give access to every side, gates and a spigot.",
    },
    {
      q: "Do I need to be home during exterior painting?",
      a: "Usually not, if the crew has access to every side, gates, water and power.",
    },
    {
      q: "Should I turn off sprinklers before exterior painting?",
      a: "Yes, for the whole job. Water on fresh paint can spot it and slow drying.",
    },
    {
      q: "Do painters move patio furniture?",
      a: "Often for small items, but clearing the walls yourself before day one keeps the job on schedule.",
    },
  ],
  limitations: <>General guidance; your estimate and crew lead confirm what they need for your home.</>,
  related: [
    { label: "Spring exterior checklist", href: "/blog/spring-exterior-painting-checklist-houston" },
    { label: "Exterior timeline and rain", href: "/blog/exterior-painting-timeline-rain-houston" },
    { label: "Painting a two-story exterior", href: "/blog/painting-two-story-house-exterior-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
