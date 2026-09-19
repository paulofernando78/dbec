import { whereAreYouFromLesson } from "./lesson-01-where-are-you-from";

export const a1Unit03 = {
  id: "unit-3",
  level: "a1",
  order: 3,
  title: "Around the World",
  description: "Talk about places, people, and languages.",
  lessons: [
    whereAreYouFromLesson,
    {
      id: "a1-u03-checkpoint",
      slug: "checkpoint-3",
      title: "Checkpoint 3",
      description: "Review what you learned.",
      order: 2,
      locked: true,
      checkpoint: true,
    },
  ],
};
