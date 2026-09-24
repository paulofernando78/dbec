import type { LearningLesson } from "@/data/learning/types";

export type PassageLessonSeed = {
  slug: string;
  title: string;
  description: string;
  objective: string;
  vocabulary: string[];
  model: string;
};

export type PassageUnitSeed = {
  title: string;
  description: string;
  lessons: [PassageLessonSeed, PassageLessonSeed];
};

export const createPassageCurriculum = (
  level: "b2" | "c1",
  units: PassageUnitSeed[],
) => {
  const lessons: LearningLesson[] = units.flatMap((unit, unitIndex) =>
    unit.lessons.map((definition, lessonIndex) => {
      const unitNumber = unitIndex + 1;
      const order = lessonIndex + 1;
      const id = `${level}-u${String(unitNumber).padStart(2, "0")}-l${String(order).padStart(2, "0")}`;
      const correctAnswer = definition.model.replace(/[,.?;]/g, "");

      return {
        ...definition,
        id,
        level,
        unitId: `unit-${unitNumber}`,
        order,
        estimatedMinutes: level === "b2" ? 12 : 15,
        xpReward: level === "b2" ? 45 : 55,
        exercises: [
          {
            id: `${id}-e01`,
            type: "word-order" as const,
            instruction: "Put the words in order",
            words: correctAnswer.split(/\s+/).reverse(),
            correctAnswer,
            explanation: `Model answer: ${definition.model}`,
          },
        ],
      };
    }),
  );

  return {
    lessons,
    units: units.map((unit, index) => ({
      id: `unit-${index + 1}`,
      level,
      order: index + 1,
      title: unit.title,
      description: unit.description,
      lessons: lessons.slice(index * 2, index * 2 + 2),
    })),
  };
};
