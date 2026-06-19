import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route(
    "/about",
    "routes/about.tsx"),

  layout(
    "routes/dashboard/dashboard-layout.tsx", [
    
    route(
      "/lab",
      "routes/dashboard/lab.tsx"),

    route(
      "dashboard",
      "routes/dashboard/profile.tsx"),

    route(
      "cefr",
      "routes/cefr/whats-cefr.tsx"),

    // A1 BEGINNER

    route(
      "cefr/lesson-blank",
      "routes/cefr/lesson-blank.tsx"),

    // A1 BEGINNER
    route(
      "/cefr/a1/unit-1-hello",
      "routes/cefr/a1/unit-1-hello.tsx"),
    route(
      "/cefr/a1/unit-2-my-family",
      "routes/cefr/a1/unit-2-my-family.tsx",
    ),
    route(
      "/cefr/a1/unit-3-my-house",
      "routes/cefr/a1/unit-3-my-house.tsx",
    ),
    route(
      "/cefr/a1/unit-4-daily-routine",
      "routes/cefr/a1/unit-4-daily-routine.tsx",
    ),
    route(
      "/cefr/a1/unit-5-my-week",
      "routes/cefr/a1/unit-5-my-week.tsx",
    ),
    route(
      "/cefr/a1/unit-6-food-and-drinks",
      "routes/cefr/a1/unit-6-food-and-drinks.tsx",
    ),
    route(
      "/cefr/a1/unit-7-shopping",
      "routes/cefr/a1/unit-7-shopping.tsx",
    ),
    route(
      "/cefr/a1/unit-8-around-town",
      "routes/cefr/a1/unit-8-around-town.tsx",
    ),
    route(
      "/cefr/a1/unit-9-what-are-you-doing",
      "routes/cefr/a1/unit-9-what-are-you-doing.tsx",
    ),
    route(
      "/cefr/a1/unit-10-abilities",
      "routes/cefr/a1/unit-10-abilities.tsx",
    ),

    // A2 ELEMENTARY

    route(
      "/cefr/a2/unit-1-last-weekend",
      "routes/cefr/a2/unit-1-last-weekend.tsx",
    ),
    route(
      "/cefr/a2/unit-2-travel-plans",
      "routes/cefr/a2/unit-2-travel-plans.tsx",
    ),
    route(
      "/cefr/a2/unit-3-future-predictions",
      "routes/cefr/a2/unit-3-future-predictions.tsx",
    ),
    route(
      "/cefr/a2/unit-4-city-life",
      "routes/cefr/a2/unit-4-city-life.tsx",
    ),
    route(
      "/cefr/a2/unit-5-the-best-place",
      "routes/cefr/a2/unit-5-the-best-place.tsx",
    ),
    route(
      "/cefr/a2/unit-6-healthy-living",
      "routes/cefr/a2/unit-6-healthy-living.tsx",
    ),
    route(
      "/cefr/a2/unit-7-rules",
      "routes/cefr/a2/unit-7-rules.tsx",
    ),
    route(
      "/cefr/a2/unit-8-shopping-smart",
      "routes/cefr/a2/unit-8-shopping-smart.tsx",
    ),
    route(
      "/cefr/a2/unit-9-experiences",
      "routes/cefr/a2/unit-9-experiences.tsx",
    ),
    route(
      "/cefr/a2/unit-10-hobbies",
      "routes/cefr/a2/unit-10-hobbies.tsx",
    ),

    // B1 PRE-INTERMEDIATE

    route(
      "/cefr/b1/unit-1-life-experiences",
      "routes/cefr/b1/unit-1-life-experiences.tsx",
    ),
    route(
      "/cefr/b1/unit-2-storytelling",
      "routes/cefr/b1/unit-2-storytelling.tsx",
    ),
    route(
      "/cefr/b1/unit-3-making-plans",
      "routes/cefr/b1/unit-3-making-plans.tsx",
    ),
    route(
      "/cefr/b1/unit-4-what-if",
      "routes/cefr/b1/unit-4-what-if.tsx",
    ),
    route(
      "/cefr/b1/unit-5-green-planet",
      "routes/cefr/b1/unit-5-green-planet.tsx",
    ),
    route(
      "/cefr/b1/unit-6-technology-today",
      "routes/cefr/b1/unit-6-technology-today.tsx",
    ),
    route(
      "/cefr/b1/unit-7-news-report",
      "routes/cefr/b1/unit-7-news-report.tsx",
    ),
    route(
      "/cefr/b1/unit-8-what-did-they-say",
      "routes/cefr/b1/unit-8-what-did-they-say.tsx",
    ),
    route(
      "/cefr/b1/unit-9-career-path",
      "routes/cefr/b1/unit-9-career-path.tsx",
    ),
    route(
      "/cefr/b1/unit-10-relationships",
      "routes/cefr/b1/unit-10-relationships.tsx",
    ),

    // B2 INTERMEDIATE

    route(
      "/cefr/b2/unit-1-dream-scenarios",
      "routes/cefr/b2/unit-1-dream-scenarios.tsx",
    ),
    route(
      "/cefr/b2/unit-2-regrets",
      "routes/cefr/b2/unit-2-regrets.tsx",
    ),
    route(
      "/cefr/b2/unit-3-business-communication",
      "routes/cefr/b2/unit-3-business-communication.tsx",
    ),
    route(
      "/cefr/b2/unit-4-leadership",
      "routes/cefr/b2/unit-4-leadership.tsx",
    ),
    route(
      "/cefr/b2/unit-5-innovation",
      "routes/cefr/b2/unit-5-innovation.tsx",
    ),
    route(
      "/cefr/b2/unit-6-global-issues",
      "routes/cefr/b2/unit-6-global-issues.tsx",
    ),
    route(
      "/cefr/b2/unit-7-debate-club",
      "routes/cefr/b2/unit-7-debate-club.tsx",
    ),
    route(
      "/cefr/b2/unit-8-media-and-marketing",
      "routes/cefr/b2/unit-8-media-and-marketing.tsx",
    ),
    route(
      "/cefr/b2/unit-9-native-like-english",
      "routes/cefr/b2/unit-9-native-like-english.tsx",
    ),
    route(
      "/cefr/b2/unit-10-natural-english",
      "routes/cefr/b2/unit-10-natural-english.tsx",
    ),

    // ADVANCED

    route(
      "c1-c2/random-topics",
      "routes/cefr/c1-c2/random-topics.tsx"),

    // Ted-ED
    route(
      "c1-c2/ted-ed",
      "routes/cefr/c1-c2/ted-ed.tsx"),

    route(
      "/cefr/c1-c2/ted-ed/what-causes-constipation",
      "routes/cefr/c1-c2/ted-ed/what-causes-constipation.tsx",
    ),

    route(
      "/cefr/c1-c2/ted-ed/how-your-memory-works",
      "routes/cefr/c1-c2/ted-ed/how-your-memory-works.tsx",
    ),

    // Games
    route(
      "misc/games",
      "routes/misc/games.tsx",
    ),
    route(
      "/misc/games/lucas-arts/thimbleweed-park",
      "routes/misc/games/lucas-arts/thimbleweed-park.tsx",
    ),
  ]),
] satisfies RouteConfig;
