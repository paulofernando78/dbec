import { courseTemplate } from "@/data/course/course-template";
import { Course } from "./builder";

export default function CourseTemplate() {
  return <Course lesson={courseTemplate} />;
}
