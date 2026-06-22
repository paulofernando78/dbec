import type { ListProps } from "@/components/content/List";

import {
  text,
} from "@/helpers/content";

export const beginnerLessons = {
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
      lessonObjective: "By the end of this class, students will be able to introduce family members, describe relationships, and use possessive adjectives and possessive ’s correctly.",
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
      lessonObjective: "By the end of this class, students will be able to describe rooms in a house, identify furniture, and use there is and there are to talk about what exists in a room.",
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
      lessonObjective: "By the end of this class, students will be able to talk about their daily routine, tell the time, and use the Present Simple to describe regular activities.",
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
      lessonObjective: "By the end of this class, students will be able to talk about their weekly habits, use adverbs of frequency correctly, and say days of the week and months of the year.",
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
      lessonObjective: "By the end of this class, students will be able to talk about food and drinks they like and don't like, ask simple questions about preferences, and respond appropriately.",
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
      lessonObjective: "By the end of this class, students will be able to identify and describe clothes, ask and answer simple questions about prices, and use this, that, these, and those correctly.",
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
      lessonObjective: "By the end of this class, students will be able to identify common places in town, ask for and give simple directions, and use basic prepositions of place correctly.",
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
      lessonObjective: "By the end of this class, students will be able to describe actions happening now, ask what people are doing, and use the Present Continuous correctly.",
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
      lessonObjective: "By the end of this class, students will be able to talk about abilities and skills, describe what they can and can't do, and ask others about their abilities.",
      grammar: "Can / Can’t",
      vocabulary: "Skills, Sports",
    },
  }
};