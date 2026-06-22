import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { List } from "@/components/content/List";
import { Line } from "@/components/content/Line";

import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Collapsible } from "@/components/content/Collapsible";

import { Carousel } from "@/components/ui/Carousel";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { content, portuguese } from "@/helpers/content";

import { lesson } from "@/data/cefr/advanced/ted-ed/how-your-memory-works";

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
        subtitle="Games"
        description="How Your Memory Works"
      />
      <LessonCard
        value={[
          ...content({
            parts: [lesson.objective[0]],
          }),
        ]}
      />
      <PageSections>
        <Section id="introduction" heading={3}>
          <List
            instruction="Discuss these questions."
            ordered
            items={lesson.introduction.map((question) => ({
              value: [
                ...content({
                  parts: [question],
                }),
              ],
            }))}
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
          <Guess words={lesson.vocabulary} />
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
            instruction="Discuss these questions."
            ordered
            items={lesson.followUp.map((question) => ({
              value: [
                ...content({
                  parts: [question],
                }),
              ],
            }))}
          />
        </Section>
      </PageSections>
    </>
  );
}
