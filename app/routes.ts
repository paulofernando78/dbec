import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(
    "/about",
    "routes/about.tsx"),
  route(
    "/cefr/a1/introduction",
    "routes/cefr/a1/introduction.tsx"),
] satisfies RouteConfig;
