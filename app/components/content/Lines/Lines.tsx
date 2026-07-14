import { Line } from "@/components/content/Line";

import { type InlineRichContentValue } from "@/components/content/InlineRichContent";

type LineItem =
  | InlineRichContentValue[]
  | {
      type: "spacer";
    };

type LinesProps = {
  value?: LineItem[];
  as?: "p" | "span";
};

export const Lines = ({ value = [], as }: LinesProps) => {
  return (
    <>
      {value.map((line, index) => {
        if (Array.isArray(line)) {
          return <Line key={index} as={as} value={line} />;
        }

        if (line.type === "spacer") {
          return <div key={index} className="h-4" />;
        }

        return null;
      })}
    </>
  );
};
