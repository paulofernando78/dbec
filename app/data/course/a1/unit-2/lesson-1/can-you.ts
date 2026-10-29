import type { CanYouData } from "../../../lesson-step-types";

export const canYou = {
  type: "can-you", slug: "can-you", label: "Your progress",
  instruction: "Identify one object and two objects without reading. Then check.",
  checks: ["What’s this?", "It’s a/an…", "What are these?", "They’re…"],
} satisfies CanYouData;
