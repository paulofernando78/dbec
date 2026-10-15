export type Lesson = {
  title: string;
  description: string;
};

export type Unit = {
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Level = {
  slug: string;
  code: string;
  name: string;
  subtitle: string;
  description: string;
  units: Unit[];
};
