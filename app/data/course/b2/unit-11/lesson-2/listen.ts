import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends reflecting on values, wishes, and past decisions.",
  audio: "",
  dialogue: [
    ["Luca", ["If you could change one decision from your past, what would it be?"]],
    ["Samira", ["I wish I'd accepted a volunteer position abroad. I was afraid to leave home."]],
    ["Luca", ["Do you think it would have changed you?"]],
    ["Samira", ["Definitely. If I'd gone, I could have become more independent and tolerant."]],
    ["Luca", ["I wish I had enough courage to apply for a leadership role now."]],
    ["Samira", ["You're more resilient than you realize. If only you were less hard on yourself."]],
    ["Luca", ["Thanks. I value honesty and compassion, but I sometimes forget to show myself the same kindness."]],
    ["Samira", [mark("If only we could recognize our strengths as easily as we recognize our mistakes"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What past decision does Samira regret?",
  options: [
    "Not accepting a volunteer position abroad",
    "Applying for a leadership role too early",
    "Leaving her family without discussing it",
  ],
  answer: "Not accepting a volunteer position abroad",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Why didn't Samira accept the position?", answer: "She was afraid to leave home." },
    { question: "How might the experience have changed her?", answer: "It might have made her more independent and tolerant." },
    { question: "What does Luca wish he had now?", answer: "Enough courage to apply for a leadership role." },
    { question: "Which values does Luca mention?", answer: "Honesty and compassion." },
  ],
} satisfies ListenData;
