"use client";

import { motion } from "framer-motion";

import { AppStoreBadge } from "@/components/app-store-badge";
import { site, stats } from "@/lib/site";

export function DownloadCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-0 h-[500px] w-[500px] rounded-full bg-peri-500/35 blur-[130px]" />
        <div className="absolute bottom-0 right-[8%] h-[420px] w-[420px] rounded-full bg-pink-500/30 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/[0.12] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-lav-300">
            Get started
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            So, would you rather{" "}
            <span className="text-lime-500">download it</span> or keep scrolling?
          </h2>
          <p className="mt-4 text-lg text-sky-200">
            {site.name} is free, works offline and needs no account. Write your
            own questions in My Cards when the categories are not enough.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-9 flex justify-center"
        >
          <AppStoreBadge tone="light" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-14 flex items-center justify-center gap-8 sm:gap-14"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-14">
              {i > 0 && <div className="h-10 w-px bg-white/15" />}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </span>
                  {"hasStar" in stat && stat.hasStar && (
                    <svg
                      className="h-5 w-5 fill-current text-lime-500"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
                <div className="mt-1 text-sm text-sky-200">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
