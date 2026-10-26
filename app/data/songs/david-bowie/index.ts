import type { Band } from "@/data/songs/types";
import { theRiseAndFallOfZiggyStardustSongs } from "./the-rise-and-fall-of-ziggy-stardust-and-the-spiders-from-mars";

export const davidBowie: Band = {
  slug: "david-bowie",
  name: "David Bowie",
  description: "English singer-songwriter and influential rock artist.",
  songs: [...theRiseAndFallOfZiggyStardustSongs],
};
