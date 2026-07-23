import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import {
  content,
  text,
  audio,
  bold,
  portuguese,
  lineBreak,
} from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

export const beginnerMyFamily = {
  whiteboard: {
    title: "A1 Beginner",
    subtitle: "My Family",
    descriptions: ["This is my family.", "Who's she? She's my sister."],
  },

  introduction: {
    // Laura’s family
    instruction: text(["Look at Laura’s family."]),
    imgSrc: "/assets/img/courses/a1/my-family/introduction/laura-family.avif",
    imgAlt: "Laura with her mom (Heather Palmer)",
    storyCarousel: {
      instruction: "Now look at the pictures and listen to the sentences.",
      imgs: [
        // Laura with her mom (Heather Palmer)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-mom.avif",
          alt: "Laura with her mom (Heather Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my mom. Her name’s Heather Palmer." (It’s Laura’s mom.)',
                ),
                'Laura says: "This is my mom. Her name’s Heather Palmer."',
                lineBreak(),
                "(It’s Laura’s mom.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her dad (Robert Palmer)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-dad.avif",
          alt: "Laura with her dad (Robert Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my dad. His name’s Robert Palmer." (It’s Laura’s dad.)',
                ),
                'Laura says: "This is my dad. His name’s Robert Palmer."',
                lineBreak(),
                "(It’s Laura’s dad.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her brother (Tom Palmer)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-brother.avif",
          alt: "Laura with her brother (Tom Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my brother. His name’s Tom Palmer." (It’s Laura’s brother.)',
                ),
                'Laura says: "This is my brother. His name’s Tom Palmer."',
                lineBreak(),
                "(It’s Laura’s brother.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her sister (Kate Palmer)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-sister.avif",
          alt: "Laura with her sister (Kate Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my sister. Her name’s Kate Palmer." (It’s Laura’s sister.)',
                ),
                'Laura says: "This is my sister." Her name’s Kate Palmer.',
                lineBreak(),
                "(It’s Laura’s sister.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandapa (William Smith)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-grandpa-william.avif",
          alt: "Laura with her grandpa (William Smith)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my Grandpa. His name’s William Smith." (It’s Laura’s Grandpa.)',
                ),
                'Laura says: "This is my Grandpa. His name’s William Smith."',
                lineBreak(),
                "(It’s Laura’s Grandpa.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandma (Mary Smith)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-grandma-mary.avif",
          alt: "Laura with her grandma (Mary Smith)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my Grandma. Her name’s Mary Smith." (It’s Laura’s Grandma.)',
                ),
                'Laura says: "This is my Grandma. Her name’s Mary Smith."',
                lineBreak(),
                "(It’s Laura’s Grandma.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandapa (James Palmer)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-grandpa-james.avif",
          alt: "Laura with her grandapa (James Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my Grandpa. His name’s James Palmer." (It’s Laura’s Grandpa.)',
                ),
                'Laura says: "This is my Grandpa. His name’s James Palmer."',
                lineBreak(),
                "(It’s Laura’s Grandpa.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandma (Patricia Palmer)
        {
          src: "/assets/img/courses/a1/my-family/introduction/laura-grandma-patricia.avif",
          alt: "Laura with her grandma (Patricia Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my Grandma. Her name’s Patricia Palmer." (It’s Laura’s Grandma.)',
                ),
                'Laura says: "This is my Grandma. Her name’s Patricia Palmer."',
                lineBreak(),
                "(It’s Laura’s Grandma.)",
                portuguese(""),
              ],
            }),
          ],
        },
      ],
    },

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: shuffle([
          {
            imgSrc:
              "/assets/img/courses/a1/my-family/introduction/true-false/mother-mom.avif",
            imgAlt: "Laura’s mom",
            question: "This is Laura’s sister.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/courses/a1/my-family/introduction/true-false/brother.avif",
            imgAlt: "Laura’s brother",
            question: "This is Laura’s dad.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/courses/a1/my-family/introduction/true-false/sister.avif",
            imgAlt: "Laura’s sister",
            question: "This is Laura’s mom.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/courses/a1/my-family/introduction/true-false/father-dad.avif",
            imgAlt: "Laura’s dad",
            question: "This is Laura’s brother",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
        ]),
      },
    },
  },

  presentation: {
    dialogue: {
      instruction: "Listen and read.",
      audioSrc: "",
      lines: [
        {
          speaker: "Laura",
          line: text(["This is my family photo album."]),
        },
        {
          speaker: "Liz",
          line: text(["Really? Can I see it?"]),
        },
        {
          speaker: "Laura",
          line: text(["Of course! This is my mother."]),
        },
        {
          speaker: "Liz",
          line: text(["She looks very kind."]),
        },
        {
          speaker: "Laura",
          line: text(["And this is my father."]),
        },
        {
          speaker: "Liz",
          line: text(["He has a nice smile."]),
        },
        {
          speaker: "Laura",
          line: text(["This is my younger sister."]),
        },
        {
          speaker: "Liz",
          line: text(["She is very cute!"]),
        },
        {
          speaker: "Laura",
          line: text(["And this is my older brother."]),
        },
        {
          speaker: "Liz",
          line: text(["Wow! You have a big family."]),
        },
        {
          speaker: "Laura",
          line: text(["Yes, I do. I love my family."]),
        },
        {
          speaker: "Liz",
          line: text(["They look wonderful, Laura."]),
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What is Laura showing Liz?",
            options: [
              { option: "Her family photo album", isCorrect: true },
              { option: "Her school album", isCorrect: false },
            ],
          },
          {
            question: "Who does Laura introduce after her father?",
            options: [
              { option: "Her younger sister", isCorrect: true },
              { option: "Her older brother", isCorrect: false },
            ],
          },
          {
            question: "What does Liz say about Laura's family?",
            options: [
              { option: "They look wonderful", isCorrect: true },
              { option: "They look serious", isCorrect: false },
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
      instruction: "Use a family photo, a fictional family, or a drawing:",
      type: "checkbox",
      items: [
        {
          content: text([
            "Introduce three people and say how they are related.",
          ]),
        },

        {
          content: text(["Write three short captions using my, his, or her."]),
          textarea: true,
        },

        {
          content: text([
            "Include one possessive ’s phrase, for example, “Laura’s brother”.",
          ]),
        },
      ],
    } satisfies ListProps,
  },
};
