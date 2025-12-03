/**
 * Утилиты для добавления структурированных данных (JSON-LD) для SEO
 */

export interface OrganizationSchema {
  name: string;
  description: string;
  url: string;
  logo?: string;
  email?: string;
  telephone?: string;
  address?: {
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
}

/**
 * Генерирует JSON-LD для организации
 */
export function createOrganizationSchema(data: OrganizationSchema): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo,
    email: data.email,
    telephone: data.telephone,
    address: data.address
      ? {
          "@type": "PostalAddress",
          addressLocality: data.address.addressLocality,
          addressRegion: data.address.addressRegion,
          addressCountry: data.address.addressCountry,
        }
      : undefined,
  });
}

/**
 * Генерирует JSON-LD для статьи блога
 */
export function createArticleSchema(data: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  publisher: string;
  url: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      "@type": "Organization",
      name: data.author,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisher,
    },
    url: data.url,
  });
}

/**
 * Генерирует JSON-LD для сервиса
 */
export function createServiceSchema(data: {
  name: string;
  description: string;
  provider: string;
  serviceType: string;
  areaServed: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider,
    },
    serviceType: data.serviceType,
    areaServed: {
      "@type": "Place",
      name: data.areaServed,
    },
  });
}

/**
 * Добавляет JSON-LD скрипт в head
 */
export function addStructuredData(jsonLd: string, id: string) {
  // Удаляем предыдущий скрипт с таким же ID, если есть
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = id;
  script.textContent = jsonLd;
  document.head.appendChild(script);
}

/**
 * Удаляет JSON-LD скрипт из head
 */
export function removeStructuredData(id: string) {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}
