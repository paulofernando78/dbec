import { Whiteboard } from "@/components/content/Whiteboard";
import { Ribbon } from "@/components/ui/Ribbon";
import { LessonDateCard } from "./LessonDateCard/LessonDateCard";
import { TextArea } from "@/components/ui/TextArea";

export default function Dashboard() {
  return (
    <>
      <Whiteboard
        title="Dashboard"
        subtitle="Student's Name"
        descriptions={["..."]}
      />
      <div >
        <span className="block mb-4 font-bold">Underconstruction!</span>
        <Ribbon label="Important Notes"/>
        <TextArea />
        <Ribbon label="Dates"/>
        <LessonDateCard />
      </div>
    </>
  );
}
