import { useEffect, useRef } from "react";
import { Highlighter, Link, Underline } from "lucide-react";

import { Button } from "@/components/ui/Button";

type RichTextAreaProps = {
  value: string;
  readOnly?: boolean;
  onChange: (value: string) => void;
  onBlur: () => void;
};

const renderLegacyFormatting = (value: string) =>
  value
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, "<em>$1</em>")
    .replace(/\n/g, "<br>");

export function RichTextArea({
  value,
  readOnly = false,
  onChange,
  onBlur,
}: RichTextAreaProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const savedSelectionRef = useRef<Range | null>(null);

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor || document.activeElement === editor) return;

    const renderedValue = renderLegacyFormatting(value);
    if (editor.innerHTML !== renderedValue) editor.innerHTML = renderedValue;
  }, [value]);

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection?.rangeCount) {
      savedSelectionRef.current = selection.getRangeAt(0).cloneRange();
    }
  };

  const restoreSelection = () => {
    const selection = window.getSelection();
    const savedSelection = savedSelectionRef.current;
    if (!selection || !savedSelection) return;

    selection.removeAllRanges();
    selection.addRange(savedSelection);
  };

  const applyFormat = (
    command: "bold" | "italic" | "underline" | "foreColor" | "hiliteColor",
    commandValue?: string,
  ) => {
    const editor = editorRef.current;
    if (!editor || readOnly) return;

    editor.focus();
    restoreSelection();
    document.execCommand(command, false, commandValue);
    onChange(editor.innerHTML);
  };

  const addLink = () => {
    const editor = editorRef.current;
    if (!editor || readOnly) return;

    const url = window.prompt("Enter the link URL:", "https://");
    if (!url) return;

    editor.focus();
    restoreSelection();
    document.execCommand("createLink", false, url);
    onChange(editor.innerHTML);
  };

  return (
    <>
      <div className="mb-2 flex flex-wrap items-center gap-1" aria-label="Note formatting">
        <Button
          ariaLabel="Bold selected text"
          icon={<span className="font-black">B</span>}
          disabled={readOnly}
          onMouseDown={(event) => {
            event.preventDefault();
            saveSelection();
          }}
          onClick={() => applyFormat("bold")}
          className="size-8! p-[3px]!"
        />
        <Button
          ariaLabel="Italicize selected text"
          icon={
            <span className="font-bold italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              I
            </span>
          }
          disabled={readOnly}
          onMouseDown={(event) => {
            event.preventDefault();
            saveSelection();
          }}
          onClick={() => applyFormat("italic")}
          className="size-8! p-[3px]!"
        />
        <Button
          ariaLabel="Underline selected text"
          icon={<Underline />}
          disabled={readOnly}
          onMouseDown={(event) => {
            event.preventDefault();
            saveSelection();
          }}
          onClick={() => applyFormat("underline")}
          className="size-8! p-[3px]!"
        />
        <span className="mx-1 h-5 w-px bg-gray-300" aria-hidden="true" />
        <label className="relative block size-8" aria-label="Text color">
          <Button
            ariaLabel="Choose text color"
            icon={
              <span className="grid leading-none">
                <span className="font-bold">A</span>
                <span className="mt-0.5 h-0.5 w-4 bg-current" />
              </span>
            }
            disabled={readOnly}
            className="size-8! p-[3px]!"
          />
          <input
            type="color"
            defaultValue="#111827"
            disabled={readOnly}
            aria-label="Text color"
            onMouseDown={saveSelection}
            onChange={(event) => applyFormat("foreColor", event.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0 disabled:cursor-not-allowed"
          />
        </label>
        <label className="relative block size-8" aria-label="Highlight color">
          <Button
            ariaLabel="Choose highlight color"
            icon={<Highlighter />}
            disabled={readOnly}
            className="size-8! p-[3px]!"
          />
          <input
            type="color"
            defaultValue="#facc15"
            disabled={readOnly}
            aria-label="Highlight color"
            onMouseDown={saveSelection}
            onChange={(event) => applyFormat("hiliteColor", event.target.value)}
            className="absolute inset-0 cursor-pointer opacity-0 disabled:cursor-not-allowed"
          />
        </label>
        <span className="mx-1 h-5 w-px bg-gray-300" aria-hidden="true" />
        <Button
          ariaLabel="Add link to selected text"
          icon={<Link />}
          disabled={readOnly}
          onMouseDown={(event) => {
            event.preventDefault();
            saveSelection();
          }}
          onClick={addLink}
          className="size-8! p-[3px]!"
        />
      </div>
      <div
        ref={editorRef}
        role="textbox"
        aria-multiline="true"
        aria-readonly={readOnly}
        contentEditable={!readOnly}
        suppressContentEditableWarning
        lang="en"
        spellCheck={!readOnly}
        onInput={(event) => onChange(event.currentTarget.innerHTML)}
        onBlur={onBlur}
        onPaste={(event) => {
          event.preventDefault();
          document.execCommand(
            "insertText",
            false,
            event.clipboardData.getData("text/plain"),
          );
        }}
        className="min-h-60 w-full overflow-auto whitespace-pre-wrap rounded-md border border-gray-300 bg-white px-2 py-1 text-[var(--text-color)] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </>
  );
}
