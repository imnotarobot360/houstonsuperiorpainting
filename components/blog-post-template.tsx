"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Linkedin } from "lucide-react"
import { AUTHOR_REF, PUBLISHER_REF } from "@/components/structured-data"

interface FAQ {
  question: string
  answer: string
}

interface BlogPostProps {
  title: string
  excerpt: string
  author: string
  authorRole: string
  publishDate: string
  readTime: string
  category: string
  featuredImage: string
  featuredImageAlt: string
  children: React.ReactNode
  slug: string
  faqs?: FAQ[]
  relatedPosts?: {
    title: string
    href: string
    excerpt: string
    image: string
  }[]
}

export function BlogPostTemplate({
  title,
  excerpt,
  author,
  authorRole,
  publishDate,
  readTime,
  category,
  featuredImage,
  featuredImageAlt,
  children,
  slug,
  faqs = [],
  relatedPosts = []
}: BlogPostProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://houstonsuperiorpainting.com/blog/${slug}`
  const canonicalUrl = `https://houstonsuperiorpainting.com/blog/${slug}`
  
  // Convert date format for schema
  const isoDate = new Date(publishDate).toISOString().split('T')[0]
  
  // BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    "headline": title,
    "description": excerpt,
    "image": `https://houstonsuperiorpainting.com${featuredImage}`,
    "datePublished": isoDate,
    "dateModified": isoDate,
    // Author is a REFERENCE to the single canonical Person (Juan Serra, @id
    // OWNER_ID = .../about#juan-serra), which the root layout emits on every
    // page. Publisher is a reference to the sitewide Organization (ORG_ID).
    // Never inline a second Person or Organization here: duplicate nodes with
    // conflicting facts split entity authority instead of consolidating it.
    // The `author` prop is ignored for schema and display on purpose — the
    // only author on this site is the owner.
    "author": AUTHOR_REF,
    "publisher": PUBLISHER_REF,
    "articleSection": category,
    "wordCount": 1500,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-intro", ".quick-answer", "h1", "h2"]
    }
  }

  // FAQPage Schema (only if FAQs provided)
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://houstonsuperiorpainting.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://houstonsuperiorpainting.com/blog" },
      { "@type": "ListItem", "position": 3, "name": title, "item": canonicalUrl }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-midnight text-soft-white py-16 lg:py-20 overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-soft-white/70 hover:text-gold mb-6 transition-colors font-manrope text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
            
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              {category}
            </p>
            
            <h1 className="hero-h1 text-4xl lg:text-6xl font-display font-bold mb-5 text-balance leading-[1.08]">
              {title}
            </h1>
            
            <p className="article-intro font-cormorant text-2xl lg:text-3xl text-soft-white/85 mb-6 text-pretty leading-snug">
              {excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <Link href="/about" rel="author" className="hover:text-gold underline-offset-2 hover:underline">Juan Serra</Link>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={isoDate} itemProp="datePublished">{publishDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src={featuredImage}
              alt={featuredImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12" itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content={title} />
          <meta itemProp="description" content={excerpt} />
          <div className="prose prose-lg max-w-none 
            prose-headings:font-display prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-4
            prose-h2:text-3xl prose-h2:font-bold prose-h2:border-b prose-h2:border-border prose-h2:pb-2
            prose-h3:text-xl prose-h3:font-semibold
            prose-p:text-foreground/80 prose-p:leading-7 prose-p:mb-5 prose-p:text-[17px]
            prose-li:text-foreground/80 prose-li:leading-7 prose-li:text-[17px] prose-li:mb-2
            prose-ul:my-5 prose-ul:pl-6 prose-ol:my-5 prose-ol:pl-6
            prose-strong:text-foreground prose-strong:font-semibold
            prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80
            prose-table:my-6 prose-table:text-[15px]
            prose-thead:border-b-2 prose-thead:border-foreground/20
            prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:py-2.5 prose-th:pr-4
            prose-td:align-top prose-td:text-foreground/80 prose-td:py-2.5 prose-td:pr-4
            prose-tr:border-b prose-tr:border-border
          ">
            {children}
          </div>

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-muted rounded-lg p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-foreground/80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Share this article:</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Share on X"
                >
                  <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="mt-8 p-6 bg-muted rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  <Link href="/about" rel="author" className="hover:text-primary">Juan Serra</Link>
                </p>
                <p className="text-sm text-muted-foreground">Owner, Houston Superior Painting</p>
                <p className="text-sm text-foreground/70 mt-2">
                  Juan Serra founded Houston Superior Painting in 2019 and runs it from the company&apos;s Cypress headquarters, with five offices serving Greater Houston. He reviews the prep scope on every estimate.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary text-primary-foreground rounded-xl text-center">
            <h3 className="text-2xl font-display font-bold mb-3">Ready to Transform Your Home?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
              Get a free estimate from Houston Superior Painting. We bring local expertise and quality craftsmanship to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                asChild
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10"
                asChild
              >
                <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960">
                  Call (346) 594-5960
                </a>
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
