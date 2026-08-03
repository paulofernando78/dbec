import { shuffle } from "@/utils/shuffle";

export const intermediateWhatDidTheySay = {
  whiteboard: {
    title: "B1 Intermediate",
    subtitle: "What Did They Say?",
    descriptions: [
      "Report statements, questions, and requests.",
      "Make appropriate tense, pronoun, and time-reference changes.",
    ],
  },
  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
      instruction:
        "Read the situations. Decide whether each speaker reports a statement, a question, or a request.",
      imgs: [
        {
          src: "",
          alt: "Statement",
          content: ["Lia said that she was working from home."],
        },
        {
          src: "",
          alt: "Question",
          content: ["Tom asked whether the meeting had started."],
        },
        {
          src: "",
          alt: "Request",
          content: ["The manager told us to send the report."],
        },
      ],
    },
      },
      {
        type: "imageQuiz",
        ...{
      questions: [
        {
          word: "mention",
          imgSrc: "",
          imgAlt: "mention",
          options: shuffle([
            { option: "mention", isCorrect: true },
            { option: "clarify", isCorrect: false },
            { option: "admit", isCorrect: false },
            { option: "promise", isCorrect: false },
          ]),
        },
        {
          word: "clarify",
          imgSrc: "",
          imgAlt: "clarify",
          options: shuffle([
            { option: "mention", isCorrect: false },
            { option: "clarify", isCorrect: true },
            { option: "admit", isCorrect: false },
            { option: "promise", isCorrect: false },
          ]),
        },
        {
          word: "admit",
          imgSrc: "",
          imgAlt: "admit",
          options: shuffle([
            { option: "mention", isCorrect: false },
            { option: "clarify", isCorrect: false },
            { option: "admit", isCorrect: true },
            { option: "promise", isCorrect: false },
          ]),
        },
        {
          word: "promise",
          imgSrc: "",
          imgAlt: "promise",
          options: shuffle([
            { option: "mention", isCorrect: false },
            { option: "clarify", isCorrect: false },
            { option: "admit", isCorrect: false },
            { option: "promise", isCorrect: true },
          ]),
        },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Check your understanding of the situations.",
      exercise: {
        questions: [
          {
            question: "Can Carla attend the meeting?",
            options: [
              { option: "No, she can't.", isCorrect: true },
              { option: "Yes, she is already there.", isCorrect: false },
            ],
          },
          {
            question: "Why can't she attend?",
            options: [
              { option: "Her train was cancelled.", isCorrect: true },
              { option: "She lost the report.", isCorrect: false },
            ],
          },
        ],
      },
    },
      }
    ],
  },
  presentation: {
    blocks: [
      {
        type: "dialogue",
        ...{
      instruction:
        "Read or listen once: why can Carla not attend the meeting? Then read or listen again for the message and request Owen passes on.",
      audioSrc: "",
      lines: [
        { speaker: "Mia", line: ["What did Carla say about the meeting?"] },
        { speaker: "Owen", line: ["She said that she couldn't attend today."] },
        { speaker: "Mia", line: ["Did she explain why?"] },
        {
          speaker: "Owen",
          line: ["She said that her train had been cancelled."],
        },
        { speaker: "Mia", line: ["What about the report?"] },
        { speaker: "Owen", line: ["She asked us to send it tomorrow."] },
      ],
    },
      },
      {
        type: "radio",
        ...{
      instruction: "Choose the answer supported by the dialogue.",
      exercise: {
        questions: [
          {
            question: "Can Carla attend the meeting?",
            options: [
              { option: "No, she can't.", isCorrect: true },
              { option: "Yes, she is already there.", isCorrect: false },
            ],
          },
          {
            question: "Why can't she attend?",
            options: [
              { option: "Her train was cancelled.", isCorrect: true },
              { option: "She lost the report.", isCorrect: false },
            ],
          },
          {
            question: "What did she ask them to do?",
            options: [
              { option: "Send the report tomorrow.", isCorrect: true },
              { option: "Cancel the report.", isCorrect: false },
            ],
          },
        ],
      },
    },
      }
    ],
  },
  languageFocus: {
    blocks: [
      {
        type: "meaning",
        value: [
      {
        as: "p",
        parts: [
          { part: "Reported Speech: ", type: "bold" },
          "Reported speech communicates another person's message. Backshift is common when the reporting verb is in the past and the original statement is no longer presented as current.",
        ],
      },
    ],
      },
      {
        type: "column",
        ...{
      width: 320,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Statements",
          items: [
            { as: "p", parts: ["'I'm tired.' → She said she was tired."] },
            { as: "p", parts: ["'I've finished.' → He said he had finished."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Questions",
          items: [
            {
              as: "p",
              parts: ["'Are you ready?' → She asked if I was ready."],
            },
            { as: "p", parts: ["'Where is it?' → He asked where it was."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Requests",
          items: [
            { as: "p", parts: ["'Please wait.' → She asked me to wait."] },
            { as: "p", parts: ["'Don't leave.' → He told us not to leave."] },
          ],
        },
      ],
    },
      },
      {
        type: "notes",
        value: [
      {
        as: "p",
        parts: [
          "Use statement word order in reported questions: asked where it was, not asked where was it.",
        ],
      },
      {
        as: "p",
        parts: [
          "Change pronouns, time references, and tense only when the reporting context requires it. Preserve the speaker's intended meaning rather than applying backshift mechanically.",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      { as: "p", parts: ["Are these the speaker's exact original words?"] },
      { as: "p", parts: ["Do reported questions use question word order?"] },
      {
        as: "p",
        parts: ["What structure follows told or asked for a request?"],
      },
    ],
      }
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
      instruction: "Choose the most accurate option.",
      exercise: {
        questions: [
          {
            question: "'I am busy.' She said she ___ busy.",
            options: [
              { option: "was", isCorrect: true },
              { option: "is question", isCorrect: false },
            ],
          },
          {
            question: "'Have you finished?' He asked if I ___.",
            options: [
              { option: "had finished", isCorrect: true },
              { option: "have you finished", isCorrect: false },
            ],
          },
          {
            question: "'Please sit down.' She asked me ___.",
            options: [
              { option: "to sit down", isCorrect: true },
              { option: "sat down yesterday", isCorrect: false },
            ],
          },
          {
            question: "'Don't call.' He told me ___.",
            options: [
              { option: "not to call", isCorrect: true },
              { option: "to not called", isCorrect: false },
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
      instruction: "Complete the sentences with the target language.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "She said that she " },
              { blank: "was" },
              { text: " tired." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "He asked where I " },
              { blank: "lived" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "They told us " },
              { blank: "to wait" },
              { text: " outside." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "Mia asked if I " },
              { blank: "had finished" },
              { text: "." },
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
      instruction: "Unscramble the sentences.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "said / she / was late / that",
            answer: "She said that she was late.",
          },
          {
            prompt: "asked / where / lived / I / he",
            answer: "He asked where I lived.",
          },
          {
            prompt: "told / not to worry / us / they",
            answer: "They told us not to worry.",
          },
        ],
      },
    },
      }
    ],
  }, 
  
  production: {
    blocks: [
      {
        type: "task",
        instruction: "Pass on messages accurately in a workplace situation:",
        listType: "checkbox",
        items: [
        {
          content: [
            "Write a short message containing a statement, question, and request.",
          ],
          textarea: true,
        },
        {
          content: ["Exchange messages and report your partner's words."],
          textarea: true,
        },
        {
          content: ["Check pronouns, verb forms, and word order together."],
          textarea: false,
        },
      ],
      }
    ],
  },
};
