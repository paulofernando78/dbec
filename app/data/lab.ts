import {
  audio,
  bold,
  boldMark,
  content,
  icon,
  italic,
  mark,
  phonetics,
  portuguese,
  stressed,
  text,
  underline,
} from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

export const line = [
  ...content({
    parts: [
      icon("inbullet"),
      icon("us"),
      icon("uk"),
      icon("correct"),
      icon("incorrect"),
      icon("spotlight"),
      audio("/assets/audio/welcome.mp3"),
      "Normal",
      " ",
      bold("bold"),
      " ",
      italic("italic"),
      " ",
      underline("underline"),
      " ",
      mark("mark"),
      " ",
      boldMark("bold mark"),
      " ",
      stressed("stressed"),
      " ",
      phonetics("phonetics"),
      " ",
      portuguese("portuguese"),
    ],
  }),
];

export const paragraph = [
  ...content({
    parts: [
      icon("bullet"),
      icon("us"),
      icon("uk"),
      icon("correct"),
      icon("incorrect"),
      icon("spotlight"),
      audio("/"),
      "normal",
      " ",
      bold("bold"),
      " ",
      italic("italic"),
      " ",
      underline("underline"),
      " ",
      mark("mark"),
      " ",
      boldMark("bold mark"),
      " ",
      stressed("stressed"),
      " ",
      phonetics("phonetics"),
      " ",
      portuguese("portuguese"),
    ],
  }),
];

export const image = {
  src: "/assets/img/aspect-ratio-square.png",
  alt: "...",
  applyPadding: true,
};

export const vocabularyCarousel = {
  instruction: "Match the words to the pictures.",
  matchingContent: shuffle([
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
    { as: "span" as const, parts: [audio("xxx"), "xxx"] },
  ]),
  words: [
    // Local igs
    {
      src: "/assets/img/aspect-ratio-square.png",
      alt: "...",
      content: [
        ...content({
          parts: [
            icon("inbullet"),
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            icon("spotlight"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
            " ",
            bold("bold"),
            " ",
            italic("italic"),
            " ",
            underline("underline"),
            " ",
            mark("mark"),
            " ",
            boldMark("bold mark"),
            " ",
            stressed("stressed"),
            " ",
            phonetics("phonetics"),
            " ",
            portuguese("portuguese"),
            " ",
            icon("inbullet"),
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            icon("spotlight"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
            " ",
            bold("bold"),
            " ",
            italic("italic"),
            " ",
            underline("underline"),
            " ",
            mark("mark"),
            " ",
            boldMark("bold mark"),
            " ",
            stressed("stressed"),
            " ",
            phonetics("phonetics"),
            " ",
            portuguese("portuguese"),
            " ",
          ],
        }),
      ],
    },
    // Web imgs
    {
      src: "https://images.unsplash.com/photo-1597838816882-4435b1977fbe?q=80&w=849&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "...",
      content: [
        ...content({
          parts: ["2"],
        }),
      ],
    },
    // Dictionary words
    {
      word: "memory",
      img: 0,
    },
  ],
};

export const storyCarousel = {
  instruction: "Look at the pictures and describe what you see.",
  words: [
    {
      src: "/assets/img/aspect-ratio-16-9.png",
      alt: "...",
      content: [
        ...content({
          parts: [
            icon("inbullet"),
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            icon("spotlight"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
            " ",
            bold("bold"),
            " ",
            italic("italic"),
            " ",
            underline("underline"),
            " ",
            mark("mark"),
            " ",
            boldMark("bold mark"),
            " ",
            stressed("stressed"),
            " ",
            phonetics("phonetics"),
            " ",
            portuguese("portuguese"),
            " ",
            icon("inbullet"),
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            icon("spotlight"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
            " ",
            bold("bold"),
            " ",
            italic("italic"),
            " ",
            underline("underline"),
            " ",
            mark("mark"),
            " ",
            boldMark("bold mark"),
            " ",
            stressed("stressed"),
            " ",
            phonetics("phonetics"),
            " ",
            portuguese("portuguese"),
            " ",
          ],
        }),
      ],
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1707353402003-effbc48c547d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "...",
      content: [
        ...content({
          parts: [
            icon("inbullet"),
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            icon("spotlight"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
            " ",
            bold("bold"),
            " ",
            italic("italic"),
            " ",
            underline("underline"),
            " ",
            mark("mark"),
            " ",
            boldMark("bold mark"),
            " ",
            stressed("stressed"),
            " ",
            phonetics("phonetics"),
            " ",
            portuguese("portuguese"),
            " ",
            icon("inbullet"),
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            icon("spotlight"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
            " ",
            bold("bold"),
            " ",
            italic("italic"),
            " ",
            underline("underline"),
            " ",
            mark("mark"),
            " ",
            boldMark("bold mark"),
            " ",
            stressed("stressed"),
            " ",
            phonetics("phonetics"),
            " ",
            portuguese("portuguese"),
            " ",
          ],
        }),
      ],
    },
    {
      word: "memory",
      img: 0,
    },
  ],
};

export const flipCards = {
  instruction: "Flip the cards...",
  cards: [
    {
      backLine: [mark("asked")],
    },
    {
      backImg: "dog",
    },
    {
      frontLine: ["What's the past of ask?"],
      backLine: [mark("asked")],
    },
    {
      frontLine: ["aaa"],
      backImg: "dog",
    },
    {
      frontLine: ["aaa"],
      backImg: "/assets/img/dictionary/b/brain.avif",
    },
    {
      frontLine: ["aaa"],
      backImg:
        "https://www.kia.com/content/dam/kwcms/au/en/images/category/kia-sorento.webp",
    },
    {
      frontImg: "cat",
      backImg: "dog",
    },
  ],
};

export const mediaWrapper = {
  paragraph: [...content({ parts: ["Example paragraph"] })],
};

export const audioPlayer = {
  src: "/assets/audio/welcome.mp3",
};

export const videoPlayer = {
  instruction: "Watch the video.",
  videoId: "C8rU4dv2w8Q",
};

export const dialogue = {
  prompt: "Listen to the dialogue.",
  imgSrc:
    "https://t4.ftcdn.net/jpg/09/69/46/43/360_F_969464328_BsABgg6gLMxYgY3iL74cuteW7s2YrMTP.jpg",
  imgAlt: "...",
  sentences: [
    [
      ...content({
        parts: ["..."],
      }),
    ],
  ],
  audioSrc: "/assets/audio/welcome.mp3",
  lines: [
    {
      speaker: "Laura",
      line: text([
        "Hello! ",
        audio("/assets/audio/hello.mp3"),
        mark("I'm Laura."),
      ]),
    },
    {
      speaker: "Eric",
      line: text(["Nice to meet you!"]),
    },
  ],
};

export const columnDrag = {
  width: 300,
  cols: [
    {
      borderColor: "border-green-800",
      bgColor: "bg-green-600",
      textColor: "white",
      column: "Column 1",
      items: [
        {
          parts: [
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
          ],
        },
        {
          parts: [
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
          ],
        },
      ],
    },

    {
      borderColor: "border-red-800",
      bgColor: "bg-red-400",
      textColor: "white",
      column: "Column 2",
      items: [
        {
          parts: [
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
          ],
        },
      ],
    },

    {
      borderColor: "border-yellow-800",
      bgColor: "bg-yellow-400",
      textColor: "white",
      column: "Column 3",
      items: [
        {
          parts: [
            icon("us"),
            icon("uk"),
            icon("correct"),
            icon("incorrect"),
            audio("/assets/audio/welcome.mp3"),
            "Normal",
          ],
        },
      ],
    },
  ],
};

export const list = {
  ordered: {
    type: "ol" as const,
    instruction: "Look...",
    items: [
      {
        content: ["First", " ", bold("content")],
      },
      {
        content: ["Second", " ", mark("content")],
      },
    ],
  },
  unordered: {
    type: "ul" as const,
    instruction: "Look...",
    items: [
      {
        content: ["First item"],
      },
      {
        content: ["Second item"],
      },
    ],
  },
  checkbox: {
    type: "checkbox" as const,
    instruction: "Check the correct options.",
    items: [
      {
        content: ["Option 1"],
      },
      {
        content: ["Option 2"],
        textarea: true,
      },
      {
        content: ["Option 3"],
      },
    ],
  },
};

export const guess = {
  words: [
    { word: "cat", img: 0 },
    { word: "cat", img: 1 },
  ],
};

export const radio = {
  instruction: "Choose the correct answer.",
  exercise: {
    questions: [
      {
        question: "1. Question",
        options: [
          { option: "option 1", isCorrect: true },
          { option: "option 2", isCorrect: false },
          { option: "option 3", isCorrect: false },
        ],
      },
    ],
  },
};

export const fillInTheBlanks = {
  showWordBank: true,
  instruction: "...",
  numbered: true,
  exercise: {
    blocks: [
      {
        block: [{ text: "He" }, { blank: "is" }, { text: "a teacher." }],
        lineBreak: true,
      },
      {
        block: [
          { text: "He" },
          { blank: "teaches" },
          { text: "in the morning." },
        ],
      },
      {
        block: [{ text: "He" }, { blank: "walks" }, { text: "to school." }],
      },
    ],
  },
};

export const scramble = {
  showWordBank: false,
  instruction: "Unscramble the sentences.",
  numbered: true,
  exercise: {
    items: [{ prompt: "... / ...", answer: "..." }],
  },
};
