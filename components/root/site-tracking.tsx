import { Analytics } from '@vercel/analytics/next'
import { ScrollTracking } from '@/components/scroll-tracking'
import { GoogleAnalytics } from '@/components/google-analytics'
import { MetaPixel } from '@/components/meta-pixel'

/** Analytics and pixels rendered at the end of <body> by every root layout. */
export function SiteTracking() {
  return (
    <>
      <ScrollTracking />
      <GoogleAnalytics />
      <MetaPixel />
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  )
}
