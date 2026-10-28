import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends discuss accomplishments they are proud of.",
  audio: "/media/audio/course/b1/unit-16/lesson-1-what-im-proud-of/listen/listen.mp3",
  dialogue: [
    ["Tara", ["What accomplishment are you most proud of?"]],
    ["Jon", ["I managed to finish my first marathon last year, although I had never been very athletic."]],
    ["Tara", [mark("How did you manage that?")]],
    ["Jon", ["Training every morning made me more disciplined and upbeat. What about you?"]],
    ["Tara", ["I've managed to make a living as an illustrator. Becoming self-sufficient has changed my life."]],
    ["Jon", [mark("That's impressive. Have you achieved all your goals yet?")]],
    ["Tara", ["Not yet. I haven't been able to publish my own book, but I'm working on it."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What did Jon accomplish last year?",
  options: ["He published a book", "He finished a marathon", "He became an illustrator"],
  answer: "He finished a marathon",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What qualities did training develop in Jon?", answer: "Discipline and a more upbeat attitude." },
    { question: "How does Tara make a living?", answer: "As an illustrator." },
    { question: "What has Tara not been able to do yet?", answer: "Publish her own book." },
  ],
} satisfies ListenData;
