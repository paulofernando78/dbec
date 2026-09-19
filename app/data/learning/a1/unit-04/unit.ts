import { whatAreTheyLikeLesson } from "./lesson-01-what-are-they-like";

export const a1Unit04 = {
  id: "unit-4",
  level: "a1",
  order: 4,
  title: "People",
  description: "Describe the people in your life.",
  lessons: [
    whatAreTheyLikeLesson,
    {
      id: "a1-u04-checkpoint",
      slug: "checkpoint-4",
      title: "Checkpoint 4",
      description: "Review what you learned.",
      order: 2,
      locked: true,
      checkpoint: true,
    },
  ],
};
