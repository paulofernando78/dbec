import { type ReactNode, useState } from "react";
import { Plus, Minus, ScrollText } from "lucide-react";

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
      <div
        className={`font-bold border rounded-lg px-3 p-3 bg-gray-300 ${isOpen ? "rounded-b-none" : " rounded-t-lg"}`}
      >
        <div className="flex items-center justify-between gap-2" onClick={toggleCollapsible}>
          <div className="flex items-center gap-2">
            <ScrollText className="stroke-gray-400"/>
            <button>{title}</button>
          </div>
          {isOpen ? <Minus strokeWidth={3} size={22} className="stroke-gray-400"/> : <Plus strokeWidth={3}  size={22} className="stroke-gray-400"/>}
        </div>
      </div>
      {isOpen && (
        <div className="bg-white p-3 border rounded-b-xl">{children}</div>
      )}
    </div>
  );
};
