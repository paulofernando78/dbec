import { Navigate, useParams } from "react-router";

export default function LegacyLevelsRedirect() {
  const suffix = useParams()["*"];
  return <Navigate to={suffix ? `/course/${suffix}` : "/course"} replace />;
}
