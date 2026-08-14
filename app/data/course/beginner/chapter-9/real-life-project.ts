import type { CCQ } from "@/components/content/CCQ";
import type { ListProps } from "@/components/content/List";
import type { TextItem } from "@/components/content/Text";
import type { Notes } from "@/components/content/Notes";

import { content, audio, bold } from "@/helpers/content";

export const beginnerRealLifeProject = {
  whiteboard: {
    title: "A1 BEGINNER",
    descriptions: [
      "Let's meet at the park on Saturday.",
      "I like soccer. Can you play?",
    ],
  },

  introduction: {
    blocks: [
      {
        type: "text",
        value: [
          [
            audio("How do you make a simple plan with a friend?"),
            "How do you make a simple plan with a friend?",
          ],
        ],
        className: "mb-4",
      },
      {
        type: "radio",
        ...{
          instruction: "Review what you can already do in English.",
          exercise: {
            questions: [
              {
                question: "Which sentence introduces a preference?",
                options: [
                  { option: "I like pizza.", isCorrect: true },
                  { option: "The bank is next to the park.", isCorrect: false },
                ],
              },
              {
                question: "Which question asks about an ability?",
                options: [
                  { option: "Can you play soccer?", isCorrect: true },
                  { option: "Where is the supermarket?", isCorrect: false },
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
            "Read the conversation. What do Laura and Liz decide to do?",
          audioSrc: "",
          lines: [
            {
              speaker: "Laura",
              line: ["Hi, Liz. Are you free on Saturday?"],
            },
            {
              speaker: "Liz",
              line: ["Yes, I am. I usually relax on Saturday."],
            },
            {
              speaker: "Laura",
              line: ["Let's meet at the park. I like soccer. Can you play?"],
            },
            {
              speaker: "Liz",
              line: ["Yes, I can. What time?"],
            },
            {
              speaker: "Laura",
              line: ["Let's meet at ten o'clock, next to the café."],
            },
            {
              speaker: "Liz",
              line: ["Great! See you on Saturday."],
            },
          ],
        },
      },
      {
        type: "radio",
        ...{
          instruction: "Choose the correct answer.",
          exercise: {
            questions: [
              {
                question: "Where are Laura and Liz meeting?",
                options: [
                  { option: "At the park", isCorrect: true },
                  { option: "At Laura's house", isCorrect: false },
                ],
              },
              {
                question: "When are they meeting?",
                options: [
                  { option: "Saturday at ten o'clock", isCorrect: true },
                  { option: "Sunday at nine o'clock", isCorrect: false },
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
            display: "block",
            as: "span",
            parts: [
              bold("Are you free on Saturday?"),
              " — ask about availability.",
            ],
          },
          {
            display: "block",
            as: "span",
            parts: [bold("Let's meet at the park."), " — make a suggestion."],
          },
          {
            display: "block",
            as: "span",
            parts: [bold("What time?"), " — ask for a meeting time."],
          },
        ],
      },
      {
        type: "notes",
        value: [
          {
            as: "span",
            parts: ["Use ", bold("Let's + verb"), " to suggest an activity."],
          },
          {
            as: "span",
            parts: [
              "Repeat or ask a simple follow-up question when information is unclear.",
            ],
          },
        ],
      },
      {
        type: "ccq",
        value: [
          {
            as: "span",
            parts: ["“Let's meet” is a suggestion: yes or no?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
          },
          {
            as: "span",
            parts: ["Do Laura and Liz agree on a place and a time?"],
            options: [
              { option: "Yes", isCorrect: true },
              { option: "No", isCorrect: false },
            ],
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
          instruction: "Choose the best expression for each situation.",
          exercise: {
            questions: [
              {
                question: "You want to suggest the café.",
                options: [
                  { option: "Let's meet at the café.", isCorrect: true },
                  { option: "I am café.", isCorrect: false },
                ],
              },
              {
                question: "You need to know the meeting time.",
                options: [
                  { option: "What time?", isCorrect: true },
                  { option: "How old?", isCorrect: false },
                ],
              },
              {
                question: "Your friend cannot meet on Saturday.",
                options: [
                  { option: "How about Sunday?", isCorrect: true },
                  { option: "Where are you from?", isCorrect: false },
                ],
              },
              {
                question: "You want to confirm the plan.",
                options: [
                  { option: "Great. See you there!", isCorrect: true },
                  { option: "I don't have a brother.", isCorrect: false },
                ],
              },
              {
                question: "You want to invite a friend to play soccer.",
                options: [
                  { option: "Would you like to play soccer?", isCorrect: true },
                  { option: "Do you play soccer yesterday?", isCorrect: false },
                ],
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
                prompt: "meet / let's / park / at / the",
                answer: "Let's meet at the park.",
              },
              {
                prompt: "free / Saturday / are / on / you",
                answer: "Are you free on Saturday?",
              },
              {
                prompt: "play / can / soccer / you",
                answer: "Can you play soccer?",
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
        instruction: "Complete the A1 real-life project with a partner:",
        listType: "checkbox",
        items: [
          {
            content: content({
              parts: [
                "Use these options: activity — playing soccer, taking a walk, or having coffee; day — Saturday or Sunday; time — 10:00 or 2:00; place — the park or the café.",
              ],
            }),
          },
          {
            content: content({
              parts: [
                "Use the model questions to exchange names, countries, routines, preferences, and abilities.",
              ],
            }),
          },
          {
            content: content({
              parts: [
                "Complete a short profile with at least four details about your partner.",
              ],
            }),
            textarea: true,
          },
          {
            content: content({
              parts: [
                "Choose an activity, day, time, and familiar meeting place from the prepared options.",
              ],
            }),
          },
          {
            content: content({
              parts: [
                "Ask for repetition if needed. Present your plan to another pair and answer one prepared question.",
              ],
            }),
          },
        ],
      },
    ],
  },
};
