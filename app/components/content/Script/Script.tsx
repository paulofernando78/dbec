import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/content/Paragraph";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import type { RichContent } from "@/helpers/content";

import { Eye, EyeClosed } from "lucide-react";

interface CollapsibleProps {
  title?: string;
  content: {
    en: RichContent;
    pt: string;
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
        <div className="border rounded-lg overflow-hidden">
          <div className="h-100 overflow-scroll bg-white p-3 ">
            {/* <AudioPlayer src="" /> */}
            {content.map((line) => (
              <div key={line.pt} className="mb-4 last:mb-0">
                <Paragraph value={line.en} />
                <p className="text-gray-500">{line.pt}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
