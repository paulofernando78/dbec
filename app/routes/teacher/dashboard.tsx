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
  const [isLoadingStudent, setIsLoadingStudent] = useState(false);
  const [studentError, setStudentError] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const student = data?.student;

  useEffect(() => {
    fetch("/api/dashboard")
      .then((response) => response.json())
      .then((result) => setStudents(result.students ?? []));
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (!studentId) {
      setData(null);
      setIsLoadingStudent(false);
      setStudentError("");
      return;
    }

    setData(null);
    setIsLoadingStudent(true);
    setStudentError("");

    const loadStudent = async () => {
      let lastError: unknown;

      for (let attempt = 0; attempt < 2; attempt += 1) {
        try {
          const response = await fetch(
            `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
          );
          if (!response.ok) throw new Error(`Dashboard HTTP ${response.status}`);

          const result = await response.json();
          if (cancelled) return;

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
          setIsLoadingStudent(false);
          return;
        } catch (error) {
          lastError = error;
          if (attempt === 0) {
            await new Promise((resolve) => setTimeout(resolve, 500));
          }
        }
      }

      if (!cancelled) {
        console.error(lastError);
        setIsLoadingStudent(false);
        setStudentError("Não foi possível carregar o aluno.");
      }
    };

    void loadStudent();

    return () => {
      cancelled = true;
    };
  }, [studentId, reloadKey]);

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

      {isLoadingStudent && studentId && (
        <p className="text-gray-500">Carregando aluno…</p>
      )}

      {studentError && studentId && (
        <div className="flex items-center gap-3">
          <p className="text-red-600">{studentError}</p>
          <button
            type="button"
            onClick={() => setReloadKey((current) => current + 1)}
            className="rounded bg-gray-900 px-3 py-1 text-sm font-semibold text-white"
          >
            Tentar novamente
          </button>
        </div>
      )}

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
