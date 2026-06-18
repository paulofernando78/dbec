import type { ListProps } from "@/components/content/List";

import {
  audio,
  bold,
  boldMark,
  content,
  icon,
  italic,
  mark,
  phonetics,
  portuguese,
  stressed,
  text,
  underline,
} from "@/helpers/content";
import type { thimbleweedPark } from "../cefr/advanced/games/thimbleweed-park";

export const lessons = {
  beginner: {
    unitOne: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 1 • Hello!"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "By the end of this class, students will be able to greet someone, say their name, ask for basic personal information, and introduce themselves clearly.",
      grammar: "Verb to be, Subject pronouns",
      vocabulary: "Greetings, Names, Countries",
    },
    unitTwo: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 2 • My Family"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Possessive adjectives, Possessive ’s",
      vocabulary: "Family members",
    },
    unitThree: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 3 • My House"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "There is / There are",
      vocabulary: "Rooms, Furniture",
    },
    unitFour: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 4 • Daily Routine"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Present Simple",
      vocabulary: "Daily activities, Time",
    },
    unitFive: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 5 • My Week"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Adverbs of frequency",
      vocabulary: "Days, Months",
    },
    unitSix: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 6 • Food and Drinks"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Like / Don’t like",
      vocabulary: "Food, Drinks",
    },
    unitSeven: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 7 • Shopping"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "This / That / These / Those",
      vocabulary: "Clothes, Prices",
    },
    unitEight: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 8 • Around Town"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Prepositions of place",
      vocabulary: "Places in town",
    },
    unitNine: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 9 • What Are You Doing?"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Present Continuous",
      vocabulary: "Activities",
    },
    unitTen: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 10 • Abilities"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Can / Can’t",
      vocabulary: "Skills, Sports",
    },
  },
  elementary: {
    unitOne: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 1 • Last Weekend"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "...",
      grammar: "Past Simple",
      vocabulary: "Weekend activities",
    },
    unitTwo: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 2 • Travel Plans"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Going to",
      vocabulary: "Travel",
    },
    unitThree: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 3 • Future Predictions"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Will",
      vocabulary: "Technology, Future",
    },
    unitFour: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 4 • City Life"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Cities",
      vocabulary: "Comparatives",
    },
    unitFive: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 5 • The Best Place"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Superlatives",
      vocabulary: "Travel destinations",
    },
    unitSix: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 6 • Healthy Living"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Should",
      vocabulary: "Health",
    },
    unitSeven: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 7 • Rules"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Must / Have to",
      vocabulary: "Grammar",
    },
    unitEight: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 8 • Shopping Smart"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Much / Many / Some / Any",
      vocabulary: "Shopping",
    },
    unitNine: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 9 • Experiences"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Present Perfect (basic)",
      vocabulary: "Life experiences",
    },
    unitTen: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 10 • Hobbies"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Gerunds & Infinitives",
      vocabulary: "Hobbies",
    },
  },
  intermediate: {
    unitOne: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 1 • Life Experiences"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "...",
      grammar: "Present Perfect vs Past Simple",
      vocabulary: "Grammar",
    },
    unitTwo: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 2 • Storytelling"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Past Continuous",
      vocabulary: "Narratives",
    },
    unitThree: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 3 • Making Plans"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Future forms",
      vocabulary: "Goals",
    },
    unitFour: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 4 • What If?"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "First Conditional",
      vocabulary: "Decisions",
    },
    unitFive: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 5 • Green Planet"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Zero Conditional",
      vocabulary: "Environment",
    },
    unitSix: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 6 • Technology Today"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Relative Clauses",
      vocabulary: "Technology",
    },
    unitSeven: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 7 • News Report"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Passive Voice",
      vocabulary: "News",
    },
    unitEight: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 8 • What Did They Say?"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Reported Speech",
      vocabulary: "Communication",
    },
    unitNine: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 9 • Career Path"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Modals",
      vocabulary: "Work",
    },
    unitTen: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 10 • Relationships "]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Phrasal Verbs",
      vocabulary: "Relationships",
    },
  },
  upperIntermediate: {
    unitOne: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 1 • Dream Scenarios"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "...",
      grammar: "Second Conditional",
      vocabulary: "Ambitions",
    },
    unitTwo: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 2 • Regrets"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Third Conditional",
      vocabulary: "Personal experiences",
    },
    unitThree: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 3 • Business Communication"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Advanced Modals",
      vocabulary: "Business",
    },
    unitFour: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 4 • Leadership"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Causative",
      vocabulary: "Grammar",
    },
    unitFive: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 5 • Innovation"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Future Perfect",
      vocabulary: "Technology",
    },
    unitSix: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 6 • Global Issues"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Passive (advanced)",
      vocabulary: "Society",
    },
    unitSeven: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 7 • Debate Club"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Discourse Markers",
      vocabulary: "Arguments",
    },
    unitEight: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 8 • Media and Marketing"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Complex Relative Clauses",
      vocabulary: "Marketing",
    },
    unitNine: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 9 • Native-Like English"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Idioms",
      vocabulary: "Idioms & Expressions",
    },
    unitTen: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Unit 10 • Natural English"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective: "...",
      grammar: "Collocations & Advanced Phrasal Verbs",
      vocabulary: "High-frequency B2 language",
    },
  },
  advanced: {
    tedED: {
      task: {
        type: "none",
        items: [
          {
            value: text(["TED-ED"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "Ted-ED videos",
    },
  },
  games: {
    thimbleWeedPark: {
      task: {
        type: "checkbox",
        items: [
          {
            value: text(["Thimbleweed Park"]),
          },
        ],
      } satisfies ListProps,
      lessonObjective:
        "In Thimbleweed Park, a dead body is the least of your problems. Switch between five playable characters to uncover the surreal secrets of this strange town in a modern mystery adventure game from the creators of Monkey Island and Maniac Mansion. The deeper you go, the weirder it gets.",
    },
  },
};
