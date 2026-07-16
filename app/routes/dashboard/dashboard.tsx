import { useEffect, useState } from "react";

import { Whiteboard } from "@/components/content/Whiteboard";
import { ImportantNotes } from "@/components/content/ImporantNotes";
import { Calendar } from "@/components/content/Calendar";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/ui/Section";
import { LessonCard } from "@/components/content/LessonCard";

import { lessons as beginnerLessons } from "@/data/cefr/beginner/beginner-lessons-card-data";
import { lessons as elementaryLessons } from "@/data/cefr/elementary/elementary-lessons-card-data";
import { lessons as intermediateLessons } from "@/data/cefr/intermediate/intermediate-lessons-card-data";
import { lessons as upperIntermediateLessons } from "@/data/cefr/upper-intermediate/upperIntermedate-lessons-car-data";
import { lessons as advancedLessons } from "@/data/cefr/advanced/advanced-lessons-car-data";
import { lessons as advancedNewsLessons } from "@/data/cefr/advanced/news/news-lessons-card-data";
import { lessons as advancedTedEdLessons } from "@/data/cefr/advanced/ted-ed/ted-ed-lessons-card-data";

import { useParams } from "react-router";
import { students, type StudentId } from "@/data/students";

import { SquareCheckBig } from "lucide-react";

const lessonSections = [
  {
    label: "A1 Beginner",
    lessons: beginnerLessons,
  },
  {
    label: "A2 Elementary",
    lessons: elementaryLessons,
  },
  {
    label: "B1 Intermediate",
    lessons: intermediateLessons,
  },
  {
    label: "B2 Upper-Intermediate",
    lessons: upperIntermediateLessons,
  },
  {
    label: "C1 Advanced",
    lessons: advancedLessons,
  },
  {
    label: "C1-C2 News",
    lessons: advancedNewsLessons,
  },
  {
    label: "C1-C2 Ted-ED",
    lessons: advancedTedEdLessons,
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
          <span><b>A1-C1 Progress:</b> {completedLessons} / {totalLessons}</span>
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
                {Object.values(section.lessons).map((lesson, lessonIndex) => (
                  <LessonCard
                    key={lesson.href ?? lesson.link}
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
