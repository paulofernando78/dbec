import type { GuessWord } from "@/features/exercises/Guess/Guess";

type VocabularySource =
  | "imageQuiz"
  | "vocabularyCarousel"
  | "explicit"
  | "lessonCard";

export type LessonVocabulary = {
  source?: VocabularySource;
  words: GuessWord[];
};

const toPlainText = (value: unknown): string => {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(toPlainText).join("");
  if (!value || typeof value !== "object") return "";

  const item = value as Record<string, unknown>;
  if (typeof item.part === "string") return item.part;
  if (item.parts) return toPlainText(item.parts);
  if (item.content) return toPlainText(item.content);

  return "";
};

const normalizeMeaning = (word: string, value: unknown) =>
  toPlainText(value)
    .replace(
      new RegExp(
        `^${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:\\s*`,
        "i",
      ),
      "",
    )
    .trim();

const uniqueWords = (words: GuessWord[]) => {
  const seen = new Set<string>();

  return words.filter(({ word }) => {
    const normalized = word.trim().toLowerCase();
    if (!normalized || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
};

const getBlocks = (section: Record<string, any> = {}) =>
  Array.isArray(section.blocks) ? section.blocks : [];

const findBlock = (section: Record<string, any>, type: string) =>
  getBlocks(section).find((block: Record<string, any>) => block.type === type);

const filterBlocks = (section: Record<string, any>, type: string) =>
  getBlocks(section).filter((block: Record<string, any>) => block.type === type);

export const getLessonVocabulary = (
  lesson: Record<string, any>,
  lessonCardVocabulary?: string,
): LessonVocabulary => {
  const introduction = lesson.introduction ?? {};
  const imageQuiz = introduction.imageQuiz ?? findBlock(introduction, "imageQuiz");

  if (imageQuiz?.words?.length) {
    return {
      source: "imageQuiz",
      words: uniqueWords(imageQuiz.words).slice(0, 10),
    };
  }

  if (imageQuiz?.questions?.length) {
    return {
      source: "imageQuiz",
      words: uniqueWords(
        imageQuiz.questions.map(
          ({ word, imgSrc, imgAlt }: Record<string, any>) => ({
            word,
            src: imgSrc,
            alt: imgAlt,
          }),
        ),
      ).slice(0, 10),
    };
  }

  const vocabularyCarousel =
    introduction.vocabularyCarousel ??
    getBlocks(introduction).find(
      (block: Record<string, any>) =>
        block.type === "carousel" && block.words?.length,
    );

  if (vocabularyCarousel?.words?.length) {
    const words = vocabularyCarousel.words.flatMap(
      (item: Record<string, any>) => {
        const word = item.word ?? item.dictionary ?? item.alt;
        if (!word) return [];

        const meaning = normalizeMeaning(word, item.content);
        const src =
          typeof item.src === "string" && !item.src.startsWith("data:image")
            ? item.src
            : undefined;

        return [
          {
            word,
            img: item.img,
            src,
            alt: item.alt,
            meaning: meaning || undefined,
          },
        ];
      },
    );

    if (words.length) {
      return {
        source: "vocabularyCarousel",
        words: uniqueWords(words).slice(0, 10),
      };
    }
  }

  if (introduction.guessWords?.length) {
    return {
      source: "explicit",
      words: uniqueWords(introduction.guessWords).slice(0, 10),
    };
  }

  const fallbackWords = (lessonCardVocabulary ?? "")
    .split(/[,;]/)
    .map((word) => word.trim())
    .filter(Boolean)
    .map((word) => ({ word }));

  return {
    source: fallbackWords.length ? "lessonCard" : undefined,
    words: uniqueWords(fallbackWords).slice(0, 10),
  };
};

export const getPracticeExerciseCounts = (lesson: Record<string, any>) => {
  const practice = lesson.practice ?? {};

  return {
    radio:
      practice.radio?.exercise?.questions?.length ??
      filterBlocks(practice, "radio").reduce(
        (total: number, block: Record<string, any>) =>
          total + (block.exercise?.questions?.length ?? 0),
        0,
      ),
    fillInTheBlanks:
      practice.fillInTheBlanks?.exercise?.blocks?.length ??
      filterBlocks(practice, "fillInTheBlanks").reduce(
        (total: number, block: Record<string, any>) =>
          total + (block.exercise?.blocks?.length ?? 0),
        0,
      ),
    scramble:
      practice.scramble?.exercise?.items?.length ??
      filterBlocks(practice, "unscramble").reduce(
        (total: number, block: Record<string, any>) =>
          total + (block.exercise?.items?.length ?? 0),
        0,
      ),
  };
};

export const getControlledPracticeCount = (lesson: Record<string, any>) => {
  const counts = getPracticeExerciseCounts(lesson);

  return counts.radio + counts.fillInTheBlanks + counts.scramble;
};
