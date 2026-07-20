import type { ListProps } from "@/components/content/List";

import { thimbleweedPark } from "./lucas-arts/thimbleweed-park";
// import { kingsQuest } from "./sierra/kings-quest";

type GameSection = {
  id: string;
  title: string;
  instruction?: string;
  items: NonNullable<ListProps["items"]>;
};

export type GameData = {
  whiteboard: {
    title: string;
    subtitle?: string;
    descriptions?: string[];
    date?: string;
  };
  sections: GameSection[];
};

export const games: Record<
  string,
  Record<string, GameData>
> = {
  "lucas-arts": {
    "thimbleweed-park": thimbleweedPark,
  },

  sierra: {
    // "kings-quest": kingsQuest,
  },
};

export function getGameSlug({
  developer,
  slug,
}: {
  developer?: string;
  slug?: string;
}) {
  if (!developer || !slug) return undefined;

  return games[developer]?.[slug];
}