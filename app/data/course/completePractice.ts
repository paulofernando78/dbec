type PracticeSupplement = readonly [
  prompt: string,
  correctAnswer: string,
  distractor: string,
];

const MINIMUM_ITEMS_PER_EXERCISE = 8;
const BLANK_PATTERN = /_{3,}/;

const toRadioQuestion = ([
  prompt,
  correctAnswer,
  distractor,
]: PracticeSupplement) => ({
  question: prompt,
  options: [
    { option: correctAnswer, isCorrect: true },
    { option: distractor, isCorrect: false },
  ],
});

const toFillBlock = ([prompt, correctAnswer]: PracticeSupplement) => {
  const match = prompt.match(BLANK_PATTERN);

  if (!match || match.index === undefined) {
    throw new Error(`Practice supplement needs a blank: ${prompt}`);
  }

  const before = prompt.slice(0, match.index);
  const after = prompt.slice(match.index + match[0].length);

  return {
    block: [
      ...(before ? [{ text: before }] : []),
      { blank: correctAnswer },
      ...(after ? [{ text: after }] : []),
    ],
    lineBreak: true,
  };
};

export const completePractice = (
  practice: Record<string, any>,
  supplements: readonly PracticeSupplement[],
) => {
  const currentRadio = practice.radio?.exercise?.questions ?? [];
  const currentFill = practice.fillInTheBlanks?.exercise?.blocks ?? [];
  const missingRadio = Math.max(
    0,
    MINIMUM_ITEMS_PER_EXERCISE - currentRadio.length,
  );
  const missingFill = Math.max(
    0,
    MINIMUM_ITEMS_PER_EXERCISE - currentFill.length,
  );
  const requiredSupplements = Math.max(missingRadio, missingFill);

  if (supplements.length < requiredSupplements) {
    throw new Error(
      `Practice requires ${requiredSupplements} supplements, but received ${supplements.length}.`,
    );
  }

  return {
    ...practice,
    radio: {
      ...practice.radio,
      exercise: {
        ...practice.radio?.exercise,
        questions: [
          ...currentRadio,
          ...supplements.slice(0, missingRadio).map(toRadioQuestion),
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences with the missing words.",
      numbered: true,
      ...practice.fillInTheBlanks,
      exercise: {
        ...practice.fillInTheBlanks?.exercise,
        blocks: [
          ...currentFill,
          ...supplements.slice(0, missingFill).map(toFillBlock),
        ],
      },
    },
  };
};
