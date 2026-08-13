import { lesson as courseTemplate } from "@/data/course/template";
import { Course } from "./builder";

export default function CourseTemplate() {
  return <Course lesson={courseTemplate} />;
}
