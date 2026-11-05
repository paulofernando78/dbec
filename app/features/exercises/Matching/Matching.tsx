import { useEffect, useMemo, useState } from "react";
import { Check, Eye, EyeClosed, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";

export type MatchingPair = {
  left: string;
  right: string;
};

export type MatchingProps = {
  instruction?: string;
  pairs: readonly MatchingPair[];
};

const shuffleIndexes = (length: number) => {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[target]] = [indexes[target], indexes[index]];
  }
  return indexes;
};

export function Matching({
  instruction = "Associe os itens das duas colunas.",
  pairs,
}: MatchingProps) {
  const pairsSignature = JSON.stringify(pairs);
  const initialOrder = useMemo(
    () => shuffleIndexes(pairs.length),
    // A assinatura representa uma nova lista de pares.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pairsSignature],
  );
  const [rightOrder, setRightOrder] = useState(initialOrder);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    setRightOrder(initialOrder);
    setSelectedLeft(null);
    setMatches({});
    setChecked(false);
    setShowAnswers(false);
  }, [initialOrder]);

  const connectRight = (rightIndex: number) => {
    if (selectedLeft === null || checked) return;
    setMatches((current) => ({
      ...Object.fromEntries(
        Object.entries(current).filter(
          ([leftIndex, matchedRight]) =>
            Number(leftIndex) === selectedLeft || matchedRight !== rightIndex,
        ),
      ),
      [selectedLeft]: rightIndex,
    }));
    setSelectedLeft(null);
  };

  const reset = () => {
    setRightOrder(shuffleIndexes(pairs.length));
    setSelectedLeft(null);
    setMatches({});
    setChecked(false);
    setShowAnswers(false);
  };

  const score = pairs.reduce(
    (total, _, index) => total + (matches[index] === index ? 1 : 0),
    0,
  );

  return (
    <div className="mb-4 grid gap-4">
      <p className="font-bold">{instruction}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid content-start gap-2">
          {pairs.map((pair, index) => {
            const isSelected = selectedLeft === index;
            const isCorrect = checked && matches[index] === index;
            const isWrong = checked && matches[index] !== index;

            return (
              <button
                key={`${pair.left}-${index}`}
                type="button"
                disabled={checked}
                aria-pressed={isSelected}
                onClick={() => setSelectedLeft(index)}
                className={[
                  "min-h-14 rounded-xl border p-3 text-left transition-colors",
                  isSelected && "border-blue-500 bg-blue-50",
                  isCorrect && "border-green-400 bg-green-100",
                  isWrong && "border-red-400 bg-red-100",
                  !isSelected && !checked && "border-slate-300 bg-[var(--background)]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="mr-2 font-black">{index + 1}.</span>
                {pair.left}
              </button>
            );
          })}
        </div>

        <div className="grid content-start gap-2">
          {rightOrder.map((pairIndex) => {
            const connectedLeft = Object.entries(matches).find(
              ([, rightIndex]) => rightIndex === pairIndex,
            )?.[0];

            return (
              <button
                key={`${pairs[pairIndex]?.right}-${pairIndex}`}
                type="button"
                disabled={checked || selectedLeft === null}
                onClick={() => connectRight(pairIndex)}
                className="min-h-14 rounded-xl border border-slate-300 bg-[var(--background)] p-3 text-left disabled:cursor-not-allowed disabled:opacity-70"
              >
                {connectedLeft !== undefined && (
                  <span className="mr-2 inline-grid size-6 place-items-center rounded-full bg-blue-600 text-sm font-black text-white">
                    {Number(connectedLeft) + 1}
                  </span>
                )}
                {pairs[pairIndex]?.right}
              </button>
            );
          })}
        </div>
      </div>

      {showAnswers && (
        <ul className="grid gap-1 text-sm text-slate-500">
          {pairs.map((pair, index) => (
            <li key={`${pair.left}-answer-${index}`}>
              <strong>{pair.left}</strong> → {pair.right}
            </li>
          ))}
        </ul>
      )}

      {checked && (
        <p>
          <strong>Pontuação:</strong> {score} de {pairs.length}
        </p>
      )}

      <div className="flex gap-2">
        <Button
          variant="check"
          ariaLabel="Verificar associações"
          icon={<Check />}
          onClick={() => setChecked(true)}
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
