import { whatsThisLesson } from "./lesson-01-whats-this";
import { whereIsItLesson } from "./lesson-02-where-is-it";

export const a1Unit02 = {
  id: "unit-2",
  level: "a1",
  order: 2,
  title: "Things Around Us",
  description: "Identify and talk about everyday objects.",
  lessons: [
    whatsThisLesson,
    whereIsItLesson,
    {
      id: "a1-u02-checkpoint",
      slug: "checkpoint-2",
      title: "Checkpoint 2",
      description: "Review what you learned.",
      order: 3,
      locked: true,
      checkpoint: true,
    },
  ],
};
