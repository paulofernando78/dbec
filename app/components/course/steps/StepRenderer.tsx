import type { LessonStepData } from "@/data/course/lesson-step-types";
import { CanYouStep } from "./CanYouStep";
import { ConceptCheckStep } from "./ConceptCheckStep";
import { GetReadyStep } from "./GetReadyStep";
import { LanguageFocusStep } from "./LanguageFocusStep";
import { ListenStep } from "./ListenStep";
import { TryItStep } from "./TryItStep";
import { UseItStep } from "./UseItStep";

export function StepRenderer({ data }: { data: LessonStepData }) {
  const Component = data.component;
  let step;

  switch (data.type) {
    case "get-ready":
      step = <GetReadyStep data={data} />;
      break;
    case "listen":
      step = <ListenStep data={data} />;
      break;
    case "language-focus":
      step = <LanguageFocusStep data={data} />;
      break;
    case "concept-check":
      step = <ConceptCheckStep data={data} />;
      break;
    case "try-it":
      step = <TryItStep data={data} />;
      break;
    case "use-it":
      step = <UseItStep data={data} />;
      break;
    case "can-you":
      step = <CanYouStep data={data} />;
      break;
  }

  return (
    <>
      {step}
      {Component && (
        <div className="mt-4">
          <Component />
        </div>
      )}
    </>
  );
}
