import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Card } from "@/components/ui/Card";
import { Line } from "@/components/content/Line";
import { Paragraph } from "@/components/content/Paragraph";
import { Carousel } from "@/components/ui/Carousel";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";

import { List } from "@/components/content/List";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { content, bold } from "@/helpers/content";

export const metadata = {
  title: "Advanced | How Your Memory Works",
  description:
    "Advanced listening and discussion practice based on a TED-Ed video about memory, forgetting, and how the brain stores information.",
};

export default function HowYourMemoryWorks() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="How Your Memory Works"
        description="Watch the video, understand how memory works, and discuss why forgetting is important."
      />
      <div>
        <PageSections>
          <Section id="introduction" heading={3}>
            <Card>
              <Paragraph
                value={[
                  ...content({
                    parts: [
                      "In this lesson, you will watch a TED-Ed video that explains how memory works, why forgetting is important, and how the brain stores information. You will also discuss questions, practice vocabulary, and complete exercises to improve your understanding of the topic.",
                    ],
                  }),
                ]}
              />
            </Card>
            <List
              instruction="Discuss these questions."
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: ["Why do people forget important information?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Would you like to remember everything forever?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What techniques help you remember things?"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="Vocabulary Guess" heading={3}>
            <Carousel
              instruction="Describe what you see."
              imgs={[
                { word: "memory", img: 0 },
                { word: "brain", img: 0 },
                { word: "forget", img: 0 },
                { word: "neuron", img: 0 },
                { word: "information", img: 0 },
                { word: "learning", img: 0 },
                { word: "recall", img: 0 },
                { word: "storage", img: 0 },
              ]}
            />
          </Section>

          <Section id="gist" heading={3}>
            <VideoPlayer
              videoId="TqFtWwQCzFI"
              title="How Your Memory Works"
              instruction="Watch the video."
            />
            <Radio
              score={false}
              instruction="Now choose the correct answer."
              exercise={{
                questions: [
                  {
                    question: "What is the video mainly about?",
                    options: [
                      {
                        option: "How to become a professional doctor.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "How the brain remembers and forgets information.",
                        isCorrect: true,
                      },
                      {
                        option: "How computers store files.",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="details" heading={3}>
            <Radio
              instruction="Watch again and listen for specific information."
              exercise={{
                questions: [
                  {
                    question: "What helps create stronger memories?",
                    options: [
                      {
                        option: "Sleeping less.",
                        isCorrect: false,
                      },
                      {
                        option: "Ignoring information.",
                        isCorrect: false,
                      },
                      {
                        option: "Repeated use of neural pathways.",
                        isCorrect: true,
                      },
                    ],
                  },

                  {
                    question: "Why is forgetting useful?",
                    options: [
                      {
                        option: "It removes unnecessary information.",
                        isCorrect: true,
                      },
                      {
                        option: "It damages the brain.",
                        isCorrect: false,
                      },
                      {
                        option: "It prevents learning.",
                        isCorrect: false,
                      },
                    ],
                  },

                  {
                    question: "What is one way to improve memory?",
                    options: [
                      {
                        option: "Avoiding practice.",
                        isCorrect: false,
                      },
                      {
                        option: "Reviewing information regularly.",
                        isCorrect: true,
                      },
                      {
                        option: "Studying only once.",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="practice" heading={3}>
            <Guess
              words={[
                { word: "brain", img: 0 },
                { word: "storage", img: 0 },
                { word: "recall", img: 0 },
                { word: "neuron", img: 0 },
                { word: "memory", img: 0 },
                { word: "information", img: 0 },
                { word: "forget", img: 0 },
                { word: "learning", img: 0 },
              ]}
            />
            <FillInTheBlanks
              showWordBank={false}
              instruction="Fill in the blanks with the words from previous exercises."
              numbered={true}
              exercise={{
                blocks: [
                  {
                    block: [
                      { text: "The " },
                      { blank: "brain" },
                      { text: " stores information." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Good " },
                      { blank: "memory" },
                      { text: " helps people learn." },
                    ],
                    lineBreak: true,
                  },

                  {
                    block: [
                      { text: "A " },
                      { blank: "neuron" },
                      { text: " sends signals in the nervous system." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Trying to " },
                      { blank: "recall" },
                      { text: " information strengthens memory." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "People sometimes " },
                      { blank: "forget" },
                      { text: " unnecessary details." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Information can remain in long-term " },
                      { blank: "storage" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Practice improves " },
                      { blank: "learning" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Neural " },
                      { blank: "pathway" },
                      { text: " connections become stronger with use." },
                    ],
                    lineBreak: true,
                  },
                ],
              }}
            />
          </Section>

          <Section
            id="follow-up-discussion"
            label="Follow-up Discussion"
            heading={3}
          >
            <List
              instruction="Discuss the questions below."
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: [
                        "Would it be a good thing to remember everything forever?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Why do you think the brain forgets information?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "How could understanding memory help students learn better?",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
