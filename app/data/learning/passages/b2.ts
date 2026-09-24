import {
  createPassageCurriculum,
  type PassageUnitSeed,
} from "./create-curriculum";

const units: PassageUnitSeed[] = [
  {
    title: "Friends and Family",
    description: "Explore personality, preferences, and changing family life.",
    lessons: [
      {
        slug: "what-kind-of-person-are-you",
        title: "What Kind of Person Are You?",
        description: "Describe personalities and personal preferences.",
        objective:
          "By the end of this lesson, students will be able to describe personalities and express likes and dislikes using verbs followed by gerunds.",
        vocabulary: [
          "outgoing",
          "reserved",
          "insist on",
          "avoid",
          "don't mind",
          "prefer",
        ],
        model:
          "I don't mind meeting new people, but I avoid speaking in large groups.",
      },
      {
        slug: "every-family-is-different",
        title: "Every Family Is Different",
        description: "Discuss family changes, advantages, and disadvantages.",
        objective:
          "By the end of this lesson, students will be able to describe personal and family changes and evaluate advantages and disadvantages using noun clauses after be.",
        vocabulary: [
          "extended family",
          "sibling",
          "in-law",
          "advantage",
          "drawback",
          "the best thing",
        ],
        model:
          "The best thing about living near my family is that we support one another.",
      },
    ],
  },
  {
    title: "Mistakes and Mysteries",
    description:
      "Reflect on past obligations, mistakes, and unexplained events.",
    lessons: [
      {
        slug: "life-lessons",
        title: "Life Lessons",
        description: "Discuss past rules, obligations, and mistakes.",
        objective:
          "By the end of this lesson, students will be able to describe past obligations and give advice about past mistakes using past modals and phrasal modals.",
        vocabulary: [
          "had to",
          "was supposed to",
          "didn't need to",
          "should have",
          "regret",
          "responsibility",
        ],
        model: "I was supposed to call, and I should have apologized sooner.",
      },
      {
        slug: "i-cant-explain-it",
        title: "I Can't Explain It!",
        description: "Speculate about mysterious past events.",
        objective:
          "By the end of this lesson, students will be able to speculate about and offer explanations for past events using modals with multiple meanings.",
        vocabulary: [
          "must have",
          "might have",
          "could have",
          "can't have",
          "evidence",
          "unexplained",
        ],
        model:
          "The lights might have failed, but the noise must have come from somewhere else.",
      },
    ],
  },
  {
    title: "Exploring New Cities",
    description: "Describe destinations and evaluate urban life.",
    lessons: [
      {
        slug: "popular-destinations",
        title: "Popular Destinations",
        description: "Describe places and state travel preferences.",
        objective:
          "By the end of this lesson, students will be able to describe destinations and state preferences using defining and non-defining relative clauses and ordered modifiers.",
        vocabulary: [
          "landmark",
          "district",
          "coastal",
          "historic",
          "which",
          "where",
        ],
        model:
          "Lisbon, which is a lively coastal city, has neighborhoods where history feels close.",
      },
      {
        slug: "my-kind-of-town",
        title: "My Kind of Town",
        description: "Contrast cities and evaluate quality-of-life issues.",
        objective:
          "By the end of this lesson, students will be able to compare cities and evaluate urban issues using connectors that present contrasting ideas.",
        vocabulary: [
          "whereas",
          "although",
          "however",
          "in contrast",
          "walkable",
          "quality of life",
        ],
        model:
          "Although the city is expensive, it is walkable and offers an excellent quality of life.",
      },
    ],
  },
  {
    title: "Early Birds and Night Owls",
    description: "Discuss routines, energy, stress, and sleep.",
    lessons: [
      {
        slug: "its-about-time",
        title: "It's About Time!",
        description: "Describe routines and give advice about energy.",
        objective:
          "By the end of this lesson, students will be able to describe routines and give advice using reduced time clauses.",
        vocabulary: [
          "once",
          "before",
          "after",
          "while",
          "wind down",
          "perk up",
        ],
        model: "After finishing work, I take a short walk to clear my mind.",
      },
      {
        slug: "tossing-and-turning",
        title: "Tossing and Turning",
        description: "Explain sleep problems, reasons, and conditions.",
        objective:
          "By the end of this lesson, students will be able to explain reasons and conditions and interpret sleep experiences using adverb clauses.",
        vocabulary: [
          "provided that",
          "as long as",
          "since",
          "due to",
          "restless",
          "sleep through",
        ],
        model: "You will sleep better as long as you avoid screens before bed.",
      },
    ],
  },
  {
    title: "Communication",
    description: "Manage conversations and report what others say.",
    lessons: [
      {
        slug: "making-conversation",
        title: "Making Conversation",
        description: "Discuss conversational styles and appropriate behavior.",
        objective:
          "By the end of this lesson, students will be able to describe conversational behavior and make small talk using infinitive and gerund phrases.",
        vocabulary: [
          "interrupt",
          "open up",
          "avoid discussing",
          "good at listening",
          "appropriate",
          "small talk",
        ],
        model:
          "Being a good conversationalist means listening carefully and knowing when to respond.",
      },
      {
        slug: "its-personal",
        title: "It's Personal",
        description: "Report conversations and decide what to share.",
        objective:
          "By the end of this lesson, students will be able to report statements, questions, and requests using reported speech.",
        vocabulary: [
          "said that",
          "told me",
          "asked whether",
          "wanted to know",
          "confide",
          "private",
        ],
        model:
          "She asked whether I trusted him and told me not to share the story.",
      },
    ],
  },
  {
    title: "What's the Real Story?",
    description: "Organize news and personal stories clearly.",
    lessons: [
      {
        slug: "thats-some-story",
        title: "That's Some Story!",
        description: "Present news in chronological order.",
        objective:
          "By the end of this lesson, students will be able to narrate news events using the present perfect, simple past, and present perfect continuous appropriately.",
        vocabulary: [
          "breaking news",
          "witness",
          "recently",
          "so far",
          "since",
          "report",
        ],
        model:
          "Reporters have been following the story since witnesses first called the police.",
      },
      {
        slug: "storytelling",
        title: "Storytelling",
        description: "Sequence and present a compelling narrative.",
        objective:
          "By the end of this lesson, students will be able to organize a story using adverbs with the simple past and past perfect.",
        vocabulary: [
          "previously",
          "eventually",
          "by then",
          "suddenly",
          "meanwhile",
          "turning point",
        ],
        model:
          "By then, we had already missed the train, so eventually we called a taxi.",
      },
    ],
  },
  {
    title: "The Information Age",
    description: "Analyze technology trends and information overload.",
    lessons: [
      {
        slug: "a-weird-wired-world",
        title: "A Weird, Wired World",
        description: "Discuss current and future technology trends.",
        objective:
          "By the end of this lesson, students will be able to describe technology trends using passive forms of the present continuous, present perfect, and future.",
        vocabulary: [
          "automated",
          "connected",
          "data",
          "has been developed",
          "is being tested",
          "will be used",
        ],
        model:
          "Driverless systems are being tested and will be used more widely in the future.",
      },
      {
        slug: "information-overload",
        title: "Information Overload",
        description: "Debate how people consume information.",
        objective:
          "By the end of this lesson, students will be able to participate in a debate and give opinions using negative questions and tag questions.",
        vocabulary: [
          "credible",
          "source",
          "bias",
          "overload",
          "isn't it",
          "don't you think",
        ],
        model: "We shouldn't trust every source we see online, should we?",
      },
    ],
  },
  {
    title: "Putting the Mind to Work",
    description: "Explore creativity and practical problem solving.",
    lessons: [
      {
        slug: "exploring-creativity",
        title: "Exploring Creativity",
        description: "Describe creative people and job qualifications.",
        objective:
          "By the end of this lesson, students will be able to describe creative people and qualifications using reduced relative clauses.",
        vocabulary: [
          "innovative",
          "resourceful",
          "open-minded",
          "designed for",
          "working in",
          "qualified",
        ],
        model:
          "Candidates experienced in design and trained to solve problems are ideal for the role.",
      },
      {
        slug: "ideas-that-work",
        title: "Ideas That Work",
        description: "Offer solutions and analyze why ideas succeed.",
        objective:
          "By the end of this lesson, students will be able to comment on facts and analyze reasons using non-defining relative clauses as sentence modifiers.",
        vocabulary: [
          "breakthrough",
          "practical",
          "constraint",
          "which means",
          "which is why",
          "solution",
        ],
        model:
          "The device uses very little energy, which is why it works well in remote areas.",
      },
    ],
  },
  {
    title: "Generally Speaking",
    description: "Compare customs and discuss change over time.",
    lessons: [
      {
        slug: "how-typical-are-you",
        title: "How Typical Are You?",
        description: "Compare customs and make careful generalizations.",
        objective:
          "By the end of this lesson, students will be able to compare customs and present exceptions using clauses and phrases of contrast.",
        vocabulary: [
          "unlike",
          "whereas",
          "in contrast to",
          "except for",
          "typical",
          "unconventional",
        ],
        model:
          "Unlike most people my age, I prefer quiet weekends, except when friends visit.",
      },
      {
        slug: "problems-and-solutions",
        title: "Problems and Solutions",
        description: "Discuss past habits and offer practical advice.",
        objective:
          "By the end of this lesson, students will be able to talk about past habits using used to and would and offer solutions to current problems.",
        vocabulary: [
          "used to",
          "would",
          "keep up with",
          "stay focused",
          "perspective",
          "procrastinate",
        ],
        model:
          "I used to postpone difficult tasks, but I would feel better whenever I finished early.",
      },
    ],
  },
  {
    title: "The Art of Complaining",
    description: "Describe annoyances and resolve complaints constructively.",
    lessons: [
      {
        slug: "that-really-bugs-me",
        title: "That Really Bugs Me!",
        description: "Describe everyday annoyances and complaining styles.",
        objective:
          "By the end of this lesson, students will be able to describe irritating situations using relative clauses and noun clauses.",
        vocabulary: [
          "irritate",
          "bother",
          "get on my nerves",
          "the thing that",
          "what bothers me",
          "complaint",
        ],
        model:
          "What bothers me most is when people interrupt someone who is still speaking.",
      },
      {
        slug: "lets-do-something-about-it",
        title: "Let's Do Something About It!",
        description: "Make complaints and propose solutions politely.",
        objective:
          "By the end of this lesson, students will be able to make and respond to complaints using simple and complex indirect questions.",
        vocabulary: [
          "I wonder if",
          "my concern is whether",
          "could you explain",
          "resolve",
          "refund",
          "customer service",
        ],
        model:
          "I wonder if you could explain how this problem is going to be resolved.",
      },
    ],
  },
  {
    title: "Values",
    description: "Examine ethics, choices, wishes, and regrets.",
    lessons: [
      {
        slug: "how-honest-are-you",
        title: "How Honest Are You?",
        description: "Discuss ethical choices and hypothetical situations.",
        objective:
          "By the end of this lesson, students will be able to discuss hypothetical ethical situations using present unreal conditionals with unless, only if, and even if.",
        vocabulary: [
          "ethical",
          "honest",
          "principle",
          "unless",
          "only if",
          "even if",
        ],
        model:
          "I wouldn't reveal the information unless someone's safety depended on it.",
      },
      {
        slug: "taking-stock",
        title: "Taking Stock",
        description: "Explain values, wishes, and past regrets.",
        objective:
          "By the end of this lesson, students will be able to describe personal values and express wishes and regrets about decisions.",
        vocabulary: [
          "value",
          "priority",
          "wish",
          "if only",
          "regret",
          "content",
        ],
        model:
          "If only I had trusted my judgment, I wouldn't regret the decision now.",
      },
    ],
  },
  {
    title: "Moving Around",
    description: "Navigate culture shock, travel, and life abroad.",
    lessons: [
      {
        slug: "culture-shock",
        title: "Culture Shock",
        description: "Compare customs and predict adaptation abroad.",
        objective:
          "By the end of this lesson, students will be able to compare customs and predict future adjustment using the future perfect and future perfect continuous.",
        vocabulary: [
          "adapt",
          "settle in",
          "culture shock",
          "by then",
          "will have learned",
          "will have been living",
        ],
        model:
          "By next summer, I will have been living abroad for a year and will have learned the local customs.",
      },
      {
        slug: "traveler-or-tourist",
        title: "Traveler or Tourist?",
        description: "Discuss travel preferences and hypothetical choices.",
        objective:
          "By the end of this lesson, students will be able to make travel hypotheses, explain preferences, and give advice using mixed conditionals.",
        vocabulary: [
          "destination",
          "independent travel",
          "guided tour",
          "had planned",
          "would be",
          "recommend",
        ],
        model:
          "If I had planned more carefully, I would be traveling independently now.",
      },
    ],
  },
];

const curriculum = createPassageCurriculum("b2", units);
export const b2Lessons = curriculum.lessons;
export const b2Units = curriculum.units;
