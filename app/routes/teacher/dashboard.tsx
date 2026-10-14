import { useNavigate, useParams } from "react-router";
import { students, type StudentId } from "@/data/students";

import { Whiteboard } from "@/components/content/Whiteboard";
import { DashboardNotes } from "@/components/content/DashboardNotes";
import { Calendar } from "@/components/content/Calendar";
import Emojis from "@/features/Emojis/Emojis";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const { studentId } = useParams();
  const selectedStudentId =
    studentId && studentId in students ? (studentId as StudentId) : undefined;
  const student = selectedStudentId ? students[selectedStudentId] : undefined;

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
        subtitle={student?.name ?? "Select a student"}
        date={student?.schedule}
        time={student?.time}
      />

      <div className="mb-4">
        <label
          htmlFor="teacher-student"
          className="mb-1 block text-sm font-bold"
        >
          Student
        </label>
        <select
          id="teacher-student"
          value={selectedStudentId ?? ""}
          onChange={(event) => handleStudentChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 md:max-w-sm"
        >
          <option value="">Select a student</option>
          {Object.entries(students).map(([id, currentStudent]) => (
            <option key={id} value={id}>
              {currentStudent.name}
            </option>
          ))}
        </select>
      </div>

      {student && selectedStudentId ? (
        <div className="grid gap-4">
          <Emojis />

          <div className="flex justify-between gap-4 max-[800px]:flex-col max-[800px]:gap-0">
            <DashboardNotes
              title="Teacher's Notes"
              storageKey={`dashboard:${selectedStudentId}:teacher-notes`}
            />
            <DashboardNotes
              title="Student's Notes"
              storageKey={`dashboard:${selectedStudentId}:student-notes`}
            />
          </div>

          <Calendar
            key={selectedStudentId}
            storagePrefix={`dashboard:${selectedStudentId}`}
          />
        </div>
      ) : (
        <p className="rounded-lg border border-gray-300 p-4 text-gray-600">
          Select a student to view their dashboard.
        </p>
      )}
    </>
  );
}
