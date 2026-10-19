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
            description: "Describe friendship and express opinions and preferences.",
          },
          {
            title: "Building Lasting Friendships",
            description: "Discuss how to build and maintain friendships.",
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
            description: "Discuss fashion choices, personal style, and trends.",
          },
          {
            title: "The Image We Project",
            description: "Describe appearance and explain how first impressions form.",
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
            description: "Analyze the benefits and consequences of scientific progress.",
          },
          {
            title: "Living with Technology",
            description: "Discuss technology problems, attitudes, and everyday impact.",
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
            description: "Compare cultural superstitions and personal beliefs about luck.",
          },
          {
            title: "Truth, Hoaxes, and Doubt",
            description: "Report unusual claims and analyze hoaxes and fabrication.",
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
            description: "Discuss movie trends, genres, and viewing preferences.",
          },
          {
            title: "What Makes a Show Work?",
            description: "Explain television preferences and develop a show concept.",
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
            description: "Compare musical tastes, styles, and the role of music.",
          },
          {
            title: "Finding Your Place in Music",
            description: "Discuss artistic careers, ambitions, and definitions of success.",
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
            description: "Discuss trends and personal and generational lifestyle changes.",
          },
          {
            title: "Change with Purpose",
            description: "Evaluate attitudes, coping strategies, and positive initiatives.",
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
            description: "Compare shopping habits, preferences, and experiences.",
          },
          {
            title: "Behind the Marketing Message",
            description: "Evaluate advertising strategies and marketing ethics.",
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
            description: "Discuss animal roles, characteristics, and ethical questions.",
          },
          {
            title: "Careers Close to Nature",
            description: "Explore nature-based careers and environmental experiences.",
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
            description: "Analyze effective communication and persuasive presentations.",
          },
          {
            title: "Language in Everyday Life",
            description: "Discuss language varieties, choices, and appropriate usage.",
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
            description: "Discuss impactful people and the values behind achievement.",
          },
          {
            title: "People Who Inspire Us",
            description: "Describe admirable role models and everyday heroism.",
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
            description: "Analyze entrepreneurs, companies, and business decisions.",
          },
          {
            title: "The Workplace We Want",
            description: "Evaluate working conditions and qualities of successful employees.",
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
