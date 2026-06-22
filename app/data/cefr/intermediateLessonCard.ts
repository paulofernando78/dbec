import type { ListProps } from "@/components/content/List";

import { text } from "@/helpers/content";

export const lessons = {
  unitOne: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["Unit 1 • Life Experiences"]),
        },
      ],
    } satisfies ListProps,
    lessonObjective: "By the end of this class, students will be able to talk about life experiences, describe past events, distinguish between finished and unfinished time periods, and use the Present Perfect and Past Simple accurately.",
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
    lessonObjective: "By the end of this class, students will be able to tell engaging stories, describe actions in progress in the past, set the scene for narratives, and use the Past Continuous correctly.",
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
    lessonObjective: "By the end of this class, students will be able to discuss future plans and intentions, make arrangements, talk about personal goals, and choose appropriate future forms.",
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
    lessonObjective: "By the end of this class, students will be able to talk about possible future situations, explain consequences, make predictions based on conditions, and use the First Conditional accurately.",
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
    lessonObjective: "By the end of this class, students will be able to describe facts, scientific truths, and general rules, discuss environmental issues, and use the Zero Conditional correctly.",
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
    lessonObjective: "By the end of this class, students will be able to describe people, places, and things in greater detail, combine ideas into more complex sentences, and use relative clauses accurately.",
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
    lessonObjective: "By the end of this class, students will be able to report events and news stories, focus on actions rather than the performer, and use the Passive Voice appropriately.",
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
    lessonObjective: "By the end of this class, students will be able to report conversations, relay information from other speakers, describe what people said, and use Reported Speech correctly.",
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
    lessonObjective: "By the end of this class, students will be able to discuss workplace situations, express obligation, permission, advice, and possibility, and use modal verbs accurately.",
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
    lessonObjective: "By the end of this class, students will be able to talk about personal relationships, understand and use common phrasal verbs, and communicate more naturally in everyday situations.",
    grammar: "Phrasal Verbs",
    vocabulary: "Relationships",
  },
};
