import { useEffect, useState, type FormEvent } from "react";

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
      className="grid grid-cols-1 gap-4 min-[830px]:grid-cols-[auto_1fr]"
    >
      <div className="overflow-x-auto border-b border-gray-200 pb-4 min-[830px]:border-r min-[830px]:border-b-0 min-[830px]:pr-4">
          <div className="m-[0.1rem] space-y-4">
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
                      transition-colors hover:bg-gray-100
                      ${isSelected ? "bg-gray-100 ring-1 ring-gray-300" : ""}
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

      <div className="grid gap-4">
        <Button
          type="button"
          onClick={() => handleStudentSelection("")}
          className="w-full!"
        >
          Add student
        </Button>

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

        {/* Username */}
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Username</span>
          <input
            type="text"
            value={form.username}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                username: event.target.value,
              }))
            }
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

        {/* Schedule */}
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Schedule</span>

          <select
            value={form.schedule}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                schedule: event.target.value,
              }))
            }
            required
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          >
            <option value="">Select the days</option>

            {scheduleOptions.map((schedule) => (
              <option key={schedule} value={schedule}>
                {schedule}
              </option>
            ))}
          </select>
        </label>

        {/* Time */}
        <label className="grid min-w-0 gap-1">
          <span className="text-sm font-semibold">Time</span>

          <select
            value={form.time}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                time: event.target.value,
              }))
            }
            required
            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2"
          >
            <option value="">Select the time</option>

            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>

        {/* Plan */}
        <div className="flex items-center justify-between gap-4 rounded-lg px-4 py-3">
          <div>
            <p className="font-semibold">Student plan</p>
            <p className="text-xs text-gray-500">
              {form.plan === "plus" ? "Plus plan" : "Free plan"}
            </p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={form.plan === "plus"}
            aria-label="Enable Plus plan"
            onClick={() =>
              setForm((current) => ({
                ...current,
                plan: current.plan === "plus" ? "free" : "plus",
              }))
            }
            className={`relative h-7 w-12 shrink-0 cursor-pointer rounded-full transition-colors ${
              form.plan === "plus" ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 size-5 rounded-full bg-white shadow-sm transition-transform ${
                form.plan === "plus" ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
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

        <Button type="submit" disabled={isSaving} className="w-full! mb-2">
          {isSaving ? "Saving..." : isEditing ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};
