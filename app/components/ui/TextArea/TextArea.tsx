import { useEffect, useState } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  storageKey?: string;
};

export const TextArea = ({
  className = "",
  storageKey,
  ...props
}: TextareaProps) => {
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
      value={storageKey ? value : props.value}
      onChange={(event) => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
      className={`
        block
        w-full
        min-h-20
        mb-2
        p-2
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
};
