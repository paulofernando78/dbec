import { shuffle } from "@/utils/shuffle";

export const intermediateGreenPlanet = {
  whiteboard: {
    title: "B1 Intermediate",
    subtitle: "Green Planet",
    descriptions: [
      "Explain environmental facts and predictable results.",
      "Use the Zero Conditional for general truths.",
    ],
  },
  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction:
            "Read the situations. Which environmental action produces each predictable result?",
          imgs: [
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3ECause%20and%20effect%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Cause and effect",
              content: ["If forests disappear, animals lose their habitats."],
            },
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EProcess%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Process",
              content: [
                "When people recycle aluminium, factories use less energy.",
              ],
            },
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EGeneral%20truth%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "General truth",
              content: ["If temperatures rise, ice melts faster."],
            },
          ],
        },
      },
      {
        type: "imageQuiz",
        ...{
          questions: [
            {
              word: "emissions",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Eemissions%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "emissions",
              options: shuffle([
                { option: "emissions", isCorrect: true },
                { option: "renewable", isCorrect: false },
                { option: "habitat", isCorrect: false },
                { option: "recycle", isCorrect: false },
              ]),
            },
            {
              word: "renewable",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Erenewable%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "renewable",
              options: shuffle([
                { option: "emissions", isCorrect: false },
                { option: "renewable", isCorrect: true },
                { option: "habitat", isCorrect: false },
                { option: "recycle", isCorrect: false },
              ]),
            },
            {
              word: "habitat",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Ehabitat%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "habitat",
              options: shuffle([
                { option: "emissions", isCorrect: false },
                { option: "renewable", isCorrect: false },
                { option: "habitat", isCorrect: true },
                { option: "recycle", isCorrect: false },
              ]),
            },
            {
              word: "recycle",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Erecycle%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "recycle",
              options: shuffle([
                { option: "emissions", isCorrect: false },
                { option: "renewable", isCorrect: false },
                { option: "habitat", isCorrect: false },
                { option: "recycle", isCorrect: true },
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
                question: "What happens when people recycle?",
                options: [
                  {
                    option: "They reduce waste and save energy.",
                    isCorrect: true,
                  },
                  {
                    option: "They create more raw materials.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question: "What can ocean rubbish damage?",
                options: [
                  { option: "Habitats.", isCorrect: true },
                  { option: "Renewable energy.", isCorrect: false },
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
          instruction:
            "Read or listen once: why does recycling matter? Then read or listen again and match each environmental condition to its result.",
          audioSrc: "",
          lines: [
            { speaker: "Noah", line: ["Why does recycling matter so much?"] },
            {
              speaker: "Iris",
              line: [
                "When we recycle materials, we reduce waste and save energy.",
              ],
            },
            {
              speaker: "Noah",
              line: ["What happens if rubbish reaches the ocean?"],
            },
            {
              speaker: "Iris",
              line: [
                "It damages habitats and sometimes enters the food chain.",
              ],
            },
            {
              speaker: "Noah",
              line: ["Then small habits really make a difference."],
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
                question: "What happens when people recycle?",
                options: [
                  {
                    option: "They reduce waste and save energy.",
                    isCorrect: true,
                  },
                  {
                    option: "They create more raw materials.",
                    isCorrect: false,
                  },
                ],
              },
              {
                question: "What can ocean rubbish damage?",
                options: [
                  { option: "Habitats.", isCorrect: true },
                  { option: "Renewable energy.", isCorrect: false },
                ],
              },
              {
                question: "Are these results presented as general facts?",
                options: [
                  { option: "Yes.", isCorrect: true },
                  {
                    option: "No, they are imaginary past events.",
                    isCorrect: false,
                  },
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
        type: "meaning",
        value: [
          {
            as: "p",
            parts: [
              { part: "Zero Conditional: ", type: "bold" },
              "Use the Zero Conditional for facts, routines, instructions, and results that generally follow whenever a condition occurs.",
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
              column: "If",
              items: [
                { as: "p", parts: ["If water reaches 100°C, it boils."] },
                { as: "p", parts: ["If habitats disappear, species suffer."] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-blue-600",
              textColor: "text-white",
              column: "When",
              items: [
                { as: "p", parts: ["When we recycle, we save resources."] },
                { as: "p", parts: ["When air cools, water condenses."] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-blue-600",
              textColor: "text-white",
              column: "Imperative result",
              items: [
                { as: "p", parts: ["If you see litter, pick it up."] },
                { as: "p", parts: ["If a device is unused, switch it off."] },
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
              "Both clauses normally use the Present Simple. When often emphasizes that the result is expected every time.",
            ],
          },
          {
            as: "p",
            parts: [
              "Use the Zero Conditional for facts, routines, and predictable consequences—not for one specific future plan. Connect the fact to a practical environmental action.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "p",
            parts: ["Is the speaker describing one unique future event?"],
          },
          {
            as: "p",
            parts: ["Does the result generally follow the condition?"],
          },
          {
            as: "p",
            parts: ["Can when replace if when the result is certain?"],
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
          instruction: "Choose the most accurate option.",
          exercise: {
            questions: [
              {
                question: "If plastic reaches the sea, it ___ wildlife.",
                options: [
                  { option: "harms", isCorrect: true },
                  { option: "will harm", isCorrect: false },
                  { option: "harmed", isCorrect: false },
                ],
              },
              {
                question: "When we use less energy, emissions ___.",
                options: [
                  { option: "fall", isCorrect: true },
                  { option: "will fall", isCorrect: false },
                  { option: "fell", isCorrect: false },
                ],
              },
              {
                question: "If the bin is full, ___ another one.",
                options: [
                  { option: "use", isCorrect: true },
                  { option: "will use", isCorrect: false },
                  { option: "used", isCorrect: false },
                ],
              },
              {
                question: "Plants die if they ___ enough water.",
                options: [
                  { option: "do not get", isCorrect: true },
                  { option: "will not get", isCorrect: false },
                  { option: "did not get", isCorrect: false },
                ],
              },
              {
                question: "If people recycle paper, fewer trees ___.",
                options: [
                  { option: "are cut down", isCorrect: true },
                  { option: "will cut down", isCorrect: false },
                  { option: "were cutting down", isCorrect: false },
                ],
              },
              {
                question: "When the temperature drops below zero, water ___.",
                options: [
                  { option: "freezes", isCorrect: true },
                  { option: "will freeze", isCorrect: false },
                  { option: "would freeze", isCorrect: false },
                ],
              },
              {
                question: "If you leave a room, ___ the lights off.",
                options: [
                  { option: "switch", isCorrect: true },
                  { option: "will switch", isCorrect: false },
                  { option: "switched", isCorrect: false },
                ],
              },
              {
                question: "Air quality improves when traffic ___.",
                options: [
                  { option: "decreases", isCorrect: true },
                  { option: "will decrease", isCorrect: false },
                  { option: "would decrease", isCorrect: false },
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
                  { text: "If people burn fossil fuels, emissions " },
                  { blank: "increase" },
                  { text: "." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "When ice " },
                  { blank: "melts" },
                  { text: ", sea levels rise." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "If you can reuse a bag, " },
                  { blank: "do not throw" },
                  { text: " it away." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "Animals lose shelter if forests " },
                  { blank: "disappear" },
                  { text: "." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "When people recycle glass, they " },
                  { blank: "save" },
                  { text: " raw materials." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "If a tap leaks, " },
                  { blank: "fix" },
                  { text: " it." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "Soil becomes dry when it " },
                  { blank: "does not rain" },
                  { text: "." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "If factories reduce pollution, air quality " },
                  { blank: "improves" },
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
                prompt: "rises / melts / temperature / ice / if / the",
                answer: "Ice melts if the temperature rises.",
              },
              {
                prompt: "recycle / save / when / resources / we / we",
                answer: "When we recycle, we save resources.",
              },
              {
                prompt: "turn off / leave / if / you / the lights",
                answer: "Turn off the lights if you leave.",
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
        instruction:
          "Explain environmental causes and agree on useful actions:",
        listType: "checkbox",
        items: [
          {
            content: ["Create four environmental cause-and-effect statements."],
            textarea: true,
          },
          {
            content: [
              "Include one sentence with when and one with an imperative result.",
            ],
            textarea: true,
          },
          {
            content: [
              "Use your statements to design a short green-living guide.",
            ],
            textarea: false,
          },
        ],
      },
    ],
  },
};
