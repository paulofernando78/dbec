import { Children, Fragment, isValidElement, type ReactNode } from "react";

type CardProps = {
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
      p-4
      ${hasTrailingRadio ? "pb-[0.4rem]" : "pb-3"}
      text-gray-800
      border
      border-gray-300
      rounded-xl
      shadow-md shadow-gray-300
      ${maxContent ? "w-fit max-w-full" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
