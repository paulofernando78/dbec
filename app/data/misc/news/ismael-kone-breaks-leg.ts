import { bold, content } from "@/helpers/content";

export const ismaelKoneBreaksLeg = {
  slug: "ismael-kone-breaks-leg",

  metadata: {
    title: "Advanced | Misc | ",
    description: "A dramatic soccer match moment",
  },
  whiteboard: {
    title: "Miscellaneous",
    subtitle: "News",
    descriptions: [
      "A dramatic moment changes the atmosphere of an important soccer match.",
    ],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          value: [
            "Have you ever seen a serious injury during a football match?",
          ],
        },
        {
          value: [
            "How can an injury affect a team during an important tournament?",
          ],
        },
        {
          value: [
            "Should matches be stopped immediately after serious injuries? Why?",
          ],
        },
      ],
    },
    vocabulary: {
      prompt: "Slide the pictures and describe what you see.",
      imgs: [
        {
          word: "stretcher",
          img: 0
        },
        {
          word: "tackle",
          img: 0
          },
          {
            word: "injury",
            img: 0
          },
          {
            word: "strether",
            img: 0
          },
          {
            word: "tournament",
            img: 0
          },
          {
            word: "tournament",
            img: 0
          },
          {
            word: "recovery",
            img: 0
          },
          {
            word: "substitute",
            img: 0
          },
          {
            word: "overshadowed",
            img: 0
          },
          {
            word: "lunged (into)",
            img: 0
          },
          {
            word: "tribute",
            img: 0
          },
          {
            word: "devastated",
            img: 0
          },
          {
            word: "heated confrontation",
            img: 0
          },
        ],
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
        instruction: "Watch the video and answer the question.",
      },

      radio: {
        exercise: {
          questions: [
            {
              question: "What is the main purpose of the report?",
              options: [
                {
                  option: "To explain why the World Cup final was cancelled.",
                  isCorrect: false,
                },
                {
                  option: "To celebrate Qatar's performance in the match.",
                  isCorrect: false,
                },
                {
                  option:
                    "To report Ismaël Koné's serious injury and Canada's historic victory.",
                  isCorrect: true,
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
      radio: {
        instruction: "Watch again and listen for specific information.",
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
      list: {
        type: "ol" as const,
        instruction: "Answer the questions.",
        items: [
          {
            value: ["Should dangerous tackles receive longer suspensions?"],
          },
          {
            value: ["Can a serious injury change a player's career forever?"],
          },
        ],
      },
    },
  },
};
