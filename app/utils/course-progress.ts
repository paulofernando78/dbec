export function lessonProgressKey(
  level: string,
  unit: number | string,
  lesson: number | string,
) {
  return `dbec_course_${level}_unit_${unit}_lesson_${lesson}_completed`;
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
}

export function resetLesson(
  level: string,
  unit: number | string,
  lesson: number | string,
) {
  localStorage.removeItem(lessonProgressKey(level, unit, lesson));
}
