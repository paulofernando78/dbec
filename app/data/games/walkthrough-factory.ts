export type WalkthroughSection = readonly [title: string, steps: readonly string[]];

export const walkthrough = (
  description: string,
  date: string,
  sections: readonly WalkthroughSection[],
) => ({
  whiteboard: {
    title: "Advanced",
    descriptions: [description],
    date,
  },
  sections: sections.map(([title, steps], index) => ({
    id: `part-${index + 1}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    title: `Part ${index + 1} • ${title}`,
    instruction: "Follow the steps below:",
    items: steps.map((step) => ({ content: [step] })),
  })),
});
