import { useCallback, useEffect, useRef, useState } from "react";

export type NoteType = "teacher" | "student";

type NoteUpdate = {
  type: "note:update";
  noteType: NoteType;
  content: string;
  updatedAt?: number;
};

type ConnectionState =
  | "connecting"
  | "connected"
  | "polling"
  | "disconnected";

type NotesResponse = {
  notes?: Partial<Record<NoteType, string>>;
};

export function useNotesRealtime(
  studentId: string | undefined,
  role: NoteType | undefined,
  onRemoteUpdate: (noteType: NoteType, content: string) => void,
) {
  const socketRef = useRef<WebSocket | null>(null);
  const callbackRef = useRef(onRemoteUpdate);
  const saveTimersRef = useRef<Partial<Record<NoteType, number>>>({});
  const pendingNotesRef = useRef<Partial<Record<NoteType, string>>>({});
  const lastReceivedRef = useRef<Partial<Record<NoteType, string>>>({});
  const lastLocalEditRef = useRef<Partial<Record<NoteType, number>>>({});
  const [connectionState, setConnectionState] =
    useState<ConnectionState>("disconnected");

  useEffect(() => {
    callbackRef.current = onRemoteUpdate;
  }, [onRemoteUpdate]);

  useEffect(() => {
    if (!studentId || !role) {
      setConnectionState("disconnected");
      return;
    }

    let disposed = false;
    let reconnectTimer: number | undefined;
    let pollingTimer: number | undefined;

    const stopPolling = () => {
      if (pollingTimer) window.clearInterval(pollingTimer);
      pollingTimer = undefined;
    };

    const pollNotes = async () => {
      try {
        const response = await fetch(
          `/api/dashboard?studentId=${encodeURIComponent(studentId)}`,
          { headers: { Accept: "application/json" } },
        );
        if (!response.ok) return;

        const result = (await response.json()) as NotesResponse;
        for (const noteType of ["teacher", "student"] as const) {
          const content = result.notes?.[noteType];
          const wasRecentlyEdited =
            Date.now() - (lastLocalEditRef.current[noteType] ?? 0) < 2_500;
          if (
            typeof content === "string" &&
            !wasRecentlyEdited &&
            pendingNotesRef.current[noteType] === undefined &&
            lastReceivedRef.current[noteType] !== content
          ) {
            lastReceivedRef.current[noteType] = content;
            callbackRef.current(noteType, content);
          }
        }
      } catch {
        // The next poll or WebSocket reconnect will retry the sync.
      }
    };

    const startPolling = (interval = 1_500) => {
      if (disposed || pollingTimer) return;
      void pollNotes();
      pollingTimer = window.setInterval(() => void pollNotes(), interval);
    };

    const connect = () => {
      if (disposed) return;

      if (!pollingTimer) setConnectionState("connecting");
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const socket = new WebSocket(
        `${protocol}//${window.location.host}/api/notes-live?studentId=${encodeURIComponent(studentId)}`,
      );
      socketRef.current = socket;

      socket.addEventListener("open", () => {
        if (!disposed) {
          stopPolling();
          // WebSocket updates are immediate. This slower reconciliation catches
          // a message lost during a proxy/network transition without requiring
          // the user to refresh the page.
          startPolling(10_000);
          setConnectionState("connected");
        }
      });

      socket.addEventListener("message", (event) => {
        try {
          const update = JSON.parse(event.data) as NoteUpdate;
          if (
            update.type === "note:update" &&
            (update.noteType === "teacher" || update.noteType === "student") &&
            typeof update.content === "string"
          ) {
            lastReceivedRef.current[update.noteType] = update.content;
            callbackRef.current(update.noteType, update.content);
          }
        } catch {
          // Ignore malformed real-time messages.
        }
      });

      socket.addEventListener("close", () => {
        if (socketRef.current === socket) socketRef.current = null;
        if (disposed) return;

        stopPolling();
        setConnectionState("polling");
        startPolling();
        reconnectTimer = window.setTimeout(connect, 2000);
      });

      socket.addEventListener("error", () => socket.close());
    };

    connect();

    return () => {
      disposed = true;
      if (reconnectTimer) window.clearTimeout(reconnectTimer);
      stopPolling();
      socketRef.current?.close(1000, "Page changed");
      socketRef.current = null;
    };
  }, [role, studentId]);

  const sendNote = useCallback(
    (noteType: NoteType, content: string) => {
      const canEditNote =
        role === "teacher" || (role === "student" && noteType === "student");

      if (canEditNote && socketRef.current?.readyState === WebSocket.OPEN) {
        socketRef.current.send(
          JSON.stringify({
            type: "note:update",
            noteType,
            content,
            updatedAt: Date.now(),
          } satisfies NoteUpdate),
        );
      }

      if (!canEditNote || !studentId) return;

      lastLocalEditRef.current[noteType] = Date.now();
      pendingNotesRef.current[noteType] = content;
      const currentTimer = saveTimersRef.current[noteType];
      if (currentTimer) window.clearTimeout(currentTimer);

      saveTimersRef.current[noteType] = window.setTimeout(async () => {
        try {
          const response = await fetch("/api/notes", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ studentId, noteType, content }),
          });

          if (response.ok && pendingNotesRef.current[noteType] === content) {
            lastReceivedRef.current[noteType] = content;
            delete pendingNotesRef.current[noteType];
          }
        } catch {
          // The existing blur save remains a final retry for network failures.
        } finally {
          if (pendingNotesRef.current[noteType] === content) {
            delete pendingNotesRef.current[noteType];
          }
          delete saveTimersRef.current[noteType];
        }
      }, 400);
    },
    [role, studentId],
  );

  useEffect(
    () => () => {
      for (const timer of Object.values(saveTimersRef.current)) {
        if (timer) window.clearTimeout(timer);
      }
    },
    [],
  );

  return { connectionState, sendNote };
}
