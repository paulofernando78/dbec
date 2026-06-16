import type { ListProps } from "@/components/content/List";
import type { Notes } from "@/components/content/Notes";
import type { CCQ } from "@/components/content/CCQ/";


import {
  content,
  text,
  icon,
  audio,
  bold,
  italic,
  mark,
  boldMark,
  underline,
  stressed,
  phonetics,
  portuguese,
} from "@/helpers/content";

export const lesson = {
  whiteboard: {
    title: "...",
    subtitle: "...",
    descriptions: ["...", "..."],
    date: "...",
  },

  lessonObjective: {
    objective: "...",
    grammar: "...",
    vocabulary: "...",
  },

  introduction: {
    carouselWide: {
      prompt: "Look at the pictures and listen to the sentences.",
      imgs: [
        {
          src: "/",
          alt: "...",
          content: [
            ...content({
              parts: [audio("/"), "...”"],
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

  presentation: {
    dialogue: {
      prompt: "...",
      audioSrc: "/",
      lines: [
        {
          speaker: "...",
          line: text(["..."]),
        },
      ],
    },
  },

  languageFocus: {
    greetings: {
      width: 300,
      cols: [
        // Column 1
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Column 1",
          items: [
            {
              parts: [audio("/"), "..."],
            },
          ],
        },
        // Column 2
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Column 2",
          items: [
            {
              parts: [audio("/"), "..."],
            },
          ],
        },
        // Column 3
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Column 3",
          items: [
            {
              parts: [audio("/"), "..."],
            },
          ],
        },
      ],
    },
    personalInformation: {
      width: 300,
      cols: [
        // Common Questions
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Common Questions",
          items: [
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/whats-your-name.mp3",
                ),
                "What’s your name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/whats-your-first-name.mp3",
                ),
                "What’s your first name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/how-do-you-spell-your-first-name.mp3",
                ),
                "How do you spell your first name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/whats-your-last-name.mp3",
                ),
                "What’s your last name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/how-do-you-spell-your-last-name.mp3",
                ),
                "How do you spell your last name?",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/common-questions/how-do-you-spell-it.mp3",
                ),
                "How do you spell it? (it = first/last)",
              ],
            },
          ],
        },
        // Possible Answers
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-black",
          column: "Possible Answers",
          items: [
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-name-is.mp3",
                ),
                "My name is...",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-names.mp3",
                ),
                "My name’s...",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-first-name-is.mp3",
                ),
                "My first name is...",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-first-names.mp3",
                ),
                "My first name’s...",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-last-name-is.mp3",
                ),
                "My last name is...",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/my-last-names.mp3",
                ),
                "My last name’s...",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/its-p-a-l-m-e-r.mp3",
                ),
                "(It’s) P-A-L-M-E-R.",
              ],
              lineBreak: true,
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/nice-to-meet-you-1.mp3",
                ),
                "Nice to meet you.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/nice-to-meet-you-2.mp3",
                ),
                "Nice to mee",
                underline("t y"),
                "ou.",
              ],
            },
            {
              parts: [
                audio(
                  "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/personal-information/possible-answers/nice-meeting-you.mp3",
                ),
                "Nice to meeting you.",
              ],
            },
          ],
        },
      ],
    },
    notes: [
      {
        as: "span",
        parts: [
          audio(
            "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/first-name-given-name.mp3",
          ),
          bold("first name"),
          " = given name",
        ]
      },
      {
        as: "span",
        parts: [
          audio(
            "/assets/audio/lessons/cefr/a1/hi-my-names-laura/language-focus/last-name-surname-family-name.mp3",
          ),
          bold("last name / surname name"),
          " = family name",
        ]
      },
    ] satisfies Notes[],
    ccq: [
      {
        as: "span",
        parts: ["..."],
      },
      {
        as: "span",
        parts: ["..."],
      },
    ] satisfies CCQ[],
  },

  practice: {
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "...",
            options: [
              { option: "...", isCorrect: true },
              { option: "...", isCorrect: false },
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
            block: [{ text: "..." }, { blank: "..." }, { text: "..." }],
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
            prompt: "... / ...",
            answer: "...",
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
          value: text(["..."]),
        },
        {
          value: text(["..."]),
        },
        {
          value: text(["..."]),
        },
      ],
    } satisfies ListProps,
  },
};
