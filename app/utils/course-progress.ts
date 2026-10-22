import { levels } from "@/data/course";

export function lessonProgressKey(
  level: string,
  unit: number | string,
  lesson: number | string,
) {
  return `dbec_course_${level}_unit_${unit}_lesson_${lesson}_completed`;
}

export const XP_BY_LEVEL = {
  a1: 20,
  a2: 25,
  "a2-b1": 30,
  b1: 35,
  b2: 40,
  c1: 45,
} as const;

const courseLevels = Object.values(levels);
const countableLessons = (lessonCount: number) => Math.min(lessonCount, 2);

export const COURSE_TOTAL_LESSONS = courseLevels.reduce(
  (levelTotal, level) =>
    levelTotal +
    level.units.reduce(
      (unitTotal, unit) => unitTotal + countableLessons(unit.lessons.length),
      0,
    ),
  0,
);

export const COURSE_TOTAL_XP = courseLevels.reduce(
  (levelTotal, level) =>
    levelTotal +
    level.units.reduce(
      (unitTotal, unit) =>
        unitTotal +
        countableLessons(unit.lessons.length) *
          XP_BY_LEVEL[level.slug as keyof typeof XP_BY_LEVEL],
      0,
    ),
  0,
);

function lessonCompletionDateKey(
  level: string,
  unit: number | string,
  lesson: number | string,
) {
  return `${lessonProgressKey(level, unit, lesson)}_at`;
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const STUDY_DAYS_KEY = "dbec_course_study_days";

function recordStudyDay() {
  let days: string[] = [];

  try {
    days = JSON.parse(localStorage.getItem(STUDY_DAYS_KEY) ?? "[]");
  } catch {
    days = [];
  }

  const today = localDateKey();
  if (!days.includes(today)) {
    localStorage.setItem(STUDY_DAYS_KEY, JSON.stringify([...days, today]));
  }
}

export function isLessonCompleted(
  level: string,
  unit: number | string,
  lesson: number | string,
) {
  return localStorage.getItem(lessonProgressKey(level, unit, lesson)) === "1";
}

export function completeLesson(
  level: string,
  unit: number | string,
  lesson: number | string,
) {
  localStorage.setItem(lessonProgressKey(level, unit, lesson), "1");
  const completedAtKey = lessonCompletionDateKey(level, unit, lesson);
  if (!localStorage.getItem(completedAtKey)) {
    localStorage.setItem(completedAtKey, localDateKey());
    recordStudyDay();
  }
}

export function resetLesson(
  level: string,
  unit: number | string,
  lesson: number | string,
) {
  localStorage.removeItem(lessonProgressKey(level, unit, lesson));
  localStorage.removeItem(lessonCompletionDateKey(level, unit, lesson));
}

export type CourseProgressSummary = {
  completedLessons: number;
  totalLessons: number;
  earnedXp: number;
  totalXp: number;
  dayStreak: number;
};

export function getCourseProgressSummary(): CourseProgressSummary {
  let completedLessons = 0;
  let earnedXp = 0;
  let savedStudyDays: string[] = [];
  try {
    savedStudyDays = JSON.parse(localStorage.getItem(STUDY_DAYS_KEY) ?? "[]");
  } catch {
    savedStudyDays = [];
  }
  const studyDays = new Set<string>(savedStudyDays);
  courseLevels.forEach((level) => {
    level.units.forEach((unit) => {
      unit.lessons.slice(0, 2).forEach((_, lessonIndex) => {
        const key = lessonProgressKey(level.slug, unit.number, lessonIndex + 1);
        if (localStorage.getItem(key) !== "1") return;

        completedLessons += 1;
        earnedXp += XP_BY_LEVEL[level.slug as keyof typeof XP_BY_LEVEL];

        const completedAt = localStorage.getItem(`${key}_at`);
        if (completedAt) studyDays.add(completedAt);
      });
    });
  });

  let dayStreak = 0;
  const cursor = new Date();
  if (!studyDays.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);

  while (studyDays.has(localDateKey(cursor))) {
    dayStreak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return {
    completedLessons,
    totalLessons: COURSE_TOTAL_LESSONS,
    earnedXp,
    totalXp: COURSE_TOTAL_XP,
    dayStreak,
  };
}

