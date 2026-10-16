import { readCookie, verifySession } from "../_auth.js";

export async function onRequestGet(context) {
  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);

  if (!session) {
    return Response.json(
      { error: "Não autorizado." },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  const dashboardPath =
    session.role === "teacher"
      ? "/teacher/dashboard"
      : `/dashboard/${encodeURIComponent(session.studentId)}`;

  return Response.json(
    {
      username: session.username,
      role: session.role,
      studentId: session.studentId,
      dashboardPath,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
