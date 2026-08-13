import { audio, bold, portuguese, spacer } from "@/helpers/content";

export const beginnerTransportation = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["How do I get to the station?", "Take the bus."],
  },

  introduction: {
    blocks: [
      {
        type: "lines",
        value: [[audio("How do you travel around your town?"), "How do you travel around your town?"]],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the means of transportation.",
        exercise: {
          questions: [
            { question: "Which one uses rails?", options: [{ option: "Train", isCorrect: true }, { option: "Taxi", isCorrect: false }] },
            { question: "Which expression means walking?", options: [{ option: "On foot", isCorrect: true }, { option: "By bus", isCorrect: false }] },
          ],
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: ["Read the conversation. How does Laura get to the station? ", portuguese("Leia e identifique o meio de transporte.")],
        audioSrc: "",
        lines: [
          { speaker: "Laura", line: ["Excuse me. How do I get to the train station?"] },
          { speaker: "Eric", line: ["Take the number 12 bus."] },
          { speaker: "Laura", line: ["Where is the bus stop?"] },
          { speaker: "Eric", line: ["It's across from the bank."] },
          { speaker: "Laura", line: ["Is the station far?"] },
          { speaker: "Eric", line: ["No. It's a ten-minute bus ride."] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: {
          questions: [
            { question: "Which bus goes to the station?", options: [{ option: "The number 12 bus.", isCorrect: true }, { option: "The number 20 bus.", isCorrect: false }] },
            { question: "Where is the bus stop?", options: [{ option: "Across from the bank.", isCorrect: true }, { option: "Behind the station.", isCorrect: false }] },
          ],
        },
      },
    ],
  },

  languageFocus: {
    blocks: [
      { type: "subsection", label: "Transportation", heading: 4 },
      {
        type: "meaning",
        value: [
          { display: "block", as: "p", parts: [bold("bus, train, subway, taxi, bicycle")] },
          { display: "block", as: "p", parts: [bold("by bus / by train / by subway / by taxi")] },
          { display: "block", as: "p", parts: [bold("on foot"), " - walking"] },
          spacer(),
          { display: "block", as: "p", parts: [bold("How do I get to the station?"), " Take the bus."] },
          { display: "block", as: "p", parts: [bold("How do you go to work?"), " I go by subway."] },
          { display: "block", as: "p", parts: [bold("Is it far?"), " No, it's a five-minute walk."] },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Do we say by bus or on bus?"] },
          { as: "p", parts: ["Does on foot mean by car?"] },
          { as: "p", parts: ["Is Take the bus an instruction?"] },
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
            { question: "How do I ___ to the airport?", options: [{ option: "get", isCorrect: true }, { option: "gets", isCorrect: false }] },
            { question: "___ the number 12 bus.", options: [{ option: "Take", isCorrect: true }, { option: "Taking", isCorrect: false }] },
            { question: "I go to work ___ bus.", options: [{ option: "by", isCorrect: true }, { option: "on", isCorrect: false }] },
            { question: "I walk to school. I go ___.", options: [{ option: "on foot", isCorrect: true }, { option: "by foot", isCorrect: false }] },
            { question: "A train stops at a ___.", options: [{ option: "station", isCorrect: true }, { option: "bank", isCorrect: false }] },
            { question: "Where is the bus ___?", options: [{ option: "stop", isCorrect: true }, { option: "walk", isCorrect: false }] },
            { question: "Is the station ___?", options: [{ option: "far", isCorrect: true }, { option: "foot", isCorrect: false }] },
            { question: "It's a five-minute ___.", options: [{ option: "walk", isCorrect: true }, { option: "walking", isCorrect: false }] },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the directions.",
        exercise: {
          blocks: [
            { block: [{ text: "How do I " }, { blank: "get" }, { text: " to the station?" }], lineBreak: true },
            { block: [{ blank: "Take" }, { text: " the bus." }], lineBreak: true },
            { block: [{ text: "I travel " }, { blank: "by" }, { text: " train." }], lineBreak: true },
            { block: [{ text: "She goes to school on " }, { blank: "foot" }, { text: "." }], lineBreak: true },
            { block: [{ text: "The bus " }, { blank: "stop" }, { text: " is near the bank." }], lineBreak: true },
            { block: [{ text: "Is the airport " }, { blank: "far" }, { text: "?" }], lineBreak: true },
            { block: [{ text: "It's a ten-minute bus " }, { blank: "ride" }, { text: "." }], lineBreak: true },
            { block: [{ text: "The train leaves from the " }, { blank: "station" }, { text: "." }], lineBreak: true },
          ],
        },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: {
          items: [
            { prompt: "get / how / station / the / to / I / do", answer: "How do I get to the station?" },
            { prompt: "bus / take / the", answer: "Take the bus." },
            { prompt: "work / by / I / subway / to / go", answer: "I go to work by subway." },
            { prompt: "foot / school / on / to / walks / she", answer: "She walks to school on foot." },
          ],
        },
      },
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Plan a journey across town:",
        listType: "checkbox",
        items: [
          { content: ["Choose a destination."], textarea: false },
          { content: ["Ask how to get there."], textarea: false },
          { content: ["Give a means of transportation and a travel time."], textarea: true },
          { content: ["Role-play the conversation with a partner."], textarea: true },
        ],
      },
    ],
  },
};
