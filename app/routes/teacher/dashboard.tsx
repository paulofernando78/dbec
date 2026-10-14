import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Whiteboard } from "@/components/content/Whiteboard";
import { DashboardNotes } from "@/components/content/DashboardNotes";
import { Calendar } from "@/components/content/Calendar";
import Emojis from "@/features/Emojis/Emojis";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [students, setStudents] = useState<any[]>([]);
  const [data, setData] = useState<any>(null);
  const [notes, setNotes] = useState({ teacher: "", student: "" });
  const [calendar, setCalendar] = useState<Record<string, string>>({});
  const student = data?.student;

  useEffect(() => {
    fetch("/api/dashboard")
      .then((response) => response.json())
      .then((result) => setStudents(result.students ?? []));
  }, []);

  useEffect(() => {
    if (!studentId) {
      setData(null);
      return;
    }
    fetch(`/api/dashboard?studentId=${encodeURIComponent(studentId)}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setNotes(result.notes ?? { teacher: "", student: "" });
        setCalendar(
          Object.fromEntries(
            (result.calendar ?? []).map((entry: any) => [
              entry.lessonDate,
              entry.status,
            ]),
          ),
        );
      });
  }, [studentId]);

  const saveTeacherNote = () =>
    fetch("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        noteType: "teacher",
        content: notes.teacher,
      }),
    });

  const saveCalendar = (lessonDate: string, status: string) => {
    setCalendar((current) => ({ ...current, [lessonDate]: status }));
    void fetch("/api/calendar", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId, lessonDate, status }),
    });
  };

  const handleStudentChange = (nextStudentId: string) => {
    navigate(
      nextStudentId
        ? `/teacher/dashboard/${nextStudentId}`
        : "/teacher/dashboard",
    );
  };

  return (
    <>
      <Whiteboard
        title="Teacher's Dashboard"
        subtitle={student?.name}
        date={student?.schedule}
        time={student?.time}
        compactTitle={!student}
      />

      <div className="mb-4">
        <label htmlFor="teacher-student"></label>
        <select
          id="teacher-student"
          value={studentId ?? ""}
          onChange={(event) => handleStudentChange(event.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-1 py-2 md:max-w-sm"
        >
          <option value="">Select a student</option>
          {students.map((currentStudent) => (
            <option
              key={currentStudent.studentId}
              value={currentStudent.studentId}
            >
              {currentStudent.name}
            </option>
          ))}
        </select>
      </div>

      {student && studentId ? (
        <div className="grid gap-4">
          <Emojis />

          <div className="flex justify-between gap-4 max-[800px]:flex-col max-[800px]:gap-0">
            <DashboardNotes
              title="Teacher's Notes"
              value={notes.teacher}
              onChange={(value) =>
                setNotes((current) => ({ ...current, teacher: value }))
              }
              onSave={saveTeacherNote}
            />
            <DashboardNotes
              title="Student's Notes"
              value={notes.student}
              readOnly
              onChange={() => {}}
              onSave={() => {}}
            />
          </div>

          <Calendar statuses={calendar} onStatusChange={saveCalendar} />
        </div>
      ) : null}
    </>
  );
}
