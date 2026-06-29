import { useState } from "react";

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

  const toggleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Button
            icon="Show"
            onClick={toggleCollapsible}
          />
          {title && <span className="block font-bold translate-y-1">{title}</span>}
        </div>
      </div>
      {isOpen && (
        <div className="bg-white p-3 border rounded-xl">
          {content.map((line) => (
            <div key={line.en} className="mb-4 last:mb-0">
              <p>{line.en}</p>
              <p className="text-gray-500">{line.pt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
