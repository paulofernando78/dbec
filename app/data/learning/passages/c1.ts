import {
  createPassageCurriculum,
  type PassageUnitSeed,
} from "./create-curriculum";

const units: PassageUnitSeed[] = [
  {
    title: "Relationships",
    description: "Define friendship and maintain meaningful relationships.",
    lessons: [
      {
        slug: "the-best-of-friends",
        title: "The Best of Friends",
        description: "Define friendship and express nuanced opinions.",
        objective:
          "By the end of this lesson, students will be able to define and describe friendship and express opinions using phrasal verbs.",
        vocabulary: [
          "bring out",
          "stand up for",
          "open up",
          "drift apart",
          "turn down",
          "hang on to",
        ],
        model:
          "True friends stand up for one another and do not drift apart when life becomes difficult.",
      },
      {
        slug: "make-new-friends",
        title: "Make New Friends, Keep the Old",
        description:
          "Discuss preferences and give sophisticated friendship advice.",
        objective:
          "By the end of this lesson, students will be able to disagree politely, state preferences, and share advice using advanced gerund and infinitive constructions.",
        vocabulary: [
          "maintain",
          "reconnect",
          "mutual",
          "prefer to",
          "recommend making",
          "worth keeping",
        ],
        model:
          "I prefer maintaining a few close friendships to trying to meet everyone.",
      },
    ],
  },
  {
    title: "Clothes and Appearance",
    description: "Discuss fashion, style, and first impressions.",
    lessons: [
      {
        slug: "the-way-we-dress",
        title: "The Way We Dress",
        description: "Analyze approaches to fashion and changing trends.",
        objective:
          "By the end of this lesson, students will be able to discuss fashion choices and style trends using a wide range of verb patterns.",
        vocabulary: [
          "understated",
          "cutting-edge",
          "timeless",
          "tend to",
          "avoid wearing",
          "opt for",
        ],
        model:
          "I tend to opt for timeless clothes rather than follow every short-lived trend.",
      },
      {
        slug: "how-we-appear",
        title: "How We Appear to Others",
        description: "Explain how outward appearance shapes impressions.",
        objective:
          "By the end of this lesson, students will be able to discuss first impressions and emphasize key ideas using cleft sentences with what.",
        vocabulary: [
          "first impression",
          "well-groomed",
          "approachable",
          "outward appearance",
          "what matters",
          "project",
        ],
        model:
          "What matters most in a first impression is whether someone appears approachable.",
      },
    ],
  },
  {
    title: "Science and Technology",
    description: "Evaluate innovation and its consequences.",
    lessons: [
      {
        slug: "good-science-bad-science",
        title: "Good Science, Bad Science",
        description: "Evaluate scientific advances with appropriate precision.",
        objective:
          "By the end of this lesson, students will be able to discuss scientific advances and express caution or confidence using articles accurately.",
        vocabulary: [
          "breakthrough",
          "evidence",
          "clinical trial",
          "ethical",
          "promising",
          "unproven",
        ],
        model:
          "The research offers promising evidence, but a larger clinical trial is still required.",
      },
      {
        slug: "technology-and-you",
        title: "Technology and You",
        description: "Analyze the effects and frustrations of technology.",
        objective:
          "By the end of this lesson, students will be able to analyze technological consequences and describe problems using -ing clauses.",
        vocabulary: [
          "autocorrect",
          "voice recognition",
          "overreliance",
          "having enabled",
          "using",
          "malfunction",
        ],
        model:
          "Having enabled constant access to information, smartphones have also increased distraction.",
      },
    ],
  },
  {
    title: "Superstitions and Beliefs",
    description: "Compare beliefs and report claims critically.",
    lessons: [
      {
        slug: "superstitions",
        title: "Superstitions",
        description: "Compare cultural beliefs and explain their origins.",
        objective:
          "By the end of this lesson, students will be able to compare personal and cultural beliefs using reporting clauses.",
        vocabulary: [
          "superstition",
          "ritual",
          "omen",
          "it is believed that",
          "research suggests",
          "according to",
        ],
        model:
          "Researchers suggest that rituals can improve confidence even when people doubt the belief itself.",
      },
      {
        slug: "believe-it-or-not",
        title: "Believe It or Not",
        description: "Report claims and evaluate truth or fabrication.",
        objective:
          "By the end of this lesson, students will be able to report beliefs and evaluate doubtful claims using passive reporting structures.",
        vocabulary: [
          "hoax",
          "fabricated",
          "credible",
          "is said to",
          "is believed to",
          "allegedly",
        ],
        model:
          "The story is believed to have originated online, but it is now considered a hoax.",
      },
    ],
  },
  {
    title: "Movies and Television",
    description: "Evaluate screen culture, genres, and audience preferences.",
    lessons: [
      {
        slug: "movies",
        title: "Movies",
        description: "Discuss trends and express attitudes toward film.",
        objective:
          "By the end of this lesson, students will be able to discuss movie trends and genre preferences using stance and sentence adverbs.",
        vocabulary: [
          "compelling",
          "predictable",
          "visually stunning",
          "admittedly",
          "surprisingly",
          "arguably",
        ],
        model:
          "Admittedly, the plot is predictable; nevertheless, the film is visually stunning.",
      },
      {
        slug: "television",
        title: "Television",
        description: "Explain why television formats become popular.",
        objective:
          "By the end of this lesson, students will be able to explain the popularity and impact of television programs using such...that and so...that.",
        vocabulary: [
          "documentary",
          "reality show",
          "limited series",
          "engaging",
          "such that",
          "so popular that",
        ],
        model:
          "The series was so engaging that viewers discussed every episode for weeks.",
      },
    ],
  },
  {
    title: "Musicians and Music",
    description: "Compare musical tastes and define success.",
    lessons: [
      {
        slug: "a-world-of-music",
        title: "A World of Music",
        description: "Compare music styles and changing preferences.",
        objective:
          "By the end of this lesson, students will be able to compare musical styles and describe changing preferences using double comparatives.",
        vocabulary: [
          "genre",
          "melody",
          "rhythm",
          "the more",
          "increasingly",
          "eclectic",
        ],
        model:
          "The more diverse the music I hear, the more eclectic my taste becomes.",
      },
      {
        slug: "getting-your-big-break",
        title: "Getting Your Big Break",
        description: "Discuss habits and define success in entertainment.",
        objective:
          "By the end of this lesson, students will be able to discuss success and recurring industry behavior using will and would for habits and general truths.",
        vocabulary: [
          "big break",
          "audition",
          "recognition",
          "make it",
          "will often",
          "would always",
        ],
        model:
          "Successful performers will often face rejection, and many would practice for years before their big break.",
      },
    ],
  },
  {
    title: "Changing Times",
    description: "Analyze social change and lifestyle transitions.",
    lessons: [
      {
        slug: "lifestyles-in-transition",
        title: "Lifestyles in Transition",
        description: "Discuss trends and changing ways of life.",
        objective:
          "By the end of this lesson, students will be able to discuss lifestyle changes using optional and required relative pronouns accurately.",
        vocabulary: [
          "transition",
          "remote work",
          "multigenerational",
          "adapt",
          "that",
          "whom",
        ],
        model:
          "The changes that younger workers welcome are changes older generations may question.",
      },
      {
        slug: "a-change-for-the-better",
        title: "A Change for the Better",
        description: "Analyze how people experience and respond to change.",
        objective:
          "By the end of this lesson, students will be able to analyze attitudes toward change using as if, as though, as, the way, and like.",
        vocabulary: [
          "resistant",
          "adaptable",
          "transform",
          "as though",
          "the way",
          "cope with",
        ],
        model:
          "She adapted as though she had been preparing for the change for years.",
      },
    ],
  },
  {
    title: "Consumer Culture",
    description: "Examine shopping behavior, marketing, and consumer ethics.",
    lessons: [
      {
        slug: "whats-new-on-the-market",
        title: "What's New on the Market?",
        description: "Compare shopping preferences and bargain experiences.",
        objective:
          "By the end of this lesson, students will be able to compare shopping experiences using direct and indirect objects in natural positions.",
        vocabulary: [
          "bargain",
          "retailer",
          "refund",
          "recommend",
          "offer someone",
          "send something to",
        ],
        model:
          "The retailer offered loyal customers a discount and sent a replacement to me.",
      },
      {
        slug: "consumer-awareness",
        title: "Consumer Awareness",
        description: "Give advice and evaluate advertising strategies.",
        objective:
          "By the end of this lesson, students will be able to discuss effective and ethical advertising using verbs in the subjunctive.",
        vocabulary: [
          "undercover marketing",
          "target audience",
          "misleading",
          "recommend that",
          "insist that",
          "essential that",
        ],
        model:
          "Consumer groups recommend that advertisers disclose paid endorsements clearly.",
      },
    ],
  },
  {
    title: "Nature",
    description: "Discuss animals, ecosystems, and experiences in nature.",
    lessons: [
      {
        slug: "animals-in-our-lives",
        title: "Animals in Our Lives",
        description: "Discuss animal roles, categories, and ethical questions.",
        objective:
          "By the end of this lesson, students will be able to discuss animals and undetermined time or place using whenever and wherever.",
        vocabulary: [
          "habitat",
          "domesticated",
          "endangered",
          "whenever",
          "wherever",
          "welfare",
        ],
        model:
          "Wherever wild animals interact with people, their welfare must be considered.",
      },
      {
        slug: "in-touch-with-nature",
        title: "In Touch with Nature",
        description: "Discuss nature careers and open-ended choices.",
        objective:
          "By the end of this lesson, students will be able to discuss experiences and careers in nature using noun clauses with whoever and whatever.",
        vocabulary: [
          "conservation",
          "fieldwork",
          "eco-resort",
          "whoever",
          "whatever",
          "restore",
        ],
        model:
          "Whoever works in conservation must respond to whatever threatens the ecosystem.",
      },
    ],
  },
  {
    title: "Language",
    description:
      "Communicate effectively across contexts and varieties of English.",
    lessons: [
      {
        slug: "communication-skills",
        title: "Communication Skills",
        description: "Analyze effective communication and public speaking.",
        objective:
          "By the end of this lesson, students will be able to discuss effective communication using a broad range of passive structures.",
        vocabulary: [
          "audience",
          "delivery",
          "clarity",
          "is perceived",
          "has been demonstrated",
          "be understood",
        ],
        model:
          "A clear message is remembered when complex information is presented with confidence.",
      },
      {
        slug: "natural-language",
        title: "Natural Language",
        description: "Discuss language variation, usage, and appropriateness.",
        objective:
          "By the end of this lesson, students will be able to discuss language usage accurately using quantifiers with correct subject-verb agreement.",
        vocabulary: [
          "dialect",
          "slang",
          "register",
          "a number of",
          "the amount of",
          "usage",
        ],
        model:
          "A number of expressions vary by region, while the amount of shared vocabulary remains substantial.",
      },
    ],
  },
  {
    title: "Exceptional People",
    description: "Describe achievement, influence, and admirable qualities.",
    lessons: [
      {
        slug: "high-achievers",
        title: "High Achievers",
        description: "Discuss impact and organize achievements over time.",
        objective:
          "By the end of this lesson, students will be able to describe high achievers and chronological accomplishments using compound adjectives.",
        vocabulary: [
          "high-achieving",
          "self-taught",
          "far-reaching",
          "groundbreaking",
          "milestone",
          "legacy",
        ],
        model:
          "The self-taught researcher produced a groundbreaking study with far-reaching consequences.",
      },
      {
        slug: "people-we-admire",
        title: "People We Admire",
        description: "Explain values and qualities of meaningful role models.",
        objective:
          "By the end of this lesson, students will be able to describe exceptional role models using superlative compound adjectives and phrasal verbs.",
        vocabulary: [
          "role model",
          "warm-hearted",
          "strong-willed",
          "look up to",
          "carry on",
          "make a difference",
        ],
        model:
          "She is one of the most warm-hearted leaders I know and someone many young people look up to.",
      },
    ],
  },
  {
    title: "Business Matters",
    description: "Evaluate entrepreneurship, work, and hypothetical decisions.",
    lessons: [
      {
        slug: "entrepreneurs",
        title: "Entrepreneurs",
        description: "Analyze successful ventures and alternative outcomes.",
        objective:
          "By the end of this lesson, students will be able to discuss entrepreneurship and hypothetical outcomes using subject-verb inversion in conditional sentences.",
        vocabulary: [
          "venture",
          "entrepreneur",
          "investment",
          "had they known",
          "were it not for",
          "should demand rise",
        ],
        model:
          "Had they researched the market more carefully, the venture might have succeeded.",
      },
      {
        slug: "the-new-worker",
        title: "The New Worker",
        description: "Discuss ideal work and conditions for success.",
        objective:
          "By the end of this lesson, students will be able to express workplace values and preferences using advanced adverb clauses of condition.",
        vocabulary: [
          "autonomy",
          "collaboration",
          "work-life balance",
          "provided that",
          "on condition that",
          "in the event that",
        ],
        model:
          "Employees can thrive provided that expectations are clear and autonomy is respected.",
      },
    ],
  },
];

const curriculum = createPassageCurriculum("c1", units);
export const c1Lessons = curriculum.lessons;
export const c1Units = curriculum.units;
