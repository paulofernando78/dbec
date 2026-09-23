import { Navigate, useParams } from "react-router";
import { getLearningLesson } from "@/data/learning";
import { getLearningStep } from "@/utils/learning-progress";
import { learningSteps } from "./step/types";

export default function LegacyLessonRedirect() {
  const { level = "", unit = "", lesson: slug = "" } = useParams();
  const lesson = getLearningLesson(level, unit, slug);

  if (!lesson) return <Navigate to={`/learn/${level}`} replace />;

  const step =
    learningSteps[
      Math.min(getLearningStep(lesson.id), learningSteps.length - 1)
    ] ?? learningSteps[0];

  return <Navigate to={`/learn/${level}/${unit}/${slug}/${step}`} replace />;
}
