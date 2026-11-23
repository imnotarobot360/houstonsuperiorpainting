import { PaintingRootLayout } from '@/components/root/painting-root-layout'
import { paintingMetadata } from '@/lib/site-metadata'
import '@/app/globals.css'

/**
 * Root layout for the Spanish homepage. A separate root layout so the server
 * HTML carries <html lang="es-US"> (owner brief 2026-10-27) without reading
 * request headers, which would make the whole site dynamic.
 */
export const metadata = paintingMetadata

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PaintingRootLayout lang="es-US">{children}</PaintingRootLayout>
}
