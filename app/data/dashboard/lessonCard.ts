import type { ListProps } from "@/components/content/List";

import {
  audio,
  bold,
  boldMark,
  content,
  icon,
  italic,
  mark,
  phonetics,
  portuguese,
  stressed,
  text,
  underline,
} from "@/helpers/content";

export const lessons = {
  beginner: {
    unitOne: {
      lessonObjective:
        "By the end of this class, students will be able to greet someone, say their name, ask for basic personal information, and introduce themselves clearly.",
      grammar: "Verb to be, Subject pronouns",
      vocabulary: "Greetings, Names, Countries",
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 1 • Hello!"]),
          },
        ],
      } satisfies ListProps,
    },
    unitTwo: {
      lessonObjective: "...",
      grammar: "...",
      vocabulary: "...",
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 2 • My Family"]),
          },
        ],
      } satisfies ListProps,
    },
    unitThree: {
      lessonObjective: "...",
      grammar: "...",
      vocabulary: "...",
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 3 • "]),
          },
        ],
      } satisfies ListProps,
    },

    task: {
      type: "checkbox",
      items: [
        {
          value: text(["Unit 1 • Hello!"]),
        },
        {
          value: text(["Unit 2 • My Family"]),
        },
        {
          value: text(["Unit 3 • My House"]),
        },
        {
          value: text(["Unit 4 • Daily Routine"]),
        },
        {
          value: text(["Unit 5 • My Week"]),
        },
        {
          value: text(["Unit 6 • Food and Drinks"]),
        },
        {
          value: text(["Unit 7 • Shopping"]),
        },
        {
          value: text(["Unit 8 • Around Town"]),
        },
        {
          value: text(["Unit 9 • What Are You Doing?"]),
        },
        {
          value: text(["Unit 10 • Abilities"]),
        },
      ],
    } satisfies ListProps,
  },
  elementary: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["Unit 1 • Last Weekend"]),
        },
        {
          value: text(["Unit 2 • Travel Plans"]),
        },
        {
          value: text(["Unit 3 • My House"]),
        },
        {
          value: text(["Unit 4 • Daily Routine"]),
        },
        {
          value: text(["Unit 5 • My Week"]),
        },
        {
          value: text(["Unit 6 • Food and Drinks"]),
        },
        {
          value: text(["Unit 7 • Shopping"]),
        },
        {
          value: text(["Unit 8 • Around Town"]),
        },
        {
          value: text(["Unit 9 • What Are You Doing?"]),
        },
        {
          value: text(["Unit 10 • Abilities"]),
        },
      ],
    } satisfies ListProps,
  },
  intermediate: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["Unit 1 • Life Experiences"]),
        },
        {
          value: text(["Unit 2 • Storytelling"]),
        },
        {
          value: text(["Unit 3 • Making Plans"]),
        },
        {
          value: text(["Unit 4 • What If?"]),
        },
        {
          value: text(["Unit 5 • Green Planet"]),
        },
        {
          value: text(["Unit 6 • Technology Today"]),
        },
        {
          value: text(["Unit 7 • News Report"]),
        },
        {
          value: text(["Unit 8 • What Did They Say?"]),
        },
        {
          value: text(["Unit 9 • Career Path"]),
        },
        {
          value: text(["Unit 10 • Relation ships"]),
        },
      ],
    } satisfies ListProps,
  },
  upperIntermediate: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["Unit 1 • Dream Scenarios"]),
        },
        {
          value: text(["Unit 2 • Regrets"]),
        },
        {
          value: text(["Unit 3 • Business Communication"]),
        },
        {
          value: text(["Unit 4 • Leadership"]),
        },
        {
          value: text(["Unit 5 • Innovation"]),
        },
        {
          value: text(["Unit 6 • Global Issues"]),
        },
        {
          value: text(["Unit 7 • Debate Club"]),
        },
        {
          value: text(["Unit 8 • Media and Marketing"]),
        },
        {
          value: text(["Unit 9 • Native-Like English"]),
        },
        {
          value: text(["Unit 10 • Natural English"]),
        },
      ],
    } satisfies ListProps,
  },
};
