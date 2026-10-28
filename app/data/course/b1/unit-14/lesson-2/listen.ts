import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to two students discuss careers in creative industries.",
  audio: "/media/audio/course/b1/unit-14/lesson-2-people-at-work/listen/listen.mp3",
  dialogue: [
    ["Eva", ["I'd like a job that combines storytelling and technology."]],
    ["Kai", ["You might enjoy being a gameplay programmer, who works closely with designers and artists."]],
    ["Eva", [mark("What does a storyboard artist do?")]],
    ["Kai", ["That's a person who draws the visual plan that guides a film crew."]],
    ["Eva", ["My cousin, who works as a news photographer, says creative jobs can be demanding."]],
    ["Kai", [mark("They can, but they are ideal for people who enjoy solving unusual problems.")]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which job does Kai first suggest to Eva?",
  options: ["Gameplay programmer", "News photographer", "Band manager"],
  answer: "Gameplay programmer",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does a storyboard artist draw?", answer: "The visual plan that guides a film crew." },
    { question: "What is Eva's cousin's job?", answer: "News photographer." },
    { question: "Who may find creative jobs ideal?", answer: "People who enjoy solving unusual problems." },
  ],
} satisfies ListenData;
