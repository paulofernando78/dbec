import { newZealandAdventure } from "./a-new-zealand-adventure";
import { flyingHome } from "./flying-home";
import { marcelAndTheWhiteStar } from "./marcel-and-the-white-star";

export const audiobooks = {
  [newZealandAdventure.slug]: newZealandAdventure,
  [flyingHome.slug]: flyingHome,
  [marcelAndTheWhiteStar.slug]: marcelAndTheWhiteStar,
};

export type AudiobookSlug = keyof typeof audiobooks;
