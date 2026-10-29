import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends considering explanations for a mysterious event.",
  audio: "",
  dialogue: [
    ["Maya", ["Have you seen this report about the lights above the harbor?"]],
    ["Jon", ["Yes. Some people are positive they saw an unidentified aircraft."]],
    ["Maya", ["I'm not so sure. The lights could have come from a drone show."]],
    ["Jon", ["But no event was scheduled. They might have been testing military equipment."]],
    ["Maya", ["I suppose that's possible, although the witnesses may have exaggerated what they saw."]],
    ["Jon", [mark("There must be a logical explanation"), ". The authorities can't have missed something that bright."]],
    ["Maya", ["Or the video might have been edited before it was posted."]],
    ["Jon", ["Maybe. Until we know for a fact, we're only guessing."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Why do Maya and Jon disagree?",
  options: [
    "They assign different degrees of certainty to possible explanations.",
    "Maya did not see the report about the harbor.",
    "Jon knows exactly who organized the event.",
  ],
  answer: "They assign different degrees of certainty to possible explanations.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does Maya first think the lights could have been?", answer: "A drone show." },
    { question: "What possibility does Jon suggest?", answer: "The military might have been testing equipment." },
    { question: "What does Jon believe the authorities cannot have done?", answer: "They cannot have missed something that bright." },
    { question: "What do the speakers know for a fact?", answer: "They do not yet know the true explanation." },
  ],
} satisfies ListenData;
