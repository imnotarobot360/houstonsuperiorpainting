import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // AI crawlers explicitly allowed for AEO 2026.
      //
      // OpenAI uses SEPARATE user agents per purpose, and allowing one does not
      // allow the others:
      //   GPTBot        → model training only. Does NOT surface the site in ChatGPT.
      //   OAI-SearchBot → indexes for ChatGPT search results. Required for organic
      //                   visibility inside ChatGPT.
      //   ChatGPT-User  → live fetch when a user's prompt cites this site.
      //   OAI-AdsBot    → crawls landing pages for ChatGPT advertising.
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'OAI-AdsBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://houstonsuperiorpainting.com/sitemap.xml',
  }
}
