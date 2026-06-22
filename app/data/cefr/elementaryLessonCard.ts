import type { ListProps } from "@/components/content/List";

import { text } from "@/helpers/content";

export const lessons = {
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
      "By the end of this class, students will be able to talk about past events, describe what they did last weekend, ask questions about past activities, and use the Past Simple correctly.",
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
    lessonObjective:
      "By the end of this class, students will be able to talk about future travel plans, discuss upcoming trips, make predictions about their vacations, and use 'going to' correctly.",
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
    lessonObjective:
      "By the end of this class, students will be able to make predictions about the future, express spontaneous decisions, discuss future possibilities, and use 'will' correctly.",
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
    lessonObjective:
      "By the end of this class, students will be able to compare cities and places, describe urban life, talk about advantages and disadvantages of different locations, and use comparative adjectives correctly.",
    grammar: "Comparatives",
    vocabulary: "Cities",
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
    lessonObjective:
      "By the end of this class, students will be able to describe the best and worst places, compare multiple options, express preferences, and use superlative adjectives correctly.",
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
    lessonObjective:
      "By the end of this class, students will be able to give health advice, talk about healthy habits, discuss lifestyle choices, and use 'should' correctly.",
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
    lessonObjective:
      "By the end of this class, students will be able to talk about obligations and rules, describe responsibilities, explain what is necessary or prohibited, and use 'must' and 'have to' correctly.",
    grammar: "Must / Have to",
    vocabulary: "Rules and obligations",
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
    lessonObjective:
      "By the end of this class, students will be able to talk about quantities, ask for and give information about products, discuss shopping habits, and use 'much', 'many', 'some', and 'any' correctly.",
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
    lessonObjective:
      "By the end of this class, students will be able to talk about life experiences, describe things they have done, ask about experiences, and use the Present Perfect correctly in basic situations.",
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
    lessonObjective:
      "By the end of this class, students will be able to talk about hobbies and interests, describe activities they enjoy, express preferences, and use gerunds and infinitives correctly.",
    grammar: "Gerunds & Infinitives",
    vocabulary: "Hobbies",
  },
};
