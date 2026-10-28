import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends plan a New Year's Eve party.",
  audio: "/media/audio/course/a1/unit-11/lesson-2-lets-celebrate/listen/listen.mp3",
  dialogue: [
    ["A", [mark("What are you going to do"), " on New Year's Eve?"]],
    ["B", ["I'm going to have a party. I'm not going to stay home alone."]],
    ["A", [mark("Where are you going to celebrate"), "?"]],
    ["B", ["At my sister's house."]],
    ["A", [mark("Who is going to come"), "?"]],
    ["B", ["Our cousins and some friends are going to come."]],
    ["A", [mark("How is Mia going to get"), " there?"]],
    ["B", ["She's going to take a taxi. She isn't going to drive."]],
    ["A", [mark("When is the party going to start"), "?"]],
    ["B", ["It's going to start at ", mark("eight o'clock"), "."]],
    ["A", ["Are you going to watch fireworks?"]],
    ["B", ["Yes. We're going to watch fireworks at midnight."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Where is the party going to be?",
  options: ["At the sister's house", "At a restaurant", "At a club"],
  answer: "At the sister's house",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "Who is going to come to the party?",
      answer: "Their cousins and some friends.",
    },
    {
      question: "How is Mia going to travel?",
      answer: "By taxi.",
    },
    {
      question: "Is Mia going to drive?",
      answer: "No, she isn't.",
    },
    {
      question: "What time is the party going to start?",
      answer: "At 8:00.",
    },
    {
      question: "What are they going to do at midnight?",
      answer: "Watch fireworks.",
    },
  ],
} satisfies ListenData;
