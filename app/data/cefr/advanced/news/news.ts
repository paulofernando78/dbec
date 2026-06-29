import type { ListProps } from "@/components/content/List";

import { text } from "@/helpers/content";

export const lessons = {
  ismalKoneBreaksLeg: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["A Soccer Match Dramatic Moment"]),
        },
      ],
    } satisfies ListProps,
    lessonObjective:
      "Canada's Ismael Kone suffered a serious leg injury in today's World Cup match vs Qatar.",
    date: "June 18, 2026",
    duration: "...",
  },
};
