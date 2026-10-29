import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a friend give simple advice for a cold.",
  audio: "/media/audio/course/a1/unit-12/lesson-2-feel-better/listen/listen.mp3",
  dialogue: [
    ["A", ["I have a bad cold and a cough."]],
    ["B", [mark("Rest at home"), " today."]],
    ["A", ["Okay. What can I drink?"]],
    ["B", [mark("Drink warm chamomile tea"), "."]],
    ["A", ["Can I go to work?"]],
    ["B", ["No. ", mark("Don't go to work today"), "."]],
    ["A", ["Can I exercise?"]],
    ["B", ["No. ", mark("Don't exercise with a fever"), "."]],
    ["A", ["What about medicine?"]],
    ["B", [mark("Take your medicine"), " and use the nasal spray."]],
    ["A", ["Thanks. I'm going to rest now."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Best advice today:",
  options: ["Rest at home", "Go to work", "Exercise"],
  answer: "Rest at home",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What two health problems does speaker A have?",
      answer: "A cold and a cough.",
    },
    {
      question: "Drink:",
      answer: "Warm chamomile tea.",
    },
    {
      question: "Work today: yes or no?",
      answer: "No.",
    },
    {
      question: "Exercise with a fever: yes or no?",
      answer: "No.",
    },
    {
      question: "Spray:",
      answer: "Nasal spray.",
    },
  ],
} satisfies ListenData;
