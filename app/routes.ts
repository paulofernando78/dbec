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

    route("/lab", "routes/lab.tsx"),

    route("dashboard/:studentId?", "routes/students/dashboard.tsx"),

    route("/dashboard", "routes/dashboard.tsx"),

    route("/cefr", "routes/whats-cefr.tsx"),

    //! ─────────────────────────────────────────────
    //! Authentic Content
    //! ─────────────────────────────────────────────

    route("/authentic-content", "routes/authentic-content.tsx"),

    route(
      "/authentic-content/:category/:slug?",
      "routes/authentic-content/builder.tsx",
    ),

    route("/vocabulary", "routes/vocabulary.tsx"),

    //! ─────────────────────────────────────────────
    //! Games
    //! ─────────────────────────────────────────────

    route("/games", "routes/game.tsx"),

    route("/games/:developer/:slug", "routes/games/builder.tsx"),
  ]),
] satisfies RouteConfig;
