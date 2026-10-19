import { redirect, type LoaderFunctionArgs } from "react-router";

export function loader({ params }: LoaderFunctionArgs) {
  const suffix = params["*"];
  return redirect(suffix ? `/course/${suffix}` : "/course");
}

export default function LegacyLevelsRedirect() {
  return null;
}
