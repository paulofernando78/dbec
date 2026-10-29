import type { ListenData } from "../../../lesson-step-types";
import { mark } from "@/helpers/content";

export const listen = {
  type: "listen",
  slug: "listen",
  label: "Conversation",
  instruction: "Listen to a customer and a service representative resolving a billing problem.",
  audio: "",
  dialogue: [
    ["Representative", ["Good afternoon. How can I help you?"]],
    ["Customer", ["I'm calling about an extra charge. I'd like to know why my bill increased this month."]],
    ["Representative", ["Let me check. It appears that a premium service was added to your account."]],
    ["Customer", ["That's confusing. My main concern is whether I'll continue to be charged for something I didn't request."]],
    ["Representative", ["I understand why you're frustrated. Could you tell me when you first noticed the charge?"]],
    ["Customer", ["This morning. I also wonder how anyone could have activated it without my permission."]],
    ["Representative", [mark("I'll remove the service, refund the charge, and explain how you can prevent this from happening again"), "."]],
    ["Customer", ["Thank you. That's exactly what I needed."]],
  ],
  questionInstruction: "Choose the correct answer.",
  question: "How will the representative resolve the complaint?",
  options: [
    "Remove the service, refund the charge, and explain how to prevent another occurrence",
    "Ask the customer to pay the charge before canceling the account",
    "Transfer the customer without reviewing the billing record",
  ],
  answer: "Remove the service, refund the charge, and explain how to prevent another occurrence",
  followUpInstruction: "Answer the questions.",
  followUp: [
    { question: "What does the customer want to know?", answer: "Why the bill increased." },
    { question: "What was added to the account?", answer: "A premium service." },
    { question: "What is the customer's main concern?", answer: "Whether the unwanted charges will continue." },
    { question: "How does the representative show empathy?", answer: "By saying that they understand why the customer is frustrated." },
  ],
} satisfies ListenData;
