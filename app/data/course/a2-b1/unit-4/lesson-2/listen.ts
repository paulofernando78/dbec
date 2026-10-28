import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing how to prepare roasted vegetables.",
  audio:
    "/media/audio/course/a2-b1/unit-4/lesson-2-recipe-steps/listen/listen.mp3",
  dialogue: [
    ["A", ["Can you show me how to make your roasted vegetables?"]],
    ["B", [mark("First"), ", wash and chop the vegetables."]],
    ["A", ["Okay. What do I do once they're ready?"]],
    ["B", [mark("Then"), ", place them on a baking tray."]],
    ["A", ["Do I add anything before they go into the oven?"]],
    [
      "B",
      [mark("Next"), ", drizzle them with olive oil and add some seasoning."],
    ],
    ["A", ["That sounds easy. How long do they need to cook?"]],
    [
      "B",
      [mark("After that"), ", roast the vegetables for twenty-five minutes."],
    ],
    ["A", ["And what do you usually eat with them?"]],
    ["B", [mark("Finally"), ", serve them with rice."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What are the speakers preparing?",
  options: ["Roasted vegetables", "Macaroni", "A fruit salad"],
  answer: "Roasted vegetables",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What should you do first?",
      answer: "Wash and chop the vegetables.",
    },
    {
      question: "Where should you place the vegetables?",
      answer: "On a baking tray.",
    },
    {
      question: "What should you add before roasting them?",
      answer: "Olive oil and some seasoning.",
    },
    {
      question: "How long should you roast the vegetables?",
      answer: "For twenty-five minutes.",
    },
    {
      question: "What should you serve with the vegetables?",
      answer: "Rice.",
    },
  ],
} satisfies ListenData;
