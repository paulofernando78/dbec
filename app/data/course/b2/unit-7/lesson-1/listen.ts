import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two coworkers discussing changes in connected technology.",
  audio: "",
  dialogue: [
    ["Nora", ["Have you noticed how quickly our workplace is changing?"]],
    ["Isaac", ["Definitely. More employees are being allowed to work remotely, and most meetings are being recorded."]],
    ["Nora", ["Cloud access has also been expanded, so files can be opened from almost anywhere."]],
    ["Isaac", ["That's convenient, but enormous amounts of personal data have been collected in the process."]],
    ["Nora", ["The company says stronger security controls will be introduced next month."]],
    ["Isaac", ["I hope so. Routine tasks are going to be automated, but privacy shouldn't be treated as an afterthought."]],
    ["Nora", [mark("New tools are being developed faster than clear rules are being written"), "."]],
    ["Isaac", ["Exactly. Technology can improve access, provided that users are protected."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What concern does Isaac raise about connected technology?",
  options: [
    "Personal data and privacy may not be adequately protected.",
    "Remote employees cannot access cloud files.",
    "The company has stopped automating routine work.",
  ],
  answer: "Personal data and privacy may not be adequately protected.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What are more employees being allowed to do?", answer: "Work remotely." },
    { question: "What has been expanded?", answer: "Access to cloud files." },
    { question: "What will be introduced next month?", answer: "Stronger security controls." },
    { question: "What is going to happen to routine tasks?", answer: "They are going to be automated." },
  ],
} satisfies ListenData;
