export interface Question {
  pack: string;
  a: string;
  b: string;
}

/** Sample questions used by the playable card in the hero — taken from the app. */
export const sampleQuestions: Question[] = [
  {
    pack: "Hard Choices",
    a: "Pause time, BUT you age while it's paused",
    b: "Rewind time, BUT only 10 seconds",
  },
  {
    pack: "Philosophical",
    a: "Vote against your own short-term finances for the wider common good",
    b: "Vote for your wallet against policies you believe are right",
  },
  {
    pack: "Hard Choices",
    a: "Have the power to control time",
    b: "Be able to teleport anywhere instantly",
  },
  {
    pack: "Money",
    a: "Have unlimited money",
    b: "Have unlimited time",
  },
  {
    pack: "Money",
    a: "Instantly earn any amount of money you desire",
    b: "Instantly spend any amount of money you desire",
  },
];
