import { Radio } from "@/features/exercises/Radio";
import type { ConceptCheckData } from "@/data/course/lesson-step-types";

export function ConceptCheckStep({ data }: { data: ConceptCheckData }) {
  return (
    <div className="rounded-2xl bg-[var(--surface)] p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-4">
        {data.questions.map(({ context, question, options, answer }, index) => (
          <section
            key={`${question}-${index}`}
            className="rounded-xl bg-[var(--background)] p-4"
          >
            {context ? (
              <p className="mb-3 text-lg font-black">“{context}”</p>
            ) : null}
            <Radio
              score={false}
              exercise={{
                questions: [
                  {
                    question,
                    options: options.map((option) => ({
                      option,
                      isCorrect: option === answer,
                    })),
                  },
                ],
              }}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
