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
    route("/guide", "routes/guide.tsx"),
    route("/teacher/dashboard/:studentId?", "routes/teacher/dashboard.tsx"),
    route("/course", "routes/course.tsx"),
    route("/course/:level", "routes/course/builder.tsx"),
    route(
      "/course/:level/unit/:unit/lesson/:lesson/:step?",
      "routes/course/lesson.tsx",
    ),
    route("/levels/*", "routes/legacy-course.tsx"),
    route("/travel", "routes/travel.tsx"),
    route(
      "/travel/unit/:unit/lesson/:lesson/:step?",
      "routes/travel/lesson.tsx",
    ),

    route("/cefr", "routes/whats-cefr.tsx"),

    //! ─────────────────────────────────────────────
    //! Authentic Content
    //! ─────────────────────────────────────────────

    route("/authentic-content", "routes/authentic-content.tsx"),

    route(
      "/authentic-content/:category/:slug?/:step?",
      "routes/authentic-content/builder.tsx",
    ),

    route("/vocabulary", "routes/vocabulary.tsx"),
    route("/expressions", "routes/expressions.tsx"),
    route("/grammar", "routes/grammar.tsx"),
    route("/pronunciation", "routes/pronunciation.tsx"),
    route("/audiobooks", "routes/audiobooks.tsx"),
    route("/audiobooks/:book", "routes/listening-book.tsx"),
    route("/songs", "routes/songs.tsx"),
    route("/songs/:band", "routes/songs/band.tsx"),
    route("/songs/:band/:song", "routes/songs/song.tsx"),

    //! ─────────────────────────────────────────────
    //! Games
    //! ─────────────────────────────────────────────

    route("/games", "routes/game.tsx"),

    route("/games/:developer/:slug", "routes/games/builder.tsx"),
  ]),
] satisfies RouteConfig;
