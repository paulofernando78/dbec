import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { SubSection } from "@/components/content/SubSection";
import { LessonCard } from "@/components/content/LessonCard/LessonCard";

import { lessons } from "@/data/dashboard/lessonCardData";

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="Dashboard"
        subtitle="Student's Name"
        descriptions={["..."]}
      />
      <div >
          <p>Notes</p>
          <textarea name="" id="" className="w-full h-20 p-2 overflow-auto bg-white border rounded-lg"></textarea>
          <p>Dates</p>
      </div>
    </>
  );
}
