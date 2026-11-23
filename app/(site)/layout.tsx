import { PaintingRootLayout } from '@/components/root/painting-root-layout'
import { paintingMetadata } from '@/lib/site-metadata'
import '@/app/globals.css'

/**
 * Root layout for the English painting site: every page except /es (its own
 * root layout sets lang="es-US") and the retired /epoxy microsite.
 */
export const metadata = paintingMetadata

// Hourly ISR for every page in the group. Scheduled posts (lib/blog-schedule.ts)
// go live at 6 AM Houston time: /blog lists them, each guide page 404s until
// its date (components/aeo/guide-article.tsx), and related-guide links on any
// page filter by it. Static HTML would freeze those at build time; this
// re-renders at most once an hour. The daily deploy hook also rebuilds.
export const revalidate = 3600

export default function SiteRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PaintingRootLayout lang="en">{children}</PaintingRootLayout>
}
