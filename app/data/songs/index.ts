import { davidBowie } from "./david-bowie";
import { pinkFloyd } from "./pink-floyd";
import type { Band } from "./types";

export type { Band, Song, SongLine } from "./types";

export const bands: Band[] = [pinkFloyd, davidBowie];

export const findBand = (slug?: string) =>
  bands.find((band) => band.slug === slug);

export const findSong = (band: Band, slug?: string) =>
  band.songs.find((song) => song.slug === slug);
