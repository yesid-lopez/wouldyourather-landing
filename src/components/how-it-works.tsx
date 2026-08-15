"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Pick categories",
    description:
      "Classic, Funny, Hard Choices, Philosophical — tap the ones that fit the room. No setup, no rules to read.",
    bg: "bg-peri",
  },
  {
    title: "Choose a side",
    description:
      "Two options, one tap. You get a few seconds to commit before everyone at the table demands an explanation.",
    bg: "bg-lime",
  },
  {
    title: "Make it yours",
    description:
      "Add your own questions in My Cards when the categories run out of steam. Then pass the phone and start the next fight.",
    bg: "bg-pink",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-lilac">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Three taps to an argument
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            No account, no subscription, no explaining the rules to your uncle.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          {steps.map((step, index) => (
            <div key={step.title} className="contents">
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="hidden items-center justify-center md:flex"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-[12px] font-extrabold tracking-wide text-lime">
                    OR
                  </span>
                </div>
              )}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`${step.bg} flex min-h-[240px] flex-col rounded-[1.75rem] p-7 text-black`}
              >
                <h3 className="font-display text-2xl font-extrabold">
                  {step.title}
                </h3>
                <p className="mt-auto pt-8 text-[15px] leading-relaxed text-black/80">
                  {step.description}
                </p>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
