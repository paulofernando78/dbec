import { audio, bold, lineBreak, spacer } from "@/helpers/content";

const words = [
  { word: "consequence", img: 0 },
  { word: "backup plan", img: 0 },
  { word: "option", img: 0 },
  { word: "risk", img: 0 },
];

export const intermediateWhatIf = {
  whiteboard: {
    title: "B1 Intermediate",
    subtitle: "What If?",
    descriptions: [
      "Discuss realistic future possibilities and consequences.",
      "Use the First Conditional to explain decisions.",
    ],
  },
  introduction: {
    imageQuiz: {
      words,
    },
  },
  presentation: {
    dialogue: {
      instruction: "Read the dialogue and identify the target language.",
      audioSrc: "",
      lines: [
        { speaker: "Kai", line: ["What will we do if it rains tomorrow?"] },
        {
          speaker: "Lena",
          line: ["If it rains, we'll use the community hall."],
        },
        { speaker: "Kai", line: ["Will everyone fit inside?"] },
        {
          speaker: "Lena",
          line: [
            "Yes, but unless people register, we won't know how many chairs we need.",
          ],
        },
        {
          speaker: "Kai",
          line: ["I'll send a reminder if you confirm the deadline."],
        },
      ],
    },
    radio: {
      instruction: "Choose the answer supported by the dialogue.",
      exercise: {
        questions: [
          {
            question: "What will happen if it rains?",
            options: [
              { option: "They will use the hall.", isCorrect: true },
              { option: "They used the park.", isCorrect: false },
            ],
          },
          {
            question: "Why do people need to register?",
            options: [
              {
                option: "So the organizers can plan the chairs.",
                isCorrect: true,
              },
              { option: "To cancel the event.", isCorrect: false },
            ],
          },
          {
            question: "What does unless mean here?",
            options: [
              { option: "If people do not register.", isCorrect: true },
              { option: "Because everyone registers.", isCorrect: false },
            ],
          },
        ],
      },
    },
  },
  languageFocus: {
    storyCarousel: {
      instruction: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/assets/img/course/b1/what-if/language-focus/laura-consequence.avif",
          alt: "Laura works beside a glass of juice, then reacts after it spills across her laptop.",
          content: [
            audio("If Laura knocks over the glass, the juice will spill on her laptop."),
            "If Laura knocks over the glass, the juice will spill on her laptop.",
          ],
        },
        {
          src: "/assets/img/course/b1/what-if/language-focus/laura-backup-plan.avif",
          alt: "Laura presents a backup plan to her colleagues after the laptop stops working.",
          content: [
            audio("If the laptop stops working, Laura will use her backup plan."),
            "If the laptop stops working, Laura will use her backup plan.",
          ],
        },
        {
          src: "/assets/img/course/b1/what-if/language-focus/risk-eric.avif",
          alt: "Eric notices a damaged bridge and chooses the safer path beside the stream.",
          content: [
            audio("If Eric crosses the damaged bridge, he will put himself in danger."),
            "If Eric crosses the damaged bridge, he will put himself in danger.",
          ],
        },
        {
          src: "/assets/img/course/b1/what-if/language-focus/tom-option.avif",
          alt: "Tom considers taking the bus, then chooses to ride his bicycle.",
          content: [
            audio("If Tom does not take the bus, he will ride his bicycle."),
            "If Tom does not take the bus, he will ride his bicycle.",
          ],
        },
      ],
    },
    radio: {
      instruction: "Answer the questions.",
      exercise: {
        questions: [
          {
            question: "What will happen if it rains?",
            options: [
              { option: "They will use the hall.", isCorrect: true },
              { option: "They used the park.", isCorrect: false },
            ],
          },
          {
            question: "Why do people need to register?",
            options: [
              {
                option: "So the organizers can plan the chairs.",
                isCorrect: true,
              },
              { option: "To cancel the event.", isCorrect: false },
            ],
          },
        ],
      },
    },
    meaning: [
      {
        as: "p",
        parts: [bold("Let’s see how the FIRST CONDITIONAL works.")],
      },
      spacer(),
      {
        as: "p",
        parts: [bold("Uses")],
      },
      {
        as: "p",
        parts: [
          audio(
            "We use the First Conditional to talk about a real or possible future condition and its result.",
          ),
          " We use the First Conditional to talk about a real or possible future condition and its result.",
        ],
      },
      spacer(),

      {
        as: "p",
        parts: [
          audio("If you call, I will answer."),
          " If you call, I will answer.",
        ],
      },
      {
        as: "p",
        parts: [
          "Do not normally use ",
          bold("will"),
          " in the if-clause: ",
          bold("If you call"),
          ", not ",
          bold("If you will call"),
          ".",
        ],
      },
      spacer(),
      {
        as: "p",
        parts: [bold("Unless = if ... not")],
      },
      {
        as: "p",
        parts: [
          audio("Unless you hurry, you will miss the bus."),
          " Unless you hurry, you will miss the bus. = If you do not hurry, you will miss the bus.",
        ],
      },
      {
        as: "p",
        parts: [
          bold("Unless"),
          " already has a negative meaning, so do not add ",
          bold("not"),
          " to its clause.",
        ],
      },
      spacer(),
      {
        as: "p",
        parts: [bold("Choosing the result verb")],
      },
      {
        as: "p",
        parts: [
          bold("Will"),
          " expresses an expected future result: If it rains, we ",
          bold("will stay"),
          " inside.",
        ],
      },
      {
        as: "p",
        parts: [
          bold("Can"),
          " expresses ability or an available possibility: If you call, I ",
          bold("can explain"),
          ".",
        ],
      },
      {
        as: "p",
        parts: [
          bold("May"),
          " expresses an uncertain possibility: If I finish early, I ",
          bold("may go"),
          ".",
        ],
      },
      {
        as: "p",
        parts: [
          bold("May"),
          " and ",
          bold("might"),
          " have similar meanings, but ",
          bold("might"),
          " can sound slightly less certain.",
        ],
      },
      {
        as: "p",
        parts: [
          bold("Unless"),
          " introduces the condition; ",
          bold("will, can, may"),
          " and ",
          bold("might"),
          " express different kinds of results. They do not have the same function.",
        ],
      },
    ],
    column: {
      width: 266,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Conditional",
          items: [
            { as: "p", parts: [bold("If + present simple")] },
            { as: "p", parts: ["If it rains,"] },
            { as: "p", parts: ["If you study hard,"] },
            spacer(),
            { as: "p", parts: [bold("unless + present simple")] },
            { as: "p", parts: ["Unless you hurry,"] },
            { as: "p", parts: ["..."] },
            { as: "p", parts: ["..."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Result",
          items: [
            { as: "p", parts: [bold("will/can/may")] },
            { as: "p", parts: ["we will cancel the trip."] },
            { as: "p", parts: ["you will pass the exam."] },
            spacer(),
            spacer(),
            { as: "p", parts: ["you will miss the bus. (If you do not hurry, you will miss the bus)"] },
            { as: "p", parts: ["..."] },
            { as: "p", parts: ["..."] },
          ],
        },
      ],
    },
    column2: {
      width: 320,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "If-clause first",
          items: [
            { as: "p", parts: ["if/unless + Present Simple"] },
            { as: "p", parts: ["If it rains, we'll stay inside."] },
            { as: "p", parts: ["If you call, I can explain."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Result first",
          items: [
            { as: "p", parts: ["will/can/may"] },
            { as: "p", parts: ["We'll stay inside if it rains."] },
            { as: "p", parts: ["I may go if I finish early."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Unless",
          items: [
            { as: "p", parts: ["We won't start unless everyone is ready."] },
            { as: "p", parts: ["Unless you hurry, you'll miss it."] },
          ],
        },
      ],
    },
    notes: [
      {
        as: "p",
        parts: ["..."],
      },
    ],
    ccq: [
      {
        as: "p",
        parts: ["“If it rains, I will stay at home.” Has it happened yet? Is it possible?"],
      },
      spacer(),
      { as: "p", parts: ["Does unless mean if not?"] },
      { as: "p", parts: ["Which clause describes the result?"] },
    ],
  },
  practice: {
    radio: {
      instruction: "Choose the most accurate option.",
      exercise: {
        questions: [
          {
            question: "If you ___ now, you'll arrive on time.",
            options: [
              { option: "leave", isCorrect: true },
              { option: "will leave", isCorrect: false },
              { option: "left", isCorrect: false },
            ],
          },
          {
            question: "We won't go unless the weather ___.",
            options: [
              { option: "improves", isCorrect: true },
              { option: "will improve", isCorrect: false },
              { option: "improved", isCorrect: false },
            ],
          },
          {
            question: "If I finish early, I ___ you.",
            options: [
              { option: "will call", isCorrect: true },
              { option: "call", isCorrect: false },
              { option: "would call", isCorrect: false },
            ],
          },
          {
            question: "She may accept if they ___ the offer.",
            options: [
              { option: "improve", isCorrect: true },
              { option: "will improve", isCorrect: false },
              { option: "improved", isCorrect: false },
            ],
          },
          {
            question: "If the traffic is heavy, we ___ be late.",
            options: [
              { option: "might", isCorrect: true },
              { option: "would", isCorrect: false },
              { option: "had", isCorrect: false },
            ],
          },
          {
            question: "Unless you save your work, you ___ your changes.",
            options: [
              { option: "will lose", isCorrect: true },
              { option: "lose", isCorrect: false },
              { option: "would lose", isCorrect: false },
            ],
          },
        ],
      },
    },
    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences with the target language.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "If we " },
              { blank: "plan" },
              { text: " carefully, we'll save money." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "You won't improve unless you " },
              { blank: "practice" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "If he calls, I " },
              { blank: "will tell" },
              { text: " him." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We may cancel if nobody " },
              { blank: "registers" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Unless the price drops, I " },
              { blank: "won't buy" },
              { text: " it." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "If you don't charge the battery, it " },
              { blank: "will run out" },
              { text: "." },
            ],
            lineBreak: true,
          },
        ],
      },
    },
    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentences.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "rains / if / cancel / we / will",
            answer: "We will cancel if it rains.",
          },
          {
            prompt: "unless / won't / hurry / you / arrive",
            answer: "You won't arrive unless you hurry.",
          },
          {
            prompt: "help / if / can / ask / you",
            answer: "I can help if you ask.",
          },
          {
            prompt:
              "unless / the deadline / extend / they / won't / we / finish",
            answer: "We won't finish unless they extend the deadline.",
          },
        ],
      },
    },
  },
  production: {
    task: {
      instruction: "Use the target language to complete the tasks.",
      type: "checkbox",
      items: [
        {
          content: [
            "Write three possible decisions you face this month and their consequences.",
          ],
          textarea: true,
        },
        {
          content: [
            "Include one sentence with unless and one with may or can.",
          ],
          textarea: true,
        },
        {
          content: [
            "Discuss your choices with a partner and recommend a backup plan.",
          ],
          textarea: false,
        },
      ],
    },
  },
};
