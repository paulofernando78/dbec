import type { Meaning } from "@/components/content/Meaning";
import type { Notes } from "@/components/content/Notes";
import type { ListProps } from "@/components/content/List";
import type { CCQ } from "@/components/content/CCQ/";

import { content, audio, bold, spacer } from "@/helpers/content";
import { completePractice } from "@/data/course/completePractice";

export const elementaryPastMovies = {
  whiteboard: {
    title: "A2 Elementary",
    subtitle: "Movie Night",
    descriptions: [
      "We went to the movies. It was funny, and I'd recommend it.",
    ],
  },

  introduction: {
    instruction: ["Talk about movies before you begin."],
    questions: [
      [audio("Do you like watching movies?"), "Do you like watching movies?"],
      [
        audio("Where do you usually watch movies?"),
        "Where do you usually watch movies?",
      ],
      [
        audio("Who do you usually watch movies with?"),
        "Who do you usually watch movies with?",
      ],
    ],
    imageQuiz: {
      words: [
        { word: "movie theater", img: 0 },
        { word: "ticket", img: 0 },
        { word: "popcorn", img: 0 },
        { word: "soda", img: 0 },
        { word: "row of seats", img: 0 },
      ],
    },
  },

  presentation: {
    storyCarousel: {
      instruction:
        "Look at the pictures. What happened on Laura's movie night? Listen and check.",
      imgs: [
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-going-to-movies.avif",
          alt: "Laura going to the movies",
          content: [
            ...content({
              parts: [
                audio("Last weekend, Laura went to the movies."),
                "Last weekend, Laura went to the movies.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-buying-two-tickets.avif",
          alt: "Laura buying two tickets",
          content: [
            ...content({
              parts: [
                audio("She bought two tickets."),
                "She bought two tickets.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-buying-popcorn-soda.avif",
          alt: "Laura buying soda and popcorn",
          content: [
            ...content({
              parts: [
                audio("She also bought popcorn and soda."),
                "She also bought popcorn and soda.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-meeting-liz.avif",
          alt: "Laura meeting her friend Liz",
          content: [
            ...content({
              parts: [
                audio("She met her friend Liz."),
                "She met her friend Liz.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/they-watching-movie.avif",
          alt: "Laura and Liz watching the movie",
          content: [
            ...content({
              parts: [
                audio("They watched the movie."),
                "They watched the movie.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-liz-eating.avif",
          alt: "Laura and Liz eating popcorn and drinking soda",
          content: [
            ...content({
              parts: [
                audio("They had popcorn and soda."),
                "They had popcorn and soda.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-looking-at-watch.avif",
          alt: "Laura looking at her watch",
          content: [
            ...content({
              parts: [
                audio("The movie finished at 8:20 p.m."),
                "The movie finished at 8:20 p.m.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-liz-leaving-movie-theater.avif",
          alt: "Laura and Liz leaving the movie theater",
          content: [
            ...content({
              parts: [
                audio("They left the movie theater."),
                "They left the movie theater.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/laura-taking-taxi.avif",
          alt: "Laura taking a taxi home",
          content: [
            ...content({
              parts: [
                audio("Laura took a taxi home."),
                "Laura took a taxi home.",
              ],
            }),
          ],
        },
        {
          src: "/assets/img/course/a2/past-movies/introduction/story/liz-driving-home.avif",
          alt: "Liz driving home",
          content: [
            ...content({
              parts: [audio("Liz drove home, too."), "Liz drove home, too."],
            }),
          ],
        },
      ],
    },
    storyRadio: {
      instruction: "Listen again and choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Last weekend, Laura went to the movies.",
            options: [
              { option: "true", isCorrect: true },
              { option: "false", isCorrect: false },
            ],
          },
          {
            question: "Laura bought one ticket.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
          {
            question: "The movie finished at 7:20 p.m.",
            options: [
              { option: "true", isCorrect: false },
              { option: "false", isCorrect: true },
            ],
          },
        ],
      },
    },
    dialogue: {
      instruction:
        "Listen once. Who had the more active weekend? Then listen again for details.",
      audioSrc: "",
      lines: [
        {
          speaker: "Laura",
          line: ["Hey Eric. How's it going?"],
        },
        {
          speaker: "Eric",
          line: ["Pretty good. How about you?"],
        },
        {
          speaker: "Laura",
          line: ["Feeling great. I had a really nice weekend."],
        },
        {
          speaker: "Eric",
          line: ["Nice! What did you do?"],
        },
        {
          speaker: "Laura",
          line: ["I went to the movie theater on Saturday."],
        },
        {
          speaker: "Eric",
          line: ["Cool! What movie did you watch?"],
        },
        {
          speaker: "Laura",
          line: ["I saw a comedy. It was really funny."],
        },
        {
          speaker: "Eric",
          line: ["Would you recommend it?"],
        },
        {
          speaker: "Laura",
          line: ["Yes, I would. It was really funny."],
        },
        {
          speaker: "Eric",
          line: ["Did you go alone?"],
        },
        {
          speaker: "Laura",
          line: [
            "No, I went with my friend Liz. We bought tickets and popcorn.",
          ],
        },
        {
          speaker: "Eric",
          line: ["Sounds fun. I stayed home and played video games."],
        },
        {
          speaker: "Laura",
          line: ["That sounds good too. Did you relax?"],
        },
        {
          speaker: "Eric",
          line: ["Yes, I relaxed a lot. It was a quiet weekend."],
        },
      ],
    },

    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "What did Laura do on Saturday?",
            options: [
              { option: "She went to the movie theater", isCorrect: true },
              { option: "She stayed home", isCorrect: false },
            ],
          },
          {
            question: "Who did Laura go with?",
            options: [
              { option: "Her friend Liz", isCorrect: true },
              { option: "Eric", isCorrect: false },
            ],
          },
          {
            question: "What did Eric do last weekend?",
            options: [
              { option: "He played video games", isCorrect: true },
              { option: "He bought tickets and popcorn", isCorrect: false },
            ],
          },
        ],
      },
    },
  },

  languageFocus: {
    meaning: [
      {
        as: "p",
        parts: [
          "Describe a finished movie experience with the ",
          bold("Past Simple"),
          ", then give your opinion.",
        ],
      },
      spacer(),
      {
        as: "p",
        parts: [
          "Experience: ",
          bold("I saw a comedy with my friend Liz."),
          " Opinion: ",
          bold("It was really funny."),
        ],
      },
      {
        as: "p",
        parts: [
          "Ask follow-up questions: ",
          bold("Did you like it?"),
          " ",
          bold("Who did you go with?"),
          " ",
          bold("Would you recommend it?"),
        ],
      },
    ] satisfies Meaning[],

    columnQuestions: {
      width: 300,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Ask about the experience",
          items: [
            {
              parts: [
                bold("did + base verb"),
                " for past details; ",
                bold("would + base verb"),
                " for recommendations:",
              ],
            },
            spacer(),
            {
              parts: [
                audio("What movie did you see?"),
                "What movie did you see?",
              ],
            },
            { parts: [audio("Who did you go with?"), "Who did you go with?"] },
            { parts: [audio("Did you like it?"), "Did you like it?"] },
            {
              parts: [
                audio("Would you recommend it?"),
                "Would you recommend it?",
              ],
            },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Answer and give an opinion",
          items: [
            {
              parts: [audio("I saw a comedy."), "I saw a comedy."],
            },
            {
              parts: [
                audio("I went with my friend Liz."),
                "I went with my friend Liz.",
              ],
            },
            { parts: [audio("Yes. It was funny."), "Yes. It was funny."] },
            {
              parts: [
                audio("Yes, I'd recommend it."),
                "Yes, I'd recommend it.",
              ],
            },
          ],
        },
      ],
    },

    columnVerbs: {
      width: 280,
      cols: [
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Opinion",
          items: [
            { parts: [audio("It was funny."), "It was funny."] },
            { parts: [audio("It was exciting."), "It was exciting."] },
            {
              parts: [audio("It was a little slow."), "It was a little slow."],
            },
            { parts: [audio("I didn't enjoy it."), "I didn't enjoy it."] },
          ],
        },
        {
          borderColor: "border-slate-500",
          bgColor: "bg-slate-400",
          textColor: "text-white",
          column: "Recommendation",
          items: [
            { parts: [audio("I'd recommend it."), "I'd recommend it."] },
            { parts: [audio("It's worth watching."), "It's worth watching."] },
            { parts: [audio("It isn't for me."), "It isn't for me."] },
            {
              parts: [
                audio("I wouldn't recommend it."),
                "I wouldn't recommend it.",
              ],
            },
          ],
        },
      ],
    },

    notes: [
      {
        as: "p",
        parts: [
          "Give a reason after your opinion: ",
          bold("I liked it because it was funny."),
        ],
      },
      {
        as: "p",
        parts: [
          bold("I'd"),
          " means ",
          bold("I would"),
          ". Stress the opinion or recommendation: It was ",
          bold("FUNNY"),
          ". I'd ",
          bold("RECOMMEND"),
          " it.",
        ],
      },
    ] satisfies Notes[],

    ccq: [
      {
        parts: [
          "In 'I saw a comedy last weekend', is the experience finished?",
        ],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
      {
        parts: [
          "Does 'It was funny' give a fact about the outing or an opinion?",
        ],
        options: [
          { option: "An opinion", isCorrect: true },
          { option: "A time", isCorrect: false },
        ],
      },
      {
        parts: ["Which question asks for a recommendation?"],
        options: [
          { option: "Would you recommend it?", isCorrect: true },
          { option: "Where are you from?", isCorrect: false },
        ],
      },
      {
        parts: ["After did, do we use see or saw?"],
        options: [
          { option: "see", isCorrect: true },
          { option: "saw", isCorrect: false },
        ],
      },
      {
        parts: ["Does I'd recommend mean I would recommend?"],
        options: [
          { option: "Yes", isCorrect: true },
          { option: "No", isCorrect: false },
        ],
      },
    ] satisfies CCQ[],
  },

  practice: completePractice({
    radio: {
      instruction: "Choose the correct answer.",
      exercise: {
        questions: [
          {
            question: "Yesterday I _____ a movie.",
            options: [
              { option: "watched", isCorrect: true },
              { option: "watch", isCorrect: false },
            ],
          },
          {
            question: "_____ you like the movie?",
            options: [
              { option: "Did", isCorrect: true },
              { option: "Were", isCorrect: false },
            ],
          },
          {
            question: "It was exciting, so I _____ recommend it.",
            options: [
              { option: "would", isCorrect: true },
              { option: "did", isCorrect: false },
            ],
          },
        ],
      },
    },

    fillInTheBlanks: {
      showWordBank: true,
      instruction: "Complete the sentences.",
      numbered: true,
      exercise: {
        blocks: [
          {
            block: [
              { text: "Last weekend I " },
              { blank: "saw" },
              { text: " a comedy." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "We " },
              { blank: "watched" },
              { text: " a movie." },
            ],
            lineBreak: true,
          },
          {
            block: [
              { text: "I liked it " },
              { blank: "because" },
              { text: " it was funny." },
            ],
            lineBreak: true,
          },
        ],
      },
    },

    scramble: {
      showWordBank: false,
      instruction: "Unscramble the sentence.",
      numbered: true,
      exercise: {
        items: [
          {
            prompt: "movie / what / see / did / you",
            answer: "What movie did you see?",
          },
          {
            prompt: "movie / watched / we / a",
            answer: "We watched a movie.",
          },
          {
            prompt: "recommend / would / it / you",
            answer: "Would you recommend it?",
          },
        ],
      },
    },
  }, [
    ["We _____ to the cinema on Friday.", "went", "go"],
    ["What film _____ you see?", "did", "were"],
    ["The acting _____ excellent.", "was", "were"],
    ["I _____ the ending because it was surprising.", "liked", "like"],
    ["I wouldn't _____ it because it was too long.", "recommend", "recommended"],
  ]),

  production: {
    task: {
      instruction: "Choose a movie together:",
      type: "checkbox",
      items: [
        {
          content: [
            "Prepare notes about a real or invented movie experience: title or genre, who with, place, opinion, and reason.",
          ],
          textarea: true,
        },
        {
          content: [
            "Interview a partner and ask at least three follow-up questions.",
          ],
        },
        {
          content: [
            "Recommend or reject each movie with a reason, then agree on one movie to watch together.",
          ],
        },
        { content: ["Report your choice and reason to the class."] },
      ],
    } satisfies ListProps,
  },
};
