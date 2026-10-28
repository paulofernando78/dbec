import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about what their family is doing now.",
  audio: "/media/audio/course/a1/unit-5/lesson-2-what-are-they-doing/listen/listen.mp3",
  dialogue: [
    ["A", ["Hi, Ben. ", mark("What are you doing"), "?"]],
    ["B", [mark("I'm studying English"), ". It's eight P.M. here in Lima."]],
    ["A", ["Is your family in Lima too?"]],
    ["B", ["No. Eva is in Madrid. It's one A.M. there."]],
    ["A", [mark("What's Eva doing"), "?"]],
    ["B", [mark("She's sleeping"), "."]],
    ["A", ["And Omar?"]],
    ["B", ["He's in Cairo. ", mark("He's having lunch"), "."]],
    ["A", [mark("What are Mia and Leo doing"), "?"]],
    ["B", [mark("They're watching TV"), " at home."]],
    ["A", ["And your parents? ", mark("What are they doing"), "?"]],
    ["B", [mark("They're working"), ". They're in New York."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is Ben doing?",
  options: ["Studying English", "Sleeping", "Watching TV"],
  answer: "Studying English",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Where is Ben?",
      answer: "In Lima.",
    },
    {
      question: "What is Eva doing?",
      answer: "She is sleeping.",
    },
    {
      question: "What is Omar doing?",
      answer: "He is having lunch.",
    },
    {
      question: "What are Mia and Leo doing?",
      answer: "They are watching TV.",
    },
    {
      question: "What are Ben's parents doing?",
      answer: "They are working.",
    },
  ],
} satisfies ListenData;
