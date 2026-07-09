import type { ListProps } from "@/components/content/List";

import {
  text,
} from "@/helpers/content";

export const lessons = {
  games: {
    monkeyIsland: {
      task: {
        type: "checkbox",
        items: [
          {
            content: text(["The Secret of Monkey Island"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "",
    },
    thimbleWeedPark: {
      task: {
        type: "checkbox",
        items: [
          {
            content: text(["Thimbleweed Park"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "In Thimbleweed Park, a dead body is the least of your problems. Switch between five playable characters to uncover the surreal secrets of this strange town in a modern mystery adventure game from the creators of Monkey Island and Maniac Mansion. The deeper you go, the weirder it gets.",
        date: "Mar 30, 2017"
    },
  },
};
