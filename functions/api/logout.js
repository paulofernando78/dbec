export function onRequestPost() {
  return Response.json(
    { ok: true },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie":
          "dbec_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0",
      },
    },
  );
}
