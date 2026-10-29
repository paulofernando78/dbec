import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to two colleagues reflecting on a mistake at work.",
  audio: "",
  dialogue: [
    ["Tara", ["Did you hear what happened during yesterday's presentation?"]],
    ["Ben", ["Yes. We were supposed to test the video before the clients arrived, but nobody did."]],
    ["Tara", ["I thought the technical team had to check it."]],
    ["Ben", ["They did, but we should have confirmed that the final file was working."]],
    ["Tara", ["I noticed a problem earlier, but I didn't say anything because I assumed it had been solved."]],
    ["Ben", [mark("You should have spoken up"), ". We might have avoided the delay."]],
    ["Tara", ["I know. I didn't need to wait for the manager's permission to mention it."]],
    ["Ben", ["At least we've identified the cause. Next time, we'll use a checklist and deal with problems immediately."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "What caused the problem during the presentation?",
  options: [
    "The team failed to confirm that the final video file worked.",
    "The clients arrived on the wrong day.",
    "The manager canceled the technical check.",
  ],
  answer: "The team failed to confirm that the final video file worked.",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What was the team supposed to do?", answer: "Test the video before the clients arrived." },
    { question: "What does Ben think Tara should have done?", answer: "She should have spoken up." },
    { question: "Why didn't Tara mention the problem?", answer: "She assumed it had already been solved." },
    { question: "How will they avoid the problem next time?", answer: "They will use a checklist and deal with problems immediately." },
  ],
} satisfies ListenData;
