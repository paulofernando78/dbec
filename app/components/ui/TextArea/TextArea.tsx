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
