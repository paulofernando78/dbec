import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends debating online communication and information overload.",
  audio: "",
  dialogue: [
    ["Lila", ["Isn't it strange how often people check their phones during a conversation?"]],
    ["Andre", ["It is distracting, isn't it? On the other hand, phones help us stay connected."]],
    ["Lila", ["That may be true, but aren't we receiving more information than we can process?"]],
    ["Andre", ["Probably. Pop-up ads, spam, text messages, and news alerts compete for our attention all day."]],
    ["Lila", ["Furthermore, misinformation spreads quickly through social platforms."]],
    ["Andre", ["If you ask me, the real issue is how we use the technology, not the technology itself."]],
    ["Lila", [mark("Don't you think platforms should take more responsibility, though"), "?"]],
    ["Andre", ["Yes. Clearer standards would help; therefore, users could make better-informed choices."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What do both speakers ultimately support?",
  options: [
    "Clearer standards for online platforms",
    "Eliminating all forms of digital communication",
    "Replacing text messages with telemarketing",
  ],
  answer: "Clearer standards for online platforms",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What positive point does Andre make about phones?", answer: "They help people stay connected." },
    { question: "Which forms of communication compete for attention?", answer: "Pop-up ads, spam, text messages, and news alerts." },
    { question: "What does Lila say spreads quickly?", answer: "Misinformation." },
    { question: "What does Andre identify as the real issue?", answer: "How people use technology." },
  ],
} satisfies ListenData;
