import { b1 } from "../b1";
import type { LessonContent } from "../a1/skeleton-lessons";
import type { LessonStepData } from "../lesson-step-types";

type LessonSeed = {
  unit: number;
  lesson: 1 | 2;
  phrases: readonly [string, string, string, string];
};

const seeds: readonly LessonSeed[] = [
  { unit: 1, lesson: 1, phrases: ["An ideal friend is someone who listens without judging.", "I value people who are honest and dependable.", "A good partner is a person that respects your independence.", "I connect best with people who share my sense of humor."] },
  { unit: 1, lesson: 2, phrases: ["I appreciate it when people arrive on time.", "I can't stand it when someone interrupts constantly.", "I love it when a plan comes together.", "It bothers me when people avoid honest conversations."] },
  { unit: 2, lesson: 1, phrases: ["Solving complex problems keeps my job interesting.", "I enjoy working with a supportive team.", "Meeting unrealistic deadlines can be exhausting.", "Learning new skills is one of the best parts of the role."] },
  { unit: 2, lesson: 2, phrases: ["Nursing is more emotionally demanding than accounting.", "Designers often work more creatively than analysts.", "This role offers fewer benefits but greater flexibility.", "Managers are usually more involved in decision-making."] },
  { unit: 3, lesson: 1, phrases: ["Could I borrow your car if I filled the tank?", "Would you mind lending me your camera?", "Is it all right if I use your desk this afternoon?", "Of course, as long as you're careful with it."] },
  { unit: 3, lesson: 2, phrases: ["Could you tell Nina that the meeting has moved?", "Please ask her to call me when she arrives.", "Would you tell them not to wait downstairs?", "Can you let Marco know that I sent the documents?"] },
  { unit: 4, lesson: 1, phrases: ["I was walking home when I heard a loud crash.", "While people were calling for help, I checked the driver.", "The rain was getting heavier, so traffic slowed down.", "Fortunately, nobody was seriously injured."] },
  { unit: 4, lesson: 2, phrases: ["By the time we arrived, the concert had already started.", "She realized that she had left the tickets at home.", "We had never seen the venue so crowded before.", "After the band had finished, everyone stayed to celebrate."] },
  { unit: 5, lesson: 1, phrases: ["Living abroad is an experience that changes your perspective.", "One challenge is finding friends who understand your background.", "The support network you build can become like a family.", "Learning local customs is something that takes patience."] },
  { unit: 5, lesson: 2, phrases: ["When you arrive, you may experience culture shock.", "If you keep an open mind, you'll adapt more quickly.", "You might feel homesick when special occasions come around.", "If problems arise, ask local people for advice."] },
  { unit: 6, lesson: 1, phrases: ["The screen is cracked and the power button is damaged.", "Two screws are missing from the back panel.", "The charger is bent, so the battery isn't charging.", "The device appears to be disconnected from the network."] },
  { unit: 6, lesson: 2, phrases: ["The air conditioner needs to be serviced.", "The kitchen tap needs replacing.", "The alarm keeps going off in the middle of the night.", "The front door needs to be fixed before it gets worse."] },
  { unit: 7, lesson: 1, phrases: ["Coastal areas are being damaged by rising sea levels.", "Several habitats have been destroyed by illegal construction.", "Air quality is getting worse because of heavy traffic.", "Local rivers have been polluted by industrial waste."] },
  { unit: 7, lesson: 2, phrases: ["One way to reduce waste is to repair more products.", "The city could create incentives to use public transportation.", "We need better systems to prevent food from being wasted.", "A useful first step would be to involve local communities."] },
  { unit: 8, lesson: 1, phrases: ["I'd rather work from home than commute every day.", "I'd prefer to start earlier and finish before rush hour.", "Would you rather lead the discussion or take notes?", "I'd prefer not to make a decision until tomorrow."] },
  { unit: 8, lesson: 2, phrases: ["I remember vocabulary by using it in meaningful sentences.", "She became more confident by practicing with a partner.", "You can improve your accuracy by reviewing your mistakes.", "Curious learners make progress by asking better questions."] },
  { unit: 9, lesson: 1, phrases: ["I'm having my laptop repaired this afternoon.", "We had the office windows cleaned last week.", "She gets her hair cut near the station.", "They need to have the contract checked by a lawyer."] },
  { unit: 9, lesson: 2, phrases: ["We need to come up with a more practical solution.", "I can't keep up with all these new requests.", "Why don't we cut down on unnecessary meetings?", "We could look into hiring temporary staff."] },
  { unit: 10, lesson: 1, phrases: ["The agreement was signed at the beginning of the century.", "Over the following decade, access to technology expanded rapidly.", "A major turning point occurred during the financial crisis.", "Since then, the policy has influenced millions of people."] },
  { unit: 10, lesson: 2, phrases: ["Remote work is likely to become even more common.", "Cities may invest more heavily in public transportation.", "There's a good chance that energy costs will fall.", "I doubt that traditional offices will disappear completely."] },
  { unit: 11, lesson: 1, phrases: ["When I graduated, I had already accepted my first job.", "I moved abroad shortly after I turned twenty-five.", "Since I started my own business, I've learned to take risks.", "By the time my daughter was born, we had bought our first home."] },
  { unit: 11, lesson: 2, phrases: ["I should have asked more questions before accepting the offer.", "If I had understood the risks, I would have planned differently.", "We wouldn't have moved if we'd known about the commute.", "I wish I had taken more time to consider my options."] },
  { unit: 12, lesson: 1, phrases: ["To succeed in this field, you need to remain adaptable.", "It's essential to communicate clearly under pressure.", "Having the courage to fail is part of becoming innovative.", "The most important quality is being willing to keep learning."] },
  { unit: 12, lesson: 2, phrases: ["The event was postponed because the venue was unavailable.", "Since demand had increased, the company expanded production.", "Flights were cancelled because of severe weather.", "The main reason for the delay was a technical problem."] },
  { unit: 13, lesson: 1, phrases: ["They must have taken the wrong exit.", "The driver may have misunderstood the directions.", "A road closure could have caused the delay.", "They can't have arrived yet because their car isn't outside."] },
  { unit: 13, lesson: 2, phrases: ["The organizers should have prepared a backup plan.", "They could have warned visitors about the closure.", "I would have added more signs near the entrance.", "The situation might have been handled more effectively."] },
  { unit: 14, lesson: 1, phrases: ["First, the raw materials are inspected for quality.", "Next, they are heated and shaped by specialized machines.", "After the parts are assembled, the product is tested.", "Finally, each item is packaged and shipped to retailers."] },
  { unit: 14, lesson: 2, phrases: ["A mediator is someone who helps people resolve conflicts.", "My uncle, who works as an architect, designs public buildings.", "The laboratory where she works develops medical equipment.", "Engineers whose projects affect public safety need strong ethics."] },
  { unit: 15, lesson: 1, phrases: ["More affordable housing should be built near transportation hubs.", "Public spaces must be designed for people with disabilities.", "Additional funding could be provided to local schools.", "The results ought to be reviewed before the program expands."] },
  { unit: 15, lesson: 2, phrases: ["This is the most practical option, isn't it?", "We shouldn't ignore the long-term costs, should we?", "The proposal sounds reasonable, doesn't it?", "Everyone deserves access to the service, don't they?"] },
  { unit: 16, lesson: 1, phrases: ["Completing my degree while working full time is my proudest achievement.", "Leading a team through a difficult transition taught me resilience.", "Helping my community recover after the storm was deeply meaningful.", "Learning to speak in public has changed my professional life."] },
  { unit: 16, lesson: 2, phrases: ["By this time next year, I'll have completed my certification.", "I'm going to apply for international positions this summer.", "I'll be working with a new team by the end of the year.", "In five years, I hope to have established my own company."] },
];

const words = (sentence: string) => sentence.split(" ");

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = b1.units[unit - 1];
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
      instruction: `Listen to a conversation about ${lessonData.title.toLowerCase()}.`,
      audio: "",
      dialogue: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", [line]] as const),
      questionInstruction: "Listen for gist. Choose the correct answer.",
      question: `The speakers are mainly discussing ${lessonData.title.toLowerCase()}.`,
      options: ["True", "False"],
      answer: "True",
      followUpInstruction: "Listen again and answer the open questions.",
      followUp: [
        { question: "What point does speaker A introduce?", answer: phrases[0] },
        { question: "How does speaker B develop the idea?", answer: phrases[1] },
        { question: "What further detail is mentioned?", answer: phrases[2] },
        { question: "What final point is made?", answer: phrases[3] },
      ],
    },
    {
      type: "language-focus",
      slug: "language-focus",
      label: "Language focus",
      instruction: lessonData.description,
      items: phrases.map((phrase) => [
        phrase,
        `Use this language to ${lessonData.description.charAt(0).toLowerCase()}${lessonData.description.slice(1)}`,
        "Mark prominent stress, weak forms, and connected speech after adding the audio.",
        "Identify the target structure, its function, and the elements that can change.",
        undefined,
        "Portuguese translation to be added.",
      ] as const),
    },
    {
      type: "try-it",
      slug: "try-it",
      label: "Try it",
      instruction: "Put the words in the correct order.",
      items: phrases.map((phrase) => {
        const answer = words(phrase);
        return { words: [...answer].reverse(), answer };
      }),
    },
    {
      type: "use-it",
      slug: "use-it",
      label: "Use it",
      instruction: `Complete a communicative task about ${lessonData.title.toLowerCase()}.`,
      prompts: [
        lessonData.description,
        "Support your ideas with reasons, details, or examples.",
        "Use at least two examples of the target language and ask a follow-up question.",
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Can you…?",
      instruction: "Check your progress.",
      checks: [
        `Can you ${lessonData.description.charAt(0).toLowerCase()}${lessonData.description.slice(1)}`,
        `Can you identify the main points and relevant details in a conversation about ${lessonData.title.toLowerCase()}?`,
        "Can you use the target form accurately in a controlled activity?",
        "Can you communicate a personalized idea and support it clearly?",
      ],
    },
  ];

  return {
    level: "b1",
    unit: { number: unitData.number, title: unitData.title },
    lesson: { number: lesson, title: lessonData.title },
    steps,
  };
};

export const b1SkeletonLessons = Object.fromEntries(
  seeds.map((seed) => [`${seed.unit}/${seed.lesson}`, createLesson(seed)]),
) as Record<string, LessonContent>;
