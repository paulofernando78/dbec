export class NotesRoom {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("WebSocket upgrade required.", { status: 426 });
    }

    const role = request.headers.get("X-DBEC-Role");
    const studentId = request.headers.get("X-DBEC-Student-Id");

    if (!studentId || (role !== "teacher" && role !== "student")) {
      return new Response("Unauthorized.", { status: 401 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    this.state.acceptWebSocket(server);
    server.serializeAttachment({ role, studentId });

    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(socket, rawMessage) {
    try {
      const message = JSON.parse(rawMessage);
      const attachment = socket.deserializeAttachment();

      if (
        message.type !== "note:update" ||
        message.noteType !== attachment?.role ||
        typeof message.content !== "string" ||
        message.content.length > 100_000
      ) {
        socket.send(JSON.stringify({ type: "error", error: "Invalid update." }));
        return;
      }

      const update = JSON.stringify({
        type: "note:update",
        noteType: message.noteType,
        content: message.content,
        updatedAt: Date.now(),
      });

      for (const connectedSocket of this.state.getWebSockets()) {
        if (connectedSocket !== socket) connectedSocket.send(update);
      }
    } catch {
      socket.send(JSON.stringify({ type: "error", error: "Invalid JSON." }));
    }
  }

  async webSocketClose(socket, code, reason) {
    socket.close(code, reason);
  }
}

export default {
  async fetch() {
    return new Response("Not found.", { status: 404 });
  },
};
