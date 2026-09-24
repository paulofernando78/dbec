import type { LearningLesson } from "@/data/learning/types";

type LessonDefinition = {
  description: string;
  model: string;
  objective: string;
  slug: string;
  title: string;
  vocabulary: string[];
};

const definitions: LessonDefinition[] = [
  {
    slug: "asking-about-the-past",
    title: "Asking About the Past",
    description: "Ask people about past events and situations.",
    objective:
      "By the end of this lesson, students will be able to use past-tense questions with did and was/were to ask people about their past.",
    vocabulary: ["did", "was", "were", "when", "where", "last", "ago"],
    model: "Where were you born, and where did you grow up?",
  },
  {
    slug: "when-i-was-younger",
    title: "When I Was Younger",
    description: "Share memories and habits from childhood.",
    objective:
      "By the end of this lesson, students will be able to discuss their childhoods using used to.",
    vocabulary: [
      "used to",
      "childhood",
      "play",
      "collect",
      "neighborhood",
      "school",
    ],
    model: "I used to play outside with my friends after school.",
  },
  {
    slug: "city-challenges",
    title: "City Challenges",
    description: "Discuss urban problems, quantities, and public services.",
    objective:
      "By the end of this lesson, students will be able to discuss city issues and public services using expressions of quantity and compound nouns.",
    vocabulary: [
      "traffic jam",
      "public transportation",
      "garbage collection",
      "too much",
      "enough",
      "a few",
    ],
    model: "There is too much traffic and not enough public transportation.",
  },
  {
    slug: "could-you-tell-me",
    title: "Could You Tell Me?",
    description: "Ask for information politely using indirect questions.",
    objective:
      "By the end of this lesson, students will be able to ask indirect questions.",
    vocabulary: [
      "could you tell me",
      "do you know",
      "where",
      "when",
      "how much",
      "information",
    ],
    model: "Could you tell me where the nearest bus stop is?",
  },
  {
    slug: "finding-the-right-home",
    title: "Finding the Right Home",
    description: "Compare homes and decide which one is suitable.",
    objective:
      "By the end of this lesson, students will be able to evaluate and compare houses and apartments using too and comparatives.",
    vocabulary: [
      "spacious",
      "affordable",
      "convenient",
      "noisy",
      "too",
      "more",
    ],
    model: "The apartment is cheaper, but it is too far from downtown.",
  },
  {
    slug: "i-wish",
    title: "I Wish Things Were Different",
    description: "Talk about desired changes in life.",
    objective:
      "By the end of this lesson, students will be able to discuss changes in their lives using I wish.",
    vocabulary: [
      "I wish",
      "change",
      "free time",
      "healthier",
      "closer",
      "different",
    ],
    model: "I wish I had more free time for my family.",
  },
  {
    slug: "life-experiences",
    title: "Life Experiences",
    description: "Connect experiences with specific past events.",
    objective:
      "By the end of this lesson, students will be able to describe personal experiences using the past tense and the present perfect.",
    vocabulary: ["ever", "never", "already", "yet", "experience", "last year"],
    model: "I have visited Chile, and I went there again last year.",
  },
  {
    slug: "recipe-steps",
    title: "Recipe Steps",
    description: "Explain how to prepare food in a clear sequence.",
    objective:
      "By the end of this lesson, students will be able to describe recipes using sequence adverbs.",
    vocabulary: [
      "first",
      "next",
      "then",
      "after that",
      "finally",
      "ingredients",
    ],
    model: "First, chop the vegetables; then, add them to the pan.",
  },
  {
    slug: "future-plans",
    title: "Future Plans",
    description: "Discuss intentions, decisions, and predictions.",
    objective:
      "By the end of this lesson, students will be able to describe plans using the future with be going to and will.",
    vocabulary: ["going to", "will", "plan", "decide", "probably", "next"],
    model: "We are going to travel in July, and I think it will be amazing.",
  },
  {
    slug: "smart-travel",
    title: "Smart Travel",
    description: "Recommend preparations, activities, and precautions.",
    objective:
      "By the end of this lesson, students will be able to give travel advice.",
    vocabulary: ["should", "shouldn't", "ought to", "pack", "book", "avoid"],
    model:
      "You should book your hotel early and avoid carrying too much luggage.",
  },
  {
    slug: "phrasal-verb-requests",
    title: "Could You Turn It Down?",
    description: "Make everyday requests with two-part verbs.",
    objective:
      "By the end of this lesson, students will be able to use two-part verbs to make and respond to requests.",
    vocabulary: [
      "turn down",
      "pick up",
      "put away",
      "turn on",
      "take off",
      "sure",
    ],
    model: "Could you turn the music down, please?",
  },
  {
    slug: "would-you-mind",
    title: "Would You Mind?",
    description: "Make and answer polite requests.",
    objective:
      "By the end of this lesson, students will be able to make and respond to requests using modals and Would you mind?.",
    vocabulary: [
      "would you mind",
      "could",
      "can",
      "not at all",
      "sorry",
      "request",
    ],
    model: "Would you mind closing the window?",
  },
  {
    slug: "what-is-it-for",
    title: "What Is It For?",
    description: "Explain what objects and services are used for.",
    objective:
      "By the end of this lesson, students will be able to use infinitives and gerunds to describe uses and purposes.",
    vocabulary: [
      "used for",
      "used to",
      "purpose",
      "device",
      "tool",
      "application",
    ],
    model: "A tablet is used for reading, working, and watching videos.",
  },
  {
    slug: "helpful-suggestions",
    title: "Here's an Idea",
    description: "Offer clear suggestions and practical solutions.",
    objective:
      "By the end of this lesson, students will be able to use imperatives and infinitives to give suggestions.",
    vocabulary: [
      "try",
      "remember to",
      "be sure to",
      "don't forget to",
      "suggestion",
      "solution",
    ],
    model: "Try restarting the device, and remember to save your work.",
  },
  {
    slug: "special-days",
    title: "Special Days",
    description: "Describe celebrations and when they take place.",
    objective:
      "By the end of this lesson, students will be able to describe celebrations and annual events using relative clauses of time.",
    vocabulary: [
      "when",
      "celebration",
      "festival",
      "anniversary",
      "annual",
      "tradition",
    ],
    model: "New Year's Eve is a night when people celebrate new beginnings.",
  },
  {
    slug: "customs-and-traditions",
    title: "Customs and Traditions",
    description: "Explain what people do during cultural occasions.",
    objective:
      "By the end of this lesson, students will be able to describe customs using adverbial clauses of time.",
    vocabulary: [
      "when",
      "before",
      "after",
      "as soon as",
      "custom",
      "tradition",
    ],
    model: "Before the celebration begins, families prepare a special meal.",
  },
  {
    slug: "then-now-and-next",
    title: "Then, Now, and Next",
    description: "Connect past events, present situations, and future plans.",
    objective:
      "By the end of this lesson, students will be able to use the past, present, and future tenses.",
    vocabulary: ["before", "now", "later", "used to", "currently", "will"],
    model:
      "I studied design, I work in marketing now, and I will start a course next year.",
  },
  {
    slug: "what-if",
    title: "What If?",
    description: "Discuss likely actions and consequences.",
    objective:
      "By the end of this lesson, students will be able to discuss consequences using conditional sentences with if clauses.",
    vocabulary: ["if", "unless", "result", "consequence", "will", "might"],
    model: "If we improve public transportation, fewer people will drive.",
  },
  {
    slug: "skills-at-work",
    title: "Skills at Work",
    description: "Discuss abilities and professional strengths.",
    objective:
      "By the end of this lesson, students will be able to discuss job skills using gerunds and short responses.",
    vocabulary: [
      "organizing",
      "solving",
      "communicating",
      "so do I",
      "neither do I",
      "skills",
    ],
    model: "I enjoy solving problems, and so does my colleague.",
  },
  {
    slug: "the-right-job",
    title: "The Right Job",
    description: "Explain job preferences and motivations.",
    objective:
      "By the end of this lesson, students will be able to discuss the kinds of jobs they want and don't want using clauses with because.",
    vocabulary: [
      "career",
      "salary",
      "flexible",
      "rewarding",
      "stressful",
      "because",
    ],
    model: "I want a creative job because I enjoy developing new ideas.",
  },
  {
    slug: "built-by-genius",
    title: "Built by Genius",
    description: "Describe famous creations and their creators.",
    objective:
      "By the end of this lesson, students will be able to discuss famous landmarks, monuments, and works of art using the passive with by in the simple past.",
    vocabulary: ["built", "designed", "painted", "created", "monument", "by"],
    model: "The Eiffel Tower was designed by Gustave Eiffel.",
  },
  {
    slug: "countries-in-focus",
    title: "Countries in Focus",
    description: "Present important facts about countries.",
    objective:
      "By the end of this lesson, students will be able to discuss key features of countries around the world using the passive without by in the simple present.",
    vocabulary: [
      "is spoken",
      "is grown",
      "is located",
      "is known",
      "currency",
      "region",
    ],
    model:
      "Portuguese is spoken in Brazil, and coffee is grown in many regions.",
  },
  {
    slug: "when-it-happened",
    title: "When It Happened",
    description: "Tell stories about interrupted events and achievements.",
    objective:
      "By the end of this lesson, students will be able to discuss events, accidents, and accomplishments in their lives using the past continuous and the simple past.",
    vocabulary: [
      "while",
      "when",
      "happened",
      "accident",
      "achievement",
      "suddenly",
    ],
    model: "I was driving home when I saw the accident.",
  },
  {
    slug: "what-have-you-been-doing",
    title: "What Have You Been Doing?",
    description: "Describe activities continuing over a recent period.",
    objective:
      "By the end of this lesson, students will be able to discuss events using the present perfect continuous.",
    vocabulary: ["have been", "since", "for", "lately", "recently", "all day"],
    model: "I have been studying for the exam all week.",
  },
  {
    slug: "worth-watching",
    title: "Worth Watching",
    description: "Give opinions about books, movies, and television.",
    objective:
      "By the end of this lesson, students will be able to discuss books, movies, and TV programs using participles as adjectives.",
    vocabulary: [
      "interesting",
      "interested",
      "exciting",
      "excited",
      "boring",
      "bored",
    ],
    model:
      "The documentary was fascinating, and I was surprised by the ending.",
  },
  {
    slug: "hollywood-stories",
    title: "Hollywood Stories",
    description: "Describe movies and notable people in entertainment.",
    objective:
      "By the end of this lesson, students will be able to discuss movies and famous Hollywood names using relative clauses.",
    vocabulary: ["who", "that", "which", "director", "actor", "award"],
    model: "She is the director who made the award-winning film.",
  },
  {
    slug: "what-does-that-mean",
    title: "What Does That Gesture Mean?",
    description: "Interpret gestures with appropriate degrees of certainty.",
    objective:
      "By the end of this lesson, students will be able to explain gestures using modals and adverbs.",
    vocabulary: ["might", "may", "must", "probably", "perhaps", "gesture"],
    model:
      "That gesture might mean hello, but it probably depends on the culture.",
  },
  {
    slug: "signs-and-rules",
    title: "Signs and Rules",
    description: "Explain what signs allow, require, and prohibit.",
    objective:
      "By the end of this lesson, students will be able to discuss signs using terms of permission, obligation, and prohibition.",
    vocabulary: ["can", "must", "have to", "mustn't", "allowed", "prohibited"],
    model: "Visitors must wear a badge, and they mustn't enter this area.",
  },
  {
    slug: "imaginary-situations",
    title: "What Would You Do?",
    description: "Explore imaginary present and future situations.",
    objective:
      "By the end of this lesson, students will be able to discuss imaginary situations using unreal conditional sentences with if clauses.",
    vocabulary: ["if", "would", "could", "imaginary", "situation", "choice"],
    model: "If I had more free time, I would learn another language.",
  },
  {
    slug: "past-predicaments",
    title: "If Only I Had Known",
    description: "Reflect on past decisions and alternative outcomes.",
    objective:
      "By the end of this lesson, students will be able to discuss predicaments using the past modals would have and should have.",
    vocabulary: [
      "would have",
      "should have",
      "could have",
      "regret",
      "decision",
      "outcome",
    ],
    model: "I should have checked the schedule before I left home.",
  },
  {
    slug: "reported-excuses-and-requests",
    title: "Excuses and Requests",
    description: "Report what people asked for and why they could not act.",
    objective:
      "By the end of this lesson, students will be able to discuss excuses and requests using reported speech.",
    vocabulary: ["asked", "told", "said", "explained", "excuse", "request"],
    model: "She asked me to wait and explained that she was running late.",
  },
  {
    slug: "what-did-they-say",
    title: "What Did They Say?",
    description: "Report statements made by other people.",
    objective:
      "By the end of this lesson, students will be able to use reported speech to discuss statements that other people made.",
    vocabulary: [
      "said that",
      "told me",
      "reported",
      "mentioned",
      "statement",
      "message",
    ],
    model: "He said that he was tired and that he needed a break.",
  },
];

const makeLesson = (
  definition: LessonDefinition,
  index: number,
): LearningLesson => {
  const unit = Math.floor(index / 2) + 1;
  const order = (index % 2) + 1;
  const id = `a2-b1-u${String(unit).padStart(2, "0")}-l${String(order).padStart(2, "0")}`;

  return {
    ...definition,
    id,
    level: "a2-b1",
    unitId: `unit-${unit}`,
    order,
    estimatedMinutes: 10,
    xpReward: 30,
    exercises: [
      {
        id: `${id}-e01`,
        type: "word-order",
        instruction: "Put the words in order",
        words: definition.model
          .replace(/[,.?;]/g, "")
          .split(/\s+/)
          .reverse(),
        correctAnswer: definition.model.replace(/[,.?;]/g, ""),
        explanation: `Model answer: ${definition.model}`,
      },
    ],
  };
};

export const preIntermediateLessons = definitions.map(makeLesson);

const unitDetails = [
  ["Looking Back", "Ask about the past and share childhood memories."],
  ["City Life", "Discuss city challenges and ask for information."],
  ["Homes and Changes", "Compare homes and talk about desired changes."],
  ["Experiences and Food", "Share experiences and explain recipes."],
  ["Plans and Travel", "Discuss future plans and give travel advice."],
  ["Everyday Requests", "Make and respond to requests politely."],
  ["Uses and Suggestions", "Explain purposes and offer solutions."],
  ["Celebrations and Customs", "Describe special events and traditions."],
  ["Time and Consequences", "Connect time frames and discuss consequences."],
  ["Working Life", "Discuss professional skills and job preferences."],
  ["Our World", "Describe landmarks and countries using the passive."],
  ["Events and Activities", "Narrate events and ongoing experiences."],
  ["Entertainment", "Discuss media and people in the film industry."],
  ["Communication and Rules", "Interpret gestures and explain signs."],
  ["Imaginary Worlds", "Explore hypothetical situations and past regrets."],
  ["Reporting What People Say", "Report statements, excuses, and requests."],
] as const;

export const preIntermediateUnits = unitDetails.map(([title, description], index) => ({
  id: `unit-${index + 1}`,
  level: "a2-b1",
  order: index + 1,
  title,
  description,
  lessons: preIntermediateLessons.slice(index * 2, index * 2 + 2),
}));
