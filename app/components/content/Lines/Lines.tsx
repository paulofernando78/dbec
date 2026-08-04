import { Line } from "@/components/content/Line";

import type { RichContent } from "@/helpers/content";

type LineItem =
  | RichContent
  | {
      type: "spacer";
    };

type LinesProps = {
  value?: LineItem[];
  as?: "p" | "span";
};

export const Lines = ({ value = [], as}: LinesProps) => {
  return (
    <div className="mb-4">
      {value.map((line, index) => {
        if (Array.isArray(line)) {
          return <Line key={index} as={as} value={line} />;
        }

        if (line.type === "spacer") {
          return <div key={index} className="h-4" />;
        }

        return null;
      })}
    </div>
  );
};
