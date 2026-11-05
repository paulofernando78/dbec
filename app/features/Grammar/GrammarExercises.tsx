import { Card } from "@/components/ui/Card";
import { grammarExercisesByTopicId, type GrammarExercise } from "@/data/grammar/exercises";
import { ErrorCorrection } from "@/features/exercises/ErrorCorrection";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Matching } from "@/features/exercises/Matching";
import { Radio } from "@/features/exercises/Radio";
import { SentenceTransformation } from "@/features/exercises/SentenceTransformation";

function ExerciseRenderer({ exercise }: { exercise: GrammarExercise }) {
  switch (exercise.type) {
    case "radio":
      return (
        <Radio
          instruction={exercise.instruction}
          exercise={{
            questions: exercise.questions.map((question) => ({
              question: question.question,
              options: question.options.map((option) => ({ ...option })),
            })),
          }}
          questionClassName="rounded-xl bg-[var(--background)] p-4"
        />
      );

    case "fill":
      return (
        <FillInTheBlanks
          instruction={exercise.instruction}
          showWordBank={exercise.showWordBank}
          exercise={{
            blocks: exercise.blocks.map((block) => ({
              block: block.block.map((item) => ({
                ...item,
                blank:
                  typeof item.blank === "string"
                    ? item.blank
                    : item.blank
                      ? Array.from(item.blank)
                      : undefined,
              })),
            })),
          }}
        />
      );

    case "error-correction":
      return (
        <ErrorCorrection
          instruction={exercise.instruction}
          items={exercise.items}
        />
      );

    case "sentence-transformation":
      return (
        <SentenceTransformation
          instruction={exercise.instruction}
          items={exercise.items}
        />
      );

    case "matching":
      return (
        <Matching instruction={exercise.instruction} pairs={exercise.pairs} />
      );
  }
}

export function GrammarExercises({ topicId }: { topicId: string }) {
  const exercises =
    grammarExercisesByTopicId[
      topicId as keyof typeof grammarExercisesByTopicId
    ];

  if (!exercises?.length) return null;

  return (
    <Card title="Exercícios" className="mt-4">
      <div className="grid gap-6">
        {exercises.map((exercise) => (
          <section key={exercise.id}>
            <h2 className="mb-3 text-xl font-black">{exercise.title}</h2>
            <ExerciseRenderer exercise={exercise} />
          </section>
        ))}
      </div>
    </Card>
  );
}
