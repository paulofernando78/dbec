import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { Subsection } from "@/components/ui/Subsection";
import { List } from "@/components/content/List";
import { Meaning } from "@/components/content/Meaning";
import { Notes } from "@/components/content/Notes";
import { CCQ } from "@/components/content/CCQ";

import { Dialogue } from "@/features/Dialogue/Dialogue";
import { TheAlphabet } from "@/features/TheAlphabet";

import { Carousel } from "@/components/ui/Carousel";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { lesson } from "@/data/cefr/beginner/unit-1-hello";

export default function Introduction() {
  return (
    <>
      <Whiteboard {...lesson.whiteboard} />
      <div>
        <LessonCard {...lesson.lessonCard} />
        <PageSections>
          <Section id="introduction" heading={3}>
            <Carousel
              aspectRatio="wide"
              {...lesson.introduction.carouselWide}
            />
            <Radio {...lesson.introduction.radio} />
          </Section>

          <Section id="Presentation" heading={3}>
            <Dialogue {...lesson.presentation.dialogue} />
          </Section>

          <Section id="Language Focus" heading={3}>
            <Subsection label="Greetings" heading={4} />
            <Subsection label="Saying hi!" heading={5} />
            <Meaning value={lesson.languageFocus.greetings} />
            <Subsection label="Questions & Answers" heading={5} />
            <Meaning value={lesson.languageFocus.askingQuestions} />
            <TheAlphabet />
            <Subsection label="Personal Information" heading={4} />
            <Meaning value={lesson.languageFocus.personalInformation} />
            <Notes value={lesson.languageFocus.notes} />
            <CCQ value={lesson.languageFocus.ccq} />
          </Section>

          <Section id="Practice" heading={3}>
            <Radio {...lesson.practice.radio} />

            <FillInTheBlanks {...lesson.practice.fillInTheBlanks} />

            <Unscramble {...lesson.practice.scramble} />
          </Section>

          <Section id="Production" heading={3}>
            <List {...lesson.production.task} />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
