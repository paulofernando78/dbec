export const learningCompletionKey = (lessonId: string) =>
  `learning:${lessonId}:completed`;

export const learningStepKey = (lessonId: string) =>
  `learning:${lessonId}:step`;

export const getLearningStep = (lessonId: string) =>
  typeof window === "undefined"
    ? 0
    : Number(window.localStorage.getItem(learningStepKey(lessonId)) || 0);

export const advanceLearningStep = (lessonId: string, nextStep: number) => {
  window.localStorage.setItem(
    learningStepKey(lessonId),
    String(Math.max(getLearningStep(lessonId), nextStep)),
  );
};

export const isLearningLessonCompleted = (lessonId: string) =>
  typeof window !== "undefined" &&
  window.localStorage.getItem(learningCompletionKey(lessonId)) === "true";

export const completeLearningLesson = (lessonId: string) => {
  window.localStorage.setItem(learningCompletionKey(lessonId), "true");
};

export const resetLearningLessons = (lessonIds: string[]) => {
  lessonIds.forEach((lessonId) => {
    window.localStorage.removeItem(learningCompletionKey(lessonId));
    window.localStorage.removeItem(learningStepKey(lessonId));
    window.localStorage.removeItem(`learning:${lessonId}:score`);
  });
};
