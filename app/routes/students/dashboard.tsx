import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";
import { DashboardNotes } from "@/components/content/DashboardNotes";
import { Calendar } from "@/components/content/Calendar";
import Emojis from "@/features/Emojis/Emojis";

export default function Dashboard() {
  const { studentId } = useParams();
  const [data, setData] = useState<any>(null);
  const [notes, setNotes] = useState({ teacher: "", student: "" });
  const [calendar, setCalendar] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/dashboard")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setNotes(result.notes ?? { teacher: "", student: "" });
        setCalendar(Object.fromEntries((result.calendar ?? []).map((entry: any) => [entry.lessonDate, entry.status])));
      });
  }, [studentId]);

  const saveStudentNote = () => fetch("/api/notes", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ studentId, noteType: "student", content: notes.student }),
  });

  const student = data?.student;
  if (!student) return <p>Loading dashboard…</p>;

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
            value={notes.teacher}
            readOnly
            onChange={() => {}}
            onSave={() => {}}
          />
          <DashboardNotes
            title="Student's Notes"
            value={notes.student}
            onChange={(value) => setNotes((current) => ({ ...current, student: value }))}
            onSave={saveStudentNote}
          />
        </div>
        <Calendar statuses={calendar} readOnly />
      </div>
    </>
  );
}
