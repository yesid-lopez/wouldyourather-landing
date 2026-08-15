"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "1,500+ questions",
    description:
      "Hand-written dilemmas that actually start arguments, from harmless to genuinely unsettling. Shuffle forever, skip the easy ones, favorite the keepers.",
    icon: "/images/icons/icon-cards.svg",
    tone: "bg-peri",
  },
  {
    title: "Write your own",
    description:
      "Add your own questions in My Cards when the categories run out of steam. The best rounds are the ones only your table would ask.",
    icon: "/images/icons/icon-chat.svg",
    tone: "bg-pink",
  },
  {
    title: "Pass the phone",
    description:
      "Pass the phone around the table. Works offline, no account, no sign-up.",
    icon: "/images/icons/icon-group.svg",
    tone: "bg-lime",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="relative mx-auto grid max-w-7xl items-start gap-16 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-lilac">
            Features
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Built to ruin <span className="text-lilac">friendships</span>
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-neutral-600">
            Responsibly, and only for about fifteen minutes at a time.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-5 rounded-[1.75rem] bg-sky-50 p-5 sm:gap-7 sm:p-6"
            >
              <div
                className={`${feature.tone} flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-16 sm:w-16`}
              >
                <Image
                  src={feature.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="h-8 w-8 brightness-0 sm:h-9 sm:w-9"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-black">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
