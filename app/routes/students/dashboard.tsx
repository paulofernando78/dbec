import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { students, type StudentId } from "@/data/students";

import { Whiteboard } from "@/components/content/Whiteboard";
import { ImportantNotes } from "@/components/content/ImporantNotes";
import { Calendar } from "@/components/content/Calendar";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";


import { LessonCard } from "@/components/content/LessonCard";
import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";
import { authenticContentNewsLessonsCardData } from "@/data/authentic-content/news/news-card-data";
import { authenticContentTedEdLessonsCardData } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";
import { gamesLucasArtsCardData } from "@/data/games/lucas-arts/games-lucas-arts-card-data";


import { SquareCheckBig } from "lucide-react";

const lessonSections = [
  {
    label: "A1 Beginner",
    lessons: courseLessonsCardData.beginner,
  },
  {
    label: "A2 Elementary",
    lessons: courseLessonsCardData.elementary,
  },
  {
    label: "B1 Intermediate",
    lessons: courseLessonsCardData.intermediate,
  },
  {
    label: "B2 Upper-Intermediate",
    lessons: courseLessonsCardData.upperIntermediate,
  },
  {
    label: "C1 Advanced",
    lessons: courseLessonsCardData.advanced,
  },
  {
    label: "Authentic Content • News",
    lessons: Object.values(authenticContentNewsLessonsCardData),
  },
  {
    label: "Authentic Content • TED-Ed",
    lessons: Object.values(authenticContentTedEdLessonsCardData),
  },
  // {
  //   label: "Games •Sierra",
  //   lessons: gamesSierraCardData.sierra,
  // },
  {
    label: "Games • Lucas Arts Games",
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
