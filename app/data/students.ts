export const students = {
  "alvaro-theodoro": {
    name: "Alvaro Theodoro",
    schedule: "...",
    time: "...",
  },
  "gabriel-sette": {
    name: "Gabriel Sette",
    schedule: "Mon / Wed",
    time: "15-16",
  },
  "mauricio-theodoro": {
    name: "Maurício Theodoro",
    schedule: "Wed / Fri",
    time: "7:30-8:30",
  },
  "rafael-bezerra": {
    name: "Rafael Bezerra",
    schedule: "Tue / Thu",
    time: "21-22",
  },
};

export type StudentId = keyof typeof students;