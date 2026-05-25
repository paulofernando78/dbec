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

  route(
    "dashboard",
    "routes/dashboard/dashboard-layout.tsx",
    [
      index(
        "routes/dashboard/profile.tsx"
      ),
    ]
  ),
] satisfies RouteConfig;
