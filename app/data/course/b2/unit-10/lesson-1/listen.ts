import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two neighbors discussing everyday annoyances and an appropriate complaint.",
  audio: "",
  dialogue: [
    ["Mina", ["You look annoyed. What's bothering you?"]],
    ["Joel", ["The thing that drives me up the wall is when people leave trash beside the recycling bins."]],
    ["Mina", ["I know exactly what you mean. What gets on my nerves is that they do it even when the bins are empty."]],
    ["Joel", ["Yesterday I asked a stranger to pick up his bag, and he got really upset."]],
    ["Mina", ["Complaining to strangers can be awkward. What did you say?"]],
    ["Joel", ["I said, ‘Excuse me, but I think you dropped something.’"]],
    ["Mina", [mark("That's polite. I hate to mention this, but the building should probably post clearer signs"), "."]],
    ["Joel", ["Good idea. A practical solution would make everyone less frustrated."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What annoys Joel and Mina?",
  options: [
    "People leave trash beside empty recycling bins.",
    "The building has removed all recycling bins.",
    "Strangers complain about the signs in the lobby.",
  ],
  answer: "People leave trash beside empty recycling bins.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How did the stranger react to Joel?", answer: "He became upset." },
    { question: "How did Joel begin his complaint?", answer: "He said, ‘Excuse me, but…’" },
    { question: "What solution does Mina suggest?", answer: "Posting clearer signs." },
    { question: "Why does Joel like the suggestion?", answer: "A practical solution could reduce frustration." },
  ],
} satisfies ListenData;
