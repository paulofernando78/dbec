import { useEffect, useRef, useState } from "react";
import { GripVertical, Highlighter, Link, Underline } from "lucide-react";

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

const textColors = [
  ["#111827", "Black"],
  ["#64748b", "Gray"],
  ["#dc2626", "Red"],
  ["#ea580c", "Orange"],
  ["#ca8a04", "Gold"],
  ["#16a34a", "Green"],
  ["#2563eb", "Blue"],
  ["#7c3aed", "Purple"],
  ["#db2777", "Pink"],
] as const;

const highlightColors = [
  ["#fef08a", "Yellow"],
  ["#fed7aa", "Orange"],
  ["#fecaca", "Red"],
  ["#bbf7d0", "Green"],
  ["#bfdbfe", "Blue"],
  ["#ddd6fe", "Purple"],
  ["#fbcfe8", "Pink"],
  ["#e5e7eb", "Gray"],
  ["transparent", "No highlight"],
] as const;

type NoteBlock = {
  id: string;
  html: string;
};

let noteBlockId = 0;

const createBlock = (html = ""): NoteBlock => ({
  id: `note-block-${noteBlockId++}`,
  html,
});

const parseBlocks = (value: string): NoteBlock[] => {
  const renderedValue = renderLegacyFormatting(value);
  const savedBlocks = Array.from(
    renderedValue.matchAll(/<div data-note-block="true">([\s\S]*?)<\/div>/g),
    (match) => createBlock(match[1] === "<br>" ? "" : match[1]),
  );

  if (savedBlocks.length) return savedBlocks;

  const legacyBlocks = renderedValue
    .split(/<br\s*\/?\s*>/i)
    .map((html) => createBlock(html));

  return legacyBlocks.length ? legacyBlocks : [createBlock()];
};

const serializeBlocks = (blocks: NoteBlock[]) =>
  blocks
    .map(
      (block) =>
        `<div data-note-block="true">${block.html || "<br>"}</div>`,
    )
    .join("");

export function RichTextArea({
  value,
  readOnly = false,
  onChange,
  onBlur,
}: RichTextAreaProps) {
  const editorAreaRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const activeBlockRef = useRef<HTMLDivElement | null>(null);
  const savedSelectionRef = useRef<Range | null>(null);
  const lastEmittedValueRef = useRef(value);
  const [blocks, setBlocks] = useState<NoteBlock[]>(() => parseBlocks(value));
  const [draggedBlockId, setDraggedBlockId] = useState<string | null>(null);
  const [dropTargetBlockId, setDropTargetBlockId] = useState<string | null>(null);
  const [openPalette, setOpenPalette] = useState<"text" | "highlight" | null>(null);

  useEffect(() => {
    if (
      value === lastEmittedValueRef.current ||
      editorAreaRef.current?.contains(document.activeElement)
    ) {
      return;
    }

    setBlocks(parseBlocks(value));
  }, [value]);

  useEffect(() => {
    blocks.forEach((block) => {
      const editor = blockRefs.current[block.id];
      if (!editor || editor === activeBlockRef.current) return;

      if (editor.innerHTML !== block.html) editor.innerHTML = block.html;
    });
  }, [blocks]);

  const blocksFromDom = () =>
    blocks.map((block) => ({
      ...block,
      html: blockRefs.current[block.id]?.innerHTML ?? block.html,
    }));

  const emitBlocks = (nextBlocks = blocksFromDom()) => {
    const serialized = serializeBlocks(nextBlocks);
    lastEmittedValueRef.current = serialized;
    onChange(serialized);
  };

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
    const editor = activeBlockRef.current;
    if (!editor || readOnly) return;

    editor.focus();
    restoreSelection();
    document.execCommand(command, false, commandValue);
    onChange(editor.innerHTML);
  };

  const addLink = () => {
    const editor = activeBlockRef.current;
    if (!editor || readOnly) return;

    const url = window.prompt("Enter the link URL:", "https://");
    if (!url) return;

    editor.focus();
    restoreSelection();
    document.execCommand("createLink", false, url);
    onChange(editor.innerHTML);
  };

  const colorPalette = (
    type: "text" | "highlight",
    colors: readonly (readonly [string, string])[],
  ) => (
    <div
      className="absolute left-0 top-full z-30 mt-1 grid w-40 grid-cols-5 place-items-center gap-1 rounded-lg border border-gray-300 bg-[var(--surface)] p-2 shadow-xl"
      role="group"
      aria-label={type === "text" ? "Text colors" : "Highlight colors"}
    >
      {colors.map(([color, label]) => (
        <button
          key={color}
          type="button"
          aria-label={label}
          title={label}
          onMouseDown={(event) => {
            event.preventDefault();
            applyFormat(type === "text" ? "foreColor" : "hiliteColor", color);
            setOpenPalette(null);
          }}
          className={`size-6 cursor-pointer rounded border border-black/20 shadow-sm hover:scale-110 ${
            color === "transparent"
              ? "bg-[linear-gradient(to_top_right,transparent_45%,#ef4444_47%,#ef4444_53%,transparent_55%)]"
              : ""
          }`}
          style={color === "transparent" ? undefined : { backgroundColor: color }}
        />
      ))}
    </div>
  );

  const addBlockAfter = (blockId: string) => {
    const currentBlocks = blocksFromDom();
    const currentIndex = currentBlocks.findIndex((block) => block.id === blockId);
    const nextBlock = createBlock();
    const nextBlocks = [...currentBlocks];
    nextBlocks.splice(currentIndex + 1, 0, nextBlock);
    setBlocks(nextBlocks);
    emitBlocks(nextBlocks);

    requestAnimationFrame(() => blockRefs.current[nextBlock.id]?.focus());
  };

  const removeEmptyBlock = (blockId: string) => {
    if (blocks.length === 1) return;

    const currentBlocks = blocksFromDom();
    const currentIndex = currentBlocks.findIndex((block) => block.id === blockId);
    const currentBlock = currentBlocks[currentIndex];
    if (currentBlock?.html && currentBlock.html !== "<br>") return;

    const previousBlock = currentBlocks[currentIndex - 1];
    const nextBlocks = currentBlocks.filter((block) => block.id !== blockId);
    setBlocks(nextBlocks);
    emitBlocks(nextBlocks);

    requestAnimationFrame(() => {
      const previousEditor = previousBlock
        ? blockRefs.current[previousBlock.id]
        : blockRefs.current[nextBlocks[0]?.id];
      previousEditor?.focus();
    });
  };

  const moveBlock = (targetBlockId: string) => {
    if (!draggedBlockId || draggedBlockId === targetBlockId) return;

    const currentBlocks = blocksFromDom();
    const fromIndex = currentBlocks.findIndex(
      (block) => block.id === draggedBlockId,
    );
    const targetIndex = currentBlocks.findIndex(
      (block) => block.id === targetBlockId,
    );
    if (fromIndex < 0 || targetIndex < 0) return;

    const nextBlocks = [...currentBlocks];
    const [movedBlock] = nextBlocks.splice(fromIndex, 1);
    nextBlocks.splice(targetIndex, 0, movedBlock);
    setBlocks(nextBlocks);
    setDraggedBlockId(null);
    setDropTargetBlockId(null);
    emitBlocks(nextBlocks);
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
        <div className="relative size-8">
          <Button
            ariaLabel="Choose text color"
            icon={
              <span className="grid leading-none">
                <span className="font-bold">A</span>
                <span className="mt-0.5 h-0.5 w-4 bg-current" />
              </span>
            }
            disabled={readOnly}
            pressed={openPalette === "text"}
            onMouseDown={(event) => {
              event.preventDefault();
              saveSelection();
            }}
            onClick={() => setOpenPalette((current) => current === "text" ? null : "text")}
            className="size-8! p-[3px]!"
          />
          {openPalette === "text" && colorPalette("text", textColors)}
        </div>
        <div className="relative size-8">
          <Button
            ariaLabel="Choose highlight color"
            icon={<Highlighter />}
            disabled={readOnly}
            pressed={openPalette === "highlight"}
            onMouseDown={(event) => {
              event.preventDefault();
              saveSelection();
            }}
            onClick={() =>
              setOpenPalette((current) => current === "highlight" ? null : "highlight")
            }
            className="size-8! p-[3px]!"
          />
          {openPalette === "highlight" &&
            colorPalette("highlight", highlightColors)}
        </div>
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
        ref={editorAreaRef}
        className="min-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white px-1 py-2 text-[var(--text-color)] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
      >
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`group relative flex min-h-7 items-start rounded px-1 transition-colors ${
              draggedBlockId === block.id ? "opacity-45" : "hover:bg-slate-50"
            }`}
            onDragOver={(event) => {
              event.preventDefault();
              setDropTargetBlockId(block.id);
            }}
            onDragLeave={() =>
              setDropTargetBlockId((current) =>
                current === block.id ? null : current,
              )
            }
            onDrop={() => moveBlock(block.id)}
          >
            {!readOnly && (
              <button
                type="button"
                draggable
                aria-label="Drag note block"
                title="Drag to move block"
                onDragStart={() => {
                  setDraggedBlockId(block.id);
                  activeBlockRef.current = blockRefs.current[block.id];
                }}
                onDragEnd={() => {
                  setDraggedBlockId(null);
                  setDropTargetBlockId(null);
                }}
                className="mt-0.5 grid size-6 shrink-0 cursor-grab place-items-center rounded text-slate-400 opacity-0 transition-opacity hover:bg-slate-200 hover:text-slate-600 active:cursor-grabbing group-hover:opacity-100 focus:opacity-100"
              >
                <GripVertical className="size-4" />
              </button>
            )}
            <div
              ref={(element) => {
                blockRefs.current[block.id] = element;
              }}
              role="textbox"
              aria-multiline="true"
              aria-readonly={readOnly}
              contentEditable={!readOnly}
              suppressContentEditableWarning
              lang="en"
              spellCheck={!readOnly}
              onFocus={(event) => {
                activeBlockRef.current = event.currentTarget;
                setOpenPalette(null);
              }}
              onInput={(event) => {
                const html = event.currentTarget.innerHTML;
                setBlocks((current) =>
                  current.map((currentBlock) =>
                    currentBlock.id === block.id
                      ? { ...currentBlock, html }
                      : currentBlock,
                  ),
                );
                emitBlocks(
                  blocksFromDom().map((currentBlock) =>
                    currentBlock.id === block.id
                      ? { ...currentBlock, html }
                      : currentBlock,
                  ),
                );
              }}
              onBlur={(event) => {
                if (!editorAreaRef.current?.contains(event.relatedTarget)) onBlur();
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  addBlockAfter(block.id);
                }
                if (event.key === "Backspace" && !event.currentTarget.textContent) {
                  event.preventDefault();
                  removeEmptyBlock(block.id);
                }
              }}
              onPaste={(event) => {
                event.preventDefault();
                document.execCommand(
                  "insertText",
                  false,
                  event.clipboardData.getData("text/plain"),
                );
              }}
              className="min-h-7 min-w-0 flex-1 whitespace-pre-wrap px-1 py-0.5 outline-none"
            />
            {draggedBlockId && dropTargetBlockId === block.id && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-blue-500"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
