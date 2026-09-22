export const learningSteps = [
  "get-ready",
  "see-it",
  "try-it",
  "use-it",
  "can-you",
] as const;

export type LearningStep = (typeof learningSteps)[number];

export const stepLabels: Record<LearningStep, string> = {
  "get-ready": "Get ready",
  "see-it": "See it",
  "try-it": "Try it",
  "use-it": "Use it",
  "can-you": "Can you...?",
};

export type StepMaterial = {
  instruction: string;
  content?: string;
  prompt?: string;
};

export type GetReadySlide = {
  type: "image" | "video";
  src: string;
  text: string;
};
