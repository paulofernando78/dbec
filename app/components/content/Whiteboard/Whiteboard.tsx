
type WhiteboardProps = {
  title?: string;
  subtitle?: string;
  book?: string;
  lesson?: string;
  descriptions?: string[];
  description?: string;
};

export const Whiteboard = ({
  title,
  subtitle,
  book,
  lesson,
  descriptions,
  description,
}: WhiteboardProps) => {
  return (
    <div
      className="
        pt-3 pr-4 pb-3 pl-4
        mb-8
        text-[var(--text-color-fixed)]
        border-[7px]
        border-[var(--gray-4)]
        rounded-[var(--border-radius)]
      "
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <h2 className="text-2xl">{subtitle}</h2>}
      <span className="text-1xl">{description}</span>
    </div>
  );
};
