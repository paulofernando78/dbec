import type { RichContent } from "@/helpers/content";
import type { ComponentType } from "react";
import type { GrammarTopicId } from "@/data/grammar";
import type { VocabularyTopicId } from "@/data/vocabulary";

type StepExtension = {
  component?: ComponentType;
};

export type GetReadyData = StepExtension & {
  type: "get-ready";
  slug: string;
  label: string;
  slides: readonly {
    image?: string;
    audio?: string;
    quote: string;
  }[];
};

export type ListenData = StepExtension & {
  type: "listen";
  slug: string;
  label: string;
  instruction: string;
  audio: string;
  dialogue: readonly (readonly [speaker: string, text: RichContent])[];
  questionInstruction: string;
  question: string;
  options: readonly string[];
  answer: string;
  followUpInstruction?: string;
  followUp: readonly {
    question: string;
    answer: string;
  }[];
};

export type LanguageFocusData = StepExtension & {
  type: "language-focus";
  slug: string;
  label: string;
  instruction: string;
  relatedGrammar?: readonly GrammarTopicId[];
  relatedVocabulary?: readonly VocabularyTopicId[];
  items: readonly (readonly [
    title: RichContent | string,
    meaning: string,
    pronunciation: string,
    form: string,
    audio?: { us?: string; uk?: string },
    translationPt?: string,
    group?: string,
  ])[];
};

export type ConceptCheckData = StepExtension & {
  type: "concept-check";
  slug: string;
  label: string;
  instruction: string;
  questions: readonly {
    context?: string;
    question: string;
    options: readonly string[];
    answer: string;
  }[];
};

export type TryItData = StepExtension & {
  type: "try-it";
  slug: string;
  label: string;
  instruction: string;
  items: readonly {
    words: readonly string[];
    answer: readonly string[];
  }[];
};

export type UseItData = StepExtension & {
  type: "use-it";
  slug: string;
  label: string;
  instruction: string;
  prompts: readonly string[];
  model: readonly (readonly [string, string])[];
};

export type CanYouData = StepExtension & {
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
  | ConceptCheckData
  | TryItData
  | UseItData
  | CanYouData;
