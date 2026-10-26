export type SongLine = {
  english: string;
  portuguese: string;
};

export type Song = {
  slug: string;
  title: string;
  album: string;
  year: number;
  youtubeUrl: string;
  lines: SongLine[];
};

export type Band = {
  slug: string;
  name: string;
  description?: string;
  songs: Song[];
};
