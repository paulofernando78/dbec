import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonObjective } from "@/components/content/LessonObjective";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Ribbon } from "@/components/ui/Ribbon";
import { Line } from "@/components/content/Line";
import { List } from "@/components/content/List";
import { Notes } from "@/components/content/Notes";
import { CCQ } from "@/components/content/CCQ";

import { Dialogue } from "@/features/Dialogue/Dialogue";
import { TheAlphabet } from "@/features/TheAlphabet";

import { ColumnDrag } from "@/components/content/Column";
import { Carousel } from "@/components/ui/Carousel";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { lesson } from "@/data/lessons/cefr/a1/unit-1-hello";

export default function Introduction() {
  return (
    <>
      <Whiteboard
        title={lesson.whiteboard.title}
        subtitle={lesson.whiteboard.subtitle}
        descriptions={lesson.whiteboard.descriptions}
        date={lesson.whiteboard.date}
      />

      <div className="line-break">
        <LessonObjective {...lesson.lessonObjective} />

        <PageSections>
          <Section id="introduction" heading={4}>
            <Carousel
              aspectRatio="wide"
              {...lesson.introduction.carouselWide}
            />
            <Radio {...lesson.introduction.radio} />
          </Section>

          <Section id="Presentation" heading={4}>
            <Dialogue {...lesson.presentation.dialogue} />
          </Section>

          <Section id="Language Focus" heading={4}>
            <Ribbon label="Greetings" bgColor="bg-slate-500" />
            <ColumnDrag {...lesson.languageFocus.greetings} />
            <TheAlphabet />
            <Ribbon label="Personal Information" bgColor="bg-slate-500" />
            <ColumnDrag {...lesson.languageFocus.personalInformation} />
            <Notes value={lesson.languageFocus.notes} />
            <CCQ value={lesson.languageFocus.ccq} />
          </Section>

          <Section id="Practice" heading={4}>
            <Radio {...lesson.practice.radio} />

            <FillInTheBlanks {...lesson.practice.fillInTheBlanks} />

            <Unscramble {...lesson.practice.scramble} />
          </Section>

          <Section id="Production" heading={4}>
            <List {...lesson.production.task} />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
