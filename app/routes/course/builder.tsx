import { useMemo } from "react";
import { useParams } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";
import type { LessonCardContent } from "@/components/content/LessonCard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { Subsection } from "@/components/ui/Subsection";
import { Text } from "@/components/content/Text";
import { Image } from "@/components/ui/Image";
import { Carousel } from "@/components/ui/Carousel";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
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
import {
  getCourseLessonCard,
  getCourseLessonIndex,
} from "@/data/course/course-lessons-card-data";
import {
  getCourseSyllabusLessonCard,
  getCourseSyllabusLessonIndex,
} from "@/data/course/course-syllabus-sections";
import { getLessonVocabulary } from "@/utils/getLessonVocabulary";

type CourseProps = {
  lesson: Record<string, any>;
  lessonCard?: LessonCardContent;
  levelTitle?: string;
  imgSrc?: string;
  imgAlt?: string;
};

const courseLevelTitles: Record<string, string> = {
  beginner: "A1 Beginner",
  elementary: "A2 Elementary",
  intermediate: "B1 Intermediate",
  "upper-intermediate": "B2 Upper-Intermediate",
  advanced: "C1 Advanced",
};

const splitField = (value?: string) =>
  value
    ?.split(";")
    .map((item) => item.trim())
    .filter(Boolean) ?? [];

const createFillInTheBlanksBlocks = (lessonCard: LessonCardContent) => {
  const sourceItems = [
    ...splitField(lessonCard.usefulLanguage),
    ...splitField(lessonCard.finalTask),
  ];

  return sourceItems.slice(0, 6).flatMap((sentence) => {
    const words = [...sentence.matchAll(/[A-Za-z']+/g)];
    const word = words
      .filter((match) => match[0].length >= 3)
      .sort((a, b) => b[0].length - a[0].length)[0];

    if (!word || word.index === undefined) return [];

    const start = word.index;
    const end = start + word[0].length;

    return [
      {
        lineBreak: true,
        block: [
          { text: sentence.slice(0, start) },
          { blank: word[0] },
          { text: sentence.slice(end) },
        ],
      },
    ];
  });
};

const createAssignmentRadioQuestions = (lessonCard: LessonCardContent) => {
  const usefulLanguage = splitField(lessonCard.usefulLanguage).slice(0, 4);
  const fallback = lessonCard.finalTask ?? lessonCard.objective;
  const correctItems = usefulLanguage.length > 0 ? usefulLanguage : [fallback];
  const distractors = [
    "This expression is unrelated to the lesson.",
    "This sentence does not fit the situation.",
  ];

  return correctItems.map((item, index) => ({
    question: `Which option uses the target language from this lesson?`,
    options: [
      { option: distractors[index % distractors.length], isCorrect: false },
      { option: item, isCorrect: true },
      {
        option: distractors[(index + 1) % distractors.length],
        isCorrect: false,
      },
    ],
  }));
};

const Assignment = ({
  lessonCard,
}: {
  lessonCard: LessonCardContent & { label?: string };
}) => {
  const fillInTheBlanksBlocks = createFillInTheBlanksBlocks(lessonCard);

  return (
    <>
      <Whiteboard
        title={lessonCard.label ?? "Assignment"}
        subtitle="Assignment"
        descriptions={[lessonCard.objective ?? lessonCard.description ?? ""]}
      />
      <PageSections>
        <Section id="Multiple Choice" heading={3}>
          <Radio
            instruction="Choose the target language from the lesson."
            exercise={{ questions: createAssignmentRadioQuestions(lessonCard) }}
          />
        </Section>

        {fillInTheBlanksBlocks.length > 0 && (
          <Section id="Fill in the Blanks" heading={3}>
            <FillInTheBlanks
              instruction="Complete the sentences with the missing words."
              exercise={{ blocks: fillInTheBlanksBlocks }}
            />
          </Section>
        )}

        <Section id="Production" heading={3}>
          <List
            instruction="Complete the assignment:"
            type="checkbox"
            items={[
              {
                content: [
                  lessonCard.finalTask ??
                    "Complete the final task using the target language.",
                ],
              },
              { content: ["Review your answers before submitting."] },
            ]}
          />
        </Section>
      </PageSections>
    </>
  );
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
    case "text":
    case "line":
    case "lines":
      return (
        <Text
          key={index}
          as={block.as}
          display={block.display}
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

export function Course({ lesson, lessonCard, levelTitle }: CourseProps) {
  const heading = 4;
  const card = lessonCard ?? lesson.lessonCard;
  const lessonTitle =
    typeof card?.index === "number"
      ? `${card.index + 1} • ${card.label}`
      : card?.label;
  const displayedLesson = useMemo(
    () =>
      card?.label
        ? {
            ...lesson,
            whiteboard: {
              ...lesson.whiteboard,
              title: levelTitle ?? lesson.whiteboard.title,
              subtitle: lessonTitle,
            },
          }
        : lesson,
    [card?.label, lesson, lessonTitle, levelTitle],
  );
  const lessonVocabulary = useMemo(
    () => getLessonVocabulary(displayedLesson, card?.vocabulary),
    [displayedLesson, card?.vocabulary],
  );
  const renderContext = useMemo(
    () => ({ lessonVocabulary }),
    [lessonVocabulary],
  );
  return (
    <>
      <Whiteboard {...displayedLesson.whiteboard} />
      <div>
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
  const { level, section, resourceType, slug } = useParams();

  const levelTitle = level ? courseLevelTitles[level] : undefined;
  const isTypedResource =
    resourceType === "material" || resourceType === "assignment";
  const resolvedResourceType = isTypedResource ? resourceType : "material";
  const lessonSlug = isTypedResource
    ? (slug ?? section)
    : (resourceType ?? section);
  const href =
    level && section
      ? isTypedResource && slug
        ? `/course/${level}/${section}/${resourceType}/${slug}`
        : `/course/${level}/${section}${resourceType ? `/${resourceType}` : ""}`
      : undefined;
  const courseLessonCard = href
    ? (getCourseLessonCard(href) ?? getCourseSyllabusLessonCard(href))
    : undefined;
  const lesson = getCourseLesson({ level, slug: lessonSlug });
  const lessonCard = useMemo(
    () =>
      courseLessonCard
        ? {
            index: href
              ? (getCourseSyllabusLessonIndex(href) ??
                getCourseLessonIndex(href))
              : undefined,
            label: courseLessonCard.label,
            objective: courseLessonCard.objective,
            usefulLanguage: courseLessonCard.usefulLanguage,
            vocabulary: courseLessonCard.vocabulary,
            pronunciation: courseLessonCard.pronunciation,
            finalTask: courseLessonCard.finalTask,
            href: courseLessonCard.materialHref ?? courseLessonCard.href,
            assignmentHref: courseLessonCard.assignmentHref,
            classroom: courseLessonCard.classroom,
          }
        : undefined,
    [courseLessonCard, href],
  );
  if (resolvedResourceType === "assignment" && lessonCard) {
    return <Assignment lessonCard={lessonCard} />;
  }

  if (!lesson) {
    return <h1>Lesson not found.</h1>;
  }

  return (
    <Course lesson={lesson} lessonCard={lessonCard} levelTitle={levelTitle} />
  );
}
