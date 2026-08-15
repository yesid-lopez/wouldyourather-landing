import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
      </body>
    </html>
  );
}
