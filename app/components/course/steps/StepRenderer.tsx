import type { LessonStepData } from "@/data/course/lesson-step-types";
import { CanYouStep } from "./CanYouStep";
import { GetReadyStep } from "./GetReadyStep";
import { LanguageFocusStep } from "./LanguageFocusStep";
import { ListenStep } from "./ListenStep";
import { TryItStep } from "./TryItStep";
import { UseItStep } from "./UseItStep";

export function StepRenderer({ data }: { data: LessonStepData }) {
  switch (data.type) {
    case "get-ready": return <GetReadyStep data={data} />;
    case "listen": return <ListenStep data={data} />;
    case "language-focus": return <LanguageFocusStep data={data} />;
    case "try-it": return <TryItStep data={data} />;
    case "use-it": return <UseItStep data={data} />;
    case "can-you": return <CanYouStep data={data} />;
  }
}
