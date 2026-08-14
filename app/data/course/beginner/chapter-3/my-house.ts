import { content, audio, bold } from "@/helpers/content";

export const beginnerMyHouse = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: [
      "There is a sofa in the living room.",
      "There are two bedrooms in my house.",
    ],
  },

  introduction: {
    blocks: [
      {
        type: "text",
        value: [
          [
            audio("Which room do you spend the most time in?"),
            "Which room do you spend the most time in?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction: "Look at the pictures and listen to the sentences.",
          imgs: [
            {
              alt: "Living room",
              content: [
                ...content({
                  parts: ["This is the living room."],
                }),
              ],
            },
            {
              alt: "Kitchen",
              content: [
                ...content({
                  parts: ["This is the kitchen."],
                }),
              ],
            },
            {
              alt: "Bedroom",
              content: [
                ...content({
                  parts: ["This is the bedroom."],
                }),
              ],
            },
            {
              alt: "Bathroom",
              content: [
                ...content({
                  parts: ["This is the bathroom."],
                }),
              ],
            },
          ],
        },
      },
      {
        type: "radio",
        ...{
          instruction: "Choose the correct answer.",
          exercise: {
            questions: [
              {
                question: "Sleep:",
                options: [
                  { option: "Bedroom", isCorrect: true },
                  { option: "Kitchen", isCorrect: false },
                ],
              },
              {
                question: "Cook:",
                options: [
                  { option: "Kitchen", isCorrect: true },
                  { option: "Bathroom", isCorrect: false },
                ],
              },
              {
                question: "Watch TV:",
                options: [
                  { option: "Living room", isCorrect: true },
                  { option: "Garage", isCorrect: false },
                ],
              },
            ],
          },
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
          instruction: [
            "Listen once: is Jake describing a house or a workplace?",
          ],
          audioSrc: "",
          lines: [
            {
              speaker: "Emma",
              line: ["Tell me about your house."],
            },
            {
              speaker: "Jake",
              line: ["My house is small but comfortable."],
            },
            {
              speaker: "Emma",
              line: ["How many bedrooms are there?"],
            },
            {
              speaker: "Jake",
              line: ["There are two bedrooms."],
            },
            {
              speaker: "Emma",
              line: ["Is there a living room?"],
            },
            {
              speaker: "Jake",
              line: ["Yes, there is."],
            },
            {
              speaker: "Emma",
              line: ["Is there a TV in the living room?"],
            },
            {
              speaker: "Jake",
              line: ["Yes, there is a TV and a sofa."],
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
                question: "How many bedrooms are there?",
                options: [
                  { option: "Two", isCorrect: true },
                  { option: "Three", isCorrect: false },
                ],
              },
              {
                question: "Is there a living room?",
                options: [
                  { option: "Yes", isCorrect: true },
                  { option: "No", isCorrect: false },
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
        type: "text",
        value: [
          {
            as: "span",
            parts: ["living room"],
          },
          {
            as: "span",
            parts: ["kitchen"],
          },
          {
            as: "span",
            parts: ["bedroom"],
          },
          {
            as: "span",
            parts: ["bathroom"],
          },
        ],
      },
      {
        type: "column",
        ...{
          width: 300,
          cols: [
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Rooms",
              items: [
                { parts: ["living room"] },
                { parts: ["kitchen"] },
                { parts: ["bedroom"] },
                { parts: ["bathroom"] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Furniture",
              items: [
                { parts: ["sofa"] },
                { parts: ["table"] },
                { parts: ["chair"] },
                { parts: ["bed"] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-slate-400",
              textColor: "text-white",
              column: "Grammar",
              items: [
                { parts: ["There is"] },
                { parts: ["There are"] },
                { parts: ["Is there...?"] },
                { parts: ["Are there...?"] },
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
            parts: [bold("There is"), " = singular"],
          },
          {
            as: "span",
            parts: [bold("There are"), " = plural"],
          },
          {
            as: "span",
            parts: [bold("There is a sofa."), " (one sofa)"],
          },
          {
            as: "span",
            parts: [bold("There are two chairs."), " (two chairs)"],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["“There is”: one thing or many things?"],
            options: [
              { option: "One thing", isCorrect: true },
              { option: "Many things", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["“There are”: one thing or many things?"],
            options: [
              { option: "Many things", isCorrect: true },
              { option: "One thing", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["In 'There is a bed', how many beds are there?"],
            options: [
              { option: "One", isCorrect: true },
              { option: "Two", isCorrect: false },
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
                question: "_____ a sofa in the living room.",
                options: [
                  { option: "There is", isCorrect: true },
                  { option: "There are", isCorrect: false },
                ],
              },
              {
                question: "_____ two chairs in the kitchen.",
                options: [
                  { option: "There are", isCorrect: true },
                  { option: "There is", isCorrect: false },
                ],
              },
              {
                question: "_____ a bathroom in the house?",
                options: [
                  { option: "Is there", isCorrect: true },
                  { option: "Are there", isCorrect: false },
                ],
              },
              {
                question: "_____ two bedrooms?",
                options: [
                  { option: "Are there", isCorrect: true },
                  { option: "Is there", isCorrect: false },
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
          instruction:
            "Complete each sentence with there is, there are, is there, or are there.",
          numbered: true,
          exercise: {
            blocks: [
              {
                block: [
                  { text: "" },
                  { blank: "There is" },
                  { text: " a bed in the bedroom." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "" },
                  { blank: "There are" },
                  { text: " two chairs in the kitchen." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "" },
                  { blank: "Is there" },
                  { text: " a sofa in the living room?" },
                ],
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
                prompt: "is / there / sofa / a",
                answer: "There is a sofa.",
              },
              {
                prompt: "are / there / bedrooms / two",
                answer: "There are two bedrooms.",
              },
              {
                prompt: "living room / TV / there / a / is / the / in",
                answer: "There is a TV in the living room.",
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
        instruction: "Describe a room for a partner to identify:",
        listType: "checkbox",
        items: [
          {
            content: ["Choose a room, but do not tell your partner its name."],
          },

          {
            content: [
              "Prepare three sentences with there is/there are, furniture, and a location phrase.",
            ],
            textarea: true,
          },

          {
            content: [
              "Describe the room. Your partner listens and identifies it.",
            ],
          },
        ],
      },
    ],
  },
};
