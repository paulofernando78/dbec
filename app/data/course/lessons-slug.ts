// Beginner
import { beginnerHello } from "@/data/course/beginner/hello";
import { beginnerPersonalInformation } from "@/data/course/beginner/personal-information";
import { beginnerMyFamily } from "@/data/course/beginner/my-family";
import { beginnerMoreFamilyMembers } from "@/data/course/beginner/more-family-members";
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
// import { ... } from "@/data/course/advanced/";

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
      "more-family-members": beginnerMoreFamilyMembers,
      "my-house": beginnerMyHouse,
      "daily-routine": beginnerDailyRoutine,
      "my-week": beginnerMyWeek,
      "food-and-drinks": beginnerFoodAndDrinks,
      shopping: beginnerShopping,
      "around-town": beginnerAroundTown,
      "what-are-you-doing": beginnerWhatAreYouDoing,
      abilities: beginnerAbilities,
      "real-life-project": beginnerRealLifeProject,
      "renting-a-home": beginnerMyHouse,
      "eating-out": beginnerFoodAndDrinks,
      "bargain-hunting": beginnerShopping,
      "finding-your-way": beginnerAroundTown,
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
