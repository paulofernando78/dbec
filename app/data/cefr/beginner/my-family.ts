import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { cefrLessonsCardData } from "@/data/cefr/cefr-lessons-card-data";
const href = "/cefr/beginner/my-family";
const data = cefrLessonsCardData.beginner.find(
  (lesson) => lesson.href === href,
)!;

export const beginnerMyFamily = {
  whiteboard: {
    title: "A1 BEGINNER",
    subtitle: "My Family",
    descriptions: ["This is my family.", "Who's she? She's my sister."],
  },

  lessonCard: {
    lessonObjective: data.lessonObjective,
    grammar: data.grammar,
    vocabulary: data.vocabulary,
  },

  introduction: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      words: [
        {
          src: "/assets/img/cefr/a1/unit-2-my-family/introduction/laura-mother.avif",
          alt: "Mother",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-my-family/introduction/laura-mom.mp3",
                ),
                'Laura says: "This is my mom."',
              ],
            }),
          ],
        },
        {
          src: "/",
          alt: "Father",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-my-family/introduction/laura-dad.mp3",
                ),
                'Laura says: "This is my dad."',
              ],
            }),
          ],
        },
        {
          src: "/",
          alt: "Sister",
          content: [
            ...content({
              parts: [audio("/"), "This is my sister."],
            }),
          ],
        },
        {
          src: "/",
          alt: "Brother",
          content: [
            ...content({
              parts: [audio("/"), "This is my brother."],
            }),
          ],
        },
      ],
    },

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Who is Anna?",
            options: [
              { option: "Mother", isCorrect: false },
              { option: "Sister", isCorrect: true },
            ],
          },
          {
            question: "Who is David?",
            options: [
              { option: "Father", isCorrect: true },
              { option: "Brother", isCorrect: false },
            ],
          },
          {
            question: "Is this a family?",
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/cefr/a1/unit-2-my-family/introduction/laura-mother.avif",
          alt: "Mother",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-my-family/introduction/laura-mom.mp3",
                ),
                'Laura says: "This is my mom."',
              ],
            }),
          ],
        },
        {
          src: "/",
          alt: "Father",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-my-family/introduction/laura-dad.mp3",
                ),
                'Laura says: "This is my dad."',
              ],
            }),
          ],
        },
        {
          src: "/",
          alt: "Father",
          content: [
            ...content({
              parts: [
                audio(
                  "/assets/audio/cefr/a1/unit-1-my-family/introduction/laura-brother.mp3",
                ),
                'Laura says: "This is my brother."',
              ],
            }),
          ],
        },
      ],
    },
    dialogue: {
      prompt: "Listen and read.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Emma",
          line: text(["Hi, Jake. Who's this?"]),
        },
        {
          speaker: "Jake",
          line: text(["This is my family."]),
        },
        {
          speaker: "Emma",
          line: text(["Who's she?"]),
        },
        {
          speaker: "Jake",
          line: text(["She's my mother, Sarah."]),
        },
        {
          speaker: "Emma",
          line: text(["And who's he?"]),
        },
        {
          speaker: "Jake",
          line: text(["He's my father, David."]),
        },
        {
          speaker: "Emma",
          line: text(["Do you have any brothers or sisters?"]),
        },
        {
          speaker: "Jake",
          line: text([
            "Yes. This is my sister, Lily, and this is my brother, Ben.",
          ]),
        },
        {
          speaker: "Emma",
          line: text(["You have a nice family."]),
        },
        {
          speaker: "Jake",
          line: text(["Thank you!"]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "...",
            options: [
              { option: "...", isCorrect: false },
              { option: "...", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  languageFocus: {
    meaning: [
      {
        as: "span",
        parts: [audio("/"), "mother"],
      },
      {
        as: "span",
        parts: [audio("/"), "father"],
      },
      {
        as: "span",
        parts: [audio("/"), "sister"],
      },
      {
        as: "span",
        parts: [audio("/"), "brother"],
      },
    ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Family",
          items: [
            { parts: [audio("/"), "mother"] },
            { parts: [audio("/"), "father"] },
            { parts: [audio("/"), "parents"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Siblings",
          items: [
            { parts: [audio("/"), "brother"] },
            { parts: [audio("/"), "sister"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Possessive Adjectives",
          items: [
            { parts: [audio("/"), "my"] },
            { parts: [audio("/"), "his"] },
            { parts: [audio("/"), "her"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [bold("my"), " = belongs to me"],
      },
      {
        as: "span",
        parts: [bold("his"), " = belongs to a man or boy"],
      },
      {
        as: "span",
        parts: [bold("her"), " = belongs to a woman or girl"],
      },
      {
        as: "span",
        parts: [bold("John's"), " = belonging to John"],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["In 'my mother', whose mother is she?"],
      },
      {
        as: "span",
        parts: ["In 'his sister', are we talking about a boy or a girl?"],
      },
      {
        as: "span",
        parts: ["In 'John's brother', does the brother belong to John?"],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Who's she?",
            options: [
              { option: "My mother", isCorrect: true },
              { option: "My brother", isCorrect: false },
            ],
          },
          {
            question: "Who's he?",
            options: [
              { option: "My father", isCorrect: true },
              { option: "My sister", isCorrect: false },
            ],
          },
          {
            question: "Mary's brother means:",
            options: [
              { option: "The brother of Mary", isCorrect: true },
              { option: "Mary's father", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "...",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "This is my " },
              { blank: "mother" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "This is my " },
              { blank: "father" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Anna is my " },
              { blank: "sister" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Tom is my " },
              { blank: "brother" },
              { text: "." },
            ],
            lineBreak: true,
          },
        ],
      },
    },

    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentence.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "my / this / family / is",
            answer: "This is my family.",
          },
          {
            prompt: "she / sister / my / is",
            answer: "She is my sister.",
          },
          {
            prompt: "John's / brother / Ben / is",
            answer: "Ben is John's brother.",
          },
        ],
      },
    },
  },

  production: {
    task: {
      instruction: "Complete the tasks:",
      type: "checkbox",
      items: [
        {
          content: text(["Introduce three people in your family."]),
        },

        {
          content: text(["Write three sentences using my, his, or her."]),
        },

        {
          content: text(["Write two sentences using possessive ’s."]),
        },
      ],
    } satisfies ListProps,
  },
};
