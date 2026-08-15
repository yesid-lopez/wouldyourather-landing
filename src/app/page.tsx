import type { Metadata } from "next";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Packs } from "@/components/packs";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";
import { getPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = getPageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  useTitleTemplate: false,
});

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Packs />
      <HowItWorks />
      <Faq />
      <DownloadCTA />
      <Footer />
    </>
  );
}
