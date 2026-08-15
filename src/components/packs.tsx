"use client";

import { motion } from "framer-motion";

const packs = [
  {
    name: "Classic",
    a: "Live in space for a year",
    b: "Live under the sea",
    bg: "bg-peri",
    flower: "text-lime",
  },
  {
    name: "Funny",
    a: "One horse-sized duck",
    b: "100 duck-sized horses",
    bg: "bg-lime",
    flower: "text-black",
  },
  {
    name: "Hard Choices",
    a: "Pause time, but age",
    b: "Rewind only 10 seconds",
    bg: "bg-navy",
    flower: "text-pink",
    invert: true,
  },
  {
    name: "Philosophical",
    a: "The common good",
    b: "Your wallet",
    bg: "bg-pink",
    flower: "text-lime",
  },
  {
    name: "Relationships",
    a: "Know every thought",
    b: "Keep every secret",
    bg: "bg-sky",
    flower: "text-lilac",
  },
  {
    name: "Money",
    a: "Unlimited money",
    b: "Unlimited time",
    bg: "bg-lilac",
    flower: "text-sky",
  },
];

export function Packs() {
  return (
    <section id="packs" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-wider text-lilac">
              Categories
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Pick your flavour of chaos
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-neutral-600 sm:pb-1">
            Eleven categories to match the room you are in. Plus My Cards for
            whatever you invent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack, index) => (
            <motion.article
              key={pack.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-[1.75rem] p-6 ${
                pack.invert ? "text-white" : "text-black"
              } ${pack.bg}`}
            >
              <div className="flex items-start justify-between">
                <p
                  className={`text-[11px] font-extrabold uppercase tracking-[0.18em] ${
                    pack.invert ? "text-white/70" : "text-black/60"
                  }`}
                >
                  {pack.name}
                </p>
                <Flower className={`h-7 w-7 ${pack.flower}`} />
              </div>
              <div className="mt-auto">
                <p className="font-display text-2xl font-extrabold leading-tight">
                  {pack.a}
                </p>
                <div className="my-3 flex items-center gap-3">
                  <span
                    className={`h-px flex-1 ${
                      pack.invert ? "bg-white/20" : "bg-navy/15"
                    }`}
                  />
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-extrabold tracking-wide ${
                      pack.invert
                        ? "bg-lime text-black"
                        : "bg-navy text-lime"
                    }`}
                  >
                    OR
                  </span>
                  <span
                    className={`h-px flex-1 ${
                      pack.invert ? "bg-white/20" : "bg-navy/15"
                    }`}
                  />
                </div>
                <p className="font-display text-2xl font-extrabold leading-tight">
                  {pack.b}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 text-center text-[15px] font-semibold text-neutral-600"
        >
          Five more inside — Random, Moral Dilemmas, Embarrassing, Pop Culture,
          and Fantasy & Superpowers.
        </motion.p>
      </div>
    </section>
  );
}

function Flower({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <circle cx="16" cy="10" r="5" />
      <circle cx="22" cy="16" r="5" />
      <circle cx="16" cy="22" r="5" />
      <circle cx="10" cy="16" r="5" />
      <circle cx="16" cy="16" r="3.5" />
    </svg>
  );
}
