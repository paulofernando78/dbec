import { useState } from "react";

import { Checkbox } from "@/components/ui/Checkbox";
import type { CanYouData } from "@/data/course/lesson-step-types";

export function CanYouStep({ data }: { data: CanYouData }) {
  const [checks, setChecks] = useState(() => data.checks.map(() => false));

  return (
    <div className="rounded-2xl bg-gray-200 p-4">
      <h3 className="mb-4 text-lg font-bold">{data.instruction}</h3>
      <div className="grid gap-3 rounded-xl bg-gray-50 p-4">
        {data.checks.map((label, index) => <div key={label} className="flex items-center gap-3"><Checkbox checked={checks[index]} onCheckedChange={(checked) => setChecks((current) => current.map((value, currentIndex) => currentIndex === index ? checked : value))} /><span>{label}</span></div>)}
      </div>
    </div>
  );
}
