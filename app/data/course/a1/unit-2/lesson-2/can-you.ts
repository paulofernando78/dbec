import type { CanYouData } from "../../../lesson-step-types";

export const canYou = {
  type: "can-you", slug: "can-you", label: "Your progress",
  instruction: "Ask for and give two object locations without reading. Then check.",
  checks: ["Where’s the…?", "Where are the…?", "It’s… / They’re…", "in / on / under / next to"],
} satisfies CanYouData;
