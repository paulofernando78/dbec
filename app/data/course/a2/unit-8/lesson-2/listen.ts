import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two people comparing neighborhoods.",
  audio: "/media/audio/course/a2/unit-8/lesson-2-my-neighborhood/listen/listen.mp3",
  dialogue: [
    ["Resident", ["I live downtown now, but I'm thinking about moving to the suburbs."]],
    ["Friend", [mark("Are there many stores in the suburbs?")]],
    ["Resident", ["There are a few, but there aren't many restaurants."]],
    ["Friend", ["How much traffic is there?"]],
    ["Resident", ["There's very little traffic. Downtown has a lot."]],
    ["Friend", [mark("How many parks are there?")]],
    ["Resident", ["There are three large parks and a few small ones."]],
    ["Friend", ["That sounds nice. Is there much crime?"]],
    ["Resident", ["No, there isn't much. It's a quiet neighborhood."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "The resident compares:",
  options: ["Two neighborhoods", "Two jobs", "Two vacations"],
  answer: "Two neighborhoods",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Are there many restaurants in the suburbs?", answer: "No, there aren't." },
    { question: "How many large parks are there?", answer: "There are three." },
    { question: "Is there much crime?", answer: "No, there isn't much." },
  ],
} satisfies ListenData;
