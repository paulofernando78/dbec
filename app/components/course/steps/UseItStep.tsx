import type { UseItData } from "@/data/course/lesson-step-types";

export function UseItStep({ data }: { data: UseItData }) {
  return (
    <div className="rounded-2xl bg-gray-200 p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="mb-4 grid gap-2">{data.prompts.map((prompt) => <p key={prompt}>• {prompt}</p>)}</div>
      <div className="rounded-xl bg-gray-50 p-4">{data.model.map(([speaker, text], index) => <p key={index}><b>{speaker}:</b> {text}</p>)}</div>
    </div>
  );
}
