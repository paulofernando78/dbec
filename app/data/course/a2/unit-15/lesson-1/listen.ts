import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends comparing their plans for the week.",
  audio: "/media/audio/course/a2/unit-15/lesson-1-future-calendar/listen/listen.mp3",
  dialogue: [
    ["Lia", [mark("What are you doing tonight?")]],
    ["Tom", ["I'm going to a soccer game. What about you?"]],
    ["Lia", ["I'm seeing a musical with my sister."]],
    ["Tom", ["Are you doing anything tomorrow?"]],
    ["Lia", ["I'm not, but I'm going to a barbecue on Friday."]],
    ["Tom", [mark("Are you going to the film festival this weekend?")]],
    ["Lia", ["Yes, I am. I'm seeing two movies on Saturday."]],
    ["Tom", ["Great. I'm going to the video game tournament next week."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is Lia doing tonight?",
  options: ["Going to a soccer game", "Seeing a musical", "Going to a barbecue"],
  answer: "Seeing a musical",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What is Tom doing tonight?", answer: "He's going to a soccer game." },
    { question: "When is Lia going to a barbecue?", answer: "On Friday." },
    { question: "What is Tom doing next week?", answer: "He's going to a video game tournament." },
  ],
} satisfies ListenData;
