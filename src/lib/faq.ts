import { site } from "@/lib/site";

export interface FaqItem {
  question: string;
  answer: string;
}

export function getFaqs(): FaqItem[] {
  return [
    {
      question: "What is the Would You Rather app?",
      answer:
        "Would You Rather is a free iOS party game of impossible choices. Pick your categories, tap a side, and argue it out with friends — on the couch, at dinner, or on a road trip.",
    },
    {
      question: "Is Would You Rather free on iOS?",
      answer:
        "Yes. Would You Rather is free to download on iOS, with 11 question categories included. There is no subscription required to play.",
    },
    {
      question: "Does the Would You Rather game work offline?",
      answer:
        "Yes. The app plays fully offline, so it works on planes, road trips, and anywhere you would rather not hunt for a signal.",
    },
    {
      question: "Do I need an account to play?",
      answer:
        "No. There is no sign-up. Favorites stay on your device.",
    },
    {
      question: "What question categories are included?",
      answer:
        "There are 1,500+ questions across 11 categories: Classic, Funny, Hard Choices, Random, Philosophical, Moral Dilemmas, Embarrassing, Relationships, Pop Culture, Fantasy & Superpowers, and Money. You can also write your own in My Cards.",
    },
    {
      question: "What else can I do in the app?",
      answer:
        "Shuffle questions, write your own in My Cards, and pass the phone around the table. No account needed.",
    },
    {
      question: "Who makes Would You Rather?",
      answer: `Would You Rather is made by ${site.company}. For support, email ${site.supportEmail}.`,
    },
  ];
}
