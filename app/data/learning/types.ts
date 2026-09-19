export type MultipleChoiceExercise = {
  id: string;
  type: "multiple-choice";
  instruction: string;
  prompt: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
};

export type WordOrderExercise = {
  id: string;
  type: "word-order";
  instruction: string;
  prompt?: string;
  words: string[];
  correctAnswer: string;
  explanation: string;
};

export type LearningExercise =
  | MultipleChoiceExercise
  | WordOrderExercise;

export type LearningLesson = {
  id: string;
  slug: string;
  level: string;
  unitId: string;
  order: number;
  title: string;
  description: string;
  objective: string;
  estimatedMinutes: number;
  xpReward: number;
  vocabulary: string[];
  exercises: LearningExercise[];
};
