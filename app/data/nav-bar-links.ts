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
              { href: "/course/beginner/chapter-1/hello", label: "Hello" },
              {
                href: "/course/beginner/chapter-1/personal-information",
                label: "Personal Information",
              },
            ],
          },
          // Chapter 2 • Family
          {
            label: "Chapter 2 • Family",
            links: [
              {
                href: "/course/beginner/chapter-2/my-family",
                label: "My Family",
              },
              {
                href: "/course/beginner/chapter-2/my-relatives",
                label: "My Relatives",
              },
            ],
          },
          // Chapter 3 • Home
          {
            label: "Chapter 3 • Home",
            links: [
              {
                href: "/course/beginner/chapter-3/my-house",
                label: "My House",
              },
              {
                href: "/course/beginner/chapter-3/renting-a-home",
                label: "Renting a Home",
              },
            ],
          },
          // Chapter 4 • Daily Routine
          {
            label: "Chapter 4 • Daily Routine",
            links: [
              {
                href: "/course/beginner/chapter-4/my-daily-routine",
                label: "Daily Routine",
              },
              { href: "/course/beginner/chapter-4/my-week", label: "My Week" },
            ],
          },
          // Chapter 5 • Food and Drinks
          {
            label: "Chapter 5 • Food and Drinks",
            links: [
              {
                href: "/course/beginner/food-and-drinks",
                label: "Food and Drinks",
              },
              {
                href: "/course/beginner/eating-out",
                label: "Eating Out",
              },
            ],
          },
          // Chapter 6 • Shopping
          {
            label: "Chapter 6 • Shopping",
            links: [
              { href: "/course/beginner/shopping", label: "Shopping" },
              {
                href: "/course/beginner/bargain-hunting",
                label: "Bargain Hunting",
              },
            ],
          },
          // Chapter 7 • Around Town
          {
            label: "Chapter 7 • Around Town",
            links: [
              { href: "/course/beginner/around-town", label: "Around Town" },
              {
                href: "/course/beginner/finding-your-way",
                label: "Finding Your Way",
              },
            ],
          },
          // Chapter 8 • Actions & Abilities
          {
            label: "Chapter 8 • Actions & Abilities",
            links: [
              {
                href: "/course/beginner/what-are-you-doing",
                label: "What Are You Doing?",
              },
              { href: "/course/beginner/abilities", label: "Abilities" },
            ],
          },
          // Chapter 9 • Real-Life Project
          {
            label: "Chapter 9 • Real-Life Project",
            links: [
              {
                href: "/course/beginner/real-life-project",
                label: "Real-Life Project",
              },
              {
                href: "/course/beginner/course-review",
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
          {
            label: "Chapter 1 • Past",
            links: [
              { href: "/course/elementary/past-beach", label: "Past: Beach" },
              { href: "/course/elementary/past-movies", label: "Past: Movies" },
              { href: "/course/elementary/past-family", label: "Past: Family" },
              { href: "/course/elementary/past-home", label: "Past: Home" },
            ],
          },
          // Chapter 2 • Future
          {
            label: "Chapter 2 • Future",
            links: [
              {
                href: "/course/elementary/travel-plans",
                label: "Travel Plans",
              },
              {
                href: "/course/elementary/future-predictions",
                label: "Predictions",
              },
            ],
          },
          // Chapter 3 • City Life
          {
            label: "Chapter 3 • City Life",
            links: [
              { href: "/course/elementary/city-life", label: "City Life" },
              {
                href: "/course/elementary/the-best-place",
                label: "The Best Place",
              },
            ],
          },
          // Chapter 4 • Healthy Living
          {
            label: "Chapter 4 • Healthy Living",
            links: [
              {
                href: "/course/elementary/healthy-living",
                label: "Healthy Living",
              },
              {
                href: "/course/elementary/giving-advice",
                label: "Giving Advice",
              },
            ],
          },
          // Chapter 5 • Rules & Obligations
          {
            label: "Chapter 5 • Rules & Obligations",
            links: [
              { href: "/course/elementary/rules", label: "Rules" },
              {
                href: "/course/elementary/school-and-work-rules",
                label: "School & Work Rules",
              },
            ],
          },
          // Chapter 6 • Shopping Smart
          {
            label: "Chapter 6 • Shopping Smart",
            links: [
              {
                href: "/course/elementary/shopping-smart",
                label: "Shopping Smart",
              },
              {
                href: "/course/elementary/complaints-and-returns",
                label: "Complaints & Returns",
              },
            ],
          },
          // Chapter 7 • Life Experiences
          {
            label: "Chapter 7 • Life Experiences",
            links: [
              { href: "/course/elementary/experiences", label: "Experiences" },
              { href: "/course/elementary/hobbies", label: "Hobbies" },
            ],
          },
        ],
      },

      // B1 Intermediate
      {
        label: "B1 Intermediate",
        iconClassName: "text-blue-500",
        links: [
          // Chapter 1 • Life Experiences
          {
            label: "Chapter 1 • Life Experiences",
            links: [
              {
                href: "/course/intermediate/milestones",
                label: "Milestones",
              },
              {
                href: "/course/intermediate/looking-back",
                label: "Looking Back",
              },
            ],
          },
          // Chapter 2 • Storytelling
          {
            label: "Chapter 2 • Storytelling",
            links: [
              {
                href: "/course/intermediate/narrative-tenses",
                label: "Narrative Tenses",
              },
              {
                href: "/course/intermediate/tell-your-story",
                label: "Tell Your Story",
              },
            ],
          },
          // Chapter 3 • Making Plans
          {
            label: "Chapter 3 • Making Plans",
            links: [
              {
                href: "/course/intermediate/future-arrangements",
                label: "Future Arrangements",
              },
              {
                href: "/course/intermediate/lets-meet-up",
                label: "Let's Meet Up",
              },
            ],
          },
          // Chapter 4 • What If?
          {
            label: "Chapter 4 • What If?",
            links: [
              {
                href: "/course/intermediate/real-possibilities",
                label: "Real Possibilities",
              },
              {
                href: "/course/intermediate/imaginary-situations",
                label: "Imaginary Situations",
              },
            ],
          },
          // Chapter 5 • Green Planet
          {
            label: "Chapter 5 • Green Planet",
            links: [
              {
                href: "/course/intermediate/our-planet",
                label: "Our Planet",
              },
              {
                href: "/course/intermediate/taking-action",
                label: "Taking Action",
              },
            ],
          },
          // Chapter 6 • Technology Today
          {
            label: "Chapter 6 • Technology Today",
            links: [
              {
                href: "/course/intermediate/digital-life",
                label: "Digital Life",
              },
              {
                href: "/course/intermediate/pros-and-cons",
                label: "Pros & Cons",
              },
            ],
          },
          // Chapter 7 • News Report
          {
            label: "Chapter 7 • News Report",
            links: [
              {
                href: "/course/intermediate/in-the-news",
                label: "In The News",
              },
              {
                href: "/course/intermediate/breaking-news",
                label: "Breaking News",
              },
            ],
          },
          // Chapter 8 • What Did They Say?
          {
            label: "Chapter 8 • What Did They Say?",
            links: [
              {
                href: "/course/intermediate/he-said-she-said",
                label: "He Said, She Said",
              },
              {
                href: "/course/intermediate/the-interview",
                label: "The Interview",
              },
            ],
          },
          // Chapter 9 • Career Path
          {
            label: "Chapter 9 • Career Path",
            links: [
              {
                href: "/course/intermediate/job-hunting",
                label: "Job Hunting",
              },
              {
                href: "/course/intermediate/career-choices",
                label: "Career Choices",
              },
            ],
          },
          // Chapter 10 • Relationships
          {
            label: "Chapter 10 • Relationships",
            links: [
              {
                href: "/course/intermediate/reading-people",
                label: "Reading People",
              },
              {
                href: "/course/intermediate/social-situations",
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
          // Chapter 1 • Dream Scenarios
          {
            label: "Chapter 1 • Dream Scenarios",
            links: [
              {
                href: "/course/upper-intermediate/wishing-for-change",
                label: "Wishing For Change",
              },
              {
                href: "/course/upper-intermediate/life-goals",
                label: "Life Goals",
              },
            ],
          },
          // Chapter 2 • Regrets
          {
            label: "Chapter 2 • Regrets",
            links: [
              {
                href: "/course/upper-intermediate/if-only",
                label: "If Only...",
              },
              {
                href: "/course/upper-intermediate/looking-back",
                label: "Looking Back",
              },
            ],
          },
          // Chapter 3 • Business Communication
          {
            label: "Chapter 3 • Business Communication",
            links: [
              {
                href: "/course/upper-intermediate/meeting-language",
                label: "Meeting Language",
              },
              {
                href: "/course/upper-intermediate/lets-negotiate",
                label: "Let's Negotiate",
              },
            ],
          },
          // Chapter 4 • Leadership
          {
            label: "Chapter 4 • Leadership",
            links: [
              {
                href: "/course/upper-intermediate/qualities-of-a-leader",
                label: "Qualities of a Leader",
              },
              {
                href: "/course/upper-intermediate/leading-a-team",
                label: "Leading a Team",
              },
            ],
          },
          // Chapter 5 • Innovation
          {
            label: "Chapter 5 • Innovation",
            links: [
              {
                href: "/course/upper-intermediate/future-of-work",
                label: "The Future of Work",
              },
              {
                href: "/course/upper-intermediate/pitch-your-idea",
                label: "Pitch Your Idea",
              },
            ],
          },
          // Chapter 6 • Global Issues
          {
            label: "Chapter 6 • Global Issues",
            links: [
              {
                href: "/course/upper-intermediate/world-problems",
                label: "World Problems",
              },
              {
                href: "/course/upper-intermediate/finding-solutions",
                label: "Finding Solutions",
              },
            ],
          },
          // Chapter 7 • Debate Club
          {
            label: "Chapter 7 • Debate Club",
            links: [
              {
                href: "/course/upper-intermediate/making-your-case",
                label: "Making Your Case",
              },
              {
                href: "/course/upper-intermediate/the-big-debate",
                label: "The Big Debate",
              },
            ],
          },
          // Chapter 8 • Media and Marketing
          {
            label: "Chapter 8 • Media and Marketing",
            links: [
              {
                href: "/course/upper-intermediate/selling-an-idea",
                label: "Selling An Idea",
              },
              {
                href: "/course/upper-intermediate/ad-campaign",
                label: "Ad Campaign",
              },
            ],
          },
          // Chapter 9 • Idiomatic English in Context
          {
            label: "Chapter 9 • Idiomatic English in Context",
            links: [
              {
                href: "/course/upper-intermediate/everyday-idioms",
                label: "Everyday Idioms",
              },
              {
                href: "/course/upper-intermediate/using-idioms-naturally",
                label: "Using Idioms Naturally",
              },
            ],
          },
          // Chapter 10 • Natural English
          {
            label: "Chapter 10 • Natural English",
            links: [
              {
                href: "/course/upper-intermediate/sounding-natural",
                label: "Sounding Natural",
              },
              {
                href: "/course/upper-intermediate/real-conversations",
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
