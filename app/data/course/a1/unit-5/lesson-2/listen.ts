import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: Ben talks about family members in different cities. Listen for the topic.",
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
  question: "Topic:",
  options: ["Activities now", "Daily routines", "Clothes and colors"],
  answer: "Activities now",
  followUpInstruction: "Listen again. Match each person and activity.",
  followUp: [
    {
      question: "Ben’s city:",
      answer: "In Lima.",
    },
    {
      question: "Eva:",
      answer: "She is sleeping.",
    },
    {
      question: "Omar:",
      answer: "He is having lunch.",
    },
    {
      question: "Mia and Leo:",
      answer: "They are watching TV.",
    },
    {
      question: "Ben’s parents:",
      answer: "They are working.",
    },
  ],
} satisfies ListenData;
