import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, Send, X } from "lucide-react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/Button";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const welcomeMessage: ChatMessage = {
  role: "model",
  text: "Hello! I’m your AI English tutor. Send me a sentence to check, ask about a word, or practice a conversation.",
};

export function AiTutor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

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
    } catch (requestError) {
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
    <>
      <div className="mb-2 flex items-center gap-2">
        <Button
          ariaLabel="Open AI Tutor"
          pressed={isOpen}
          icon={<Bot />}
          onClick={() => setIsOpen(true)}
          className="size-10! p-0.75!"
        />
        <span className="font-bold uppercase">AI Tutor</span>
      </div>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]"
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsOpen(false);
            }}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="ai-tutor-title"
              className="flex h-[min(78vh,720px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-[var(--surface)] text-[var(--text-color)] shadow-2xl ring-1 ring-slate-300"
            >
              <header className="flex items-center gap-3 border-b border-slate-200 p-4 dark:border-slate-700">
                <div className="grid size-10 place-items-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  <Bot className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 id="ai-tutor-title" className="font-black uppercase">
                    AI English Tutor
                  </h2>
                  <p className="text-xs text-slate-500">Corrections, meanings and conversation practice</p>
                </div>
                <Button
                  ariaLabel="Close AI Tutor"
                  icon={<X />}
                  onClick={() => setIsOpen(false)}
                  className="size-10! p-0.75!"
                />
              </header>

              <div ref={messagesRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "rounded-br-md bg-blue-600 text-white"
                          : "rounded-bl-md bg-[var(--background)]"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isSending && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-md bg-[var(--background)] px-4 py-3 text-sm text-slate-500">
                      Thinking…
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={sendMessage} className="border-t border-slate-200 p-3 dark:border-slate-700">
                {error && (
                  <p role="alert" className="mb-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
                    {error}
                  </p>
                )}
                <div className="flex items-end gap-2">
                  <textarea
                    ref={inputRef}
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
                    className="max-h-32 min-h-13 flex-1 resize-y rounded-xl border border-slate-300 bg-[var(--background)] px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
          </div>,
          document.body,
        )}
    </>
  );
}
