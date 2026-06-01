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
import { Unscramble } from "@/features/exercises/Unscramble";

import { List } from "@/components/content/List";
import { VideoPlayer } from  "@/components/ui/VideoPlayer";
import { content, portuguese } from "@/helpers/content";
import { Collapsible } from "@/components/content/Collapsible";

export const metadata = {
  title: "Advanced | How Your Memory Works",
  description:
    "Advanced listening and discussion practice based on a TED-Ed video about memory, forgetting, and how the brain stores information.",
};

import { lesson } from "@/data/lessons/cefr/advanced/ted-ed/how-your-memory-works"

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
              imgs={lesson.vocabulary}
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
              exercise={lesson.radio.gist}
            />
            <Collapsible title="Script">
              {lesson.script.map((line, index) => (
                <div key={index} className="mb-4">
                  <Line
                    value={[
                      ...content({
                        parts: [line.en],
                      }),
                    ]}
                  />

                  <Line
                    value={[
                      ...content({
                        parts: [portuguese(line.pt)],
                      }),
                    ]}
                  />
                </div>
              ))}
            </Collapsible>
          </Section>

          <Section id="details" heading={3}>
            <Radio
              instruction="Watch again and listen for specific information."
              exercise={lesson.radio.details}
            />
          </Section>

          <Section id="practice" heading={3}>
            <Guess
              words={lesson.vocabulary}
            />
            <FillInTheBlanks
              showWordBank={false}
              instruction="Complete the sentences."
              numbered={true}
              exercise={lesson.fillInTheBlanks}
            />
            <Unscramble
              showWordBank={false}
              instruction="Unscramble the sentences."
              numbered={true}
              exercise={lesson.unscramble}
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
