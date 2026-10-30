import { forwardRef, useEffect, useState } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  storageKey?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(function TextArea({
  className = "",
  storageKey,
  ...props
}, ref) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined" || !storageKey) {
      return "";
    }

    return localStorage.getItem(storageKey) ?? "";
  });

  useEffect(() => {
    if (!storageKey) return;

    localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return (
    <textarea
      ref={ref}
      value={storageKey ? value : props.value}
      onChange={(event) => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
      className={`
        block
        w-full
        min-h-20
        px-2
        py-1
        bg-white
        border
        border-gray-300
        overflow-auto
        rounded-md
        ${className}
        `}
      {...props}
    />
  );
});
