// Beginner
import { beginnerUnit1Hello } from "@/data/cefr/beginner/unit-1-hello";
import { lesson as beginnerUnit2MyFamily } from "@/data/cefr/beginner/unit-2-my-family";
import { lesson as beginnerUnit3MyHouse } from "@/data/cefr/beginner/unit-3-my-house";
import { lesson as beginnerUnit4DailyRoutine } from "@/data/cefr/beginner/unit-4-daily-routine";
import { lesson as beginnerUnit5MyWeek } from "@/data/cefr/beginner/unit-5-my-week";
import { lesson as beginnerUnit6FoodAndDrinks } from "@/data/cefr/beginner/unit-6-food-and-drinks";
import { lesson as beginnerUnit7Shopping } from "@/data/cefr/beginner/unit-7-shopping";
import { lesson as beginnerUnit8AroundTown } from "@/data/cefr/beginner/unit-8-around-town";
import { lesson as beginnerUnit9WhatAreYouDoing } from "@/data/cefr/beginner/unit-9-what-are-you-doing";
import { lesson as beginnerUnit10Abilities } from "@/data/cefr/beginner/unit-10-abilities";

// Elementary
// Unit 1 Past
import { elementaryUnit11Beach } from "@/data/cefr/elementary/unit-1/unit-1-1-beach";
import { elementaryUnit12Movies } from "@/data/cefr/elementary/unit-1/unit-1-2-movies";
import { elementaryUnit13Family } from "@/data/cefr/elementary/unit-1/unit-1-3-family";
import { elementaryUnit14Home } from "@/data/cefr/elementary/unit-1/unit-1-4-home";

// Unit 2 
import { lesson as elementaryUnit2TravelPlans } from "@/data/cefr/elementary/unit-2-travel-plans";
// Unit 3
import { lesson as elementaryUnit3FuturePredictions } from "@/data/cefr/elementary/unit-3-future-predictions";
// Unit 4
import { lesson as elementaryUnit4CityLife } from "@/data/cefr/elementary/unit-4-city-life";
// Unit 5
import { lesson as elementaryUnit5TheBestPlace } from "@/data/cefr/elementary/unit-5-the-best-place";
// Unit 6
import { lesson as elementaryUnit6HealthyLiving } from "@/data/cefr/elementary/unit-6-healthy-living";
// Unit 7
import { lesson as elementaryUnit7Rules } from "@/data/cefr/elementary/unit-7-rules";
// Unit 8
import { lesson as elementaryUnit8ShoppingSmart } from "@/data/cefr/elementary/unit-8-shopping-smart";
// Unit 9
import { lesson as elementaryUnit9Experiences } from "@/data/cefr/elementary/unit-9-experiences";
// Unit 10
import { lesson as elementaryUnit10Hobbies } from "@/data/cefr/elementary/unit-10-hobbies";

// Intermediate
import { lesson as intermediateUnit1LifeExperiences } from "@/data/cefr/intermediate/unit-1-life-experiences";
import { lesson as intermediateUnit2Storytelling } from "@/data/cefr/intermediate/unit-2-storytelling";
import { lesson as intermediateUnit3MakingPlans } from "@/data/cefr/intermediate/unit-3-making-plans";
import { lesson as intermediateUnit4WhatIf } from "@/data/cefr/intermediate/unit-4-what-if";
import { lesson as intermediateUnit5GreenPlanet } from "@/data/cefr/intermediate/unit-5-green-planet";
import { lesson as intermediateUnit6TechnologyToday } from "@/data/cefr/intermediate/unit-6-technology-today";
import { lesson as intermediateUnit7NewsReport } from "@/data/cefr/intermediate/unit-7-news-report";
import { lesson as intermediateUnit8WhatDidTheySay } from "@/data/cefr/intermediate/unit-8-what-did-they-say";
import { lesson as intermediateUnit9CareerPath } from "@/data/cefr/intermediate/unit-9-career-path";
import { lesson as intermediateUnit10Relationships } from "@/data/cefr/intermediate/unit-10-relationships";

// Upper-Intermediate
import { lesson as upperIntermediateUnit1DreamScenarios } from "@/data/cefr/upper-intermediate/unit-1-dream-scenarios";
import { lesson as upperIntermediateUnit2Regrets } from "@/data/cefr/upper-intermediate/unit-2-regrets";
import { lesson as upperIntermediateUnit3BusinessCommunication } from "@/data/cefr/upper-intermediate/unit-3-business-communication";
import { lesson as upperIntermediateUnit4Leadership } from "@/data/cefr/upper-intermediate/unit-4-leadership";
import { lesson as upperIntermediateUnit5Innovation } from "@/data/cefr/upper-intermediate/unit-5-innovation";
import { lesson as upperIntermediateUnit6GlobalIssues } from "@/data/cefr/upper-intermediate/unit-6-global-issues";
import { lesson as upperIntermediateUnit7DebateClub } from "@/data/cefr/upper-intermediate/unit-7-debate-club";
import { lesson as upperIntermediateUnit8MediaAndMarketing } from "@/data/cefr/upper-intermediate/unit-8-media-and-marketing";
import { lesson as upperIntermediateUnit9NativeLikeEnglish } from "@/data/cefr/upper-intermediate/unit-9-native-like-english";
import { lesson as upperIntermediateUnit10NaturalEnglish } from "@/data/cefr/upper-intermediate/unit-10-natural-english";

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
      "unit-1-hello": beginnerUnit1Hello,
      "unit-2-my-family": beginnerUnit2MyFamily,
      "unit-3-my-house": beginnerUnit3MyHouse,
      "unit-4-daily-routine": beginnerUnit4DailyRoutine,
      "unit-5-my-week": beginnerUnit5MyWeek,
      "unit-6-food-and-drinks": beginnerUnit6FoodAndDrinks,
      "unit-7-shopping": beginnerUnit7Shopping,
      "unit-8-around-town": beginnerUnit8AroundTown,
      "unit-9-what-are-you-doing": beginnerUnit9WhatAreYouDoing,
      "unit-10-abilities": beginnerUnit10Abilities,
    },
  },
  elementary: {
    lessons: {
      "unit-2-travel-plans": elementaryUnit2TravelPlans,
      "unit-3-future-predictions": elementaryUnit3FuturePredictions,
      "unit-4-city-life": elementaryUnit4CityLife,
      "unit-5-the-best-place": elementaryUnit5TheBestPlace,
      "unit-6-healthy-living": elementaryUnit6HealthyLiving,
      "unit-7-rules": elementaryUnit7Rules,
      "unit-8-shopping-smart": elementaryUnit8ShoppingSmart,
      "unit-9-experiences": elementaryUnit9Experiences,
      "unit-10-hobbies": elementaryUnit10Hobbies,
    },
    categories: {
      past: {
        "unit-1-1-beach": elementaryUnit11Beach,
        "unit-1-2-movies": elementaryUnit12Movies,
        "unit-1-3-family": elementaryUnit13Family,
        "unit-1-4-home": elementaryUnit14Home,
      },
    },
  },
  intermediate: {
    lessons: {
      "unit-1-life-experiences": intermediateUnit1LifeExperiences,
      "unit-2-storytelling": intermediateUnit2Storytelling,
      "unit-3-making-plans": intermediateUnit3MakingPlans,
      "unit-4-what-if": intermediateUnit4WhatIf,
      "unit-5-green-planet": intermediateUnit5GreenPlanet,
      "unit-6-technology-today": intermediateUnit6TechnologyToday,
      "unit-7-news-report": intermediateUnit7NewsReport,
      "unit-8-what-did-they-say": intermediateUnit8WhatDidTheySay,
      "unit-9-career-path": intermediateUnit9CareerPath,
      "unit-10-relationships": intermediateUnit10Relationships,
    },
  },
  "upper-intermediate": {
    lessons: {
      "unit-1-dream-scenarios": upperIntermediateUnit1DreamScenarios,
      "unit-2-regrets": upperIntermediateUnit2Regrets,
      "unit-3-business-communication":
        upperIntermediateUnit3BusinessCommunication,
      "unit-4-leadership": upperIntermediateUnit4Leadership,
      "unit-5-innovation": upperIntermediateUnit5Innovation,
      "unit-6-global-issues": upperIntermediateUnit6GlobalIssues,
      "unit-7-debate-club": upperIntermediateUnit7DebateClub,
      "unit-8-media-and-marketing": upperIntermediateUnit8MediaAndMarketing,
      "unit-9-native-like-english": upperIntermediateUnit9NativeLikeEnglish,
      "unit-10-natural-english": upperIntermediateUnit10NaturalEnglish,
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
