import { b1 } from "../b1";
import type { LessonContent } from "../a1/skeleton-lessons";
import type { ConceptCheckData, LessonStepData } from "../lesson-step-types";

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

const outcomes: Record<string, string> = {
  "1/1": "Produce a four-quality profile of an ideal friend or partner and justify the top quality.",
  "1/2": "Record two appreciated behaviors, two disliked behaviors, and one shared reaction.",
  "2/1": "Rank three job features and justify the ranking with activity-based examples.",
  "2/2": "Choose between two careers and record three supported comparisons.",
  "3/1": "Negotiate two favors and record the conditions under which each is accepted.",
  "3/2": "Relay a fact and a request accurately, then compare them with the original message.",
  "4/1": "Produce a five-event narrative distinguishing background actions from main events.",
  "4/2": "Produce a four-event story in which the earlier events are unambiguous.",
  "5/1": "Create a balanced living-abroad profile with two benefits and two challenges.",
  "5/2": "Produce a four-point arrival guide separating expectations from possible conditions.",
  "6/1": "Complete a fault report identifying four problems and their locations.",
  "6/2": "Prioritize three repairs and record the required action for each.",
  "7/1": "Produce an evidence-based environmental problem profile with causes and current effects.",
  "7/2": "Agree on a three-step local action plan and justify the first priority.",
  "8/1": "Reach one group-work decision after stating and comparing individual preferences.",
  "8/2": "Create a three-strategy learning plan and explain how each strategy works.",
  "9/1": "Arrange three services and record who will perform each action and when.",
  "9/2": "Select the best solution to a workload problem and record two rejected alternatives.",
  "10/1": "Produce a four-stage historical timeline with clear sequencing expressions.",
  "10/2": "Create three predictions, rank their probability, and justify the ranking.",
  "11/1": "Produce a four-milestone life timeline with correct relationships between events.",
  "11/2": "Record one regret, its imagined alternative, and the likely different result.",
  "12/1": "Agree on the four most important qualities for success and justify the top two.",
  "12/2": "Produce a cause-and-result diagram for three events.",
  "13/1": "Compare three explanations for a past event and rank them by certainty.",
  "13/2": "Produce two criticisms and two alternative actions for a past problem.",
  "14/1": "Create an ordered six-stage process that another pair can reconstruct.",
  "14/2": "Produce four accurate job definitions using distinct relative-clause patterns.",
  "15/1": "Agree on three policy recommendations and rank them by necessity.",
  "15/2": "Reach a group position and record the claim, expected agreement, and one challenge.",
  "16/1": "Produce an achievement profile with three achievements and their personal significance.",
  "16/2": "Create a future timeline with three goals and their expected completion points.",
};

const ccqs: Record<string, ConceptCheckData["questions"]> = {
  "1/1": [
    { context: "someone who listens", question: "Does who refer to a person?", options: ["Yes", "No"], answer: "Yes" },
    { context: "a person that respects your independence", question: "Does the clause identify the kind of person?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "1/2": [
    { context: "I appreciate it when people arrive on time.", question: "Do I like this behavior?", options: ["Yes", "No"], answer: "Yes" },
    { context: "It bothers me when people avoid honest conversations.", question: "Is my reaction positive?", options: ["Yes", "No"], answer: "No" },
  ],
  "2/1": [
    { context: "Solving problems keeps my job interesting.", question: "Is solving problems the activity being evaluated?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I enjoy working with a team.", question: "Do I like this activity?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "2/2": [
    { context: "Nursing is more emotionally demanding than accounting.", question: "Which is more demanding?", options: ["Nursing", "Accounting"], answer: "Nursing" },
    { context: "This role offers fewer benefits but greater flexibility.", question: "Does the role offer more benefits?", options: ["Yes", "No"], answer: "No" },
  ],
  "3/1": [
    { context: "Could I borrow your car?", question: "Does the speaker want to receive temporary use of the car?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Would you mind lending me your camera?", question: "Would the other person give temporary use of the camera?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "3/2": [
    { context: "Tell Nina that the meeting has moved.", question: "Information or requested action?", options: ["Information", "Requested action"], answer: "Information" },
    { context: "Ask her to call me.", question: "Information or requested action?", options: ["Information", "Requested action"], answer: "Requested action" },
  ],
  "4/1": [
    { context: "I was walking when I heard a crash.", question: "Which action was already in progress?", options: ["Walking", "Hearing the crash"], answer: "Walking" },
    { context: "While people were calling, I checked the driver.", question: "Did the actions overlap?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "4/2": [
    { context: "The concert had started before we arrived.", question: "Which happened first?", options: ["The concert started", "We arrived"], answer: "The concert started" },
    { context: "She realized she had left the tickets at home.", question: "Did leaving the tickets happen before the realization?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "5/1": [
    { context: "an experience that changes your perspective", question: "Does the clause describe experience?", options: ["Yes", "No"], answer: "Yes" },
    { context: "friends who understand your background", question: "Does who refer to friends?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "5/2": [
    { context: "When you arrive, you may experience culture shock.", question: "Is arrival treated as expected?", options: ["Yes", "No"], answer: "Yes" },
    { context: "If you keep an open mind, you'll adapt more quickly.", question: "Is keeping an open mind a condition?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "6/1": [
    { context: "The screen is cracked.", question: "Is the screen damaged?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Two screws are missing.", question: "Are all the screws present?", options: ["Yes", "No"], answer: "No" },
  ],
  "6/2": [
    { context: "The air conditioner needs to be serviced.", question: "Does someone need to service it?", options: ["Yes", "No"], answer: "Yes" },
    { context: "The alarm keeps going off.", question: "Does this happen repeatedly?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "7/1": [
    { context: "Habitats have been destroyed.", question: "Is the focus the habitats or the people responsible?", options: ["The habitats", "The people responsible"], answer: "The habitats" },
    { context: "Coastal areas are being damaged.", question: "Is the damage ongoing?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "7/2": [
    { context: "One way to reduce waste is to repair products.", question: "Is repairing presented as a solution?", options: ["Yes", "No"], answer: "Yes" },
    { context: "A useful first step would be to involve communities.", question: "Is this a suggestion?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "8/1": [
    { context: "I'd rather work from home than commute.", question: "Which does the speaker prefer?", options: ["Working from home", "Commuting"], answer: "Working from home" },
    { context: "I'd prefer not to decide until tomorrow.", question: "Does the speaker want to decide now?", options: ["Yes", "No"], answer: "No" },
  ],
  "8/2": [
    { context: "I remember vocabulary by using it.", question: "Does by introduce the method?", options: ["Yes", "No"], answer: "Yes" },
    { context: "She became confident by practicing.", question: "Was practice the means of becoming confident?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "9/1": [
    { context: "I'm having my laptop repaired.", question: "Am I repairing it myself?", options: ["Yes", "No"], answer: "No" },
    { context: "We had the windows cleaned.", question: "Did another person provide the service?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "9/2": [
    { context: "come up with a solution", question: "Create or reject a solution?", options: ["Create", "Reject"], answer: "Create" },
    { context: "cut down on meetings", question: "Increase or reduce meetings?", options: ["Increase", "Reduce"], answer: "Reduce" },
  ],
  "10/1": [
    { context: "Over the following decade", question: "Does this refer to the ten years after the previous event?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Since then, the policy has influenced millions.", question: "Does the influence connect that past point to now?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "10/2": [
    { context: "Remote work is likely to become more common.", question: "Is this presented as probable?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I doubt offices will disappear completely.", question: "Does the speaker think complete disappearance is likely?", options: ["Yes", "No"], answer: "No" },
  ],
  "11/1": [
    { context: "When I graduated, I had already accepted a job.", question: "Which happened first?", options: ["Accepted a job", "Graduated"], answer: "Accepted a job" },
    { context: "Since I started my business, I've learned to take risks.", question: "Does the learning continue up to now?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "11/2": [
    { context: "I should have asked more questions.", question: "Did I ask enough questions?", options: ["Yes", "No"], answer: "No" },
    { context: "If I'd understood, I would have planned differently.", question: "Did I understand at that time?", options: ["Yes", "No"], answer: "No" },
  ],
  "12/1": [
    { context: "To succeed, you need to remain adaptable.", question: "Does to succeed express purpose?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Having the courage to fail is important.", question: "Is the activity the subject of the idea?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "12/2": [
    { context: "The event was postponed because the venue was unavailable.", question: "Does because introduce the cause?", options: ["Yes", "No"], answer: "Yes" },
    { context: "The main reason for the delay was a technical problem.", question: "Did the technical problem cause the delay?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "13/1": [
    { context: "They must have taken the wrong exit.", question: "Strong or weak deduction?", options: ["Strong", "Weak"], answer: "Strong" },
    { context: "The driver may have misunderstood.", question: "Is this certain?", options: ["Yes", "No"], answer: "No" },
  ],
  "13/2": [
    { context: "They should have prepared a backup plan.", question: "Did they prepare one?", options: ["Yes", "No"], answer: "No" },
    { context: "They could have warned visitors.", question: "Was warning visitors possible?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "14/1": [
    { context: "The materials are inspected.", question: "Is the process more important than the inspector?", options: ["Yes", "No"], answer: "Yes" },
    { context: "After the parts are assembled, the product is tested.", question: "Which happens first?", options: ["Assembly", "Testing"], answer: "Assembly" },
  ],
  "14/2": [
    { context: "A mediator is someone who helps resolve conflicts.", question: "Does the clause define mediator?", options: ["Yes", "No"], answer: "Yes" },
    { context: "My uncle, who is an architect, designs buildings.", question: "Is the information between commas additional?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "15/1": [
    { context: "Housing should be built near transportation.", question: "Recommendation or completed action?", options: ["Recommendation", "Completed action"], answer: "Recommendation" },
    { context: "Public spaces must be designed for everyone.", question: "Is this presented as necessary?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "15/2": [
    { context: "This is practical, isn't it?", question: "Does the speaker expect agreement?", options: ["Yes", "No"], answer: "Yes" },
    { context: "We shouldn't ignore the costs, should we?", question: "Does the speaker think ignoring costs is a good idea?", options: ["Yes", "No"], answer: "No" },
  ],
  "16/1": [
    { context: "Completing my degree is my proudest achievement.", question: "Is completing the degree treated as an activity or event?", options: ["Yes", "No"], answer: "Yes" },
    { context: "Leading a team taught me resilience.", question: "Did the experience produce learning?", options: ["Yes", "No"], answer: "Yes" },
  ],
  "16/2": [
    { context: "By next year, I'll have completed my certification.", question: "Will it be complete before or by that future point?", options: ["Yes", "No"], answer: "Yes" },
    { context: "I'll be working with a new team by year-end.", question: "Is this an activity expected around a future time?", options: ["Yes", "No"], answer: "Yes" },
  ],
};

const createLesson = ({ unit, lesson, phrases }: LessonSeed): LessonContent => {
  const unitData = b1.units[unit - 1];
  const lessonData = unitData.lessons[lesson - 1];
  const lessonObjective = lessonData.description.replace(
    /^By the end of this lesson, students will be (?:better )?able to /,
    "",
  );

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
      instruction: lessonObjective,
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
      type: "concept-check",
      slug: "check-meaning",
      label: "Check meaning",
      instruction: "Choose the answer. Use the context, not only the grammar form.",
      questions: ccqs[`${unit}/${lesson}`],
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
      instruction: `Complete the task twice and produce a clear outcome about ${lessonData.title.toLowerCase()}.`,
      prompts: [
        "Round 1: use the model and replace the situation, evidence, and key details.",
        "Use at least two target expressions, develop one point, and ask a follow-up question.",
        "Round 2: close the model and complete a new exchange with your own or imagined information.",
        outcomes[`${unit}/${lesson}`],
      ],
      model: phrases.map((line, index) => [index % 2 === 0 ? "A" : "B", line] as const),
    },
    {
      type: "can-you",
      slug: "can-you",
      label: "Your progress",
      instruction: "Check your progress.",
      checks: [
        `Target: ${outcomes[`${unit}/${lesson}`]}`,
        `I identify the main points and relevant details in a conversation about ${lessonData.title.toLowerCase()}.`,
        "I use the target form accurately in controlled practice.",
        "I sustain an independent discussion and produce the required outcome.",
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
