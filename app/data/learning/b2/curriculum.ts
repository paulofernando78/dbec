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
    slug: "ideal-friends-and-partners",
    title: "The People We Connect With",
    description: "Describe the qualities of ideal friends and partners.",
    objective:
      "By the end of this lesson, students will be better able to discuss ideal friends and partners using relative pronouns who and that.",
    vocabulary: [
      "supportive",
      "reliable",
      "honest",
      "who",
      "that",
      "get along",
    ],
    model: "An ideal friend is someone who listens and who can be trusted.",
  },
  {
    slug: "likes-and-dislikes",
    title: "Things I Appreciate",
    description: "Explain preferences and reactions in everyday situations.",
    objective:
      "By the end of this lesson, students will be better able to discuss things they like and don't like using clauses with it and adverbial clauses with when.",
    vocabulary: [
      "I like it when",
      "I hate it when",
      "appreciate",
      "bother",
      "enjoy",
      "prefer",
    ],
    model: "I appreciate it when people arrive on time.",
  },
  {
    slug: "opinions-about-jobs",
    title: "What Makes a Good Job?",
    description: "Evaluate work activities and responsibilities.",
    objective:
      "By the end of this lesson, students will be able to discuss their opinions of jobs using gerund phrases as subjects and as objects.",
    vocabulary: [
      "working remotely",
      "meeting deadlines",
      "managing",
      "enjoy",
      "avoid",
      "involve",
    ],
    model: "Working with a supportive team makes a job more rewarding.",
  },
  {
    slug: "comparing-jobs",
    title: "Comparing Careers",
    description: "Compare careers, conditions, and responsibilities.",
    objective:
      "By the end of this lesson, students will be able to discuss jobs using comparisons with adjectives, adverbs, nouns, and past participles.",
    vocabulary: [
      "more demanding",
      "better paid",
      "less stress",
      "as much",
      "more efficiently",
      "qualified",
    ],
    model:
      "This position is better paid but much more demanding than my previous job.",
  },
  {
    slug: "favors-borrowing-and-lending",
    title: "Could You Do Me a Favor?",
    description: "Negotiate favors and the use of other people's belongings.",
    objective:
      "By the end of this lesson, students will be able to discuss favors, borrowing, and lending using modals, if clauses, and gerunds.",
    vocabulary: ["borrow", "lend", "would you mind", "could", "if", "return"],
    model: "Would you mind lending me your charger if you aren't using it?",
  },
  {
    slug: "indirect-messages",
    title: "Can You Tell Her...?",
    description: "Leave clear and polite messages for other people.",
    objective:
      "By the end of this lesson, students will be able to leave messages using indirect requests.",
    vocabulary: [
      "ask someone to",
      "tell someone to",
      "could you",
      "message",
      "call back",
      "remind",
    ],
    model: "Could you ask Daniel to call me when he gets back?",
  },
  {
    slug: "events-in-progress",
    title: "What Was Happening?",
    description: "Narrate past events and actions in progress.",
    objective:
      "By the end of this lesson, students will be able to describe past events using the simple past and past continuous.",
    vocabulary: [
      "while",
      "when",
      "suddenly",
      "was happening",
      "noticed",
      "interrupted",
    ],
    model: "I was walking home when the storm suddenly started.",
  },
  {
    slug: "earlier-past",
    title: "What Had Happened?",
    description: "Show the sequence of events in a story.",
    objective:
      "By the end of this lesson, students will be able to tell stories using the past perfect tense.",
    vocabulary: [
      "had already",
      "before",
      "after",
      "by the time",
      "realized",
      "discovered",
    ],
    model: "By the time we arrived, the concert had already started.",
  },
  {
    slug: "living-abroad",
    title: "Life Abroad",
    description: "Discuss the realities and benefits of living overseas.",
    objective:
      "By the end of this lesson, students will be able to discuss living abroad using noun phrases and relative clauses.",
    vocabulary: [
      "culture shock",
      "host country",
      "expatriate",
      "which",
      "who",
      "adjustment",
    ],
    model:
      "One major challenge for people who live abroad is adapting to local customs.",
  },
  {
    slug: "expectations-abroad",
    title: "What to Expect",
    description: "Describe expectations and possible situations abroad.",
    objective:
      "By the end of this lesson, students will be able to describe expectations using when and if clauses.",
    vocabulary: ["expect", "when", "if", "unless", "settle in", "adapt"],
    model:
      "When you move abroad, you may feel homesick if you don't build a community.",
  },
  {
    slug: "describing-problems",
    title: "What's the Problem?",
    description: "Identify damaged, missing, and malfunctioning items.",
    objective:
      "By the end of this lesson, students will be able to describe problems using nouns and past participles as adjectives.",
    vocabulary: ["damage", "leak", "crack", "broken", "blocked", "missing"],
    model: "The screen is cracked, and one of the buttons is missing.",
  },
  {
    slug: "what-needs-fixing",
    title: "It Needs Fixing",
    description: "Explain maintenance needs and recurring problems.",
    objective:
      "By the end of this lesson, students will be able to discuss what needs fixing using need with passive infinitives and gerunds, and keep with gerunds.",
    vocabulary: [
      "needs repairing",
      "needs to be replaced",
      "keeps leaking",
      "maintenance",
      "repair",
      "replace",
    ],
    model: "The roof needs to be repaired because it keeps leaking.",
  },
  {
    slug: "environmental-problems",
    title: "Our Changing Environment",
    description: "Discuss ongoing environmental damage and its causes.",
    objective:
      "By the end of this lesson, students will be able to discuss environmental problems using the present continuous and present perfect passive tenses and prepositions of cause.",
    vocabulary: [
      "is being destroyed",
      "has been polluted",
      "because of",
      "due to",
      "deforestation",
      "emissions",
    ],
    model: "The river has been polluted because of industrial waste.",
  },
  {
    slug: "taking-action",
    title: "Taking Action",
    description:
      "Propose practical responses to social and environmental problems.",
    objective:
      "By the end of this lesson, students will be able to discuss what they can do about problems using infinitive clauses and phrases.",
    vocabulary: [
      "in order to",
      "the best way to",
      "one solution is to",
      "reduce",
      "prevent",
      "protect",
    ],
    model: "One effective way to reduce waste is to reuse everyday products.",
  },
  {
    slug: "personal-preferences",
    title: "I'd Rather...",
    description: "Compare options and express personal preferences.",
    objective:
      "By the end of this lesson, students will be able to discuss personal preferences using would rather and would prefer.",
    vocabulary: [
      "would rather",
      "would prefer",
      "instead of",
      "option",
      "choice",
      "preferable",
    ],
    model:
      "I'd rather work from home, but I'd prefer to meet the team once a week.",
  },
  {
    slug: "ways-to-learn",
    title: "Learning Your Way",
    description: "Explain learning methods and useful personal qualities.",
    objective:
      "By the end of this lesson, students will be able to discuss ways to learn and personal qualities using by + gerund for manner.",
    vocabulary: [
      "by practicing",
      "by observing",
      "curious",
      "disciplined",
      "patient",
      "independent",
    ],
    model: "You can improve your fluency by practicing with different people.",
  },
  {
    slug: "professional-services",
    title: "Getting Things Done",
    description: "Discuss services performed by professionals.",
    objective:
      "By the end of this lesson, students will be able to discuss professional services using causatives.",
    vocabulary: [
      "have something done",
      "get something repaired",
      "service",
      "professional",
      "appointment",
      "install",
    ],
    model: "We're having the air conditioner serviced tomorrow.",
  },
  {
    slug: "phrasal-verbs-and-suggestions",
    title: "Coming Up With Solutions",
    description: "Use three-word phrasal verbs and suggest solutions.",
    objective:
      "By the end of this lesson, students will be able to use three-word phrasal verbs and make suggestions using a variety of structures.",
    vocabulary: [
      "come up with",
      "look forward to",
      "get along with",
      "why don't",
      "how about",
      "could",
    ],
    model: "Why don't we come up with a plan that everyone can agree on?",
  },
  {
    slug: "important-past-events",
    title: "Moments That Changed History",
    description: "Place important events accurately in time.",
    objective:
      "By the end of this lesson, students will be able to discuss important past events using time references.",
    vocabulary: [
      "during",
      "before",
      "afterward",
      "by then",
      "decade",
      "century",
    ],
    model:
      "During the following decade, the invention transformed everyday life.",
  },
  {
    slug: "making-predictions",
    title: "Looking Ahead",
    description: "Make predictions with different degrees of certainty.",
    objective:
      "By the end of this lesson, students will be able to make predictions using a variety of structures.",
    vocabulary: [
      "will",
      "may",
      "might",
      "likely to",
      "expected to",
      "probably",
    ],
    model:
      "Cities are likely to become greener, but housing may become more expensive.",
  },
  {
    slug: "life-milestones",
    title: "Life's Milestones",
    description: "Connect significant life events across time.",
    objective:
      "By the end of this lesson, students will be able to discuss milestones in their lives using a variety of time clauses.",
    vocabulary: [
      "by the time",
      "once",
      "as soon as",
      "until",
      "after",
      "milestone",
    ],
    model: "By the time I graduated, I had already accepted my first job.",
  },
  {
    slug: "regrets-and-alternatives",
    title: "If I Had Known",
    description: "Reflect on regrets and alternative past outcomes.",
    objective:
      "By the end of this lesson, students will be able to discuss regrets using should have + past participle and if clauses in the past perfect.",
    vocabulary: [
      "should have",
      "if I had",
      "would have",
      "regret",
      "mistake",
      "opportunity",
    ],
    model: "If I had known about the deadline, I would have applied earlier.",
  },
  {
    slug: "views-and-success",
    title: "What Success Takes",
    description: "Express views about the qualities required for success.",
    objective:
      "By the end of this lesson, students will be able to express personal views and describe qualities for success using infinitive clauses and phrases.",
    vocabulary: [
      "to succeed",
      "it takes",
      "in my view",
      "determination",
      "resilience",
      "initiative",
    ],
    model:
      "In my view, it takes patience and determination to build a successful career.",
  },
  {
    slug: "features-and-reasons",
    title: "Explaining Why",
    description: "Describe features and support ideas with precise reasons.",
    objective:
      "By the end of this lesson, students will be able to describe features and give reasons using because, since, because of, for, due to, and the reason.",
    vocabulary: [
      "because",
      "since",
      "because of",
      "due to",
      "the reason",
      "for",
    ],
    model:
      "The area is popular because of its parks, while the main reason people move there is its safety.",
  },
  {
    slug: "explaining-the-past",
    title: "What Must Have Happened?",
    description: "Infer and explain possible causes of past situations.",
    objective:
      "By the end of this lesson, students will be able to give explanations, reasons, and suggestions using the past modals must have, may have, and could have.",
    vocabulary: [
      "must have",
      "may have",
      "could have",
      "evidence",
      "explanation",
      "possibility",
    ],
    model:
      "They must have missed the train, or they may have taken a different route.",
  },
  {
    slug: "past-advice-and-opinions",
    title: "What Could Have Been Done?",
    description: "Evaluate past decisions and give retrospective advice.",
    objective:
      "By the end of this lesson, students will be able to give opinions and advice with past modals should have, could have, and would have.",
    vocabulary: [
      "should have",
      "could have",
      "would have",
      "advice",
      "alternative",
      "decision",
    ],
    model:
      "They should have warned us, and we could have chosen another route.",
  },
  {
    slug: "how-it-is-made",
    title: "How It's Made",
    description: "Explain stages in production and other processes.",
    objective:
      "By the end of this lesson, students will be able to describe processes using the passive.",
    vocabulary: [
      "is produced",
      "is transported",
      "is processed",
      "stage",
      "material",
      "manufacture",
    ],
    model: "The beans are harvested, dried, roasted, and finally packaged.",
  },
  {
    slug: "jobs-and-relative-clauses",
    title: "People at Work",
    description: "Define jobs and add information about professionals.",
    objective:
      "By the end of this lesson, students will be able to discuss jobs using defining and non-defining relative clauses.",
    vocabulary: [
      "who",
      "whose",
      "which",
      "profession",
      "specialist",
      "colleague",
    ],
    model:
      "My manager, who joined the company last year, leads the team that develops new products.",
  },
  {
    slug: "passive-recommendations",
    title: "What Should Be Done?",
    description: "Recommend actions while focusing on outcomes.",
    objective:
      "By the end of this lesson, students will be able to make recommendations using passive modals.",
    vocabulary: [
      "should be",
      "must be",
      "could be",
      "ought to be",
      "recommend",
      "improve",
    ],
    model:
      "Public transportation should be improved and more bike lanes could be created.",
  },
  {
    slug: "tag-questions",
    title: "Don't You Agree?",
    description: "Express opinions and invite confirmation.",
    objective:
      "By the end of this lesson, students will be able to express opinions using tag questions.",
    vocabulary: [
      "isn't it",
      "don't they",
      "haven't you",
      "won't we",
      "agree",
      "opinion",
    ],
    model: "This solution is more practical, isn't it?",
  },
  {
    slug: "personal-accomplishments",
    title: "What I'm Proud Of",
    description: "Describe achievements through complex noun phrases.",
    objective:
      "By the end of this lesson, students will be able to discuss personal accomplishments using complex noun phrases with gerunds.",
    vocabulary: [
      "winning",
      "completing",
      "being selected",
      "achievement",
      "accomplishment",
      "proud",
    ],
    model:
      "Completing my degree while working full time was my greatest accomplishment.",
  },
  {
    slug: "future-accomplishments",
    title: "By This Time Next Year",
    description: "Discuss future goals and expected accomplishments.",
    objective:
      "By the end of this lesson, students will be able to discuss accomplishments and goals using future tenses, including the future perfect.",
    vocabulary: [
      "will have",
      "will be",
      "going to",
      "by then",
      "goal",
      "accomplish",
    ],
    model: "By this time next year, I will have completed my certification.",
  },
];

const makeLesson = (
  definition: LessonDefinition,
  index: number,
): LearningLesson => {
  const unit = Math.floor(index / 2) + 1;
  const order = (index % 2) + 1;
  const id = `b1-u${String(unit).padStart(2, "0")}-l${String(order).padStart(2, "0")}`;
  const correctAnswer = definition.model.replace(/[,.?;]/g, "");

  return {
    ...definition,
    id,
    level: "b1",
    unitId: `unit-${unit}`,
    order,
    estimatedMinutes: 12,
    xpReward: 40,
    exercises: [
      {
        id: `${id}-e01`,
        type: "word-order",
        instruction: "Put the words in order",
        words: correctAnswer.split(/\s+/).reverse(),
        correctAnswer,
        explanation: `Model answer: ${definition.model}`,
      },
    ],
  };
};

export const intermediateLessons = definitions.map(makeLesson);

const unitDetails = [
  [
    "Relationships and Preferences",
    "Describe relationships, likes, and dislikes.",
  ],
  ["Working Life", "Evaluate jobs and compare careers."],
  ["Favors and Messages", "Negotiate favors and relay requests."],
  ["Stories from the Past", "Narrate and sequence past events."],
  ["Living Abroad", "Discuss international life and expectations."],
  ["Problems and Repairs", "Describe faults and maintenance needs."],
  ["Environment and Action", "Analyze problems and propose responses."],
  [
    "Preferences and Learning",
    "Express preferences and discuss learning methods.",
  ],
  [
    "Services and Solutions",
    "Discuss professional services and suggest solutions.",
  ],
  ["Past and Future", "Discuss important events and make predictions."],
  ["Milestones and Regrets", "Reflect on achievements and past alternatives."],
  ["Views and Reasons", "Express personal views and support them clearly."],
  ["Explaining the Past", "Infer causes and evaluate past decisions."],
  [
    "Processes and Professions",
    "Explain processes and describe professional roles.",
  ],
  ["Recommendations and Opinions", "Recommend action and invite agreement."],
  ["Accomplishments and Goals", "Describe achievements and future goals."],
] as const;

export const intermediateUnits = unitDetails.map(([title, description], index) => ({
  id: `unit-${index + 1}`,
  level: "b1",
  order: index + 1,
  title,
  description,
  lessons: intermediateLessons.slice(index * 2, index * 2 + 2),
}));
