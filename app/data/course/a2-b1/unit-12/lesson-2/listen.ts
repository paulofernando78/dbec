import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends catching up on their recent activities.",
  audio:
    "/media/audio/course/a2-b1/unit-12/lesson-2-what-have-you-been-doing/listen/listen.mp3",
  dialogue: [
    ["A", ["It's good to see you! What ", mark("have you been doing"), " lately?"]],
    ["B", ["I", mark("'ve been training"), " for a charity race for the last two months. The race is on May 18."]],
    ["A", ["That's impressive. I saw your new pictures online too. How long ", mark("have you been learning"), " photography?"]],
    ["B", ["I", mark("'ve been taking"), " evening classes since March. We meet every Tuesday and Thursday."]],
    ["A", ["You look tired, though. ", mark("Have you been sleeping"), " enough?"]],
    ["B", ["No, I ", mark("haven't been sleeping"), " enough. I", mark("'ve been staying"), " up late editing photos."]],
    ["A", ["Maybe you should edit fewer photos on weeknights."]],
    ["B", ["You're right. Starting tonight, I'll stop editing at ten and get some rest."]],
    ["A", ["Good plan. You'll need plenty of energy for the race."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What has speaker B been training for?",
  options: ["A charity race", "A photography contest", "A cycling trip"],
  answer: "A charity race",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "How long has speaker B been training?",
      answer: "For the last two months.",
    },
    {
      question: "When is the charity race?",
      answer: "On May 18.",
    },
    {
      question: "Since when has speaker B been taking photography classes?",
      answer: "Since March.",
    },
    {
      question: "On which days do the photography classes meet?",
      answer: "Every Tuesday and Thursday.",
    },
    {
      question: "What time will speaker B stop editing photos tonight?",
      answer: "At ten.",
    },
  ],
} satisfies ListenData;
