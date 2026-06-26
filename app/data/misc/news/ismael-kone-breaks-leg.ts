import { bold, content } from "@/helpers/content";

export const ismaelKoneBreaksLeg = {
  slug: "ismael-kone-breaks-leg",

  metadata: {
    title: "Advanced | Misc | ",
    description: "Ismael Koné Breaks Leg",
  },

  whiteboard: {
    title: "Miscellaneous",
    subtitle: "News",
    descriptions: ["Ismael Koné Breaks Leg"],
  },

  card: "A serious injury during a football match can change a player's career and affect an entire team. In this lesson, you will watch a news report about Ismaël Koné breaking his leg during a World Cup 2026 match.",

  sections: {
    beforeWatching: {
      paragraph: [
        ...content({
          parts: ["Discuss the questions below before watching the video."],
        }),
      ],

      list: {
        items: [
          {
            value: [
              ...content({
                parts: [
                  "1. Have you ever seen a serious injury during a football match?",
                ],
              }),
            ],
          },
          {
            value: [
              ...content({
                parts: [
                  "2. How can an injury affect a team during an important tournament?",
                ],
              }),
            ],
          },
          {
            value: [
              ...content({
                parts: [
                  "3. Should matches be stopped immediately after serious injuries? Why?",
                ],
              }),
            ],
          },
        ],
      },
    },

    vocabulary: {
      list: {
        type: "checkbox" as const,
        instruction: "Check the words you already know.",
        items: [
          {
            value: [bold("injury"), " = physical harm to a person's body"],
          },
          {
            value: [
              bold("stretcher"),
              " = a frame used to carry an injured person",
            ],
          },
          {
            value: [
              bold("tournament"),
              " = a competition with several games or matches",
            ],
          },
          {
            value: [
              bold("recovery"),
              " = the process of becoming healthy again",
            ],
          },
          {
            value: [
              bold("substitute"),
              " = a player who replaces another player",
            ],
          },
          {
            value: [
              bold("overshadowed"),
              " = made something seem less important",
            ],
          },
          {
            value: [bold("lunged"), " = moved forward suddenly"],
          },
          {
            value: [
              bold("tribute"),
              " = an act that shows respect or admiration",
            ],
          },
          {
            value: [bold("devastated"), " = extremely upset or shocked"],
          },
          {
            value: [
              bold("heated confrontation"),
              " = an angry argument or conflict",
            ],
          },
        ],
      },
    },

    gist: {
      paragraph: [
        ...content({
          parts: ["Watch the video once and choose the best summary."],
        }),
      ],

      videoPlayer: {
        videoId: "J_YhQeIrGeQ",
        title: "Ismaël Koné breaks leg during match | World Cup 2026",
        instruction: "Choose the best answer.",
      },

      radio: {
        instruction: "Choose the best answer.",
        exercise: {
          questions: [
            {
              question: "What is the main purpose of the report?",
              options: [
                {
                  option:
                    "To report Ismaël Koné's serious injury and Canada's historic victory.",
                  isCorrect: true,
                },
                {
                  option: "To explain why the World Cup final was cancelled.",
                  isCorrect: false,
                },
                {
                  option: "To celebrate Qatar's performance in the match.",
                  isCorrect: false,
                },
                {
                  option: "To announce Ismaël Koné's retirement from football.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      },
    },

    details: {
      paragraph: [
        ...content({
          parts: ["Watch again and listen for specific information."],
        }),
      ],

      radio: {
        instruction: "Choose the best response.",
        exercise: {
          questions: [
            {
              question: "What happened in the 51st minute?",
              options: [
                {
                  option: "Jonathan David scored his first goal.",
                  isCorrect: false,
                },
                {
                  option: "Canada received a red card.",
                  isCorrect: false,
                },
                {
                  option:
                    "Assim Madibo lunged into a challenge on Ismaël Koné.",
                  isCorrect: true,
                },
                {
                  option:
                    "The match was temporarily suspended because of rain.",
                  isCorrect: false,
                },
              ],
            },
            {
              question: "What happened after the VAR review?",
              options: [
                {
                  option: "Koné returned to the match.",
                  isCorrect: false,
                },
                {
                  option: "The referee cancelled the penalty.",
                  isCorrect: false,
                },
                {
                  option: "Canada was reduced to ten men.",
                  isCorrect: false,
                },
                {
                  option: "Madibo's yellow card was upgraded to a red card.",
                  isCorrect: true,
                },
              ],
            },
            {
              question: "How did Nathan Saliba pay tribute to Koné?",
              options: [
                {
                  option: "He dedicated a song to him.",
                  isCorrect: false,
                },
                {
                  option: "He held up Koné's shirt after scoring.",
                  isCorrect: true,
                },
                {
                  option: "He left the match in protest.",
                  isCorrect: false,
                },
                {
                  option: "He gave Koné the captain's armband.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      },

      fillInTheBlanks: {
        instruction: "Complete the definitions with the words from Vocabulary.",
        exercise: {
          blocks: [
            {
              block: [
                {
                  text: "A",
                },
                {
                  blank: "tournament",
                },
                {
                  text: " is a competition with several matches.",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "Physical harm to a person's body is called an",
                },
                {
                  blank: "injury",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "The process of becoming healthy again is called",
                },
                {
                  blank: "recovery",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "A",
                },
                {
                  blank: "stretcher",
                },
                {
                  text: " is used to carry an injured person.",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "A player who replaces another player is called a",
                },
                {
                  blank: "substitute",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "To move forward suddenly means to",
                },
                {
                  blank: "lunge",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "If something is made to seem less important, it is",
                },
                {
                  blank: "overshadowed",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "An act that shows respect or admiration is called a",
                },
                {
                  blank: "tribute",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "An angry argument or conflict is called a",
                },
                {
                  blank: "heated confrontation",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "If someone is extremely upset or shocked, they are",
                },
                {
                  blank: "devastated",
                },
                {
                  text: ".",
                },
              ],
              lineBreak: true,
            },
          ],
        },
      },
    },

    followUp: {
      paragraph: [
        ...content({
          parts: ["Discuss the questions below."],
        }),
      ],

      list: {
        items: [
          {
            value: [
              ...content({
                parts: [
                  "1. How do you think players mentally recover after a serious injury?",
                ],
              }),
            ],
          },
        ],
      },
    },
  },
};
