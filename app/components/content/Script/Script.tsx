import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/content/Paragraph";

import { Eye, EyeClosed } from "lucide-react";

interface CollapsibleProps {
  title?: string;
  content: {
    en: string | string[];
    pt: string | string[];
  }[];
}

export const Script = ({ title, content }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="mb-4">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Button
            variant="answer"
            icon={isOpen ? <EyeClosed /> : <Eye />}
            onClick={toggleCollapsible}
          >
            <span className="pr-[.14rem] font-bold text-yellow-800">
              Script
            </span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="h-100 overflow-scroll bg-white p-3 border rounded-xl">
          {content.map((line) => (
            <div
              key={Array.isArray(line.en) ? line.en.join("") : line.en}
              className="mb-4 last:mb-0"
            >
                <Paragraph
                  value={Array.isArray(line.en) ? line.en : [line.en]}
                />
                <p className="text-gray-500">{line.pt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
