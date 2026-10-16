type Student = {
  id: string;
  name: string;
  schedule: string;
  time: string;
  importantNotes: string[];
};

export const students = {
  "alvaro-theodoro": {
    id: "Alvaro Theodoro",
    name: "Alvaro Theodoro",
    schedule: "Tue / Fri",
    time: "15:00 - 16:00",
    importantNotes: [],
  },
  "gabriel-sette": {
    id: "Gabriel Sette",
    name: "Gabriel Sette",
    schedule: "Mon / Wed",
    time: "15:00 - 16:00",
    importantNotes: [],
  },
  "mauricio-theodoro": {
    id: "Maurício Theodoro",
    name: "Maurício Theodoro",
    schedule: "Wed / Fri",
    time: "07:30 - 08:30",
    importantNotes: [],
  },
  "rafael-bezerra": {
    id: "rafael-bezerra",
    name: "Rafael Bezerra",
    schedule: "Fri",
    time: "21:30 - 22:30",
    importantNotes: [],
  },
} satisfies Record<string, Student>;

export type StudentId = keyof typeof students;
