import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import {
  audio,
  bold,
  content,
  mark,
  phonetics,
  portuguese,
  spacer,
  text,
} from "@/helpers/content";

import { cefrLessonsCardData } from "@/data/cefr/cefr-lessons-card-data";

type StoryItem = {
  src?: string;
  alt: string;
  audio: string;
  before: string;
  verb: string;
  after: string;
  translation: string;
};

type PastLessonConfig = {
  href: string;
  subtitle: string;
  description: string;
  vocabulary: string[];
  story: StoryItem[];
  introQuestions: { question: string; answer: boolean }[];
  dialogue: { speaker: string; line: string }[];
  comprehension: {
    question: string;
    correct: string;
    incorrect: string;
  }[];
  answers: string[];
  ccqExample: string;
  practice: {
    radio: { question: string; correct: string; incorrect: string }[];
    sentences: { before: string; blank: string; after: string }[];
    scramble: { prompt: string; answer: string }[];
  };
  productionTopic: string;
};

export function createPastLesson(config: PastLessonConfig) {
  const data = cefrLessonsCardData.elementary.find(
    (lesson) => lesson.href === config.href,
  )!;

  return {
    whiteboard: {
      title: "A2 Elementary",
      subtitle: config.subtitle,
      descriptions: [config.description],
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
        imgs: config.vocabulary.map((word, index) => ({
          src: config.story[index]?.src ?? "/",
          alt: word,
        })),
      },
      storyCarousel: {
        instruction: "Look at the pictures and listen to the sentences.",
        imgs: config.story.map((item) => ({
          src: item.src ?? "/",
          alt: item.alt,
          content: [
            ...content({
              parts: [
                audio(item.audio),
                item.before,
                mark(item.verb),
                item.after,
                portuguese(item.translation),
              ],
            }),
          ],
        })),
      },
      radio: {
        instruction: "Choose the correct answer.",
        exercise: {
          questions: config.introQuestions.map(({ question, answer }) => ({
            question,
            options: [
              { option: "true", isCorrect: answer },
              { option: "false", isCorrect: !answer },
            ],
          })),
        },
      },
    },

    presentation: {
      dialogue: {
        prompt: "Listen and read.",
        audioSrc: "/",
        lines: config.dialogue.map(({ speaker, line }) => ({
          speaker,
          line: text([line]),
        })),
      },
      radio: {
        instruction: "Choose the correct answer.",
        exercise: {
          questions: config.comprehension.map((item) => ({
            question: item.question,
            options: [
              { option: item.correct, isCorrect: true },
              { option: item.incorrect, isCorrect: false },
            ],
          })),
        },
      },
    },

    languageFocus: {
      meaning: [
        {
          as: "p",
          parts: [
            "Use the ",
            bold("Past Simple"),
            " to talk about finished actions in the past.",
          ],
        },
        spacer(),
        {
          as: "p",
          parts: [
            "Regular verbs usually end in ",
            bold("-ed"),
            ": watched, played, visited.",
          ],
        },
        {
          as: "p",
          parts: [
            "Some verbs are irregular: go ",
            bold("➜ went"),
            ", have ",
            bold("➜ had"),
            ", eat ",
            bold("➜ ate"),
            ".",
          ],
        },
      ] satisfies Meaning[],

      columnQuestions: {
        width: 300,
        cols: [
          {
            borderColor: "border-slate-500",
            bgColor: "bg-slate-400",
            textColor: "text-white",
            column: "Questions",
            items: [
              { parts: [bold("Did"), " + subject + base verb:"] },
              spacer(),
              {
                parts: [
                  audio("What did you do last weekend?"),
                  "What did you do last weekend?",
                ],
              },
              { parts: [audio("Where did you go?"), "Where did you go?"] },
              {
                parts: [audio("Who did you go with?"), "Who did you go with?"],
              },
              { parts: [audio("Did you have fun?"), "Did you have fun?"] },
            ],
          },
          {
            borderColor: "border-slate-500",
            bgColor: "bg-slate-400",
            textColor: "text-white",
            column: "Answers",
            items: config.answers.map((answer) => ({
              parts: [audio(answer), answer],
            })),
          },
        ],
      },

      columnVerbs: {
        width: 300,
        cols: [
          {
            borderColor: "border-slate-500",
            bgColor: "bg-slate-400",
            textColor: "text-white",
            column: "/t/",
            items: [
              {
                as: "span",
                parts: [
                  audio("watch"),
                  "watch ➜ ",
                  audio("watched"),
                  "watch",
                  bold("ed"),
                  " ",
                  phonetics("/t/"),
                ],
              },
            ],
          },
          {
            borderColor: "border-slate-500",
            bgColor: "bg-slate-400",
            textColor: "text-white",
            column: "/d/",
            items: [
              {
                as: "span",
                parts: [
                  audio("play"),
                  "play ➜ ",
                  audio("played"),
                  "play",
                  bold("ed"),
                  " ",
                  phonetics("/d/"),
                ],
              },
            ],
          },
          {
            borderColor: "border-slate-500",
            bgColor: "bg-slate-400",
            textColor: "text-white",
            column: "/ɪd/",
            items: [
              {
                as: "span",
                parts: [
                  audio("visit"),
                  "visit ➜ ",
                  audio("visited"),
                  "visit",
                  bold("ed"),
                  " ",
                  phonetics("/ɪd/"),
                ],
              },
            ],
          },
        ],
      },

      notes: [
        {
          as: "p",
          parts: [
            "Don't say: Did you ",
            bold("went"),
            "? Say: Did you ",
            bold("go"),
            "?",
          ],
        },
      ] satisfies Notes[],

      ccq: [
        { parts: [`In the sentence: "${config.ccqExample}"`] },
        { parts: ["Are we talking about the past or the future?"] },
        { parts: ["Is the action finished?"] },
        { parts: ["After did, do we use the base verb or the past form?"] },
      ] satisfies CCQ[],
    },

    practice: {
      radio: {
        instruction: "Choose the correct answer.",
        exercise: {
          questions: config.practice.radio.map((item) => ({
            question: item.question,
            options: [
              { option: item.correct, isCorrect: true },
              { option: item.incorrect, isCorrect: false },
            ],
          })),
        },
      },
      fillInTheBlanks: {
        showWordBank: true,
        instruction: "Complete the sentences.",
        numbered: true,
        exercise: {
          blocks: config.practice.sentences.map((item) => ({
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
        exercise: { items: config.practice.scramble },
      },
    },

    production: {
      task: {
        instruction: "Complete the tasks:",
        type: "checkbox",
        items: [
          {
            content: text([
              `Write five sentences about ${config.productionTopic}.`,
            ]),
            textarea: true,
          },
          {
            content: text([
              "Write three Past Simple questions and answer them.",
            ]),
            textarea: true,
          },
          {
            content: text([
              `Interview a classmate about ${config.productionTopic}.`,
            ]),
          },
        ],
      } satisfies ListProps,
    },
  };
}
