import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two travelers reflecting on a difficult trip and planning the next one.",
  audio: "",
  dialogue: [
    ["Ari", ["Would you take another overnight train after what happened in Prague?"]],
    ["Nadia", ["Probably, but I'd be better prepared. If I hadn't been so careless, I would still have my wallet."]],
    ["Ari", ["And if someone hadn't helped us, we'd probably still be trying to reach the hotel."]],
    ["Nadia", ["Exactly. The experience has made me more self-reliant and culturally aware."]],
    ["Ari", ["What would you change next time?"]],
    ["Nadia", ["If I'd researched the route properly, I wouldn't be dealing with a replacement passport now."]],
    ["Ari", ["I'd also choose a more flexible, open-ended itinerary."]],
    ["Nadia", [mark("A well-planned trip can still leave room for spontaneous, light-hearted experiences"), "."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What present consequence resulted from Nadia's past mistake?",
  options: [
    "She is dealing with a replacement passport now.",
    "She has decided never to travel again.",
    "She is still waiting to reach the hotel.",
  ],
  answer: "She is dealing with a replacement passport now.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What would Nadia still have if she had been more careful?", answer: "Her wallet." },
    { question: "What might have happened without another person's help?", answer: "They might still be trying to reach the hotel." },
    { question: "How did the experience change Nadia?", answer: "It made her more self-reliant and culturally aware." },
    { question: "What kind of itinerary would Ari choose?", answer: "A more flexible, open-ended itinerary." },
  ],
} satisfies ListenData;
