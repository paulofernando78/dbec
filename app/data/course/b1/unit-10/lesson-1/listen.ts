import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to students discussing trends and historic events.",
  audio: "/media/audio/course/b1/unit-10/lesson-1-moments-that-changed-history/listen/listen.mp3",
  dialogue: [
    ["Teacher", ["When did home video game consoles become popular?"]],
    ["Student", ["The first systems appeared during the 1970s, but their popularity grew in the 1980s."]],
    ["Teacher", [mark("How long have digital games influenced popular culture?")]],
    ["Student", ["For several decades. Some consoles became overnight sensations."]],
    ["Teacher", ["Can you name a major scientific achievement?"]],
    ["Student", ["Scientists completed the Human Genome Project in 2003."]],
    ["Teacher", [mark("How long has it influenced research?")]],
    ["Student", ["Since its completion. It changed medicine and genetics."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "When was the Human Genome Project completed?",
  options: ["In 1975", "In 1996", "In 2003"],
  answer: "In 2003",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "When did early home consoles appear?", answer: "During the 1970s." },
    { question: "When did their popularity grow?", answer: "In the 1980s." },
    { question: "How long has the genome project influenced research?", answer: "Since its completion." },
  ],
} satisfies ListenData;
