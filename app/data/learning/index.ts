import { a1Unit01 } from "./a1/unit-01/unit";
import { helloLesson } from "./a1/unit-01/lesson-01-hello";
import { stayInTouchLesson } from "./a1/unit-01/lesson-02-stay-in-touch";
import { a1Unit02 } from "./a1/unit-02/unit";
import { whatsThisLesson } from "./a1/unit-02/lesson-01-whats-this";
import { whereIsItLesson } from "./a1/unit-02/lesson-02-where-is-it";
import { a1Unit03 } from "./a1/unit-03/unit";
import { whereAreYouFromLesson } from "./a1/unit-03/lesson-01-where-are-you-from";
import { a1Unit04 } from "./a1/unit-04/unit";
import { whatAreTheyLikeLesson } from "./a1/unit-04/lesson-01-what-are-they-like";
import { a1Unit05 } from "./a1/unit-05/unit";
import { whoseIsItLesson } from "./a1/unit-05/lesson-01-whose-is-it";
import { weatherWatchLesson } from "./a1/unit-05/lesson-02-weather-watch";
import { a1Unit06 } from "./a1/unit-06/unit";
import { whatTimeIsItThereLesson } from "./a1/unit-06/lesson-01-what-time-is-it-there";
import { whatAreTheyDoingLesson } from "./a1/unit-06/lesson-02-what-are-they-doing";
import { a1Cycle02Lessons, a1Cycle02Units } from "./a1/cycle-02-units";

export const learningLevels = {
  a1: {
    id: "a1",
    label: "A1 Beginner",
    title: "Start using English",
    description: "Learn to communicate in simple, everyday situations.",
    units: [
      a1Unit01,
      a1Unit02,
      a1Unit03,
      a1Unit04,
      a1Unit05,
      a1Unit06,
      ...a1Cycle02Units,
    ],
  },
};

export const learningLessons = [
  helloLesson,
  stayInTouchLesson,
  whatsThisLesson,
  whereIsItLesson,
  whereAreYouFromLesson,
  whatAreTheyLikeLesson,
  whoseIsItLesson,
  weatherWatchLesson,
  whatTimeIsItThereLesson,
  whatAreTheyDoingLesson,
  ...a1Cycle02Lessons,
];

export const getLearningLesson = (
  level: string,
  unit: string,
  slug: string,
) =>
  learningLessons.find(
    (lesson) =>
      lesson.level === level &&
      lesson.unitId === unit &&
      lesson.slug === slug,
  );
