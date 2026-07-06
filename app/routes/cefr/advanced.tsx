import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/advanced-lessons-car-data";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Course" subtitle="C1 Advanced" />
      <div>
        <LessonCard {...lessons.unitOne} />
      </div>
    </>
  );
}
