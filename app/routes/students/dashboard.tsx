import { useParams } from "react-router";
import { students, type StudentId } from "@/data/students";

import { Whiteboard } from "@/components/content/Whiteboard";
import { ImportantNotes } from "@/components/content/ImporantNotes";
import { Calendar } from "@/components/content/Calendar";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";

import { LessonCard } from "@/components/content/LessonCard";
import { courseSyllabusSections } from "@/data/course/course-syllabus-sections";
import { authenticContentNewsLessonsCardData } from "@/data/authentic-content/news/news-card-data";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";

import { LibraryBig, BookText } from "lucide-react";

const lessonSections = [
  ...courseSyllabusSections.map((level, index) => ({
    label: level.label,
    tocTitle: index === 0 ? "COURSE" : undefined,
    iconClassName: level.iconClassName,
    numbered: true,
    lessons: level.groups.flatMap((group) => group.lessons),
  })),
  {
    label: "News",
    tocTitle: "AUTHENTIC CONTENT",
    iconClassName: undefined,
    numbered: false,
    lessons: Object.values(authenticContentNewsLessonsCardData),
  },
  {
    label: "TED-Ed",
    iconClassName: undefined,
    numbered: false,
    lessons: authenticContentTedEdLessons,
  },
  // {
  //   label: "Games •Sierra",
  //   lessons: gamesSierraCardData.sierra,
  // },
  {
    label: "Lucas Arts Games",
    tocTitle: "GAMES",
    iconClassName: undefined,
    numbered: false,
    lessons: Object.values(gamesLucasArtsCardData),
  },
];

export default function Dashboard() {
  const { studentId } = useParams();
  const student =
    studentId && studentId in students
      ? students[studentId as StudentId]
      : {
          name: "Student’s Name",
          schedule: "...",
          time: "...",
        };

  const storagePrefix = studentId ? `dashboard:${studentId}` : "dashbaord";

  return (
    <>
      <Whiteboard
        title="Dashboard"
        subtitle={student.name}
        date={student.schedule}
        time={student.time}
      />
      <div>
        <ImportantNotes storageKey={`${storagePrefix}:important-notes`} />
        <Calendar />
        <PageSections
          title="LIBRARY"
          headerIcon={LibraryBig}
          itemIcon={BookText}
          headerIconClassName="text-gray-400"
          itemIconClassName="text-gray-400"
        >
          {lessonSections.map((section, sectionIndex) => {
            const previousLessonCount = lessonSections
              .slice(0, sectionIndex)
              .reduce(
                (total, previousSection) =>
                  total + Object.values(previousSection.lessons).length,
                0,
              );

            return (
              <Section
                key={section.label}
                id={section.label.toLowerCase().replaceAll(" ", "-")}
                label={section.label}
                tocTitle={section.tocTitle}
                iconClassName={section.iconClassName}
              >
                {section.lessons.map((lesson, lessonIndex) => (
                  <LessonCard
                    key={lesson.href}
                    {...lesson}
                    index={previousLessonCount + lessonIndex}
                    numbered={section.numbered}
                    collapsible
                  />
                ))}
              </Section>
            );
          })}
        </PageSections>
      </div>
    </>
  );
}
