import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two friends discussing a developing news story.",
  audio: "",
  dialogue: [
    ["Aisha", ["Have you seen the news about the coastal town?"]],
    ["Tom", ["No. What has happened?"]],
    ["Aisha", ["A severe storm has caused flooding across the region, and thousands of people have left their homes."]],
    ["Tom", ["When did the storm reach the coast?"]],
    ["Aisha", ["It arrived late last night. Rescue teams started working before dawn."]],
    ["Tom", ["Have they reported any casualties?"]],
    ["Aisha", ["Not yet. Officials said this morning that everyone in the evacuation zone had been contacted."]],
    ["Tom", [mark("That's encouraging, but the crisis hasn't ended yet"), "."]],
    ["Aisha", ["Right. The weather service issued another warning an hour ago."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What has the storm caused?",
  options: [
    "Flooding and the evacuation of thousands of residents",
    "A political crisis and a nationwide rebellion",
    "A robbery during a public event",
  ],
  answer: "Flooding and the evacuation of thousands of residents",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "When did the storm reach the coast?", answer: "Late the previous night." },
    { question: "When did rescue teams begin working?", answer: "Before dawn." },
    { question: "Have officials reported casualties?", answer: "No, not yet." },
    { question: "What happened an hour before the conversation?", answer: "The weather service issued another warning." },
  ],
} satisfies ListenData;
