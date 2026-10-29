import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to an exchange student discussing goals and adaptation abroad.",
  audio: "",
  dialogue: [
    ["Keiko", ["Are you excited about moving to Montreal?"]],
    ["Sam", ["Very, although I'm a little scared of studying in another language."]],
    ["Keiko", ["You'll adjust to it. By this time next year, your confidence will have increased enormously."]],
    ["Sam", ["I hope so. By the end of the program, I'll have been studying French for eighteen months."]],
    ["Keiko", ["You'll also have become familiar with local customs and more aware of cultural differences."]],
    ["Sam", ["I'm looking forward to participating in community events and taking advantage of every opportunity."]],
    ["Keiko", [mark("Once you've become accustomed to daily life there, you'll wonder why you were so worried"), "."]],
    ["Sam", ["Thanks. That's exactly the encouragement I needed."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is Sam worried about?",
  options: [
    "Studying in another language",
    "Finding a shorter academic program",
    "Avoiding all community activities",
  ],
  answer: "Studying in another language",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What will have increased by the following year?", answer: "Sam's confidence." },
    { question: "How long will Sam have been studying French?", answer: "For eighteen months." },
    { question: "What is Sam looking forward to?", answer: "Participating in community events." },
    { question: "What does Sam want to take advantage of?", answer: "Every opportunity." },
  ],
} satisfies ListenData;
