import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to learners sharing methods that work for them.",
  audio: "/media/audio/course/b1/unit-8/lesson-2-learning-your-way/listen/listen.mp3",
  dialogue: [
    ["Rina", ["How do you remember new vocabulary?"]],
    ["Jon", ["I remember it by writing sentences and reviewing them every few days."]],
    ["Rina", [mark("How are you improving your pronunciation?")]],
    ["Jon", ["By watching films with subtitles and repeating short scenes."]],
    ["Rina", ["I'm building confidence by taking a public-speaking class."]],
    ["Jon", [mark("Is it helping?")]],
    ["Rina", ["Definitely. I'm also learning teamwork by volunteering at a hospital."]],
    ["Jon", ["It sounds like you learn best by doing things with other people."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How does Jon remember vocabulary?",
  options: ["By writing and reviewing sentences", "By using a daily planner", "By attending conferences"],
  answer: "By writing and reviewing sentences",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "How is Jon improving pronunciation?", answer: "By watching films and repeating scenes." },
    { question: "How is Rina building confidence?", answer: "By taking a public-speaking class." },
    { question: "What is she learning by volunteering?", answer: "Teamwork." },
  ],
} satisfies ListenData;
