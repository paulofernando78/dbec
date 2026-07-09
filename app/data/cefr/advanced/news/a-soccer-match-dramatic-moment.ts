import { audio, content, mark, underline } from "@/helpers/content";

export const aSoccerMatchDramaticMoment = {
  slug: "a-soccer-match-dramatic-moment",

  metadata: {
    title: "Advanced | Misc | ",
    description: "A dramatic soccer match moment",
  },
  whiteboard: {
    title: "C1 Advanced",
    subtitle: "News",
    descriptions: [
      "A dramatic moment changes the atmosphere of an important soccer match.",
    ],
    date: "Jun 18, 2026",
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          content: [
            "Have you ever seen a serious injury during a football match?",
          ],
        },
        {
          content: [
            "How can an injury affect a team during an important tournament?",
          ],
        },
        {
          content: [
            "Should matches be stopped immediately after serious injuries? Why?",
          ],
        },
      ],
    },
    vocabulary: {
      prompt: "Slide the pictures and describe what you see.",
      imgs: [
        {
          word: "tournament",
          img: 0,
        },
        {
          word: "lunge",
          img: 0,
        },
        {
          word: "injury",
          img: 0,
        },
        {
          word: "stretcher",
          img: 0,
        },
        {
          word: "recovery",
          img: 0,
        },
        {
          word: "overshadow",
          img: 0,
        },
        {
          word: "confrontation",
          img: 0,
        },
        {
          word: "tribute",
          img: 0,
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
        title: "Ismaël Koné breaks leg during match | World Cup 2026",
        instruction: "Watch the video and answer the question.",
        src: "/assets/video/cefr/c1/news/dramatic-moment-soccer-match.mp4",
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
        instruction: "Watch again for specific information.",
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
    },
    practice: {
      guess: {
        words: [
          {
            word: "tournament",
            img: 0,
          },
          {
            word: "lunge",
            img: 0,
          },
          {
            word: "injury",
            img: 0,
          },
          {
            word: "stretcher",
            img: 0,
          },
          {
            word: "recovery",
            img: 0,
          },
          {
            word: "overshadow",
            img: 0,
          },
          {
            word: "confrontation",
            img: 0,
          },
          {
            word: "tribute",
            img: 0,
          },
        ],
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct answer.",
        exercise: {
          blocks: [
            {
              block: [
                { text: "The players paid a" },
                { blank: "touching tribute" },
                { text: "to their former coach." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The protests" },
                { blank: "spilled over" },
                { text: "into neighboring cities." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Doctors are still assessing" },
                { blank: "the extent of" },
                { text: "his injuries." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The scandal completely" },
                { blank: "overshadowed" },
                { text: "the team's victory." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "She" },
                { blank: "broke down in tears" },
                { text: "when she heard the bad news." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The underdogs secured a" },
                { blank: "stunning" },
                { text: "3-0 victory." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "A" },
                { blank: "heated confrontation" },
                { text: "broke out between the players after the foul." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The midfielder" },
                { blank: "lunged into" },
                { text: "the challenge and injured his opponent." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The final result left fans with" },
                { blank: "mixed emotions" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Emotions" },
                { blank: "boiled over" },
                { text: "when the referee showed the red card." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The midfielder had to be" },
                { blank: "stretchered off" },
                { text: "after twisting his ankle." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "A fight" },
                { blank: "broke out" },
                { text: "in the stands after the final whistle." },
              ],
              lineBreak: true,
            },
          ],
        },
      },
      unscramble: {
        instruction: "Unscramble the sentences.",
        exercise: {
          items: [
            {
              prompt:
                "into / the / player / lunged / challenge / recklessly / the",
              answer: "The player lunged into the challenge recklessly.",
            },
            {
              prompt:
                "paid / tribute / a / the / actor / touching / to / fans / the",
              answer: "The fans paid a touching tribute to the actor.",
            },
            {
              prompt: "announcement / emotions / after / the / boiled over",
              answer: "Emotions boiled over after the announcement.",
            },
            {
              prompt: "the / controversy / overshadowed / ceremony / the",
              answer: "The controversy overshadowed the ceremony.",
            },
            {
              prompt: "out / fight / broke / the / after / concert / a",
              answer: "A fight broke out after the concert.",
            },
            {
              prompt: "a / victory / secured / the / stunning / underdogs",
              answer: "The underdogs secured a stunning victory.",
            },
            {
              prompt:
                "extent / still / the / assessing / are / the / authorities / of / damage / the",
              answer:
                "The authorities are still assessing the extent of the damage.",
            },
            {
              prompt:
                "mixed / left / announcement / the / with / investors / emotions",
              answer: "The announcement left investors with mixed emotions.",
            },
            {
              prompt: "after / was / he / stretchered off / collision / the",
              answer: "He was stretchered off after the collision.",
            },
            {
              prompt:
                "tears / broke down / she / in / hearing / the / news / after",
              answer: "She broke down in tears after hearing the news.",
            },
            {
              prompt:
                "city / the / protests / neighboring / spilled over / into",
              answer: "The protests spilled over into the neighboring city.",
            },
            {
              prompt:
                "meeting / confrontation / a / heated / during / broke out / the",
              answer: "A heated confrontation broke out during the meeting.",
            },
          ],
        },
      },
    },
    script: {
      content: [
        {
          en: [
            ...content({
              parts: [
                "Canada's historic 6-0 World Cup victory over Qatar was ",
                audio("overshadowed"),
                mark("overshadowed"),
                " by a heartbreaking ",
                audio("injury"),
                mark("injury"),
                " to ",
                audio("midfielder"),
                mark("midfielder"),
                " Ismaël Koné and ",
                audio("heated confrontation"),
                mark("heated confrontations"),
                " between players from both teams.",
              ],
            }),
          ],
          pt: "A histórica vitória do Canadá por 6 a 0 sobre o Catar na Copa do Mundo foi ofuscada por uma lesão devastadora do meio-campista Ismaël Koné e por confrontos acalorados entre jogadores das duas equipes.",
        },
        {
          en: [
            ...content({
              parts: [
                "In the 51st minute, Qatar Assim Madibo ",
                audio("lunged"),
                mark("lunged"),
                " into a challenge on Koné.",
              ],
            }),
          ],
          pt: "No 51º minuto, o meio-campista do Catar Assim Madibo entrou de forma agressiva em uma disputa com Koné.",
        },
        {
          en: [
            ...content({
              parts: [
                "What initially looked like a tough ",
                audio("tackle"),
                mark("tackle"),
                " quickly turned into a nightmare as Koné suffered a severe leg injury",
                " and had to be ",
                audio("stretchered off"),
                mark("stretchered off "),
                " the field.",
              ],
            }),
          ],
          pt: "O que inicialmente parecia uma entrada dura rapidamente se transformou em um pesadelo, pois Koné sofreu uma grave lesão na perna e precisou ser retirado de maca.",
        },
        {
          en: [
            ...content({
              parts: [
                "Reports from multiple ",
                audio("outlets"),
                mark("outlets"),
                " described fears of a broken leg, with players from both sides visibly ",
                audio("distressed"),
                mark("distressed"),
                " by the incident.",
              ],
            }),
          ],
          pt: "Relatos de vários veículos de comunicação descreveram temores de uma perna quebrada, com jogadores de ambos os lados visivelmente abalados pelo incidente.",
        },
        {
          en: [
            ...content({
              parts: [
                "The challenge ",
                audio("sparked"),
                mark("sparked"),
                " furious reactions from Canadian players.",
              ],
            }),
          ],
          pt: "A entrada provocou reações furiosas dos jogadores canadenses.",
        },
        {
          en: [
            ...content({
              parts: [
                "A heated confrontation ",
                audio("broke out"),
                mark("broke out"),
                " on the ",
                audio("pitch"),
                mark("pitch"),
                ", with players surrounding the ",
                audio("referee"),
                mark("referee"),
                " and exchanging angry words with their Qatari ",
                audio("opponents"),
                "o",
                underline("ppo"),
                "nents.",
              ],
            }),
          ],
          pt: "Um confronto acalorado começou em campo, com jogadores cercando o árbitro e trocando palavras raivosas com seus adversários catarianos.",
        },
        {
          en: [
            ...content({
              parts: [
                "Tensions also ",
                audio("spilled over"),
                mark("spilled over"),
                " toward the ",
                audio("benches"),
                mark("benches"),
                " as emotions ",
                audio("boiled over"),
                mark("boiled over"),
                " after seeing one of Canada's key midfielders lying injured.",
              ],
            }),
          ],
          pt: "As tensões também se espalharam para os bancos de reservas, enquanto as emoções transbordavam ao ver um dos principais meio-campistas do Canadá caído e lesionado.",
        },
        {
          en: [
            ...content({
              parts: [
                "After a VAR review, Madibo's yellow card was upgraded to a red card.",
              ],
            }),
          ],
          pt: "Após uma revisão do VAR, o cartão amarelo de Madibo foi alterado para um cartão vermelho.",
        },
        {
          en: [
            ...content({
              parts: [
                "The Qatari midfielder was ",
                audio("devastated"),
                mark("devastated"),
                " when he realized the ",
                audio("seriousness"),
                mark("seriousness"),
                " of the injury, reportedly ",
                audio("breaking down in tears"),
                mark("breaking down in tears"),
                " and leaving the field in shock.",
              ],
            }),
          ],
          pt: "O meio-campista catariano ficou devastado ao perceber a gravidade da lesão, supostamente desabando em lágrimas e deixando o campo em estado de choque.",
        },
        {
          en: [
            ...content({
              parts: [
                audio("Despite"),
                mark("Despite"),
                " the emotional scenes, Canada continued to dominate.",
              ],
            }),
          ],
          pt: "Apesar das cenas emocionantes, o Canadá continuou dominando.",
        },
        {
          en: [
            ...content({
              parts: [
                "Jonathan David scored a ",
                audio("hat-trick"),
                mark("hat-trick"),
                " while Canada completed a ",
                audio("stunning"),
                mark("stunning"),
                " 6-0 win over a Qatar side that finished the match with nine men.",
              ],
            }),
          ],
          pt: "Jonathan David marcou um hat-trick enquanto o Canadá completava uma impressionante vitória por 6 a 0 sobre um Catar que terminou a partida com nove jogadores.",
        },
        {
          en: [
            ...content({
              parts: [
                "After scoring, Nathan Saliba ",
                audio("held up"),
                mark("held up"),
                " Koné's shirt in a ",
                audio("touching tribute"),
                mark("touching tribute"),
                " to his ",
                audio("injured"),
                mark("injured"),
                " teammate.",
              ],
            }),
          ],
          pt: "Após marcar, Nathan Saliba ergueu a camisa de Koné em uma emocionante homenagem ao seu companheiro lesionado.",
        },
        {
          en: [
            ...content({
              parts: [
                "For Canadian fans, it ",
                audio("should have been"),
                mark("should have been"),
                " a night of pure celebration, the nation's first ever men's World Cup victory.",
              ],
            }),
          ],
          pt: "Para os torcedores canadenses, deveria ter sido uma noite de pura celebração, a primeira vitória da seleção masculina do país em uma Copa do Mundo.",
        },
        {
          en: [
            ...content({
              parts: [
                audio("Instead"),
                mark("Instead"),
                ", the final ",
                audio("whistle"),
                mark("whistle"),
                " brought mixed emotions, joy at a famous win, but deep concern for one of Canada's brightest young stars.",
              ],
            }),
          ],
          pt: "Em vez disso, o apito final trouxe sentimentos mistos: alegria por uma vitória histórica, mas profunda preocupação com uma das jovens estrelas mais promissoras do Canadá.",
        },
        {
          en: [
            ...content({
              parts: [
                "The football world now waits for an official update on the extent of Ismaël Koné's injury.",
              ],
            }),
          ],
          pt: "O mundo do futebol agora aguarda uma atualização oficial sobre a gravidade da lesão de Ismaël Koné.",
        },
      ],
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction: "Answer the questions.",
        items: [
          {
            content: ["Should dangerous tackles receive longer suspensions?"],
          },
          {
            content: ["Can a serious injury change a player's career forever?"],
          },
        ],
      },
    },
  },
};
