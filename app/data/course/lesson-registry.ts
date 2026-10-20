import { a1Unit1Lesson1 } from "./a1/unit-1/lesson-1";
import {
  a1SkeletonLessons,
  type LessonContent,
} from "./a1/skeleton-lessons";
import { a2SkeletonLessons } from "./a2/skeleton-lessons";
import { a2B1SkeletonLessons } from "./a2-b1/skeleton-lessons";
import { b1SkeletonLessons } from "./b1/skeleton-lessons";
import { b2SkeletonLessons } from "./b2/skeleton-lessons";
import { c1SkeletonLessons } from "./c1/skeleton-lessons";
import { travelLessons } from "@/data/travel/lessons";

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
  ...Object.fromEntries(
    Object.entries(a2B1SkeletonLessons).map(([key, lesson]) => [
      `a2-b1/${key}`,
      lesson,
    ]),
  ),
  ...Object.fromEntries(
    Object.entries(b1SkeletonLessons).map(([key, lesson]) => [
      `b1/${key}`,
      lesson,
    ]),
  ),
  ...Object.fromEntries(
    Object.entries(b2SkeletonLessons).map(([key, lesson]) => [
      `b2/${key}`,
      lesson,
    ]),
  ),
  ...Object.fromEntries(
    Object.entries(c1SkeletonLessons).map(([key, lesson]) => [
      `c1/${key}`,
      lesson,
    ]),
  ),
  ...Object.fromEntries(
    Object.entries(travelLessons).map(([key, lesson]) => [
      `travel/${key}`,
      lesson,
    ]),
  ),
};
