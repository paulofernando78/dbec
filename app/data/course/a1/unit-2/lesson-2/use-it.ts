import type { UseItData } from "../../../lesson-step-types";

export const useIt = {
  type: "use-it", slug: "use-it", label: "Use it",
  instruction: "Hide four objects in or near other objects. Your partner finds them.",
  prompts: ["Hide one object in, on, under, or next to something.", "Ask Where’s the…? for one object.", "Ask Where are the…? for two or more objects.", "Answer with It’s… or They’re…", "Change roles."],
  model: [["A", "Where’s the phone?"], ["B", "It’s under the notebook."], ["A", "Where are the keys?"], ["B", "They’re in the bag."]],
} satisfies UseItData;
