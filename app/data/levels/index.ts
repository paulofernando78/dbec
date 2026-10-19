import { a1 } from "./a1";
import { a2 } from "./a2";
import { a2B1 } from "./a2-b1";
import { b1 } from "./b1";
import { b2 } from "./b2";
import { c1 } from "./c1";

export const levels = { a1, a2, "a2-b1": a2B1, b1, b2, c1 };

export type { Lesson, Level, Unit } from "./types";
