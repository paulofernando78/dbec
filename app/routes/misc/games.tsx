import { Whiteboard } from "@/components/content/Whiteboard";
import { Subsection } from "@/components/ui/Subsection";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/misc/games";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Miscellaneous" subtitle="Games" />
      {/* <SubSection label="Sierra" heading={3}>
          <LessonCard {...lessons.games.kingsQuest} />
        </SubSection> */}
      <Subsection label="Lucas Arts" heading={3} />
        <LessonCard {...lessons.games.thimbleWeedPark} />
    </>
  );
}
