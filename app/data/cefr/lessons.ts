// Beginner
import { beginnerHello } from "@/data/cefr/beginner/hello";
import { beginnerMyFamily } from "@/data/cefr/beginner/my-family";
import { beginnerMyHouse } from "@/data/cefr/beginner/my-house";
import { beginnerDailyRoutine } from "@/data/cefr/beginner/daily-routine";
import { beginnerMyWeek } from "@/data/cefr/beginner/my-week";
import { beginnerFoodAndDrinks } from "@/data/cefr/beginner/food-and-drinks";
import { beginnerShopping } from "@/data/cefr/beginner/shopping";
import { beginnerAroundTown } from "@/data/cefr/beginner/around-town";
import { beginnerWhatAreYouDoing } from "@/data/cefr/beginner/what-are-you-doing";
import { beginnerAbilities } from "@/data/cefr/beginner/abilities";

// Elementary
// Past
import { elementaryPastBeach } from "@/data/cefr/elementary/past-beach";
import { elementaryPastMovies } from "@/data/cefr/elementary/past-movies";
import { elementaryPastFamily } from "@/data/cefr/elementary/past-family";
import { elementaryPastHome } from "@/data/cefr/elementary/past-home";

import { elementaryTravelPlans } from "@/data/cefr/elementary/travel-plans";
import { elementaryFuturePredictions } from "@/data/cefr/elementary/future-predictions";
import { elementaryCityLife } from "@/data/cefr/elementary/city-life";
import { elementaryTheBestPlace } from "@/data/cefr/elementary/the-best-place";
import { elementaryHealthyLiving } from "@/data/cefr/elementary/healthy-living";
import { elementaryRules } from "@/data/cefr/elementary/rules";
import { elementaryShoppingSmart } from "@/data/cefr/elementary/shopping-smart";
import { elementaryExperiences } from "@/data/cefr/elementary/experiences";
import { elementaryHobbies } from "@/data/cefr/elementary/hobbies";

// Intermediate
import { intermediateLifeExperiences } from "@/data/cefr/intermediate/life-experiences";
import { intermediateStorytelling } from "@/data/cefr/intermediate/storytelling";
import { intermediateMakingPlans } from "@/data/cefr/intermediate/making-plans";
import { intermediateWhatIf } from "@/data/cefr/intermediate/what-if";
import { intermediateGreenPlanet } from "@/data/cefr/intermediate/green-planet";
import { intermediateTechnologyToday } from "@/data/cefr/intermediate/technology-today";
import { intermediateNewsReport } from "@/data/cefr/intermediate/news-report";
import { intermediateWhatDidTheySay } from "@/data/cefr/intermediate/what-did-they-say";
import { intermediateCareerPath } from "@/data/cefr/intermediate/career-path";
import { intermediateRelationships } from "@/data/cefr/intermediate/relationships";

// Upper-Intermediate
import { upperIntermediateDreamScenarios } from "@/data/cefr/upper-intermediate/dream-scenarios";
import { upperIntermediateRegrets } from "@/data/cefr/upper-intermediate/regrets";
import { upperIntermediateBusinessCommunication } from "@/data/cefr/upper-intermediate/business-communication";
import { upperIntermediateLeadership } from "@/data/cefr/upper-intermediate/leadership";
import { upperIntermediateInnovation } from "@/data/cefr/upper-intermediate/innovation";
import { upperIntermediateGlobalIssues } from "@/data/cefr/upper-intermediate/global-issues";
import { upperIntermediateDebateClub } from "@/data/cefr/upper-intermediate/debate-club";
import { upperIntermediateMediaAndMarketing } from "@/data/cefr/upper-intermediate/media-and-marketing";
import { upperIntermediateNativeLikeEnglish } from "@/data/cefr/upper-intermediate/native-like-english";
import { upperIntermediateNaturalEnglish } from "@/data/cefr/upper-intermediate/natural-english";

// Advanced
import {
  advancedAcademicPresentations,
  advancedBuildingComplexArguments,
  advancedCriticalReviews,
  advancedDiplomaticCommunication,
  advancedMediationAndClarification,
  advancedNegotiationAndConsensus,
  advancedPrecisionAndNuance,
  advancedReadingBetweenTheLines,
  advancedResearchBriefing,
  advancedSynthesizingSources,
} from "@/data/cefr/advanced/c1-lessons";

type Lesson = Record<string, any>;
type LessonMap = Record<string, Lesson>;
type CategoryLessonMap = Record<string, LessonMap>;

export type CefrLessonLevel = {
  lessons: LessonMap;
  categories?: CategoryLessonMap;
};

export const cefrLessons: Record<string, CefrLessonLevel> = {
  beginner: {
    lessons: {
      "hello": beginnerHello,
      "my-family": beginnerMyFamily,
      "my-house": beginnerMyHouse,
      "daily-routine": beginnerDailyRoutine,
      "my-week": beginnerMyWeek,
      "food-and-drinks": beginnerFoodAndDrinks,
      "shopping": beginnerShopping,
      "around-town": beginnerAroundTown,
      "what-are-you-doing": beginnerWhatAreYouDoing,
      "abilities": beginnerAbilities,
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
      "storytelling": intermediateStorytelling,
      "making-plans": intermediateMakingPlans,
      "what-if": intermediateWhatIf,
      "green-planet": intermediateGreenPlanet,
      "technology-today": intermediateTechnologyToday,
      "news-report": intermediateNewsReport,
      "what-did-they-say": intermediateWhatDidTheySay,
      "career-path": intermediateCareerPath,
      "relationships": intermediateRelationships,
    },
  },
  "upper-intermediate": {
    lessons: {
      "dream-scenarios": upperIntermediateDreamScenarios,
      "regrets": upperIntermediateRegrets,
      "business-communication":
        upperIntermediateBusinessCommunication,
      "leadership": upperIntermediateLeadership,
      "innovation": upperIntermediateInnovation,
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

export const getCefrLesson = ({
  level,
  category,
  slug,
}: {
  level?: string;
  category?: string;
  slug?: string;
}) => {
  if (!level || !slug) return undefined;

  const levelLessons = cefrLessons[level];

  if (!levelLessons) return undefined;

  if (category) {
    return levelLessons.categories?.[category]?.[slug];
  }

  return levelLessons.lessons[slug];
};
