import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Listen",
  instruction: "Listen to friends comparing two career options.",
  audio: "/media/audio/course/b1/unit-2/lesson-2-comparing-careers/listen/listen.mp3",
  dialogue: [
    ["Julia", ["I'm comparing a project manager position with a software developer role."]],
    ["Amir", [mark("Which one pays better?")]],
    ["Julia", ["The project manager job is slightly better paid, but it has longer hours."]],
    ["Amir", ["Is software development less stressful?"]],
    ["Julia", ["Not necessarily, but developers have more flexible schedules."]],
    ["Amir", [mark("Which role sounds more interesting to you?")]],
    ["Julia", ["First of all, I enjoy technical work. In addition, the developer role has more opportunities to work remotely."]],
    ["Amir", ["On the other hand, project management could lead to a higher salary."]],
    ["Julia", ["True. However, flexibility matters more to me. In conclusion, software development is the better fit."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "Which job does Julia prefer?",
  options: ["Software developer", "Project manager", "Marketing director"],
  answer: "Software developer",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "Which job is slightly better paid?", answer: "The project manager job." },
    { question: "Which job offers more flexible schedules?", answer: "The software developer role." },
    { question: "What matters more to Julia?", answer: "Flexibility." },
  ],
} satisfies ListenData;
