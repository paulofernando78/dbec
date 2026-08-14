import { audio, bold, portuguese, spacer } from "@/helpers/content";

export const beginnerMyNeighborhood = {
  whiteboard: {
    title: "A1 Beginner",
    descriptions: ["My neighborhood is quiet and safe.", "There's a park near my home."],
  },

  introduction: {
    blocks: [
      {
        type: "text",
        value: [{ parts: [audio("What is your neighborhood like?"), "What is your neighborhood like?"] }],
        className: "mb-4",
      },
      {
        type: "radio",
        instruction: "Choose the sentence about a neighborhood.",
        exercise: {
          questions: [
            { question: "Which sentence describes a place?", options: [{ option: "It's quiet and safe.", isCorrect: true }, { option: "She's a doctor.", isCorrect: false }] },
            { question: "Which word describes a place with many people?", options: [{ option: "Crowded", isCorrect: true }, { option: "Hungry", isCorrect: false }] },
          ],
        },
      },
    ],
  },

  presentation: {
    blocks: [
      {
        type: "dialogue",
        instruction: ["Read the conversation. Does Laura like her neighborhood? ", portuguese("Leia e identifique a opinião de Laura.")],
        audioSrc: "",
        lines: [
          { speaker: "Eric", line: ["What is your neighborhood like?"] },
          { speaker: "Laura", line: ["It's quiet, safe, and very friendly."] },
          { speaker: "Eric", line: ["Are there any shops near your home?"] },
          { speaker: "Laura", line: ["Yes. There's a supermarket next to the pharmacy."] },
          { speaker: "Eric", line: ["Is there a park?"] },
          { speaker: "Laura", line: ["Yes. It's across from my apartment. I love living there."] },
        ],
      },
      {
        type: "radio",
        instruction: "Choose the answer supported by the conversation.",
        exercise: {
          questions: [
            { question: "What is Laura's neighborhood like?", options: [{ option: "Quiet and safe.", isCorrect: true }, { option: "Noisy and dangerous.", isCorrect: false }] },
            { question: "Where is the park?", options: [{ option: "Across from her apartment.", isCorrect: true }, { option: "Behind the pharmacy.", isCorrect: false }] },
          ],
        },
      },
    ],
  },

  languageFocus: {
    blocks: [
      { type: "subsection", label: "Describing a neighborhood", heading: 4 },
      {
        type: "text",
        value: [
          { display: "block", as: "p", parts: [bold("quiet / noisy"), " - with little or a lot of noise"] },
          { display: "block", as: "p", parts: [bold("safe / dangerous"), " - with little or a lot of risk"] },
          { display: "block", as: "p", parts: [bold("crowded"), " - with many people"] },
          { display: "block", as: "p", parts: [bold("modern"), " - new in style"] },
          spacer(),
          { display: "block", as: "p", parts: [bold("There is a park."), " / There isn't a park."] },
          { display: "block", as: "p", parts: [bold("Are there any shops?"), " Yes, there are."] },
          { display: "block", as: "p", parts: [bold("Where is the pharmacy?"), " It's next to the supermarket."] },
        ],
      },
      { type: "subsection", label: "Prepositions of place", heading: 4 },
      {
        type: "text",
        value: [
          { display: "block", as: "p", parts: [bold("next to"), " - beside another place"] },
          { display: "block", as: "p", parts: [bold("between"), " - in the middle of two places"] },
          { display: "block", as: "p", parts: [bold("across from"), " - on the opposite side"] },
        ],
      },
      {
        type: "ccq",
        value: [
          { as: "p", parts: ["Does crowded mean there are many people?"] },
          { as: "p", parts: ["Is across from the same as next to?"] },
          { as: "p", parts: ["Do we use are there with plural places?"] },
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
            { question: "My neighborhood has very little noise. It's ___.", options: [{ option: "quiet", isCorrect: true }, { option: "crowded", isCorrect: false }] },
            { question: "There are many people in the street. It's ___.", options: [{ option: "crowded", isCorrect: true }, { option: "quiet", isCorrect: false }] },
            { question: "___ a park near my home.", options: [{ option: "There's", isCorrect: true }, { option: "There are", isCorrect: false }] },
            { question: "There ___ any banks here.", options: [{ option: "aren't", isCorrect: true }, { option: "isn't", isCorrect: false }] },
            { question: "___ there a pharmacy?", options: [{ option: "Is", isCorrect: true }, { option: "Are", isCorrect: false }] },
            { question: "Are there any shops? Yes, there ___.", options: [{ option: "are", isCorrect: true }, { option: "is", isCorrect: false }] },
            { question: "The bank is beside the café. It is ___ the café.", options: [{ option: "next to", isCorrect: true }, { option: "across from", isCorrect: false }] },
            { question: "The park is on the opposite side. It is ___ my home.", options: [{ option: "across from", isCorrect: true }, { option: "between", isCorrect: false }] },
          ],
        },
      },
      {
        type: "fillInTheBlanks",
        showWordBank: true,
        numbered: true,
        instruction: "Complete the description.",
        exercise: {
          blocks: [
            { block: [{ text: "My neighborhood is " }, { blank: "quiet" }, { text: " and safe." }], lineBreak: true },
            { block: [{ text: "There " }, { blank: "is" }, { text: " a park near my home." }], lineBreak: true },
            { block: [{ text: "There " }, { blank: "are" }, { text: " two supermarkets." }], lineBreak: true },
            { block: [{ text: "There " }, { blank: "isn't" }, { text: " a hospital." }], lineBreak: true },
            { block: [{ blank: "Are" }, { text: " there any restaurants?" }], lineBreak: true },
            { block: [{ text: "The pharmacy is " }, { blank: "next to" }, { text: " the bank." }], lineBreak: true },
            { block: [{ text: "The café is " }, { blank: "between" }, { text: " the shops." }], lineBreak: true },
            { block: [{ text: "The park is " }, { blank: "across from" }, { text: " my apartment." }], lineBreak: true },
          ],
        },
      },
      {
        type: "unscramble",
        instruction: "Put the words in order.",
        numbered: true,
        exercise: {
          items: [
            { prompt: "neighborhood / what / your / like / is", answer: "What is your neighborhood like?" },
            { prompt: "quiet / it / safe / and / is", answer: "It is quiet and safe." },
            { prompt: "park / there / a / is", answer: "There is a park." },
            { prompt: "shops / any / are / there", answer: "Are there any shops?" },
          ],
        },
      },
    ],
  },

  production: {
    blocks: [
      {
        type: "task",
        instruction: "Create a neighborhood profile:",
        listType: "checkbox",
        items: [
          { content: ["Describe your neighborhood with three adjectives."], textarea: true },
          { content: ["Name three places near your home."], textarea: true },
          { content: ["Use two prepositions of place."], textarea: true },
          { content: ["Say what you like or dislike about living there."], textarea: true },
        ],
      },
    ],
  },
};
