import { text } from "@/helpers/content";

type Choice = {
  option: string;
  isCorrect: boolean;
};

type Question = {
  question: string;
  options: Choice[];
};

type DialogueLine = {
  speaker: string;
  line: string;
};

type FocusColumn = {
  title: string;
  items: string[];
};

type GapSentence = {
  before: string;
  answer: string | string[];
  after: string;
};

type ScrambleSentence = {
  prompt: string;
  answer: string;
};

export type C1LessonConfig = {
  slug: string;
  title: string;
  descriptions: string[];
  objective: string;
  grammar: string;
  vocabulary: string;
  introductionPrompt: string;
  introductionStatements: string[];
  introductionQuestions: Question[];
  dialoguePrompt: string;
  dialogueLines: DialogueLine[];
  comprehensionQuestions: Question[];
  meaning: string[];
  focusColumns: FocusColumn[];
  notes: string[];
  ccqs: string[];
  practiceQuestions: Question[];
  gapInstruction: string;
  gapSentences: GapSentence[];
  scrambleSentences: ScrambleSentence[];
  productionTasks: string[];
};

const palette = [
  {
    borderColor: "border-blue-800",
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    borderColor: "border-green-800",
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  {
    borderColor: "border-amber-800",
    bgColor: "bg-amber-500",
    textColor: "text-black",
  },
];

export const createC1Lesson = (config: C1LessonConfig) => ({
  slug: config.slug,

  whiteboard: {
    title: "C1 Advanced",
    subtitle: config.title,
    descriptions: config.descriptions,
  },

  lessonCard: {
    lessonObjective: config.objective,
    grammar: config.grammar,
    vocabulary: config.vocabulary,
  },

  introduction: {
    carouselWide: {
      prompt: config.introductionPrompt,
      imgs: config.introductionStatements.map((statement) => ({
        alt: "Add a supporting image for this C1 discussion prompt.",
        content: text([statement]),
      })),
    },
    radio: {
      instruction: "Interpret the statements and choose the best answer.",
      exercise: {
        questions: config.introductionQuestions,
      },
    },
  },

  presentation: {
    dialogue: {
      prompt: config.dialoguePrompt,
      audioSrc: "",
      lines: config.dialogueLines.map((dialogueLine) => ({
        speaker: dialogueLine.speaker,
        line: text([dialogueLine.line]),
      })),
    },
    radio: {
      instruction:
        "Read or listen again. Choose the interpretation best supported by the text.",
      exercise: {
        questions: config.comprehensionQuestions,
      },
    },
  },

  languageFocus: {
    meaning: config.meaning.map((statement) => ({
      as: "p" as const,
      parts: text([statement]),
    })),
    column: {
      width: 310,
      cols: config.focusColumns.map((focusColumn, index) => ({
        ...palette[index % palette.length],
        column: focusColumn.title,
        items: focusColumn.items.map((item) => ({
          parts: text([item]),
          lineBreak: true,
        })),
      })),
    },
    notes: config.notes.map((note) => ({
      as: "p" as const,
      parts: text([note]),
    })),
    ccq: config.ccqs.map((question) => ({
      as: "p" as const,
      parts: text([question]),
    })),
  },

  practice: {
    radio: {
      instruction: "Choose the most precise and context-appropriate option.",
      exercise: {
        questions: config.practiceQuestions,
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: config.gapInstruction,
      numbered: true,
      exercise: {
        blocks: config.gapSentences.map((sentence) => ({
          block: [
            { text: sentence.before },
            { blank: sentence.answer },
            { text: sentence.after },
          ],
          lineBreak: true,
        })),
      },
    },
    scramble: {
      showWordBank: false,
      instruction:
        "Reconstruct each sentence so that the relationship between ideas is clear.",
      numbered: true,
      exercise: {
        items: config.scrambleSentences,
      },
    },
  },

  production: {
    task: {
      instruction:
        "Complete the C1 performance tasks. Support interpretations and claims with specific evidence.",
      type: "checkbox" as const,
      items: config.productionTasks.map((task) => ({
        content: text([task]),
        textarea: true,
      })),
    },
  },
});
