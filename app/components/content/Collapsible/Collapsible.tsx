import { useId, useState } from "react";

import { Button } from "@/components/ui/Button";

import { ScrollText } from "lucide-react";

interface CollapsibleProps {
  title?: string;
  content: {
    en: string;
    pt: string;
  }[];
}

export const Collapsible = ({ title, content }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  const toggleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Button
            icon={isOpen ? "Hide" : "Show"}
            onClick={toggleCollapsible}
            aria-expanded={isOpen}
            aria-controls={contentId}
          />
          {title && <span className="block font-bold translate-y-1">{title}</span>}
        </div>
      </div>
      <div
        id={contentId}
        className="smooth-collapse"
        data-open={isOpen}
        aria-hidden={!isOpen}
      >
        <div className="smooth-collapse__inner">
          <div className="bg-white p-3 border rounded-xl">
            {content.map((line) => (
              <div key={line.en} className="mb-4 last:mb-0">
                <p>{line.en}</p>
                <p className="text-gray-500">{line.pt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
