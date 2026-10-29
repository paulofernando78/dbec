import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends comparing their personalities and discussing how they have changed.",
  audio: "",
  dialogue: [
    ["Nina", ["So, how would you describe yourself these days?"]],
    ["Leo", ["I'm still pretty laid-back, but ", mark("I've become more outgoing"), " since I started my new job."]],
    ["Nina", ["Really? I always thought you were shy and reserved."]],
    ["Leo", ["I was. Now I enjoy meeting new people, although I still avoid talking about myself too much."]],
    ["Nina", ["I'm the opposite. I don't mind expressing my opinions, but I can't stand being the center of attention."]],
    ["Leo", ["So we're both sociable in different ways."]],
    ["Nina", ["I guess so. ", mark("I'd like to be more spontaneous"), ", though. I tend to plan everything."]],
    ["Leo", ["And I'd like to stop worrying about what everyone thinks. We both have something to work on."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What do Nina and Leo mainly discuss?",
  options: [
    "Their personalities and how they would like to change",
    "A disagreement at Leo's new job",
    "Plans for a weekend trip",
  ],
  answer: "Their personalities and how they would like to change",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How has Leo changed?", answer: "He has become more outgoing." },
    { question: "What does Leo still avoid doing?", answer: "Talking about himself too much." },
    { question: "What can't Nina stand?", answer: "Being the center of attention." },
    { question: "How would Nina like to change?", answer: "She would like to be more spontaneous." },
  ],
} satisfies ListenData;
