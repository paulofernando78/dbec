import { Children, Fragment, isValidElement, type ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  maxContent?: boolean;
};

const getLastChild = (children: ReactNode): ReactNode => {
  const lastChild = Children.toArray(children).at(-1);

  if (
    isValidElement<{ children?: ReactNode }>(lastChild) &&
    lastChild.type === Fragment
  ) {
    return getLastChild(lastChild.props.children);
  }

  return lastChild;
};

export const Card = ({
  title,
  children,
  maxContent = false,
  className,
}: CardProps) => {
  const lastChild = getLastChild(children);
  const lastChildType = isValidElement(lastChild) ? lastChild.type : undefined;
  const hasTrailingRadio =
    (typeof lastChildType === "function" ||
      (typeof lastChildType === "object" && lastChildType !== null)) &&
    "compactCardBottom" in lastChildType &&
    lastChildType.compactCardBottom === true;

  return (
    <div
      className={`
      w-full
      p-4
      min-w-0
      max-w-full
      text-gray-800
      border
      border-gray-300
      rounded-xl
      shadows
      ${maxContent ? "w-fit max-w-full" : ""} ${className}`}
    >
      {title && <h2 className="mb-4 text-lg font-bold">{title}</h2>}
      {children}
    </div>
  );
};
