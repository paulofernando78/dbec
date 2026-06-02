import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("/about", "routes/about.tsx"),

  layout("routes/dashboard/dashboard-layout.tsx", [
    route("/lab", "routes/dashboard/lab.tsx"),

    route("dashboard", "routes/dashboard/profile.tsx"),
    route("cefr", "routes/cefr/whats-cefr.tsx"),

    // A1 BEGINNER
    route("cefr/a1/introduction", "routes/cefr/a1/hi-my-names-laura.tsx"),

    // A2 ELEMENTARY

    // B1 PRE-INTERMEDIATE

    // B2 INTERMEDIATE

    // ADVANCED

    route("c1-c2/random-topics", "routes/cefr/c1-c2/random-topics.tsx"),

    // Ted-ED
    route("c1-c2/ted-ed", "routes/cefr/c1-c2/ted-ed.tsx"),

    route(
      "/cefr/c1-c2/ted-ed/what-causes-constipation",
      "routes/cefr/c1-c2/ted-ed/what-causes-constipation.tsx",
    ),
    route(
      "/cefr/c1-c2/ted-ed/how-your-memory-works",
      "routes/cefr/c1-c2/ted-ed/how-your-memory-works.tsx",
    ),
  ]),
] satisfies RouteConfig;
