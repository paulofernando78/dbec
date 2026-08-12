//! Beginner
// Chapter 1
import { beginnerHello } from "@/data/course/beginner/chapter-1/hello";
import { beginnerPersonalInformation } from "@/data/course/beginner/chapter-1/personal-information";
import { beginnerCountriesAndNationalities } from "@/data/course/beginner/chapter-1/countries-and-nationalities";

// Chapter 2
import { beginnerMyFamily } from "@/data/course/beginner/chapter-2/my-family";
import { beginnerMyRelatives } from "@/data/course/beginner/chapter-2/my-relatives";

// Chapter 3
import { beginnerMyHouse } from "@/data/course/beginner/chapter-3/my-house";
import { beginnerRentingAHome } from "@/data/course/beginner/chapter-3/renting-a-home";

// Chapter 4
import { beginnerMyDailyRoutine } from "@/data/course/beginner/chapter-4/my-daily-routine";
import { beginnerMyWeek } from "@/data/course/beginner/chapter-4/my-week";

// Chapter 5
import { beginnerFavoriteFood } from "@/data/course/beginner/chapter-5/favorite-food";
import { beginnerEatingOut } from "./beginner/chapter-5/eating-out";

// Chapter 6
import { beginnerShopping } from "@/data/course/beginner/chapter-6/shopping";

// Chapter 7
import { beginnerAroundTown } from "@/data/course/beginner/chapter-7/around-town";

// Chapter 8
import { beginnerWhatAreYouDoing } from "@/data/course/beginner/chapter-8/what-are-you-doing";

// Chapter 9
import { beginnerAbilities } from "@/data/course/beginner/chapter-8/abilities";
import { beginnerRealLifeProject } from "@/data/course/beginner/chapter-9/real-life-project";

//! Elementary
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

//! Intermediate
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

//! Upper-Intermediate
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

//! Advanced
// import { ... } from "@/data/course/advanced/";

type Lesson = Record<string, any>;
type LessonMap = Record<string, Lesson>;

export type CourseLessonLevel = {
  lessons: LessonMap;
};

export const courseLessons: Record<string, CourseLessonLevel> = {
  beginner: {
    lessons: {
      // Chapter 1 • Introduction
      hello: beginnerHello,
      "personal-information": beginnerPersonalInformation,
      "countries-and-nationalities": beginnerCountriesAndNationalities,

      // Chapter 2 • Family
      "my-family": beginnerMyFamily,
      "my-relatives": beginnerMyRelatives,

      // Chapter 3 • Home
      "my-house": beginnerMyHouse,
      "renting-a-home": beginnerRentingAHome,

      // Chapter 4 • Daily Routine
      "my-daily-routine": beginnerMyDailyRoutine,
      "my-week": beginnerMyWeek,

      // Chapter 5 • Food and Drinks
      "i-love-pizza": beginnerFavoriteFood,
      "eating-out": beginnerEatingOut,

      // Chapter 6 • Shopping
      shopping: beginnerShopping,
      "bargain-hunting": beginnerShopping,

      // Chapter 7 • Around Town
      "around-town": beginnerAroundTown,
      "finding-your-way": beginnerAroundTown,

      // Chapter 8 • Actions & Abilities

      // Chapter 9 • Real-Life Project
      "what-are-you-doing": beginnerWhatAreYouDoing,
      abilities: beginnerAbilities,
      "real-life-project": beginnerRealLifeProject,
      "course-review": beginnerRealLifeProject,
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
      "giving-advice": elementaryHealthyLiving,
      "school-and-work-rules": elementaryRules,
      "complaints-and-returns": elementaryShoppingSmart,
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
      milestones: intermediateLifeExperiences,
      "looking-back": intermediateLifeExperiences,
      "narrative-tenses": intermediateStorytelling,
      "tell-your-story": intermediateStorytelling,
      "future-arrangements": intermediateMakingPlans,
      "lets-meet-up": intermediateMakingPlans,
      "real-possibilities": intermediateWhatIf,
      "imaginary-situations": intermediateWhatIf,
      "our-planet": intermediateGreenPlanet,
      "taking-action": intermediateGreenPlanet,
      "digital-life": intermediateTechnologyToday,
      "pros-and-cons": intermediateTechnologyToday,
      "in-the-news": intermediateNewsReport,
      "breaking-news": intermediateNewsReport,
      "he-said-she-said": intermediateWhatDidTheySay,
      "the-interview": intermediateWhatDidTheySay,
      "job-hunting": intermediateCareerPath,
      "career-choices": intermediateCareerPath,
      "reading-people": intermediateRelationships,
      "social-situations": intermediateRelationships,
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
      "wishing-for-change": upperIntermediateDreamScenarios,
      "life-goals": upperIntermediateDreamScenarios,
      "if-only": upperIntermediateRegrets,
      "looking-back": upperIntermediateRegrets,
      "meeting-language": upperIntermediateBusinessCommunication,
      "lets-negotiate": upperIntermediateBusinessCommunication,
      "qualities-of-a-leader": upperIntermediateLeadership,
      "leading-a-team": upperIntermediateLeadership,
      "future-of-work": upperIntermediateInnovation,
      "pitch-your-idea": upperIntermediateInnovation,
      "world-problems": upperIntermediateGlobalIssues,
      "finding-solutions": upperIntermediateGlobalIssues,
      "making-your-case": upperIntermediateDebateClub,
      "the-big-debate": upperIntermediateDebateClub,
      "selling-an-idea": upperIntermediateMediaAndMarketing,
      "ad-campaign": upperIntermediateMediaAndMarketing,
      "everyday-idioms": upperIntermediateNativeLikeEnglish,
      "using-idioms-naturally": upperIntermediateNativeLikeEnglish,
      "sounding-natural": upperIntermediateNaturalEnglish,
      "real-conversations": upperIntermediateNaturalEnglish,
    },
  },
  advanced: {
    lessons: {
      // "...": ...,
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
