import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about last weekend.",
  audio: "/media/audio/course/a1/unit-14/lesson-1-last-weekend/listen/listen.mp3",
  dialogue: [
    ["A", ["How was your weekend, Leo?"]],
    ["B", ["It was busy. On Saturday, I ", mark("cleaned the house"), "."]],
    ["A", ["Did you wash the car too?"]],
    ["B", ["Yes. I ", mark("washed the car"), " in the afternoon."]],
    ["A", ["What did you do on Sunday?"]],
    ["B", ["I ", mark("visited my relatives"), ". We planned a picnic."]],
    ["A", ["Did you exercise?"]],
    ["B", ["No, I ", mark("didn't exercise"), ". It rained."]],
    ["A", ["Did you work or study?"]],
    ["B", ["I ", mark("studied English"), " for one hour."]],
    ["A", ["Wow! That was a busy weekend."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What did Leo do on Saturday morning?",
  options: ["Cleaned the house", "Visited relatives", "Studied English"],
  answer: "Cleaned the house",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When did Leo wash the car?",
      answer: "On Saturday afternoon.",
    },
    {
      question: "Who did Leo visit on Sunday?",
      answer: "His relatives.",
    },
    {
      question: "What did Leo and his relatives plan?",
      answer: "A picnic.",
    },
    {
      question: "Did Leo exercise?",
      answer: "No, he didn't.",
    },
    {
      question: "What did Leo study?",
      answer: "English.",
    },
  ],
} satisfies ListenData;
