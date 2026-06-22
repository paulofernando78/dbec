import type { ListProps } from "@/components/content/List";

import { text } from "@/helpers/content";

export const lessons = {
  whatCausesConstipation: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["What causes constipation?"]),
        },
      ],
    } satisfies ListProps,
    lessonObjective: "Learn what causes constipation and how the digestive system moves food through the body.",
    date: "..."
  },
  whenWillNextIceAgeHappen: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["When will the nExt ice age happen?"]),
        },
      ],
    } satisfies ListProps,
    lessonObjective: "Explore how Earth's orbit, climate cycles, and human activity may influence the next ice age.",
    date: "..."
  },
  ancientOriginsBeer: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["The ancient origins of beer"]),
        },
      ],
    } satisfies ListProps,
    lessonObjective: "Discover the ancient history of beer and how one of the world's oldest drinks began.",
    date: "..."
  },
  howMemoryWorks: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["How Computer Memory Works"]),
        },
      ],
    } satisfies ListProps,
    lessonObjective: "In many ways, our memories make us who we are, helping us remember our past, learn and retain skills, and plan for the future. And for the computers that often act as extensions of ourselves, memory plays much the same role. Kanawat Senanan explains how computer memory works.",
    date: "..."
  },
};
