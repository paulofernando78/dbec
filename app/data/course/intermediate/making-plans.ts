import { shuffle } from "@/utils/shuffle";

export const intermediateMakingPlans = {
  whiteboard: {
    title: "B1 Intermediate",
    descriptions: [
      "Distinguish intentions, arrangements, predictions, and schedules.",
      "Select an appropriate future form in conversation.",
    ],
  },
  introduction: {
    blocks: [
      {
        type: "carousel",
        aspectRatio: "wide",
        ...{
          instruction:
            "Read the situations. Which ones express an intention, a fixed arrangement, a schedule, a prediction, or a spontaneous decision?",
          imgs: [
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EIntention%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Intention",
              content: ["I'm going to improve my presentation skills."],
            },
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EArrangement%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Arrangement",
              content: ["I'm meeting my mentor on Thursday."],
            },
            {
              src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3ESchedule%3C%2Ftext%3E%3C%2Fsvg%3E",
              alt: "Schedule",
              content: ["The workshop starts at nine."],
            },
          ],
        },
      },
      {
        type: "imageQuiz",
        ...{
          questions: [
            {
              word: "arrangement",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Earrangement%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "arrangement",
              options: shuffle([
                { option: "arrangement", isCorrect: true },
                { option: "intention", isCorrect: false },
                { option: "deadline", isCorrect: false },
                { option: "schedule", isCorrect: false },
              ]),
            },
            {
              word: "intention",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Eintention%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "intention",
              options: shuffle([
                { option: "arrangement", isCorrect: false },
                { option: "intention", isCorrect: true },
                { option: "deadline", isCorrect: false },
                { option: "schedule", isCorrect: false },
              ]),
            },
            {
              word: "deadline",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Edeadline%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "deadline",
              options: shuffle([
                { option: "arrangement", isCorrect: false },
                { option: "intention", isCorrect: false },
                { option: "deadline", isCorrect: true },
                { option: "schedule", isCorrect: false },
              ]),
            },
            {
              word: "schedule",
              imgSrc:
                "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20500%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%232563eb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f172a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22500%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22690%22%20cy%3D%2290%22%20r%3D%22120%22%20fill%3D%22white%22%20opacity%3D%22.08%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22430%22%20r%3D%22170%22%20fill%3D%22white%22%20opacity%3D%22.06%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22250%22%20fill%3D%22white%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2248%22%20font-weight%3D%22700%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3Eschedule%3C%2Ftext%3E%3C%2Fsvg%3E",
              imgAlt: "schedule",
              options: shuffle([
                { option: "arrangement", isCorrect: false },
                { option: "intention", isCorrect: false },
                { option: "deadline", isCorrect: false },
                { option: "schedule", isCorrect: true },
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
                question: "What is Ben's arrangement?",
                options: [
                  { option: "He is meeting Carla at six.", isCorrect: true },
                  { option: "He might meet Carla someday.", isCorrect: false },
                ],
              },
              {
                question: "What is their intention?",
                options: [
                  {
                    option: "They are going to plan the project.",
                    isCorrect: true,
                  },
                  { option: "They planned it last year.", isCorrect: false },
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
            "Read or listen once: what are Ben and Carla planning, and what does Ava offer to do? Then read or listen again for the different future meanings.",
          audioSrc: "",
          lines: [
            { speaker: "Ava", line: ["What are you doing after work?"] },
            {
              speaker: "Ben",
              line: [
                "I'm meeting Carla at six. We're going to plan the project.",
              ],
            },
            { speaker: "Ava", line: ["The deadline is Friday, isn't it?"] },
            { speaker: "Ben", line: ["Yes. I think we'll finish on time."] },
            {
              speaker: "Ava",
              line: ["Good. I'll send you the latest figures now."],
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
                question: "What is Ben's arrangement?",
                options: [
                  { option: "He is meeting Carla at six.", isCorrect: true },
                  { option: "He might meet Carla someday.", isCorrect: false },
                ],
              },
              {
                question: "What is their intention?",
                options: [
                  {
                    option: "They are going to plan the project.",
                    isCorrect: true,
                  },
                  { option: "They planned it last year.", isCorrect: false },
                ],
              },
              {
                question: "What does Ava decide at the moment of speaking?",
                options: [
                  { option: "She will send the figures.", isCorrect: true },
                  { option: "She is meeting the figures.", isCorrect: false },
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
        type: "text",
        value: [
          {
            as: "p",
            parts: [
              { part: "Future forms: ", type: "bold" },
              "Use going to for prior intentions, Present Continuous for arrangements, Present Simple for timetables, and will for spontaneous decisions or predictions.",
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
              column: "Intention",
              items: [
                { as: "p", parts: ["I'm going to apply for the course."] },
                { as: "p", parts: ["We're going to save more money."] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-blue-600",
              textColor: "text-white",
              column: "Arrangement / schedule",
              items: [
                { as: "p", parts: ["I'm seeing Jo tomorrow."] },
                { as: "p", parts: ["The train leaves at 7:15."] },
              ],
            },
            {
              borderColor: "border-slate-500",
              bgColor: "bg-blue-600",
              textColor: "text-white",
              column: "Will",
              items: [
                { as: "p", parts: ["I think it will work."] },
                { as: "p", parts: ["I'll help you with that."] },
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
              "More than one future form can be grammatical, but the speaker's meaning determines the most natural choice.",
            ],
          },
          {
            as: "p",
            parts: [
              "Use the Present Continuous for a fixed arrangement, going to for an intention, and will for a decision made while speaking. Confirm the time and place before ending the conversation.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "p",
            parts: ["Has an arrangement usually been agreed with someone?"],
          },
          {
            as: "p",
            parts: ["Is a spontaneous decision planned before speaking?"],
          },
          { as: "p", parts: ["Do timetables depend on a personal intention?"] },
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
                question: "I ___ the dentist at 3 p.m. tomorrow.",
                options: [
                  { option: "am seeing", isCorrect: true },
                  { option: "will seeing", isCorrect: false },
                ],
              },
              {
                question: "Look at those clouds! It ___.",
                options: [
                  { option: "is going to rain", isCorrect: true },
                  { option: "meets rain", isCorrect: false },
                ],
              },
              {
                question: "The conference ___ on Monday.",
                options: [
                  { option: "starts", isCorrect: true },
                  { option: "is going to starting", isCorrect: false },
                ],
              },
              {
                question: "You look busy. I ___ you.",
                options: [
                  { option: "will help", isCorrect: true },
                  { option: "am help", isCorrect: false },
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
                  { text: "We " },
                  { blank: "are meeting" },
                  { text: " the client tomorrow." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "I am going to " },
                  { blank: "learn" },
                  { text: " Spanish." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "The film " },
                  { blank: "starts" },
                  { text: " at eight." },
                ],
                lineBreak: true,
              },
              {
                block: [
                  { text: "Don't worry; I " },
                  { blank: "will call" },
                  { text: " them." },
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
                prompt: "meeting / are / on Friday / we",
                answer: "We are meeting on Friday.",
              },
              {
                prompt: "going to / she / apply / is",
                answer: "She is going to apply.",
              },
              {
                prompt: "will / I / carry / that",
                answer: "I will carry that.",
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
        instruction: "Negotiate and confirm plans for a shared project:",
        listType: "checkbox",
        items: [
          {
            content: [
              "Create a realistic plan for the next seven days using four future forms.",
            ],
            textarea: true,
          },
          {
            content: [
              "Write one intention, arrangement, timetable event, and prediction.",
            ],
            textarea: true,
          },
          {
            content: [
              "Compare plans with a partner and arrange one shared activity.",
            ],
            textarea: false,
          },
        ],
      },
    ],
  },
};
