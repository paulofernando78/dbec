import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two friends discussing a chain of future possibilities.",
  audio:
    "/media/audio/course/a2-b1/unit-9/lesson-2-what-if/listen/listen.mp3",
  dialogue: [
    ["A", ["How is your evening design course going?"]],
    ["B", ["Really well. ", mark("If I complete the design course"), ", ", mark("I'll qualify for an internship"), " at a technology company."]],
    ["A", ["That could open a lot of doors."]],
    ["B", ["Exactly. ", mark("If I get the internship"), ", ", mark("I may work with an international team"), "."]],
    ["A", ["Your English would be useful there."]],
    ["B", ["Yes. ", mark("If I work with that team"), ", ", mark("I'll practice English every day"), "."]],
    ["A", ["And what will you do if you become more fluent?"]],
    ["B", [mark("If my English improves"), ", ", mark("I might apply for a position abroad"), ", possibly in Canada."]],
    ["A", ["Would moving away be difficult?"]],
    ["B", ["A little. ", mark("If I move abroad"), ", ", mark("I won't see my family as often"), ". I'd call them every Sunday."]],
    ["A", ["It sounds like a big decision, but you have time to think about it."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What will speaker B qualify for after completing the course?",
  options: ["An internship", "A scholarship", "A teaching position"],
  answer: "An internship",
  followUpInstruction: "Answer the questions.",
  followUp: [
    {
      question: "What kind of team may speaker B work with?",
      answer: "An international team.",
    },
    {
      question: "How often will speaker B practice English with that team?",
      answer: "Every day.",
    },
    {
      question: "Where might speaker B apply for a position?",
      answer: "Abroad, possibly in Canada.",
    },
    {
      question: "Who won't speaker B see as often after moving abroad?",
      answer: "The family.",
    },
    {
      question: "When would speaker B call the family?",
      answer: "Every Sunday.",
    },
  ],
} satisfies ListenData;
