import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // Home
  index("routes/home.tsx"),

  // About
  route("/about", "routes/about.tsx"),

  //! Layout
  layout("routes/layout/layout.tsx", [
    //! ─────────────────────────────────────────────
    //! General
    //! ─────────────────────────────────────────────

    // Welcome Page
    route("/welcome", "routes/welcome.tsx"),

    // What’s CEFR Page
    route("/cefr", "routes/whats-cefr.tsx"),

    // Learning path
    route("/learn", "routes/learn/index.tsx"),
    route("/learn/:level", "routes/learn/level.tsx"),
    route("/learn/:level/:unit/:lesson/:step", "routes/learn/step.tsx"),
    route(
      "/learn/:level/:unit/:lesson",
      "routes/learn/legacy-lesson-redirect.tsx",
    ),
  ]),
] satisfies RouteConfig;
