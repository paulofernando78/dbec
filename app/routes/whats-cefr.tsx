import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Paragraph } from "@/components/content/Paragraph";
import { Line } from "@/components/content/Line";
import { List } from "@/components/content/List";

import { content, portuguese } from "@/helpers/content";

import type { ListProps } from "@/components/content/List";
import type { InlineRichContentValue } from "@/components/content/InlineRichContent";

const sections: SectionData[] = [
  // What’s CEFR?
  {
    id: "what’s-cefr?",
    label: "What’s CEFR?",
    heading: 3 as const,
    paragraphs: [
      [
        ...content({
          parts: [
            "The CEFR is an international standard for describing language ability. It provides a clear, shared framework for assessing and comparing learners’ skills in listening, reading, speaking, and writing across different languages, countries, and educational systems.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "O CEFR é um padrão internacional para descrever a proficiência em línguas. Ele fornece um quadro comum para avaliar e comparar as habilidades de ouvir, ler, falar e escrever em diferentes idiomas, países e sistemas educacionais.",
            ),
          ],
        }),
      ],
      [
        ...content({
          parts: [
            "The framework is divided into six levels: A1, A2, B1, B2, C1, and C2. These levels describe what learners can do at each stage, from basic communication to full professional and academic proficiency.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "O quadro é dividido em seis níveis: A1, A2, B1, B2, C1 e C2. Esses níveis descrevem o que o aluno é capaz de fazer em cada etapa, desde a comunicação básica até a proficiência acadêmica e profissional.",
            ),
          ],
        }),
      ],
      [
        ...content({
          parts: [
            "The CEFR is widely used by universities, employers, and examination boards such as Cambridge English to design courses, set learning objectives, and report language proficiency in a transparent and comparable way.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "O CEFR é amplamente utilizado por universidades, empregadores e instituições de exame, como a Cambridge English, para planejar cursos, definir objetivos de aprendizagem e relatar a proficiência linguística de forma clara e comparável.",
            ),
          ],
        }),
      ],
    ],
  },
  // A1 Beginner
  {
    id: "a1-beginner",
    heading: 3 as const,
    paragraphs: [
      [
        ...content({
          parts: [
            "Can understand and use very basic expressions and simple sentences. Can introduce themselves and others, and ask and answer simple questions about personal details (name, country, job).",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "Pode entender e usar expressões muito básicas e frases simples. Pode se apresentar, apresentar outras pessoas e fazer e responder perguntas simples sobre informações pessoais (nome, país, profissão).",
            ),
          ],
        }),
      ],
    ],
    questions: {
      type: "ul",
      items: [
        {
          value: [...content({ parts: ["Hello. How are you?"] })],
        },
        {
          value: [...content({ parts: ["What's your name?"] })],
        },
        {
          value: [...content({ parts: ["Where are you from?"] })],
        },
        {
          value: [...content({ parts: ["Do you study English?"] })],
        },
        {
          value: [
            ...content({ parts: ["What is your favorite subject in school?"] }),
          ],
        },
        {
          value: [...content({ parts: ["Do you have a job?"] })],
        },
        {
          value: [...content({ parts: ["What do you do in your free time?"] })],
        },
        {
          value: [...content({ parts: ["Do you like sports?"] })],
        },
        {
          value: [...content({ parts: ["Do you play sports?"] })],
        },
      ],
    },
  },
  // A2 Elementary
  {
    id: "a2-elementary",
    heading: 3 as const,
    paragraphs: [
      [
        ...content({
          parts: [
            "Can understand frequently used expressions related to everyday topics such as shopping, family, work, and local geography. Can communicate in simple and routine situations and describe aspects of their background and immediate environment.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "Pode compreender expressões frequentemente usadas relacionadas a temas do cotidiano, como compras, família, trabalho e localização. Pode se comunicar em situações simples e rotineiras e descrever aspectos de sua vida e ambiente.",
            ),
          ],
        }),
      ],
    ],
    questions: {
      type: "ul",
      items: [
        { value: [...content({ parts: ["What's your favorite movie?"] })] },
        {
          value: [...content({ parts: ["What kinds of movies do you like?"] })],
        },
        { value: [...content({ parts: ["Where did you grow up?"] })] },
        { value: [...content({ parts: ["What did you do yesterday?"] })] },
        {
          value: [
            ...content({
              parts: ["Did you study English in elementary school?"],
            }),
          ],
        },
        { value: [...content({ parts: ["What was your favorite class?"] })] },
        { value: [...content({ parts: ["What are you doing later today?"] })] },
        {
          value: [
            ...content({ parts: ["Are you doing anything this evening?"] }),
          ],
        },
      ],
    },
  },
  // B1 Intermediate
  {
    id: "b1-intermediate",
    heading: 3 as const,
    paragraphs: [
      [
        ...content({
          parts: [
            "Can deal with most situations likely to arise while travelling. Can produce simple connected text on familiar topics and describe experiences, dreams, ambitions, and opinions.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "Pode lidar com a maioria das situações encontradas durante viagens. Pode produzir textos simples e conectados sobre temas familiares e descrever experiências, sonhos, ambições e opiniões.",
            ),
          ],
        }),
      ],
    ],
    questions: {
      type: "ul",
      items: [
        {
          value: [
            ...content({ parts: ["Have you ever eaten unusual foods?"] }),
          ],
        },
        {
          value: [...content({ parts: ["Where did you eat it?"] })],
        },
        {
          value: [...content({ parts: ["What did you think of it?"] })],
        },
        {
          value: [
            ...content({ parts: ["Would you try it again? Why or why not?"] }),
          ],
        },
        {
          value: [
            ...content({ parts: ["Do you live in a house or an apartment?"] }),
          ],
        },
        {
          value: [...content({ parts: ["What is it like?"] })],
        },
        {
          value: [
            ...content({
              parts: ["Compare your home with someone else’s home."],
            }),
          ],
        },
      ],
    },
  },
  // B2 Upper Intermdiate
  {
    id: "b2-upper-intermediate",
    heading: 3 as const,
    paragraphs: [
      [
        ...content({
          parts: [
            "Can understand the main ideas of complex texts and interact with fluency and spontaneity. Can explain viewpoints and discuss advantages and disadvantages of different options.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "Pode compreender as ideias principais de textos complexos e interagir com fluência e espontaneidade. Pode explicar pontos de vista e discutir vantagens e desvantagens de diferentes opções.",
            ),
          ],
        }),
      ],
      [
        ...content({
          parts: ["Describe a difficult event in your life:"],
        }),
      ],
    ],
    lines: [
      [
        ...content({
          parts: ["Describe a difficult event in your life:"],
        }),
      ],
    ],
    questions: {
      type: "ul",
      items: [
        {
          value: [...content({ parts: ["What happened?"] })],
        },
        {
          value: [...content({ parts: ["What were you doing at the time?"] })],
        },
        {
          value: [
            ...content({
              parts: [
                "If you could study anything you wanted, what would you study?",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Do you prefer studying during the day or at night?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Would you prefer an art class or a photography class?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Explain your choice. Give at least two reasons."],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["What will you be doing one year from now?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["How do you think it will be different then?"],
            }),
          ],
        },
        {
          value: [
            ...content({ parts: ["Will you have finished your studies?"] }),
          ],
        },
      ],
    },
  },
  // C1 Advanced
  {
    id: "c1-advanced",
    heading: 3 as const,
    paragraphs: [
      [
        ...content({
          parts: [
            "Can understand demanding texts and express ideas fluently with little searching for expressions. Can use language flexibly for academic, professional, and social purposes.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "Pode compreender textos exigentes e expressar ideias fluentemente com pouca necessidade de procurar palavras. Pode usar a língua de forma flexível em contextos acadêmicos, profissionais e sociais.",
            ),
          ],
        }),
      ],
    ],
    lines: [
      [
        ...content({
          parts: ["Compare your life today with your life a few years ago:"],
        }),
      ],
    ],
    questions: {
      type: "ul",
      items: [
        {
          value: [
            ...content({
              parts: ["How has it changed?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["What is the biggest problem in the world today?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Why is that the most important problem?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["If you were responsible, how would you fix it?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "What arguments might someone use to disagree with you, and how would you respond?",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["What does it mean to be polite in your culture?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Give examples of polite and impolite behavior."],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Are you superstitious?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "Do you believe that certain things cause good or bad luck? Why or why not?",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "What things do people avoid doing because of their beliefs?",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["What have you been told about your childhood?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Were you raised by relatives other than your parents?"],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: ["Were you encouraged to be independent?"],
            }),
          ],
        },
      ],
    },
  },
  // C2 Proficiency
  {
    id: "c2-proficiency",
    heading: 3 as const,
    paragraphs: [
      [
        ...content({
          parts: [
            "Can understand virtually everything heard or read with ease. Can summarize information from different sources and express themselves precisely, even in highly complex situations.",
          ],
        }),
      ],
      [
        ...content({
          parts: [
            portuguese(
              "Pode compreender praticamente tudo o que ouve ou lê com facilidade. Pode resumir informações de diferentes fontes e expressar-se com precisão, mesmo em situações altamente complexas.",
            ),
          ],
        }),
      ],
    ],
    questions: {
      type: "ul",
      items: [
        {
          value: [
            ...content({
              parts: [
                "To what extent has technology improved or damaged the quality of human relationships?",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "How would you balance economic growth and environmental protection in public policy?",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "Can cultural traditions slow down social progress? Why or why not?",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "Describe a complex problem in your field and propose a realistic solution.",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "Summarize two opposing viewpoints on this issue and state your own position.",
              ],
            }),
          ],
        },
        {
          value: [
            ...content({
              parts: [
                "How do media and misinformation influence public opinion in modern societies?",
              ],
            }),
          ],
        },
      ],
    },
  },
];

type SectionData = {
  id: string;
  label?: string;
  heading: 1 | 2 | 3 | 4 | 5 | 6;
  paragraphs: InlineRichContentValue[][];
  lines?: InlineRichContentValue[][];
  questions?: ListProps;
};

export default function WhatsCEFR() {
  return (
    <>
      <Whiteboard title="CEFR" subtitle="Common European Frame Reference" />
      <PageSections>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            label={section.label}
            heading={section.heading}
          >
            {section.paragraphs.map((paragraph, index) => (
              <Paragraph key={index} value={paragraph} />
            ))}
            {section.questions && (
              <>
                <span className="block mb-4">
                  <b>Questions</b>
                </span>
                {section.lines &&
                  section.lines.map((line, index) => (
                    <Line key={index} value={line} />
                  ))}
                <List
                  type={section.questions.type}
                  items={section.questions.items}
                />
              </>
            )}
          </Section>
        ))}
      </PageSections>
    </>
  );
}
