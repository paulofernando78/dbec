import { ColumnDrag } from "@/components/content/Column";
import { LessonObjective } from "@/components/content/LessonObjective";
import { Line } from "@/components/content/Line";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Whiteboard } from "@/components/content/Whiteboard";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Radio } from "@/features/exercises/Radio";
import { Unscramble } from "@/features/exercises/Unscramble";
import { content } from "@/helpers/content";

import { lesson } from "@/data/lessons/cefr/a1/welcome-to-the-classroom";

export default function WelcomeToTheClassroom() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Welcome to the Classroom"
        description="What is this? It is a book. Open your book, please."
      />

      <div className="line-break">
        <LessonObjective
          value={[
            ...content({
              parts: [lesson.objective[0]],
            }),
          ]}
        />

        <PageSections>
          <Section id="Introduction" heading={4}>
            <div className="space-y-3">
              {lesson.introduction.lines.map((line, index) => (
                <Line key={index} value={line} />
              ))}
            </div>
          </Section>

          <Section id="Vocabulary" heading={4}>
            <ColumnDrag {...lesson.presentation.vocabulary} />
          </Section>

          <Section id="Language Focus" heading={4}>
            <ColumnDrag {...lesson.languageFocus.patterns} />
          </Section>

          <Section id="Practice" heading={4}>
            <Radio {...lesson.practice.radio} />
            <FillInTheBlanks {...lesson.practice.fillInTheBlanks} />
            <Unscramble {...lesson.practice.scramble} />
          </Section>

          <Section id="Production" heading={4}>
            <Line value={lesson.production.prompt} />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
