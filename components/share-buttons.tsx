// components/ShareButtons.tsx
// Single share component for blog posts and pages.
// Fixes the recurring `blog/undefined` bug by REQUIRING the slug as a prop
// and building the canonical URL from BUSINESS.url + path.

"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";

type Platform = "facebook" | "linkedin" | "twitter" | "whatsapp" | "email" | "copy";

type ShareButtonsProps = {
  /**
   * The post or page slug. REQUIRED. The component will throw a dev-time
   * error if missing, which prevents the `undefined` URL bug from shipping.
   */
  slug: string;
  /** Path prefix in front of the slug. Default "/blog/" for blog posts. Use "/" for service pages, etc. */
  pathPrefix?: string;
  /** Page or post title — used in tweet text, LinkedIn title, email subject. REQUIRED. */
  title: string;
  /** Optional short description for email body / og:description fallback */
  description?: string;
  /** Which platforms to show. Default: facebook, linkedin, twitter, copy. */
  platforms?: Platform[];
  /** Visual variant */
  variant?: "default" | "compact" | "iconOnly";
  /** Class for outer wrapper */
  className?: string;
};

export default function ShareButtons({
  slug,
  pathPrefix = "/blog/",
  title,
  description,
  platforms = ["facebook", "linkedin", "twitter", "copy"],
  variant = "default",
  className = "",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // ─── CRITICAL: validate slug at runtime ──────────────────
  // This guards against the `blog/undefined` bug detected in audit.
  // In dev, throws a clear error. In prod, gracefully no-renders rather
  // than emit broken URLs into the wild.
  if (!slug || slug === "undefined" || slug.trim() === "") {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        `[ShareButtons] Missing or invalid slug prop: "${slug}". The slug must be a non-empty string. Common cause: parent component didn't pass slug from page data.`
      );
    }
    return null;
  }

  if (!title || title.trim() === "") {
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        `[ShareButtons] Missing or invalid title prop. Title must be a non-empty string.`
      );
    }
    return null;
  }

  // Normalize pathPrefix: ensure leading and trailing slashes
  const normalizedPrefix = pathPrefix.startsWith("/")
    ? pathPrefix
    : `/${pathPrefix}`;
  const finalPrefix = normalizedPrefix.endsWith("/")
    ? normalizedPrefix
    : `${normalizedPrefix}/`;

  // Build the canonical share URL
  const shareUrl = `${BUSINESS.url}${finalPrefix}${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description ?? title);

  // Service URLs
  const serviceUrls: Record<Exclude<Platform, "copy">, string> = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  const labels: Record<Platform, string> = {
    facebook: "Share on Facebook",
    linkedin: "Share on LinkedIn",
    twitter: "Share on X",
    whatsapp: "Share on WhatsApp",
    email: "Share via Email",
    copy: copied ? "Copied!" : "Copy link",
  };

  const icons: Record<Platform, string> = {
    facebook: "f",
    linkedin: "in",
    twitter: "𝕏",
    whatsapp: "💬",
    email: "✉",
    copy: copied ? "✓" : "🔗",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available — fallback to selectable input would go here
    }
  };

  const handleClick = (
    platform: Platform,
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (platform === "copy") {
      e.preventDefault();
      handleCopy();
      return;
    }
    // Open share dialog in popup window (better UX than new tab)
    e.preventDefault();
    const url = serviceUrls[platform];
    const w = 600;
    const h = 500;
    const left = (window.screen.width - w) / 2;
    const top = (window.screen.height - h) / 2;
    window.open(
      url,
      "share-popup",
      `width=${w},height=${h},top=${top},left=${left},noopener,noreferrer`
    );
  };

  // Style classes per variant
  const buttonBase =
    "inline-flex items-center justify-center font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2";

  const buttonSizes = {
    default: "px-4 py-2 text-sm rounded-lg gap-2",
    compact: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    iconOnly: "w-10 h-10 rounded-full text-base",
  };

  const platformColors: Record<Platform, string> = {
    facebook: "bg-[#1877F2] hover:bg-[#0E63D3] text-white",
    linkedin: "bg-[#0A66C2] hover:bg-[#084c93] text-white",
    twitter: "bg-zinc-900 hover:bg-zinc-800 text-white",
    whatsapp: "bg-[#25D366] hover:bg-[#1faa54] text-white",
    email: "bg-zinc-700 hover:bg-zinc-800 text-white",
    copy: copied
      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300",
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="group"
      aria-label={`Share ${title}`}
    >
      {variant !== "iconOnly" && (
        <span className="text-sm text-zinc-600 font-medium mr-2">
          Share:
        </span>
      )}

      {platforms.map((platform) =>
        platform === "copy" ? (
          <button
            key={platform}
            type="button"
            onClick={(e) => handleClick(platform, e)}
            aria-label={labels[platform]}
            className={`${buttonBase} ${buttonSizes[variant]} ${platformColors[platform]}`}
          >
            <span aria-hidden>{icons[platform]}</span>
            {variant !== "iconOnly" && <span>{labels[platform]}</span>}
          </button>
        ) : (
          <a
            key={platform}
            href={serviceUrls[platform]}
            onClick={(e) => handleClick(platform, e)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels[platform]}
            className={`${buttonBase} ${buttonSizes[variant]} ${platformColors[platform]}`}
          >
            <span aria-hidden className="font-bold">
              {icons[platform]}
            </span>
            {variant !== "iconOnly" && (
              <span>
                {platform === "twitter"
                  ? "X"
                  : platform.charAt(0).toUpperCase() + platform.slice(1)}
              </span>
            )}
          </a>
        )
      )}
    </div>
  );
}
