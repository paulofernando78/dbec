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
    // Laura’s family
    instruction: ["Look at Laura’s family."],
    imgSrc: "/assets/img/course/a1/my-family/introduction/laura-family.avif",
    imgAlt: "Laura with her family",
    questions: [
      [audio("/"), "Is your Laura’s family big or small?"],
      [audio("/"), "Is your family big or small?"],
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
    storyCarousel: {
      instruction: "Now look at the pictures and listen to the sentences.",
      imgs: [
        // Laura with her mom (Heather Palmer)
        {
          src: "/assets/img/course/a1/my-family/introduction/laura-mom.avif",
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
          src: "/assets/img/course/a1/my-family/introduction/laura-dad.avif",
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
          src: "/assets/img/course/a1/my-family/introduction/laura-brother.avif",
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
          src: "/assets/img/course/a1/my-family/introduction/laura-sister.avif",
          alt: "Laura with her sister (Kate Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my sister. Her name’s Kate Palmer." (It’s Laura’s sister.)',
                ),
                'Laura says: "This is my sister. Her name’s Kate Palmer."',
                lineBreak(),
                "(It’s Laura’s sister.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandpa (William Smith)
        {
          src: "/assets/img/course/a1/my-family/introduction/laura-grandpa-william.avif",
          alt: "Laura with her grandpa (William Smith)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandpa. His name’s William Smith." (It’s Laura’s grandpa.)',
                ),
                'Laura says: "This is my grandpa. His name’s William Smith."',
                lineBreak(),
                "(It’s Laura’s grandpa.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandma (Mary Smith)
        {
          src: "/assets/img/course/a1/my-family/introduction/laura-grandma-mary.avif",
          alt: "Laura with her grandma (Mary Smith)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandma. Her name’s Mary Smith." (It’s Laura’s grandma.)',
                ),
                'Laura says: "This is my grandma. Her name’s Mary Smith."',
                lineBreak(),
                "(It’s Laura’s grandma.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandpa (James Palmer)
        {
          src: "/assets/img/course/a1/my-family/introduction/laura-grandpa-james.avif",
          alt: "Laura with her grandpa (James Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandpa. His name’s James Palmer." (It’s Laura’s grandpa.)',
                ),
                'Laura says: "This is my grandpa. His name’s James Palmer."',
                lineBreak(),
                "(It’s Laura’s grandpa.)",
                portuguese(""),
              ],
            }),
          ],
        },
        // Laura with her grandma (Patricia Palmer)
        {
          src: "/assets/img/course/a1/my-family/introduction/laura-grandma-patricia.avif",
          alt: "Laura with her grandma (Patricia Palmer)",
          content: [
            ...content({
              parts: [
                audio(
                  'Laura says: "This is my grandma. Her name’s Patricia Palmer." (It’s Laura’s grandma.)',
                ),
                'Laura says: "This is my grandma. Her name’s Patricia Palmer."',
                lineBreak(),
                "(It’s Laura’s grandma.)",
                portuguese(""),
              ],
            }),
          ],
        },
      ],
    },
    dialogue: {
      instruction: "Listen and read.",
      audioSrc: "",
      lines: [
        {
          speaker: "Laura",
          line: ["This is my family photo album."],
        },
        {
          speaker: "Liz",
          line: ["Oh, nice!"],
        },
        {
          speaker: "Laura",
          line: ["This is my mother. Her name is Heather."],
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
          line: ["A nice family!"],
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
    // meaning: [
    //   {
    //     as: "span",
    //     parts: ["mother"],
    //   },
    //   {
    //     as: "span",
    //     parts: ["father"],
    //   },
    //   {
    //     as: "span",
    //     parts: ["sister"],
    //   },
    //   {
    //     as: "span",
    //     parts: ["brother"],
    //   },
    //   {
    //     as: "span",
    //     parts: ["grandmother / grandma"],
    //   },
    //   {
    //     as: "span",
    //     parts: ["grandfather / grandpa"],
    //   },
    // ] satisfies Meaning[],
    column: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Family",
          items: [
            { parts: [bold("parents")] },
            { parts: ["father (dad / daddy)"] },
            { parts: ["mother (mom / mommy)"] },
            spacer(),
            { parts: [bold("grandparents")] },
            { parts: ["grandfather (grandpa)"] },
            { parts: ["grandmother (grandma)"] },
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
        parts: [audio("the sound of your"), 'the sound of "your"'],
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["“My mother”: the speaker’s mother or the listener’s mother?"],
      },
      {
        as: "span",
        parts: ["“His sister”: the sister of a man/boy or a woman/girl?"],
      },
      {
        as: "span",
        parts: [
          "“John’s brother”: the brother of John or the brother of Mary?",
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
              "/assets/img/course/a1/my-family/introduction/true-false/mother-mom.avif",
            imgAlt: "Laura’s mom",
            question: "This is Laura’s mom.",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
          {
            imgSrc:
              "/assets/img/course/a1/my-family/introduction/true-false/brother.avif",
            imgAlt: "Laura’s brother",
            question: "This is Laura’s dad.",
            options: [
              { option: "True", isCorrect: false },
              { option: "False", isCorrect: true },
            ],
          },
          {
            imgSrc:
              "/assets/img/course/a1/my-family/introduction/true-false/sister.avif",
            imgAlt: "Laura’s sister",
            question: "This is Laura’s sister.",
            options: [
              { option: "True", isCorrect: true },
              { option: "False", isCorrect: false },
            ],
          },
          {
            imgSrc:
              "/assets/img/course/a1/my-family/introduction/true-false/father-dad.avif",
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
