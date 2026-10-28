import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about a health problem.",
  audio: "/media/audio/course/a1/unit-12/lesson-1-feeling-sick/listen/listen.mp3",
  dialogue: [
    ["A", ["Hi, Sam. You don't look well. ", mark("What's the matter"), "?"]],
    ["B", ["I ", mark("have a cold"), "."]],
    ["A", ["Do you have a fever?"]],
    ["B", ["Yes, I do. I also have a sore throat."]],
    ["A", [mark("How do you feel"), "?"]],
    ["B", ["I feel ", mark("awful"), ". My head hurts too."]],
    ["A", ["Are you going to work today?"]],
    ["B", ["No, I'm not. I'm going to stay home."]],
    ["A", ["Good. Get some rest."]],
    ["B", ["Thanks. I hope I feel better tomorrow."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What health problem does Sam have?",
  options: ["A cold", "A toothache", "A stomachache"],
  answer: "A cold",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Does Sam have a fever?",
      answer: "Yes, he does.",
    },
    {
      question: "Which part of Sam's body is sore?",
      answer: "His throat.",
    },
    {
      question: "How does Sam feel?",
      answer: "Awful.",
    },
    {
      question: "Is Sam going to work today?",
      answer: "No, he isn't.",
    },
    {
      question: "What is Sam going to do?",
      answer: "Stay home and rest.",
    },
  ],
} satisfies ListenData;
