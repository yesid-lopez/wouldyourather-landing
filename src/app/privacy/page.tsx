import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = getPageMetadata({
  title: "Privacy Policy",
  description: site.privacyDescription,
  path: "/privacy",
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-navy/[0.08] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-4xl items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/images/logo.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl transition-transform duration-300 group-hover:-rotate-6"
            />
            <span className="font-display text-lg font-extrabold tracking-tight text-black">
              {site.name}
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="mb-3 font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
          Privacy Policy for {site.name}
        </h1>
        <p className="mb-10 text-sm text-neutral-500">
          Last updated: August 15, 2026
        </p>

        <p className="mb-10 leading-relaxed text-neutral-800">
          Thank you for playing <strong>{site.name}</strong>. Your privacy
          matters to us. This policy explains what information the app collects,
          how it is used, and what rights you have over your data.
        </p>

        <Section title="1. Information We Collect">
          <p className="mb-4 leading-relaxed text-neutral-800">
            {site.name} is designed to be played immediately, without friction.{" "}
            <strong>No account is required</strong> and we do not collect
            personal information such as your name, email address or phone
            number.
          </p>
          <p className="mb-3 leading-relaxed text-neutral-800">
            We may collect the following non-personal information:
          </p>
          <List
            items={[
              <>
                <strong>Anonymous play events</strong>: such as which packs are
                opened. Events are not linked to you or your device.
              </>,
              <>
                <strong>App usage data</strong>: such as number of sessions,
                time spent in the app, and which packs are opened.
              </>,
              <>
                <strong>Device information</strong>: such as device type,
                operating system version and language settings.
              </>,
              <>
                <strong>Crash and performance data</strong>: to help us improve
                stability.
              </>,
            ]}
          />
        </Section>

        <Section title="2. How We Use Information">
          <p className="mb-3 leading-relaxed text-neutral-800">
            We use the collected information to:
          </p>
          <List
            items={[
              "Improve the question packs and app performance",
              "Identify and fix technical issues",
            ]}
          />
          <p className="mt-4 leading-relaxed text-neutral-800">
            We do not sell or share your data with third parties for advertising
            purposes.
          </p>
        </Section>

        <Section title="3. Third-Party Services">
          <p className="mb-3 leading-relaxed text-neutral-800">
            To support the app we may use trusted third-party services such as
            analytics providers and crash reporting tools. These providers may
            collect anonymised, non-personal data as described in their own
            privacy policies.
          </p>
        </Section>

        <Section title="4. Data Storage & Retention">
          <List
            items={[
              <>
                Your favorites, answer history and streaks are stored{" "}
                <strong>only on your device</strong>.
              </>,
              "You can delete this data at any time by deleting the app.",
              "Anonymous usage data is stored without any identifier that could link it back to you.",
            ]}
          />
        </Section>

        <Section title="5. Children's Privacy">
          <p className="leading-relaxed text-neutral-800">
            Some question packs are intended for adult audiences and are marked
            as such in the app. We do not knowingly collect personal information
            from children under the age of 13. If you believe your child has
            provided personal information, please contact us and we will delete
            it.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p className="mb-3 leading-relaxed text-neutral-800">
            Depending on your location, you may have the right to:
          </p>
          <List
            items={[
              "Access the data collected about you",
              "Request correction or deletion of your data",
              "Opt out of analytics collection via your device settings",
            ]}
          />
        </Section>

        <Section title="7. Changes to This Policy">
          <p className="leading-relaxed text-neutral-800">
            We may update this Privacy Policy from time to time. Any changes will
            be posted within the app or on this page. Please review it
            periodically.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p className="mb-3 leading-relaxed text-neutral-800">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <p className="leading-relaxed text-neutral-800">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-lilac underline underline-offset-2 hover:text-black"
            >
              {site.supportEmail}
            </a>
          </p>
        </Section>
      </main>

      <footer className="border-t border-navy/[0.08] bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {site.company}. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="text-sm font-semibold text-lilac transition-colors hover:text-black"
          >
            &larr; Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-display text-xl font-bold text-black">
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ml-2 list-inside list-disc space-y-2 leading-relaxed text-neutral-800">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
