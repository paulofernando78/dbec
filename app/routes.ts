import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("/about", "routes/about.tsx"),

  layout("routes/layout/layout.tsx", [
    route("/lab", "routes/layout/lab.tsx"),

    route("dashboard/:studentId?", "routes/template/dashboard.tsx"),
    route("/welcome", "routes/welcome.tsx"),

    route("cefr", "routes/whats-cefr.tsx"),

    // Lesson Blanks
    route("cefr/lesson-blank", "routes/lesson-blank.tsx"),

    // Advanced category pages
    route("cefr/advanced/news", "routes/cefr/advanced/news.tsx"),
    route("cefr/advanced/ted-ed", "routes/cefr/advanced/ted-ed.tsx"),

    // CEFR lesson and article templates
    route("/cefr/:level/:slug", "routes/template/lesson.tsx"),
    route("/cefr/:level/:category/:slug", "routes/template/articles.tsx"),

    // Games
    route("/games", "routes/games.tsx"),
    route(
      "/games/lucas-arts/thimbleweed-park",
      "routes/games/lucas-arts/thimbleweed-park.tsx",
    ),
  ]),
] satisfies RouteConfig;
