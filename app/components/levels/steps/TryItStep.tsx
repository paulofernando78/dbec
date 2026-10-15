import { Check, Eye, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { TryItData } from "@/data/levels/lesson-step-types";

export function TryItStep({ data }: { data: TryItData }) {
  return (
    <div className="rounded-2xl bg-gray-200 p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-6">
        {data.items.map((words, index) => <article key={index}><div className="mb-3 flex flex-wrap items-center gap-2"><b>{index + 1}.</b>{words.map((word) => <button type="button" key={word} className="rounded-lg border border-gray-300 bg-gray-50 px-3 py-2">{word}</button>)}</div><div className="min-h-14 rounded-xl border border-gray-300 bg-white p-4 text-slate-500">Tap the words to build the sentence.</div><div className="mt-3 flex gap-3"><Button ariaLabel="Check answer" icon={<Check />} /><Button ariaLabel="Reset answer" icon={<RotateCcw />} /><Button ariaLabel="Show answer" icon={<Eye />} /></div></article>)}
      </div>
    </div>
  );
}
