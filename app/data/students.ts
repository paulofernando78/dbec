export const students = {
  "alvaro-theodoro": {
    id: "Alvaro Theodoro",
    name: "Alvaro Theodoro",
    schedule: "...",
    time: "...",
    importantNotes: [],
    calendar: [
      {
        id: crypto.randomUUID(),
        date: "2026-01-01",
        status: "...",
      },
    ],
    lessonProgress: [
      {
        lessonId: "day-1",
        completed: true,
      },
      {
        lessonId: "day-2",
        completed: false,
      },
      {
        lessonId: "day-3",
        completed: true,
      },
    ],
  },
  "gabriel-sette": {
    id: "Gabriel Sette",
    name: "Gabriel Sette",
    schedule: "Mon / Wed",
    time: "15-16",
    importantNotes: [],
    calendar: [],
  },
  "mauricio-theodoro": {
    id: "Maurício Theodoro",
    name: "Maurício Theodoro",
    schedule: "Wed / Fri",
    time: "7:30-8:30",
    importantNotes: [],
    calendar: [],
  },
  "rafael-bezerra": {
    id: "rafael-bezerra",
    name: "Rafael Bezerra",
    schedule: "Tue / Thu",
    time: "21-22",
    importantNotes: [],
    calendar: [],
  },
};

export type StudentId = keyof typeof students;
