import { Whiteboard } from "@/components/content/Whiteboard";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/dashboard/lessonCardData";

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="Course"
        subtitle="A2 Elementary"
        descriptions={["..."]}
      />
      <div>
            <LessonCard {...lessons.elementary.unitOne} />
            <LessonCard {...lessons.elementary.unitTwo} />
            <LessonCard {...lessons.elementary.unitThree} />
            <LessonCard {...lessons.elementary.unitFour} />
            <LessonCard {...lessons.elementary.unitFive} />
            <LessonCard {...lessons.elementary.unitSix} />
            <LessonCard {...lessons.elementary.unitSeven} />
            <LessonCard {...lessons.elementary.unitEight} />
            <LessonCard {...lessons.elementary.unitNine} />
            <LessonCard {...lessons.elementary.unitTen} />
      </div>
    </>
  );
}
