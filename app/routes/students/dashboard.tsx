import { useParams } from "react-router";
import { students, type StudentId } from "@/data/students";

import { Whiteboard } from "@/components/content/Whiteboard";
import { DashboardNotes } from "@/components/content/DashboardNotes";
import { Calendar } from "@/components/content/Calendar";
import Emojis from "@/features/Emojis/Emojis";

export default function Dashboard() {
  const { studentId } = useParams();
  const student =
    studentId && studentId in students
      ? students[studentId as StudentId]
      : {
          name: "Student’s Name",
          schedule: "...",
          time: "...",
        };

  const storagePrefix = studentId ? `dashboard:${studentId}` : "dashboard";

  return (
    <>
      <Whiteboard
        title="Dashboard"
        subtitle={student.name}
        date={student.schedule}
        time={student.time}
      />
      <div className="grid gap-4">
        
        <Emojis />
        <div className="flex gap-4 justify-between max-[800px]:flex-col">
          <DashboardNotes
            title="Teacher's Notes"
            storageKey={`${storagePrefix}:teacher-notes`}
          />
          <DashboardNotes
            title="Student's Notes"
            storageKey={`${storagePrefix}:student-notes`}
          />
        </div>
        <Calendar key={storagePrefix} storagePrefix={storagePrefix} />
      </div>
    </>
  );
}
