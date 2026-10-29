import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two coworkers reporting what was said in a private meeting.",
  audio: "",
  dialogue: [
    ["Grace", ["What did Mateo say in the meeting? I couldn't attend."]],
    ["Ian", ["He said that the company was planning to reorganize two departments."]],
    ["Grace", ["Did he say whether anyone would lose their job?"]],
    ["Ian", ["No. He claimed that no final decisions had been made."]],
    ["Grace", ["What about the rumor that the office is moving?"]],
    ["Ian", ["I asked him if it was true, and he told me not to believe everything I heard."]],
    ["Grace", ["Did he give you any advice?"]],
    ["Ian", [mark("He advised us to focus on our current projects and promised to share more information next week"), "."]],
    ["Grace", ["Thanks. Please let me know when you hear anything else."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What has the company definitely decided?",
  options: [
    "No final decision has been announced yet.",
    "Two departments will close immediately.",
    "The entire office will move next week.",
  ],
  answer: "No final decision has been announced yet.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What did Mateo say the company was planning?", answer: "To reorganize two departments." },
    { question: "What did Ian ask Mateo?", answer: "Whether the rumor about moving the office was true." },
    { question: "What did Mateo tell Ian not to do?", answer: "Believe everything he heard." },
    { question: "What did Mateo promise?", answer: "To share more information the following week." },
  ],
} satisfies ListenData;
