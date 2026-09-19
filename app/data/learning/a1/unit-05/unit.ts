import { whoseIsItLesson } from "./lesson-01-whose-is-it";
import { weatherWatchLesson } from "./lesson-02-weather-watch";

export const a1Unit05 = {
  id: "unit-5",
  level: "a1",
  order: 5,
  title: "What We Wear",
  description: "Talk about clothes, colors, and possession.",
  lessons: [
    whoseIsItLesson,
    weatherWatchLesson,
    {
      id: "a1-u05-checkpoint",
      slug: "checkpoint-5",
      title: "Checkpoint 5",
      description: "Review what you learned.",
      order: 3,
      locked: true,
      checkpoint: true,
    },
  ],
};
