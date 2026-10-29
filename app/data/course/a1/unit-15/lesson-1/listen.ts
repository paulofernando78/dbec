import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about family history.",
  audio: "/media/audio/course/a1/unit-15/lesson-1-family-history/listen/listen.mp3",
  dialogue: [
    ["A", ["Where were you born, Sofia?"]],
    ["B", ["I ", mark("was born in Recife"), "."]],
    ["A", ["Were your parents born there too?"]],
    ["B", ["No, they weren't. They ", mark("were born in Fortaleza"), "."]],
    ["A", ["Was your mother a teacher?"]],
    ["B", ["Yes, she was. She was a teacher for thirty years."]],
    ["A", ["What about your father?"]],
    ["B", ["He was a doctor. He wasn't a teacher."]],
    ["A", ["Were your grandparents from Fortaleza?"]],
    ["B", ["No, they weren't. They ", mark("were from a small town"), "."]],
    ["A", ["Were they farmers?"]],
    ["B", ["Yes, ", mark("they were"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Conversation topic:",
  options: ["Family history", "Weekend plans", "A new apartment"],
  answer: "Family history",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where were Sofia's parents born?",
      answer: "In Fortaleza.",
    },
    {
      question: "What was Sofia's mother's job?",
      answer: "She was a teacher.",
    },
    {
      question: "What was Sofia's father's job?",
      answer: "He was a doctor.",
    },
    {
      question: "Were Sofia's grandparents from Fortaleza?",
      answer: "No, they weren't.",
    },
    {
      question: "What was the grandparents' job?",
      answer: "They were farmers.",
    },
  ],
} satisfies ListenData;
