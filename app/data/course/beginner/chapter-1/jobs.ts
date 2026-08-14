import { audio, bold, portuguese, spacer } from "@/helpers/content";

export const beginnerJobs = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["What do you do?", "I'm a developer."],
  },

  introduction: {
    blocks: [
      {
        type: "text",
        value: [
          [
            audio("What jobs do you know in English?"),
            "What jobs do you know in English?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the sentence that names a job.",
        exercise: {
          questions: [
            {
              question: "Which sentence answers: What do you do?",
              options: [
                { option: "I'm a teacher.", isCorrect: true },
                { option: "I'm from Brazil.", isCorrect: false },
              ],
            },
            {
              question: "Which word is a job?",
              options: [
                { option: "Engineer", isCorrect: true },
                { option: "Canadian", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: [
          "Read the conversation. What do Laura and Eric do? ",
          portuguese("Leia a conversa e identifique as profissões."),
        ],
        audioSrc: "",
        lines: [
          { speaker: "Laura", line: ["What do you do, Eric?"] },
          { speaker: "Eric", line: ["I'm an engineer. What about you?"] },
          { speaker: "Laura", line: ["I'm a teacher."] },
          { speaker: "Eric", line: ["Where do you work?"] },
          { speaker: "Laura", line: ["I work at a language school."] },
          { speaker: "Eric", line: ["That's interesting!"] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: {
          questions: [
            {
              question: "What does Eric do?",
              options: [
                { option: "He's an engineer.", isCorrect: true },
                { option: "He's a teacher.", isCorrect: false },
              ],
            },
            {
              question: "Where does Laura work?",
              options: [
                { option: "At a language school.", isCorrect: true },
                { option: "At a hospital.", isCorrect: false },
              ],
            },
          ],
        },
      },
    ],
  },

  languageFocus: {
    blocks: [
      { type: "subsection", label: "Jobs", heading: 4 },
      {
        type: "text",
        value: [
          { display: "block", as: "p", parts: [bold("teacher"), " - a person who teaches"] },
          { display: "block", as: "p", parts: [bold("doctor"), " - a person who treats sick people"] },
          { display: "block", as: "p", parts: [bold("engineer"), " - a person who designs or builds things"] },
          { display: "block", as: "p", parts: [bold("developer"), " - a person who creates software"] },
          { display: "block", as: "p", parts: [bold("chef"), " - a person who cooks professionally"] },
          { display: "block", as: "p", parts: [bold("driver"), " - a person who drives a vehicle"] },
          spacer(),
          { display: "block", as: "p", parts: [bold("What do you do?"), " I'm a teacher."] },
          { display: "block", as: "p", parts: [bold("What does she do?"), " She's an engineer."] },
          { display: "block", as: "p", parts: [bold("Where do you work?"), " I work at a school."] },
        ],
      },
      {
        type: "subsection",
        label: "A or an",
        heading: 4,
      },
      {
        type: "text",
        value: [
          { display: "block", as: "p", parts: ["Use ", bold("a"), " before a consonant sound: a teacher, a developer."] },
          { display: "block", as: "p", parts: ["Use ", bold("an"), " before a vowel sound: an engineer, an architect."] },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Do we say a engineer or an engineer?"] },
          { as: "p", parts: ["Does What do you do? ask about a job or a country?"] },
          { as: "p", parts: ["Can we say She's a doctor?"] },
        ],
      },
    ],
  },

  practice: {
    blocks: [
      { type: "guess" },
      {
        type: "radio",
        instruction: "Choose the correct answer.",
        exercise: {
          questions: [
            { question: "What do you ___?", options: [{ option: "do", isCorrect: true }, { option: "are", isCorrect: false }] },
            { question: "I'm ___ teacher.", options: [{ option: "a", isCorrect: true }, { option: "an", isCorrect: false }] },
            { question: "She's ___ engineer.", options: [{ option: "an", isCorrect: true }, { option: "a", isCorrect: false }] },
            { question: "What ___ he do?", options: [{ option: "does", isCorrect: true }, { option: "do", isCorrect: false }] },
            { question: "He ___ at a hospital.", options: [{ option: "works", isCorrect: true }, { option: "work", isCorrect: false }] },
            { question: "A person who cooks professionally is a ___.", options: [{ option: "chef", isCorrect: true }, { option: "driver", isCorrect: false }] },
            { question: "A person who creates software is a ___.", options: [{ option: "developer", isCorrect: true }, { option: "doctor", isCorrect: false }] },
            { question: "Where do you ___?", options: [{ option: "work", isCorrect: true }, { option: "works", isCorrect: false }] },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the sentences.",
        exercise: {
          blocks: [
            { block: [{ text: "What do you " }, { blank: "do" }, { text: "?" }], lineBreak: true },
            { block: [{ text: "I'm " }, { blank: "a" }, { text: " teacher." }], lineBreak: true },
            { block: [{ text: "She's " }, { blank: "an" }, { text: " engineer." }], lineBreak: true },
            { block: [{ text: "He " }, { blank: "works" }, { text: " at a hospital." }], lineBreak: true },
            { block: [{ text: "My sister is a " }, { blank: "doctor" }, { text: "." }], lineBreak: true },
            { block: [{ text: "A " }, { blank: "chef" }, { text: " works in a kitchen." }], lineBreak: true },
            { block: [{ text: "Where do you " }, { blank: "work" }, { text: "?" }], lineBreak: true },
            { block: [{ text: "I work at a language " }, { blank: "school" }, { text: "." }], lineBreak: true },
          ],
        },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: {
          items: [
            { prompt: "do / what / you / do", answer: "What do you do?" },
            { prompt: "an / she / engineer / is", answer: "She is an engineer." },
            { prompt: "work / where / you / do", answer: "Where do you work?" },
            { prompt: "at / works / he / hospital / a", answer: "He works at a hospital." },
          ],
        },
      },
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Interview two classmates and complete the task:",
        listType: "checkbox",
        items: [
          { content: ["Ask: What do you do?"], textarea: false },
          { content: ["Ask: Where do you work?"], textarea: false },
          { content: ["Write each person's job and workplace."], textarea: true },
          { content: ["Introduce one person to the group."], textarea: true },
        ],
      },
    ],
  },
};
