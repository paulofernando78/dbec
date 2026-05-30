import { type ReactNode, useState } from "react";

import { Button } from "@/components/ui/Button";

import { ScrollText } from "lucide-react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

export const Collapsible = ({ title, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Button
              icon={<ScrollText className="stroke-gray-400" />}
              onClick={toggleCollapsible}
            />
            <span className="block font-bold translate-y-1">{title}</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white p-3 border rounded-xl">{children}</div>
      )}
    </div>
  );
};
