export type ListeningTitle = {
  slug: string;
  title: string;
  description: string;
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
    title: "Starter",
    wordCount: "200 headwords",
    titles: [
      { slug: "a-new-zealand-adventure", title: "A New Zealand Adventure", description: "Two friends search New Zealand for the owner of a lost phone.", duration: "08:05" },
      { slug: "flying-home", title: "Flying Home", description: "A bird escapes from New York and flies home to Brazil.", duration: "10:13" },
      { slug: "marcel-and-the-white-star", title: "Marcel and the White Star", description: "A detective mouse follows two thieves across Paris.", duration: "09:54" },
      { slug: "newspaper-chase", title: "Newspaper Chase", description: "A thief hides a painting inside the wrong newspaper.", duration: "08:18" },
      { slug: "simon-and-the-spy", title: "Simon and the Spy", description: "Simon accidentally takes a spy's secret letter.", duration: "11:21" },
      { slug: "the-fireboy", title: "The Fireboy", description: "A poor boy makes a gold necklace for Queen Cleopatra.", duration: "12:34" },
      { slug: "the-last-photo", title: "The Last Photo", description: "An accidental photo helps the police find a wanted man.", duration: "08:48" },
      { slug: "the-leopard-and-the-lighthouse", title: "The Leopard and the Lighthouse", description: "The people of Sindi try to rescue a leopard from a lighthouse.", duration: "10:30" },
      { slug: "the-pearl-girl", title: "The Pearl Girl", description: "A young visitor witnesses the theft of a famous painting.", duration: "11:47" },
      { slug: "who-wants-to-be-a-star", title: "Who Wants to Be a Star?", description: "A young star runs away to find a quieter, happier life.", duration: "10:09" },
    ],
  },
  { slug: "beginner-elementary-a1", title: "Beginner", wordCount: "300 headwords", titles: [] },
  { slug: "elementary-a2", title: "Elementary", exam: "KET", wordCount: "600 headwords", titles: [] },
  { slug: "lower-intermediate-a2-b1", title: "Lower-intermediate", exam: "PET", wordCount: "1200 headwords", titles: [] },
  { slug: "intermediate-b1", title: "Intermediate", exam: "PET", wordCount: "1700 headwords", titles: [] },
  { slug: "upper-intermediate-b2", title: "Upper-intermediate", exam: "FCE", wordCount: "2300 headwords", titles: [] },
  { slug: "advanced-c1", title: "Advanced", exam: "CAE", wordCount: "3000 words", titles: [] },
];
