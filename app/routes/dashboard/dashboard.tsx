import { Whiteboard } from "@/components/content/Whiteboard";
import { ImportantNotes } from "@/components/content/ImporantNotes";
import { LessonDateCard } from "../../components/content/LessonDateCard/LessonDateCard";
import { Ribbon } from "@/components/ui/Ribbon";
import { LessonCard } from "@/components/content/LessonCard";

import { lessons as beginnerLessons } from "@/data/cefr/beginner/beginner-lessons-card-data";
import { lessons as elementaryLessons } from "@/data/cefr/elementary/elementary-lessons-card-data";
import { lessons as intermediateLessons } from "@/data/cefr/intermediate/intermediate-lessons-card-data";
import { lessons as upperIntermediateLessons } from "@/data/cefr/upper-intermediate/upperIntermedate-lessons-car-data";
import { lessons as advancedLessons } from "@/data/cefr/advanced/advanced-lessons-car-data";
import { lessons as advancedNewsLessons } from "@/data/cefr/advanced/news/news-lessons-card-data";
import { lessons as advancedTedEdLessons } from "@/data/cefr/advanced/ted-ed/ted-ed-lessons-card-data";

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
  return (
    <>
      <Whiteboard
        title="Dashboard"
        subtitle="Student's Name"
        description=""
        date="Mon / Wed"
        time="10-11"
      />
      <div>
        <ImportantNotes />
        <LessonDateCard />
        {lessonSections.map((section) => (
          <section key={section.label}>
            <Ribbon label={section.label} />
            {Object.values(section.lessons).map((lesson) => (
              <LessonCard key={lesson.href ?? lesson.link} {...lesson} />
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
