import { audio, content, mark, underline } from "@/helpers/content";

import { shuffle } from "@/utils/shuffle";

const words = [
  { word: "intestine", phonetic: "/ɪnˈtes.tɪn/", img: 0 },
  { word: "symptom", phonetic: "/ˈsɪmp.təm/", img: 0 },
  {
    word: "bowel movement",
    phonetic: "/ˈbaʊ.əl ˌmuːv.mənt/",
    img: 0,
  },
  { word: "strain", phonetic: "/streɪn/", img: 1 },
  { word: "stool", phonetic: "/stuːl/", img: 1 },
  { word: "dehydration", phonetic: "/ˌdiːhaɪˈdreɪʃən/", img: 0 },
  {
    word: "colon",
    phonetic: "/ˈkoʊ.lən/",
    img: 0,
  },
  {
    word: "fiber",
    phonetic: "/ˈfaɪ.bɚ/",
    img: 0,
  },
];

export const whatCausesConstipation = {
  metadata: {
    title: "C1-C2 Videos",
    subtitle: "Ted-ED",
    description: "How food moves through your body",
  },
  whiteboard: {
    title: "C1-C2 Videos",
    descriptions: ["How food moves through your body"],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below.",
      items: [
        {
          content: [
            "What foods or habits do you associate with a healthy digestive system?",
          ],
        },
        {
          content: [
            "Have you ever experienced stomach pain or digestive discomfort? What did you do to relieve it?",
          ],
        },
      ],
    },
    vocabulary: {
      words: words,
    },
    gist: {
      videoPlayer: {
        videoId: "0IVO50DuMCs",
        title: "What Causes Constipation",
        instruction: "Watch the video and answer the question.",
      },

      radio: {
        exercise: {
          questions: [
            {
              question: "What is it mainly about?",
              options: shuffle([
                {
                  option: "The anatomy of the digestive system",
                  isCorrect: false,
                },
                {
                  option: "How to treat serious digestive diseases",
                  isCorrect: false,
                },
                {
                  option:
                    "The causes of constipation and how the body eliminates waste",
                  isCorrect: true,
                },
                {
                  option: "The history of medical research on the colon",
                  isCorrect: false,
                },
              ]),
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
              question: "Where does constipation usually occur?",
              options: shuffle([
                {
                  option: "In the stomach",
                  isCorrect: false,
                },
                {
                  option: "In the colon (large intestine)",
                  isCorrect: true,
                },
                {
                  option: "In the small intestine",
                  isCorrect: false,
                },
                {
                  option: "In the liver",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "What happens as stool moves through the colon?",
              options: shuffle([
                {
                  option: "It absorbs nutrients",
                  isCorrect: false,
                },
                {
                  option: "It loses most of its water",
                  isCorrect: true,
                },
                {
                  option: "It becomes liquid again",
                  isCorrect: false,
                },
                {
                  option: "It mixes with digestive enzymes",
                  isCorrect: false,
                },
              ]),
            },
            {
              question:
                "What are the two main causes of constipation mentioned in the video?",
              options: shuffle([
                {
                  option:
                    "Slow stool movement through the colon and pelvic floor dysfunction",
                  isCorrect: true,
                },
                {
                  option: "Stress and dehydration",
                  isCorrect: false,
                },
                {
                  option: "Poor sleep and lack of exercise",
                  isCorrect: false,
                },
                {
                  option: "Food allergies and infections",
                  isCorrect: false,
                },
              ]),
            },
            {
              question: "What may help relieve chronic constipation?",
              options: shuffle([
                {
                  option:
                    "Eating more fiber, exercising, and drinking enough water",
                  isCorrect: true,
                },
                {
                  option: "Avoiding vegetables and drinking less water",
                  isCorrect: false,
                },
                {
                  option: "Only taking medication",
                  isCorrect: false,
                },
                {
                  option: "Skipping meals to rest the digestive system",
                  isCorrect: false,
                },
              ]),
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
                "Visiting the bathroom is part of the daily human experience. But occasionally, ",
                audio("constipation"),
                mark("constipation"),
                " strikes, a condition that causes a ",
                audio("backup"),
                mark("backup"),
                " in your digestive system.",
              ],
            }),
          ],
          pt: "Ir ao banheiro faz parte da experiência humana diária. Mas, ocasionalmente, a prisão de ventre ocorre, uma condição que causa um acúmulo de resíduos no sistema digestivo.",
        },
        {
          en: [
            ...content({
              parts: [
                "The food you eat can take several days to exit your body. And for many, constipation can become ",
                audio("chronic"),
                mark("chronic"),
                ", meaning regularly passing ",
                audio("lumpy"),
                mark("lumpy"),
                " hard stools accompanied by ",
                audio("straining"),
                mark("straining"),
                ".",
              ],
            }),
          ],
          pt: "Os alimentos que você ingere podem levar vários dias para serem eliminados do seu corpo. E, para muitos, a prisão de ventre pode tornar-se crônica, significando a evacuação regular de fezes endurecidas e em grumos, acompanhada de esforço.",
        },
        {
          en: [
            ...content({
              parts: [
                "What's behind this ",
                audio("unsettling"),
                mark("unsettling"),
                " phenomenon? Constipation arises in the colon, also known as the large intestine.",
              ],
            }),
          ],
          pt: "O que está por trás desse fenômeno perturbador? A prisão de ventre surge no cólon, também conhecido como intestino grosso.",
        },
        {
          en: [
            ...content({
              parts: [
                "This muscular organ is split into four sections: the ascending, transverse, descending, and sigmoid colon, which connects with the rectum and anus.",
              ],
            }),
          ],
          pt: "Este órgão muscular é dividido em quatro partes: o cólon ascendente, o cólon transverso, o cólon descendente e o cólon sigmoide, que se conecta com o reto e o ânus.",
        },
        {
          en: [
            ...content({
              parts: [
                "The small intestine delivers stool consisting of ingested food, bile, and digestive juices to the large intestine.",
              ],
            }),
          ],
          pt: "O intestino delgado transporta as fezes, compostas por alimentos ingeridos, bile e sucos digestivos, para o intestino grosso.",
        },
        {
          en: [
            ...content({
              parts: [
                "As this stool moves through the colon, the organ ",
                audio("siphons off"),
                mark("siphons off"),
                " most of the water it contains, transforming it from liquid to solid.",
              ],
            }),
          ],
          pt: "À medida que as fezes se movem pelo cólon, o órgão extrai a maior parte da água que elas contêm, transformando-as de líquido para sólido.",
        },
        {
          en: [
            ...content({
              parts: [
                "The longer this transmission takes, the more ",
                audio("reabsorption"),
                mark("reabsorption"),
                " occurs, resulting in increasingly solid stool.",
              ],
            }),
          ],
          pt: "Quanto mais tempo durar essa transmissão, maior será a reabsorção, resultando em fezes cada vez mais sólidas.",
        },
        {
          en: [
            ...content({
              parts: [
                "Once it reaches the sigmoid colon, a final bout of ",
                audio("reabsorption"),
                mark("reabsorption"),
                " occurs before it enters the rectum, ",
                audio("distending"),
                mark("distending"),
                " its walls and telling the internal anal sphincter to relax.",
              ],
            }),
          ],
          pt: "Ao chegar ao cólon sigmoide, ocorre um último processo de reabsorção antes de o conteúdo intestinal entrar no reto, distendendo suas paredes e sinalizando ao esfíncter anal interno para relaxar.",
        },
        {
          en: [
            ...content({
              parts: [
                "This is the point where you can usually decide whether to physically ",
                audio("expel"),
                mark("expel"),
                " or ",
                audio("retain"),
                mark("retain"),
                " the stool. That's regulated by the pelvic floor muscles, particularly the puborectalis and external anal sphincter.",
              ],
            }),
          ],
          pt: "Este é o momento em que você geralmente pode decidir se vai expelir ou reter as fezes. Isso é regulado pelos músculos do assoalho pélvico, particularmente o puborretal e o esfíncter anal externo.",
        },
        {
          en: [
            ...content({
              parts: [
                "The puborectalis forms a sling-like formation around the rectum called the anorectal angle. And when you voluntarily relax your external anal sphincter, the stool is finally expelled.",
              ],
            }),
          ],
          pt: "O músculo puborretal forma uma estrutura semelhante a uma funda ao redor do reto, chamada ângulo anorretal. E quando você relaxa voluntariamente o esfíncter anal externo, as fezes são finalmente expelidas.",
        },
        {
          en: [
            ...content({
              parts: [
                "When you're constipated, however, a desire to visit the bathroom isn't enough to ",
                audio("coax"),
                mark("coax"),
                " your body into action. Usually there's two factors behind this problem: the stool's slow movement through the colon and/or pelvic floor ",
                audio("dysfunction"),
                mark("dysfunction"),
                ".",
              ],
            }),
          ],
          pt: "No entanto, quando se está com prisão de ventre, a vontade de ir ao banheiro não é suficiente para estimular o corpo a funcionar. Geralmente, existem dois fatores por trás desse problema: a movimentação lenta das fezes pelo cólon e/ou a disfunção do assoalho pélvico.",
        },
        {
          en: [
            ...content({
              parts: [
                "In the first, stool moves excessively slowly through the intestines, causing over-absorption of liquid, which makes the stool dry and hard.",
              ],
            }),
          ],
          pt: "No primeiro caso, as fezes movem-se excessivamente devagar pelos intestinos, causando absorção excessiva de líquido, o que torna as fezes secas e duras.",
        },
        {
          en: [
            ...content({
              parts: [
                "With pelvic floor dysfunction, stool becomes difficult to eliminate from the rectum because of tightened pelvic floor muscles, or due to a pelvic organ ",
                audio("prolapse"),
                mark("prolapse"),
                ", usually through childbirth or aging.",
              ],
            }),
          ],
          pt: "Na disfunção do assoalho pélvico, as fezes tornam-se difíceis de eliminar do reto devido ao enrijecimento dos músculos do assoalho pélvico ou devido a um prolapso de órgão pélvico, geralmente resultante do parto ou do envelhecimento.",
        },
        {
          en: [
            ...content({
              parts: [
                "Both of these problems make the anorectal angle more ",
                audio("acute"),
                mark("acute"),
                ", and it becomes difficult to expel waste.",
              ],
            }),
          ],
          pt: "Ambos os problemas tornam o ângulo anorretal mais agudo e dificultam a eliminação de resíduos.",
        },
        {
          en: [
            ...content({
              parts: [
                "To identify constipation precisely, researchers have developed ",
                audio("metrics"),
                mark("metrics"),
                ", such as the Bristol Stool Chart.",
              ],
            }),
          ],
          pt: "Para identificar a constipação com precisão, os pesquisadores desenvolveram métricas, como a Escala de Bristol para Fezes.",
        },
        {
          en: [
            ...content({
              parts: [
                "Most people who look at that chart will be able to tell they've experienced constipation before.",
              ],
            }),
          ],
          pt: "A maioria das pessoas que olhar para esse gráfico conseguirá dizer que já teve prisão de ventre alguma vez.",
        },
        {
          en: [
            ...content({
              parts: [
                "When you're on the toilet, you should ideally be in a ",
                audio("squatting"),
                mark("squatting"),
                " position. With your buttocks firmly on the toilet seat, you can elevate your feet on a stool and lean forwards with a straight back, which straightens the anorectal angle and eases the passage of waste.",
              ],
            }),
          ],
          pt: "Quando estiver no vaso sanitário, o ideal é estar de cócoras. Com as nádegas firmemente apoiadas no assento do vaso sanitário, você pode elevar os pés em um banquinho e inclinar-se para a frente com as costas retas, o que alinha o ângulo anorretal e facilita a passagem das fezes.",
        },
        {
          en: [
            ...content({
              parts: [
                "Going a day without a bowel movement isn't necessarily cause for alarm. But if you are experiencing chronic constipation, simple dietary and lifestyle changes, like fibrous vegetables, regular exercise, abdominal massage, and 6 to 8 cups of water per day, may help ",
                audio("restore"),
                mark("restore"),
                " your daily trip to the toilet.",
              ],
            }),
          ],
          pt: "Passar um dia sem evacuar não é necessariamente motivo para alarme. Mas se você sofre de prisão de ventre crônica, mudanças simples na dieta e no estilo de vida, como o consumo de vegetais fibrosos, exercícios regulares, massagem abdominal e a ingestão de 6 a 8 copos de água por dia, podem ajudar a regularizar suas idas diárias ao banheiro.",
        },
      ],
    },
    practice: {
      guess: {
        words: shuffle(words),
      },
      guessFillInTheBlanks: {
        instruction:
          "Complete the sentences with the words from the Guess activity.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "The small " },
                { blank: "intestine" },
                { text: " sends waste to the large intestine." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Abdominal discomfort can be a " },
                { blank: "symptom" },
                { text: " of constipation." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Some people do not have a regular " },
                { blank: "bowel movement" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "People may " },
                { blank: "strain" },
                { text: " when passing hard waste." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The colon gradually turns liquid waste into solid " },
                { blank: "stool" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Not drinking enough water may cause " },
                { blank: "dehydration" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Most water is absorbed as waste passes through the " },
                { blank: "colon" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "Vegetables provide dietary " },
                { blank: "fiber" },
                { text: " that can support digestion." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },
      fillInTheBlanks: {
        instruction: "Complete the sentences with the missing words.",
        exercise: {
          blocks: shuffle([
            {
              block: [
                { text: "For some people, constipation becomes " },
                { blank: "chronic" },
                { text: " rather than occasional." },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "As stool moves through the colon, the organ ",
                },
                { blank: "siphons off" },
                { text: " most of the water it contains." },
              ],
              lineBreak: true,
            },
            {
              block: [
                {
                  text: "A longer transit time leads to greater water ",
                },
                { blank: "reabsorption" },
                { text: "." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The rectum expands as waste enters, " },
                { blank: "distending" },
                { text: " its walls." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The body can either " },
                { blank: "expel" },
                { text: " or retain the stool." },
              ],
              lineBreak: true,
            },
            {
              block: [
                { text: "The urge alone may not " },
                { blank: "coax" },
                { text: " the body into action." },
              ],
              lineBreak: true,
            },
          ]),
        },
      },
      unscramble: {
        instruction: "Unscramble the sentences.",
        exercise: {
          items: shuffle([
            {
              prompt:
                "rather than occasional / constipation / chronic / can become",
              answer: "Constipation can become chronic rather than occasional.",
            },
            {
              prompt:
                "most of the water / the colon / siphons off / in the stool",
              answer: "The colon siphons off most of the water in the stool.",
            },
            {
              prompt:
                "greater reabsorption / a longer transit time / causes / of water",
              answer:
                "A longer transit time causes greater reabsorption of water.",
            },
            {
              prompt:
                "its walls / the rectum / distending / waste enters / expands",
              answer:
                "The rectum expands, distending its walls, as waste enters.",
            },
            {
              prompt: "the stool / can / expel / the body / or retain",
              answer: "The body can expel or retain the stool.",
            },
            {
              prompt:
                "into action / may not / the urge alone / coax / the body",
              answer: "The urge alone may not coax the body into action.",
            },
          ]),
        },
      },
    },
    followUp: {
      list: {
        type: "ol" as const,
        instruction:
          "Complete the tasks. Explain relationships precisely and support evaluations with information from the video.",
        items: [
          {
            content: [
              "Reconstruct the cause-and-effect chain from slow movement through the colon to the symptoms of constipation.",
            ],
          },
          {
            content: [
              "Compare two causes mentioned in the video. Explain how each one disrupts the normal digestive process.",
            ],
          },
          {
            content: [
              "Evaluate which remedies are most logically supported by the biological mechanisms explained in the video. Acknowledge one limitation of the advice.",
            ],
          },
        ],
      },
    },
  },
};
