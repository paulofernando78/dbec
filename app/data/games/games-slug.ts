import type { ListProps } from "@/components/content/List";

import { thimbleweedPark } from "./lucas-arts/thimbleweed-park";
import { monkeyIsland } from "./lucas-arts/monkey-island";
import { kingsQuestI } from "./sierra/kings-quest-i";
import { kingsQuestII } from "./sierra/kings-quest-ii";
import { kingsQuestIII } from "./sierra/kings-quest-iii";

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

export const games: Record<string, Record<string, GameData>> = {
  "lucas-arts": {
    "monkey-island": monkeyIsland,
    "thimbleweed-park": thimbleweedPark,
  },

  sierra: {
    "kings-quest-i": kingsQuestI,
    "kings-quest-ii": kingsQuestII,
    "kings-quest-iii": kingsQuestIII,
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
