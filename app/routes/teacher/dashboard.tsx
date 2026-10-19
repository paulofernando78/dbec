import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { DashboardNotes } from "@/components/content/DashboardNotes";
import { Calendar } from "@/components/content/Calendar";
import { PageHeader } from "@/components/content/PageHeader";
import { StudentForm } from "@/components/content/StudentForm";
import { Card } from "@/components/ui/Card";

import { students as developmentStudents } from "@/data/students";

const localStudents = Object.entries(developmentStudents).map(
  ([studentId, student]) => ({
    studentId,
    username: studentId.split("-")[0],
    name: student.name,
    schedule: student.schedule,
    time: student.time,
    plan: "free" as const,
  }),
);

function getLocalStudent(studentId: string) {
  const student =
    developmentStudents[studentId as keyof typeof developmentStudents];

  if (!student) return null;

  return {
    student: {
      studentId,
      name: student.name,
      schedule: student.schedule,
      time: student.time,
      plan: "free" as const,
    },
    notes: { teacher: "", student: "" },
    calendar: [] as Array<{ date: string; status: string }>,
  };
}

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

  const loadStudents = async () => {
    try {
      const response = await fetch("/api/students");

      if (!response.ok) {
        throw new Error(`Students HTTP ${response.status}`);
      }

      const result = await response.json();
      setStudents(result.students ?? []);
    } catch (error) {
      if (import.meta.env.DEV) {
        setStudents(localStudents);
        return;
      }

      console.error(error);
    }
  };

  useEffect(() => {
    void loadStudents();
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
          if (!response.ok)
            throw new Error(`Dashboard HTTP ${response.status}`);

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

          if (import.meta.env.DEV) {
            const localData = getLocalStudent(studentId);
            if (localData && !cancelled) {
              setData(localData);
              setNotes(localData.notes);
              setCalendar(
                Object.fromEntries(
                  localData.calendar.map((entry) => [entry.date, entry.status]),
                ),
              );
              setIsLoadingStudent(false);
              return;
            }
          }

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
      <PageHeader title="Teacher's Dashboard" />

      <div className="grid gap-4">
        <Card title="Student Registration">
          <StudentForm
            students={students}
            selectedStudentId={studentId ?? ""}
            onStudentSelect={handleStudentChange}
            onStudentSaved={loadStudents}
          />
        </Card>
  
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
            <div className="flex justify-between gap-4 max-[900px]:flex-col max-[900px]:gap-4">
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
      </div>
    </>
  );
}
