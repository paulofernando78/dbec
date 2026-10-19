import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { DashboardNotes } from "@/components/content/DashboardNotes";
import { Calendar } from "@/components/content/Calendar";
import { PageHeader } from "@/components/content/PageHeader";
import Emojis from "@/features/Emojis/Emojis";

export default function Dashboard() {
  const { studentId } = useParams();
  const [data, setData] = useState<any>(null);
  const [notes, setNotes] = useState({ teacher: "", student: "" });
  const [calendar, setCalendar] = useState<Record<string, string>>({});
  const [error, setError] = useState("");

  useEffect(() => {
    if (!studentId) {
      setData(null);
      setError("");
      return;
    }

    setData(null);
    setError("");

    fetch(`/api/dashboard?studentId=${encodeURIComponent(studentId)}`)
      .then(async (response) => {
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error ?? "Não foi possível carregar o dashboard.");
        }

        return result;
      })
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
      })
      .catch((requestError: unknown) => {
        setError(
          requestError instanceof Error
            ? requestError.message
            : "Não foi possível carregar o dashboard.",
        );
      });
  }, [studentId]);

  const saveStudentNote = () =>
    fetch("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        noteType: "student",
        content: notes.student,
      }),
    });

  const now = new Date();
  const currentHour = now.getHours();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
        ? "Good afternoon"
        : "Good evening";
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(now);

  if (!studentId) {
    return (
      <>
        <PageHeader
          eyebrow={formattedDate}
          title="Welcome!"
          variant="dashboard"
        />
        <div className="grid gap-4">
          <Emojis />
        </div>
      </>
    );
  }

  const student = data?.student;
  if (error) return <p className="font-semibold text-red-600">{error}</p>;
  if (!student) return <p>Loading dashboard…</p>;

  const firstName = student.name.split(" ")[0];

  return (
    <>
      <PageHeader
        eyebrow={formattedDate}
        title={`${greeting}, ${firstName}.`}
        date={student.schedule}
        time={student.time}
        variant="dashboard"
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
            onChange={(value) =>
              setNotes((current) => ({ ...current, student: value }))
            }
            onSave={saveStudentNote}
          />
        </div>
        <Calendar statuses={calendar} readOnly />
      </div>
    </>
  );
}
