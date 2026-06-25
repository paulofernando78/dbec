import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/misc/ted-ed";

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
