export type LearningLessonProgress = {
  completed: boolean;
  completedAt: number | null;
  score: number;
  step: number;
};

type LearningLessonSummaryInput = {
  id: string;
  xpReward: number;
};

export type LearningProgressSummary = {
  completedLessons: number;
  streak: number;
  totalXp: number;
};

const learningKey = (lessonId: string, field: string) =>
  `learning:${lessonId}:${field}`;

export const learningCompletionKey = (lessonId: string) =>
  learningKey(lessonId, "completed");

export const learningCompletedAtKey = (lessonId: string) =>
  learningKey(lessonId, "completedAt");

export const learningStepKey = (lessonId: string) =>
  learningKey(lessonId, "step");

export const learningScoreKey = (lessonId: string) =>
  learningKey(lessonId, "score");

const getStorage = () => {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

const readNumber = (key: string, fallback = 0) => {
  const storedValue = getStorage()?.getItem(key);
  if (storedValue === null || storedValue === undefined) return fallback;

  const value = Number(storedValue);
  return Number.isFinite(value) ? value : fallback;
};

const clampInteger = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, Math.round(value)));

export const getLearningStep = (lessonId: string) =>
  Math.max(0, Math.round(readNumber(learningStepKey(lessonId))));

export const advanceLearningStep = (lessonId: string, nextStep: number) => {
  const storage = getStorage();
  if (!storage) return;

  storage.setItem(
    learningStepKey(lessonId),
    String(Math.max(getLearningStep(lessonId), Math.round(nextStep))),
  );
};

export const isLearningLessonCompleted = (lessonId: string) =>
  getStorage()?.getItem(learningCompletionKey(lessonId)) === "true";

export const completeLearningLesson = (lessonId: string) => {
  const storage = getStorage();
  if (!storage) return;

  storage.setItem(learningCompletionKey(lessonId), "true");
  if (!storage.getItem(learningCompletedAtKey(lessonId))) {
    storage.setItem(learningCompletedAtKey(lessonId), String(Date.now()));
  }
};

export const getLearningCompletedAt = (lessonId: string) => {
  const value = readNumber(learningCompletedAtKey(lessonId), Number.NaN);
  return Number.isFinite(value) && value > 0 ? value : null;
};

export const getLearningScore = (lessonId: string) =>
  clampInteger(readNumber(learningScoreKey(lessonId)), 0, 100);

export const saveLearningScore = (lessonId: string, score: number) => {
  const storage = getStorage();
  if (!storage || !Number.isFinite(score)) return;

  const normalizedScore = clampInteger(score, 0, 100);
  const bestScore = Math.max(getLearningScore(lessonId), normalizedScore);
  storage.setItem(learningScoreKey(lessonId), String(bestScore));
};

export const getLearningLessonProgress = (
  lessonId: string,
): LearningLessonProgress => ({
  completed: isLearningLessonCompleted(lessonId),
  completedAt: getLearningCompletedAt(lessonId),
  score: getLearningScore(lessonId),
  step: getLearningStep(lessonId),
});

const localDateKey = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const getLearningProgressSummary = (
  lessons: LearningLessonSummaryInput[],
): LearningProgressSummary => {
  const completedLessons = lessons.filter((lesson) =>
    isLearningLessonCompleted(lesson.id),
  );
  const completionDates = new Set(
    completedLessons
      .map((lesson) => getLearningCompletedAt(lesson.id))
      .filter((value): value is number => value !== null)
      .map((value) => localDateKey(new Date(value))),
  );

  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!completionDates.has(localDateKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (completionDates.has(localDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return {
    completedLessons: completedLessons.length,
    streak,
    totalXp: completedLessons.reduce(
      (total, lesson) => total + lesson.xpReward,
      0,
    ),
  };
};

export const resetLearningLessons = (lessonIds: string[]) => {
  const storage = getStorage();
  if (!storage) return;

  lessonIds.forEach((lessonId) => {
    storage.removeItem(learningCompletionKey(lessonId));
    storage.removeItem(learningCompletedAtKey(lessonId));
    storage.removeItem(learningStepKey(lessonId));
    storage.removeItem(learningScoreKey(lessonId));
  });
};
