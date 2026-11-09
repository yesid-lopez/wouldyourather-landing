import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { JsonLd } from "@/components/json-ld";
import { getDefaultMetadata, getSiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = getDefaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.language}>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <JsonLd data={getSiteJsonLd()} />
        {children}
        <Script
          src="https://umami.yesidlopez.de/script.js"
          data-website-id="25315e26-8c50-4882-92c3-7898b712a52c"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
