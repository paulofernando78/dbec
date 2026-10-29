import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: two friends describe different jobs. Listen for the topic.",
  audio: "/media/audio/course/a1/unit-8/lesson-2-job-talk/listen/listen.mp3",
  dialogue: [
    ["A", ["Your sister is a nurse, right?"]],
    ["B", ["Yes. She has a ", mark("rewarding job"), "."]],
    ["A", ["Does she like it?"]],
    ["B", ["Yes, she does. But her job is sometimes ", mark("tiring"), "."]],
    ["A", ["What does your father do?"]],
    ["B", ["He's a taxi driver. He has a ", mark("busy job"), "."]],
    ["A", ["And your brother?"]],
    ["B", ["He's a cashier. He says his job is ", mark("repetitive"), "."]],
    ["A", ["What about you?"]],
    ["B", ["I'm an office manager. My job is ", mark("interesting"), "."]],
    ["A", ["Do you like it?"]],
    ["B", ["Yes, I do. The people are friendly."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Topic:",
  options: ["Opinions about jobs", "Directions to work", "Work schedules"],
  answer: "Opinions about jobs",
  followUpInstruction: "Listen again. Match each person and job description.",
  followUp: [
    {
      question: "What does speaker B's sister do?",
      answer: "She is a nurse.",
    },
    {
      question: "How is the sister's job sometimes?",
      answer: "Tiring.",
    },
    {
      question: "What does speaker B's father do?",
      answer: "He is a taxi driver.",
    },
    {
      question: "How does the brother describe his job?",
      answer: "Repetitive.",
    },
    {
      question: "Does speaker B like the job?",
      answer: "Yes, speaker B does.",
    },
  ],
} satisfies ListenData;
