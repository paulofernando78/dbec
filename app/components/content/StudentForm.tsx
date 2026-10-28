import { useEffect, useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/Button";

type StudentPlan = "free" | "plus";

type StudentFormProps = {
  students: Student[];
  selectedStudentId: string;
  onStudentSelect: (studentId: string) => void;
  onStudentSaved: () => void | Promise<void>;
};

type Student = {
  studentId: string;
  username: string;
  name: string;
  schedule: string;
  time: string;
  plan: StudentPlan;
};

type StudentFormState = {
  name: string;
  username: string;
  password: string;
  schedule: string;
  time: string;
  plan: StudentPlan;
};

const scheduleOptions = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Mon / Wed",
  "Tue / Fri",
  "Tue / Thu",
  "Wed / Fri",
  "Mon / Wed / Fri",
];

const timeOptions = [
  "06:00 - 07:00",
  "06:30 - 07:30",
  "07:00 - 08:00",
  "07:30 - 08:30",
  "08:00 - 09:00",
  "08:30 - 09:30",
  "09:00 - 10:00",
  "09:30 - 10:30",
  "10:00 - 11:00",
  "10:30 - 11:30",
  "12:00 - 13:00",
  "12:30 - 13:30",
  "13:00 - 14:00",
  "13:30 - 14:30",
  "14:00 - 15:00",
  "14:30 - 15:30",
  "15:00 - 16:00",
  "15:30 - 16:30",
  "16:00 - 17:00",
  "16:30 - 17:30",
  "17:00 - 18:00",
  "17:30 - 18:30",
  "18:00 - 19:00",
  "18:30 - 19:30",
  "19:00 - 20:00",
  "19:30 - 20:30",
  "20:00 - 21:00",
  "20:30 - 21:30",
  "21:30 - 22:30",
];

const initialForm: StudentFormState = {
  name: "",
  username: "",
  password: "",
  schedule: "",
  time: "",
  plan: "free",
};

export const StudentForm = ({
  students,
  selectedStudentId,
  onStudentSelect,
  onStudentSaved,
}: StudentFormProps) => {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const isEditing = Boolean(selectedStudentId);
  const selectedStudent = students.find(
    (student) => student.studentId === selectedStudentId,
  );

  useEffect(() => {
    const student = students.find(
      (currentStudent) => currentStudent.studentId === selectedStudentId,
    );

    setForm(
      student
        ? {
            name: student.name,
            username: student.username,
            password: "",
            schedule: student.schedule,
            time: student.time,
            plan: student.plan,
          }
        : initialForm,
    );
  }, [selectedStudentId, students]);

  useEffect(() => {
    const username = form.username.trim().toLowerCase();

    if (!username) return;

    const timeout = window.setTimeout(() => {
      const existingStudent = students.find(
        (student) => student.username.trim().toLowerCase() === username,
      );

      if (
        existingStudent &&
        existingStudent.studentId !== selectedStudentId
      ) {
        setMessage("");
        setError("");
        onStudentSelect(existingStudent.studentId);
      }
    }, 400);

    return () => window.clearTimeout(timeout);
  }, [form.username, onStudentSelect, selectedStudentId, students]);

  const handleStudentSelection = (studentId: string) => {
    setMessage("");
    setError("");
    onStudentSelect(studentId);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setMessage("");
    setIsSaving(true);

    try {
      const response = await fetch("/api/students", {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          studentId: selectedStudentId,
        }),
      });

      const contentType = response.headers.get("content-type") ?? "";

      if (!contentType.includes("application/json")) {
        throw new Error("A API de estudantes retornou uma resposta inválida.");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Could not save the student.");
      }

      await onStudentSaved();
      setMessage(isEditing ? "Student updated." : "Student created.");

      if (!isEditing) {
        onStudentSelect(result.student.studentId);
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Could not save the student.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="grid grid-cols-1 gap-4 min-[830px]:grid-cols-[minmax(240px,auto)_minmax(0,1fr)]"
    >
      <div className="grid gap-4 rounded-xl bg-(--background) p-4">
        {/* Name */}
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Name</span>
          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                name: event.target.value,
              }))
            }
            required
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          />
        </label>

        <div className="grid grid-cols-2 gap-4 max-[950px]:grid-cols-1">
          {/* Username */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Username</span>
            <input
              type="text"
              value={form.username}
              onChange={(event) => {
                setMessage("");
                setError("");
                setForm((current) => ({
                  ...current,
                  username: event.target.value,
                }));
              }}
              required
              autoComplete="username"
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
            />
          </label>

          {/* Password */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Password</span>
            <input
              type="password"
              name="student-password"
              value={form.password}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
              required={!isEditing}
              minLength={8}
              autoComplete="off"
              className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[950px]:grid-cols-1">
          {/* Schedule */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Schedule</span>

            <div className="relative min-w-0">
              <select
                value={form.schedule}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    schedule: event.target.value,
                  }))
                }
                required
                className="w-full min-w-0 appearance-none rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-3"
              >
                <option value="">...</option>

                {scheduleOptions.map((schedule) => (
                  <option key={schedule} value={schedule}>
                    {schedule}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-500" />
            </div>
          </label>

          {/* Time */}
          <label className="grid min-w-0 gap-1">
            <span className="text-sm font-semibold">Time</span>

            <div className="relative min-w-0">
              <select
                value={form.time}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    time: event.target.value,
                  }))
                }
                required
                className="w-full min-w-0 appearance-none rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-3"
              >
                <option value="">...</option>

                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-500" />
            </div>
          </label>
        </div>

        {error && (
          <p role="alert" className="text-sm font-semibold text-red-600">
            {error}
          </p>
        )}

        {message && (
          <p role="status" className="text-sm font-semibold text-green-700">
            {message}
          </p>
        )}

        {selectedStudent && (
          <div
            role="status"
            className="flex items-center justify-between gap-4 rounded-lg border border-amber-300 bg-amber-50 p-3 max-[950px]:items-start max-[950px]:flex-col"
          >
            <div>
              <p className="text-sm font-bold text-amber-950">
                Existing student found — editing {selectedStudent.name}.
              </p>
              <p className="text-xs text-amber-800">
                Leave the password blank to keep the current password.
              </p>
            </div>

            <Button
              type="button"
              onClick={() => handleStudentSelection("")}
              className="shrink-0!"
            >
              Cancel editing
            </Button>
          </div>
        )}

        <div>
          <Button
            type="submit"
            disabled={isSaving}
            className="w-full!"
          >
            {isSaving
              ? isEditing
                ? "Updating student..."
                : "Adding student..."
              : isEditing
                ? "Update student"
                : "Add student"}
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-(--background) p-4 min-[830px]:order-first">
        <div className="space-y-4">
          <span className="block text-sm font-semibold">Students</span>

          {students.map((student) => {
            const isSelected = selectedStudentId === student.studentId;

            return (
              <button
                key={student.studentId}
                type="button"
                onClick={() => handleStudentSelection(student.studentId)}
                className={`
                      flex w-full items-center gap-3 rounded-xl p-2 text-left
                      transition-colors hover:bg-(--surface)
                      ${isSelected ? "bg-(--surface)" : ""}
                    `}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-yellow-200 font-bold">
                  {student.name.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {student.name}
                  </p>

                  <p className="truncate text-xs font-normal text-gray-500">
                    {student.schedule} · {student.time}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
};
