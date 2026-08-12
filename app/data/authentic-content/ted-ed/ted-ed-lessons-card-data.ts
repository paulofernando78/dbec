export const authenticContentTedEdLessonsCardData = {
  // Month 00, Year
  // ...: {
  //   href: "/authentic-content/ted-ed/",
  //   label: "...",
  //   objective: "...",
  //   usefulLanguage: "...",
  //   vocabulary: "...",
  //   skills: "...",
  //   finalTask: "...",
  //   date: "...",
  //   duration: "00:00",
  // },
  // May 7, 2018
  whatCausesConstipation: {
    href: "/authentic-content/ted-ed/how-food-moves-through-your-body",
    label: "How Food Moves Through Your Body",
    description: "How food moves through your body.",
    objective:
      "Reconstruct a scientific cause-and-effect explanation and evaluate its recommendations.",
    usefulLanguage:
      "This occurs when…; As a result…; The most strongly supported recommendation is…",
    vocabulary: "Digestion, constipation, causes, remedies",
    skills: "Authentic listening, note-taking, and critical discussion",
    finalTask:
      "Explain the process and rank the proposed remedies by evidence.",
    date: "May 7, 2018",
    publishedAt: "2018-05-07",
    duration: "03:33",
  },
  // May 10, 2018
  whenWillTheNextIceAgeHappen: {
    href: "/authentic-content/ted-ed/earths-climate-cycle",
    label: "Earth’s Climate Cycle",
    description: "Earth’s climate cycle.",
    objective:
      "Summarize interacting causes, distinguish natural cycles from human influence, and evaluate evidence.",
    usefulLanguage:
      "The cycle is driven by…; This differs from…; The evidence indicates…",
    vocabulary: "Climate cycles, glaciation, orbit, human influence",
    skills: "Authentic listening, synthesis, and critical discussion",
    finalTask:
      "Brief a partner on the causes and implications of the climate cycle.",
    date: "May 10, 2018",
    publishedAt: "2018-05-10",
    duration: "05:07",
  },
  // Feb 16, 2023
  howToManageEmotions: {
    href: "/authentic-content/ted-ed/how-we-react-differently",
    label: "How We React Differently",
    description: "Why we react differently.",
    objective:
      "Distinguish emotion-regulation strategies and evaluate their usefulness in context.",
    usefulLanguage:
      "One strategy involves…; This may be effective when…; A limitation is…",
    vocabulary: "Emotions, reactions, regulation, coping strategies",
    skills: "Authentic listening, comparison, and evaluative discussion",
    finalTask: "Recommend and justify a strategy for a real-life scenario.",
    date: "Feb 16, 2023",
    publishedAt: "2023-02-16",
    duration: "4:50",
  },
  // May 30, 2024
  howDidAncientCivilizationsMakeIceCream: {
    href: "/authentic-content/ted-ed/the-history-of-a-popular-ice-treat",
    label: "The History of a Popular Ice Treat",
    description: "The history of a popular ice treat.",
    objective:
      "Understand the historical evolution of cold treats and practice listening for specific facts, dates, and historical details.",
    usefulLanguage:
      "Passive voice (e.g., 'were enjoyed by', 'was patented by'), historical time expressions, and cause-and-effect connectors.",
    vocabulary:
      "Freezer, sherbet, recipe, settlers, patent, trade, vendor, soda fountain, saloon, refrigeration.",
    skills:
      "Listening for gist and specific detail, reading comprehension, vocabulary matching, and sentence unscrambling.",
    finalTask:
      "Discuss how historical, cultural, and technological changes turned an elite luxury into an everyday food item.",
    date: "Mar 24, 2026",
    publishedAt: "2026-03-24",
    duration: "04:54",
  },
  // Mar 24, 2026
  howDidAncientCivilizationsBrewBeer: {
    href: "/authentic-content/ted-ed/a-drink-with-a-long-history",
    label: "A Drink With a Long History",
    description: "A drink with a long history.",
    objective:
      "Reconstruct a historical process and explain how scientific knowledge changed it.",
    usefulLanguage:
      "Initially…; This led to…; Once people discovered…; Production became…",
    vocabulary: "Brewing, fermentation, ingredients, production",
    skills: "Authentic listening, sequencing, and explanatory speaking",
    finalTask:
      "Present a concise timeline of brewing’s scientific development.",
    date: "Mar 24, 2026",
    publishedAt: "2026-03-24",
    duration: "06:24",
  },
  // Mar 2016
  theBodysHiddenBalance: {
    href: "/authentic-content/ted-ed/the-bodys-hidden-balance",
    label: "The Body’s Hidden Balance",
    description: "The body’s hidden balance.",
    objective:
      "Explain how the body regulates fluid, distinguish deficiency from excess, and evaluate generalized health advice.",
    usefulLanguage:
      "The body compensates by…; This may lead to…; Requirements vary according to…; The evidence suggests…",
    vocabulary:
      "Moisture, joints, spinal cord, kidneys, dehydration, overhydration, electrolytes, intake",
    skills:
      "Prediction, authentic listening for gist and detail, scientific explanation, and critical discussion",
    finalTask:
      "Create and justify an evidence-based hydration recommendation for a specific person and context.",
    date: "Mar 2016",
    publishedAt: "2016-03-01",
    duration: "04:51",
  },
};

export const authenticContentTedEdLessons = Object.values(
  authenticContentTedEdLessonsCardData,
)
  .slice()
  .sort((firstLesson, secondLesson) =>
    firstLesson.publishedAt.localeCompare(secondLesson.publishedAt),
  );
