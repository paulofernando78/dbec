import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import {
  content,
  audio,
  bold,
  portuguese,
  lineBreak,
  spacer,
} from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

export const beginnerMyFamily = {
  whiteboard: {
    title: "A1 Beginner",
    subtitle: "My Family",
    descriptions: ["This is my family.", "Who's she? She's my sister."],
  },

  introduction: {
    instruction: ["Look at Laura’s family."],
    imgSrc: "/assets/img/course/a1/my-family/introduction/laura-family-tree.avif",
    imgAlt: "Laura’s family tree showing three generations",
    questions: [
      [
        audio("Is Laura’s family big or small?"),
        "Is Laura’s family big or small?",
      ],
      [audio("Is your family big or small?"), "Is your family big or small?"],
    ],
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: shuffle([
          {
            question: "The pictures show:",
            options: [
              { option: "Laura’s friend", isCorrect: false },
              { option: "Laura's family", isCorrect: true },
            ],
          },
        ]),
      },
    },
  },

  presentation: {
    instruction: [
      "Look at Laura and Liz talking about Laura‘s family photo album.",
    ],
    imgSrc:
      "/assets/img/course/a1/my-family/presentation/laura-liz-photo-album.avif",
    imgAlt: "Laura with her family",
    dialogue: {
      instruction: "Listen to the dialogue.",
      audioSrc: "/",
      lines: [
        {
          speaker: "Laura",
          line: ["Hey Liz, Come here. Let me show you my family photo album."],
        },
        {
          speaker: "Liz",
          line: ["Oh, great!"],
        },
        {
          speaker: "Laura",
          line: ["Look. This is my mother. Her name is Heather."],
        },
        {
          speaker: "Liz",
          line: ["And who's he?"],
        },
        {
          speaker: "Laura",
          line: ["He's my father. His name is Robert."],
        },
        {
          speaker: "Liz",
          line: ["Who's she?"],
        },
        {
          speaker: "Laura",
          line: ["She's my sister, Kate."],
        },
        {
          speaker: "Liz",
          line: ["And who's he?"],
        },
        {
          speaker: "Laura",
          line: ["He's my brother, Tom."],
        },
        {
          speaker: "Liz",
          line: ["And who are they?"],
        },
        {
          speaker: "Laura",
          line: [
            "They’re my grandparents. Their names are James and Patricia Palmer. They’re my dad’s parents.",
          ],
        },
        {
          speaker: "Liz",
          line: ["How about William and Mary Smith?"],
        },
        {
          speaker: "Laura",
          line: [
            "They are also my grandparents, but they’re my mom’s parents.",
          ],
        },
        {
          speaker: "Liz",
          line: ["Nice. Your family is big!"],
        },
        {
          speaker: "Laura",
          line: ["Yes, it is."],
        },
      ],
    },
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Laura's album is:",
            options: [
              { option: "A school album.", isCorrect: false },
              { option: "A family photo album.", isCorrect: true },
            ],
          },
          {
            question: "Laura’s father is:",
            options: [
              { option: "William.", isCorrect: false },
              { option: "Robert.", isCorrect: true },
            ],
          },
          {
            question: "Laura's brother is:",
            options: [
              { option: "Tom.", isCorrect: true },
              { option: "Robert.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  languageFocus: {
    storyCarousel: {
      instruction: "Now look at the pictures and listen to the sentences.",
      imgs: [
        // Laura’s grandpa (William Smith)
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-grandpa-william.avif",
          alt: "Laura with her grandpa (William Smith)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandpa. His name’s William Smith." (He’s / It’s Laura’s grandpa.)',
                ),
                'Laura says: "This is my grandpa. His name’s William Smith."',
                lineBreak(),
                "(He’s / It’s Laura’s grandpa.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura’s grandma (Mary Smith)
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-grandma-mary.avif",
          alt: "Laura with her grandma (Mary Smith)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandma. Her name’s Mary Smith." (She’s / It’s Laura’s grandma.)',
                ),
                'Laura says: "This is my grandma. Her name’s Mary Smith."',
                lineBreak(),
                "(She’s / It’s Laura’s grandma.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura‘s grandpa (James Palmer)
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-grandpa-james.avif",
          alt: "Laura with her grandpa (James Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandpa. His name’s James Palmer." (He’s / It’s Laura’s grandpa.)',
                ),
                'Laura says: "This is my grandpa. His name’s James Palmer."',
                lineBreak(),
                "(He’s / It’s Laura’s grandpa.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura’s grandma (Patricia Palmer)
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-grandma-patricia.avif",
          alt: "Laura with her grandma (Patricia Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandma. Her name’s Patricia Palmer." (She’s / It’s Laura’s grandma.)',
                ),
                'Laura says: "This is my grandma. Her name’s Patricia Palmer."',
                lineBreak(),
                "(She’s / It’s Laura’s grandma.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura’s mom
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-mom.avif",
          alt: "Laura with her mom (Heather Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my mom. Her name’s Heather Palmer." (She‘s / It’s Laura’s mom.)',
                ),
                'Laura says: "This is my mom. Her name’s Heather Palmer."',
                lineBreak(),
                "(She‘s / It’s Laura’s mom.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura’s dad
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-dad.avif",
          alt: "Laura with her dad (Robert Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my dad. His name’s Robert Palmer." (He’s / It’s Laura’s dad.)',
                ),
                'Laura says: "This is my dad. His name’s Robert Palmer."',
                lineBreak(),
                "(He’s / It’s Laura’s dad.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura’s brother.
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-brother.avif",
          alt: "Laura with her brother (Tom Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my brother. His name’s Tom Palmer." (He’s / It’s Laura’s brother.)',
                ),
                'Laura says: "This is my brother. His name’s Tom Palmer."',
                lineBreak(),
                "(He’s / It’s Laura’s brother.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura’s sister
        {
          src: "/assets/img/course/a1/my-family/language-focus/laura-sister.avif",
          alt: "Laura with her sister (Kate Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my sister. Her name’s Kate Palmer." (She’s / It’s Laura’s sister.)',
                ),
                'Laura says: "This is my sister. Her name’s Kate Palmer."',
                lineBreak(),
                "(She’s / It’s Laura’s sister.)",
                portuguese(""),
              ],
            }),
          ],
        },
      ],
    },
    meaning: [
      {
        as: "span",
        parts: [bold('Take a look at "Family" vocab.')],
      },
    ] satisfies Meaning[],
    column: {
      width: 231,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Possessive Adjectives",
          items: [
            { parts: [audio("my"), "my ", portuguese("meu, minha")] },
            { parts: [audio("your"), "your ", portuguese("seu, sua")] },
            { parts: [audio("his"), "his ", portuguese("dele")] },
            { parts: [audio("her"), "her ", portuguese("dela")] },
            { parts: [audio("our"), "our ", portuguese("nosso, nossa")] },
            { parts: [audio("their"), "their ", portuguese("deles, delas")] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Family",
          items: [
            {
              parts: [
                audio("Grandparents"),
                bold("Grandparents"),
                " ",
                portuguese("avós"),
              ],
            },
            {
              parts: [
                audio("grandfather (grandpa)"),
                "grandfather (grandpa) ",
                portuguese("avô (vovô)"),
              ],
            },
            {
              parts: [
                audio("grandmother (grandma)"),
                "grandmother (grandma) ",
                portuguese("avó (vovó)"),
              ],
            },
            spacer(),
            {
              parts: [
                audio("Parents"),
                bold("Parents "),
                " ",
                portuguese("pais"),
              ],
            },
            {
              parts: [
                audio("father (dad / daddy)"),
                "father (dad / daddy) ",
                portuguese("pai (papai)"),
              ],
            },
            {
              parts: [
                audio("mother (mom / mommy)"),
                "mother (mom / mommy) ",
                portuguese("mãe (mamãe)"),
              ],
            },
            spacer(),
            {
              parts: [
                audio("Siblings"),
                bold("Siblings "),
                " ",
                portuguese("irmãos"),
              ],
            },
            {
              parts: [audio("brother"), "brother ", portuguese("irmão")],
            },
            { parts: [audio("sister"), "sister ", portuguese("irmã")] },
            spacer(),
            {
              parts: [
                audio("Relatives"),
                bold("Relatives "),
                " ",
                portuguese("parentes"),
              ],
            },
            {
              parts: [audio("uncle"), "uncle ", portuguese("tio")],
            },
            {
              parts: [audio("aunt"), "aunt ", portuguese("tia")],
            },
            {
              parts: [audio("cousin"), "cousin ", portuguese("primo, prima")],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Possessive ’s",
          items: [
            {
              parts: [
                audio("John's brother"),
                "John's brother ",
                portuguese("irmão do John"),
              ],
            },
            {
              parts: [
                audio("Maria's mother"),
                "Maria's mother ",
                portuguese("mãe da Maria"),
              ],
            },
            {
              parts: [
                audio("Ben's sister"),
                "Ben's sister ",
                portuguese("irmã do Ben"),
              ],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [audio("the sound of your"), 'the sound of "your"'],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["Is your grandmother"],
        options: [
          { option: "your mother’s mother", isCorrect: true },
          { option: "your sister?", isCorrect: false },
        ],
      },
      {
        as: "span",
        parts: ['Are "mother" and "father" your parents?'],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
      {
        as: "span",
        parts: ["Is a cousin your brother?"],
        options: [
          { option: "Yes", isCorrect: false },
          { option: "No", isCorrect: true },
        ],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            imgSrc:
              "/assets/img/course/a1/my-family/practice/radio/mother-mom.avif",
            imgAlt: "Laura’s mom",
            question: "This is Laura’s mom.",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
          {
            imgSrc:
              "/assets/img/course/a1/my-family/practice/radio/brother.avif",
            imgAlt: "Laura’s brother",
            question: "This is Laura’s dad.",
            options: [
              { option: "True", isCorrect: false },
              { option: "False", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/course/a1/my-family/practice/radio/sister.avif",
            imgAlt: "Laura’s sister",
            question: "This is Laura’s sister.",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
          {
            imgSrc:
              "/assets/img/course/a1/my-family/practice/radio/father-dad.avif",
            imgAlt: "Laura’s dad",
            question: "This is Laura’s brother.",
            options: [
              { option: "True", isCorrect: false },
              { option: "False", isCorrect: true },
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
          content: ["Introduce three people and say how they are related."],
        },

        {
          content: ["Write three short captions using my, his, or her."],
          textarea: true,
        },

        {
          content: [
            "Include one possessive ’s phrase, for example, “Laura’s brother”.",
          ],
        },
      ],
    } satisfies ListProps,
  },
};
