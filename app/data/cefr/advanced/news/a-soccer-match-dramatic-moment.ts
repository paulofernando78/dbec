import {
  audio,
  content,
  mark,
  underline
} from "@/helpers/content";

export const aSoccerMatchDramaticMoment = {
  slug: "a-soccer-match-dramatic-moment",

  metadata: {
    title: "Advanced | Misc | ",
    description: "A dramatic soccer match moment",
  },
  whiteboard: {
    title: "Advanced",
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
          word: "tournament",
          img: 0,
        },
        {
          word: "tackle",
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
          word: "lunge",
          img: 0,
        },
        {
          word: "devastate",
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
                  blank: "confrontation",
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
             {
              block: [
                {  
                  text: "",
                },
                {
                  blank: "hat trick",
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
      unscramble: {
        instruction: "Unscramble the sentences.",
        exercise: {
          items: [
            {
              prompt: "tournament",
              answer: "...",
            },
            {
              prompt: "injury / the / match / overshadowed / the",
              answer: "The injury overshadowed the match.",
            },
            {
              prompt: "on / stretcher / a / he / carried off / was / the track",
              answer: "He was carried off the track on a stretcher.",
            },
            {
              prompt:
                "tribute / the shirt / by / holding / paid a / he / up / the",
              answer: "He paid a tribute by holding up the shirt.",
            },
            {
              prompt:
                "after / devastated / the teammates / were / the / injury",
              answer: "The teammates were devastated after the injury.",
            },
            {
              prompt: "substitute / the / replaced / the / injured / player",
              answer: "The substitute replaced the injured player.",
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
                mark("overshadowed"),
                " by a heartbreaking ",
                mark("injury"),
                " to ",
                mark("midfilder"),
                " Ismaël Koné and ",
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
                "In the 51st minute, Qatar ",
                mark("midfielder"),
                " Assim Madibo ",
                mark("lunged into"),
                " a challenge on Koné."
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
                mark("tackle"),
                " quickly turned into a nightmare as Koné suffered a severe leg ",
                mark(" injury "),
                " and had to be ",
                mark("stretchered off "),
                " the field."
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
                mark("outlets"),
                " described fears of a broken leg, with players from both sides visibly ",
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
                "A ",
                mark("heated confrontation"),
                " ",
                mark("broke out"),
                " on the ",
                mark("pitch"),
                ", with players surrounding the ",
                mark("referee"),
                " and exchanging angry words with their Qatari ",
                audio("/"),
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
                mark("spilled over"),
                " toward the ",
                mark("benches"),
                " as emotions ",
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
                mark("devastated"),
                " when he realized the",
                mark("seriousness"),
                " of the injury, reportedly ",
                mark("breaking down"),
                " in tears and leaving the field in shock.",
              ],
            }),
          ],
          pt: "O meio-campista catariano ficou devastado ao perceber a gravidade da lesão, supostamente desabando em lágrimas e deixando o campo em estado de choque.",
        },
        {
          en: [
            ...content({
              parts: [
                mark("Despite "),
                " the emotional scenes, Canada continued to dominate.",
                mark(""),
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
                mark("hat-trick"),
                " while Canada completed a ",
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
                mark("held up"),
                " Koné's shirt in a ",
                mark("touching tribute"),
                " to his ",
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
                "",
                mark("Instead"),
                ", the final ",
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
                "The football world now waits for an official update on the extent of Ismaël Koné's ",
                mark("injury"),
                ".",
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
