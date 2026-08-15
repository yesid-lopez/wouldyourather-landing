import type { Metadata } from "next";

import { getFaqs } from "@/lib/faq";
import {
  absoluteUrl,
  appFeatures,
  hasAppStoreId,
  hasAppStoreUrl,
  site,
} from "@/lib/site";

const llmsAlternate = {
  "text/plain": "/llms.txt",
} as const;

export function getDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.title,
      template: site.titleTemplate,
    },
    description: site.description,
    keywords: [...site.keywords],
    authors: [{ name: site.company, url: site.url }],
    creator: site.company,
    publisher: site.company,
    applicationName: site.name,
    category: site.category,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: "/",
      siteName: site.name,
      title: site.title,
      description: site.description,
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.description,
    },
    alternates: {
      types: llmsAlternate,
    },
    ...(hasAppStoreId() ? { itunes: { appId: site.appStoreId } } : {}),
  };
}

export function getPageMetadata({
  title,
  description,
  path,
  useTitleTemplate = true,
}: {
  title: string;
  description: string;
  path: string;
  useTitleTemplate?: boolean;
}): Metadata {
  const url = path === "/" ? "/" : path;
  const displayTitle = useTitleTemplate ? `${title} | ${site.name}` : title;

  return {
    title: useTitleTemplate ? title : { absolute: title },
    description,
    alternates: {
      canonical: url,
      types: llmsAlternate,
    },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: displayTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
    },
  };
}

type JsonLd = Record<string, unknown>;

function organizationNode(): JsonLd {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("#organization"),
    name: site.company,
    url: site.url,
    email: site.supportEmail,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo.svg"),
    },
    brand: {
      "@type": "Brand",
      name: site.name,
    },
  };
}

function websiteNode(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("#website"),
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": absoluteUrl("#organization") },
  };
}

function softwareApplicationNode(): JsonLd {
  const app: JsonLd = {
    "@type": "SoftwareApplication",
    "@id": absoluteUrl("#app"),
    name: site.name,
    description: site.description,
    url: site.url,
    image: absoluteUrl(site.ogImage),
    applicationCategory: "GameApplication",
    applicationSubCategory: "Party Game",
    operatingSystem: "iOS",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    featureList: [...appFeatures],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: { "@id": absoluteUrl("#organization") },
    author: { "@id": absoluteUrl("#organization") },
  };

  if (hasAppStoreUrl()) {
    app.installUrl = site.appStoreUrl;
    app.downloadUrl = site.appStoreUrl;
  }

  return app;
}

/** Organization + WebSite + SoftwareApplication graph for the root layout. */
export function getSiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), softwareApplicationNode()],
  };
}

export function getFaqJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getFaqs().map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
