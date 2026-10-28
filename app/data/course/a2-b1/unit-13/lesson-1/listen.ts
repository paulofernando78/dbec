import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends recommending things to watch and read.",
  audio:
    "/media/audio/course/a2-b1/unit-13/lesson-1-worth-watching/listen/listen.mp3",
  dialogue: [
    ["A", ["I need something good to watch tonight. Any suggestions?"]],
    ["B", ["That nature documentary sounds ", mark("inspiring"), ". It's about wildlife rescuers in South Africa."]],
    ["A", ["I'd probably like it. I'm ", mark("inspired"), " by stories about wildlife rescuers."]],
    ["B", ["I'm also reading a mystery novel, but it seems ", mark("confusing"), " at first."]],
    ["A", ["Is it getting easier to understand?"]],
    ["B", ["A little, but I'm still ", mark("confused"), " by the first chapter because it introduces twelve characters."]],
    ["A", ["Maybe I'll skip that one. What about something lighter?"]],
    ["B", ["I think the new cooking show is ", mark("relaxing"), ". Each episode is only twenty minutes."]],
    ["A", ["I agree. I feel ", mark("relaxed"), " after watching it. Let's watch the episode about Italian bread."]],
    ["B", ["Perfect. It starts at eight thirty."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What is the nature documentary about?",
  options: ["Wildlife rescuers", "Famous chefs", "Mystery writers"],
  answer: "Wildlife rescuers",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "In which country does the documentary take place?",
      answer: "South Africa.",
    },
    {
      question: "Why is speaker B confused by the novel's first chapter?",
      answer: "Because it introduces twelve characters.",
    },
    {
      question: "How long is each episode of the cooking show?",
      answer: "Twenty minutes.",
    },
    {
      question: "Which cooking-show episode will the friends watch?",
      answer: "The episode about Italian bread.",
    },
    {
      question: "What time does the show start?",
      answer: "At eight thirty.",
    },
  ],
} satisfies ListenData;
