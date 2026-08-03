import { shuffle } from "@/utils/shuffle";

export const intermediateNewsReport = {
  whiteboard: {
    title: "B1 Intermediate",
    subtitle: "News Report",
    descriptions: [
      "Focus reports on actions, results, and affected people.",
      "Use common passive structures in news contexts.",
    ],
  },
  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
      instruction:
        "Read the situations. Is the important information the person responsible, the action, or its result?",
      imgs: [
        {
          src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EEvent%3C%2Ftext%3E%3C%2Fsvg%3E",
          alt: "Event",
          content: ["A new community centre was opened yesterday."],
        },
        {
          src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EResult%3C%2Ftext%3E%3C%2Fsvg%3E",
          alt: "Result",
          content: ["More than 500 residents were invited."],
        },
        {
          src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EInvestigation%3C%2Ftext%3E%3C%2Fsvg%3E",
          alt: "Investigation",
          content: ["The cause of the power cut is being investigated."],
        },
      ],
    },
      },
      {
        type: "imageQuiz",
        ...{
      questions: [
        {
          word: "headline",
          imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Eheadline%3C%2Ftext%3E%3C%2Fsvg%3E",
          imgAlt: "headline",
          options: shuffle([
            { option: "headline", isCorrect: true },
            { option: "witness", isCorrect: false },
            { option: "confirm", isCorrect: false },
            { option: "investigation", isCorrect: false },
          ]),
        },
        {
          word: "witness",
          imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Ewitness%3C%2Ftext%3E%3C%2Fsvg%3E",
          imgAlt: "witness",
          options: shuffle([
            { option: "headline", isCorrect: false },
            { option: "witness", isCorrect: true },
            { option: "confirm", isCorrect: false },
            { option: "investigation", isCorrect: false },
          ]),
        },
        {
          word: "confirm",
          imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Econfirm%3C%2Ftext%3E%3C%2Fsvg%3E",
          imgAlt: "confirm",
          options: shuffle([
            { option: "headline", isCorrect: false },
            { option: "witness", isCorrect: false },
            { option: "confirm", isCorrect: true },
            { option: "investigation", isCorrect: false },
          ]),
        },
        {
          word: "investigation",
          imgSrc: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Einvestigation%3C%2Ftext%3E%3C%2Fsvg%3E",
          imgAlt: "investigation",
          options: shuffle([
            { option: "headline", isCorrect: false },
            { option: "witness", isCorrect: false },
            { option: "confirm", isCorrect: false },
            { option: "investigation", isCorrect: true },
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
            question: "What was closed?",
            options: [
              { option: "The bridge.", isCorrect: true },
              { option: "The newsroom.", isCorrect: false },
            ],
          },
          {
            question: "What were drivers asked to do?",
            options: [
              { option: "Use another route.", isCorrect: true },
              { option: "Wait on the bridge.", isCorrect: false },
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
        "Read or listen once: what happened to the bridge? Then read or listen again for confirmed facts and the ongoing investigation.",
      audioSrc: "",
      lines: [
        { speaker: "Editor", line: ["Has the story been confirmed?"] },
        {
          speaker: "Reporter",
          line: ["Yes. The bridge was closed at seven this morning."],
        },
        { speaker: "Editor", line: ["Was anyone injured?"] },
        {
          speaker: "Reporter",
          line: ["No, but drivers were asked to use another route."],
        },
        {
          speaker: "Editor",
          line: ["Good. Add that the problem is being investigated."],
        },
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
            question: "What was closed?",
            options: [
              { option: "The bridge.", isCorrect: true },
              { option: "The newsroom.", isCorrect: false },
            ],
          },
          {
            question: "What were drivers asked to do?",
            options: [
              { option: "Use another route.", isCorrect: true },
              { option: "Wait on the bridge.", isCorrect: false },
            ],
          },
          {
            question: "What is happening now?",
            options: [
              { option: "The problem is being investigated.", isCorrect: true },
              {
                option: "The bridge is being built last year.",
                isCorrect: false,
              },
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
          { part: "Passive Voice: ", type: "bold" },
          "Use the passive when the action or result is more important than the agent, or when the agent is unknown or obvious.",
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
          column: "Past passive",
          items: [
            { as: "p", parts: ["The bridge was closed."] },
            { as: "p", parts: ["Residents were informed."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Present passive",
          items: [
            { as: "p", parts: ["The road is used daily."] },
            { as: "p", parts: ["The reports are checked."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-blue-600",
          textColor: "text-white",
          column: "Continuous / perfect",
          items: [
            { as: "p", parts: ["The cause is being investigated."] },
            { as: "p", parts: ["The story has been confirmed."] },
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
          "Form the passive with the correct tense of be plus the past participle. Add by only when the agent matters.",
        ],
      },
      {
        as: "p",
        parts: [
          "Use the passive when the action or result is more newsworthy than the person responsible, or when the agent is unknown. Keep the tense accurate to the report time.",
        ],
      },
    ],
      },
      {
        type: "ccq",
        value: [
      { as: "p", parts: ["Is the bridge performing the action?"] },
      { as: "p", parts: ["Do we always need to name the agent?"] },
      {
        as: "p",
        parts: ["Which auxiliary carries the tense in a passive sentence?"],
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
            question: "The road ___ after the storm.",
            options: [
              { option: "was closed", isCorrect: true },
              { option: "closed itself", isCorrect: false },
            ],
          },
          {
            question: "The results ___ tomorrow.",
            options: [
              { option: "will be announced", isCorrect: true },
              { option: "will announced", isCorrect: false },
            ],
          },
          {
            question: "The incident ___ right now.",
            options: [
              { option: "is being investigated", isCorrect: true },
              { option: "is investigating by incident", isCorrect: false },
            ],
          },
          {
            question: "Three people ___ for interviews.",
            options: [
              { option: "have been invited", isCorrect: true },
              { option: "have invited passive", isCorrect: false },
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
              { text: "The building " },
              { blank: "was damaged" },
              { text: " by the storm." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The facts are being " },
              { blank: "checked" },
              { text: "." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "A decision will be " },
              { blank: "announced" },
              { text: " tomorrow." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "The missing bicycle has been " },
              { blank: "found" },
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
            prompt: "was / yesterday / opened / the centre",
            answer: "The centre was opened yesterday.",
          },
          {
            prompt: "being / is / investigated / the incident",
            answer: "The incident is being investigated.",
          },
          {
            prompt: "will / announced / be / results / the",
            answer: "The results will be announced.",
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
        instruction: "Prepare and deliver a concise news update:",
        listType: "checkbox",
        items: [
        {
          content: ["Write a four-sentence news brief about a local event."],
          textarea: true,
        },
        {
          content: ["Use at least three different passive tenses."],
          textarea: true,
        },
        {
          content: [
            "Exchange reports and underline where the agent is omitted.",
          ],
          textarea: false,
        },
      ],
      }
    ],
  },
};
