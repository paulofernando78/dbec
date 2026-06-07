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
  src: "/assets/img/lessons/cefr/a1/hi-my-names-laura/introduction/laura-eric-mr-smith.avif",
  alt: "...",
  applyPadding: true,
};

export const carousel = {
  instruction: "Slide the pictures and describe what you see.",
  imgs: [
    { src: "/assets/img/home/home-me.png", alt: "..." },
    { word: "memory", img: 0 },
  ],
};

export const flipCards = {
  cards: [
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
      backImg: "https://www.kia.com/content/dam/kwcms/au/en/images/category/kia-sorento.webp",
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

export const video = {
  instruction: "Watch the video.",
  videoId: "C8rU4dv2w8Q",
};

export const dialogue = {
  instruction: "Listen to the dialogue.",
  imgSrc:
    "https://t4.ftcdn.net/jpg/09/69/46/43/360_F_969464328_BsABgg6gLMxYgY3iL74cuteW7s2YrMTP.jpg",
  imgAlt: "...",
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
