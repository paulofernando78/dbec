import {
  WrittenAnswerExercise,
  type WrittenAnswerItem,
} from "../shared/WrittenAnswerExercise";

export type SentenceTransformationItem = {
  sentence: string;
  cue?: string;
  answer: string | readonly string[];
  explanation?: string;
};

export type SentenceTransformationProps = {
  instruction?: string;
  items: readonly SentenceTransformationItem[];
};

export function SentenceTransformation({
  instruction = "Reescreva as frases conforme a orientação.",
  items,
}: SentenceTransformationProps) {
  const writtenItems: WrittenAnswerItem[] = items.map((item) => ({
    prompt: item.sentence,
    cue: item.cue,
    answers: Array.isArray(item.answer) ? item.answer : [item.answer],
    explanation: item.explanation,
  }));

  return (
    <WrittenAnswerExercise instruction={instruction} items={writtenItems} />
  );
}
