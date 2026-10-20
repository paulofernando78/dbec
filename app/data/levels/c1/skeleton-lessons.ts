import { c1 } from "../c1";
import type { LessonContent } from "../a1/skeleton-lessons";
import type { LessonStepData } from "../lesson-step-types";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

const seeds: readonly LessonSeed[] = [
  { unit: 1, lesson: 1, phrases: ["A true friend is someone you can fall back on without taking their support for granted.", "Shared interests matter less to me than knowing someone will speak frankly when it counts.", "I tend to gravitate toward people who are perceptive without being judgmental.", "Friendship thrives on reciprocity, but it shouldn't become an exercise in keeping score."] },
  { unit: 1, lesson: 2, phrases: ["Maintaining a friendship often means making room for it rather than waiting for time to appear.", "I take your point, though reconnecting after years apart can feel surprisingly natural.", "Learning to disagree without becoming defensive is essential to sustaining trust.", "If a misunderstanding arises, revisiting the conversation usually prevents resentment from building."] },
  { unit: 2, lesson: 1, phrases: ["I tend to invest in understated pieces rather than follow whatever happens to be fashionable.", "People who claim to disregard fashion entirely are still making a statement about identity.", "I've grown to appreciate clothes that combine practicality with a distinctive point of view.", "Trends can be creatively stimulating, provided they don't become a substitute for personal judgment."] },
  { unit: 2, lesson: 2, phrases: ["What shapes a first impression is often the coherence between appearance, posture, and speech.", "What struck me wasn't how formally she was dressed, but how completely at ease she seemed.", "A meticulously presented appearance may project competence while unintentionally creating distance.", "People respond not merely to what we wear, but to the confidence with which we inhabit it."] },
  { unit: 3, lesson: 1, phrases: ["The potential of gene-editing is immense, yet the ethical safeguards remain unevenly developed.", "Innovation is not inherently beneficial; its value depends on who controls it and who bears the risk.", "A breakthrough may solve one problem while creating consequences that cannot readily be reversed.", "Caution need not impede progress if uncertainty is acknowledged rather than strategically minimized."] },
  { unit: 3, lesson: 2, phrases: ["Having outsourced routine decisions to algorithms, we may gradually lose confidence in our own judgment.", "I approach new technology with guarded optimism rather than either enthusiasm or outright suspicion.", "Constantly being prompted to upgrade creates the impression that existing tools are prematurely obsolete.", "Technology becomes genuinely useful when it recedes into the background instead of demanding attention."] },
  { unit: 4, lesson: 1, phrases: ["It is often claimed that superstitions persist because they offer an illusion of control.", "Research suggests that rituals can reduce anxiety even when people recognize their irrational basis.", "I've had remarkably good luck with chance opportunities, though I wouldn't attribute that to fate.", "What counts as superstition in one culture may be regarded as ordinary caution in another."] },
  { unit: 4, lesson: 2, phrases: ["The footage is believed to have been manipulated before it circulated online.", "The witness was alleged to have invented key details in order to attract publicity.", "It has been suggested that the hoax succeeded because it confirmed what people already suspected.", "The claim is widely regarded as fabricated, although its cultural influence has proved remarkably durable."] },
  { unit: 5, lesson: 1, phrases: ["Admittedly, the film is visually arresting; narratively, however, it never quite finds its footing.", "Curiously, audiences have embraced genres that critics had repeatedly declared exhausted.", "The documentary is unsettling without being sensationalist and restrained without becoming detached.", "What I found most compelling was its refusal to offer an artificially tidy resolution."] },
  { unit: 5, lesson: 2, phrases: ["The premise was so adaptable that it generated entirely different stories each season.", "It featured such morally ambiguous characters that viewers constantly reassessed their loyalties.", "A successful format gives audiences familiarity while leaving enough uncertainty to sustain curiosity.", "Our concept combines investigative storytelling with live audience decisions that alter the outcome."] },
  { unit: 6, lesson: 1, phrases: ["The more closely I listen to the arrangement, the more restrained the performance seems.", "Music can be emotionally direct while remaining structurally and intellectually sophisticated.", "My taste has become increasingly eclectic as streaming has weakened traditional genre boundaries.", "The less predictable the rhythm is, the more actively the listener has to engage with it."] },
  { unit: 6, lesson: 2, phrases: ["Successful musicians will often spend years refining work that appears effortless on stage.", "A seasoned performer would treat a disappointing show as feedback rather than a verdict.", "Breaking into the industry requires persistence, but staying relevant demands artistic adaptability.", "Success may mean critical recognition, financial stability, or simply retaining creative independence."] },
  { unit: 7, lesson: 1, phrases: ["The routines we once associated with stability are precisely what younger generations are questioning.", "People entering the workforce now expect flexibility that previous employees rarely felt entitled to request.", "A lifestyle that looks liberating from the outside may still involve considerable economic insecurity.", "The changes affecting urban professionals are not necessarily the ones rural communities experience."] },
  { unit: 7, lesson: 2, phrases: ["She approached the transition as though uncertainty were a problem to be explored rather than avoided.", "The initiative changed the way residents perceived their capacity to influence local decisions.", "People reacted as if the proposal threatened established identities, not merely familiar routines.", "Meaningful change tends to endure when those affected help shape it from the outset."] },
  { unit: 8, lesson: 1, phrases: ["The retailer offered me a refund, but I asked them to exchange the item instead.", "A genuine bargain saves you money only if it replaces something you actually intended to buy.", "Compulsive shopping often provides temporary relief while creating longer-term financial pressure.", "Before recommending a product to someone, consider their priorities rather than projecting your own."] },
  { unit: 8, lesson: 2, phrases: ["The campaign subtly implies that responsible consumers ought to replace perfectly functional products.", "It is essential that sponsored content be identified clearly enough for audiences to recognize it.", "The committee recommended that advertisers disclose how personal data shapes individual offers.", "Effective marketing need not be manipulative, but its persuasive methods should remain open to scrutiny."] },
  { unit: 9, lesson: 1, phrases: ["Whoever takes responsibility for an animal must be prepared to meet its needs throughout its life.", "Whatever intelligence we recognize in other species should influence how we justify using them.", "Animals classified as pests may nevertheless play an indispensable role in an ecosystem.", "Ethical conservation requires balancing individual welfare against the survival of entire populations."] },
  { unit: 9, lesson: 2, phrases: ["Wherever field researchers work, they must adapt their methods to local ecological conditions.", "Whenever communities participate in conservation, projects tend to achieve more durable results.", "The reserve where she trained showed me how science and local knowledge can reinforce each other.", "When funding becomes uncertain, nature-based careers demand both practical versatility and resilience."] },
  { unit: 10, lesson: 1, phrases: ["A persuasive argument is strengthened by being framed around the audience's concerns rather than the speaker's expertise.", "Complex findings should be communicated accurately without being buried beneath technical terminology.", "Having established common ground, the speaker can introduce disagreement without alienating the audience.", "Crucially, uncertainty must be acknowledged; otherwise, confidence may be mistaken for credibility."] },
  { unit: 10, lesson: 2, phrases: ["A great deal of informal language is systematic, even when traditional guides label it incorrect.", "Neither regional variation nor conversational grammar is evidence of careless thinking.", "The majority of speakers adjust their language instinctively according to context and relationship.", "Appropriateness depends on purpose: what works in a message may undermine a formal proposal."] },
  { unit: 11, lesson: 1, phrases: ["Her long-term, evidence-based campaign transformed an issue that policymakers had largely ignored.", "Rather than pursuing the highest-profile opportunity, he focused on work with the greatest potential impact.", "The most far-reaching achievements often result from sustained collaboration rather than individual brilliance.", "Only after years of incremental progress did the project gain international recognition."] },
  { unit: 11, lesson: 2, phrases: ["I look up to people who remain principled when doing so comes at a genuine personal cost.", "She is remarkably clear-sighted yet warm-hearted, a combination that makes others trust her judgment.", "Everyday heroism often consists of stepping up repeatedly when attention and recognition are unlikely.", "An effective role model acknowledges mistakes instead of constructing an image of effortless perfection."] },
  { unit: 12, lesson: 1, phrases: ["Had the founders scaled more aggressively, the company might have sacrificed the trust that distinguished it.", "Were demand to fall suddenly, their dependence on a single market would become a serious liability.", "The team worked through several prototypes before arriving at a commercially viable design.", "Should the partnership proceed, both companies will need to work toward a genuinely shared strategy."] },
  { unit: 12, lesson: 2, phrases: ["Provided that expectations remain transparent, considerable autonomy can improve both motivation and accountability.", "Employees flourish when success is measured by meaningful outcomes rather than visible busyness.", "Even if a company offers generous benefits, poor management will eventually undermine retention.", "A resilient workplace succeeds insofar as people feel safe enough to challenge ineffective decisions."] },
];

const words = (sentence: string) => sentence.split(" ");

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = c1.units[unit - 1];
  const lessonData = unitData.lessons[lesson - 1];

  const steps: readonly LessonStepData[] = [
    {
      type: "get-ready",
      slug: "get-ready",
      label: "Get ready",
      slides: phrases.slice(0, 3).map((quote) => ({ image: "", audio: "", quote })),
    },
    {
      type: "listen",
      slug: "listen",
      label: "Listen",
      instruction: `Listen to a nuanced discussion about ${lessonData.title.toLowerCase()}.`,
      audio: "",
      dialogue: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", [line]] as const),
      questionInstruction: "Listen for stance and implied meaning. Choose the correct answer.",
      question: `The speakers' main concern is ${lessonData.title.toLowerCase()}.`,
      options: ["True", "False"],
      answer: "True",
      followUpInstruction: "Listen again and answer by interpreting the speakers' reasoning.",
      followUp: [
        { question: "What initial stance does speaker A establish?", answer: phrases[0] },
        { question: "How does speaker B nuance, challenge, or reframe it?", answer: phrases[1] },
        { question: "What assumption or implication is introduced next?", answer: phrases[2] },
        { question: "How is the overall position ultimately qualified?", answer: phrases[3] },
      ],
    },
    {
      type: "language-focus",
      slug: "language-focus",
      label: "Language focus",
      instruction: lessonData.description,
      items: phrases.map((phrase) => [
        phrase,
        `Use this language flexibly to ${lessonData.description.charAt(0).toLowerCase()}${lessonData.description.slice(1)}`,
        "Analyze prominence, intonation, chunking, linking, and how delivery modifies stance.",
        "Examine the target pattern, discourse effect, register, constraints, and viable reformulations.",
        undefined,
        "Portuguese translation to be added.",
      ] as const),
    },
    {
      type: "try-it",
      slug: "try-it",
      label: "Try it",
      instruction: "Reconstruct each advanced sentence in the correct order.",
      items: phrases.map((phrase) => {
        const answer = words(phrase);
        return { words: [...answer].reverse(), answer };
      }),
    },
    {
      type: "use-it",
      slug: "use-it",
      label: "Use it",
      instruction: `Synthesize and critically evaluate perspectives on ${lessonData.title.toLowerCase()}.`,
      prompts: [
        lessonData.description,
        "Frame a nuanced position, distinguish evidence from assumption, and anticipate a counterargument.",
        "Reformulate another viewpoint fairly before challenging or integrating it into your conclusion.",
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Can you…?",
      instruction: "Evaluate your control, flexibility, and precision.",
      checks: [
        `Can you ${lessonData.description.charAt(0).toLowerCase()}${lessonData.description.slice(1)}`,
        `Can you infer stance, implication, and rhetorical purpose in a discussion about ${lessonData.title.toLowerCase()}?`,
        "Can you adapt the target language accurately across different registers and formulations?",
        "Can you synthesize competing perspectives into a coherent, appropriately qualified conclusion?",
      ],
    },
  ];

  return {
    level: "c1",
    unit: { number: unitData.number, title: unitData.title },
    lesson: { number: lesson, title: lessonData.title },
    steps,
  };
};

export const c1SkeletonLessons = Object.fromEntries(
  seeds.map((seed) => [`${seed.unit}/${seed.lesson}`, createLesson(seed)]),
) as Record<string, LessonContent>;
