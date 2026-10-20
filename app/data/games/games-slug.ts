import type { ListProps } from "@/components/content/List";

import { thimbleweedPark } from "./lucas-arts/thimbleweed-park";
import { monkeyIsland } from "./lucas-arts/monkey-island";
import { kingsQuestI } from "./sierra/kings-quest-i";
import { kingsQuestII } from "./sierra/kings-quest-ii";
import { kingsQuestIII } from "./sierra/kings-quest-iii";
import {
  kingsQuestIV,
  kingsQuestV,
  policeQuestI,
  policeQuestII,
  policeQuestIII,
  spaceQuestI,
  spaceQuestII,
  spaceQuestIII,
  spaceQuestIV,
  spaceQuestV,
} from "./sierra/extended-walkthroughs";
import {
  curseOfMonkeyIsland,
  fateOfAtlantis,
  fullThrottle,
  indianaJonesLastCrusade,
  monkeyIsland2,
} from "./lucas-arts/extended-walkthroughs";

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
    "indiana-jones-last-crusade": indianaJonesLastCrusade,
    "indiana-jones-fate-of-atlantis": fateOfAtlantis,
    "monkey-island-2": monkeyIsland2,
    "curse-of-monkey-island": curseOfMonkeyIsland,
    "full-throttle": fullThrottle,
  },

  sierra: {
    "kings-quest-i": kingsQuestI,
    "kings-quest-ii": kingsQuestII,
    "kings-quest-iii": kingsQuestIII,
    "kings-quest-iv": kingsQuestIV,
    "kings-quest-v": kingsQuestV,
    "police-quest-i": policeQuestI,
    "police-quest-ii": policeQuestII,
    "police-quest-iii": policeQuestIII,
    "space-quest-i": spaceQuestI,
    "space-quest-ii": spaceQuestII,
    "space-quest-iii": spaceQuestIII,
    "space-quest-iv": spaceQuestIV,
    "space-quest-v": spaceQuestV,
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
