import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends choosing films at a local festival.",
  audio:
    "/media/audio/course/a2-b1/unit-13/lesson-2-hollywood-stories/listen/listen.mp3",
  dialogue: [
    ["A", ["There are four films left at the festival. Which one interests you?"]],
    ["B", ["I'd like to see Maya Chen's film. She's a filmmaker ", mark("who writes her own scripts"), "."]],
    ["A", ["Her film starts at six. There's also a new action movie with Leo Martins."]],
    ["B", ["Oh, he's an actor ", mark("that performs his own stunts"), ", isn't he?"]],
    ["A", ["Yes, but that movie starts at the same time. What about the seven-thirty screening?"]],
    ["B", ["Is that the documentary ", mark("which follows young musicians"), " during their first tour?"]],
    ["A", ["Exactly. It was filmed in five different cities."]],
    ["B", ["The program also mentions a thriller."]],
    ["A", ["Yes, it's a thriller ", mark("that won the audience award"), " last night. It begins at nine."]],
    ["B", ["Let's watch the documentary at seven thirty and the thriller at nine."]],
    ["A", ["Perfect. I'll buy the tickets online now."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What does filmmaker Maya Chen write?",
  options: ["Her own scripts", "Film reviews", "Festival programs"],
  answer: "Her own scripts",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What does actor Leo Martins perform?",
      answer: "His own stunts.",
    },
    {
      question: "What time does the documentary begin?",
      answer: "At seven thirty.",
    },
    {
      question: "Who does the documentary follow?",
      answer: "Young musicians on their first tour.",
    },
    {
      question: "In how many cities was the documentary filmed?",
      answer: "Five different cities.",
    },
    {
      question: "Which award did the thriller win?",
      answer: "The audience award.",
    },
  ],
} satisfies ListenData;
