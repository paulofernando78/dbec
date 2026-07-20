import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";
import { audio, bold, content, spacer, text } from "@/helpers/content";
import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";

type Choice = { question: string; correct: string; incorrect: string };
type Config = {
  href: string;
  subtitle: string;
  descriptions: string[];
  vocabulary: string[];
  story: { sentence: string; translation: string; alt: string }[];
  dialogue: { speaker: string; line: string }[];
  comprehension: Choice[];
  meaning: string[];
  columns: { title: string; examples: string[] }[];
  note: string;
  ccq: string[];
  practice: Choice[];
  blanks: { before: string; blank: string; after: string }[];
  scramble: { prompt: string; answer: string }[];
  production: string[];
};

export function createElementaryLesson(config: Config) {
  const data = courseLessonsCardData.elementary.find(
    (lesson) => lesson.href === config.href,
  )!;
  const choices = (items: Choice[]) => ({
    questions: items.map((item) => ({
      question: item.question,
      options: [
        { option: item.correct, isCorrect: true },
        { option: item.incorrect, isCorrect: false },
      ],
    })),
  });

  return {
    whiteboard: {
      title: "A2 Elementary",
      subtitle: config.subtitle,
      descriptions: config.descriptions,
    },
    lessonCard: {
      lessonObjective: data.lessonObjective,
      grammar: data.grammar,
      vocabulary: data.vocabulary,
    },
    introduction: {
      vocabularyCarousel: {
        instruction: "Match the words to the pictures.",
        matchingContent: config.vocabulary.map((word) => ({
          as: "span" as const,
          parts: [audio(word), word],
        })),
        imgs: config.vocabulary.map((word) => ({
          src: "/",
          alt: word,
        })),
      },
      storyCarousel: {
        instruction: "Look at the pictures and listen to the sentences.",
        imgs: config.story.map((item) => ({
          src: "/",
          alt: item.alt,
          content: [
            ...content({
              parts: [
                audio(item.sentence),
                item.sentence,
                ` (${item.translation})`,
              ],
            }),
          ],
        })),
      },
      radio: {
        instruction: "Choose the correct answer.",
        exercise: choices(config.comprehension.slice(0, 2)),
      },
    },
    presentation: {
      dialogue: {
        prompt: "Listen and read.",
        audioSrc: "/",
        lines: config.dialogue.map((item) => ({
          speaker: item.speaker,
          line: text([item.line]),
        })),
      },
      radio: {
        instruction: "Choose the correct answer.",
        exercise: choices(config.comprehension),
      },
    },
    languageFocus: {
      meaning: config.meaning.flatMap((item, index) => [
        {
          as: "p" as const,
          parts: [index === 0 ? bold(data.grammar) : "", item],
        },
        spacer(),
      ]) satisfies Meaning[],
      column: {
        width: 300,
        cols: config.columns.map((column) => ({
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: column.title,
          items: column.examples.map((example) => ({
            parts: [audio(example), example],
          })),
        })),
      },
      notes: [{ as: "p", parts: [config.note] }] satisfies Notes[],
      ccq: config.ccq.map((question) => ({
        as: "p" as const,
        parts: [question],
      })) satisfies CCQ[],
    },
    practice: {
      radio: {
        instruction: "Choose the correct answer.",
        exercise: choices(config.practice),
      },
      fillInTheBlanks: {
        showWordBank: true,
        instruction: "Complete the sentences.",
        numbered: true,
        exercise: {
          blocks: config.blanks.map((item) => ({
            block: [
              { text: item.before },
              { blank: item.blank },
              { text: item.after },
            ],
            lineBreak: true,
          })),
        },
      },
      scramble: {
        showWordBank: false,
        instruction: "Unscramble the sentence.",
        numbered: true,
        exercise: { items: config.scramble },
      },
    },
    production: {
      task: {
        instruction: "Complete the tasks:",
        type: "checkbox",
        items: config.production.map((item, index) => ({
          content: text([item]),
          textarea: index < 2,
        })),
      } satisfies ListProps,
    },
  };
}
