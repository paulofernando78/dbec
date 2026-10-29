import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two people meeting at a professional event and making small talk.",
  audio: "",
  dialogue: [
    ["Sofia", ["Hi. Do you know many people here?"]],
    ["Ethan", ["Only a few. I'm Ethan, by the way. How's it going?"]],
    ["Sofia", ["Pretty well, thanks. I'm Sofia. Can you believe this weather?"]],
    ["Ethan", ["I know! It's unusual to have this much rain in October. Did you travel far?"]],
    ["Sofia", ["Not really. I work nearby. What brings you to the conference?"]],
    ["Ethan", ["I'm giving a workshop tomorrow. It's always a good idea to meet a few people beforehand."]],
    ["Sofia", ["Definitely. Starting a conversation with a stranger can feel awkward, though."]],
    ["Ethan", ["True, but you've made it easy. ", mark("Sorry, I've got to run, but it was great meeting you"), "."]],
    ["Sofia", ["You too. See you later—and good luck with the workshop."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why is Ethan attending the conference?",
  options: [
    "He is giving a workshop.",
    "He works in the building.",
    "He is meeting an old friend.",
  ],
  answer: "He is giving a workshop.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How does Sofia open the conversation?", answer: "She asks whether Ethan knows many people there." },
    { question: "Which topic do they use for small talk?", answer: "The weather." },
    { question: "What does Sofia say can feel awkward?", answer: "Starting a conversation with a stranger." },
    { question: "How does Ethan close the conversation?", answer: "He says he has to run and that it was great meeting Sofia." },
  ],
} satisfies ListenData;
