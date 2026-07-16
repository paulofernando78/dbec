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
