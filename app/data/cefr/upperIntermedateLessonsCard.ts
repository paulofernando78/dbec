import type { ListProps } from "@/components/content/List";

import { text } from "@/helpers/content";

export const lessons = {
  unitOne: {
    task: {
      type: "checkbox",
      items: [
        {
          value: text(["Unit 1 • Dream Scenarios"]),
        },
      ],
    } satisfies ListProps,
    lessonObjective: "By the end of this class, students will be able to discuss hypothetical situations, talk about unreal present and future scenarios, express ambitions and wishes, and use the Second Conditional accurately.",
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
    lessonObjective: "By the end of this class, students will be able to talk about past regrets, analyze alternative outcomes, reflect on personal experiences, and use the Third Conditional correctly.",
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
    lessonObjective: "By the end of this class, students will be able to communicate effectively in professional contexts, express degrees of certainty and obligation, discuss workplace situations, and use advanced modal verbs accurately.",
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
    lessonObjective: "By the end of this class, students will be able to talk about leadership and management, describe services performed by others, delegate responsibilities, and use the causative form correctly.",
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
    lessonObjective: "By the end of this class, students will be able to discuss future achievements, make predictions about technological developments, describe completed future actions, and use the Future Perfect accurately.",
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
    lessonObjective: "By the end of this class, students will be able to discuss global and social issues, report information objectively, describe processes and systems, and use advanced passive structures correctly.",
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
    lessonObjective: "By the end of this class, students will be able to participate in debates, organize arguments logically, express agreement and disagreement effectively, and use discourse markers naturally.",
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
    lessonObjective: "By the end of this class, students will be able to discuss media and marketing strategies, describe products and campaigns in detail, combine ideas fluently, and use complex relative clauses accurately.",
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
    lessonObjective: "By the end of this class, students will be able to understand and use common idioms and expressions, interpret figurative language, and communicate more naturally in everyday and professional situations.",
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
    lessonObjective: "By the end of this class, students will be able to use advanced collocations and phrasal verbs naturally, improve fluency and precision, and communicate with greater confidence in a wide range of situations.",
    grammar: "Collocations & Advanced Phrasal Verbs",
    vocabulary: "High-frequency B2 language",
  },
};
