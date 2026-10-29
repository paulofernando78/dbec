import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends comparing their food preferences.",
  audio: "/media/audio/course/a2/unit-13/lesson-1-same-taste/listen/listen.mp3",
  dialogue: [
    ["Nina", ["I'm crazy about Japanese food."]],
    ["Leo", [mark("So am I. I love sushi.")]],
    ["Nina", ["I do, too. But I don't like very salty food."]],
    ["Leo", ["Neither do I. What about spicy food?"]],
    ["Nina", ["I can eat really spicy food."]],
    ["Leo", [mark("Really? I can't.")]],
    ["Nina", ["I don't like greasy food, either."]],
    ["Leo", ["Neither do I. I prefer healthy food."]],
    ["Nina", ["So do I. We have the same taste!"]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "The speakers compare:",
  options: ["Food preferences", "Travel experiences", "Work routines"],
  answer: "Food preferences",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Do both speakers like sushi?", answer: "Yes, they do." },
    { question: "Can Leo eat really spicy food?", answer: "No, he can't." },
    { question: "What kind of food do they both prefer?", answer: "Healthy food." },
  ],
} satisfies ListenData;
