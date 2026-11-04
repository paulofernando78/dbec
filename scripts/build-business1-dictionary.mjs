import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = fs.readFileSync(path.join(root, "app/routes/business-expression.tsx"), "utf8");
const normalize = (value) => value.trim().replace(/^[“”'\"]+|[.!?,:;“”'\"]+$/g, "").replace(/\s+/g, " ").toLowerCase();
const titles = [
  "Talking About a New Project", "Talking About Financial Issues", "Discussing a New Ad Campaign", "Talking About Manufacturing", "Talking About Company Strategy",
  "Discussing Good Results", "Discussing Bad Results", "Discussing a Difficult Decision", "Dealing With a Dissatisfied Customer", "Discussing a Difficult Request",
  "Motivating Co-Workers", "Running a Meeting", "Discussing a Mistake", "Taking Credit for Good Results", "Shifting Blame",
  "Politely Disagreeing With Someone", "Telling Somebody Off", "Discussing Office Scandals", "Complaining About a Co-Worker", "Talking About a Brown-Noser",
  "Explaining That You're Feeling Overworked", "Calling In Sick", "Requesting a Bank Loan", "Negotiating a Purchase", "Conducting a Performance Review",
  "Promoting an Employee", "Firing Somebody", "Job Interview 1", "Job Interview 2", "Negotiating a Salary Offer",
];

const lineStarts = [...source.matchAll(/const lesson(?:One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fourteen|Fifteen|Sixteen|Seventeen|Eighteen|Nineteen|Twenty|TwentyOne|TwentyTwo|TwentyThree|TwentyFour|TwentyFive|TwentySix|TwentySeven|TwentyEight|TwentyNine|Thirty)Lines\s*=\s*\[/g)];
const lessons = lineStarts.map((match, index) => {
  const end = lineStarts[index + 1]?.index ?? source.indexOf("export default function BusinessExpression");
  const block = source.slice(match.index, end);
  const terms = [...new Set([...block.matchAll(/mark\("((?:[^"\\]|\\.)*)"\)/g)].map((item) => normalize(JSON.parse(`"${item[1]}"`))))];
  return { lesson: index + 1, title: titles[index], terms };
});

const dictionaryDir = path.join(root, "app/data/dictionary");
const existing = [];
for (const file of fs.readdirSync(dictionaryDir).filter((name) => /^[a-z]\.json$/.test(name))) {
  const data = JSON.parse(fs.readFileSync(path.join(dictionaryDir, file), "utf8"));
  for (const entry of data) for (const definition of entry.definitions ?? []) existing.push(definition);
}
const existingByWord = new Map(existing.map((entry) => [normalize(entry.word), entry]));
const tokens = (value) => new Set(value
  .replace(/\b(a|an|the|my|our|your|his|her|this|that|it|to|of|me|we|i|he|she|they|you|is|are|was|were|has|have|had|been|being)\b/g, " ")
  .replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean).map((word) => word.replace(/(ing|ed|s)$/, "")));
const closest = (term) => {
  const left = tokens(term); let winner; let score = 0;
  for (const entry of existing) {
    const right = tokens(normalize(entry.word));
    const intersection = [...left].filter((word) => right.has(word)).length;
    const union = new Set([...left, ...right]).size;
    const nextScore = union ? intersection / union : 0;
    if (nextScore > score) { score = nextScore; winner = entry; }
  }
  return score >= 0.6 ? winner : undefined;
};

const meanings = {
  "getting this project off the ground": "successfully starting and developing this project",
  "blows my mind": "amazes or shocks me greatly", "give this project the green light": "officially approve this project",
  "run some ideas by": "present some ideas to someone for feedback", "nothing is set in stone": "nothing has been finally decided",
  "brainstorming": "generating many possible ideas", "twisted my arm": "persuaded me despite my initial reluctance", "24/7": "all day and every day",
  "leapfrog our competitors": "move ahead of our competitors quickly", "signed on 800 new customers": "enrolled 800 new customers",
  "panned out": "developed successfully", "sharing the credit": "recognizing another person's contribution", "run for their money": "strong competition",
  "eating our lunch": "taking our customers or business", "great new products to market": "successful new products available for sale",
  "running in place": "working without making progress", "went all out": "made the greatest possible effort", "messed around": "wasted time instead of working seriously",
  "out of their minds": "behaving or thinking irrationally", "put our minds to it": "focus our effort and determination on it",
  "we've been down before, but we always come back fighting": "we have faced setbacks before and recovered strongly",
  "gotten out of hand": "become uncontrolled", "don't see eye-to-eye": "do not agree", "that's putting it lightly": "the reality is more extreme than that description",
  "weigh in on the issue at hand": "give an opinion about the current issue", "dropped the ball": "made a mistake or failed a responsibility",
  "kept my eye on the prize": "stayed focused on the main goal", "talk me into": "persuade me to do something", "cover yourself": "protect yourself from blame or risk",
  "struck gold": "found something very valuable or successful", "wash your hands": "refuse further responsibility for something",
  "track down that woman": "find that woman after searching", "we're blue in the face": "we have continued until exhausted without success",
  "dumped me": "ended a romantic relationship with me", "pulling your weight": "doing your fair share of the work", "burn your bridges": "destroy relationships or options you may need later",
  "the latest dirt": "the newest gossip or scandal", "made a pass at": "showed romantic or sexual interest in", "got nailed": "was caught and punished",
  "what goes around comes around. one day, he'll get his": "bad actions eventually bring bad consequences",
  "gave me an earful": "criticized or complained to me at length", "push your buttons": "deliberately provoke or annoy you", "steer clear of him": "avoid him",
  "he does have issues": "he has personal or behavioral problems", "on his high horse": "acting morally superior or arrogant", "kissing up": "flattering someone powerful for personal advantage",
  "talk about trying to butter up the boss": "an obvious attempt to flatter the boss", "at our expense": "causing us a loss or disadvantage",
  "out for himself": "concerned only with his own benefit", "slipped my mind": "I forgot it", "my stomach is killing me": "my stomach hurts very badly",
  "take it easy": "rest and avoid too much effort", "under your belt": "already achieved or experienced", "know the franchise business inside and out": "know every detail of the franchise business",
  "comparing apples to oranges": "comparing things that are too different", "missing the point": "failing to understand the main idea", "break my budget": "cost more than I can afford",
  "did a 180": "changed completely in the opposite direction", "got a knack for": "has a natural talent for", "pride myself on": "take satisfaction in my ability to",
  "make heads or tails of": "understand", "earned your keep": "proved that your work is worth what you receive", "take you into my confidence": "share private information with you",
  "made the grade": "met the required standard", "given his walking papers": "officially dismissed from his job", "leaving us": "departing from the company",
  "your work has slipped": "the quality of your work has declined", "at the top of my game": "performing at my highest level", "didn't lift a finger": "made no effort to help",
  "bought out": "purchased and taken over by another company", "wore many hats": "performed many different roles", "micro-managed": "controlled in excessive detail",
  "sparked your interest": "caused you to become interested", "running your own show": "managing your own business or activity", "carved out a niche": "created a specialized and successful position",
  "snapped up": "bought or obtained quickly", "got that out of my system": "satisfied an urge and no longer want to do it", "losing his shirt": "losing a great deal of money",
  "i hear what you're saying": "I understand your point", "out of our range": "beyond what we can afford or accept", "first thing in the morning": "at the very beginning of the morning",
  "stand my ground": "refuse to change my position", "it's a deal": "I accept the agreement",
};

const termLessons = new Map();
for (const lesson of lessons) for (const term of lesson.terms) {
  const list = termLessons.get(term) ?? []; list.push(lesson.lesson); termLessons.set(term, list);
}
const generated = [];
for (const [term, lessonNumbers] of termLessons) {
  if (existingByWord.has(term)) continue;
  const base = closest(term);
  const enDefinition = meanings[term] ?? base?.enDefinition;
  if (!enDefinition) throw new Error(`Missing definition for: ${term}`);
  generated.push({
    word: term,
    partOfSpeech: base?.partOfSpeech ?? "idiom",
    enDefinition,
    ...(base?.ptDefinition ? { ptDefinition: base.ptDefinition } : {}),
    ...(base?.examples ? { examples: base.examples } : {}),
    notes: [{ enNote: `Used in Business 1, ${lessonNumbers.map((number) => `Lesson ${number}`).join(", ")}.` }],
  });
}
generated.sort((a, b) => a.word.localeCompare(b.word));
fs.writeFileSync(path.join(dictionaryDir, "business-1.generated.json"), `${JSON.stringify([{ definitions: generated }], null, 2)}\n`);
fs.writeFileSync(path.join(root, "app/data/business-1-search.generated.json"), `${JSON.stringify(lessons, null, 2)}\n`);
console.log(`Generated ${generated.length} dictionary entries and ${lessons.length} lesson search records.`);
