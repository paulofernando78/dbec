import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a customer asking about T-shirts and sneakers.",
  audio: "/media/audio/course/a2/unit-3/lesson-1-how-much-is-that/listen/listen.mp3",
  dialogue: [
    ["Customer", [mark("How much is this T-shirt?")]],
    ["Sales associate", ["The green one? It's $28.99."]],
    ["Customer", ["That's reasonable. How much is that blue one?"]],
    ["Sales associate", ["That one is on sale. It's twenty-two dollars."]],
    ["Customer", [mark("What about these sneakers?")]],
    ["Sales associate", ["The white ones are $55, and those gray ones are $40."]],
    ["Customer", ["The gray ones are cheap. Can I try them on?"]],
    ["Sales associate", ["Of course. What size do you need?"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which item does the customer want to try on?",
  options: ["The blue T-shirt", "The white sneakers", "The gray sneakers"],
  answer: "The gray sneakers",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How much is the green T-shirt?", answer: "It's $28.99." },
    { question: "Which T-shirt is on sale?", answer: "The blue one." },
    { question: "How much are the gray sneakers?", answer: "They're $40." },
  ],
} satisfies ListenData;
