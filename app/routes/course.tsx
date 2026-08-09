import { LibraryPage } from "@/components/content/LibraryPage";
import { courseLessonsCardData } from "@/data/course/course-lessons-card-data";

const courseSections = [
  {
    label: "A1 Beginner",
    iconClassName: "text-yellow-500",
    lessons: courseLessonsCardData.beginner,
  },
  {
    label: "A2 Elementary",
    iconClassName: "text-red-500",
    lessons: courseLessonsCardData.elementary,
  },
  {
    label: "B1 Intermediate",
    iconClassName: "text-blue-500",
    lessons: courseLessonsCardData.intermediate,
  },
  {
    label: "B2 Upper-Intermediate",
    iconClassName: "text-green-500",
    lessons: courseLessonsCardData.upperIntermediate,
  },
];

export default function Course() {
  return <LibraryPage title="COURSE" sections={courseSections} />;
}
