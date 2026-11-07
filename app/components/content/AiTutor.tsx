import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, Send } from "lucide-react";

import { Button } from "@/components/ui/Button";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const welcomeMessage: ChatMessage = {
  role: "model",
  text: "Hello! Send me a sentence to check, ask about a word, or practice a conversation.",
};

export function AiTutor() {
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isSending]);

  const sendMessage = async (event?: FormEvent) => {
    event?.preventDefault();
    const text = draft.trim();
    if (!text || isSending) return;

    const nextMessages = [...messages, { role: "user" as const, text }];
    setMessages(nextMessages);
    setDraft("");
    setError("");
    setNotice("");
    setIsSending(true);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error ?? "The tutor could not answer right now.");
      }
      setMessages((current) => [
        ...current,
        { role: "model", text: result.message },
      ]);
      setNotice(result.fallbackNotice ?? "");
    } catch (requestError) {
      setMessages(messages);
      setDraft(text);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The tutor could not answer right now.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="ai-tutor"
      aria-labelledby="ai-tutor-title"
      className="mt-3 flex w-full scroll-mt-4 flex-col overflow-hidden rounded-xl bg-(--background) ring-1 ring-slate-200"
    >
      <header className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
        <div className="grid size-9 place-items-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          <Bot className="size-5" aria-hidden="true" />
        </div>
        <div>
          <h3 id="ai-tutor-title" className="font-black">AI English Tutor</h3>
          <p className="text-xs text-slate-500">Corrections, meanings and conversation practice</p>
        </div>
      </header>

      <div
        ref={messagesRef}
        className="max-h-52 min-h-24 space-y-3 overflow-y-auto px-4 py-3"
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm leading-6 ${
                message.role === "user"
                  ? "rounded-br-md bg-blue-600 text-white"
                  : "rounded-bl-md bg-(--surface)"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isSending && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-(--surface) px-4 py-2 text-sm text-slate-500">
              Thinking…
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={sendMessage}
        className="w-full border-t border-slate-200 bg-(--surface) p-3"
      >
        {error && (
          <p role="alert" className="mb-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
            {error}
          </p>
        )}
        {notice && (
          <p role="status" className="mb-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
            {notice}
          </p>
        )}
        <div className="flex w-full items-end gap-2">
          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value.slice(0, 2_000))}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage();
              }
            }}
            placeholder="Ask a question or write a sentence…"
            aria-label="Message to AI Tutor"
            rows={2}
            className="max-h-32 min-h-13 w-full flex-1 resize-y rounded-xl border border-slate-300 bg-(--background) px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          <Button
            type="submit"
            ariaLabel="Send message"
            icon={<Send />}
            disabled={!draft.trim() || isSending}
            className="size-12! p-1!"
          />
        </div>
        <p className="mt-2 text-center text-[0.68rem] text-slate-400">
          AI can make mistakes. Check important information with your teacher.
        </p>
      </form>
    </section>
  );
}
