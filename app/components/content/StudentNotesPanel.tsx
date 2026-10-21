import { useEffect, useState } from "react";
import { LoaderCircle, NotebookPen, X } from "lucide-react";
import { useLocation } from "react-router";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TextArea } from "@/components/ui/TextArea";
import { useNotesRealtime } from "@/hooks/useNotesRealtime";

type Session = {
  role: "teacher" | "student";
  studentId?: string;
};

type Notes = {
  teacher: string;
  student: string;
};

const emptyNotes: Notes = { teacher: "", student: "" };

export function StudentNotesPanel() {
  const location = useLocation();
  const [session, setSession] = useState<Session | null>(null);
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [notes, setNotes] = useState<Notes>(emptyNotes);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/teacher/dashboard");

  const { connectionState, sendNote } = useNotesRealtime(
    studentId,
    session?.role,
    (noteType, content) => {
      setNotes((current) => ({ ...current, [noteType]: content }));
    },
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/session", { headers: { Accept: "application/json" } })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as Session;
      })
      .then((nextSession) => {
        if (cancelled) return;

        setSession(nextSession);
        setStudentId(
          nextSession?.role === "student"
            ? nextSession.studentId ?? ""
            : localStorage.getItem("dbec_selected_student_id") ?? "",
        );
      })
      .catch(() => {
        if (!cancelled) setSession(null);
      });

    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  const loadNotes = async () => {
    if (!studentId) {
      setError("Select a student in the Teacher's Dashboard first.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
        { headers: { Accept: "application/json" } },
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Não foi possível carregar as notas.");
      }

      setNotes(result.notes ?? emptyNotes);
      setStudentName(result.student?.name ?? "");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Não foi possível carregar as notas.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const togglePanel = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    if (nextOpen) void loadNotes();
  };

  const saveNote = async (noteType: "teacher" | "student") => {
    if (!studentId || session?.role !== noteType) return;

    const response = await fetch("/api/notes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentId,
        noteType,
        content: notes[noteType],
      }),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      setError(result?.error ?? "Não foi possível salvar a nota.");
    }
  };

  if (!session || isDashboard) return null;

  return (
    <div className="sticky top-o z-40 ml-auto flex h-0 w-fit flex-col items-end">
      <Button
        ariaLabel={isOpen ? "Close student notes" : "Open student notes"}
        pressed={isOpen}
        onClick={togglePanel}
        icon={isOpen ? <X /> : <NotebookPen />}
        className="h-12! w-fit! px-3!"
      >
      </Button>

      {isOpen && (
        <div className="mt-3 w-full rounded-xl bg-(--background) p-3 shadow-2xl ring-1 ring-slate-300">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-black">Student notes</h2>
              {studentName && (
                <p className="text-sm text-slate-500">{studentName}</p>
              )}
              <p className="text-xs text-slate-400">
                {connectionState === "connected" ? "Live" : "Reconnecting…"}
              </p>
            </div>
            {isLoading && <LoaderCircle className="animate-spin text-slate-400" />}
          </div>

          {error && <p className="mb-3 text-sm font-semibold text-red-600">{error}</p>}

          {studentId && (
            <div className="grid grid-cols-2 gap-3 max-[650px]:grid-cols-1">
              <Card title="Teacher's Notes" className="bg-[var(--background)]">
                <TextArea
                  rows={8}
                  value={notes.teacher}
                  readOnly={session.role !== "teacher"}
                  onChange={(event) => {
                    const content = event.target.value;
                    setNotes((current) => ({ ...current, teacher: content }));
                    sendNote("teacher", content);
                  }}
                  onBlur={() => void saveNote("teacher")}
                />
              </Card>

              <Card title="Student's Notes" className="bg-[var(--background)]">
                <TextArea
                  rows={8}
                  value={notes.student}
                  readOnly={session.role !== "student"}
                  onChange={(event) => {
                    const content = event.target.value;
                    setNotes((current) => ({ ...current, student: content }));
                    sendNote("student", content);
                  }}
                  onBlur={() => void saveNote("student")}
                />
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
