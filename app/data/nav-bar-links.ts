import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";

export const links = [
  {
    links: [
      {
        href: "/welcome",
        label: "Welcome",
      },
      {
        href: "/cefr",
        label: "What's CEFR?",
      },
      // {
      //   href: "/dashboard",
      //   label: "Dashboard",
      // },
    ],
  },
  // Courses
  {
    title: "Course",
    links: [
  // A1 Beginner
  {
    label: "A1 Beginner",
    iconClassName: "text-yellow-500",
    links: [
      // Chapter 1 • Introduction
      {
        label: "Chapter 1 • Introduction",
        links: [
          { href: "/courses/beginner/hello", label: "Hello" },
          {
            href: "/courses/beginner/personal-information",
            label: "Personal Information",
          },
        ],
      },
      // Chapter 2 • Family
      {
        label: "Chapter 2 • Family",
        links: [
          { href: "/courses/beginner/my-family", label: "My Nuclear Family" },
          {
            href: "/courses/beginner/more-family-members",
            label: "My Extended Family",
          },
        ],
      },
      // Chapter 3 • Home
      {
        label: "Chapter 3 • Home",
        links: [
          { href: "/courses/beginner/my-house", label: "My House" },
          {
            href: "/courses/beginner/renting-a-home", // [new]
            label: "Renting a Home",
          },
        ],
      },
      // Chapter 4 • Daily Routine
      {
        label: "Chapter 4 • Daily Routine",
        links: [
          {
            href: "/courses/beginner/daily-routine",
            label: "Daily Routine",
          },
          { href: "/courses/beginner/my-week", label: "My Week" },
        ],
      },
      // Chapter 5 • Food and Drinks
      {
        label: "Chapter 5 • Food and Drinks",
        links: [
          {
            href: "/courses/beginner/food-and-drinks",
            label: "Food and Drinks",
          },
          {
            href: "/courses/beginner/eating-out", // [new]
            label: "Eating Out",
          },
        ],
      },
      // Chapter 6 • Shopping
      {
        label: "Chapter 6 • Shopping",
        links: [
          { href: "/courses/beginner/shopping", label: "Shopping" },
          {
            href: "/courses/beginner/bargain-hunting", // [new]
            label: "Bargain Hunting",
          },
        ],
      },
      // Chapter 7 • Around Town
      {
        label: "Chapter 7 • Around Town",
        links: [
          { href: "/courses/beginner/around-town", label: "Around Town" },
          {
            href: "/courses/beginner/finding-your-way", // [new]
            label: "Finding Your Way",
          },
        ],
      },
      // Chapter 8 • Actions & Abilities
      {
        label: "Chapter 8 • Actions & Abilities",
        links: [
          {
            href: "/courses/beginner/what-are-you-doing",
            label: "What Are You Doing?",
          },
          { href: "/courses/beginner/abilities", label: "Abilities" },
        ],
      },
      // Chapter 9 • Real-Life Project
      {
        label: "Chapter 9 • Real-Life Project",
        links: [
          {
            href: "/courses/beginner/real-life-project",
            label: "Real-Life Project",
          },
          {
            href: "/courses/beginner/course-review", // [new]
            label: "Course Review",
          },
        ],
      },
    ],
  },
 
  // A2 Elementary
  {
    label: "A2 Elementary",
    iconClassName: "text-red-500",
    links: [
      // Chapter 1 • Past
      // Intentional pattern: same grammar point (past simple), recycled
      // across 4 different vocabulary contexts. Kept as 4 lessons on
      // purpose — do not collapse to 2.
      {
        label: "Chapter 1 • Past",
        links: [
          { href: "/courses/elementary/past-beach", label: "Past: Beach" },
          { href: "/courses/elementary/past-movies", label: "Past: Movies" },
          { href: "/courses/elementary/past-family", label: "Past: Family" },
          { href: "/courses/elementary/past-home", label: "Past: Home" },
        ],
      },
      // Chapter 2 • Future
      {
        label: "Chapter 2 • Future",
        links: [
          {
            href: "/courses/elementary/travel-plans",
            label: "Travel Plans",
          },
          {
            href: "/courses/elementary/future-predictions",
            label: "Predictions",
          },
        ],
      },
      // Chapter 3 • City Life
      {
        label: "Chapter 3 • City Life",
        links: [
          { href: "/courses/elementary/city-life", label: "City Life" },
          {
            href: "/courses/elementary/the-best-place",
            label: "The Best Place",
          },
        ],
      },
      // Chapter 4 • Healthy Living
      {
        label: "Chapter 4 • Healthy Living",
        links: [
          {
            href: "/courses/elementary/healthy-living",
            label: "Healthy Living",
          },
          {
            href: "/courses/elementary/giving-advice", // [new]
            label: "Giving Advice",
          },
        ],
      },
      // Chapter 5 • Rules & Obligations
      {
        label: "Chapter 5 • Rules & Obligations",
        links: [
          { href: "/courses/elementary/rules", label: "Rules" },
          {
            href: "/courses/elementary/school-and-work-rules", // [new]
            label: "School & Work Rules",
          },
        ],
      },
      // Chapter 6 • Shopping Smart
      {
        label: "Chapter 6 • Shopping Smart",
        links: [
          {
            href: "/courses/elementary/shopping-smart",
            label: "Shopping Smart",
          },
          {
            href: "/courses/elementary/complaints-and-returns", // [new]
            label: "Complaints & Returns",
          },
        ],
      },
      // Chapter 7 • Life Experiences
      {
        label: "Chapter 7 • Life Experiences",
        links: [
          { href: "/courses/elementary/experiences", label: "Experiences" },
          { href: "/courses/elementary/hobbies", label: "Hobbies" },
        ],
      },
    ],
  },

  // B1 Intermediate
  {
    label: "B1 Intermediate",
    iconClassName: "text-blue-500",
    links: [
      {
        label: "Chapter 1 • Life Experiences",
        links: [
          {
            href: "/courses/intermediate/milestones", // [new]
            label: "Milestones",
          },
          {
            href: "/courses/intermediate/looking-back", // [new]
            label: "Looking Back",
          },
        ],
      },
      {
        label: "Chapter 2 • Storytelling",
        links: [
          {
            href: "/courses/intermediate/narrative-tenses", // [new]
            label: "Narrative Tenses",
          },
          {
            href: "/courses/intermediate/tell-your-story", // [new]
            label: "Tell Your Story",
          },
        ],
      },
      {
        label: "Chapter 3 • Making Plans",
        links: [
          {
            href: "/courses/intermediate/future-arrangements", // [new]
            label: "Future Arrangements",
          },
          {
            href: "/courses/intermediate/lets-meet-up", // [new]
            label: "Let's Meet Up",
          },
        ],
      },
      {
        label: "Chapter 4 • What If?",
        links: [
          {
            href: "/courses/intermediate/real-possibilities", // [new]
            label: "Real Possibilities",
          },
          {
            href: "/courses/intermediate/imaginary-situations", // [new]
            label: "Imaginary Situations",
          },
        ],
      },
      {
        label: "Chapter 5 • Green Planet",
        links: [
          {
            href: "/courses/intermediate/our-planet", // [new]
            label: "Our Planet",
          },
          {
            href: "/courses/intermediate/taking-action", // [new]
            label: "Taking Action",
          },
        ],
      },
      {
        label: "Chapter 6 • Technology Today",
        links: [
          {
            href: "/courses/intermediate/digital-life", // [new]
            label: "Digital Life",
          },
          {
            href: "/courses/intermediate/pros-and-cons", // [new]
            label: "Pros & Cons",
          },
        ],
      },
      {
        label: "Chapter 7 • News Report",
        links: [
          {
            href: "/courses/intermediate/in-the-news", // [new]
            label: "In The News",
          },
          {
            href: "/courses/intermediate/breaking-news", // [new]
            label: "Breaking News",
          },
        ],
      },
      {
        label: "Chapter 8 • What Did They Say?",
        links: [
          {
            href: "/courses/intermediate/he-said-she-said", // [new]
            label: "He Said, She Said",
          },
          {
            href: "/courses/intermediate/the-interview", // [new]
            label: "The Interview",
          },
        ],
      },
      {
        label: "Chapter 9 • Career Path",
        links: [
          {
            href: "/courses/intermediate/job-hunting", // [new]
            label: "Job Hunting",
          },
          {
            href: "/courses/intermediate/career-choices", // [new]
            label: "Career Choices",
          },
        ],
      },
      {
        label: "Chapter 10 • Relationships",
        links: [
          {
            href: "/courses/intermediate/reading-people", // [new]
            label: "Reading People",
          },
          {
            href: "/courses/intermediate/social-situations", // [new]
            label: "Social Situations",
          },
        ],
      },
    ],
  },

  // B2 Upper-Intermediate
  {
    label: "B2 Upper-Intermediate",
    iconClassName: "text-green-500",
    links: [
      {
        label: "Chapter 1 • Dream Scenarios",
        links: [
          {
            href: "/courses/upper-intermediate/wishing-for-change", // [new]
            label: "Wishing For Change",
          },
          {
            href: "/courses/upper-intermediate/life-goals", // [new]
            label: "Life Goals",
          },
        ],
      },
      {
        label: "Chapter 2 • Regrets",
        links: [
          {
            href: "/courses/upper-intermediate/if-only", // [new]
            label: "If Only...",
          },
          {
            href: "/courses/upper-intermediate/looking-back", // [new]
            label: "Looking Back",
          },
        ],
      },
      {
        label: "Chapter 3 • Business Communication",
        links: [
          {
            href: "/courses/upper-intermediate/meeting-language", // [new]
            label: "Meeting Language",
          },
          {
            href: "/courses/upper-intermediate/lets-negotiate", // [new]
            label: "Let's Negotiate",
          },
        ],
      },
      {
        label: "Chapter 4 • Leadership",
        links: [
          {
            href: "/courses/upper-intermediate/qualities-of-a-leader", // [new]
            label: "Qualities of a Leader",
          },
          {
            href: "/courses/upper-intermediate/leading-a-team", // [new]
            label: "Leading a Team",
          },
        ],
      },
      {
        label: "Chapter 5 • Innovation",
        links: [
          {
            href: "/courses/upper-intermediate/future-of-work", // [new]
            label: "The Future of Work",
          },
          {
            href: "/courses/upper-intermediate/pitch-your-idea", // [new]
            label: "Pitch Your Idea",
          },
        ],
      },
      {
        label: "Chapter 6 • Global Issues",
        links: [
          {
            href: "/courses/upper-intermediate/world-problems", // [new]
            label: "World Problems",
          },
          {
            href: "/courses/upper-intermediate/finding-solutions", // [new]
            label: "Finding Solutions",
          },
        ],
      },
      {
        label: "Chapter 7 • Debate Club",
        links: [
          {
            href: "/courses/upper-intermediate/making-your-case", // [new]
            label: "Making Your Case",
          },
          {
            href: "/courses/upper-intermediate/the-big-debate", // [new]
            label: "The Big Debate",
          },
        ],
      },
      {
        label: "Chapter 8 • Media and Marketing",
        links: [
          {
            href: "/courses/upper-intermediate/selling-an-idea", // [new]
            label: "Selling An Idea",
          },
          {
            href: "/courses/upper-intermediate/ad-campaign", // [new]
            label: "Ad Campaign",
          },
        ],
      },
      {
        label: "Chapter 9 • Idiomatic English in Context",
        links: [
          {
            href: "/courses/upper-intermediate/everyday-idioms", // [new]
            label: "Everyday Idioms",
          },
          {
            href: "/courses/upper-intermediate/using-idioms-naturally", // [new]
            label: "Using Idioms Naturally",
          },
        ],
      },
      {
        label: "Chapter 10 • Natural English",
        links: [
          {
            href: "/courses/upper-intermediate/sounding-natural", // [new]
            label: "Sounding Natural",
          },
          {
            href: "/courses/upper-intermediate/real-conversations", // [new]
            label: "Real Conversations",
          },
        ],
      },
    ],
  },

  // C1 Advanced
  // {
  //   label: "C1 Advanced",
  //   links: [
  //     {
  //       href: "/courses/advanced/reading-between-the-lines",
  //       label: "Reading Between the Lines",
  //     },
  //     {
  //       href: "/courses/advanced/synthesizing-sources",
  //       label: "Synthesizing Sources",
  //     },
  //     {
  //       href: "/courses/advanced/building-complex-arguments",
  //       label: "Building Complex Arguments",
  //     },
  //     {
  //       href: "/courses/advanced/diplomatic-communication",
  //       label: "Diplomatic Communication",
  //     },
  //     {
  //       href: "/courses/advanced/academic-presentations",
  //       label: "Academic Presentations",
  //     },
  //     {
  //       href: "/courses/advanced/mediation-and-clarification",
  //       label: "Mediation and Clarification",
  //     },
  //     {
  //       href: "/courses/advanced/critical-reviews",
  //       label: "Critical Reviews",
  //     },
  //     {
  //       href: "/courses/advanced/negotiation-and-consensus",
  //       label: "Negotiation and Consensus",
  //     },
  //     {
  //       href: "/courses/advanced/precision-and-nuance",
  //       label: "Precision and Nuance",
  //     },
  //     {
  //       href: "/courses/advanced/research-briefing",
  //       label: "Research Briefing",
  //     },
  //   ],
  // },
    ],
  },
  // Authentic Content
  {
    title: "Authentic Content",
    links: [
      // News
      {
        label: "News",
        iconClassName: "text-gray-400",
        links: [
          // Ismal Kone breaks leg
          {
            href: "/authentic-content/news/a-soccer-match-dramatic-moment",
            label: "A Soccer Match's Dramatic Moment",
          },
        ],
      },
      // Ted-ED
      {
        label: "Ted-ED",
        iconClassName: "text-gray-400",
        links: authenticContentTedEdLessons.map(({ href, label }) => ({
          href,
          label,
        })),
      },
    ],
  },
  // Games
  {
    title: "GAMES",
    links: [
      // {
      //   href: "/",
      //   label: "Sierra",
      //   links: [
      //     {
      //       href: "/games/kings-quest",
      //       label: "King’s Quest",
      //     },
      //   ],
      // },
      {
        label: "Lucas Arts",
        iconClassName: "text-gray-400",
        links: [
          {
            href: "/games/lucas-arts/thimbleweed-park",
            label: "Thumbleweed Park",
          },
        ],
      },
    ],
  },
  // PRONUNCIATION
  // {
  //   title: "PRONUNCIATION",
  //   links: [
  //     // Phonetics + Letters
  //     {
  //       attention: true,
  //       href: "/pronunciation/phonetics-letters",
  //       label: "Phonetics + Letters",
  //     },
  //     // Linking Sounds
  //     {
  //       attention: true,
  //       href: "/pronunciation/linking-sounds",
  //       label: "Linking Sounds",
  //     },
  //     // Accents
  //     {
  //       href: "/pronunciation/accents",
  //       label: "Accents",
  //     },
  //     // Sites
  //     {
  //       href: "/pronunciation/sites",
  //       label: "Sites",
  //     },
  //   ],
  // },
  // VOCABULARY
  // {
  //   title: "VOCABULARY",
  //   links: [
  //     // Dentistry
  //     {
  //       href: "/vocabulary/dentistry",
  //       label: "Dentistry",
  //     },
  //     // Cooking
  //     {
  //       href: "/vocabulary/cooking",
  //       label: "Cooking",
  //     },
  //     // Law
  //     {
  //       href: "/vocabulary/law",
  //       label: "Law",
  //     },
  //     // Medicine
  //     {
  //       href: "/vocabulary/medicine",
  //       label: "Medicine",
  //     },
  //     // Programming
  //     {
  //       href: "/vocabulary/programming",
  //       label: "Programming",
  //     },
  //     // Travel
  //     {
  //       href: "/vocabulary/travel",
  //       label: "Travel",
  //     },
  //   ],
  // },
  // REFERENCE
  // {
  //   title: "REFERENCE",
  //   links: [
  //     // Numbers
  //     {
  //       href: "/reference/numbers",
  //       label: "Numbers",
  //     },
  //     // Articles
  //     {
  //       href: "/reference/articles",
  //       label: "Articles",
  //     },
  //     // Pronouns
  //     {
  //       href: "/reference/pronouns",
  //       label: "Pronouns",
  //     },
  //     // Adjectives
  //     {
  //       href: "/reference/adjectives",
  //       label: "Adjectives",
  //     },
  //     // Nouns
  //     {
  //       href: "/reference/nouns",
  //       label: "Nouns",
  //     },
  //     // Adverbs
  //     {
  //       href: "/reference/adverbs",
  //       label: "Adverbs",
  //     },
  //     // All Verb Tenses
  //     {
  //       href: "/reference/all-verb-tenses",
  //       label: "All Verb Tenses",
  //     },
  //     // False Cognates
  //     {
  //       href: "/reference/false-cognates",
  //       label: "False Cognates",
  //     },
  //     // Infinitive vs. -ing
  //     {
  //       href: "/reference/infinitive-ing",
  //       label: "Infinitive vs. -ing",
  //     },
  //     // Prepositions
  //     {
  //       href: "/reference/prepositions",
  //       label: "Prepositions",
  //     },
  //     // Phrasal Verbs
  //     {
  //       href: "/reference/phrasal-verbs",
  //       label: "Phrasal Verbs",
  //     },
  //     // Tag Questions
  //     {
  //       href: "/reference/tag-questions",
  //       label: "Tag Questions",
  //     },
  //     // Passive Voice
  //     {
  //       href: "/reference/passive-voice",
  //       label: "Passive Voice",
  //     },
  //     // Modal Verbs
  //     {
  //       href: "/reference/modal-verbs",
  //       label: "Modal Verbs",
  //     },
  //     // Conditonals
  //     {
  //       href: "/reference/conditionals",
  //       label: "Conditionals",
  //     },
  //     // Reported Speech
  //     {
  //       href: "/reference/reported-speech",
  //       label: "Reported Speech",
  //     },
  //     // Collocations
  //     {
  //       href: "/reference/collocations",
  //       label: "Collocations",
  //     },
  //     // To vs. For
  //     {
  //       href: "/reference/to-for",
  //       label: "To vs. For",
  //     },
  //     // Homonyns
  //     {
  //       href: "/reference/homonyns",
  //       label: "Homonyns",
  //     },
  //     // Expressions
  //     {
  //       href: "/reference/expressions",
  //       label: "Expressions",
  //     },
  //     // Which one?
  //     {
  //       href: "/reference/which-one",
  //       label: "Which one?",
  //     },
  //     // Word Families
  //     {
  //       href: "/reference/word-families",
  //       label: "Word Families",
  //     },
  //   ],
  // },
  // // audiobooks
  // {
  //   title: "Audiobooks",
  //   links: [
  //     {
  //       href: "/audiobooks/starter",
  //       label: "Starter",
  //     },
  //     {
  //       href: "/audiobooks/beginner",
  //       label: "...",
  //     },
  //   ],
  // },
];
