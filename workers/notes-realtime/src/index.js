export class NotesRoom {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/broadcast") {
      const message = await request.json().catch(() => null);
      if (
        message?.type !== "note:update" ||
        (message.noteType !== "teacher" && message.noteType !== "student") ||
        typeof message.content !== "string" ||
        message.content.length > 100_000
      ) {
        return new Response("Invalid update.", { status: 400 });
      }

      const update = JSON.stringify({
        type: "note:update",
        noteType: message.noteType,
        content: message.content,
        updatedAt: Date.now(),
      });

      for (const connectedSocket of this.state.getWebSockets()) {
        connectedSocket.send(update);
      }

      return Response.json({ ok: true });
    }

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
      const canEditNote =
        attachment?.role === "teacher"
          ? message.noteType === "teacher" || message.noteType === "student"
          : message.noteType === "student";

      if (
        message.type !== "note:update" ||
        !canEditNote ||
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

const UNO_COLORS = ["red", "yellow", "green", "blue"];
const UNO_ACTIONS = ["skip", "reverse", "draw2"];

const createUnoDeck = () => {
  const cards = [];
  for (const color of UNO_COLORS) {
    cards.push({ color, value: "0" });
    for (let number = 1; number <= 9; number += 1) {
      cards.push({ color, value: String(number) }, { color, value: String(number) });
    }
    for (const value of UNO_ACTIONS) {
      cards.push({ color, value }, { color, value });
    }
  }
  for (let index = 0; index < 4; index += 1) {
    cards.push({ color: "wild", value: "wild" });
    cards.push({ color: "wild", value: "wild4" });
  }
  return cards.map((card, index) => ({ ...card, id: `card-${index}` }));
};

const shuffle = (cards) => {
  const next = [...cards];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [next[index], next[target]] = [next[target], next[index]];
  }
  return next;
};

const nextPlayerIndex = (game, steps = 1) => {
  const count = game.playerCount;
  return (game.currentPlayerIndex + game.direction * steps + count * steps) % count;
};

const canPlayCard = (card, game, hand) => {
  if (card.value === "wild") return true;
  if (card.value === "wild4") {
    return !hand.some(
      (candidate) =>
        candidate.id !== card.id && candidate.color === game.currentColor,
    );
  }
  return card.color === game.currentColor || card.value === game.discard.at(-1)?.value;
};

export class UnoRoom {
  constructor(state) {
    this.state = state;
  }

  async getRoom() {
    return (await this.state.storage.get("room")) ?? null;
  }

  async saveRoom(room) {
    await this.state.storage.put("room", room);
  }

  async fetch(request) {
    const url = new URL(request.url);
    const player = {
      id: request.headers.get("X-DBEC-Player-Id"),
      name: request.headers.get("X-DBEC-Player-Name"),
      role: request.headers.get("X-DBEC-Role"),
    };

    if (request.method === "POST" && url.pathname === "/create") {
      if (
        !player.id ||
        !player.name ||
        !["teacher", "student"].includes(player.role)
      ) {
        return Response.json({ error: "Unauthorized." }, { status: 401 });
      }
      const existing = await this.getRoom();
      if (existing) {
        return existing.hostId === player.id
          ? Response.json({ ok: true })
          : Response.json({ error: "Room code already in use." }, { status: 409 });
      }
      await this.saveRoom({
        status: "lobby",
        hostId: player.id,
        players: [{ ...player, connected: false }],
        game: null,
        winnerId: null,
        updatedAt: Date.now(),
      });
      return Response.json({ ok: true });
    }

    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("WebSocket upgrade required.", { status: 426 });
    }
    if (!player.id || !player.name || !["teacher", "student"].includes(player.role)) {
      return new Response("Unauthorized.", { status: 401 });
    }

    const room = await this.getRoom();
    if (!room) return new Response("Room not found.", { status: 404 });
    let roomPlayer = room.players.find((candidate) => candidate.id === player.id);
    if (!roomPlayer) {
      if (room.status !== "lobby") return new Response("Game already started.", { status: 409 });
      roomPlayer = { ...player, connected: true };
      room.players.push(roomPlayer);
    } else {
      roomPlayer.connected = true;
      roomPlayer.name = player.name;
    }
    await this.saveRoom(room);

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.state.acceptWebSocket(server);
    server.serializeAttachment({ playerId: player.id });
    await this.broadcast(room);
    return new Response(null, { status: 101, webSocket: client });
  }

  viewFor(room, playerId) {
    const hand = room.game?.hands?.[playerId] ?? [];
    return {
      type: "room:state",
      status: room.status,
      hostId: room.hostId,
      winnerId: room.winnerId,
      players: room.players.map((player, index) => ({
        id: player.id,
        name: player.name,
        role: player.role,
        connected: player.connected,
        cardCount: room.game?.hands?.[player.id]?.length ?? 0,
        isCurrent: room.game?.currentPlayerIndex === index,
      })),
      game: room.game
        ? {
            hand,
            topCard: room.game.discard.at(-1),
            currentColor: room.game.currentColor,
            currentPlayerId: room.players[room.game.currentPlayerIndex]?.id,
            direction: room.game.direction,
            drawCount: room.game.drawPile.length,
          }
        : null,
    };
  }

  async broadcast(room) {
    for (const socket of this.state.getWebSockets()) {
      const { playerId } = socket.deserializeAttachment() ?? {};
      try {
        socket.send(JSON.stringify(this.viewFor(room, playerId)));
      } catch {}
    }
  }

  replenish(game) {
    if (game.drawPile.length) return;
    const topCard = game.discard.pop();
    game.drawPile = shuffle(game.discard);
    game.discard = topCard ? [topCard] : [];
  }

  drawCards(game, playerId, count) {
    for (let index = 0; index < count; index += 1) {
      this.replenish(game);
      const card = game.drawPile.pop();
      if (card) game.hands[playerId].push(card);
    }
  }

  removePlayer(room, targetPlayerId) {
    const leavingIndex = room.players.findIndex(
      (candidate) => candidate.id === targetPlayerId,
    );
    if (leavingIndex < 0) return null;

    const player = room.players[leavingIndex];
    const wasCurrentPlayer = room.game?.currentPlayerIndex === leavingIndex;
    room.players.splice(leavingIndex, 1);

    if (room.game) {
      const returnedCards = room.game.hands[targetPlayerId] ?? [];
      delete room.game.hands[targetPlayerId];
      room.game.drawPile = shuffle([...room.game.drawPile, ...returnedCards]);
      room.game.playerCount = room.players.length;

      if (room.winnerId === targetPlayerId) room.winnerId = null;
      if (room.players.length === 1 && room.status === "playing") {
        room.status = "finished";
        room.winnerId = room.players[0].id;
        room.game.currentPlayerIndex = 0;
      } else if (room.players.length > 0) {
        if (leavingIndex < room.game.currentPlayerIndex) {
          room.game.currentPlayerIndex -= 1;
        } else if (wasCurrentPlayer) {
          room.game.currentPlayerIndex =
            room.game.direction === 1
              ? leavingIndex % room.players.length
              : (leavingIndex - 1 + room.players.length) % room.players.length;
        }
      }
    }

    return player;
  }

  async startGame(room) {
    const deck = shuffle(createUnoDeck());
    const hands = Object.fromEntries(room.players.map((player) => [player.id, []]));
    for (let round = 0; round < 7; round += 1) {
      for (const player of room.players) hands[player.id].push(deck.pop());
    }
    let firstCard = deck.pop();
    while (firstCard?.color === "wild" || UNO_ACTIONS.includes(firstCard?.value)) {
      deck.unshift(firstCard);
      firstCard = deck.pop();
    }
    room.status = "playing";
    room.winnerId = null;
    room.game = {
      hands,
      playerCount: room.players.length,
      drawPile: deck,
      discard: [firstCard],
      currentColor: firstCard.color,
      currentPlayerIndex: 0,
      direction: 1,
    };
  }

  async webSocketMessage(socket, rawMessage) {
    const { playerId } = socket.deserializeAttachment() ?? {};
    const room = await this.getRoom();
    if (!room || !playerId) return;
    try {
      const message = JSON.parse(rawMessage);
      if (message.type === "game:start") {
        room.players = room.players.filter((player) => player.connected);
        if (playerId !== room.hostId || room.players.length < 2) throw new Error("At least two connected players are required.");
        await this.startGame(room);
      } else if (message.type === "game:restart") {
        if (playerId !== room.hostId) throw new Error("Only the host can restart.");
        await this.startGame(room);
      } else if (message.type === "player:remove") {
        if (playerId !== room.hostId) throw new Error("Only the host can remove players.");
        if (typeof message.playerId !== "string" || message.playerId === room.hostId) {
          throw new Error("That player cannot be removed.");
        }
        const removedPlayer = this.removePlayer(room, message.playerId);
        if (!removedPlayer) throw new Error("Player not found.");

        const removedMessage = JSON.stringify({
          type: "player:removed",
          playerId: removedPlayer.id,
          playerName: removedPlayer.name,
          message: `You were removed from the room by the host.`,
        });
        room.updatedAt = Date.now();
        await this.saveRoom(room);
        for (const connectedSocket of this.state.getWebSockets()) {
          if (connectedSocket.deserializeAttachment()?.playerId !== removedPlayer.id) continue;
          try {
            connectedSocket.send(removedMessage);
            connectedSocket.close(1000, "Removed by host");
          } catch {}
        }
      } else if (message.type === "card:draw") {
        if (room.status !== "playing" || room.players[room.game.currentPlayerIndex]?.id !== playerId) throw new Error("It is not your turn.");
        this.drawCards(room.game, playerId, 1);
        room.game.currentPlayerIndex = nextPlayerIndex(room.game);
      } else if (message.type === "card:play") {
        const game = room.game;
        if (room.status !== "playing" || room.players[game.currentPlayerIndex]?.id !== playerId) throw new Error("It is not your turn.");
        const hand = game.hands[playerId];
        const cardIndex = hand.findIndex((card) => card.id === message.cardId);
        const card = hand[cardIndex];
        if (!card || !canPlayCard(card, game, hand)) throw new Error("That card cannot be played.");
        if (card.color === "wild" && !UNO_COLORS.includes(message.color)) throw new Error("Choose a color.");
        hand.splice(cardIndex, 1);
        game.discard.push(card);
        game.currentColor = card.color === "wild" ? message.color : card.color;
        if (!hand.length) {
          room.status = "finished";
          room.winnerId = playerId;
        } else if (card.value === "reverse") {
          game.direction *= -1;
          game.currentPlayerIndex = nextPlayerIndex(game, room.players.length === 2 ? 2 : 1);
        } else if (card.value === "skip") {
          game.currentPlayerIndex = nextPlayerIndex(game, 2);
        } else if (card.value === "draw2" || card.value === "wild4") {
          const targetIndex = nextPlayerIndex(game);
          this.drawCards(game, room.players[targetIndex].id, card.value === "draw2" ? 2 : 4);
          game.currentPlayerIndex = nextPlayerIndex(game, 2);
        } else {
          game.currentPlayerIndex = nextPlayerIndex(game);
        }
      } else {
        throw new Error("Unknown action.");
      }
      room.updatedAt = Date.now();
      await this.saveRoom(room);
      await this.broadcast(room);
    } catch (error) {
      socket.send(JSON.stringify({ type: "error", error: error instanceof Error ? error.message : "Invalid action." }));
    }
  }

  async webSocketClose(socket, code, reason) {
    const { playerId } = socket.deserializeAttachment() ?? {};
    const room = await this.getRoom();
    if (room && playerId) {
      const stillConnected = this.state.getWebSockets().some((candidate) => candidate !== socket && candidate.deserializeAttachment()?.playerId === playerId);
      if (playerId === room.hostId && !stillConnected) {
        const hostName =
          room.players.find((player) => player.id === room.hostId)?.name ??
          "The room creator";
        const closedMessage = JSON.stringify({
          type: "room:closed",
          hostName,
          message: `${hostName} closed the room.`,
        });
        for (const connectedSocket of this.state.getWebSockets()) {
          if (connectedSocket === socket) continue;
          try {
            connectedSocket.send(closedMessage);
            connectedSocket.close(1000, "Host closed the room");
          } catch {}
        }
        await this.state.storage.delete("room");
        socket.close(code, reason);
        return;
      }
      const player = room.players.find((candidate) => candidate.id === playerId);
      if (player && !stillConnected) {
        const wasConnected = player.connected;
        const leavingIndex = room.players.findIndex(
          (candidate) => candidate.id === playerId,
        );
        const wasCurrentPlayer =
          room.game?.currentPlayerIndex === leavingIndex;

        room.players.splice(leavingIndex, 1);

        if (room.game) {
          delete room.game.hands[playerId];
          room.game.playerCount = room.players.length;

          if (room.players.length === 1 && room.status === "playing") {
            room.status = "finished";
            room.winnerId = room.players[0].id;
            room.game.currentPlayerIndex = 0;
          } else if (room.players.length > 0) {
            if (leavingIndex < room.game.currentPlayerIndex) {
              room.game.currentPlayerIndex -= 1;
            } else if (wasCurrentPlayer) {
              room.game.currentPlayerIndex =
                room.game.direction === 1
                  ? leavingIndex % room.players.length
                  : (leavingIndex - 1 + room.players.length) %
                    room.players.length;
            }
          }
        }

        if (wasConnected) {
          const leftMessage = JSON.stringify({
            type: "player:left",
            playerId: player.id,
            playerName: player.name,
            message: `${player.name} left the room.`,
          });
          for (const connectedSocket of this.state.getWebSockets()) {
            if (connectedSocket === socket) continue;
            try {
              connectedSocket.send(leftMessage);
            } catch {}
          }
        }
      }
      await this.saveRoom(room);
      await this.broadcast(room);
    }
    socket.close(code, reason);
  }
}

export default {
  async fetch() {
    return new Response("Not found.", { status: 404 });
  },
};
