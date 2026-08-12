import { shuffle } from "@/utils/shuffle";

export const upperIntermediateLeadership = {
  whiteboard: {
    title: "B2 Upper-Intermediate",
    descriptions: [
      "Describe delegated and outsourced work.",
      "Use have/get something done to focus on arranged services.",
    ],
  },
  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction:
            "Read the situations. Which tasks are delegated internally, outsourced, or experienced by the subject?",
          imgs: [
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EProfessional%20service%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Professional service",
              content: ["The director had the contract reviewed by a lawyer."],
            },
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EArrangement%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Arrangement",
              content: ["We're getting the website redesigned next month."],
            },
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EUnpleasant%20event%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Unpleasant event",
              content: ["She had her laptop stolen during the conference."],
            },
          ],
        },
      },
      {
        type: "imageQuiz",
        ...{
          questions: [
            {
              word: "delegate",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Edelegate%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "delegate",
              options: shuffle([
                { option: "delegate", isCorrect: true },
                { option: "outsource", isCorrect: false },
                { option: "oversee", isCorrect: false },
                { option: "accountability", isCorrect: false },
              ]),
            },
            {
              word: "outsource",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Eoutsource%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "outsource",
              options: shuffle([
                { option: "delegate", isCorrect: false },
                { option: "outsource", isCorrect: true },
                { option: "oversee", isCorrect: false },
                { option: "accountability", isCorrect: false },
              ]),
            },
            {
              word: "oversee",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Eoversee%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "oversee",
              options: shuffle([
                { option: "delegate", isCorrect: false },
                { option: "outsource", isCorrect: false },
                { option: "oversee", isCorrect: true },
                { option: "accountability", isCorrect: false },
              ]),
            },
            {
              word: "accountability",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%237c3aed%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Eaccountability%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "accountability",
              options: shuffle([
                { option: "delegate", isCorrect: false },
                { option: "outsource", isCorrect: false },
                { option: "oversee", isCorrect: false },
                { option: "accountability", isCorrect: true },
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
                question: "What needs upgrading?",
                options: [
                  { option: "The office network.", isCorrect: true },
                  { option: "The office furniture.", isCorrect: false },
                ],
              },
              {
                question: "Who will assess it?",
                options: [
                  { option: "The IT team.", isCorrect: true },
                  { option: "The manager's clients.", isCorrect: false },
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
            "Read or listen once: which network tasks will be delegated or outsourced? Then read or listen again for who remains responsible.",
          audioSrc: "",
          lines: [
            {
              speaker: "Manager",
              line: ["We need to get the office network upgraded."],
            },
            {
              speaker: "Lead",
              line: ["I'll have the IT team assess it this week."],
            },
            {
              speaker: "Manager",
              line: ["Can we get the security testing done externally?"],
            },
            {
              speaker: "Lead",
              line: [
                "Yes. I'll have a specialist carry it out and ask Mia to oversee the schedule.",
              ],
            },
            {
              speaker: "Manager",
              line: ["Good delegation still requires clear accountability."],
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
                question: "What needs upgrading?",
                options: [
                  { option: "The office network.", isCorrect: true },
                  { option: "The office furniture.", isCorrect: false },
                ],
              },
              {
                question: "Who will assess it?",
                options: [
                  { option: "The IT team.", isCorrect: true },
                  { option: "The manager's clients.", isCorrect: false },
                ],
              },
              {
                question: "Who may perform security testing?",
                options: [
                  { option: "An external specialist.", isCorrect: true },
                  {
                    option: "Nobody; it has been cancelled.",
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
              { part: "Causative: ", type: "bold" },
              "Have/get + object + past participle describes arranging for another person to perform a service. It can also describe an experience, often an unpleasant one.",
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
              bgColor: "bg-purple-600",
              textColor: "text-white",
              column: "Have something done",
              items: [
                { as: "p", parts: ["We had the report edited."] },
                { as: "p", parts: ["I'll have the team contact you."] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-purple-600",
              textColor: "text-white",
              column: "Get something done",
              items: [
                { as: "p", parts: ["We're getting the system upgraded."] },
                { as: "p", parts: ["Can you get this repaired?"] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-purple-600",
              textColor: "text-white",
              column: "Experience",
              items: [
                { as: "p", parts: ["He had his phone stolen."] },
                { as: "p", parts: ["They got their flight cancelled."] },
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
              "In the causative structure, the subject arranges or experiences the action; the subject does not necessarily perform it.",
            ],
          },
          {
            as: "p",
            parts: [
              "Use have/get + object + past participle for a service or delegated task. With a person who performs the action, use have + person + base verb: I'll have the team contact you.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "p",
            parts: ["Did the director personally review the legal contract?"],
          },
          {
            as: "p",
            parts: ["Who performs the service in a causative structure?"],
          },
          {
            as: "p",
            parts: ["Can the structure describe an unwanted experience?"],
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
                question: "We're going to ___ the logo redesigned.",
                options: [
                  { option: "have", isCorrect: true },
                  { option: "do ourselves necessarily", isCorrect: false },
                ],
              },
              {
                question: "She had her presentation ___ by a coach.",
                options: [
                  { option: "reviewed", isCorrect: true },
                  { option: "review", isCorrect: false },
                ],
              },
              {
                question: "Can you get the printer ___?",
                options: [
                  { option: "fixed", isCorrect: true },
                  { option: "fixing by itself", isCorrect: false },
                ],
              },
              {
                question: "He ___ his wallet stolen on the train.",
                options: [
                  { option: "had", isCorrect: true },
                  { option: "made someone steal", isCorrect: false },
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
                  { text: "We had the documents " },
                  { blank: "translated" },
                  { text: "." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "I'm getting my laptop " },
                  { blank: "repaired" },
                  { text: "." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "She will have the team " },
                  { blank: "prepare" },
                  { text: " a summary." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "They had their flight " },
                  { blank: "cancelled" },
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
                prompt: "had / reviewed / we / the contract",
                answer: "We had the contract reviewed.",
              },
              {
                prompt: "getting / redesigned / is / the office / she",
                answer: "She is getting the office redesigned.",
              },
              {
                prompt: "will / contact / have / I / them / my assistant",
                answer: "I will have my assistant contact them.",
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
        instruction: "Delegate a project while keeping responsibilities clear:",
        listType: "checkbox",
        items: [
          {
            content: [
              "Plan a project and identify five tasks you would delegate or outsource.",
            ],
            textarea: true,
          },
          {
            content: ["Describe each arrangement with a causative structure."],
            textarea: true,
          },
          {
            content: [
              "Explain how you would maintain quality and accountability.",
            ],
            textarea: false,
          },
        ],
      },
    ],
  },
};
