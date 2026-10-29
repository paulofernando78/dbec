import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends discussing what they would do after finding a wallet.",
  audio: "",
  dialogue: [
    ["Dina", ["What would you do if you found a wallet full of cash?"]],
    ["Evan", ["I'd take it to the police, even if I really needed the money."]],
    ["Dina", ["What if there were no identification inside?"]],
    ["Evan", ["I still wouldn't keep it unless there were absolutely no way to find the owner."]],
    ["Dina", ["Would you accept a reward?"]],
    ["Evan", ["Only if the owner genuinely wanted to offer one. Asking for a reward would feel unethical."]],
    ["Dina", ["I agree. A trustworthy person does the right thing even when nobody is watching."]],
    ["Evan", [mark("And unless we act responsibly in small situations, it's hard to claim we'd do so in serious ones"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Under what condition might Evan keep the wallet?",
  options: [
    "Only if there were no possible way to find its owner",
    "If the wallet contained a large amount of money",
    "Whenever he personally needed the cash",
  ],
  answer: "Only if there were no possible way to find its owner",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Would Evan return the wallet if he needed the money?", answer: "Yes, even if he needed it." },
    { question: "When would he accept a reward?", answer: "Only if the owner genuinely wanted to offer one." },
    { question: "How would asking for a reward feel to Evan?", answer: "Unethical." },
    { question: "How does Dina describe a trustworthy person?", answer: "Someone who does the right thing even when nobody is watching." },
  ],
} satisfies ListenData;
