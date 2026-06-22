import { Whiteboard } from "@/components/content/Whiteboard";
import { SubSection } from "@/components/content/SubSection";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/misc/games";

export default function Dashboard() {
  return (
    <>
      <Whiteboard title="Miscellaneous" subtitle="Games" />
      {/* <SubSection label="Sierra" heading={3}>
          <LessonCard {...lessons.games.kingsQuest} />
        </SubSection> */}
      <SubSection label="Lucas Arts" heading={3}>
        <LessonCard {...lessons.games.thimbleWeedPark} />
      </SubSection>
    </>
  );
}
