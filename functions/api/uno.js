import { readCookie, verifySession } from "../_auth.js";

const roomCode = () => {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(5));
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
};

export async function onRequestPost(context) {
  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  if (!context.env.UNO_REALTIME) return Response.json({ error: "UNO_REALTIME binding is not configured." }, { status: 503 });

  const playerId =
    session.role === "teacher"
      ? `teacher:${session.username}`
      : `student:${session.studentId}`;
  let playerName = session.username;
  if (session.role === "student" && context.env.DB) {
    const profile = await context.env.DB.prepare(
      "SELECT display_name FROM users WHERE student_slug = ? AND role = 'student'",
    )
      .bind(session.studentId)
      .first();
    if (profile?.display_name) playerName = profile.display_name;
  }

  const code = roomCode();
  const room = context.env.UNO_REALTIME.get(context.env.UNO_REALTIME.idFromName(code));
  const response = await room.fetch("https://uno.internal/create", {
    method: "POST",
    headers: {
      "X-DBEC-Player-Id": playerId,
      "X-DBEC-Player-Name": playerName,
      "X-DBEC-Role": session.role,
    },
  });
  if (!response.ok) {
    const result = await response.json().catch(() => null);
    return Response.json(
      { error: result?.error ?? "The room could not be created." },
      { status: response.status },
    );
  }
  return Response.json({ code });
}
