import { initialGrammarExercises } from "./initial-topics";
import { remainingGrammarExercises } from "./remaining-topics";

export const grammarExercisesByTopicId = {
  ...initialGrammarExercises,
  ...remainingGrammarExercises,
};

export type { GrammarExercise } from "./types";
