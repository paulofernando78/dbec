// Beginner
import { beginnerHello } from "@/data/course/beginner/hello";
import { beginnerPersonalInformation } from "@/data/course/beginner/personal-information";
import { beginnerMyFamily } from "@/data/course/beginner/my-family";
import { beginnerMyHouse } from "@/data/course/beginner/my-house";
import { beginnerDailyRoutine } from "@/data/course/beginner/daily-routine";
import { beginnerMyWeek } from "@/data/course/beginner/my-week";
import { beginnerFoodAndDrinks } from "@/data/course/beginner/food-and-drinks";
import { beginnerShopping } from "@/data/course/beginner/shopping";
import { beginnerAroundTown } from "@/data/course/beginner/around-town";
import { beginnerWhatAreYouDoing } from "@/data/course/beginner/what-are-you-doing";
import { beginnerAbilities } from "@/data/course/beginner/abilities";
import { beginnerRealLifeProject } from "@/data/course/beginner/real-life-project";

// Elementary
// Past
import { elementaryPastBeach } from "@/data/course/elementary/past-beach";
import { elementaryPastMovies } from "@/data/course/elementary/past-movies";
import { elementaryPastFamily } from "@/data/course/elementary/past-family";
import { elementaryPastHome } from "@/data/course/elementary/past-home";

import { elementaryTravelPlans } from "@/data/course/elementary/travel-plans";
import { elementaryFuturePredictions } from "@/data/course/elementary/future-predictions";
import { elementaryCityLife } from "@/data/course/elementary/city-life";
import { elementaryTheBestPlace } from "@/data/course/elementary/the-best-place";
import { elementaryHealthyLiving } from "@/data/course/elementary/healthy-living";
import { elementaryRules } from "@/data/course/elementary/rules";
import { elementaryShoppingSmart } from "@/data/course/elementary/shopping-smart";
import { elementaryExperiences } from "@/data/course/elementary/experiences";
import { elementaryHobbies } from "@/data/course/elementary/hobbies";

// Intermediate
import { intermediateCareerPath } from "@/data/course/intermediate/career-path";
import { intermediateGreenPlanet } from "@/data/course/intermediate/green-planet";
import { intermediateLifeExperiences } from "@/data/course/intermediate/life-experiences";
import { intermediateMakingPlans } from "@/data/course/intermediate/making-plans";
import { intermediateNewsReport } from "@/data/course/intermediate/news-report";
import { intermediateRelationships } from "@/data/course/intermediate/relationships";
import { intermediateStorytelling } from "@/data/course/intermediate/storytelling";
import { intermediateTechnologyToday } from "@/data/course/intermediate/technology-today";
import { intermediateWhatDidTheySay } from "@/data/course/intermediate/what-did-they-say";
import { intermediateWhatIf } from "@/data/course/intermediate/what-if";

// Upper-Intermediate
import { upperIntermediateBusinessCommunication } from "@/data/course/upper-intermediate/business-communication";
import { upperIntermediateDebateClub } from "@/data/course/upper-intermediate/debate-club";
import { upperIntermediateDreamScenarios } from "@/data/course/upper-intermediate/dream-scenarios";
import { upperIntermediateGlobalIssues } from "@/data/course/upper-intermediate/global-issues";
import { upperIntermediateInnovation } from "@/data/course/upper-intermediate/innovation";
import { upperIntermediateLeadership } from "@/data/course/upper-intermediate/leadership";
import { upperIntermediateMediaAndMarketing } from "@/data/course/upper-intermediate/media-and-marketing";
import { upperIntermediateNativeLikeEnglish } from "@/data/course/upper-intermediate/native-like-english";
import { upperIntermediateNaturalEnglish } from "@/data/course/upper-intermediate/natural-english";
import { upperIntermediateRegrets } from "@/data/course/upper-intermediate/regrets";

// Advanced
import { advancedAcademicPresentations } from "@/data/course/advanced/academic-presentations";
import { advancedBuildingComplexArguments } from "@/data/course/advanced/building-complex-arguments";
import { advancedCriticalReviews } from "@/data/course/advanced/critical-reviews";
import { advancedDiplomaticCommunication } from "@/data/course/advanced/diplomatic-communication";
import { advancedMediationAndClarification } from "@/data/course/advanced/mediation-and-clarification";
import { advancedNegotiationAndConsensus } from "@/data/course/advanced/negotiation-and-consensus";
import { advancedPrecisionAndNuance } from "@/data/course/advanced/precision-and-nuance";
import { advancedReadingBetweenTheLines } from "@/data/course/advanced/reading-between-the-lines";
import { advancedResearchBriefing } from "@/data/course/advanced/research-briefing";
import { advancedSynthesizingSources } from "@/data/course/advanced/synthesizing-sources";

type Lesson = Record<string, any>;
type LessonMap = Record<string, Lesson>;

export type CourseLessonLevel = {
  lessons: LessonMap;
};

export const courseLessons: Record<string, CourseLessonLevel> = {
  beginner: {
    lessons: {
      hello: beginnerHello,
      "personal-information": beginnerPersonalInformation,
      "my-family": beginnerMyFamily,
      "my-house": beginnerMyHouse,
      "daily-routine": beginnerDailyRoutine,
      "my-week": beginnerMyWeek,
      "food-and-drinks": beginnerFoodAndDrinks,
      shopping: beginnerShopping,
      "around-town": beginnerAroundTown,
      "what-are-you-doing": beginnerWhatAreYouDoing,
      abilities: beginnerAbilities,
      "real-life-project": beginnerRealLifeProject,
    },
  },
  elementary: {
    lessons: {
      "past-beach": elementaryPastBeach,
      "past-movies": elementaryPastMovies,
      "past-family": elementaryPastFamily,
      "past-home": elementaryPastHome,
      "travel-plans": elementaryTravelPlans,
      "future-predictions": elementaryFuturePredictions,
      "city-life": elementaryCityLife,
      "the-best-place": elementaryTheBestPlace,
      "healthy-living": elementaryHealthyLiving,
      rules: elementaryRules,
      "shopping-smart": elementaryShoppingSmart,
      experiences: elementaryExperiences,
      hobbies: elementaryHobbies,
    },
  },
  intermediate: {
    lessons: {
      "life-experiences": intermediateLifeExperiences,
      storytelling: intermediateStorytelling,
      "making-plans": intermediateMakingPlans,
      "what-if": intermediateWhatIf,
      "green-planet": intermediateGreenPlanet,
      "technology-today": intermediateTechnologyToday,
      "news-report": intermediateNewsReport,
      "what-did-they-say": intermediateWhatDidTheySay,
      "career-path": intermediateCareerPath,
      relationships: intermediateRelationships,
    },
  },
  "upper-intermediate": {
    lessons: {
      "dream-scenarios": upperIntermediateDreamScenarios,
      regrets: upperIntermediateRegrets,
      "business-communication": upperIntermediateBusinessCommunication,
      leadership: upperIntermediateLeadership,
      innovation: upperIntermediateInnovation,
      "global-issues": upperIntermediateGlobalIssues,
      "debate-club": upperIntermediateDebateClub,
      "media-and-marketing": upperIntermediateMediaAndMarketing,
      "native-like-english": upperIntermediateNativeLikeEnglish,
      "natural-english": upperIntermediateNaturalEnglish,
    },
  },
  advanced: {
    lessons: {
      "reading-between-the-lines": advancedReadingBetweenTheLines,
      "synthesizing-sources": advancedSynthesizingSources,
      "building-complex-arguments": advancedBuildingComplexArguments,
      "diplomatic-communication": advancedDiplomaticCommunication,
      "academic-presentations": advancedAcademicPresentations,
      "mediation-and-clarification": advancedMediationAndClarification,
      "critical-reviews": advancedCriticalReviews,
      "negotiation-and-consensus": advancedNegotiationAndConsensus,
      "precision-and-nuance": advancedPrecisionAndNuance,
      "research-briefing": advancedResearchBriefing,
    },
  },
};

export const getCourseLesson = ({
  level,
  slug,
}: {
  level?: string;
  slug?: string;
}) => {
  if (!level || !slug) return undefined;

  const levelLessons = courseLessons[level];

  if (!levelLessons) return undefined;

  return levelLessons.lessons[slug];
};
