import type { UseItData } from "../../../lesson-step-types";

export const useIt = {
  type: "use-it", slug: "use-it", label: "Use it",
  instruction: "Choose objects near you. Ask and answer without reading the model.",
  prompts: ["Point to one object and ask What’s this?", "Answer with It’s a/an…", "Point to two or more objects and ask What are these?", "Answer with They’re…", "Change roles."],
  model: [["A", "What’s this?"], ["B", "It’s a notebook."], ["A", "What are these?"], ["B", "They’re keys."]],
} satisfies UseItData;
