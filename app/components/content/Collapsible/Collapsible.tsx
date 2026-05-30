import { ReactNode, useState } from "react";
import { Plus, Minus } from "lucide-react";

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
        className={`font-bold border rounded-lg px-3 pt-2 pb-[0.4rem] bg-gray-300 ${isOpen ? "rounded-b-none" : " rounded-t-lg"}`}
      >
        <div className="flex items-center gap-2" onClick={toggleCollapsible}>
          {isOpen ? <Minus strokeWidth={3} size={22}/> : <Plus strokeWidth={3}  size={22}/>}
          <button>{title}</button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white p-3 border rounded-b-xl">{children}</div>
      )}
    </div>
  );
};
