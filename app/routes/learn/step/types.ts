export const learningSteps = [
  "get-ready",
  "see-it",
  "language-focus",
  "try-it",
  "use-it",
  "can-you",
] as const;

export type LearningStep = (typeof learningSteps)[number];

export const stepLabels: Record<LearningStep, string> = {
  "get-ready": "Get ready",
  "see-it": "Listen",
  "language-focus": "Language focus",
  "try-it": "Try it",
  "use-it": "Use it",
  "can-you": "Can you...?",
};

export type StepMaterial = {
  instruction: string;
  content?: string;
  prompt?: string;
  media?: {
    type: "video";
    src: string;
  };
};

export type GetReadySlide = {
  type: "image" | "video";
  src: string;
  text: string;
};
