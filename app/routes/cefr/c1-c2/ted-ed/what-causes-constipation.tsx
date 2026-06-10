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
import { LineBreak } from "@/components/content/LineBreak";

import { List } from "@/components/content/List";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { content, bold } from "@/helpers/content";

export const metadata = {
  title: "Advanced | How Your Memory Works",
  description:
    "Advanced listening and discussion practice based on a TED-Ed video about how memory functions and how we remember things.",
};

export default function HowYourMemoryWorks() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="How Your Memory Works"
        description="Watch the video, learn about memory processes, and discuss how we remember and forget."
      />

      <div className="line-break">
        <PageSections>
          <Card>
            <Paragraph
              value={[
                ...content({
                  parts: [
                    "By the end of this lesson, you will understand how memory works and discuss ways to improve it.",
                  ],
                }),
              ]}
            />
          </Card>
          <LineBreak />
          <Section id="introduction" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [bold("Discuss these questions.")],
                }),
              ]}
            />
            <LineBreak />
            <List
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What do you know about how memory works?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["How do you remember important information?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What causes people to forget things?"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="carousel" heading={3}>
            <Carousel
              instruction="Describe what you see."
              imgs={[
                { word: "memory", img: 0 },
                { word: "brain", img: 0 },
                { word: "neurons", img: 0 },
                { word: "recall", img: 0 },
                { word: "forgetting", img: 0 },
                { word: "attention", img: 0 },
                { word: "encoding", img: 0 },
                { word: "storage", img: 0 },
              ]}
            />
          </Section>

          <Section id="gist" heading={3}>
            <Line
              value={[
                ...content({
                  parts: [
                    bold(
                      "What is the video mainly about? Watch it and answer the question below.",
                    ),
                  ],
                }),
              ]}
            />
            <LineBreak />
            <VideoPlayer videoId="RdTUSdcj3sM" title="How Your Memory Works" />
            <Radio
              score={false}
              exercise={{
                questions: [
                  {
                    options: [
                      {
                        option:
                          "How the brain remembers and forgets information.",
                        isCorrect: true,
                      },
                      {
                        option: "How to become a professional doctor.",
                        isCorrect: false,
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
            <Line
              value={[
                ...content({
                  parts: [
                    bold("Watch again and listen for specific information."),
                  ],
                }),
              ]}
            />
            <LineBreak />
            <Radio
              exercise={{
                questions: [
                  {
                    question: "1. What helps the brain store memories?",
                    options: [
                      {
                        option: "Neurons connecting.",
                        isCorrect: true,
                      },
                      {
                        option: "Sleeping less.",
                        isCorrect: false,
                      },
                      {
                        option: "Eating sugar.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question: "2. What can cause forgetting?",
                    options: [
                      {
                        option: "Lack of attention.",
                        isCorrect: true,
                      },
                      {
                        option: "Watching TV.",
                        isCorrect: false,
                      },
                      {
                        option: "Reading books.",
                        isCorrect: false,
                      },
                    ],
                  },
                  {
                    question: "3. What process is important for memory?",
                    options: [
                      {
                        option: "Encoding information.",
                        isCorrect: true,
                      },
                      {
                        option: "Ignoring details.",
                        isCorrect: false,
                      },
                      {
                        option: "Skipping meals.",
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
                { word: "memory", img: 1 },
                { word: "brain", img: 0 },
                { word: "neurons", img: 0 },
                { word: "recall", img: 0 },
                { word: "forgetting", img: 0 },
                { word: "attention", img: 0 },
                { word: "encoding", img: 0 },
                { word: "storage", img: 0 },
              ]}
            />
            <LineBreak />
            <FillInTheBlanks
              showWordBank={false}
              numbered={true}
              exercise={{
                blocks: [
                  {
                    block: [
                      {
                        text: "The ",
                      },
                      { blank: "brain" },
                      { text: " stores memories." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Memory involves ",
                      },
                      { blank: "encoding" },
                      {
                        text: " and storage processes.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Good ",
                      },
                      { blank: "attention" },
                      {
                        text: " helps with memory.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: " ",
                      },
                      { blank: "neurons" },
                      {
                        text: " connect to form memories.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: " ",
                      },
                      { blank: "recall" },
                      {
                        text: " is the process of remembering.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: " ",
                      },
                      { blank: "forgetting" },
                      {
                        text: " can happen naturally.",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: "Memory can be improved by practice and ",
                      },
                      { blank: "attention" },
                      {
                        text: ".",
                      },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      {
                        text: " ",
                      },
                      { blank: "storage" },
                      {
                        text: " is where memories are kept.",
                      },
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
            <Line
              value={[
                ...content({
                  parts: [bold("Discuss the questions below.")],
                }),
              ]}
            />
            <LineBreak />
            <List
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: ["What surprised you most in the video?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Why do many people ignore memory health?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What habits can improve memory?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Should schools teach more about how memory works? Why?",
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
