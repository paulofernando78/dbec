import type { Level } from "./types";

export const c1: Level = {
  slug: "c1",
  code: "C1",
  name: "Advanced",
  subtitle: "Communication with sophistication",
  description:
    "Use flexible, nuanced English in social, academic, and professional contexts.",
  theme: "indigo",
  units: Array.from({ length: 12 }, (_, index) => {
    const number = index + 1;

    if (number === 1) {
      return {
        number,
        title: "Friendship and Connection",
        description: "Define friendship and discuss how relationships develop.",
        lessons: [
          {
            title: "What Makes a True Friend?",
            description: "By the end of this lesson, students will be able to define and describe friendship, express opinions and preferences, and discuss what friends should have in common using phrasal verbs and adjectives and verbs related to friendship.",
          },
          {
            title: "Building Lasting Friendships",
            description: "By the end of this lesson, students will be able to discuss ways to meet people and maintain friendships, disagree politely, and share advice about relationships using gerund and infinitive constructions and verbs with the prefix *re-*.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 2) {
      return {
        number,
        title: "Style and First Impressions",
        description: "Discuss fashion, appearance, and how people form impressions.",
        lessons: [
          {
            title: "Fashion Choices and Identity",
            description: "By the end of this lesson, students will be able to discuss approaches to fashion, describe personal style and trends, and express opinions about clothing using a range of verb patterns and adjectives related to style.",
          },
          {
            title: "The Image We Project",
            description: "By the end of this lesson, students will be able to explain how first impressions are formed, describe outward appearance, and discuss how people respond to appearance using cleft sentences with *what* and precise adjectives for physical presentation.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 3) {
      return {
        number,
        title: "Progress and Digital Life",
        description: "Evaluate scientific advances and technology's impact on daily life.",
        lessons: [
          {
            title: "The Promise and Risk of Innovation",
            description: "By the end of this lesson, students will be able to discuss scientific advances, analyze their positive effects and negative consequences, and express caution or confidence using definite and indefinite articles and precise adjectives for technology-related issues.",
          },
          {
            title: "Living with Technology",
            description: "By the end of this lesson, students will be able to describe technology problems, discuss their attitudes toward new technology, and evaluate its impact on everyday life using *-ing* clauses and collocations that express different attitudes.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 4) {
      return {
        number,
        title: "Beliefs, Luck, and the Unexplained",
        description: "Compare beliefs and examine superstitions and unusual claims.",
        lessons: [
          {
            title: "Why We Believe",
            description: "By the end of this lesson, students will be able to describe superstitions from different cultures, compare personal beliefs, and discuss ideas about luck using reporting clauses and expressions with *luck*.",
          },
          {
            title: "Truth, Hoaxes, and Doubt",
            description: "By the end of this lesson, students will be able to report what other people believe, tell stories about unusual claims, and analyze hoaxes and why people create them using passive reporting clauses and adjectives related to truth and fabrication.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 5) {
      return {
        number,
        title: "Screen Stories and Viewing Culture",
        description: "Analyze film trends and what makes television programs successful.",
        lessons: [
          {
            title: "Films That Shape the Moment",
            description: "By the end of this lesson, students will be able to discuss movie trends, compare genres, and express nuanced attitudes and preferences using sentence adverbs and precise adjectives for describing films.",
          },
          {
            title: "What Makes a Show Work?",
            description: "By the end of this lesson, students will be able to discuss television preferences, explain why programs become popular, and develop and present an idea for a new show using *such...that* and *so...that* and vocabulary for types of television programs.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 6) {
      return {
        number,
        title: "Music, Taste, and Success",
        description: "Discuss musical preferences, creative careers, and success.",
        lessons: [
          {
            title: "The Soundtrack of Our Lives",
            description: "By the end of this lesson, students will be able to share nuanced views about music, compare personal tastes and styles, and discuss the role of music in different contexts using double comparatives and collocations for describing music.",
          },
          {
            title: "Finding Your Place in Music",
            description: "By the end of this lesson, students will be able to discuss career ambitions, give advice to aspiring musicians, and compare different definitions of success using *will* and *would* for habits and general truths and idioms from the entertainment industry.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 7) {
      return {
        number,
        title: "Life in Transition",
        description: "Analyze lifestyle changes and how people adapt to transition.",
        lessons: [
          {
            title: "How Lifestyles Evolve",
            description: "By the end of this lesson, students will be able to discuss social trends, describe personal and generational lifestyle changes, and analyze how change affects different people using optional and required relative pronouns and prefixes that create antonyms.",
          },
          {
            title: "Change with Purpose",
            description: "By the end of this lesson, students will be able to express nuanced attitudes toward change, discuss ways of coping with transitions, and evaluate initiatives that improve people's lives using *as if*, *as though*, *as*, *the way*, and *like* and collocations with *change*.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 8) {
      return {
        number,
        title: "Shopping, Influence, and Choice",
        description: "Examine shopping behavior and the influence of advertising.",
        lessons: [
          {
            title: "How We Decide What to Buy",
            description: "By the end of this lesson, students will be able to compare shopping preferences and experiences, discuss bargain and compulsive shopping, and give or request advice using appropriate shopping expressions and accurate placement of direct and indirect objects.",
          },
          {
            title: "Behind the Marketing Message",
            description: "By the end of this lesson, students will be able to analyze advertising strategies, evaluate the ethics of marketing practices, and support opinions about consumer behavior using verbs in the subjunctive and vocabulary for marketing techniques.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 9) {
      return {
        number,
        title: "Animals, Nature, and Responsibility",
        description: "Explore relationships with animals and ways of working with nature.",
        lessons: [
          {
            title: "Our Lives with Animals",
            description: "By the end of this lesson, students will be able to discuss the roles and physical characteristics of animals, classify different species, and evaluate ethical questions about their use using noun clauses with *whoever* and *whatever* and precise animal-related vocabulary.",
          },
          {
            title: "Careers Close to Nature",
            description: "By the end of this lesson, students will be able to discuss ways of connecting with nature, describe environmentally focused careers, and express specific or undetermined times and locations using *whenever* and *wherever* in contrast with *when* and *where* and nature-related idioms.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 10) {
      return {
        number,
        title: "Language, Influence, and Expression",
        description: "Develop effective communication and examine how language is used.",
        lessons: [
          {
            title: "Speaking with Impact",
            description: "By the end of this lesson, students will be able to identify the qualities of effective communicators, compare attitudes toward public speaking, and give advice for persuasive presentations using passive structures and appropriate discourse markers.",
          },
          {
            title: "Language in Everyday Life",
            description: "By the end of this lesson, students will be able to discuss varieties of English, evaluate formal and informal language choices, and debate questions of correct and appropriate usage using accurate subject-verb agreement with quantifiers and idioms related to language.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 11) {
      return {
        number,
        title: "Achievement, Influence, and Role Models",
        description: "Examine achievement and the qualities of inspiring people.",
        lessons: [
          {
            title: "What Drives High Achievers",
            description: "By the end of this lesson, students will be able to discuss people who have made a significant impact, describe the qualities and values behind exceptional achievement, and organize major events chronologically using compound and superlative compound adjectives.",
          },
          {
            title: "People Who Inspire Us",
            description: "By the end of this lesson, students will be able to explain why particular people are admirable, describe the qualities of effective role models, and discuss heroic behavior in everyday life using phrasal verbs and compound adjectives related to personal characteristics.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    if (number === 12) {
      return {
        number,
        title: "Business, Work, and Success",
        description: "Explore entrepreneurship and the qualities of a strong workplace.",
        lessons: [
          {
            title: "From Idea to Enterprise",
            description: "By the end of this lesson, students will be able to discuss successful entrepreneurs and companies, analyze business decisions, and explore hypothetical outcomes using subject-verb inversion in conditional sentences and prepositions that follow *work*.",
          },
          {
            title: "The Workplace We Want",
            description: "By the end of this lesson, students will be able to compare workplace preferences, evaluate ideal working conditions, and discuss the qualities of successful employees using adverb clauses of condition and expressions related to success at work.",
          },
          {
            title: `Checkpoint ${number}`,
            description: "Review what you learned.",
          },
        ],
      };
    }

    return {
      number,
      title: "",
      description: "",
      lessons: [
        { title: "", description: "" },
        { title: "", description: "" },
        {
          title: `Checkpoint ${number}`,
          description: "Review what you learned.",
        },
      ],
    };
  }),
};
