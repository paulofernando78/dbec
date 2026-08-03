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
import { Lines } from "@/components/content/Lines";
import { Image } from "@/components/ui/Image";
import { Carousel } from "@/components/ui/Carousel";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Meaning } from "@/components/content/Meaning";
import { Notes } from "@/components/content/Notes";
import { List } from "@/components/content/List";
import { CCQ } from "@/components/content/CCQ";
import { Dialogue } from "@/features/Dialogue/Dialogue";
import { TheAlphabet } from "@/features/TheAlphabet";
import { ColumnDrag } from "@/components/content/Column";
import { Radio } from "@/features/exercises/Radio";
import { ImageQuiz } from "@/features/exercises/ImageQuiz";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";
import { Unscramble } from "@/features/exercises/Unscramble";
import { Guess } from "@/features/exercises/Guess";

import { getCourseLesson } from "@/data/course/lessons-slug";
import { getCourseLessonCard } from "@/data/course/course-lessons-card-data";
import { lesson as courseTemplate } from "@/data/course/template";
import {
  getLessonVocabulary,
  getPracticeExerciseCounts,
} from "@/utils/getLessonVocabulary";

type CourseProps = {
  lesson: Record<string, any>;
  lessonCard?: LessonCardContent;
  imgSrc?: string;
  imgAlt?: string;
};

type RenderBlockContext = {
  lessonVocabulary: ReturnType<typeof getLessonVocabulary>;
};

const renderBlock = (
  block: Record<string, any>,
  index: number,
  context: RenderBlockContext,
) => {
  switch (block.type) {
    case "line":
      return (
        <Line
          key={index}
          value={block.value}
          className={block.className}
        />
      );
    case "lines":
      return (
        <Lines
          key={index}
          value={block.value}
          className={block.className}
        />
      );
    case "image":
      return <Image key={index} src={block.src} alt={block.alt} />;
    case "carousel":
      return <Carousel key={index} {...(block as any)} />;
    case "audioPlayer":
      return <AudioPlayer key={index} src={block.src} />;
    case "dialogue":
      return <Dialogue key={index} {...(block as any)} />;
    case "meaning":
      return <Meaning key={index} value={block.value} />;
    case "notes":
      return <Notes key={index} value={block.value} />;
    case "ccq":
      return <CCQ key={index} value={block.value} />;
    case "subsection":
      return (
        <Subsection
          key={index}
          label={block.label}
          heading={block.heading}
        />
      );
    case "column":
      return <ColumnDrag key={index} {...(block as any)} />;
    case "radio":
      return <Radio key={index} {...(block as any)} />;
    case "imageQuiz":
      return <ImageQuiz key={index} {...(block as any)} />;
    case "fillInTheBlanks":
      return <FillInTheBlanks key={index} {...(block as any)} />;
    case "unscramble":
      return <Unscramble key={index} {...(block as any)} />;
    case "guess":
      return (
        <Guess
          key={index}
          words={block.words ?? context.lessonVocabulary.words}
        />
      );
    case "task":
      return (
        <List
          key={index}
          instruction={block.instruction}
          items={block.items}
          type={block.listType}
        />
      );
    case "alphabet":
      return <TheAlphabet key={index} />;
    default:
      return null;
  }
};

const renderBlocks = (
  blocks: Record<string, any>[] | undefined,
  context: RenderBlockContext,
) => blocks?.map((block, index) => renderBlock(block, index, context));

export function Course({ lesson, lessonCard, imgSrc, imgAlt }: CourseProps) {
  const heading = 4;
  const card = lessonCard ?? lesson.lessonCard;
  const lessonVocabulary = getLessonVocabulary(lesson, card?.vocabulary);
  const renderContext = { lessonVocabulary };
  const practiceCounts = getPracticeExerciseCounts(lesson);

  if (
    import.meta.env.DEV &&
    (practiceCounts.radio < 8 || practiceCounts.fillInTheBlanks < 8)
  ) {
    console.warn(
      `Lesson practice requires at least 8 Radio and 8 FillInTheBlanks items. Received Radio: ${practiceCounts.radio}, FillInTheBlanks: ${practiceCounts.fillInTheBlanks}.`,
      lesson.whiteboard?.subtitle,
    );
  }

  return (
    <>
      <Whiteboard {...lesson.whiteboard} />
      <div>
        {card && <LessonCard {...card} />}
        <PageSections>
          <Section id="introduction" heading={heading}>
            {renderBlocks(lesson.introduction?.blocks, renderContext)}
          </Section>

          <Section id="Presentation" heading={heading}>
            {renderBlocks(lesson.presentation?.blocks, renderContext)}
          </Section>

          <Section id="Language Focus" heading={heading}>
            {renderBlocks(lesson.languageFocus?.blocks, renderContext)}
          </Section>

          <Section id="Practice" heading={heading}>
            {renderBlocks(lesson.practice?.blocks, renderContext)}
          </Section>

          <Section id="Production" heading={heading}>
            {renderBlocks(lesson.production?.blocks, renderContext)}
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
        objective: courseLessonCard.objective,
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
