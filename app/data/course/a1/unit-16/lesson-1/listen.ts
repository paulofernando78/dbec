import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to a phone call and a message.",
  audio: "/media/audio/course/a1/unit-16/lesson-1-leave-a-message/listen/listen.mp3",
  dialogue: [
    ["A", ["Hello?"]],
    ["B", ["Hi. Can I speak to Ana, please?"]],
    ["A", ["Sorry. ", mark("She's at work"), " right now."]],
    ["B", ["Can I leave her a message?"]],
    ["A", ["Of course."]],
    ["B", ["Please tell ", mark("her"), " that Leo called."]],
    ["A", ["Does she have your number?"]],
    ["B", ["Yes. ", mark("She has it"), ". Please ask her to call me after work."]],
    ["A", ["Okay. I'll give her the message."]],
    ["B", ["Thank you. You can also send me a text."]],
    ["A", ["Sure. Goodbye."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where is Ana?",
  options: ["At work", "At home", "At school"],
  answer: "At work",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Who does Leo want to speak to?",
      answer: "Ana.",
    },
    {
      question: "What does Leo leave?",
      answer: "A message.",
    },
    {
      question: "Does Ana have Leo's number?",
      answer: "Yes, she does.",
    },
    {
      question: "What should Ana do after work?",
      answer: "Call Leo.",
    },
    {
      question: "How else can the other person contact Leo?",
      answer: "By text.",
    },
  ],
} satisfies ListenData;
