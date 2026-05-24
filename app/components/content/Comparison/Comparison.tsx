import type {
  ReactNode,
  FC,
} from "react";

type ChildrenProps = {
  children: ReactNode;
};

type ComparisonComponent = FC<ChildrenProps> & {
  Item: FC<ChildrenProps>;
  Word: FC<ChildrenProps>;
};

export const Comparison: ComparisonComponent = ({
  children,
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

Comparison.Item = function ComparisonItem({
  children,
}) {
  return (
    <div>
      {children}
    </div>
  );
};

Comparison.Word = function ComparisonWord({
  children,
}) {
  return (
    <span>
      {children}
    </span>
  );
};