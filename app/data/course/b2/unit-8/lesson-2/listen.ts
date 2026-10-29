import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to a team exploring solutions to food waste on a university campus.",
  audio: "",
  dialogue: [
    ["Jules", ["We've analyzed the situation, and the cafeteria throws away hundreds of meals each week."]],
    ["Mei", ["Could we organize a system that offers surplus food to students at the end of the day?"]],
    ["Jules", ["That would reduce waste, which would also lower disposal costs."]],
    ["Mei", ["We should explore alternatives before making a decision. For example, an app could show which meals are still available."]],
    ["Jules", ["Good idea. The app could collect demand information, which would help the kitchen prepare more accurate quantities."]],
    ["Mei", ["We also need to solve the problem of food safety."]],
    ["Jules", [mark("Let's find a solution that preserves safety without making the system too complicated"), "."]],
    ["Mei", ["Agreed. We'll present both possibilities and recommend a short pilot program."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What solution do the speakers plan to recommend?",
  options: [
    "A pilot system for offering surplus meals, possibly supported by an app",
    "Closing the cafeteria at the end of each week",
    "Preparing the same number of meals regardless of demand",
  ],
  answer: "A pilot system for offering surplus meals, possibly supported by an app",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What problem has the team identified?", answer: "The cafeteria wastes hundreds of meals each week." },
    { question: "What could the app show?", answer: "Which surplus meals are still available." },
    { question: "How could demand information help the kitchen?", answer: "It could help staff prepare more accurate quantities." },
    { question: "Which additional issue must the team solve?", answer: "Food safety." },
  ],
} satisfies ListenData;
