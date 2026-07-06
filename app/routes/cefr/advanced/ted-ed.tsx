import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/advanced/ted-ed/ted-ed-lessons-card-data";


export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Ted-Ed" subtitle="Student Talks" />
      <LessonCard {...lessons.howWeReactDifferently} />
    </>
  );
}
