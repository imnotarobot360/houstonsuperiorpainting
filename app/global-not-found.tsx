import type { Metadata } from 'next'
import { PaintingRootLayout } from '@/components/root/painting-root-layout'
import NotFound from '@/app/(site)/not-found'
import { paintingMetadata } from '@/lib/site-metadata'
import '@/app/globals.css'

/**
 * 404 for URLs that match no route. The app has several root layouts (route
 * groups), so there is no single root layout for app/not-found.tsx to render
 * inside; Next serves this file instead (experimental.globalNotFound in
 * next.config.mjs). notFound() thrown inside the painting site still renders
 * app/(site)/not-found.tsx within its own layout.
 */
export const metadata: Metadata = {
  ...paintingMetadata,
  title: 'Page Not Found | Houston Superior Painting',
}

export default function GlobalNotFound() {
  return (
    <PaintingRootLayout lang="en">
      <NotFound />
    </PaintingRootLayout>
  )
}
