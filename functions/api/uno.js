import { readCookie, verifySession } from "../_auth.js";

const roomCode = () => {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(5));
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
};

export async function onRequestPost(context) {
  const token = readCookie(context.request, "dbec_session");
  const session = await verifySession(token, context.env.SESSION_SECRET);
  if (session?.role !== "teacher") return Response.json({ error: "Não autorizado." }, { status: 401 });
  if (!context.env.UNO_REALTIME) return Response.json({ error: "UNO_REALTIME binding não configurado." }, { status: 503 });

  const code = roomCode();
  const room = context.env.UNO_REALTIME.get(context.env.UNO_REALTIME.idFromName(code));
  const response = await room.fetch("https://uno.internal/create", {
    method: "POST",
    headers: {
      "X-DBEC-Player-Id": `teacher:${session.username}`,
      "X-DBEC-Player-Name": session.username,
      "X-DBEC-Role": "teacher",
    },
  });
  if (!response.ok) return Response.json({ error: "Não foi possível criar a sala." }, { status: 500 });
  return Response.json({ code });
}
