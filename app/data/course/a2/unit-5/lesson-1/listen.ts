import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talking about their families these days.",
  audio: "/media/audio/course/a2/unit-5/lesson-1-family-snapshots/listen/listen.mp3",
  dialogue: [
    ["Rita", ["Is this your family photo?"]],
    ["Leo", ["Yes. That's my sister Carla and her daughter, Mia."]],
    ["Rita", [mark("What is Carla doing these days?")]],
    ["Leo", ["She's working in another city. Mia is living with my parents this year."]],
    ["Rita", ["Are your parents working, too?"]],
    ["Leo", ["No, they aren't. They're studying English now."]],
    ["Rita", [mark("Who is traveling in this picture?")]],
    ["Leo", ["That's my cousin Ben. He's traveling in Thailand with his wife."]],
    ["Rita", ["Your family is doing a lot!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Who is living with Leo's parents?",
  options: ["His sister Carla", "His niece Mia", "His cousin Ben"],
  answer: "His niece Mia",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Where is Carla working?", answer: "She's working in another city." },
    { question: "What are Leo's parents doing?", answer: "They're studying English." },
    { question: "Who is traveling in Thailand?", answer: "Leo's cousin Ben and his wife." },
  ],
} satisfies ListenData;
