import { LibraryPage } from "@/components/content/LibraryPage";
import { courseSyllabusSections } from "@/data/course/course-syllabus-sections";
import {
  BookMarked as CourseBook,
  LibraryBig as CourseIcon,
} from "lucide-react";

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
