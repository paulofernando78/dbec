import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, text, audio, bold } from "@/helpers/content";

import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";
const href = "/courses/beginner/my-family";
const data = courseLessonsCardData.beginner.find(
  (lesson) => lesson.href === href,
)!;

export const beginnerMyFamily = {
  whiteboard: {
    title: "A1 Beginner",
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
          src: "/assets/img/courses/a1/unit-2-my-family/introduction/laura-mom.avif",
          alt: "Laura with her Mom",
          content: [
            ...content({
              parts: [
                audio(
                  "Laura says: \"This is my mom.\"",
                ),
                'Laura says: "This is my mom."',
              ],
            }),
          ],
        },
        {
          src: "/assets/img/courses/a1/unit-2-my-family/introduction/laura-dad.avif",
          alt: "Laura ith her Dad",
          content: [
            ...content({
              parts: [
                audio(
                  "Laura says: \"This is my dad.\"",
                ),
                'Laura says: "This is my dad."',
              ],
            }),
          ],
        },
        {
          src: "/assets/img/courses/a1/unit-2-my-family/introduction/laura-brother.avif",
          alt: "Laura with her brother",
          content: [
            ...content({
              parts: [
                audio(
                  "Laura says: \"This is my brother.\"",
                ),
                'Laura says: "This is my brother."',
              ],
            }),
          ],
        },
        {
          src: "/assets/img/courses/a1/unit-2-my-family/introduction/laura-sister.avif",
          alt: "Mother",
          content: [
            ...content({
              parts: [
                audio(
                  "Laura says: \"This is my sister.\"",
                ),
                'Laura says: "This is my sister."',
              ],
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
            imgSrc:
              "/assets/img/courses/a1/unit-2-my-family/introduction/true-false/mother-mom.avif",
            imgAlt: "Laura’s mom",
            question: "This is Laura’s sister.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/courses/a1/unit-2-my-family/introduction/true-false/brother.avif",
            imgAlt: "Laura’s brother",
            question: "This is Laura’s dad.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/courses/a1/unit-2-my-family/introduction/true-false/sister.avif",
            imgAlt: "Laura’s sister",
            question: "This is Laura’s mom.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/courses/a1/unit-2-my-family/introduction/true-false/father-dad.avif",
            imgAlt: "Laura’s dad",
            question: "This is Laura’s brother",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
        ],
      },
    },
  },

  presentation: {
    dialogue: {
      prompt: "Listen and read.",
      audioSrc: "",
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
            question: "Who is Sarah?",
            options: [
              { option: "Jake's mother", isCorrect: true },
              { option: "Jake's sister", isCorrect: false },
            ],
          },
          {
            question: "How many siblings does Jake introduce?",
            options: [
              { option: "Two", isCorrect: true },
              { option: "One", isCorrect: false },
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
        parts: ["mother"],
      },
      {
        as: "span",
        parts: ["father"],
      },
      {
        as: "span",
        parts: ["sister"],
      },
      {
        as: "span",
        parts: ["brother"],
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
            { parts: ["mother"] },
            { parts: ["father"] },
            { parts: ["parents"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Siblings",
          items: [{ parts: ["brother"] }, { parts: ["sister"] }],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Possessive Adjectives",
          items: [
            { parts: ["my"] },
            { parts: ["your"] },
            { parts: ["his"] },
            { parts: ["her"] },
            { parts: ["our"] },
            { parts: ["their"] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Possessive ’s",
          items: [
            { parts: ["John's brother"] },
            { parts: ["Maria's mother"] },
            { parts: ["Ben's sister"] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [bold("my"), " = belongs to the speaker"],
      },
      {
        as: "span",
        parts: [bold("your"), " = belongs to the person we are speaking to"],
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
        parts: [bold("John's brother"), " = the brother of John"],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["In 'my mother', whose mother is she?"],
      },
      {
        as: "span",
        parts: [
          "In 'his sister', is the person who has the sister male or female?",
        ],
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
      instruction: "Complete the sentences with the correct family word.",
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
