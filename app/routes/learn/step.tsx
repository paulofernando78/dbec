import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router";

import {
  LevelBanner,
  type LearningLevelId,
} from "@/components/learning/LevelBanner";

import {
  getLearningLesson,
  learningLessons,
  learningLevels,
} from "@/data/learning";
import {
  advanceLearningStep,
  completeLearningLesson,
  getLearningStep,
  isLearningLessonCompleted,
} from "@/utils/learning-progress";
import { getReadyMedia, getStepMaterial } from "./step/content";
import { GetReadySlider } from "./step/GetReadySlider";
import { LessonNavigation } from "./step/LessonNavigation";
import { TryItActivity } from "./step/TryItActivity";
import { learningSteps, stepLabels, type LearningStep } from "./step/types";

import { Audio } from "@/components/ui/Audio";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

const isLearningStep = (value: string): value is LearningStep =>
  learningSteps.some((step) => step === value);

export default function LearningStepRoute() {
  const navigate = useNavigate();

  const { level = "", unit = "", lesson: slug = "", step = "" } = useParams();
  // Captura os valores presentes na URL
  // Examplo: pegue o parâmetro chamado lesson, mas guarde seu valor na variável slug

  const lesson = getLearningLesson(level, unit, slug);
  // Essa função procura a aula correspondente ao nível, à Unit e ao slug da URL.
  // Agora Lesson {lesson.order}, {lesson.title} funcionam dinamicamanete

  const currentLevel = learningLevels[level as keyof typeof learningLevels];
  const currentUnit = currentLevel?.units.find((item) => item.id === unit);

  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);
  const [accessAllowed, setAccessAllowed] = useState<boolean | null>(null);

  useEffect(() => setCheckedQuestions([]), [lesson?.id, step]);

  useEffect(() => {
    if (!lesson || !isLearningStep(step)) return;
    const currentStep = learningSteps.indexOf(step);
    const levelLessons = learningLessons.filter((item) => item.level === level);
    const lessonIndex = levelLessons.findIndex((item) => item.id === lesson.id);
    const previousLessonCompleted =
      lessonIndex === 0 ||
      (lessonIndex > 0 &&
        isLearningLessonCompleted(levelLessons[lessonIndex - 1].id));

    setAccessAllowed(
      previousLessonCompleted &&
        (isLearningLessonCompleted(lesson.id) ||
          currentStep <= getLearningStep(lesson.id)),
    );
  }, [lesson, level, step]);

  if (!lesson || !currentUnit || !isLearningStep(step))
    return <Navigate to={`/learn/${level}`} replace />;
  // Essa verificação significa:
  // - se a Lesson não existir;
  // - ou se a Unit não existir;
  // - ou se o Step não for válido;
  // o usuário será redirecionado para a página do nível.

  if (accessAllowed === false)
    return <Navigate to={`/learn/${level}`} replace />;

  const material = getStepMaterial(lesson, step);
  const questions = (material.content ?? "").split("\n").filter(Boolean);
  const examples = (material.content ?? "").split("\n").filter(Boolean);
  const focusExamples = (material.prompt ?? "").split("\n").filter(Boolean);
  const stepIndex = learningSteps.indexOf(step);
  const lessonPath = `/learn/${level}/${unit}/${slug}`;
  const levelLessons = learningLessons.filter((item) => item.level === level);
  const lessonIndex = levelLessons.findIndex((item) => item.id === lesson.id);
  const previousLesson = levelLessons[lessonIndex - 1];
  const nextLesson = levelLessons[lessonIndex + 1];
  const isA1 = level === "a1";
  const isPreIntermediate = level === "a2-b1";
  const isB1 = level === "b1";
  const isB2 = level === "b2";
  const isC1 = level === "c1";
  const buttonVariant = isA1
    ? "answer"
    : isPreIntermediate
      ? "reset"
      : isB1
        ? "check"
        : isB2
          ? "purple"
          : isC1
            ? "indigo"
            : "danger";
  const accentText = isA1
    ? "text-amber-500"
    : isPreIntermediate
      ? "text-blue-600 dark:text-blue-400"
      : isB1
        ? "text-green-700 dark:text-green-400"
        : isB2
          ? "text-purple-700 dark:text-purple-400"
          : "text-indigo-700 dark:text-indigo-300";

  const previousPath =
    stepIndex === 0
      ? previousLesson
        ? `/learn/${previousLesson.level}/${previousLesson.unitId}/${previousLesson.slug}/can-you`
        : `/learn/${level}`
      : `${lessonPath}/${learningSteps[stepIndex - 1]}`;
  const nextPath =
    stepIndex < learningSteps.length - 1
      ? `${lessonPath}/${learningSteps[stepIndex + 1]}`
      : nextLesson
        ? `/learn/${nextLesson.level}/${nextLesson.unitId}/${nextLesson.slug}/get-ready`
        : `/learn/${level}`;
  const getVisibleStepLabel = (targetStep: LearningStep) =>
    targetStep === "see-it" &&
    getStepMaterial(lesson, targetStep).media?.type === "video"
      ? "Watch"
      : stepLabels[targetStep];
  const previousLabel =
    stepIndex === 0
      ? previousLesson?.title || "Learning path"
      : getVisibleStepLabel(learningSteps[stepIndex - 1]);
  const nextLabel =
    stepIndex === learningSteps.length - 1
      ? nextLesson?.title || "Finish lesson"
      : getVisibleStepLabel(learningSteps[stepIndex + 1]);
  const currentStepLabel = getVisibleStepLabel(step);

  const advance = () => {
    if (stepIndex < learningSteps.length - 1) {
      advanceLearningStep(lesson.id, stepIndex + 1);
    } else {
      completeLearningLesson(lesson.id);
    }
    navigate(nextPath);
  };

  return (
    <main className="grid gap-4">
      <Link
        className="inline-flex items-center gap-2 font-bold text-slate-500"
        to={`/learn/${level}`}
      >
        <ArrowLeft size={18} aria-hidden="true" />
        Back to learning path
      </Link>
      <LevelBanner levelId={level as LearningLevelId} />
      <section>
        <header className="grid grid-cols-2">
          <div className="grid rounded-tl-2xl rounded-bl-2xl border-2 border-r-0 border-slate-200 bg-slate-50 p-4 text-2xl font-black text-slate-800 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
            <span className={`text-xs uppercase ${accentText}`}>
              Unit {currentUnit.order}
            </span>
            <span>{currentUnit.title}</span>
          </div>
          <div className="grid rounded-tr-2xl rounded-br-2xl border-2 border-slate-200 bg-white p-4 text-2xl font-black text-slate-800 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
            <span className={`text-xs uppercase ${accentText}`}>
              Lesson {lesson.order}{" "}
            </span>
            <span>{lesson.title}</span>
          </div>
        </header>
        <div className="my-4 mb-10 flex w-max items-center gap-2 rounded-2xl border border-slate-300 px-2 py-1 text-slate-800 dark:border-slate-600 dark:text-slate-100">
          <span className="font-bold">{currentStepLabel}</span>
          <span className={`text-sm font-bold ${accentText}`}>
            Step {stepIndex + 1} of {learningSteps.length}
          </span>
        </div>

        <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
          {material.instruction}
        </p>

        {step === "get-ready" && (
          <GetReadySlider
            slides={getReadyMedia[slug]}
            variant={buttonVariant}
          />
        )}
        {step === "see-it" && (
          <div className="my-6 grid gap-4 text-lg leading-relaxed text-slate-700 dark:bg-slate-700 dark:text-slate-100">
            {material.media?.type === "video" ? (
              <video
                className="aspect-video w-full rounded-2xl bg-black"
                src={material.media.src}
                controls
              />
            ) : (
              <div>
                <AudioPlayer
                  src={material.content ?? ""}
                  asButton
                  buttonVariant={buttonVariant}
                />
              </div>
            )}
            <div className="whitespace-pre-line">
              {examples.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        )}
        {step === "language-focus" && (
          <div className="my-6 grid gap-6 rounded-2xl border-2 border-slate-200 bg-white p-6 text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
            <div>
              <h2 className="mt-0 mb-2 text-xl font-black">
                Grammar and vocabulary
              </h2>
              <p className="m-0 leading-relaxed">{material.content}</p>
            </div>
            <div>
              <h3 className="mt-0 mb-3 text-base font-black">
                Useful language
              </h3>
              <div className="flex flex-wrap gap-2">
                {lesson.vocabulary.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold dark:bg-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {focusExamples.length > 0 && (
              <div>
                <h3 className="mt-0 mb-3 text-base font-black">Examples</h3>
                <div className="grid gap-2">
                  {focusExamples.map((example) => (
                    <p
                      key={example}
                      className="m-0 rounded-xl bg-slate-100 p-3 dark:bg-slate-700"
                    >
                      {example}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {step === "try-it" && (
          <TryItActivity lesson={lesson} variant={buttonVariant} />
        )}
        {step === "use-it" && (
          <div className="my-6 rounded-2xl bg-slate-100 p-6 text-lg leading-relaxed whitespace-pre-line text-slate-700 dark:bg-slate-700 dark:text-slate-100">
            {material.content}
          </div>
        )}
        {step === "can-you" && (
          <>
            <div className="my-6 grid gap-3 rounded-2xl bg-slate-100 p-6 dark:bg-slate-700">
              {questions.map((question) => (
                <label
                  key={question}
                  className="flex cursor-pointer items-start gap-3 text-lg text-slate-700 dark:text-slate-100"
                >
                  <input
                    type="checkbox"
                    checked={checkedQuestions.includes(question)}
                    onChange={(event) =>
                      setCheckedQuestions((current) =>
                        event.target.checked
                          ? [...current, question]
                          : current.filter((item) => item !== question),
                      )
                    }
                    className={`mt-1 size-5 shrink-0 ${
                      isA1
                        ? "accent-yellow-500"
                        : isPreIntermediate
                          ? "accent-blue-500"
                          : isB1
                            ? "accent-green-500"
                            : isB2
                              ? "accent-purple-500"
                              : "accent-indigo-500"
                    }`}
                  />
                  <span>{question}</span>
                </label>
              ))}
            </div>
            <p className="m-0 rounded-xl border-2 border-slate-200 p-4 font-bold text-slate-500 dark:border-slate-600">
              {material.prompt}
            </p>
          </>
        )}

        <LessonNavigation
          variant={buttonVariant}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          onPrevious={() => navigate(previousPath)}
          onNext={advance}
          nextDisabled={
            step === "can-you" && checkedQuestions.length !== questions.length
          }
        />
      </section>
    </main>
  );
}
