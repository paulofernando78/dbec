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
import { getCourseSyllabusLessonCard } from "@/data/course/course-syllabus-sections";
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

const splitField = (value?: string) =>
  value
    ?.split(";")
    .map((item) => item.trim())
    .filter(Boolean) ?? [];

const createSyllabusLesson = (lessonCard: LessonCardContent & { label?: string }) => {
  const usefulLanguage = splitField(lessonCard.usefulLanguage);
  const vocabulary = splitField(lessonCard.vocabulary);

  return {
    whiteboard: {
      title: lessonCard.label ?? "Lesson",
      subtitle: "CEFR syllabus lesson",
      descriptions: [lessonCard.objective],
    },
    lessonCard,
    introduction: {
      blocks: [
        {
          type: "line",
          value: [
            `Today students work with ${lessonCard.label ?? "this lesson"} through a guided communicative lesson sequence.`,
          ],
          className: "font-bold mb-4",
        },
        {
          type: "task",
          instruction: "Lead-in:",
          listType: "ul",
          items: [
            { content: ["Personalize the topic with one simple question."] },
            { content: ["Elicit what students already know about the situation."] },
            { content: ["Set a clear communicative reason to use the target language."] },
          ],
        },
      ],
    },
    presentation: {
      blocks: [
        {
          type: "task",
          instruction: "Target language:",
          listType: "ul",
          items: usefulLanguage.map((item) => ({ content: [item] })),
        },
      ],
    },
    languageFocus: {
      blocks: [
        {
          type: "task",
          instruction: "Vocabulary:",
          listType: "ul",
          items: vocabulary.map((item) => ({ content: [item] })),
        },
        ...(lessonCard.pronunciation
          ? [
              {
                type: "line",
                value: [`Pronunciation: ${lessonCard.pronunciation}`],
                className: "font-bold mt-4",
              },
            ]
          : []),
      ],
    },
    practice: {
      blocks: [
        {
          type: "task",
          instruction: "Controlled practice:",
          listType: "ol",
          items: [
            { content: ["Model the useful language with clear teacher examples."] },
            { content: ["Students repeat, substitute details, and check meaning."] },
            { content: ["Students practise short exchanges in pairs."] },
          ],
        },
      ],
    },
    production: {
      blocks: [
        {
          type: "task",
          instruction: "Final task:",
          listType: "checkbox",
          items: [
            { content: [lessonCard.finalTask ?? "Complete a communicative task using the target language."] },
            { content: ["Give feedback on successful communication and useful corrections."] },
          ],
        },
      ],
    },
  };
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
        <Line key={index} value={block.value}/>
      );
    case "lines":
      return (
        <Lines key={index} value={block.value} />
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
        <Subsection key={index} label={block.label} heading={block.heading} />
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

export function Course({ lesson, lessonCard }: CourseProps) {
  const heading = 4;
  const card = lessonCard ?? lesson.lessonCard;
  const displayedLesson = card?.label
    ? {
        ...lesson,
        whiteboard: {
          ...lesson.whiteboard,
          title: card.label,
        },
      }
    : lesson;
  const lessonVocabulary = getLessonVocabulary(displayedLesson, card?.vocabulary);
  const renderContext = { lessonVocabulary };
  const practiceCounts = getPracticeExerciseCounts(displayedLesson);

  if (
    import.meta.env.DEV &&
    (practiceCounts.radio < 8 || practiceCounts.fillInTheBlanks < 8)
  ) {
    console.warn(
      `Lesson practice requires at least 8 Radio and 8 FillInTheBlanks items. Received Radio: ${practiceCounts.radio}, FillInTheBlanks: ${practiceCounts.fillInTheBlanks}.`,
      displayedLesson.whiteboard?.subtitle,
    );
  }

  return (
    <>
      <Whiteboard {...displayedLesson.whiteboard} />
      <div>
        {card && <LessonCard {...card} />}
        <PageSections>
          <Section id="introduction" heading={heading}>
            {renderBlocks(displayedLesson.introduction?.blocks, renderContext)}
          </Section>

          <Section id="Presentation" heading={heading}>
            {renderBlocks(displayedLesson.presentation?.blocks, renderContext)}
          </Section>

          <Section id="Language Focus" heading={heading}>
            {renderBlocks(displayedLesson.languageFocus?.blocks, renderContext)}
          </Section>

          <Section id="Practice" heading={heading}>
            {renderBlocks(displayedLesson.practice?.blocks, renderContext)}
          </Section>

          <Section id="Production" heading={heading}>
            {renderBlocks(displayedLesson.production?.blocks, renderContext)}
          </Section>
        </PageSections>
      </div>
    </>
  );
}

export default function Lesson() {
  const { level, chapter, slug } = useParams();
  const lessonSlug = slug ?? chapter;
  const href =
    level && chapter
      ? `/course/${level}/${chapter}${slug ? `/${slug}` : ""}`
      : undefined;
  const courseLessonCard = href
    ? getCourseLessonCard(href) ?? getCourseSyllabusLessonCard(href)
    : undefined;
  const lesson =
    level === "template"
      ? courseTemplate
      : getCourseLesson({ level, slug: lessonSlug });
  const lessonCard = courseLessonCard
    ? {
        label: courseLessonCard.label,
        objective: courseLessonCard.objective,
        usefulLanguage: courseLessonCard.usefulLanguage,
        vocabulary: courseLessonCard.vocabulary,
        pronunciation: courseLessonCard.pronunciation,
        finalTask: courseLessonCard.finalTask,
      }
    : undefined;

  if (!lesson && !lessonCard) {
    return <h1>Lesson not found.</h1>;
  }

  if (!lesson && lessonCard) {
    return (
      <Course
        lesson={createSyllabusLesson(lessonCard)}
        lessonCard={lessonCard}
      />
    );
  }

  return <Course lesson={lesson!} lessonCard={lessonCard} />;
}
