import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends plan a talent show.",
  audio: "/media/audio/course/a1/unit-10/lesson-2-show-your-talent/listen/listen.mp3",
  dialogue: [
    ["A", ["We need people for the talent show. ", mark("Can you sing"), ", Ben?"]],
    ["B", ["No, ", mark("I can't"), ". But I can play the guitar."]],
    ["A", ["Great! What can your sister do?"]],
    ["B", [mark("She can dance"), " very well."]],
    ["A", ["Can your brother dance too?"]],
    ["B", ["No, he can't. But ", mark("he can cook"), "."]],
    ["A", [mark("Who can draw"), "?"]],
    ["B", [mark("Maya can"), ". She can paint too."]],
    ["A", ["Can you and Maya make a poster?"]],
    ["B", ["Yes, ", mark("we can"), "."]],
    ["A", ["Excellent. You can play guitar, your sister can dance, and Maya can draw."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What can Ben do?",
  options: ["Play the guitar", "Sing", "Dance"],
  answer: "Play the guitar",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Can Ben sing?",
      answer: "No, he can't.",
    },
    {
      question: "What can Ben's sister do?",
      answer: "She can dance.",
    },
    {
      question: "What can Ben's brother do?",
      answer: "He can cook.",
    },
    {
      question: "Who can draw and paint?",
      answer: "Maya.",
    },
    {
      question: "Can Ben and Maya make a poster?",
      answer: "Yes, they can.",
    },
  ],
} satisfies ListenData;
