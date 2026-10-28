import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing things they wish were different.",
  audio:
    "/media/audio/course/a2-b1/unit-3/lesson-2-i-wish-things-were-different/listen/listen.mp3",
  dialogue: [
    ["A", ["How are things at your apartment?"]],
    [
      "B",
      ["Honestly, I live with two roommates, and I wish I ", mark("didn't live"), " with roommates."],
    ],
    ["A", ["Would you rather live alone?"]],
    ["B", ["Definitely. I wish I ", mark("had"), " a place of my own."]],
    ["A", ["Why don't you look for a studio?"]],
    [
      "B",
      ["They're expensive. I wish I ", mark("could afford"), " a small studio."],
    ],
    ["A", ["I understand. How is your new job going?"]],
    [
      "B",
      ["It's exhausting. I wish it ", mark("were"), " less stressful, and I wish my boss ", mark("weren't"), " so demanding."],
    ],
    ["A", ["It sounds like you have a lot to deal with right now."]],
    [
      "B",
      ["I do. My roommates won't clean the kitchen, either. I wish they ", mark("would clean"), " it more often."],
    ],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What does speaker B wish they could afford?",
  options: [
    "A small studio",
    "A new car",
    "A longer vacation",
  ],
  answer: "A small studio",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How many roommates does speaker B live with?",
      answer: "Speaker B lives with two roommates.",
    },
    {
      question: "What does speaker B wish were different about the living situation?",
      answer: "Speaker B wishes they didn't live with roommates and had a place of their own.",
    },
    {
      question: "How does speaker B describe the new job?",
      answer: "Speaker B says it is exhausting.",
    },
    {
      question: "What does speaker B wish were different at work?",
      answer: "Speaker B wishes the job were less stressful and the boss weren't so demanding.",
    },
    {
      question: "What does speaker B wish the roommates would do?",
      answer: "Speaker B wishes they would clean the kitchen more often.",
    },
  ],
} satisfies ListenData;
