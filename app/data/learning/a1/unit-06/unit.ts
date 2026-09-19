import { whatTimeIsItThereLesson } from "./lesson-01-what-time-is-it-there";
import { whatAreTheyDoingLesson } from "./lesson-02-what-are-they-doing";

export const a1Unit06 = {
  id: "unit-6",
  level: "a1",
  order: 6,
  title: "Time Around the World",
  description: "Compare local times in different cities.",
  lessons: [
    whatTimeIsItThereLesson,
    whatAreTheyDoingLesson,
    {
      id: "a1-u06-checkpoint",
      slug: "checkpoint-6",
      title: "Checkpoint 6",
      description: "Review what you learned.",
      order: 3,
      locked: true,
      checkpoint: true,
    },
  ],
};
