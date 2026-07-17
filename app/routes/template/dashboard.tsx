import { useEffect, useState } from "react";

import { Whiteboard } from "@/components/content/Whiteboard";
import { ImportantNotes } from "@/components/content/ImporantNotes";
import { Calendar } from "@/components/content/Calendar";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { LessonCard } from "@/components/content/LessonCard";

import { lucasArtsGames } from "@/data/games/games-card";

import { cefrLessonsCardData } from "@/data/cefr/cefr-lessons-card-data";

import { useParams } from "react-router";
import { students, type StudentId } from "@/data/students";

import { SquareCheckBig } from "lucide-react";

const lessonSections = [
  {
    label: "A1 Beginner",
    lessons: cefrLessonsCardData.beginner,
  },
  {
    label: "A2 Elementary",
    lessons: cefrLessonsCardData.elementary,
  },
  {
    label: "B1 Intermediate",
    lessons: cefrLessonsCardData.intermediate,
  },
  {
    label: "B2 Upper-Intermediate",
    lessons: cefrLessonsCardData.upperIntermediate,
  },
  {
    label: "C1 Advanced",
    lessons: cefrLessonsCardData.advanced,
  },
  // {
  //   label: "C1-C2 News",
  //   lessons: cefrLessonsCardData.advancedNewsLessons,
  // },
  // {
  //   label: "C1-C2 Ted-ED",
  //   lessons: cefrLessonsCardData.advancedTedEdLessons,
  // },
  // {
  //   label: "Lucas Arts Games",
  //   lessons: lucasArtsGames,
  // },
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

  const [completedLessons, setCompletedLessons] = useState(0);

  const updateProgress = () => {
    const total = Object.keys(localStorage).filter(
      (key) =>
        key.startsWith("lesson-completed:") &&
        localStorage.getItem(key) === "true",
    ).length;

    setCompletedLessons(total);
  };

  const totalLessons = lessonSections
    .slice(
      0,
      lessonSections.findIndex((section) => section.label === "C1 Advanced") +
        1,
    )
    .reduce(
      (total, section) => total + Object.values(section.lessons).length,
      0,
    );

  useEffect(() => {
    updateProgress();
  }, []);

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
        <div className="flex items-center gap-2 w-max mt-5 mb-4 px-2 pt-[.4rem] pb-[.3rem] border border-gray-300 rounded-lg">
          <SquareCheckBig size={20} className="text-gray-400" />
          <span>
            <b>A1-C1 Progress:</b> {completedLessons} / {totalLessons}
          </span>
        </div>
        <PageSections>
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
              >
                {section.lessons.map((lesson, lessonIndex) => (
                  <LessonCard
                    key={lesson.href}
                    index={previousLessonCount + lessonIndex}
                    {...lesson}
                    updateProgress={updateProgress}
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
