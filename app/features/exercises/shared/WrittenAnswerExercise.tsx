import { useEffect, useState, type ChangeEvent } from "react";
import { Check, Eye, EyeClosed, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";

export type WrittenAnswerItem = {
  prompt: string;
  answers: readonly string[];
  cue?: string;
  explanation?: string;
};

type WrittenAnswerExerciseProps = {
  instruction: string;
  items: readonly WrittenAnswerItem[];
};

const normalizeAnswer = (value: string) =>
  value
    .trim()
    .toLocaleLowerCase("en-US")
    .replaceAll("’", "'")
    .replaceAll("‘", "'")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?;:])/g, "$1");

export function WrittenAnswerExercise({
  instruction,
  items,
}: WrittenAnswerExerciseProps) {
  const itemsSignature = JSON.stringify(items);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setResponses({});
    setResults({});
    setChecked(false);
    setShowAnswers(false);
  }, [itemsSignature]);

  const checkAnswers = () => {
    setResults(
      Object.fromEntries(
        items.map((item, index) => [
          index,
          item.answers
            .map(normalizeAnswer)
            .includes(normalizeAnswer(responses[index] ?? "")),
        ]),
      ),
    );
    setChecked(true);
  };

  const reset = () => {
    setResponses({});
    setResults({});
    setChecked(false);
    setShowAnswers(false);
  };

  const score = items.reduce(
    (total, _, index) => total + (results[index] ? 1 : 0),
    0,
  );

  return (
    <div className="mb-4 grid gap-4">
      <p className="font-bold">{instruction}</p>
      <ol className="grid gap-4">
        {items.map((item, index) => (
          <li
            key={`${item.prompt}-${index}`}
            className="rounded-xl bg-[var(--background)] p-4"
          >
            <p>
              <span className="mr-1 font-bold">{index + 1}.</span>
              {item.prompt}
            </p>
            {item.cue && (
              <p className="mt-1 text-sm text-slate-500">{item.cue}</p>
            )}
            <input
              type="text"
              value={responses[index] ?? ""}
              disabled={checked}
              aria-label={`Resposta ${index + 1}`}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setResponses((current) => ({
                  ...current,
                  [index]: event.target.value,
                }))
              }
              className={[
                "mt-3 w-full rounded-lg border px-3 py-2 font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400",
                checked
                  ? results[index]
                    ? "border-green-300 bg-green-100"
                    : "border-red-300 bg-red-100"
                  : "border-slate-300 bg-white",
              ].join(" ")}
            />
            {showAnswers && (
              <div className="mt-2 text-sm">
                <p>
                  <strong>Resposta:</strong> {item.answers[0]}
                </p>
                {item.explanation && (
                  <p className="mt-1 text-slate-500">{item.explanation}</p>
                )}
              </div>
            )}
          </li>
        ))}
      </ol>

      {checked && (
        <p>
          <strong>Pontuação:</strong> {score} de {items.length}
        </p>
      )}

      <div className="flex gap-2">
        <Button
          variant="check"
          ariaLabel="Verificar respostas"
          icon={<Check />}
          onClick={checkAnswers}
        />
        <Button
          variant="answer"
          ariaLabel={showAnswers ? "Ocultar respostas" : "Mostrar respostas"}
          icon={showAnswers ? <EyeClosed /> : <Eye />}
          onClick={() => setShowAnswers((current) => !current)}
        />
        <Button
          variant="reset"
          ariaLabel="Recomeçar exercício"
          icon={<RotateCcw />}
          onClick={reset}
        />
      </div>
    </div>
  );
}
