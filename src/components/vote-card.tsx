"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { sampleQuestions } from "@/lib/questions";

type Side = "a" | "b";

export function VoteCard() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<Side | null>(null);

  const question = sampleQuestions[index];
  const revealed = picked !== null;

  const nextQuestion = () => {
    setPicked(null);
    setIndex((current) => (current + 1) % sampleQuestions.length);
  };

  return (
    <div className="flex h-[560px] flex-col gap-3 p-4 pt-9">
      <div className="flex items-center justify-between px-1">
        <span className="rounded-full bg-navy-900/[0.08] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-600">
          {question.pack}
        </span>
        <span className="text-[11px] font-bold text-neutral-500">
          {index + 1}/{sampleQuestions.length}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col gap-3">
        <Option
          side="a"
          text={question.a}
          picked={picked}
          onSelect={() => setPicked("a")}
        />
        <Option
          side="b"
          text={question.b}
          picked={picked}
          onSelect={() => setPicked("b")}
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-[13px] font-extrabold tracking-wide text-black ring-4 ring-white">
            OR
          </div>
        </div>
      </div>

      <div className="flex h-14 items-center">
        <AnimatePresence mode="wait" initial={false}>
          {revealed ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex w-full items-center justify-between gap-3"
            >
              <p className="text-[13px] font-bold leading-tight text-neutral-800">
                Locked in. Now explain yourself.
              </p>
              <button
                type="button"
                onClick={nextQuestion}
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2.5 text-[13px] font-bold text-sky transition-transform active:scale-95"
              >
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full text-center text-[13px] font-semibold text-neutral-500"
            >
              Tap a side. There are no wrong answers.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface OptionProps {
  side: Side;
  text: string;
  picked: Side | null;
  onSelect: () => void;
}

function Option({ side, text, picked, onSelect }: OptionProps) {
  const revealed = picked !== null;
  const isPicked = picked === side;

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={revealed}
      aria-label={`Choose: ${text}`}
      className={cn(
        "relative flex-1 overflow-hidden rounded-[1.75rem] p-4 text-left transition-all duration-300",
        side === "a" ? "bg-peri-500" : "bg-pink-500",
        !revealed && "hover:brightness-105 active:scale-[0.98]",
        revealed && !isPicked && "opacity-45"
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-900/15 text-[13px] font-extrabold text-black">
            {side.toUpperCase()}
          </span>
          {isPicked && (
            <span className="rounded-full bg-lime-500 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-black">
              Your pick
            </span>
          )}
        </div>

        <p className="mt-auto font-display text-[21px] font-extrabold leading-[1.15] text-black">
          {text}
        </p>

        <div className="mt-2 h-8">
          <span className="text-[12px] font-bold text-black/70">
            {revealed ? (isPicked ? "defend it" : "the other side") : "tap to choose"}
          </span>
        </div>
      </div>
    </button>
  );
}
