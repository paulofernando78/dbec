import { createC1Lesson, type C1LessonConfig } from "./create-c1-lesson";

const readingBetweenTheLinesConfig: C1LessonConfig = {
  slug: "reading-between-the-lines",
  title: "Reading Between the Lines",
  descriptions: [
    "What is stated, and what is merely suggested?",
    "Support every interpretation with evidence from the language used.",
  ],
  objective:
    "By the end of this class, students will be able to infer a speaker's or writer's stance, identify implied meaning, and justify an interpretation with linguistic evidence.",
  grammar: "Hedging and stance",
  vocabulary: "Inference and evaluation",
  introductionPrompt:
    "Consider how each statement communicates more than its literal wording.",
  introductionStatements: [
    "The proposal is ambitious, although the timeline may be somewhat optimistic.",
    "The committee stopped short of endorsing the plan.",
    "Few observers would deny that the results raise difficult questions.",
  ],
  introductionQuestions: [
    {
      question: "What does 'somewhat optimistic' most likely imply?",
      options: [
        { option: "The timeline may be unrealistic.", isCorrect: true },
        { option: "The timeline is certainly achievable.", isCorrect: false },
        { option: "The writer has no opinion about it.", isCorrect: false },
      ],
    },
    {
      question: "If a committee 'stops short of endorsing' a plan, it...",
      options: [
        { option: "supports it without reservations.", isCorrect: false },
        { option: "does not give it full support.", isCorrect: true },
        { option: "refuses to discuss it.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt:
    "Maya and Daniel are interpreting a cautious statement from a public report.",
  dialogueLines: [
    {
      speaker: "Maya",
      line: "The report says the policy has produced 'encouraging initial signs.' That sounds positive.",
    },
    {
      speaker: "Daniel",
      line: "Positive, yes, but highly qualified. 'Initial signs' suggests the evidence is not yet conclusive.",
    },
    {
      speaker: "Maya",
      line: "And the phrase 'further monitoring may be advisable' avoids saying the policy is definitely working.",
    },
    {
      speaker: "Daniel",
      line: "Exactly. The writers appear cautiously hopeful rather than fully convinced.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "How do Maya and Daniel interpret the report's stance?",
      options: [
        { option: "Unreservedly enthusiastic", isCorrect: false },
        { option: "Cautiously optimistic", isCorrect: true },
        { option: "Entirely dismissive", isCorrect: false },
      ],
    },
    {
      question: "Which expression is treated as evidence of uncertainty?",
      options: [
        { option: "definitely working", isCorrect: false },
        { option: "encouraging initial signs", isCorrect: true },
        { option: "fully convinced", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "At C1, interpretation goes beyond identifying facts: readers and listeners notice qualification, omission, contrast, and connotation.",
    "A strong interpretation states the inference and identifies the exact wording that supports it.",
  ],
  focusColumns: [
    {
      title: "Cautious stance",
      items: ["appears to", "arguably", "to some extent", "may well"],
    },
    {
      title: "Distance or doubt",
      items: ["so-called", "purportedly", "stops short of", "raises questions"],
    },
    {
      title: "Evidence frames",
      items: ["This suggests that...", "The contrast implies...", "The wording points to..."],
    },
  ],
  notes: [
    "Do not treat an inference as a fact. Use calibrated language such as 'suggests', 'implies', or 'appears to'.",
    "An interpretation is stronger when several linguistic clues point in the same direction.",
  ],
  ccqs: [
    "Does 'may' express the same certainty as 'will'? (No.)",
    "Can an inference be justified without referring to the text? (No.)",
  ],
  practiceQuestions: [
    {
      question: "Which sentence most clearly signals scepticism?",
      options: [
        { option: "The scheme has been described as innovative.", isCorrect: false },
        { option: "The so-called solution creates problems of its own.", isCorrect: true },
        { option: "The scheme began in May.", isCorrect: false },
      ],
    },
    {
      question: "Which is the best evidence-based interpretation?",
      options: [
        { option: "The writer hates the plan.", isCorrect: false },
        {
          option: "The writer appears doubtful, as shown by 'limited evidence' and 'may'.",
          isCorrect: true,
        },
        { option: "The plan will fail.", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the interpretations with an appropriate stance expression.",
  gapSentences: [
    { before: "The wording ", answer: "suggests", after: " that the author remains unconvinced." },
    { before: "The results are ", answer: ["arguably", "perhaps"], after: " less decisive than the headline claims." },
    { before: "The committee ", answer: "stops short of", after: " recommending immediate implementation." },
  ],
  scrambleSentences: [
    {
      prompt: "suggests / the contrast / reservations / has / the speaker / that",
      answer: "The contrast suggests that the speaker has reservations.",
    },
    {
      prompt: "evidence / this interpretation / wording / the / is supported by",
      answer: "This interpretation is supported by the wording.",
    },
  ],
  productionTasks: [
    "Annotate three cautious or evaluative expressions in a short article and explain what each one implies.",
    "Write an 80-120 word interpretation of the writer's stance, citing at least two pieces of linguistic evidence.",
    "Rewrite one direct claim in three ways to express strong certainty, cautious confidence, and scepticism.",
  ],
};

const synthesizingSourcesConfig: C1LessonConfig = {
  slug: "synthesizing-sources",
  title: "Synthesizing Sources",
  descriptions: [
    "Combine sources without producing a list of summaries.",
    "Show agreement, difference, limitation, and significance.",
  ],
  objective:
    "By the end of this class, students will be able to integrate complementary and conflicting information from two sources into a coherent, neutral synthesis.",
  grammar: "Reporting structures",
  vocabulary: "Evidence and source attribution",
  introductionPrompt:
    "Compare the claims. Decide whether the sources agree, qualify one another, or conflict.",
  introductionStatements: [
    "Source A: Remote work increases autonomy and reduces commuting time.",
    "Source B: Remote work can weaken informal collaboration and blur personal boundaries.",
    "Source C: Hybrid schedules produce different results depending on role and team culture.",
  ],
  introductionQuestions: [
    {
      question: "What is the most accurate relationship between Sources A and B?",
      options: [
        { option: "They are exact opposites.", isCorrect: false },
        { option: "They emphasize different consequences of the same practice.", isCorrect: true },
        { option: "They discuss unrelated subjects.", isCorrect: false },
      ],
    },
    {
      question: "How does Source C affect the comparison?",
      options: [
        { option: "It adds a condition that may explain different outcomes.", isCorrect: true },
        { option: "It proves Source A is false.", isCorrect: false },
        { option: "It repeats Source B word for word.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "Leah and Amir plan a neutral synthesis of two reports.",
  dialogueLines: [
    {
      speaker: "Leah",
      line: "The first report links remote work to higher job satisfaction, whereas the second warns about isolation.",
    },
    {
      speaker: "Amir",
      line: "We should not present that as a simple contradiction. One measures autonomy; the other focuses on social connection.",
    },
    {
      speaker: "Leah",
      line: "So the synthesis could say that remote work may improve individual control while creating interpersonal costs.",
    },
    {
      speaker: "Amir",
      line: "Yes, and both sources indicate that management practices influence the outcome.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "What mistake do the speakers avoid?",
      options: [
        { option: "Using any reporting verbs", isCorrect: false },
        { option: "Treating different research focuses as a direct contradiction", isCorrect: true },
        { option: "Mentioning a shared conclusion", isCorrect: false },
      ],
    },
    {
      question: "What shared factor do both reports identify?",
      options: [
        { option: "Management practices", isCorrect: true },
        { option: "Office rent", isCorrect: false },
        { option: "Employee age", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "Synthesis organizes information by relationship or theme, not source order.",
    "A neutral synthesis preserves each source's degree of certainty and does not invent agreement or conflict.",
  ],
  focusColumns: [
    {
      title: "Agreement",
      items: ["Both sources indicate...", "A point shared by both...", "Similarly..."],
    },
    {
      title: "Contrast",
      items: ["Whereas...", "By contrast...", "This differs from..."],
    },
    {
      title: "Qualification",
      items: ["This finding is limited by...", "Taken together...", "A possible explanation is..."],
    },
  ],
  notes: [
    "Use reporting verbs accurately: a source may suggest, indicate, argue, acknowledge, challenge, or demonstrate.",
    "Do not strengthen a cautious source by changing 'may' into 'proves' or 'shows conclusively'.",
  ],
  ccqs: [
    "Is synthesis the same as writing one paragraph per source? (No.)",
    "Should a synthesis preserve uncertainty in the original evidence? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which sentence is a synthesis rather than two separate summaries?",
      options: [
        { option: "Source A discusses cost. Source B discusses access.", isCorrect: false },
        {
          option: "Taken together, the sources suggest that lower cost may improve access, although location remains a barrier.",
          isCorrect: true,
        },
        { option: "I agree with Source A.", isCorrect: false },
      ],
    },
    {
      question: "Which reporting verb best preserves a cautious claim?",
      options: [
        { option: "proves", isCorrect: false },
        { option: "suggests", isCorrect: true },
        { option: "guarantees", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the synthesis with a relationship or reporting expression.",
  gapSentences: [
    { before: "Both reports ", answer: "indicate", after: " that context influences the outcome." },
    { before: "The first study reports higher autonomy, ", answer: "whereas", after: " the second emphasizes isolation." },
    { before: "", answer: "Taken together", after: ", the findings point to a context-dependent effect." },
  ],
  scrambleSentences: [
    {
      prompt: "sources / both / a role / acknowledge / that / leadership / plays",
      answer: "Both sources acknowledge that leadership plays a role.",
    },
    {
      prompt: "the evidence / taken together / a mixed picture / presents",
      answer: "Taken together, the evidence presents a mixed picture.",
    },
  ],
  productionTasks: [
    "Create a comparison grid that records each source's claim, evidence, certainty, and limitations.",
    "Write a neutral 150-word synthesis organized around two relationships between the sources.",
    "Review the synthesis and underline every phrase that attributes or qualifies a claim.",
  ],
};

const buildingComplexArgumentsConfig: C1LessonConfig = {
  slug: "building-complex-arguments",
  title: "Building Complex Arguments",
  descriptions: [
    "A strong position acknowledges complexity.",
    "Claims need reasons, evidence, counterarguments, and proportionate conclusions.",
  ],
  objective:
    "By the end of this class, students will be able to develop a structured argument, acknowledge a counterargument, and defend a position with relevant reasons and examples.",
  grammar: "Concession and rebuttal",
  vocabulary: "Argumentation",
  introductionPrompt: "Identify the claim, concession, and response in each argument.",
  introductionStatements: [
    "Although a four-day week may complicate scheduling, the evidence on retention makes a trial worthwhile.",
    "Admittedly, public transport requires investment; nevertheless, the long-term social benefits are substantial.",
    "The objection is valid in the short term, but it overlooks the cost of doing nothing.",
  ],
  introductionQuestions: [
    {
      question: "What is the function of 'Admittedly'?",
      options: [
        { option: "It introduces a concession.", isCorrect: true },
        { option: "It gives a final conclusion.", isCorrect: false },
        { option: "It changes the topic completely.", isCorrect: false },
      ],
    },
    {
      question: "What does the final statement criticize?",
      options: [
        { option: "The objection contains no truth.", isCorrect: false },
        { option: "The objection considers only one time frame.", isCorrect: true },
        { option: "The cost of action is unknown.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "Nora and Victor prepare opposing positions for a formal discussion.",
  dialogueLines: [
    {
      speaker: "Nora",
      line: "I support restricting cars in city centres because pollution and pedestrian safety affect everyone.",
    },
    {
      speaker: "Victor",
      line: "That is persuasive, but businesses may argue that reduced access will drive customers away.",
    },
    {
      speaker: "Nora",
      line: "That concern deserves attention. However, phased restrictions and delivery exemptions could reduce the disruption.",
    },
    {
      speaker: "Victor",
      line: "Then your position is not simply 'ban cars'; it is a managed transition with safeguards.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "How does Nora respond to the business objection?",
      options: [
        { option: "She ignores it.", isCorrect: false },
        { option: "She acknowledges it and proposes safeguards.", isCorrect: true },
        { option: "She abandons her position.", isCorrect: false },
      ],
    },
    {
      question: "How does Victor reformulate Nora's position?",
      options: [
        { option: "As an immediate total ban", isCorrect: false },
        { option: "As a managed transition", isCorrect: true },
        { option: "As unrestricted car access", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "A C1 argument develops a clear line of reasoning while recognizing relevant limitations and alternatives.",
    "Conceding a valid point can strengthen an argument when the speaker explains why the central claim still stands.",
  ],
  focusColumns: [
    {
      title: "Concede",
      items: ["Admittedly...", "While this concern is valid...", "It is true that..."],
    },
    {
      title: "Rebut or qualify",
      items: ["Nevertheless...", "This overlooks...", "That does not necessarily mean..."],
    },
    {
      title: "Support",
      items: ["A relevant example is...", "This is significant because...", "The strongest evidence is..."],
    },
  ],
  notes: [
    "A counterargument should be represented fairly before it is answered.",
    "Avoid absolute conclusions when the evidence supports only a limited or conditional claim.",
  ],
  ccqs: [
    "Does acknowledging a limitation automatically weaken a position? (No.)",
    "Should a rebuttal answer the actual objection rather than a weaker version? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which response addresses the counterargument most effectively?",
      options: [
        { option: "That argument is ridiculous.", isCorrect: false },
        {
          option: "The cost concern is legitimate; however, it excludes the measurable cost of delay.",
          isCorrect: true,
        },
        { option: "Everyone agrees with my position.", isCorrect: false },
      ],
    },
    {
      question: "Which conclusion is appropriately qualified?",
      options: [
        { option: "This policy will solve every problem.", isCorrect: false },
        { option: "This policy is likely to reduce the problem if enforcement is consistent.", isCorrect: true },
        { option: "No other policy could work.", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the argumentative sequence with a concession or rebuttal marker.",
  gapSentences: [
    { before: "", answer: "Admittedly", after: ", implementation would be expensive." },
    { before: "", answer: "Nevertheless", after: ", the long-term savings justify a limited trial." },
    { before: "The objection is relevant, but it ", answer: "overlooks", after: " the cost of inaction." },
  ],
  scrambleSentences: [
    {
      prompt: "valid / while / this concern / the evidence / remains / supports / the proposal",
      answer: "While this concern is valid, the evidence supports the proposal.",
    },
    {
      prompt: "a phased approach / disruption / could / reduce / nevertheless",
      answer: "Nevertheless, a phased approach could reduce disruption.",
    },
  ],
  productionTasks: [
    "Construct an argument map containing a claim, two reasons, one example, a fair counterargument, and a rebuttal.",
    "Deliver a two-minute position statement using at least one concession and one qualified conclusion.",
    "Respond to a partner's challenge without misrepresenting their position.",
  ],
};

const diplomaticCommunicationConfig: C1LessonConfig = {
  slug: "diplomatic-communication",
  title: "Diplomatic Communication",
  descriptions: [
    "Protect the relationship without hiding the message.",
    "Adapt directness, register, and tone to the situation.",
  ],
  objective:
    "By the end of this class, students will be able to soften disagreement, adapt register, and communicate a sensitive position clearly and diplomatically.",
  grammar: "Mitigation and modal distance",
  vocabulary: "Diplomacy and register",
  introductionPrompt: "Compare the impact of direct and mitigated versions of the same message.",
  introductionStatements: [
    "You misunderstood the brief.",
    "There may have been a slight difference in how we interpreted the brief.",
    "I can see the logic of that approach, although I have some reservations about the timing.",
  ],
  introductionQuestions: [
    {
      question: "Why is the second statement more diplomatic?",
      options: [
        { option: "It removes the problem entirely.", isCorrect: false },
        { option: "It distributes responsibility and reduces direct blame.", isCorrect: true },
        { option: "It is less grammatical.", isCorrect: false },
      ],
    },
    {
      question: "What does 'I can see the logic' do before disagreement?",
      options: [
        { option: "It acknowledges the other perspective.", isCorrect: true },
        { option: "It promises agreement.", isCorrect: false },
        { option: "It ends the discussion.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "A manager and a consultant discuss a delayed project without assigning unnecessary blame.",
  dialogueLines: [
    {
      speaker: "Manager",
      line: "I appreciate the work completed so far. That said, the current timeline may not leave enough room for testing.",
    },
    {
      speaker: "Consultant",
      line: "I understand the concern. We may have underestimated the approval stage.",
    },
    {
      speaker: "Manager",
      line: "Would it be possible to revise the sequence rather than move the final deadline immediately?",
    },
    {
      speaker: "Consultant",
      line: "That seems reasonable. We could bring the testing team in earlier, provided the scope remains stable.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "How does the manager introduce the problem?",
      options: [
        { option: "With direct personal blame", isCorrect: false },
        { option: "With acknowledgement followed by a qualified concern", isCorrect: true },
        { option: "By avoiding the timeline", isCorrect: false },
      ],
    },
    {
      question: "What condition does the consultant attach to the solution?",
      options: [
        { option: "The scope must remain stable.", isCorrect: true },
        { option: "The deadline must be cancelled.", isCorrect: false },
        { option: "Testing must be removed.", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "Diplomatic language calibrates directness according to power, risk, relationship, and purpose.",
    "Mitigation should soften the interpersonal impact without making the request or concern impossible to understand.",
  ],
  focusColumns: [
    {
      title: "Acknowledge",
      items: ["I appreciate that...", "I can see why...", "That is a fair point..."],
    },
    {
      title: "Mitigate",
      items: ["There may be...", "I have some reservations...", "It might be worth reconsidering..."],
    },
    {
      title: "Propose",
      items: ["Would it be possible to...?", "One option might be...", "Could we explore...?"],
    },
  ],
  notes: [
    "Over-mitigation can obscure the message. State the core issue and requested action clearly.",
    "Register depends on context: an internal chat, formal complaint, and executive meeting require different choices.",
  ],
  ccqs: [
    "Does diplomatic language require agreeing with the other person? (No.)",
    "Should the listener still understand what action is requested? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which sentence is diplomatic but still clear?",
      options: [
        { option: "This is wrong. Fix it.", isCorrect: false },
        {
          option: "I may be missing some context, but the figures appear inconsistent. Could we review them together?",
          isCorrect: true,
        },
        { option: "Perhaps something somewhere could change.", isCorrect: false },
      ],
    },
    {
      question: "Which phrase appropriately acknowledges disagreement?",
      options: [
        { option: "You clearly do not understand.", isCorrect: false },
        { option: "I see the reasoning, although I reach a different conclusion.", isCorrect: true },
        { option: "Whatever you say.", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete each sensitive message with a clear mitigating expression.",
  gapSentences: [
    { before: "", answer: "I can see why", after: " that option is attractive, although the legal risk remains." },
    { before: "There ", answer: "may have been", after: " a misunderstanding about the deadline." },
    { before: "", answer: "Would it be possible to", after: " review the wording before publication?" },
  ],
  scrambleSentences: [
    {
      prompt: "some reservations / I / the timing / have / about",
      answer: "I have some reservations about the timing.",
    },
    {
      prompt: "explore / could / another option / we / perhaps",
      answer: "Perhaps we could explore another option.",
    },
  ],
  productionTasks: [
    "Rewrite three overly direct workplace messages so that they remain clear but protect the relationship.",
    "Role-play a disagreement between people with unequal authority and adapt the level of directness appropriately.",
    "Write a concise follow-up message that records the concern, proposed action, and condition for agreement.",
  ],
};

const academicPresentationsConfig: C1LessonConfig = {
  slug: "academic-presentations",
  title: "Academic Presentations",
  descriptions: [
    "Guide the audience through a complex line of thought.",
    "Integrate subthemes and close with a meaningful conclusion.",
  ],
  objective:
    "By the end of this class, students will be able to deliver a well-structured presentation on a complex topic, integrate subthemes, and conclude with a clear overall message.",
  grammar: "Signposting and thematic development",
  vocabulary: "Presentation language",
  introductionPrompt: "Identify which signposts help an audience follow structure and significance.",
  introductionStatements: [
    "I will begin by defining the problem before turning to two competing explanations.",
    "This brings us to the broader question of who benefits from the policy.",
    "The main point I would like you to take away is that context changes the effect.",
  ],
  introductionQuestions: [
    {
      question: "Which phrase explicitly previews the structure?",
      options: [
        { option: "I will begin by... before turning to...", isCorrect: true },
        { option: "The policy exists.", isCorrect: false },
        { option: "Context changes.", isCorrect: false },
      ],
    },
    {
      question: "What is the function of 'This brings us to'?",
      options: [
        { option: "It signals a transition linked to the previous point.", isCorrect: true },
        { option: "It introduces an unrelated anecdote.", isCorrect: false },
        { option: "It apologizes for an error.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "Two presenters revise the structure of a talk on urban heat.",
  dialogueLines: [
    {
      speaker: "Elena",
      line: "My slides cover causes, unequal impacts, and possible interventions, but the talk still feels like three separate lists.",
    },
    {
      speaker: "Jon",
      line: "Make the relationship explicit. The causes explain where heat accumulates; that pattern explains who is most exposed.",
    },
    {
      speaker: "Elena",
      line: "Then the interventions can be evaluated according to whether they address both temperature and inequality.",
    },
    {
      speaker: "Jon",
      line: "Exactly. Your conclusion should return to that combined criterion rather than merely repeat the sections.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "What structural problem does Elena identify?",
      options: [
        { option: "The slides contain no information.", isCorrect: false },
        { option: "The sections are not connected into one argument.", isCorrect: true },
        { option: "The talk has too few images.", isCorrect: false },
      ],
    },
    {
      question: "What should the conclusion do?",
      options: [
        { option: "Introduce a completely new subject", isCorrect: false },
        { option: "Return to the combined criterion and overall argument", isCorrect: true },
        { option: "Repeat every sentence", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "A C1 presentation makes relationships between subthemes explicit and highlights why each stage matters.",
    "A conclusion synthesizes the argument and its significance; it does not simply announce that the talk has ended.",
  ],
  focusColumns: [
    {
      title: "Preview",
      items: ["I will first...", "The presentation is organized around...", "I will consider X before turning to Y."],
    },
    {
      title: "Connect",
      items: ["This is significant because...", "This brings us to...", "Seen in this context..."],
    },
    {
      title: "Conclude",
      items: ["Taken together...", "The central implication is...", "The main point to retain is..."],
    },
  ],
  notes: [
    "Use signposting selectively. Too many mechanical markers can obscure rather than clarify structure.",
    "Examples should support the central line of reasoning, not become disconnected stories.",
  ],
  ccqs: [
    "Should the audience have to guess why one section follows another? (No.)",
    "Is a conclusion more than a list of repeated points? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which transition best shows a causal link?",
      options: [
        { option: "Anyway, here is another slide.", isCorrect: false },
        { option: "This pattern of exposure leads directly to the second issue: unequal health outcomes.", isCorrect: true },
        { option: "Next topic.", isCorrect: false },
      ],
    },
    {
      question: "Which is the strongest conclusion?",
      options: [
        { option: "That is everything I know.", isCorrect: false },
        { option: "Taken together, the evidence suggests that effective cooling policy must address both design and inequality.", isCorrect: true },
        { option: "I discussed three things.", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the presentation signposts.",
  gapSentences: [
    { before: "I will begin by defining the issue before ", answer: "turning to", after: " its wider consequences." },
    { before: "This finding is ", answer: "significant because", after: " it challenges the standard explanation." },
    { before: "", answer: "Taken together", after: ", the three cases point to the same structural problem." },
  ],
  scrambleSentences: [
    {
      prompt: "brings / this / broader question / us / to / the",
      answer: "This brings us to the broader question.",
    },
    {
      prompt: "central implication / the / context / effect / changes / is that / the",
      answer: "The central implication is that context changes the effect.",
    },
  ],
  productionTasks: [
    "Create a presentation map with a central claim, two connected subthemes, evidence, and a synthesized conclusion.",
    "Deliver a three-minute presentation using explicit but natural signposting.",
    "Answer two follow-up questions by clarifying or extending a point rather than repeating it.",
  ],
};

const mediationAndClarificationConfig: C1LessonConfig = {
  slug: "mediation-and-clarification",
  title: "Mediation and Clarification",
  descriptions: [
    "Make complex information accessible without making it inaccurate.",
    "Notice and repair misunderstandings collaboratively.",
  ],
  objective:
    "By the end of this class, students will be able to explain a complex idea to a non-specialist, clarify a misunderstanding, and reformulate information without distorting it.",
  grammar: "Reformulation structures",
  vocabulary: "Explanation and clarification",
  introductionPrompt: "Compare technical information with accurate, audience-friendly reformulations.",
  introductionStatements: [
    "Technical: Correlation does not establish a causal mechanism.",
    "Accessible: Two things changing together does not prove that one caused the other.",
    "Oversimplified: Correlation means the two things are unrelated.",
  ],
  introductionQuestions: [
    {
      question: "Which reformulation preserves the original distinction?",
      options: [
        { option: "The accessible version", isCorrect: true },
        { option: "The oversimplified version", isCorrect: false },
        { option: "Neither version", isCorrect: false },
      ],
    },
    {
      question: "What is wrong with the oversimplified version?",
      options: [
        { option: "It denies that a relationship may exist.", isCorrect: true },
        { option: "It uses too many examples.", isCorrect: false },
        { option: "It is too cautious.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "A data specialist explains a finding to a community representative.",
  dialogueLines: [
    {
      speaker: "Specialist",
      line: "The model predicts an average reduction, but the confidence interval is relatively wide.",
    },
    {
      speaker: "Representative",
      line: "So you are saying the programme definitely works, but you do not know by how much?",
    },
    {
      speaker: "Specialist",
      line: "Not quite. The data points toward a benefit, but the uncertainty means we cannot yet be certain that the effect is real in every setting.",
    },
    {
      speaker: "Representative",
      line: "In other words, there is a promising signal, but we need more evidence before making a broad claim.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "What misunderstanding does the specialist correct?",
      options: [
        { option: "That the result proves the programme always works", isCorrect: true },
        { option: "That the study contains data", isCorrect: false },
        { option: "That the programme has a name", isCorrect: false },
      ],
    },
    {
      question: "Why is the representative's final reformulation effective?",
      options: [
        { option: "It removes all uncertainty.", isCorrect: false },
        { option: "It preserves both the positive signal and the limitation.", isCorrect: true },
        { option: "It adds a new statistic.", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "Mediation transforms access to information, not the truth conditions of the information itself.",
    "Clarification checks the source of a misunderstanding and reformulates the relevant distinction.",
  ],
  focusColumns: [
    {
      title: "Reformulate",
      items: ["In other words...", "Put more simply...", "What this means in practice is..."],
    },
    {
      title: "Clarify",
      items: ["Not quite...", "The distinction is...", "What I mean is not X, but Y."],
    },
    {
      title: "Check",
      items: ["Does that distinction make sense?", "Would an example help?", "How would you restate that?"],
    },
  ],
  notes: [
    "Replace unnecessary terminology, but retain essential distinctions, conditions, and uncertainty.",
    "Examples and analogies should illuminate the concept without becoming false equivalents.",
  ],
  ccqs: [
    "Can a simpler explanation still be precise? (Yes.)",
    "Should mediation remove inconvenient limitations from the source? (No.)",
  ],
  practiceQuestions: [
    {
      question: "Which is the most accurate plain-language version of 'The evidence is inconclusive'?",
      options: [
        { option: "The claim is false.", isCorrect: false },
        { option: "The available evidence does not yet support a firm conclusion.", isCorrect: true },
        { option: "There is no evidence at all.", isCorrect: false },
      ],
    },
    {
      question: "Which question best checks understanding?",
      options: [
        { option: "You understand, right?", isCorrect: false },
        { option: "How would you explain the difference between a signal and proof?", isCorrect: true },
        { option: "Why were you confused?", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the clarification or reformulation.",
  gapSentences: [
    { before: "", answer: "In other words", after: ", the pattern is promising but not conclusive." },
    { before: "", answer: "Not quite", after: "; the data suggests a benefit rather than proving one." },
    { before: "What this means ", answer: "in practice", after: " is that further testing is needed." },
  ],
  scrambleSentences: [
    {
      prompt: "does not / that / one / caused / prove / the other / it",
      answer: "It does not prove that one caused the other.",
    },
    {
      prompt: "distinction / sense / does / that / make",
      answer: "Does that distinction make sense?",
    },
  ],
  productionTasks: [
    "Explain a technical concept from your field to a non-specialist in 100 words without losing its main limitation.",
    "Ask a partner to restate the concept, identify one misunderstanding, and clarify it collaboratively.",
    "Create an analogy and then state where the analogy stops being accurate.",
  ],
};

const criticalReviewsConfig: C1LessonConfig = {
  slug: "critical-reviews",
  title: "Critical Reviews",
  descriptions: [
    "Move from personal reaction to criteria-based judgment.",
    "Balance strengths, limitations, evidence, and audience needs.",
  ],
  objective:
    "By the end of this class, students will be able to evaluate a cultural or media work using explicit criteria and support a balanced judgment with specific evidence.",
  grammar: "Evaluative structures",
  vocabulary: "Critical appraisal",
  introductionPrompt: "Distinguish unsupported opinion from criteria-based evaluation.",
  introductionStatements: [
    "I loved the documentary. It was amazing.",
    "The documentary makes a complex issue accessible, although its reliance on a single case limits the argument.",
    "The visual design reinforces the central contrast, but the conclusion resolves the tension too neatly.",
  ],
  introductionQuestions: [
    {
      question: "Which statement contains both a criterion and a limitation?",
      options: [
        { option: "The first statement", isCorrect: false },
        { option: "The second statement", isCorrect: true },
        { option: "Neither statement", isCorrect: false },
      ],
    },
    {
      question: "What is evaluated in the third statement?",
      options: [
        { option: "Visual function and narrative resolution", isCorrect: true },
        { option: "Ticket price only", isCorrect: false },
        { option: "The reviewer's mood", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "Two reviewers compare their judgments of a documentary.",
  dialogueLines: [
    {
      speaker: "Ravi",
      line: "The film is compelling because it turns abstract statistics into personal consequences.",
    },
    {
      speaker: "Sofia",
      line: "I agree about the emotional impact, but the personal focus sometimes substitutes anecdote for broader evidence.",
    },
    {
      speaker: "Ravi",
      line: "That is fair. Perhaps its strength as storytelling is also a limitation as analysis.",
    },
    {
      speaker: "Sofia",
      line: "Exactly. I would recommend it as an introduction, not as a comprehensive account.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "What shared judgment do the reviewers reach?",
      options: [
        { option: "The documentary fails completely.", isCorrect: false },
        { option: "Its storytelling is effective but analytically limited.", isCorrect: true },
        { option: "Statistics should never be used.", isCorrect: false },
      ],
    },
    {
      question: "How does Sofia qualify her recommendation?",
      options: [
        { option: "She recommends it as a complete authority.", isCorrect: false },
        { option: "She recommends it as an introduction.", isCorrect: true },
        { option: "She refuses to recommend it to anyone.", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "Critical appraisal makes the basis of judgment visible: purpose, evidence, structure, style, impact, or audience suitability.",
    "A balanced review can be decisive while still recognizing where a strength creates a limitation.",
  ],
  focusColumns: [
    {
      title: "Criteria",
      items: ["in terms of...", "as an example of...", "judged against its aim..."],
    },
    {
      title: "Balance",
      items: ["its main strength lies in...", "this is partly undermined by...", "effective though..."],
    },
    {
      title: "Judgment",
      items: ["ultimately...", "on balance...", "best suited to an audience that..."],
    },
  ],
  notes: [
    "Evidence may include a scene, quotation, structural choice, visual technique, or pattern across the work.",
    "Avoid plot summary unless the detail is necessary to support evaluation.",
  ],
  ccqs: [
    "Is 'I liked it' sufficient evidence for a critical judgment? (No.)",
    "Can the same feature function as both a strength and a limitation? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which sentence is the most analytical?",
      options: [
        { option: "The ending was bad.", isCorrect: false },
        {
          option: "The abrupt ending preserves ambiguity, although it leaves the central ethical conflict underdeveloped.",
          isCorrect: true,
        },
        { option: "The film ended after two hours.", isCorrect: false },
      ],
    },
    {
      question: "Which recommendation is appropriately audience-specific?",
      options: [
        { option: "Everyone must watch it.", isCorrect: false },
        { option: "It is best suited to viewers seeking an accessible introduction rather than a technical account.", isCorrect: true },
        { option: "It is objectively perfect.", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the balanced evaluation.",
  gapSentences: [
    { before: "Its main ", answer: "strength", after: " lies in making the issue emotionally immediate." },
    { before: "This is partly ", answer: "undermined by", after: " the narrow range of evidence." },
    { before: "", answer: "On balance", after: ", it succeeds as an introduction rather than a definitive account." },
  ],
  scrambleSentences: [
    {
      prompt: "strength / its / also / a limitation / becomes / greatest",
      answer: "Its greatest strength also becomes a limitation.",
    },
    {
      prompt: "the intended audience / effective / judged against / it is",
      answer: "It is effective when judged against the intended audience.",
    },
  ],
  productionTasks: [
    "Choose three explicit criteria and collect one piece of evidence for each before drafting a review.",
    "Write a 180-word critical review that balances strengths and limitations and identifies the appropriate audience.",
    "Exchange reviews and identify any judgment that lacks specific evidence.",
  ],
};

const negotiationAndConsensusConfig: C1LessonConfig = {
  slug: "negotiation-and-consensus",
  title: "Negotiation and Consensus",
  descriptions: [
    "Compare priorities before defending solutions.",
    "A workable compromise preserves what matters most to each side.",
  ],
  objective:
    "By the end of this class, students will be able to compare competing priorities, negotiate alternatives, and formulate a compromise that reflects different perspectives.",
  grammar: "Conditional proposals",
  vocabulary: "Negotiation and compromise",
  introductionPrompt: "Identify the priority protected by each proposal.",
  introductionStatements: [
    "We could accept the earlier launch provided the safety review remains unchanged.",
    "If the budget cannot increase, we would need to reduce the scope rather than the testing period.",
    "A possible middle ground would be to pilot the service in two regions before expanding it.",
  ],
  introductionQuestions: [
    {
      question: "What is non-negotiable in the first proposal?",
      options: [
        { option: "The launch date", isCorrect: false },
        { option: "The safety review", isCorrect: true },
        { option: "The number of regions", isCorrect: false },
      ],
    },
    {
      question: "Why is the pilot a compromise?",
      options: [
        { option: "It rejects expansion permanently.", isCorrect: false },
        { option: "It allows limited progress while managing risk.", isCorrect: true },
        { option: "It removes all conditions.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "A community group and transport team negotiate a late-night bus pilot.",
  dialogueLines: [
    {
      speaker: "Community",
      line: "Our priority is reliable service after midnight, particularly for hospital and hospitality workers.",
    },
    {
      speaker: "Transport",
      line: "We support the goal, but running every route hourly would exceed the pilot budget.",
    },
    {
      speaker: "Community",
      line: "Could we identify the three highest-demand corridors and guarantee connections from those stops?",
    },
    {
      speaker: "Transport",
      line: "That could work, provided usage is reviewed after three months before any wider commitment.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "What does the community preserve in its revised proposal?",
      options: [
        { option: "Coverage of every route", isCorrect: false },
        { option: "Reliable access for the highest-demand corridors", isCorrect: true },
        { option: "An unlimited budget", isCorrect: false },
      ],
    },
    {
      question: "What condition does the transport team request?",
      options: [
        { option: "A review after three months", isCorrect: true },
        { option: "Immediate permanent expansion", isCorrect: false },
        { option: "No evening service", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "C1 negotiation involves identifying underlying interests, not only repeating preferred positions.",
    "A consensus statement records the shared goal, agreed action, conditions, and unresolved issues.",
  ],
  focusColumns: [
    {
      title: "Explore interests",
      items: ["What is the main concern behind...?", "Which element is essential?", "Where is there flexibility?"],
    },
    {
      title: "Offer conditions",
      items: ["We could agree provided that...", "If X, we would be willing to Y.", "On the condition that..."],
    },
    {
      title: "Build consensus",
      items: ["A possible middle ground...", "What we appear to agree on...", "The remaining issue is..."],
    },
  ],
  notes: [
    "Positions are proposed solutions; interests are the needs those solutions are intended to protect.",
    "Do not announce consensus until conditions and remaining disagreements are explicit.",
  ],
  ccqs: [
    "Does compromise require both sides to abandon every priority? (No.)",
    "Should a conditional agreement state its condition clearly? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which question explores an underlying interest?",
      options: [
        { option: "Why is your proposal wrong?", isCorrect: false },
        { option: "Which outcome must the final plan protect?", isCorrect: true },
        { option: "Will you accept my plan now?", isCorrect: false },
      ],
    },
    {
      question: "Which is a clear conditional offer?",
      options: [
        { option: "Maybe something could happen.", isCorrect: false },
        { option: "We could accept a shorter pilot provided the safety threshold remains unchanged.", isCorrect: true },
        { option: "We accept everything.", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the negotiation language.",
  gapSentences: [
    { before: "We could accept the change ", answer: "provided that", after: " the review date remains fixed." },
    { before: "A possible ", answer: "middle ground", after: " would be a limited regional pilot." },
    { before: "What we appear to ", answer: "agree on", after: " is the need for reliable access." },
  ],
  scrambleSentences: [
    {
      prompt: "provided / agree / could / remains / the budget / stable / we",
      answer: "We could agree provided the budget remains stable.",
    },
    {
      prompt: "remaining issue / how / the / measure success / is / to",
      answer: "The remaining issue is how to measure success.",
    },
  ],
  productionTasks: [
    "Rank the interests of two stakeholder groups before proposing any solution.",
    "Negotiate a pilot plan containing scope, timeline, success criteria, and one explicit condition.",
    "Write a consensus statement that distinguishes agreements from unresolved issues.",
  ],
};

const precisionAndNuanceConfig: C1LessonConfig = {
  slug: "precision-and-nuance",
  title: "Precision and Nuance",
  descriptions: [
    "Choose language that matches the strength of the evidence.",
    "Express attitude without turning possibility into certainty.",
  ],
  objective:
    "By the end of this class, students will be able to express fine shades of certainty and attitude by selecting precise hedging, emphasis, and qualification devices.",
  grammar: "Modality and qualification",
  vocabulary: "Degrees of certainty",
  introductionPrompt: "Place the statements on a scale from tentative to highly confident.",
  introductionStatements: [
    "The change might have contributed to the decline.",
    "The change is likely to have contributed to the decline.",
    "The change almost certainly contributed to the decline.",
  ],
  introductionQuestions: [
    {
      question: "Which statement expresses the weakest certainty?",
      options: [
        { option: "might have contributed", isCorrect: true },
        { option: "is likely to have contributed", isCorrect: false },
        { option: "almost certainly contributed", isCorrect: false },
      ],
    },
    {
      question: "Does 'almost certainly' mean absolute certainty?",
      options: [
        { option: "Yes", isCorrect: false },
        { option: "No", isCorrect: true },
      ],
    },
  ],
  dialoguePrompt: "Researchers calibrate the language of a preliminary finding.",
  dialogueLines: [
    {
      speaker: "Aisha",
      line: "The intervention caused the improvement.",
    },
    {
      speaker: "Ben",
      line: "That is stronger than the design allows. Other variables were not fully controlled.",
    },
    {
      speaker: "Aisha",
      line: "Then perhaps: the intervention appears to have contributed to the improvement.",
    },
    {
      speaker: "Ben",
      line: "Yes. That reflects the positive pattern without presenting correlation as proof.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "Why is Aisha's first claim too strong?",
      options: [
        { option: "The study did not control every relevant variable.", isCorrect: true },
        { option: "The sentence is too short.", isCorrect: false },
        { option: "No improvement occurred.", isCorrect: false },
      ],
    },
    {
      question: "What relationship does the revised wording express?",
      options: [
        { option: "A possible contribution", isCorrect: true },
        { option: "Certain exclusive causation", isCorrect: false },
        { option: "No relationship", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "Precision means matching wording to evidence, purpose, and intended strength—not always choosing the strongest expression.",
    "C1 users can qualify claims and distinguish possibility, probability, strong confidence, and certainty.",
  ],
  focusColumns: [
    {
      title: "Tentative",
      items: ["might", "could conceivably", "appears to", "cannot be ruled out"],
    },
    {
      title: "Probable",
      items: ["is likely to", "probably", "there is good reason to believe"],
    },
    {
      title: "Strong but qualified",
      items: ["almost certainly", "strongly suggests", "in all likelihood"],
    },
  ],
  notes: [
    "Hedging is not weakness when uncertainty is genuine; it is a form of accuracy.",
    "Boosters such as 'clearly' or 'undoubtedly' need evidence and can sound manipulative when overused.",
  ],
  ccqs: [
    "Should every claim in an academic discussion sound certain? (No.)",
    "Can 'strongly suggests' still allow another explanation? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which claim best fits limited preliminary evidence?",
      options: [
        { option: "The treatment cures the condition.", isCorrect: false },
        { option: "The early results suggest that the treatment may reduce symptoms.", isCorrect: true },
        { option: "The treatment undoubtedly works for everyone.", isCorrect: false },
      ],
    },
    {
      question: "Which expression signals strong confidence without absolute certainty?",
      options: [
        { option: "possibly", isCorrect: false },
        { option: "almost certainly", isCorrect: true },
        { option: "maybe", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Choose a degree of certainty that matches the evidence described.",
  gapSentences: [
    { before: "The preliminary pattern ", answer: "appears to", after: " support the hypothesis." },
    { before: "The decline was ", answer: "likely to have been", after: " influenced by several factors." },
    { before: "The new evidence ", answer: "strongly suggests", after: " that the earlier estimate was too low." },
  ],
  scrambleSentences: [
    {
      prompt: "have contributed / appears / the change / to / the decline / to",
      answer: "The change appears to have contributed to the decline.",
    },
    {
      prompt: "another explanation / cannot / ruled out / be",
      answer: "Another explanation cannot be ruled out.",
    },
  ],
  productionTasks: [
    "Create a certainty scale for eight expressions and explain one important distinction between adjacent items.",
    "Revise five overconfident claims so that each matches the evidence provided.",
    "Defend one wording choice by explaining why a stronger or weaker alternative would be misleading.",
  ],
};

const researchBriefingConfig: C1LessonConfig = {
  slug: "research-briefing",
  title: "Research Briefing",
  descriptions: [
    "Separate evidence, interpretation, limitation, and recommendation.",
    "Give decision-makers a concise and defensible account.",
  ],
  objective:
    "By the end of this class, students will be able to synthesize evidence from several claims, distinguish fact from inference, and present a concise briefing with justified recommendations.",
  grammar: "Evidence-based reporting",
  vocabulary: "Research and recommendations",
  introductionPrompt: "Classify each statement as evidence, inference, limitation, or recommendation.",
  introductionStatements: [
    "Survey participation increased from 42% to 61% after reminders were introduced.",
    "The reminders may have improved participation, although the groups were not randomly assigned.",
    "A controlled pilot should be conducted before the system is expanded.",
  ],
  introductionQuestions: [
    {
      question: "Which statement reports directly observed evidence?",
      options: [
        { option: "The first statement", isCorrect: true },
        { option: "The second statement", isCorrect: false },
        { option: "The third statement", isCorrect: false },
      ],
    },
    {
      question: "Why is the second statement appropriately cautious?",
      options: [
        { option: "It distinguishes a possible explanation from proof and states a limitation.", isCorrect: true },
        { option: "It guarantees the reminders worked.", isCorrect: false },
        { option: "It contains no interpretation.", isCorrect: false },
      ],
    },
  ],
  dialoguePrompt: "A research analyst briefs a director on a pilot programme.",
  dialogueLines: [
    {
      speaker: "Analyst",
      line: "Participation rose in all three sites, with the largest increase where reminders were personalized.",
    },
    {
      speaker: "Director",
      line: "Can we conclude that personalization caused the increase?",
    },
    {
      speaker: "Analyst",
      line: "Not conclusively. That site also had more staff support, so the effects cannot be separated with the current design.",
    },
    {
      speaker: "Director",
      line: "Then what action does the evidence justify?",
    },
    {
      speaker: "Analyst",
      line: "A controlled comparison of standard and personalized reminders would be proportionate before a full rollout.",
    },
  ],
  comprehensionQuestions: [
    {
      question: "What prevents a causal conclusion?",
      options: [
        { option: "The sites used different colours.", isCorrect: false },
        { option: "Personalization and staff support varied together.", isCorrect: true },
        { option: "Participation did not change.", isCorrect: false },
      ],
    },
    {
      question: "Why is the recommendation proportionate?",
      options: [
        { option: "It matches the uncertainty and tests the unresolved explanation.", isCorrect: true },
        { option: "It assumes the strongest claim is true.", isCorrect: false },
        { option: "It ends all data collection.", isCorrect: false },
      ],
    },
  ],
  meaning: [
    "A briefing distinguishes what was observed, what is inferred, what remains uncertain, and what action the evidence supports.",
    "Recommendations should be proportionate to evidence, risk, cost, and reversibility.",
  ],
  focusColumns: [
    {
      title: "Evidence",
      items: ["The data shows...", "Across the sample...", "The observed change was..."],
    },
    {
      title: "Interpretation",
      items: ["A plausible explanation is...", "This may indicate...", "The evidence does not establish..."],
    },
    {
      title: "Recommendation",
      items: ["The evidence supports...", "A proportionate next step would be...", "Before rollout..."],
    },
  ],
  notes: [
    "A concise briefing omits secondary detail but never omits a limitation that changes the decision.",
    "Use headings or verbal signposts so the audience can distinguish findings from recommendations.",
  ],
  ccqs: [
    "Is an interpretation the same as an observed fact? (No.)",
    "Should recommendation strength reflect evidence strength? (Yes.)",
  ],
  practiceQuestions: [
    {
      question: "Which statement clearly separates finding from interpretation?",
      options: [
        { option: "Sales rose, so the campaign definitely caused the increase.", isCorrect: false },
        { option: "Sales rose by 8%; the timing suggests the campaign may have contributed, though seasonal demand also increased.", isCorrect: true },
        { option: "The campaign was a success because I liked it.", isCorrect: false },
      ],
    },
    {
      question: "Which recommendation is proportionate to uncertain evidence?",
      options: [
        { option: "Implement permanently everywhere tomorrow.", isCorrect: false },
        { option: "Run a limited controlled pilot with predefined success criteria.", isCorrect: true },
        { option: "Ignore the findings entirely.", isCorrect: false },
      ],
    },
  ],
  gapInstruction: "Complete the evidence-based briefing language.",
  gapSentences: [
    { before: "The observed ", answer: "change", after: " was an increase of nineteen percentage points." },
    { before: "A plausible ", answer: "explanation", after: " is the introduction of reminders." },
    { before: "A proportionate next ", answer: "step", after: " would be a controlled pilot." },
  ],
  scrambleSentences: [
    {
      prompt: "does not establish / the evidence / a causal link",
      answer: "The evidence does not establish a causal link.",
    },
    {
      prompt: "before rollout / a controlled pilot / conducted / should be",
      answer: "A controlled pilot should be conducted before rollout.",
    },
  ],
  productionTasks: [
    "Classify a small evidence pack into findings, interpretations, limitations, and possible actions.",
    "Deliver a two-minute briefing containing one key finding, one limitation, and one proportionate recommendation.",
    "Answer a challenge by identifying whether the question concerns evidence, inference, or recommendation.",
  ],
};

export const advancedReadingBetweenTheLines = createC1Lesson(
  readingBetweenTheLinesConfig,
);
export const advancedSynthesizingSources = createC1Lesson(
  synthesizingSourcesConfig,
);
export const advancedBuildingComplexArguments = createC1Lesson(
  buildingComplexArgumentsConfig,
);
export const advancedDiplomaticCommunication = createC1Lesson(
  diplomaticCommunicationConfig,
);
export const advancedAcademicPresentations = createC1Lesson(
  academicPresentationsConfig,
);
export const advancedMediationAndClarification = createC1Lesson(
  mediationAndClarificationConfig,
);
export const advancedCriticalReviews = createC1Lesson(criticalReviewsConfig);
export const advancedNegotiationAndConsensus = createC1Lesson(
  negotiationAndConsensusConfig,
);
export const advancedPrecisionAndNuance = createC1Lesson(
  precisionAndNuanceConfig,
);
export const advancedResearchBriefing = createC1Lesson(researchBriefingConfig);
