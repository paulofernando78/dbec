import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two people comparing places where they might live.",
  audio: "",
  dialogue: [
    ["Priya", ["Would you rather live in Harbor Point or Greenfield?"]],
    ["Owen", ["Harbor Point is an exciting old port town with excellent restaurants. I'd choose it without hesitation."]],
    ["Priya", ["The nightlife is appealing. However, housing is expensive and the streets get crowded."]],
    ["Owen", ["Greenfield is cheaper, but it's a quiet little suburban town. Wouldn't you get bored?"]],
    ["Priya", ["Not necessarily. Although it's quieter, it has reliable public transportation and a growing job market."]],
    ["Owen", ["Harbor Point has more character. On the other hand, the daily commute would be difficult."]],
    ["Priya", [mark("Despite its smaller size, Greenfield offers a better quality of life"), "."]],
    ["Owen", ["You may be right. For everyday life, Greenfield is probably the more practical choice."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why do the speakers consider Greenfield more practical?",
  options: [
    "It is more affordable and offers transportation and employment advantages.",
    "It is a larger coastal tourist town with more nightlife.",
    "It has older buildings and more expensive housing.",
  ],
  answer: "It is more affordable and offers transportation and employment advantages.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How does Owen initially describe Harbor Point?", answer: "As an exciting old port town with excellent restaurants." },
    { question: "Which disadvantages of Harbor Point does Priya mention?", answer: "Expensive housing and crowded streets." },
    { question: "What advantages does Greenfield offer?", answer: "Reliable public transportation, a growing job market, and a better quality of life." },
    { question: "Which place do they finally consider more practical?", answer: "Greenfield." },
  ],
} satisfies ListenData;
