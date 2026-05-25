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
    route("cefr/a1/introduction", "routes/cefr/a1/introduction.tsx"),

    // Ted-ED
    route("c1-c2/random-topics", "routes/cefr/c1-c2/random-topics.tsx"),
    route("c1-c2/ted-ed", "routes/cefr/c1-c2/ted-ed.tsx"),
  ]),
] satisfies RouteConfig;
