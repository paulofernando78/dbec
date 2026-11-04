import { useEffect, useRef, useState } from "react";
import { Copy, LogIn, LogOut, Plus, RefreshCw, Users, X } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AccountSummary } from "@/components/layout/AccountSummary";

type Color = "red" | "yellow" | "green" | "blue" | "wild";
type UnoCard = { id: string; color: Color; value: string };
type Player = {
  id: string;
  name: string;
  role: "teacher" | "student";
  connected: boolean;
  cardCount: number;
  isCurrent: boolean;
};
type RoomState = {
  type: "room:state";
  status: "lobby" | "playing" | "finished";
  hostId: string;
  winnerId: string | null;
  players: Player[];
  game: null | {
    hand: UnoCard[];
    topCard: UnoCard;
    currentColor: Exclude<Color, "wild">;
    currentPlayerId: string;
    direction: 1 | -1;
    drawCount: number;
  };
};
type Session = {
  username: string;
  displayName: string;
  role: "teacher" | "student";
  studentId?: string;
};

const colorStyles: Record<Color, string> = {
  red: "bg-red-600",
  yellow: "bg-yellow-400 text-slate-950",
  green: "bg-green-600",
  blue: "bg-blue-600",
  wild: "bg-[conic-gradient(#dc2626_0_25%,#eab308_0_50%,#16a34a_0_75%,#2563eb_0)]",
};

const cardLabel = (value: string) =>
  ({ skip: "⊘", reverse: "↻", draw2: "+2", wild: "WILD", wild4: "+4" })[value] ?? value;

function PlayingCard({ card, disabled, onClick }: { card: UnoCard; disabled?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={`${card.color} ${card.value}`}
      className={`relative h-32 w-20 shrink-0 rounded-xl border-4 border-white p-1 text-white shadow-lg transition enabled:hover:-translate-y-3 enabled:hover:rotate-1 disabled:cursor-not-allowed disabled:opacity-55 ${colorStyles[card.color]}`}
    >
      <span className="absolute left-1.5 top-0.5 text-sm font-black">{cardLabel(card.value)}</span>
      <span className="grid h-full place-items-center rounded-[50%] bg-white/90 px-1 text-center text-2xl font-black italic text-slate-900 shadow-inner">
        {cardLabel(card.value)}
      </span>
      <span className="absolute bottom-0.5 right-1.5 rotate-180 text-sm font-black">{cardLabel(card.value)}</span>
    </button>
  );
}

export default function Uno() {
  const navigate = useNavigate();
  const socketRef = useRef<WebSocket | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [roomCode, setRoomCode] = useState(() =>
    typeof window === "undefined"
      ? ""
      : new URLSearchParams(window.location.search).get("room") ?? "",
  );
  const [room, setRoom] = useState<RoomState | null>(null);
  const [connection, setConnection] = useState<"idle" | "connecting" | "connected">("idle");
  const [error, setError] = useState("");
  const [wildCard, setWildCard] = useState<UnoCard | null>(null);
  const [isRoomClosed, setIsRoomClosed] = useState(false);
  const [playerNotice, setPlayerNotice] = useState("");
  const [isExitConfirmOpen, setIsExitConfirmOpen] = useState(false);

  useEffect(() => {
    fetch("/api/session")
      .then((response) => response.ok ? response.json() : null)
      .then(setSession)
      .catch(() => setError("Sign in to play UNO."));
    return () => socketRef.current?.close();
  }, []);

  useEffect(() => {
    if (!playerNotice) return;
    const timer = window.setTimeout(() => setPlayerNotice(""), 5_000);
    return () => window.clearTimeout(timer);
  }, [playerNotice]);

  const myId = session?.role === "teacher" ? `teacher:${session.username}` : `student:${session?.studentId}`;
  const isHost = room?.hostId === myId;
  const isMyTurn = room?.game?.currentPlayerId === myId;
  const connectedPlayerCount = room?.players.filter((player) => player.connected).length ?? 0;

  const connect = (code: string) => {
    const normalizedCode = code.trim().toUpperCase();
    if (!/^[A-Z2-9]{5}$/.test(normalizedCode)) {
      setError("Enter a valid five-character room code.");
      return;
    }
    socketRef.current?.close();
    setError("");
    setRoom(null);
    setIsRoomClosed(false);
    setRoomCode(normalizedCode);
    setConnection("connecting");
    history.replaceState(null, "", `/games/uno?room=${normalizedCode}`);
    const protocol = location.protocol === "https:" ? "wss:" : "ws:";
    const socket = new WebSocket(`${protocol}//${location.host}/api/uno-live?room=${normalizedCode}`);
    socketRef.current = socket;
    socket.addEventListener("open", () => setConnection("connected"));
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "room:state") setRoom(message);
      if (message.type === "error") setError(message.error);
      if (message.type === "room:closed") {
        setIsRoomClosed(true);
        setConnection("idle");
      }
      if (
        message.type === "player:left" &&
        typeof message.playerName === "string"
      ) {
        setPlayerNotice(`${message.playerName} left the room.`);
      }
    });
    socket.addEventListener("close", (event) => {
      if (socketRef.current !== socket) return;
      setConnection("idle");
      if (!event.wasClean) setError("Unable to join the room. Check the code and try again.");
    });
    socket.addEventListener("error", () => socket.close());
  };

  const createRoom = async () => {
    setError("");
    const response = await fetch("/api/uno", { method: "POST" });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error ?? "The room could not be created.");
      return;
    }
    connect(result.code);
  };

  const send = (message: object) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) socketRef.current.send(JSON.stringify(message));
  };

  const playCard = (card: UnoCard) => {
    if (card.color === "wild") setWildCard(card);
    else send({ type: "card:play", cardId: card.id });
  };

  const canPlay = (card: UnoCard) => {
    if (!room?.game || !isMyTurn) return false;
    if (card.value === "wild") return true;
    if (card.value === "wild4") return !room.game.hand.some((candidate) => candidate.id !== card.id && candidate.color === room.game?.currentColor);
    return card.color === room.game.currentColor || card.value === room.game.topCard.value;
  };

  const closeGame = () => {
    socketRef.current?.close(1000, "Game closed");
    navigate(
      session?.role === "teacher"
        ? "/teacher/dashboard"
        : session?.studentId
          ? `/dashboard/${encodeURIComponent(session.studentId)}`
          : "/",
    );
  };

  return (
    <div
      className="fixed inset-0 z-100 overflow-y-auto bg-(--background) text-(--text-color)"
      role="dialog"
      aria-modal="true"
      aria-label="UNO online game"
    >
      <div className="mx-auto min-h-full w-full max-w-7xl p-4 sm:p-6">
        <header className="mb-4 flex items-center justify-between rounded-xl bg-(--surface) p-4 shadow-sm">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Online classroom game
            </p>
            <h1 className="text-4xl font-black">UNO</h1>
          </div>
          <Button
            ariaLabel="Close UNO"
            icon={<X />}
            onClick={() => setIsExitConfirmOpen(true)}
            className="size-11! p-1!"
          />
        </header>
        {session && (
          <div className="mb-4 rounded-xl bg-(--surface) p-4 shadow-sm">
            <AccountSummary
              name={session.displayName}
              subtitle={session.role === "student" ? "Full access" : "Teacher"}
            />
          </div>
        )}
      {!room ? (
        <Card title="Online classroom game" className="mx-auto max-w-xl bg-(--surface)">
          <p className="mb-5 text-slate-500">Create a room and share its code. Each player should open this page on their own device.</p>
          {session && (
            <Button onClick={() => void createRoom()} icon={<Plus />} className="mb-5 w-full!">Create room</Button>
          )}
          <div className="flex gap-2">
            <input
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value.toUpperCase().replace(/[^A-Z2-9]/g, "").slice(0, 5))}
              onKeyDown={(event) => event.key === "Enter" && connect(roomCode)}
              placeholder="ROOM CODE"
              aria-label="Room code"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-center text-xl font-black uppercase tracking-[0.3em] text-slate-900"
            />
            <Button onClick={() => connect(roomCode)} icon={<LogIn />}>Join</Button>
          </div>
          {connection === "connecting" && <p className="mt-3 text-sm text-slate-500">Connecting…</p>}
          {error && <p className="mt-3 font-semibold text-red-600">{error}</p>}
        </Card>
      ) : (
        <div className="space-y-4">
          <Card className="bg-(--surface)">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase text-slate-400">Room</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black tracking-[0.2em]">{roomCode}</span>
                  <Button ariaLabel="Copy room code" icon={<Copy />} onClick={() => void navigator.clipboard.writeText(roomCode)} className="size-9! p-1!" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold"><Users className="size-4" /> {room.players.length} players · {connection}</div>
              {isHost && room.status === "lobby" && <Button disabled={connectedPlayerCount < 2} onClick={() => send({ type: "game:start" })}>Start game</Button>}
              {isHost && room.status === "finished" && <Button icon={<RefreshCw />} onClick={() => send({ type: "game:restart" })}>Play again</Button>}
            </div>
          </Card>

          <div className="grid gap-4 lg:grid-cols-[15rem_1fr]">
            <Card title="Players" className="bg-(--surface)">
              <ul className="space-y-2">
                {room.players.map((player) => (
                  <li key={player.id} className={`rounded-lg p-2 ${player.isCurrent ? "bg-amber-100 text-slate-900 ring-2 ring-amber-400" : "bg-(--background)"}`}>
                    <div className="flex items-center justify-between gap-2"><span className="font-bold">{player.name}{player.id === myId ? " (you)" : ""}</span><span className={`size-2 rounded-full ${player.connected ? "bg-green-500" : "bg-slate-300"}`} /></div>
                    <span className="text-xs text-slate-500">{player.cardCount} cards{player.cardCount === 1 ? " · UNO!" : ""}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card
              title={
                room.status === "lobby" ? "Waiting for players" :
                room.status === "finished" ? "Game over" :
                isMyTurn ? <span className="uno-turn-attention">Your turn</span> :
                `${room.players.find((player) => player.isCurrent)?.name ?? "Player"}'s turn`
              }
              className="flex min-h-[28rem] flex-col bg-emerald-800 text-white"
            >
              {room.status === "lobby" && <div className="grid min-h-80 place-items-center text-center"><div><Users className="mx-auto mb-3 size-12" /><p className="text-xl font-bold">Share code {roomCode}</p><p className="mt-2 text-emerald-100">The host can start with two or more players.</p></div></div>}
              {room.game && (
                <>
                  <div className="flex min-h-52 items-center justify-center gap-8">
                    <button type="button" disabled={!isMyTurn || room.status !== "playing"} onClick={() => send({ type: "card:draw" })} className="grid h-32 w-20 place-items-center rounded-xl border-4 border-white bg-slate-900 text-2xl font-black shadow-xl disabled:opacity-60">UNO</button>
                    <div className="relative">
                      <PlayingCard card={room.game.topCard} disabled />
                      {room.game.topCard.color === "wild" && <span className={`absolute -bottom-3 left-1/2 h-5 w-12 -translate-x-1/2 rounded-full border-2 border-white ${colorStyles[room.game.currentColor]}`} />}
                    </div>
                  </div>
                  <div className="mt-5 flex gap-2 overflow-x-auto px-2 pb-4 pt-4">
                    {room.game.hand.map((card) => <PlayingCard key={card.id} card={card} disabled={room.status !== "playing" || !canPlay(card)} onClick={() => playCard(card)} />)}
                  </div>
                </>
              )}
              {room.status === "finished" && <div className="mt-auto rounded-xl bg-white/15 p-5 text-center text-2xl font-black">{room.players.find((player) => player.id === room.winnerId)?.name} wins! 🎉</div>}
              {error && <p className="mt-3 rounded-lg bg-red-950/60 p-3 font-semibold text-white">{error}</p>}
            </Card>
          </div>
        </div>
      )}

      {wildCard && (
        <div className="fixed inset-0 z-110 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label="Choose a color">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center text-slate-900 shadow-2xl">
            <h2 className="text-2xl font-black">Choose a color</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {(["red", "yellow", "green", "blue"] as const).map((color) => <button key={color} type="button" onClick={() => { send({ type: "card:play", cardId: wildCard.id, color }); setWildCard(null); }} className={`h-24 rounded-xl border-4 border-white font-black uppercase text-white shadow-lg ${colorStyles[color]}`}>{color}</button>)}
            </div>
            <Button onClick={() => setWildCard(null)} className="mt-4">Cancel</Button>
          </div>
        </div>
      )}
      {isRoomClosed && (
        <div
          className="fixed inset-0 z-120 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="uno-room-closed-title"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center text-slate-900 shadow-2xl">
            <div className="mx-auto grid size-14 place-items-center rounded-full bg-red-100 text-red-600">
              <X className="size-8" />
            </div>
            <h2 id="uno-room-closed-title" className="mt-4 text-2xl font-black">
              The host closed the room.
            </h2>
            <p className="mt-2 text-slate-500">
              This game is no longer available.
            </p>
            <Button onClick={closeGame} className="mt-6 w-full!">
              Return to dashboard
            </Button>
          </div>
        </div>
      )}
      {playerNotice && !isRoomClosed && (
        <div
          className="fixed bottom-6 left-1/2 z-120 w-[calc(100%_-_2rem)] max-w-md -translate-x-1/2 rounded-xl border border-amber-300 bg-slate-950 px-5 py-4 text-center font-bold text-white shadow-2xl"
          role="status"
          aria-live="polite"
        >
          {playerNotice}
        </div>
      )}
      {isExitConfirmOpen && !isRoomClosed && (
        <div
          className="fixed inset-0 z-120 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="uno-exit-confirm-title"
          aria-describedby="uno-exit-confirm-description"
        >
          <div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
            <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-red-50 text-red-600">
              <LogOut className="size-7" aria-hidden="true" />
            </div>
            <h2 id="uno-exit-confirm-title" className="mt-5 text-2xl font-black">
              Leave the room?
            </h2>
            <p id="uno-exit-confirm-description" className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
              {isHost
                ? "Leaving will close the room for every player."
                : "You will leave the game and your cards will be removed."}
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsExitConfirmOpen(false)}
                className="h-12 cursor-pointer rounded-xl border border-slate-300 bg-white px-4 font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-[0.98]"
              >
                Stay
              </button>
              <button
                type="button"
                onClick={closeGame}
                className="h-12 cursor-pointer rounded-xl bg-red-600 px-4 font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 active:scale-[0.98]"
              >
                {isHost ? "Close room" : "Leave room"}
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
