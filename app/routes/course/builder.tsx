import { useParams } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";
import {
  LessonCard,
  type LessonCardContent,
} from "@/components/content/LessonCard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { Subsection } from "@/components/ui/Subsection";
import { Line } from "@/components/content/Line";
import { Image } from "@/components/ui/Image";
import { Carousel } from "@/components/ui/Carousel";
import { Meaning } from "@/components/content/Meaning";
import { Notes } from "@/components/content/Notes";
import { List } from "@/components/content/List";
import { CCQ } from "@/components/content/CCQ";
import { Dialogue } from "@/features/Dialogue/Dialogue";
import { TheAlphabet } from "@/features/TheAlphabet";
import { ColumnDrag } from "@/components/content/Column";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";

import { getCourseLesson } from "@/data/course/lessons-slug";
import { getCourseLessonCard } from "@/data/course/course-lessons-card-data";
import { lesson as courseTemplate } from "@/data/course/template";

type CourseProps = {
  lesson: Record<string, any>;
  lessonCard?: LessonCardContent;
  imgSrc?: string;
  imgAlt?: string;
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
        <Subsection label="Meeting Someone" heading={4} />
        <Meaning value={languageFocus.meetingSomeone} />
        <Notes value={languageFocus.notes} />
        <CCQ value={languageFocus.ccq} />
      </>
    );
  }

  if (languageFocus.personalInformation) {
    return (
      <>
        <Subsection label="Personal Information" heading={4} />
        <Meaning value={languageFocus.personalInformation} />
        <Notes value={languageFocus.notes} />
        <CCQ value={languageFocus.ccq} />
        <TheAlphabet />
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

export function Course({ lesson, lessonCard, imgSrc, imgAlt }: CourseProps) {
  const heading = lesson.languageFocus?.greetings ? 3 : 4;
  const card = lessonCard ?? lesson.lessonCard;

  return (
    <>
      <Whiteboard {...lesson.whiteboard} />
      <div>
        {card && <LessonCard {...card} />}
        <PageSections>
          <Section id="introduction" heading={heading}>
            <Line value={lesson.introduction.instruction} className="font-bold mb-4"/>
            <Image
              src={lesson.introduction.imgSrc}
              alt={lesson.introduction.imgAlt}
            />
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
  const lesson =
    level === "template" ? courseTemplate : getCourseLesson({ level, slug });
  const courseLessonCard =
    level && slug
      ? getCourseLessonCard("/courses/" + level + "/" + slug)
      : undefined;
  const lessonCard = courseLessonCard
    ? {
        canDo: courseLessonCard.canDo,
        usefulLanguage: courseLessonCard.usefulLanguage,
        vocabulary: courseLessonCard.vocabulary,
        skills: courseLessonCard.skills,
        recycles: courseLessonCard.recycles,
        pronunciation: courseLessonCard.pronunciation,
        finalTask: courseLessonCard.finalTask,
        successCriteria: courseLessonCard.successCriteria,
      }
    : undefined;

  if (!lesson) {
    return <h1>Lesson not found.</h1>;
  }

  return <Course lesson={lesson} lessonCard={lessonCard} />;
}
