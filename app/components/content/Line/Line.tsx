import {
  InlineRichContent,
  type InlineRichContentValue,
} from "@/components/content/InlineRichContent";

type LineProps = {
  as?: "div" | "p" | "span";
  value?: InlineRichContentValue[];
};

export const Line = ({ as: Component = "div", value = [] }: LineProps) => {
  return (
    <Component>
      <InlineRichContent value={value} />
    </Component>
  );
};
