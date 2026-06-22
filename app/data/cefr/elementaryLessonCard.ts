import type { ListProps } from "@/components/content/List";

import {
  text,
} from "@/helpers/content";

export const lessons = {
  elementary: {
    unitOne: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 1 • Last Weekend"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "By the end of this class, students will be able to talk about past events, describe what they did last weekend, ask questions about past activities, and use the Past Simple correctly.",
      grammar: "Past Simple",
      vocabulary: "Weekend activities",
    },
    unitTwo: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 2 • Travel Plans"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Going to",
      vocabulary: "Travel",
    },
    unitThree: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 3 • Future Predictions"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Will",
      vocabulary: "Technology, Future",
    },
    unitFour: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 4 • City Life"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Cities",
      vocabulary: "Comparatives",
    },
    unitFive: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 5 • The Best Place"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Superlatives",
      vocabulary: "Travel destinations",
    },
    unitSix: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 6 • Healthy Living"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Should",
      vocabulary: "Health",
    },
    unitSeven: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 7 • Rules"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Must / Have to",
      vocabulary: "Grammar",
    },
    unitEight: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 8 • Shopping Smart"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Much / Many / Some / Any",
      vocabulary: "Shopping",
    },
    unitNine: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 9 • Experiences"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Present Perfect (basic)",
      vocabulary: "Life experiences",
    },
    unitTen: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 10 • Hobbies"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Gerunds & Infinitives",
      vocabulary: "Hobbies",
    },
  },
};
