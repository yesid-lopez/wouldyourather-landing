"use client";

import { motion } from "framer-motion";

import { AppStoreBadge } from "@/components/app-store-badge";
import { PhoneFrame } from "@/components/phone-frame";
import { VoteCard } from "@/components/vote-card";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-[480px] w-[480px] rounded-full bg-peri/40 blur-[120px]" />
        <div className="absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full bg-pink/30 blur-[120px]" />
        <div className="absolute left-[48%] top-16 h-[220px] w-[220px] rounded-full bg-lime/25 blur-[90px]" />
      </div>

      <Sparkle className="absolute left-[12%] top-28 hidden h-7 w-7 text-lilac lg:block" />
      <Sparkle className="absolute right-[18%] top-40 hidden h-5 w-5 rotate-12 text-pink lg:block" />
      <Flower className="absolute bottom-28 left-[8%] hidden h-10 w-10 text-peri lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-[3.25rem] font-extrabold leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-[4.75rem]"
            >
              Would you
              <br />
              rather{" "}
              <span className="relative inline-block">
                <span className="text-lilac">argue</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 9"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6.5C48 2 152 2 198 6.5"
                    stroke="#E3FC87"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              about it?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-neutral-600 sm:text-xl lg:mx-0"
            >
              1,500+ impossible choices, 11 categories, and a blank page for the
              questions only your table would ask. Perfect for road trips, long
              dinners and settling nothing at all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
            >
              <AppStoreBadge />
              <a
                href="#how-it-works"
                className="text-[15px] font-bold text-black underline decoration-lime decoration-2 underline-offset-4 transition-colors hover:text-lilac"
              >
                See how it plays
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-12 flex items-center justify-center gap-8 lg:justify-start"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="h-9 w-px bg-navy/15" />}
                  <div>
                    <dd className="flex items-center gap-1.5 font-display text-2xl font-extrabold text-black">
                      {stat.value}
                      {"hasStar" in stat && stat.hasStar && <StarIcon />}
                    </dd>
                    <dt className="mt-0.5 text-[13px] font-semibold text-neutral-500">
                      {stat.label}
                    </dt>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -left-1 top-6 z-30 hidden -rotate-12 rounded-2xl bg-lime px-4 py-2.5 text-sm font-bold text-black shadow-xl shadow-navy/10 lg:block">
              Try it, it is playable
              <span className="ml-1.5 text-lilac">↘</span>
            </div>

            <PhoneFrame className="w-[300px] rotate-[-2deg] animate-float sm:w-[320px] lg:rotate-[-4deg]">
              <VoteCard />
            </PhoneFrame>

            <div className="absolute -bottom-3 right-2 z-30 hidden rotate-6 rounded-2xl bg-pink px-4 py-2.5 text-sm font-extrabold text-black shadow-xl shadow-pink/40 lg:block">
              No wrong answers
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      className="h-5 w-5 fill-current text-lime"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5l1.6 6.4L20 9.5l-6.4 1.6L12 17.5l-1.6-6.4L4 9.5l6.4-1.6L12 1.5z" />
    </svg>
  );
}

function Flower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <circle cx="16" cy="10" r="5" />
      <circle cx="22" cy="16" r="5" />
      <circle cx="16" cy="22" r="5" />
      <circle cx="10" cy="16" r="5" />
      <circle cx="16" cy="16" r="3.5" fill="#E3FC87" />
    </svg>
  );
}
