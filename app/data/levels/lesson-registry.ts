import { a1Unit1Lesson1 } from "./a1/unit-1/lesson-1";
import {
  a1SkeletonLessons,
  type LessonContent,
} from "./a1/skeleton-lessons";
import { a2SkeletonLessons } from "./a2/skeleton-lessons";

export const lessonRegistry: Record<string, LessonContent> = {
  "a1/1/1": a1Unit1Lesson1,
  ...Object.fromEntries(
    Object.entries(a1SkeletonLessons).map(([key, lesson]) => [
      `a1/${key}`,
      lesson,
    ]),
  ),
  ...Object.fromEntries(
    Object.entries(a2SkeletonLessons).map(([key, lesson]) => [
      `a2/${key}`,
      lesson,
    ]),
  ),
};
