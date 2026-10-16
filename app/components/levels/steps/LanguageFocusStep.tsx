import { Audio } from "@/components/ui/Audio";
import { Button } from "@/components/ui/Button";
import type { LanguageFocusData } from "@/data/levels/lesson-step-types";

export function LanguageFocusStep({ data }: { data: LanguageFocusData }) {
  return (
    <div className="rounded-2xl bg-gray-200 p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-4">
        {data.items.map(([title, meaning, pronunciation, form, audio]) => <article key={title} className="rounded-xl border border-gray-300 p-4"><div className="mb-2 flex items-center gap-3"><Button ariaLabel={`Play ${title}`} icon={<Audio src={audio ?? title} />} /><h4 className="text-xl font-black">{title}</h4></div><p><b>Meaning:</b> {meaning}</p><p><b>Pronunciation:</b> <span className="text-blue-500">{pronunciation}</span></p><p><b>Form:</b> {form}</p></article>)}
      </div>
    </div>
  );
}
