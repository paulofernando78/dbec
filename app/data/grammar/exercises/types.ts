export type GrammarRadioExercise = {
  id: string;
  title: string;
  type: "radio";
  instruction: string;
  questions: readonly {
    question: string;
    options: readonly { option: string; isCorrect?: boolean }[];
  }[];
};

export type GrammarFillExercise = {
  id: string;
  title: string;
  type: "fill";
  instruction: string;
  showWordBank?: boolean;
  blocks: readonly {
    block: readonly {
      text?: string;
      blank?: string | readonly string[];
      placeholder?: string;
    }[];
  }[];
};

export type GrammarErrorCorrectionExercise = {
  id: string;
  title: string;
  type: "error-correction";
  instruction?: string;
  items: readonly {
    sentence: string;
    answer: string | readonly string[];
    explanation?: string;
  }[];
};

export type GrammarSentenceTransformationExercise = {
  id: string;
  title: string;
  type: "sentence-transformation";
  instruction?: string;
  items: readonly {
    sentence: string;
    cue?: string;
    answer: string | readonly string[];
    explanation?: string;
  }[];
};

export type GrammarMatchingExercise = {
  id: string;
  title: string;
  type: "matching";
  instruction?: string;
  pairs: readonly { left: string; right: string }[];
};

export type GrammarExercise =
  | GrammarRadioExercise
  | GrammarFillExercise
  | GrammarErrorCorrectionExercise
  | GrammarSentenceTransformationExercise
  | GrammarMatchingExercise;
