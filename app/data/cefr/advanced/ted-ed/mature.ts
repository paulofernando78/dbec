import { audio, content, mark, underline } from "@/helpers/content";

export const mature = {
  slug: "blank",

  metadata: {
    title: "Advanced | Ted-Ed | ",
    description: "A ...",
  },
  whiteboard: {
    title: "Advanced",
    subtitle: "Ted-ED",
    descriptions: ["Mature..."],
  },
  sections: {
    beforeWatching: {
      type: "ol" as const,
      instruction: "Discuss the questions below before watching the video.",
      items: [
        {
          value: [
            "Do you usually try to control your emotions, or do you simply let them happen? Why?",
          ],
        },
        {
          value: [
            "Can emotions like sadness or anger ever be useful? Give an example.",
          ],
        },
        {
          value: [
            "What strategies do you use when you're stressed or disappointed?",
          ],
        },
      ],
    },
    vocabulary: {
      prompt: "Slide the pictures and describe what you see.",
      imgs: [
        { word: "regulate emotions", img: 0 },
        { word: "emotional response", img: 0 },
        { word: "appraise", img: 0 },
        { word: "reappraisal", img: 0 },
        { word: "shift your attention", img: 0 },
        { word: "support system", img: 0 },
        { word: "cultivate hope", img: 0 },
        { word: "empathize", img: 0 },
        { word: "avoid the situation", img: 0 },
        { word: "look on the bright side", img: 0 },
      ],
    },
    gist: {
      paragraph: [
        ...content({
          parts: ["Watch the video once and choose the best summary."],
        }),
      ],
      videoPlayer: {
        videoId: "Uew5BbvmLks",
        title: "...",
        instruction: "Watch the video and answer the question.",
      },
      radio: {
        exercise: {
          questions: [
            {
              question: "What is the main idea of the talk?",
              options: [
                {
                  option: "People should always avoid negative emotions.",
                  isCorrect: false,
                },
                {
                  option:
                    "Different strategies can help us regulate emotions depending on the situation.",
                  isCorrect: true,
                },
                {
                  option: "Happiness is the only healthy emotional state.",
                  isCorrect: false,
                },
                {
                  option:
                    "Suppressing emotions is the best long-term solution.",
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
              question:
                "According to the Process Model, what is the first step?",
              options: [
                {
                  option: "Entering a situation that captures our attention.",
                  isCorrect: true,
                },
                { option: "Changing how you feel.", isCorrect: false },
                { option: "Talking to a friend.", isCorrect: false },
                { option: "Going for a walk.", isCorrect: false },
              ],
            },
            {
              question:
                "Which strategy does the speaker recommend instead of suppressing emotions?",
              options: [
                {
                  option: "Talking to someone in your support system.",
                  isCorrect: true,
                },
                { option: "Ignoring your feelings.", isCorrect: false },
                { option: "Taking recreational drugs.", isCorrect: false },
                { option: "Forcing a smile.", isCorrect: false },
              ],
            },
            {
              question: "Why isn't sadness always a bad emotion?",
              options: [
                {
                  option: "Because it can help us empathize with others.",
                  isCorrect: true,
                },
                { option: "Because it makes us happy.", isCorrect: false },
                {
                  option: "Because it helps us avoid situations.",
                  isCorrect: false,
                },
                {
                  option: "Because it always leads to anger.",
                  isCorrect: false,
                },
              ],
            },
            {
              question: "What does reappraisal involve?",
              options: [
                {
                  option: "Changing the way you think about a situation.",
                  isCorrect: true,
                },
                { option: "Suppressing your emotions.", isCorrect: false },
                { option: "Leaving the situation.", isCorrect: false },
                { option: "Ignoring your support system.", isCorrect: false },
              ],
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
                "You and your friend need to ace Friday’s exam to avoid summer classes, and after a week of studying, you both feel confident that you pulled it off. But when you get your grades back, they’re much lower than the two of you expected. You’re devastated. However, your friend doesn't seem too bothered, and it's making you wonder why you can't shake this off like they can. But should you really be trying to look on the bright side? And is controlling our emotions even possible in the first place?",
              ],
            }),
          ],
          pt: "Você e seu amigo precisam tirar uma ótima nota na prova de sexta-feira para evitar as aulas de verão e, depois de uma semana de estudos, ambos estão confiantes de que conseguiram. Mas, quando recebem as notas, elas são muito mais baixas do que esperavam. Você fica devastado. No entanto, seu amigo não parece tão incomodado, e isso faz você se perguntar por que não consegue superar isso da mesma forma que ele. Mas será que você realmente deveria tentar ver o lado positivo? E controlar nossas emoções é realmente possível?",
        },
        {
          en: [
            ...content({
              parts: [
                "The answer to the last question is a definitive 'yes.' There are numerous strategies for regulating our emotions, and one framework to understand these techniques is called the Process Model. Psychologists use this tool to identify where and how to intervene in the process that forms our emotions. That process has four steps: first, we enter a situation, real or imagined, and that draws our attention. Then we evaluate, or appraise, the situation and whether it helps or hinders our goals. Finally, this appraisal leads to changes in how we feel, think, and behave, known as an emotional response. Each step offers an opportunity to consciously intervene and change our emotions.",
              ],
            }),
          ],
          pt: "A resposta para essa última pergunta é um definitivo 'sim'. Existem inúmeras estratégias para regular nossas emoções, e uma das formas de compreender essas técnicas é por meio do chamado Modelo de Processo. Os psicólogos usam essa ferramenta para identificar onde e como intervir no processo que dá origem às nossas emoções. Esse processo tem quatro etapas: primeiro, entramos em uma situação, real ou imaginária, que chama nossa atenção. Depois, avaliamos essa situação e se ela ajuda ou atrapalha nossos objetivos. Por fim, essa avaliação provoca mudanças na forma como sentimos, pensamos e agimos, conhecidas como resposta emocional. Cada etapa desse processo oferece uma oportunidade para intervir conscientemente e mudar nossas emoções.",
        },
        {
          en: [
            ...content({
              parts: [
                "To see this in action, imagine you've been invited to the same party as your least-favorite ex and their new partner. Your first strategy could be avoiding the situation altogether by skipping the party. But if you do attend, you could modify the situation by choosing not to interact with your ex. If that's difficult, you might shift your attention by playing a game with your friends instead of focusing on your ex's new partner. Another option would be to re-evaluate how you think about the situation. After seriously reappraising things, you might realize that you don't care who your ex dates.",
              ],
            }),
          ],
          pt: "Para ver isso na prática, imagine que você foi convidado para a mesma festa que seu ex menos favorito e o novo parceiro dele. Sua primeira estratégia poderia ser evitar completamente a situação, simplesmente não indo à festa. Mas, se decidir ir, também pode modificar a situação escolhendo não interagir com seu ex. Se isso estiver sendo difícil, talvez seja melhor mudar seu foco de atenção, por exemplo, jogando com seus amigos em vez de prestar atenção ao novo parceiro do seu ex. Outra opção seria reavaliar a maneira como você pensa sobre a situação. Depois de refletir seriamente, talvez perceba que, na verdade, não se importa com quem seu ex está namorando.",
        },
        {
          en: [
            ...content({
              parts: [
                "If none of these strategies work, you can always try tempering your emotional response after the fact. But this can be tricky. Many of the easiest ways to do this, like hiding your emotions or trying to change them with recreational drugs, generally lead to more negative feelings and health concerns in the long term. More sustainable strategies include going for a long walk, taking slow, deep breaths, or talking with someone in your support system.",
              ],
            }),
          ],
          pt: "Se nenhuma dessas estratégias funcionar, você sempre pode tentar controlar sua resposta emocional depois que ela surgir. Mas isso pode ser complicado. Muitas das formas mais fáceis de fazer isso, como esconder suas emoções ou tentar mudá-las com drogas recreativas, geralmente levam a sentimentos ainda mais negativos e a problemas de saúde a longo prazo. Estratégias mais saudáveis incluem fazer uma longa caminhada, respirar lenta e profundamente ou conversar com alguém da sua rede de apoio.",
        },
        {
          en: [
            ...content({
              parts: [
                "While using all these strategies well takes practice, learning to notice your emotions and reflect on where they're coming from is half the battle. Once you've internalized that you can regulate your emotions, doing so becomes much easier. But should you use these techniques to constantly maintain a good mood? That answer depends on how you define what makes a mood 'good.'",
              ],
            }),
          ],
          pt: "Embora aprender a usar bem todas essas estratégias exija prática, aprender a reconhecer suas emoções e refletir sobre sua origem já representa metade da batalha. E, depois que você realmente internaliza que pode regular suas emoções, fazer isso se torna muito mais fácil. Mas será que você deveria usar essas técnicas para manter um bom humor o tempo todo? A resposta depende de como você define o que é um humor 'bom'.",
        },
        {
          en: [
            ...content({
              parts: [
                "It's tempting to think we should always avoid sadness and frustration, but no emotion is inherently good or bad—they're either helpful or unhelpful depending on the situation. For example, if a friend is telling you about the loss of a loved one, feeling and expressing sadness isn't just appropriate, it can help you empathize and support them. Conversely, forcing a smile to get through a one-time annoyance is perfectly reasonable.",
              ],
            }),
          ],
          pt: "É tentador pensar que devemos sempre evitar a tristeza e a frustração, mas nenhuma emoção é inerentemente boa ou ruim; elas são úteis ou prejudiciais dependendo da situação. Por exemplo, se um amigo está contando sobre a perda de um ente querido, sentir e demonstrar tristeza não é apenas apropriado, como também ajuda você a demonstrar empatia e oferecer apoio. Por outro lado, embora não seja saudável ignorar regularmente suas emoções, forçar um sorriso para superar um incômodo passageiro é perfeitamente razoável.",
        },
        {
          en: [
            ...content({
              parts: [
                "We hear a lot of mixed messages about emotions. Some pressure us to stay upbeat while others tell us to simply take our emotions as they come. But in reality, each person has to find their own balance. So if the question is, 'Should you always try to be happy?' The answer is no. Strategies like reappraisal can help you re-evaluate your thoughts about a situation, allowing you to accept that you feel sad and cultivate hope that things will get better.",
              ],
            }),
          ],
          pt: "Ouvimos muitas mensagens contraditórias sobre as emoções. Algumas nos pressionam a permanecer sempre otimistas, enquanto outras dizem que devemos simplesmente aceitar nossas emoções como elas surgem. Mas, na realidade, cada pessoa precisa encontrar seu próprio equilíbrio. Então, se a pergunta é: 'Você deve sempre tentar ser feliz?', a resposta é não. Estudos sugerem que pessoas obcecadas pela felicidade frequentemente experimentam emoções negativas secundárias, como culpa, frustração por estarem chateadas e decepção por não se sentirem mais felizes. Isso não significa que você deva deixar a tristeza ou a raiva tomarem conta de você. Mas estratégias como a reavaliação podem ajudá-lo a repensar seus pensamentos sobre uma situação, permitindo aceitar que está triste e cultivar a esperança de que as coisas vão melhorar.",
        },
      ],
    },
    practice: {
      guess: {
        words: [
          { word: "regulate emotions", img: 0 },
          { word: "emotional response", img: 0 },
          { word: "reappraisal", img: 0 },
          { word: "support system", img: 0 },
          { word: "empathize", img: 0 },
          { word: "cultivate hope", img: 0 },
          { word: "look on the bright side", img: 0 },
          { word: "shift your attention", img: 0 },
        ],
      },
      fillInTheBlanks: {
        instruction: "Fill in the blanks with the correct answer.",
        exercise: {
          blocks: [
            {
              block: [{ text: "..." }, { blank: "..." }, { text: "..." }],
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
              prompt: "... / ",
              answer: "...",
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
            value: ["..."],
          },
        ],
      },
    },
  },
};
