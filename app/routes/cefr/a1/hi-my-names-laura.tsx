import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonObjective } from "@/components/content/LessonObjective";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Image } from "@/components/ui/Image";
import { Line } from "@/components/content/Line";
import { MediaWrapper } from "@/components/content/MediaWrapper";
import { Dialogue } from "@/features/Dialogue/Dialogue";

import { ColumnDrag } from "@/components/content/Column";
import { Carousel } from "@/components/ui/Carousel";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { List } from "@/components/content/List";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Collapsible } from "@/components/content/Collapsible";

import { content } from "@/helpers/content";

import { lesson } from "@/data/lessons/cefr/a1/hi-my-names-laura";

export default function Introduction() {
  return (
    <>
      <Whiteboard
        title="A1 Beginner"
        subtitle="Hi, my name’s Laura."
        description="What's your name? I’m Laura. Nice to meet you."
      />

      <div className="lie-break">
        <LessonObjective
          value={[
            ...content({
              parts: [lesson.objective[0]],
            }),
          ]}
        />
        <PageSections>
          <Section id="introduction" heading={4}>
            <Carousel aspectRatio="wide" {...lesson.introduction.carouselWide} />

            <Radio {...lesson.introduction.radio} />
          </Section>

          <Section id="Presentation" heading={4}>
            <Dialogue {...lesson.presentation.dialogue} />
          </Section>

          <Section id="Language Focus" heading={4}>
            <ColumnDrag {...lesson.languageFocus.columnDrag} />
          </Section>

          <Section id="Practice" heading={4}>
            <Guess {...lesson.practice.guess} />

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
