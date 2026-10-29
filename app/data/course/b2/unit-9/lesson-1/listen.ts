import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two students comparing social customs and attitudes toward conformity.",
  audio: "",
  dialogue: [
    ["Hana", ["Have you noticed how differently people behave in seminars here?"]],
    ["Mateo", ["Yes. While students in my country usually wait to be invited, people here jump into the discussion."]],
    ["Hana", ["In contrast to my previous school, disagreement is encouraged—as long as it's respectful."]],
    ["Mateo", ["I like that. Most students seem fairly conventional, except for a few who enjoy challenging every rule."]],
    ["Hana", ["Do you normally conform to the group or stand up for your own ideas?"]],
    ["Mateo", ["I try to fit in without simply following the crowd."]],
    ["Hana", [mark("Unlike people who accept every tradition, I think questioning a custom can lead to positive change"), "."]],
    ["Mateo", ["Agreed. You can respect a culture and still make waves when something needs improving."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What do Hana and Mateo agree about?",
  options: [
    "People can respect customs while still questioning them.",
    "Students should accept every rule without discussion.",
    "Fitting in always requires giving up personal opinions.",
  ],
  answer: "People can respect customs while still questioning them.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How do students in Mateo's country usually enter a discussion?", answer: "They wait to be invited." },
    { question: "What is encouraged at Hana's current school?", answer: "Respectful disagreement." },
    { question: "How does Mateo try to behave in a group?", answer: "He tries to fit in without simply following the crowd." },
    { question: "What does Hana think can lead to positive change?", answer: "Questioning a custom." },
  ],
} satisfies ListenData;
