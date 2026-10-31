export type ListeningTitle = {
  slug: string;
  title: string;
  duration: string;
};

export type ListeningLevel = {
  slug: string;
  title: string;
  exam?: string;
  wordCount: string;
  titles: readonly ListeningTitle[];
};

export const listeningLevels: readonly ListeningLevel[] = [
  {
    slug: "starter-beginner",
    title: "Starter / Beginner",
    wordCount: "200 headwords",
    titles: [
      { slug: "a-new-zealand-adventure", title: "A New Zealand Adventure", duration: "08:05" },
      { slug: "flying-home", title: "Flying Home", duration: "10:13" },
      { slug: "marcel-and-the-white-star", title: "Marcel and the White Star", duration: "09:54" },
      { slug: "newspaper-chase", title: "Newspaper Chase", duration: "08:18" },
      { slug: "simon-and-the-spy", title: "Simon and the Spy", duration: "11:21" },
      { slug: "the-fireboy", title: "The Fireboy", duration: "12:34" },
      { slug: "the-last-photo", title: "The Last Photo", duration: "08:48" },
      { slug: "the-leopard-and-the-lighthouse", title: "The Leopard and the Lighthouse", duration: "10:30" },
      { slug: "the-pearl-girl", title: "The Pearl Girl", duration: "11:47" },
      { slug: "who-wants-to-be-a-star", title: "Who Wants to Be a Star", duration: "10:09" },
    ],
  },
  { slug: "beginner-elementary-a1", title: "Beginner / Elementary (A1)", wordCount: "300 headwords", titles: [] },
  { slug: "elementary-a2", title: "Elementary (A2)", exam: "KET", wordCount: "600 headwords", titles: [] },
  { slug: "lower-intermediate-a2-b1", title: "Lower-intermediate (A2–B1)", exam: "PET", wordCount: "1200 headwords", titles: [] },
  { slug: "intermediate-b1", title: "Intermediate (B1)", exam: "PET", wordCount: "1700 headwords", titles: [] },
  { slug: "upper-intermediate-b2", title: "Upper-intermediate (B2)", exam: "FCE", wordCount: "2300 headwords", titles: [] },
  { slug: "advanced-c1", title: "Advanced (C1)", exam: "CAE", wordCount: "3000 words", titles: [] },
];
