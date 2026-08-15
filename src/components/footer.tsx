import Image from "next/image";
import Link from "next/link";

import { navLinks, site } from "@/lib/site";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy", external: false },
  { href: "#", label: "Terms of Use", external: false },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080c1c] text-white">
      <div className="relative h-6 w-full overflow-hidden bg-[#080c1c]">
        <div className="absolute inset-x-[-50%] bottom-0 h-12 w-[200%] rounded-t-[100%] bg-[#080c1c]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(136,162,255,0.22) 0%, rgba(8,12,28,0) 60%)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-12 md:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group mb-5 flex items-center gap-2.5">
              <Image
                src="/images/logo.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl"
              />
              <span className="font-display text-lg font-extrabold">
                {site.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              {site.tagline}. 1,500+ dilemmas for road trips, long dinners and
              group chats that need a reset.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">App</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Suggest a question
                </a>
              </li>
              <li>
                <a
                  href={site.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  App Store page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mt-12 h-24 overflow-hidden sm:h-32 lg:h-44">
          <p className="absolute bottom-[-0.75rem] select-none font-display text-[3.5rem] font-extrabold leading-none tracking-tighter text-white/[0.07] sm:bottom-[-1rem] sm:text-[5rem] lg:bottom-[-2.5rem] lg:text-[11rem]">
            or?
          </p>
          <p className="absolute bottom-6 right-0 max-w-[220px] text-right text-xs leading-relaxed text-white/30 sm:bottom-10">
            Made for road trips, long dinners, and group chats that need a
            reset.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-5 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {site.company}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm font-bold">
            <span className="text-peri">would you</span>
            <span className="text-pink">rather</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
