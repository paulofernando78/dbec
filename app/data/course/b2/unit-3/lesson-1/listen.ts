import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends choosing a city for a short trip.",
  audio: "",
  dialogue: [
    ["Elena", ["Which city should we visit in October—Seoul or Kyoto?"]],
    ["Marcus", ["I'd choose Seoul. It's a city that has incredible nightlife and an efficient transportation system."]],
    ["Elena", ["That's true, but Kyoto, which is famous for its temples, might be calmer in the fall."]],
    ["Marcus", ["Maybe, but don't you think Seoul offers more variety?"]],
    ["Elena", ["I know what you mean, but I care more about historic neighborhoods and green spaces than shopping."]],
    ["Marcus", ["The neighborhoods where the traditional houses are located do look beautiful."]],
    ["Elena", [mark("October is also the month when the autumn colors are at their best"), "."]],
    ["Marcus", ["You've convinced me. Kyoto sounds like the destination that suits us best."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why do Elena and Marcus finally choose Kyoto?",
  options: [
    "Its historic neighborhoods, green spaces, and autumn scenery suit their interests.",
    "It has a larger job market and a lower cost of living.",
    "Its nightlife is more varied than Seoul's.",
  ],
  answer: "Its historic neighborhoods, green spaces, and autumn scenery suit their interests.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Which features of Seoul does Marcus mention?", answer: "Its nightlife and efficient transportation system." },
    { question: "What is Kyoto famous for?", answer: "Its temples." },
    { question: "Which city features matter more to Elena?", answer: "Historic neighborhoods and green spaces." },
    { question: "When are Kyoto's autumn colors at their best?", answer: "In October." },
  ],
} satisfies ListenData;
