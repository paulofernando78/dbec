import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/cefr/advanced/ted-ed/ted-ed";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Ted-Ed" subtitle="Student Talks" />
      <LessonCard {...lessons.whatCausesConstipation} />
      <LessonCard {...lessons.whenWillNextIceAgeHappen} />
      <LessonCard {...lessons.ancientOriginsBeer} />
      <LessonCard {...lessons.howMemoryWorks} />
    </>
  );
}
