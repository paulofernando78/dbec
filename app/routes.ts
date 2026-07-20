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
  route(
    "/about",
    "routes/about.tsx"),

  //! Layout
  layout("routes/layout/layout.tsx", [

    //! ─────────────────────────────────────────────
    //! General
    //! ─────────────────────────────────────────────
    
    // Lab
    route(
      "/lab",
      "routes/lab.tsx"),

    // Students Pages
    route(
      "dashboard/:studentId?",
      "routes/students/dashboard.tsx"),

    // Welcome Page
    route(
      "/welcome",
      "routes/welcome.tsx"),

    // What’s CEFR Page
    route(
      "/cefr",
      "routes/whats-cefr.tsx"),

    //! ─────────────────────────────────────────────
    //! Course
    //! ─────────────────────────────────────────────
    
    route(
      "/courses/:level/:slug",
      "routes/course/builder.tsx"),

    //! ─────────────────────────────────────────────
    //! Authentic Content
    //! ─────────────────────────────────────────────
    
    route(
      "/authentic-content/:category/:slug",
      "routes/authentic-content/builder.tsx",
    ),

    //! ─────────────────────────────────────────────
    //! Games
    //! ─────────────────────────────────────────────
    
    route(
      "/games/:developer/:slug",
      "routes/games/builder.tsx",
),
  ]),
] satisfies RouteConfig;
