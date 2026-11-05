import {
  WrittenAnswerExercise,
  type WrittenAnswerItem,
} from "../shared/WrittenAnswerExercise";

export type ErrorCorrectionItem = {
  sentence: string;
  answer: string | readonly string[];
  explanation?: string;
};

export type ErrorCorrectionProps = {
  instruction?: string;
  items: readonly ErrorCorrectionItem[];
};

export function ErrorCorrection({
  instruction = "Encontre e corrija o erro em cada frase.",
  items,
}: ErrorCorrectionProps) {
  const writtenItems: WrittenAnswerItem[] = items.map((item) => ({
    prompt: item.sentence,
    answers: Array.isArray(item.answer) ? item.answer : [item.answer],
    explanation: item.explanation,
  }));

  return (
    <WrittenAnswerExercise instruction={instruction} items={writtenItems} />
  );
}
