import { useEffect } from "react";

export interface PageMetaConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
  noindex?: boolean;
}

/**
 * Хук для управления meta-тегами конкретной страницы
 * Устанавливает title, description, OG tags и canonical URL
 */
export function usePageMeta(config: PageMetaConfig) {
  useEffect(() => {
    const {
      title,
      description,
      keywords,
      ogImage,
      canonical,
      type = "website",
      noindex = false,
    } = config;

    // Set title
    document.title = title;

    // Helper to set meta tag
    const setMetaTag = (property: string, content: string) => {
      let meta =
        document.querySelector(`meta[property="${property}"]`) ||
        document.querySelector(`meta[name="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        if (property.startsWith("og:") || property.startsWith("twitter:")) {
          meta.setAttribute("property", property);
        } else {
          meta.setAttribute("name", property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic SEO meta tags
    setMetaTag("description", description);
    if (keywords) {
      setMetaTag("keywords", keywords);
    }

    // Robots meta
    if (noindex) {
      setMetaTag("robots", "noindex, nofollow");
    } else {
      setMetaTag("robots", "index, follow");
    }

    // Open Graph tags
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:type", type);
    if (ogImage) {
      setMetaTag("og:image", ogImage);
    }
    
    // Twitter Card tags
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    if (ogImage) {
      setMetaTag("twitter:image", ogImage);
    }

    // Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    
    if (canonical) {
      canonicalLink.href = canonical;
    } else {
      // Default to current URL without hash
      const baseUrl = window.location.origin + window.location.pathname;
      const hash = window.location.hash;
      canonicalLink.href = baseUrl + hash;
    }

    // Update og:url to match canonical
    setMetaTag("og:url", canonicalLink.href);
  }, [config.title, config.description, config.keywords, config.ogImage, config.canonical, config.type, config.noindex]);
}
