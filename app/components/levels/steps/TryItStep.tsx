import { useMemo, useState } from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Check, Eye, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { TryItData } from "@/data/levels/lesson-step-types";

type Token = { id: string; word: string };
type ContainerName = "bank" | "answer";

function SortableWord({
  token,
  container,
  onClick,
}: {
  token: Token;
  container: ContainerName;
  onClick: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: token.id, data: { container } });

  return (
    <button
      ref={setNodeRef}
      type="button"
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`touch-none cursor-grab rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 select-none active:cursor-grabbing ${
        isDragging ? "z-10 opacity-40" : ""
      }`}
      onClick={onClick}
      {...attributes}
      {...listeners}
    >
      {token.word}
    </button>
  );
}

function WordContainer({
  id,
  tokens,
  placeholder,
  onTokenClick,
}: {
  id: ContainerName;
  tokens: Token[];
  placeholder?: string;
  onTokenClick: (token: Token) => void;
}) {
  const { setNodeRef, isOver } = useDroppable({ id, data: { container: id } });

  return (
    <SortableContext
      id={id}
      items={tokens.map((token) => token.id)}
      strategy={horizontalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className={`flex min-h-14 flex-wrap items-center gap-2 rounded-xl border p-3 transition-colors ${
          id === "answer" ? "bg-white" : "border-transparent"
        } ${isOver ? "border-sky-500 bg-sky-50" : "border-gray-300"}`}
      >
        {tokens.length === 0 && placeholder ? (
          <span className="pointer-events-none text-slate-500">{placeholder}</span>
        ) : null}
        {tokens.map((token) => (
          <SortableWord
            key={token.id}
            token={token}
            container={id}
            onClick={() => onTokenClick(token)}
          />
        ))}
      </div>
    </SortableContext>
  );
}

function SentenceBuilder({
  words,
  correctAnswer,
  number,
}: {
  words: readonly string[];
  correctAnswer: readonly string[];
  number: number;
}) {
  const initialTokens = useMemo(
    () => words.map((word, index) => ({ id: `${number}-${index}`, word })),
    [number, words],
  );
  const [bank, setBank] = useState<Token[]>(initialTokens);
  const [answer, setAnswer] = useState<Token[]>([]);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const moveToken = (
    token: Token,
    from: ContainerName,
    to: ContainerName,
    targetIndex?: number,
  ) => {
    if (from === to) return;
    const nextIndex = targetIndex ?? (to === "answer" ? answer.length : bank.length);
    if (from === "bank") {
      setBank((items) => items.filter((item) => item.id !== token.id));
      setAnswer((items) => {
        const next = [...items];
        next.splice(nextIndex, 0, token);
        return next;
      });
    } else {
      setAnswer((items) => items.filter((item) => item.id !== token.id));
      setBank((items) => {
        const next = [...items];
        next.splice(nextIndex, 0, token);
        return next;
      });
    }
    setResult(null);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;
    const from = active.data.current?.container as ContainerName | undefined;
    const to = (over.data.current?.container ?? over.id) as ContainerName;
    if (!from || !["bank", "answer"].includes(to)) return;

    const fromItems = from === "bank" ? bank : answer;
    const token = fromItems.find((item) => item.id === active.id);
    if (!token) return;

    if (from === to) {
      const oldIndex = fromItems.findIndex((item) => item.id === active.id);
      const newIndex = fromItems.findIndex((item) => item.id === over.id);
      if (oldIndex !== newIndex && newIndex >= 0) {
        const setter = from === "bank" ? setBank : setAnswer;
        setter((items) => arrayMove(items, oldIndex, newIndex));
        setResult(null);
      }
      return;
    }

    const toItems = to === "bank" ? bank : answer;
    const overIndex = toItems.findIndex((item) => item.id === over.id);
    moveToken(token, from, to, overIndex >= 0 ? overIndex : undefined);
  };

  const showAnswer = () => {
    const unused = [...initialTokens];
    const ordered = correctAnswer.map((word) => {
      const index = unused.findIndex((token) => token.word === word);
      return unused.splice(index, 1)[0];
    });
    setAnswer(ordered);
    setBank(unused);
    setResult(null);
  };

  const reset = () => {
    setBank(initialTokens);
    setAnswer([]);
    setResult(null);
  };

  const check = () => {
    const isCorrect =
      answer.length === correctAnswer.length &&
      answer.every((token, index) => token.word === correctAnswer[index]);
    setResult(isCorrect ? "correct" : "incorrect");
  };

  return (
    <article>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="mb-3 flex items-start gap-2">
          <b className="pt-3">{number}.</b>
          <div className="min-w-0 flex-1">
            <WordContainer
              id="bank"
              tokens={bank}
              onTokenClick={(token) => moveToken(token, "bank", "answer")}
            />
          </div>
        </div>
        <WordContainer
          id="answer"
          tokens={answer}
          placeholder="Drag or tap the words to build the sentence."
          onTokenClick={(token) => moveToken(token, "answer", "bank")}
        />
      </DndContext>

      <p
        className={`mt-2 min-h-6 text-sm font-semibold ${
          result === "correct" ? "text-green-700" : "text-red-600"
        }`}
        aria-live="polite"
      >
        {result === "correct" ? "Correct!" : result === "incorrect" ? "Try again." : ""}
      </p>

      <div className="mt-1 flex gap-3">
        <Button ariaLabel="Check answer" icon={<Check />} onClick={check} />
        <Button ariaLabel="Reset answer" icon={<RotateCcw />} onClick={reset} />
        <Button ariaLabel="Show answer" icon={<Eye />} onClick={showAnswer} />
      </div>
    </article>
  );
}

export function TryItStep({ data }: { data: TryItData }) {
  return (
    <div className="rounded-2xl bg-gray-200 p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-6">
        {data.items.map((item, index) => (
          <SentenceBuilder
            key={index}
            number={index + 1}
            words={item.words}
            correctAnswer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}
