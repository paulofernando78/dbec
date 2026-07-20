import { useParams } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { Subsection } from "@/components/ui/Subsection";
import { Meaning } from "@/components/content/Meaning";
import { Notes } from "@/components/content/Notes";
import { List } from "@/components/content/List";
import { CCQ } from "@/components/content/CCQ";
import { Dialogue } from "@/features/Dialogue/Dialogue";
import { TheAlphabet } from "@/features/TheAlphabet";
import { ColumnDrag } from "@/components/content/Column";
import { Carousel } from "@/components/ui/Carousel";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { getCefrLesson } from "@/data/cefr/lessons";

type LessonPageProps = {
  lesson: Record<string, any>;
};

const renderLanguageFocus = (lesson: Record<string, any>, heading: 3 | 4) => {
  const languageFocus = lesson.languageFocus ?? {};

  if (languageFocus.greetings || languageFocus.askingQuestions) {
    return (
      <>
        <Subsection label="Greetings" heading={4} />
        <Subsection label="Saying hi!" heading={5} />
        <Meaning value={languageFocus.greetings} />
        <Subsection label="Questions & Answers" heading={5} />
        <Meaning value={languageFocus.askingQuestions} />
        <TheAlphabet />
        <Subsection label="Personal Information" heading={4} />
        <Meaning value={languageFocus.personalInformation} />
        <Notes value={languageFocus.notes} />
        <CCQ value={languageFocus.ccq} />
      </>
    );
  }

  return (
    <>
      <Meaning value={languageFocus.meaning} />
      {languageFocus.column && <ColumnDrag {...languageFocus.column} />}
      {languageFocus.columnQuestions && (
        <ColumnDrag {...languageFocus.columnQuestions} />
      )}
      {languageFocus.columnVerbs && (
        <ColumnDrag {...languageFocus.columnVerbs} />
      )}
      <Notes value={languageFocus.notes} />
      <CCQ value={languageFocus.ccq} />
    </>
  );
};

export function LessonPage({ lesson }: LessonPageProps) {
  const heading = lesson.languageFocus?.greetings ? 3 : 4;

  return (
    <>
      <Whiteboard {...lesson.whiteboard} />
      <div>
        <LessonCard {...lesson.lessonCard} />
        <PageSections>
          <Section id="introduction" heading={heading}>
            {lesson.introduction?.vocabularyCarousel && (
              <Carousel
                aspectRatio="square"
                {...lesson.introduction.vocabularyCarousel}
              />
            )}
            {lesson.introduction?.storyCarousel && (
              <Carousel
                aspectRatio="wide"
                {...lesson.introduction.storyCarousel}
              />
            )}
            {lesson.introduction?.radio && (
              <Radio {...lesson.introduction.radio} />
            )}
          </Section>

          <Section id="Presentation" heading={heading}>
            <Dialogue {...lesson.presentation?.dialogue} />
            {lesson.presentation?.radio && (
              <Radio {...lesson.presentation.radio} />
            )}
          </Section>

          <Section id="Language Focus" heading={heading}>
            {renderLanguageFocus(lesson, heading)}
          </Section>

          <Section id="Practice" heading={heading}>
            {lesson.practice?.radio && <Radio {...lesson.practice.radio} />}
            {lesson.practice?.fillInTheBlanks && (
              <FillInTheBlanks {...lesson.practice.fillInTheBlanks} />
            )}
            {lesson.practice?.scramble && (
              <Unscramble {...lesson.practice.scramble} />
            )}
          </Section>

          <Section id="Production" heading={heading}>
            {lesson.production?.task && <List {...lesson.production.task} />}
          </Section>
        </PageSections>
      </div>
    </>
  );
}

export default function Lesson() {
  const { level, slug } = useParams();
  const lesson = getCefrLesson({ level, slug });

  if (!lesson) {
    return <h1>Lesson not found.</h1>;
  }

  return <LessonPage lesson={lesson} />;
}
