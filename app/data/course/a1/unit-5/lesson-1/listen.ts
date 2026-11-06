import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "First listen: Pedro is in Brazil and Eric is in England. Listen for the topic.",
  image:
    "/media/images/course/a1/unit-5/lesson-1-what-time-is-it-there/listen/pedro-eric-phone-call.avif?v=2",
  imageAlt:
    "Pedro in São Paulo and Eric in London talking to each other on their phones",
  audio: "/media/audio/course/a1/unit-5/lesson-1-what-time-is-it-there/listen/listen.mp3",
  dialogue: [
    ["Pedro", ["Hi, Eric. Where are you now?"]],
    ["Eric", ["I'm in London, England. Where are you?"]],
    ["Pedro", ["I'm in São Paulo, Brazil. ", mark("What time is it"), " in London?"]],
    ["Eric", ["It's ", mark("ten forty-five A.M."), ". It's a quarter to eleven in the morning."]],
    ["Pedro", ["It's ", mark("six forty-five A.M."), " here. It's morning in São Paulo."]],
    ["Eric", ["My meeting is at ", mark("eleven o'clock A.M."), "."]],
    ["Pedro", ["My class is at ", mark("seven fifteen A.M."), ". That's a quarter after seven."]],
    ["Eric", ["And what time is lunch?"]],
    ["Pedro", ["Lunch is at ", mark("twelve thirty P.M."), ". It's in the afternoon."]],
    ["Eric", ["Great. Talk to you later!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Topic:",
  options: ["Times in two cities", "Weather in two cities", "Transport in two cities"],
  answer: "Times in two cities",
  followUpInstruction: "Listen again. Find each time.",
  followUp: [
    {
      question: "Pedro’s city:",
      answer: "In São Paulo.",
    },
    {
      question: "São Paulo time:",
      answer: "6:45 A.M.",
    },
    {
      question: "Eric’s meeting:",
      answer: "11:00 A.M.",
    },
    {
      question: "Class time:",
      answer: "7:15 A.M.",
    },
    {
      question: "Lunch time:",
      answer: "12:30 P.M.",
    },
  ],
} satisfies ListenData;
