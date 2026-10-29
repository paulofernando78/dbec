import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: two people at a job event. Listen for the topic.",
  audio: "/media/audio/course/a1/unit-8/lesson-1-at-work/listen/listen.mp3",
  dialogue: [
    ["A", ["Hi. I'm Nina. ", mark("What do you do"), "?"]],
    ["B", ["I'm a ", mark("front desk clerk"), "."]],
    ["A", [mark("Where do you work"), "?"]],
    ["B", ["At the Park Hotel."]],
    ["A", [mark("How do you like it"), "?"]],
    ["B", ["I like it a lot. The people are friendly."]],
    ["A", ["This is my brother, Paulo."]],
    ["B", [mark("What does he do"), "?"]],
    ["A", ["He's a ", mark("police officer"), "."]],
    ["B", [mark("Where does he work"), "?"]],
    ["A", ["At a police station downtown."]],
    ["B", ["And your parents? What do they do?"]],
    ["A", ["They're ", mark("accountants"), ". They work in an office."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Topic:",
  options: ["Jobs and workplaces", "Homes and furniture", "Food and habits"],
  answer: "Jobs and workplaces",
  followUpInstruction: "Listen again. Match people, jobs, and workplaces.",
  followUp: [
    {
      question: "Where does speaker B work?",
      answer: "At the Park Hotel.",
    },
    {
      question: "How does speaker B like the job?",
      answer: "Speaker B likes it a lot.",
    },
    {
      question: "What does Paulo do?",
      answer: "He is a police officer.",
    },
    {
      question: "Where does Paulo work?",
      answer: "At a police station downtown.",
    },
    {
      question: "What do Nina's parents do?",
      answer: "They are accountants.",
    },
  ],
} satisfies ListenData;
