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
    route("cefr", "routes/lessons/cefr/whats-cefr.tsx"),

    // A1 BEGINNER
    
    route(
      "cefr/lesson-blank",
      "routes/lessons/cefr/lesson-blank.tsx"),

    // A1 BEGINNER
    route(
      "/lessons/cefr/a1/unit-1-hello",
      "routes/lessons/cefr/a1/unit-1-hello.tsx"),
    route(
      "/lessons/cefr/a1/unit-2-my-family",
      "routes/lessons/cefr/a1/unit-2-my-family.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-3-my-house",
      "routes/lessons/cefr/a1/unit-3-my-house.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-4-daily-routine",
      "routes/lessons/cefr/a1/unit-4-daily-routine.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-5-my-week",
      "routes/lessons/cefr/a1/unit-5-my-week.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-6-food-and-drinks",
      "routes/lessons/cefr/a1/unit-6-food-and-drinks.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-7-shopping",
      "routes/lessons/cefr/a1/unit-7-shopping.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-8-around-town",
      "routes/lessons/cefr/a1/unit-8-around-town.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-9-what-are-you-doing",
      "routes/lessons/cefr/a1/unit-9-what-are-you-doing.tsx",
    ),
    route(
      "/lessons/cefr/a1/unit-10-abilities",
      "routes/lessons/cefr/a1/unit-10-abilities.tsx",
    ),

    // A2 ELEMENTARY

    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),

    // B1 PRE-INTERMEDIATE

    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/a2/unit-1-",
      "routes/lessons/cefr/b1/unit-1-.tsx",
    ),

    // B2 INTERMEDIATE

    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),
    route(
      "/lessons/cefr/b2/unit-1-",
      "routes/lessons/cefr/a1/unit-1-.tsx",
    ),

    // ADVANCED

    route(
      "c1-c2/random-topics",
      "routes/lessons/cefr/c1-c2/random-topics.tsx"),

    // Ted-ED
    route(
      "c1-c2/ted-ed",
      "routes/lessons/cefr/c1-c2/ted-ed.tsx"),

    route(
      "/cefr/c1-c2/ted-ed/what-causes-constipation",
      "routes/lessons/cefr/c1-c2/ted-ed/what-causes-constipation.tsx",
    ),
    route(
      "/cefr/c1-c2/ted-ed/how-your-memory-works",
      "routes/lessons/cefr/c1-c2/ted-ed/how-your-memory-works.tsx",
    ),

    // Games
    route(
      "c1-c2/games",
      "routes/lessons/cefr/c1-c2/games.tsx",
    ),
    route(
      "/cefr/c1-c2/games/thimbleweed-park",
      "routes/lessons/cefr/c1-c2/games/thimbleweed-park.tsx",
    ),
  ]),
] satisfies RouteConfig;
