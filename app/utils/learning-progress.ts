export const learningCompletionKey = (lessonId: string) =>
  `learning:${lessonId}:completed`;

export const isLearningLessonCompleted = (lessonId: string) =>
  typeof window !== "undefined" &&
  window.localStorage.getItem(learningCompletionKey(lessonId)) === "true";

export const completeLearningLesson = (lessonId: string) => {
  window.localStorage.setItem(learningCompletionKey(lessonId), "true");
};

export const resetLearningLessons = (lessonIds: string[]) => {
  lessonIds.forEach((lessonId) => {
    window.localStorage.removeItem(learningCompletionKey(lessonId));
    window.localStorage.removeItem(`learning:${lessonId}:score`);
  });
};
