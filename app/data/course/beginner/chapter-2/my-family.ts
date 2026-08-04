import { content, audio, bold, portuguese, lineBreak } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

export const beginnerMyFamily = {
  whiteboard: {
    title: "A1 Beginner",
    subtitle: "My Nuclear Family",
    descriptions: ["This is my family.", "Who's she? She's my sister."],
  },

  introduction: {
    blocks: [
      {
        type: "line",
        value: ["Look at Laura’s family."],
        className: "font-bold mb-4",
      },
      {
        type: "image",
        src: "/assets/img/course/a1/my-family/introduction/laura-family-tree.avif",
        alt: "Laura’s family tree showing three generations",
      },
      {
        type: "lines",
        value: [
          [
            audio("Is Laura’s family big or small?"),
            "Is Laura’s family big or small?",
          ],
          [
            audio("Is your family big or small?"),
            "Is your family big or small?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "radio",
        ...{
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
    ],
  },

  presentation: {
    blocks: [
      {
        type: "line",
        value: [
          "Look at Laura and Liz talking about Laura’s family photo album.",
        ],
        className: "font-bold mb-4",
      },
      {
        type: "image",
        src: "/assets/img/course/a1/my-family/presentation/laura-liz-photo-album.avif",
        alt: "Laura with her family",
      },
      {
        type: "dialogue",
        ...{
          instruction: [
            "Listen once: is Laura describing friends, classmates, or family members?",
          ],
          audioSrc: "",
          lines: [
            {
              speaker: "Laura",
              line: ["Hey, Liz. Let me show you my family photo album."],
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
      },
      {
        type: "radio",
        ...{
          instruction: "Listen again and choose the correct answer.",
          exercise: {
            questions: [
              {
                question: "Laura is describing:",
                options: [
                  { option: "Family members.", isCorrect: true },
                  { option: "Classmates.", isCorrect: false },
                ],
              },
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
    ],
  },

  languageFocus: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction:
            "Listen to the questions and answers from Laura's conversation. Notice how the language changes for one person and more than one person.",
          imgs: [
            {
              src: "/assets/img/course/a1/my-family/language-focus/laura-mom.avif",
              alt: "Laura showing a photo of her mother, Heather",
              content: [
                ...content({
                  parts: [
                    audio("Who’s she? She’s my mother. Her name is Heather."),
                    bold("Who’s she?"),
                    " She’s my mother. Her name is Heather.",
                    lineBreak(),
                    portuguese(
                      "Quem é ela? Ela é minha mãe. O nome dela é Heather.",
                    ),
                  ],
                }),
              ],
            },
            {
              src: "/assets/img/course/a1/my-family/language-focus/laura-dad.avif",
              alt: "Laura showing a photo of her father, Robert",
              content: [
                ...content({
                  parts: [
                    audio("Who’s he? He’s my father. His name is Robert."),
                    bold("Who’s he?"),
                    " He’s my father. His name is Robert.",
                    lineBreak(),
                    portuguese(
                      "Quem é ele? Ele é meu pai. O nome dele é Robert.",
                    ),
                  ],
                }),
              ],
            },
            {
              src: "/assets/img/course/a1/my-family/language-focus/laura-sister.avif",
              alt: "Laura showing a photo of her sister, Kate",
              content: [
                ...content({
                  parts: [
                    audio("This is my sister. Her name is Kate."),
                    bold("This is my sister."),
                    " Her name is Kate.",
                    lineBreak(),
                    portuguese("Esta é minha irmã. O nome dela é Kate."),
                  ],
                }),
              ],
            },
            {
              src: "/assets/img/course/a1/my-family/introduction/laura-family-tree.avif",
              alt: "Laura's family tree showing her grandparents",
              content: [
                ...content({
                  parts: [
                    audio(
                      "Who are they? They’re my grandparents. Their names are James and Patricia.",
                    ),
                    bold("Who are they?"),
                    " They’re my grandparents. Their names are James and Patricia.",
                    lineBreak(),
                    portuguese(
                      "Quem são eles? Eles são meus avós. Os nomes deles são James e Patricia.",
                    ),
                  ],
                }),
              ],
            },
          ],
        },
      },
      {
        type: "meaning",
        value: [
          {
            as: "p",
            parts: [
              "Use these questions and answers to identify people in a photo and explain their relationship to you.",
            ],
          },
          {
            as: "p",
            parts: [
              bold("he / she"),
              " refers to one person; ",
              bold("they"),
              " refers to two or more people.",
            ],
          },
        ],
      },
      {
        type: "column",
        ...{
          width: 260,
          cols: [
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Ask who",
              items: [
                { parts: [audio("Who’s he?"), bold("Who’s he?")] },
                { parts: [audio("Who’s she?"), bold("Who’s she?")] },
                { parts: [audio("Who are they?"), bold("Who are they?")] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Identify",
              items: [
                { parts: [audio("He’s my father."), "He’s my father."] },
                { parts: [audio("She’s my sister."), "She’s my sister."] },
                {
                  parts: [
                    audio("They’re my grandparents."),
                    "They’re my grandparents.",
                  ],
                },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Introduce and name",
              items: [
                {
                  parts: [audio("This is my mother."), "This is my mother."],
                },
                {
                  parts: [audio("His name is Robert."), "His name is Robert."],
                },
                {
                  parts: [
                    audio("Her name is Heather."),
                    "Her name is Heather.",
                  ],
                },
                {
                  parts: [
                    audio("Their names are James and Patricia."),
                    "Their names are James and Patricia.",
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        type: "column",
        ...{
          width: 250,
          cols: [
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Parents and children",
              items: [
                {
                  parts: [audio("mother"), "mother / mom ", portuguese("mãe")],
                },
                {
                  parts: [audio("father"), "father / dad ", portuguese("pai")],
                },
                { parts: [audio("parents"), "parents ", portuguese("pais")] },
                { parts: [audio("son"), "son ", portuguese("filho")] },
                {
                  parts: [audio("daughter"), "daughter ", portuguese("filha")],
                },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Siblings",
              items: [
                { parts: [audio("brother"), "brother ", portuguese("irmão")] },
                { parts: [audio("sister"), "sister ", portuguese("irmã")] },
                {
                  parts: [audio("siblings"), "siblings ", portuguese("irmãos")],
                },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Grandparents",
              items: [
                {
                  parts: [
                    audio("grandfather"),
                    "grandfather / grandpa ",
                    portuguese("avô"),
                  ],
                },
                {
                  parts: [
                    audio("grandmother"),
                    "grandmother / grandma ",
                    portuguese("avó"),
                  ],
                },
                {
                  parts: [
                    audio("grandparents"),
                    "grandparents ",
                    portuguese("avós"),
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        type: "notes",
        value: [
          {
            as: "span",
            parts: [
              bold("Who’s"),
              " = ",
              bold("Who is"),
              "; ",
              bold("he’s / she’s / they’re"),
              " = ",
              bold("he is / she is / they are"),
              ". Use the contractions in conversation.",
            ],
          },
          {
            as: "span",
            parts: [
              "Use ",
              bold("his"),
              " for a male person, ",
              bold("her"),
              " for a female person, and ",
              bold("their"),
              " for two or more people: ",
              bold("his name, her name, their names"),
              ".",
            ],
          },
          {
            as: "span",
            parts: [
              audio("Who’s SHE? SHE’S my SISter."),
              "Stress the person and family word: Who’s ",
              bold("SHE"),
              "? She’s my ",
              bold("SISter"),
              ".",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: [
              "Does “Who’s she?” ask about one person or several people?",
            ],
            options: [
              { option: "One person", isCorrect: true },
              { option: "Several people", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["Which question asks about two or more people?"],
            options: [
              { option: "Who are they?", isCorrect: true },
              { option: "Who’s he?", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: [
              "In “His name is Robert”, does “his” refer to a man or a woman?",
            ],
            options: [
              { option: "A man", isCorrect: true },
              { option: "A woman", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["Can “their names” refer to James and Patricia together?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      {
        type: "guess",
      },
      {
        type: "radio",
        ...{
          instruction: "Choose the correct answer.",
          exercise: {
            questions: [
              {
                imgSrc:
                  "/assets/img/course/a1/my-family/practice/radio/mother-mom.avif",
                imgAlt: "Laura’s mom",
                question: "Who’s she?",
                options: [
                  { option: "She’s Laura’s mother.", isCorrect: true },
                  { option: "He’s Laura’s father.", isCorrect: false },
                ],
              },
              {
                imgSrc:
                  "/assets/img/course/a1/my-family/practice/radio/brother.avif",
                imgAlt: "Laura’s brother",
                question: "Who’s he?",
                options: [
                  { option: "He’s Laura’s brother.", isCorrect: true },
                  { option: "She’s Laura’s sister.", isCorrect: false },
                ],
              },
              {
                imgSrc:
                  "/assets/img/course/a1/my-family/practice/radio/sister.avif",
                imgAlt: "Laura’s sister",
                question: "Who’s she?",
                options: [
                  { option: "She’s Laura’s sister.", isCorrect: true },
                  { option: "He’s Laura’s brother.", isCorrect: false },
                ],
              },
              {
                imgSrc:
                  "/assets/img/course/a1/my-family/practice/radio/father-dad.avif",
                imgAlt: "Laura’s dad",
                question: "Who’s he?",
                options: [
                  { option: "He’s Laura’s father.", isCorrect: true },
                  { option: "She’s Laura’s mother.", isCorrect: false },
                ],
              },
              {
                question: "Who are James and Patricia?",
                options: [
                  { option: "They’re Laura’s grandparents.", isCorrect: true },
                  { option: "He’s Laura’s grandfather.", isCorrect: false },
                ],
              },
              {
                question: "_____ name is Robert.",
                options: [
                  { option: "His", isCorrect: true },
                  { option: "Her", isCorrect: false },
                ],
              },
              {
                question: "_____ names are James and Patricia.",
                options: [
                  { option: "Their", isCorrect: true },
                  { option: "His", isCorrect: false },
                ],
              },
              {
                question: "This is my sister. _____ name is Kate.",
                options: [
                  { option: "Her", isCorrect: true },
                  { option: "His", isCorrect: false },
                ],
              },
            ],
          },
        },
      },
      {
        type: "fillInTheBlanks",
        ...{
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
              {
                block: [{ blank: "Who’s" }, { text: " she? She’s my mother." }],
                lineBreak: true,
              },
              {
                block: [{ blank: "He’s" }, { text: " my father." }],
                lineBreak: true,
              },
              {
                block: [{ blank: "Her" }, { text: " name is Kate." }],
                lineBreak: true,
              },
              {
                block: [
                  { blank: "Their" },
                  { text: " names are James and Patricia." },
                ],
                lineBreak: true,
              },
            ],
          },
        },
      },
      {
        type: "unscramble",
        ...{
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
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Use a family photo, a fictional family, or a drawing:",
        listType: "checkbox",
        items: [
          {
            content: [
              "Introduce at least three people and say how they are related to you.",
            ],
          },

          {
            content: [
              "Ask and answer at least two questions with “Who’s he/she?” or “Who are they?”.",
            ],
          },
          {
            content: [
              "Give names using his, her, or their, for example, “Her name is Ana.”",
            ],
            textarea: true,
          },

          {
            content: [
              "Show the photo or drawing to a partner and answer one follow-up question.",
            ],
          },
        ],
      },
    ],
  },
};
