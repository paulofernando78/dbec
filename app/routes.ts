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
      "routes/whats-cefr.tsx"),

    // Lesson Blanks
    route(
      "cefr/lesson-blank",
      "routes/lesson-blank.tsx"),

    // A1 Beginner
    route(
      "/cefr/beginner",
      "routes/cefr/beginner.tsx"),
    route(
      "/cefr/beginner/unit-1-hello",
      "routes/cefr/beginner/unit-1-hello.tsx"),
    route(
      "/cefr/beginner/unit-2-my-family",
      "routes/cefr/beginner/unit-2-my-family.tsx",
    ),
    route(
      "/cefr/beginner/unit-3-my-house",
      "routes/cefr/beginner/unit-3-my-house.tsx",
    ),
    route(
      "/cefr/beginner/unit-4-daily-routine",
      "routes/cefr/beginner/unit-4-daily-routine.tsx",
    ),
    route(
      "/cefr/beginner/unit-5-my-week",
      "routes/cefr/beginner/unit-5-my-week.tsx",
    ),
    route(
      "/cefr/beginner/unit-6-food-and-drinks",
      "routes/cefr/beginner/unit-6-food-and-drinks.tsx",
    ),
    route(
      "/cefr/beginner/unit-7-shopping",
      "routes/cefr/beginner/unit-7-shopping.tsx",
    ),
    route(
      "/cefr/beginner/unit-8-around-town",
      "routes/cefr/beginner/unit-8-around-town.tsx",
    ),
    route(
      "/cefr/beginner/unit-9-what-are-you-doing",
      "routes/cefr/beginner/unit-9-what-are-you-doing.tsx",
    ),
    route(
      "/cefr/beginner/unit-10-abilities",
      "routes/cefr/beginner/unit-10-abilities.tsx",
    ),

    // A2 Elementary
    route(
      "/cefr/elementary",
      "routes/cefr/elementary.tsx"),
    route(
      "/cefr/elementary/unit-1-last-weekend",
      "routes/cefr/elementary/unit-1-last-weekend.tsx",
    ),
    route(
      "/cefr/elementary/unit-2-travel-plans",
      "routes/cefr/elementary/unit-2-travel-plans.tsx",
    ),
    route(
      "/cefr/elementary/unit-3-future-predictions",
      "routes/cefr/elementary/unit-3-future-predictions.tsx",
    ),
    route(
      "/cefr/elementary/unit-4-city-life",
      "routes/cefr/elementary/unit-4-city-life.tsx",
    ),
    route(
      "/cefr/elementary/unit-5-the-best-place",
      "routes/cefr/elementary/unit-5-the-best-place.tsx",
    ),
    route(
      "/cefr/elementary/unit-6-healthy-living",
      "routes/cefr/elementary/unit-6-healthy-living.tsx",
    ),
    route(
      "/cefr/elementary/unit-7-rules",
      "routes/cefr/elementary/unit-7-rules.tsx",
    ),
    route(
      "/cefr/elementary/unit-8-shopping-smart",
      "routes/cefr/elementary/unit-8-shopping-smart.tsx",
    ),
    route(
      "/cefr/elementary/unit-9-experiences",
      "routes/cefr/elementary/unit-9-experiences.tsx",
    ),
    route(
      "/cefr/elementary/unit-10-hobbies",
      "routes/cefr/elementary/unit-10-hobbies.tsx",
    ),

    // B1 Intermediate
    route(
      "/cefr/intermediate",
      "routes/cefr/intermediate.tsx"),
    route(
      "/cefr/intermediate/unit-1-life-experiences",
      "routes/cefr/intermediate/unit-1-life-experiences.tsx",
    ),
    route(
      "/cefr/intermediate/unit-2-storytelling",
      "routes/cefr/intermediate/unit-2-storytelling.tsx",
    ),
    route(
      "/cefr/intermediate/unit-3-making-plans",
      "routes/cefr/intermediate/unit-3-making-plans.tsx",
    ),
    route(
      "/cefr/intermediate/unit-4-what-if",
      "routes/cefr/intermediate/unit-4-what-if.tsx",
    ),
    route(
      "/cefr/intermediate/unit-5-green-planet",
      "routes/cefr/intermediate/unit-5-green-planet.tsx",
    ),
    route(
      "/cefr/intermediate/unit-6-technology-today",
      "routes/cefr/intermediate/unit-6-technology-today.tsx",
    ),
    route(
      "/cefr/intermediate/unit-7-news-report",
      "routes/cefr/intermediate/unit-7-news-report.tsx",
    ),
    route(
      "/cefr/intermediate/unit-8-what-did-they-say",
      "routes/cefr/intermediate/unit-8-what-did-they-say.tsx",
    ),
    route(
      "/cefr/intermediate/unit-9-career-path",
      "routes/cefr/intermediate/unit-9-career-path.tsx",
    ),
    route(
      "/cefr/intermediate/unit-10-relationships",
      "routes/cefr/intermediate/unit-10-relationships.tsx",
    ),

    // B2 Upper-Intermediate
    route(
      "/cefr/upper-intermediate",
      "routes/cefr/upper-intermediate.tsx"),
    route(
      "/cefr/upper-intermediate/unit-1-dream-scenarios",
      "routes/cefr/upper-intermediate/unit-1-dream-scenarios.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-2-regrets",
      "routes/cefr/upper-intermediate/unit-2-regrets.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-3-business-communication",
      "routes/cefr/upper-intermediate/unit-3-business-communication.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-4-leadership",
      "routes/cefr/upper-intermediate/unit-4-leadership.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-5-innovation",
      "routes/cefr/upper-intermediate/unit-5-innovation.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-6-global-issues",
      "routes/cefr/upper-intermediate/unit-6-global-issues.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-7-debate-club",
      "routes/cefr/upper-intermediate/unit-7-debate-club.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-8-media-and-marketing",
      "routes/cefr/upper-intermediate/unit-8-media-and-marketing.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-9-native-like-english",
      "routes/cefr/upper-intermediate/unit-9-native-like-english.tsx",
    ),
    route(
      "/cefr/upper-intermediate/unit-10-natural-english",
      "routes/cefr/upper-intermediate/unit-10-natural-english.tsx",
    ),

    //! Templates

    route(
      "/cefr/:level/:category/:slug",
      "routes/template/articles.tsx",
    ),

    // C1 Advanced
    route(
      "cefr/c1/news",
      "routes/cefr/advanced/news.tsx"),

    // Ted-ED
    // route(
    //   "misc/ted-ed",
    //   "routes/misc/ted-ed.tsx"),

    // route(
    //   "/misc/ted-ed/what-causes-constipation",
    //   "routes/misc/ted-ed/what-causes-constipation.tsx",
    // ),

    // route(
    //   "misc/ted-ed/how-your-memory-works",
    //   "routes/misc/ted-ed/how-your-memory-works.tsx",
    // ),

    // Games
    route(
      "misc/games",
      "routes/misc/games.tsx",
    ),

    route(
      "//games/lucas-arts/thimbleweed-park",
      "routes/games/lucas-arts/thimbleweed-park.tsx",
    ),
  ]),
] satisfies RouteConfig;
