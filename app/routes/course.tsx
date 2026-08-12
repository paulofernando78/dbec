import { LibraryPage } from "@/components/content/LibraryPage";
import { Course as CourseIcon, CourseBook } from "@/components/Icons";
import { courseSyllabusSections } from "@/data/course/course-syllabus-sections";

export default function Course() {
  return (
    <LibraryPage
      title="COURSE"
      sections={courseSyllabusSections}
      headerIcon={CourseIcon}
      itemIcon={CourseBook}
    />
  );
}
