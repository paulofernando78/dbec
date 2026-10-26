import type { Band } from "@/data/songs/types";
import { animalsSongs } from "./animals";
import { theDarkSideOfTheMoonSongs } from "./the-dark-side-of-the-moon";
import { theWallSongs } from "./the-wall";

export const pinkFloyd: Band = {
  slug: "pink-floyd",
  name: "Pink Floyd",
  description: "English progressive rock band formed in London.",
  songs: [...animalsSongs, ...theDarkSideOfTheMoonSongs, ...theWallSongs],
};
