import { readCookie, verifySession } from "../_auth.js";

export async function onRequest(context) {
  if (context.request.headers.get("Upgrade") !== "websocket") return new Response("WebSocket upgrade required.", { status: 426 });
  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);
  const code = new URL(context.request.url).searchParams.get("room")?.trim().toUpperCase();
  if (!session || !code || !/^[A-Z2-9]{5}$/.test(code)) return new Response("Não autorizado.", { status: 401 });
  if (!context.env.UNO_REALTIME) return new Response("UNO_REALTIME binding não configurado.", { status: 503 });

  const playerId = session.role === "teacher" ? `teacher:${session.username}` : `student:${session.studentId}`;
  let playerName = session.username;
  if (session.role === "student" && context.env.DB) {
    const profile = await context.env.DB.prepare("SELECT display_name FROM users WHERE student_slug = ? AND role = 'student'").bind(session.studentId).first();
    if (profile?.display_name) playerName = profile.display_name;
  }
  const room = context.env.UNO_REALTIME.get(context.env.UNO_REALTIME.idFromName(code));
  return room.fetch(context.request, {
    headers: {
      ...Object.fromEntries(context.request.headers),
      "X-DBEC-Player-Id": playerId,
      "X-DBEC-Player-Name": playerName,
      "X-DBEC-Role": session.role,
    },
  });
}
