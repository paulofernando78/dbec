import type { ListProps } from "@/components/content/List";

import { text } from "@/helpers/content";

export const lessons = {
  ismalKoneBreaksLeg: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text([""]),
        },
      ],
    } satisfies ListProps,
    lessonObjective:
      "",
    date: "June 18, 2026",
    duration: "...",
  },
};
