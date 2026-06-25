type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const TextArea = ({ className = "", ...props }: TextareaProps) => {
  return (
    <textarea
      className={`
        block
        w-full
        min-h-20
        mb-4
        p-2
        overflow-auto
        border
        border-gray-300
        rounded-md
        ${className}
        `}
      {...props}
    />
  );
};
