import { helloLesson } from "./lesson-01-hello";
import { stayInTouchLesson } from "./lesson-02-stay-in-touch";

export const a1Unit01 = {
  id: "unit-1",
  level: "a1",
  order: 1,
  title: "Meeting People",
  description: "Say hello, share names, and make simple introductions.",
  lessons: [
    helloLesson,
    stayInTouchLesson,
    {
      id: "a1-u01-l03",
      slug: "meet-my-family",
      title: "Meet my family",
      description: "Introduce people in your family.",
      order: 3,
      locked: true,
    },
    {
      id: "a1-u01-checkpoint",
      slug: "checkpoint-1",
      title: "Checkpoint 1",
      description: "Review what you learned.",
      order: 4,
      locked: true,
      checkpoint: true,
    },
  ],
};
