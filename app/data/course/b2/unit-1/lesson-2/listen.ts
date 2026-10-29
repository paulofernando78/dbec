import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two colleagues comparing their family lives.",
  audio: "",
  dialogue: [
    ["Amira", ["Did you grow up in a large family, Daniel?"]],
    ["Daniel", ["Not really. It was just my parents, my sister, and me. We're a typical nuclear family."]],
    ["Amira", ["Mine was completely different. I lived with my parents, my grandmother, an aunt, and two cousins."]],
    ["Daniel", ["What was the best part of living in an extended family?"]],
    ["Amira", [mark("The big advantage was that someone was always available to help"), ". My grandmother looked after us when our parents worked."]],
    ["Daniel", ["That sounds convenient. The only trouble with my family was that my sister and I had to share everything."]],
    ["Amira", ["We had even less privacy, but I liked having so many relatives around."]],
    ["Daniel", ["I suppose every family arrangement has advantages and disadvantages."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How were Amira's and Daniel's childhood families different?",
  options: [
    "Amira lived in an extended family, while Daniel lived in a nuclear family.",
    "Daniel lived with more relatives than Amira.",
    "They both lived only with their parents and one sibling.",
  ],
  answer: "Amira lived in an extended family, while Daniel lived in a nuclear family.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Who lived with Amira?", answer: "Her parents, grandmother, aunt, and two cousins." },
    { question: "What was an advantage of Amira's family arrangement?", answer: "Someone was always available to help." },
    { question: "What did Daniel dislike about his family life?", answer: "He and his sister had to share everything." },
    { question: "What conclusion does Daniel reach?", answer: "Every family arrangement has advantages and disadvantages." },
  ],
} satisfies ListenData;
