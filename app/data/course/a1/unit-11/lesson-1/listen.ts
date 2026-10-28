import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends talk about weekend plans.",
  audio: "/media/audio/course/a1/unit-11/lesson-1-weekend-plans/listen/listen.mp3",
  dialogue: [
    ["A", ["Are you going to do anything this weekend, Carla?"]],
    ["B", ["Yes, I am. ", mark("I'm going to celebrate my birthday"), "."]],
    ["A", ["When is your birthday?"]],
    ["B", ["It's on ", mark("October eighteenth"), "."]],
    ["A", ["Is Leo going to make lunch?"]],
    ["B", ["Yes, he is. ", mark("He's going to make pasta"), "."]],
    ["A", ["Is Maya going to drive?"]],
    ["B", ["No, she isn't. ", mark("She's going to take the bus"), "."]],
    ["A", ["Are your friends going to come?"]],
    ["B", ["Yes, they are. ", mark("They're going to arrive at eight"), "."]],
    ["A", ["Are they going to stay all weekend?"]],
    ["B", ["No, they aren't. ", mark("They're going to leave on Sunday"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is Carla going to celebrate?",
  options: ["Her birthday", "A holiday", "A new job"],
  answer: "Her birthday",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "When is Carla's birthday?",
      answer: "October 18th.",
    },
    {
      question: "What is Leo going to make?",
      answer: "Pasta.",
    },
    {
      question: "How is Maya going to travel?",
      answer: "By bus.",
    },
    {
      question: "What time are Carla's friends going to arrive?",
      answer: "At 8:00.",
    },
    {
      question: "When are the friends going to leave?",
      answer: "On Sunday.",
    },
  ],
} satisfies ListenData;
