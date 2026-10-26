import { useCallback, useEffect, useRef, useState } from "react";

export type NoteType = "teacher" | "student";

type NoteUpdate = {
  type: "note:update";
  noteType: NoteType;
  content: string;
  updatedAt?: number;
};

type ConnectionState = "connecting" | "connected" | "disconnected";

export function useNotesRealtime(
  studentId: string | undefined,
  role: NoteType | undefined,
  onRemoteUpdate: (noteType: NoteType, content: string) => void,
) {
  const socketRef = useRef<WebSocket | null>(null);
  const callbackRef = useRef(onRemoteUpdate);
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

    const connect = () => {
      if (disposed) return;

      setConnectionState("connecting");
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const socket = new WebSocket(
        `${protocol}//${window.location.host}/api/notes-live?studentId=${encodeURIComponent(studentId)}`,
      );
      socketRef.current = socket;

      socket.addEventListener("open", () => {
        if (!disposed) setConnectionState("connected");
      });

      socket.addEventListener("message", (event) => {
        try {
          const update = JSON.parse(event.data) as NoteUpdate;
          if (
            update.type === "note:update" &&
            (update.noteType === "teacher" || update.noteType === "student") &&
            typeof update.content === "string"
          ) {
            callbackRef.current(update.noteType, update.content);
          }
        } catch {
          // Ignore malformed real-time messages.
        }
      });

      socket.addEventListener("close", () => {
        if (socketRef.current === socket) socketRef.current = null;
        if (disposed) return;

        setConnectionState("disconnected");
        reconnectTimer = window.setTimeout(connect, 2000);
      });

      socket.addEventListener("error", () => socket.close());
    };

    connect();

    return () => {
      disposed = true;
      if (reconnectTimer) window.clearTimeout(reconnectTimer);
      socketRef.current?.close(1000, "Page changed");
      socketRef.current = null;
    };
  }, [role, studentId]);

  const sendNote = useCallback(
    (noteType: NoteType, content: string) => {
      const canEditNote =
        role === "teacher" || (role === "student" && noteType === "student");

      if (!canEditNote || socketRef.current?.readyState !== WebSocket.OPEN) {
        return;
      }

      socketRef.current.send(
        JSON.stringify({
          type: "note:update",
          noteType,
          content,
          updatedAt: Date.now(),
        } satisfies NoteUpdate),
      );
    },
    [role],
  );

  return { connectionState, sendNote };
}
