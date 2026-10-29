import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two managers discussing candidates for a creative role.",
  audio: "",
  dialogue: [
    ["Mara", ["Which candidate do you think would be best for the design team?"]],
    ["Theo", ["Leah impressed me. She's a curious, perceptive person able to notice details that others miss."]],
    ["Mara", ["I agree, but the candidate trained in product engineering had more technical knowledge."]],
    ["Theo", ["That's true. Still, we need someone willing to explore unfamiliar ideas, not just follow established methods."]],
    ["Mara", ["Leah also described a project requiring both patience and resourcefulness."]],
    ["Theo", ["And people with that kind of determination usually handle uncertainty well."]],
    ["Mara", [mark("A designer combining curiosity with discipline could bring real innovation to the team"), "."]],
    ["Theo", ["Then Leah seems like the strongest choice."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why do Mara and Theo prefer Leah?",
  options: [
    "She combines curiosity, perception, determination, and discipline.",
    "She has worked at the company longer than every other candidate.",
    "She prefers following established methods without questioning them.",
  ],
  answer: "She combines curiosity, perception, determination, and discipline.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What is Leah able to notice?", answer: "Details that other people miss." },
    { question: "Which candidate had more technical knowledge?", answer: "The candidate trained in product engineering." },
    { question: "What did Leah's project require?", answer: "Patience and resourcefulness." },
    { question: "Which qualities could bring innovation to the team?", answer: "Curiosity combined with discipline." },
  ],
} satisfies ListenData;
