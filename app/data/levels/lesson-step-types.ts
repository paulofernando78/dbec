export type GetReadyData = {
  type: "get-ready";
  slug: string;
  label: string;
  slides: readonly {
    image: string;
    audio: string;
    quote: string;
  }[];
};

export type ListenData = {
  type: "listen";
  slug: string;
  label: string;
  instruction: string;
  audio: string;
  dialogue: readonly (readonly [string, string])[];
  question: string;
  options: readonly string[];
  answer: string;
  followUp: readonly {
    question: string;
    answer: string;
  }[];
};

export type LanguageFocusData = {
  type: "language-focus";
  slug: string;
  label: string;
  instruction: string;
  items: readonly (readonly [string, string, string, string])[];
};

export type TryItData = {
  type: "try-it";
  slug: string;
  label: string;
  instruction: string;
  items: readonly (readonly string[])[];
};

export type UseItData = {
  type: "use-it";
  slug: string;
  label: string;
  instruction: string;
  prompts: readonly string[];
  model: readonly (readonly [string, string])[];
};

export type CanYouData = {
  type: "can-you";
  slug: string;
  label: string;
  instruction: string;
  checks: readonly string[];
};

export type LessonStepData =
  | GetReadyData
  | ListenData
  | LanguageFocusData
  | TryItData
  | UseItData
  | CanYouData;
